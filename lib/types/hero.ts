import { Mesh, CameraHelper, DataTexture, DirectionalLight, InstancedBufferGeometry, ShaderMaterial, BufferGeometry } from 'three';
import HeroBlockCoordinates from '../scripts/visuals/hero/HeroBlockCoordinates';

export interface HeroType {
    baseMesh?: Mesh<BufferGeometry, ShaderMaterial>;
    blocksMesh?: Mesh<InstancedBufferGeometry, ShaderMaterial>;
    blockList: HeroBlockCoordinates[];
    blockRenderList: HeroBlockCoordinates[];
    animationTotalFrames: number;
    heroLoseAnimationPositionArray?: Float32Array<ArrayBuffer>;
    heroLoseAnimationOrientArray?: Float32Array<ArrayBuffer>;
    successColorRatio: number;
    directLight?: DirectionalLight;
    infoTexture?: DataTexture;
    instancePosArray?: Float32Array<ArrayBuffer>;
    instanceOrientArray?: Float32Array<ArrayBuffer>;
    instanceShowRatioArray?: Float32Array<ArrayBuffer>;
    instanceSpinPivotArray?: Float32Array<ArrayBuffer>;
    instanceSpinOrientArray?: Float32Array<ArrayBuffer>;
    instanceColorArray?: Float32Array<ArrayBuffer>;
    instanceIsActiveArray?: Float32Array<ArrayBuffer>;
    instanceNextDirectionArray?: Float32Array<ArrayBuffer>;
    isShadowCameraHelperVisible?: boolean;
    shadowCameraHelper?: CameraHelper;
    infoTextureLinear?: DataTexture;
}
