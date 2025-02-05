import { setAnimationState } from '../main';
import TariTower from './tower.ts';
import { status as currentStatus, stateManager } from './logic/stateManager.ts';
import { gameEndedSignal } from './logic/signals.ts';

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
	if (document.getElementById(canvasId)) return;
	try {
		await tower.preload({ canvasId, initCallback });
	} catch (e) {
		console.error('loadTowerAnimation', e);
	}
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
	const canvas = document.getElementById(canvasId);
	if (!canvas) return;

	const alreadyStopped = currentStatus === 'not-started';
	if (!alreadyStopped) {
		stateManager.setRemove(true);
		setAnimationState('stop');
	} else {
		gameEndedSignal.dispatch(true);
	}
}
