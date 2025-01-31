import { loadTowerAnimation, removeTowerAnimation } from './scripts/index.ts';
import { properties } from './scripts/core/properties.ts';
import { result, stateManager, status, statusIndex } from './scripts/logic/stateManager.ts';

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
