import GUI from 'lil-gui';

// import { loadTowerAnimation, removeTowerAnimation, setAnimationProperties, setAnimationState } from '../lib';
import { loadTowerAnimation, removeTowerAnimation, setAnimationProperties, setAnimationState } from '@tari-project/tari-tower';

if (import.meta.env.MODE === 'development') {
	const gui = new GUI();
	gui.add(document, 'title');

	const actions = {
		removeCanvas: () => removeTowerAnimation({ canvasId: 'canvas_id' }),
		initCanvas: () => loadTowerAnimation({ canvasId: 'canvas_id', offset: 0 }),
		showVisual: () => setAnimationState('showVisual'),
		start: () => setAnimationState('start'),
		stopVis: () => setAnimationState('stop'),
		success: () => setAnimationState('success'),
		success2: () => setAnimationState('success2'),
		success3: () => setAnimationState('success3', true),
		fail: () => setAnimationState('fail'),
		darkMode: () => {
			setAnimationProperties(animationDarkBg);
			document.getElementById('root')!.style.backgroundColor = '#000';
		},
		lightMode: () => {
			setAnimationProperties(animationLightBg);
			document.getElementById('root')!.style.backgroundColor = '#fff';
		},
	};

	gui.add(actions, 'showVisual');
	gui.add(actions, 'start');
	gui.add(actions, 'stopVis');
	gui.add(actions, 'success');
	gui.add(actions, 'success2');
	gui.add(actions, 'success3');
	gui.add(actions, 'fail');
	gui.add(actions, 'removeCanvas');
	gui.add(actions, 'darkMode');
	gui.add(actions, 'lightMode');
	gui.add(actions, 'initCanvas');

	function handleLoad() {
		loadTowerAnimation({ canvasId: 'canvas_id', offset: 0 });
	}

	document.addEventListener('DOMContentLoaded', handleLoad);

	const timeOutId = setTimeout(() => {
		document.removeEventListener('DOMContentLoaded', handleLoad);
		clearTimeout(timeOutId);
	}, 500);

	const animationLightBg = [
		{ property: 'bgColor1', value: '#ffffff' },
		{ property: 'bgColor2', value: '#d0d0d0' },
		{ property: 'neutralColor', value: '#ffffff' },
		{ property: 'mainColor', value: '#0096ff' },
		{ property: 'successColor', value: '#00c881' },
		{ property: 'failColor', value: '#ca0101' },
		{ property: 'particlesColor', value: '#505050' },
		{ property: 'goboIntensity', value: 0.45 },
		{ property: 'particlesOpacity', value: 0.75 },
		{ property: 'particlesSize', value: 0.01 },
	];
	const animationDarkBg = [
		{ property: 'bgColor1', value: '#212121' },
		{ property: 'bgColor2', value: '#212121' },
		{ property: 'neutralColor', value: '#040723' },
		{ property: 'successColor', value: '#c9eb00' },
		{ property: 'mainColor', value: '#813bf5' },
		{ property: 'failColor', value: '#ff5610' },
		{ property: 'particlesColor', value: '#813bf5' },
		{ property: 'goboIntensity', value: 0.5 },
		{ property: 'particlesOpacity', value: 0.95 },
		{ property: 'particlesSize', value: 0.015 },
	];
}
