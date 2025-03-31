import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';

import type { IPropertiesState, IPropertyPair } from '../types/properties.ts';
import Block from '../scripts/logic/Block.ts';

const initialState: IPropertiesState = {
    time: 0,
    deltaTime: 0,
    showVisual: true,
    offsetX: 0,
    cameraOffsetX: 0,
    width: 0,
    height: 0,
    viewportWidth: 0,
    viewportHeight: 0,

    bgColor1: '#ffffff',
    bgColor2: '#d0d0d0',
    neutralColor: '#ffffff',
    mainColor: '#0096ff',
    successColor: '#00c881',
    failColor: '#ca0101',
    particlesColor: '#505050',
    goboIntensity: 0.45,
    particlesOpacity: 0.75,
    particlesSize: 0.6,
    // particlesSize: 0.01,
};

interface IPropertiesStoreState extends IPropertiesState {
    setProperty: (property: IPropertyPair) => void;
}
export const propertiesStore = createStore<IPropertiesStoreState>()(
    subscribeWithSelector((set) => ({
        ...initialState,
        setProperty: (property: IPropertyPair) => set((c) => ({ ...c, property })),
    }))
);

export const setErrorBlock = (errorBlock?: Block | null): void => {
    propertiesStore.setState({ errorBlock });
};

export function showVisual() {
    propertiesStore.getState().setProperty({ propertyName: 'showVisual', value: true });
}
