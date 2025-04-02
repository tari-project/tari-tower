import { Color, InstancedBufferAttribute, InstancedBufferGeometry, Mesh, Object3D, PlaneGeometry, ShaderMaterial } from 'three';

import vert from './bg.vert';
import frag from './bg.frag';
import particlesVert from './particles.vert';
import particlesFrag from './particles.frag';
import { uniformsStore } from '../../../store/uniformsStore.ts';
import { propertiesStore } from '../../../store/propertiesStore.ts';

const Background = () => {
    const container = new Object3D();
    const particlesMesh: Mesh & { material: ShaderMaterial } = new Mesh();
    let bgMesh: Mesh & { material: ShaderMaterial } = new Mesh();
    let propertiesState = propertiesStore.getState();
    let sharedUniforms = uniformsStore.getState();

    function init() {
        const propertiesListener: Parameters<typeof propertiesStore.subscribe>[0] = (state) => (propertiesState = state);
        const uniformsListener: Parameters<typeof uniformsStore.subscribe>[0] = (state) => (sharedUniforms = state);
        uniformsStore.subscribe((s) => s, uniformsListener);
        propertiesStore.subscribe((s) => s, propertiesListener);
        initBg();
    }
    function initBg() {
        const { u_resolution, u_bgColor1, u_bgColor2, u_blueNoiseTexture, u_blueNoiseTexelSize, u_blueNoiseCoordOffset } = sharedUniforms;
        const uniforms = {
            u_resolution,
            u_bgColor1,
            u_bgColor2,
            u_blueNoiseTexture,
            u_blueNoiseTexelSize,
            u_blueNoiseCoordOffset,
        };
        const material = new ShaderMaterial({
            uniforms,
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
                u_time: sharedUniforms.u_time,
                u_resolution: sharedUniforms.u_resolution,
                u_size: { value: propertiesState.particlesSize },
                u_color: { value: new Color(propertiesState.particlesColor) },
                u_opacity: { value: propertiesState.particlesOpacity },
            },
            transparent: true,
        });
        particlesMesh.geometry = geometry;
        particlesMesh.material = material;

        particlesMesh.renderOrder = 2;
        particlesMesh.frustumCulled = false;

        container.add(particlesMesh);
    }

    function update(_dt: number) {
        bgMesh.material.uniforms.u_bgColor1.value = sharedUniforms.u_bgColor1.value;
        bgMesh.material.uniforms.u_bgColor2.value = sharedUniforms.u_bgColor2.value;
        particlesMesh.material.uniforms.u_time.value = sharedUniforms.u_time.value;
        particlesMesh.material.uniforms.u_size.value = propertiesState.particlesSize;
        particlesMesh.material.uniforms.u_color.value.set(propertiesState.particlesColor);
        particlesMesh.material.uniforms.u_opacity.value = propertiesState.particlesOpacity;
    }

    return { init, update, container };
};

export { Background };
