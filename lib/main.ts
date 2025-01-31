import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { properties } from './scripts/core/properties';
import { result, stateManager, status, statusIndex } from './scripts/logic/stateManager';

export function setAnimationState(id: string, isReplay = false) {
	stateManager.set(id, isReplay);
}
interface Property {
	property: string;
	value: unknown;
}
export function setAnimationProperties(newProps: Property[]) {
	for (const item of newProps) {
		properties[item.property] = item.value;
	}
}

export { loadTowerAnimation, removeTowerAnimation, status as animationStatus, statusIndex as animationStatusIndex, result as animationResult };
