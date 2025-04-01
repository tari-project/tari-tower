import { Color, Vector2, Vector3, DataTexture, type IUniform } from 'three';
import { subscribeWithSelector } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import { sceneStore } from './sceneStore.ts';

type TSharedUniforms = Record<string, IUniform>;

const blueNoiseUniforms = {
    u_blueNoiseTexture: { value: null },
    u_blueNoiseTexelSize: { value: new Vector2() },
    u_blueNoiseCoordOffset: { value: new Vector2() },
};

const heroSharedUniforms = {
    u_lightPosition: {
        value: new Vector3(sceneStore.getState().lightPositionX, sceneStore.getState().lightPositionY, sceneStore.getState().lightPositionZ),
    },
    u_goboTexture: { value: null },
    u_goboIntensity: { value: 0.4 },
    u_infoTexture: { value: new DataTexture() },
    u_infoTextureLinear: { value: new DataTexture() },
    u_endAnimationRatio: { value: 0 },
};

const initialState: TSharedUniforms = {
    u_time: { value: 0 },
    u_deltaTime: { value: 1 },
    u_resolution: { value: new Vector2() },
    u_viewportResolution: { value: new Vector2() },
    u_bgColor1: { value: new Color('#ffffff').convertSRGBToLinear() },
    u_bgColor2: { value: new Color('#d0d0d0').convertSRGBToLinear() },
    ...blueNoiseUniforms,
    ...heroSharedUniforms,
};

export const uniformsStore = createStore<TSharedUniforms>()(
    subscribeWithSelector((set) => ({
        ...initialState,
    }))
);
