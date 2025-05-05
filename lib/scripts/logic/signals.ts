import MinSignal from 'min-signal';

export const stateSignal = new MinSignal();
export const spawnSignal = new MinSignal();
export const endCycleSignal = new MinSignal();
export const gameEndedSignal = new MinSignal();
export const towerRemovedSignal = new MinSignal();

export const errorAnimationEndedSignal = new MinSignal();
export const winAnimationSignal = new MinSignal();
export const completeAnimationEndedSignal = new MinSignal();
export const stopAnimationEndedSignal = new MinSignal();
export const restartSignal = new MinSignal();

export const canvasSignal = new MinSignal();

export const lightCameraHelperSignal = new MinSignal();
export const lightCameraUpdateSignal = new MinSignal();
