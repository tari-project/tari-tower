import { SuccessLevel } from './types/stateManager.ts';
import { setAnimationProperties } from './store/propertiesStore.ts';
import { setStop, setLose, setStart, setWin } from './store/stateManagerStore.ts';
import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';

export { loadTowerAnimation, setAnimationProperties, removeTowerAnimation, setStop, setLose, setStart, setWin, SuccessLevel };
