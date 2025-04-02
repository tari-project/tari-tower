import {
    CameraHelper,
    ClampToEdgeWrapping,
    Color,
    DataTexture,
    DirectionalLight,
    DynamicDrawUsage,
    FloatType,
    InstancedBufferAttribute,
    InstancedBufferGeometry,
    LinearFilter,
    Mesh,
    Object3D,
    Quaternion,
    RGBAFormat,
    ShaderMaterial,
    UniformsLib,
    UniformsUtils,
    UVMapping,
    Vector2,
    Vector3,
} from 'three';
import loader from '../../core/loader';
import math from '../../utils/math';
import ease, { customEasing } from '../../utils/ease';

import { HALF_SIZE, SIZE, TOTAL_TILES, SIZE_WITH_PADDING, TOTAL_TILES_WITH_PADDING, tiles, board } from '../../logic/board';

import vert from './hero.vert';
import frag from './hero.frag';
import fragDepth from './heroDepth.frag';

import { floatingCubesDisplacement, floatingCubesRatio, successPushDownRatio, successRatio, successColorTowerRatio, towerRotationRatio } from '../../logic/successAnimationManager';
import { stopPushDownRatio, stopSpawnRatio } from '../../logic/stopAnimationManager';
import { failFloatingCubesRatio, failPushDownRatio, failShakeRatio, failSpawnRatio } from '../../logic/errorAnimationManager';

import { AnimationResult } from '../../../types/stateManager';
import { ASSETS_PATH } from '../../core/settings';
import { stateManagerStore } from '../../../store/stateManagerStore';
import { animationCycleStore } from '../../../store/animationCycleStore.ts';

