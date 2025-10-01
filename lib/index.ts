import { Color } from 'three';
import { properties } from './scripts/core/properties';
import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { getTowerLogPrefix } from './scripts/utils/logger';
import { stateManager } from './scripts/modules.ts';

interface Property {
	property: string;
	value: unknown;
}

const getCurrentAnimationState = () => stateManager.getStatus();
const getCurrentFlags = () => stateManager._getFlags();
function setAnimationState(id: string, isReplay?: boolean) {
	stateManager.set(id, isReplay);
}
function setAnimationProperties(newProps: Property[]) {
	for (const item of newProps) {
		properties[item.property] = item.value;

		if (item.property === 'bgColor1' && properties.sharedUniforms) {
			properties.sharedUniforms.u_bgColor1.value.set(item.value as Color).convertSRGBToLinear();
		}

		if (item.property === 'bgColor2' && properties.sharedUniforms) {
			properties.sharedUniforms.u_bgColor2.value.set(item.value as Color).convertSRGBToLinear();
		}
	}
}

export { getCurrentFlags, loadTowerAnimation, removeTowerAnimation, getTowerLogPrefix, getCurrentAnimationState, setAnimationState, setAnimationProperties };
