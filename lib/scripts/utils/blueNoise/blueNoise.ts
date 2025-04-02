import { NearestFilter, RepeatWrapping, ShaderChunk, Vector2 } from 'three';
import { ASSETS_PATH } from '../../core/settings';
import loader from '../../core/loader';
import { setUniform } from '../../../store/uniformsStore.ts';
import getBlueNoiseShader from './getBlueNoise.glsl';

const BlueNoise = () => {
    const TEXTURE_SIZE = 128;

    async function preInit() {
        loader.loadTexture(`${ASSETS_PATH}/LDR_RGB1_0.png`, (texture) => {
            texture.generateMipmaps = false;
            texture.minFilter = texture.magFilter = NearestFilter;
            texture.wrapS = texture.wrapT = RepeatWrapping;
            texture.needsUpdate = true;
            setUniform({ u_blueNoiseTexture: { value: texture } });
            setUniform({ u_blueNoiseTexelSize: { value: new Vector2(1 / TEXTURE_SIZE, 1 / TEXTURE_SIZE) } });
        });
        ShaderChunk['getBlueNoise'] = getBlueNoiseShader;
    }

    function update(_dt: number) {
        setUniform({ u_blueNoiseCoordOffset: { value: new Vector2(Math.random(), Math.random()) } });
    }

    return {
        update,
        preInit,
        TEXTURE_SIZE,
    };
};

export default BlueNoise;
