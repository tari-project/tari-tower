import * as THREE from 'three';
import { properties } from '../../core/properties';
import { bn_sharedUniforms } from '../../utils/blueNoise/blueNoise';

import vert from './bg.vert?raw';
import frag from './bg.frag?raw';
import particlesVert from './particles.vert?raw';
import particlesFrag from './particles.frag?raw';
import { Mesh, ShaderMaterial } from 'three';

const Background = () => {
	const container = new THREE.Object3D();
	let particles: Mesh & { material: ShaderMaterial };

	function init() {
		const material = new THREE.ShaderMaterial({
			uniforms: Object.assign(
				{
					u_resolution: properties.sharedUniforms?.u_resolution,
					u_bgColor1: properties.sharedUniforms?.u_bgColor1,
					u_bgColor2: properties.sharedUniforms?.u_bgColor2,
				},
				bn_sharedUniforms,
			),
			vertexShader: vert,
			fragmentShader: frag,
		});
		const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
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

		const material = new THREE.ShaderMaterial({
			vertexShader: particlesVert,
			fragmentShader: particlesFrag,
			uniforms: {
				u_time: properties.sharedUniforms?.u_time || { value: properties.time },
				u_resolution: properties.sharedUniforms?.u_resolution || { value: properties.resolution },
				u_size: { value: 0.01 },
				u_color: { value: new THREE.Color() },
				u_opacity: { value: 0 },
			},
			transparent: true,
		});

		particles = new THREE.Mesh(geometry, material);
		particles.renderOrder = 2;
		particles.frustumCulled = false;
		container.add(particles);
	}

	function update(_dt: number) {
		particles.material.uniforms.u_size.value = properties.particlesSize;
		particles.material.uniforms.u_color.value.set(properties.particlesColor);
		particles.material.uniforms.u_opacity.value = properties.particlesOpacity;
	}

	return { init, container, update };
};

export default Background;
