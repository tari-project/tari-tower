import TariTower from './tower.ts';
import { setStop, stateManagerStore } from '../store/stateManagerStore';
import { propertiesStore } from '../store/propertiesStore.ts';

const tower = TariTower();

let time = 0;
let lastRender = 0;
const targetFPS = 60;
const frameInterval = 1 / targetFPS;
let frame: number;

const setProperty = propertiesStore.getState().setProperty;

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
    tower
        .init()
        .then(() => {
            time = performance.now() / 1000;
            lastRender = time;

            window.addEventListener('resize', () => tower.onResize());
            tower.onResize();
            animate();
        })
        .catch((e) => {
            console.error('init err:', e);
        });
}

export async function loadTowerAnimation({ canvasId, offset = 0 }: { canvasId: string; offset?: number }) {
    if (document.getElementById(canvasId)) return;

    setProperty({ propertyName: 'offsetX', value: offset });
    setProperty({ propertyName: 'cameraOffsetX', value: offset / window.innerWidth });
    try {
        await tower.preload({ canvasId, initCallback });
    } catch (e) {
        console.error('loadTowerAnimation', e);
    }
}

export async function removeTowerAnimation({ canvasId }: { canvasId: string }) {
    if (!document.getElementById(canvasId)) return;
    const status = stateManagerStore.getState().status;

    if (status === 'not-started') {
        stateManagerStore.getState().setDestroyCanvas(true);
    } else {
        setStop();
        stateManagerStore.getState().setDestroyCanvas(true);
    }
}
