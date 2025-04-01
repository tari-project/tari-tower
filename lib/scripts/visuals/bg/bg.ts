import { Color, InstancedBufferAttribute, InstancedBufferGeometry, Mesh, Object3D, PlaneGeometry, ShaderMaterial } from 'three';

import vert from './bg.vert?raw';
import frag from './bg.frag?raw';
import particlesVert from './particles.vert?raw';
import particlesFrag from './particles.frag?raw';
import { uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';

const container = new Object3D();
const Background = () => {
    const particlesMesh: Mesh & { material: ShaderMaterial } = new Mesh();
    const mesh: Mesh & { material: ShaderMaterial } = new Mesh(new PlaneGeometry(2, 2));

    function init() {
        let u: Partial<typeof uniformsStore.subscribe> = {
            u_bgColor1: uniformsStore.getState().u_bgColor1,
            u_bgColor2: uniformsStore.getState().u_bgColor2,
        };
        const listen: Parameters<typeof uniformsStore.subscribe>[0] = ({ u_resolution, u_bgColor1, u_bgColor2, u_blueNoiseTexture, u_blueNoiseTexelSize, u_blueNoiseCoordOffset }) => {
            u = {
                ...u,
                u_resolution,
                u_bgColor1,
                u_bgColor2,
                u_blueNoiseTexture,
                u_blueNoiseTexelSize,
                u_blueNoiseCoordOffset,
            };
        };

        uniformsStore.subscribe((s) => s, listen);

        mesh.material = new ShaderMaterial({
            uniforms: u,
            vertexShader: vert,
            fragmentShader: frag,
        });
        mesh.renderOrder = 1;
        container.add(mesh);
        initParticles();
    }

    function initParticles() {
        const propertiesState = propertiesStore.getState();
        let u = {
            u_resolution: uniformsStore.getState().u_resolution,
            u_time: uniformsStore.getState().u_time || { value: propertiesState.time },
            u_size: { value: propertiesState.particlesSize || 0.01 },
            u_color: { value: new Color(propertiesState.particlesColor) },
            u_opacity: { value: propertiesState.particlesOpacity || 0 },
        };
        const listen: Parameters<typeof uniformsStore.subscribe>[0] = ({ u_time, u_resolution }) => {
            u = {
                ...u,
                u_time,
                u_resolution,
            };
        };
        uniformsStore.subscribe((s) => s, listen);

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

        particlesMesh.material = new ShaderMaterial({
            vertexShader: particlesVert,
            fragmentShader: particlesFrag,
            uniforms: u,
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
