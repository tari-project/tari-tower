import { TariTower } from './tower.ts';
import { StateManager } from './logic/stateManager.ts';

import { ErrorAnimationManager } from './logic/errorAnimationManager.ts';

const tower = TariTower();
const stateManagerInstance = StateManager();
const failAnimation = ErrorAnimationManager();

export { tower, stateManagerInstance as stateManager, failAnimation };
