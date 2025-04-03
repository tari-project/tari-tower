import { Color, ColorManagement, PCFShadowMap, Scene, WebGLRenderer } from 'three';
import { DEFAULT_LOOKAT_POSITION, DEFAULT_POSITION, DPR, MAX_PIXEL_COUNT, WEBGL_OPTS } from './core/settings.ts';

import { heroBlocks, heroContainer } from './visuals/hero/hero.ts';
import { coinContainer, Coins } from './visuals/coins/coins.ts';
import BlueNoise from './utils/blueNoise/blueNoise.ts';
import { OrbitControls } from './controls/OrbitControls';
import game from './logic/systemManager.ts';
import { Background } from './visuals/bg/bg.ts';
import loader from './core/loader.ts';
import { OrthographicCamera } from 'three';
import { stateManagerStore } from '../store/stateManagerStore';
import { propertiesStore } from '../store/propertiesStore.ts';
import { setTimes, setUniform, uniformsStore } from '../store/uniformsStore.ts';

ColorManagement.enabled = false;

const background = Background();
const blueNoise = BlueNoise();
const coins = Coins();
const TariTower = () => {
    const scene = new Scene();
    const renderer = new WebGLRenderer(WEBGL_OPTS);

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

            const bgColor = new Color(propertiesStore.getState().bgColor2).convertSRGBToLinear();
            renderer.setClearColor(bgColor, 1);
        }
    }

    function _handleResize(viewportWidth: number, viewportHeight: number) {
        propertiesStore.getState().setProperty({ propertyName: 'viewportWidth', value: viewportWidth });
        propertiesStore.getState().setProperty({ propertyName: 'viewportHeight', value: viewportHeight });

        let dprWidth = viewportWidth * DPR;
        let dprHeight = viewportHeight * DPR;

        const aspect = dprWidth / dprHeight;

        if (dprHeight * dprWidth > MAX_PIXEL_COUNT) {
            dprHeight = Math.sqrt(MAX_PIXEL_COUNT / aspect);
            dprWidth = Math.ceil(dprHeight * aspect);
            dprHeight = Math.ceil(dprHeight);
        }

        propertiesStore.getState().setProperty({ propertyName: 'width', value: dprWidth });
        propertiesStore.getState().setProperty({ propertyName: 'height', value: dprHeight });

        const cVR = uniformsStore.getState().u_viewportResolution;
        const cR = uniformsStore.getState().u_resolution;
        setUniform({ u_viewportResolution: { value: cVR.value.set(viewportWidth, window.innerHeight) } });
        setUniform({ u_resolution: { value: cR.value.set(dprWidth, dprHeight) } });

        camera.updateProjectionMatrix();

        renderer.setSize(dprWidth, dprHeight);
        canvas.style.width = viewportWidth + 'px';
        canvas.style.height = viewportHeight + 'px';
    }

    function onResize() {
        _handleResize(window.innerWidth, window.innerHeight);
    }

    async function preload({ canvasId, initCallback }: { canvasId: string; initCallback: () => void }) {
        _canvasId = canvasId;
        await heroBlocks.preload();
        await blueNoise.preInit();
        await coins.preload();
        await _handleRenderer();

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

        // first the logic
        await game.init();
        background.init();

        // then the visuals
        const directLight = await heroBlocks.init();
        if (directLight) {
            scene.add(directLight);
            scene.add(directLight.target);
        }
        coins.init();
        scene.add(coinContainer);
        scene.add(heroContainer);
        if (background?.container) {
            scene.add(background.container);
        }
    }

    function render(dt: number) {
        if (!canvas) {
            dt *= 0;
        }

        let time = propertiesStore.getState().time;

        dt = Math.min(dt, 1 / 15);
        time += dt;

        const cameraOffsetX = propertiesStore.getState().cameraOffsetX;
        let offsetX = propertiesStore.getState().offsetX;

        propertiesStore.setState({ time: time });
        propertiesStore.setState({ deltaTime: dt });

        setTimes(time, dt);

        const aspect = (window.innerWidth - cameraOffsetX) / window.innerHeight;
        const viewHeight = 10;
        const viewWidth = viewHeight * aspect;

        if (offsetX) {
            const offP = (offsetX / window.innerWidth) * 100;
            offsetX = (viewWidth * offP) / 100;
        }

        const left = -viewWidth / 2 - offsetX / 2;
        const right = viewWidth / 2 - offsetX / 2;

        blueNoise.update(dt);
        game.update(dt);

        camera.left = left;
        camera.right = right;
        camera.top = viewHeight / 2;
        camera.bottom = viewHeight / -2;

        camera.updateProjectionMatrix();
        orbitControls?.update();
        orbitCamera?.updateMatrix();
        orbitCamera?.matrix.decompose(camera.position, camera.quaternion, camera.scale);
        camera.matrix.compose(camera.position, camera.quaternion, camera.scale);

        background?.update(dt);
        heroBlocks.update(dt);
        coins.update(dt);
        renderer.render(scene, camera);
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
