import { Quaternion, Vector2, Vector3 } from 'three';

const HALF_PI = Math.PI / 2;
const _v0 = new Vector3();

export default class HeroBlockCoordinates {
    animation = 0;
    boardDir: Vector2 = new Vector2();
    boardPos: Vector2 = new Vector2();
    pos: Vector3 = new Vector3();
    orient: Quaternion = new Quaternion();
    showRatio = 0;
    spinPivot: Vector3 = new Vector3();
    spinOrient: Quaternion = new Quaternion();

    constructor() {
        this.animation = 0;
        this.boardDir = new Vector2();
        this.boardPos = new Vector2();
        this.pos = new Vector3();
        this.orient = new Quaternion();
        this.showRatio = 0;
        this.spinPivot = new Vector3();
        this.spinOrient = new Quaternion();
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
}
