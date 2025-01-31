class MathUtils {
    constructor() {
        Object.defineProperty(this, "PI", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Math.PI
        });
    }
    clamp(val, min, max) {
        return val < min ? min : val > max ? max : val;
    }
    mix(min, max, ratio) {
        return min + (max - min) * ratio;
    }
    cUnMix(min, max, val) {
        return this.clamp((val - min) / (max - min), 0, 1);
    }
    saturate(val) {
        return this.clamp(val, 0, 1);
    }
    fit(val, min, max, toMin, toMax, ease) {
        val = this.cUnMix(min, max, val);
        if (ease)
            val = ease(val);
        return toMin + val * (toMax - toMin);
    }
}
export default new MathUtils();
