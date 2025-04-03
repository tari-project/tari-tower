import { CameraHelper, DirectionalLight } from 'three';
import HeroBlockCoordinates from '../scripts/visuals/hero/HeroBlockCoordinates';

export interface HeroType {
    blockList: HeroBlockCoordinates[];
    blockRenderList: HeroBlockCoordinates[];
    animationTotalFrames: number;
    heroLoseAnimationPositionArray?: Float32Array<ArrayBuffer>;
    heroLoseAnimationOrientArray?: Float32Array<ArrayBuffer>;
    successColorRatio: number;
    directLight?: DirectionalLight;
    isShadowCameraHelperVisible?: boolean;
    shadowCameraHelper?: CameraHelper;
    instance: {
        instancePosArray?: Float32Array<ArrayBuffer>;
        instanceOrientArray?: Float32Array<ArrayBuffer>;
        instanceShowRatioArray?: Float32Array<ArrayBuffer>;
        instanceSpinPivotArray?: Float32Array<ArrayBuffer>;
        instanceSpinOrientArray?: Float32Array<ArrayBuffer>;
        instanceColorArray?: Float32Array<ArrayBuffer>;
        instanceIsActiveArray?: Float32Array<ArrayBuffer>;
        instanceNextDirectionArray?: Float32Array<ArrayBuffer>;
    };
}
