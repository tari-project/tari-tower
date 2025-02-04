import { Vector2, ColorRepresentation, ShaderMaterialParameters, Object3D } from 'three';
import Block from '../scripts/logic/Block';
import { OrbitControls } from '../scripts/controls/OrbitControls';

export interface PropertiesType {
	canvasId?: string;
	time: number;
	deltaTime: number;
	width: number;
	height: number;
	viewportWidth: number;
	viewportHeight: number;

	cameraZoom: number;
	scene: Object3D;
	cameraOffsetX: number;
	cameraOffsetY: number;
	postprocessing?: boolean;
	resolution: Vector2;
	viewportResolution: Vector2;
	orbitControls?: OrbitControls;
	canvas?: HTMLElement | null;
	orbitTarget?: HTMLElement | null;
	isPaused?: boolean;
	showVisual?: boolean;
	sharedUniforms: SharedUniforms;
	loadList?: unknown;
	animationSpeed: number;
	bgColor1: ColorRepresentation;
	bgColor2: ColorRepresentation;
	neutralColor: ColorRepresentation;
	mainColor: ColorRepresentation;
	successColor: ColorRepresentation;
	failColor: ColorRepresentation;
	particlesOpacity: number;
	particlesSize: number;
	particlesColor?: ColorRepresentation;
	goboIntensity: number;
	activeBlocksCount: number;
	maxFreeBlocksCount: number;
	lightPositionX: number;
	lightPositionY: number;
	lightPositionZ: number;
	lightCameraSize: number;
	lightCameraBias: number;
	lightCameraNear: number;
	lightCameraFar: number;
	errorBlock?: Block | null;
	errorBlockMaxLifeCycle: number;
	minSpawnedBlocksForTheErrorBlock: number;
}

export type SharedUniforms = ShaderMaterialParameters['uniforms'];
