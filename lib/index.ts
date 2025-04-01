import { Color } from 'three';
import { SuccessLevel } from './types/stateManager.ts';
import { IPropertyPair } from './types/properties.ts';
import { propertiesStore, showVisual } from './store/propertiesStore.ts';
import { setStop, setLose, setStart, setWin } from './store/stateManagerStore.ts';
import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { uniformsStore } from './store/uniformsStore.ts';

const setAnimationProperties = (properties: IPropertyPair[]) => {
    for (const property of properties) {
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
    }
};

export {
    loadTowerAnimation,
    setAnimationProperties,
    removeTowerAnimation,
    setStop,
    setLose,
    setStart,
    showVisual,
    setWin,
    SuccessLevel,
};
export type { IPropertyPair };
