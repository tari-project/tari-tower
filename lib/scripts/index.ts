import { setAnimationState } from '../main';
import TariTower from './tower.ts';
import { stateManager, status } from './logic/stateManager.ts';
import { gameEndedSignal } from './logic/signals.ts';

const tower = TariTower();

let time = 0;
let lastRender = 0;
const targetFPS = 60;
const frameInterval = 1 / targetFPS;
let _offset = 0;
let frame: number;
function animate() {
	const newTime = performance.now() / 1000;
	const dt = newTime - time;
	if (newTime - lastRender >= frameInterval) {
		lastRender = newTime;
		tower.render(dt);
		time = newTime;
	}
	cancelAnimationFrame(frame);
	frame = requestAnimationFrame(animate);
}

function initCallback() {
	void tower.init();

	time = performance.now() / 1000;
	lastRender = time;
	window.addEventListener('resize', () => tower.onResize(_offset));
	tower.onResize(_offset);
	animate();
}

export async function loadTowerAnimation({ canvasId, offset = 0 }: { canvasId: string; offset?: number }) {
	if (document.getElementById(canvasId)) return;
	_offset = offset;
	try {
		await tower.preload({ canvasId, initCallback });
	} catch (e) {
		console.error('loadTowerAnimation', e);
	}
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
	if (!document.getElementById(canvasId)) return;
	if (status === 'not-started') {
		gameEndedSignal.dispatch();
	} else {
		stateManager.setRemove(true);
		setAnimationState('stop');
	}
}
