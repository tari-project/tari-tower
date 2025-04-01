import { InstancedBufferAttribute, Object3D, UniformsLib, UniformsUtils } from 'three';
import loader from '../../core/loader';

import vert from './coins.vert';
import frag from './coins.frag';
import fragDepth from './coinsDepth.frag';
import { floatingCoinsRatio, vortexCoinsRatio } from '../../logic/successAnimationManager';
import { BufferGeometry, InstancedBufferGeometry, Mesh, ShaderMaterial } from 'three';
import { ASSETS_PATH } from '../../core/settings';
import { uniformsStore } from '../../../store/uniformsStore.ts';

const coinContainer = new Object3D();

const Coins = () => {
    let refGeometry: BufferGeometry;
    let coinMesh: Mesh | null = null;
    let coinGeometry: InstancedBufferGeometry | null = null;
    let coinMaterial: ShaderMaterial | null = null;
    let positionsArray = null;
    let orientArray = null;
    let curveuArray = null;
    let aoNArray = null;
    let aoPArray = null;
    let coinsCount = 0;
    let animationRatio = 0;
    const isFloating = true;
    let matcapTexture;

    let randsArray;
    const coinsSharedUniforms = {
        u_time: { value: 0 },
        u_ratio: { value: 0 },
        u_isFloating: { value: 1 },
    };

    async function preload() {
        loader.loadTexture(`${ASSETS_PATH}/matcap_gold.jpg`, (texture) => {
            matcapTexture = texture;
            matcapTexture.needsUpdate = true;
        });
        loader.loadBuf(`${ASSETS_PATH}/COIN.buf`, (geometry) => {
            refGeometry = geometry;
        });
        loader.loadBuf(`${ASSETS_PATH}/COIN_PLACEMENT.buf`, (geometry) => {
            const { position, aoN, aoP, curveu, orient } = geometry.attributes;
            positionsArray = position.array;
            aoNArray = aoN.array;
            aoPArray = aoP.array;
            curveuArray = curveu.array;
            orientArray = orient.array;

            coinsCount = position.count;
        });
    }

    function init() {
        _setupGeometry();
        _setupMaterial();
        _setupMesh();
        if (coinMesh) {
            coinContainer.add(coinMesh);
        }
    }

    function _setupGeometry() {
        refGeometry.computeVertexNormals();
        const geometry = new InstancedBufferGeometry();
        geometry.index = refGeometry.index;
        Object.entries(refGeometry.attributes).forEach(([id, attr]) => geometry.setAttribute(id, attr));

        randsArray = new Float32Array(coinsCount * 3).map(() => Math.random() * 2 - 1);

        const instanceAttributes = [
            ['a_instancePosition', positionsArray, 3],
            ['a_instanceQuaternion', orientArray, 4],
            ['a_instanceCurveUV', curveuArray, 1],
            ['a_instanceAoN', aoNArray, 3],
            ['a_instanceAoP', aoPArray, 3],
            ['a_instanceRand', randsArray, 3],
        ];

        instanceAttributes.forEach(([name, array, itemSize]) => {
            geometry.setAttribute(name, new InstancedBufferAttribute(array, itemSize));
        });

        coinGeometry = geometry;
    }

    function _setupMaterial() {
        const sharedUniforms = uniformsStore.getState().sharedUniforms;
        coinMaterial = new ShaderMaterial({
            uniforms: {
                ...sharedUniforms,
                ...coinsSharedUniforms,
                ...UniformsUtils.merge([UniformsLib.lights]),
                u_matcapTexture: { value: matcapTexture },
            },
            vertexShader: vert,
            fragmentShader: frag,
            lights: true,
        });
    }

    function _setupMesh() {
        if (coinGeometry && coinMaterial) {
            coinMesh = new Mesh(coinGeometry, coinMaterial);
            coinMesh.frustumCulled = false;
            coinMesh.castShadow = true;
            coinMesh.receiveShadow = true;

            coinMesh.customDepthMaterial = new ShaderMaterial({
                uniforms: { ...coinsSharedUniforms },
                vertexShader: vert,
                fragmentShader: fragDepth,
                defines: { IS_DEPTH: true },
            });
        }
    }

    function update(dt: number) {
        const isFloatingAnimationActive = vortexCoinsRatio === 0;

        animationRatio = isFloatingAnimationActive ? floatingCoinsRatio : vortexCoinsRatio;

        coinsSharedUniforms.u_ratio.value = animationRatio;
        coinsSharedUniforms.u_time.value += dt;

        coinsSharedUniforms.u_isFloating.value = isFloatingAnimationActive ? 1 : 0;
        if (coinMesh) {
            coinMesh.rotation.y = (isFloating ? 0 : 4) * animationRatio;
            coinMesh.visible = animationRatio > 0 && animationRatio < 1;
        }
    }

    return {
        preload,
        init,
        update,
    };
};

export { Coins, coinContainer };
