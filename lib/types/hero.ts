import { Mesh, CameraHelper, DataTexture, DirectionalLight, InstancedBufferGeometry, ShaderMaterial } from 'three';
import { SharedUniforms } from './properties';
import HeroBlockCoordinates from '../scripts/visuals/hero/HeroBlockCoordinates';

export interface HeroType {
	_baseMesh?: Mesh & { material: ShaderMaterial };
	_blocksMesh?: Mesh & { geometry: InstancedBufferGeometry; material: ShaderMaterial };
	_blockList: HeroBlockCoordinates[];
	_blockRenderList: HeroBlockCoordinates[];
	animationTotalFrames: number;
	heroLoseAnimationPositionArray?: Float32Array<ArrayBuffer>;
	heroLoseAnimationOrientArray?: Float32Array<ArrayBuffer>;
	successColorRatio: number;
	directLight?: DirectionalLight;
	infoTexture?: DataTexture;
	_instancePosArray?: Float32Array<ArrayBuffer>;
	_instanceOrientArray?: Float32Array<ArrayBuffer>;
	_instanceShowRatioArray?: Float32Array<ArrayBuffer>;
	_instanceSpinPivotArray?: Float32Array<ArrayBuffer>;
	_instanceSpinOrientArray?: Float32Array<ArrayBuffer>;
	_instanceColorArray?: Float32Array<ArrayBuffer>;
	_instanceIsActiveArray?: Float32Array<ArrayBuffer>;
	_instanceNextDirectionArray?: Float32Array<ArrayBuffer>;
	isShadowCameraHelperVisible?: boolean;
	shadowCameraHelper?: CameraHelper;
	infoTextureLinear?: DataTexture;
	heroSharedUniforms?: SharedUniforms;
}
