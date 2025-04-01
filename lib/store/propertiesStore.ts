import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';

import type { IPropertiesState, IPropertyPair } from '../types/properties.ts';
import Block from '../scripts/logic/Block.ts';
import { uniformsStore } from './uniformsStore.ts';
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

    bgColor1: '#c2b2b2',
    bgColor2: '#858585',
    neutralColor: '#ffffff',
    mainColor: '#0096ff',
    successColor: '#00c881',
    failColor: '#ca0101',
    particlesColor: '#ca0101',
    // particlesColor: '#505050',
    goboIntensity: 0.45,
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

function showVisual() {
    propertiesStore.getState().setProperty({ propertyName: 'showVisual', value: false });
}

const setAnimationProperties = (properties: Record<string, unknown>[]) => {
    const propertyPairs: IPropertyPair[] = properties as unknown as IPropertyPair[];
    for (const property of propertyPairs) {
        if (property.propertyName === 'bgColor1') {
            uniformsStore.setState((c) => ({
                u_bgColor1: { value: c.u_bgColor1.value.set(property.value as Color).convertSRGBToLinear() },
            }));
        }

        if (property.propertyName === 'bgColor2') {
            uniformsStore.setState((c) => ({
                u_bgColor2: { value: c.u_bgColor2.value.set(property.value as Color).convertSRGBToLinear() },
            }));
        }

        propertiesStore.getState().setProperty(property);

        console.debug(property);
    }
};
export { setErrorBlock, showVisual, setAnimationProperties };
