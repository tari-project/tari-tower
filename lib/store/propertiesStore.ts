import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';

import { IProperties } from '../types/properties.ts';

const initialState: IProperties = {
    deltaTime: 0,
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
    particlesSize: 0.01,
};

type TPropertyName = keyof IProperties;
type TPropertyValue = IProperties[TPropertyName];
interface TPropertyPair {
    propertyName: TPropertyName;
    value: TPropertyValue;
}

interface IPropertiesStoreState extends IProperties {
    setProperty: (property: TPropertyPair) => void;
}
export const propertiesStore = createStore<IPropertiesStoreState>()(
    subscribeWithSelector((set) => ({
        ...initialState,
        setProperty: (property: TPropertyPair) => set((c) => ({ ...c, property })),
    }))
);
