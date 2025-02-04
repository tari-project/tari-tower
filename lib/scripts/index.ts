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

export async function loadTowerAnimation({ canvasId, offset = 0 }: { canvasId: string; offset?: number }) {
	_offset = offset;
	try {
		await tower.preload({ canvasId, initCallback });
	} catch (e) {
		console.error('loadTowerAnimation', e);
	}
}

function removeCanvas({ canvasId }: { canvasId: string }) {
	const canvas = document.getElementById(canvasId);
	if (!canvas) {
		return;
	}
	canvas.remove();

	tower.renderer.state.reset();
	tower.renderer.resetState();
	tower.renderer.dispose();
	properties.orbitTarget = undefined;

	resetProperties();
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
	const canvas = document.getElementById(canvasId);
	if (!canvas) return;

	const resultDelays = {
		[AnimationResult.FAILED]: errorAnimationDuration * 1000,
		[AnimationResult.COMPLETED]: successAnimationDuration * 1000,
		[AnimationResult.REPLAY]: successAnimationDuration * 1000,
		[AnimationResult.STOP]: stopAnimationDuration * 1000,
	};
	const alreadyStopped = status === 'not-started';
	const useResultDelay = result !== null && result !== 'none';

	const baseDelay = 1000 * 1.5;
	const resultDelay = resultDelays[result] || 1000;
	const safeTimeoutDelay = useResultDelay ? baseDelay + resultDelay : baseDelay;

	const resultWithStopDelay = safeTimeoutDelay + stopAnimationDuration * baseDelay;
	const removeDelay = alreadyStopped ? 0 : resultWithStopDelay;

	if (!alreadyStopped) {
		const stopTimeout = setTimeout(() => {
			setAnimationState('stop');
			clearTimeout(stopTimeout);
		}, safeTimeoutDelay);
	}

	const removeTimeout = setTimeout(() => {
		removeCanvas({ canvasId });
		clearTimeout(removeTimeout);
	}, removeDelay);
}
