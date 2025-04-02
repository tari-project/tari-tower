var Cc = Object.defineProperty;
var Pc = (i, e, t) => e in i ? Cc(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ce = (i, e, t) => Pc(i, typeof e != "symbol" ? e + "" : e, t);
var It = /* @__PURE__ */ ((i) => (i.NOT_STARTED = "not-started", i.FREE = "free", i.RESULT = "result", i))(It || {}), it = /* @__PURE__ */ ((i) => (i.NONE = "none", i.STOP = "stop", i.COMPLETED = "completed", i.FAILED = "failed", i.REPLAY = "replay", i))(it || {}), es = /* @__PURE__ */ ((i) => (i[i.ONE = 1] = "ONE", i[i.TWO = 2] = "TWO", i[i.THREE = 3] = "THREE", i))(es || {});
const Dc = [
  "failed",
  "completed"
  /* COMPLETED */
], Lc = (i) => {
  let e;
  const t = /* @__PURE__ */ new Set(), n = (c, u) => {
    const d = typeof c == "function" ? c(e) : c;
    if (!Object.is(d, e)) {
      const f = e;
      e = u ?? (typeof d != "object" || d === null) ? d : Object.assign({}, e, d), t.forEach((m) => m(e, f));
    }
  }, r = () => e, a = { setState: n, getState: r, getInitialState: () => l, subscribe: (c) => (t.add(c), () => t.delete(c)) }, l = e = i(n, r, a);
  return a;
}, pr = (i) => Lc, Ic = (i) => (e, t, n) => {
  const r = n.subscribe;
  return n.subscribe = (o, a, l) => {
    let c = o;
    if (a) {
      const u = (l == null ? void 0 : l.equalityFn) || Object.is;
      let d = o(n.getState());
      c = (f) => {
        const m = o(f);
        if (!u(d, m)) {
          const _ = d;
          a(d = m, _);
        }
      }, l != null && l.fireImmediately && a(d, d);
    }
    return r(c);
  }, i(e, t, n);
}, mr = Ic;
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const ja = "175", li = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ci = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Uc = 0, xo = 1, Nc = 2, $a = 1, Fc = 2, xn = 3, Vn = 0, Ft = 1, En = 2, zn = 0, Ii = 1, So = 2, Mo = 3, Eo = 4, Oc = 5, Qn = 100, Bc = 101, zc = 102, Hc = 103, Vc = 104, Gc = 200, kc = 201, Wc = 202, Xc = 203, la = 204, ca = 205, Yc = 206, qc = 207, Zc = 208, jc = 209, $c = 210, Kc = 211, Jc = 212, Qc = 213, eu = 214, ua = 0, ha = 1, da = 2, Ni = 3, fa = 4, pa = 5, ma = 6, _a = 7, Xl = 0, tu = 1, nu = 2, Hn = 0, iu = 1, ru = 2, su = 3, au = 4, ou = 5, lu = 6, cu = 7, Ka = 300, Fi = 301, Oi = 302, ga = 303, va = 304, vs = 306, cs = 1e3, yn = 1001, xa = 1002, Ot = 1003, uu = 1004, yr = 1005, Vt = 1006, ys = 1007, ii = 1008, hu = 1008, wn = 1009, Yl = 1010, ql = 1011, cr = 1012, Ja = 1013, ri = 1014, rn = 1015, _r = 1016, Qa = 1017, eo = 1018, ur = 1020, Zl = 35902, jl = 1021, $l = 1022, Gt = 1023, Kl = 1024, Jl = 1025, hr = 1026, dr = 1027, Ql = 1028, to = 1029, ec = 1030, no = 1031, io = 1033, ts = 33776, ns = 33777, is = 33778, rs = 33779, Sa = 35840, Ma = 35841, Ea = 35842, ya = 35843, Ta = 36196, ba = 37492, Aa = 37496, wa = 37808, Ra = 37809, Ca = 37810, Pa = 37811, Da = 37812, La = 37813, Ia = 37814, Ua = 37815, Na = 37816, Fa = 37817, Oa = 37818, Ba = 37819, za = 37820, Ha = 37821, ss = 36492, Va = 36494, Ga = 36495, tc = 36283, ka = 36284, Wa = 36285, Xa = 36286, du = 3200, fu = 3201, pu = 0, mu = 1, On = "", Zt = "srgb", Bi = "srgb-linear", us = "linear", Je = "srgb", ui = 7680, yo = 519, _u = 512, gu = 513, vu = 514, nc = 515, xu = 516, Su = 517, Mu = 518, Eu = 519, To = 35044, yu = 35048, bo = "300 es", un = 2e3, hs = 2001;
class ai {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const Tt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Ts = Math.PI / 180, Ya = 180 / Math.PI;
function gr() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Tt[i & 255] + Tt[i >> 8 & 255] + Tt[i >> 16 & 255] + Tt[i >> 24 & 255] + "-" + Tt[e & 255] + Tt[e >> 8 & 255] + "-" + Tt[e >> 16 & 15 | 64] + Tt[e >> 24 & 255] + "-" + Tt[t & 63 | 128] + Tt[t >> 8 & 255] + "-" + Tt[t >> 16 & 255] + Tt[t >> 24 & 255] + Tt[n & 255] + Tt[n >> 8 & 255] + Tt[n >> 16 & 255] + Tt[n >> 24 & 255]).toLowerCase();
}
function Ve(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Tu(i, e) {
  return (i % e + e) % e;
}
function bs(i, e, t) {
  return (1 - t) * i + t * e;
}
function ki(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Lt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class be {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    be.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ve(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ve(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Fe {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, r, s, o, a, l, c) {
    Fe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, r, s, o, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = a, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], d = n[7], f = n[2], m = n[5], _ = n[8], v = r[0], p = r[3], h = r[6], R = r[1], y = r[4], M = r[7], L = r[2], D = r[5], A = r[8];
    return s[0] = o * v + a * R + l * L, s[3] = o * p + a * y + l * D, s[6] = o * h + a * M + l * A, s[1] = c * v + u * R + d * L, s[4] = c * p + u * y + d * D, s[7] = c * h + u * M + d * A, s[2] = f * v + m * R + _ * L, s[5] = f * p + m * y + _ * D, s[8] = f * h + m * M + _ * A, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = u * o - a * c, f = a * l - u * s, m = c * s - o * l, _ = t * d + n * f + r * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return e[0] = d * v, e[1] = (r * c - u * n) * v, e[2] = (a * n - r * o) * v, e[3] = f * v, e[4] = (u * t - r * l) * v, e[5] = (r * s - a * t) * v, e[6] = m * v, e[7] = (n * l - c * t) * v, e[8] = (o * t - n * s) * v, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -r * c,
      r * l,
      -r * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(As.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(As.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(As.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const As = /* @__PURE__ */ new Fe();
function ic(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function fr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function bu() {
  const i = fr("canvas");
  return i.style.display = "block", i;
}
const Ao = {};
function as(i) {
  i in Ao || (Ao[i] = !0, console.warn(i));
}
function Au(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function wu(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Ru(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const wo = /* @__PURE__ */ new Fe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Ro = /* @__PURE__ */ new Fe().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function Cu() {
  const i = {
    enabled: !0,
    workingColorSpace: Bi,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, s, o) {
      return this.enabled === !1 || s === o || !s || !o || (this.spaces[s].transfer === Je && (r.r = bn(r.r), r.g = bn(r.g), r.b = bn(r.b)), this.spaces[s].primaries !== this.spaces[o].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === Je && (r.r = Ui(r.r), r.g = Ui(r.g), r.b = Ui(r.b))), r;
    },
    fromWorkingColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    toWorkingColorSpace: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === On ? us : this.spaces[r].transfer;
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, o) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Bi]: {
      primaries: e,
      whitePoint: n,
      transfer: us,
      toXYZ: wo,
      fromXYZ: Ro,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Zt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Zt }
    },
    [Zt]: {
      primaries: e,
      whitePoint: n,
      transfer: Je,
      toXYZ: wo,
      fromXYZ: Ro,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Zt }
    }
  }), i;
}
const Ye = /* @__PURE__ */ Cu();
function bn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ui(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let hi;
class Pu {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let n;
    if (e instanceof HTMLCanvasElement)
      n = e;
    else {
      hi === void 0 && (hi = fr("canvas")), hi.width = e.width, hi.height = e.height;
      const r = hi.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = hi;
    }
    return n.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = fr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = bn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(bn(t[n] / 255) * 255) : t[n] = bn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Du = 0;
class ro {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Du++ }), this.uuid = gr(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(ws(r[o].image)) : s.push(ws(r[o]));
      } else
        s = ws(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ws(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Pu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Lu = 0;
class Et extends ai {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = Et.DEFAULT_IMAGE, t = Et.DEFAULT_MAPPING, n = yn, r = yn, s = Vt, o = ii, a = Gt, l = wn, c = Et.DEFAULT_ANISOTROPY, u = On) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Lu++ }), this.uuid = gr(), this.name = "", this.source = new ro(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new be(0, 0), this.repeat = new be(1, 1), this.center = new be(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Fe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== Ka) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case cs:
          e.x = e.x - Math.floor(e.x);
          break;
        case yn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case xa:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case cs:
          e.y = e.y - Math.floor(e.y);
          break;
        case yn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case xa:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Et.DEFAULT_IMAGE = null;
Et.DEFAULT_MAPPING = Ka;
Et.DEFAULT_ANISOTROPY = 1;
class ut {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ut.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], u = l[4], d = l[8], f = l[1], m = l[5], _ = l[9], v = l[2], p = l[6], h = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(c + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (c + 1) / 2, M = (m + 1) / 2, L = (h + 1) / 2, D = (u + f) / 4, A = (d + v) / 4, C = (_ + p) / 4;
      return y > M && y > L ? y < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(y), r = D / n, s = A / n) : M > L ? M < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(M), n = D / r, s = C / r) : L < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(L), n = A / s, r = C / s), this.set(n, r, s, t), this;
    }
    let R = Math.sqrt((p - _) * (p - _) + (d - v) * (d - v) + (f - u) * (f - u));
    return Math.abs(R) < 1e-3 && (R = 1), this.x = (p - _) / R, this.y = (d - v) / R, this.z = (f - u) / R, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this.z = Ve(this.z, e.z, t.z), this.w = Ve(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this.z = Ve(this.z, e, t), this.w = Ve(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ve(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Iu extends ai {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ut(0, 0, e, t), this.scissorTest = !1, this.viewport = new ut(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Vt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new Et(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++)
      this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = !0, this.textures[a].renderTarget = this;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = n.depthTexture, this.samples = n.samples;
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new ro(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class si extends Iu {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class rc extends Et {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = yn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Uu extends Et {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Ot, this.minFilter = Ot, this.wrapR = yn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class kt {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed  in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor in the range `[0,1]`.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], d = n[r + 3];
    const f = s[o + 0], m = s[o + 1], _ = s[o + 2], v = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = _, e[t + 3] = v;
      return;
    }
    if (d !== v || l !== f || c !== m || u !== _) {
      let p = 1 - a;
      const h = l * f + c * m + u * _ + d * v, R = h >= 0 ? 1 : -1, y = 1 - h * h;
      if (y > Number.EPSILON) {
        const L = Math.sqrt(y), D = Math.atan2(L, h * R);
        p = Math.sin(p * D) / L, a = Math.sin(a * D) / L;
      }
      const M = a * R;
      if (l = l * p + f * M, c = c * p + m * M, u = u * p + _ * M, d = d * p + v * M, p === 1 - a) {
        const L = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        l *= L, c *= L, u *= L, d *= L;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], d = s[o], f = s[o + 1], m = s[o + 2], _ = s[o + 3];
    return e[t] = a * _ + u * d + l * m - c * f, e[t + 1] = l * _ + u * f + c * d - a * m, e[t + 2] = c * _ + u * m + a * f - l * d, e[t + 3] = u * _ - a * d - l * f - c * m, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(r / 2), d = a(s / 2), f = l(n / 2), m = l(r / 2), _ = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = f * u * d + c * m * _, this._y = c * m * d - f * u * _, this._z = c * u * _ + f * m * d, this._w = c * u * d - f * m * _;
        break;
      case "YXZ":
        this._x = f * u * d + c * m * _, this._y = c * m * d - f * u * _, this._z = c * u * _ - f * m * d, this._w = c * u * d + f * m * _;
        break;
      case "ZXY":
        this._x = f * u * d - c * m * _, this._y = c * m * d + f * u * _, this._z = c * u * _ + f * m * d, this._w = c * u * d - f * m * _;
        break;
      case "ZYX":
        this._x = f * u * d - c * m * _, this._y = c * m * d + f * u * _, this._z = c * u * _ - f * m * d, this._w = c * u * d + f * m * _;
        break;
      case "YZX":
        this._x = f * u * d + c * m * _, this._y = c * m * d + f * u * _, this._z = c * u * _ - f * m * d, this._w = c * u * d - f * m * _;
        break;
      case "XZY":
        this._x = f * u * d - c * m * _, this._y = c * m * d - f * u * _, this._z = c * u * _ + f * m * d, this._w = c * u * d + f * m * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], d = t[10], f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (o - r) * m;
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + c) / m;
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      this._w = (s - c) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ve(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + o * a + r * c - s * l, this._y = r * u + o * l + s * a - n * c, this._z = s * u + o * c + n * l - r * a, this._w = o * u - n * a - r * l - s * c, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), d = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = o * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class B {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    B.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(Co.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Co.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * n), u = 2 * (a * t - s * r), d = 2 * (s * n - o * t);
    return this.x = t + l * c + o * d - a * u, this.y = n + l * u + a * c - s * d, this.z = r + l * d + s * u - o * c, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ve(this.x, e.x, t.x), this.y = Ve(this.y, e.y, t.y), this.z = Ve(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ve(this.x, e, t), this.y = Ve(this.y, e, t), this.z = Ve(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ve(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = r * l - s * a, this.y = s * o - n * l, this.z = n * a - r * o, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return Rs.copy(this).projectOnVector(e), this.sub(Rs);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(Rs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ve(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Rs = /* @__PURE__ */ new B(), Co = /* @__PURE__ */ new kt();
class vr {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Kt.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Kt.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = Kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, Kt) : Kt.fromBufferAttribute(s, o), Kt.applyMatrix4(e.matrixWorld), this.expandByPoint(Kt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Tr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Tr.copy(n.boundingBox)), Tr.applyMatrix4(e.matrixWorld), this.union(Tr);
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, Kt), Kt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Wi), br.subVectors(this.max, Wi), di.subVectors(e.a, Wi), fi.subVectors(e.b, Wi), pi.subVectors(e.c, Wi), Cn.subVectors(fi, di), Pn.subVectors(pi, fi), Wn.subVectors(di, pi);
    let t = [
      0,
      -Cn.z,
      Cn.y,
      0,
      -Pn.z,
      Pn.y,
      0,
      -Wn.z,
      Wn.y,
      Cn.z,
      0,
      -Cn.x,
      Pn.z,
      0,
      -Pn.x,
      Wn.z,
      0,
      -Wn.x,
      -Cn.y,
      Cn.x,
      0,
      -Pn.y,
      Pn.x,
      0,
      -Wn.y,
      Wn.x,
      0
    ];
    return !Cs(t, di, fi, pi, br) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Cs(t, di, fi, pi, br)) ? !1 : (Ar.crossVectors(Cn, Pn), t = [Ar.x, Ar.y, Ar.z], Cs(t, di, fi, pi, br));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Kt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Kt).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(fn), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const fn = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], Kt = /* @__PURE__ */ new B(), Tr = /* @__PURE__ */ new vr(), di = /* @__PURE__ */ new B(), fi = /* @__PURE__ */ new B(), pi = /* @__PURE__ */ new B(), Cn = /* @__PURE__ */ new B(), Pn = /* @__PURE__ */ new B(), Wn = /* @__PURE__ */ new B(), Wi = /* @__PURE__ */ new B(), br = /* @__PURE__ */ new B(), Ar = /* @__PURE__ */ new B(), Xn = /* @__PURE__ */ new B();
function Cs(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    Xn.fromArray(i, s);
    const a = r.x * Math.abs(Xn.x) + r.y * Math.abs(Xn.y) + r.z * Math.abs(Xn.z), l = e.dot(Xn), c = t.dot(Xn), u = n.dot(Xn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const Nu = /* @__PURE__ */ new vr(), Xi = /* @__PURE__ */ new B(), Ps = /* @__PURE__ */ new B();
class xs {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new B(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Nu.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Xi.subVectors(e, this.center);
    const t = Xi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Xi, r / n), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ps.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Xi.copy(e.center).add(Ps)), this.expandByPoint(Xi.copy(e.center).sub(Ps))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const pn = /* @__PURE__ */ new B(), Ds = /* @__PURE__ */ new B(), wr = /* @__PURE__ */ new B(), Dn = /* @__PURE__ */ new B(), Ls = /* @__PURE__ */ new B(), Rr = /* @__PURE__ */ new B(), Is = /* @__PURE__ */ new B();
class sc {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new B(), t = new B(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, pn)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = pn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (pn.copy(this.origin).addScaledVector(this.direction, t), pn.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, r) {
    Ds.copy(e).add(t).multiplyScalar(0.5), wr.copy(t).sub(e).normalize(), Dn.copy(this.origin).sub(Ds);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(wr), a = Dn.dot(this.direction), l = -Dn.dot(wr), c = Dn.lengthSq(), u = Math.abs(1 - o * o);
    let d, f, m, _;
    if (u > 0)
      if (d = o * l - a, f = o * a - l, _ = s * u, d >= 0)
        if (f >= -_)
          if (f <= _) {
            const v = 1 / u;
            d *= v, f *= v, m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * l) + c;
          } else
            f = s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
        else
          f = -s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
      else
        f <= -_ ? (d = Math.max(0, -(-o * s + a)), f = d > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c) : f <= _ ? (d = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (d = Math.max(0, -(o * s + a)), f = d > 0 ? s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c);
    else
      f = o > 0 ? -s : s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(Ds).addScaledVector(wr, f), m;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    pn.subVectors(e.center, this.origin);
    const n = pn.dot(this.direction), r = pn.dot(pn) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, r = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, r = (e.min.x - f.x) * c), u >= 0 ? (s = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (s = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), d >= 0 ? (a = (e.min.z - f.z) * d, l = (e.max.z - f.z) * d) : (a = (e.max.z - f.z) * d, l = (e.min.z - f.z) * d), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, pn) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, r, s) {
    Ls.subVectors(t, e), Rr.subVectors(n, e), Is.crossVectors(Ls, Rr);
    let o = this.direction.dot(Is), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Dn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Rr.crossVectors(Dn, Rr));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Ls.cross(Dn));
    if (c < 0 || l + c > o)
      return null;
    const u = -a * Dn.dot(Is);
    return u < 0 ? null : this.at(u / o, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class at {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, r, s, o, a, l, c, u, d, f, m, _, v, p) {
    at.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, u, d, f, m, _, v, p);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, r, s, o, a, l, c, u, d, f, m, _, v, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = l, h[2] = c, h[6] = u, h[10] = d, h[14] = f, h[3] = m, h[7] = _, h[11] = v, h[15] = p, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new at().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / mi.setFromMatrixColumn(e, 0).length(), s = 1 / mi.setFromMatrixColumn(e, 1).length(), o = 1 / mi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * u, m = o * d, _ = a * u, v = a * d;
      t[0] = l * u, t[4] = -l * d, t[8] = c, t[1] = m + _ * c, t[5] = f - v * c, t[9] = -a * l, t[2] = v - f * c, t[6] = _ + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const f = l * u, m = l * d, _ = c * u, v = c * d;
      t[0] = f + v * a, t[4] = _ * a - m, t[8] = o * c, t[1] = o * d, t[5] = o * u, t[9] = -a, t[2] = m * a - _, t[6] = v + f * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const f = l * u, m = l * d, _ = c * u, v = c * d;
      t[0] = f - v * a, t[4] = -o * d, t[8] = _ + m * a, t[1] = m + _ * a, t[5] = o * u, t[9] = v - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const f = o * u, m = o * d, _ = a * u, v = a * d;
      t[0] = l * u, t[4] = _ * c - m, t[8] = f * c + v, t[1] = l * d, t[5] = v * c + f, t[9] = m * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const f = o * l, m = o * c, _ = a * l, v = a * c;
      t[0] = l * u, t[4] = v - f * d, t[8] = _ * d + m, t[1] = d, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = m * d + _, t[10] = f - v * d;
    } else if (e.order === "XZY") {
      const f = o * l, m = o * c, _ = a * l, v = a * c;
      t[0] = l * u, t[4] = -d, t[8] = c * u, t[1] = f * d + v, t[5] = o * u, t[9] = m * d - _, t[2] = _ * d - m, t[6] = a * u, t[10] = v * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(Fu, e, Ou);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const r = this.elements;
    return zt.subVectors(e, t), zt.lengthSq() === 0 && (zt.z = 1), zt.normalize(), Ln.crossVectors(n, zt), Ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? zt.x += 1e-4 : zt.z += 1e-4, zt.normalize(), Ln.crossVectors(n, zt)), Ln.normalize(), Cr.crossVectors(zt, Ln), r[0] = Ln.x, r[4] = Cr.x, r[8] = zt.x, r[1] = Ln.y, r[5] = Cr.y, r[9] = zt.y, r[2] = Ln.z, r[6] = Cr.z, r[10] = zt.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], d = n[5], f = n[9], m = n[13], _ = n[2], v = n[6], p = n[10], h = n[14], R = n[3], y = n[7], M = n[11], L = n[15], D = r[0], A = r[4], C = r[8], S = r[12], g = r[1], T = r[5], U = r[9], F = r[13], H = r[2], j = r[6], k = r[10], ne = r[14], W = r[3], oe = r[7], pe = r[11], Se = r[15];
    return s[0] = o * D + a * g + l * H + c * W, s[4] = o * A + a * T + l * j + c * oe, s[8] = o * C + a * U + l * k + c * pe, s[12] = o * S + a * F + l * ne + c * Se, s[1] = u * D + d * g + f * H + m * W, s[5] = u * A + d * T + f * j + m * oe, s[9] = u * C + d * U + f * k + m * pe, s[13] = u * S + d * F + f * ne + m * Se, s[2] = _ * D + v * g + p * H + h * W, s[6] = _ * A + v * T + p * j + h * oe, s[10] = _ * C + v * U + p * k + h * pe, s[14] = _ * S + v * F + p * ne + h * Se, s[3] = R * D + y * g + M * H + L * W, s[7] = R * A + y * T + M * j + L * oe, s[11] = R * C + y * U + M * k + L * pe, s[15] = R * S + y * F + M * ne + L * Se, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], d = e[6], f = e[10], m = e[14], _ = e[3], v = e[7], p = e[11], h = e[15];
    return _ * (+s * l * d - r * c * d - s * a * f + n * c * f + r * a * m - n * l * m) + v * (+t * l * m - t * c * f + s * o * f - r * o * m + r * c * u - s * l * u) + p * (+t * c * d - t * a * m - s * o * d + n * o * m + s * a * u - n * c * u) + h * (-r * a * u - t * l * d + t * a * f + r * o * d - n * o * f + n * l * u);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = e[9], f = e[10], m = e[11], _ = e[12], v = e[13], p = e[14], h = e[15], R = d * p * c - v * f * c + v * l * m - a * p * m - d * l * h + a * f * h, y = _ * f * c - u * p * c - _ * l * m + o * p * m + u * l * h - o * f * h, M = u * v * c - _ * d * c + _ * a * m - o * v * m - u * a * h + o * d * h, L = _ * d * l - u * v * l - _ * a * f + o * v * f + u * a * p - o * d * p, D = t * R + n * y + r * M + s * L;
    if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / D;
    return e[0] = R * A, e[1] = (v * f * s - d * p * s - v * r * m + n * p * m + d * r * h - n * f * h) * A, e[2] = (a * p * s - v * l * s + v * r * c - n * p * c - a * r * h + n * l * h) * A, e[3] = (d * l * s - a * f * s - d * r * c + n * f * c + a * r * m - n * l * m) * A, e[4] = y * A, e[5] = (u * p * s - _ * f * s + _ * r * m - t * p * m - u * r * h + t * f * h) * A, e[6] = (_ * l * s - o * p * s - _ * r * c + t * p * c + o * r * h - t * l * h) * A, e[7] = (o * f * s - u * l * s + u * r * c - t * f * c - o * r * m + t * l * m) * A, e[8] = M * A, e[9] = (_ * d * s - u * v * s - _ * n * m + t * v * m + u * n * h - t * d * h) * A, e[10] = (o * v * s - _ * a * s + _ * n * c - t * v * c - o * n * h + t * a * h) * A, e[11] = (u * a * s - o * d * s - u * n * c + t * d * c + o * n * m - t * a * m) * A, e[12] = L * A, e[13] = (u * v * r - _ * d * r + _ * n * f - t * v * f - u * n * p + t * d * p) * A, e[14] = (_ * a * r - o * v * r - _ * n * l + t * v * l + o * n * p - t * a * p) * A, e[15] = (o * d * r - u * a * r + u * n * l - t * d * l - o * n * f + t * a * f) * A, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, u = s * a;
    return this.set(
      c * o + n,
      c * a - r * l,
      c * l + r * a,
      0,
      c * a + r * l,
      u * a + n,
      u * l - r * o,
      0,
      c * l - r * a,
      u * l + r * o,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, r, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, u = o + o, d = a + a, f = s * c, m = s * u, _ = s * d, v = o * u, p = o * d, h = a * d, R = l * c, y = l * u, M = l * d, L = n.x, D = n.y, A = n.z;
    return r[0] = (1 - (v + h)) * L, r[1] = (m + M) * L, r[2] = (_ - y) * L, r[3] = 0, r[4] = (m - M) * D, r[5] = (1 - (f + h)) * D, r[6] = (p + R) * D, r[7] = 0, r[8] = (_ + y) * A, r[9] = (p - R) * A, r[10] = (1 - (f + v)) * A, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const r = this.elements;
    let s = mi.set(r[0], r[1], r[2]).length();
    const o = mi.set(r[4], r[5], r[6]).length(), a = mi.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Jt.copy(this);
    const c = 1 / s, u = 1 / o, d = 1 / a;
    return Jt.elements[0] *= c, Jt.elements[1] *= c, Jt.elements[2] *= c, Jt.elements[4] *= u, Jt.elements[5] *= u, Jt.elements[6] *= u, Jt.elements[8] *= d, Jt.elements[9] *= d, Jt.elements[10] *= d, t.setFromRotationMatrix(Jt), n.x = s, n.y = o, n.z = a, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, r, s, o, a = un) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r);
    let m, _;
    if (a === un)
      m = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
    else if (a === hs)
      m = -o / (o - s), _ = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, r, s, o, a = un) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - r), d = 1 / (o - s), f = (t + e) * c, m = (n + r) * u;
    let _, v;
    if (a === un)
      _ = (o + s) * d, v = -2 * d;
    else if (a === hs)
      _ = s * d, v = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const mi = /* @__PURE__ */ new B(), Jt = /* @__PURE__ */ new at(), Fu = /* @__PURE__ */ new B(0, 0, 0), Ou = /* @__PURE__ */ new B(1, 1, 1), Ln = /* @__PURE__ */ new B(), Cr = /* @__PURE__ */ new B(), zt = /* @__PURE__ */ new B(), Po = /* @__PURE__ */ new at(), Do = /* @__PURE__ */ new kt();
class Rn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = Rn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], u = r[9], d = r[2], f = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ve(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ve(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ve(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ve(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ve(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ve(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return Po.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Po, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return Do.setFromEuler(this), this.setFromQuaternion(Do, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Rn.DEFAULT_ORDER = "XYZ";
class ac {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Bu = 0;
const Lo = /* @__PURE__ */ new B(), _i = /* @__PURE__ */ new kt(), mn = /* @__PURE__ */ new at(), Pr = /* @__PURE__ */ new B(), Yi = /* @__PURE__ */ new B(), zu = /* @__PURE__ */ new B(), Hu = /* @__PURE__ */ new kt(), Io = /* @__PURE__ */ new B(1, 0, 0), Uo = /* @__PURE__ */ new B(0, 1, 0), No = /* @__PURE__ */ new B(0, 0, 1), Fo = { type: "added" }, Vu = { type: "removed" }, gi = { type: "childadded", child: null }, Us = { type: "childremoved", child: null };
class mt extends ai {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Bu++ }), this.uuid = gr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = mt.DEFAULT_UP.clone();
    const e = new B(), t = new Rn(), n = new kt(), r = new B(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new at()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Fe()
      }
    }), this.matrix = new at(), this.matrixWorld = new at(), this.matrixAutoUpdate = mt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ac(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return _i.setFromAxisAngle(e, t), this.quaternion.multiply(_i), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return _i.setFromAxisAngle(e, t), this.quaternion.premultiply(_i), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Io, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Uo, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(No, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Lo.copy(e).applyQuaternion(this.quaternion), this.position.add(Lo.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Io, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Uo, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(No, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(mn.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? Pr.copy(e) : Pr.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Yi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? mn.lookAt(Yi, Pr, this.up) : mn.lookAt(Pr, Yi, this.up), this.quaternion.setFromRotationMatrix(mn), r && (mn.extractRotation(r.matrixWorld), _i.setFromRotationMatrix(mn), this.quaternion.premultiply(_i.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Fo), gi.child = e, this.dispatchEvent(gi), gi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Vu), Us.child = e, this.dispatchEvent(Us), Us.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), mn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), mn.multiply(e.parent.matrixWorld)), e.applyMatrix4(mn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Fo), gi.child = e, this.dispatchEvent(gi), gi.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, o = r.length; s < o; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yi, e, zu), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yi, Hu, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), d = o(e.shapes), f = o(e.skeletons), m = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
mt.DEFAULT_UP = /* @__PURE__ */ new B(0, 1, 0);
mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Qt = /* @__PURE__ */ new B(), _n = /* @__PURE__ */ new B(), Ns = /* @__PURE__ */ new B(), gn = /* @__PURE__ */ new B(), vi = /* @__PURE__ */ new B(), xi = /* @__PURE__ */ new B(), Oo = /* @__PURE__ */ new B(), Fs = /* @__PURE__ */ new B(), Os = /* @__PURE__ */ new B(), Bs = /* @__PURE__ */ new B(), zs = /* @__PURE__ */ new ut(), Hs = /* @__PURE__ */ new ut(), Vs = /* @__PURE__ */ new ut();
class nn {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new B(), t = new B(), n = new B()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Qt.subVectors(e, t), r.cross(Qt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, r, s) {
    Qt.subVectors(r, t), _n.subVectors(n, t), Ns.subVectors(e, t);
    const o = Qt.dot(Qt), a = Qt.dot(_n), l = Qt.dot(Ns), c = _n.dot(_n), u = _n.dot(Ns), d = o * c - a * a;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / d, m = (c * l - a * u) * f, _ = (o * u - a * l) * f;
    return s.set(1 - m - _, _, m);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, gn) === null ? !1 : gn.x >= 0 && gn.y >= 0 && gn.x + gn.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return this.getBarycoord(e, t, n, r, gn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, gn.x), l.addScaledVector(o, gn.y), l.addScaledVector(a, gn.z), l);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, r, s, o) {
    return zs.setScalar(0), Hs.setScalar(0), Vs.setScalar(0), zs.fromBufferAttribute(e, t), Hs.fromBufferAttribute(e, n), Vs.fromBufferAttribute(e, r), o.setScalar(0), o.addScaledVector(zs, s.x), o.addScaledVector(Hs, s.y), o.addScaledVector(Vs, s.z), o;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, r) {
    return Qt.subVectors(n, t), _n.subVectors(e, t), Qt.cross(_n).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return Qt.subVectors(this.c, this.b), _n.subVectors(this.a, this.b), Qt.cross(_n).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return nn.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return nn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, r, s) {
    return nn.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return nn.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return nn.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    vi.subVectors(r, n), xi.subVectors(s, n), Fs.subVectors(e, n);
    const l = vi.dot(Fs), c = xi.dot(Fs);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Os.subVectors(e, r);
    const u = vi.dot(Os), d = xi.dot(Os);
    if (u >= 0 && d <= u)
      return t.copy(r);
    const f = l * d - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return o = l / (l - u), t.copy(n).addScaledVector(vi, o);
    Bs.subVectors(e, s);
    const m = vi.dot(Bs), _ = xi.dot(Bs);
    if (_ >= 0 && m <= _)
      return t.copy(s);
    const v = m * c - l * _;
    if (v <= 0 && c >= 0 && _ <= 0)
      return a = c / (c - _), t.copy(n).addScaledVector(xi, a);
    const p = u * _ - m * d;
    if (p <= 0 && d - u >= 0 && m - _ >= 0)
      return Oo.subVectors(s, r), a = (d - u) / (d - u + (m - _)), t.copy(r).addScaledVector(Oo, a);
    const h = 1 / (p + v + f);
    return o = v * h, a = f * h, t.copy(n).addScaledVector(vi, o).addScaledVector(xi, a);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const oc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, In = { h: 0, s: 0, l: 0 }, Dr = { h: 0, s: 0, l: 0 };
function Gs(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ae {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = Zt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ye.toWorkingColorSpace(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, r = Ye.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ye.toWorkingColorSpace(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, r = Ye.workingColorSpace) {
    if (e = Tu(e, 1), t = Ve(t, 0, 1), n = Ve(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Gs(o, s, e + 1 / 3), this.g = Gs(o, s, e), this.b = Gs(o, s, e - 1 / 3);
    }
    return Ye.toWorkingColorSpace(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = Zt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = Zt) {
    const n = oc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = bn(e.r), this.g = bn(e.g), this.b = bn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Ui(e.r), this.g = Ui(e.g), this.b = Ui(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = Zt) {
    return Ye.fromWorkingColorSpace(bt.copy(this), e), Math.round(Ve(bt.r * 255, 0, 255)) * 65536 + Math.round(Ve(bt.g * 255, 0, 255)) * 256 + Math.round(Ve(bt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Zt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = Ye.workingColorSpace) {
    Ye.fromWorkingColorSpace(bt.copy(this), t);
    const n = bt.r, r = bt.g, s = bt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const d = o - a;
      switch (c = u <= 0.5 ? d / (o + a) : d / (2 - o - a), o) {
        case n:
          l = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - r) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = Ye.workingColorSpace) {
    return Ye.fromWorkingColorSpace(bt.copy(this), t), e.r = bt.r, e.g = bt.g, e.b = bt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Zt) {
    Ye.fromWorkingColorSpace(bt.copy(this), e);
    const t = bt.r, n = bt.g, r = bt.b;
    return e !== Zt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(In), this.setHSL(In.h + e, In.s + t, In.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(In), e.getHSL(Dr);
    const n = bs(In.h, Dr.h, t), r = bs(In.s, Dr.s, t), s = bs(In.l, Dr.l, t);
    return this.setHSL(n, r, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const bt = /* @__PURE__ */ new Ae();
Ae.NAMES = oc;
let Gu = 0;
class xr extends ai {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Gu++ }), this.uuid = gr(), this.name = "", this.type = "Material", this.blending = Ii, this.side = Vn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = la, this.blendDst = ca, this.blendEquation = Qn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ae(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ni, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = yo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ui, this.stencilZFail = ui, this.stencilZPass = ui, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL]{@link https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language}.
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ii && (n.blending = this.blending), this.side !== Vn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== la && (n.blendSrc = this.blendSrc), this.blendDst !== ca && (n.blendDst = this.blendDst), this.blendEquation !== Qn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Ni && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== yo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ui && (n.stencilFail = this.stencilFail), this.stencilZFail !== ui && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ui && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class lc extends xr {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ae(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Rn(), this.combine = Xl, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const pt = /* @__PURE__ */ new B(), Lr = /* @__PURE__ */ new be();
let ku = 0;
class Wt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: ku++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = To, this.updateRanges = [], this.gpuType = rn, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Lr.fromBufferAttribute(this, t), Lr.applyMatrix3(e), this.setXY(t, Lr.x, Lr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        pt.fromBufferAttribute(this, t), pt.applyMatrix3(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t), pt.applyMatrix4(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t), pt.applyNormalMatrix(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t), pt.transformDirection(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = ki(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = Lt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ki(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Lt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ki(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Lt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ki(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Lt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ki(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Lt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Lt(t, this.array), n = Lt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Lt(t, this.array), n = Lt(n, this.array), r = Lt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Lt(t, this.array), n = Lt(n, this.array), r = Lt(r, this.array), s = Lt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== To && (e.usage = this.usage), e;
  }
}
class cc extends Wt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class uc extends Wt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class an extends Wt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Wu = 0;
const qt = /* @__PURE__ */ new at(), ks = /* @__PURE__ */ new mt(), Si = /* @__PURE__ */ new B(), Ht = /* @__PURE__ */ new vr(), qi = /* @__PURE__ */ new vr(), xt = /* @__PURE__ */ new B();
class ln extends ai {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Wu++ }), this.uuid = gr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ic(e) ? uc : cc)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e) {
    return this.indirect = e, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Fe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return qt.makeRotationFromQuaternion(e), this.applyMatrix4(qt), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return qt.makeRotationX(e), this.applyMatrix4(qt), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return qt.makeRotationY(e), this.applyMatrix4(qt), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return qt.makeRotationZ(e), this.applyMatrix4(qt), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, n) {
    return qt.makeTranslation(e, t, n), this.applyMatrix4(qt), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, n) {
    return qt.makeScale(e, t, n), this.applyMatrix4(qt), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return ks.lookAt(e), ks.updateMatrix(), this.applyMatrix4(ks.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Si).negate(), this.translate(Si.x, Si.y, Si.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const o = e[r];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new an(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new vr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new B(-1 / 0, -1 / 0, -1 / 0),
        new B(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Ht.setFromBufferAttribute(s), this.morphTargetsRelative ? (xt.addVectors(this.boundingBox.min, Ht.min), this.boundingBox.expandByPoint(xt), xt.addVectors(this.boundingBox.max, Ht.max), this.boundingBox.expandByPoint(xt)) : (this.boundingBox.expandByPoint(Ht.min), this.boundingBox.expandByPoint(Ht.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new xs());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ht.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          qi.setFromBufferAttribute(a), this.morphTargetsRelative ? (xt.addVectors(Ht.min, qi.min), Ht.expandByPoint(xt), xt.addVectors(Ht.max, qi.max), Ht.expandByPoint(xt)) : (Ht.expandByPoint(qi.min), Ht.expandByPoint(qi.max));
        }
      Ht.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        xt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(xt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            xt.fromBufferAttribute(a, c), l && (Si.fromBufferAttribute(e, c), xt.add(Si)), r = Math.max(r, n.distanceToSquared(xt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Wt(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let C = 0; C < n.count; C++)
      a[C] = new B(), l[C] = new B();
    const c = new B(), u = new B(), d = new B(), f = new be(), m = new be(), _ = new be(), v = new B(), p = new B();
    function h(C, S, g) {
      c.fromBufferAttribute(n, C), u.fromBufferAttribute(n, S), d.fromBufferAttribute(n, g), f.fromBufferAttribute(s, C), m.fromBufferAttribute(s, S), _.fromBufferAttribute(s, g), u.sub(c), d.sub(c), m.sub(f), _.sub(f);
      const T = 1 / (m.x * _.y - _.x * m.y);
      isFinite(T) && (v.copy(u).multiplyScalar(_.y).addScaledVector(d, -m.y).multiplyScalar(T), p.copy(d).multiplyScalar(m.x).addScaledVector(u, -_.x).multiplyScalar(T), a[C].add(v), a[S].add(v), a[g].add(v), l[C].add(p), l[S].add(p), l[g].add(p));
    }
    let R = this.groups;
    R.length === 0 && (R = [{
      start: 0,
      count: e.count
    }]);
    for (let C = 0, S = R.length; C < S; ++C) {
      const g = R[C], T = g.start, U = g.count;
      for (let F = T, H = T + U; F < H; F += 3)
        h(
          e.getX(F + 0),
          e.getX(F + 1),
          e.getX(F + 2)
        );
    }
    const y = new B(), M = new B(), L = new B(), D = new B();
    function A(C) {
      L.fromBufferAttribute(r, C), D.copy(L);
      const S = a[C];
      y.copy(S), y.sub(L.multiplyScalar(L.dot(S))).normalize(), M.crossVectors(D, S);
      const T = M.dot(l[C]) < 0 ? -1 : 1;
      o.setXYZW(C, y.x, y.y, y.z, T);
    }
    for (let C = 0, S = R.length; C < S; ++C) {
      const g = R[C], T = g.start, U = g.count;
      for (let F = T, H = T + U; F < H; F += 3)
        A(e.getX(F + 0)), A(e.getX(F + 1)), A(e.getX(F + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Wt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new B(), s = new B(), o = new B(), a = new B(), l = new B(), c = new B(), u = new B(), d = new B();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const _ = e.getX(f + 0), v = e.getX(f + 1), p = e.getX(f + 2);
          r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, v), o.fromBufferAttribute(t, p), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), a.add(u), l.add(u), c.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      xt.fromBufferAttribute(e, t), xt.normalize(), e.setXYZ(t, xt.x, xt.y, xt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, d = a.normalized, f = new c.constructor(l.length * u);
      let m = 0, _ = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        a.isInterleavedBufferAttribute ? m = l[v] * a.data.stride + a.offset : m = l[v] * u;
        for (let h = 0; h < u; h++)
          f[_++] = c[m++];
      }
      return new Wt(f, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new ln(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u], m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const m = c[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (r[l] = u, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], d = s[c];
      for (let f = 0, m = d.length; f < m; f++)
        u.push(d[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Bo = /* @__PURE__ */ new at(), Yn = /* @__PURE__ */ new sc(), Ir = /* @__PURE__ */ new xs(), zo = /* @__PURE__ */ new B(), Ur = /* @__PURE__ */ new B(), Nr = /* @__PURE__ */ new B(), Fr = /* @__PURE__ */ new B(), Ws = /* @__PURE__ */ new B(), Or = /* @__PURE__ */ new B(), Ho = /* @__PURE__ */ new B(), Br = /* @__PURE__ */ new B();
class Pt extends mt {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new ln(), t = new lc()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Or.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l], d = s[l];
        u !== 0 && (Ws.fromBufferAttribute(d, e), o ? Or.addScaledVector(Ws, u) : Or.addScaledVector(Ws.sub(t), u));
      }
      t.add(Or);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ir.copy(n.boundingSphere), Ir.applyMatrix4(s), Yn.copy(e.ray).recast(e.near), !(Ir.containsPoint(Yn.origin) === !1 && (Yn.intersectSphere(Ir, zo) === null || Yn.origin.distanceToSquared(zo) > (e.far - e.near) ** 2)) && (Bo.copy(s).invert(), Yn.copy(e.ray).applyMatrix4(Bo), !(n.boundingBox !== null && Yn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Yn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, d = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_], h = o[p.materialIndex], R = Math.max(p.start, m.start), y = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count));
          for (let M = R, L = y; M < L; M += 3) {
            const D = a.getX(M), A = a.getX(M + 1), C = a.getX(M + 2);
            r = zr(this, h, e, n, c, u, d, D, A, C), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start), v = Math.min(a.count, m.start + m.count);
        for (let p = _, h = v; p < h; p += 3) {
          const R = a.getX(p), y = a.getX(p + 1), M = a.getX(p + 2);
          r = zr(this, o, e, n, c, u, d, R, y, M), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_], h = o[p.materialIndex], R = Math.max(p.start, m.start), y = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
          for (let M = R, L = y; M < L; M += 3) {
            const D = M, A = M + 1, C = M + 2;
            r = zr(this, h, e, n, c, u, d, D, A, C), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
        for (let p = _, h = v; p < h; p += 3) {
          const R = p, y = p + 1, M = p + 2;
          r = zr(this, o, e, n, c, u, d, R, y, M), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Xu(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === Ft ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, e.side === Vn, a), l === null) return null;
  Br.copy(a), Br.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Br);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Br.clone(),
    object: i
  };
}
function zr(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Ur), i.getVertexPosition(l, Nr), i.getVertexPosition(c, Fr);
  const u = Xu(i, e, t, n, Ur, Nr, Fr, Ho);
  if (u) {
    const d = new B();
    nn.getBarycoord(Ho, Ur, Nr, Fr, d), r && (u.uv = nn.getInterpolatedAttribute(r, a, l, c, d, new be())), s && (u.uv1 = nn.getInterpolatedAttribute(s, a, l, c, d, new be())), o && (u.normal = nn.getInterpolatedAttribute(o, a, l, c, d, new B()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = {
      a,
      b: l,
      c,
      normal: new B(),
      materialIndex: 0
    };
    nn.getNormal(Ur, Nr, Fr, f.normal), u.face = f, u.barycoord = d;
  }
  return u;
}
class Sr extends ln {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], u = [], d = [];
    let f = 0, m = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, r, o, 2), _("x", "z", "y", 1, -1, e, n, -t, r, o, 3), _("x", "y", "z", 1, -1, e, t, n, r, s, 4), _("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new an(c, 3)), this.setAttribute("normal", new an(u, 3)), this.setAttribute("uv", new an(d, 2));
    function _(v, p, h, R, y, M, L, D, A, C, S) {
      const g = M / A, T = L / C, U = M / 2, F = L / 2, H = D / 2, j = A + 1, k = C + 1;
      let ne = 0, W = 0;
      const oe = new B();
      for (let pe = 0; pe < k; pe++) {
        const Se = pe * T - F;
        for (let Oe = 0; Oe < j; Oe++) {
          const Ze = Oe * g - U;
          oe[v] = Ze * R, oe[p] = Se * y, oe[h] = H, c.push(oe.x, oe.y, oe.z), oe[v] = 0, oe[p] = 0, oe[h] = D > 0 ? 1 : -1, u.push(oe.x, oe.y, oe.z), d.push(Oe / A), d.push(1 - pe / C), ne += 1;
        }
      }
      for (let pe = 0; pe < C; pe++)
        for (let Se = 0; Se < A; Se++) {
          const Oe = f + Se + j * pe, Ze = f + Se + j * (pe + 1), Y = f + (Se + 1) + j * (pe + 1), re = f + (Se + 1) + j * pe;
          l.push(Oe, Ze, re), l.push(Ze, Y, re), W += 6;
        }
      a.addGroup(m, W, S), m += W, f += ne;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Sr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function zi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function Ct(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = zi(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Yu(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function hc(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ye.workingColorSpace;
}
const ds = { clone: zi, merge: Ct };
var qu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Zu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class At extends xr {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = qu, this.fragmentShader = Zu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = zi(e.uniforms), this.uniformsGroups = Yu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[r] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[r] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class so extends mt {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new at(), this.projectionMatrix = new at(), this.projectionMatrixInverse = new at(), this.coordinateSystem = un;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Un = /* @__PURE__ */ new B(), Vo = /* @__PURE__ */ new be(), Go = /* @__PURE__ */ new be();
class tn extends so {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ya * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Ts * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Ya * 2 * Math.atan(
      Math.tan(Ts * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    Un.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Un.x, Un.y).multiplyScalar(-e / Un.z), Un.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Un.x, Un.y).multiplyScalar(-e / Un.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Vo, Go), t.subVectors(Go, Vo);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ts * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * r / l, t -= o.offsetY * n / c, r *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Mi = -90, Ei = 1;
class ju extends mt {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new tn(Mi, Ei, e, t);
    r.layers = this.layers, this.add(r);
    const s = new tn(Mi, Ei, e, t);
    s.layers = this.layers, this.add(s);
    const o = new tn(Mi, Ei, e, t);
    o.layers = this.layers, this.add(o);
    const a = new tn(Mi, Ei, e, t);
    a.layers = this.layers, this.add(a);
    const l = new tn(Mi, Ei, e, t);
    l.layers = this.layers, this.add(l);
    const c = new tn(Mi, Ei, e, t);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === un)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === hs)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, u] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(d, f, m), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class dc extends Et {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = Fi, n, r, s, o, a, l, c, u) {
    super(e, t, n, r, s, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class $u extends si {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new dc(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Vt;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new Sr(5, 5, 5), s = new At({
      name: "CubemapFromEquirect",
      uniforms: zi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Ft,
      blending: zn
    });
    s.uniforms.tEquirect.value = t;
    const o = new Pt(r, s), a = t.minFilter;
    return t.minFilter === ii && (t.minFilter = Vt), new ju(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, n = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
class Hr extends mt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ku = { type: "move" };
class Xs {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new Hr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Hr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Hr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B()), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, n) {
    let r = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n), h = this._getHandJoint(c, v);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], f = u.position.distanceTo(d.position), m = 0.02, _ = 5e-3;
        c.inputState.pinching && f > m + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ku)));
    }
    return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRHandJoint} inputjoint - The XR frame.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Hr();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Ju extends mt {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Rn(), this.environmentIntensity = 1, this.environmentRotation = new Rn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class fs extends Et {
  /**
   * Constructs a new data texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = null, t = 1, n = 1, r, s, o, a, l, c = Ot, u = Ot, d, f) {
    super(null, o, a, l, c, u, r, s, d, f), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ps extends Wt {
  /**
   * Constructs a new instanced buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   * @param {number} [meshPerAttribute=1] - How often a value of this buffer attribute should be repeated.
   */
  constructor(e, t, n, r = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Ys = /* @__PURE__ */ new B(), Qu = /* @__PURE__ */ new B(), eh = /* @__PURE__ */ new Fe();
class Kn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new B(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const r = Ys.subVectors(n, t).cross(Qu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectLine(e, t) {
    const n = e.delta(Ys), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || eh.getNormalMatrix(e), r = this.coplanarPoint(Ys).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const qn = /* @__PURE__ */ new xs(), Vr = /* @__PURE__ */ new B();
class ao {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new Kn(), t = new Kn(), n = new Kn(), r = new Kn(), s = new Kn(), o = new Kn()) {
    this.planes = [e, t, n, r, s, o];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = un) {
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], u = r[5], d = r[6], f = r[7], m = r[8], _ = r[9], v = r[10], p = r[11], h = r[12], R = r[13], y = r[14], M = r[15];
    if (n[0].setComponents(l - s, f - c, p - m, M - h).normalize(), n[1].setComponents(l + s, f + c, p + m, M + h).normalize(), n[2].setComponents(l + o, f + u, p + _, M + R).normalize(), n[3].setComponents(l - o, f - u, p - _, M - R).normalize(), n[4].setComponents(l - a, f - d, p - v, M - y).normalize(), t === un)
      n[5].setComponents(l + a, f + d, p + v, M + y).normalize();
    else if (t === hs)
      n[5].setComponents(a, d, v, y).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(qn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    return qn.center.set(0, 0, 0), qn.radius = 0.7071067811865476, qn.applyMatrix4(e.matrixWorld), this.intersectsSphere(qn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Vr.x = r.normal.x > 0 ? e.max.x : e.min.x, Vr.y = r.normal.y > 0 ? e.max.y : e.min.y, Vr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Vr) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class fc extends xr {
  /**
   * Constructs a new line basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ae(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const ms = /* @__PURE__ */ new B(), _s = /* @__PURE__ */ new B(), ko = /* @__PURE__ */ new at(), Zi = /* @__PURE__ */ new sc(), Gr = /* @__PURE__ */ new xs(), qs = /* @__PURE__ */ new B(), Wo = /* @__PURE__ */ new B();
class th extends mt {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new ln(), t = new fc()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {Line} A reference to this line.
   */
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        ms.fromBufferAttribute(t, r - 1), _s.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += ms.distanceTo(_s);
      e.setAttribute("lineDistance", new an(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Gr.copy(n.boundingSphere), Gr.applyMatrix4(r), Gr.radius += s, e.ray.intersectsSphere(Gr) === !1) return;
    ko.copy(r).invert(), Zi.copy(e.ray).applyMatrix4(ko);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, o.start), _ = Math.min(u.count, o.start + o.count);
      for (let v = m, p = _ - 1; v < p; v += c) {
        const h = u.getX(v), R = u.getX(v + 1), y = kr(this, e, Zi, l, h, R, v);
        y && t.push(y);
      }
      if (this.isLineLoop) {
        const v = u.getX(_ - 1), p = u.getX(m), h = kr(this, e, Zi, l, v, p, _ - 1);
        h && t.push(h);
      }
    } else {
      const m = Math.max(0, o.start), _ = Math.min(f.count, o.start + o.count);
      for (let v = m, p = _ - 1; v < p; v += c) {
        const h = kr(this, e, Zi, l, v, v + 1, v);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const v = kr(this, e, Zi, l, _ - 1, m, _ - 1);
        v && t.push(v);
      }
    }
  }
  /**
   * Sets the values of {@link Line#morphTargetDictionary} and {@link Line#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function kr(i, e, t, n, r, s, o) {
  const a = i.geometry.attributes.position;
  if (ms.fromBufferAttribute(a, r), _s.fromBufferAttribute(a, s), t.distanceSqToSegment(ms, _s, qs, Wo) > n) return;
  qs.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(qs);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Wo.clone().applyMatrix4(i.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Xo = /* @__PURE__ */ new B(), Yo = /* @__PURE__ */ new B();
class nh extends th {
  /**
   * Constructs a new line segments.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Xo.fromBufferAttribute(t, r), Yo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Xo.distanceTo(Yo);
      e.setAttribute("lineDistance", new an(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class pc extends Et {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   */
  constructor(e, t, n = ri, r, s, o, a = Ot, l = Ot, c, u = hr) {
    if (u !== hr && u !== dr)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, r, s, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new ro(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Hi extends ln {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, u = l + 1, d = e / a, f = t / l, m = [], _ = [], v = [], p = [];
    for (let h = 0; h < u; h++) {
      const R = h * f - o;
      for (let y = 0; y < c; y++) {
        const M = y * d - s;
        _.push(M, -R, 0), v.push(0, 0, 1), p.push(y / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let R = 0; R < a; R++) {
        const y = R + c * h, M = R + c * (h + 1), L = R + 1 + c * (h + 1), D = R + 1 + c * h;
        m.push(y, M, D), m.push(M, L, D);
      }
    this.setIndex(m), this.setAttribute("position", new an(_, 3)), this.setAttribute("normal", new an(v, 3)), this.setAttribute("uv", new an(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Hi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class ih extends xr {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = du, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class rh extends xr {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const qo = {
  /**
   * Whether caching is enabled or not.
   *
   * @static
   * @type {boolean}
   * @default false
   */
  enabled: !1,
  /**
   * A dictionary that holds cached files.
   *
   * @static
   * @type {Object<string,Object>}
   */
  files: {},
  /**
   * Adds a cache entry with a key to reference the file. If this key already
   * holds a file, it is overwritten.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @param {Object} file -  The file to be cached.
   */
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  /**
   * Gets the cached value for the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @return {Object|undefined} The cached file. If the key does not exist `undefined` is returned.
   */
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  /**
   * Removes the cached file associated with the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   */
  remove: function(i) {
    delete this.files[i];
  },
  /**
   * Remove all values from the cache.
   *
   * @static
   */
  clear: function() {
    this.files = {};
  }
};
class sh {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(e, t, n) {
    const r = this;
    let s = !1, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), s = !0;
    }, this.itemEnd = function(u) {
      o++, r.onProgress !== void 0 && r.onProgress(u, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(u) {
      r.onError !== void 0 && r.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, d) {
      return c.push(u, d), this;
    }, this.removeHandler = function(u) {
      const d = c.indexOf(u);
      return d !== -1 && c.splice(d, 2), this;
    }, this.getHandler = function(u) {
      for (let d = 0, f = c.length; d < f; d += 2) {
        const m = c[d], _ = c[d + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return _;
      }
      return null;
    };
  }
}
const ah = /* @__PURE__ */ new sh();
let oo = class {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : ah, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @param {onErrorCallback} [onError] - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials}.
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header]{@link https://developer.mozilla.org/en-US/docs/Glossary/Request_header}
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
};
oo.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class oh extends oo {
  /**
   * Constructs a new image loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and passes the loaded image
   * to the `onLoad()` callback. The method also returns a new `Image` object which can
   * directly be used for texture creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Image)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Image} The image.
   */
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = qo.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = fr("img");
    function l() {
      u(), qo.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(d) {
      u(), r && r(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class lh extends oo {
  /**
   * Constructs a new texture loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and pass the fully loaded texture
   * to the `onLoad()` callback. The method also returns a new texture object which can
   * directly be used for material creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Texture)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Texture} The texture.
   */
  load(e, t, n, r) {
    const s = new Et(), o = new oh(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class ch extends mt {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ae(e), this.intensity = t;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const Zs = /* @__PURE__ */ new at(), Zo = /* @__PURE__ */ new B(), jo = /* @__PURE__ */ new B();
class uh {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new be(512, 512), this.map = null, this.mapPass = null, this.matrix = new at(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ao(), this._frameExtents = new be(1, 1), this._viewportCount = 1, this._viewports = [
      new ut(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Zo.setFromMatrixPosition(e.matrixWorld), t.position.copy(Zo), jo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(jo), t.updateMatrixWorld(), Zs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Zs), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Zs);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class lo extends so {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class hh extends uh {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new lo(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class dh extends ch {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(mt.DEFAULT_UP), this.updateMatrix(), this.target = new mt(), this.shadow = new hh();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class co extends ln {
  /**
   * Constructs a new instanced buffer geometry.
   */
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class fh extends tn {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e, this.index = 0;
  }
}
class $o {
  /**
   * Constructs a new spherical.
   *
   * @param {number} [radius=1] - The radius, or the Euclidean distance (straight-line distance) from the point to the origin.
   * @param {number} [phi=0] - The polar angle in radians from the y (up) axis.
   * @param {number} [theta=0] - The equator/azimuthal angle in radians around the y (up) axis.
   */
  constructor(e = 1, t = 0, n = 0) {
    this.radius = e, this.phi = t, this.theta = n;
  }
  /**
   * Sets the spherical components by copying the given values.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The polar angle.
   * @param {number} theta - The azimuthal angle.
   * @return {Spherical} A reference to this spherical.
   */
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  /**
   * Copies the values of the given spherical to this instance.
   *
   * @param {Spherical} other - The spherical to copy.
   * @return {Spherical} A reference to this spherical.
   */
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  /**
   * Restricts the polar angle [page:.phi phi] to be between `0.000001` and pi -
   * `0.000001`.
   *
   * @return {Spherical} A reference to this spherical.
   */
  makeSafe() {
    return this.phi = Ve(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  /**
   * Sets the spherical components from the given vector which is assumed to hold
   * Cartesian coordinates.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Spherical} A reference to this spherical.
   */
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  /**
   * Sets the spherical components from the given Cartesian coordinates.
   *
   * @param {number} x - The x value.
   * @param {number} y - The x value.
   * @param {number} z - The x value.
   * @return {Spherical} A reference to this spherical.
   */
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ve(t / this.radius, -1, 1))), this;
  }
  /**
   * Returns a new spherical with copied values from this instance.
   *
   * @return {Spherical} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wr = /* @__PURE__ */ new B(), ct = /* @__PURE__ */ new so();
class ph extends nh {
  /**
   * Constructs a new arrow helper.
   *
   * @param {Camera} camera - The camera to visualize.
   */
  constructor(e) {
    const t = new ln(), n = new fc({ color: 16777215, vertexColors: !0, toneMapped: !1 }), r = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(_, v) {
      l(_), l(v);
    }
    function l(_) {
      r.push(0, 0, 0), s.push(0, 0, 0), o[_] === void 0 && (o[_] = []), o[_].push(r.length / 3 - 1);
    }
    t.setAttribute("position", new an(r, 3)), t.setAttribute("color", new an(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    const c = new Ae(16755200), u = new Ae(16711680), d = new Ae(43775), f = new Ae(16777215), m = new Ae(3355443);
    this.setColors(c, u, d, f, m);
  }
  /**
   * Defines the colors of the helper.
   *
   * @param {Color} frustum - The frustum line color.
   * @param {Color} cone - The cone line color.
   * @param {Color} up - The up line color.
   * @param {Color} target - The target line color.
   * @param {Color} cross - The cross line color.
   */
  setColors(e, t, n, r, s) {
    const a = this.geometry.getAttribute("color");
    a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, n.r, n.g, n.b), a.setXYZ(33, n.r, n.g, n.b), a.setXYZ(34, n.r, n.g, n.b), a.setXYZ(35, n.r, n.g, n.b), a.setXYZ(36, n.r, n.g, n.b), a.setXYZ(37, n.r, n.g, n.b), a.setXYZ(38, r.r, r.g, r.b), a.setXYZ(39, r.r, r.g, r.b), a.setXYZ(40, s.r, s.g, s.b), a.setXYZ(41, s.r, s.g, s.b), a.setXYZ(42, s.r, s.g, s.b), a.setXYZ(43, s.r, s.g, s.b), a.setXYZ(44, s.r, s.g, s.b), a.setXYZ(45, s.r, s.g, s.b), a.setXYZ(46, s.r, s.g, s.b), a.setXYZ(47, s.r, s.g, s.b), a.setXYZ(48, s.r, s.g, s.b), a.setXYZ(49, s.r, s.g, s.b), a.needsUpdate = !0;
  }
  /**
   * Updates the helper based on the projection matrix of the camera.
   */
  update() {
    const e = this.geometry, t = this.pointMap, n = 1, r = 1;
    ct.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    const s = this.camera.coordinateSystem === un ? -1 : 0;
    ht("c", t, e, ct, 0, 0, s), ht("t", t, e, ct, 0, 0, 1), ht("n1", t, e, ct, -1, -1, s), ht("n2", t, e, ct, n, -1, s), ht("n3", t, e, ct, -1, r, s), ht("n4", t, e, ct, n, r, s), ht("f1", t, e, ct, -1, -1, 1), ht("f2", t, e, ct, n, -1, 1), ht("f3", t, e, ct, -1, r, 1), ht("f4", t, e, ct, n, r, 1), ht("u1", t, e, ct, n * 0.7, r * 1.1, s), ht("u2", t, e, ct, -1 * 0.7, r * 1.1, s), ht("u3", t, e, ct, 0, r * 2, s), ht("cf1", t, e, ct, -1, 0, 1), ht("cf2", t, e, ct, n, 0, 1), ht("cf3", t, e, ct, 0, -1, 1), ht("cf4", t, e, ct, 0, r, 1), ht("cn1", t, e, ct, -1, 0, s), ht("cn2", t, e, ct, n, 0, s), ht("cn3", t, e, ct, 0, -1, s), ht("cn4", t, e, ct, 0, r, s), e.getAttribute("position").needsUpdate = !0;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function ht(i, e, t, n, r, s, o) {
  Wr.set(r, s, o).unproject(n);
  const a = e[i];
  if (a !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, u = a.length; c < u; c++)
      l.setXYZ(a[c], Wr.x, Wr.y, Wr.z);
  }
}
function Ko(i, e, t, n) {
  const r = mh(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case jl:
      return i * e;
    case Kl:
      return i * e;
    case Jl:
      return i * e * 2;
    case Ql:
      return i * e / r.components * r.byteLength;
    case to:
      return i * e / r.components * r.byteLength;
    case ec:
      return i * e * 2 / r.components * r.byteLength;
    case no:
      return i * e * 2 / r.components * r.byteLength;
    case $l:
      return i * e * 3 / r.components * r.byteLength;
    case Gt:
      return i * e * 4 / r.components * r.byteLength;
    case io:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case ts:
    case ns:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case is:
    case rs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Ma:
    case ya:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case Sa:
    case Ea:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Ta:
    case ba:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Aa:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case wa:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ra:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ca:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Pa:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Da:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case La:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ia:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ua:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Na:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Fa:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Oa:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ba:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case za:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ha:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case ss:
    case Va:
    case Ga:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case tc:
    case ka:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Wa:
    case Xa:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function mh(i) {
  switch (i) {
    case wn:
    case Yl:
      return { byteLength: 1, components: 1 };
    case cr:
    case ql:
    case _r:
      return { byteLength: 2, components: 1 };
    case Qa:
    case eo:
      return { byteLength: 2, components: 4 };
    case ri:
    case Ja:
    case rn:
      return { byteLength: 4, components: 1 };
    case Zl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ja
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ja);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function mc() {
  let i = null, e = !1, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function _h(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, u = a.usage, d = c.byteLength, f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, u), a.onUploadCallback();
    let m;
    if (c instanceof Float32Array)
      m = i.FLOAT;
    else if (c instanceof Uint16Array)
      a.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      m = i.SHORT;
    else if (c instanceof Uint32Array)
      m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      m = i.INT;
    else if (c instanceof Int8Array)
      m = i.BYTE;
    else if (c instanceof Uint8Array)
      m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      m = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: f,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: a.version,
      size: d
    };
  }
  function n(a, l, c) {
    const u = l.array, d = l.updateRanges;
    if (i.bindBuffer(c, a), d.length === 0)
      i.bufferSubData(c, 0, u);
    else {
      d.sort((m, _) => m.start - _.start);
      let f = 0;
      for (let m = 1; m < d.length; m++) {
        const _ = d[f], v = d[m];
        v.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          v.start + v.count - _.start
        ) : (++f, d[f] = v);
      }
      d.length = f + 1;
      for (let m = 0, _ = d.length; m < _; m++) {
        const v = d[m];
        i.bufferSubData(
          c,
          v.start * u.BYTES_PER_ELEMENT,
          u,
          v.start,
          v.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (i.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const u = e.get(a);
      (!u || u.version < a.version) && e.set(a, {
        buffer: a.buffer,
        type: a.type,
        bytesPerElement: a.elementSize,
        version: a.version
      });
      return;
    }
    const c = e.get(a);
    if (c === void 0)
      e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, a, l), c.version = a.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: o
  };
}
var gh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, vh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, xh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Sh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Mh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Eh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, yh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Th = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, bh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Ah = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, wh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Rh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ch = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Ph = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Dh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Lh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ih = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Uh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Nh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Fh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Oh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Bh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, zh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Hh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Vh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Gh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, kh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Wh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Xh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Yh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, qh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, jh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, $h = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Kh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Jh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Qh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, ed = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, td = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, nd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, id = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, rd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, sd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ad = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, od = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ld = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, cd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, ud = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, hd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, dd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, fd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, pd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, md = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, _d = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, gd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, vd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, xd = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Sd = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Md = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ed = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, yd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Td = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, bd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Ad = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, wd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Rd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Cd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Pd = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Dd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ld = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Id = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ud = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Nd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Fd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Od = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Bd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, zd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Hd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Vd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Gd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, kd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Wd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Xd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Yd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, qd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Zd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, jd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, $d = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Kd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Jd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Qd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ef = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, tf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, nf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, rf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, sf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, af = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, of = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, lf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, cf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, uf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, hf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, df = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, ff = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, pf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, mf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, _f = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const gf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, vf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Sf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ef = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Tf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, bf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Af = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, wf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Rf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Cf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Pf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Df = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Lf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, If = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Uf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ff = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Of = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Bf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, zf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Gf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Wf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Yf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, qf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Zf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, jf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, $f = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ne = {
  alphahash_fragment: gh,
  alphahash_pars_fragment: vh,
  alphamap_fragment: xh,
  alphamap_pars_fragment: Sh,
  alphatest_fragment: Mh,
  alphatest_pars_fragment: Eh,
  aomap_fragment: yh,
  aomap_pars_fragment: Th,
  batching_pars_vertex: bh,
  batching_vertex: Ah,
  begin_vertex: wh,
  beginnormal_vertex: Rh,
  bsdfs: Ch,
  iridescence_fragment: Ph,
  bumpmap_pars_fragment: Dh,
  clipping_planes_fragment: Lh,
  clipping_planes_pars_fragment: Ih,
  clipping_planes_pars_vertex: Uh,
  clipping_planes_vertex: Nh,
  color_fragment: Fh,
  color_pars_fragment: Oh,
  color_pars_vertex: Bh,
  color_vertex: zh,
  common: Hh,
  cube_uv_reflection_fragment: Vh,
  defaultnormal_vertex: Gh,
  displacementmap_pars_vertex: kh,
  displacementmap_vertex: Wh,
  emissivemap_fragment: Xh,
  emissivemap_pars_fragment: Yh,
  colorspace_fragment: qh,
  colorspace_pars_fragment: Zh,
  envmap_fragment: jh,
  envmap_common_pars_fragment: $h,
  envmap_pars_fragment: Kh,
  envmap_pars_vertex: Jh,
  envmap_physical_pars_fragment: cd,
  envmap_vertex: Qh,
  fog_vertex: ed,
  fog_pars_vertex: td,
  fog_fragment: nd,
  fog_pars_fragment: id,
  gradientmap_pars_fragment: rd,
  lightmap_pars_fragment: sd,
  lights_lambert_fragment: ad,
  lights_lambert_pars_fragment: od,
  lights_pars_begin: ld,
  lights_toon_fragment: ud,
  lights_toon_pars_fragment: hd,
  lights_phong_fragment: dd,
  lights_phong_pars_fragment: fd,
  lights_physical_fragment: pd,
  lights_physical_pars_fragment: md,
  lights_fragment_begin: _d,
  lights_fragment_maps: gd,
  lights_fragment_end: vd,
  logdepthbuf_fragment: xd,
  logdepthbuf_pars_fragment: Sd,
  logdepthbuf_pars_vertex: Md,
  logdepthbuf_vertex: Ed,
  map_fragment: yd,
  map_pars_fragment: Td,
  map_particle_fragment: bd,
  map_particle_pars_fragment: Ad,
  metalnessmap_fragment: wd,
  metalnessmap_pars_fragment: Rd,
  morphinstance_vertex: Cd,
  morphcolor_vertex: Pd,
  morphnormal_vertex: Dd,
  morphtarget_pars_vertex: Ld,
  morphtarget_vertex: Id,
  normal_fragment_begin: Ud,
  normal_fragment_maps: Nd,
  normal_pars_fragment: Fd,
  normal_pars_vertex: Od,
  normal_vertex: Bd,
  normalmap_pars_fragment: zd,
  clearcoat_normal_fragment_begin: Hd,
  clearcoat_normal_fragment_maps: Vd,
  clearcoat_pars_fragment: Gd,
  iridescence_pars_fragment: kd,
  opaque_fragment: Wd,
  packing: Xd,
  premultiplied_alpha_fragment: Yd,
  project_vertex: qd,
  dithering_fragment: Zd,
  dithering_pars_fragment: jd,
  roughnessmap_fragment: $d,
  roughnessmap_pars_fragment: Kd,
  shadowmap_pars_fragment: Jd,
  shadowmap_pars_vertex: Qd,
  shadowmap_vertex: ef,
  shadowmask_pars_fragment: tf,
  skinbase_vertex: nf,
  skinning_pars_vertex: rf,
  skinning_vertex: sf,
  skinnormal_vertex: af,
  specularmap_fragment: of,
  specularmap_pars_fragment: lf,
  tonemapping_fragment: cf,
  tonemapping_pars_fragment: uf,
  transmission_fragment: hf,
  transmission_pars_fragment: df,
  uv_pars_fragment: ff,
  uv_pars_vertex: pf,
  uv_vertex: mf,
  worldpos_vertex: _f,
  background_vert: gf,
  background_frag: vf,
  backgroundCube_vert: xf,
  backgroundCube_frag: Sf,
  cube_vert: Mf,
  cube_frag: Ef,
  depth_vert: yf,
  depth_frag: Tf,
  distanceRGBA_vert: bf,
  distanceRGBA_frag: Af,
  equirect_vert: wf,
  equirect_frag: Rf,
  linedashed_vert: Cf,
  linedashed_frag: Pf,
  meshbasic_vert: Df,
  meshbasic_frag: Lf,
  meshlambert_vert: If,
  meshlambert_frag: Uf,
  meshmatcap_vert: Nf,
  meshmatcap_frag: Ff,
  meshnormal_vert: Of,
  meshnormal_frag: Bf,
  meshphong_vert: zf,
  meshphong_frag: Hf,
  meshphysical_vert: Vf,
  meshphysical_frag: Gf,
  meshtoon_vert: kf,
  meshtoon_frag: Wf,
  points_vert: Xf,
  points_frag: Yf,
  shadow_vert: qf,
  shadow_frag: Zf,
  sprite_vert: jf,
  sprite_frag: $f
}, se = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Fe() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Fe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Fe() },
    normalScale: { value: /* @__PURE__ */ new be(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Fe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ae(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Fe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new be(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  }
}, cn = {
  basic: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.fog
    ]),
    vertexShader: Ne.meshbasic_vert,
    fragmentShader: Ne.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) },
        specular: { value: /* @__PURE__ */ new Ae(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.roughnessmap,
      se.metalnessmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.gradientmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ne.meshmatcap_vert,
    fragmentShader: Ne.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ct([
      se.points,
      se.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ne.linedashed_vert,
    fragmentShader: Ne.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshnormal_vert,
    fragmentShader: Ne.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ct([
      se.sprite,
      se.fog
    ]),
    vertexShader: Ne.sprite_vert,
    fragmentShader: Ne.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Fe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.background_vert,
    fragmentShader: Ne.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Fe() }
    },
    vertexShader: Ne.backgroundCube_vert,
    fragmentShader: Ne.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ne.cube_vert,
    fragmentShader: Ne.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ne.equirect_vert,
    fragmentShader: Ne.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Ct([
      se.common,
      se.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new B() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ne.distanceRGBA_vert,
    fragmentShader: Ne.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ct([
      se.lights,
      se.fog,
      {
        color: { value: /* @__PURE__ */ new Ae(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
cn.physical = {
  uniforms: /* @__PURE__ */ Ct([
    cn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new be(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Fe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ae(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new be() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ae(0) },
      specularColor: { value: /* @__PURE__ */ new Ae(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Fe() },
      anisotropyVector: { value: /* @__PURE__ */ new be() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Fe() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const Xr = { r: 0, b: 0, g: 0 }, Zn = /* @__PURE__ */ new Rn(), Kf = /* @__PURE__ */ new at();
function Jf(i, e, t, n, r, s, o) {
  const a = new Ae(0);
  let l = s === !0 ? 0 : 1, c, u, d = null, f = 0, m = null;
  function _(y) {
    let M = y.isScene === !0 ? y.background : null;
    return M && M.isTexture && (M = (y.backgroundBlurriness > 0 ? t : e).get(M)), M;
  }
  function v(y) {
    let M = !1;
    const L = _(y);
    L === null ? h(a, l) : L && L.isColor && (h(L, 1), M = !0);
    const D = i.xr.getEnvironmentBlendMode();
    D === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : D === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || M) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(y, M) {
    const L = _(M);
    L && (L.isCubeTexture || L.mapping === vs) ? (u === void 0 && (u = new Pt(
      new Sr(1, 1, 1),
      new At({
        name: "BackgroundCubeMaterial",
        uniforms: zi(cn.backgroundCube.uniforms),
        vertexShader: cn.backgroundCube.vertexShader,
        fragmentShader: cn.backgroundCube.fragmentShader,
        side: Ft,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(D, A, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), Zn.copy(M.backgroundRotation), Zn.x *= -1, Zn.y *= -1, Zn.z *= -1, L.isCubeTexture && L.isRenderTargetTexture === !1 && (Zn.y *= -1, Zn.z *= -1), u.material.uniforms.envMap.value = L, u.material.uniforms.flipEnvMap.value = L.isCubeTexture && L.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Zn)), u.material.toneMapped = Ye.getTransfer(L.colorSpace) !== Je, (d !== L || f !== L.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, d = L, f = L.version, m = i.toneMapping), u.layers.enableAll(), y.unshift(u, u.geometry, u.material, 0, 0, null)) : L && L.isTexture && (c === void 0 && (c = new Pt(
      new Hi(2, 2),
      new At({
        name: "BackgroundMaterial",
        uniforms: zi(cn.background.uniforms),
        vertexShader: cn.background.vertexShader,
        fragmentShader: cn.background.fragmentShader,
        side: Vn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = L, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = Ye.getTransfer(L.colorSpace) !== Je, L.matrixAutoUpdate === !0 && L.updateMatrix(), c.material.uniforms.uvTransform.value.copy(L.matrix), (d !== L || f !== L.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, d = L, f = L.version, m = i.toneMapping), c.layers.enableAll(), y.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(y, M) {
    y.getRGB(Xr, hc(i)), n.buffers.color.setClear(Xr.r, Xr.g, Xr.b, M, o);
  }
  function R() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(y, M = 1) {
      a.set(y), l = M, h(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(y) {
      l = y, h(a, l);
    },
    render: v,
    addToRenderList: p,
    dispose: R
  };
}
function Qf(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, o = !1;
  function a(g, T, U, F, H) {
    let j = !1;
    const k = d(F, U, T);
    s !== k && (s = k, c(s.object)), j = m(g, F, U, H), j && _(g, F, U, H), H !== null && e.update(H, i.ELEMENT_ARRAY_BUFFER), (j || o) && (o = !1, M(g, T, U, F), H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function u(g) {
    return i.deleteVertexArray(g);
  }
  function d(g, T, U) {
    const F = U.wireframe === !0;
    let H = n[g.id];
    H === void 0 && (H = {}, n[g.id] = H);
    let j = H[T.id];
    j === void 0 && (j = {}, H[T.id] = j);
    let k = j[F];
    return k === void 0 && (k = f(l()), j[F] = k), k;
  }
  function f(g) {
    const T = [], U = [], F = [];
    for (let H = 0; H < t; H++)
      T[H] = 0, U[H] = 0, F[H] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: T,
      enabledAttributes: U,
      attributeDivisors: F,
      object: g,
      attributes: {},
      index: null
    };
  }
  function m(g, T, U, F) {
    const H = s.attributes, j = T.attributes;
    let k = 0;
    const ne = U.getAttributes();
    for (const W in ne)
      if (ne[W].location >= 0) {
        const pe = H[W];
        let Se = j[W];
        if (Se === void 0 && (W === "instanceMatrix" && g.instanceMatrix && (Se = g.instanceMatrix), W === "instanceColor" && g.instanceColor && (Se = g.instanceColor)), pe === void 0 || pe.attribute !== Se || Se && pe.data !== Se.data) return !0;
        k++;
      }
    return s.attributesNum !== k || s.index !== F;
  }
  function _(g, T, U, F) {
    const H = {}, j = T.attributes;
    let k = 0;
    const ne = U.getAttributes();
    for (const W in ne)
      if (ne[W].location >= 0) {
        let pe = j[W];
        pe === void 0 && (W === "instanceMatrix" && g.instanceMatrix && (pe = g.instanceMatrix), W === "instanceColor" && g.instanceColor && (pe = g.instanceColor));
        const Se = {};
        Se.attribute = pe, pe && pe.data && (Se.data = pe.data), H[W] = Se, k++;
      }
    s.attributes = H, s.attributesNum = k, s.index = F;
  }
  function v() {
    const g = s.newAttributes;
    for (let T = 0, U = g.length; T < U; T++)
      g[T] = 0;
  }
  function p(g) {
    h(g, 0);
  }
  function h(g, T) {
    const U = s.newAttributes, F = s.enabledAttributes, H = s.attributeDivisors;
    U[g] = 1, F[g] === 0 && (i.enableVertexAttribArray(g), F[g] = 1), H[g] !== T && (i.vertexAttribDivisor(g, T), H[g] = T);
  }
  function R() {
    const g = s.newAttributes, T = s.enabledAttributes;
    for (let U = 0, F = T.length; U < F; U++)
      T[U] !== g[U] && (i.disableVertexAttribArray(U), T[U] = 0);
  }
  function y(g, T, U, F, H, j, k) {
    k === !0 ? i.vertexAttribIPointer(g, T, U, H, j) : i.vertexAttribPointer(g, T, U, F, H, j);
  }
  function M(g, T, U, F) {
    v();
    const H = F.attributes, j = U.getAttributes(), k = T.defaultAttributeValues;
    for (const ne in j) {
      const W = j[ne];
      if (W.location >= 0) {
        let oe = H[ne];
        if (oe === void 0 && (ne === "instanceMatrix" && g.instanceMatrix && (oe = g.instanceMatrix), ne === "instanceColor" && g.instanceColor && (oe = g.instanceColor)), oe !== void 0) {
          const pe = oe.normalized, Se = oe.itemSize, Oe = e.get(oe);
          if (Oe === void 0) continue;
          const Ze = Oe.buffer, Y = Oe.type, re = Oe.bytesPerElement, ge = Y === i.INT || Y === i.UNSIGNED_INT || oe.gpuType === Ja;
          if (oe.isInterleavedBufferAttribute) {
            const ae = oe.data, ye = ae.stride, We = oe.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let Re = 0; Re < W.locationSize; Re++)
                h(W.location + Re, ae.meshPerAttribute);
              g.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let Re = 0; Re < W.locationSize; Re++)
                p(W.location + Re);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let Re = 0; Re < W.locationSize; Re++)
              y(
                W.location + Re,
                Se / W.locationSize,
                Y,
                pe,
                ye * re,
                (We + Se / W.locationSize * Re) * re,
                ge
              );
          } else {
            if (oe.isInstancedBufferAttribute) {
              for (let ae = 0; ae < W.locationSize; ae++)
                h(W.location + ae, oe.meshPerAttribute);
              g.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let ae = 0; ae < W.locationSize; ae++)
                p(W.location + ae);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let ae = 0; ae < W.locationSize; ae++)
              y(
                W.location + ae,
                Se / W.locationSize,
                Y,
                pe,
                Se * re,
                Se / W.locationSize * ae * re,
                ge
              );
          }
        } else if (k !== void 0) {
          const pe = k[ne];
          if (pe !== void 0)
            switch (pe.length) {
              case 2:
                i.vertexAttrib2fv(W.location, pe);
                break;
              case 3:
                i.vertexAttrib3fv(W.location, pe);
                break;
              case 4:
                i.vertexAttrib4fv(W.location, pe);
                break;
              default:
                i.vertexAttrib1fv(W.location, pe);
            }
        }
      }
    }
    R();
  }
  function L() {
    C();
    for (const g in n) {
      const T = n[g];
      for (const U in T) {
        const F = T[U];
        for (const H in F)
          u(F[H].object), delete F[H];
        delete T[U];
      }
      delete n[g];
    }
  }
  function D(g) {
    if (n[g.id] === void 0) return;
    const T = n[g.id];
    for (const U in T) {
      const F = T[U];
      for (const H in F)
        u(F[H].object), delete F[H];
      delete T[U];
    }
    delete n[g.id];
  }
  function A(g) {
    for (const T in n) {
      const U = n[T];
      if (U[g.id] === void 0) continue;
      const F = U[g.id];
      for (const H in F)
        u(F[H].object), delete F[H];
      delete U[g.id];
    }
  }
  function C() {
    S(), o = !0, s !== r && (s = r, c(s.object));
  }
  function S() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: a,
    reset: C,
    resetDefaultState: S,
    dispose: L,
    releaseStatesOfGeometry: D,
    releaseStatesOfProgram: A,
    initAttributes: v,
    enableAttribute: p,
    disableUnusedAttributes: R
  };
}
function ep(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    i.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function o(c, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, c, u, d), t.update(u, n, d));
  }
  function a(c, u, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, d);
    let m = 0;
    for (let _ = 0; _ < d; _++)
      m += u[_];
    t.update(m, n, 1);
  }
  function l(c, u, d, f) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let _ = 0; _ < c.length; _++)
        o(c[_], u[_], f[_]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, d);
      let _ = 0;
      for (let v = 0; v < d; v++)
        _ += u[v] * f[v];
      t.update(_, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function tp(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function o(A) {
    return !(A !== Gt && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(A) {
    const C = A === _r && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== wn && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    A !== rn && !C);
  }
  function l(A) {
    if (A === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const d = t.logarithmicDepthBuffer === !0, f = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), R = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), y = i.getParameter(i.MAX_VARYING_VECTORS), M = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), L = _ > 0, D = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: d,
    reverseDepthBuffer: f,
    maxTextures: m,
    maxVertexTextures: _,
    maxTextureSize: v,
    maxCubemapSize: p,
    maxAttributes: h,
    maxVertexUniforms: R,
    maxVaryings: y,
    maxFragmentUniforms: M,
    vertexTextures: L,
    maxSamples: D
  };
}
function np(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new Kn(), a = new Fe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = d.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    t = u(d, f, 0);
  }, this.setState = function(d, f, m) {
    const _ = d.clippingPlanes, v = d.clipIntersection, p = d.clipShadows, h = i.get(d);
    if (!r || _ === null || _.length === 0 || s && !p)
      s ? u(null) : c();
    else {
      const R = s ? 0 : n, y = R * 4;
      let M = h.clippingState || null;
      l.value = M, M = u(_, f, y, m);
      for (let L = 0; L !== y; ++L)
        M[L] = t[L];
      h.clippingState = M, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += R;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, f, m, _) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, _ !== !0 || p === null) {
        const h = m + v * 4, R = f.matrixWorldInverse;
        a.getNormalMatrix(R), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let y = 0, M = m; y !== v; ++y, M += 4)
          o.copy(d[y]).applyMatrix4(R, a), o.normal.toArray(p, M), p[M + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function ip(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === ga ? o.mapping = Fi : a === va && (o.mapping = Oi), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === ga || a === va)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new $u(l.height);
            return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", r), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
const Ri = 4, Jo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ei = 20, js = /* @__PURE__ */ new lo(), Qo = /* @__PURE__ */ new Ae();
let $s = null, Ks = 0, Js = 0, Qs = !1;
const Jn = (1 + Math.sqrt(5)) / 2, yi = 1 / Jn, el = [
  /* @__PURE__ */ new B(-Jn, yi, 0),
  /* @__PURE__ */ new B(Jn, yi, 0),
  /* @__PURE__ */ new B(-yi, 0, Jn),
  /* @__PURE__ */ new B(yi, 0, Jn),
  /* @__PURE__ */ new B(0, Jn, -yi),
  /* @__PURE__ */ new B(0, Jn, yi),
  /* @__PURE__ */ new B(-1, 1, -1),
  /* @__PURE__ */ new B(1, 1, -1),
  /* @__PURE__ */ new B(-1, 1, 1),
  /* @__PURE__ */ new B(1, 1, 1)
], rp = /* @__PURE__ */ new B();
class tl {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.renderTarget=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const {
      size: o = 256,
      position: a = rp
    } = s;
    $s = this._renderer.getRenderTarget(), Ks = this._renderer.getActiveCubeFace(), Js = this._renderer.getActiveMipmapLevel(), Qs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(o);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(e, n, r, l, a), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = rl(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = il(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget($s, Ks, Js), this._renderer.xr.enabled = Qs, e.scissorTest = !1, Yr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Fi || e.mapping === Oi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), $s = this._renderer.getRenderTarget(), Ks = this._renderer.getActiveCubeFace(), Js = this._renderer.getActiveMipmapLevel(), Qs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Vt,
      minFilter: Vt,
      generateMipmaps: !1,
      type: _r,
      format: Gt,
      colorSpace: Bi,
      depthBuffer: !1
    }, r = nl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = nl(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = sp(s)), this._blurMaterial = ap(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Pt(this._lodPlanes[0], e);
    this._renderer.compile(t, js);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const l = new tn(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, m = d.toneMapping;
    d.getClearColor(Qo), d.toneMapping = Hn, d.autoClear = !1;
    const _ = new lc({
      name: "PMREM.Background",
      side: Ft,
      depthWrite: !1,
      depthTest: !1
    }), v = new Pt(new Sr(), _);
    let p = !1;
    const h = e.background;
    h ? h.isColor && (_.color.copy(h), e.background = null, p = !0) : (_.color.copy(Qo), p = !0);
    for (let R = 0; R < 6; R++) {
      const y = R % 3;
      y === 0 ? (l.up.set(0, c[R], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + u[R], s.y, s.z)) : y === 1 ? (l.up.set(0, 0, c[R]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + u[R], s.z)) : (l.up.set(0, c[R], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + u[R]));
      const M = this._cubeSize;
      Yr(r, y * M, R > 2 ? M : 0, M, M), d.setRenderTarget(r), p && d.render(v, l), d.render(e, l);
    }
    v.geometry.dispose(), v.material.dispose(), d.toneMapping = m, d.autoClear = f, e.background = h;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Fi || e.mapping === Oi;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = rl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = il());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Pt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Yr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, js);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = el[(r - s - 1) % el.length];
      this._blur(e, s - 1, s, o, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, d = new Pt(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * ei - 1), v = s / _, p = isFinite(s) ? 1 + Math.floor(u * v) : ei;
    p > ei && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);
    const h = [];
    let R = 0;
    for (let A = 0; A < ei; ++A) {
      const C = A / v, S = Math.exp(-C * C / 2);
      h.push(S), A === 0 ? R += S : A < p && (R += 2 * S);
    }
    for (let A = 0; A < h.length; A++)
      h[A] = h[A] / R;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: y } = this;
    f.dTheta.value = _, f.mipInt.value = y - n;
    const M = this._sizeLods[r], L = 3 * M * (r > y - Ri ? r - y + Ri : 0), D = 4 * (this._cubeSize - M);
    Yr(t, L, D, 3 * M, 2 * M), l.setRenderTarget(t), l.render(d, js);
  }
}
function sp(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Ri + 1 + Jo.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - Ri ? l = Jo[o - i + Ri - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, d = 1 + c, f = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, _ = 6, v = 3, p = 2, h = 1, R = new Float32Array(v * _ * m), y = new Float32Array(p * _ * m), M = new Float32Array(h * _ * m);
    for (let D = 0; D < m; D++) {
      const A = D % 3 * 2 / 3 - 1, C = D > 2 ? 0 : -1, S = [
        A,
        C,
        0,
        A + 2 / 3,
        C,
        0,
        A + 2 / 3,
        C + 1,
        0,
        A,
        C,
        0,
        A + 2 / 3,
        C + 1,
        0,
        A,
        C + 1,
        0
      ];
      R.set(S, v * _ * D), y.set(f, p * _ * D);
      const g = [D, D, D, D, D, D];
      M.set(g, h * _ * D);
    }
    const L = new ln();
    L.setAttribute("position", new Wt(R, v)), L.setAttribute("uv", new Wt(y, p)), L.setAttribute("faceIndex", new Wt(M, h)), e.push(L), r > Ri && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function nl(i, e, t) {
  const n = new si(i, e, t);
  return n.texture.mapping = vs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Yr(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function ap(i, e, t) {
  const n = new Float32Array(ei), r = new B(0, 1, 0);
  return new At({
    name: "SphericalGaussianBlur",
    defines: {
      n: ei,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: uo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: zn,
    depthTest: !1,
    depthWrite: !1
  });
}
function il() {
  return new At({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: uo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: zn,
    depthTest: !1,
    depthWrite: !1
  });
}
function rl() {
  return new At({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: uo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: zn,
    depthTest: !1,
    depthWrite: !1
  });
}
function uo() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function op(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === ga || l === va, u = l === Fi || l === Oi;
      if (c || u) {
        let d = e.get(a);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== f)
          return t === null && (t = new tl(i)), d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), d.texture.pmremVersion = a.pmremVersion, e.set(a, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const m = a.image;
          return c && m && m.height > 0 || u && m && r(m) ? (t === null && (t = new tl(i)), d = c ? t.fromEquirectangular(a) : t.fromCubemap(a), d.texture.pmremVersion = a.pmremVersion, e.set(a, d), a.addEventListener("dispose", s), d.texture) : null;
        }
      }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function lp(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && as("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function cp(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes)
      e.remove(f.attributes[_]);
    f.removeEventListener("dispose", o), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", o), r[f.id] = !0, t.memory.geometries++), f;
  }
  function l(d) {
    const f = d.attributes;
    for (const m in f)
      e.update(f[m], i.ARRAY_BUFFER);
  }
  function c(d) {
    const f = [], m = d.index, _ = d.attributes.position;
    let v = 0;
    if (m !== null) {
      const R = m.array;
      v = m.version;
      for (let y = 0, M = R.length; y < M; y += 3) {
        const L = R[y + 0], D = R[y + 1], A = R[y + 2];
        f.push(L, D, D, A, A, L);
      }
    } else if (_ !== void 0) {
      const R = _.array;
      v = _.version;
      for (let y = 0, M = R.length / 3 - 1; y < M; y += 3) {
        const L = y + 0, D = y + 1, A = y + 2;
        f.push(L, D, D, A, A, L);
      }
    } else
      return;
    const p = new (ic(f) ? uc : cc)(f, 1);
    p.version = v;
    const h = s.get(d);
    h && e.remove(h), s.set(d, p);
  }
  function u(d) {
    const f = s.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && c(d);
    } else
      c(d);
    return s.get(d);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: u
  };
}
function up(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, o;
  function a(f) {
    s = f.type, o = f.bytesPerElement;
  }
  function l(f, m) {
    i.drawElements(n, m, s, f * o), t.update(m, n, 1);
  }
  function c(f, m, _) {
    _ !== 0 && (i.drawElementsInstanced(n, m, s, f * o, _), t.update(m, n, _));
  }
  function u(f, m, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, f, 0, _);
    let p = 0;
    for (let h = 0; h < _; h++)
      p += m[h];
    t.update(p, n, 1);
  }
  function d(f, m, _, v) {
    if (_ === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let h = 0; h < f.length; h++)
        c(f[h] / o, m[h], v[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, v, 0, _);
      let h = 0;
      for (let R = 0; R < _; R++)
        h += m[R] * v[R];
      t.update(h, n, 1);
    }
  }
  this.setMode = r, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function hp(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function dp(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new ut();
  function s(o, a, l) {
    const c = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let f = n.get(a);
    if (f === void 0 || f.count !== d) {
      let S = function() {
        A.dispose(), n.delete(a), a.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const m = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, v = a.morphAttributes.color !== void 0, p = a.morphAttributes.position || [], h = a.morphAttributes.normal || [], R = a.morphAttributes.color || [];
      let y = 0;
      m === !0 && (y = 1), _ === !0 && (y = 2), v === !0 && (y = 3);
      let M = a.attributes.position.count * y, L = 1;
      M > e.maxTextureSize && (L = Math.ceil(M / e.maxTextureSize), M = e.maxTextureSize);
      const D = new Float32Array(M * L * 4 * d), A = new rc(D, M, L, d);
      A.type = rn, A.needsUpdate = !0;
      const C = y * 4;
      for (let g = 0; g < d; g++) {
        const T = p[g], U = h[g], F = R[g], H = M * L * 4 * g;
        for (let j = 0; j < T.count; j++) {
          const k = j * C;
          m === !0 && (r.fromBufferAttribute(T, j), D[H + k + 0] = r.x, D[H + k + 1] = r.y, D[H + k + 2] = r.z, D[H + k + 3] = 0), _ === !0 && (r.fromBufferAttribute(U, j), D[H + k + 4] = r.x, D[H + k + 5] = r.y, D[H + k + 6] = r.z, D[H + k + 7] = 0), v === !0 && (r.fromBufferAttribute(F, j), D[H + k + 8] = r.x, D[H + k + 9] = r.y, D[H + k + 10] = r.z, D[H + k + 11] = F.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: d,
        texture: A,
        size: new be(M, L)
      }, n.set(a, f), a.addEventListener("dispose", S);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
    else {
      let m = 0;
      for (let v = 0; v < c.length; v++)
        m += c[v];
      const _ = a.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function fp(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, d = e.get(l, u);
    if (r.get(d) !== c && (e.update(d), r.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return d;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const _c = /* @__PURE__ */ new Et(), sl = /* @__PURE__ */ new pc(1, 1), gc = /* @__PURE__ */ new rc(), vc = /* @__PURE__ */ new Uu(), xc = /* @__PURE__ */ new dc(), al = [], ol = [], ll = new Float32Array(16), cl = new Float32Array(9), ul = new Float32Array(4);
function Vi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = al[r];
  if (s === void 0 && (s = new Float32Array(r), al[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function gt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function vt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Ss(i, e) {
  let t = ol[e];
  t === void 0 && (t = new Int32Array(e), ol[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function pp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function mp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2fv(this.addr, e), vt(t, e);
  }
}
function _p(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (gt(t, e)) return;
    i.uniform3fv(this.addr, e), vt(t, e);
  }
}
function gp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4fv(this.addr, e), vt(t, e);
  }
}
function vp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), vt(t, e);
  } else {
    if (gt(t, n)) return;
    ul.set(n), i.uniformMatrix2fv(this.addr, !1, ul), vt(t, n);
  }
}
function xp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), vt(t, e);
  } else {
    if (gt(t, n)) return;
    cl.set(n), i.uniformMatrix3fv(this.addr, !1, cl), vt(t, n);
  }
}
function Sp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), vt(t, e);
  } else {
    if (gt(t, n)) return;
    ll.set(n), i.uniformMatrix4fv(this.addr, !1, ll), vt(t, n);
  }
}
function Mp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Ep(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2iv(this.addr, e), vt(t, e);
  }
}
function yp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3iv(this.addr, e), vt(t, e);
  }
}
function Tp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4iv(this.addr, e), vt(t, e);
  }
}
function bp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Ap(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2uiv(this.addr, e), vt(t, e);
  }
}
function wp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3uiv(this.addr, e), vt(t, e);
  }
}
function Rp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4uiv(this.addr, e), vt(t, e);
  }
}
function Cp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (sl.compareFunction = nc, s = sl) : s = _c, t.setTexture2D(e || s, r);
}
function Pp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || vc, r);
}
function Dp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || xc, r);
}
function Lp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || gc, r);
}
function Ip(i) {
  switch (i) {
    case 5126:
      return pp;
    // FLOAT
    case 35664:
      return mp;
    // _VEC2
    case 35665:
      return _p;
    // _VEC3
    case 35666:
      return gp;
    // _VEC4
    case 35674:
      return vp;
    // _MAT2
    case 35675:
      return xp;
    // _MAT3
    case 35676:
      return Sp;
    // _MAT4
    case 5124:
    case 35670:
      return Mp;
    // INT, BOOL
    case 35667:
    case 35671:
      return Ep;
    // _VEC2
    case 35668:
    case 35672:
      return yp;
    // _VEC3
    case 35669:
    case 35673:
      return Tp;
    // _VEC4
    case 5125:
      return bp;
    // UINT
    case 36294:
      return Ap;
    // _VEC2
    case 36295:
      return wp;
    // _VEC3
    case 36296:
      return Rp;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Cp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Pp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Dp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Lp;
  }
}
function Up(i, e) {
  i.uniform1fv(this.addr, e);
}
function Np(i, e) {
  const t = Vi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Fp(i, e) {
  const t = Vi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Op(i, e) {
  const t = Vi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Bp(i, e) {
  const t = Vi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function zp(i, e) {
  const t = Vi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Hp(i, e) {
  const t = Vi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Vp(i, e) {
  i.uniform1iv(this.addr, e);
}
function Gp(i, e) {
  i.uniform2iv(this.addr, e);
}
function kp(i, e) {
  i.uniform3iv(this.addr, e);
}
function Wp(i, e) {
  i.uniform4iv(this.addr, e);
}
function Xp(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Yp(i, e) {
  i.uniform2uiv(this.addr, e);
}
function qp(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Zp(i, e) {
  i.uniform4uiv(this.addr, e);
}
function jp(i, e, t) {
  const n = this.cache, r = e.length, s = Ss(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || _c, s[o]);
}
function $p(i, e, t) {
  const n = this.cache, r = e.length, s = Ss(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || vc, s[o]);
}
function Kp(i, e, t) {
  const n = this.cache, r = e.length, s = Ss(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || xc, s[o]);
}
function Jp(i, e, t) {
  const n = this.cache, r = e.length, s = Ss(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || gc, s[o]);
}
function Qp(i) {
  switch (i) {
    case 5126:
      return Up;
    // FLOAT
    case 35664:
      return Np;
    // _VEC2
    case 35665:
      return Fp;
    // _VEC3
    case 35666:
      return Op;
    // _VEC4
    case 35674:
      return Bp;
    // _MAT2
    case 35675:
      return zp;
    // _MAT3
    case 35676:
      return Hp;
    // _MAT4
    case 5124:
    case 35670:
      return Vp;
    // INT, BOOL
    case 35667:
    case 35671:
      return Gp;
    // _VEC2
    case 35668:
    case 35672:
      return kp;
    // _VEC3
    case 35669:
    case 35673:
      return Wp;
    // _VEC4
    case 5125:
      return Xp;
    // UINT
    case 36294:
      return Yp;
    // _VEC2
    case 36295:
      return qp;
    // _VEC3
    case 36296:
      return Zp;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return jp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return $p;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Kp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Jp;
  }
}
class em {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Ip(t.type);
  }
}
class tm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Qp(t.type);
  }
}
class nm {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const ea = /(\w+)(\])?(\[|\.)?/g;
function hl(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function im(i, e, t) {
  const n = i.name, r = n.length;
  for (ea.lastIndex = 0; ; ) {
    const s = ea.exec(n), o = ea.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      hl(t, c === void 0 ? new em(a, i, e) : new tm(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new nm(a), hl(t, d)), t = d;
    }
  }
}
class os {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      im(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function dl(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const rm = 37297;
let sm = 0;
function am(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const fl = /* @__PURE__ */ new Fe();
function om(i) {
  Ye._getMatrix(fl, Ye.workingColorSpace, i);
  const e = `mat3( ${fl.elements.map((t) => t.toFixed(4))} )`;
  switch (Ye.getTransfer(i)) {
    case us:
      return [e, "LinearTransferOETF"];
    case Je:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function pl(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + am(i.getShaderSource(e), o);
  } else
    return r;
}
function lm(i, e) {
  const t = om(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function cm(i, e) {
  let t;
  switch (e) {
    case iu:
      t = "Linear";
      break;
    case ru:
      t = "Reinhard";
      break;
    case su:
      t = "Cineon";
      break;
    case au:
      t = "ACESFilmic";
      break;
    case lu:
      t = "AgX";
      break;
    case cu:
      t = "Neutral";
      break;
    case ou:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const qr = /* @__PURE__ */ new B();
function um() {
  Ye.getLuminanceCoefficients(qr);
  const i = qr.x.toFixed(4), e = qr.y.toFixed(4), t = qr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function hm(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ki).join(`
`);
}
function dm(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function fm(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function Ki(i) {
  return i !== "";
}
function ml(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function _l(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const pm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function qa(i) {
  return i.replace(pm, _m);
}
const mm = /* @__PURE__ */ new Map();
function _m(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = mm.get(e);
    if (n !== void 0)
      t = Ne[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return qa(t);
}
const gm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function gl(i) {
  return i.replace(gm, vm);
}
function vm(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function vl(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function xm(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === $a ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Fc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === xn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Sm(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Fi:
      case Oi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case vs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Mm(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Oi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Em(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Xl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case tu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case nu:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function ym(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Tm(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = xm(t), c = Sm(t), u = Mm(t), d = Em(t), f = ym(t), m = hm(t), _ = dm(s), v = r.createProgram();
  let p, h, R = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Ki).join(`
`), p.length > 0 && (p += `
`), h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Ki).join(`
`), h.length > 0 && (h += `
`)) : (p = [
    vl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ki).join(`
`), h = [
    vl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Hn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Hn ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Hn ? cm("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    lm("linearToOutputTexel", t.outputColorSpace),
    um(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Ki).join(`
`)), o = qa(o), o = ml(o, t), o = _l(o, t), a = qa(a), a = ml(a, t), a = _l(a, t), o = gl(o), a = gl(a), t.isRawShaderMaterial !== !0 && (R = `#version 300 es
`, p = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, h = [
    "#define varying in",
    t.glslVersion === bo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === bo ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const y = R + p + o, M = R + h + a, L = dl(r, r.VERTEX_SHADER, y), D = dl(r, r.FRAGMENT_SHADER, M);
  r.attachShader(v, L), r.attachShader(v, D), t.index0AttributeName !== void 0 ? r.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"), r.linkProgram(v);
  function A(T) {
    if (i.debug.checkShaderErrors) {
      const U = r.getProgramInfoLog(v).trim(), F = r.getShaderInfoLog(L).trim(), H = r.getShaderInfoLog(D).trim();
      let j = !0, k = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (j = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, v, L, D);
        else {
          const ne = pl(r, L, "vertex"), W = pl(r, D, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(v, r.VALIDATE_STATUS) + `

Material Name: ` + T.name + `
Material Type: ` + T.type + `

Program Info Log: ` + U + `
` + ne + `
` + W
          );
        }
      else U !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", U) : (F === "" || H === "") && (k = !1);
      k && (T.diagnostics = {
        runnable: j,
        programLog: U,
        vertexShader: {
          log: F,
          prefix: p
        },
        fragmentShader: {
          log: H,
          prefix: h
        }
      });
    }
    r.deleteShader(L), r.deleteShader(D), C = new os(r, v), S = fm(r, v);
  }
  let C;
  this.getUniforms = function() {
    return C === void 0 && A(this), C;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && A(this), S;
  };
  let g = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return g === !1 && (g = r.getProgramParameter(v, rm)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = sm++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = L, this.fragmentShader = D, this;
}
let bm = 0;
class Am {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new wm(e), t.set(e, n)), n;
  }
}
class wm {
  constructor(e) {
    this.id = bm++, this.code = e, this.usedTimes = 0;
  }
}
function Rm(i, e, t, n, r, s, o) {
  const a = new ac(), l = new Am(), c = /* @__PURE__ */ new Set(), u = [], d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function v(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, g, T, U, F) {
    const H = U.fog, j = F.geometry, k = S.isMeshStandardMaterial ? U.environment : null, ne = (S.isMeshStandardMaterial ? t : e).get(S.envMap || k), W = ne && ne.mapping === vs ? ne.image.height : null, oe = _[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const pe = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, Se = pe !== void 0 ? pe.length : 0;
    let Oe = 0;
    j.morphAttributes.position !== void 0 && (Oe = 1), j.morphAttributes.normal !== void 0 && (Oe = 2), j.morphAttributes.color !== void 0 && (Oe = 3);
    let Ze, Y, re, ge;
    if (oe) {
      const Ke = cn[oe];
      Ze = Ke.vertexShader, Y = Ke.fragmentShader;
    } else
      Ze = S.vertexShader, Y = S.fragmentShader, l.update(S), re = l.getVertexShaderID(S), ge = l.getFragmentShaderID(S);
    const ae = i.getRenderTarget(), ye = i.state.buffers.depth.getReversed(), We = F.isInstancedMesh === !0, Re = F.isBatchedMesh === !0, st = !!S.map, tt = !!S.matcap, ze = !!ne, P = !!S.aoMap, wt = !!S.lightMap, ke = !!S.bumpMap, Ge = !!S.normalMap, ve = !!S.displacementMap, Qe = !!S.emissiveMap, xe = !!S.metalnessMap, b = !!S.roughnessMap, x = S.anisotropy > 0, z = S.clearcoat > 0, q = S.dispersion > 0, $ = S.iridescence > 0, w = S.sheen > 0, J = S.transmission > 0, ee = x && !!S.anisotropyMap, ie = z && !!S.clearcoatMap, Le = z && !!S.clearcoatNormalMap, Q = z && !!S.clearcoatRoughnessMap, fe = $ && !!S.iridescenceMap, we = $ && !!S.iridescenceThicknessMap, Me = w && !!S.sheenColorMap, le = w && !!S.sheenRoughnessMap, He = !!S.specularMap, Be = !!S.specularColorMap, et = !!S.specularIntensityMap, I = J && !!S.transmissionMap, ue = J && !!S.thicknessMap, X = !!S.gradientMap, Z = !!S.alphaMap, de = S.alphaTest > 0, he = !!S.alphaHash, Ue = !!S.extensions;
    let ot = Hn;
    S.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (ot = i.toneMapping);
    const yt = {
      shaderID: oe,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Ze,
      fragmentShader: Y,
      defines: S.defines,
      customVertexShaderID: re,
      customFragmentShaderID: ge,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      batching: Re,
      batchingColor: Re && F._colorsTexture !== null,
      instancing: We,
      instancingColor: We && F.instanceColor !== null,
      instancingMorph: We && F.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: ae === null ? i.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : Bi,
      alphaToCoverage: !!S.alphaToCoverage,
      map: st,
      matcap: tt,
      envMap: ze,
      envMapMode: ze && ne.mapping,
      envMapCubeUVHeight: W,
      aoMap: P,
      lightMap: wt,
      bumpMap: ke,
      normalMap: Ge,
      displacementMap: f && ve,
      emissiveMap: Qe,
      normalMapObjectSpace: Ge && S.normalMapType === mu,
      normalMapTangentSpace: Ge && S.normalMapType === pu,
      metalnessMap: xe,
      roughnessMap: b,
      anisotropy: x,
      anisotropyMap: ee,
      clearcoat: z,
      clearcoatMap: ie,
      clearcoatNormalMap: Le,
      clearcoatRoughnessMap: Q,
      dispersion: q,
      iridescence: $,
      iridescenceMap: fe,
      iridescenceThicknessMap: we,
      sheen: w,
      sheenColorMap: Me,
      sheenRoughnessMap: le,
      specularMap: He,
      specularColorMap: Be,
      specularIntensityMap: et,
      transmission: J,
      transmissionMap: I,
      thicknessMap: ue,
      gradientMap: X,
      opaque: S.transparent === !1 && S.blending === Ii && S.alphaToCoverage === !1,
      alphaMap: Z,
      alphaTest: de,
      alphaHash: he,
      combine: S.combine,
      //
      mapUv: st && v(S.map.channel),
      aoMapUv: P && v(S.aoMap.channel),
      lightMapUv: wt && v(S.lightMap.channel),
      bumpMapUv: ke && v(S.bumpMap.channel),
      normalMapUv: Ge && v(S.normalMap.channel),
      displacementMapUv: ve && v(S.displacementMap.channel),
      emissiveMapUv: Qe && v(S.emissiveMap.channel),
      metalnessMapUv: xe && v(S.metalnessMap.channel),
      roughnessMapUv: b && v(S.roughnessMap.channel),
      anisotropyMapUv: ee && v(S.anisotropyMap.channel),
      clearcoatMapUv: ie && v(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Le && v(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Q && v(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: fe && v(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: we && v(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: Me && v(S.sheenColorMap.channel),
      sheenRoughnessMapUv: le && v(S.sheenRoughnessMap.channel),
      specularMapUv: He && v(S.specularMap.channel),
      specularColorMapUv: Be && v(S.specularColorMap.channel),
      specularIntensityMapUv: et && v(S.specularIntensityMap.channel),
      transmissionMapUv: I && v(S.transmissionMap.channel),
      thicknessMapUv: ue && v(S.thicknessMap.channel),
      alphaMapUv: Z && v(S.alphaMap.channel),
      //
      vertexTangents: !!j.attributes.tangent && (Ge || x),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4,
      pointsUvs: F.isPoints === !0 && !!j.attributes.uv && (st || Z),
      fog: !!H,
      useFog: S.fog === !0,
      fogExp2: !!H && H.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: ye,
      skinning: F.isSkinnedMesh === !0,
      morphTargets: j.morphAttributes.position !== void 0,
      morphNormals: j.morphAttributes.normal !== void 0,
      morphColors: j.morphAttributes.color !== void 0,
      morphTargetsCount: Se,
      morphTextureStride: Oe,
      numDirLights: g.directional.length,
      numPointLights: g.point.length,
      numSpotLights: g.spot.length,
      numSpotLightMaps: g.spotLightMap.length,
      numRectAreaLights: g.rectArea.length,
      numHemiLights: g.hemi.length,
      numDirLightShadows: g.directionalShadowMap.length,
      numPointLightShadows: g.pointShadowMap.length,
      numSpotLightShadows: g.spotShadowMap.length,
      numSpotLightShadowsWithMaps: g.numSpotLightShadowsWithMaps,
      numLightProbes: g.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && T.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: ot,
      decodeVideoTexture: st && S.map.isVideoTexture === !0 && Ye.getTransfer(S.map.colorSpace) === Je,
      decodeVideoTextureEmissive: Qe && S.emissiveMap.isVideoTexture === !0 && Ye.getTransfer(S.emissiveMap.colorSpace) === Je,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === En,
      flipSided: S.side === Ft,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: Ue && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ue && S.extensions.multiDraw === !0 || Re) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return yt.vertexUv1s = c.has(1), yt.vertexUv2s = c.has(2), yt.vertexUv3s = c.has(3), c.clear(), yt;
  }
  function h(S) {
    const g = [];
    if (S.shaderID ? g.push(S.shaderID) : (g.push(S.customVertexShaderID), g.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const T in S.defines)
        g.push(T), g.push(S.defines[T]);
    return S.isRawShaderMaterial === !1 && (R(g, S), y(g, S), g.push(i.outputColorSpace)), g.push(S.customProgramCacheKey), g.join();
  }
  function R(S, g) {
    S.push(g.precision), S.push(g.outputColorSpace), S.push(g.envMapMode), S.push(g.envMapCubeUVHeight), S.push(g.mapUv), S.push(g.alphaMapUv), S.push(g.lightMapUv), S.push(g.aoMapUv), S.push(g.bumpMapUv), S.push(g.normalMapUv), S.push(g.displacementMapUv), S.push(g.emissiveMapUv), S.push(g.metalnessMapUv), S.push(g.roughnessMapUv), S.push(g.anisotropyMapUv), S.push(g.clearcoatMapUv), S.push(g.clearcoatNormalMapUv), S.push(g.clearcoatRoughnessMapUv), S.push(g.iridescenceMapUv), S.push(g.iridescenceThicknessMapUv), S.push(g.sheenColorMapUv), S.push(g.sheenRoughnessMapUv), S.push(g.specularMapUv), S.push(g.specularColorMapUv), S.push(g.specularIntensityMapUv), S.push(g.transmissionMapUv), S.push(g.thicknessMapUv), S.push(g.combine), S.push(g.fogExp2), S.push(g.sizeAttenuation), S.push(g.morphTargetsCount), S.push(g.morphAttributeCount), S.push(g.numDirLights), S.push(g.numPointLights), S.push(g.numSpotLights), S.push(g.numSpotLightMaps), S.push(g.numHemiLights), S.push(g.numRectAreaLights), S.push(g.numDirLightShadows), S.push(g.numPointLightShadows), S.push(g.numSpotLightShadows), S.push(g.numSpotLightShadowsWithMaps), S.push(g.numLightProbes), S.push(g.shadowMapType), S.push(g.toneMapping), S.push(g.numClippingPlanes), S.push(g.numClipIntersection), S.push(g.depthPacking);
  }
  function y(S, g) {
    a.disableAll(), g.supportsVertexTextures && a.enable(0), g.instancing && a.enable(1), g.instancingColor && a.enable(2), g.instancingMorph && a.enable(3), g.matcap && a.enable(4), g.envMap && a.enable(5), g.normalMapObjectSpace && a.enable(6), g.normalMapTangentSpace && a.enable(7), g.clearcoat && a.enable(8), g.iridescence && a.enable(9), g.alphaTest && a.enable(10), g.vertexColors && a.enable(11), g.vertexAlphas && a.enable(12), g.vertexUv1s && a.enable(13), g.vertexUv2s && a.enable(14), g.vertexUv3s && a.enable(15), g.vertexTangents && a.enable(16), g.anisotropy && a.enable(17), g.alphaHash && a.enable(18), g.batching && a.enable(19), g.dispersion && a.enable(20), g.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), g.fog && a.enable(0), g.useFog && a.enable(1), g.flatShading && a.enable(2), g.logarithmicDepthBuffer && a.enable(3), g.reverseDepthBuffer && a.enable(4), g.skinning && a.enable(5), g.morphTargets && a.enable(6), g.morphNormals && a.enable(7), g.morphColors && a.enable(8), g.premultipliedAlpha && a.enable(9), g.shadowMapEnabled && a.enable(10), g.doubleSided && a.enable(11), g.flipSided && a.enable(12), g.useDepthPacking && a.enable(13), g.dithering && a.enable(14), g.transmission && a.enable(15), g.sheen && a.enable(16), g.opaque && a.enable(17), g.pointsUvs && a.enable(18), g.decodeVideoTexture && a.enable(19), g.decodeVideoTextureEmissive && a.enable(20), g.alphaToCoverage && a.enable(21), S.push(a.mask);
  }
  function M(S) {
    const g = _[S.type];
    let T;
    if (g) {
      const U = cn[g];
      T = ds.clone(U.uniforms);
    } else
      T = S.uniforms;
    return T;
  }
  function L(S, g) {
    let T;
    for (let U = 0, F = u.length; U < F; U++) {
      const H = u[U];
      if (H.cacheKey === g) {
        T = H, ++T.usedTimes;
        break;
      }
    }
    return T === void 0 && (T = new Tm(i, g, S, s), u.push(T)), T;
  }
  function D(S) {
    if (--S.usedTimes === 0) {
      const g = u.indexOf(S);
      u[g] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function A(S) {
    l.remove(S);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: M,
    acquireProgram: L,
    releaseProgram: D,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: C
  };
}
function Cm() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(o) {
    return i.has(o);
  }
  function t(o) {
    let a = i.get(o);
    return a === void 0 && (a = {}, i.set(o, a)), a;
  }
  function n(o) {
    i.delete(o);
  }
  function r(o, a, l) {
    i.get(o)[a] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function Pm(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function xl(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Sl() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(d, f, m, _, v, p) {
    let h = i[e];
    return h === void 0 ? (h = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: _,
      renderOrder: d.renderOrder,
      z: v,
      group: p
    }, i[e] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = m, h.groupOrder = _, h.renderOrder = d.renderOrder, h.z = v, h.group = p), e++, h;
  }
  function a(d, f, m, _, v, p) {
    const h = o(d, f, m, _, v, p);
    m.transmission > 0 ? n.push(h) : m.transparent === !0 ? r.push(h) : t.push(h);
  }
  function l(d, f, m, _, v, p) {
    const h = o(d, f, m, _, v, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? r.unshift(h) : t.unshift(h);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || Pm), n.length > 1 && n.sort(f || xl), r.length > 1 && r.sort(f || xl);
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c
  };
}
function Dm() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Sl(), i.set(n, [o])) : r >= s.length ? (o = new Sl(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Lm() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new B(),
            color: new Ae()
          };
          break;
        case "SpotLight":
          t = {
            position: new B(),
            direction: new B(),
            color: new Ae(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new B(),
            color: new Ae(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new B(),
            skyColor: new Ae(),
            groundColor: new Ae()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ae(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Im() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Um = 0;
function Nm(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Fm(i) {
  const e = new Lm(), t = Im(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new B());
  const r = new B(), s = new at(), o = new at();
  function a(c) {
    let u = 0, d = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let m = 0, _ = 0, v = 0, p = 0, h = 0, R = 0, y = 0, M = 0, L = 0, D = 0, A = 0;
    c.sort(Nm);
    for (let S = 0, g = c.length; S < g; S++) {
      const T = c[S], U = T.color, F = T.intensity, H = T.distance, j = T.shadow && T.shadow.map ? T.shadow.map.texture : null;
      if (T.isAmbientLight)
        u += U.r * F, d += U.g * F, f += U.b * F;
      else if (T.isLightProbe) {
        for (let k = 0; k < 9; k++)
          n.probe[k].addScaledVector(T.sh.coefficients[k], F);
        A++;
      } else if (T.isDirectionalLight) {
        const k = e.get(T);
        if (k.color.copy(T.color).multiplyScalar(T.intensity), T.castShadow) {
          const ne = T.shadow, W = t.get(T);
          W.shadowIntensity = ne.intensity, W.shadowBias = ne.bias, W.shadowNormalBias = ne.normalBias, W.shadowRadius = ne.radius, W.shadowMapSize = ne.mapSize, n.directionalShadow[m] = W, n.directionalShadowMap[m] = j, n.directionalShadowMatrix[m] = T.shadow.matrix, R++;
        }
        n.directional[m] = k, m++;
      } else if (T.isSpotLight) {
        const k = e.get(T);
        k.position.setFromMatrixPosition(T.matrixWorld), k.color.copy(U).multiplyScalar(F), k.distance = H, k.coneCos = Math.cos(T.angle), k.penumbraCos = Math.cos(T.angle * (1 - T.penumbra)), k.decay = T.decay, n.spot[v] = k;
        const ne = T.shadow;
        if (T.map && (n.spotLightMap[L] = T.map, L++, ne.updateMatrices(T), T.castShadow && D++), n.spotLightMatrix[v] = ne.matrix, T.castShadow) {
          const W = t.get(T);
          W.shadowIntensity = ne.intensity, W.shadowBias = ne.bias, W.shadowNormalBias = ne.normalBias, W.shadowRadius = ne.radius, W.shadowMapSize = ne.mapSize, n.spotShadow[v] = W, n.spotShadowMap[v] = j, M++;
        }
        v++;
      } else if (T.isRectAreaLight) {
        const k = e.get(T);
        k.color.copy(U).multiplyScalar(F), k.halfWidth.set(T.width * 0.5, 0, 0), k.halfHeight.set(0, T.height * 0.5, 0), n.rectArea[p] = k, p++;
      } else if (T.isPointLight) {
        const k = e.get(T);
        if (k.color.copy(T.color).multiplyScalar(T.intensity), k.distance = T.distance, k.decay = T.decay, T.castShadow) {
          const ne = T.shadow, W = t.get(T);
          W.shadowIntensity = ne.intensity, W.shadowBias = ne.bias, W.shadowNormalBias = ne.normalBias, W.shadowRadius = ne.radius, W.shadowMapSize = ne.mapSize, W.shadowCameraNear = ne.camera.near, W.shadowCameraFar = ne.camera.far, n.pointShadow[_] = W, n.pointShadowMap[_] = j, n.pointShadowMatrix[_] = T.shadow.matrix, y++;
        }
        n.point[_] = k, _++;
      } else if (T.isHemisphereLight) {
        const k = e.get(T);
        k.skyColor.copy(T.color).multiplyScalar(F), k.groundColor.copy(T.groundColor).multiplyScalar(F), n.hemi[h] = k, h++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = se.LTC_FLOAT_1, n.rectAreaLTC2 = se.LTC_FLOAT_2) : (n.rectAreaLTC1 = se.LTC_HALF_1, n.rectAreaLTC2 = se.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f;
    const C = n.hash;
    (C.directionalLength !== m || C.pointLength !== _ || C.spotLength !== v || C.rectAreaLength !== p || C.hemiLength !== h || C.numDirectionalShadows !== R || C.numPointShadows !== y || C.numSpotShadows !== M || C.numSpotMaps !== L || C.numLightProbes !== A) && (n.directional.length = m, n.spot.length = v, n.rectArea.length = p, n.point.length = _, n.hemi.length = h, n.directionalShadow.length = R, n.directionalShadowMap.length = R, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = M, n.spotShadowMap.length = M, n.directionalShadowMatrix.length = R, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = M + L - D, n.spotLightMap.length = L, n.numSpotLightShadowsWithMaps = D, n.numLightProbes = A, C.directionalLength = m, C.pointLength = _, C.spotLength = v, C.rectAreaLength = p, C.hemiLength = h, C.numDirectionalShadows = R, C.numPointShadows = y, C.numSpotShadows = M, C.numSpotMaps = L, C.numLightProbes = A, n.version = Um++);
  }
  function l(c, u) {
    let d = 0, f = 0, m = 0, _ = 0, v = 0;
    const p = u.matrixWorldInverse;
    for (let h = 0, R = c.length; h < R; h++) {
      const y = c[h];
      if (y.isDirectionalLight) {
        const M = n.directional[d];
        M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), d++;
      } else if (y.isSpotLight) {
        const M = n.spot[m];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), m++;
      } else if (y.isRectAreaLight) {
        const M = n.rectArea[_];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), o.identity(), s.copy(y.matrixWorld), s.premultiply(p), o.extractRotation(s), M.halfWidth.set(y.width * 0.5, 0, 0), M.halfHeight.set(0, y.height * 0.5, 0), M.halfWidth.applyMatrix4(o), M.halfHeight.applyMatrix4(o), _++;
      } else if (y.isPointLight) {
        const M = n.point[f];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), f++;
      } else if (y.isHemisphereLight) {
        const M = n.hemi[v];
        M.direction.setFromMatrixPosition(y.matrixWorld), M.direction.transformDirection(p), v++;
      }
    }
  }
  return {
    setup: a,
    setupView: l,
    state: n
  };
}
function Ml(i) {
  const e = new Fm(i), t = [], n = [];
  function r(u) {
    c.camera = u, t.length = 0, n.length = 0;
  }
  function s(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function a() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: c,
    setupLights: a,
    setupLightsView: l,
    pushLight: s,
    pushShadow: o
  };
}
function Om(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const o = e.get(r);
    let a;
    return o === void 0 ? (a = new Ml(i), e.set(r, [a])) : s >= o.length ? (a = new Ml(i), o.push(a)) : a = o[s], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Bm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, zm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Hm(i, e, t) {
  let n = new ao();
  const r = new be(), s = new be(), o = new ut(), a = new ih({ depthPacking: fu }), l = new rh(), c = {}, u = t.maxTextureSize, d = { [Vn]: Ft, [Ft]: Vn, [En]: En }, f = new At({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new be() },
      radius: { value: 4 }
    },
    vertexShader: Bm,
    fragmentShader: zm
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new ln();
  _.setAttribute(
    "position",
    new Wt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Pt(_, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = $a;
  let h = this.type;
  this.render = function(D, A, C) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || D.length === 0) return;
    const S = i.getRenderTarget(), g = i.getActiveCubeFace(), T = i.getActiveMipmapLevel(), U = i.state;
    U.setBlending(zn), U.buffers.color.setClear(1, 1, 1, 1), U.buffers.depth.setTest(!0), U.setScissorTest(!1);
    const F = h !== xn && this.type === xn, H = h === xn && this.type !== xn;
    for (let j = 0, k = D.length; j < k; j++) {
      const ne = D[j], W = ne.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      r.copy(W.mapSize);
      const oe = W.getFrameExtents();
      if (r.multiply(oe), s.copy(W.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / oe.x), r.x = s.x * oe.x, W.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / oe.y), r.y = s.y * oe.y, W.mapSize.y = s.y)), W.map === null || F === !0 || H === !0) {
        const Se = this.type !== xn ? { minFilter: Ot, magFilter: Ot } : {};
        W.map !== null && W.map.dispose(), W.map = new si(r.x, r.y, Se), W.map.texture.name = ne.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(W.map), i.clear();
      const pe = W.getViewportCount();
      for (let Se = 0; Se < pe; Se++) {
        const Oe = W.getViewport(Se);
        o.set(
          s.x * Oe.x,
          s.y * Oe.y,
          s.x * Oe.z,
          s.y * Oe.w
        ), U.viewport(o), W.updateMatrices(ne, Se), n = W.getFrustum(), M(A, C, W.camera, ne, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === xn && R(W, C), W.needsUpdate = !1;
    }
    h = this.type, p.needsUpdate = !1, i.setRenderTarget(S, g, T);
  };
  function R(D, A) {
    const C = e.update(v);
    f.defines.VSM_SAMPLES !== D.blurSamples && (f.defines.VSM_SAMPLES = D.blurSamples, m.defines.VSM_SAMPLES = D.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), D.mapPass === null && (D.mapPass = new si(r.x, r.y)), f.uniforms.shadow_pass.value = D.map.texture, f.uniforms.resolution.value = D.mapSize, f.uniforms.radius.value = D.radius, i.setRenderTarget(D.mapPass), i.clear(), i.renderBufferDirect(A, null, C, f, v, null), m.uniforms.shadow_pass.value = D.mapPass.texture, m.uniforms.resolution.value = D.mapSize, m.uniforms.radius.value = D.radius, i.setRenderTarget(D.map), i.clear(), i.renderBufferDirect(A, null, C, m, v, null);
  }
  function y(D, A, C, S) {
    let g = null;
    const T = C.isPointLight === !0 ? D.customDistanceMaterial : D.customDepthMaterial;
    if (T !== void 0)
      g = T;
    else if (g = C.isPointLight === !0 ? l : a, i.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const U = g.uuid, F = A.uuid;
      let H = c[U];
      H === void 0 && (H = {}, c[U] = H);
      let j = H[F];
      j === void 0 && (j = g.clone(), H[F] = j, A.addEventListener("dispose", L)), g = j;
    }
    if (g.visible = A.visible, g.wireframe = A.wireframe, S === xn ? g.side = A.shadowSide !== null ? A.shadowSide : A.side : g.side = A.shadowSide !== null ? A.shadowSide : d[A.side], g.alphaMap = A.alphaMap, g.alphaTest = A.alphaTest, g.map = A.map, g.clipShadows = A.clipShadows, g.clippingPlanes = A.clippingPlanes, g.clipIntersection = A.clipIntersection, g.displacementMap = A.displacementMap, g.displacementScale = A.displacementScale, g.displacementBias = A.displacementBias, g.wireframeLinewidth = A.wireframeLinewidth, g.linewidth = A.linewidth, C.isPointLight === !0 && g.isMeshDistanceMaterial === !0) {
      const U = i.properties.get(g);
      U.light = C;
    }
    return g;
  }
  function M(D, A, C, S, g) {
    if (D.visible === !1) return;
    if (D.layers.test(A.layers) && (D.isMesh || D.isLine || D.isPoints) && (D.castShadow || D.receiveShadow && g === xn) && (!D.frustumCulled || n.intersectsObject(D))) {
      D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, D.matrixWorld);
      const F = e.update(D), H = D.material;
      if (Array.isArray(H)) {
        const j = F.groups;
        for (let k = 0, ne = j.length; k < ne; k++) {
          const W = j[k], oe = H[W.materialIndex];
          if (oe && oe.visible) {
            const pe = y(D, oe, S, g);
            D.onBeforeShadow(i, D, A, C, F, pe, W), i.renderBufferDirect(C, null, F, pe, D, W), D.onAfterShadow(i, D, A, C, F, pe, W);
          }
        }
      } else if (H.visible) {
        const j = y(D, H, S, g);
        D.onBeforeShadow(i, D, A, C, F, j, null), i.renderBufferDirect(C, null, F, j, D, null), D.onAfterShadow(i, D, A, C, F, j, null);
      }
    }
    const U = D.children;
    for (let F = 0, H = U.length; F < H; F++)
      M(U[F], A, C, S, g);
  }
  function L(D) {
    D.target.removeEventListener("dispose", L);
    for (const C in c) {
      const S = c[C], g = D.target.uuid;
      g in S && (S[g].dispose(), delete S[g]);
    }
  }
}
const Vm = {
  [ua]: ha,
  [da]: ma,
  [fa]: _a,
  [Ni]: pa,
  [ha]: ua,
  [ma]: da,
  [_a]: fa,
  [pa]: Ni
};
function Gm(i, e) {
  function t() {
    let I = !1;
    const ue = new ut();
    let X = null;
    const Z = new ut(0, 0, 0, 0);
    return {
      setMask: function(de) {
        X !== de && !I && (i.colorMask(de, de, de, de), X = de);
      },
      setLocked: function(de) {
        I = de;
      },
      setClear: function(de, he, Ue, ot, yt) {
        yt === !0 && (de *= ot, he *= ot, Ue *= ot), ue.set(de, he, Ue, ot), Z.equals(ue) === !1 && (i.clearColor(de, he, Ue, ot), Z.copy(ue));
      },
      reset: function() {
        I = !1, X = null, Z.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let I = !1, ue = !1, X = null, Z = null, de = null;
    return {
      setReversed: function(he) {
        if (ue !== he) {
          const Ue = e.get("EXT_clip_control");
          he ? Ue.clipControlEXT(Ue.LOWER_LEFT_EXT, Ue.ZERO_TO_ONE_EXT) : Ue.clipControlEXT(Ue.LOWER_LEFT_EXT, Ue.NEGATIVE_ONE_TO_ONE_EXT), ue = he;
          const ot = de;
          de = null, this.setClear(ot);
        }
      },
      getReversed: function() {
        return ue;
      },
      setTest: function(he) {
        he ? ae(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
      },
      setMask: function(he) {
        X !== he && !I && (i.depthMask(he), X = he);
      },
      setFunc: function(he) {
        if (ue && (he = Vm[he]), Z !== he) {
          switch (he) {
            case ua:
              i.depthFunc(i.NEVER);
              break;
            case ha:
              i.depthFunc(i.ALWAYS);
              break;
            case da:
              i.depthFunc(i.LESS);
              break;
            case Ni:
              i.depthFunc(i.LEQUAL);
              break;
            case fa:
              i.depthFunc(i.EQUAL);
              break;
            case pa:
              i.depthFunc(i.GEQUAL);
              break;
            case ma:
              i.depthFunc(i.GREATER);
              break;
            case _a:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Z = he;
        }
      },
      setLocked: function(he) {
        I = he;
      },
      setClear: function(he) {
        de !== he && (ue && (he = 1 - he), i.clearDepth(he), de = he);
      },
      reset: function() {
        I = !1, X = null, Z = null, de = null, ue = !1;
      }
    };
  }
  function r() {
    let I = !1, ue = null, X = null, Z = null, de = null, he = null, Ue = null, ot = null, yt = null;
    return {
      setTest: function(Ke) {
        I || (Ke ? ae(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
      },
      setMask: function(Ke) {
        ue !== Ke && !I && (i.stencilMask(Ke), ue = Ke);
      },
      setFunc: function(Ke, jt, dn) {
        (X !== Ke || Z !== jt || de !== dn) && (i.stencilFunc(Ke, jt, dn), X = Ke, Z = jt, de = dn);
      },
      setOp: function(Ke, jt, dn) {
        (he !== Ke || Ue !== jt || ot !== dn) && (i.stencilOp(Ke, jt, dn), he = Ke, Ue = jt, ot = dn);
      },
      setLocked: function(Ke) {
        I = Ke;
      },
      setClear: function(Ke) {
        yt !== Ke && (i.clearStencil(Ke), yt = Ke);
      },
      reset: function() {
        I = !1, ue = null, X = null, Z = null, de = null, he = null, Ue = null, ot = null, yt = null;
      }
    };
  }
  const s = new t(), o = new n(), a = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, v = !1, p = null, h = null, R = null, y = null, M = null, L = null, D = null, A = new Ae(0, 0, 0), C = 0, S = !1, g = null, T = null, U = null, F = null, H = null;
  const j = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let k = !1, ne = 0;
  const W = i.getParameter(i.VERSION);
  W.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(W)[1]), k = ne >= 1) : W.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(W)[1]), k = ne >= 2);
  let oe = null, pe = {};
  const Se = i.getParameter(i.SCISSOR_BOX), Oe = i.getParameter(i.VIEWPORT), Ze = new ut().fromArray(Se), Y = new ut().fromArray(Oe);
  function re(I, ue, X, Z) {
    const de = new Uint8Array(4), he = i.createTexture();
    i.bindTexture(I, he), i.texParameteri(I, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(I, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ue = 0; Ue < X; Ue++)
      I === i.TEXTURE_3D || I === i.TEXTURE_2D_ARRAY ? i.texImage3D(ue, 0, i.RGBA, 1, 1, Z, 0, i.RGBA, i.UNSIGNED_BYTE, de) : i.texImage2D(ue + Ue, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, de);
    return he;
  }
  const ge = {};
  ge[i.TEXTURE_2D] = re(i.TEXTURE_2D, i.TEXTURE_2D, 1), ge[i.TEXTURE_CUBE_MAP] = re(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ge[i.TEXTURE_2D_ARRAY] = re(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ge[i.TEXTURE_3D] = re(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ae(i.DEPTH_TEST), o.setFunc(Ni), ke(!1), Ge(xo), ae(i.CULL_FACE), P(zn);
  function ae(I) {
    u[I] !== !0 && (i.enable(I), u[I] = !0);
  }
  function ye(I) {
    u[I] !== !1 && (i.disable(I), u[I] = !1);
  }
  function We(I, ue) {
    return d[I] !== ue ? (i.bindFramebuffer(I, ue), d[I] = ue, I === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = ue), I === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = ue), !0) : !1;
  }
  function Re(I, ue) {
    let X = m, Z = !1;
    if (I) {
      X = f.get(ue), X === void 0 && (X = [], f.set(ue, X));
      const de = I.textures;
      if (X.length !== de.length || X[0] !== i.COLOR_ATTACHMENT0) {
        for (let he = 0, Ue = de.length; he < Ue; he++)
          X[he] = i.COLOR_ATTACHMENT0 + he;
        X.length = de.length, Z = !0;
      }
    } else
      X[0] !== i.BACK && (X[0] = i.BACK, Z = !0);
    Z && i.drawBuffers(X);
  }
  function st(I) {
    return _ !== I ? (i.useProgram(I), _ = I, !0) : !1;
  }
  const tt = {
    [Qn]: i.FUNC_ADD,
    [Bc]: i.FUNC_SUBTRACT,
    [zc]: i.FUNC_REVERSE_SUBTRACT
  };
  tt[Hc] = i.MIN, tt[Vc] = i.MAX;
  const ze = {
    [Gc]: i.ZERO,
    [kc]: i.ONE,
    [Wc]: i.SRC_COLOR,
    [la]: i.SRC_ALPHA,
    [$c]: i.SRC_ALPHA_SATURATE,
    [Zc]: i.DST_COLOR,
    [Yc]: i.DST_ALPHA,
    [Xc]: i.ONE_MINUS_SRC_COLOR,
    [ca]: i.ONE_MINUS_SRC_ALPHA,
    [jc]: i.ONE_MINUS_DST_COLOR,
    [qc]: i.ONE_MINUS_DST_ALPHA,
    [Kc]: i.CONSTANT_COLOR,
    [Jc]: i.ONE_MINUS_CONSTANT_COLOR,
    [Qc]: i.CONSTANT_ALPHA,
    [eu]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function P(I, ue, X, Z, de, he, Ue, ot, yt, Ke) {
    if (I === zn) {
      v === !0 && (ye(i.BLEND), v = !1);
      return;
    }
    if (v === !1 && (ae(i.BLEND), v = !0), I !== Oc) {
      if (I !== p || Ke !== S) {
        if ((h !== Qn || M !== Qn) && (i.blendEquation(i.FUNC_ADD), h = Qn, M = Qn), Ke)
          switch (I) {
            case Ii:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case So:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Mo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Eo:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case Ii:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case So:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Mo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Eo:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        R = null, y = null, L = null, D = null, A.set(0, 0, 0), C = 0, p = I, S = Ke;
      }
      return;
    }
    de = de || ue, he = he || X, Ue = Ue || Z, (ue !== h || de !== M) && (i.blendEquationSeparate(tt[ue], tt[de]), h = ue, M = de), (X !== R || Z !== y || he !== L || Ue !== D) && (i.blendFuncSeparate(ze[X], ze[Z], ze[he], ze[Ue]), R = X, y = Z, L = he, D = Ue), (ot.equals(A) === !1 || yt !== C) && (i.blendColor(ot.r, ot.g, ot.b, yt), A.copy(ot), C = yt), p = I, S = !1;
  }
  function wt(I, ue) {
    I.side === En ? ye(i.CULL_FACE) : ae(i.CULL_FACE);
    let X = I.side === Ft;
    ue && (X = !X), ke(X), I.blending === Ii && I.transparent === !1 ? P(zn) : P(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha), o.setFunc(I.depthFunc), o.setTest(I.depthTest), o.setMask(I.depthWrite), s.setMask(I.colorWrite);
    const Z = I.stencilWrite;
    a.setTest(Z), Z && (a.setMask(I.stencilWriteMask), a.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), a.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), Qe(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? ae(i.SAMPLE_ALPHA_TO_COVERAGE) : ye(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ke(I) {
    g !== I && (I ? i.frontFace(i.CW) : i.frontFace(i.CCW), g = I);
  }
  function Ge(I) {
    I !== Uc ? (ae(i.CULL_FACE), I !== T && (I === xo ? i.cullFace(i.BACK) : I === Nc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ye(i.CULL_FACE), T = I;
  }
  function ve(I) {
    I !== U && (k && i.lineWidth(I), U = I);
  }
  function Qe(I, ue, X) {
    I ? (ae(i.POLYGON_OFFSET_FILL), (F !== ue || H !== X) && (i.polygonOffset(ue, X), F = ue, H = X)) : ye(i.POLYGON_OFFSET_FILL);
  }
  function xe(I) {
    I ? ae(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function b(I) {
    I === void 0 && (I = i.TEXTURE0 + j - 1), oe !== I && (i.activeTexture(I), oe = I);
  }
  function x(I, ue, X) {
    X === void 0 && (oe === null ? X = i.TEXTURE0 + j - 1 : X = oe);
    let Z = pe[X];
    Z === void 0 && (Z = { type: void 0, texture: void 0 }, pe[X] = Z), (Z.type !== I || Z.texture !== ue) && (oe !== X && (i.activeTexture(X), oe = X), i.bindTexture(I, ue || ge[I]), Z.type = I, Z.texture = ue);
  }
  function z() {
    const I = pe[oe];
    I !== void 0 && I.type !== void 0 && (i.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function q() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function $() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function w() {
    try {
      i.texSubImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function J() {
    try {
      i.texSubImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ee() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ie() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Le() {
    try {
      i.texStorage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Q() {
    try {
      i.texStorage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function fe() {
    try {
      i.texImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function we() {
    try {
      i.texImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Me(I) {
    Ze.equals(I) === !1 && (i.scissor(I.x, I.y, I.z, I.w), Ze.copy(I));
  }
  function le(I) {
    Y.equals(I) === !1 && (i.viewport(I.x, I.y, I.z, I.w), Y.copy(I));
  }
  function He(I, ue) {
    let X = c.get(ue);
    X === void 0 && (X = /* @__PURE__ */ new WeakMap(), c.set(ue, X));
    let Z = X.get(I);
    Z === void 0 && (Z = i.getUniformBlockIndex(ue, I.name), X.set(I, Z));
  }
  function Be(I, ue) {
    const Z = c.get(ue).get(I);
    l.get(ue) !== Z && (i.uniformBlockBinding(ue, Z, I.__bindingPointIndex), l.set(ue, Z));
  }
  function et() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), o.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, oe = null, pe = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), m = [], _ = null, v = !1, p = null, h = null, R = null, y = null, M = null, L = null, D = null, A = new Ae(0, 0, 0), C = 0, S = !1, g = null, T = null, U = null, F = null, H = null, Ze.set(0, 0, i.canvas.width, i.canvas.height), Y.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), o.reset(), a.reset();
  }
  return {
    buffers: {
      color: s,
      depth: o,
      stencil: a
    },
    enable: ae,
    disable: ye,
    bindFramebuffer: We,
    drawBuffers: Re,
    useProgram: st,
    setBlending: P,
    setMaterial: wt,
    setFlipSided: ke,
    setCullFace: Ge,
    setLineWidth: ve,
    setPolygonOffset: Qe,
    setScissorTest: xe,
    activeTexture: b,
    bindTexture: x,
    unbindTexture: z,
    compressedTexImage2D: q,
    compressedTexImage3D: $,
    texImage2D: fe,
    texImage3D: we,
    updateUBOMapping: He,
    uniformBlockBinding: Be,
    texStorage2D: Le,
    texStorage3D: Q,
    texSubImage2D: w,
    texSubImage3D: J,
    compressedTexSubImage2D: ee,
    compressedTexSubImage3D: ie,
    scissor: Me,
    viewport: le,
    reset: et
  };
}
function km(i, e, t, n, r, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new be(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(b, x) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(b, x)
    ) : fr("canvas");
  }
  function v(b, x, z) {
    let q = 1;
    const $ = xe(b);
    if (($.width > z || $.height > z) && (q = z / Math.max($.width, $.height)), q < 1)
      if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
        const w = Math.floor(q * $.width), J = Math.floor(q * $.height);
        d === void 0 && (d = _(w, J));
        const ee = x ? _(w, J) : d;
        return ee.width = w, ee.height = J, ee.getContext("2d").drawImage(b, 0, 0, w, J), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + w + "x" + J + ")."), ee;
      } else
        return "data" in b && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), b;
    return b;
  }
  function p(b) {
    return b.generateMipmaps;
  }
  function h(b) {
    i.generateMipmap(b);
  }
  function R(b) {
    return b.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? i.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function y(b, x, z, q, $ = !1) {
    if (b !== null) {
      if (i[b] !== void 0) return i[b];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let w = x;
    if (x === i.RED && (z === i.FLOAT && (w = i.R32F), z === i.HALF_FLOAT && (w = i.R16F), z === i.UNSIGNED_BYTE && (w = i.R8)), x === i.RED_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.R8UI), z === i.UNSIGNED_SHORT && (w = i.R16UI), z === i.UNSIGNED_INT && (w = i.R32UI), z === i.BYTE && (w = i.R8I), z === i.SHORT && (w = i.R16I), z === i.INT && (w = i.R32I)), x === i.RG && (z === i.FLOAT && (w = i.RG32F), z === i.HALF_FLOAT && (w = i.RG16F), z === i.UNSIGNED_BYTE && (w = i.RG8)), x === i.RG_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.RG8UI), z === i.UNSIGNED_SHORT && (w = i.RG16UI), z === i.UNSIGNED_INT && (w = i.RG32UI), z === i.BYTE && (w = i.RG8I), z === i.SHORT && (w = i.RG16I), z === i.INT && (w = i.RG32I)), x === i.RGB_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.RGB8UI), z === i.UNSIGNED_SHORT && (w = i.RGB16UI), z === i.UNSIGNED_INT && (w = i.RGB32UI), z === i.BYTE && (w = i.RGB8I), z === i.SHORT && (w = i.RGB16I), z === i.INT && (w = i.RGB32I)), x === i.RGBA_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.RGBA8UI), z === i.UNSIGNED_SHORT && (w = i.RGBA16UI), z === i.UNSIGNED_INT && (w = i.RGBA32UI), z === i.BYTE && (w = i.RGBA8I), z === i.SHORT && (w = i.RGBA16I), z === i.INT && (w = i.RGBA32I)), x === i.RGB && z === i.UNSIGNED_INT_5_9_9_9_REV && (w = i.RGB9_E5), x === i.RGBA) {
      const J = $ ? us : Ye.getTransfer(q);
      z === i.FLOAT && (w = i.RGBA32F), z === i.HALF_FLOAT && (w = i.RGBA16F), z === i.UNSIGNED_BYTE && (w = J === Je ? i.SRGB8_ALPHA8 : i.RGBA8), z === i.UNSIGNED_SHORT_4_4_4_4 && (w = i.RGBA4), z === i.UNSIGNED_SHORT_5_5_5_1 && (w = i.RGB5_A1);
    }
    return (w === i.R16F || w === i.R32F || w === i.RG16F || w === i.RG32F || w === i.RGBA16F || w === i.RGBA32F) && e.get("EXT_color_buffer_float"), w;
  }
  function M(b, x) {
    let z;
    return b ? x === null || x === ri || x === ur ? z = i.DEPTH24_STENCIL8 : x === rn ? z = i.DEPTH32F_STENCIL8 : x === cr && (z = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === ri || x === ur ? z = i.DEPTH_COMPONENT24 : x === rn ? z = i.DEPTH_COMPONENT32F : x === cr && (z = i.DEPTH_COMPONENT16), z;
  }
  function L(b, x) {
    return p(b) === !0 || b.isFramebufferTexture && b.minFilter !== Ot && b.minFilter !== Vt ? Math.log2(Math.max(x.width, x.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? x.mipmaps.length : 1;
  }
  function D(b) {
    const x = b.target;
    x.removeEventListener("dispose", D), C(x), x.isVideoTexture && u.delete(x);
  }
  function A(b) {
    const x = b.target;
    x.removeEventListener("dispose", A), g(x);
  }
  function C(b) {
    const x = n.get(b);
    if (x.__webglInit === void 0) return;
    const z = b.source, q = f.get(z);
    if (q) {
      const $ = q[x.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && S(b), Object.keys(q).length === 0 && f.delete(z);
    }
    n.remove(b);
  }
  function S(b) {
    const x = n.get(b);
    i.deleteTexture(x.__webglTexture);
    const z = b.source, q = f.get(z);
    delete q[x.__cacheKey], o.memory.textures--;
  }
  function g(b) {
    const x = n.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)), b.isWebGLCubeRenderTarget)
      for (let q = 0; q < 6; q++) {
        if (Array.isArray(x.__webglFramebuffer[q]))
          for (let $ = 0; $ < x.__webglFramebuffer[q].length; $++) i.deleteFramebuffer(x.__webglFramebuffer[q][$]);
        else
          i.deleteFramebuffer(x.__webglFramebuffer[q]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[q]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let q = 0; q < x.__webglFramebuffer.length; q++) i.deleteFramebuffer(x.__webglFramebuffer[q]);
      else
        i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let q = 0; q < x.__webglColorRenderbuffer.length; q++)
          x.__webglColorRenderbuffer[q] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const z = b.textures;
    for (let q = 0, $ = z.length; q < $; q++) {
      const w = n.get(z[q]);
      w.__webglTexture && (i.deleteTexture(w.__webglTexture), o.memory.textures--), n.remove(z[q]);
    }
    n.remove(b);
  }
  let T = 0;
  function U() {
    T = 0;
  }
  function F() {
    const b = T;
    return b >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + r.maxTextures), T += 1, b;
  }
  function H(b) {
    const x = [];
    return x.push(b.wrapS), x.push(b.wrapT), x.push(b.wrapR || 0), x.push(b.magFilter), x.push(b.minFilter), x.push(b.anisotropy), x.push(b.internalFormat), x.push(b.format), x.push(b.type), x.push(b.generateMipmaps), x.push(b.premultiplyAlpha), x.push(b.flipY), x.push(b.unpackAlignment), x.push(b.colorSpace), x.join();
  }
  function j(b, x) {
    const z = n.get(b);
    if (b.isVideoTexture && ve(b), b.isRenderTargetTexture === !1 && b.version > 0 && z.__version !== b.version) {
      const q = b.image;
      if (q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(z, b, x);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function k(b, x) {
    const z = n.get(b);
    if (b.version > 0 && z.__version !== b.version) {
      Y(z, b, x);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, z.__webglTexture, i.TEXTURE0 + x);
  }
  function ne(b, x) {
    const z = n.get(b);
    if (b.version > 0 && z.__version !== b.version) {
      Y(z, b, x);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function W(b, x) {
    const z = n.get(b);
    if (b.version > 0 && z.__version !== b.version) {
      re(z, b, x);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture, i.TEXTURE0 + x);
  }
  const oe = {
    [cs]: i.REPEAT,
    [yn]: i.CLAMP_TO_EDGE,
    [xa]: i.MIRRORED_REPEAT
  }, pe = {
    [Ot]: i.NEAREST,
    [uu]: i.NEAREST_MIPMAP_NEAREST,
    [yr]: i.NEAREST_MIPMAP_LINEAR,
    [Vt]: i.LINEAR,
    [ys]: i.LINEAR_MIPMAP_NEAREST,
    [ii]: i.LINEAR_MIPMAP_LINEAR
  }, Se = {
    [_u]: i.NEVER,
    [Eu]: i.ALWAYS,
    [gu]: i.LESS,
    [nc]: i.LEQUAL,
    [vu]: i.EQUAL,
    [Mu]: i.GEQUAL,
    [xu]: i.GREATER,
    [Su]: i.NOTEQUAL
  };
  function Oe(b, x) {
    if (x.type === rn && e.has("OES_texture_float_linear") === !1 && (x.magFilter === Vt || x.magFilter === ys || x.magFilter === yr || x.magFilter === ii || x.minFilter === Vt || x.minFilter === ys || x.minFilter === yr || x.minFilter === ii) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(b, i.TEXTURE_WRAP_S, oe[x.wrapS]), i.texParameteri(b, i.TEXTURE_WRAP_T, oe[x.wrapT]), (b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY) && i.texParameteri(b, i.TEXTURE_WRAP_R, oe[x.wrapR]), i.texParameteri(b, i.TEXTURE_MAG_FILTER, pe[x.magFilter]), i.texParameteri(b, i.TEXTURE_MIN_FILTER, pe[x.minFilter]), x.compareFunction && (i.texParameteri(b, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(b, i.TEXTURE_COMPARE_FUNC, Se[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === Ot || x.minFilter !== yr && x.minFilter !== ii || x.type === rn && e.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const z = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(b, z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, r.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function Ze(b, x) {
    let z = !1;
    b.__webglInit === void 0 && (b.__webglInit = !0, x.addEventListener("dispose", D));
    const q = x.source;
    let $ = f.get(q);
    $ === void 0 && ($ = {}, f.set(q, $));
    const w = H(x);
    if (w !== b.__cacheKey) {
      $[w] === void 0 && ($[w] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, z = !0), $[w].usedTimes++;
      const J = $[b.__cacheKey];
      J !== void 0 && ($[b.__cacheKey].usedTimes--, J.usedTimes === 0 && S(x)), b.__cacheKey = w, b.__webglTexture = $[w].texture;
    }
    return z;
  }
  function Y(b, x, z) {
    let q = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (q = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (q = i.TEXTURE_3D);
    const $ = Ze(b, x), w = x.source;
    t.bindTexture(q, b.__webglTexture, i.TEXTURE0 + z);
    const J = n.get(w);
    if (w.version !== J.__version || $ === !0) {
      t.activeTexture(i.TEXTURE0 + z);
      const ee = Ye.getPrimaries(Ye.workingColorSpace), ie = x.colorSpace === On ? null : Ye.getPrimaries(x.colorSpace), Le = x.colorSpace === On || ee === ie ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Le);
      let Q = v(x.image, !1, r.maxTextureSize);
      Q = Qe(x, Q);
      const fe = s.convert(x.format, x.colorSpace), we = s.convert(x.type);
      let Me = y(x.internalFormat, fe, we, x.colorSpace, x.isVideoTexture);
      Oe(q, x);
      let le;
      const He = x.mipmaps, Be = x.isVideoTexture !== !0, et = J.__version === void 0 || $ === !0, I = w.dataReady, ue = L(x, Q);
      if (x.isDepthTexture)
        Me = M(x.format === dr, x.type), et && (Be ? t.texStorage2D(i.TEXTURE_2D, 1, Me, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, Me, Q.width, Q.height, 0, fe, we, null));
      else if (x.isDataTexture)
        if (He.length > 0) {
          Be && et && t.texStorage2D(i.TEXTURE_2D, ue, Me, He[0].width, He[0].height);
          for (let X = 0, Z = He.length; X < Z; X++)
            le = He[X], Be ? I && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, le.width, le.height, fe, we, le.data) : t.texImage2D(i.TEXTURE_2D, X, Me, le.width, le.height, 0, fe, we, le.data);
          x.generateMipmaps = !1;
        } else
          Be ? (et && t.texStorage2D(i.TEXTURE_2D, ue, Me, Q.width, Q.height), I && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, fe, we, Q.data)) : t.texImage2D(i.TEXTURE_2D, 0, Me, Q.width, Q.height, 0, fe, we, Q.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Be && et && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, Me, He[0].width, He[0].height, Q.depth);
          for (let X = 0, Z = He.length; X < Z; X++)
            if (le = He[X], x.format !== Gt)
              if (fe !== null)
                if (Be) {
                  if (I)
                    if (x.layerUpdates.size > 0) {
                      const de = Ko(le.width, le.height, x.format, x.type);
                      for (const he of x.layerUpdates) {
                        const Ue = le.data.subarray(
                          he * de / le.data.BYTES_PER_ELEMENT,
                          (he + 1) * de / le.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, he, le.width, le.height, 1, fe, Ue);
                      }
                      x.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, le.width, le.height, Q.depth, fe, le.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, X, Me, le.width, le.height, Q.depth, 0, le.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Be ? I && t.texSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, le.width, le.height, Q.depth, fe, we, le.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, X, Me, le.width, le.height, Q.depth, 0, fe, we, le.data);
        } else {
          Be && et && t.texStorage2D(i.TEXTURE_2D, ue, Me, He[0].width, He[0].height);
          for (let X = 0, Z = He.length; X < Z; X++)
            le = He[X], x.format !== Gt ? fe !== null ? Be ? I && t.compressedTexSubImage2D(i.TEXTURE_2D, X, 0, 0, le.width, le.height, fe, le.data) : t.compressedTexImage2D(i.TEXTURE_2D, X, Me, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? I && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, le.width, le.height, fe, we, le.data) : t.texImage2D(i.TEXTURE_2D, X, Me, le.width, le.height, 0, fe, we, le.data);
        }
      else if (x.isDataArrayTexture)
        if (Be) {
          if (et && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, Me, Q.width, Q.height, Q.depth), I)
            if (x.layerUpdates.size > 0) {
              const X = Ko(Q.width, Q.height, x.format, x.type);
              for (const Z of x.layerUpdates) {
                const de = Q.data.subarray(
                  Z * X / Q.data.BYTES_PER_ELEMENT,
                  (Z + 1) * X / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Z, Q.width, Q.height, 1, fe, we, de);
              }
              x.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, fe, we, Q.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Me, Q.width, Q.height, Q.depth, 0, fe, we, Q.data);
      else if (x.isData3DTexture)
        Be ? (et && t.texStorage3D(i.TEXTURE_3D, ue, Me, Q.width, Q.height, Q.depth), I && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, fe, we, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, Me, Q.width, Q.height, Q.depth, 0, fe, we, Q.data);
      else if (x.isFramebufferTexture) {
        if (et)
          if (Be)
            t.texStorage2D(i.TEXTURE_2D, ue, Me, Q.width, Q.height);
          else {
            let X = Q.width, Z = Q.height;
            for (let de = 0; de < ue; de++)
              t.texImage2D(i.TEXTURE_2D, de, Me, X, Z, 0, fe, we, null), X >>= 1, Z >>= 1;
          }
      } else if (He.length > 0) {
        if (Be && et) {
          const X = xe(He[0]);
          t.texStorage2D(i.TEXTURE_2D, ue, Me, X.width, X.height);
        }
        for (let X = 0, Z = He.length; X < Z; X++)
          le = He[X], Be ? I && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, fe, we, le) : t.texImage2D(i.TEXTURE_2D, X, Me, fe, we, le);
        x.generateMipmaps = !1;
      } else if (Be) {
        if (et) {
          const X = xe(Q);
          t.texStorage2D(i.TEXTURE_2D, ue, Me, X.width, X.height);
        }
        I && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, fe, we, Q);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Me, fe, we, Q);
      p(x) && h(q), J.__version = w.version, x.onUpdate && x.onUpdate(x);
    }
    b.__version = x.version;
  }
  function re(b, x, z) {
    if (x.image.length !== 6) return;
    const q = Ze(b, x), $ = x.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, b.__webglTexture, i.TEXTURE0 + z);
    const w = n.get($);
    if ($.version !== w.__version || q === !0) {
      t.activeTexture(i.TEXTURE0 + z);
      const J = Ye.getPrimaries(Ye.workingColorSpace), ee = x.colorSpace === On ? null : Ye.getPrimaries(x.colorSpace), ie = x.colorSpace === On || J === ee ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ie);
      const Le = x.isCompressedTexture || x.image[0].isCompressedTexture, Q = x.image[0] && x.image[0].isDataTexture, fe = [];
      for (let Z = 0; Z < 6; Z++)
        !Le && !Q ? fe[Z] = v(x.image[Z], !0, r.maxCubemapSize) : fe[Z] = Q ? x.image[Z].image : x.image[Z], fe[Z] = Qe(x, fe[Z]);
      const we = fe[0], Me = s.convert(x.format, x.colorSpace), le = s.convert(x.type), He = y(x.internalFormat, Me, le, x.colorSpace), Be = x.isVideoTexture !== !0, et = w.__version === void 0 || q === !0, I = $.dataReady;
      let ue = L(x, we);
      Oe(i.TEXTURE_CUBE_MAP, x);
      let X;
      if (Le) {
        Be && et && t.texStorage2D(i.TEXTURE_CUBE_MAP, ue, He, we.width, we.height);
        for (let Z = 0; Z < 6; Z++) {
          X = fe[Z].mipmaps;
          for (let de = 0; de < X.length; de++) {
            const he = X[de];
            x.format !== Gt ? Me !== null ? Be ? I && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, 0, 0, he.width, he.height, Me, he.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, He, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? I && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, 0, 0, he.width, he.height, Me, le, he.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, He, he.width, he.height, 0, Me, le, he.data);
          }
        }
      } else {
        if (X = x.mipmaps, Be && et) {
          X.length > 0 && ue++;
          const Z = xe(fe[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ue, He, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (Q) {
            Be ? I && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, fe[Z].width, fe[Z].height, Me, le, fe[Z].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, He, fe[Z].width, fe[Z].height, 0, Me, le, fe[Z].data);
            for (let de = 0; de < X.length; de++) {
              const Ue = X[de].image[Z].image;
              Be ? I && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, 0, 0, Ue.width, Ue.height, Me, le, Ue.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, He, Ue.width, Ue.height, 0, Me, le, Ue.data);
            }
          } else {
            Be ? I && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Me, le, fe[Z]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, He, Me, le, fe[Z]);
            for (let de = 0; de < X.length; de++) {
              const he = X[de];
              Be ? I && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, 0, 0, Me, le, he.image[Z]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, He, Me, le, he.image[Z]);
            }
          }
      }
      p(x) && h(i.TEXTURE_CUBE_MAP), w.__version = $.version, x.onUpdate && x.onUpdate(x);
    }
    b.__version = x.version;
  }
  function ge(b, x, z, q, $, w) {
    const J = s.convert(z.format, z.colorSpace), ee = s.convert(z.type), ie = y(z.internalFormat, J, ee, z.colorSpace), Le = n.get(x), Q = n.get(z);
    if (Q.__renderTarget = x, !Le.__hasExternalTextures) {
      const fe = Math.max(1, x.width >> w), we = Math.max(1, x.height >> w);
      $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? t.texImage3D($, w, ie, fe, we, x.depth, 0, J, ee, null) : t.texImage2D($, w, ie, fe, we, 0, J, ee, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, b), Ge(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, q, $, Q.__webglTexture, 0, ke(x)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, q, $, Q.__webglTexture, w), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ae(b, x, z) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, b), x.depthBuffer) {
      const q = x.depthTexture, $ = q && q.isDepthTexture ? q.type : null, w = M(x.stencilBuffer, $), J = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ee = ke(x);
      Ge(x) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ee, w, x.width, x.height) : z ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ee, w, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, w, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, b);
    } else {
      const q = x.textures;
      for (let $ = 0; $ < q.length; $++) {
        const w = q[$], J = s.convert(w.format, w.colorSpace), ee = s.convert(w.type), ie = y(w.internalFormat, J, ee, w.colorSpace), Le = ke(x);
        z && Ge(x) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Le, ie, x.width, x.height) : Ge(x) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Le, ie, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, ie, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ye(b, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, b), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const q = n.get(x.depthTexture);
    q.__renderTarget = x, (!q.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), j(x.depthTexture, 0);
    const $ = q.__webglTexture, w = ke(x);
    if (x.depthTexture.format === hr)
      Ge(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, w) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else if (x.depthTexture.format === dr)
      Ge(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, w) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function We(b) {
    const x = n.get(b), z = b.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== b.depthTexture) {
      const q = b.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), q) {
        const $ = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, q.removeEventListener("dispose", $);
        };
        q.addEventListener("dispose", $), x.__depthDisposeCallback = $;
      }
      x.__boundDepthTexture = q;
    }
    if (b.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (z) throw new Error("target.depthTexture not supported in Cube render targets");
      ye(x.__webglFramebuffer, b);
    } else if (z) {
      x.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[q]), x.__webglDepthbuffer[q] === void 0)
          x.__webglDepthbuffer[q] = i.createRenderbuffer(), ae(x.__webglDepthbuffer[q], b, !1);
        else {
          const $ = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, w = x.__webglDepthbuffer[q];
          i.bindRenderbuffer(i.RENDERBUFFER, w), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, w);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
      x.__webglDepthbuffer = i.createRenderbuffer(), ae(x.__webglDepthbuffer, b, !1);
    else {
      const q = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, $ = x.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, $), i.framebufferRenderbuffer(i.FRAMEBUFFER, q, i.RENDERBUFFER, $);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Re(b, x, z) {
    const q = n.get(b);
    x !== void 0 && ge(q.__webglFramebuffer, b, b.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), z !== void 0 && We(b);
  }
  function st(b) {
    const x = b.texture, z = n.get(b), q = n.get(x);
    b.addEventListener("dispose", A);
    const $ = b.textures, w = b.isWebGLCubeRenderTarget === !0, J = $.length > 1;
    if (J || (q.__webglTexture === void 0 && (q.__webglTexture = i.createTexture()), q.__version = x.version, o.memory.textures++), w) {
      z.__webglFramebuffer = [];
      for (let ee = 0; ee < 6; ee++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          z.__webglFramebuffer[ee] = [];
          for (let ie = 0; ie < x.mipmaps.length; ie++)
            z.__webglFramebuffer[ee][ie] = i.createFramebuffer();
        } else
          z.__webglFramebuffer[ee] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let ee = 0; ee < x.mipmaps.length; ee++)
          z.__webglFramebuffer[ee] = i.createFramebuffer();
      } else
        z.__webglFramebuffer = i.createFramebuffer();
      if (J)
        for (let ee = 0, ie = $.length; ee < ie; ee++) {
          const Le = n.get($[ee]);
          Le.__webglTexture === void 0 && (Le.__webglTexture = i.createTexture(), o.memory.textures++);
        }
      if (b.samples > 0 && Ge(b) === !1) {
        z.__webglMultisampledFramebuffer = i.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let ee = 0; ee < $.length; ee++) {
          const ie = $[ee];
          z.__webglColorRenderbuffer[ee] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, z.__webglColorRenderbuffer[ee]);
          const Le = s.convert(ie.format, ie.colorSpace), Q = s.convert(ie.type), fe = y(ie.internalFormat, Le, Q, ie.colorSpace, b.isXRRenderTarget === !0), we = ke(b);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, we, fe, b.width, b.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ee, i.RENDERBUFFER, z.__webglColorRenderbuffer[ee]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), b.depthBuffer && (z.__webglDepthRenderbuffer = i.createRenderbuffer(), ae(z.__webglDepthRenderbuffer, b, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (w) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture), Oe(i.TEXTURE_CUBE_MAP, x);
      for (let ee = 0; ee < 6; ee++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let ie = 0; ie < x.mipmaps.length; ie++)
            ge(z.__webglFramebuffer[ee][ie], b, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, ie);
        else
          ge(z.__webglFramebuffer[ee], b, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0);
      p(x) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (J) {
      for (let ee = 0, ie = $.length; ee < ie; ee++) {
        const Le = $[ee], Q = n.get(Le);
        t.bindTexture(i.TEXTURE_2D, Q.__webglTexture), Oe(i.TEXTURE_2D, Le), ge(z.__webglFramebuffer, b, Le, i.COLOR_ATTACHMENT0 + ee, i.TEXTURE_2D, 0), p(Le) && h(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ee = i.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (ee = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ee, q.__webglTexture), Oe(ee, x), x.mipmaps && x.mipmaps.length > 0)
        for (let ie = 0; ie < x.mipmaps.length; ie++)
          ge(z.__webglFramebuffer[ie], b, x, i.COLOR_ATTACHMENT0, ee, ie);
      else
        ge(z.__webglFramebuffer, b, x, i.COLOR_ATTACHMENT0, ee, 0);
      p(x) && h(ee), t.unbindTexture();
    }
    b.depthBuffer && We(b);
  }
  function tt(b) {
    const x = b.textures;
    for (let z = 0, q = x.length; z < q; z++) {
      const $ = x[z];
      if (p($)) {
        const w = R(b), J = n.get($).__webglTexture;
        t.bindTexture(w, J), h(w), t.unbindTexture();
      }
    }
  }
  const ze = [], P = [];
  function wt(b) {
    if (b.samples > 0) {
      if (Ge(b) === !1) {
        const x = b.textures, z = b.width, q = b.height;
        let $ = i.COLOR_BUFFER_BIT;
        const w = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, J = n.get(b), ee = x.length > 1;
        if (ee)
          for (let ie = 0; ie < x.length; ie++)
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, J.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglFramebuffer);
        for (let ie = 0; ie < x.length; ie++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)), ee) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, J.__webglColorRenderbuffer[ie]);
            const Le = n.get(x[ie]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Le, 0);
          }
          i.blitFramebuffer(0, 0, z, q, 0, 0, z, q, $, i.NEAREST), l === !0 && (ze.length = 0, P.length = 0, ze.push(i.COLOR_ATTACHMENT0 + ie), b.depthBuffer && b.resolveDepthBuffer === !1 && (ze.push(w), P.push(w), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, P)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ze));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ee)
          for (let ie = 0; ie < x.length; ie++) {
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, J.__webglColorRenderbuffer[ie]);
            const Le = n.get(x[ie]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, Le, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && l) {
        const x = b.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function ke(b) {
    return Math.min(r.maxSamples, b.samples);
  }
  function Ge(b) {
    const x = n.get(b);
    return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function ve(b) {
    const x = o.render.frame;
    u.get(b) !== x && (u.set(b, x), b.update());
  }
  function Qe(b, x) {
    const z = b.colorSpace, q = b.format, $ = b.type;
    return b.isCompressedTexture === !0 || b.isVideoTexture === !0 || z !== Bi && z !== On && (Ye.getTransfer(z) === Je ? (q !== Gt || $ !== wn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", z)), x;
  }
  function xe(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (c.width = b.naturalWidth || b.width, c.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (c.width = b.displayWidth, c.height = b.displayHeight) : (c.width = b.width, c.height = b.height), c;
  }
  this.allocateTextureUnit = F, this.resetTextureUnits = U, this.setTexture2D = j, this.setTexture2DArray = k, this.setTexture3D = ne, this.setTextureCube = W, this.rebindTextures = Re, this.setupRenderTarget = st, this.updateRenderTargetMipmap = tt, this.updateMultisampleRenderTarget = wt, this.setupDepthRenderbuffer = We, this.setupFrameBufferTexture = ge, this.useMultisampledRTT = Ge;
}
function Wm(i, e) {
  function t(n, r = On) {
    let s;
    const o = Ye.getTransfer(r);
    if (n === wn) return i.UNSIGNED_BYTE;
    if (n === Qa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === eo) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Zl) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Yl) return i.BYTE;
    if (n === ql) return i.SHORT;
    if (n === cr) return i.UNSIGNED_SHORT;
    if (n === Ja) return i.INT;
    if (n === ri) return i.UNSIGNED_INT;
    if (n === rn) return i.FLOAT;
    if (n === _r) return i.HALF_FLOAT;
    if (n === jl) return i.ALPHA;
    if (n === $l) return i.RGB;
    if (n === Gt) return i.RGBA;
    if (n === Kl) return i.LUMINANCE;
    if (n === Jl) return i.LUMINANCE_ALPHA;
    if (n === hr) return i.DEPTH_COMPONENT;
    if (n === dr) return i.DEPTH_STENCIL;
    if (n === Ql) return i.RED;
    if (n === to) return i.RED_INTEGER;
    if (n === ec) return i.RG;
    if (n === no) return i.RG_INTEGER;
    if (n === io) return i.RGBA_INTEGER;
    if (n === ts || n === ns || n === is || n === rs)
      if (o === Je)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === ts) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ns) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === is) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === rs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === ts) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ns) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === is) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === rs) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Sa || n === Ma || n === Ea || n === ya)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === Sa) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ma) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ea) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === ya) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ta || n === ba || n === Aa)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Ta || n === ba) return o === Je ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Aa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === wa || n === Ra || n === Ca || n === Pa || n === Da || n === La || n === Ia || n === Ua || n === Na || n === Fa || n === Oa || n === Ba || n === za || n === Ha)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === wa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ra) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ca) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Pa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Da) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === La) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ia) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ua) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Na) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Fa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Oa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ba) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === za) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Ha) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === ss || n === Va || n === Ga)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === ss) return o === Je ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Va) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Ga) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === tc || n === ka || n === Wa || n === Xa)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === ss) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === ka) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Wa) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Xa) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === ur ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Xm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Ym = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class qm {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t, n) {
    if (this.texture === null) {
      const r = new Et(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new At({
        vertexShader: Xm,
        fragmentShader: Ym,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Pt(new Hi(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?Texture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class Zm extends ai {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, u = null, d = null, f = null, m = null, _ = null;
    const v = new qm(), p = t.getContextAttributes();
    let h = null, R = null;
    const y = [], M = [], L = new be();
    let D = null;
    const A = new tn();
    A.viewport = new ut();
    const C = new tn();
    C.viewport = new ut();
    const S = [A, C], g = new fh();
    let T = null, U = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let re = y[Y];
      return re === void 0 && (re = new Xs(), y[Y] = re), re.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let re = y[Y];
      return re === void 0 && (re = new Xs(), y[Y] = re), re.getGripSpace();
    }, this.getHand = function(Y) {
      let re = y[Y];
      return re === void 0 && (re = new Xs(), y[Y] = re), re.getHandSpace();
    };
    function F(Y) {
      const re = M.indexOf(Y.inputSource);
      if (re === -1)
        return;
      const ge = y[re];
      ge !== void 0 && (ge.update(Y.inputSource, Y.frame, c || o), ge.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function H() {
      r.removeEventListener("select", F), r.removeEventListener("selectstart", F), r.removeEventListener("selectend", F), r.removeEventListener("squeeze", F), r.removeEventListener("squeezestart", F), r.removeEventListener("squeezeend", F), r.removeEventListener("end", H), r.removeEventListener("inputsourceschange", j);
      for (let Y = 0; Y < y.length; Y++) {
        const re = M[Y];
        re !== null && (M[Y] = null, y[Y].disconnect(re));
      }
      T = null, U = null, v.reset(), e.setRenderTarget(h), m = null, f = null, d = null, r = null, R = null, Ze.stop(), n.isPresenting = !1, e.setPixelRatio(D), e.setSize(L.width, L.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      s = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      a = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Y) {
      if (r = Y, r !== null) {
        if (h = e.getRenderTarget(), r.addEventListener("select", F), r.addEventListener("selectstart", F), r.addEventListener("selectend", F), r.addEventListener("squeeze", F), r.addEventListener("squeezestart", F), r.addEventListener("squeezeend", F), r.addEventListener("end", H), r.addEventListener("inputsourceschange", j), p.xrCompatible !== !0 && await t.makeXRCompatible(), D = e.getPixelRatio(), e.getSize(L), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ge = null, ae = null, ye = null;
          p.depth && (ye = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ge = p.stencil ? dr : hr, ae = p.stencil ? ur : ri);
          const We = {
            colorFormat: t.RGBA8,
            depthFormat: ye,
            scaleFactor: s
          };
          d = new XRWebGLBinding(r, t), f = d.createProjectionLayer(We), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), R = new si(
            f.textureWidth,
            f.textureHeight,
            {
              format: Gt,
              type: wn,
              depthTexture: new pc(f.textureWidth, f.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, ge),
              stencilBuffer: p.stencil,
              colorSpace: e.outputColorSpace,
              samples: p.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const ge = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, ge), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), R = new si(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Gt,
              type: wn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: p.stencil,
              resolveDepthBuffer: m.ignoreDepthValues === !1,
              resolveStencilBuffer: m.ignoreDepthValues === !1
            }
          );
        }
        R.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), Ze.setContext(r), Ze.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return v.getDepthTexture();
    };
    function j(Y) {
      for (let re = 0; re < Y.removed.length; re++) {
        const ge = Y.removed[re], ae = M.indexOf(ge);
        ae >= 0 && (M[ae] = null, y[ae].disconnect(ge));
      }
      for (let re = 0; re < Y.added.length; re++) {
        const ge = Y.added[re];
        let ae = M.indexOf(ge);
        if (ae === -1) {
          for (let We = 0; We < y.length; We++)
            if (We >= M.length) {
              M.push(ge), ae = We;
              break;
            } else if (M[We] === null) {
              M[We] = ge, ae = We;
              break;
            }
          if (ae === -1) break;
        }
        const ye = y[ae];
        ye && ye.connect(ge);
      }
    }
    const k = new B(), ne = new B();
    function W(Y, re, ge) {
      k.setFromMatrixPosition(re.matrixWorld), ne.setFromMatrixPosition(ge.matrixWorld);
      const ae = k.distanceTo(ne), ye = re.projectionMatrix.elements, We = ge.projectionMatrix.elements, Re = ye[14] / (ye[10] - 1), st = ye[14] / (ye[10] + 1), tt = (ye[9] + 1) / ye[5], ze = (ye[9] - 1) / ye[5], P = (ye[8] - 1) / ye[0], wt = (We[8] + 1) / We[0], ke = Re * P, Ge = Re * wt, ve = ae / (-P + wt), Qe = ve * -P;
      if (re.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(Qe), Y.translateZ(ve), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), ye[10] === -1)
        Y.projectionMatrix.copy(re.projectionMatrix), Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);
      else {
        const xe = Re + ve, b = st + ve, x = ke - Qe, z = Ge + (ae - Qe), q = tt * st / b * xe, $ = ze * st / b * xe;
        Y.projectionMatrix.makePerspective(x, z, q, $, xe, b), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function oe(Y, re) {
      re === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(re.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (r === null) return;
      let re = Y.near, ge = Y.far;
      v.texture !== null && (v.depthNear > 0 && (re = v.depthNear), v.depthFar > 0 && (ge = v.depthFar)), g.near = C.near = A.near = re, g.far = C.far = A.far = ge, (T !== g.near || U !== g.far) && (r.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), T = g.near, U = g.far), A.layers.mask = Y.layers.mask | 2, C.layers.mask = Y.layers.mask | 4, g.layers.mask = A.layers.mask | C.layers.mask;
      const ae = Y.parent, ye = g.cameras;
      oe(g, ae);
      for (let We = 0; We < ye.length; We++)
        oe(ye[We], ae);
      ye.length === 2 ? W(g, A, C) : g.projectionMatrix.copy(A.projectionMatrix), pe(Y, g, ae);
    };
    function pe(Y, re, ge) {
      ge === null ? Y.matrix.copy(re.matrixWorld) : (Y.matrix.copy(ge.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(re.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(re.projectionMatrix), Y.projectionMatrixInverse.copy(re.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = Ya * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return l;
    }, this.setFoveation = function(Y) {
      l = Y, f !== null && (f.fixedFoveation = Y), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return v.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return v.getMesh(g);
    };
    let Se = null;
    function Oe(Y, re) {
      if (u = re.getViewerPose(c || o), _ = re, u !== null) {
        const ge = u.views;
        m !== null && (e.setRenderTargetFramebuffer(R, m.framebuffer), e.setRenderTarget(R));
        let ae = !1;
        ge.length !== g.cameras.length && (g.cameras.length = 0, ae = !0);
        for (let Re = 0; Re < ge.length; Re++) {
          const st = ge[Re];
          let tt = null;
          if (m !== null)
            tt = m.getViewport(st);
          else {
            const P = d.getViewSubImage(f, st);
            tt = P.viewport, Re === 0 && (e.setRenderTargetTextures(
              R,
              P.colorTexture,
              P.depthStencilTexture
            ), e.setRenderTarget(R));
          }
          let ze = S[Re];
          ze === void 0 && (ze = new tn(), ze.layers.enable(Re), ze.viewport = new ut(), S[Re] = ze), ze.matrix.fromArray(st.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(st.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(tt.x, tt.y, tt.width, tt.height), Re === 0 && (g.matrix.copy(ze.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), ae === !0 && g.cameras.push(ze);
        }
        const ye = r.enabledFeatures;
        if (ye && ye.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && d) {
          const Re = d.getDepthInformation(ge[0]);
          Re && Re.isValid && Re.texture && v.init(e, Re, r.renderState);
        }
      }
      for (let ge = 0; ge < y.length; ge++) {
        const ae = M[ge], ye = y[ge];
        ae !== null && ye !== void 0 && ye.update(ae, re, c || o);
      }
      Se && Se(Y, re), re.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: re }), _ = null;
    }
    const Ze = new mc();
    Ze.setAnimationLoop(Oe), this.setAnimationLoop = function(Y) {
      Se = Y;
    }, this.dispose = function() {
    };
  }
}
const jn = /* @__PURE__ */ new Rn(), jm = /* @__PURE__ */ new at();
function $m(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, hc(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, R, y, M) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), d(p, h)) : h.isMeshPhongMaterial ? (s(p, h), u(p, h)) : h.isMeshStandardMaterial ? (s(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, M)) : h.isMeshMatcapMaterial ? (s(p, h), _(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), v(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h)) : h.isPointsMaterial ? l(p, h, R, y) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === Ft && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === Ft && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const R = e.get(h), y = R.envMap, M = R.envMapRotation;
    y && (p.envMap.value = y, jn.copy(M), jn.x *= -1, jn.y *= -1, jn.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (jn.y *= -1, jn.z *= -1), p.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(jn)), p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function a(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, R, y) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * R, p.scale.value = y * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, R) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === Ft && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = R.texture, p.transmissionSamplerSize.value.set(R.width, R.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function v(p, h) {
    const R = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(R.matrixWorld), p.nearDistance.value = R.shadow.camera.near, p.farDistance.value = R.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Km(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(R, y) {
    const M = y.program;
    n.uniformBlockBinding(R, M);
  }
  function c(R, y) {
    let M = r[R.id];
    M === void 0 && (_(R), M = u(R), r[R.id] = M, R.addEventListener("dispose", p));
    const L = y.program;
    n.updateUBOMapping(R, L);
    const D = e.render.frame;
    s[R.id] !== D && (f(R), s[R.id] = D);
  }
  function u(R) {
    const y = d();
    R.__bindingPointIndex = y;
    const M = i.createBuffer(), L = R.__size, D = R.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, M), i.bufferData(i.UNIFORM_BUFFER, L, D), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, M), M;
  }
  function d() {
    for (let R = 0; R < a; R++)
      if (o.indexOf(R) === -1)
        return o.push(R), R;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(R) {
    const y = r[R.id], M = R.uniforms, L = R.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let D = 0, A = M.length; D < A; D++) {
      const C = Array.isArray(M[D]) ? M[D] : [M[D]];
      for (let S = 0, g = C.length; S < g; S++) {
        const T = C[S];
        if (m(T, D, S, L) === !0) {
          const U = T.__offset, F = Array.isArray(T.value) ? T.value : [T.value];
          let H = 0;
          for (let j = 0; j < F.length; j++) {
            const k = F[j], ne = v(k);
            typeof k == "number" || typeof k == "boolean" ? (T.__data[0] = k, i.bufferSubData(i.UNIFORM_BUFFER, U + H, T.__data)) : k.isMatrix3 ? (T.__data[0] = k.elements[0], T.__data[1] = k.elements[1], T.__data[2] = k.elements[2], T.__data[3] = 0, T.__data[4] = k.elements[3], T.__data[5] = k.elements[4], T.__data[6] = k.elements[5], T.__data[7] = 0, T.__data[8] = k.elements[6], T.__data[9] = k.elements[7], T.__data[10] = k.elements[8], T.__data[11] = 0) : (k.toArray(T.__data, H), H += ne.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, U, T.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(R, y, M, L) {
    const D = R.value, A = y + "_" + M;
    if (L[A] === void 0)
      return typeof D == "number" || typeof D == "boolean" ? L[A] = D : L[A] = D.clone(), !0;
    {
      const C = L[A];
      if (typeof D == "number" || typeof D == "boolean") {
        if (C !== D)
          return L[A] = D, !0;
      } else if (C.equals(D) === !1)
        return C.copy(D), !0;
    }
    return !1;
  }
  function _(R) {
    const y = R.uniforms;
    let M = 0;
    const L = 16;
    for (let A = 0, C = y.length; A < C; A++) {
      const S = Array.isArray(y[A]) ? y[A] : [y[A]];
      for (let g = 0, T = S.length; g < T; g++) {
        const U = S[g], F = Array.isArray(U.value) ? U.value : [U.value];
        for (let H = 0, j = F.length; H < j; H++) {
          const k = F[H], ne = v(k), W = M % L, oe = W % ne.boundary, pe = W + oe;
          M += oe, pe !== 0 && L - pe < ne.storage && (M += L - pe), U.__data = new Float32Array(ne.storage / Float32Array.BYTES_PER_ELEMENT), U.__offset = M, M += ne.storage;
        }
      }
    }
    const D = M % L;
    return D > 0 && (M += L - D), R.__size = M, R.__cache = {}, this;
  }
  function v(R) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof R == "number" || typeof R == "boolean" ? (y.boundary = 4, y.storage = 4) : R.isVector2 ? (y.boundary = 8, y.storage = 8) : R.isVector3 || R.isColor ? (y.boundary = 16, y.storage = 12) : R.isVector4 ? (y.boundary = 16, y.storage = 16) : R.isMatrix3 ? (y.boundary = 48, y.storage = 48) : R.isMatrix4 ? (y.boundary = 64, y.storage = 64) : R.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", R), y;
  }
  function p(R) {
    const y = R.target;
    y.removeEventListener("dispose", p);
    const M = o.indexOf(y.__bindingPointIndex);
    o.splice(M, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id];
  }
  function h() {
    for (const R in r)
      i.deleteBuffer(r[R]);
    o = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class Jm {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = bu(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reverseDepthBuffer: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else
      m = o;
    const _ = new Uint32Array(4), v = new Int32Array(4);
    let p = null, h = null;
    const R = [], y = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Hn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const M = this;
    let L = !1;
    this._outputColorSpace = Zt;
    let D = 0, A = 0, C = null, S = -1, g = null;
    const T = new ut(), U = new ut();
    let F = null;
    const H = new Ae(0);
    let j = 0, k = t.width, ne = t.height, W = 1, oe = null, pe = null;
    const Se = new ut(0, 0, k, ne), Oe = new ut(0, 0, k, ne);
    let Ze = !1;
    const Y = new ao();
    let re = !1, ge = !1;
    const ae = new at(), ye = new at(), We = new B(), Re = new ut(), st = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let tt = !1;
    function ze() {
      return C === null ? W : 1;
    }
    let P = n;
    function wt(E, N) {
      return t.getContext(E, N);
    }
    try {
      const E = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ja}`), t.addEventListener("webglcontextlost", Z, !1), t.addEventListener("webglcontextrestored", de, !1), t.addEventListener("webglcontextcreationerror", he, !1), P === null) {
        const N = "webgl2";
        if (P = wt(N, E), P === null)
          throw wt(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let ke, Ge, ve, Qe, xe, b, x, z, q, $, w, J, ee, ie, Le, Q, fe, we, Me, le, He, Be, et, I;
    function ue() {
      ke = new lp(P), ke.init(), Be = new Wm(P, ke), Ge = new tp(P, ke, e, Be), ve = new Gm(P, ke), Ge.reverseDepthBuffer && f && ve.buffers.depth.setReversed(!0), Qe = new hp(P), xe = new Cm(), b = new km(P, ke, ve, xe, Ge, Be, Qe), x = new ip(M), z = new op(M), q = new _h(P), et = new Qf(P, q), $ = new cp(P, q, Qe, et), w = new fp(P, $, q, Qe), Me = new dp(P, Ge, b), Q = new np(xe), J = new Rm(M, x, z, ke, Ge, et, Q), ee = new $m(M, xe), ie = new Dm(), Le = new Om(ke), we = new Jf(M, x, z, ve, w, m, l), fe = new Hm(M, w, Ge), I = new Km(P, Qe, Ge, ve), le = new ep(P, ke, Qe), He = new up(P, ke, Qe), Qe.programs = J.programs, M.capabilities = Ge, M.extensions = ke, M.properties = xe, M.renderLists = ie, M.shadowMap = fe, M.state = ve, M.info = Qe;
    }
    ue();
    const X = new Zm(M, P);
    this.xr = X, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = ke.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = ke.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return W;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (W = E, this.setSize(k, ne, !1));
    }, this.getSize = function(E) {
      return E.set(k, ne);
    }, this.setSize = function(E, N, V = !0) {
      if (X.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      k = E, ne = N, t.width = Math.floor(E * W), t.height = Math.floor(N * W), V === !0 && (t.style.width = E + "px", t.style.height = N + "px"), this.setViewport(0, 0, E, N);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(k * W, ne * W).floor();
    }, this.setDrawingBufferSize = function(E, N, V) {
      k = E, ne = N, W = V, t.width = Math.floor(E * V), t.height = Math.floor(N * V), this.setViewport(0, 0, E, N);
    }, this.getCurrentViewport = function(E) {
      return E.copy(T);
    }, this.getViewport = function(E) {
      return E.copy(Se);
    }, this.setViewport = function(E, N, V, G) {
      E.isVector4 ? Se.set(E.x, E.y, E.z, E.w) : Se.set(E, N, V, G), ve.viewport(T.copy(Se).multiplyScalar(W).round());
    }, this.getScissor = function(E) {
      return E.copy(Oe);
    }, this.setScissor = function(E, N, V, G) {
      E.isVector4 ? Oe.set(E.x, E.y, E.z, E.w) : Oe.set(E, N, V, G), ve.scissor(U.copy(Oe).multiplyScalar(W).round());
    }, this.getScissorTest = function() {
      return Ze;
    }, this.setScissorTest = function(E) {
      ve.setScissorTest(Ze = E);
    }, this.setOpaqueSort = function(E) {
      oe = E;
    }, this.setTransparentSort = function(E) {
      pe = E;
    }, this.getClearColor = function(E) {
      return E.copy(we.getClearColor());
    }, this.setClearColor = function() {
      we.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return we.getClearAlpha();
    }, this.setClearAlpha = function() {
      we.setClearAlpha(...arguments);
    }, this.clear = function(E = !0, N = !0, V = !0) {
      let G = 0;
      if (E) {
        let O = !1;
        if (C !== null) {
          const te = C.texture.format;
          O = te === io || te === no || te === to;
        }
        if (O) {
          const te = C.texture.type, ce = te === wn || te === ri || te === cr || te === ur || te === Qa || te === eo, me = we.getClearColor(), _e = we.getClearAlpha(), Ie = me.r, Pe = me.g, Ee = me.b;
          ce ? (_[0] = Ie, _[1] = Pe, _[2] = Ee, _[3] = _e, P.clearBufferuiv(P.COLOR, 0, _)) : (v[0] = Ie, v[1] = Pe, v[2] = Ee, v[3] = _e, P.clearBufferiv(P.COLOR, 0, v));
        } else
          G |= P.COLOR_BUFFER_BIT;
      }
      N && (G |= P.DEPTH_BUFFER_BIT), V && (G |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), P.clear(G);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Z, !1), t.removeEventListener("webglcontextrestored", de, !1), t.removeEventListener("webglcontextcreationerror", he, !1), we.dispose(), ie.dispose(), Le.dispose(), xe.dispose(), x.dispose(), z.dispose(), w.dispose(), et.dispose(), I.dispose(), J.dispose(), X.dispose(), X.removeEventListener("sessionstart", ho), X.removeEventListener("sessionend", fo), Gn.stop();
    };
    function Z(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L = !0;
    }
    function de() {
      console.log("THREE.WebGLRenderer: Context Restored."), L = !1;
      const E = Qe.autoReset, N = fe.enabled, V = fe.autoUpdate, G = fe.needsUpdate, O = fe.type;
      ue(), Qe.autoReset = E, fe.enabled = N, fe.autoUpdate = V, fe.needsUpdate = G, fe.type = O;
    }
    function he(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function Ue(E) {
      const N = E.target;
      N.removeEventListener("dispose", Ue), ot(N);
    }
    function ot(E) {
      yt(E), xe.remove(E);
    }
    function yt(E) {
      const N = xe.get(E).programs;
      N !== void 0 && (N.forEach(function(V) {
        J.releaseProgram(V);
      }), E.isShaderMaterial && J.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, N, V, G, O, te) {
      N === null && (N = st);
      const ce = O.isMesh && O.matrixWorld.determinant() < 0, me = yc(E, N, V, G, O);
      ve.setMaterial(G, ce);
      let _e = V.index, Ie = 1;
      if (G.wireframe === !0) {
        if (_e = $.getWireframeAttribute(V), _e === void 0) return;
        Ie = 2;
      }
      const Pe = V.drawRange, Ee = V.attributes.position;
      let Xe = Pe.start * Ie, je = (Pe.start + Pe.count) * Ie;
      te !== null && (Xe = Math.max(Xe, te.start * Ie), je = Math.min(je, (te.start + te.count) * Ie)), _e !== null ? (Xe = Math.max(Xe, 0), je = Math.min(je, _e.count)) : Ee != null && (Xe = Math.max(Xe, 0), je = Math.min(je, Ee.count));
      const ft = je - Xe;
      if (ft < 0 || ft === 1 / 0) return;
      et.setup(O, G, me, V, _e);
      let lt, qe = le;
      if (_e !== null && (lt = q.get(_e), qe = He, qe.setIndex(lt)), O.isMesh)
        G.wireframe === !0 ? (ve.setLineWidth(G.wireframeLinewidth * ze()), qe.setMode(P.LINES)) : qe.setMode(P.TRIANGLES);
      else if (O.isLine) {
        let Te = G.linewidth;
        Te === void 0 && (Te = 1), ve.setLineWidth(Te * ze()), O.isLineSegments ? qe.setMode(P.LINES) : O.isLineLoop ? qe.setMode(P.LINE_LOOP) : qe.setMode(P.LINE_STRIP);
      } else O.isPoints ? qe.setMode(P.POINTS) : O.isSprite && qe.setMode(P.TRIANGLES);
      if (O.isBatchedMesh)
        if (O._multiDrawInstances !== null)
          as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), qe.renderMultiDrawInstances(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount, O._multiDrawInstances);
        else if (ke.get("WEBGL_multi_draw"))
          qe.renderMultiDraw(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount);
        else {
          const Te = O._multiDrawStarts, Mt = O._multiDrawCounts, $e = O._multiDrawCount, $t = _e ? q.get(_e).bytesPerElement : 1, oi = xe.get(G).currentProgram.getUniforms();
          for (let Bt = 0; Bt < $e; Bt++)
            oi.setValue(P, "_gl_DrawID", Bt), qe.render(Te[Bt] / $t, Mt[Bt]);
        }
      else if (O.isInstancedMesh)
        qe.renderInstances(Xe, ft, O.count);
      else if (V.isInstancedBufferGeometry) {
        const Te = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, Mt = Math.min(V.instanceCount, Te);
        qe.renderInstances(Xe, ft, Mt);
      } else
        qe.render(Xe, ft);
    };
    function Ke(E, N, V) {
      E.transparent === !0 && E.side === En && E.forceSinglePass === !1 ? (E.side = Ft, E.needsUpdate = !0, Er(E, N, V), E.side = Vn, E.needsUpdate = !0, Er(E, N, V), E.side = En) : Er(E, N, V);
    }
    this.compile = function(E, N, V = null) {
      V === null && (V = E), h = Le.get(V), h.init(N), y.push(h), V.traverseVisible(function(O) {
        O.isLight && O.layers.test(N.layers) && (h.pushLight(O), O.castShadow && h.pushShadow(O));
      }), E !== V && E.traverseVisible(function(O) {
        O.isLight && O.layers.test(N.layers) && (h.pushLight(O), O.castShadow && h.pushShadow(O));
      }), h.setupLights();
      const G = /* @__PURE__ */ new Set();
      return E.traverse(function(O) {
        if (!(O.isMesh || O.isPoints || O.isLine || O.isSprite))
          return;
        const te = O.material;
        if (te)
          if (Array.isArray(te))
            for (let ce = 0; ce < te.length; ce++) {
              const me = te[ce];
              Ke(me, V, O), G.add(me);
            }
          else
            Ke(te, V, O), G.add(te);
      }), h = y.pop(), G;
    }, this.compileAsync = function(E, N, V = null) {
      const G = this.compile(E, N, V);
      return new Promise((O) => {
        function te() {
          if (G.forEach(function(ce) {
            xe.get(ce).currentProgram.isReady() && G.delete(ce);
          }), G.size === 0) {
            O(E);
            return;
          }
          setTimeout(te, 10);
        }
        ke.get("KHR_parallel_shader_compile") !== null ? te() : setTimeout(te, 10);
      });
    };
    let jt = null;
    function dn(E) {
      jt && jt(E);
    }
    function ho() {
      Gn.stop();
    }
    function fo() {
      Gn.start();
    }
    const Gn = new mc();
    Gn.setAnimationLoop(dn), typeof self < "u" && Gn.setContext(self), this.setAnimationLoop = function(E) {
      jt = E, X.setAnimationLoop(E), E === null ? Gn.stop() : Gn.start();
    }, X.addEventListener("sessionstart", ho), X.addEventListener("sessionend", fo), this.render = function(E, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (L === !0) return;
      if (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), X.enabled === !0 && X.isPresenting === !0 && (X.cameraAutoUpdate === !0 && X.updateCamera(N), N = X.getCamera()), E.isScene === !0 && E.onBeforeRender(M, E, N, C), h = Le.get(E, y.length), h.init(N), y.push(h), ye.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Y.setFromProjectionMatrix(ye), ge = this.localClippingEnabled, re = Q.init(this.clippingPlanes, ge), p = ie.get(E, R.length), p.init(), R.push(p), X.enabled === !0 && X.isPresenting === !0) {
        const te = M.xr.getDepthSensingMesh();
        te !== null && Ms(te, N, -1 / 0, M.sortObjects);
      }
      Ms(E, N, 0, M.sortObjects), p.finish(), M.sortObjects === !0 && p.sort(oe, pe), tt = X.enabled === !1 || X.isPresenting === !1 || X.hasDepthSensing() === !1, tt && we.addToRenderList(p, E), this.info.render.frame++, re === !0 && Q.beginShadows();
      const V = h.state.shadowsArray;
      fe.render(V, E, N), re === !0 && Q.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const G = p.opaque, O = p.transmissive;
      if (h.setupLights(), N.isArrayCamera) {
        const te = N.cameras;
        if (O.length > 0)
          for (let ce = 0, me = te.length; ce < me; ce++) {
            const _e = te[ce];
            mo(G, O, E, _e);
          }
        tt && we.render(E);
        for (let ce = 0, me = te.length; ce < me; ce++) {
          const _e = te[ce];
          po(p, E, _e, _e.viewport);
        }
      } else
        O.length > 0 && mo(G, O, E, N), tt && we.render(E), po(p, E, N);
      C !== null && A === 0 && (b.updateMultisampleRenderTarget(C), b.updateRenderTargetMipmap(C)), E.isScene === !0 && E.onAfterRender(M, E, N), et.resetDefaultState(), S = -1, g = null, y.pop(), y.length > 0 ? (h = y[y.length - 1], re === !0 && Q.setGlobalState(M.clippingPlanes, h.state.camera)) : h = null, R.pop(), R.length > 0 ? p = R[R.length - 1] : p = null;
    };
    function Ms(E, N, V, G) {
      if (E.visible === !1) return;
      if (E.layers.test(N.layers)) {
        if (E.isGroup)
          V = E.renderOrder;
        else if (E.isLOD)
          E.autoUpdate === !0 && E.update(N);
        else if (E.isLight)
          h.pushLight(E), E.castShadow && h.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || Y.intersectsSprite(E)) {
            G && Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);
            const ce = w.update(E), me = E.material;
            me.visible && p.push(E, ce, me, V, Re.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || Y.intersectsObject(E))) {
          const ce = w.update(E), me = E.material;
          if (G && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Re.copy(E.boundingSphere.center)) : (ce.boundingSphere === null && ce.computeBoundingSphere(), Re.copy(ce.boundingSphere.center)), Re.applyMatrix4(E.matrixWorld).applyMatrix4(ye)), Array.isArray(me)) {
            const _e = ce.groups;
            for (let Ie = 0, Pe = _e.length; Ie < Pe; Ie++) {
              const Ee = _e[Ie], Xe = me[Ee.materialIndex];
              Xe && Xe.visible && p.push(E, ce, Xe, V, Re.z, Ee);
            }
          } else me.visible && p.push(E, ce, me, V, Re.z, null);
        }
      }
      const te = E.children;
      for (let ce = 0, me = te.length; ce < me; ce++)
        Ms(te[ce], N, V, G);
    }
    function po(E, N, V, G) {
      const O = E.opaque, te = E.transmissive, ce = E.transparent;
      h.setupLightsView(V), re === !0 && Q.setGlobalState(M.clippingPlanes, V), G && ve.viewport(T.copy(G)), O.length > 0 && Mr(O, N, V), te.length > 0 && Mr(te, N, V), ce.length > 0 && Mr(ce, N, V), ve.buffers.depth.setTest(!0), ve.buffers.depth.setMask(!0), ve.buffers.color.setMask(!0), ve.setPolygonOffset(!1);
    }
    function mo(E, N, V, G) {
      if ((V.isScene === !0 ? V.overrideMaterial : null) !== null)
        return;
      h.state.transmissionRenderTarget[G.id] === void 0 && (h.state.transmissionRenderTarget[G.id] = new si(1, 1, {
        generateMipmaps: !0,
        type: ke.has("EXT_color_buffer_half_float") || ke.has("EXT_color_buffer_float") ? _r : wn,
        minFilter: ii,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Ye.workingColorSpace
      }));
      const te = h.state.transmissionRenderTarget[G.id], ce = G.viewport || T;
      te.setSize(ce.z * M.transmissionResolutionScale, ce.w * M.transmissionResolutionScale);
      const me = M.getRenderTarget();
      M.setRenderTarget(te), M.getClearColor(H), j = M.getClearAlpha(), j < 1 && M.setClearColor(16777215, 0.5), M.clear(), tt && we.render(V);
      const _e = M.toneMapping;
      M.toneMapping = Hn;
      const Ie = G.viewport;
      if (G.viewport !== void 0 && (G.viewport = void 0), h.setupLightsView(G), re === !0 && Q.setGlobalState(M.clippingPlanes, G), Mr(E, V, G), b.updateMultisampleRenderTarget(te), b.updateRenderTargetMipmap(te), ke.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Pe = !1;
        for (let Ee = 0, Xe = N.length; Ee < Xe; Ee++) {
          const je = N[Ee], ft = je.object, lt = je.geometry, qe = je.material, Te = je.group;
          if (qe.side === En && ft.layers.test(G.layers)) {
            const Mt = qe.side;
            qe.side = Ft, qe.needsUpdate = !0, _o(ft, V, G, lt, qe, Te), qe.side = Mt, qe.needsUpdate = !0, Pe = !0;
          }
        }
        Pe === !0 && (b.updateMultisampleRenderTarget(te), b.updateRenderTargetMipmap(te));
      }
      M.setRenderTarget(me), M.setClearColor(H, j), Ie !== void 0 && (G.viewport = Ie), M.toneMapping = _e;
    }
    function Mr(E, N, V) {
      const G = N.isScene === !0 ? N.overrideMaterial : null;
      for (let O = 0, te = E.length; O < te; O++) {
        const ce = E[O], me = ce.object, _e = ce.geometry, Ie = ce.group;
        let Pe = ce.material;
        Pe.allowOverride === !0 && G !== null && (Pe = G), me.layers.test(V.layers) && _o(me, N, V, _e, Pe, Ie);
      }
    }
    function _o(E, N, V, G, O, te) {
      E.onBeforeRender(M, N, V, G, O, te), E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), O.onBeforeRender(M, N, V, G, E, te), O.transparent === !0 && O.side === En && O.forceSinglePass === !1 ? (O.side = Ft, O.needsUpdate = !0, M.renderBufferDirect(V, N, G, O, E, te), O.side = Vn, O.needsUpdate = !0, M.renderBufferDirect(V, N, G, O, E, te), O.side = En) : M.renderBufferDirect(V, N, G, O, E, te), E.onAfterRender(M, N, V, G, O, te);
    }
    function Er(E, N, V) {
      N.isScene !== !0 && (N = st);
      const G = xe.get(E), O = h.state.lights, te = h.state.shadowsArray, ce = O.state.version, me = J.getParameters(E, O.state, te, N, V), _e = J.getProgramCacheKey(me);
      let Ie = G.programs;
      G.environment = E.isMeshStandardMaterial ? N.environment : null, G.fog = N.fog, G.envMap = (E.isMeshStandardMaterial ? z : x).get(E.envMap || G.environment), G.envMapRotation = G.environment !== null && E.envMap === null ? N.environmentRotation : E.envMapRotation, Ie === void 0 && (E.addEventListener("dispose", Ue), Ie = /* @__PURE__ */ new Map(), G.programs = Ie);
      let Pe = Ie.get(_e);
      if (Pe !== void 0) {
        if (G.currentProgram === Pe && G.lightsStateVersion === ce)
          return vo(E, me), Pe;
      } else
        me.uniforms = J.getUniforms(E), E.onBeforeCompile(me, M), Pe = J.acquireProgram(me, _e), Ie.set(_e, Pe), G.uniforms = me.uniforms;
      const Ee = G.uniforms;
      return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Ee.clippingPlanes = Q.uniform), vo(E, me), G.needsLights = bc(E), G.lightsStateVersion = ce, G.needsLights && (Ee.ambientLightColor.value = O.state.ambient, Ee.lightProbe.value = O.state.probe, Ee.directionalLights.value = O.state.directional, Ee.directionalLightShadows.value = O.state.directionalShadow, Ee.spotLights.value = O.state.spot, Ee.spotLightShadows.value = O.state.spotShadow, Ee.rectAreaLights.value = O.state.rectArea, Ee.ltc_1.value = O.state.rectAreaLTC1, Ee.ltc_2.value = O.state.rectAreaLTC2, Ee.pointLights.value = O.state.point, Ee.pointLightShadows.value = O.state.pointShadow, Ee.hemisphereLights.value = O.state.hemi, Ee.directionalShadowMap.value = O.state.directionalShadowMap, Ee.directionalShadowMatrix.value = O.state.directionalShadowMatrix, Ee.spotShadowMap.value = O.state.spotShadowMap, Ee.spotLightMatrix.value = O.state.spotLightMatrix, Ee.spotLightMap.value = O.state.spotLightMap, Ee.pointShadowMap.value = O.state.pointShadowMap, Ee.pointShadowMatrix.value = O.state.pointShadowMatrix), G.currentProgram = Pe, G.uniformsList = null, Pe;
    }
    function go(E) {
      if (E.uniformsList === null) {
        const N = E.currentProgram.getUniforms();
        E.uniformsList = os.seqWithValue(N.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function vo(E, N) {
      const V = xe.get(E);
      V.outputColorSpace = N.outputColorSpace, V.batching = N.batching, V.batchingColor = N.batchingColor, V.instancing = N.instancing, V.instancingColor = N.instancingColor, V.instancingMorph = N.instancingMorph, V.skinning = N.skinning, V.morphTargets = N.morphTargets, V.morphNormals = N.morphNormals, V.morphColors = N.morphColors, V.morphTargetsCount = N.morphTargetsCount, V.numClippingPlanes = N.numClippingPlanes, V.numIntersection = N.numClipIntersection, V.vertexAlphas = N.vertexAlphas, V.vertexTangents = N.vertexTangents, V.toneMapping = N.toneMapping;
    }
    function yc(E, N, V, G, O) {
      N.isScene !== !0 && (N = st), b.resetTextureUnits();
      const te = N.fog, ce = G.isMeshStandardMaterial ? N.environment : null, me = C === null ? M.outputColorSpace : C.isXRRenderTarget === !0 ? C.texture.colorSpace : Bi, _e = (G.isMeshStandardMaterial ? z : x).get(G.envMap || ce), Ie = G.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4, Pe = !!V.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), Ee = !!V.morphAttributes.position, Xe = !!V.morphAttributes.normal, je = !!V.morphAttributes.color;
      let ft = Hn;
      G.toneMapped && (C === null || C.isXRRenderTarget === !0) && (ft = M.toneMapping);
      const lt = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, qe = lt !== void 0 ? lt.length : 0, Te = xe.get(G), Mt = h.state.lights;
      if (re === !0 && (ge === !0 || E !== g)) {
        const Rt = E === g && G.id === S;
        Q.setState(G, E, Rt);
      }
      let $e = !1;
      G.version === Te.__version ? (Te.needsLights && Te.lightsStateVersion !== Mt.state.version || Te.outputColorSpace !== me || O.isBatchedMesh && Te.batching === !1 || !O.isBatchedMesh && Te.batching === !0 || O.isBatchedMesh && Te.batchingColor === !0 && O.colorTexture === null || O.isBatchedMesh && Te.batchingColor === !1 && O.colorTexture !== null || O.isInstancedMesh && Te.instancing === !1 || !O.isInstancedMesh && Te.instancing === !0 || O.isSkinnedMesh && Te.skinning === !1 || !O.isSkinnedMesh && Te.skinning === !0 || O.isInstancedMesh && Te.instancingColor === !0 && O.instanceColor === null || O.isInstancedMesh && Te.instancingColor === !1 && O.instanceColor !== null || O.isInstancedMesh && Te.instancingMorph === !0 && O.morphTexture === null || O.isInstancedMesh && Te.instancingMorph === !1 && O.morphTexture !== null || Te.envMap !== _e || G.fog === !0 && Te.fog !== te || Te.numClippingPlanes !== void 0 && (Te.numClippingPlanes !== Q.numPlanes || Te.numIntersection !== Q.numIntersection) || Te.vertexAlphas !== Ie || Te.vertexTangents !== Pe || Te.morphTargets !== Ee || Te.morphNormals !== Xe || Te.morphColors !== je || Te.toneMapping !== ft || Te.morphTargetsCount !== qe) && ($e = !0) : ($e = !0, Te.__version = G.version);
      let $t = Te.currentProgram;
      $e === !0 && ($t = Er(G, N, O));
      let oi = !1, Bt = !1, Gi = !1;
      const nt = $t.getUniforms(), Xt = Te.uniforms;
      if (ve.useProgram($t.program) && (oi = !0, Bt = !0, Gi = !0), G.id !== S && (S = G.id, Bt = !0), oi || g !== E) {
        ve.buffers.depth.getReversed() ? (ae.copy(E.projectionMatrix), wu(ae), Ru(ae), nt.setValue(P, "projectionMatrix", ae)) : nt.setValue(P, "projectionMatrix", E.projectionMatrix), nt.setValue(P, "viewMatrix", E.matrixWorldInverse);
        const Dt = nt.map.cameraPosition;
        Dt !== void 0 && Dt.setValue(P, We.setFromMatrixPosition(E.matrixWorld)), Ge.logarithmicDepthBuffer && nt.setValue(
          P,
          "logDepthBufFC",
          2 / (Math.log(E.far + 1) / Math.LN2)
        ), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && nt.setValue(P, "isOrthographic", E.isOrthographicCamera === !0), g !== E && (g = E, Bt = !0, Gi = !0);
      }
      if (O.isSkinnedMesh) {
        nt.setOptional(P, O, "bindMatrix"), nt.setOptional(P, O, "bindMatrixInverse");
        const Rt = O.skeleton;
        Rt && (Rt.boneTexture === null && Rt.computeBoneTexture(), nt.setValue(P, "boneTexture", Rt.boneTexture, b));
      }
      O.isBatchedMesh && (nt.setOptional(P, O, "batchingTexture"), nt.setValue(P, "batchingTexture", O._matricesTexture, b), nt.setOptional(P, O, "batchingIdTexture"), nt.setValue(P, "batchingIdTexture", O._indirectTexture, b), nt.setOptional(P, O, "batchingColorTexture"), O._colorsTexture !== null && nt.setValue(P, "batchingColorTexture", O._colorsTexture, b));
      const Yt = V.morphAttributes;
      if ((Yt.position !== void 0 || Yt.normal !== void 0 || Yt.color !== void 0) && Me.update(O, V, $t), (Bt || Te.receiveShadow !== O.receiveShadow) && (Te.receiveShadow = O.receiveShadow, nt.setValue(P, "receiveShadow", O.receiveShadow)), G.isMeshGouraudMaterial && G.envMap !== null && (Xt.envMap.value = _e, Xt.flipEnvMap.value = _e.isCubeTexture && _e.isRenderTargetTexture === !1 ? -1 : 1), G.isMeshStandardMaterial && G.envMap === null && N.environment !== null && (Xt.envMapIntensity.value = N.environmentIntensity), Bt && (nt.setValue(P, "toneMappingExposure", M.toneMappingExposure), Te.needsLights && Tc(Xt, Gi), te && G.fog === !0 && ee.refreshFogUniforms(Xt, te), ee.refreshMaterialUniforms(Xt, G, W, ne, h.state.transmissionRenderTarget[E.id]), os.upload(P, go(Te), Xt, b)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (os.upload(P, go(Te), Xt, b), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && nt.setValue(P, "center", O.center), nt.setValue(P, "modelViewMatrix", O.modelViewMatrix), nt.setValue(P, "normalMatrix", O.normalMatrix), nt.setValue(P, "modelMatrix", O.matrixWorld), G.isShaderMaterial || G.isRawShaderMaterial) {
        const Rt = G.uniformsGroups;
        for (let Dt = 0, Es = Rt.length; Dt < Es; Dt++) {
          const kn = Rt[Dt];
          I.update(kn, $t), I.bind(kn, $t);
        }
      }
      return $t;
    }
    function Tc(E, N) {
      E.ambientLightColor.needsUpdate = N, E.lightProbe.needsUpdate = N, E.directionalLights.needsUpdate = N, E.directionalLightShadows.needsUpdate = N, E.pointLights.needsUpdate = N, E.pointLightShadows.needsUpdate = N, E.spotLights.needsUpdate = N, E.spotLightShadows.needsUpdate = N, E.rectAreaLights.needsUpdate = N, E.hemisphereLights.needsUpdate = N;
    }
    function bc(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return D;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return C;
    }, this.setRenderTargetTextures = function(E, N, V) {
      const G = xe.get(E);
      G.__autoAllocateDepthBuffer = E.resolveDepthBuffer === !1, G.__autoAllocateDepthBuffer === !1 && (G.__useRenderToTexture = !1), xe.get(E.texture).__webglTexture = N, xe.get(E.depthTexture).__webglTexture = G.__autoAllocateDepthBuffer ? void 0 : V, G.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(E, N) {
      const V = xe.get(E);
      V.__webglFramebuffer = N, V.__useDefaultFramebuffer = N === void 0;
    };
    const Ac = P.createFramebuffer();
    this.setRenderTarget = function(E, N = 0, V = 0) {
      C = E, D = N, A = V;
      let G = !0, O = null, te = !1, ce = !1;
      if (E) {
        const _e = xe.get(E);
        if (_e.__useDefaultFramebuffer !== void 0)
          ve.bindFramebuffer(P.FRAMEBUFFER, null), G = !1;
        else if (_e.__webglFramebuffer === void 0)
          b.setupRenderTarget(E);
        else if (_e.__hasExternalTextures)
          b.rebindTextures(E, xe.get(E.texture).__webglTexture, xe.get(E.depthTexture).__webglTexture);
        else if (E.depthBuffer) {
          const Ee = E.depthTexture;
          if (_e.__boundDepthTexture !== Ee) {
            if (Ee !== null && xe.has(Ee) && (E.width !== Ee.image.width || E.height !== Ee.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            b.setupDepthRenderbuffer(E);
          }
        }
        const Ie = E.texture;
        (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (ce = !0);
        const Pe = xe.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(Pe[N]) ? O = Pe[N][V] : O = Pe[N], te = !0) : E.samples > 0 && b.useMultisampledRTT(E) === !1 ? O = xe.get(E).__webglMultisampledFramebuffer : Array.isArray(Pe) ? O = Pe[V] : O = Pe, T.copy(E.viewport), U.copy(E.scissor), F = E.scissorTest;
      } else
        T.copy(Se).multiplyScalar(W).floor(), U.copy(Oe).multiplyScalar(W).floor(), F = Ze;
      if (V !== 0 && (O = Ac), ve.bindFramebuffer(P.FRAMEBUFFER, O) && G && ve.drawBuffers(E, O), ve.viewport(T), ve.scissor(U), ve.setScissorTest(F), te) {
        const _e = xe.get(E.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + N, _e.__webglTexture, V);
      } else if (ce) {
        const _e = xe.get(E.texture), Ie = N;
        P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, _e.__webglTexture, V, Ie);
      } else if (E !== null && V !== 0) {
        const _e = xe.get(E.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, _e.__webglTexture, V);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(E, N, V, G, O, te, ce) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let me = xe.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && ce !== void 0 && (me = me[ce]), me) {
        ve.bindFramebuffer(P.FRAMEBUFFER, me);
        try {
          const _e = E.texture, Ie = _e.format, Pe = _e.type;
          if (!Ge.textureFormatReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ge.textureTypeReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= E.width - G && V >= 0 && V <= E.height - O && P.readPixels(N, V, G, O, Be.convert(Ie), Be.convert(Pe), te);
        } finally {
          const _e = C !== null ? xe.get(C).__webglFramebuffer : null;
          ve.bindFramebuffer(P.FRAMEBUFFER, _e);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(E, N, V, G, O, te, ce) {
      if (!(E && E.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let me = xe.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && ce !== void 0 && (me = me[ce]), me)
        if (N >= 0 && N <= E.width - G && V >= 0 && V <= E.height - O) {
          ve.bindFramebuffer(P.FRAMEBUFFER, me);
          const _e = E.texture, Ie = _e.format, Pe = _e.type;
          if (!Ge.textureFormatReadable(Ie))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Ge.textureTypeReadable(Pe))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Ee = P.createBuffer();
          P.bindBuffer(P.PIXEL_PACK_BUFFER, Ee), P.bufferData(P.PIXEL_PACK_BUFFER, te.byteLength, P.STREAM_READ), P.readPixels(N, V, G, O, Be.convert(Ie), Be.convert(Pe), 0);
          const Xe = C !== null ? xe.get(C).__webglFramebuffer : null;
          ve.bindFramebuffer(P.FRAMEBUFFER, Xe);
          const je = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return P.flush(), await Au(P, je, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, Ee), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, te), P.deleteBuffer(Ee), P.deleteSync(je), te;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(E, N = null, V = 0) {
      const G = Math.pow(2, -V), O = Math.floor(E.image.width * G), te = Math.floor(E.image.height * G), ce = N !== null ? N.x : 0, me = N !== null ? N.y : 0;
      b.setTexture2D(E, 0), P.copyTexSubImage2D(P.TEXTURE_2D, V, 0, 0, ce, me, O, te), ve.unbindTexture();
    };
    const wc = P.createFramebuffer(), Rc = P.createFramebuffer();
    this.copyTextureToTexture = function(E, N, V = null, G = null, O = 0, te = null) {
      te === null && (O !== 0 ? (as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), te = O, O = 0) : te = 0);
      let ce, me, _e, Ie, Pe, Ee, Xe, je, ft;
      const lt = E.isCompressedTexture ? E.mipmaps[te] : E.image;
      if (V !== null)
        ce = V.max.x - V.min.x, me = V.max.y - V.min.y, _e = V.isBox3 ? V.max.z - V.min.z : 1, Ie = V.min.x, Pe = V.min.y, Ee = V.isBox3 ? V.min.z : 0;
      else {
        const Yt = Math.pow(2, -O);
        ce = Math.floor(lt.width * Yt), me = Math.floor(lt.height * Yt), E.isDataArrayTexture ? _e = lt.depth : E.isData3DTexture ? _e = Math.floor(lt.depth * Yt) : _e = 1, Ie = 0, Pe = 0, Ee = 0;
      }
      G !== null ? (Xe = G.x, je = G.y, ft = G.z) : (Xe = 0, je = 0, ft = 0);
      const qe = Be.convert(N.format), Te = Be.convert(N.type);
      let Mt;
      N.isData3DTexture ? (b.setTexture3D(N, 0), Mt = P.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (b.setTexture2DArray(N, 0), Mt = P.TEXTURE_2D_ARRAY) : (b.setTexture2D(N, 0), Mt = P.TEXTURE_2D), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, N.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, N.unpackAlignment);
      const $e = P.getParameter(P.UNPACK_ROW_LENGTH), $t = P.getParameter(P.UNPACK_IMAGE_HEIGHT), oi = P.getParameter(P.UNPACK_SKIP_PIXELS), Bt = P.getParameter(P.UNPACK_SKIP_ROWS), Gi = P.getParameter(P.UNPACK_SKIP_IMAGES);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, lt.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, lt.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Ie), P.pixelStorei(P.UNPACK_SKIP_ROWS, Pe), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Ee);
      const nt = E.isDataArrayTexture || E.isData3DTexture, Xt = N.isDataArrayTexture || N.isData3DTexture;
      if (E.isDepthTexture) {
        const Yt = xe.get(E), Rt = xe.get(N), Dt = xe.get(Yt.__renderTarget), Es = xe.get(Rt.__renderTarget);
        ve.bindFramebuffer(P.READ_FRAMEBUFFER, Dt.__webglFramebuffer), ve.bindFramebuffer(P.DRAW_FRAMEBUFFER, Es.__webglFramebuffer);
        for (let kn = 0; kn < _e; kn++)
          nt && (P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, xe.get(E).__webglTexture, O, Ee + kn), P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, xe.get(N).__webglTexture, te, ft + kn)), P.blitFramebuffer(Ie, Pe, ce, me, Xe, je, ce, me, P.DEPTH_BUFFER_BIT, P.NEAREST);
        ve.bindFramebuffer(P.READ_FRAMEBUFFER, null), ve.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else if (O !== 0 || E.isRenderTargetTexture || xe.has(E)) {
        const Yt = xe.get(E), Rt = xe.get(N);
        ve.bindFramebuffer(P.READ_FRAMEBUFFER, wc), ve.bindFramebuffer(P.DRAW_FRAMEBUFFER, Rc);
        for (let Dt = 0; Dt < _e; Dt++)
          nt ? P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, Yt.__webglTexture, O, Ee + Dt) : P.framebufferTexture2D(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, Yt.__webglTexture, O), Xt ? P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, Rt.__webglTexture, te, ft + Dt) : P.framebufferTexture2D(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, Rt.__webglTexture, te), O !== 0 ? P.blitFramebuffer(Ie, Pe, ce, me, Xe, je, ce, me, P.COLOR_BUFFER_BIT, P.NEAREST) : Xt ? P.copyTexSubImage3D(Mt, te, Xe, je, ft + Dt, Ie, Pe, ce, me) : P.copyTexSubImage2D(Mt, te, Xe, je, Ie, Pe, ce, me);
        ve.bindFramebuffer(P.READ_FRAMEBUFFER, null), ve.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else
        Xt ? E.isDataTexture || E.isData3DTexture ? P.texSubImage3D(Mt, te, Xe, je, ft, ce, me, _e, qe, Te, lt.data) : N.isCompressedArrayTexture ? P.compressedTexSubImage3D(Mt, te, Xe, je, ft, ce, me, _e, qe, lt.data) : P.texSubImage3D(Mt, te, Xe, je, ft, ce, me, _e, qe, Te, lt) : E.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, te, Xe, je, ce, me, qe, Te, lt.data) : E.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, te, Xe, je, lt.width, lt.height, qe, lt.data) : P.texSubImage2D(P.TEXTURE_2D, te, Xe, je, ce, me, qe, Te, lt);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, $e), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, $t), P.pixelStorei(P.UNPACK_SKIP_PIXELS, oi), P.pixelStorei(P.UNPACK_SKIP_ROWS, Bt), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Gi), te === 0 && N.generateMipmaps && P.generateMipmap(Mt), ve.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, N, V = null, G = null, O = 0) {
      return as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(E, N, V, G, O);
    }, this.initRenderTarget = function(E) {
      xe.get(E).__webglFramebuffer === void 0 && b.setupRenderTarget(E);
    }, this.initTexture = function(E) {
      E.isCubeTexture ? b.setTextureCube(E, 0) : E.isData3DTexture ? b.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? b.setTexture2DArray(E, 0) : b.setTexture2D(E, 0), ve.unbindTexture();
    }, this.resetState = function() {
      D = 0, A = 0, C = null, ve.reset(), et.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return un;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Ye._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ye._getUnpackColorSpace();
  }
}
const Qm = {
  lightPositionX: -2,
  lightPositionY: 6,
  lightPositionZ: -4,
  lightCameraSize: 4.5,
  lightCameraBias: 5e-3,
  lightCameraNear: 3,
  lightCameraFar: 16
}, rr = pr()(
  mr((i) => ({
    ...Qm
  }))
), e_ = {
  u_blueNoiseTexture: { value: new Et() },
  u_blueNoiseTexelSize: { value: new be() },
  u_blueNoiseCoordOffset: { value: new be() }
}, t_ = {
  u_lightPosition: {
    value: new B(rr.getState().lightPositionX, rr.getState().lightPositionY, rr.getState().lightPositionZ)
  },
  u_goboTexture: { value: null },
  u_goboIntensity: { value: 0.4 },
  u_infoTexture: { value: new fs() },
  u_infoTextureLinear: { value: new fs() },
  u_endAnimationRatio: { value: 0 }
}, n_ = {
  u_time: { value: 0 },
  u_deltaTime: { value: 1 },
  u_resolution: { value: new be() },
  u_viewportResolution: { value: new be() },
  u_bgColor1: { value: new Ae("#ffffff").convertSRGBToLinear() },
  u_bgColor2: { value: new Ae("#d0d0d0").convertSRGBToLinear() },
  ...e_,
  ...t_
}, An = pr()(
  mr(() => ({
    ...n_
  }))
), on = (i) => An.setState((e) => ({ ...e, ...i })), i_ = (i, e) => {
  on({ u_time: { value: i } }), on({ u_deltaTime: { value: e } });
}, r_ = {
  time: 0,
  deltaTime: 0,
  showVisual: !0,
  offsetX: 0,
  cameraOffsetX: 0,
  width: 0,
  height: 0,
  viewportWidth: 0,
  viewportHeight: 0,
  bgColor1: "#ffffff",
  bgColor2: "#d0d0d0",
  neutralColor: "#ffffff",
  mainColor: "#0096ff",
  successColor: "#00c881",
  failColor: "#ca0101",
  particlesColor: "#505050",
  goboIntensity: 0.45,
  particlesOpacity: 0.75,
  particlesSize: 0.01
}, _t = pr()(
  mr((i) => ({
    ...r_,
    setProperty: (e) => i({ [e.propertyName]: e.value })
  }))
), s_ = (i) => {
  _t.setState({ errorBlock: i });
}, q_ = (i) => {
  const e = i;
  for (const t of e)
    t.propertyName === "bgColor1" && on({
      u_bgColor1: { value: new Ae(t.value).convertSRGBToLinear() }
    }), t.propertyName === "bgColor2" && on({
      u_bgColor2: { value: new Ae(t.value).convertSRGBToLinear() }
    }), _t.getState().setProperty(t);
}, a_ = {
  hasNotStarted: !0,
  isFree: !1,
  isResult: !1,
  isReplayResult: !1,
  isSuccessResult: !1,
  isFailResult: !1,
  isStopped: !1
}, El = {
  flags: a_,
  destroyCanvas: !1,
  animationTypeEnded: null,
  status: It.NOT_STARTED,
  result: it.NONE
}, rt = pr()(
  mr((i) => ({
    ...El,
    setDestroyCanvas: (e) => i({ destroyCanvas: e }),
    setAnimationTypeEnded: (e) => i({ animationTypeEnded: e }),
    setWinAnimation: ({ isReplay: e, completeAnimationLevel: t }) => i((n) => {
      const r = n.status === It.NOT_STARTED, s = e && r ? it.REPLAY : it.COMPLETED, o = {
        ...n.flags,
        isReplayResult: s === it.REPLAY,
        isSuccessResult: !0
      };
      return { status: It.RESULT, result: s, completeAnimationLevel: t, flags: o };
    }),
    setAnimationState: (e) => i((t) => {
      let n, r = t.result;
      switch (e) {
        case "start": {
          n = It.FREE;
          break;
        }
        case "stop": {
          n = It.RESULT, r = it.STOP;
          break;
        }
        case "lose": {
          n = It.RESULT, r = it.FAILED;
          break;
        }
        default:
          n = It.NOT_STARTED;
      }
      const s = n === It.RESULT, o = {
        isResult: s,
        hasNotStarted: n === It.NOT_STARTED,
        isFree: n === It.FREE,
        isReplayResult: s && r === it.REPLAY,
        isSuccessResult: s && r === it.COMPLETED,
        isFailResult: s && r === it.FAILED,
        isStopped: s && r === it.STOP
      };
      return {
        status: n,
        result: r,
        flags: { ...t.flags, ...o }
      };
    }),
    reset: () => i((e) => ({ ...El, status: e.status }))
  }))
), o_ = () => {
  rt.getState().setAnimationState("start");
}, l_ = () => {
  rt.getState().setAnimationState("stop");
}, Z_ = () => {
  rt.getState().setAnimationState("lose");
}, j_ = ({ isReplay: i, completeAnimationLevel: e }) => rt.getState().setWinAnimation({ isReplay: i, completeAnimationLevel: e }), Zr = (i, e) => Math.hypot(i, e);
class c_ {
  constructor(e = 0, t = 0, n = 0) {
    Ce(this, "id", 0);
    Ce(this, "row", 0);
    Ce(this, "col", 0);
    Ce(this, "distance", Zr(this.row, this.col));
    Ce(this, "MAX_DISTANCE", Zr(Nt, Nt));
    Ce(this, "priority", this.MAX_DISTANCE - this.distance);
    Ce(this, "isMain", this.row === 0 && this.col === 0);
    Ce(this, "isBorder", Math.abs(this.row) === 2 || Math.abs(this.col) === 2);
    Ce(this, "isOccupied", !1);
    Ce(this, "willBeOccupied", !1);
    Ce(this, "activeRatio", 0);
    Ce(this, "neighbours", null);
    Ce(this, "reachableNeighbours", null);
    Ce(this, "prioritySortedReachableNeighbours", null);
    Ce(this, "randomDelay", Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5);
    Ce(this, "loseAnimationPositionArray", []);
    Ce(this, "loseAnimationOrientArray", []);
    this.id = e, this.row = t, this.col = n, this.distance = Zr(t, n), this.MAX_DISTANCE = Zr(Nt, Nt), this.priority = this.MAX_DISTANCE - this.distance, this.isMain = t === 0 && n === 0, this.isBorder = Math.abs(t) === 2 || Math.abs(n) === 2, this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0, this.neighbours = null, this.reachableNeighbours = null, this.prioritySortedReachableNeighbours = null, this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
  }
  init() {
    var e;
    this.reachableNeighbours = ((e = this.neighbours) == null ? void 0 : e.filter((t) => (t == null ? void 0 : t.row) === this.row || (t == null ? void 0 : t.col) === this.col)) || null, this._sortPriorityNeighbours();
  }
  _sortPriorityNeighbours() {
    this.prioritySortedReachableNeighbours = this.reachableNeighbours ? [...this.reachableNeighbours].sort((e, t) => ((e == null ? void 0 : e.priority) || 0) - ((t == null ? void 0 : t.priority) || 0)) : null;
  }
  shuffleReachableNeighbours() {
    if (this.reachableNeighbours)
      for (let e = this.reachableNeighbours.length - 1; e > 0; e--) {
        const t = Math.floor(Math.random() * (e + 1));
        [this.reachableNeighbours[e], this.reachableNeighbours[t]] = [this.reachableNeighbours[t], this.reachableNeighbours[e]];
      }
    this._sortPriorityNeighbours();
  }
  preUpdate(e) {
    this.activeRatio = 0;
  }
  reset() {
    this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0;
  }
  update(e) {
  }
}
const Ut = 5, Sn = Ut + 2, Nt = Math.floor(Ut / 2), en = Ut * Ut, u_ = Sn * Sn;
let Ji = null, Mn = [];
const h_ = () => {
  function i() {
    Mn = Array.from(
      { length: Ut },
      (a, l) => Array.from({ length: Ut }, (c, u) => {
        const d = l - Nt, f = u - Nt;
        return new c_(l * Ut + u, d, f);
      })
    ), Mn.forEach(
      (a, l) => a.forEach((c, u) => {
        c.neighbours = n(l - Nt, u - Nt), c.init();
      })
    ), Ji = e(0, 0);
  }
  function e(a, l) {
    var c;
    return ((c = Mn[a + Nt]) == null ? void 0 : c[l + Nt]) || null;
  }
  function t() {
    const a = Mn.flat().filter((l) => !l.isOccupied);
    return a.length ? a[Math.floor(Math.random() * a.length)] : null;
  }
  function n(a, l) {
    return [-1, 0, 1].flatMap(
      (c) => [-1, 0, 1].map((u) => c === 0 && u === 0 ? null : e(a + c, l + u)).filter(Boolean)
    );
  }
  function r() {
    Mn.flat().forEach((a) => a.reset());
  }
  function s(a) {
    Mn.flat().forEach((l) => l.preUpdate(a));
  }
  function o(a) {
    Mn.flat().forEach((l) => l.update(a));
  }
  return {
    init: i,
    getTile: e,
    getRandomFreeTile: t,
    reset: r,
    preUpdate: s,
    update: o
  };
}, ti = h_(), Bn = "/assets", ta = 1, d_ = [-20, 18, 20], f_ = [0, 0, 0], yl = Math.min(2, window.devicePixelRatio || 1), Tl = 2560 * 1440, p_ = { antialias: !0, alpha: !1, powerPreference: "low-power" }, ls = en - 5, Sc = 4, m_ = ls - 2, __ = () => {
  let i = [], e = 0, t = null;
  function n(l, c) {
    i.push(async () => {
      let u = 0;
      const d = 3;
      for (; u < d; )
        try {
          const m = await (await fetch(l)).arrayBuffer(), _ = new Uint32Array(m, 0, 1)[0], v = JSON.parse(new TextDecoder().decode(new Uint8Array(m, 4, _))), { vertexCount: p, indexCount: h, attributes: R } = v;
          let y = 4 + _;
          const M = new ln(), L = {};
          R.forEach((D) => {
            const { id: A, componentSize: C, storageType: S, needsPack: g, packedComponents: T } = D, U = A === "indices" ? h : p, F = window[S], H = new F(m, y, U * C), j = F.BYTES_PER_ELEMENT;
            let k;
            g ? k = r(H, U, C, T, S) : (L[A] = y, k = H), A === "indices" ? M.setIndex(new Wt(k, 1)) : M.setAttribute(A, new Wt(k, C)), y += U * C * j;
          }), c && c(M), a();
          break;
        } catch (f) {
          u++, u >= d ? console.error(`Tower animation | error loading buffer [%c${l}] after ${d} attempts, %O: `, "font-weight:900;", f) : (console.warn(`Tower animation | error loading buffer: ${l}, attempt ${u}/${d}, retrying...`, f), await new Promise((m) => setTimeout(m, 100)));
        }
    });
  }
  function r(l, c, u, d, f) {
    const m = d.length, _ = f.indexOf("Int") === 0, v = 1 << l.BYTES_PER_ELEMENT * 8, p = _ ? v * 0.5 : 0, h = 1 / v, R = new Float32Array(c * u);
    for (let y = 0, M = 0; y < c; y++)
      for (let L = 0; L < m; L++) {
        const { delta: D, from: A } = d[L];
        R[M] = (l[M] + p) * h * D + A, M++;
      }
    return R;
  }
  function s(l, c) {
    i.push(() => {
      new lh().load(
        l,
        (u) => {
          u && (u.minFilter = hu, u.magFilter = Vt, u.generateMipmaps = !0, u.anisotropy = 1, u.flipY = !0, c == null || c(u), a());
        },
        void 0,
        (u) => console.error(`Tower animation | error loading texture [%c${l}] %O: `, "font-weight:900;", u)
      );
    });
  }
  function o(l) {
    e = 0, t = l, i == null || i.forEach((c) => c());
  }
  function a() {
    e++, e === i.length && (i = [], t == null || t());
  }
  return {
    loadBuf: n,
    loadTexture: s,
    start: o,
    list: i,
    loadedCount: e,
    onLoadCallback: t
  };
}, Tn = __();
class g_ {
  constructor() {
    Ce(this, "PI", Math.PI);
  }
  clamp(e, t, n) {
    return e < t ? t : e > n ? n : e;
  }
  mix(e, t, n) {
    return e + (t - e) * n;
  }
  cUnMix(e, t, n) {
    return this.clamp((n - e) / (t - e), 0, 1);
  }
  saturate(e) {
    return this.clamp(e, 0, 1);
  }
  fit(e, t, n, r, s, o) {
    return e = this.cUnMix(t, n, e), o && (e = o(e)), r + e * (s - r);
  }
}
const De = new g_(), v_ = () => {
  function i(s) {
    return (s *= 2) < 1 ? 0.5 * s * s * s * s : -0.5 * ((s -= 2) * s * s * s - 2);
  }
  function e(s) {
    return Math.sin(s * Math.PI / 2);
  }
  function t(s) {
    return s * s * ((1.70158 + 1) * s - 1.70158);
  }
  function n(s, o = 1.70158) {
    return --s * s * ((o + 1) * s + o) + 1;
  }
  function r(s) {
    const o = 2.5949095;
    return (s *= 2) < 1 ? 0.5 * s * s * ((o + 1) * s - o) : 0.5 * ((s -= 2) * s * ((o + 1) * s + o) + 2);
  }
  return {
    quartInOut: i,
    sineOut: e,
    backIn: t,
    backOut: n,
    backInOut: r
  };
};
function x_(i, e, t, n, r) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  function s(l, c, u, d, f) {
    const m = 3 * (u - c), _ = 3 * (d - u) - m;
    return (((f - c - m - _) * l + _) * l + m) * l + c;
  }
  function o(l, c, u, d = 1e-6) {
    let f = 0, m = 1, _ = l;
    for (; f < m; ) {
      const v = s(_, 0, c, u, 1);
      if (Math.abs(v - l) < d)
        return _;
      v < l ? f = _ : m = _, _ = (f + m) / 2;
    }
    return _;
  }
  const a = o(i, e, n);
  return s(a, 0, t, r, 1);
}
function wi(i) {
  return x_(i, 0.3, 0, 0, 1);
}
const ji = v_();
var jr = `#ifndef IS_BASE
    attribute vec3 instancePos;
    attribute vec4 instanceOrient;
    attribute float instanceShowRatio;
    attribute vec3 instanceSpinPivot;
    attribute vec4 instanceSpinOrient;
    attribute vec3 instanceColor;
    attribute float instanceIsActive;
    attribute vec2 instanceNextDirection;
    varying float v_clipY;
#endif

#ifdef IS_DEPTH
    varying vec2 vHighPrecisionZW;
#else
    varying vec3 v_modelPosition;
    varying vec3 v_viewPosition;
    varying vec3 v_worldPosition;
    varying vec3 v_viewNormal;
    varying vec3 v_worldNormal;
    varying vec2 v_uv;
    varying float v_ao;
    varying vec3 v_color;

    uniform sampler2D u_infoTexture;
    uniform sampler2D u_infoTextureLinear;
    uniform float u_endAnimationRatio;
    uniform float u_time;
uniform mat4 directionalShadowMatrix[1];
varying vec4 vDirectionalShadowCoord[1];
varying vec4 v_goboCoord;

struct DirectionalLightShadow {
    float shadowBias;
    float shadowNormalBias;
    float shadowRadius;
    vec2 shadowMapSize;
};

uniform DirectionalLightShadow directionalLightShadows[1];
#endif

vec3 qrotate(vec4 q, vec3 v) {
	return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

float linearstep(float edge0, float edge1, float x) {
    return  clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}

void main () {
    vec3 pos = position;
    vec3 nor = normal;

    #ifndef IS_BASE
        pos.y += 1.01 * (instanceShowRatio - 1.0);
        v_clipY = pos.y + 0.51;

        
        pos = qrotate(instanceSpinOrient, pos - instanceSpinPivot) + instanceSpinPivot;
        nor = qrotate(instanceSpinOrient, nor);

        
        pos = qrotate(instanceOrient, pos) + instancePos;
        nor = qrotate(instanceOrient, nor);
    #endif

    vec4 viewPos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * viewPos;

    #ifndef IS_DEPTH

        vec3 viewNormal = normalMatrix * nor;
        vec4 worldPosition = (modelMatrix * vec4(pos, 1.0));

        v_modelPosition = position;
        v_viewPosition = -viewPos.xyz;
        v_worldPosition = worldPosition.xyz;
        v_viewNormal = normalMatrix * nor;
        v_worldNormal = inverseTransformDirection(viewNormal, viewMatrix);

        #ifndef IS_BASE
            v_color = instanceColor;
        #endif

    
    vec4 shadowWorldPosition;

    #ifdef IS_BASE
    shadowWorldPosition = vec4((position - vec3(0., -2.5, 0.)) * 1.005 + vec3(0., -2.5, 0.), 1.);
    shadowWorldPosition = modelMatrix * shadowWorldPosition;
    #else
    shadowWorldPosition = vec4(position * 0.98, 1.);
    shadowWorldPosition.y += instanceShowRatio - 1.;
    shadowWorldPosition.xyz = qrotate(instanceSpinOrient, shadowWorldPosition.xyz - instanceSpinPivot) + instanceSpinPivot;
    shadowWorldPosition.xyz = qrotate(instanceOrient, shadowWorldPosition.xyz) + instancePos;
    shadowWorldPosition = modelMatrix * shadowWorldPosition;
    #endif
    vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * shadowWorldPosition;

    v_goboCoord = directionalShadowMatrix[0] * (0.2 * vec4(sin(u_time * 0.1), 0.0, cos(u_time * 0.15), 0.0) + worldPosition + vec4(v_worldNormal * directionalLightShadows[0].shadowNormalBias, 0. ));

    #ifndef IS_BASE
            v_uv = (instancePos.xz + 3.5) / 7.0;
        #else
            v_uv = (position.xz + 3.5) / 7.0;
        #endif

        
        float ao = 0.0;
        vec4 infoTexture = texture2D(u_infoTexture, vec2(1.0 - v_uv.y, v_uv.x));

        #ifndef IS_BASE

            float texel = 1.0 / 7.0;

            vec2 infoTextureUv = vec2(1.0 - v_uv.y, v_uv.x);
            vec2 infoTextureUvNext = infoTextureUv + texel * vec2(instanceNextDirection.y, instanceNextDirection.x);

            vec3 texelVec = vec3(texel, -texel, 0.0);
            float activeRatio = mix(1.0, infoTexture.x, instanceIsActive);

            vec4 infoTextureTop = vec4(1.0);
            vec4 infoTextureRight = vec4(1.0);
            vec4 infoTextureBottom = vec4(1.0);
            vec4 infoTextureLeft = vec4(1.0);

            if (instanceIsActive > 0.5) {
                infoTextureTop = mix(texture2D(u_infoTextureLinear, infoTextureUv + texelVec.xz), texture2D(u_infoTextureLinear, infoTextureUvNext + texelVec.xz), 1. - activeRatio);
                infoTextureRight = mix(texture2D(u_infoTextureLinear, infoTextureUv + texelVec.zx), texture2D(u_infoTextureLinear, infoTextureUvNext + texelVec.zx), 1. - activeRatio);
                infoTextureBottom = mix(texture2D(u_infoTextureLinear, infoTextureUv + texelVec.yz), texture2D(u_infoTextureLinear, infoTextureUvNext + texelVec.yz), 1. - activeRatio);
                infoTextureLeft = mix(texture2D(u_infoTextureLinear, infoTextureUv + texelVec.zy), texture2D(u_infoTextureLinear, infoTextureUvNext + texelVec.zy), 1. - activeRatio);
            }

            float texel2 = texel * 2.0;
            ao = max(ao, v_uv.y < texel2 ? 0.0 : infoTextureTop.x * max(-nor.z, 0.0));
            ao = max(ao, v_uv.x > 1.0 - texel2 ? 0.0 : infoTextureRight.x * max(nor.x, 0.0));
            ao = max(ao, v_uv.y > 1.0 - texel2 ? 0.0 : infoTextureBottom.x * max(nor.z, 0.0));
            ao = max(ao, v_uv.x < texel2 ? 0.0 : infoTextureLeft.x * max(-nor.x, 0.0));
            ao = 1.0 - ao * 0.8;
            ao *= clamp(v_worldNormal.y * 0.5 + 0.5 + ao, 0.0, 1.0);

        #else

            float aoThreshold = 2.5;
            float depth = 0.03;
            ao = linearstep(aoThreshold - depth, aoThreshold, abs(v_modelPosition.x));
            ao += linearstep(aoThreshold - depth, aoThreshold, abs(v_modelPosition.z));
            aoThreshold = 0.5;
            ao += linearstep(aoThreshold + depth, aoThreshold, -v_modelPosition.y + depth * u_endAnimationRatio * 0.75);
            ao = min(1.0, ao);

        #endif

        v_ao = ao;

    #else

        vHighPrecisionZW = gl_Position.zw;

    #endif

}`, bl = `uniform vec3 u_lightPosition;
uniform sampler2D u_infoTexture;
uniform sampler2D u_infoTextureLinear;
uniform sampler2D u_goboTexture;
uniform float u_goboIntensity;

uniform float u_endAnimationRatio;
uniform float u_time;

#ifdef IS_BASE
uniform vec2 u_resolution;
uniform vec3 u_bgColor1;
uniform vec3 u_bgColor2;
uniform vec3 u_color;
uniform vec3 u_blocksColor;
uniform float u_yDisplacement;
uniform float u_successAnimationRatio;
uniform vec3 u_successColor;
uniform vec3 u_prevSuccessColor;
#endif

varying vec3 v_modelPosition;
varying vec3 v_worldPosition;

varying vec3 v_viewNormal;
varying vec3 v_worldNormal;

varying vec2 v_uv;

varying float v_ao;
varying vec3 v_color;
varying float v_clipY;

#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

vec3 SRGBtoLinear(vec3 srgb) {
    return pow(srgb, vec3(2.2));
}

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

float linearstep(float edge0, float edge1, float x) {
    return  clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

vec3 LinearToneMapping( vec3 color, float toneMappingExposure ) {
	return saturate( toneMappingExposure * color );
}

vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}

vec3 ACESFilmicToneMapping( vec3 color, float toneMappingExposure ) {

	
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), 
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), 
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	
	return saturate( color );
}

vec4 cubic(float v) {
    vec4 n = vec4(1.0, 2.0, 3.0, 4.0) - v;
    vec4 s = n * n * n;
    float x = s.x;
    float y = s.y - 4.0 * s.x;
    float z = s.z - 4.0 * s.y + 6.0 * s.x;
    float w = 6.0 - x - y - z;
    return vec4(x, y, z, w);
}

vec4 textureBicubic(sampler2D t, vec2 texCoords, vec2 textureSize) {
   vec2 invTexSize = 1.0 / textureSize;
   texCoords = texCoords * textureSize - 0.5;

    vec2 fxy = fract(texCoords);
    texCoords -= fxy;
    vec4 xcubic = cubic(fxy.x);
    vec4 ycubic = cubic(fxy.y);

    vec4 c = texCoords.xxyy + vec2 (-0.5, 1.5).xyxy;

    vec4 s = vec4(xcubic.xz + xcubic.yw, ycubic.xz + ycubic.yw);
    vec4 offset = c + vec4 (xcubic.yw, ycubic.yw) / s;

    offset *= invTexSize.xxyy;

    vec4 sample0 = texture2D(t, offset.xz);
    vec4 sample1 = texture2D(t, offset.yz);
    vec4 sample2 = texture2D(t, offset.xw);
    vec4 sample3 = texture2D(t, offset.yw);

    float sx = s.x / (s.x + s.y);
    float sy = s.z / (s.z + s.w);

    return mix(
       mix(sample3, sample2, sx), mix(sample1, sample0, sx)
    , sy);
}

#include <packing>

uniform sampler2D directionalShadowMap[1];
varying vec4 vDirectionalShadowCoord[1];
varying vec4 v_goboCoord;

struct DirectionalLightShadow {
    float shadowBias;
    float shadowNormalBias;
    float shadowRadius;
    vec2 shadowMapSize;
};

uniform DirectionalLightShadow directionalLightShadows[1];
uniform bool receiveShadow;
struct DirectionalLight {
    vec3 direction;
    vec3 color;
};
uniform DirectionalLight directionalLights[1];

float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
    return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
}

float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
    float shadow = 1.0;

    shadowCoord.xyz /= shadowCoord.w;
    shadowCoord.z += shadowBias;

    bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
    bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

    if ( frustumTest ) {
        vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
        float dx = texelSize.x;
        float dy = texelSize.y;

        vec2 uv = shadowCoord.xy;
        vec2 f = fract( uv * shadowMapSize + 0.5 );
        uv -= f * texelSize;

        shadow = (
        texture2DCompare( shadowMap, uv, shadowCoord.z ) +
        texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
        texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
        texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
        mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
        texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
        f.x ) +
        mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
        texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
        f.x ) +
        mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
        texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
        f.y ) +
        mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
        texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
        f.y ) +
        mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
        texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
        f.x ),
        mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
        texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
        f.x ),
        f.y )
        ) * ( 1.0 / 9.0 );
    }
    return shadow;
}

#include <getBlueNoise>

void main () {

    #ifndef IS_BASE
    	if (v_clipY < 0.0) discard;
    #endif

    #ifdef IS_BASE
    	vec4 infoTexture = texture2D(u_infoTexture, vec2(1.0 - v_uv.y, v_uv.x));
    #endif

	vec3 viewNormal = normalize(v_viewNormal);
	vec3 N = normalize(v_worldNormal); 
	vec3 V = normalize(cameraPosition - v_worldPosition); 
	vec3 L = u_lightPosition - v_worldPosition; 
	float lightDistance = length(L);
	L /= lightDistance;
	vec3 H = normalize(L + V); 

    
    float attenuation = 1. / (0.08 * lightDistance + 0.001 * lightDistance * lightDistance);
	float NdL = max(0., dot(N, L));
	float NdV = max(0., dot(N, V));
	float specular = pow(max(0., dot(N, H)), 50.);

    
    float ao = v_ao;

    
    float shadowMask = 1.0;
    DirectionalLightShadow directionalLight = directionalLightShadows[0];
    vec3 noises = 0.*getBlueNoise(gl_FragCoord.xy);
    shadowMask = getShadow( directionalShadowMap[0], directionalLight.shadowMapSize, directionalLight.shadowBias + noises.z * -0.001, directionalLight.shadowRadius, vDirectionalShadowCoord[0] + vec4((noises.xy - 0.5) / directionalLight.shadowMapSize, 0.0, 0.0));

    shadowMask *= smoothstep(-.5, .5, dot(v_worldNormal, normalize(u_lightPosition)));
    #ifdef IS_BASE
    shadowMask -= 0.9 * infoTexture.x * linearstep(-0.525, -0.5, v_modelPosition.y);
    shadowMask = saturate(shadowMask);
    #endif

    float gobo = 1.0 - u_goboIntensity * texture2D(u_goboTexture, (v_goboCoord.yx / v_goboCoord.w + 0.5) * 0.8 - 0.5).r;

    
    #ifdef IS_BASE
	vec3 albedo = (u_color);
	albedo = mix(albedo, (u_prevSuccessColor), step(-1.5, v_modelPosition.y));
	albedo = mix(albedo, (u_successColor), smoothstep(0., 0.05, u_successAnimationRatio) * linearstep(1., .5, u_successAnimationRatio));
    #else
        vec3 albedo = (v_color);
    #endif
	vec3 color = albedo * (0.65 + 0.35 * NdL) + specular * 0.12;
	color += clamp(N.y, 0.0, 0.1);
    color *= attenuation;
    color += 0.1 * (1.0 - NdV);
    color += 0.1 * shadowMask * gobo;
    color *= 0.4 + 0.6  * shadowMask * linearstep(0.1, 1.0, gobo);

    #ifdef IS_BASE
	vec4 infoTextureLinear = textureBicubic(u_infoTextureLinear, vec2(1.0 - v_uv.y, v_uv.x), vec2(7.0));
	float blockAo = smoothstep(0.7, 0.1, infoTextureLinear.x);
	vec3 blockAoColor = u_blocksColor * (1. - blockAo);

	
	float giFactor = infoTextureLinear.x * linearstep(-0.55, -0.5, v_modelPosition.y) * linearstep(0.5, 0.0, u_endAnimationRatio);
	color = mix(color, (color + 0.2) * u_blocksColor, 1.2 * giFactor);

	color *= saturate(1.5 - infoTexture.x * linearstep(-0.525, -0.5, v_modelPosition.y));
	color *= min(1., max(blockAo * 0.5 + 0.5 + u_endAnimationRatio, linearstep(-0.5, -0.55, v_modelPosition.y)));
    #else
		color += 0.5 * albedo * linearstep(1.0, 0.0, u_endAnimationRatio) * (1.0 - ao);
    #endif
	color *= 0.3 + 0.7 * ao;

	float luma = dot(color, vec3(0.299, 0.587, 0.114));
	color = mix(vec3(luma), color, 1.5);

	gl_FragColor = vec4(linearToSRGB(ACESFilmicToneMapping(color, 0.8)), 1.);

    #ifdef IS_BASE
        vec2 screenUv = gl_FragCoord.xy / u_resolution;
        float alpha = smoothstep(-6.0, -1.0, v_modelPosition.y + u_yDisplacement);
        gl_FragColor.rgb = mix(linearToSRGB(mix(u_bgColor1, u_bgColor2, screenUv.y)), gl_FragColor.rgb, alpha);
    #endif

}`, Al = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;
varying float v_clipY;

void main() {
    #ifndef IS_BASE
        if (v_clipY < 0.0) discard;
    #endif

	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}`;
let $r, dt = 0;
const S_ = 6;
let Qi = 0, er = 0, Ci = 0, Pi = 0, Di = 0, tr = 0, nr = 1;
const M_ = () => {
  function i() {
    const a = ({ status: l, result: c, completeAnimationLevel: u }) => {
      l === It.RESULT && (c === it.COMPLETED || c === it.REPLAY) && e(u);
    };
    rt.subscribe((l) => l, a);
  }
  function e(a) {
    $r = a;
  }
  function t() {
    dt = 0, Qi = 0, er = 0, Ci = 0, Pi = 0, Di = 0, tr = 0, nr = 1, $r = null;
  }
  function n() {
    nr = 1, Qi = 0, er = 0, Ci = De.fit(dt, 0.2, 0.49, 0, 1.2), Di = De.fit(dt, 0.45, 0.55, 0, 1), tr = De.fit(dt, 0.45, 0.7, 0, 1), Pi = De.fit(dt, 0.55, 1, 0, 1);
  }
  function r() {
    nr = 1.5, er = 0, Qi = De.fit(dt, 0.1, 0.45, 0, 1), Ci = De.fit(dt, 0.15, 0.49, 0, 1.2), Di = De.fit(dt, 0.45, 0.55, 0, 1), tr = De.fit(dt, 0.45, 0.7, 0, 1), Pi = De.fit(dt, 0.55, 1, 0, 1);
  }
  function s() {
    nr = 2, Qi = De.fit(dt, 0.1, 0.5, 0, 1), er = De.fit(dt, 0.2, 0.51, 0, 1), Ci = De.fit(dt, 0.2, 0.49, 0, 1.2), Di = De.fit(dt, 0.45, 0.55, 0, 1), tr = De.fit(dt, 0.45, 0.7, 0, 1), Pi = De.fit(dt, 0.6, 1, 0, 1);
  }
  function o(a) {
    switch (dt += ($r ? 1 : 0) * a / S_, dt = De.clamp(dt, 0, 1), $r) {
      case es.ONE:
        n();
        break;
      case es.TWO:
        r();
        break;
      case es.THREE:
        s();
        break;
    }
    dt >= 1 && (rt.getState().setAnimationTypeEnded("win"), t());
  }
  return {
    init: i,
    update: o,
    resetRatios: t
  };
}, wl = M_();
let na = !1, $n = 0;
const E_ = 2.5;
let sr = 0, ar = 0;
const y_ = () => {
  function i() {
    const n = ({ status: r, result: s }) => {
      r === It.RESULT && s === it.STOP && (na = !0);
    };
    rt.subscribe((r) => r, n);
  }
  function e() {
    $n = 0, ar = 0, sr = 0, na = !1;
  }
  function t(n) {
    $n += (na ? 1 : 0) * n / E_, $n = De.clamp($n, 0, 1), sr = De.fit($n, 0, 0.5, 0, 2.5), ar = De.fit($n, 0.4, 0.65, 0, 1), $n >= 1 && (rt.getState().setAnimationTypeEnded("stop"), e());
  }
  return {
    init: i,
    update: t,
    resetRatios: e
  };
}, Rl = y_();
let ia = !1, vn = 0;
const T_ = 3.5;
let Li = 0, ni = 0, gs = 0, or = 0;
const b_ = () => {
  function i() {
    const n = ({ status: r, result: s }) => {
      r === It.RESULT && s === it.FAILED && (ia = !0);
    };
    rt.subscribe((r) => r, n);
  }
  function e() {
    vn = 0, Li = 0, ni = 0, or = 0, gs = 0, ia = !1;
  }
  function t(n) {
    vn += (ia ? 1 : 0) * n / T_, vn = De.clamp(vn, 0, 1), Li = De.fit(vn, 0, 0.3, 0, 1), ni = De.fit(vn, 0.35, 0.65, 0, 1), gs = De.fit(vn, 0.3, 0.55, 0, 2.5), or = De.fit(vn, 0.6, 0.8, 0, 1), vn >= 1 && (rt.getState().setAnimationTypeEnded("lose"), e());
  }
  return {
    init: i,
    resetRatios: e,
    update: t
  };
}, Cl = b_(), A_ = Math.PI / 2, Ti = new B();
class w_ {
  constructor() {
    Ce(this, "animation", 0);
    Ce(this, "boardDir", new be());
    Ce(this, "boardPos", new be());
    Ce(this, "pos", new B());
    Ce(this, "orient", new kt());
    Ce(this, "showRatio", 0);
    Ce(this, "spinPivot", new B());
    Ce(this, "spinOrient", new kt());
    this.animation = 0, this.boardDir = new be(), this.boardPos = new be(), this.pos = new B(), this.orient = new kt(), this.showRatio = 0, this.spinPivot = new B(), this.spinOrient = new kt();
  }
  reset() {
    this.animation = 0, this.boardDir.set(0, 0), this.boardPos.set(0, 0), this.pos.set(0, 0, 0), this.orient.identity(), this.showRatio = 0, this.spinPivot.set(0, 0, 0), this.spinOrient.identity();
  }
  update(e) {
    this.pos.set(this.boardPos.x, 0, -this.boardPos.y), this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5), Ti.set(-this.boardDir.y, 0, -this.boardDir.x), this.spinOrient.setFromAxisAngle(Ti, this.animation * A_);
  }
  addsFallAnimation(e) {
    Ti.set(this.boardDir.x, -e, -this.boardDir.y), this.pos.addScaledVector(Ti, e), Ti.set(this.boardDir.x * 0.5, 0, -this.boardDir.y * 0.5), this.spinPivot.lerp(Ti, De.saturate(e));
  }
}
const Pl = {
  blocks: [],
  firstStartAnimationRatio: 0,
  lastSpawnedBlock: null,
  cycleIndex: 0,
  animationSpeedRatio: 0,
  previousSuccessBlocksAnimationRatio: 0,
  activeBlocksCount: 0
}, sn = pr()(
  mr((i) => ({
    ...Pl,
    incCycleIndex: () => i((e) => ({ cycleIndex: e.cycleIndex + 1 })),
    reset: () => i(Pl)
  }))
), Dl = (i) => sn.setState((e) => ({ blocks: [i, ...e.blocks] })), Ll = (i) => sn.setState({ lastSpawnedBlock: i }), Il = ({ animationSpeedRatio: i, firstStartAnimationRatio: e, previousSuccessBlocksAnimationRatio: t }) => sn.setState((n) => ({
  animationSpeedRatio: i ?? n.animationSpeedRatio,
  firstStartAnimationRatio: e ?? n.firstStartAnimationRatio,
  previousSuccessBlocksAnimationRatio: t ?? n.previousSuccessBlocksAnimationRatio
})), $i = 2 * en, St = new be(), Kr = new be(), bi = new B(), Ul = new B(), ra = new kt(), Nl = new kt(), Fl = new Ae(), Jr = new Ae(), sa = new Ae(), Ai = new Ae(), Nn = new Ae(), Qr = new Ae(), K = {
  _baseMesh: void 0,
  _blocksMesh: void 0,
  _blockList: [],
  animationTotalFrames: 0,
  heroLoseAnimationPositionArray: void 0,
  heroLoseAnimationOrientArray: void 0,
  _blockRenderList: [],
  successColorRatio: 0,
  directLight: void 0,
  infoTexture: void 0,
  _instancePosArray: void 0,
  _instanceOrientArray: void 0,
  _instanceShowRatioArray: void 0,
  _instanceSpinPivotArray: void 0,
  _instanceSpinOrientArray: void 0,
  _instanceColorArray: void 0,
  _instanceIsActiveArray: void 0,
  _instanceNextDirectionArray: void 0,
  isShadowCameraHelperVisible: void 0,
  shadowCameraHelper: void 0,
  infoTextureLinear: void 0
}, R_ = () => {
  let i = _t.getState(), e = rt.getState().result, t = An.getState();
  const n = sn.getInitialState();
  let { blocks: r, ...s } = n;
  const o = new mt();
  async function a() {
    const A = Array.from({ length: $i });
    K._blockList = A.map((C) => new w_()), K._blockRenderList = [...K._blockList], Tn.loadBuf(`${Bn}/BASE.buf`, (C) => {
      l(C);
    }), Tn.loadBuf(`${Bn}/BOX.buf`, (C) => {
      c(C);
    }), Tn.loadBuf(`${Bn}/LOSE_ANIMATION.buf`, (C) => {
      const { position: S, orient: g } = C.attributes;
      K.animationTotalFrames = S.count / en, K.heroLoseAnimationPositionArray = S.array, K.heroLoseAnimationOrientArray = g.array;
    }), Tn.loadTexture(`${Bn}/gobo.jpg`, (C) => {
      C.flipY = !1, C.needsUpdate = !0, on({ u_goboTexture: { value: C } });
    }), u();
  }
  function l(A) {
    const C = {
      ...t,
      ...ds.merge([se.lights]),
      u_color: { value: new Ae(i.neutralColor) },
      u_blocksColor: { value: new Ae(i.neutralColor) },
      u_yDisplacement: { value: 0 },
      u_prevSuccessColor: {
        value: new Ae(i.neutralColor).convertSRGBToLinear()
      },
      u_successColor: { value: new Ae(i.successColor).convertSRGBToLinear() },
      u_successAnimationRatio: { value: 0 }
    }, S = new At({
      uniforms: C,
      vertexShader: jr,
      fragmentShader: bl,
      lights: !0,
      transparent: !0,
      defines: { IS_BASE: !0 }
    });
    K._baseMesh = new Pt(A, S), K._baseMesh.receiveShadow = K._baseMesh.castShadow = !0, K._baseMesh.frustumCulled = !1, K._baseMesh.customDepthMaterial = new At({
      vertexShader: jr,
      fragmentShader: Al,
      defines: { IS_DEPTH: !0, IS_BASE: !0 }
    }), o.add(K._baseMesh);
  }
  function c(A) {
    const C = new co();
    C.index = A.index, Object.keys(A.attributes).forEach((T) => {
      C.setAttribute(T, A.attributes[T]);
    }), C.instanceCount = $i;
    const S = (T, U) => {
      const F = new Float32Array($i * U);
      return C.setAttribute(T, new ps(F, U, U !== 4, 1).setUsage(yu)), F;
    };
    K._instancePosArray = S("instancePos", 3), K._instanceOrientArray = S("instanceOrient", 4), K._instanceShowRatioArray = S("instanceShowRatio", 1), K._instanceSpinPivotArray = S("instanceSpinPivot", 3), K._instanceSpinOrientArray = S("instanceSpinOrient", 4), K._instanceColorArray = S("instanceColor", 3), K._instanceIsActiveArray = S("instanceIsActive", 1), K._instanceNextDirectionArray = S("instanceNextDirection", 2);
    const g = new At({
      uniforms: {
        ...ds.merge([se.lights]),
        ...t
      },
      vertexShader: jr,
      fragmentShader: bl,
      lights: !0
    });
    K._blocksMesh = new Pt(C, g), K._blocksMesh.frustumCulled = !1, K._blocksMesh.castShadow = K._blocksMesh.receiveShadow = !0, K._blocksMesh.customDepthMaterial = new At({
      uniforms: { ...t },
      vertexShader: jr,
      fragmentShader: Al,
      defines: { IS_DEPTH: !0 }
    }), o.add(K._blocksMesh);
  }
  function u() {
    const A = (T) => i = T, C = (T) => {
      e = T;
    }, S = ({ blocks: T, ...U }) => {
      r = T, s = U;
    }, g = (T) => t = T;
    rt.subscribe((T) => T.result, C), _t.subscribe((T) => T, A), sn.subscribe((T) => T, S), An.subscribe((T) => T, g);
  }
  async function d() {
    const A = rr.getState();
    K.directLight = new dh(16777215, 1), K.directLight.castShadow = !0, K.directLight.shadow.camera.near = A.lightCameraNear, K.directLight.shadow.camera.far = A.lightCameraFar, K.directLight.shadow.camera.right = A.lightCameraSize, K.directLight.shadow.camera.left = -A.lightCameraSize, K.directLight.shadow.camera.top = A.lightCameraSize, K.directLight.shadow.camera.bottom = -A.lightCameraSize, K.directLight.shadow.bias = A.lightCameraBias, K.directLight.shadow.mapSize.width = 768, K.directLight.shadow.mapSize.height = 768, K.isShadowCameraHelperVisible = !0, K.shadowCameraHelper = new ph(K.directLight.shadow.camera), f();
    const C = new Float32Array(u_ * 4);
    for (let S = 0, g = 0; S < Sn; S++)
      for (let T = 0; T < Sn; T++, g += 4)
        C[g] = 0, C[g + 1] = 0, C[g + 2] = 1, C[g + 3] = 1;
    return K.infoTexture = new fs(C, Sn, Sn, Gt, rn), K.infoTextureLinear = new fs(C, Sn, Sn, Gt, rn, Ka, yn, yn, Vt, Vt, 0), K.infoTextureLinear.needsUpdate = !0, An.setState({
      u_infoTexture: { value: K.infoTexture },
      u_infoTextureLinear: { value: K.infoTextureLinear }
    }), K.directLight;
  }
  function f() {
    Mn.forEach((A, C) => {
      A.forEach((S, g) => {
        var U, F;
        const T = C * Ut + g;
        S.loseAnimationPositionArray = new Float32Array(K.animationTotalFrames * 3), S.loseAnimationOrientArray = new Float32Array(K.animationTotalFrames * 4);
        for (let H = 0; H < K.animationTotalFrames; H++) {
          const j = (H * en + T) * 3, k = (H * en + T) * 4;
          S.loseAnimationPositionArray.set(((U = K.heroLoseAnimationPositionArray) == null ? void 0 : U.subarray(j, j + 3)) || [], H * 3), S.loseAnimationOrientArray.set(((F = K.heroLoseAnimationOrientArray) == null ? void 0 : F.subarray(k, k + 4)) || [], H * 4);
        }
      });
    });
  }
  function m() {
    K.successColorRatio = 0, K._blockList.forEach((A) => A.reset());
  }
  function _(A) {
    var C, S;
    Fl.set(i.mainColor), Jr.set(i.successColor), sa.set(i.failColor), Ai.set(i.neutralColor).convertSRGBToLinear(), Nn.copy(Fl), e === it.FAILED && ni > 0 && Nn.copy(sa), (e === it.COMPLETED || e === it.REPLAY) && (K.successColorRatio = Math.min(1, K.successColorRatio + 0.5 * A), Nn.lerp(Jr, K.successColorRatio)), e !== it.REPLAY && e !== it.COMPLETED && Nn.lerp(Ai, De.saturate(ar + or)), Nn.convertSRGBToLinear(), Ai.convertSRGBToLinear(), Jr.convertSRGBToLinear();
    for (let g = 0; g < $i; g++) {
      const T = r.filter((H) => H.id === g)[0], U = g < r.length + (s.lastSpawnedBlock ? 1 : 0), F = U ? Nn : Ai;
      if (U && (T != null && T.isErrorBlock)) {
        let H = De.saturate(0.5 * (1 - Math.cos(T.errorPreFallAnimationTime)));
        T.errorFallAnimationTime > 0 && (H = De.saturate(0.5 * (1 - Math.cos(14 * T.errorFallAnimationTime)))), Qr.lerpColors(F, sa, H), (C = K._instanceColorArray) == null || C.set([Qr.r, Qr.g, Qr.b], g * 3);
      } else
        (S = K._instanceColorArray) == null || S.set([F.r, F.g, F.b], g * 3);
      K._instanceIsActiveArray && (K._instanceIsActiveArray[g] = U ? 1 : 0);
    }
    K._baseMesh && (K._baseMesh.material.uniforms.u_color.value.set(Ai).convertSRGBToLinear(), K._baseMesh.material.uniforms.u_blocksColor.value.copy(Nn), K._baseMesh.material.uniforms.u_successColor.value.copy(Jr), K._baseMesh.material.uniforms.u_prevSuccessColor.value.set(Ai).convertSRGBToLinear(), K._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(Nn.set(i.successColor), s.previousSuccessBlocksAnimationRatio), K._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear());
  }
  function v() {
    Mn.forEach((A) => {
      A.forEach((C) => {
        const S = C.id % Ut + 1, T = ((Math.floor(C.id / Ut) + 1) * Sn + S) * 4;
        let U = 0.5 * Ci * De.fit(Di, 0, 0.1, 1, 0);
        U += (ni > 0 ? 1 : 0) * De.fit(or, 0, 0.1, 1, 0), U += sr * De.fit(ar, 0, 0.1, 1, 0), U = Math.min(1, U), K.infoTexture && (K.infoTexture.image.data[T] = C.activeRatio * (1 - U), K.infoTexture.image.data[T + 1] = C.isOccupied || C.willBeOccupied ? 1 : 0, K.infoTexture.image.data[T + 2] = C.isMain ? 1 : 0, K.infoTexture.image.data[T + 3] = C.isBorder ? 1 : 0);
      });
    }), K.infoTexture && K.infoTextureLinear && (K.infoTexture.needsUpdate = !0, K.infoTextureLinear.needsUpdate = !0);
  }
  function p() {
    var A, C;
    if (s.lastSpawnedBlock) {
      const S = K._blockList[s.lastSpawnedBlock.id];
      s.lastSpawnedBlock.currentTile && S.boardPos.set((A = s.lastSpawnedBlock.currentTile) == null ? void 0 : A.row, (C = s.lastSpawnedBlock.currentTile) == null ? void 0 : C.col), S.showRatio = wi(De.saturate(s.lastSpawnedBlock.spawnAnimationRatioUnclamped));
    }
    r == null || r.forEach((S) => {
      var T, U, F, H;
      const g = K._blockList[S.id];
      g && (g.showRatio = wi(De.saturate(S.spawnAnimationRatioUnclamped)), S != null && S.currentTile && g.boardPos.set((T = S.currentTile) == null ? void 0 : T.row, (U = S.currentTile) == null ? void 0 : U.col), S.targetTile && g.boardDir.set(S.targetTile.row - (((F = S.currentTile) == null ? void 0 : F.row) || 0), S.targetTile.col - (((H = S.currentTile) == null ? void 0 : H.col) || 0)), g.animation = S.hasAnimationEnded ? 0 : S.easedAnimationRatio);
    });
  }
  function h(A) {
    var S, g;
    for (let T = 0; T < A; T++) {
      const U = K._blockRenderList[T];
      U.pos.toArray(K._instancePosArray || [], T * 3), U.orient.toArray(K._instanceOrientArray || [], T * 4), K._instanceShowRatioArray && (K._instanceShowRatioArray[T] = ji.quartInOut(U.showRatio)), U.spinPivot.toArray(K._instanceSpinPivotArray || [], T * 3), U.spinOrient.toArray(K._instanceSpinOrientArray || [], T * 4), (S = K._instanceNextDirectionArray) == null || S.set([U.boardDir.x, U.boardDir.y], T * 2);
    }
    const C = (g = K._blocksMesh) == null ? void 0 : g.geometry;
    if (C) {
      for (const T in C.attributes) {
        const U = C.attributes[T];
        U.isBufferAttribute && (U.addUpdateRange(0, A * U.itemSize), U.needsUpdate = !0);
      }
      C.instanceCount = A;
    }
  }
  function R(A, C) {
    if (e === it.STOP && C >= en) {
      const S = C - en, g = S % Ut - Nt, T = Math.floor(S / Ut) - Nt, U = ti.getTile(T, g);
      if (!U.isOccupied) {
        const F = De.saturate(sr - U.randomDelay);
        U.activeRatio = F, A.showRatio = wi(F), A.boardPos.set(T, g);
      }
    }
  }
  function y(A, C) {
    if (A && A.isErrorBlock && A.errorLifeCycle >= Sc - 1) {
      const S = A.currentTile, g = A.errorFallAnimationTime;
      C.boardPos.set(S.row, S.col), St.set(S.row, S.col).normalize(), Math.abs(St.x) > Math.abs(St.y) ? St.set(Math.sign(St.x), 0) : St.set(0, Math.sign(St.y)), C.boardDir.set(St.x, St.y), C.animation = De.fit(g, 0, 1, 0, 1, ji.sineOut), C.animation += Math.max(0, g - 0.8), C.update(_t.getState().deltaTime), C.addsFallAnimation(Math.max(0, g - 0.8));
    }
  }
  function M(A, C, S) {
    if (e === it.FAILED) {
      if (A) {
        const g = A.currentTile;
        if (ni > 0) {
          const T = Math.floor(ni * K.animationTotalFrames), U = Math.min(T + 1, K.animationTotalFrames - 1), F = ni * K.animationTotalFrames - T;
          bi.fromArray(g.loseAnimationPositionArray, T * 3), Ul.fromArray(g.loseAnimationPositionArray, U * 3), bi.lerp(Ul, F), bi.y *= 0.5, C.pos.set(bi.z, bi.y, -bi.x), ra.fromArray(g.loseAnimationOrientArray, T * 4), Nl.fromArray(g.loseAnimationOrientArray, U * 4), ra.slerp(Nl, F), C.orient.copy(ra);
        }
        if (Li > 0) {
          const T = De.fit(Li, 0, 1, 0, 1, ji.sineOut);
          if (St.set(g.row, g.col), St.normalize(), St.multiplyScalar(0.1 * T), C.pos.x += St.x, C.pos.z -= St.y, Li < 1) {
            const U = T * De.fit(Li, 0.5, 0.8, 1, 0);
            St.set(A.randomVector.x, A.randomVector.y), St.normalize(), St.multiplyScalar(U), Kr.set(0, 0), Kr.addScaledVector(St, 0.08 * U * Math.sin(U * 80)), C.pos.x += Kr.x, C.pos.z += Kr.y;
          }
        }
      }
      if (S >= en) {
        const g = S - en, T = g % Ut - Nt, U = Math.floor(g / Ut) - Nt, F = ti.getTile(U, T), H = De.saturate(gs - F.randomDelay);
        F.isOccupied || (F.activeRatio = H), C.showRatio = wi(H), C.boardPos.set(U, T);
      }
    }
  }
  function L(A, C) {
    if ((e === it.COMPLETED || e === it.REPLAY) && A) {
      const S = A.currentTile, g = 0.1 * (S == null ? void 0 : S.randomDelay), T = Ci - g;
      let U = De.fit(T, 0, 0.5, 0, 1, (F) => 1 - Math.pow(1 - F, 5));
      U = De.fit(T, 0.7, 1, U, 0, (F) => Math.pow(F, 5)), C.pos.y += nr * U;
    }
  }
  function D(A) {
    p(), _(A);
    let C = 0;
    for (let F = 0; F < $i; F++) {
      const H = K._blockList[F];
      H.update(A);
      const j = r.find((k) => k.id === F);
      H.showRatio > 0 && (K._blockRenderList[C++] = H), M(j, H, F), y(j, H), L(j, H), R(H, F);
    }
    v(), h(C);
    const S = Math.min(1, ar + or + Di), g = ji.backOut(S, 3), T = 1 - wi(sn.getState().firstStartAnimationRatio);
    o.position.y = -g - 2 * T, o.rotation.y = 0.5 * Math.PI * T, o.rotation.y += 2 * Math.PI * ji.quartInOut(Qi), K._baseMesh && (K._baseMesh.material.uniforms.u_yDisplacement.value = -g - 5 * T, K._baseMesh.material.uniforms.u_successAnimationRatio.value = tr);
    const U = rr.getState();
    on({
      u_endAnimationRatio: {
        value: Math.min(1, De.fit(sr, 0.5, 2, 0, 1) + De.fit(gs, 0.5, 2, 0, 1) + De.fit(dt, 0, 0.2, 0, 1))
      }
    }), K.directLight && (K.directLight.position.copy(t.u_lightPosition.value), K.directLight.shadow.camera.top = U.lightCameraSize, K.directLight.shadow.camera.bottom = -U.lightCameraSize, K.directLight.shadow.bias = U.lightCameraBias);
  }
  return {
    preload: a,
    init: d,
    reset: m,
    update: D,
    heroContainer: o
  };
}, ir = R_();
var Ol = `uniform float u_time;
uniform float u_ratio;
uniform float u_isFloating;

attribute vec3 a_instancePosition;
attribute vec4 a_instanceQuaternion;
attribute float a_instanceCurveUV;
attribute vec3 a_instanceAoN;
attribute vec3 a_instanceAoP;
attribute vec3 a_instanceRand;
attribute vec3 SN;

#ifdef IS_DEPTH

    varying vec2 vHighPrecisionZW;

#else

    varying vec3 v_modelPosition;
    varying vec3 v_viewPosition;
    varying vec3 v_worldPosition;
    varying vec3 v_viewNormal;
    varying vec3 v_worldNormal;
    varying vec3 v_modelNormal;
    varying float v_ao;
uniform mat4 directionalShadowMatrix[1];
varying vec4 vDirectionalShadowCoord[1];

struct DirectionalLightShadow {
    float shadowBias;
    float shadowNormalBias;
    float shadowRadius;
    vec2 shadowMapSize;
};

uniform DirectionalLightShadow directionalLightShadows[1];
#endif

#define PI 3.1415926538

#ifndef saturate
	#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

vec3 qrotate(vec4 q, vec3 v) {
	return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

vec4 quat_from_axis_angle(vec3 axis, float angle) {
  vec4 qr;
  float half_angle = (angle * 0.5) * 3.14159 / 180.0;
  qr.x = axis.x * sin(half_angle);
  qr.y = axis.y * sin(half_angle);
  qr.z = axis.z * sin(half_angle);
  qr.w = cos(half_angle);
  return qr;
}

float linearstep(float edge0, float edge1, float x) {
    return  clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}

float cubicInOut(float t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

void main () {
    vec3 pos = position;
    pos.y *= 1.5;
    vec3 nor = normal;

    float ratio = saturate(a_instanceCurveUV + (2.0 * u_ratio - 1.0));
    float scale = linearstep(0.0, 0.1, ratio) * linearstep(0.4, 0.3, ratio);

    if (u_isFloating < 0.5) {
        pos.xz *= scale;
        pos.y *= linearstep(0., 0.5, scale);
    }

    vec4 localQuaternion = quat_from_axis_angle(vec3(0.0, 0.0, 1.0), 200.0 * (0.8 + 0.2 * a_instanceRand.x) * u_time);
    pos = qrotate(localQuaternion, pos);
    nor = qrotate(localQuaternion, nor);
    pos = qrotate(a_instanceQuaternion, pos);
    nor = qrotate(a_instanceQuaternion, nor);

    #ifndef IS_DEPTH
        vec3 sn = qrotate(a_instanceQuaternion, qrotate(localQuaternion, SN));
        vec3 aoN = normalize(nor + sn * .5);
        vec3 aoVec = mix(a_instanceAoN, a_instanceAoP, sign(aoN) * 0.5 + 0.5);
        vec3 absN = abs(aoN);
        v_ao = pow(dot(absN, aoVec) / (absN.x + absN.y + absN.z), 1.0);

    #endif

    vec3 instancePos = a_instancePosition;
    if (u_isFloating > 0.5) {
        instancePos.xz *= 1.5;
        instancePos.y = mix(
            -10.0,
            -6.0 + 10.0 * abs(a_instanceRand.y),
            cubicInOut(linearstep(0.0, 0.4 - 0.2 * abs(a_instanceRand.z), u_ratio) * linearstep(1.0, 0.6 + 0.2 * abs(a_instanceRand.x), u_ratio))
        );
    }
    pos += instancePos;

    vec3 viewNormal = normalMatrix * nor;
    vec4 worldPosition = (modelMatrix * vec4(pos, 1.0));
    vec4 viewPos = modelViewMatrix * vec4(pos, 1.0);

    gl_Position = projectionMatrix * viewPos;

    #ifndef IS_DEPTH

        v_modelPosition = position;
        v_viewPosition = -viewPos.xyz;
        v_worldPosition = worldPosition.xyz;
        v_viewNormal = normalMatrix * nor;
        v_worldNormal = inverseTransformDirection(viewNormal, viewMatrix);
        v_modelNormal = normal;
        vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * worldPosition + vec4(v_worldNormal * directionalLightShadows[0].shadowNormalBias, 0. );
    #else

        vHighPrecisionZW = gl_Position.zw;

    #endif
}`, C_ = `uniform vec3 u_bgColor1;
uniform vec3 u_bgColor2;
uniform vec2 u_resolution;
uniform sampler2D u_matcapTexture;
uniform sampler2D u_goboTexture;
varying vec4 vDirectionalShadowCoord[1];
varying vec3 v_viewPosition;
varying vec3 v_worldPosition;
varying vec3 v_viewNormal;
varying vec3 v_modelNormal;
varying vec3 v_worldNormal;
varying float v_ao;

#define PI 3.14159265359

#ifndef saturate
	#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

vec3 SRGBtoLinear(vec3 srgb) {
    return pow(srgb, vec3(2.2));
}

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

float linearstep(float edge0, float edge1, float x) {
    return  clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

vec3 LinearToneMapping( vec3 color, float toneMappingExposure ) {
	return saturate( toneMappingExposure * color );
}

vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}

vec3 ACESFilmicToneMapping( vec3 color, float toneMappingExposure ) {

	
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), 
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), 
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	
	return saturate( color );
}

void main () {
	vec3 viewNormal = normalize(v_viewNormal);
    vec3 viewDir = normalize( v_viewPosition );

	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 matcapUv = vec2( dot( x, viewNormal ), dot( y, viewNormal ) ) * 0.495 + 0.5; 
    vec3 matcapColor = texture2D(u_matcapTexture, vec2(matcapUv.x, matcapUv.y)).rgb;

	vec3 color = SRGBtoLinear(matcapColor);
    color *= 1.0 + 2.0 * clamp(v_worldNormal.y, 0.0, 1.0);
	color *= v_ao;
    color *= 1.0 - 0.5 * dot(vec3(1.0), fwidth(v_modelNormal));

    float gobo = 1.0 - texture2D(u_goboTexture, (vDirectionalShadowCoord[0].yx / vDirectionalShadowCoord[0].w + 0.5) * 0.8 - 0.5).r;
	color *= 0.3 + 0.7 * linearstep(0.1, 1.0, gobo);

    gl_FragColor = vec4(linearToSRGB(ACESFilmicToneMapping(color, 0.9)), 1.);

    vec2 screenUv = gl_FragCoord.xy / u_resolution;
    float alpha = linearstep(-6.0, -2.0, v_worldPosition.y);
    gl_FragColor.rgb = mix(linearToSRGB(mix(u_bgColor1, u_bgColor2, screenUv.y)), gl_FragColor.rgb, alpha);

}`, P_ = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}`;
const Mc = new mt(), D_ = () => {
  let i, e = null, t = null, n = null, r = null, s = null, o = null, a = null, l = null, c = 0, u = 0, d, f;
  const m = {
    u_time: { value: 0 },
    u_ratio: { value: 0 },
    u_isFloating: { value: 1 }
  };
  async function _() {
    Tn.loadTexture(`${Bn}/matcap_gold.jpg`, (M) => {
      d = M, d.needsUpdate = !0;
    }), Tn.loadBuf(`${Bn}/COIN.buf`, (M) => {
      i = M;
    }), Tn.loadBuf(`${Bn}/COIN_PLACEMENT.buf`, (M) => {
      const { position: L, aoN: D, aoP: A, curveu: C, orient: S } = M.attributes;
      r = L.array, a = D.array, l = A.array, o = C.array, s = S.array, c = L.count;
    });
  }
  function v() {
    p(), h(), R(), e && Mc.add(e);
  }
  function p() {
    i.computeVertexNormals();
    const M = new co();
    M.index = i.index, Object.entries(i.attributes).forEach(([D, A]) => M.setAttribute(D, A)), f = new Float32Array(c * 3).map(() => Math.random() * 2 - 1), [
      ["a_instancePosition", r, 3],
      ["a_instanceQuaternion", s, 4],
      ["a_instanceCurveUV", o, 1],
      ["a_instanceAoN", a, 3],
      ["a_instanceAoP", l, 3],
      ["a_instanceRand", f, 3]
    ].forEach(([D, A, C]) => {
      M.setAttribute(D, new ps(A, C));
    }), t = M;
  }
  function h() {
    const M = An.getState();
    n = new At({
      uniforms: {
        ...M,
        ...m,
        ...ds.merge([se.lights]),
        u_matcapTexture: { value: d }
      },
      vertexShader: Ol,
      fragmentShader: C_,
      lights: !0
    });
  }
  function R() {
    t && n && (e = new Pt(t, n), e.frustumCulled = !1, e.castShadow = !0, e.receiveShadow = !0, e.customDepthMaterial = new At({
      uniforms: { ...m },
      vertexShader: Ol,
      fragmentShader: P_,
      defines: { IS_DEPTH: !0 }
    }));
  }
  function y(M) {
    const L = Pi === 0;
    u = L ? er : Pi, m.u_ratio.value = u, m.u_time.value += M, m.u_isFloating.value = L ? 1 : 0, e && (e.rotation.y = 0 * u, e.visible = u > 0 && u < 1);
  }
  return {
    preload: _,
    init: v,
    update: y
  };
};
var L_ = `uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}`;
const I_ = () => {
  async function e() {
    Tn.loadTexture(`${Bn}/LDR_RGB1_0.png`, (n) => {
      n.generateMipmaps = !1, n.minFilter = n.magFilter = Ot, n.wrapS = n.wrapT = cs, n.needsUpdate = !0, on({ u_blueNoiseTexture: { value: n } }), on({ u_blueNoiseTexelSize: { value: new be(1 / 128, 1 / 128) } });
    }), Ne.getBlueNoise = L_;
  }
  function t(n) {
    on({ u_blueNoiseCoordOffset: { value: new be(Math.random(), Math.random()) } });
  }
  return {
    update: t,
    preInit: e,
    TEXTURE_SIZE: 128
  };
}, Bl = { type: "change" }, aa = { type: "start" }, zl = { type: "end" };
class U_ extends ai {
  constructor(e, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new B(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = Math.PI * 0.2, this.maxPolarAngle = Math.PI * 0.45, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !0, this.dampingFactor = 0.15, this.enableZoom = !1, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 0.5, this.enablePan = !1, this.panSpeed = 1, this.screenSpacePanning = !0, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: li.ROTATE, MIDDLE: li.DOLLY, RIGHT: li.PAN }, this.touches = { ONE: ci.ROTATE, TWO: ci.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.scale = 1, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.scale = 1, n.object.updateProjectionMatrix(), n.dispatchEvent(Bl), n.update(), s = r.NONE;
    }, this.update = function() {
      const w = new B(), J = new kt().setFromUnitVectors(e.up, new B(0, 1, 0)), ee = J.clone().invert(), ie = new B(), Le = new kt(), Q = 2 * Math.PI;
      return function() {
        const we = n.object.position;
        w.copy(we).sub(n.target), w.applyQuaternion(J), a.setFromVector3(w), n.autoRotate && s === r.NONE && C(D()), n.enableDamping ? (a.theta += l.theta * n.dampingFactor, a.phi += l.phi * n.dampingFactor) : (a.theta += l.theta, a.phi += l.phi);
        let Me = n.minAzimuthAngle, le = n.maxAzimuthAngle;
        isFinite(Me) && isFinite(le) && (Me < -Math.PI ? Me += Q : Me > Math.PI && (Me -= Q), le < -Math.PI ? le += Q : le > Math.PI && (le -= Q), Me <= le ? a.theta = Math.max(Me, Math.min(le, a.theta)) : a.theta = a.theta > (Me + le) / 2 ? Math.max(Me, a.theta) : Math.min(le, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe();
        let He = n.enableDamping ? (n.scale - 1) * n.dampingFactor + 1 : n.scale;
        return a.radius *= He, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c), w.setFromSpherical(a), w.applyQuaternion(ee), we.copy(n.target).add(w), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, c.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), c.set(0, 0, 0)), n.scale = n.scale / He, u || ie.distanceToSquared(n.object.position) > o || 8 * (1 - Le.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Bl), ie.copy(n.object.position), Le.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    }();
    const n = this, r = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = r.NONE;
    const o = 1e-6, a = new $o(), l = new $o(), c = new B();
    let u = !1;
    const d = new be(), f = new be(), m = new be(), _ = new be(), v = new be(), p = new be(), h = new be(), R = new be(), y = new be(), M = [], L = {};
    function D() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function A() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function C(w) {
      l.theta -= w;
    }
    function S(w) {
      l.phi -= w;
    }
    const g = function() {
      const w = new B();
      return function(ee, ie) {
        w.setFromMatrixColumn(ie, 0), w.multiplyScalar(-ee), c.add(w);
      };
    }(), T = function() {
      const w = new B();
      return function(ee, ie) {
        n.screenSpacePanning === !0 ? w.setFromMatrixColumn(ie, 1) : (w.setFromMatrixColumn(ie, 0), w.crossVectors(n.object.up, w)), w.multiplyScalar(ee), c.add(w);
      };
    }(), U = function() {
      const w = new B();
      return function(ee, ie) {
        const Le = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Q = n.object.position;
          w.copy(Q).sub(n.target);
          let fe = w.length();
          fe *= Math.tan(n.object.fov / 2 * Math.PI / 180), g(2 * ee * fe / Le.clientHeight, n.object.matrix), T(2 * ie * fe / Le.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (g(ee * (n.object.right - n.object.left) / n.object.zoom / Le.clientWidth, n.object.matrix), T(ie * (n.object.top - n.object.bottom) / n.object.zoom / Le.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function F(w) {
      n.object.isPerspectiveCamera ? n.scale /= w : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * w)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function H(w) {
      n.object.isPerspectiveCamera ? n.scale *= w : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / w)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function j(w) {
      d.set(w.clientX, w.clientY);
    }
    function k(w) {
      h.set(w.clientX, w.clientY);
    }
    function ne(w) {
      _.set(w.clientX, w.clientY);
    }
    function W(w) {
      f.set(w.clientX, w.clientY), m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      C(2 * Math.PI * m.x / J.clientHeight), S(2 * Math.PI * m.y / J.clientHeight), d.copy(f), n.update();
    }
    function oe(w) {
      R.set(w.clientX, w.clientY), y.subVectors(R, h), y.y > 0 ? F(A()) : y.y < 0 && H(A()), h.copy(R), n.update();
    }
    function pe(w) {
      v.set(w.clientX, w.clientY), p.subVectors(v, _).multiplyScalar(n.panSpeed), U(p.x, p.y), _.copy(v), n.update();
    }
    function Se(w) {
      w.deltaY < 0 ? H(A()) : w.deltaY > 0 && F(A()), n.update();
    }
    function Oe() {
      if (M.length === 1)
        d.set(M[0].pageX, M[0].pageY);
      else {
        const w = 0.5 * (M[0].pageX + M[1].pageX), J = 0.5 * (M[0].pageY + M[1].pageY);
        d.set(w, J);
      }
    }
    function Ze() {
      if (M.length === 1)
        _.set(M[0].pageX, M[0].pageY);
      else {
        const w = 0.5 * (M[0].pageX + M[1].pageX), J = 0.5 * (M[0].pageY + M[1].pageY);
        _.set(w, J);
      }
    }
    function Y() {
      const w = M[0].pageX - M[1].pageX, J = M[0].pageY - M[1].pageY, ee = Math.sqrt(w * w + J * J);
      h.set(0, ee);
    }
    function re() {
      n.enableZoom && Y(), n.enablePan && Ze();
    }
    function ge() {
      n.enableZoom && Y(), n.enableRotate && Oe();
    }
    function ae(w) {
      if (M.length === 1)
        f.set(w.pageX, w.pageY);
      else {
        const ee = $(w), ie = 0.5 * (w.pageX + ee.x), Le = 0.5 * (w.pageY + ee.y);
        f.set(ie, Le);
      }
      m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      C(2 * Math.PI * m.x / J.clientHeight), S(2 * Math.PI * m.y / J.clientHeight), d.copy(f);
    }
    function ye(w) {
      if (M.length === 1)
        v.set(w.pageX, w.pageY);
      else {
        const J = $(w), ee = 0.5 * (w.pageX + J.x), ie = 0.5 * (w.pageY + J.y);
        v.set(ee, ie);
      }
      p.subVectors(v, _).multiplyScalar(n.panSpeed), U(p.x, p.y), _.copy(v);
    }
    function We(w) {
      const J = $(w), ee = w.pageX - J.x, ie = w.pageY - J.y, Le = Math.sqrt(ee * ee + ie * ie);
      R.set(0, Le), y.set(0, Math.pow(R.y / h.y, n.zoomSpeed)), F(y.y), h.copy(R);
    }
    function Re(w) {
      n.enableZoom && We(w), n.enablePan && ye(w);
    }
    function st(w) {
      n.enableZoom && We(w), n.enableRotate && ae(w);
    }
    function tt(w) {
      n.enabled !== !1 && (M.length === 0 && (n.domElement.setPointerCapture(w.pointerId), n.domElement.addEventListener("pointermove", ze), n.domElement.addEventListener("pointerup", P)), x(w), w.pointerType === "touch" ? Qe(w) : ke(w));
    }
    function ze(w) {
      n.enabled !== !1 && (w.pointerType === "touch" ? xe(w) : Ge(w));
    }
    function P(w) {
      z(w), M.length === 0 && (n.domElement.releasePointerCapture(w.pointerId), n.domElement.removeEventListener("pointermove", ze), n.domElement.removeEventListener("pointerup", P)), n.dispatchEvent(zl), s = r.NONE;
    }
    function wt(w) {
      z(w);
    }
    function ke(w) {
      let J;
      switch (w.button) {
        case 0:
          J = n.mouseButtons.LEFT;
          break;
        case 1:
          J = n.mouseButtons.MIDDLE;
          break;
        case 2:
          J = n.mouseButtons.RIGHT;
          break;
        default:
          J = -1;
      }
      switch (J) {
        case li.DOLLY:
          if (n.enableZoom === !1) return;
          k(w), s = r.DOLLY;
          break;
        case li.ROTATE:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enablePan === !1) return;
            ne(w), s = r.PAN;
          } else {
            if (n.enableRotate === !1) return;
            j(w), s = r.ROTATE;
          }
          break;
        case li.PAN:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enableRotate === !1) return;
            j(w), s = r.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            ne(w), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(aa);
    }
    function Ge(w) {
      if (n.enabled !== !1)
        switch (s) {
          case r.ROTATE:
            if (n.enableRotate === !1) return;
            W(w);
            break;
          case r.DOLLY:
            if (n.enableZoom === !1) return;
            oe(w);
            break;
          case r.PAN:
            if (n.enablePan === !1) return;
            pe(w);
            break;
        }
    }
    function ve(w) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (n.dispatchEvent(aa), Se(w), n.dispatchEvent(zl));
    }
    function Qe(w) {
      switch (q(w), M.length) {
        case 1:
          switch (n.touches.ONE) {
            case ci.ROTATE:
              if (n.enableRotate === !1) return;
              Oe(), s = r.TOUCH_ROTATE;
              break;
            case ci.PAN:
              if (n.enablePan === !1) return;
              Ze(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case ci.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              re(), s = r.TOUCH_DOLLY_PAN;
              break;
            case ci.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ge(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(aa);
    }
    function xe(w) {
      switch (q(w), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ae(w), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ye(w), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Re(w), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          st(w), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function b(w) {
      n.enabled !== !1 && (w.preventDefault(), n.domElement.removeEventListener("contextmenu", b));
    }
    function x(w) {
      M.push(w);
    }
    function z(w) {
      delete L[w.pointerId];
      for (let J = 0; J < M.length; J++)
        if (M[J].pointerId === w.pointerId) {
          M.splice(J, 1);
          return;
        }
    }
    function q(w) {
      let J = L[w.pointerId];
      J === void 0 && (J = new be(), L[w.pointerId] = J), J.set(w.pageX, w.pageY);
    }
    function $(w) {
      const J = w.pointerId === M[0].pointerId ? M[1] : M[0];
      return L[J.pointerId];
    }
    n.domElement.addEventListener("contextmenu", b), n.domElement.addEventListener("pointerdown", tt), n.domElement.addEventListener("pointercancel", wt), n.domElement.addEventListener("wheel", ve, { passive: !1 }), this.update(), n.domElement.removeEventListener("pointercancel", wt), n.domElement.removeEventListener("wheel", ve, { passive: !1 });
  }
}
class Hl {
  constructor(e) {
    Ce(this, "id", -1);
    Ce(this, "isMoving", !1);
    Ce(this, "hasBeenSpawned", !1);
    Ce(this, "hasAnimationEnded", !1);
    Ce(this, "hasBeenEvaluated", !1);
    Ce(this, "currentTile", null);
    Ce(this, "targetTile", null);
    Ce(this, "moveAnimationRatio", 0);
    Ce(this, "spawnAnimationRatio", 0);
    Ce(this, "spawnAnimationRatioUnclamped", -Math.random());
    Ce(this, "easedAnimationRatio", 0);
    Ce(this, "randomVector", {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    });
    Ce(this, "lifeCycle", 0);
    Ce(this, "easingFunction", null);
    Ce(this, "errorLifeCycle", 0);
    Ce(this, "isErrorBlock", !1);
    Ce(this, "errorPreFallAnimationTime", 0);
    Ce(this, "errorPreFallAnimationTimeScale", 0);
    Ce(this, "errorFallAnimationTime", 0);
    Ce(this, "isErrorBlockFalling", !1);
    Ce(this, "skipFallAnimation", !1);
    this.id = e, this.init();
  }
  init() {
    this._setNewEasingFunction();
  }
  _setNewEasingFunction() {
    const e = Math.random(), t = 0.25;
    this.easingFunction = (n) => wi(De.fit(n, e * t, e * t + (1 - t), 0, 1));
  }
  updateTile() {
    this.currentTile && (this.currentTile.isOccupied = !0, this.currentTile.willBeOccupied = !1);
  }
  _findBestTile(e, t) {
    return e.find((n) => {
      var r;
      return n.isOccupied || n.willBeOccupied || n.isMain ? !1 : t || (((r = this.currentTile) == null ? void 0 : r.priority) ?? 0) >= n.priority;
    });
  }
  moveToNextTile(e = !1, t = 0) {
    if (this.hasBeenEvaluated = !0, this.moveAnimationRatio = -t * (this.isErrorBlock ? 0 : 1), !this.currentTile) return;
    if (this.isErrorBlock) {
      this.isMoving = !0, this.targetTile = this.currentTile;
      return;
    }
    this.currentTile.shuffleReachableNeighbours();
    const n = e ? this.currentTile.reachableNeighbours : this.currentTile.prioritySortedReachableNeighbours, r = this._findBestTile(n, e);
    r && (!this.currentTile.isMain || Math.random() <= 0.8) ? (this.targetTile = r, this.targetTile && (this.targetTile.willBeOccupied = !0), this.isMoving = !0) : this.hasAnimationEnded = !0;
  }
  resetAfterCycle() {
    var r, s;
    this.hasBeenEvaluated = !1, this.hasAnimationEnded = !1, this.moveAnimationRatio = 0, this.easedAnimationRatio = 0, this.isMoving = !1, this.lifeCycle++, this.isErrorBlock && !this.skipFallAnimation && (this.errorLifeCycle++, this.isErrorBlockFalling = this.errorLifeCycle >= Sc - 1);
    const e = (r = sn.getState().blocks) == null ? void 0 : r.length, t = rt.getState().flags.isFree, n = _t.getState().errorBlock;
    (s = this.currentTile) != null && s.isBorder && !n && Math.random() < 0.5 && e >= m_ && t && (s_(this), this.isErrorBlock = !0), this._setNewEasingFunction(), this.updateTile();
  }
  reset(e = !1) {
    var t, n;
    this.isErrorBlock && (this.errorLifeCycle = 0, this.isErrorBlock = !1, (t = this.currentTile) == null || t.reset(), (n = this.targetTile) == null || n.reset(), this.errorFallAnimationTime = 0, this.isErrorBlockFalling = !1, this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0, this.errorFallAnimationTime = 0, this.skipFallAnimation = !1), this.id = e ? this.id : -1, this.isMoving = !1, this.hasBeenSpawned = !1, this.hasAnimationEnded = !1, this.hasBeenEvaluated = !1, this.currentTile = null, this.targetTile = null, this.moveAnimationRatio = 0, this.spawnAnimationRatio = 0, this.spawnAnimationRatioUnclamped = -Math.random(), this.easedAnimationRatio = 0, this.lifeCycle = 0;
  }
  _onMovementEnd() {
    this.moveAnimationRatio = 1, this.currentTile && (this.currentTile.isOccupied = !1), this.currentTile = this.targetTile, this.targetTile = null, this.hasAnimationEnded = !0, this.updateTile();
  }
  _updateSpawnAnimation(e) {
    this.spawnAnimationRatioUnclamped += 0.75 * ta * e, this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped)), this.spawnAnimationRatio === 1 && (this.hasBeenSpawned = !0);
  }
  _updateMovement(e) {
    var r;
    const t = rt.getState().flags.isResult, n = rt.getState().flags.isFree;
    (this.isMoving && !this.hasAnimationEnded || t) && (this.moveAnimationRatio = Math.min(1, this.moveAnimationRatio + ta * e * (this.isErrorBlock ? 0.7 : 1)), this.easedAnimationRatio = ((r = this.easingFunction) == null ? void 0 : r.call(this, Math.max(0, this.moveAnimationRatio))) || 0, this.easedAnimationRatio === 1 && (n || t) && this._onMovementEnd());
  }
  _updateTileRatios() {
    const e = Math.max(0, Math.min(1, this.hasBeenSpawned ? this.easedAnimationRatio : this.spawnAnimationRatio));
    this.currentTile && (this.currentTile.activeRatio = this.hasBeenSpawned ? this.targetTile ? 1 - e : 1 : this.spawnAnimationRatio), this.targetTile && (this.targetTile.activeRatio = e), this.isErrorBlock && this.isErrorBlockFalling && (this.currentTile && (this.currentTile.activeRatio = 0), this.targetTile && (this.targetTile.activeRatio = 0));
  }
  update(e) {
    this.hasBeenSpawned ? this._updateMovement(e) : this._updateSpawnAnimation(e), this.isErrorBlockFalling && (this.errorFallAnimationTime = this.errorFallAnimationTime + 3 * ta * e), this.isErrorBlock && (this.errorPreFallAnimationTimeScale = this.errorPreFallAnimationTimeScale + 3 * e, this.errorPreFallAnimationTimeScale = Math.min(20, this.errorPreFallAnimationTimeScale), this.errorPreFallAnimationTime = this.errorPreFallAnimationTime + this.errorPreFallAnimationTimeScale * e, this.skipFallAnimation && (this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0)), this._updateTileRatios();
  }
}
const N_ = () => {
  let i = rt.getInitialState().flags;
  const e = sn.getInitialState();
  let { blocks: t, ...n } = e;
  function r() {
    const { isFailResult: _, isStopped: v, isSuccessResult: p, isReplayResult: h, isFree: R } = i;
    _ || v || t.length >= en || Ji != null && Ji.isOccupied && !p && !h || (p || h ? s() : o(), t.length);
  }
  function s() {
    const _ = (t == null ? void 0 : t.length) ?? 0, v = en - _;
    for (let p = 0; p < v; p++) {
      const h = ti.getRandomFreeTile();
      if (h) {
        const R = new Hl(t.length);
        R.currentTile = h, R.init(), R.updateTile(), Dl(R);
      }
    }
  }
  function o() {
    let _ = null;
    const v = i.isFree;
    !!(t.length < ls && v) && (_ = new Hl(t.length), Ll(_)), _ && (_.currentTile = Ji, _.init(), _.updateTile());
  }
  function a() {
    const _ = i.hasNotStarted, v = i.isFailResult, p = i.isStopped;
    _ || (n.lastSpawnedBlock && (Dl(n.lastSpawnedBlock), Ll(null)), !(v || p) && (t.forEach((h) => h.resetAfterCycle()), sn.getState().incCycleIndex(), r(), l()));
  }
  function l() {
    var h;
    const _ = n.cycleIndex, v = (t == null ? void 0 : t.length) ?? 0, p = _ % 2 === 0 ? !0 : v < ls - 1;
    (h = n.lastSpawnedBlock) != null && h.hasBeenSpawned && n.lastSpawnedBlock.moveToNextTile(p, 0), t.forEach((R, y) => {
      !R.hasBeenEvaluated && R.hasBeenSpawned && R.moveToNextTile(p, y * 0.2);
    });
  }
  function c(_ = !1) {
    t.forEach((h) => h.reset()), ir.reset(), ti.reset(), sn.getState().reset();
    const v = rt.getState().result, p = Dc.includes(v);
    rt.getState().reset(), a(), !_ && p && o_();
  }
  function u(_) {
    const v = i.isResult, p = n.animationSpeedRatio, h = n.firstStartAnimationRatio, R = n.previousSuccessBlocksAnimationRatio, y = Math.min(1, p + _ * (v ? 1 : 0)), M = De.saturate(R - _ / 1.5), L = De.saturate(h + _ * (_t.getState().showVisual ? 1 : 0));
    Il({
      animationSpeedRatio: y,
      firstStartAnimationRatio: L,
      previousSuccessBlocksAnimationRatio: M
    });
  }
  function d() {
    var R;
    let _ = !0;
    n.lastSpawnedBlock && (_ = !!((R = n.lastSpawnedBlock) != null && R.hasBeenSpawned)), t.forEach((y) => {
      y.lifeCycle > 0 ? _ = !!(y.hasBeenEvaluated && y.hasAnimationEnded) : _ = y.spawnAnimationRatio === 1;
    });
    const { isStopped: v, isFailResult: p, isResult: h } = i;
    return _ || h || p || v;
  }
  function f(_) {
    if (u(_), wl.update(_), Rl.update(_), Cl.update(_), i.hasNotStarted) {
      a();
      return;
    }
    ti.preUpdate(_), n.lastSpawnedBlock && n.lastSpawnedBlock.update(_), t.forEach((p) => p.update(_)), ti.update(_), d() && a();
  }
  async function m() {
    const _ = ({ flags: p, animationTypeEnded: h }) => {
      if (i = p, h)
        switch (h) {
          case "win": {
            c(), Il({ previousSuccessBlocksAnimationRatio: 1 }), a();
            break;
          }
          case "lose": {
            c(), a();
            break;
          }
          case "stop":
          default:
            c(!0);
            break;
        }
    }, v = ({ blocks: p, ...h }) => {
      t = p, n = h;
    };
    rt.subscribe((p) => _(p)), sn.subscribe((p) => v(p)), wl.init(), Rl.init(), Cl.init(), ti.init();
  }
  return {
    init: m,
    update: f,
    reset: c
  };
}, Vl = N_();
var F_ = `varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}`, O_ = `uniform vec3 u_bgColor1;
uniform vec3 u_bgColor2;

varying vec2 v_uv;

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

#include <getBlueNoise>

void main() {
    vec3 color = mix(u_bgColor1, u_bgColor2, v_uv.y);
    gl_FragColor = vec4(linearToSRGB(color) + getBlueNoise(gl_FragCoord.xy) * .004, 1.0);
}`, B_ = `attribute vec3 a_instancePosition;
attribute vec3 a_instanceRandom;

varying vec2 v_uv;
varying float v_opacity;

uniform vec2 u_resolution;
uniform float u_size;
uniform float u_time;

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

    return p;
}

#define F4 0.309016994374947451
#define PI 3.141592653589793
#define PI2 6.283185307179586

vec4 simplexNoiseDerivatives (vec4 v) {
    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);

    vec4 i  = floor(v + dot(v, vec4(F4)) );
    vec4 x0 = v -   i + dot(i, C.xxxx);

    vec4 i0;
    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    vec4 x1 = x0 - i1 + C.xxxx;
    vec4 x2 = x0 - i2 + C.yyyy;
    vec4 x3 = x0 - i3 + C.zzzz;
    vec4 x4 = x0 + C.wwww;

    i = mod289(i);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
    i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
    + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
    + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
    + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); 
    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));

    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); 
    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);

    vec3 temp0 = -6.0 * m0 * m0 * values0;
    vec2 temp1 = -6.0 * m1 * m1 * values1;

    vec3 mmm0 = m0 * m0 * m0;
    vec2 mmm1 = m1 * m1 * m1;

    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;
    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;
    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;
    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;

    return vec4(dx, dy, dz, dw) * 49.0;
}

void main() {
    vec2 aspect = vec2(1.0, u_resolution.y / u_resolution.x);

    vec3 noise = simplexNoiseDerivatives(vec4(1.0 * (a_instancePosition + a_instanceRandom), 0.05 * u_time)).xyz;
    float ratio = fract(1.5 * (0.2 + 0.2 * a_instanceRandom.x) * u_time);

    vec3 pos = position;
    pos *= u_size;
    pos += a_instancePosition;
    pos.x += 1.0 * ratio * (0.5 + 0.5 * a_instanceRandom.x);
    pos.y += noise.y;
    pos.x *= u_resolution.y / u_resolution.x;

    gl_Position = vec4(pos, 1.0);

    v_uv = uv;
    v_opacity = sin(PI * ratio);

}`, z_ = `varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}`;
const H_ = () => {
  const i = new mt(), e = new Pt();
  let t = new Pt(), n = _t.getState(), r = An.getState();
  function s() {
    const c = (d) => n = d, u = (d) => r = d;
    An.subscribe((d) => d, u), _t.subscribe((d) => d, c), o();
  }
  function o() {
    const { u_resolution: c, u_bgColor1: u, u_bgColor2: d, u_blueNoiseTexture: f, u_blueNoiseTexelSize: m, u_blueNoiseCoordOffset: _ } = r, v = {
      u_resolution: c,
      u_bgColor1: u,
      u_bgColor2: d,
      u_blueNoiseTexture: f,
      u_blueNoiseTexelSize: m,
      u_blueNoiseCoordOffset: _
    }, p = new At({
      uniforms: v,
      vertexShader: F_,
      fragmentShader: O_
    });
    t = new Pt(new Hi(2, 2), p), t.renderOrder = 1, i.add(t), a();
  }
  function a() {
    const u = new Hi(1, 1), d = new co();
    d.index = u.index, Object.keys(u.attributes).forEach((v) => {
      d.setAttribute(v, u.attributes[v]);
    }), d.instanceCount = 50;
    const f = new Float32Array(50 * 3), m = new Float32Array(50 * 3);
    for (let v = 0; v < 50; v++)
      f[v * 3] = 3 * (Math.random() * 2 - 1), f[v * 3 + 1] = Math.random() * 2 - 1, f[v * 3 + 2] = 0.5 + 0.5 * Math.random(), m[v * 3] = Math.random(), m[v * 3 + 1] = Math.random(), m[v * 3 + 2] = Math.random();
    d.setAttribute("a_instancePosition", new ps(f, 3)), d.setAttribute("a_instanceRandom", new ps(m, 3));
    const _ = new At({
      vertexShader: B_,
      fragmentShader: z_,
      uniforms: {
        u_time: r.u_time,
        u_resolution: r.u_resolution,
        u_size: { value: n.particlesSize },
        u_color: { value: new Ae(n.particlesColor) },
        u_opacity: { value: n.particlesOpacity }
      },
      transparent: !0
    });
    e.geometry = d, e.material = _, e.renderOrder = 2, e.frustumCulled = !1, i.add(e);
  }
  function l(c) {
    t.material.uniforms.u_bgColor1.value = r.u_bgColor1.value, t.material.uniforms.u_bgColor2.value = r.u_bgColor2.value, e.material.uniforms.u_time.value = r.u_time.value, e.material.uniforms.u_size.value = n.particlesSize, e.material.uniforms.u_color.value.set(n.particlesColor), e.material.uniforms.u_opacity.value = n.particlesOpacity;
  }
  return { init: s, update: l, container: i };
};
Ye.enabled = !1;
const Fn = H_(), Gl = I_(), oa = D_(), V_ = () => {
  const i = new Ju(), e = new Jm(p_);
  let t, n, r;
  const s = window.innerWidth / window.innerHeight, o = 15, a = o * s, l = new lo(a / -2, a / 2, o / 2, o / -2, 1, 1e3);
  let c;
  async function u() {
    if (r && e) {
      e.domElement.id = r, t = e.domElement, document.body.appendChild(t), e.shadowMap.enabled = !0, e.shadowMap.type = $a;
      const R = new Ae(_t.getState().bgColor2).convertSRGBToLinear();
      e.setClearColor(R, 1);
    }
  }
  function d(R, y) {
    _t.getState().setProperty({ propertyName: "viewportWidth", value: R }), _t.getState().setProperty({ propertyName: "viewportHeight", value: y });
    let M = R * yl, L = y * yl;
    const D = M / L;
    L * M > Tl && (L = Math.sqrt(Tl / D), M = Math.ceil(L * D), L = Math.ceil(L)), _t.getState().setProperty({ propertyName: "width", value: M }), _t.getState().setProperty({ propertyName: "height", value: L });
    const A = An.getState().u_viewportResolution, C = An.getState().u_resolution;
    on({ u_viewportResolution: { value: A.value.set(R, window.innerHeight) } }), on({ u_resolution: { value: C.value.set(M, L) } }), l.updateProjectionMatrix(), e.setSize(M, L), t.style.width = R + "px", t.style.height = y + "px";
  }
  function f() {
    d(window.innerWidth, window.innerHeight);
  }
  async function m({ canvasId: R, initCallback: y }) {
    r = R, await ir.preload(), await Gl.preInit(), await oa.preload(), await u(), Tn.start(y);
  }
  async function _() {
    i.add(l), l.position.fromArray(d_), l.updateProjectionMatrix(), c = l.clone(), n = new U_(c, t), n.target0.fromArray(f_), n.reset();
  }
  async function v() {
    await _();
    const R = (M) => {
      M && h();
    };
    rt.subscribe((M) => R(M.destroyCanvas)), await Vl.init(), Fn.init();
    const y = await ir.init();
    y && (i.add(y), i.add(y.target)), oa.init(), i.add(Mc), i.add(ir.heroContainer), Fn != null && Fn.container && i.add(Fn.container);
  }
  function p(R, y) {
    t || (y *= 0), y = Math.min(y, 1 / 15);
    const M = _t.getState().cameraOffsetX;
    let L = _t.getState().offsetX;
    _t.getState().setProperty({ propertyName: "time", value: R }), _t.getState().setProperty({ propertyName: "deltaTime", value: y }), i_(R, y);
    const D = (window.innerWidth - M) / window.innerHeight, A = 10, C = A * D;
    if (L) {
      const T = L / window.innerWidth * 100;
      L = C * T / 100;
    }
    const S = -C / 2 - L / 2, g = C / 2 - L / 2;
    Gl.update(y), Vl.update(y), l.left = S, l.right = g, l.top = A / 2, l.bottom = A / -2, l.updateProjectionMatrix(), n == null || n.update(), c == null || c.updateMatrix(), c == null || c.matrix.decompose(l.position, l.quaternion, l.scale), l.matrix.compose(l.position, l.quaternion, l.scale), Fn == null || Fn.update(y), ir.update(y), oa.update(y), e.render(i, l);
  }
  function h() {
    rt.getState().reset(), t.remove(), e.state.reset();
  }
  return {
    preload: m,
    init: v,
    onResize: f,
    render: p
  };
}, hn = V_();
let lr = 0, Za = 0;
const G_ = 50, k_ = 1 / G_;
let kl;
const Wl = _t.getState().setProperty;
function Ec() {
  const i = performance.now() / 1e3, e = i - lr;
  i - Za >= k_ && (Za = i, hn == null || hn.render(lr, e), lr = i), cancelAnimationFrame(kl), kl = requestAnimationFrame(Ec);
}
function W_() {
  hn.init(), lr = performance.now() / 1e3, Za = lr, window.addEventListener("resize", hn.onResize), hn.onResize(), Ec();
}
async function $_({ canvasId: i, offset: e = 0 }) {
  if (!document.getElementById(i)) {
    Wl({ propertyName: "offsetX", value: e }), Wl({ propertyName: "cameraOffsetX", value: e / window.innerWidth });
    try {
      await (hn == null ? void 0 : hn.preload({ canvasId: i, initCallback: W_ }));
    } catch (t) {
      console.error("loadTowerAnimation", t);
    }
  }
}
async function K_({ canvasId: i }) {
  if (!document.getElementById(i)) return;
  rt.getState().status === "not-started" || l_(), rt.getState().setDestroyCanvas(!0), window.removeEventListener("resize", hn.onResize);
}
export {
  es as SuccessLevel,
  $_ as loadTowerAnimation,
  K_ as removeTowerAnimation,
  q_ as setAnimationProperties,
  Z_ as setLose,
  o_ as setStart,
  l_ as setStop,
  j_ as setWin
};
