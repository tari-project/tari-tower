import * as THREE from 'three';
import { OrbitControls } from '@controls/OrbitControls';
import { properties, resetProperties } from '@core/properties.ts';
import { heroBlocks, heroContainer } from '@visuals/hero/hero.ts';
import { coinContainer, coins } from '@visuals/coins/coins.ts';
import blueNoise from '@utils/blueNoise/blueNoise.ts';
import game from '@logic/systemManager.ts';
import settings from '@core/settings.ts';
import loader from '@core/loader.ts';

import Background from '@visuals/bg/bg.ts';
import { result, status } from '@logic/stateManager.ts';
import { setAnimationState } from '@/main.ts';
import { stopAnimationDuration } from '@logic/stopAnimationManager.ts';
import { AnimationResult } from '@/types';
import { errorAnimationDuration } from '@logic/errorAnimationManager.ts';
import { successAnimationDuration } from '@logic/successAnimationManager.ts';

THREE.ColorManagement.enabled = false;
const background = Background();

let time = 0;
let lastRender = 0;
const targetFPS = 60;
const frameInterval = 1 / targetFPS;

function render(dt: number) {
	if (properties.isPaused) {
		dt *= 0;
	}

	dt = Math.min(dt, 1 / 15);

	properties.time += dt;
	properties.deltaTime = dt;
	if (properties.sharedUniforms) {
		properties.sharedUniforms.u_time.value = properties.time;
		properties.sharedUniforms.u_deltaTime.value = dt;
	}

	const viewportWidth = properties.viewportWidth;
	const viewportHeight = properties.viewportHeight;
	const cameraZoom = (properties.cameraZoom * viewportHeight) / 10;
	const cameraOffsetX = properties.cameraOffsetX;
	const cameraOffsetY = properties.cameraOffsetY;
	if (properties.camera) {
		properties.camera.zoom = cameraZoom;
		properties.camera.left = -viewportWidth / 2 - (cameraOffsetX * viewportWidth) / cameraZoom / 2;
		properties.camera.right = viewportWidth / 2 - (cameraOffsetX * viewportWidth) / cameraZoom / 2;
		properties.camera.top = viewportHeight / 2 - (cameraOffsetY * viewportHeight) / cameraZoom / 2;
		properties.camera.bottom = -viewportHeight / 2 - (cameraOffsetY * viewportHeight) / cameraZoom / 2;
		properties.camera.updateProjectionMatrix();
	}

	blueNoise.update(dt);
	game.update(dt);

	const camera = properties.camera;
	properties.orbitControls?.update();
	properties.orbitCamera?.updateMatrix();
	if (camera) {
		properties.orbitCamera?.matrix.decompose(camera.position, camera.quaternion, camera.scale);
		camera.matrix.compose(camera.position, camera.quaternion, camera.scale);
	}

	heroBlocks.update(dt);
	coins.update(dt);
	background.update(dt);
	if (properties.camera && properties.scene && properties.renderer) {
		properties.renderer.render(properties?.scene, properties.camera);
	}
}
function animate() {
	const newTime = performance.now() / 1000;
	const dt = newTime - time;
	if (newTime - lastRender >= frameInterval) {
		lastRender = newTime;
		render(dt);
		time = newTime;
	}
	properties.renderer?.setAnimationLoop(animate);
}
function initAll() {
	if (properties.renderer) {
		properties.renderer.shadowMap.enabled = true;
		properties.renderer.shadowMap.type = THREE.PCFShadowMap;
	}

	properties.scene = new THREE.Scene();
	properties.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 60);
	properties.scene.add(properties.camera);
	properties.camera.position.fromArray(settings.DEFAULT_POSITION);

	properties.orbitCamera = properties.camera.clone();

	const orbitControls = (properties.orbitControls = new OrbitControls(properties.orbitCamera, properties.orbitTarget));
	orbitControls.target0.fromArray(settings.DEFAULT_LOOKAT_POSITION);
	orbitControls.enableDamping = true;
	orbitControls.enablePan = false;
	orbitControls.minPolarAngle = Math.PI * 0.2; // radians
	orbitControls.maxPolarAngle = Math.PI * 0.45; // radians
	if (properties.sharedUniforms) {
		const bgColor1 = properties.sharedUniforms.u_bgColor1.value;
		const bgColor2 = properties.sharedUniforms.u_bgColor2.value;
		bgColor1.set(properties.bgColor1).convertSRGBToLinear();
		bgColor2.set(properties.bgColor2).convertSRGBToLinear();
	}

	properties.renderer?.setClearColor(properties.bgColor1, 1);

	// first the logic
	game.init();
	// then the visuals
	heroBlocks.init();
	coins.init();
	background.init();

	properties.scene.add(coinContainer);
	properties.scene.add(background.container);
	properties.scene.add(heroContainer);
}
function setSize(viewportWidth: number, viewportHeight: number) {
	properties.viewportWidth = viewportWidth;
	properties.viewportHeight = viewportHeight;
	properties.viewportResolution.set(viewportWidth, window.innerHeight);

	let dprWidth = viewportWidth * settings.DPR;
	let dprHeight = viewportHeight * settings.DPR;

	if (settings.USE_PIXEL_LIMIT && dprWidth * dprHeight > settings.MAX_PIXEL_COUNT) {
		const aspect = dprWidth / dprHeight;
		dprHeight = Math.sqrt(settings.MAX_PIXEL_COUNT / aspect);
		dprWidth = Math.ceil(dprHeight * aspect);
		dprHeight = Math.ceil(dprHeight);
	}

	properties.width = dprWidth;
	properties.height = dprHeight;
	properties.resolution.set(dprWidth, dprHeight);

	properties.camera?.updateProjectionMatrix();
	properties.renderer?.setSize(dprWidth, dprHeight);
	if (properties.canvas) {
		properties.canvas.style.width = `${viewportWidth}px`;
		properties.canvas.style.height = `${viewportHeight}px`;
	}
}

