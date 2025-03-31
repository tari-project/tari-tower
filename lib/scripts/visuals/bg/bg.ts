import {
    Color,
    InstancedBufferAttribute,
    InstancedBufferGeometry,
    Mesh,
    Object3D,
    PlaneGeometry,
    ShaderMaterial,
} from 'three';

import vert from './bg.vert?raw';
import frag from './bg.frag?raw';
import particlesVert from './particles.vert?raw';
import particlesFrag from './particles.frag?raw';
import { TSharedUniforms, uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';

const container = new Object3D();
const Background = () => {
    const mesh: Mesh & { material: ShaderMaterial } = new Mesh(new PlaneGeometry(2, 2));
    const particlesMesh: Mesh & { material: ShaderMaterial } = new Mesh();

    let sharedUniforms: TSharedUniforms;

    uniformsStore.subscribe(
        (state) => state,
        (state) => {
            sharedUniforms = state;
        },
        { fireImmediately: true }
    );
    function init() {
        const uniforms = {
            u_resolution: sharedUniforms.u_resolution,
            u_bgColor1: sharedUniforms.u_bgColor1,
            u_bgColor2: sharedUniforms.u_bgColor2,
            u_blueNoiseTexture: sharedUniforms.u_blueNoiseTexture,
            u_blueNoiseTexelSize: sharedUniforms.u_blueNoiseTexelSize,
            u_blueNoiseCoordOffset: sharedUniforms.u_blueNoiseCoordOffset,
        };

        mesh.material = new ShaderMaterial({
            uniforms,
            vertexShader: vert,
            fragmentShader: frag,
        });
        mesh.renderOrder = 1;
        container.add(mesh);
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

        const uniforms = {
            u_time: sharedUniforms?.u_time || { value: propertiesStore.getState().time },
            u_resolution: sharedUniforms.u_resolution,
            u_size: { value: propertiesStore.getState().particlesSize },
            u_color: { value: new Color(propertiesStore.getState().particlesColor) },
            u_opacity: { value: propertiesStore.getState().particlesOpacity },
        };

        particlesMesh.material = new ShaderMaterial({
            vertexShader: particlesVert,
            fragmentShader: particlesFrag,
            uniforms,
            transparent: true,
        });
        particlesMesh.geometry = geometry;
        particlesMesh.frustumCulled = false;
        container.add(particlesMesh);
    }
    function update(_dt: number) {
        particlesMesh.material.uniforms.u_size.value = propertiesStore.getState().particlesSize;
        particlesMesh.material.uniforms.u_color.value.set(propertiesStore.getState().particlesColor);
        particlesMesh.material.uniforms.u_opacity.value = propertiesStore.getState().particlesOpacity;
    }

    return { init, update };
};

export { Background, container as bgContainer };
