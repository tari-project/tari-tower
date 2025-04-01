import { createStore } from 'zustand/vanilla';
import { Color, Vector2, Vector3, DataTexture, Texture } from 'three';
import { subscribeWithSelector } from 'zustand/middleware';
import { sceneStore } from './sceneStore.ts';
import { ISharedUniforms, TUniform } from '../types/uniforms.ts';

type State = ISharedUniforms & {
    sharedUniforms: ISharedUniforms;
};
interface Actions {
    setUniform: (u: TUniform) => void;
}
type UniformState = State & Actions;

const blueNoiseUniforms = {
    u_blueNoiseTexture: { value: new Texture() },
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

const initialStateUniforms: ISharedUniforms = {
    u_time: { value: 0 },
    u_deltaTime: { value: 1 },
    u_resolution: { value: new Vector2() },
    u_viewportResolution: { value: new Vector2() },
    u_bgColor1: { value: new Color('#ffffff').convertSRGBToLinear() },
    u_bgColor2: { value: new Color('#d0d0d0').convertSRGBToLinear() },
    ...blueNoiseUniforms,
    ...heroSharedUniforms,
};

export const uniformsStore = createStore<UniformState>()(
    subscribeWithSelector((set) => ({
        sharedUniforms: initialStateUniforms,
        ...initialStateUniforms,
        setUniform: (u) =>
            set((s) => {
                const { setUniform: _, ...c } = s;
                const updatedUniforms = { ...c, ...u };
                return { ...updatedUniforms, sharedUniforms: updatedUniforms };
            }),
    }))
);
export const setTimes = (time: number, dt: number) => {
    uniformsStore.getState().setUniform({ u_time: { value: time } });
    uniformsStore.getState().setUniform({ u_deltaTime: { value: dt } });
};
