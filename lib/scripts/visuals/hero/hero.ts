import * as THREE from 'three';

import loader from '../../core/loader';
import { properties } from '../../core/properties';
import math from '../../utils/math';
import ease, { customEasing } from '../../utils/ease';
import { bn_sharedUniforms } from '../../utils/blueNoise/blueNoise';

import { HALF_SIZE, SIZE, TOTAL_TILES, SIZE_WITH_PADDING, TOTAL_TILES_WITH_PADDING, tiles } from '../../logic/board';

import vert from './hero.vert?raw';
import frag from './hero.frag?raw';
import fragDepth from './heroDepth.frag?raw';

import { floatingCubesDisplacement, floatingCubesRatio, successPushDownRatio, successRatio, successColorTowerRatio, towerRotationRatio } from '../../logic/successAnimationManager';
import { stopPushDownRatio, stopSpawnRatio } from '../../logic/stopAnimationManager';

import HeroBlockCoordinates from './HeroBlockCoordinates';
import { lightCameraHelperSignal, lightCameraUpdateSignal } from '../../logic/signals';

import { BufferGeometry, InstancedBufferAttribute, Texture } from 'three';
import { HeroSharedUniforms, HeroType } from '../../../types/hero';
import { log } from '../../utils/logger.ts';
import { failAnimation, stateManager as sM, tower } from '../../modules.ts';

