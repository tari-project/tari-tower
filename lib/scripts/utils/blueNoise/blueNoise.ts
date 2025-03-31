import * as THREE from 'three';
import loader from '../../core/loader';
import getBlueNoiseShader from './getBlueNoise.glsl?raw';
import { ASSETS_PATH } from '../../core/settings';
import { uniformsStore } from '../../../store/uniformsStore.ts';

const BlueNoise = () => {
    const TEXTURE_SIZE = 128;

    async function preInit() {
        const bn_sharedUniforms = uniformsStore.getState();
        loader.loadTexture(`${ASSETS_PATH + 'textures'}/LDR_RGB1_0.png`, (texture) => {
            texture.generateMipmaps = false;
            texture.minFilter = texture.magFilter = THREE.NearestFilter;
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.needsUpdate = true;
            if (bn_sharedUniforms) {
                bn_sharedUniforms.u_blueNoiseTexture.value = texture;
                bn_sharedUniforms.u_blueNoiseTexelSize.value.set(1 / TEXTURE_SIZE, 1 / TEXTURE_SIZE);
            }
        });
        THREE.ShaderChunk['getBlueNoise'] = getBlueNoiseShader;
    }

    function update(_dt: number) {
        uniformsStore.setState((c) => ({
            u_blueNoiseCoordOffset: { value: c.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random()) },
        }));
    }

    return {
        update,
        preInit,
        TEXTURE_SIZE,
    };
};

export default BlueNoise;
