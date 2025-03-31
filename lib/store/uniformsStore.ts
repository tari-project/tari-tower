import { Color, Vector2, DataTexture } from 'three';
import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { propertiesStore } from './propertiesStore.ts';
import { sceneStore } from './sceneStore.ts';

const blueNoiseUniforms = {
    u_blueNoiseTexture: { value: null },
    u_blueNoiseTexelSize: { value: new Vector2() },
    u_blueNoiseCoordOffset: { value: new Vector2() },
};

const heroSharedUniforms = {
    u_lightPosition: {
        value: new THREE.Vector3(
            sceneStore.getState().lightPositionX,
            sceneStore.getState().lightPositionY,
            sceneStore.getState().lightPositionZ
        ),
    },
    u_goboTexture: { value: null },
    u_goboIntensity: { value: propertiesStore.getState().goboIntensity },
    u_infoTexture: { value: new DataTexture() },
    u_infoTextureLinear: { value: new DataTexture() },
    u_endAnimationRatio: { value: 0 },
};

const initialState = {
    u_time: { value: 0 },
    u_deltaTime: { value: 1 },
    u_resolution: { value: new Vector2() },
    u_viewportResolution: { value: new Vector2() },
    u_bgColor1: { value: new Color() },
    u_bgColor2: { value: new Color() },
    ...blueNoiseUniforms,
    ...heroSharedUniforms,
};
export type TSharedUniforms = typeof initialState;

export const uniformsStore = createStore<TSharedUniforms>()(
    subscribeWithSelector((set) => ({
        ...initialState,
    }))
);
