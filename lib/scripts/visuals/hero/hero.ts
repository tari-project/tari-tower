import {
    CameraHelper,
    ClampToEdgeWrapping,
    Color,
    DataTexture,
    DirectionalLight,
    DynamicDrawUsage,
    FloatType,
    InstancedBufferAttribute,
    InstancedBufferGeometry,
    LinearFilter,
    Mesh,
    Object3D,
    Quaternion,
    RGBAFormat,
    ShaderMaterial,
    UniformsLib,
    UniformsUtils,
    UVMapping,
    Vector2,
    Vector3,
} from 'three';
import loader from '../../core/loader';
import math from '../../utils/math';
import ease, { customEasing } from '../../utils/ease';

import {
    HALF_SIZE,
    SIZE,
    TOTAL_TILES,
    SIZE_WITH_PADDING,
    TOTAL_TILES_WITH_PADDING,
    tiles,
    board,
} from '../../logic/board';

import vert from './hero.vert?raw';
import frag from './hero.frag?raw';
import fragDepth from './heroDepth.frag?raw';

import {
    floatingCubesDisplacement,
    floatingCubesRatio,
    successPushDownRatio,
    successRatio,
    successColorTowerRatio,
    towerRotationRatio,
} from '../../logic/successAnimationManager';
import { stopPushDownRatio, stopSpawnRatio } from '../../logic/stopAnimationManager';
import {
    failFloatingCubesRatio,
    failPushDownRatio,
    failShakeRatio,
    failSpawnRatio,
} from '../../logic/errorAnimationManager';
import HeroBlockCoordinates from './HeroBlockCoordinates';

import { HeroType } from '../../../types/hero';
import { AnimationResult } from '../../../types/stateManager';
import { ASSETS_PATH, ERROR_BLOCK_MAX_LIFE_CYCLE } from '../../core/settings';
import { stateManagerStore } from '../../../store/stateManagerStore';
import { animationCycleStore } from '../../../store/animationCycleStore.ts';

import { uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';
import { sceneStore } from '../../../store/sceneStore.ts';

const TOTAL_BLOCKS = 2 * TOTAL_TILES;
const _v2_0 = new Vector2();
const _v2_1 = new Vector2();
const _v3_0 = new Vector3();
const _v3_1 = new Vector3();
const _q_0 = new Quaternion();
const _q_1 = new Quaternion();
const MAIN_COLOR = new Color();
const SUCCESS_COLOR = new Color();
const ERROR_COLOR = new Color();
const DEFAULT_COLOR = new Color();
const _c = new Color();
const _c2 = new Color();

const heroState: HeroType = {
    _baseMesh: undefined,
    _blocksMesh: undefined,
    _blockList: [],
    animationTotalFrames: 0,
    heroLoseAnimationPositionArray: undefined,
    heroLoseAnimationOrientArray: undefined,
    _blockRenderList: [],
    successColorRatio: 0,
    directLight: undefined,
    infoTexture: undefined,
    _instancePosArray: undefined,
    _instanceOrientArray: undefined,
    _instanceShowRatioArray: undefined,
    _instanceSpinPivotArray: undefined,
    _instanceSpinOrientArray: undefined,
    _instanceColorArray: undefined,
    _instanceIsActiveArray: undefined,
    _instanceNextDirectionArray: undefined,
    isShadowCameraHelperVisible: undefined,
    shadowCameraHelper: undefined,
    infoTextureLinear: undefined,
};

const Hero = () => {
    let sharedUniforms;
    let propertiesState;
    let result;

    const animationCycleStoreInitial = animationCycleStore.getInitialState();
    let { blocks: blocksState, ...animationCycleState } = animationCycleStoreInitial;
    const heroContainer = new Object3D();

    async function preload() {
        const arr = Array.from({ length: TOTAL_BLOCKS });
        heroState._blockList = arr.map((_) => new HeroBlockCoordinates());
        heroState._blockRenderList = [...heroState._blockList];

        loader.loadBuf(`${ASSETS_PATH}/BASE.buf`, (geometry) => {
            _onBaseBlocksLoaded(geometry);
        });
        loader.loadBuf(`${ASSETS_PATH}/BOX.buf`, (geometry) => {
            _onBoxLoaded(geometry);
        });
        loader.loadBuf(`${ASSETS_PATH}/LOSE_ANIMATION.buf`, (geometry) => {
            const { position, orient } = geometry.attributes;
            heroState.animationTotalFrames = position.count / TOTAL_TILES;
            heroState.heroLoseAnimationPositionArray = position.array;
            heroState.heroLoseAnimationOrientArray = orient.array;
        });
        loader.loadTexture(`${ASSETS_PATH}/gobo.jpg`, (texture) => {
            texture.flipY = false;
            texture.needsUpdate = true;
            uniformsStore.setState({ u_goboTexture: { value: texture } });
        });

        initListeners();
    }

    function _onBaseBlocksLoaded(geometry) {
        const uniforms = {
            ...sharedUniforms,
            ...UniformsUtils.merge([UniformsLib.lights]),
            u_color: { value: new Color(propertiesState.neutralColor) },
            u_blocksColor: { value: new Color(propertiesState.neutralColor) },
            u_yDisplacement: { value: 0 },
            u_prevSuccessColor: {
                value: new Color(propertiesState.neutralColor).convertSRGBToLinear(),
            },
            u_successColor: { value: new Color(propertiesState.successColor).convertSRGBToLinear() },
            u_successAnimationRatio: { value: 0 },
        };

        const material = new ShaderMaterial({
            uniforms,
            vertexShader: vert,
            fragmentShader: frag,
            lights: true,
            transparent: true,
            defines: { IS_BASE: true },
        });
        heroState._baseMesh = new Mesh(geometry, material);
        heroState._baseMesh.receiveShadow = heroState._baseMesh.castShadow = true;
        heroState._baseMesh.frustumCulled = false;

        heroState._baseMesh.customDepthMaterial = new ShaderMaterial({
            vertexShader: vert,
            fragmentShader: fragDepth,
            defines: { IS_DEPTH: true, IS_BASE: true },
        });
        heroContainer.add(heroState._baseMesh);
    }

    function _onBoxLoaded(refGeometry) {
        const geometry = new InstancedBufferGeometry();
        geometry.index = refGeometry.index;
        Object.keys(refGeometry.attributes).forEach((id) => {
            geometry.setAttribute(id, refGeometry.attributes[id]);
        });
        geometry.instanceCount = TOTAL_BLOCKS;

        const createInstancedAttribute = (name, itemSize) => {
            const array = new Float32Array(TOTAL_BLOCKS * itemSize);
            geometry.setAttribute(
                name,
                new InstancedBufferAttribute(array, itemSize, itemSize !== 4, 1).setUsage(DynamicDrawUsage)
            );
            return array;
        };

        heroState._instancePosArray = createInstancedAttribute('instancePos', 3);
        heroState._instanceOrientArray = createInstancedAttribute('instanceOrient', 4);
        heroState._instanceShowRatioArray = createInstancedAttribute('instanceShowRatio', 1);
        heroState._instanceSpinPivotArray = createInstancedAttribute('instanceSpinPivot', 3);
        heroState._instanceSpinOrientArray = createInstancedAttribute('instanceSpinOrient', 4);
        heroState._instanceColorArray = createInstancedAttribute('instanceColor', 3);
        heroState._instanceIsActiveArray = createInstancedAttribute('instanceIsActive', 1);
        heroState._instanceNextDirectionArray = createInstancedAttribute('instanceNextDirection', 2);

        const material = new ShaderMaterial({
            uniforms: {
                ...UniformsUtils.merge([UniformsLib.lights]),
                ...sharedUniforms,
            },
            vertexShader: vert,
            fragmentShader: frag,
            lights: true,
        });

        heroState._blocksMesh = new Mesh(geometry, material);
        heroState._blocksMesh.frustumCulled = false;
        heroState._blocksMesh.castShadow = heroState._blocksMesh.receiveShadow = true;

        heroState._blocksMesh.customDepthMaterial = new ShaderMaterial({
            uniforms: sharedUniforms,
            vertexShader: vert,
            fragmentShader: fragDepth,
            defines: { IS_DEPTH: true },
        });

        heroContainer.add(heroState._blocksMesh);
    }

    function initListeners() {
        const propertiesListener: Parameters<typeof propertiesStore.subscribe>[0] = (state) =>
            (propertiesState = state);
        const stateListener = (sResult) => {
            result = sResult;
        };
        const animationCycleListener: Parameters<typeof animationCycleStore.subscribe>[0] = ({ blocks, ...rest }) => {
            blocksState = blocks;
            animationCycleState = rest;
        };
        const uniformsListener: Parameters<typeof uniformsStore.subscribe>[0] = (state) => (sharedUniforms = state);

        stateManagerStore.subscribe((s) => stateListener(s.result));
        propertiesStore.subscribe((state) => propertiesListener(state));
        animationCycleStore.subscribe((state) => animationCycleListener(state));
        uniformsStore.subscribe((state) => uniformsListener(state));
    }
    async function init() {
        const sceneState = sceneStore.getState();
        heroState.directLight = new DirectionalLight(0xffffff, 1);
        heroState.directLight.castShadow = true;
        heroState.directLight.shadow.camera.near = sceneState.lightCameraNear;
        heroState.directLight.shadow.camera.far = sceneState.lightCameraFar;
        heroState.directLight.shadow.camera.right = sceneState.lightCameraSize;
        heroState.directLight.shadow.camera.left = -sceneState.lightCameraSize;
        heroState.directLight.shadow.camera.top = sceneState.lightCameraSize;
        heroState.directLight.shadow.camera.bottom = -sceneState.lightCameraSize;
        heroState.directLight.shadow.bias = sceneState.lightCameraBias;
        heroState.directLight.shadow.mapSize.width = 768;
        heroState.directLight.shadow.mapSize.height = 768;

        heroState.isShadowCameraHelperVisible = true;
        heroState.shadowCameraHelper = new CameraHelper(heroState.directLight.shadow.camera);

        _assignFinalAnimationToTiles();

        const infoData = new Float32Array(TOTAL_TILES_WITH_PADDING * 4);
        for (let y = 0, i4 = 0; y < SIZE_WITH_PADDING; y++) {
            for (let x = 0; x < SIZE_WITH_PADDING; x++, i4 += 4) {
                infoData[i4] = 0;
                infoData[i4 + 1] = 0;
                infoData[i4 + 2] = 1;
                infoData[i4 + 3] = 1;
            }
        }

        heroState.infoTexture = new DataTexture(infoData, SIZE_WITH_PADDING, SIZE_WITH_PADDING, RGBAFormat, FloatType);
        heroState.infoTextureLinear = new DataTexture(
            infoData,
            SIZE_WITH_PADDING,
            SIZE_WITH_PADDING,
            RGBAFormat,
            FloatType,
            UVMapping,
            ClampToEdgeWrapping,
            ClampToEdgeWrapping,
            LinearFilter,
            LinearFilter,
            0
        );
        heroState.infoTextureLinear.needsUpdate = true;
        uniformsStore.setState({
            u_infoTexture: { value: heroState.infoTexture },
            u_infoTextureLinear: { value: heroState.infoTextureLinear },
        });
        return heroState.directLight;
    }

    function _assignFinalAnimationToTiles() {
        tiles.forEach((rowMap, i) => {
            rowMap.forEach((tile, j) => {
                const tileIndex = i * SIZE + j;
                tile.loseAnimationPositionArray = new Float32Array(heroState.animationTotalFrames * 3);
                tile.loseAnimationOrientArray = new Float32Array(heroState.animationTotalFrames * 4);

                for (let k = 0; k < heroState.animationTotalFrames; k++) {
                    const posIndex = (k * TOTAL_TILES + tileIndex) * 3;
                    const orientIndex = (k * TOTAL_TILES + tileIndex) * 4;

                    tile.loseAnimationPositionArray.set(
                        heroState.heroLoseAnimationPositionArray?.subarray(posIndex, posIndex + 3) || [],
                        k * 3
                    );
                    tile.loseAnimationOrientArray.set(
                        heroState.heroLoseAnimationOrientArray?.subarray(orientIndex, orientIndex + 4) || [],
                        k * 4
                    );
                }
            });
        });
    }

    function reset() {
        heroState.successColorRatio = 0;
        heroState._blockList.forEach((block) => block.reset());
    }

    function _updateColors(dt: number) {
        MAIN_COLOR.set(propertiesState.mainColor);
        SUCCESS_COLOR.set(propertiesState.successColor);
        ERROR_COLOR.set(propertiesState.failColor);
        DEFAULT_COLOR.set(propertiesState.neutralColor).convertSRGBToLinear();

        _c.copy(MAIN_COLOR);

        if (result === AnimationResult.FAILED && failFloatingCubesRatio > 0) {
            _c.copy(ERROR_COLOR);
        }

        if (result === AnimationResult.COMPLETED || result === AnimationResult.REPLAY) {
            heroState.successColorRatio = Math.min(1, heroState.successColorRatio + 0.5 * dt);
            _c.lerp(SUCCESS_COLOR, heroState.successColorRatio);
        }

        if (result !== AnimationResult.REPLAY && result !== AnimationResult.COMPLETED) {
            _c.lerp(DEFAULT_COLOR, math.saturate(stopPushDownRatio + failPushDownRatio));
        }

        _c.convertSRGBToLinear();
        DEFAULT_COLOR.convertSRGBToLinear();
        SUCCESS_COLOR.convertSRGBToLinear();

        for (let i = 0; i < TOTAL_BLOCKS; i++) {
            const logicBlock = blocksState.filter((block) => block.id === i)[0];

            const isActive = i < blocksState.length + (animationCycleState.lastSpawnedBlock ? 1 : 0);
            const color = isActive ? _c : DEFAULT_COLOR;

            if (isActive && logicBlock?.isErrorBlock) {
                let preFallColorRatio = math.saturate(0.5 * (1 - Math.cos(logicBlock.errorPreFallAnimationTime)));

                if (logicBlock.errorFallAnimationTime > 0) {
                    preFallColorRatio = math.saturate(0.5 * (1 - Math.cos(14 * logicBlock.errorFallAnimationTime)));
                }

                _c2.lerpColors(color, ERROR_COLOR, preFallColorRatio);
                heroState._instanceColorArray?.set([_c2.r, _c2.g, _c2.b], i * 3);
            } else {
                heroState._instanceColorArray?.set([color.r, color.g, color.b], i * 3);
            }
            if (heroState._instanceIsActiveArray) {
                heroState._instanceIsActiveArray[i] = isActive ? 1 : 0;
            }
        }

        if (heroState._baseMesh) {
            heroState._baseMesh.material.uniforms.u_color.value.set(DEFAULT_COLOR).convertSRGBToLinear();
            heroState._baseMesh.material.uniforms.u_blocksColor.value.copy(_c);
            heroState._baseMesh.material.uniforms.u_successColor.value.copy(SUCCESS_COLOR);

            heroState._baseMesh.material.uniforms.u_prevSuccessColor.value.set(DEFAULT_COLOR).convertSRGBToLinear();

            heroState._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(
                _c.set(propertiesState.successColor),
                animationCycleState.previousSuccessBlocksAnimationRatio
            );
            heroState._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear();
        }
    }

    function _updateInfoTexture() {
        tiles.forEach((rowMap) => {
            rowMap.forEach((tile) => {
                const x = (tile.id % SIZE) + 1;
                const y = Math.floor(tile.id / SIZE) + 1;
                const index = (y * SIZE_WITH_PADDING + x) * 4;

                let endAnimationRatio = 0.5 * floatingCubesRatio * math.fit(successPushDownRatio, 0, 0.1, 1, 0);
                endAnimationRatio += (failFloatingCubesRatio > 0 ? 1 : 0) * math.fit(failPushDownRatio, 0, 0.1, 1, 0);
                endAnimationRatio += stopSpawnRatio * math.fit(stopPushDownRatio, 0, 0.1, 1, 0);
                endAnimationRatio = Math.min(1, endAnimationRatio);
                if (heroState.infoTexture) {
                    heroState.infoTexture.image.data[index] = tile.activeRatio * (1 - endAnimationRatio);
                    heroState.infoTexture.image.data[index + 1] = tile.isOccupied || tile.willBeOccupied ? 1 : 0;
                    heroState.infoTexture.image.data[index + 2] = tile.isMain ? 1 : 0;
                    heroState.infoTexture.image.data[index + 3] = tile.isBorder ? 1 : 0;
                }
            });
        });
        if (heroState.infoTexture && heroState.infoTextureLinear) {
            heroState.infoTexture.needsUpdate = true;
            heroState.infoTextureLinear.needsUpdate = true;
        }
    }

    function _updateFreeBlocks() {
        if (animationCycleState.lastSpawnedBlock) {
            const block = heroState._blockList[animationCycleState.lastSpawnedBlock.id];
            if (animationCycleState.lastSpawnedBlock.currentTile) {
                block.boardPos.set(
                    animationCycleState.lastSpawnedBlock.currentTile?.row,
                    animationCycleState.lastSpawnedBlock.currentTile?.col
                );
            }
            block.showRatio = customEasing(
                math.saturate(animationCycleState.lastSpawnedBlock.spawnAnimationRatioUnclamped)
            );
        }

        blocksState?.forEach((logicBlock) => {
            const block = heroState._blockList[logicBlock.id];

            if (block) {
                block.showRatio = customEasing(math.saturate(logicBlock.spawnAnimationRatioUnclamped));
                if (logicBlock?.currentTile) {
                    block.boardPos.set(logicBlock.currentTile?.row, logicBlock.currentTile?.col);
                }

                if (logicBlock.targetTile) {
                    block.boardDir.set(
                        logicBlock.targetTile.row - (logicBlock.currentTile?.row || 0),
                        logicBlock.targetTile.col - (logicBlock.currentTile?.col || 0)
                    );
                }
                block.animation = logicBlock.hasAnimationEnded ? 0 : logicBlock.easedAnimationRatio;
            }
        });
    }

    function _updateAttributes(renderCount) {
        for (let i = 0; i < renderCount; i++) {
            const block = heroState._blockRenderList[i];
            block.pos.toArray(heroState._instancePosArray || [], i * 3);
            block.orient.toArray(heroState._instanceOrientArray || [], i * 4);
            if (heroState._instanceShowRatioArray) {
                heroState._instanceShowRatioArray[i] = ease.quartInOut(block.showRatio);
            }
            block.spinPivot.toArray(heroState._instanceSpinPivotArray || [], i * 3);
            block.spinOrient.toArray(heroState._instanceSpinOrientArray || [], i * 4);
            heroState._instanceNextDirectionArray?.set([block.boardDir.x, block.boardDir.y], i * 2);
        }

        const geometry = heroState._blocksMesh?.geometry;
        if (geometry) {
            for (const id in geometry.attributes) {
                const attribute = geometry.attributes[id] as InstancedBufferAttribute;
                if (attribute.isBufferAttribute) {
                    attribute.addUpdateRange(0, renderCount * attribute.itemSize);
                    attribute.needsUpdate = true;
                }
            }
            geometry.instanceCount = renderCount;
        }
    }

    function _updateStopAnimation(block, i) {
        if (result === AnimationResult.STOP) {
            if (i >= TOTAL_TILES) {
                const _i = i - TOTAL_TILES;
                const col = (_i % SIZE) - HALF_SIZE;
                const row = Math.floor(_i / SIZE) - HALF_SIZE;
                const tile = board.getTile(row, col);
                if (!tile.isOccupied) {
                    const ratio = math.saturate(stopSpawnRatio - tile.randomDelay);
                    tile.activeRatio = ratio;
                    block.showRatio = customEasing(ratio);
                    block.boardPos.set(row, col);
                }
            }
        }
    }

    function _updateLongBlockAnimation(logicBlock, block) {
        if (logicBlock && logicBlock.isErrorBlock && logicBlock.errorLifeCycle >= ERROR_BLOCK_MAX_LIFE_CYCLE - 1) {
            const tile = logicBlock.currentTile;
            const animationRatio = logicBlock.errorFallAnimationTime;

            block.boardPos.set(tile.row, tile.col);
            _v2_0.set(tile.row, tile.col).normalize();
            if (Math.abs(_v2_0.x) > Math.abs(_v2_0.y)) {
                _v2_0.set(Math.sign(_v2_0.x), 0);
            } else {
                _v2_0.set(0, Math.sign(_v2_0.y));
            }
            block.boardDir.set(_v2_0.x, _v2_0.y);
            block.animation = math.fit(animationRatio, 0, 1, 0, 1, ease.sineOut);
            block.animation += Math.max(0, animationRatio - 0.8);
            block.update(propertiesStore.getState().deltaTime);
            block.addsFallAnimation(Math.max(0, animationRatio - 0.8));
        }
    }
    function _updateFailAnimation(logicBlock, block, i) {
        if (result === AnimationResult.FAILED) {
            if (logicBlock) {
                const tile = logicBlock.currentTile;

                if (failFloatingCubesRatio > 0) {
                    const frameStart = Math.floor(failFloatingCubesRatio * heroState.animationTotalFrames);
                    const frameEnd = Math.min(frameStart + 1, heroState.animationTotalFrames - 1);
                    const frameRatio = failFloatingCubesRatio * heroState.animationTotalFrames - frameStart;

                    _v3_0.fromArray(tile.loseAnimationPositionArray, frameStart * 3);
                    _v3_1.fromArray(tile.loseAnimationPositionArray, frameEnd * 3);
                    _v3_0.lerp(_v3_1, frameRatio);
                    _v3_0.y *= 0.5;
                    block.pos.set(_v3_0.z, _v3_0.y, -_v3_0.x);

                    _q_0.fromArray(tile.loseAnimationOrientArray, frameStart * 4);
                    _q_1.fromArray(tile.loseAnimationOrientArray, frameEnd * 4);
                    _q_0.slerp(_q_1, frameRatio);
                    block.orient.copy(_q_0);
                }

                if (failShakeRatio > 0) {
                    const push = math.fit(failShakeRatio, 0, 1, 0, 1, ease.sineOut);
                    _v2_0.set(tile.row, tile.col);
                    _v2_0.normalize();
                    _v2_0.multiplyScalar(0.1 * push);

                    block.pos.x += _v2_0.x;
                    block.pos.z -= _v2_0.y;

                    if (failShakeRatio < 1) {
                        const shake = push * math.fit(failShakeRatio, 0.5, 0.8, 1, 0);
                        _v2_0.set(logicBlock.randomVector.x, logicBlock.randomVector.y);
                        _v2_0.normalize();
                        _v2_0.multiplyScalar(shake);
                        _v2_1.set(0, 0);
                        _v2_1.addScaledVector(_v2_0, 0.08 * shake * Math.sin(shake * 80));

                        block.pos.x += _v2_1.x;
                        block.pos.z += _v2_1.y;
                    }
                }
            }
            if (i >= TOTAL_TILES) {
                const _i = i - TOTAL_TILES;
                const col = (_i % SIZE) - HALF_SIZE;
                const row = Math.floor(_i / SIZE) - HALF_SIZE;
                const tile = board.getTile(row, col);
                const ratio = math.saturate(failSpawnRatio - tile.randomDelay);

                if (!tile.isOccupied) {
                    tile.activeRatio = ratio;
                }
                block.showRatio = customEasing(ratio);
                block.boardPos.set(row, col);
            }
        }
    }

    function _updateFloatAnimation(logicBlock, block) {
        if (result === AnimationResult.COMPLETED || result === AnimationResult.REPLAY) {
            if (logicBlock) {
                const tile = logicBlock.currentTile;
                const delay = 0.1 * tile?.randomDelay;
                const ratio = floatingCubesRatio - delay;

                let y = math.fit(ratio, 0, 0.5, 0, 1, (x) => 1 - Math.pow(1 - x, 5));
                y = math.fit(ratio, 0.7, 1, y, 0, (x) => Math.pow(x, 5));

                block.pos.y += floatingCubesDisplacement * y;
            }
        }
    }

    function update(dt: number) {
        _updateFreeBlocks();
        _updateColors(dt);

        // update blocks;
        let renderCount = 0;
        for (let i = 0; i < TOTAL_BLOCKS; i++) {
            const block = heroState._blockList[i];
            block.update(dt);

            const logicBlock = blocksState.find((block) => block.id === i);

            if (block.showRatio > 0) {
                heroState._blockRenderList[renderCount++] = block;
            }

            _updateFailAnimation(logicBlock, block, i);
            _updateLongBlockAnimation(logicBlock, block);
            _updateFloatAnimation(logicBlock, block);
            _updateStopAnimation(block, i);
        }
        _updateInfoTexture();
        _updateAttributes(renderCount);

        const pushDownRatio = Math.min(1, stopPushDownRatio + failPushDownRatio + successPushDownRatio);
        const easedRestartAnimationRatio = ease.backOut(pushDownRatio, 3);
        const easedFirstStartAnimationRatio = 1 - customEasing(animationCycleStore.getState().firstStartAnimationRatio);
        heroContainer.position.y = -easedRestartAnimationRatio - 2 * easedFirstStartAnimationRatio;
        heroContainer.rotation.y = 0.5 * Math.PI * easedFirstStartAnimationRatio;
        heroContainer.rotation.y += 2 * Math.PI * ease.quartInOut(towerRotationRatio);
        if (heroState._baseMesh) {
            heroState._baseMesh.material.uniforms.u_yDisplacement.value =
                -easedRestartAnimationRatio - 5 * easedFirstStartAnimationRatio;
            heroState._baseMesh.material.uniforms.u_successAnimationRatio.value = successColorTowerRatio;
        }
        const sceneState = sceneStore.getState();

        uniformsStore.setState({
            u_endAnimationRatio: {
                value: Math.min(
                    1,
                    math.fit(stopSpawnRatio, 0.5, 2, 0, 1) +
                        math.fit(failSpawnRatio, 0.5, 2, 0, 1) +
                        math.fit(successRatio, 0, 0.2, 0, 1)
                ),
            },
        });
        if (heroState.directLight) {
            heroState.directLight.position.copy(sharedUniforms.u_lightPosition.value);
            heroState.directLight.shadow.camera.top = sceneState.lightCameraSize;
            heroState.directLight.shadow.camera.bottom = -sceneState.lightCameraSize;
            heroState.directLight.shadow.bias = sceneState.lightCameraBias;
        }
    }

    return {
        preload,
        init,
        reset,
        update,
        heroContainer,
    };
};
export const heroBlocks = Hero();
