import { ColorRepresentation, Object3D } from 'three';
import Block from '../scripts/logic/Block';

export interface IPropertiesState {
    time: number;
    deltaTime: number;
    offsetX: number;
    cameraOffsetX: number;
    bgColor1: ColorRepresentation;
    bgColor2: ColorRepresentation;
    width: number;
    height: number;
    viewportWidth: number;
    viewportHeight: number;
    neutralColor: ColorRepresentation;
    mainColor: ColorRepresentation;
    successColor: ColorRepresentation;
    failColor: ColorRepresentation;
    particlesOpacity: number;
    particlesSize: number;
    particlesColor?: ColorRepresentation;
    goboIntensity: number;
    showVisual: boolean;
    errorBlock?: Block | null;
}
export interface IScene {
    scene: Object3D;
    lightPositionX: number;
    lightPositionY: number;
    lightPositionZ: number;
    lightCameraSize: number;
    lightCameraBias: number;
    lightCameraNear: number;
    lightCameraFar: number;
}

export interface Uniform<T = unknown> {
    value: T;
}

type TPropertyName = keyof IPropertiesState;
type TPropertyValue = IPropertiesState[TPropertyName];
export interface IPropertyPair {
    propertyName: TPropertyName;
    value: TPropertyValue;
}
