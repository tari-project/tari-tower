import { ColorRepresentation } from 'three';
import { BlockType } from './block.ts';

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
    errorBlock?: BlockType | null;
}
export interface IScene {
    lightPositionX: number;
    lightPositionY: number;
    lightPositionZ: number;
    lightCameraSize: number;
    lightCameraBias: number;
    lightCameraNear: number;
    lightCameraFar: number;
}

type TPropertyName = keyof IPropertiesState;
type TPropertyValue = IPropertiesState[TPropertyName];
export interface IPropertyPair {
    propertyName: TPropertyName;
    value: TPropertyValue;
}
