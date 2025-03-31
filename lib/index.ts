import { SuccessLevel } from './types/stateManager.ts';
import { IPropertyPair } from './types/properties.ts';
import { propertiesStore } from './store/propertiesStore.ts';
import { setStop, setLose, setStart, showVisual, setWin } from './store/stateManagerStore.ts';
import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';

const setAnimationProperties = (properties: IPropertyPair[]) => {
    for (const property of properties) {
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
