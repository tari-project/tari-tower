import { TariTower } from './tower.ts';
import { StateManager } from './logic/stateManager.ts';
import { SystemManager } from './logic/systemManager.ts';

const systemManager = SystemManager();
const stateManager = StateManager();
const tower = TariTower();

export { tower, systemManager, stateManager };
