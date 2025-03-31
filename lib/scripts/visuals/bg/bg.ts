import * as THREE from 'three';
import { Mesh, ShaderMaterial } from 'three';

import { bn_sharedUniforms } from '../../utils/blueNoise/blueNoise';

import vert from './bg.vert?raw';
import frag from './bg.frag?raw';
import particlesVert from './particles.vert?raw';
import particlesFrag from './particles.frag?raw';
import { TSharedUniforms, uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';

const container = new THREE.Object3D();
const Background = () => {
    const particles: Mesh & { material: ShaderMaterial } = new THREE.Mesh();
    const mesh: Mesh & { material: ShaderMaterial } = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    let sharedUniforms: TSharedUniforms;

    uniformsStore.subscribe((state) => {
        sharedUniforms = state;
    });
    function init() {
        const uniforms = {
            u_resolution: sharedUniforms.u_resolution,
            u_bgColor1: sharedUniforms.u_bgColor1,
            u_bgColor2: sharedUniforms.u_bgColor2,
            ...bn_sharedUniforms,
        } as unknown as ShaderMaterial['uniforms'];

        mesh.material = new THREE.ShaderMaterial({
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
        const refGeometry = new THREE.PlaneGeometry(1, 1);

        const geometry = new THREE.InstancedBufferGeometry();
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

        geometry.setAttribute('a_instancePosition', new THREE.InstancedBufferAttribute(positionArray, 3));
        geometry.setAttribute('a_instanceRandom', new THREE.InstancedBufferAttribute(randomArray, 3));
        const uniforms = {
            u_time: sharedUniforms?.u_time || { value: propertiesStore.getState().time },
            u_resolution: sharedUniforms.u_resolution,
            u_size: { value: 0.01 },
            u_color: { value: new THREE.Color() },
            u_opacity: { value: 0 },
        };
        particles.material = new THREE.ShaderMaterial({
            vertexShader: particlesVert,
            fragmentShader: particlesFrag,
            uniforms,
            transparent: true,
        });
        particles.geometry = geometry;
        particles.frustumCulled = false;
        container.add(particles);
    }

    function update(_dt: number) {
        particles.material.uniforms.u_size.value = propertiesStore.getState().particlesSize;
        particles.material.uniforms.u_color.value.set(propertiesStore.getState().particlesColor);
        particles.material.uniforms.u_opacity.value = propertiesStore.getState().particlesOpacity;
    }

    return { init, update };
};

export { Background, container as bgContainer };
