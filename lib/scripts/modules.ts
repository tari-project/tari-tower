import { StateManager } from './logic/stateManager.ts';
import { Hero } from './visuals/hero/hero.ts';
import { ErrorAnimationManager } from './logic/errorAnimationManager.ts';

const heroBlocks = Hero();
const stateManagerInstance = StateManager();
const failAnimation = ErrorAnimationManager();

export { stateManagerInstance as stateManager, heroBlocks, failAnimation };
