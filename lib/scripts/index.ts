import TariTower from './tower.ts';
import { stateManager, status } from './logic/stateManager.ts';
import { gameEndedSignal } from './logic/signals.ts';
import { properties } from './core/properties.ts';
import setupLogger from './utils/logger.ts';

const tower = TariTower();

let time = 0;
let lastRender = 0;
const targetFPS = 50;
const frameInterval = 1 / targetFPS;
let _frame: number;

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
		await tower.init();

		time = performance.now() / 1000;
		lastRender = time;

		window.addEventListener('resize', tower.onResize);
		tower.onResize();
		animate();
	} catch (error) {
		console.error('Error in initCallback:', error);
	}
}

export async function loadTowerAnimation({ canvasId, offset = 0 }: { canvasId: string; offset?: number }) {
	setupLogger();
	properties.offsetX = offset;
	properties.cameraOffsetX = properties.offsetX / window.innerWidth;
	const canvasEl = document.getElementById(canvasId);

	try {
		if (canvasEl) {
			await tower.preload({ canvasEl, initCallback });
		}
	} catch (e) {
		console.error('loadTowerAnimation', e);
	}
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
	if (!document.getElementById(canvasId)) return;

	if (status === 'not-started') {
		gameEndedSignal.dispatch();
	} else {
		stateManager.set('stop');
		stateManager.setRemove(true);
	}
	time = 0;
	lastRender = 0;
}
