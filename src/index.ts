import GUI from 'lil-gui';

import { loadTowerAnimation, removeTowerAnimation, setAnimationProperties, setLose, setStart, setStop, setWin, SuccessLevel } from '../lib/index';
// } from '@tari-project/tari-tower';

if (import.meta.env.MODE === 'development') {
    const gui = new GUI({
        closeFolders: true,
    });

    const states = gui.addFolder('states');
    const theme = gui.addFolder('theme')?.open();
    const canvas = gui.addFolder('canvas');

    const actions = {
        removeCanvas: () => removeTowerAnimation({ canvasId: 'canvas-id' }),
        initCanvas: () => loadTowerAnimation({ canvasId: 'canvas-id', offset: 0 }),
        start: () => setStart(),
        stopVis: () => setStop(),
        success: () => setWin({ completeAnimationLevel: SuccessLevel.ONE }),
        success2: () => setWin({ completeAnimationLevel: SuccessLevel.TWO, isReplay: true }),
        success3: () => setWin({ completeAnimationLevel: SuccessLevel.THREE }),
        fail: () => setLose(),
        darkMode: () => {
            setAnimationProperties(animationDarkBg);
            document.getElementById('root')!.style.backgroundColor = '#000';
        },
        lightMode: () => {
            setAnimationProperties(animationLightBg);
            document.getElementById('root')!.style.backgroundColor = '#fff';
        },
    };

    states.add(actions, 'start');
    states.add(actions, 'stopVis');
    states.add(actions, 'success');
    states.add(actions, 'success2');
    states.add(actions, 'success3');
    states.add(actions, 'fail');
    theme.add(actions, 'darkMode');
    theme.add(actions, 'lightMode');
    canvas.add(actions, 'initCanvas');
    canvas.add(actions, 'removeCanvas');

    function handleLoad() {
        void loadTowerAnimation({ canvasId: 'canvas-id', offset: 0 });
    }

    document?.addEventListener('DOMContentLoaded', handleLoad);

    const timeOutId = setTimeout(() => {
        document?.removeEventListener('DOMContentLoaded', handleLoad);
        clearTimeout(timeOutId);
    }, 500);

    const animationLightBg = [
        { propertyName: 'bgColor1', value: '#ffffff' },
        { propertyName: 'bgColor2', value: '#d0d0d0' },
        { propertyName: 'neutralColor', value: '#ffffff' },
        { propertyName: 'mainColor', value: '#0096ff' },
        { propertyName: 'successColor', value: '#00c881' },
        { propertyName: 'failColor', value: '#ca0101' },
        { propertyName: 'particlesColor', value: '#505050' },
        { propertyName: 'goboIntensity', value: 0.45 },
        { propertyName: 'particlesOpacity', value: 0.75 },
        { propertyName: 'particlesSize', value: 0.01 },
    ];
    const animationDarkBg = [
        { propertyName: 'bgColor1', value: '#212121' },
        { propertyName: 'bgColor2', value: '#212121' },
        { propertyName: 'neutralColor', value: '#040723' },
        { propertyName: 'successColor', value: '#c9eb00' },
        { propertyName: 'mainColor', value: '#813bf5' },
        { propertyName: 'failColor', value: '#ff5610' },
        { propertyName: 'particlesColor', value: '#813bf5' },
        { propertyName: 'goboIntensity', value: 0.75 },
        { propertyName: 'particlesOpacity', value: 0.95 },
        { propertyName: 'particlesSize', value: 0.015 },
    ];
}