export const Hero = () => {
	const TOTAL_BLOCKS = 2 * TOTAL_TILES;
	const _v2_0 = new THREE.Vector2();
	const _v2_1 = new THREE.Vector2();
	const _v3_0 = new THREE.Vector3();
	const _v3_1 = new THREE.Vector3();
	const _q_0 = new THREE.Quaternion();
	const _q_1 = new THREE.Quaternion();
	const MAIN_COLOR = new THREE.Color();
	const SUCCESS_COLOR = new THREE.Color();
	const ERROR_COLOR = new THREE.Color();
	const DEFAULT_COLOR = new THREE.Color();
	const _c = new THREE.Color();
	const _c2 = new THREE.Color();
	const heroContainer = new THREE.Object3D();
	heroContainer.name = 'hero_container';

	const heroSharedUniforms: HeroSharedUniforms = {
		u_lightPosition: { value: new THREE.Vector3(-2, 6, -4) },
		u_goboTexture: { value: null },
		u_goboIntensity: { value: 0.45 },
		u_infoTexture: { value: null },
		u_infoTextureLinear: { value: null },
		u_endAnimationRatio: { value: 0 },
	};
	const heroState: HeroType = {
		_baseMesh: undefined,
		_blocksMesh: undefined,
		_blockList: [],
		animationTotalFrames: 0,
		heroLoseAnimationPositionArray: undefined,
		heroLoseAnimationOrientArray: undefined,
		_blockRenderList: [],
		successColorRatio: 0,
		directLight: undefined,
		infoTexture: undefined,
		_instancePosArray: undefined,
		_instanceOrientArray: undefined,
		_instanceShowRatioArray: undefined,
		_instanceSpinPivotArray: undefined,
		_instanceSpinOrientArray: undefined,
		_instanceColorArray: undefined,
		_instanceIsActiveArray: undefined,
		_instanceNextDirectionArray: undefined,
		isShadowCameraHelperVisible: undefined,
		shadowCameraHelper: undefined,
		infoTextureLinear: undefined,
		heroSharedUniforms,
	};
	const buffers: BufferGeometry[] = [];
	const textures: Texture[] = [];

	let preloadComplete = false;

	async function preload() {
		if (preloadComplete) {
			return;
		}
		const arr = Array.from({ length: TOTAL_BLOCKS });
		heroState._blockList = arr.map((_) => new HeroBlockCoordinates());
		heroState._blockRenderList = [...heroState._blockList];

		const base = await loader.loadBuf(`buf_base`, (geometry) => {
			_onBaseBlocksLoaded(geometry);
			buffers.push(geometry);
		});
		const box = await loader.loadBuf(`buf_box`, (geometry) => {
			_onBoxLoaded(geometry);
			buffers.push(geometry);
		});
		const lose = await loader.loadBuf(`buf_lose`, (geometry) => {
			const { position, orient } = geometry.attributes;
			heroState.animationTotalFrames = position.count / TOTAL_TILES;
			heroState.heroLoseAnimationPositionArray = position.array;
			heroState.heroLoseAnimationOrientArray = orient.array;
			buffers.push(geometry);
		});
		const gobo = await loader.loadTexture(`gobo`, (t) => {
			t.flipY = false;
			t.needsUpdate = true;
			if (heroSharedUniforms) {
				heroSharedUniforms.u_goboTexture.value = t;
			}
			textures.push(t);
		});
		try {
			await Promise.all([base, box, lose, gobo]).then(() => {
				preloadComplete = true;
			});
			log(`Loaded Hero assets`);
		} catch (e) {
			console.error('hero preload error:', e);
		}
	}

	function _onBaseBlocksLoaded(geometry) {
		const uniforms = {
			...properties.sharedUniforms,
			...THREE.UniformsUtils.merge([THREE.UniformsLib.lights]),
			...heroSharedUniforms,
			...bn_sharedUniforms,
			u_color: { value: new THREE.Color(properties.neutralColor) },
			u_blocksColor: { value: new THREE.Color() },
			u_yDisplacement: { value: 0 },
			u_prevSuccessColor: { value: new THREE.Color(properties.neutralColor).convertSRGBToLinear() },
			u_successColor: { value: new THREE.Color(properties.successColor).convertSRGBToLinear() },
			u_successAnimationRatio: { value: 0 },
		};

		const material = new THREE.ShaderMaterial({
			uniforms,
			vertexShader: vert,
			fragmentShader: frag,
			lights: true,
			transparent: true,
			defines: { IS_BASE: true },
		});
		heroState._baseMesh = new THREE.Mesh(geometry, material);
		heroState._baseMesh.receiveShadow = heroState._baseMesh.castShadow = true;
		heroState._baseMesh.frustumCulled = false;

		heroState._baseMesh.customDepthMaterial = new THREE.ShaderMaterial({
			vertexShader: vert,
			fragmentShader: fragDepth,
			defines: { IS_DEPTH: true, IS_BASE: true },
		});
		heroContainer.add(heroState._baseMesh);
	}

	function _onBoxLoaded(refGeometry) {
		const geometry = new THREE.InstancedBufferGeometry();
		geometry.name = 'hero_blocks';
		geometry.index = refGeometry.index;
		Object.keys(refGeometry.attributes).forEach((id) => {
			geometry.setAttribute(id, refGeometry.attributes[id]);
		});
		geometry.instanceCount = TOTAL_BLOCKS;

		const createInstancedAttribute = (name, itemSize) => {
			const array = new Float32Array(TOTAL_BLOCKS * itemSize);
			geometry.setAttribute(name, new THREE.InstancedBufferAttribute(array, itemSize, itemSize !== 4, 1).setUsage(THREE.DynamicDrawUsage));
			return array;
		};

		heroState._instancePosArray = createInstancedAttribute('instancePos', 3);
		heroState._instanceOrientArray = createInstancedAttribute('instanceOrient', 4);
		heroState._instanceShowRatioArray = createInstancedAttribute('instanceShowRatio', 1);
		heroState._instanceSpinPivotArray = createInstancedAttribute('instanceSpinPivot', 3);
		heroState._instanceSpinOrientArray = createInstancedAttribute('instanceSpinOrient', 4);
		heroState._instanceColorArray = createInstancedAttribute('instanceColor', 3);
		heroState._instanceIsActiveArray = createInstancedAttribute('instanceIsActive', 1);
		heroState._instanceNextDirectionArray = createInstancedAttribute('instanceNextDirection', 2);

		const material = new THREE.ShaderMaterial({
			uniforms: {
				...THREE.UniformsUtils.merge([THREE.UniformsLib.lights]),
				...properties.sharedUniforms,
				...heroSharedUniforms,
				...bn_sharedUniforms,
			},
			vertexShader: vert,
			fragmentShader: frag,
			lights: true,
		});

		heroState._blocksMesh = new THREE.Mesh(geometry, material);
		heroState._blocksMesh.frustumCulled = false;
		heroState._blocksMesh.castShadow = heroState._blocksMesh.receiveShadow = true;

		heroState._blocksMesh.customDepthMaterial = new THREE.ShaderMaterial({
			uniforms: { ...heroSharedUniforms },
			vertexShader: vert,
			fragmentShader: fragDepth,
			defines: { IS_DEPTH: true },
		});

		heroContainer.add(heroState._blocksMesh);
	}

	function init() {
		heroState.directLight = new THREE.DirectionalLight(0xffffff, 1);
		heroState.directLight.castShadow = true;
		heroState.directLight.shadow.camera.near = properties.lightCameraNear;
		heroState.directLight.shadow.camera.far = properties.lightCameraFar;
		heroState.directLight.shadow.camera.right = properties.lightCameraSize;
		heroState.directLight.shadow.camera.left = -properties.lightCameraSize;
		heroState.directLight.shadow.camera.top = properties.lightCameraSize;
		heroState.directLight.shadow.camera.bottom = -properties.lightCameraSize;
		heroState.directLight.shadow.bias = properties.lightCameraBias;
		heroState.directLight.shadow.mapSize.width = 768;
		heroState.directLight.shadow.mapSize.height = 768;
		properties.scene?.add(heroState.directLight);
		properties.scene?.add(heroState.directLight.target);

		heroState.isShadowCameraHelperVisible = true;
		heroState.shadowCameraHelper = new THREE.CameraHelper(heroState.directLight.shadow.camera);
		lightCameraUpdateSignal.add(() => {
			heroState.directLight?.shadow.camera.updateProjectionMatrix();
			heroState.shadowCameraHelper?.update();
		});
		lightCameraHelperSignal.add(() => {
			heroState.isShadowCameraHelperVisible = !heroState.isShadowCameraHelperVisible;
			if (heroState.isShadowCameraHelperVisible && heroState.shadowCameraHelper) {
				properties.scene?.add(heroState.shadowCameraHelper);
			} else if (heroState.shadowCameraHelper) {
				properties.scene?.remove(heroState.shadowCameraHelper);
			}
		});

		_assignFinalAnimationToTiles();

		const infoData = new Float32Array(TOTAL_TILES_WITH_PADDING * 4);
		for (let y = 0, i4 = 0; y < SIZE_WITH_PADDING; y++) {
			for (let x = 0; x < SIZE_WITH_PADDING; x++, i4 += 4) {
				infoData[i4] = 0;
				infoData[i4 + 1] = 0;
				infoData[i4 + 2] = 1;
				infoData[i4 + 3] = 1;
			}
		}

		heroState.infoTexture = new THREE.DataTexture(infoData, SIZE_WITH_PADDING, SIZE_WITH_PADDING, THREE.RGBAFormat, THREE.FloatType);
		heroState.infoTexture.name = 'hero_infoTexture';

		textures.push(heroState.infoTexture);
		heroState.infoTextureLinear = new THREE.DataTexture(
			infoData,
			SIZE_WITH_PADDING,
			SIZE_WITH_PADDING,
			THREE.RGBAFormat,
			THREE.FloatType,
			THREE.UVMapping,
			THREE.ClampToEdgeWrapping,
			THREE.ClampToEdgeWrapping,
			THREE.LinearFilter,
			THREE.LinearFilter,
			0,
		);
		heroState.infoTextureLinear.name = 'hero_infoTextureLinear';
		heroState.infoTextureLinear.needsUpdate = true;

		textures.push(heroState.infoTextureLinear);
		if (heroSharedUniforms) {
			heroSharedUniforms.u_infoTexture.value = heroState.infoTexture;
			heroSharedUniforms.u_infoTextureLinear.value = heroState.infoTextureLinear;
		}
	}

	function _assignFinalAnimationToTiles() {
		tiles.forEach((rowMap, i) => {
			rowMap.forEach((tile, j) => {
				const tileIndex = i * SIZE + j;
				tile.loseAnimationPositionArray = new Float32Array(heroState.animationTotalFrames * 3);
				tile.loseAnimationOrientArray = new Float32Array(heroState.animationTotalFrames * 4);

				for (let k = 0; k < heroState.animationTotalFrames; k++) {
					const posIndex = (k * TOTAL_TILES + tileIndex) * 3;
					const orientIndex = (k * TOTAL_TILES + tileIndex) * 4;

					tile.loseAnimationPositionArray.set(heroState.heroLoseAnimationPositionArray?.subarray(posIndex, posIndex + 3) || [], k * 3);
					tile.loseAnimationOrientArray.set(heroState.heroLoseAnimationOrientArray?.subarray(orientIndex, orientIndex + 4) || [], k * 4);
				}
			});
		});
	}

	function reset() {
		heroState.successColorRatio = 0;
		heroState._blockList.forEach((block) => block.reset());
	}

	function resetBlockFromLogicBlock(logicBlock) {
		const block = heroState._blockList[logicBlock?.id];
		block?.reset();
	}

	function _updateColors(dt: number) {
		MAIN_COLOR.set(properties.mainColor);
		SUCCESS_COLOR.set(properties.successColor);
		ERROR_COLOR.set(properties.failColor);
		DEFAULT_COLOR.set(properties.neutralColor).convertSRGBToLinear();

		_c.copy(MAIN_COLOR);

		const result = sM.getResult();

		if (result === 'FAILED' && failAnimation.failFloatingCubesRatio > 0) {
			_c.copy(ERROR_COLOR);
		}

		if (result === 'COMPLETED' || result === 'REPLAY') {
			heroState.successColorRatio = Math.min(1, heroState.successColorRatio + 0.5 * dt);
			_c.lerp(SUCCESS_COLOR, heroState.successColorRatio);
		}

		if (result !== 'REPLAY' && result !== 'COMPLETED') {
			_c.lerp(DEFAULT_COLOR, math.saturate(stopPushDownRatio + failAnimation.failPushDownRatio));
		}

		_c.convertSRGBToLinear();
		DEFAULT_COLOR.convertSRGBToLinear();
		SUCCESS_COLOR.convertSRGBToLinear();

		for (let i = 0; i < TOTAL_BLOCKS; i++) {
			const logicBlock = tower.systemManager.blocks.filter((block) => block.id === i)[0];

			const isActive = i < tower.systemManager.blocks.length + (tower.systemManager.lastSpawnedBlock ? 1 : 0);
			const color = isActive ? _c : DEFAULT_COLOR;

			if (isActive && logicBlock?.isErrorBlock) {
				let preFallColorRatio = math.saturate(0.5 * (1 - Math.cos(logicBlock.errorPreFallAnimationTime)));

				if (logicBlock.errorFallAnimationTime > 0) {
					preFallColorRatio = math.saturate(0.5 * (1 - Math.cos(14 * logicBlock.errorFallAnimationTime)));
				}

				_c2.lerpColors(color, ERROR_COLOR, preFallColorRatio);
				heroState._instanceColorArray?.set([_c2.r, _c2.g, _c2.b], i * 3);
			} else {
				heroState._instanceColorArray?.set([color.r, color.g, color.b], i * 3);
			}
			if (heroState._instanceIsActiveArray) {
				heroState._instanceIsActiveArray[i] = isActive ? 1 : 0;
			}
		}

		if (heroState._baseMesh) {
			heroState._baseMesh.material.uniforms.u_color.value.set(DEFAULT_COLOR).convertSRGBToLinear();
			heroState._baseMesh.material.uniforms.u_blocksColor.value.copy(_c);
			heroState._baseMesh.material.uniforms.u_successColor.value.copy(SUCCESS_COLOR);

			heroState._baseMesh.material.uniforms.u_prevSuccessColor.value.set(DEFAULT_COLOR).convertSRGBToLinear();

			heroState._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(_c.set(properties.successColor), tower.systemManager.previousSuccessBlocksAnimationRatio);
			heroState._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear();
		}
	}

	function _updateInfoTexture() {
		tiles.forEach((rowMap) => {
			rowMap.forEach((tile) => {
				const x = (tile.id % SIZE) + 1;
				const y = Math.floor(tile.id / SIZE) + 1;
				const index = (y * SIZE_WITH_PADDING + x) * 4;

				let endAnimationRatio = 0.5 * floatingCubesRatio * math.fit(successPushDownRatio, 0, 0.1, 1, 0);
				endAnimationRatio += (failAnimation.failFloatingCubesRatio > 0 ? 1 : 0) * math.fit(failAnimation.failPushDownRatio, 0, 0.1, 1, 0);
				endAnimationRatio += stopSpawnRatio * math.fit(stopPushDownRatio, 0, 0.1, 1, 0);
				endAnimationRatio = Math.min(1, endAnimationRatio);
				if (heroState.infoTexture) {
					heroState.infoTexture.image.data[index] = tile.activeRatio * (1 - endAnimationRatio);
					heroState.infoTexture.image.data[index + 1] = tile.isOccupied || tile.willBeOccupied ? 1 : 0;
					heroState.infoTexture.image.data[index + 2] = tile.isMain ? 1 : 0;
					heroState.infoTexture.image.data[index + 3] = tile.isBorder ? 1 : 0;
				}
			});
		});
		if (heroState.infoTexture && heroState.infoTextureLinear) {
			heroState.infoTexture.needsUpdate = true;
			heroState.infoTextureLinear.needsUpdate = true;
		}
	}

	function _updateFreeBlocks() {
		if (tower.systemManager.lastSpawnedBlock) {
			const lastSpawnedBlock = tower.systemManager.lastSpawnedBlock;
			const block = heroState._blockList[lastSpawnedBlock.id];
			if (lastSpawnedBlock.currentTile) {
				block.boardPos.set(lastSpawnedBlock.currentTile?.row, lastSpawnedBlock.currentTile?.col);
			}
			block.showRatio = customEasing(math.saturate(lastSpawnedBlock.spawnAnimationRatioUnclamped));
		}

		tower.systemManager.blocks.forEach((logicBlock) => {
			const block = heroState._blockList[logicBlock.id];

			if (block) {
				block.showRatio = customEasing(math.saturate(logicBlock.spawnAnimationRatioUnclamped));
				if (logicBlock.currentTile) {
					block.boardPos.set(logicBlock.currentTile?.row, logicBlock.currentTile?.col);
				}

				if (logicBlock.targetTile) {
					block.boardDir.set(logicBlock.targetTile.row - (logicBlock.currentTile?.row || 0), logicBlock.targetTile.col - (logicBlock.currentTile?.col || 0));
				}
				block.animation = logicBlock.hasAnimationEnded ? 0 : logicBlock.easedAnimationRatio;
			}
		});
	}

	function _updateAttributes(renderCount) {
		for (let i = 0; i < renderCount; i++) {
			const block = heroState._blockRenderList[i];
			block.pos.toArray(heroState._instancePosArray || [], i * 3);
			block.orient.toArray(heroState._instanceOrientArray || [], i * 4);
			if (heroState._instanceShowRatioArray) {
				heroState._instanceShowRatioArray[i] = ease.quartInOut(block.showRatio);
			}
			block.spinPivot.toArray(heroState._instanceSpinPivotArray || [], i * 3);
			block.spinOrient.toArray(heroState._instanceSpinOrientArray || [], i * 4);
			heroState._instanceNextDirectionArray?.set([block.boardDir.x, block.boardDir.y], i * 2);
		}

		const geometry = heroState._blocksMesh?.geometry;
		if (geometry) {
			for (const id in geometry.attributes) {
				const attribute = geometry.attributes[id] as InstancedBufferAttribute;
				if (attribute.isBufferAttribute) {
					attribute.addUpdateRange(0, renderCount * attribute.itemSize);
					attribute.needsUpdate = true;
				}
			}
			geometry.instanceCount = renderCount;
		}
	}

	function _updateStopAnimation(block, i) {
		const result = sM.getResult();
		if (result === 'STOP') {
			if (i >= TOTAL_TILES) {
				const _i = i - TOTAL_TILES;
				const col = (_i % SIZE) - HALF_SIZE;
				const row = Math.floor(_i / SIZE) - HALF_SIZE;
				const tile = tower.systemManager.board.getTile(row, col);
				if (!tile.isOccupied) {
					const ratio = math.saturate(stopSpawnRatio - tile.randomDelay);
					tile.activeRatio = ratio;
					block.showRatio = customEasing(ratio);
					block.boardPos.set(row, col);
				}
			}
		}
	}

	function _updateFailAnimation(logicBlock, block, i) {
		if (logicBlock && logicBlock.isErrorBlock && logicBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle - 1) {
			const tile = logicBlock.currentTile;
			const animationRatio = logicBlock.errorFallAnimationTime;

			block.boardPos.set(tile.row, tile.col);
			_v2_0.set(tile.row, tile.col).normalize();
			if (Math.abs(_v2_0.x) > Math.abs(_v2_0.y)) {
				_v2_0.set(Math.sign(_v2_0.x), 0);
			} else {
				_v2_0.set(0, Math.sign(_v2_0.y));
			}
			block.boardDir.set(_v2_0.x, _v2_0.y);
			block.animation = math.fit(animationRatio, 0, 1, 0, 1, ease.sineOut);
			block.animation += Math.max(0, animationRatio - 0.8);
			block.update(properties.deltaTime);
			block.addsFallAnimation(Math.max(0, animationRatio - 0.8));
		}
		if (sM.getResult() === 'FAILED') {
			if (logicBlock) {
				const tile = logicBlock.currentTile;

				if (failAnimation.failFloatingCubesRatio > 0) {
					const frameStart = Math.floor(failAnimation.failFloatingCubesRatio * heroState.animationTotalFrames);
					const frameEnd = Math.min(frameStart + 1, heroState.animationTotalFrames - 1);
					const frameRatio = failAnimation.failFloatingCubesRatio * heroState.animationTotalFrames - frameStart;

					_v3_0.fromArray(tile.loseAnimationPositionArray, frameStart * 3);
					_v3_1.fromArray(tile.loseAnimationPositionArray, frameEnd * 3);
					_v3_0.lerp(_v3_1, frameRatio);
					_v3_0.y *= 0.5;
					block.pos.set(_v3_0.z, _v3_0.y, -_v3_0.x);

					_q_0.fromArray(tile.loseAnimationOrientArray, frameStart * 4);
					_q_1.fromArray(tile.loseAnimationOrientArray, frameEnd * 4);
					_q_0.slerp(_q_1, frameRatio);
					block.orient.copy(_q_0);
				}

				if (failAnimation.failShakeRatio > 0) {
					const push = math.fit(failAnimation.failShakeRatio, 0, 1, 0, 1, ease.sineOut);
					_v2_0.set(tile.row, tile.col);
					_v2_0.normalize();
					_v2_0.multiplyScalar(0.1 * push);

					block.pos.x += _v2_0.x;
					block.pos.z -= _v2_0.y;

					if (failAnimation.failShakeRatio < 1) {
						const shake = push * math.fit(failAnimation.failShakeRatio, 0.5, 0.8, 1, 0);
						_v2_0.set(logicBlock.randomVector.x, logicBlock.randomVector.y);
						_v2_0.normalize();
						_v2_0.multiplyScalar(shake);
						_v2_1.set(0, 0);
						_v2_1.addScaledVector(_v2_0, 0.08 * shake * Math.sin(shake * 80));

						block.pos.x += _v2_1.x;
						block.pos.z += _v2_1.y;
					}
				}
			}

			if (i >= TOTAL_TILES) {
				const _i = i - TOTAL_TILES;
				const col = (_i % SIZE) - HALF_SIZE;
				const row = Math.floor(_i / SIZE) - HALF_SIZE;
				const tile = tower.systemManager.board.getTile(row, col);
				const ratio = math.saturate(failAnimation.failSpawnRatio - tile.randomDelay);

				if (!tile.isOccupied) {
					tile.activeRatio = ratio;
				}
				block.showRatio = customEasing(ratio);
				block.boardPos.set(row, col);
			}
		}
	}

	function _updateFloatAnimation(logicBlock, block) {
		const result = sM.getResult();
		if (result === 'COMPLETED' || result === 'REPLAY') {
			if (logicBlock) {
				const tile = logicBlock.currentTile;
				const delay = 0.1 * tile.randomDelay;
				const ratio = floatingCubesRatio - delay;

				let y = math.fit(ratio, 0, 0.5, 0, 1, (x) => 1 - Math.pow(1 - x, 5));
				y = math.fit(ratio, 0.7, 1, y, 0, (x) => Math.pow(x, 5));

				block.pos.y += floatingCubesDisplacement * y;
			}
		}
	}

	function update(dt: number) {
		_updateFreeBlocks();
		_updateColors(dt);
		// update blocks;
		let renderCount = 0;
		for (let i = 0; i < TOTAL_BLOCKS; i++) {
			const block = heroState._blockList[i];
			block.update(dt);

			const logicBlock = tower.systemManager.blocks.filter((block) => block.id === i)[0];

			if (block.showRatio > 0) {
				heroState._blockRenderList[renderCount++] = block;
			}

			_updateFailAnimation(logicBlock, block, i);
			_updateStopAnimation(block, i);
			_updateFloatAnimation(logicBlock, block);
		}

		_updateInfoTexture();
		_updateAttributes(renderCount);

		const pushDownRatio = Math.min(1, stopPushDownRatio + failAnimation.failPushDownRatio + successPushDownRatio);
		const easedRestartAnimationRatio = ease.backOut(pushDownRatio, 3);
		const easedFirstStartAnimationRatio = 1 - customEasing(tower.systemManager.getFirstStart());

		heroContainer.position.y = -easedRestartAnimationRatio - 2 * easedFirstStartAnimationRatio;
		heroContainer.rotation.y = 0.5 * Math.PI * easedFirstStartAnimationRatio;
		heroContainer.rotation.y += 2 * Math.PI * ease.quartInOut(towerRotationRatio);
		if (heroState._baseMesh) {
			heroState._baseMesh.material.uniforms.u_yDisplacement.value = -easedRestartAnimationRatio - 5 * easedFirstStartAnimationRatio;
			heroState._baseMesh.material.uniforms.u_successAnimationRatio.value = successColorTowerRatio;
		}
		if (heroSharedUniforms) {
			heroSharedUniforms.u_endAnimationRatio.value = Math.min(
				1,
				math.fit(stopSpawnRatio, 0.5, 2, 0, 1) + math.fit(failAnimation.failSpawnRatio, 0.5, 2, 0, 1) + math.fit(successRatio, 0, 0.2, 0, 1),
			);
			heroSharedUniforms.u_goboIntensity.value = properties.goboIntensity;
			heroSharedUniforms.u_lightPosition.value.set(properties.lightPositionX, properties.lightPositionY, properties.lightPositionZ);
		}

		if (heroState.directLight) {
			heroState.directLight.position.copy(heroSharedUniforms?.u_lightPosition.value);
			heroState.directLight.shadow.camera.top = properties.lightCameraSize;
			heroState.directLight.shadow.camera.bottom = -properties.lightCameraSize;
			heroState.directLight.shadow.bias = properties.lightCameraBias;
		}
	}

	return {
		preload,
		init,
		reset,
		resetBlockFromLogicBlock,
		update,
		buffers,
		textures,
		heroContainer,
		heroSharedUniforms,
	};
};
