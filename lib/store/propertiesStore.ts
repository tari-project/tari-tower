import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';

import type { IPropertiesState, IPropertyPair } from '../types/properties.ts';
import Block from '../scripts/logic/Block.ts';
import { setUniform } from './uniformsStore.ts';
import { Color } from 'three';

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
    particlesColor: '#e20093',
    goboIntensity: 0.95,
    particlesOpacity: 1,
    particlesSize: 1,
};

type State = IPropertiesState;
interface Actions {
    setProperty: (property: IPropertyPair) => void;
}

type PropertiesState = State & Actions;
export const propertiesStore = createStore<PropertiesState>()(
    subscribeWithSelector((set) => ({
        ...initialState,
        setProperty: (property: IPropertyPair) => set({ [property.propertyName]: property.value }),
    }))
);

const setErrorBlock = (errorBlock?: Block | null): void => {
    propertiesStore.setState({ errorBlock });
};

const setAnimationProperties = (properties: Record<string, unknown>[]) => {
    const propertyPairs: IPropertyPair[] = properties as unknown as IPropertyPair[];
    for (const property of propertyPairs) {
        if (property.propertyName === 'bgColor1') {
            setUniform({
                u_bgColor1: { value: new Color(property.value as Color).convertSRGBToLinear() },
            });
        }

        if (property.propertyName === 'bgColor2') {
            setUniform({
                u_bgColor2: { value: new Color(property.value as Color).convertSRGBToLinear() },
            });
        }

        propertiesStore.getState().setProperty(property);
    }
};
export { setErrorBlock, setAnimationProperties };
