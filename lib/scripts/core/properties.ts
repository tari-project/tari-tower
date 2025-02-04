import * as THREE from 'three';
import settings from './settings';

import { TOTAL_TILES } from '../logic/board';
import { PropertiesType } from '../../types/properties';

const resolution = new THREE.Vector2();
const viewportResolution = new THREE.Vector2();
const sharedUniforms: PropertiesType['sharedUniforms'] = {
	u_time: { value: 0 },
	u_deltaTime: { value: 1 },
	u_resolution: { value: resolution },
	u_viewportResolution: { value: viewportResolution },
	u_bgColor1: { value: new THREE.Color() },
	u_bgColor2: { value: new THREE.Color() },
};
const maxFreeBlocksCount = TOTAL_TILES - 5;

const baseStyleProperties = {
	bgColor1: '#ffffff',
	bgColor2: '#d0d0d0',
	neutralColor: '#ffffff',
	mainColor: '#0096ff',
	successColor: '#00c881',
	failColor: '#ca0101',
	particlesColor: '#505050',
	goboIntensity: 0.45,
	particlesOpacity: 0.75,
	particlesSize: 0.01,
};
const propertiesInitialState: PropertiesType = {
	canvasId: undefined,
	time: 0,
	deltaTime: 0,
	width: 0,
	height: 0,
	viewportWidth: 0,
	viewportHeight: 0,
	camera: undefined,
	orbitCamera: undefined,
	cameraZoom: 1,
	cameraOffsetX: 0,
	cameraOffsetY: 0,
	scene: new THREE.Scene(),
	postprocessing: false,
	resolution,
	viewportResolution,
	canvas: null,
	orbitTarget: null,
	sharedUniforms,
	isPaused: false,
	showVisual: settings.SHOW_BLOCK,
	loadList: [],
	animationSpeed: 1.1,
	activeBlocksCount: 0,
	maxFreeBlocksCount,
	lightPositionX: -2,
	lightPositionY: 6,
	lightPositionZ: -4,
	lightCameraSize: 4.5,
	lightCameraBias: 0.005,
	lightCameraNear: 3,
	lightCameraFar: 16,
	errorBlock: null,
	errorBlockMaxLifeCycle: 4,
	minSpawnedBlocksForTheErrorBlock: maxFreeBlocksCount - 2,
	...baseStyleProperties,
};
let properties = propertiesInitialState;

export function resetProperties() {
	properties = propertiesInitialState;
}

export { properties };
