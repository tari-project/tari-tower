import { properties, resetProperties } from './core/properties';

import { result, status } from './logic/stateManager';
import { setAnimationState } from '../main';
import { stopAnimationDuration } from './logic/stopAnimationManager';
import { AnimationResult } from '../types';
import { errorAnimationDuration } from './logic/errorAnimationManager';
import { successAnimationDuration } from './logic/successAnimationManager';
import TariTower from './tower.ts';

const tower = TariTower();

let time = 0;
let lastRender = 0;
const targetFPS = 60;
const frameInterval = 1 / targetFPS;
let _offset = 0;

function animate() {
	const newTime = performance.now() / 1000;
	const dt = newTime - time;
	if (newTime - lastRender >= frameInterval) {
		lastRender = newTime;
		tower.render(dt);
		time = newTime;
	}
	tower.renderer.setAnimationLoop(animate);
}

function initCallback() {
	tower.init();

	time = performance.now() / 1000;
	lastRender = time;
	window.addEventListener('resize', () => tower.onResize(_offset));
	tower.onResize(_offset);
	animate();
}

export async function loadTowerAnimation(canvasId: string, offset = 0) {
	_offset = offset;
	try {
		await tower.preload({ canvasId, initCallback });
	} catch (e) {
		console.error('loadTowerAnimation', e);
	}
}

function removeCanvas(canvasId) {
	const canvas = document.getElementById(canvasId);

	canvas?.remove();

	tower.renderer?.domElement?.remove();
	tower.renderer?.state?.reset();
	tower.renderer?.resetState();
	properties.orbitTarget = undefined;
	tower.renderer?.dispose();

	resetProperties();
}

export async function removeTowerAnimation(canvasId: string) {
	const canvas = document.getElementById(canvasId);
	if (!canvas) return;

	const resultDelays = {
		[AnimationResult.FAILED]: errorAnimationDuration,
		[AnimationResult.COMPLETED]: successAnimationDuration,
		[AnimationResult.REPLAY]: successAnimationDuration,
		[AnimationResult.STOP]: stopAnimationDuration,
	};
	const alreadyStopped = status === 'not-started';
	const useResultDelay = result !== null;

	const baseDelay = 1000 * 3.5;
	const resultDelay = (resultDelays[result] || 1) * 1000 + baseDelay;
	const baseStopDelay = stopAnimationDuration * 1000 * 2;

	const removeDelay = useResultDelay ? resultDelay : baseDelay;
	const stopDelay = useResultDelay ? baseStopDelay + resultDelay : baseStopDelay;

	if (!alreadyStopped) {
		setTimeout(() => setAnimationState('stop'), stopDelay);
	}

	setTimeout(() => removeCanvas(canvasId), alreadyStopped ? removeDelay : removeDelay + stopDelay);
}
