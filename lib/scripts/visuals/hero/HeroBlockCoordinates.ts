import math from '@utils/math';
import * as THREE from 'three';
import { Quaternion, Vector2, Vector3 } from 'three';

const HALF_PI = Math.PI / 2;
const _v0 = new THREE.Vector3();

export default class HeroBlockCoordinates {
	animation = 0;
	boardDir: Vector2 = new THREE.Vector2();
	boardPos: Vector2 = new THREE.Vector2();
	pos: Vector3 = new THREE.Vector3();
	orient: Quaternion = new THREE.Quaternion();
	showRatio = 0;
	spinPivot: Vector3 = new THREE.Vector3();
	spinOrient: Quaternion = new THREE.Quaternion();

	constructor() {
		this.animation = 0;
		this.boardDir = new THREE.Vector2();
		this.boardPos = new THREE.Vector2();
		this.pos = new THREE.Vector3();
		this.orient = new THREE.Quaternion();
		this.showRatio = 0;
		this.spinPivot = new THREE.Vector3();
		this.spinOrient = new THREE.Quaternion();
	}

	reset() {
		this.animation = 0;
		this.boardDir.set(0, 0);
		this.boardPos.set(0, 0);
		this.pos.set(0, 0, 0);
		this.orient.identity();
		this.showRatio = 0;
		this.spinPivot.set(0, 0, 0);
		this.spinOrient.identity();
	}

	update(_dt: number) {
		this.pos.set(this.boardPos.x, 0, -this.boardPos.y);
		this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5);
		_v0.set(-this.boardDir.y, 0, -this.boardDir.x);
		this.spinOrient.setFromAxisAngle(_v0, this.animation * HALF_PI);
	}

	addsFallAnimation(ratio) {
		_v0.set(this.boardDir.x, -ratio, -this.boardDir.y);
		this.pos.addScaledVector(_v0, ratio);
		_v0.set(this.boardDir.x * 0.5, 0, -this.boardDir.y * 0.5);
		this.spinPivot.lerp(_v0, math.saturate(ratio));
	}
}
