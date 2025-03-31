import { Color, Vector2 } from 'three';
import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { SharedUniforms } from '../types/properties.ts';

const initialState = {
    u_time: { value: 0 },
    u_deltaTime: { value: 1 },
    u_resolution: { value: new Vector2() },
    u_viewportResolution: { value: new Vector2() },
    u_bgColor1: { value: new Color() },
    u_bgColor2: { value: new Color() },
};
const uniformsStore = createStore<SharedUniforms>()(
    subscribeWithSelector((set) => ({
        ...initialState,
    }))
);
