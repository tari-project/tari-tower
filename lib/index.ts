import * as THREE from 'three';
import { properties } from './scripts/core/properties';
import { stateManager, status } from './scripts/logic/stateManager';
import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { getTowerLogPrefix } from './scripts/utils/logger';

/**
 * Animation properties
 */

interface Property {
	property: string;
	value: unknown;
}
export function setAnimationState(id: string, isReplay?: boolean) {
	stateManager.set(id, isReplay);
}

export function setAnimationProperties(newProps: Property[]) {
	for (const item of newProps) {
		properties[item.property] = item.value;

		if (item.property === 'bgColor1' && properties.sharedUniforms) {
			properties.sharedUniforms.u_bgColor1.value.set(item.value as THREE.Color).convertSRGBToLinear();
		}

		if (item.property === 'bgColor2' && properties.sharedUniforms) {
			properties.sharedUniforms.u_bgColor2.value.set(item.value as THREE.Color).convertSRGBToLinear();
		}
	}
}

/**
 * Current animation state
 */
export const animationStatus = status;
export { loadTowerAnimation, removeTowerAnimation, getTowerLogPrefix };
