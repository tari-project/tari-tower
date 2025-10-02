import * as THREE from 'three';

import loader from '../../core/loader';
import { properties } from '../../core/properties';
import { bn_sharedUniforms } from '../../utils/blueNoise/blueNoise';

import vert from './coins.vert?raw';
import frag from './coins.frag?raw';
import fragDepth from './coinsDepth.frag?raw';
import { BufferGeometry, InstancedBufferGeometry, Mesh, ShaderMaterial, Texture } from 'three';
import { systemManager, tower } from '../../modules.ts';

export const Coins = () => {
	let loadComplete = false;
	const coinContainer = new THREE.Object3D();
	coinContainer.name = 'coins_container';

	const buffers: BufferGeometry[] = [];
	const textures: Texture[] = [];

	let refGeometry: BufferGeometry;
	let coinMesh: Mesh | null = null;
	let coinGeometry: InstancedBufferGeometry | null = null;
	let coinMaterial: ShaderMaterial | null = null;
	let positionsArray = null;
	let orientArray = null;
	let curveuArray = null;
	let aoNArray = null;
	let aoPArray = null;
	let coinsCount = 0;
	let animationRatio = 0;
	const isFloating = true;
	let matcapTexture;
	let randsArray;

	const coinsSharedUniforms = {
		u_time: { value: 0 },
		u_ratio: { value: 0 },
		u_isFloating: { value: 1 },
	};

	async function preload() {
		if (loadComplete) {
			return;
		}
		const t = await loader.loadTexture(`gold`, (texture) => {
			matcapTexture = texture;
			matcapTexture.needsUpdate = true;
			textures.push(texture);
		});

		const b = await loader.loadBuf(`buf_coin`, (geometry) => {
			refGeometry = geometry;
			buffers.push(geometry);
		});
		const b1 = await loader.loadBuf(`buf_coin_p`, (geometry) => {
			const { position, aoN, aoP, curveu, orient } = geometry.attributes;
			positionsArray = position.array;
			aoNArray = aoN.array;
			aoPArray = aoP.array;
			curveuArray = curveu.array;
			orientArray = orient.array;
			coinsCount = position.count;
			buffers.push(geometry);
		});
		try {
			await Promise.all([t, b, b1]).then(() => {
				loadComplete = true;
			});
		} catch (err) {
			console.error('coin preload error:', err);
		}
	}

	function init() {
		_setupGeometry();
		_setupMaterial();
		_setupMesh();
		if (coinMesh) {
			coinContainer.add(coinMesh);
		}
	}

	function _setupGeometry() {
		if (refGeometry) {
			refGeometry.computeVertexNormals();
			const geometry = new THREE.InstancedBufferGeometry();
			geometry.name = 'coins';
			geometry.index = refGeometry.index;
			Object.entries(refGeometry.attributes).forEach(([id, attr]) => geometry.setAttribute(id, attr));

			randsArray = new Float32Array(coinsCount * 3).map(() => Math.random() * 2 - 1);

			const instanceAttributes = [
				['a_instancePosition', positionsArray, 3],
				['a_instanceQuaternion', orientArray, 4],
				['a_instanceCurveUV', curveuArray, 1],
				['a_instanceAoN', aoNArray, 3],
				['a_instanceAoP', aoPArray, 3],
				['a_instanceRand', randsArray, 3],
			];

			instanceAttributes.forEach(([name, array, itemSize]) => {
				geometry.setAttribute(name, new THREE.InstancedBufferAttribute(array, itemSize));
			});

			coinGeometry = geometry;
		}
	}

	function _setupMaterial() {
		coinMaterial = new THREE.ShaderMaterial({
			uniforms: {
				...tower.heroBlocks.heroSharedUniforms,
				...properties.sharedUniforms,
				...coinsSharedUniforms,
				...bn_sharedUniforms,
				...THREE.UniformsUtils.merge([THREE.UniformsLib.lights]),
				u_matcapTexture: { value: matcapTexture },
			},
			vertexShader: vert,
			fragmentShader: frag,
			lights: true,
		});
	}

	function _setupMesh() {
		if (coinGeometry && coinMaterial) {
			coinMesh = new THREE.Mesh(coinGeometry, coinMaterial);
			coinMesh.frustumCulled = false;
			coinMesh.castShadow = true;
			coinMesh.receiveShadow = true;

			coinMesh.customDepthMaterial = new THREE.ShaderMaterial({
				uniforms: { ...coinsSharedUniforms },
				vertexShader: vert,
				fragmentShader: fragDepth,
				defines: { IS_DEPTH: true },
			});
		}
	}

	function update(dt: number) {
		const { vortexCoinsRatio, floatingCoinsRatio } = systemManager.getRatios();
		const isFloatingAnimationActive = vortexCoinsRatio === 0;

		animationRatio = isFloatingAnimationActive ? floatingCoinsRatio : vortexCoinsRatio;

		coinsSharedUniforms.u_ratio.value = animationRatio;
		coinsSharedUniforms.u_time.value += dt;

		coinsSharedUniforms.u_isFloating.value = isFloatingAnimationActive ? 1 : 0;
		if (coinMesh) {
			coinMesh.rotation.y = (isFloating ? 0 : 4) * animationRatio;
			coinMesh.visible = animationRatio > 0 && animationRatio < 1;
		}
		if (animationRatio <= 0) {
			buffers.forEach((b) => b?.dispose());
			textures.forEach((t) => t?.dispose());
		}
	}

	return {
		preload,
		init,
		update,
		buffers,
		textures,
		coinContainer,
	};
};
