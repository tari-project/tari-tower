import { Scene } from 'three';
import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';

import { IScene } from '../types/properties.ts';

const initialState = {
    scene: new Scene(),
    lightPositionX: -2,
    lightPositionY: 6,
    lightPositionZ: -4,
    lightCameraSize: 4.5,
    lightCameraBias: 0.005,
    lightCameraNear: 3,
    lightCameraFar: 16,
};
export const sceneStore = createStore<IScene>()(
    subscribeWithSelector((set) => ({
        ...initialState,
    }))
);
