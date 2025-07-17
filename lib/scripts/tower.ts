import * as THREE from 'three';
import settings, { WEBGL_OPTS } from './core/settings.ts';
import { properties } from './core/properties.ts';
import { heroBlocks, heroContainer } from './visuals/hero/hero.ts';
import { coinContainer, Coins } from './visuals/coins/coins.ts';
import BlueNoise from './utils/blueNoise/blueNoise.ts';
import { OrbitControls } from './controls/OrbitControls';
import game from './logic/systemManager.ts';
import { Background, bgContainer } from './visuals/bg/bg.ts';
import loader from './core/loader.ts';
import { OrthographicCamera } from 'three';
import { canvasSignal } from './logic/signals.ts';
import { logError } from './utils/logger.ts';

THREE.ColorManagement.enabled = false;

const TariTower = () => {
	const background = Background();
	const blueNoise = BlueNoise();
	const coins = Coins();

	let orbitControls: OrbitControls;

	let canvas: HTMLCanvasElement | null;
	const aspect = window.innerWidth / window.innerHeight;
	const viewHeight = 15;
	const viewWidth = viewHeight * aspect;

	const camera = new THREE.OrthographicCamera(viewWidth / -2, viewWidth / 2, viewHeight / 2, viewHeight / -2, 1, 1000);

	let orbitCamera: OrthographicCamera;

	let renderer: THREE.WebGLRenderer;

	async function _handleRenderer() {
		if (renderer) {
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFShadowMap;

			if (properties.sharedUniforms) {
				const bgColor1 = properties.sharedUniforms.u_bgColor1.value;
				const bgColor2 = properties.sharedUniforms.u_bgColor2.value;
				bgColor1.set(properties.bgColor1).convertSRGBToLinear();
				bgColor2.set(properties.bgColor2).convertSRGBToLinear();
			}
			renderer.setClearColor(properties.bgColor1, 1);
		}
	}

	function _handleResize(viewportWidth: number, viewportHeight: number) {
		properties.viewportWidth = viewportWidth;
		properties.viewportHeight = viewportHeight;
		properties.viewportResolution.set(viewportWidth, window.innerHeight);
		properties.sharedUniforms.u_viewportResolution.value = properties.viewportResolution;

		let dprWidth = viewportWidth * settings.DPR;
		let dprHeight = viewportHeight * settings.DPR;

		const aspect = dprWidth / dprHeight;

		if (dprHeight * dprWidth > settings.MAX_PIXEL_COUNT) {
			dprHeight = Math.sqrt(settings.MAX_PIXEL_COUNT / aspect);
			dprWidth = Math.ceil(dprHeight * aspect);
			dprHeight = Math.ceil(dprHeight);
		}

		properties.width = dprWidth;
		properties.height = dprHeight;
		properties.resolution.set(dprWidth, dprHeight);
		camera.setViewOffset(viewportWidth, viewportHeight, 0, 87.5, viewportWidth, viewportHeight);
		camera.updateProjectionMatrix();

		renderer?.setSize(dprWidth, dprHeight);

		if (canvas) {
			canvas.style.width = viewportWidth + 'px';
			canvas.style.height = viewportHeight + 'px';
		}
	}

	function onResize() {
		_handleResize(window.innerWidth, window.innerHeight);
	}

	async function preload({ canvasEl, initCallback }: { canvasEl: HTMLElement; initCallback: () => Promise<void> }) {
		canvas = canvasEl as HTMLCanvasElement;
		renderer = new THREE.WebGLRenderer({ ...WEBGL_OPTS, canvas });
		canvasSignal.addOnce(() => {
			destroy();
		});
		await _handleRenderer();

		await heroBlocks.preload();
		await blueNoise.preInit();
		await coins.preload();

		await loader.start(initCallback);
		await initCallback();
	}

	async function _initScene() {
		properties.scene.add(camera);
		camera.position.fromArray(settings.DEFAULT_POSITION);
		camera.scale.set(0.905, 0.905, 0.905);
		camera.updateProjectionMatrix();
		orbitCamera = camera.clone();
		if (canvas) {
			orbitControls = new OrbitControls(orbitCamera, canvas);
			orbitControls.target0.fromArray(settings.DEFAULT_LOOKAT_POSITION);
			orbitControls.reset();
		}
	}
	async function init() {
		await _initScene();

		try {
			// first the logic
			await game.init();
		} catch (error) {
			logError('init tower : ', error);
		}

		try {
			// then the visuals
			heroBlocks.init();
			coins.init();
			background.init();

			properties.scene.add(coinContainer);
			properties.scene.add(bgContainer);
			properties.scene.add(heroContainer);
		} catch (error) {
			logError('visuals init : ', error);
		}
	}

	function render(dt: number) {
		if (!canvas) {
			dt *= 0;
			return;
		}

		dt = Math.min(dt, 1 / 15);

		properties.time += dt;
		properties.deltaTime = dt;
		if (properties.sharedUniforms) {
			properties.sharedUniforms.u_time.value = properties.time;
			properties.sharedUniforms.u_deltaTime.value = dt;
		}

		const aspect = (window.innerWidth - properties.cameraOffsetX) / window.innerHeight;
		const viewHeight = 10;
		const viewWidth = viewHeight * aspect;

		let offsetX = 0;

		if (properties.offsetX) {
			const offP = (properties.offsetX / window.innerWidth) * 100;
			offsetX = (viewWidth * offP) / 100;
		}

		const left = -viewWidth / 2 - offsetX / 2;
		const right = viewWidth / 2 - offsetX / 2;

		camera.left = left;
		camera.right = right;
		camera.top = viewHeight / 2;
		camera.bottom = viewHeight / -2;

		camera.updateProjectionMatrix();
		orbitControls?.update();
		orbitCamera?.updateMatrix();
		orbitCamera?.matrix.decompose(camera.position, camera.quaternion, camera.scale);
		camera.matrix.compose(camera.position, camera.quaternion, camera.scale);

		blueNoise.update(dt);
		game.update(dt);
		heroBlocks.update(dt);
		coins.update(dt);
		background.update(dt);
		renderer?.render(properties.scene, camera);
	}

	function destroy() {
		if (!canvas || !canvas?.id) return;
		properties.showVisual = false;
		game.resetPostDestroy();

		const freshCanvas = document.createElement('canvas');
		freshCanvas.setAttribute('id', canvas.id);
		canvas.replaceWith(freshCanvas);
		// Clean up Three.js resources
		renderer.dispose();
		renderer.state.reset();
	}
	return {
		preload,
		init,
		coins,
		blueNoise,
		onResize,
		render,
	};
};

export default TariTower;
