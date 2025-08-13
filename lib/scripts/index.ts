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
let _frame: number;
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

	// Schedule next frame
	// Note: cancelAnimationFrame is not needed here since requestAnimationFrame
	// automatically cancels the previous frame
	_frame = requestAnimationFrame(animate);
}

async function initCallback() {
	try {
		logInfo('Initializing Tari Tower...');
		await tower.init();

		time = performance.now() / 1000;
		lastRender = time;

		window.addEventListener('resize', tower.onResize);
		tower.onResize();
		animate();
		logInfo('Tari Tower initialized successfully.');
	} catch (error) {
		logError('initCallback:', error);
	}
}

export async function loadTowerAnimation({ canvasId, offset = 0 }: { canvasId: string; offset?: number }) {
	properties.offsetX = offset;
	properties.cameraOffsetX = properties.offsetX / window.innerWidth;
	const canvasEl = document.getElementById(canvasId);
	resetCompleted = false;
	towerRemovedSignal.add(() => {
		resetCompleted = true;
	});

	try {
		if (canvasEl) {
			await tower.preload({ canvasEl, initCallback });
		}
	} catch (e) {
		logError('loadTowerAnimation', e);
	}
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
	if (!document.getElementById(canvasId)) return;
	logInfo(`[removeTowerAnimation] initiated | current status:"${status}"`);
	if (status === 'not-started') {
		gameEndedSignal.dispatch();
	} else {
		stateManager.setRemove(true);
		stateManager.set('stop');
	}
	time = 0;
	lastRender = 0;
	while (!resetCompleted) {
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
	if (resetCompleted) {
		logInfo('[removeTowerAnimation] Tower animation removed successfully.');
	}
}
