import { Color, DataTexture, Texture, Vector2, Vector3 } from 'three';

export interface Uniform<T = unknown> {
    value: T;
}

export interface ISharedUniforms {
    u_blueNoiseTexture: Uniform<Texture>;
    u_blueNoiseTexelSize: Uniform<Vector2>;
    u_blueNoiseCoordOffset: Uniform<Vector2>;
    u_time: Uniform<number>;
    u_deltaTime: Uniform<number>;
    u_resolution: Uniform<Vector2>;
    u_viewportResolution: Uniform<Vector2>;

    u_bgColor1: Uniform<Color>;
    u_bgColor2: Uniform<Color>;

    u_lightPosition: Uniform<Vector3>;
    u_goboTexture: Uniform<Texture | null>;
    u_goboIntensity: Uniform<number>;
    u_infoTexture: Uniform<DataTexture | null>;
    u_infoTextureLinear: Uniform<DataTexture | null>;
    u_endAnimationRatio: Uniform<number>;
}

export type TUniform = {
    [Properties in keyof ISharedUniforms]?: ISharedUniforms[Properties];
};
