import { ColorManagement, PCFShadowMap, WebGLRenderer } from 'three';
import settings, { WEBGL_OPTS } from './core/settings.ts';
import BlueNoise from './utils/blueNoise/blueNoise.ts';
import loader from './core/loader.ts';
import { Background, bgContainer } from './visuals/bg/bg.ts';
import { OrbitControls } from './controls/OrbitControls';
import { OrthographicCamera } from 'three';
import { canvasSignal } from './logic/signals.ts';
import { Coins } from './visuals/coins/coins.ts';
import { properties } from './core/properties.ts';
import { logError } from './utils/logger.ts';
import { Hero } from './visuals/hero/hero.ts';
import { systemManager } from './modules.ts';

ColorManagement.enabled = false;
export const TariTower = () => {
	const background = Background();
	const blueNoise = BlueNoise();
	const heroBlocks = Hero();

	const coins = Coins();

	let orbitControls: OrbitControls;

	const camera = new OrthographicCamera();
	let orbitCamera: OrthographicCamera;
	let renderer: WebGLRenderer;

	async function _handleRenderer() {
		if (renderer) {
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = PCFShadowMap;

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
		properties.viewportResolution.set(viewportWidth, viewportHeight);
		properties.sharedUniforms.u_viewportResolution.value = properties.viewportResolution;

		let dprWidth = viewportWidth * settings.DPR;
		let dprHeight = viewportHeight * settings.DPR;
		const aspect = viewportWidth / viewportHeight;

		if (dprHeight * dprWidth > settings.MAX_PIXEL_COUNT) {
			dprHeight = Math.sqrt(settings.MAX_PIXEL_COUNT / aspect);
			dprWidth = Math.ceil(dprHeight * aspect);
			dprHeight = Math.ceil(dprHeight);
		}

		properties.width = dprWidth;
		properties.height = dprHeight;

		properties.resolution.set(dprWidth, dprHeight);
		renderer?.setSize(dprWidth, dprHeight, false);

		camera.setViewOffset(viewportWidth, viewportHeight, 0, 87.5, viewportWidth, viewportHeight);
		camera.updateProjectionMatrix();
	}

	function onResize() {
		_handleResize(window.innerWidth, window.innerHeight);
	}

	async function preload({ canvasEl, initCallback }: { canvasEl: HTMLCanvasElement; initCallback: () => Promise<void> }) {
		renderer = new WebGLRenderer({ ...WEBGL_OPTS, canvas: canvasEl });
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
		const canvas = renderer?.domElement;
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
			await systemManager.init();
		} catch (error) {
			logError('init tower : ', error);
		}

		try {
			// then the visuals
			heroBlocks.init();
			coins.init();
			background.init();

			properties.scene.add(coins.coinContainer);
			properties.scene.add(bgContainer);
			properties.scene.add(heroBlocks.heroContainer);
		} catch (error) {
			logError('visuals init : ', error);
		}
	}

	function render(delta: number) {
		const canvas = document.getElementById(renderer?.domElement?.id) as HTMLCanvasElement | null;
		if (!canvas) {
			return;
		}

		let dt = delta;

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

		systemManager.update(dt);
		blueNoise.update(dt);
		coins.update(dt);
		background.update(dt);
		heroBlocks.update(dt);

		renderer?.render(properties.scene, camera);
	}

	function _disposeAll() {
		coins.buffers.forEach((b) => b?.dispose());
		coins.textures.forEach((t) => t?.dispose());
		heroBlocks.buffers.forEach((b) => b?.dispose());
		heroBlocks.textures.forEach((t) => t?.dispose());
		blueNoise.textures.forEach((t) => t?.dispose());
		renderer?.dispose();
	}
	function destroy() {
		const canvas = renderer?.domElement;
		if (!canvas || !canvas?.id) return;
		properties.showVisual = false;

		systemManager.resetPostDestroy();
		const canvasEl = document.getElementById(canvas.id);
		canvasEl?.remove();
		// Clean up Three.js resources
		_disposeAll();
		renderer?.state.reset();
	}
	return {
		preload,
		init,
		coins,
		blueNoise,
		onResize,
		render,
		heroBlocks,
	};
};