import { setUniform, uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';
import { sceneStore } from '../../../store/sceneStore.ts';
import { heroStore, TOTAL_BLOCKS } from 'lib/store/heroStore.ts';

export const heroContainer = new Object3D();
const Hero = () => {
    const _v2_0 = new Vector2();
    const _v2_1 = new Vector2();

    const _v3_0 = new Vector3();
    const _v3_1 = new Vector3();

    const _q_0 = new Quaternion();
    const _q_1 = new Quaternion();

    const MAIN_COLOR = new Color();
    const SUCCESS_COLOR = new Color();
    const ERROR_COLOR = new Color();
    const DEFAULT_COLOR = new Color();

    const _c = new Color();
    const _c2 = new Color();

    const { animationTotalFrames, blockList, blockRenderList, heroLoseAnimationPositionArray, heroLoseAnimationOrientArray } = heroStore.getState();
    let result = stateManagerStore.getState().result;
    let propertiesState = propertiesStore.getState();
    let sharedUniforms = uniformsStore.getState();
    let cycle = animationCycleStore.getState();

    async function preload() {
        loader.loadBuf(`${ASSETS_PATH}/BASE.buf`, (geometry) => {
            _onBaseBlocksLoaded(geometry);
        });
        loader.loadBuf(`${ASSETS_PATH}/BOX.buf`, (geometry) => {
            _onBoxLoaded(geometry);
        });
        loader.loadBuf(`${ASSETS_PATH}/LOSE_ANIMATION.buf`, (geometry) => {
            const { position, orient } = geometry?.attributes || {};
            heroStore.getState().setPreloadItems({
                animationTotalFrames: position.count / TOTAL_TILES,
                heroLoseAnimationPositionArray: position.array,
                heroLoseAnimationOrientArray: orient.array,
            });
        });
        loader.loadTexture(`${ASSETS_PATH}/gobo.jpg`, (texture) => {
            texture.flipY = false;
            texture.needsUpdate = true;
            setUniform({ u_goboTexture: { value: texture } });
        });

        _initListeners();
    }

    function _onBaseBlocksLoaded(geometry) {
        const uniforms = {
            ...sharedUniforms,
            ...UniformsUtils.merge([UniformsLib.lights]),
            u_color: { value: new Color(propertiesState.neutralColor) },
            u_blocksColor: { value: new Color(propertiesState.neutralColor) },
            u_yDisplacement: { value: 0 },
            u_prevSuccessColor: {
                value: new Color(propertiesState.neutralColor).convertSRGBToLinear(),
            },
            u_successColor: { value: new Color(propertiesState.successColor).convertSRGBToLinear() },
            u_successAnimationRatio: { value: 0 },
        };

        const material = new ShaderMaterial({
            uniforms,
            vertexShader: vert,
            fragmentShader: frag,
            lights: true,
            transparent: true,
            defines: { IS_BASE: true },
        });
        const _baseMesh = new Mesh(geometry, material);
        _baseMesh.receiveShadow = _baseMesh.castShadow = true;
        _baseMesh.frustumCulled = false;

        _baseMesh.customDepthMaterial = new ShaderMaterial({
            vertexShader: vert,
            fragmentShader: fragDepth,
            defines: { IS_DEPTH: true, IS_BASE: true },
        });
        heroStore.getState().setBaseMesh(_baseMesh);
        heroContainer.add(_baseMesh);
    }

    function _onBoxLoaded(refGeometry) {
        const geometry = new InstancedBufferGeometry();
        geometry.index = refGeometry.index;
        Object.keys(refGeometry.attributes).forEach((id) => {
            geometry.setAttribute(id, refGeometry.attributes[id]);
        });
        geometry.instanceCount = TOTAL_BLOCKS;

        const createInstancedAttribute = (name, itemSize) => {
            const array = new Float32Array(TOTAL_BLOCKS * itemSize);
            geometry.setAttribute(name, new InstancedBufferAttribute(array, itemSize, itemSize !== 4, 1).setUsage(DynamicDrawUsage));
            return array;
        };

        heroStore.getState().setInstanceItems({
            instancePosArray: createInstancedAttribute('instancePos', 3),
            instanceOrientArray: createInstancedAttribute('instanceOrient', 4),
            instanceShowRatioArray: createInstancedAttribute('instanceShowRatio', 1),
            instanceSpinPivotArray: createInstancedAttribute('instanceSpinPivot', 3),
            instanceSpinOrientArray: createInstancedAttribute('instanceSpinOrient', 4),
            instanceColorArray: createInstancedAttribute('instanceColor', 3),
            instanceIsActiveArray: createInstancedAttribute('instanceIsActive', 1),
            instanceNextDirectionArray: createInstancedAttribute('instanceNextDirection', 2),
        });

        const material = new ShaderMaterial({
            uniforms: {
                ...UniformsUtils.merge([UniformsLib.lights]),
                ...sharedUniforms,
            },
            vertexShader: vert,
            fragmentShader: frag,
            lights: true,
        });

        const _blocksMesh = new Mesh(geometry, material);
        _blocksMesh.frustumCulled = false;
        _blocksMesh.castShadow = _blocksMesh.receiveShadow = true;

        _blocksMesh.customDepthMaterial = new ShaderMaterial({
            uniforms: { ...sharedUniforms },
            vertexShader: vert,
            fragmentShader: fragDepth,
            defines: { IS_DEPTH: true },
        });
        heroStore.getState().setBlocksMesh(_blocksMesh);
        heroContainer.add(_blocksMesh);
    }

    function _initListeners() {
        const uniformsListener: Parameters<typeof uniformsStore.subscribe>[0] = (s) => (sharedUniforms = s);
        const propertiesListener: Parameters<typeof propertiesStore.subscribe>[0] = (s) => (propertiesState = s);
        const cycleListener: Parameters<typeof animationCycleStore.subscribe>[0] = (s) => (cycle = s);

        propertiesStore.subscribe((s) => s, propertiesListener, { fireImmediately: true });
        animationCycleStore.subscribe((s) => s, cycleListener, { fireImmediately: true });
        uniformsStore.subscribe((s) => s, uniformsListener, { fireImmediately: true });
        stateManagerStore.subscribe(
            (s) => s.result,
            (res) => {
                result = res;
            },
            { fireImmediately: true }
        );
    }
    async function init() {
        const sceneState = sceneStore.getState();
        const _dLight = new DirectionalLight(0xffffff, 1);
        _dLight.castShadow = true;
        _dLight.shadow.camera.near = sceneState.lightCameraNear;
        _dLight.shadow.camera.far = sceneState.lightCameraFar;
        _dLight.shadow.camera.right = sceneState.lightCameraSize;
        _dLight.shadow.camera.left = -sceneState.lightCameraSize;
        _dLight.shadow.camera.top = sceneState.lightCameraSize;
        _dLight.shadow.camera.bottom = -sceneState.lightCameraSize;
        _dLight.shadow.bias = sceneState.lightCameraBias;
        _dLight.shadow.mapSize.width = 768;
        _dLight.shadow.mapSize.height = 768;

        heroStore.setState({
            directLight: _dLight,
            isShadowCameraHelperVisible: true,
            shadowCameraHelper: new CameraHelper(_dLight.shadow.camera),
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

        const _infoTexture = new DataTexture(infoData, SIZE_WITH_PADDING, SIZE_WITH_PADDING, RGBAFormat, FloatType);
        const _infoTextureLinear = new DataTexture(infoData, SIZE_WITH_PADDING, SIZE_WITH_PADDING, RGBAFormat, FloatType, UVMapping, ClampToEdgeWrapping, ClampToEdgeWrapping, LinearFilter, LinearFilter, 0);
        _infoTextureLinear.needsUpdate = true;

        heroStore.setState({
            infoTexture: _infoTexture,
            infoTextureLinear: _infoTextureLinear,
        });

        uniformsStore.setState({
            u_infoTexture: { value: _infoTexture },
            u_infoTextureLinear: { value: _infoTextureLinear },
        });
        return _dLight;
    }

    function _assignFinalAnimationToTiles() {
        tiles.forEach((rowMap, i) => {
            rowMap.forEach((tile, j) => {
                const tileIndex = i * SIZE + j;
                tile.loseAnimationPositionArray = new Float32Array(animationTotalFrames * 3);
                tile.loseAnimationOrientArray = new Float32Array(animationTotalFrames * 4);

                for (let k = 0; k < animationTotalFrames; k++) {
                    const posIndex = (k * TOTAL_TILES + tileIndex) * 3;
                    const orientIndex = (k * TOTAL_TILES + tileIndex) * 4;

                    tile.loseAnimationPositionArray.set(heroLoseAnimationPositionArray?.subarray(posIndex, posIndex + 3) || [], k * 3);
                    tile.loseAnimationOrientArray.set(heroLoseAnimationOrientArray?.subarray(orientIndex, orientIndex + 4) || [], k * 4);
                }
            });
        });
    }

    function reset() {
        heroStore.setState({ successColorRatio: 0 });
        blockList.forEach((block) => block.reset());
    }

    function _updateColors(dt: number) {
        const baseMesh = heroStore.getState().baseMesh;

        MAIN_COLOR.set(propertiesState.mainColor);
        SUCCESS_COLOR.set(propertiesState.successColor);
        ERROR_COLOR.set(propertiesState.failColor);
        DEFAULT_COLOR.set(propertiesState.neutralColor).convertSRGBToLinear();

        _c.copy(MAIN_COLOR);

        if (result === AnimationResult.FAILED && failFloatingCubesRatio > 0) {
            _c.copy(ERROR_COLOR);
        }

        if (result === AnimationResult.COMPLETED || result === AnimationResult.REPLAY) {
            heroStore.setState(({ successColorRatio: curr }) => {
                const updatedRatio = Math.min(1, curr + 0.5 * dt);
                _c.lerp(SUCCESS_COLOR, updatedRatio);
                return { successColorRatio: updatedRatio };
            });
        }

        if (result !== AnimationResult.REPLAY && result !== AnimationResult.COMPLETED) {
            _c.lerp(DEFAULT_COLOR, math.saturate(stopPushDownRatio + failPushDownRatio));
        }

        _c.convertSRGBToLinear();
        DEFAULT_COLOR.convertSRGBToLinear();
        SUCCESS_COLOR.convertSRGBToLinear();

        for (let i = 0; i < TOTAL_BLOCKS; i++) {
            const instanceColorArray = heroStore.getState().instanceColorArray;
            const instanceIsActiveArray = heroStore.getState().instanceIsActiveArray;

            const logicBlock = cycle.blocks.filter((block) => block.id === i)[0];
            const isActive = i < cycle.blocks.length + (cycle.lastSpawnedBlock ? 1 : 0);
            const color = isActive ? _c : DEFAULT_COLOR;

            if (isActive && logicBlock?.isErrorBlock) {
                let preFallColorRatio = math.saturate(0.5 * (1 - Math.cos(logicBlock.errorPreFallAnimationTime)));

                if (logicBlock.errorFallAnimationTime > 0) {
                    preFallColorRatio = math.saturate(0.5 * (1 - Math.cos(14 * logicBlock.errorFallAnimationTime)));
                }

                _c2.lerpColors(color, ERROR_COLOR, preFallColorRatio);
                instanceColorArray?.set([_c2.r, _c2.g, _c2.b], i * 3);
            } else {
                instanceColorArray?.set([color.r, color.g, color.b], i * 3);
            }

            if (instanceIsActiveArray) {
                instanceIsActiveArray[i] = isActive ? 1 : 0;
            }

            heroStore.setState({ instanceColorArray, instanceIsActiveArray });
        }

        if (baseMesh) {
            baseMesh.material.uniforms.u_color.value.set(DEFAULT_COLOR).convertSRGBToLinear();
            baseMesh.material.uniforms.u_blocksColor.value.copy(_c);
            baseMesh.material.uniforms.u_successColor.value.copy(SUCCESS_COLOR);

            baseMesh.material.uniforms.u_prevSuccessColor.value.set(DEFAULT_COLOR).convertSRGBToLinear();

            baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(_c.set(propertiesState.successColor), cycle.previousSuccessBlocksAnimationRatio);
            baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear();
        }
    }

    function _updateInfoTexture() {
        const _infoTexture = heroStore.getState().infoTexture;
        const _infoTextureLinear = heroStore.getState().infoTextureLinear;
        tiles.forEach((rowMap) => {
            rowMap.forEach((tile) => {
                const x = (tile.id % SIZE) + 1;
                const y = Math.floor(tile.id / SIZE) + 1;
                const index = (y * SIZE_WITH_PADDING + x) * 4;

                let endAnimationRatio = 0.5 * floatingCubesRatio * math.fit(successPushDownRatio, 0, 0.1, 1, 0);
                endAnimationRatio += (failFloatingCubesRatio > 0 ? 1 : 0) * math.fit(failPushDownRatio, 0, 0.1, 1, 0);
                endAnimationRatio += stopSpawnRatio * math.fit(stopPushDownRatio, 0, 0.1, 1, 0);
                endAnimationRatio = Math.min(1, endAnimationRatio);
                if (_infoTexture) {
                    _infoTexture.image.data[index] = tile.activeRatio * (1 - endAnimationRatio);
                    _infoTexture.image.data[index + 1] = tile.isOccupied || tile.willBeOccupied ? 1 : 0;
                    _infoTexture.image.data[index + 2] = tile.isMain ? 1 : 0;
                    _infoTexture.image.data[index + 3] = tile.isBorder ? 1 : 0;
                }
            });
        });
        if (_infoTexture && _infoTextureLinear) {
            _infoTextureLinear.needsUpdate = true;
            _infoTextureLinear.needsUpdate = true;

            heroStore.setState({ infoTexture: _infoTexture, infoTextureLinear: _infoTextureLinear });
        }
    }

    function _updateFreeBlocks() {
        if (cycle.lastSpawnedBlock) {
            const block = blockList[cycle.lastSpawnedBlock.id];
            if (cycle.lastSpawnedBlock.currentTile) {
                block.boardPos.set(cycle.lastSpawnedBlock.currentTile?.row, cycle.lastSpawnedBlock.currentTile?.col);
            }
            block.showRatio = customEasing(math.saturate(cycle.lastSpawnedBlock.spawnAnimationRatioUnclamped));
        }

        cycle.blocks?.forEach((logicBlock) => {
            const block = blockList[logicBlock.id];

            if (block) {
                block.showRatio = customEasing(math.saturate(logicBlock.spawnAnimationRatioUnclamped));
                if (logicBlock?.currentTile) {
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
        const { blocksMesh, instancePosArray, instanceOrientArray, instanceSpinOrientArray, instanceSpinPivotArray, instanceNextDirectionArray, instanceShowRatioArray } = heroStore.getState();
        for (let i = 0; i < renderCount; i++) {
            const block = blockRenderList[i];
            block.pos.toArray(instancePosArray || [], i * 3);
            block.orient.toArray(instanceOrientArray || [], i * 4);
            if (instanceShowRatioArray) {
                instanceShowRatioArray[i] = ease.quartInOut(block.showRatio);
            }
            block.spinPivot.toArray(instanceSpinPivotArray || [], i * 3);
            block.spinOrient.toArray(instanceSpinOrientArray || [], i * 4);
            instanceNextDirectionArray?.set([block.boardDir.x, block.boardDir.y], i * 2);
        }

        const geometry = blocksMesh?.geometry;
        if (geometry) {
            for (const id in geometry.attributes) {
                const attribute = geometry.attributes[id] as InstancedBufferAttribute;
                if (attribute.isBufferAttribute) {
                    attribute.addUpdateRange(0, renderCount * attribute.itemSize);
                    attribute.needsUpdate = true;
                }
            }
            geometry.instanceCount = renderCount;
            heroStore.setState({ blocksMesh });
        }
    }

    function _updateStopAnimation(block, i) {
        if (i >= TOTAL_TILES) {
            const _i = i - TOTAL_TILES;
            const col = (_i % SIZE) - HALF_SIZE;
            const row = Math.floor(_i / SIZE) - HALF_SIZE;
            const tile = board.getTile(row, col);
            if (!tile.isOccupied) {
                const ratio = math.saturate(stopSpawnRatio - tile.randomDelay);
                tile.activeRatio = ratio;
                block.showRatio = customEasing(ratio);
                block.boardPos.set(row, col);
            }
        }
    }

    function _updateFailAnimation(logicBlock, block, i) {
        if (logicBlock) {
            const tile = logicBlock.currentTile;

            if (failFloatingCubesRatio > 0) {
                const frameStart = Math.floor(failFloatingCubesRatio * animationTotalFrames);
                const frameEnd = Math.min(frameStart + 1, animationTotalFrames - 1);
                const frameRatio = failFloatingCubesRatio * animationTotalFrames - frameStart;

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

            if (failShakeRatio > 0) {
                const push = math.fit(failShakeRatio, 0, 1, 0, 1, ease.sineOut);
                _v2_0.set(tile.row, tile.col);
                _v2_0.normalize();
                _v2_0.multiplyScalar(0.1 * push);

                block.pos.x += _v2_0.x;
                block.pos.z -= _v2_0.y;

                if (failShakeRatio < 1) {
                    const shake = push * math.fit(failShakeRatio, 0.5, 0.8, 1, 0);
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
            const tile = board.getTile(row, col);
            const ratio = math.saturate(failSpawnRatio - tile.randomDelay);

            if (!tile.isOccupied) {
                tile.activeRatio = ratio;
            }
            block.showRatio = customEasing(ratio);
            block.boardPos.set(row, col);
        }
    }

    function _updateFloatAnimation(logicBlock, block) {
        if (logicBlock) {
            const tile = logicBlock.currentTile;
            const delay = 0.1 * tile?.randomDelay;
            const ratio = floatingCubesRatio - delay;

            let y = math.fit(ratio, 0, 0.5, 0, 1, (x) => 1 - Math.pow(1 - x, 5));
            y = math.fit(ratio, 0.7, 1, y, 0, (x) => Math.pow(x, 5));

            block.pos.y += floatingCubesDisplacement * y;
        }
    }

    function _updateIndividualBlock(logicBlock, block, i) {
        if (result === AnimationResult.FAILED) {
            // console.debug(`cycle.blocks=`, cycle.blocks);
            // console.debug(`logicBlock=`, logicBlock.currentTile);
            _updateFailAnimation(logicBlock, block, i);
        }
        if (result === AnimationResult.COMPLETED || result === AnimationResult.REPLAY) {
            _updateFloatAnimation(logicBlock, block);
        }
        if (result === AnimationResult.STOP) {
            _updateStopAnimation(block, i);
        }
    }
    function update(dt: number) {
        const baseMesh = heroStore.getState().baseMesh;
        const sceneState = sceneStore.getState();
        const directLight = heroStore.getState().directLight;
        _updateFreeBlocks();
        _updateColors(dt);

        let renderCount = 0;
        // update blocks;
        for (let i = 0; i < TOTAL_BLOCKS; i++) {
            const block = blockList[i];
            block.update(dt);
            const logicBlock = cycle.blocks.find((block) => block.id === i);
            if (block.showRatio > 0) {
                blockRenderList[renderCount++] = block;
            }
            if (logicBlock) {
                _updateIndividualBlock(logicBlock, block, i);
            }
        }
        _updateInfoTexture();
        _updateAttributes(renderCount);

        const pushDownRatio = Math.min(1, stopPushDownRatio + failPushDownRatio + successPushDownRatio);
        const easedRestartAnimationRatio = ease.backOut(pushDownRatio, 3);
        const easedFirstStartAnimationRatio = 1 - customEasing(animationCycleStore.getState().firstStartAnimationRatio);
        heroContainer.position.y = -easedRestartAnimationRatio - 2 * easedFirstStartAnimationRatio;
        heroContainer.rotation.y = 0.5 * Math.PI * easedFirstStartAnimationRatio;
        heroContainer.rotation.y += 2 * Math.PI * ease.quartInOut(towerRotationRatio);

        if (baseMesh) {
            baseMesh.material.uniforms.u_yDisplacement.value = -easedRestartAnimationRatio - 5 * easedFirstStartAnimationRatio;
            baseMesh.material.uniforms.u_successAnimationRatio.value = successColorTowerRatio;
        }

        setUniform({
            u_endAnimationRatio: {
                value: Math.min(1, math.fit(stopSpawnRatio, 0.5, 2, 0, 1) + math.fit(failSpawnRatio, 0.5, 2, 0, 1) + math.fit(successRatio, 0, 0.2, 0, 1)),
            },
        });
        if (directLight) {
            directLight.position.copy(sharedUniforms.u_lightPosition.value);
            directLight.shadow.camera.top = sceneState.lightCameraSize;
            directLight.shadow.camera.bottom = -sceneState.lightCameraSize;
            directLight.shadow.bias = sceneState.lightCameraBias;
        }
    }

    return {
        preload,
        init,
        reset,
        update,
    };
};
export const heroBlocks = Hero();
