import { Color, InstancedBufferAttribute, InstancedBufferGeometry, Mesh, Object3D, PlaneGeometry, ShaderMaterial } from 'three';

import vert from './bg.vert';
import frag from './bg.frag';
import particlesVert from './particles.vert';
import particlesFrag from './particles.frag';
import { uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';

const Background = () => {
    let propertiesState = propertiesStore.getState();
    const container = new Object3D();
    let particlesMesh: Mesh & { material: ShaderMaterial } = new Mesh();
    let bgMesh: Mesh & { material: ShaderMaterial } = new Mesh();

    function init() {
        const ul = propertiesStore.subscribe(
            (s) => s,
            (s, p) => {
                propertiesState = s;
            },
            { fireImmediately: true }
        );

        ul();

        initBg();
    }
    function initBg() {
        const { u_resolution, u_bgColor1, u_bgColor2, u_blueNoiseTexture, u_blueNoiseTexelSize, u_blueNoiseCoordOffset } = uniformsStore.getState();
        const u: Partial<typeof uniformsStore.subscribe> = {
            u_resolution,
            u_bgColor1,
            u_bgColor2,
            u_blueNoiseTexture,
            u_blueNoiseTexelSize,
            u_blueNoiseCoordOffset,
        };

        const material = new ShaderMaterial({
            uniforms: u,
            vertexShader: vert,
            fragmentShader: frag,
        });

        bgMesh = new Mesh(new PlaneGeometry(2, 2), material);

        bgMesh.renderOrder = 1;
        container.add(bgMesh);
        initParticles();
    }

    function initParticles() {
        const particlesCount = 50;
        const refGeometry = new PlaneGeometry(1, 1);

        const geometry = new InstancedBufferGeometry();
        geometry.index = refGeometry.index;
        Object.keys(refGeometry.attributes).forEach((id) => {
            geometry.setAttribute(id, refGeometry.attributes[id]);
        });
        geometry.instanceCount = particlesCount;

        const positionArray = new Float32Array(particlesCount * 3);
        const randomArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            positionArray[i * 3] = 3 * (Math.random() * 2 - 1);
            positionArray[i * 3 + 1] = Math.random() * 2 - 1;
            positionArray[i * 3 + 2] = 0.5 + 0.5 * Math.random();

            randomArray[i * 3] = Math.random();
            randomArray[i * 3 + 1] = Math.random();
            randomArray[i * 3 + 2] = Math.random();
        }

        geometry.setAttribute('a_instancePosition', new InstancedBufferAttribute(positionArray, 3));
        geometry.setAttribute('a_instanceRandom', new InstancedBufferAttribute(randomArray, 3));

        const material = new ShaderMaterial({
            vertexShader: particlesVert,
            fragmentShader: particlesFrag,
            uniforms: {
                u_size: { value: 0.01 },
                u_color: { value: new Color() },
                u_opacity: { value: 0 },
                u_resolution: uniformsStore.getState().u_resolution,
                u_time: uniformsStore.getState().u_time,
            },
            transparent: true,
        });

        particlesMesh = new Mesh(geometry, material);
        particlesMesh.renderOrder = 2;
        particlesMesh.frustumCulled = false;

        container.add(particlesMesh);
    }

    function update(_dt: number) {
        particlesMesh.material.uniforms.u_size.value = propertiesState.particlesSize;
        particlesMesh.material.uniforms.u_color.value.set(propertiesState.particlesColor);
        particlesMesh.material.uniforms.u_opacity.value = propertiesState.particlesOpacity;
    }

    return { init, update, container };
};

export { Background };
