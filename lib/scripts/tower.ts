import * as THREE from 'three';
import settings, { WEBGL_OPTS } from './core/settings.ts';
import { properties } from './core/properties.ts';
import { Hero, heroContainer } from './visuals/hero/hero.ts';
import { coinContainer, Coins } from './visuals/coins/coins.ts';
import BlueNoise from './utils/blueNoise/blueNoise.ts';
import { OrbitControls } from './controls/OrbitControls';
import SystemManager from './logic/systemManager.ts';
import Background from './visuals/bg/bg.ts';
THREE.ColorManagement.enabled = false;

export const heroBlocks = Hero();
export const renderer = new THREE.WebGLRenderer(WEBGL_OPTS);
const TariTower = () => {
	const coins = Coins();
	const blueNoise = BlueNoise();
	const game = SystemManager();
	const background = Background();

	const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 60);
	let canvas: HTMLCanvasElement;
	let _canvasId: string | undefined = undefined;
	let cameraOffsetX = 0;
	let orbitCamera;
	let _viewportWidth;
	let _viewportHeight;

	async function _handleRenderer() {
		console.debug(_canvasId);
		console.debug(renderer.domElement);
		if (_canvasId && renderer) {
			renderer.domElement.id = _canvasId;
			canvas = renderer.domElement;
			document.body.appendChild(renderer.domElement);

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
		_viewportWidth = viewportWidth;
		_viewportHeight = viewportHeight;
		let dprWidth = viewportWidth * settings.DPR;
		let dprHeight = viewportHeight * settings.DPR;

		if (dprHeight * dprWidth > settings.MAX_PIXEL_COUNT) {
			const aspect = dprWidth / dprHeight;
			dprHeight = Math.sqrt(settings.MAX_PIXEL_COUNT / aspect);
			dprWidth = Math.ceil(dprHeight * aspect);
			dprHeight = Math.ceil(dprHeight);
		}

		properties.resolution.set(dprWidth, dprHeight);
		camera.updateProjectionMatrix();
		renderer.setSize(dprWidth, dprHeight);

		canvas.style.width = dprWidth + 'px';
		canvas.style.height = dprHeight + 'px';
	}

	function onResize(offset = 0) {
		cameraOffsetX = offset ? offset / window.innerWidth : 0;
		_handleResize(window.innerWidth, window.innerHeight);
	}

	async function _preload() {
		await heroBlocks.preload();
		await coins.preload();
		await blueNoise.preInit();

		await _handleRenderer();
	}

	async function _initScene() {
		properties.scene = new THREE.Scene();
		properties.scene.add(camera);
		camera.position.fromArray(settings.DEFAULT_POSITION);
		orbitCamera = camera.clone();
		console.debug(canvas);
		properties.orbitControls = new OrbitControls(orbitCamera, canvas);
		properties.orbitControls.target0.fromArray(settings.DEFAULT_LOOKAT_POSITION);
	}
	async function init({ canvasId }: { canvasId: string }) {
		_canvasId = canvasId;
		console.debug(canvasId);
		await _preload().then(async () => {
			await _initScene();
		});

		// first the logic
		await game.init();
		// then the visuals
		heroBlocks.init();
		coins.init();
		background.init();

		properties.scene.add(coinContainer);
		properties.scene.add(background.container);
		properties.scene.add(heroContainer);
	}

	function render(dt: number) {
		if (!canvas) {
			dt *= 0;
		}

		dt = Math.min(dt, 1 / 15);

		properties.time += dt;
		properties.deltaTime = dt;
		if (properties.sharedUniforms) {
			properties.sharedUniforms.u_time.value = properties.time;
			properties.sharedUniforms.u_deltaTime.value = dt;
		}

		const cameraZoom = (properties.cameraZoom * _viewportHeight) / 10;
		const cameraOffsetY = properties.cameraOffsetY;
		camera.zoom = cameraZoom;
		camera.left = -_viewportWidth / 2 - (cameraOffsetX * _viewportWidth) / cameraZoom / 2;
		camera.right = _viewportWidth / 2 - (cameraOffsetX * _viewportWidth) / cameraZoom / 2;
		camera.top = _viewportHeight / 2 - (cameraOffsetY * _viewportHeight) / cameraZoom / 2;
		camera.bottom = -_viewportHeight / 2 - (cameraOffsetY * _viewportHeight) / cameraZoom / 2;
		camera.updateProjectionMatrix();

		properties.orbitControls?.update();
		orbitCamera?.updateMatrix();

		orbitCamera?.matrix.decompose(camera.position, camera.quaternion, camera.scale);
		camera.matrix.compose(camera.position, camera.quaternion, camera.scale);

		blueNoise.update(dt);
		game.update(dt);
		heroBlocks.update(dt);
		coins.update(dt);
		background.update(dt);

		renderer.render(properties.scene, camera);
	}

	return {
		renderer,
		init,
		coins,
		blueNoise,
		onResize,
		render,
	};
};

export default TariTower;
