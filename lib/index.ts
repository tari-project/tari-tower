import * as THREE from 'three';
import { properties } from './scripts/core/properties';
import { loadTowerAnimation, removeTowerAnimation } from './scripts/index';
import { setStop, setLose, setStart, showVisual, setWin } from './store/stateManagerStore.ts';
import { SuccessLevel } from './types/stateManager.ts';

interface Property {
    property: string;
    value: unknown;
}

function setAnimationProperties(newProps: Property[]) {
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

export {
    loadTowerAnimation,
    removeTowerAnimation,
    setAnimationProperties,
    setStop,
    setLose,
    setStart,
    showVisual,
    setWin,
    SuccessLevel,
};
