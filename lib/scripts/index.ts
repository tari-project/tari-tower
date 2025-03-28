import TariTower from './tower.ts';
import { properties } from './core/properties.ts';
import { setStop, stateManagerStore } from '../store/stateManagerStore';

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
    console.debug('ANI remove tower', canvasId);
    if (!document.getElementById(canvasId)) return;
    const status = stateManagerStore.getState().status;
    if (status === 'not-started') {
        stateManagerStore.getState().setDestroyCanvas(true);
    } else {
        setStop();
        stateManagerStore.getState().setDestroyCanvas(true);
    }
}
