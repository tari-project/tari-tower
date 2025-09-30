import { loadTowerAnimation, removeTowerAnimation, setAnimationProperties, setAnimationState } from '@tari-project/tari-tower';
import { Pane } from 'tweakpane';

const canvasId = 'canvas_id';

const LIGHT = [
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
const DARK = [
	{ property: 'bgColor1', value: '#212121' },
	{ property: 'bgColor2', value: '#212121' },
	{ property: 'neutralColor', value: '#040723' },
	{ property: 'successColor', value: '#c9eb00' },
	{ property: 'mainColor', value: '#813bf5' },
	{ property: 'failColor', value: '#ff5610' },
	{ property: 'particlesColor', value: '#813bf5' },
	{ property: 'goboIntensity', value: 0.4 },
	{ property: 'particlesOpacity', value: 0.95 },
	{ property: 'particlesSize', value: 0.015 },
];

if (import.meta.env.MODE === 'development') {
	const p = new Pane({ title: 'Tari Tower' });

	const tab = p.addTab({
		pages: [{ title: 'Parameters' }, { title: 'Actions' }],
	});

	const PARAMS = {
		speed: 1,
	};
	tab.pages[0].addBinding(PARAMS, 'speed', { min: 0.5, max: 10, step: 0.5 }).on('change', (e) => {
		setAnimationProperties([{ property: 'animationSpeed', value: e.value }]);
	});

	const gen = tab.pages[1].addFolder({ title: 'General' });
	const s = tab.pages[1].addFolder({ title: 'States' });

	gen.addButton({ title: 'remove' }).on('click', () => removeTowerAnimation({ canvasId }));
	gen.addButton({ title: 'load' }).on('click', () => loadTowerAnimation({ canvasId, offset: 0 }));
	gen.addButton({ title: 'show' }).on('click', () => setAnimationState('showVisual'));

	gen.addButton({ title: 'dark mode' }).on('click', () => {
		setAnimationProperties(DARK);
		document.body.style.backgroundColor = '#000';
	});
	gen.addButton({ title: 'light mode' }).on('click', () => {
		setAnimationProperties(LIGHT);
		document.body.style.backgroundColor = '#fff';
	});

	s.addButton({ title: 'start' }).on('click', () => setAnimationState('start'));
	s.addButton({ title: 'stop' }).on('click', () => setAnimationState('stop'));
	s.addButton({ title: 'fail' }).on('click', () => setAnimationState('fail'));
	s.addButton({ title: 'success' }).on('click', () => setAnimationState('success'));
	s.addButton({ title: 'success2' }).on('click', () => setAnimationState('success2'));
	s.addButton({ title: 'success3' }).on('click', () => setAnimationState('success3', true));

	function handleLoad() {
		loadTowerAnimation({ canvasId, offset: 0 });
	}
	document.addEventListener('DOMContentLoaded', handleLoad);
	const timeOutId = setTimeout(() => {
		document.removeEventListener('DOMContentLoaded', handleLoad);
		clearTimeout(timeOutId);
	}, 500);
}
