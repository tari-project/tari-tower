import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { properties } from './scripts/core/properties';
import { result, stateManager, status, statusIndex } from './scripts/logic/stateManager';

function setAnimationState(id: string, isReplay = false) {
	stateManager.set(id, isReplay);
}
interface Property {
	property: string;
	value: unknown;
}
function setAnimationProperties(newProps: Property[]) {
	for (const item of newProps) {
		properties[item.property] = item.value;
	}
}

export {
	loadTowerAnimation,
	removeTowerAnimation,
	setAnimationProperties,
	status as animationStatus,
	statusIndex as animationStatusIndex,
	result as animationResult,
	setAnimationState,
};
