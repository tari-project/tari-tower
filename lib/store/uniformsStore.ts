import { Color, Vector2 } from 'three';
import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';

const initialState = {
    u_time: { value: 0 },
    u_deltaTime: { value: 1 },
    u_resolution: { value: new Vector2() },
    u_viewportResolution: { value: new Vector2() },
    u_bgColor1: { value: new Color() },
    u_bgColor2: { value: new Color() },
};
export type TSharedUniforms = typeof initialState;

export const uniformsStore = createStore<TSharedUniforms>()(
    subscribeWithSelector((set) => ({
        ...initialState,
    }))
);
