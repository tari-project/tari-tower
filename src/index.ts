import GUI from 'lil-gui';

// import { loadTowerAnimation, removeTowerAnimation, setAnimationState } from '@tari-project/tari-tower';
import { loadTowerAnimation, removeTowerAnimation, setAnimationState } from '../lib';

if (import.meta.env.MODE === 'development') {
	const gui = new GUI();
	gui.add(document, 'title');

	const actions = {
		removeCanvas: () => removeTowerAnimation({ canvasId: 'canvas-id' }),
		initCanvas: () => loadTowerAnimation({ canvasId: 'canvas-id', offset: 0 }),
		showVisual: () => setAnimationState('showVisual'),
		start: () => setAnimationState('start'),
		stopVis: () => setAnimationState('stop'),
		success: () => setAnimationState('success'),
		success2: () => setAnimationState('success2'),
		success3: () => setAnimationState('success3', true),
		fail: () => setAnimationState('fail'),
	};

	gui.add(actions, 'showVisual');
	gui.add(actions, 'start');
	gui.add(actions, 'stopVis');
	gui.add(actions, 'success');
	gui.add(actions, 'success2');
	gui.add(actions, 'success3');
	gui.add(actions, 'fail');
	gui.add(actions, 'removeCanvas');
	gui.add(actions, 'initCanvas');

	function handleLoad() {
		loadTowerAnimation({ canvasId: 'canvas-id', offset: 0 });
	}

	document.addEventListener('DOMContentLoaded', handleLoad);

	const timeOutId = setTimeout(() => {
		document.removeEventListener('DOMContentLoaded', handleLoad);
		clearTimeout(timeOutId);
	}, 500);
}
