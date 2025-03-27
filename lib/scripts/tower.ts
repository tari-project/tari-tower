import * as THREE from 'three';
import settings, { WEBGL_OPTS } from './core/settings.ts';
import { properties } from './core/properties.ts';
import { heroBlocks, heroContainer } from './visuals/hero/hero.ts';
import { coinContainer, Coins } from './visuals/coins/coins.ts';
import BlueNoise from './utils/blueNoise/blueNoise.ts';
import { OrbitControls } from './controls/OrbitControls';
import game from './logic/systemManager.ts';
import { Background, bgContainer } from './visuals/bg/bg.ts';
import loader from './core/loader.ts';
import { OrthographicCamera } from 'three';
import { stateManagerStore } from '../store/stateManagerStore';

THREE.ColorManagement.enabled = false;

const TariTower = () => {
    const renderer = new THREE.WebGLRenderer(WEBGL_OPTS);
    const background = Background();
    const blueNoise = BlueNoise();
    const coins = Coins();

    let canvas: HTMLCanvasElement;
    let orbitControls: OrbitControls;
    let _canvasId: string | undefined = undefined;

    const aspect = window.innerWidth / window.innerHeight;
    const viewHeight = 15;
    const viewWidth = viewHeight * aspect;

    const camera = new THREE.OrthographicCamera(
        viewWidth / -2,
        viewWidth / 2,
        viewHeight / 2,
        viewHeight / -2,
        1,
        1000
    );

    let orbitCamera: OrthographicCamera;

    async function _handleRenderer() {
        if (_canvasId && renderer) {
            renderer.domElement.id = _canvasId;
            canvas = renderer.domElement;
            document.body.appendChild(canvas);

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFShadowMap;

            if (properties.sharedUniforms) {
                const bgColor1 = properties.sharedUniforms.u_bgColor1.value;
                const bgColor2 = properties.sharedUniforms.u_bgColor2.value;
                bgColor1.set(properties.bgColor1).convertSRGBToLinear();
                bgColor2.set(properties.bgColor2).convertSRGBToLinear();
            }
            renderer.setClearColor(properties.bgColor1, 1);
        }
    }

    function _handleResize(viewportWidth: number, viewportHeight: number) {
        properties.viewportWidth = viewportWidth;
        properties.viewportHeight = viewportHeight;
        properties.viewportResolution.set(viewportWidth, window.innerHeight);
        properties.sharedUniforms.u_viewportResolution.value = properties.viewportResolution;

        let dprWidth = viewportWidth * settings.DPR;
        let dprHeight = viewportHeight * settings.DPR;

        const aspect = dprWidth / dprHeight;

        if (dprHeight * dprWidth > settings.MAX_PIXEL_COUNT) {
            dprHeight = Math.sqrt(settings.MAX_PIXEL_COUNT / aspect);
            dprWidth = Math.ceil(dprHeight * aspect);
            dprHeight = Math.ceil(dprHeight);
        }

        properties.width = dprWidth;
        properties.height = dprHeight;
        properties.resolution.set(dprWidth, dprHeight);
        camera.updateProjectionMatrix();

        renderer.setSize(dprWidth, dprHeight);
        canvas.style.width = viewportWidth + 'px';
        canvas.style.height = viewportHeight + 'px';
    }

    function onResize() {
        _handleResize(window.innerWidth, window.innerHeight);
    }

    async function preload({ canvasId, initCallback }: { canvasId: string; initCallback: () => void }) {
        stateManagerStore.subscribe(
            (state) => state.destroyCanvas,
            (destroyCanvas) => {
                if (destroyCanvas) {
                    destroy();
                }
            }
        );

        _canvasId = canvasId;
        await _handleRenderer();

        await heroBlocks.preload();
        await blueNoise.preInit();
        await coins.preload();

        loader.start(initCallback);
    }

    async function _initScene() {
        properties.scene.add(camera);
        camera.position.fromArray(settings.DEFAULT_POSITION);
        camera.updateProjectionMatrix();
        orbitCamera = camera.clone();
        orbitControls = new OrbitControls(orbitCamera, canvas);
        orbitControls.target0.fromArray(settings.DEFAULT_LOOKAT_POSITION);
        orbitControls.reset();
    }
    async function init() {
        await _initScene();

        try {
            // first the logic
            await game.init();

            // then the visuals
            heroBlocks.init();
            coins.init();
            background.init();

            properties.scene.add(coinContainer);
            properties.scene.add(bgContainer);
            properties.scene.add(heroContainer);
        } catch (error) {
            console.error('init tower error: ', error);
        }
    }

    function render(dt: number) {
        if (!canvas) {
            dt *= 0;
        }

        dt = Math.min(dt, 1 / 15);

        properties.time += dt;
        properties.deltaTime = dt;
        if (properties.sharedUniforms) {
            properties.sharedUniforms.u_time.value = properties.time;
            properties.sharedUniforms.u_deltaTime.value = dt;
        }

        const aspect = (window.innerWidth - properties.cameraOffsetX) / window.innerHeight;
        const viewHeight = 10;
        const viewWidth = viewHeight * aspect;

        let offsetX = 0;

        if (properties.offsetX) {
            const offP = (properties.offsetX / window.innerWidth) * 100;
            offsetX = (viewWidth * offP) / 100;
        }

        const left = -viewWidth / 2 - offsetX / 2;
        const right = viewWidth / 2 - offsetX / 2;

        camera.left = left;
        camera.right = right;
        camera.top = viewHeight / 2;
        camera.bottom = viewHeight / -2;

        camera.updateProjectionMatrix();
        orbitControls?.update();
        orbitCamera?.updateMatrix();
        orbitCamera?.matrix.decompose(camera.position, camera.quaternion, camera.scale);
        camera.matrix.compose(camera.position, camera.quaternion, camera.scale);

        blueNoise.update(dt);
        game.update(dt);
        heroBlocks.update(dt);
        coins.update(dt);
        background.update(dt);
        renderer.render(properties.scene, camera);
    }
    function destroy() {
        canvas.remove();
        renderer.state.reset();
    }
    return {
        preload,
        renderer,
        init,
        coins,
        blueNoise,
        onResize,
        render,
    };
};

export default TariTower;
