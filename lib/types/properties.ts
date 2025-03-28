import { Vector2, ColorRepresentation, Object3D, Color } from 'three';
import Block from '../scripts/logic/Block';

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
    offsetX: number;
    cameraOffsetX: number;
    cameraOffsetY: number;
    postprocessing?: boolean;
    resolution: Vector2;
    viewportResolution: Vector2;
    canvas?: HTMLElement | null;
    orbitTarget?: HTMLElement | null;
    isPaused?: boolean;
    showVisual?: boolean;
    sharedUniforms: SharedUniforms;
    loadList?: unknown;
    animationSpeed: number;
    bgColor?: ColorRepresentation;
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

export interface Uniform<T = unknown> {
    value: T;
}

export interface SharedUniforms {
    u_time: Uniform<number>;
    u_deltaTime: Uniform<number>;
    u_resolution: Uniform<Vector2>;
    u_viewportResolution: Uniform<Vector2>;
    u_bgColor1: Uniform<Color>;
    u_bgColor2: Uniform<Color>;
}
