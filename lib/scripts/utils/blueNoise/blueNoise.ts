import * as THREE from 'three';
import loader from '../../core/loader';

import getBlueNoiseShader from './getBlueNoise.glsl?raw';
import { SharedUniforms } from '../../../types/properties';
import { ASSETS_PATH } from '../../core/settings';

const bn_sharedUniforms: SharedUniforms = {
	u_blueNoiseTexture: { value: null },
	u_blueNoiseTexelSize: { value: null },
	u_blueNoiseCoordOffset: { value: new THREE.Vector2() },
};
const BlueNoise = () => {
	const TEXTURE_SIZE = 128;

	async function preInit() {
		loader.loadTexture(`${ASSETS_PATH + 'textures'}/LDR_RGB1_0.png`, (texture) => {
			texture.generateMipmaps = false;
			texture.minFilter = texture.magFilter = THREE.NearestFilter;
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			texture.needsUpdate = true;
			if (bn_sharedUniforms) {
				bn_sharedUniforms.u_blueNoiseTexture.value = texture;
				bn_sharedUniforms.u_blueNoiseTexelSize.value = new THREE.Vector2(1 / TEXTURE_SIZE, 1 / TEXTURE_SIZE);
			}
		});
		THREE.ShaderChunk['getBlueNoise'] = getBlueNoiseShader;
	}

	function update(_dt: number) {
		bn_sharedUniforms?.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random());
	}

	return {
		update,
		preInit,
		TEXTURE_SIZE,
		bn_sharedUniforms,
	};
};

export default BlueNoise;
export { bn_sharedUniforms };
