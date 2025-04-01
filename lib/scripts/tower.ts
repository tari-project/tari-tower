import { ColorManagement, PCFShadowMap, Scene, WebGLRenderer } from 'three';
import { DEFAULT_LOOKAT_POSITION, DEFAULT_POSITION, DPR, MAX_PIXEL_COUNT, WEBGL_OPTS } from './core/settings.ts';

import { heroBlocks } from './visuals/hero/hero.ts';
import { coinContainer, Coins } from './visuals/coins/coins.ts';
import BlueNoise from './utils/blueNoise/blueNoise.ts';
import { OrbitControls } from './controls/OrbitControls';
import game from './logic/systemManager.ts';
import { Background, bgContainer } from './visuals/bg/bg.ts';
import loader from './core/loader.ts';
import { OrthographicCamera } from 'three';
import { stateManagerStore } from '../store/stateManagerStore';
import { propertiesStore } from '../store/propertiesStore.ts';
import { uniformsStore } from '../store/uniformsStore.ts';

ColorManagement.enabled = false;

const TariTower = () => {
    const scene = new Scene();
    const setProperty = propertiesStore.getState().setProperty;
    const renderer = new WebGLRenderer(WEBGL_OPTS);
    const background = Background();
    const blueNoise = BlueNoise();
    const coins = Coins();

    let canvas: HTMLCanvasElement;
    let orbitControls: OrbitControls;
    let _canvasId: string | undefined = undefined;

    const aspect = window.innerWidth / window.innerHeight;
    const viewHeight = 15;
    const viewWidth = viewHeight * aspect;

    const camera = new OrthographicCamera(viewWidth / -2, viewWidth / 2, viewHeight / 2, viewHeight / -2, 1, 1000);

    let orbitCamera: OrthographicCamera;

    async function _handleRenderer() {
        if (_canvasId && renderer) {
            renderer.domElement.id = _canvasId;
            canvas = renderer.domElement;
            document.body.appendChild(canvas);

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = PCFShadowMap;

            const pBgColor1 = propertiesStore.getState().bgColor1;
            const pBgColor2 = propertiesStore.getState().bgColor2;
            const ubgColor1 = uniformsStore.getState().u_bgColor1.value.set(pBgColor1).convertSRGBToLinear();
            const ubgColor2 = uniformsStore.getState().u_bgColor2.value.set(pBgColor2).convertSRGBToLinear();

            uniformsStore.setState({ u_bgColor1: { value: ubgColor1 }, u_bgColor2: { value: ubgColor2 } });
            renderer.setClearColor(ubgColor1, 1);
        }
    }

    function _handleResize(viewportWidth: number, viewportHeight: number) {
        setProperty({ propertyName: 'viewportWidth', value: viewportWidth });
        setProperty({ propertyName: 'viewportHeight', value: viewportHeight });

        let dprWidth = viewportWidth * DPR;
        let dprHeight = viewportHeight * DPR;

        const aspect = dprWidth / dprHeight;

        if (dprHeight * dprWidth > MAX_PIXEL_COUNT) {
            dprHeight = Math.sqrt(MAX_PIXEL_COUNT / aspect);
            dprWidth = Math.ceil(dprHeight * aspect);
            dprHeight = Math.ceil(dprHeight);
        }

        setProperty({ propertyName: 'width', value: dprWidth });
        setProperty({ propertyName: 'height', value: dprHeight });

        camera.updateProjectionMatrix();

        uniformsStore.setState((c) => ({
            u_viewportResolution: {
                value: c.u_viewportResolution.value.set(viewportWidth, window.innerHeight),
            },
            u_resolution: { value: c.u_resolution.value.set(dprWidth, dprHeight) },
        }));

        renderer.setSize(dprWidth, dprHeight);
        canvas.style.width = viewportWidth + 'px';
        canvas.style.height = viewportHeight + 'px';
    }

    function onResize() {
        _handleResize(window.innerWidth, window.innerHeight);
    }

    async function preload({ canvasId, initCallback }: { canvasId: string; initCallback: () => void }) {
        _canvasId = canvasId;
        try {
            await _handleRenderer();
        } catch (e) {
            console.error('renderer', e);
        }

        try {
            await heroBlocks.preload();
        } catch (e) {
            console.error('blocks preload', e);
        }

        try {
            await blueNoise.preInit();
        } catch (e) {
            console.error('blue noise preload', e);
        }

        try {
            await coins.preload();
        } catch (e) {
            console.error('coins preload', e);
        }

        loader.start(initCallback);
    }

    async function _initScene() {
        scene.add(camera);
        camera.position.fromArray(DEFAULT_POSITION);
        camera.updateProjectionMatrix();
        orbitCamera = camera.clone();
        orbitControls = new OrbitControls(orbitCamera, canvas);
        orbitControls.target0.fromArray(DEFAULT_LOOKAT_POSITION);
        orbitControls.reset();
    }
    async function init() {
        await _initScene();

        const destroyListener = (destroyCanvas: boolean) => {
            if (destroyCanvas) {
                destroy();
            }
        };

        stateManagerStore.subscribe((state) => destroyListener(state.destroyCanvas));

        try {
            // first the logic
            await game.init();

            // then the visuals
            const directLight = await heroBlocks.init();
            if (directLight) {
                scene.add(directLight);
                scene.add(directLight.target);
            }
            coins.init();
            background.init();

            scene.add(coinContainer);
            scene.add(bgContainer);
            scene.add(heroBlocks.heroContainer);
        } catch (error) {
            console.error('init tower error: ', error);
        }
    }

    function render(dt: number) {
        if (!canvas) {
            dt *= 0;
        }

        dt = Math.min(dt, 1 / 15);

        let time = propertiesStore.getState().time;
        const cameraOffsetX = propertiesStore.getState().cameraOffsetX;
        let offsetX = propertiesStore.getState().offsetX;

        time += dt;

        setProperty({ propertyName: 'time', value: time });
        setProperty({ propertyName: 'deltaTime', value: dt });

        uniformsStore.setState({
            u_time: { value: time },
            u_deltaTime: { value: dt },
        });

        const aspect = (window.innerWidth - cameraOffsetX) / window.innerHeight;
        const viewHeight = 10;
        const viewWidth = viewHeight * aspect;

        if (offsetX) {
            const offP = (offsetX / window.innerWidth) * 100;
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

        if (renderer && scene) {
            renderer.render(scene, camera);
        }
    }
    function destroy() {
        stateManagerStore.getState().reset();
        canvas.remove();
        renderer.state.reset();
    }
    return {
        preload,
        init,
        onResize,
        render,
    };
};

export default TariTower;
