import loader from '../../core/loader';

import getBlueNoiseShader from './getBlueNoise.glsl?raw';
import { Uniform } from '../../../types/properties';
import { NearestFilter, RepeatWrapping, ShaderChunk, Texture, Vector2 } from 'three';

export interface BN_Uniforms {
	u_blueNoiseTexture: Uniform;
	u_blueNoiseTexelSize: Uniform<Vector2 | null>;
	u_blueNoiseCoordOffset: Uniform<Vector2>;
}
export const BlueNoise = () => {
	const TEXTURE_SIZE = 128;
	const textures: Texture[] = [];
	const bn_sharedUniforms: BN_Uniforms = {
		u_blueNoiseTexture: { value: null },
		u_blueNoiseTexelSize: { value: null },
		u_blueNoiseCoordOffset: { value: new Vector2() },
	};
	async function preInit() {
		await loader.loadTexture(`noise`, (t) => {
			t.generateMipmaps = false;
			t.minFilter = t.magFilter = NearestFilter;
			t.wrapS = t.wrapT = RepeatWrapping;
			t.needsUpdate = true;
			if (bn_sharedUniforms) {
				bn_sharedUniforms.u_blueNoiseTexture.value = t;
				bn_sharedUniforms.u_blueNoiseTexelSize.value = new Vector2(1 / TEXTURE_SIZE, 1 / TEXTURE_SIZE);
			}
			textures.push(t);
		});
		ShaderChunk['getBlueNoise'] = getBlueNoiseShader;
	}

	function update(_dt: number) {
		bn_sharedUniforms?.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random());
	}

	function getSharedUniforms() {
		return bn_sharedUniforms;
	}

	return {
		update,
		preInit,
		TEXTURE_SIZE,
		getSharedUniforms,
		textures,
	};
};
