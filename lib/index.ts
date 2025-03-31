import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { setStop, setLose, setStart, showVisual, setWin } from './store/stateManagerStore.ts';
import { SuccessLevel } from './types/stateManager.ts';
import { IPropertyPair, propertiesStore } from './store/propertiesStore.ts';

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
