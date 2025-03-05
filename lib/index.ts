import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { properties } from './scripts/core/properties';
import { stateManager, status as animationStatus } from './scripts/logic/stateManager';
import * as THREE from 'three';

export function setAnimationState(id: string, isReplay?: boolean) {
	stateManager.set(id, isReplay);
}

function initAudio(notificationSoundCB: () => void, blockWinSoundCB: (tier: number) => void) {
	stateManager.initAudio(notificationSoundCB, blockWinSoundCB);
}
interface Property {
	property: string;
	value: unknown;
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

export { loadTowerAnimation, removeTowerAnimation, animationStatus, initAudio };