function onResize(offset?: number) {
	properties.cameraOffsetX = offset ? offset / window.innerWidth : 0;
	setSize(window.innerWidth, window.innerHeight);
}
function initCallback(offset?: number) {
	initAll();
	time = performance.now() / 1000;
	lastRender = time;
	window.addEventListener('resize', () => onResize(offset));
	onResize(offset);
	animate();
}

export async function loadTowerAnimation(canvasId: string, offset?: number) {
	const existingCanvas = properties.renderer?.domElement || document.getElementById(canvasId);
	if (existingCanvas) return;

	await heroBlocks.preload();
	await coins.preload();
	await blueNoise.preInit();

	// put it here to have the texture anisotropy support in the loader
	properties.renderer = new THREE.WebGLRenderer({ ...settings.WEBGL_OPTS });
	if (properties.renderer) {
		properties.renderer.domElement.id = canvasId;
		properties.canvas = properties.renderer.domElement;
		properties.orbitTarget = properties.renderer.domElement;
		loader.start(() => initCallback(offset));
		document.body.appendChild(properties.renderer.domElement);
	}
}

function removeCanvas(canvasId) {
	const canvas = document.getElementById(canvasId);

	canvas?.remove();

	properties.renderer?.domElement?.remove();
	properties.renderer?.state?.reset();
	properties.renderer?.resetState();
	properties.canvas = undefined;
	properties.orbitTarget = undefined;
	properties.renderer?.dispose();
	properties.renderer = undefined;

	resetProperties();
}

export async function removeTowerAnimation(canvasId: string) {
	const canvas = document.getElementById(canvasId);
	if (!canvas) return;

	const resultDelays = {
		[AnimationResult.FAILED]: errorAnimationDuration,
		[AnimationResult.COMPLETED]: successAnimationDuration,
		[AnimationResult.REPLAY]: successAnimationDuration,
		[AnimationResult.STOP]: stopAnimationDuration,
	};
	const alreadyStopped = status === 'not-started';
	const useResultDelay = result !== null;

	const baseDelay = 1000 * 3.5;
	const resultDelay = (resultDelays[result] || 1) * 1000 + baseDelay;
	const baseStopDelay = stopAnimationDuration * 1000 * 2;

	const removeDelay = useResultDelay ? resultDelay : baseDelay;
	const stopDelay = useResultDelay ? baseStopDelay + resultDelay : baseStopDelay;

	if (!alreadyStopped) {
		setTimeout(() => setAnimationState('stop'), stopDelay);
	}

	setTimeout(() => removeCanvas(canvasId), alreadyStopped ? removeDelay : removeDelay + stopDelay);
}
