import TariTower from './tower.ts';
import { stateManager } from './logic/stateManager.ts';
import { properties } from './core/properties.ts';
import { managerStore } from '../store/store.ts';

const tower = TariTower();

let time = 0;
let lastRender = 0;
const targetFPS = 50;
const frameInterval = 1 / targetFPS;
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

    window.addEventListener('resize', () => tower.onResize());
    tower.onResize();
    animate();
}

export async function loadTowerAnimation({ canvasId, offset = 0 }: { canvasId: string; offset?: number }) {
    if (document.getElementById(canvasId)) return;
    properties.offsetX = offset;
    properties.cameraOffsetX = properties.offsetX / window.innerWidth;
    try {
        await tower.preload({ canvasId, initCallback });
    } catch (e) {
        console.error('loadTowerAnimation', e);
    }
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
    if (!document.getElementById(canvasId)) return;
    const status = managerStore.getState().status;
    if (status === 'not-started') {
        managerStore.getState().setPreventRestartCycle(true);
        stateManager.reset();
    } else {
        stateManager.set('stop');
        managerStore.getState().setDestroyCanvas(true);
    }
}
