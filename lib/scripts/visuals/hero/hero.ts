import {
    BufferGeometry,
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

import { HALF_SIZE, SIZE, TOTAL_TILES, SIZE_WITH_PADDING, TOTAL_TILES_WITH_PADDING, tiles, board } from '../../logic/board';

import vert from './hero.vert';
import frag from './hero.frag';
import fragDepth from './heroDepth.frag';

import { floatingCubesDisplacement, floatingCubesRatio, successPushDownRatio, successRatio, successColorTowerRatio, towerRotationRatio } from '../../logic/successAnimationManager';
import { stopPushDownRatio, stopSpawnRatio } from '../../logic/stopAnimationManager';
import { failFloatingCubesRatio, failPushDownRatio, failShakeRatio, failSpawnRatio } from '../../logic/errorAnimationManager';

import { AnimationResult } from '../../../types/stateManager';
import { ASSETS_PATH } from '../../core/settings';
import { stateManagerStore } from '../../../store/stateManagerStore';
import { animationCycleStore } from '../../../store/animationCycleStore.ts';

import { setUniform, uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';
import { sceneStore } from '../../../store/sceneStore.ts';
import { heroStore, TOTAL_BLOCKS } from 'lib/store/heroStore.ts';

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
export const heroContainer = new Object3D();

const Hero = () => {
    let baseMesh: Mesh<BufferGeometry, ShaderMaterial>;
    let blocksMesh: Mesh<InstancedBufferGeometry, ShaderMaterial>;
    let infoTexture: DataTexture;
    let infoTextureLinear: DataTexture;
    let directLight: DirectionalLight;

    const { animationTotalFrames, heroLoseAnimationPositionArray, heroLoseAnimationOrientArray, setPreloadItems } = heroStore.getState();

    let result = stateManagerStore.getState().result;
    let propertiesState = propertiesStore.getState();
    let sharedUniforms = uniformsStore.getState();
    let cycle = animationCycleStore.getState();

    async function preload() {
        loader.loadBuf(`${ASSETS_PATH}/BASE.buf`, (geometry) => {
            _onBaseBlocksLoaded(geometry);
        });
        loader.loadBuf(`${ASSETS_PATH}/BOX.buf`, (geometry) => {
            _onBoxLoaded(geometry);
        });
        loader.loadBuf(`${ASSETS_PATH}/LOSE_ANIMATION.buf`, (geometry) => {
            const { position, orient } = geometry?.attributes || {};
            setPreloadItems({
                animationTotalFrames: position.count / TOTAL_TILES,
                heroLoseAnimationPositionArray: position.array,
                heroLoseAnimationOrientArray: orient.array,
            });
        });
        loader.loadTexture(`${ASSETS_PATH}/gobo.jpg`, (texture) => {
            texture.flipY = false;
            texture.needsUpdate = true;
            setUniform({ u_goboTexture: { value: texture } });
        });
        _initListeners();
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
        baseMesh = new Mesh(geometry, material);
        baseMesh.receiveShadow = baseMesh.castShadow = true;
        baseMesh.frustumCulled = false;

        baseMesh.customDepthMaterial = new ShaderMaterial({
            vertexShader: vert,
            fragmentShader: fragDepth,
            defines: { IS_DEPTH: true, IS_BASE: true },
        });
        heroContainer.add(baseMesh);
    }

    function _onBoxLoaded(refGeometry) {
        const geometry = new InstancedBufferGeometry();
        geometry.index = refGeometry.index;

        Object.keys(refGeometry.attributes).forEach((id) => {
            geometry.setAttribute(id, refGeometry.attributes[id]);
        });
        geometry.instanceCount = TOTAL_BLOCKS;
        const createAttr = (name, itemSize) => {
            const array = new Float32Array(TOTAL_BLOCKS * itemSize);
            geometry.setAttribute(name, new InstancedBufferAttribute(array, itemSize, itemSize !== 4, 1).setUsage(DynamicDrawUsage));
            return array;
        };

        heroStore.setState((c) => ({
            instance: {
                ...c.instance,
                instancePosArray: createAttr('instancePos', 3),
                instanceOrientArray: createAttr('instanceOrient', 4),
                instanceShowRatioArray: createAttr('instanceShowRatio', 1),
                instanceSpinPivotArray: createAttr('instanceSpinPivot', 3),
                instanceSpinOrientArray: createAttr('instanceSpinOrient', 4),
                instanceColorArray: createAttr('instanceColor', 3),
                instanceIsActiveArray: createAttr('instanceIsActive', 1),
                instanceNextDirectionArray: createAttr('instanceNextDirection', 2),
            },
        }));

        const material = new ShaderMaterial({
            uniforms: {
                ...UniformsUtils.merge([UniformsLib.lights]),
                ...sharedUniforms,
            },
            vertexShader: vert,
            fragmentShader: frag,
            lights: true,
        });

        blocksMesh = new Mesh(geometry, material);
        blocksMesh.frustumCulled = false;
        blocksMesh.castShadow = blocksMesh.receiveShadow = true;

        blocksMesh.customDepthMaterial = new ShaderMaterial({
            uniforms: { ...sharedUniforms },
            vertexShader: vert,
            fragmentShader: fragDepth,
            defines: { IS_DEPTH: true },
        });

        heroContainer.add(blocksMesh);
    }

    function _initListeners() {
        const uniformsListener: Parameters<typeof uniformsStore.subscribe>[0] = (s) => (sharedUniforms = s);
        const propertiesListener: Parameters<typeof propertiesStore.subscribe>[0] = (s) => (propertiesState = s);
        const cycleListener: Parameters<typeof animationCycleStore.subscribe>[0] = (s) => (cycle = s);

        propertiesStore.subscribe((s) => s, propertiesListener, { fireImmediately: true });
        animationCycleStore.subscribe((s) => s, cycleListener, { fireImmediately: true });
        uniformsStore.subscribe((s) => s, uniformsListener, { fireImmediately: true });

        stateManagerStore.subscribe(
            (s) => s.result,
            (res) => {
                result = res;
            },
            { fireImmediately: true }
        );
    }
    async function init() {
        const sceneState = sceneStore.getState();
        directLight = new DirectionalLight(0xffffff, 1);
        directLight.castShadow = true;
        directLight.shadow.camera.near = sceneState.lightCameraNear;
        directLight.shadow.camera.far = sceneState.lightCameraFar;
        directLight.shadow.camera.right = sceneState.lightCameraSize;
        directLight.shadow.camera.left = -sceneState.lightCameraSize;
        directLight.shadow.camera.top = sceneState.lightCameraSize;
        directLight.shadow.camera.bottom = -sceneState.lightCameraSize;
        directLight.shadow.bias = sceneState.lightCameraBias;
        directLight.shadow.mapSize.width = 768;
        directLight.shadow.mapSize.height = 768;

        heroStore.setState({
            isShadowCameraHelperVisible: true,
            shadowCameraHelper: new CameraHelper(directLight.shadow.camera),
        });

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

        infoTexture = new DataTexture(infoData, SIZE_WITH_PADDING, SIZE_WITH_PADDING, RGBAFormat, FloatType);
        infoTextureLinear = new DataTexture(
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

        infoTextureLinear.needsUpdate = true;

        uniformsStore.setState({
            u_infoTexture: { value: infoTexture },
            u_infoTextureLinear: { value: infoTextureLinear },
        });
        return directLight;
    }

    function _assignFinalAnimationToTiles() {
        tiles.forEach((rowMap, i) => {
            rowMap.forEach((tile, j) => {
                const tileIndex = i * SIZE + j;
                tile.loseAnimationPositionArray = new Float32Array(animationTotalFrames * 3);
                tile.loseAnimationOrientArray = new Float32Array(animationTotalFrames * 4);

                for (let k = 0; k < animationTotalFrames; k++) {
                    const posIndex = (k * TOTAL_TILES + tileIndex) * 3;
                    const orientIndex = (k * TOTAL_TILES + tileIndex) * 4;

                    tile.loseAnimationPositionArray.set(heroLoseAnimationPositionArray?.subarray(posIndex, posIndex + 3) || [], k * 3);
                    tile.loseAnimationOrientArray.set(heroLoseAnimationOrientArray?.subarray(orientIndex, orientIndex + 4) || [], k * 4);
                }
            });
        });
    }

    function reset() {
        heroStore.setState({ successColorRatio: 0 });
        heroStore.getState().blockList.forEach((block) => block.reset());
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
            heroStore.setState(({ successColorRatio: curr }) => {
                const updatedRatio = Math.min(1, curr + 0.5 * dt);
                _c.lerp(SUCCESS_COLOR, updatedRatio);
                return { successColorRatio: updatedRatio };
            });
        }

        if (result !== AnimationResult.REPLAY && result !== AnimationResult.COMPLETED) {
            _c.lerp(DEFAULT_COLOR, math.saturate(stopPushDownRatio + failPushDownRatio));
        }

        _c.convertSRGBToLinear();
        DEFAULT_COLOR.convertSRGBToLinear();
        SUCCESS_COLOR.convertSRGBToLinear();

        for (let i = 0; i < TOTAL_BLOCKS; i++) {
            const uInstanceColorArray = heroStore.getState().instance.instanceColorArray;
            const uInstanceIsActiveArray = heroStore.getState().instance.instanceIsActiveArray;
            const isActive = i < cycle.blocks.length + (cycle.lastSpawnedBlock ? 1 : 0);
            const color = isActive ? _c : DEFAULT_COLOR;

            uInstanceColorArray?.set([color.r, color.g, color.b], i * 3);

            if (uInstanceIsActiveArray) {
                uInstanceIsActiveArray[i] = isActive ? 1 : 0;
            }
            heroStore.setState((c) => ({
                instance: {
                    ...c.instance,
                    instanceColorArray: uInstanceColorArray,
                    instanceIsActiveArray: uInstanceIsActiveArray,
                },
            }));
        }

        if (baseMesh) {
            baseMesh.material.uniforms.u_color.value.set(DEFAULT_COLOR).convertSRGBToLinear();
            baseMesh.material.uniforms.u_blocksColor.value.copy(_c);
            baseMesh.material.uniforms.u_successColor.value.copy(SUCCESS_COLOR);

            baseMesh.material.uniforms.u_prevSuccessColor.value.set(DEFAULT_COLOR).convertSRGBToLinear();

            baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(_c.set(propertiesState.successColor), cycle.previousSuccessBlocksAnimationRatio);
            baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear();
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
                if (infoTexture) {
                    infoTexture.image.data[index] = tile.activeRatio * (1 - endAnimationRatio);
                    infoTexture.image.data[index + 1] = tile.isOccupied || tile.willBeOccupied ? 1 : 0;
                    infoTexture.image.data[index + 2] = tile.isMain ? 1 : 0;
                    infoTexture.image.data[index + 3] = tile.isBorder ? 1 : 0;
                }
            });
        });
        if (infoTexture && infoTextureLinear) {
            infoTextureLinear.needsUpdate = true;
            infoTextureLinear.needsUpdate = true;
        }
    }

    function _updateFreeBlocks() {
        if (cycle.lastSpawnedBlock) {
            const block = heroStore.getState().blockList[cycle.lastSpawnedBlock.id];
            if (cycle.lastSpawnedBlock.currentTile) {
                block.boardPos.set(cycle.lastSpawnedBlock.currentTile?.row, cycle.lastSpawnedBlock.currentTile?.col);
            }
            block.showRatio = customEasing(math.saturate(cycle.lastSpawnedBlock.spawnAnimationRatioUnclamped));
        }

        cycle.blocks?.forEach((logicBlock) => {
            const block = heroStore.getState().blockList[logicBlock.id];

            if (block) {
                block.showRatio = customEasing(math.saturate(logicBlock.spawnAnimationRatioUnclamped));
                if (logicBlock?.currentTile) {
                    block.boardPos.set(logicBlock.currentTile?.row, logicBlock.currentTile?.col);
                }

                if (logicBlock.targetTile) {
                    block.boardDir.set(logicBlock.targetTile.row - (logicBlock.currentTile?.row || 0), logicBlock.targetTile.col - (logicBlock.currentTile?.col || 0));
                }
                block.animation = logicBlock.hasAnimationEnded ? 0 : logicBlock.easedAnimationRatio;
            }
        });
    }

    function _updateAttributes(renderCount) {
        const instance = heroStore.getState().instance;

        const updatedInstanceShowRatioArray = instance.instanceShowRatioArray;
        const updatedInstanceNextDirectionArray = instance.instanceNextDirectionArray;
        for (let i = 0; i < renderCount; i++) {
            const block = heroStore.getState().blockRenderList[i];
            block.pos.toArray(instance.instancePosArray || [], i * 3);
            block.orient.toArray(instance.instanceOrientArray || [], i * 4);
            if (updatedInstanceShowRatioArray) {
                updatedInstanceShowRatioArray[i] = ease.quartInOut(block.showRatio);
            }
            block.spinPivot.toArray(instance.instanceSpinPivotArray || [], i * 3);
            block.spinOrient.toArray(instance.instanceSpinOrientArray || [], i * 4);
            updatedInstanceNextDirectionArray?.set([block.boardDir.x, block.boardDir.y], i * 2);
        }

        heroStore.setState((c) => ({
            instance: {
                ...c.instance,
                instanceShowRatioArray: updatedInstanceShowRatioArray,
                instanceNextDirectionArray: updatedInstanceNextDirectionArray,
            },
        }));

        const geometry = blocksMesh?.geometry;
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

    function _updateFailAnimation(logicBlock, block, i) {
        if (result === AnimationResult.FAILED) {
            if (logicBlock) {
                const tile = logicBlock.currentTile;

                if (failFloatingCubesRatio > 0) {
                    const frameStart = Math.floor(failFloatingCubesRatio * animationTotalFrames);
                    const frameEnd = Math.min(frameStart + 1, animationTotalFrames - 1);
                    const frameRatio = failFloatingCubesRatio * animationTotalFrames - frameStart;

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
        const sceneState = sceneStore.getState();
        _updateFreeBlocks();
        _updateColors(dt);

        let renderCount = 0;
        // update blocks;
        for (let i = 0; i < TOTAL_BLOCKS; i++) {
            const block = heroStore.getState().blockList[i];
            block.update(dt);
            const logicBlock = cycle.blocks.find((b) => block.id === b.id);

            if (block.showRatio > 0) {
                heroStore.getState().blockRenderList[renderCount++] = block;
            }
            _updateFailAnimation(logicBlock, block, i);
            _updateStopAnimation(block, i);
            _updateFloatAnimation(logicBlock, block);
        }
        _updateInfoTexture();
        _updateAttributes(renderCount);

        const pushDownRatio = Math.min(1, stopPushDownRatio + failPushDownRatio + successPushDownRatio);
        const easedRestartAnimationRatio = ease.backOut(pushDownRatio, 3);
        const easedFirstStartAnimationRatio = 1 - customEasing(animationCycleStore.getState().firstStartAnimationRatio);
        heroContainer.position.y = -easedRestartAnimationRatio - 2 * easedFirstStartAnimationRatio;
        heroContainer.rotation.y = 0.5 * Math.PI * easedFirstStartAnimationRatio;
        heroContainer.rotation.y += 2 * Math.PI * ease.quartInOut(towerRotationRatio);

        if (baseMesh) {
            baseMesh.material.uniforms.u_yDisplacement.value = -easedRestartAnimationRatio - 5 * easedFirstStartAnimationRatio;
            baseMesh.material.uniforms.u_successAnimationRatio.value = successColorTowerRatio;
        }

        setUniform({
            u_endAnimationRatio: {
                value: Math.min(1, math.fit(stopSpawnRatio, 0.5, 2, 0, 1) + math.fit(failSpawnRatio, 0.5, 2, 0, 1) + math.fit(successRatio, 0, 0.2, 0, 1)),
            },
        });
        if (directLight) {
            directLight.position.copy(sharedUniforms.u_lightPosition.value);
            directLight.shadow.camera.top = sceneState.lightCameraSize;
            directLight.shadow.camera.bottom = -sceneState.lightCameraSize;
            directLight.shadow.bias = sceneState.lightCameraBias;
        }
    }

    return {
        preload,
        init,
        reset,
        update,
    };
};
export const heroBlocks = Hero();
