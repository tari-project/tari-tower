import TariTower from './tower.ts';
import { stateManager, status } from './logic/stateManager.ts';
import { gameEndedSignal, towerRemovedSignal } from './logic/signals.ts';
import { properties } from './core/properties.ts';
import { logError, logInfo } from './utils/logger.ts';

const tower = TariTower();

let time = 0;
let lastRender = 0;
const targetFPS = 50;
const frameInterval = 1 / targetFPS;
let resetCompleted = false;

/**
 * Main animation loop that controls rendering at a fixed frame rate
 * Uses requestAnimationFrame but limits actual renders to targetFPS
 */
function animate() {
	const newTime = performance.now() / 1000;
	const dt = newTime - time;
	if (newTime - lastRender >= frameInterval) {
		lastRender = newTime;
		tower.render(dt);
		time = newTime;
	}

	requestAnimationFrame(animate);
}

async function initCallback() {
	logInfo('[loadTowerAnimation] Initializing...');
	try {
		await tower.init();
		logInfo('[loadTowerAnimation] Tari Tower initialized successfully.');
		time = performance.now() / 1000;
		lastRender = time;
		window.addEventListener('resize', tower.onResize);
		tower.onResize();
		animate();
	} catch (error) {
		logError('[loadTowerAnimation] initCallback:', error);
	}
}

export async function loadTowerAnimation({ canvasId, offset = 0 }: { canvasId: string; offset?: number }) {
	resetCompleted = false;
	towerRemovedSignal.add(() => {
		resetCompleted = true;
	});
	if (document.getElementById(canvasId)) return;

	properties.offsetX = offset;
	properties.cameraOffsetX = properties.offsetX / window.innerWidth;

	const root = document.getElementById('root');

	if (root) {
		const canvasEl = document.createElement('canvas');
		canvasEl.setAttribute('id', canvasId);
		root.appendChild(canvasEl);
		canvasEl.setAttribute('style', 'display: block; width: 100%; height: 100%;');
		try {
			await tower.preload({ canvasEl, initCallback });
		} catch (e) {
			logError('[loadTowerAnimation]', e);
		}
	}
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
	if (!document.getElementById(canvasId)) return;
	logInfo(`[removeTowerAnimation] initiated | current status: ${status}`);
	if (status === 'not-started') {
		gameEndedSignal.dispatch();
	} else {
		stateManager.setRemove(true);
		stateManager.set('stop');
	}
	time = 0;
	lastRender = 0;

	while (!resetCompleted) {
		await new Promise((resolve) => setTimeout(resolve, 150));
	}
	if (resetCompleted) {
		logInfo('[removeTowerAnimation] Tower animation removed successfully.');
	}
}
