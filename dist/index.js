var yl = Object.defineProperty;
var Tl = (i, e, t) => e in i ? yl(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Je = (i, e, t) => Tl(i, typeof e != "symbol" ? e + "" : e, t);
var Lt = /* @__PURE__ */ ((i) => (i.NOT_STARTED = "not-started", i.FREE = "free", i.RESULT = "result", i))(Lt || {}), it = /* @__PURE__ */ ((i) => (i.NONE = "none", i.STOP = "stop", i.COMPLETED = "completed", i.FAILED = "failed", i.REPLAY = "replay", i))(it || {}), Yr = /* @__PURE__ */ ((i) => (i[i.ONE = 1] = "ONE", i[i.TWO = 2] = "TWO", i[i.THREE = 3] = "THREE", i))(Yr || {});
const bl = [
  "failed",
  "completed"
  /* COMPLETED */
], Al = (i) => {
  let e;
  const t = /* @__PURE__ */ new Set(), n = (l, u) => {
    const h = typeof l == "function" ? l(e) : l;
    if (!Object.is(h, e)) {
      const p = e;
      e = u ?? (typeof h != "object" || h === null) ? h : Object.assign({}, e, h), t.forEach((f) => f(e, p));
    }
  }, r = () => e, a = { setState: n, getState: r, getInitialState: () => c, subscribe: (l) => (t.add(l), () => t.delete(l)) }, c = e = i(n, r, a);
  return a;
}, ri = (i) => Al, wl = (i) => (e, t, n) => {
  const r = n.subscribe;
  return n.subscribe = (o, a, c) => {
    let l = o;
    if (a) {
      const u = (c == null ? void 0 : c.equalityFn) || Object.is;
      let h = o(n.getState());
      l = (p) => {
        const f = o(p);
        if (!u(h, f)) {
          const _ = h;
          a(h = f, _);
        }
      }, c != null && c.fireImmediately && a(h, h);
    }
    return r(l);
  }, i(e, t, n);
}, lr = wl;
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const za = "175", oi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ci = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Rl = 0, co = 1, Cl = 2, Ha = 1, Pl = 2, vn = 3, zn = 0, Nt = 1, Mn = 2, On = 0, Pi = 1, lo = 2, uo = 3, ho = 4, Dl = 5, Kn = 100, Ll = 101, Il = 102, Ul = 103, Nl = 104, Fl = 200, Ol = 201, Bl = 202, zl = 203, Js = 204, Qs = 205, Hl = 206, Vl = 207, Gl = 208, kl = 209, Wl = 210, Xl = 211, Yl = 212, ql = 213, Zl = 214, ea = 0, ta = 1, na = 2, Li = 3, ia = 4, ra = 5, sa = 6, aa = 7, Bc = 0, jl = 1, $l = 2, Bn = 0, Kl = 1, Jl = 2, Ql = 3, eu = 4, tu = 5, nu = 6, iu = 7, Va = 300, Ii = 301, Ui = 302, oa = 303, ca = 304, ds = 306, ns = 1e3, En = 1001, la = 1002, Ft = 1003, ru = 1004, gr = 1005, Ht = 1006, _s = 1007, ti = 1008, su = 1008, An = 1009, zc = 1010, Hc = 1011, rr = 1012, Ga = 1013, ni = 1014, nn = 1015, ur = 1016, ka = 1017, Wa = 1018, sr = 1020, Vc = 35902, Gc = 1021, kc = 1022, Vt = 1023, Wc = 1024, Xc = 1025, ar = 1026, or = 1027, Yc = 1028, Xa = 1029, qc = 1030, Ya = 1031, qa = 1033, qr = 33776, Zr = 33777, jr = 33778, $r = 33779, ua = 35840, da = 35841, ha = 35842, fa = 35843, pa = 36196, ma = 37492, _a = 37496, ga = 37808, va = 37809, xa = 37810, Sa = 37811, Ma = 37812, Ea = 37813, ya = 37814, Ta = 37815, ba = 37816, Aa = 37817, wa = 37818, Ra = 37819, Ca = 37820, Pa = 37821, Kr = 36492, Da = 36494, La = 36495, Zc = 36283, Ia = 36284, Ua = 36285, Na = 36286, au = 3200, ou = 3201, cu = 0, lu = 1, Nn = "", qt = "srgb", Ni = "srgb-linear", is = "linear", $e = "srgb", li = 7680, fo = 519, uu = 512, du = 513, hu = 514, jc = 515, fu = 516, pu = 517, mu = 518, _u = 519, po = 35044, gu = 35048, mo = "300 es", cn = 2e3, rs = 2001;
class si {
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
const Et = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], gs = Math.PI / 180, Fa = 180 / Math.PI;
function dr() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Et[i & 255] + Et[i >> 8 & 255] + Et[i >> 16 & 255] + Et[i >> 24 & 255] + "-" + Et[e & 255] + Et[e >> 8 & 255] + "-" + Et[e >> 16 & 15 | 64] + Et[e >> 24 & 255] + "-" + Et[t & 63 | 128] + Et[t >> 8 & 255] + "-" + Et[t >> 16 & 255] + Et[t >> 24 & 255] + Et[n & 255] + Et[n >> 8 & 255] + Et[n >> 16 & 255] + Et[n >> 24 & 255]).toLowerCase();
}
function Ve(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function vu(i, e) {
  return (i % e + e) % e;
}
function vs(i, e, t) {
  return (1 - t) * i + t * e;
}
function Vi(i, e) {
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
function Dt(i, e) {
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
class Re {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    Re.prototype.isVector2 = !0, this.x = e, this.y = t;
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
class Oe {
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
  constructor(e, t, n, r, s, o, a, c, l) {
    Oe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, c, l);
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
  set(e, t, n, r, s, o, a, c, l) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = a, u[3] = t, u[4] = s, u[5] = c, u[6] = n, u[7] = o, u[8] = l, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], u = n[4], h = n[7], p = n[2], f = n[5], _ = n[8], g = r[0], m = r[3], d = r[6], A = r[1], y = r[4], x = r[7], P = r[2], C = r[5], w = r[8];
    return s[0] = o * g + a * A + c * P, s[3] = o * m + a * y + c * C, s[6] = o * d + a * x + c * w, s[1] = l * g + u * A + h * P, s[4] = l * m + u * y + h * C, s[7] = l * d + u * x + h * w, s[2] = p * g + f * A + _ * P, s[5] = p * m + f * y + _ * C, s[8] = p * d + f * x + _ * w, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8];
    return t * o * u - t * a * l - n * s * u + n * a * c + r * s * l - r * o * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], h = u * o - a * l, p = a * c - u * s, f = l * s - o * c, _ = t * h + n * p + r * f;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = h * g, e[1] = (r * l - u * n) * g, e[2] = (a * n - r * o) * g, e[3] = p * g, e[4] = (u * t - r * c) * g, e[5] = (r * s - a * t) * g, e[6] = f * g, e[7] = (n * c - l * t) * g, e[8] = (o * t - n * s) * g, this;
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
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -r * l,
      r * c,
      -r * (-l * o + c * a) + a + t,
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
    return this.premultiply(xs.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(xs.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(xs.makeTranslation(e, t)), this;
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
const xs = /* @__PURE__ */ new Oe();
function $c(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function cr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function xu() {
  const i = cr("canvas");
  return i.style.display = "block", i;
}
const _o = {};
function Jr(i) {
  i in _o || (_o[i] = !0, console.warn(i));
}
function Su(i, e, t) {
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
function Mu(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Eu(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const go = /* @__PURE__ */ new Oe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), vo = /* @__PURE__ */ new Oe().set(
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
function yu() {
  const i = {
    enabled: !0,
    workingColorSpace: Ni,
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
      return this.enabled === !1 || s === o || !s || !o || (this.spaces[s].transfer === $e && (r.r = Tn(r.r), r.g = Tn(r.g), r.b = Tn(r.b)), this.spaces[s].primaries !== this.spaces[o].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === $e && (r.r = Di(r.r), r.g = Di(r.g), r.b = Di(r.b))), r;
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
      return r === Nn ? is : this.spaces[r].transfer;
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
    [Ni]: {
      primaries: e,
      whitePoint: n,
      transfer: is,
      toXYZ: go,
      fromXYZ: vo,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: qt },
      outputColorSpaceConfig: { drawingBufferColorSpace: qt }
    },
    [qt]: {
      primaries: e,
      whitePoint: n,
      transfer: $e,
      toXYZ: go,
      fromXYZ: vo,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: qt }
    }
  }), i;
}
const Xe = /* @__PURE__ */ yu();
function Tn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Di(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let ui;
class Tu {
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
      ui === void 0 && (ui = cr("canvas")), ui.width = e.width, ui.height = e.height;
      const r = ui.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = ui;
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
      const t = cr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Tn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Tn(t[n] / 255) * 255) : t[n] = Tn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let bu = 0;
class Za {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: bu++ }), this.uuid = dr(), this.data = e, this.dataReady = !0, this.version = 0;
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
          r[o].isDataTexture ? s.push(Ss(r[o].image)) : s.push(Ss(r[o]));
      } else
        s = Ss(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ss(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Tu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Au = 0;
class St extends si {
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
  constructor(e = St.DEFAULT_IMAGE, t = St.DEFAULT_MAPPING, n = En, r = En, s = Ht, o = ti, a = Vt, c = An, l = St.DEFAULT_ANISOTROPY, u = Nn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Au++ }), this.uuid = dr(), this.name = "", this.source = new Za(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new Re(0, 0), this.repeat = new Re(1, 1), this.center = new Re(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Oe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
    if (this.mapping !== Va) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ns:
          e.x = e.x - Math.floor(e.x);
          break;
        case En:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case la:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ns:
          e.y = e.y - Math.floor(e.y);
          break;
        case En:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case la:
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
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = Va;
St.DEFAULT_ANISOTROPY = 1;
class lt {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    lt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
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
    const c = e.elements, l = c[0], u = c[4], h = c[8], p = c[1], f = c[5], _ = c[9], g = c[2], m = c[6], d = c[10];
    if (Math.abs(u - p) < 0.01 && Math.abs(h - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(u + p) < 0.1 && Math.abs(h + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(l + f + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (l + 1) / 2, x = (f + 1) / 2, P = (d + 1) / 2, C = (u + p) / 4, w = (h + g) / 4, U = (_ + m) / 4;
      return y > x && y > P ? y < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(y), r = C / n, s = w / n) : x > P ? x < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(x), n = C / r, s = U / r) : P < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(P), n = w / s, r = U / s), this.set(n, r, s, t), this;
    }
    let A = Math.sqrt((m - _) * (m - _) + (h - g) * (h - g) + (p - u) * (p - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (m - _) / A, this.y = (h - g) / A, this.z = (p - u) / A, this.w = Math.acos((l + f + d - 1) / 2), this;
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
class wu extends si {
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
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new lt(0, 0, e, t), this.scissorTest = !1, this.viewport = new lt(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Ht,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new St(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
      this.textures[t].source = new Za(r);
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
class ii extends wu {
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
class Kc extends St {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Ft, this.minFilter = Ft, this.wrapR = En, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
class Ru extends St {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Ft, this.minFilter = Ft, this.wrapR = En, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Gt {
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
    let c = n[r + 0], l = n[r + 1], u = n[r + 2], h = n[r + 3];
    const p = s[o + 0], f = s[o + 1], _ = s[o + 2], g = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (a === 1) {
      e[t + 0] = p, e[t + 1] = f, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (h !== g || c !== p || l !== f || u !== _) {
      let m = 1 - a;
      const d = c * p + l * f + u * _ + h * g, A = d >= 0 ? 1 : -1, y = 1 - d * d;
      if (y > Number.EPSILON) {
        const P = Math.sqrt(y), C = Math.atan2(P, d * A);
        m = Math.sin(m * C) / P, a = Math.sin(a * C) / P;
      }
      const x = a * A;
      if (c = c * m + p * x, l = l * m + f * x, u = u * m + _ * x, h = h * m + g * x, m === 1 - a) {
        const P = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
        c *= P, l *= P, u *= P, h *= P;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
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
    const a = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], h = s[o], p = s[o + 1], f = s[o + 2], _ = s[o + 3];
    return e[t] = a * _ + u * h + c * f - l * p, e[t + 1] = c * _ + u * p + l * h - a * f, e[t + 2] = l * _ + u * f + a * p - c * h, e[t + 3] = u * _ - a * h - c * p - l * f, e;
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
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(r / 2), h = a(s / 2), p = c(n / 2), f = c(r / 2), _ = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = p * u * h + l * f * _, this._y = l * f * h - p * u * _, this._z = l * u * _ + p * f * h, this._w = l * u * h - p * f * _;
        break;
      case "YXZ":
        this._x = p * u * h + l * f * _, this._y = l * f * h - p * u * _, this._z = l * u * _ - p * f * h, this._w = l * u * h + p * f * _;
        break;
      case "ZXY":
        this._x = p * u * h - l * f * _, this._y = l * f * h + p * u * _, this._z = l * u * _ + p * f * h, this._w = l * u * h - p * f * _;
        break;
      case "ZYX":
        this._x = p * u * h - l * f * _, this._y = l * f * h + p * u * _, this._z = l * u * _ - p * f * h, this._w = l * u * h + p * f * _;
        break;
      case "YZX":
        this._x = p * u * h + l * f * _, this._y = l * f * h + p * u * _, this._z = l * u * _ - p * f * h, this._w = l * u * h - p * f * _;
        break;
      case "XZY":
        this._x = p * u * h - l * f * _, this._y = l * f * h - p * u * _, this._z = l * u * _ + p * f * h, this._w = l * u * h + p * f * _;
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], u = t[6], h = t[10], p = n + a + h;
    if (p > 0) {
      const f = 0.5 / Math.sqrt(p + 1);
      this._w = 0.25 / f, this._x = (u - c) * f, this._y = (s - l) * f, this._z = (o - r) * f;
    } else if (n > a && n > h) {
      const f = 2 * Math.sqrt(1 + n - a - h);
      this._w = (u - c) / f, this._x = 0.25 * f, this._y = (r + o) / f, this._z = (s + l) / f;
    } else if (a > h) {
      const f = 2 * Math.sqrt(1 + a - n - h);
      this._w = (s - l) / f, this._x = (r + o) / f, this._y = 0.25 * f, this._z = (c + u) / f;
    } else {
      const f = 2 * Math.sqrt(1 + h - n - a);
      this._w = (o - r) / f, this._x = (s + l) / f, this._y = (c + u) / f, this._z = 0.25 * f;
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
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + o * a + r * l - s * c, this._y = r * u + o * c + s * a - n * l, this._z = s * u + o * l + n * c - r * a, this._w = o * u - n * a - r * c - s * l, this._onChangeCallback(), this;
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
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * r + t * this._y, this._z = f * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, a), h = Math.sin((1 - t) * u) / l, p = Math.sin(t * u) / l;
    return this._w = o * h + this._w * p, this._x = n * h + this._x * p, this._y = r * h + this._y * p, this._z = s * h + this._z * p, this._onChangeCallback(), this;
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
class F {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    F.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(xo.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(xo.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = 2 * (o * r - a * n), u = 2 * (a * t - s * r), h = 2 * (s * n - o * t);
    return this.x = t + c * l + o * h - a * u, this.y = n + c * u + a * l - s * h, this.z = r + c * h + s * u - o * l, this;
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
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = r * c - s * a, this.y = s * o - n * c, this.z = n * a - r * o, this;
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
    return Ms.copy(this).projectOnVector(e), this.sub(Ms);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(Ms.copy(e).multiplyScalar(2 * this.dot(e)));
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
const Ms = /* @__PURE__ */ new F(), xo = /* @__PURE__ */ new Gt();
class hr {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new F(1 / 0, 1 / 0, 1 / 0), t = new F(-1 / 0, -1 / 0, -1 / 0)) {
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
      this.expandByPoint($t.fromArray(e, t));
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
      this.expandByPoint($t.fromBufferAttribute(e, t));
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
    const n = $t.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(o, $t) : $t.fromBufferAttribute(s, o), $t.applyMatrix4(e.matrixWorld), this.expandByPoint($t);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), vr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), vr.copy(n.boundingBox)), vr.applyMatrix4(e.matrixWorld), this.union(vr);
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
    return this.clampPoint(e.center, $t), $t.distanceToSquared(e.center) <= e.radius * e.radius;
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
    this.getCenter(Gi), xr.subVectors(this.max, Gi), di.subVectors(e.a, Gi), hi.subVectors(e.b, Gi), fi.subVectors(e.c, Gi), Rn.subVectors(hi, di), Cn.subVectors(fi, hi), Gn.subVectors(di, fi);
    let t = [
      0,
      -Rn.z,
      Rn.y,
      0,
      -Cn.z,
      Cn.y,
      0,
      -Gn.z,
      Gn.y,
      Rn.z,
      0,
      -Rn.x,
      Cn.z,
      0,
      -Cn.x,
      Gn.z,
      0,
      -Gn.x,
      -Rn.y,
      Rn.x,
      0,
      -Cn.y,
      Cn.x,
      0,
      -Gn.y,
      Gn.x,
      0
    ];
    return !Es(t, di, hi, fi, xr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Es(t, di, hi, fi, xr)) ? !1 : (Sr.crossVectors(Rn, Cn), t = [Sr.x, Sr.y, Sr.z], Es(t, di, hi, fi, xr));
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
    return this.clampPoint(e, $t).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize($t).length() * 0.5), e;
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
    return this.isEmpty() ? this : (hn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), hn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), hn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), hn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), hn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), hn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), hn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), hn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(hn), this);
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
const hn = [
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F()
], $t = /* @__PURE__ */ new F(), vr = /* @__PURE__ */ new hr(), di = /* @__PURE__ */ new F(), hi = /* @__PURE__ */ new F(), fi = /* @__PURE__ */ new F(), Rn = /* @__PURE__ */ new F(), Cn = /* @__PURE__ */ new F(), Gn = /* @__PURE__ */ new F(), Gi = /* @__PURE__ */ new F(), xr = /* @__PURE__ */ new F(), Sr = /* @__PURE__ */ new F(), kn = /* @__PURE__ */ new F();
function Es(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    kn.fromArray(i, s);
    const a = r.x * Math.abs(kn.x) + r.y * Math.abs(kn.y) + r.z * Math.abs(kn.z), c = e.dot(kn), l = t.dot(kn), u = n.dot(kn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a)
      return !1;
  }
  return !0;
}
const Cu = /* @__PURE__ */ new hr(), ki = /* @__PURE__ */ new F(), ys = /* @__PURE__ */ new F();
class hs {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new F(), t = -1) {
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
    t !== void 0 ? n.copy(t) : Cu.setFromPoints(e).getCenter(n);
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
    ki.subVectors(e, this.center);
    const t = ki.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ki, r / n), this.radius += r;
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
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ys.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ki.copy(e.center).add(ys)), this.expandByPoint(ki.copy(e.center).sub(ys))), this);
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
const fn = /* @__PURE__ */ new F(), Ts = /* @__PURE__ */ new F(), Mr = /* @__PURE__ */ new F(), Pn = /* @__PURE__ */ new F(), bs = /* @__PURE__ */ new F(), Er = /* @__PURE__ */ new F(), As = /* @__PURE__ */ new F();
class Jc {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new F(), t = new F(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, fn)), this;
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
    const t = fn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (fn.copy(this.origin).addScaledVector(this.direction, t), fn.distanceToSquared(e));
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
    Ts.copy(e).add(t).multiplyScalar(0.5), Mr.copy(t).sub(e).normalize(), Pn.copy(this.origin).sub(Ts);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Mr), a = Pn.dot(this.direction), c = -Pn.dot(Mr), l = Pn.lengthSq(), u = Math.abs(1 - o * o);
    let h, p, f, _;
    if (u > 0)
      if (h = o * c - a, p = o * a - c, _ = s * u, h >= 0)
        if (p >= -_)
          if (p <= _) {
            const g = 1 / u;
            h *= g, p *= g, f = h * (h + o * p + 2 * a) + p * (o * h + p + 2 * c) + l;
          } else
            p = s, h = Math.max(0, -(o * p + a)), f = -h * h + p * (p + 2 * c) + l;
        else
          p = -s, h = Math.max(0, -(o * p + a)), f = -h * h + p * (p + 2 * c) + l;
      else
        p <= -_ ? (h = Math.max(0, -(-o * s + a)), p = h > 0 ? -s : Math.min(Math.max(-s, -c), s), f = -h * h + p * (p + 2 * c) + l) : p <= _ ? (h = 0, p = Math.min(Math.max(-s, -c), s), f = p * (p + 2 * c) + l) : (h = Math.max(0, -(o * s + a)), p = h > 0 ? s : Math.min(Math.max(-s, -c), s), f = -h * h + p * (p + 2 * c) + l);
    else
      p = o > 0 ? -s : s, h = Math.max(0, -(o * p + a)), f = -h * h + p * (p + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), r && r.copy(Ts).addScaledVector(Mr, p), f;
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
    fn.subVectors(e.center, this.origin);
    const n = fn.dot(this.direction), r = fn.dot(fn) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r), a = n - o, c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
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
    let n, r, s, o, a, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, p = this.origin;
    return l >= 0 ? (n = (e.min.x - p.x) * l, r = (e.max.x - p.x) * l) : (n = (e.max.x - p.x) * l, r = (e.min.x - p.x) * l), u >= 0 ? (s = (e.min.y - p.y) * u, o = (e.max.y - p.y) * u) : (s = (e.max.y - p.y) * u, o = (e.min.y - p.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), h >= 0 ? (a = (e.min.z - p.z) * h, c = (e.max.z - p.z) * h) : (a = (e.max.z - p.z) * h, c = (e.min.z - p.z) * h), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, fn) !== null;
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
    bs.subVectors(t, e), Er.subVectors(n, e), As.crossVectors(bs, Er);
    let o = this.direction.dot(As), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Pn.subVectors(this.origin, e);
    const c = a * this.direction.dot(Er.crossVectors(Pn, Er));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(bs.cross(Pn));
    if (l < 0 || c + l > o)
      return null;
    const u = -a * Pn.dot(As);
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
class st {
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
  constructor(e, t, n, r, s, o, a, c, l, u, h, p, f, _, g, m) {
    st.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, c, l, u, h, p, f, _, g, m);
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
  set(e, t, n, r, s, o, a, c, l, u, h, p, f, _, g, m) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = s, d[5] = o, d[9] = a, d[13] = c, d[2] = l, d[6] = u, d[10] = h, d[14] = p, d[3] = f, d[7] = _, d[11] = g, d[15] = m, this;
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
    return new st().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / pi.setFromMatrixColumn(e, 0).length(), s = 1 / pi.setFromMatrixColumn(e, 1).length(), o = 1 / pi.setFromMatrixColumn(e, 2).length();
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
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const p = o * u, f = o * h, _ = a * u, g = a * h;
      t[0] = c * u, t[4] = -c * h, t[8] = l, t[1] = f + _ * l, t[5] = p - g * l, t[9] = -a * c, t[2] = g - p * l, t[6] = _ + f * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const p = c * u, f = c * h, _ = l * u, g = l * h;
      t[0] = p + g * a, t[4] = _ * a - f, t[8] = o * l, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = f * a - _, t[6] = g + p * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const p = c * u, f = c * h, _ = l * u, g = l * h;
      t[0] = p - g * a, t[4] = -o * h, t[8] = _ + f * a, t[1] = f + _ * a, t[5] = o * u, t[9] = g - p * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const p = o * u, f = o * h, _ = a * u, g = a * h;
      t[0] = c * u, t[4] = _ * l - f, t[8] = p * l + g, t[1] = c * h, t[5] = g * l + p, t[9] = f * l - _, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const p = o * c, f = o * l, _ = a * c, g = a * l;
      t[0] = c * u, t[4] = g - p * h, t[8] = _ * h + f, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -l * u, t[6] = f * h + _, t[10] = p - g * h;
    } else if (e.order === "XZY") {
      const p = o * c, f = o * l, _ = a * c, g = a * l;
      t[0] = c * u, t[4] = -h, t[8] = l * u, t[1] = p * h + g, t[5] = o * u, t[9] = f * h - _, t[2] = _ * h - f, t[6] = a * u, t[10] = g * h + p;
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
    return this.compose(Pu, e, Du);
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
    return Bt.subVectors(e, t), Bt.lengthSq() === 0 && (Bt.z = 1), Bt.normalize(), Dn.crossVectors(n, Bt), Dn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Bt.x += 1e-4 : Bt.z += 1e-4, Bt.normalize(), Dn.crossVectors(n, Bt)), Dn.normalize(), yr.crossVectors(Bt, Dn), r[0] = Dn.x, r[4] = yr.x, r[8] = Bt.x, r[1] = Dn.y, r[5] = yr.y, r[9] = Bt.y, r[2] = Dn.z, r[6] = yr.z, r[10] = Bt.z, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], u = n[1], h = n[5], p = n[9], f = n[13], _ = n[2], g = n[6], m = n[10], d = n[14], A = n[3], y = n[7], x = n[11], P = n[15], C = r[0], w = r[4], U = r[8], E = r[12], M = r[1], D = r[5], Z = r[9], V = r[13], j = r[2], ne = r[6], q = r[10], ce = r[14], k = r[3], de = r[7], G = r[11], W = r[15];
    return s[0] = o * C + a * M + c * j + l * k, s[4] = o * w + a * D + c * ne + l * de, s[8] = o * U + a * Z + c * q + l * G, s[12] = o * E + a * V + c * ce + l * W, s[1] = u * C + h * M + p * j + f * k, s[5] = u * w + h * D + p * ne + f * de, s[9] = u * U + h * Z + p * q + f * G, s[13] = u * E + h * V + p * ce + f * W, s[2] = _ * C + g * M + m * j + d * k, s[6] = _ * w + g * D + m * ne + d * de, s[10] = _ * U + g * Z + m * q + d * G, s[14] = _ * E + g * V + m * ce + d * W, s[3] = A * C + y * M + x * j + P * k, s[7] = A * w + y * D + x * ne + P * de, s[11] = A * U + y * Z + x * q + P * G, s[15] = A * E + y * V + x * ce + P * W, this;
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], u = e[2], h = e[6], p = e[10], f = e[14], _ = e[3], g = e[7], m = e[11], d = e[15];
    return _ * (+s * c * h - r * l * h - s * a * p + n * l * p + r * a * f - n * c * f) + g * (+t * c * f - t * l * p + s * o * p - r * o * f + r * l * u - s * c * u) + m * (+t * l * h - t * a * f - s * o * h + n * o * f + s * a * u - n * l * u) + d * (-r * a * u - t * c * h + t * a * p + r * o * h - n * o * p + n * c * u);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], h = e[9], p = e[10], f = e[11], _ = e[12], g = e[13], m = e[14], d = e[15], A = h * m * l - g * p * l + g * c * f - a * m * f - h * c * d + a * p * d, y = _ * p * l - u * m * l - _ * c * f + o * m * f + u * c * d - o * p * d, x = u * g * l - _ * h * l + _ * a * f - o * g * f - u * a * d + o * h * d, P = _ * h * c - u * g * c - _ * a * p + o * g * p + u * a * m - o * h * m, C = t * A + n * y + r * x + s * P;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / C;
    return e[0] = A * w, e[1] = (g * p * s - h * m * s - g * r * f + n * m * f + h * r * d - n * p * d) * w, e[2] = (a * m * s - g * c * s + g * r * l - n * m * l - a * r * d + n * c * d) * w, e[3] = (h * c * s - a * p * s - h * r * l + n * p * l + a * r * f - n * c * f) * w, e[4] = y * w, e[5] = (u * m * s - _ * p * s + _ * r * f - t * m * f - u * r * d + t * p * d) * w, e[6] = (_ * c * s - o * m * s - _ * r * l + t * m * l + o * r * d - t * c * d) * w, e[7] = (o * p * s - u * c * s + u * r * l - t * p * l - o * r * f + t * c * f) * w, e[8] = x * w, e[9] = (_ * h * s - u * g * s - _ * n * f + t * g * f + u * n * d - t * h * d) * w, e[10] = (o * g * s - _ * a * s + _ * n * l - t * g * l - o * n * d + t * a * d) * w, e[11] = (u * a * s - o * h * s - u * n * l + t * h * l + o * n * f - t * a * f) * w, e[12] = P * w, e[13] = (u * g * r - _ * h * r + _ * n * p - t * g * p - u * n * m + t * h * m) * w, e[14] = (_ * a * r - o * g * r - _ * n * c + t * g * c + o * n * m - t * a * m) * w, e[15] = (o * h * r - u * a * r + u * n * c - t * h * c - o * n * p + t * a * p) * w, this;
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
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, u = s * a;
    return this.set(
      l * o + n,
      l * a - r * c,
      l * c + r * a,
      0,
      l * a + r * c,
      u * a + n,
      u * c - r * o,
      0,
      l * c - r * a,
      u * c + r * o,
      s * c * c + n,
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
    const r = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, u = o + o, h = a + a, p = s * l, f = s * u, _ = s * h, g = o * u, m = o * h, d = a * h, A = c * l, y = c * u, x = c * h, P = n.x, C = n.y, w = n.z;
    return r[0] = (1 - (g + d)) * P, r[1] = (f + x) * P, r[2] = (_ - y) * P, r[3] = 0, r[4] = (f - x) * C, r[5] = (1 - (p + d)) * C, r[6] = (m + A) * C, r[7] = 0, r[8] = (_ + y) * w, r[9] = (m - A) * w, r[10] = (1 - (p + g)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
    let s = pi.set(r[0], r[1], r[2]).length();
    const o = pi.set(r[4], r[5], r[6]).length(), a = pi.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Kt.copy(this);
    const l = 1 / s, u = 1 / o, h = 1 / a;
    return Kt.elements[0] *= l, Kt.elements[1] *= l, Kt.elements[2] *= l, Kt.elements[4] *= u, Kt.elements[5] *= u, Kt.elements[6] *= u, Kt.elements[8] *= h, Kt.elements[9] *= h, Kt.elements[10] *= h, t.setFromRotationMatrix(Kt), n.x = s, n.y = o, n.z = a, this;
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
  makePerspective(e, t, n, r, s, o, a = cn) {
    const c = this.elements, l = 2 * s / (t - e), u = 2 * s / (n - r), h = (t + e) / (t - e), p = (n + r) / (n - r);
    let f, _;
    if (a === cn)
      f = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
    else if (a === rs)
      f = -o / (o - s), _ = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = l, c[4] = 0, c[8] = h, c[12] = 0, c[1] = 0, c[5] = u, c[9] = p, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
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
  makeOrthographic(e, t, n, r, s, o, a = cn) {
    const c = this.elements, l = 1 / (t - e), u = 1 / (n - r), h = 1 / (o - s), p = (t + e) * l, f = (n + r) * u;
    let _, g;
    if (a === cn)
      _ = (o + s) * h, g = -2 * h;
    else if (a === rs)
      _ = s * h, g = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -p, c[1] = 0, c[5] = 2 * u, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = g, c[14] = -_, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
const pi = /* @__PURE__ */ new F(), Kt = /* @__PURE__ */ new st(), Pu = /* @__PURE__ */ new F(0, 0, 0), Du = /* @__PURE__ */ new F(1, 1, 1), Dn = /* @__PURE__ */ new F(), yr = /* @__PURE__ */ new F(), Bt = /* @__PURE__ */ new F(), So = /* @__PURE__ */ new st(), Mo = /* @__PURE__ */ new Gt();
class wn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = wn.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], u = r[9], h = r[2], p = r[6], f = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ve(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(p, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ve(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ve(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._y = Math.atan2(-h, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ve(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(p, f), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(Ve(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-Ve(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, f), this._y = 0);
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
    return So.makeRotationFromQuaternion(e), this.setFromRotationMatrix(So, t, n);
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
    return Mo.setFromEuler(this), this.setFromQuaternion(Mo, e);
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
wn.DEFAULT_ORDER = "XYZ";
class Qc {
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
let Lu = 0;
const Eo = /* @__PURE__ */ new F(), mi = /* @__PURE__ */ new Gt(), pn = /* @__PURE__ */ new st(), Tr = /* @__PURE__ */ new F(), Wi = /* @__PURE__ */ new F(), Iu = /* @__PURE__ */ new F(), Uu = /* @__PURE__ */ new Gt(), yo = /* @__PURE__ */ new F(1, 0, 0), To = /* @__PURE__ */ new F(0, 1, 0), bo = /* @__PURE__ */ new F(0, 0, 1), Ao = { type: "added" }, Nu = { type: "removed" }, _i = { type: "childadded", child: null }, ws = { type: "childremoved", child: null };
class mt extends si {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Lu++ }), this.uuid = dr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = mt.DEFAULT_UP.clone();
    const e = new F(), t = new wn(), n = new Gt(), r = new F(1, 1, 1);
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
        value: new st()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Oe()
      }
    }), this.matrix = new st(), this.matrixWorld = new st(), this.matrixAutoUpdate = mt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Qc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return mi.setFromAxisAngle(e, t), this.quaternion.multiply(mi), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return mi.setFromAxisAngle(e, t), this.quaternion.premultiply(mi), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(yo, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(To, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(bo, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Eo.copy(e).applyQuaternion(this.quaternion), this.position.add(Eo.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(yo, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(To, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(bo, e);
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
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(pn.copy(this.matrixWorld).invert());
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
    e.isVector3 ? Tr.copy(e) : Tr.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Wi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pn.lookAt(Wi, Tr, this.up) : pn.lookAt(Tr, Wi, this.up), this.quaternion.setFromRotationMatrix(pn), r && (pn.extractRotation(r.matrixWorld), mi.setFromRotationMatrix(pn), this.quaternion.premultiply(mi.invert()));
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
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ao), _i.child = e, this.dispatchEvent(_i), _i.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Nu), ws.child = e, this.dispatchEvent(ws), ws.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), pn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), pn.multiply(e.parent.matrixWorld)), e.applyMatrix4(pn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Ao), _i.child = e, this.dispatchEvent(_i), _i.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Wi, e, Iu), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Wi, Uu, e), e;
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
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const h = c[l];
            s(e.shapes, h);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
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
        const c = this.animations[a];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), u = o(e.images), h = o(e.shapes), p = o(e.skeletons), f = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), p.length > 0 && (n.skeletons = p), f.length > 0 && (n.animations = f), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const u = a[l];
        delete u.metadata, c.push(u);
      }
      return c;
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
mt.DEFAULT_UP = /* @__PURE__ */ new F(0, 1, 0);
mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Jt = /* @__PURE__ */ new F(), mn = /* @__PURE__ */ new F(), Rs = /* @__PURE__ */ new F(), _n = /* @__PURE__ */ new F(), gi = /* @__PURE__ */ new F(), vi = /* @__PURE__ */ new F(), wo = /* @__PURE__ */ new F(), Cs = /* @__PURE__ */ new F(), Ps = /* @__PURE__ */ new F(), Ds = /* @__PURE__ */ new F(), Ls = /* @__PURE__ */ new lt(), Is = /* @__PURE__ */ new lt(), Us = /* @__PURE__ */ new lt();
class tn {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new F(), t = new F(), n = new F()) {
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
    r.subVectors(n, t), Jt.subVectors(e, t), r.cross(Jt);
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
    Jt.subVectors(r, t), mn.subVectors(n, t), Rs.subVectors(e, t);
    const o = Jt.dot(Jt), a = Jt.dot(mn), c = Jt.dot(Rs), l = mn.dot(mn), u = mn.dot(Rs), h = o * l - a * a;
    if (h === 0)
      return s.set(0, 0, 0), null;
    const p = 1 / h, f = (l * c - a * u) * p, _ = (o * u - a * c) * p;
    return s.set(1 - f - _, _, f);
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
    return this.getBarycoord(e, t, n, r, _n) === null ? !1 : _n.x >= 0 && _n.y >= 0 && _n.x + _n.y <= 1;
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
  static getInterpolation(e, t, n, r, s, o, a, c) {
    return this.getBarycoord(e, t, n, r, _n) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, _n.x), c.addScaledVector(o, _n.y), c.addScaledVector(a, _n.z), c);
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
    return Ls.setScalar(0), Is.setScalar(0), Us.setScalar(0), Ls.fromBufferAttribute(e, t), Is.fromBufferAttribute(e, n), Us.fromBufferAttribute(e, r), o.setScalar(0), o.addScaledVector(Ls, s.x), o.addScaledVector(Is, s.y), o.addScaledVector(Us, s.z), o;
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
    return Jt.subVectors(n, t), mn.subVectors(e, t), Jt.cross(mn).dot(r) < 0;
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
    return Jt.subVectors(this.c, this.b), mn.subVectors(this.a, this.b), Jt.cross(mn).length() * 0.5;
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
    return tn.getNormal(this.a, this.b, this.c, e);
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
    return tn.getBarycoord(e, this.a, this.b, this.c, t);
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
    return tn.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
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
    return tn.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return tn.isFrontFacing(this.a, this.b, this.c, e);
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
    gi.subVectors(r, n), vi.subVectors(s, n), Cs.subVectors(e, n);
    const c = gi.dot(Cs), l = vi.dot(Cs);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Ps.subVectors(e, r);
    const u = gi.dot(Ps), h = vi.dot(Ps);
    if (u >= 0 && h <= u)
      return t.copy(r);
    const p = c * h - u * l;
    if (p <= 0 && c >= 0 && u <= 0)
      return o = c / (c - u), t.copy(n).addScaledVector(gi, o);
    Ds.subVectors(e, s);
    const f = gi.dot(Ds), _ = vi.dot(Ds);
    if (_ >= 0 && f <= _)
      return t.copy(s);
    const g = f * l - c * _;
    if (g <= 0 && l >= 0 && _ <= 0)
      return a = l / (l - _), t.copy(n).addScaledVector(vi, a);
    const m = u * _ - f * h;
    if (m <= 0 && h - u >= 0 && f - _ >= 0)
      return wo.subVectors(s, r), a = (h - u) / (h - u + (f - _)), t.copy(r).addScaledVector(wo, a);
    const d = 1 / (m + g + p);
    return o = g * d, a = p * d, t.copy(n).addScaledVector(gi, o).addScaledVector(vi, a);
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
const el = {
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
}, Ln = { h: 0, s: 0, l: 0 }, br = { h: 0, s: 0, l: 0 };
function Ns(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Pe {
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
  setHex(e, t = qt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xe.toWorkingColorSpace(this, t), this;
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
  setRGB(e, t, n, r = Xe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Xe.toWorkingColorSpace(this, r), this;
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
  setHSL(e, t, n, r = Xe.workingColorSpace) {
    if (e = vu(e, 1), t = Ve(t, 0, 1), n = Ve(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Ns(o, s, e + 1 / 3), this.g = Ns(o, s, e), this.b = Ns(o, s, e - 1 / 3);
    }
    return Xe.toWorkingColorSpace(this, r), this;
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
  setStyle(e, t = qt) {
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
  setColorName(e, t = qt) {
    const n = el[e.toLowerCase()];
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
    return this.r = Tn(e.r), this.g = Tn(e.g), this.b = Tn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Di(e.r), this.g = Di(e.g), this.b = Di(e.b), this;
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
  getHex(e = qt) {
    return Xe.fromWorkingColorSpace(yt.copy(this), e), Math.round(Ve(yt.r * 255, 0, 255)) * 65536 + Math.round(Ve(yt.g * 255, 0, 255)) * 256 + Math.round(Ve(yt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = qt) {
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
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(yt.copy(this), t);
    const n = yt.r, r = yt.g, s = yt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let c, l;
    const u = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const h = o - a;
      switch (l = u <= 0.5 ? h / (o + a) : h / (2 - o - a), o) {
        case n:
          c = (r - s) / h + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / h + 2;
          break;
        case s:
          c = (n - r) / h + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = u, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.fromWorkingColorSpace(yt.copy(this), t), e.r = yt.r, e.g = yt.g, e.b = yt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = qt) {
    Xe.fromWorkingColorSpace(yt.copy(this), e);
    const t = yt.r, n = yt.g, r = yt.b;
    return e !== qt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
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
    return this.getHSL(Ln), this.setHSL(Ln.h + e, Ln.s + t, Ln.l + n);
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
    this.getHSL(Ln), e.getHSL(br);
    const n = vs(Ln.h, br.h, t), r = vs(Ln.s, br.s, t), s = vs(Ln.l, br.l, t);
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
const yt = /* @__PURE__ */ new Pe();
Pe.NAMES = el;
let Fu = 0;
class fr extends si {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Fu++ }), this.uuid = dr(), this.name = "", this.type = "Material", this.blending = Pi, this.side = zn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Js, this.blendDst = Qs, this.blendEquation = Kn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Li, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = fo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = li, this.stencilZFail = li, this.stencilZPass = li, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Pi && (n.blending = this.blending), this.side !== zn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Js && (n.blendSrc = this.blendSrc), this.blendDst !== Qs && (n.blendDst = this.blendDst), this.blendEquation !== Kn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Li && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== fo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== li && (n.stencilFail = this.stencilFail), this.stencilZFail !== li && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== li && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, o.push(c);
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
class tl extends fr {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Pe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new wn(), this.combine = Bc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ft = /* @__PURE__ */ new F(), Ar = /* @__PURE__ */ new Re();
let Ou = 0;
class kt {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Ou++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = po, this.updateRanges = [], this.gpuType = nn, this.version = 0;
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
        Ar.fromBufferAttribute(this, t), Ar.applyMatrix3(e), this.setXY(t, Ar.x, Ar.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ft.fromBufferAttribute(this, t), ft.applyMatrix3(e), this.setXYZ(t, ft.x, ft.y, ft.z);
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
      ft.fromBufferAttribute(this, t), ft.applyMatrix4(e), this.setXYZ(t, ft.x, ft.y, ft.z);
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
      ft.fromBufferAttribute(this, t), ft.applyNormalMatrix(e), this.setXYZ(t, ft.x, ft.y, ft.z);
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
      ft.fromBufferAttribute(this, t), ft.transformDirection(e), this.setXYZ(t, ft.x, ft.y, ft.z);
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
    return this.normalized && (n = Vi(n, this.array)), n;
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
    return this.normalized && (n = Dt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Vi(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Vi(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Vi(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Vi(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
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
    return e *= this.itemSize, this.normalized && (t = Dt(t, this.array), n = Dt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
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
    return e *= this.itemSize, this.normalized && (t = Dt(t, this.array), n = Dt(n, this.array), r = Dt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
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
    return e *= this.itemSize, this.normalized && (t = Dt(t, this.array), n = Dt(n, this.array), r = Dt(r, this.array), s = Dt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== po && (e.usage = this.usage), e;
  }
}
class nl extends kt {
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
class il extends kt {
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
class rn extends kt {
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
let Bu = 0;
const Yt = /* @__PURE__ */ new st(), Fs = /* @__PURE__ */ new mt(), xi = /* @__PURE__ */ new F(), zt = /* @__PURE__ */ new hr(), Xi = /* @__PURE__ */ new hr(), vt = /* @__PURE__ */ new F();
class an extends si {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Bu++ }), this.uuid = dr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(e) ? this.index = new ($c(e) ? il : nl)(e, 1) : this.index = e, this;
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
      const s = new Oe().getNormalMatrix(e);
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
    return Yt.makeRotationFromQuaternion(e), this.applyMatrix4(Yt), this;
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
    return Yt.makeRotationX(e), this.applyMatrix4(Yt), this;
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
    return Yt.makeRotationY(e), this.applyMatrix4(Yt), this;
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
    return Yt.makeRotationZ(e), this.applyMatrix4(Yt), this;
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
    return Yt.makeTranslation(e, t, n), this.applyMatrix4(Yt), this;
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
    return Yt.makeScale(e, t, n), this.applyMatrix4(Yt), this;
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
    return Fs.lookAt(e), Fs.updateMatrix(), this.applyMatrix4(Fs.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(xi).negate(), this.translate(xi.x, xi.y, xi.z), this;
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
      this.setAttribute("position", new rn(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new hr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new F(-1 / 0, -1 / 0, -1 / 0),
        new F(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          zt.setFromBufferAttribute(s), this.morphTargetsRelative ? (vt.addVectors(this.boundingBox.min, zt.min), this.boundingBox.expandByPoint(vt), vt.addVectors(this.boundingBox.max, zt.max), this.boundingBox.expandByPoint(vt)) : (this.boundingBox.expandByPoint(zt.min), this.boundingBox.expandByPoint(zt.max));
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
    this.boundingSphere === null && (this.boundingSphere = new hs());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (zt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Xi.setFromBufferAttribute(a), this.morphTargetsRelative ? (vt.addVectors(zt.min, Xi.min), zt.expandByPoint(vt), vt.addVectors(zt.max, Xi.max), zt.expandByPoint(vt)) : (zt.expandByPoint(Xi.min), zt.expandByPoint(Xi.max));
        }
      zt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        vt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(vt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, u = a.count; l < u; l++)
            vt.fromBufferAttribute(a, l), c && (xi.fromBufferAttribute(e, l), vt.add(xi)), r = Math.max(r, n.distanceToSquared(vt));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new kt(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], c = [];
    for (let U = 0; U < n.count; U++)
      a[U] = new F(), c[U] = new F();
    const l = new F(), u = new F(), h = new F(), p = new Re(), f = new Re(), _ = new Re(), g = new F(), m = new F();
    function d(U, E, M) {
      l.fromBufferAttribute(n, U), u.fromBufferAttribute(n, E), h.fromBufferAttribute(n, M), p.fromBufferAttribute(s, U), f.fromBufferAttribute(s, E), _.fromBufferAttribute(s, M), u.sub(l), h.sub(l), f.sub(p), _.sub(p);
      const D = 1 / (f.x * _.y - _.x * f.y);
      isFinite(D) && (g.copy(u).multiplyScalar(_.y).addScaledVector(h, -f.y).multiplyScalar(D), m.copy(h).multiplyScalar(f.x).addScaledVector(u, -_.x).multiplyScalar(D), a[U].add(g), a[E].add(g), a[M].add(g), c[U].add(m), c[E].add(m), c[M].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: e.count
    }]);
    for (let U = 0, E = A.length; U < E; ++U) {
      const M = A[U], D = M.start, Z = M.count;
      for (let V = D, j = D + Z; V < j; V += 3)
        d(
          e.getX(V + 0),
          e.getX(V + 1),
          e.getX(V + 2)
        );
    }
    const y = new F(), x = new F(), P = new F(), C = new F();
    function w(U) {
      P.fromBufferAttribute(r, U), C.copy(P);
      const E = a[U];
      y.copy(E), y.sub(P.multiplyScalar(P.dot(E))).normalize(), x.crossVectors(C, E);
      const D = x.dot(c[U]) < 0 ? -1 : 1;
      o.setXYZW(U, y.x, y.y, y.z, D);
    }
    for (let U = 0, E = A.length; U < E; ++U) {
      const M = A[U], D = M.start, Z = M.count;
      for (let V = D, j = D + Z; V < j; V += 3)
        w(e.getX(V + 0)), w(e.getX(V + 1)), w(e.getX(V + 2));
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
        n = new kt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let p = 0, f = n.count; p < f; p++)
          n.setXYZ(p, 0, 0, 0);
      const r = new F(), s = new F(), o = new F(), a = new F(), c = new F(), l = new F(), u = new F(), h = new F();
      if (e)
        for (let p = 0, f = e.count; p < f; p += 3) {
          const _ = e.getX(p + 0), g = e.getX(p + 1), m = e.getX(p + 2);
          r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, g), o.fromBufferAttribute(t, m), u.subVectors(o, s), h.subVectors(r, s), u.cross(h), a.fromBufferAttribute(n, _), c.fromBufferAttribute(n, g), l.fromBufferAttribute(n, m), a.add(u), c.add(u), l.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(g, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let p = 0, f = t.count; p < f; p += 3)
          r.fromBufferAttribute(t, p + 0), s.fromBufferAttribute(t, p + 1), o.fromBufferAttribute(t, p + 2), u.subVectors(o, s), h.subVectors(r, s), u.cross(h), n.setXYZ(p + 0, u.x, u.y, u.z), n.setXYZ(p + 1, u.x, u.y, u.z), n.setXYZ(p + 2, u.x, u.y, u.z);
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
      vt.fromBufferAttribute(e, t), vt.normalize(), e.setXYZ(t, vt.x, vt.y, vt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, u = a.itemSize, h = a.normalized, p = new l.constructor(c.length * u);
      let f = 0, _ = 0;
      for (let g = 0, m = c.length; g < m; g++) {
        a.isInterleavedBufferAttribute ? f = c[g] * a.data.stride + a.offset : f = c[g] * u;
        for (let d = 0; d < u; d++)
          p[_++] = l[f++];
      }
      return new kt(p, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new an(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const c = r[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let u = 0, h = l.length; u < h; u++) {
        const p = l[u], f = e(p, n);
        c.push(f);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
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
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let h = 0, p = l.length; h < p; h++) {
        const f = l[h];
        u.push(f.toJSON(e.data));
      }
      u.length > 0 && (r[c] = u, s = !0);
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
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = [], h = s[l];
      for (let p = 0, f = h.length; p < f; p++)
        u.push(h[p].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
      const h = o[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
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
const Ro = /* @__PURE__ */ new st(), Wn = /* @__PURE__ */ new Jc(), wr = /* @__PURE__ */ new hs(), Co = /* @__PURE__ */ new F(), Rr = /* @__PURE__ */ new F(), Cr = /* @__PURE__ */ new F(), Pr = /* @__PURE__ */ new F(), Os = /* @__PURE__ */ new F(), Dr = /* @__PURE__ */ new F(), Po = /* @__PURE__ */ new F(), Lr = /* @__PURE__ */ new F();
class Ct extends mt {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new an(), t = new tl()) {
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
      Dr.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = a[c], h = s[c];
        u !== 0 && (Os.fromBufferAttribute(h, e), o ? Dr.addScaledVector(Os, u) : Dr.addScaledVector(Os.sub(t), u));
      }
      t.add(Dr);
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
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), wr.copy(n.boundingSphere), wr.applyMatrix4(s), Wn.copy(e.ray).recast(e.near), !(wr.containsPoint(Wn.origin) === !1 && (Wn.intersectSphere(wr, Co) === null || Wn.origin.distanceToSquared(Co) > (e.far - e.near) ** 2)) && (Ro.copy(s).invert(), Wn.copy(e.ray).applyMatrix4(Ro), !(n.boundingBox !== null && Wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Wn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, c = s.attributes.position, l = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, p = s.groups, f = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, g = p.length; _ < g; _++) {
          const m = p[_], d = o[m.materialIndex], A = Math.max(m.start, f.start), y = Math.min(a.count, Math.min(m.start + m.count, f.start + f.count));
          for (let x = A, P = y; x < P; x += 3) {
            const C = a.getX(x), w = a.getX(x + 1), U = a.getX(x + 2);
            r = Ir(this, d, e, n, l, u, h, C, w, U), r && (r.faceIndex = Math.floor(x / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, f.start), g = Math.min(a.count, f.start + f.count);
        for (let m = _, d = g; m < d; m += 3) {
          const A = a.getX(m), y = a.getX(m + 1), x = a.getX(m + 2);
          r = Ir(this, o, e, n, l, u, h, A, y, x), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, g = p.length; _ < g; _++) {
          const m = p[_], d = o[m.materialIndex], A = Math.max(m.start, f.start), y = Math.min(c.count, Math.min(m.start + m.count, f.start + f.count));
          for (let x = A, P = y; x < P; x += 3) {
            const C = x, w = x + 1, U = x + 2;
            r = Ir(this, d, e, n, l, u, h, C, w, U), r && (r.faceIndex = Math.floor(x / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, f.start), g = Math.min(c.count, f.start + f.count);
        for (let m = _, d = g; m < d; m += 3) {
          const A = m, y = m + 1, x = m + 2;
          r = Ir(this, o, e, n, l, u, h, A, y, x), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
  }
}
function zu(i, e, t, n, r, s, o, a) {
  let c;
  if (e.side === Nt ? c = n.intersectTriangle(o, s, r, !0, a) : c = n.intersectTriangle(r, s, o, e.side === zn, a), c === null) return null;
  Lr.copy(a), Lr.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Lr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Lr.clone(),
    object: i
  };
}
function Ir(i, e, t, n, r, s, o, a, c, l) {
  i.getVertexPosition(a, Rr), i.getVertexPosition(c, Cr), i.getVertexPosition(l, Pr);
  const u = zu(i, e, t, n, Rr, Cr, Pr, Po);
  if (u) {
    const h = new F();
    tn.getBarycoord(Po, Rr, Cr, Pr, h), r && (u.uv = tn.getInterpolatedAttribute(r, a, c, l, h, new Re())), s && (u.uv1 = tn.getInterpolatedAttribute(s, a, c, l, h, new Re())), o && (u.normal = tn.getInterpolatedAttribute(o, a, c, l, h, new F()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const p = {
      a,
      b: c,
      c: l,
      normal: new F(),
      materialIndex: 0
    };
    tn.getNormal(Rr, Cr, Pr, p.normal), u.face = p, u.barycoord = h;
  }
  return u;
}
class pr extends an {
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
    const c = [], l = [], u = [], h = [];
    let p = 0, f = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, r, o, 2), _("x", "z", "y", 1, -1, e, n, -t, r, o, 3), _("x", "y", "z", 1, -1, e, t, n, r, s, 4), _("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new rn(l, 3)), this.setAttribute("normal", new rn(u, 3)), this.setAttribute("uv", new rn(h, 2));
    function _(g, m, d, A, y, x, P, C, w, U, E) {
      const M = x / w, D = P / U, Z = x / 2, V = P / 2, j = C / 2, ne = w + 1, q = U + 1;
      let ce = 0, k = 0;
      const de = new F();
      for (let G = 0; G < q; G++) {
        const W = G * D - V;
        for (let ie = 0; ie < ne; ie++) {
          const $ = ie * M - Z;
          de[g] = $ * A, de[m] = W * y, de[d] = j, l.push(de.x, de.y, de.z), de[g] = 0, de[m] = 0, de[d] = C > 0 ? 1 : -1, u.push(de.x, de.y, de.z), h.push(ie / w), h.push(1 - G / U), ce += 1;
        }
      }
      for (let G = 0; G < U; G++)
        for (let W = 0; W < w; W++) {
          const ie = p + W + ne * G, $ = p + W + ne * (G + 1), O = p + (W + 1) + ne * (G + 1), Y = p + (W + 1) + ne * G;
          c.push(ie, $, Y), c.push($, O, Y), k += 6;
        }
      a.addGroup(f, k, E), f += k, p += ce;
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
    return new pr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Fi(i) {
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
function Rt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Fi(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Hu(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function rl(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Xe.workingColorSpace;
}
const ss = { clone: Fi, merge: Rt };
var Vu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Gu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class bt extends fr {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Vu, this.fragmentShader = Gu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Fi(e.uniforms), this.uniformsGroups = Hu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ja extends mt {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new st(), this.projectionMatrix = new st(), this.projectionMatrixInverse = new st(), this.coordinateSystem = cn;
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
const In = /* @__PURE__ */ new F(), Do = /* @__PURE__ */ new Re(), Lo = /* @__PURE__ */ new Re();
class en extends ja {
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
    this.fov = Fa * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(gs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Fa * 2 * Math.atan(
      Math.tan(gs * 0.5 * this.fov) / this.zoom
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
    In.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(In.x, In.y).multiplyScalar(-e / In.z), In.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(In.x, In.y).multiplyScalar(-e / In.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Do, Lo), t.subVectors(Lo, Do);
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
    let t = e * Math.tan(gs * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * r / c, t -= o.offsetY * n / l, r *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Si = -90, Mi = 1;
class ku extends mt {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new en(Si, Mi, e, t);
    r.layers = this.layers, this.add(r);
    const s = new en(Si, Mi, e, t);
    s.layers = this.layers, this.add(s);
    const o = new en(Si, Mi, e, t);
    o.layers = this.layers, this.add(o);
    const a = new en(Si, Mi, e, t);
    a.layers = this.layers, this.add(a);
    const c = new en(Si, Mi, e, t);
    c.layers = this.layers, this.add(c);
    const l = new en(Si, Mi, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, c] = t;
    for (const l of t) this.remove(l);
    if (e === cn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === rs)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
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
    const [s, o, a, c, l, u] = this.children, h = e.getRenderTarget(), p = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, c), e.setRenderTarget(n, 4, r), e.render(t, l), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(h, p, f), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class sl extends St {
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
  constructor(e = [], t = Ii, n, r, s, o, a, c, l, u) {
    super(e, t, n, r, s, o, a, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
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
class Wu extends ii {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new sl(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ht;
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
    }, r = new pr(5, 5, 5), s = new bt({
      name: "CubemapFromEquirect",
      uniforms: Fi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Nt,
      blending: On
    });
    s.uniforms.tEquirect.value = t;
    const o = new Ct(r, s), a = t.minFilter;
    return t.minFilter === ti && (t.minFilter = Ht), new ku(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
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
class Ur extends mt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Xu = { type: "move" };
class Bs {
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
    return this._hand === null && (this._hand = new Ur(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ur(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new F(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new F()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Ur(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new F(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new F()), this._grip;
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
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n), d = this._getHandJoint(l, g);
          m !== null && (d.matrix.fromArray(m.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = m.radius), d.visible = m !== null;
        }
        const u = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], p = u.position.distanceTo(h.position), f = 0.02, _ = 5e-3;
        l.inputState.pinching && p > f + _ ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && p <= f - _ && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Xu)));
    }
    return a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
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
      const n = new Ur();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Yu extends mt {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new wn(), this.environmentIntensity = 1, this.environmentRotation = new wn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class as extends St {
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
  constructor(e = null, t = 1, n = 1, r, s, o, a, c, l = Ft, u = Ft, h, p) {
    super(null, o, a, c, l, u, r, s, h, p), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class os extends kt {
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
const zs = /* @__PURE__ */ new F(), qu = /* @__PURE__ */ new F(), Zu = /* @__PURE__ */ new Oe();
class jn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new F(1, 0, 0), t = 0) {
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
    const r = zs.subVectors(n, t).cross(qu.subVectors(e, t)).normalize();
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
    const n = e.delta(zs), r = this.normal.dot(n);
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
    const n = t || Zu.getNormalMatrix(e), r = this.coplanarPoint(zs).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Xn = /* @__PURE__ */ new hs(), Nr = /* @__PURE__ */ new F();
class $a {
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
  constructor(e = new jn(), t = new jn(), n = new jn(), r = new jn(), s = new jn(), o = new jn()) {
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
  setFromProjectionMatrix(e, t = cn) {
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], c = r[3], l = r[4], u = r[5], h = r[6], p = r[7], f = r[8], _ = r[9], g = r[10], m = r[11], d = r[12], A = r[13], y = r[14], x = r[15];
    if (n[0].setComponents(c - s, p - l, m - f, x - d).normalize(), n[1].setComponents(c + s, p + l, m + f, x + d).normalize(), n[2].setComponents(c + o, p + u, m + _, x + A).normalize(), n[3].setComponents(c - o, p - u, m - _, x - A).normalize(), n[4].setComponents(c - a, p - h, m - g, x - y).normalize(), t === cn)
      n[5].setComponents(c + a, p + h, m + g, x + y).normalize();
    else if (t === rs)
      n[5].setComponents(a, h, g, y).normalize();
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
      e.boundingSphere === null && e.computeBoundingSphere(), Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Xn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    return Xn.center.set(0, 0, 0), Xn.radius = 0.7071067811865476, Xn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Xn);
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
      if (Nr.x = r.normal.x > 0 ? e.max.x : e.min.x, Nr.y = r.normal.y > 0 ? e.max.y : e.min.y, Nr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Nr) < 0)
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
class al extends fr {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Pe(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const cs = /* @__PURE__ */ new F(), ls = /* @__PURE__ */ new F(), Io = /* @__PURE__ */ new st(), Yi = /* @__PURE__ */ new Jc(), Fr = /* @__PURE__ */ new hs(), Hs = /* @__PURE__ */ new F(), Uo = /* @__PURE__ */ new F();
class ju extends mt {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new an(), t = new al()) {
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
        cs.fromBufferAttribute(t, r - 1), ls.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += cs.distanceTo(ls);
      e.setAttribute("lineDistance", new rn(n, 1));
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), Fr.copy(n.boundingSphere), Fr.applyMatrix4(r), Fr.radius += s, e.ray.intersectsSphere(Fr) === !1) return;
    Io.copy(r).invert(), Yi.copy(e.ray).applyMatrix4(Io);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = this.isLineSegments ? 2 : 1, u = n.index, p = n.attributes.position;
    if (u !== null) {
      const f = Math.max(0, o.start), _ = Math.min(u.count, o.start + o.count);
      for (let g = f, m = _ - 1; g < m; g += l) {
        const d = u.getX(g), A = u.getX(g + 1), y = Or(this, e, Yi, c, d, A, g);
        y && t.push(y);
      }
      if (this.isLineLoop) {
        const g = u.getX(_ - 1), m = u.getX(f), d = Or(this, e, Yi, c, g, m, _ - 1);
        d && t.push(d);
      }
    } else {
      const f = Math.max(0, o.start), _ = Math.min(p.count, o.start + o.count);
      for (let g = f, m = _ - 1; g < m; g += l) {
        const d = Or(this, e, Yi, c, g, g + 1, g);
        d && t.push(d);
      }
      if (this.isLineLoop) {
        const g = Or(this, e, Yi, c, _ - 1, f, _ - 1);
        g && t.push(g);
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
function Or(i, e, t, n, r, s, o) {
  const a = i.geometry.attributes.position;
  if (cs.fromBufferAttribute(a, r), ls.fromBufferAttribute(a, s), t.distanceSqToSegment(cs, ls, Hs, Uo) > n) return;
  Hs.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Hs);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Uo.clone().applyMatrix4(i.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const No = /* @__PURE__ */ new F(), Fo = /* @__PURE__ */ new F();
class $u extends ju {
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
        No.fromBufferAttribute(t, r), Fo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + No.distanceTo(Fo);
      e.setAttribute("lineDistance", new rn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class ol extends St {
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
  constructor(e, t, n = ni, r, s, o, a = Ft, c = Ft, l, u = ar) {
    if (u !== ar && u !== or)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, r, s, o, a, c, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Za(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Oi extends an {
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
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(r), l = a + 1, u = c + 1, h = e / a, p = t / c, f = [], _ = [], g = [], m = [];
    for (let d = 0; d < u; d++) {
      const A = d * p - o;
      for (let y = 0; y < l; y++) {
        const x = y * h - s;
        _.push(x, -A, 0), g.push(0, 0, 1), m.push(y / a), m.push(1 - d / c);
      }
    }
    for (let d = 0; d < c; d++)
      for (let A = 0; A < a; A++) {
        const y = A + l * d, x = A + l * (d + 1), P = A + 1 + l * (d + 1), C = A + 1 + l * d;
        f.push(y, x, C), f.push(x, P, C);
      }
    this.setIndex(f), this.setAttribute("position", new rn(_, 3)), this.setAttribute("normal", new rn(g, 3)), this.setAttribute("uv", new rn(m, 2));
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
    return new Oi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Ku extends fr {
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
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = au, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ju extends fr {
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
const Oo = {
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
class Qu {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(e, t, n) {
    const r = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), s = !0;
    }, this.itemEnd = function(u) {
      o++, r.onProgress !== void 0 && r.onProgress(u, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(u) {
      r.onError !== void 0 && r.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, h) {
      return l.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = l.indexOf(u);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, p = l.length; h < p; h += 2) {
        const f = l[h], _ = l[h + 1];
        if (f.global && (f.lastIndex = 0), f.test(u))
          return _;
      }
      return null;
    };
  }
}
const ed = /* @__PURE__ */ new Qu();
let Ka = class {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : ed, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
Ka.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class td extends Ka {
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
    const s = this, o = Oo.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = cr("img");
    function c() {
      u(), Oo.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(h) {
      u(), r && r(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class nd extends Ka {
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
    const s = new St(), o = new td(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class id extends mt {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Pe(e), this.intensity = t;
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
const Vs = /* @__PURE__ */ new st(), Bo = /* @__PURE__ */ new F(), zo = /* @__PURE__ */ new F();
class rd {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Re(512, 512), this.map = null, this.mapPass = null, this.matrix = new st(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new $a(), this._frameExtents = new Re(1, 1), this._viewportCount = 1, this._viewports = [
      new lt(0, 0, 1, 1)
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
    Bo.setFromMatrixPosition(e.matrixWorld), t.position.copy(Bo), zo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(zo), t.updateMatrixWorld(), Vs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Vs), n.set(
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
    ), n.multiply(Vs);
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
class Ja extends ja {
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
    let s = n - e, o = n + e, a = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= u * this.view.offsetY, c = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class sd extends rd {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Ja(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ad extends id {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(mt.DEFAULT_UP), this.updateMatrix(), this.target = new mt(), this.shadow = new sd();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Qa extends an {
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
class od extends en {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e, this.index = 0;
  }
}
class Ho {
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
const Br = /* @__PURE__ */ new F(), ct = /* @__PURE__ */ new ja();
class cd extends $u {
  /**
   * Constructs a new arrow helper.
   *
   * @param {Camera} camera - The camera to visualize.
   */
  constructor(e) {
    const t = new an(), n = new al({ color: 16777215, vertexColors: !0, toneMapped: !1 }), r = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(_, g) {
      c(_), c(g);
    }
    function c(_) {
      r.push(0, 0, 0), s.push(0, 0, 0), o[_] === void 0 && (o[_] = []), o[_].push(r.length / 3 - 1);
    }
    t.setAttribute("position", new rn(r, 3)), t.setAttribute("color", new rn(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    const l = new Pe(16755200), u = new Pe(16711680), h = new Pe(43775), p = new Pe(16777215), f = new Pe(3355443);
    this.setColors(l, u, h, p, f);
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
    const s = this.camera.coordinateSystem === cn ? -1 : 0;
    ut("c", t, e, ct, 0, 0, s), ut("t", t, e, ct, 0, 0, 1), ut("n1", t, e, ct, -1, -1, s), ut("n2", t, e, ct, n, -1, s), ut("n3", t, e, ct, -1, r, s), ut("n4", t, e, ct, n, r, s), ut("f1", t, e, ct, -1, -1, 1), ut("f2", t, e, ct, n, -1, 1), ut("f3", t, e, ct, -1, r, 1), ut("f4", t, e, ct, n, r, 1), ut("u1", t, e, ct, n * 0.7, r * 1.1, s), ut("u2", t, e, ct, -1 * 0.7, r * 1.1, s), ut("u3", t, e, ct, 0, r * 2, s), ut("cf1", t, e, ct, -1, 0, 1), ut("cf2", t, e, ct, n, 0, 1), ut("cf3", t, e, ct, 0, -1, 1), ut("cf4", t, e, ct, 0, r, 1), ut("cn1", t, e, ct, -1, 0, s), ut("cn2", t, e, ct, n, 0, s), ut("cn3", t, e, ct, 0, -1, s), ut("cn4", t, e, ct, 0, r, s), e.getAttribute("position").needsUpdate = !0;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function ut(i, e, t, n, r, s, o) {
  Br.set(r, s, o).unproject(n);
  const a = e[i];
  if (a !== void 0) {
    const c = t.getAttribute("position");
    for (let l = 0, u = a.length; l < u; l++)
      c.setXYZ(a[l], Br.x, Br.y, Br.z);
  }
}
function Vo(i, e, t, n) {
  const r = ld(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Gc:
      return i * e;
    case Wc:
      return i * e;
    case Xc:
      return i * e * 2;
    case Yc:
      return i * e / r.components * r.byteLength;
    case Xa:
      return i * e / r.components * r.byteLength;
    case qc:
      return i * e * 2 / r.components * r.byteLength;
    case Ya:
      return i * e * 2 / r.components * r.byteLength;
    case kc:
      return i * e * 3 / r.components * r.byteLength;
    case Vt:
      return i * e * 4 / r.components * r.byteLength;
    case qa:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case qr:
    case Zr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case jr:
    case $r:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case da:
    case fa:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case ua:
    case ha:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case pa:
    case ma:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case _a:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case ga:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case va:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case xa:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Sa:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ma:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ea:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case ya:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ta:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case ba:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Aa:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case wa:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ra:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ca:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Pa:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Kr:
    case Da:
    case La:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Zc:
    case Ia:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Ua:
    case Na:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function ld(i) {
  switch (i) {
    case An:
    case zc:
      return { byteLength: 1, components: 1 };
    case rr:
    case Hc:
    case ur:
      return { byteLength: 2, components: 1 };
    case ka:
    case Wa:
      return { byteLength: 2, components: 4 };
    case ni:
    case Ga:
    case nn:
      return { byteLength: 4, components: 1 };
    case Vc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: za
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = za);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function cl() {
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
function ud(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, c) {
    const l = a.array, u = a.usage, h = l.byteLength, p = i.createBuffer();
    i.bindBuffer(c, p), i.bufferData(c, l, u), a.onUploadCallback();
    let f;
    if (l instanceof Float32Array)
      f = i.FLOAT;
    else if (l instanceof Uint16Array)
      a.isFloat16BufferAttribute ? f = i.HALF_FLOAT : f = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      f = i.SHORT;
    else if (l instanceof Uint32Array)
      f = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      f = i.INT;
    else if (l instanceof Int8Array)
      f = i.BYTE;
    else if (l instanceof Uint8Array)
      f = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      f = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: p,
      type: f,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: a.version,
      size: h
    };
  }
  function n(a, c, l) {
    const u = c.array, h = c.updateRanges;
    if (i.bindBuffer(l, a), h.length === 0)
      i.bufferSubData(l, 0, u);
    else {
      h.sort((f, _) => f.start - _.start);
      let p = 0;
      for (let f = 1; f < h.length; f++) {
        const _ = h[p], g = h[f];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          g.start + g.count - _.start
        ) : (++p, h[p] = g);
      }
      h.length = p + 1;
      for (let f = 0, _ = h.length; f < _; f++) {
        const g = h[f];
        i.bufferSubData(
          l,
          g.start * u.BYTES_PER_ELEMENT,
          u,
          g.start,
          g.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const c = e.get(a);
    c && (i.deleteBuffer(c.buffer), e.delete(a));
  }
  function o(a, c) {
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
    const l = e.get(a);
    if (l === void 0)
      e.set(a, t(a, c));
    else if (l.version < a.version) {
      if (l.size !== a.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, a, c), l.version = a.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: o
  };
}
var dd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, hd = `#ifdef USE_ALPHAHASH
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
#endif`, fd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, pd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, md = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, _d = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, gd = `#ifdef USE_AOMAP
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
#endif`, vd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, xd = `#ifdef USE_BATCHING
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
#endif`, Sd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Md = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Ed = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, yd = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Td = `#ifdef USE_IRIDESCENCE
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
#endif`, bd = `#ifdef USE_BUMPMAP
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
#endif`, Ad = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, wd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Rd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Cd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Pd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Dd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ld = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Id = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Ud = `#define PI 3.141592653589793
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
} // validated`, Nd = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Fd = `vec3 transformedNormal = objectNormal;
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
#endif`, Od = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Bd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, zd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Hd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Vd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Gd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, kd = `#ifdef USE_ENVMAP
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
#endif`, Wd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Xd = `#ifdef USE_ENVMAP
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
#endif`, Yd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, qd = `#ifdef USE_ENVMAP
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
#endif`, Zd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, jd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, $d = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Kd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Jd = `#ifdef USE_GRADIENTMAP
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
}`, Qd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, eh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, th = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, nh = `uniform bool receiveShadow;
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
#endif`, ih = `#ifdef USE_ENVMAP
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
#endif`, rh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, sh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ah = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, oh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ch = `PhysicalMaterial material;
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
#endif`, lh = `struct PhysicalMaterial {
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
}`, uh = `
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
#endif`, dh = `#if defined( RE_IndirectDiffuse )
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
#endif`, hh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, fh = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, ph = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, mh = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _h = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, gh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Sh = `#if defined( USE_POINTS_UV )
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
#endif`, Mh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Eh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, yh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Th = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, bh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ah = `#ifdef USE_MORPHTARGETS
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
#endif`, wh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Rh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Ch = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Ph = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Dh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ih = `#ifdef USE_NORMALMAP
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
#endif`, Uh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Nh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Fh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Oh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Bh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, zh = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Hh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Vh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Gh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, kh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Wh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Xh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Yh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, qh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Zh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, jh = `float getShadowMask() {
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
}`, $h = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Kh = `#ifdef USE_SKINNING
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
#endif`, Jh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Qh = `#ifdef USE_SKINNING
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
#endif`, ef = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, tf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, nf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, rf = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, sf = `#ifdef USE_TRANSMISSION
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
#endif`, af = `#ifdef USE_TRANSMISSION
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
#endif`, of = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, cf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, lf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, uf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const df = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, hf = `uniform sampler2D t2D;
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
}`, ff = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, pf = `#ifdef ENVMAP_TYPE_CUBE
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
}`, mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _f = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gf = `#include <common>
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
}`, vf = `#if DEPTH_PACKING == 3200
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
}`, xf = `#define DISTANCE
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
}`, Sf = `#define DISTANCE
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
}`, Mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ef = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yf = `uniform float scale;
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
}`, Tf = `uniform vec3 diffuse;
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
}`, bf = `#include <common>
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
}`, Af = `uniform vec3 diffuse;
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
}`, wf = `#define LAMBERT
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
}`, Rf = `#define LAMBERT
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
}`, Cf = `#define MATCAP
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
}`, Pf = `#define MATCAP
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
}`, Df = `#define NORMAL
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
}`, Lf = `#define NORMAL
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
}`, If = `#define PHONG
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
}`, Uf = `#define PHONG
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
}`, Nf = `#define STANDARD
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
}`, Ff = `#define STANDARD
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
}`, Of = `#define TOON
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
}`, Bf = `#define TOON
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
}`, zf = `uniform float size;
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
}`, Hf = `uniform vec3 diffuse;
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
}`, Vf = `#include <common>
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
}`, Gf = `uniform vec3 color;
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
}`, kf = `uniform float rotation;
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
}`, Wf = `uniform vec3 diffuse;
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
}`, Fe = {
  alphahash_fragment: dd,
  alphahash_pars_fragment: hd,
  alphamap_fragment: fd,
  alphamap_pars_fragment: pd,
  alphatest_fragment: md,
  alphatest_pars_fragment: _d,
  aomap_fragment: gd,
  aomap_pars_fragment: vd,
  batching_pars_vertex: xd,
  batching_vertex: Sd,
  begin_vertex: Md,
  beginnormal_vertex: Ed,
  bsdfs: yd,
  iridescence_fragment: Td,
  bumpmap_pars_fragment: bd,
  clipping_planes_fragment: Ad,
  clipping_planes_pars_fragment: wd,
  clipping_planes_pars_vertex: Rd,
  clipping_planes_vertex: Cd,
  color_fragment: Pd,
  color_pars_fragment: Dd,
  color_pars_vertex: Ld,
  color_vertex: Id,
  common: Ud,
  cube_uv_reflection_fragment: Nd,
  defaultnormal_vertex: Fd,
  displacementmap_pars_vertex: Od,
  displacementmap_vertex: Bd,
  emissivemap_fragment: zd,
  emissivemap_pars_fragment: Hd,
  colorspace_fragment: Vd,
  colorspace_pars_fragment: Gd,
  envmap_fragment: kd,
  envmap_common_pars_fragment: Wd,
  envmap_pars_fragment: Xd,
  envmap_pars_vertex: Yd,
  envmap_physical_pars_fragment: ih,
  envmap_vertex: qd,
  fog_vertex: Zd,
  fog_pars_vertex: jd,
  fog_fragment: $d,
  fog_pars_fragment: Kd,
  gradientmap_pars_fragment: Jd,
  lightmap_pars_fragment: Qd,
  lights_lambert_fragment: eh,
  lights_lambert_pars_fragment: th,
  lights_pars_begin: nh,
  lights_toon_fragment: rh,
  lights_toon_pars_fragment: sh,
  lights_phong_fragment: ah,
  lights_phong_pars_fragment: oh,
  lights_physical_fragment: ch,
  lights_physical_pars_fragment: lh,
  lights_fragment_begin: uh,
  lights_fragment_maps: dh,
  lights_fragment_end: hh,
  logdepthbuf_fragment: fh,
  logdepthbuf_pars_fragment: ph,
  logdepthbuf_pars_vertex: mh,
  logdepthbuf_vertex: _h,
  map_fragment: gh,
  map_pars_fragment: vh,
  map_particle_fragment: xh,
  map_particle_pars_fragment: Sh,
  metalnessmap_fragment: Mh,
  metalnessmap_pars_fragment: Eh,
  morphinstance_vertex: yh,
  morphcolor_vertex: Th,
  morphnormal_vertex: bh,
  morphtarget_pars_vertex: Ah,
  morphtarget_vertex: wh,
  normal_fragment_begin: Rh,
  normal_fragment_maps: Ch,
  normal_pars_fragment: Ph,
  normal_pars_vertex: Dh,
  normal_vertex: Lh,
  normalmap_pars_fragment: Ih,
  clearcoat_normal_fragment_begin: Uh,
  clearcoat_normal_fragment_maps: Nh,
  clearcoat_pars_fragment: Fh,
  iridescence_pars_fragment: Oh,
  opaque_fragment: Bh,
  packing: zh,
  premultiplied_alpha_fragment: Hh,
  project_vertex: Vh,
  dithering_fragment: Gh,
  dithering_pars_fragment: kh,
  roughnessmap_fragment: Wh,
  roughnessmap_pars_fragment: Xh,
  shadowmap_pars_fragment: Yh,
  shadowmap_pars_vertex: qh,
  shadowmap_vertex: Zh,
  shadowmask_pars_fragment: jh,
  skinbase_vertex: $h,
  skinning_pars_vertex: Kh,
  skinning_vertex: Jh,
  skinnormal_vertex: Qh,
  specularmap_fragment: ef,
  specularmap_pars_fragment: tf,
  tonemapping_fragment: nf,
  tonemapping_pars_fragment: rf,
  transmission_fragment: sf,
  transmission_pars_fragment: af,
  uv_pars_fragment: of,
  uv_pars_vertex: cf,
  uv_vertex: lf,
  worldpos_vertex: uf,
  background_vert: df,
  background_frag: hf,
  backgroundCube_vert: ff,
  backgroundCube_frag: pf,
  cube_vert: mf,
  cube_frag: _f,
  depth_vert: gf,
  depth_frag: vf,
  distanceRGBA_vert: xf,
  distanceRGBA_frag: Sf,
  equirect_vert: Mf,
  equirect_frag: Ef,
  linedashed_vert: yf,
  linedashed_frag: Tf,
  meshbasic_vert: bf,
  meshbasic_frag: Af,
  meshlambert_vert: wf,
  meshlambert_frag: Rf,
  meshmatcap_vert: Cf,
  meshmatcap_frag: Pf,
  meshnormal_vert: Df,
  meshnormal_frag: Lf,
  meshphong_vert: If,
  meshphong_frag: Uf,
  meshphysical_vert: Nf,
  meshphysical_frag: Ff,
  meshtoon_vert: Of,
  meshtoon_frag: Bf,
  points_vert: zf,
  points_frag: Hf,
  shadow_vert: Vf,
  shadow_frag: Gf,
  sprite_vert: kf,
  sprite_frag: Wf
}, ue = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Pe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Oe() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Oe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Oe() },
    normalScale: { value: /* @__PURE__ */ new Re(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Oe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Pe(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Pe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Oe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Pe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Re(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaTest: { value: 0 }
  }
}, on = {
  basic: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pe(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pe(0) },
        specular: { value: /* @__PURE__ */ new Pe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.roughnessmap,
      ue.metalnessmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.gradientmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pe(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Rt([
      ue.points,
      ue.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Rt([
      ue.sprite,
      ue.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Oe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Oe() }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Rt([
      ue.common,
      ue.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new F() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distanceRGBA_vert,
    fragmentShader: Fe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Rt([
      ue.lights,
      ue.fog,
      {
        color: { value: /* @__PURE__ */ new Pe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
on.physical = {
  uniforms: /* @__PURE__ */ Rt([
    on.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Oe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Oe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Re(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Oe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Oe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Oe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Pe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Oe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Oe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Oe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Re() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Oe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Pe(0) },
      specularColor: { value: /* @__PURE__ */ new Pe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Oe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Oe() },
      anisotropyVector: { value: /* @__PURE__ */ new Re() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Oe() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const zr = { r: 0, b: 0, g: 0 }, Yn = /* @__PURE__ */ new wn(), Xf = /* @__PURE__ */ new st();
function Yf(i, e, t, n, r, s, o) {
  const a = new Pe(0);
  let c = s === !0 ? 0 : 1, l, u, h = null, p = 0, f = null;
  function _(y) {
    let x = y.isScene === !0 ? y.background : null;
    return x && x.isTexture && (x = (y.backgroundBlurriness > 0 ? t : e).get(x)), x;
  }
  function g(y) {
    let x = !1;
    const P = _(y);
    P === null ? d(a, c) : P && P.isColor && (d(P, 1), x = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || x) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(y, x) {
    const P = _(x);
    P && (P.isCubeTexture || P.mapping === ds) ? (u === void 0 && (u = new Ct(
      new pr(1, 1, 1),
      new bt({
        name: "BackgroundCubeMaterial",
        uniforms: Fi(on.backgroundCube.uniforms),
        vertexShader: on.backgroundCube.vertexShader,
        fragmentShader: on.backgroundCube.fragmentShader,
        side: Nt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(C, w, U) {
      this.matrixWorld.copyPosition(U.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), Yn.copy(x.backgroundRotation), Yn.x *= -1, Yn.y *= -1, Yn.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === !1 && (Yn.y *= -1, Yn.z *= -1), u.material.uniforms.envMap.value = P, u.material.uniforms.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Yn)), u.material.toneMapped = Xe.getTransfer(P.colorSpace) !== $e, (h !== P || p !== P.version || f !== i.toneMapping) && (u.material.needsUpdate = !0, h = P, p = P.version, f = i.toneMapping), u.layers.enableAll(), y.unshift(u, u.geometry, u.material, 0, 0, null)) : P && P.isTexture && (l === void 0 && (l = new Ct(
      new Oi(2, 2),
      new bt({
        name: "BackgroundMaterial",
        uniforms: Fi(on.background.uniforms),
        vertexShader: on.background.vertexShader,
        fragmentShader: on.background.fragmentShader,
        side: zn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = P, l.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, l.material.toneMapped = Xe.getTransfer(P.colorSpace) !== $e, P.matrixAutoUpdate === !0 && P.updateMatrix(), l.material.uniforms.uvTransform.value.copy(P.matrix), (h !== P || p !== P.version || f !== i.toneMapping) && (l.material.needsUpdate = !0, h = P, p = P.version, f = i.toneMapping), l.layers.enableAll(), y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function d(y, x) {
    y.getRGB(zr, rl(i)), n.buffers.color.setClear(zr.r, zr.g, zr.b, x, o);
  }
  function A() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(y, x = 1) {
      a.set(y), c = x, d(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(y) {
      c = y, d(a, c);
    },
    render: g,
    addToRenderList: m,
    dispose: A
  };
}
function qf(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = p(null);
  let s = r, o = !1;
  function a(M, D, Z, V, j) {
    let ne = !1;
    const q = h(V, Z, D);
    s !== q && (s = q, l(s.object)), ne = f(M, V, Z, j), ne && _(M, V, Z, j), j !== null && e.update(j, i.ELEMENT_ARRAY_BUFFER), (ne || o) && (o = !1, x(M, D, Z, V), j !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(j).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(M) {
    return i.bindVertexArray(M);
  }
  function u(M) {
    return i.deleteVertexArray(M);
  }
  function h(M, D, Z) {
    const V = Z.wireframe === !0;
    let j = n[M.id];
    j === void 0 && (j = {}, n[M.id] = j);
    let ne = j[D.id];
    ne === void 0 && (ne = {}, j[D.id] = ne);
    let q = ne[V];
    return q === void 0 && (q = p(c()), ne[V] = q), q;
  }
  function p(M) {
    const D = [], Z = [], V = [];
    for (let j = 0; j < t; j++)
      D[j] = 0, Z[j] = 0, V[j] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: Z,
      attributeDivisors: V,
      object: M,
      attributes: {},
      index: null
    };
  }
  function f(M, D, Z, V) {
    const j = s.attributes, ne = D.attributes;
    let q = 0;
    const ce = Z.getAttributes();
    for (const k in ce)
      if (ce[k].location >= 0) {
        const G = j[k];
        let W = ne[k];
        if (W === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (W = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (W = M.instanceColor)), G === void 0 || G.attribute !== W || W && G.data !== W.data) return !0;
        q++;
      }
    return s.attributesNum !== q || s.index !== V;
  }
  function _(M, D, Z, V) {
    const j = {}, ne = D.attributes;
    let q = 0;
    const ce = Z.getAttributes();
    for (const k in ce)
      if (ce[k].location >= 0) {
        let G = ne[k];
        G === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (G = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (G = M.instanceColor));
        const W = {};
        W.attribute = G, G && G.data && (W.data = G.data), j[k] = W, q++;
      }
    s.attributes = j, s.attributesNum = q, s.index = V;
  }
  function g() {
    const M = s.newAttributes;
    for (let D = 0, Z = M.length; D < Z; D++)
      M[D] = 0;
  }
  function m(M) {
    d(M, 0);
  }
  function d(M, D) {
    const Z = s.newAttributes, V = s.enabledAttributes, j = s.attributeDivisors;
    Z[M] = 1, V[M] === 0 && (i.enableVertexAttribArray(M), V[M] = 1), j[M] !== D && (i.vertexAttribDivisor(M, D), j[M] = D);
  }
  function A() {
    const M = s.newAttributes, D = s.enabledAttributes;
    for (let Z = 0, V = D.length; Z < V; Z++)
      D[Z] !== M[Z] && (i.disableVertexAttribArray(Z), D[Z] = 0);
  }
  function y(M, D, Z, V, j, ne, q) {
    q === !0 ? i.vertexAttribIPointer(M, D, Z, j, ne) : i.vertexAttribPointer(M, D, Z, V, j, ne);
  }
  function x(M, D, Z, V) {
    g();
    const j = V.attributes, ne = Z.getAttributes(), q = D.defaultAttributeValues;
    for (const ce in ne) {
      const k = ne[ce];
      if (k.location >= 0) {
        let de = j[ce];
        if (de === void 0 && (ce === "instanceMatrix" && M.instanceMatrix && (de = M.instanceMatrix), ce === "instanceColor" && M.instanceColor && (de = M.instanceColor)), de !== void 0) {
          const G = de.normalized, W = de.itemSize, ie = e.get(de);
          if (ie === void 0) continue;
          const $ = ie.buffer, O = ie.type, Y = ie.bytesPerElement, J = O === i.INT || O === i.UNSIGNED_INT || de.gpuType === Ga;
          if (de.isInterleavedBufferAttribute) {
            const ee = de.data, ve = ee.stride, Ae = de.offset;
            if (ee.isInstancedInterleavedBuffer) {
              for (let Se = 0; Se < k.locationSize; Se++)
                d(k.location + Se, ee.meshPerAttribute);
              M.isInstancedMesh !== !0 && V._maxInstanceCount === void 0 && (V._maxInstanceCount = ee.meshPerAttribute * ee.count);
            } else
              for (let Se = 0; Se < k.locationSize; Se++)
                m(k.location + Se);
            i.bindBuffer(i.ARRAY_BUFFER, $);
            for (let Se = 0; Se < k.locationSize; Se++)
              y(
                k.location + Se,
                W / k.locationSize,
                O,
                G,
                ve * Y,
                (Ae + W / k.locationSize * Se) * Y,
                J
              );
          } else {
            if (de.isInstancedBufferAttribute) {
              for (let ee = 0; ee < k.locationSize; ee++)
                d(k.location + ee, de.meshPerAttribute);
              M.isInstancedMesh !== !0 && V._maxInstanceCount === void 0 && (V._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let ee = 0; ee < k.locationSize; ee++)
                m(k.location + ee);
            i.bindBuffer(i.ARRAY_BUFFER, $);
            for (let ee = 0; ee < k.locationSize; ee++)
              y(
                k.location + ee,
                W / k.locationSize,
                O,
                G,
                W * Y,
                W / k.locationSize * ee * Y,
                J
              );
          }
        } else if (q !== void 0) {
          const G = q[ce];
          if (G !== void 0)
            switch (G.length) {
              case 2:
                i.vertexAttrib2fv(k.location, G);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, G);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, G);
                break;
              default:
                i.vertexAttrib1fv(k.location, G);
            }
        }
      }
    }
    A();
  }
  function P() {
    U();
    for (const M in n) {
      const D = n[M];
      for (const Z in D) {
        const V = D[Z];
        for (const j in V)
          u(V[j].object), delete V[j];
        delete D[Z];
      }
      delete n[M];
    }
  }
  function C(M) {
    if (n[M.id] === void 0) return;
    const D = n[M.id];
    for (const Z in D) {
      const V = D[Z];
      for (const j in V)
        u(V[j].object), delete V[j];
      delete D[Z];
    }
    delete n[M.id];
  }
  function w(M) {
    for (const D in n) {
      const Z = n[D];
      if (Z[M.id] === void 0) continue;
      const V = Z[M.id];
      for (const j in V)
        u(V[j].object), delete V[j];
      delete Z[M.id];
    }
  }
  function U() {
    E(), o = !0, s !== r && (s = r, l(s.object));
  }
  function E() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: a,
    reset: U,
    resetDefaultState: E,
    dispose: P,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: w,
    initAttributes: g,
    enableAttribute: m,
    disableUnusedAttributes: A
  };
}
function Zf(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, u) {
    i.drawArrays(n, l, u), t.update(u, n, 1);
  }
  function o(l, u, h) {
    h !== 0 && (i.drawArraysInstanced(n, l, u, h), t.update(u, n, h));
  }
  function a(l, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, h);
    let f = 0;
    for (let _ = 0; _ < h; _++)
      f += u[_];
    t.update(f, n, 1);
  }
  function c(l, u, h, p) {
    if (h === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let _ = 0; _ < l.length; _++)
        o(l[_], u[_], p[_]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, p, 0, h);
      let _ = 0;
      for (let g = 0; g < h; g++)
        _ += u[g] * p[g];
      t.update(_, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = c;
}
function jf(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function o(w) {
    return !(w !== Vt && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(w) {
    const U = w === ur && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== An && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== nn && !U);
  }
  function c(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const u = c(l);
  u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const h = t.logarithmicDepthBuffer === !0, p = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), y = i.getParameter(i.MAX_VARYING_VECTORS), x = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), P = _ > 0, C = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: l,
    logarithmicDepthBuffer: h,
    reverseDepthBuffer: p,
    maxTextures: f,
    maxVertexTextures: _,
    maxTextureSize: g,
    maxCubemapSize: m,
    maxAttributes: d,
    maxVertexUniforms: A,
    maxVaryings: y,
    maxFragmentUniforms: x,
    vertexTextures: P,
    maxSamples: C
  };
}
function $f(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new jn(), a = new Oe(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, p) {
    const f = h.length !== 0 || p || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = p, n = h.length, f;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(h, p) {
    t = u(h, p, 0);
  }, this.setState = function(h, p, f) {
    const _ = h.clippingPlanes, g = h.clipIntersection, m = h.clipShadows, d = i.get(h);
    if (!r || _ === null || _.length === 0 || s && !m)
      s ? u(null) : l();
    else {
      const A = s ? 0 : n, y = A * 4;
      let x = d.clippingState || null;
      c.value = x, x = u(_, p, y, f);
      for (let P = 0; P !== y; ++P)
        x[P] = t[P];
      d.clippingState = x, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, p, f, _) {
    const g = h !== null ? h.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = c.value, _ !== !0 || m === null) {
        const d = f + g * 4, A = p.matrixWorldInverse;
        a.getNormalMatrix(A), (m === null || m.length < d) && (m = new Float32Array(d));
        for (let y = 0, x = f; y !== g; ++y, x += 4)
          o.copy(h[y]).applyMatrix4(A, a), o.normal.toArray(m, x), m[x + 3] = o.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = g, e.numIntersection = 0, m;
  }
}
function Kf(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === oa ? o.mapping = Ii : a === ca && (o.mapping = Ui), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === oa || a === ca)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Wu(c.height);
            return l.fromEquirectangularTexture(i, o), e.set(o, l), o.addEventListener("dispose", r), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
const bi = 4, Go = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Jn = 20, Gs = /* @__PURE__ */ new Ja(), ko = /* @__PURE__ */ new Pe();
let ks = null, Ws = 0, Xs = 0, Ys = !1;
const $n = (1 + Math.sqrt(5)) / 2, Ei = 1 / $n, Wo = [
  /* @__PURE__ */ new F(-$n, Ei, 0),
  /* @__PURE__ */ new F($n, Ei, 0),
  /* @__PURE__ */ new F(-Ei, 0, $n),
  /* @__PURE__ */ new F(Ei, 0, $n),
  /* @__PURE__ */ new F(0, $n, -Ei),
  /* @__PURE__ */ new F(0, $n, Ei),
  /* @__PURE__ */ new F(-1, 1, -1),
  /* @__PURE__ */ new F(1, 1, -1),
  /* @__PURE__ */ new F(-1, 1, 1),
  /* @__PURE__ */ new F(1, 1, 1)
], Jf = /* @__PURE__ */ new F();
class Xo {
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
      position: a = Jf
    } = s;
    ks = this._renderer.getRenderTarget(), Ws = this._renderer.getActiveCubeFace(), Xs = this._renderer.getActiveMipmapLevel(), Ys = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(o);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, a), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Zo(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = qo(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(ks, Ws, Xs), this._renderer.xr.enabled = Ys, e.scissorTest = !1, Hr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ii || e.mapping === Ui ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ks = this._renderer.getRenderTarget(), Ws = this._renderer.getActiveCubeFace(), Xs = this._renderer.getActiveMipmapLevel(), Ys = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Ht,
      minFilter: Ht,
      generateMipmaps: !1,
      type: ur,
      format: Vt,
      colorSpace: Ni,
      depthBuffer: !1
    }, r = Yo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Yo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Qf(s)), this._blurMaterial = ep(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Ct(this._lodPlanes[0], e);
    this._renderer.compile(t, Gs);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new en(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], h = this._renderer, p = h.autoClear, f = h.toneMapping;
    h.getClearColor(ko), h.toneMapping = Bn, h.autoClear = !1;
    const _ = new tl({
      name: "PMREM.Background",
      side: Nt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Ct(new pr(), _);
    let m = !1;
    const d = e.background;
    d ? d.isColor && (_.color.copy(d), e.background = null, m = !0) : (_.color.copy(ko), m = !0);
    for (let A = 0; A < 6; A++) {
      const y = A % 3;
      y === 0 ? (c.up.set(0, l[A], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + u[A], s.y, s.z)) : y === 1 ? (c.up.set(0, 0, l[A]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + u[A], s.z)) : (c.up.set(0, l[A], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + u[A]));
      const x = this._cubeSize;
      Hr(r, y * x, A > 2 ? x : 0, x, x), h.setRenderTarget(r), m && h.render(g, c), h.render(e, c);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = f, h.autoClear = p, e.background = d;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Ii || e.mapping === Ui;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Zo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = qo());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Ct(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Hr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Gs);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = Wo[(r - s - 1) % Wo.length];
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
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new Ct(this._lodPlanes[r], l), p = l.uniforms, f = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Jn - 1), g = s / _, m = isFinite(s) ? 1 + Math.floor(u * g) : Jn;
    m > Jn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);
    const d = [];
    let A = 0;
    for (let w = 0; w < Jn; ++w) {
      const U = w / g, E = Math.exp(-U * U / 2);
      d.push(E), w === 0 ? A += E : w < m && (A += 2 * E);
    }
    for (let w = 0; w < d.length; w++)
      d[w] = d[w] / A;
    p.envMap.value = e.texture, p.samples.value = m, p.weights.value = d, p.latitudinal.value = o === "latitudinal", a && (p.poleAxis.value = a);
    const { _lodMax: y } = this;
    p.dTheta.value = _, p.mipInt.value = y - n;
    const x = this._sizeLods[r], P = 3 * x * (r > y - bi ? r - y + bi : 0), C = 4 * (this._cubeSize - x);
    Hr(t, P, C, 3 * x, 2 * x), c.setRenderTarget(t), c.render(h, Gs);
  }
}
function Qf(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - bi + 1 + Go.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let c = 1 / a;
    o > i - bi ? c = Go[o - i + bi - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), u = -l, h = 1 + l, p = [u, u, h, u, h, h, u, u, h, h, u, h], f = 6, _ = 6, g = 3, m = 2, d = 1, A = new Float32Array(g * _ * f), y = new Float32Array(m * _ * f), x = new Float32Array(d * _ * f);
    for (let C = 0; C < f; C++) {
      const w = C % 3 * 2 / 3 - 1, U = C > 2 ? 0 : -1, E = [
        w,
        U,
        0,
        w + 2 / 3,
        U,
        0,
        w + 2 / 3,
        U + 1,
        0,
        w,
        U,
        0,
        w + 2 / 3,
        U + 1,
        0,
        w,
        U + 1,
        0
      ];
      A.set(E, g * _ * C), y.set(p, m * _ * C);
      const M = [C, C, C, C, C, C];
      x.set(M, d * _ * C);
    }
    const P = new an();
    P.setAttribute("position", new kt(A, g)), P.setAttribute("uv", new kt(y, m)), P.setAttribute("faceIndex", new kt(x, d)), e.push(P), r > bi && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Yo(i, e, t) {
  const n = new ii(i, e, t);
  return n.texture.mapping = ds, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Hr(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function ep(i, e, t) {
  const n = new Float32Array(Jn), r = new F(0, 1, 0);
  return new bt({
    name: "SphericalGaussianBlur",
    defines: {
      n: Jn,
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
    vertexShader: eo(),
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
    blending: On,
    depthTest: !1,
    depthWrite: !1
  });
}
function qo() {
  return new bt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: eo(),
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
    blending: On,
    depthTest: !1,
    depthWrite: !1
  });
}
function Zo() {
  return new bt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: eo(),
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
    blending: On,
    depthTest: !1,
    depthWrite: !1
  });
}
function eo() {
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
function tp(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === oa || c === ca, u = c === Ii || c === Ui;
      if (l || u) {
        let h = e.get(a);
        const p = h !== void 0 ? h.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== p)
          return t === null && (t = new Xo(i)), h = l ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), h.texture;
        if (h !== void 0)
          return h.texture;
        {
          const f = a.image;
          return l && f && f.height > 0 || u && f && r(f) ? (t === null && (t = new Xo(i)), h = l ? t.fromEquirectangular(a) : t.fromCubemap(a), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), a.addEventListener("dispose", s), h.texture) : null;
        }
      }
    }
    return a;
  }
  function r(a) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      a[u] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function np(i) {
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
      return r === null && Jr("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function ip(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(h) {
    const p = h.target;
    p.index !== null && e.remove(p.index);
    for (const _ in p.attributes)
      e.remove(p.attributes[_]);
    p.removeEventListener("dispose", o), delete r[p.id];
    const f = s.get(p);
    f && (e.remove(f), s.delete(p)), n.releaseStatesOfGeometry(p), p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount, t.memory.geometries--;
  }
  function a(h, p) {
    return r[p.id] === !0 || (p.addEventListener("dispose", o), r[p.id] = !0, t.memory.geometries++), p;
  }
  function c(h) {
    const p = h.attributes;
    for (const f in p)
      e.update(p[f], i.ARRAY_BUFFER);
  }
  function l(h) {
    const p = [], f = h.index, _ = h.attributes.position;
    let g = 0;
    if (f !== null) {
      const A = f.array;
      g = f.version;
      for (let y = 0, x = A.length; y < x; y += 3) {
        const P = A[y + 0], C = A[y + 1], w = A[y + 2];
        p.push(P, C, C, w, w, P);
      }
    } else if (_ !== void 0) {
      const A = _.array;
      g = _.version;
      for (let y = 0, x = A.length / 3 - 1; y < x; y += 3) {
        const P = y + 0, C = y + 1, w = y + 2;
        p.push(P, C, C, w, w, P);
      }
    } else
      return;
    const m = new ($c(p) ? il : nl)(p, 1);
    m.version = g;
    const d = s.get(h);
    d && e.remove(d), s.set(h, m);
  }
  function u(h) {
    const p = s.get(h);
    if (p) {
      const f = h.index;
      f !== null && p.version < f.version && l(h);
    } else
      l(h);
    return s.get(h);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: u
  };
}
function rp(i, e, t) {
  let n;
  function r(p) {
    n = p;
  }
  let s, o;
  function a(p) {
    s = p.type, o = p.bytesPerElement;
  }
  function c(p, f) {
    i.drawElements(n, f, s, p * o), t.update(f, n, 1);
  }
  function l(p, f, _) {
    _ !== 0 && (i.drawElementsInstanced(n, f, s, p * o, _), t.update(f, n, _));
  }
  function u(p, f, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, p, 0, _);
    let m = 0;
    for (let d = 0; d < _; d++)
      m += f[d];
    t.update(m, n, 1);
  }
  function h(p, f, _, g) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let d = 0; d < p.length; d++)
        l(p[d] / o, f[d], g[d]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, s, p, 0, g, 0, _);
      let d = 0;
      for (let A = 0; A < _; A++)
        d += f[A] * g[A];
      t.update(d, n, 1);
    }
  }
  this.setMode = r, this.setIndex = a, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function sp(i) {
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
function ap(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new lt();
  function s(o, a, c) {
    const l = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let p = n.get(a);
    if (p === void 0 || p.count !== h) {
      let E = function() {
        w.dispose(), n.delete(a), a.removeEventListener("dispose", E);
      };
      p !== void 0 && p.texture.dispose();
      const f = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, g = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], d = a.morphAttributes.normal || [], A = a.morphAttributes.color || [];
      let y = 0;
      f === !0 && (y = 1), _ === !0 && (y = 2), g === !0 && (y = 3);
      let x = a.attributes.position.count * y, P = 1;
      x > e.maxTextureSize && (P = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
      const C = new Float32Array(x * P * 4 * h), w = new Kc(C, x, P, h);
      w.type = nn, w.needsUpdate = !0;
      const U = y * 4;
      for (let M = 0; M < h; M++) {
        const D = m[M], Z = d[M], V = A[M], j = x * P * 4 * M;
        for (let ne = 0; ne < D.count; ne++) {
          const q = ne * U;
          f === !0 && (r.fromBufferAttribute(D, ne), C[j + q + 0] = r.x, C[j + q + 1] = r.y, C[j + q + 2] = r.z, C[j + q + 3] = 0), _ === !0 && (r.fromBufferAttribute(Z, ne), C[j + q + 4] = r.x, C[j + q + 5] = r.y, C[j + q + 6] = r.z, C[j + q + 7] = 0), g === !0 && (r.fromBufferAttribute(V, ne), C[j + q + 8] = r.x, C[j + q + 9] = r.y, C[j + q + 10] = r.z, C[j + q + 11] = V.itemSize === 4 ? r.w : 1);
        }
      }
      p = {
        count: h,
        texture: w,
        size: new Re(x, P)
      }, n.set(a, p), a.addEventListener("dispose", E);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
    else {
      let f = 0;
      for (let g = 0; g < l.length; g++)
        f += l[g];
      const _ = a.morphTargetsRelative ? 1 : 1 - f;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", _), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
  }
  return {
    update: s
  };
}
function op(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, u = c.geometry, h = e.get(c, u);
    if (r.get(h) !== l && (e.update(h), r.set(h, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), r.get(c) !== l && (t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
      const p = c.skeleton;
      r.get(p) !== l && (p.update(), r.set(p, l));
    }
    return h;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const ll = /* @__PURE__ */ new St(), jo = /* @__PURE__ */ new ol(1, 1), ul = /* @__PURE__ */ new Kc(), dl = /* @__PURE__ */ new Ru(), hl = /* @__PURE__ */ new sl(), $o = [], Ko = [], Jo = new Float32Array(16), Qo = new Float32Array(9), ec = new Float32Array(4);
function zi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = $o[r];
  if (s === void 0 && (s = new Float32Array(r), $o[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function _t(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function gt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function fs(i, e) {
  let t = Ko[e];
  t === void 0 && (t = new Int32Array(e), Ko[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function cp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function lp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    i.uniform2fv(this.addr, e), gt(t, e);
  }
}
function up(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (_t(t, e)) return;
    i.uniform3fv(this.addr, e), gt(t, e);
  }
}
function dp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    i.uniform4fv(this.addr, e), gt(t, e);
  }
}
function hp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), gt(t, e);
  } else {
    if (_t(t, n)) return;
    ec.set(n), i.uniformMatrix2fv(this.addr, !1, ec), gt(t, n);
  }
}
function fp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), gt(t, e);
  } else {
    if (_t(t, n)) return;
    Qo.set(n), i.uniformMatrix3fv(this.addr, !1, Qo), gt(t, n);
  }
}
function pp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), gt(t, e);
  } else {
    if (_t(t, n)) return;
    Jo.set(n), i.uniformMatrix4fv(this.addr, !1, Jo), gt(t, n);
  }
}
function mp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function _p(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    i.uniform2iv(this.addr, e), gt(t, e);
  }
}
function gp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    i.uniform3iv(this.addr, e), gt(t, e);
  }
}
function vp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    i.uniform4iv(this.addr, e), gt(t, e);
  }
}
function xp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Sp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    i.uniform2uiv(this.addr, e), gt(t, e);
  }
}
function Mp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    i.uniform3uiv(this.addr, e), gt(t, e);
  }
}
function Ep(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    i.uniform4uiv(this.addr, e), gt(t, e);
  }
}
function yp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (jo.compareFunction = jc, s = jo) : s = ll, t.setTexture2D(e || s, r);
}
function Tp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || dl, r);
}
function bp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || hl, r);
}
function Ap(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || ul, r);
}
function wp(i) {
  switch (i) {
    case 5126:
      return cp;
    // FLOAT
    case 35664:
      return lp;
    // _VEC2
    case 35665:
      return up;
    // _VEC3
    case 35666:
      return dp;
    // _VEC4
    case 35674:
      return hp;
    // _MAT2
    case 35675:
      return fp;
    // _MAT3
    case 35676:
      return pp;
    // _MAT4
    case 5124:
    case 35670:
      return mp;
    // INT, BOOL
    case 35667:
    case 35671:
      return _p;
    // _VEC2
    case 35668:
    case 35672:
      return gp;
    // _VEC3
    case 35669:
    case 35673:
      return vp;
    // _VEC4
    case 5125:
      return xp;
    // UINT
    case 36294:
      return Sp;
    // _VEC2
    case 36295:
      return Mp;
    // _VEC3
    case 36296:
      return Ep;
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
      return yp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Tp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return bp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Ap;
  }
}
function Rp(i, e) {
  i.uniform1fv(this.addr, e);
}
function Cp(i, e) {
  const t = zi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Pp(i, e) {
  const t = zi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Dp(i, e) {
  const t = zi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Lp(i, e) {
  const t = zi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Ip(i, e) {
  const t = zi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Up(i, e) {
  const t = zi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Np(i, e) {
  i.uniform1iv(this.addr, e);
}
function Fp(i, e) {
  i.uniform2iv(this.addr, e);
}
function Op(i, e) {
  i.uniform3iv(this.addr, e);
}
function Bp(i, e) {
  i.uniform4iv(this.addr, e);
}
function zp(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Hp(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Vp(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Gp(i, e) {
  i.uniform4uiv(this.addr, e);
}
function kp(i, e, t) {
  const n = this.cache, r = e.length, s = fs(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), gt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || ll, s[o]);
}
function Wp(i, e, t) {
  const n = this.cache, r = e.length, s = fs(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), gt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || dl, s[o]);
}
function Xp(i, e, t) {
  const n = this.cache, r = e.length, s = fs(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), gt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || hl, s[o]);
}
function Yp(i, e, t) {
  const n = this.cache, r = e.length, s = fs(t, r);
  _t(n, s) || (i.uniform1iv(this.addr, s), gt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || ul, s[o]);
}
function qp(i) {
  switch (i) {
    case 5126:
      return Rp;
    // FLOAT
    case 35664:
      return Cp;
    // _VEC2
    case 35665:
      return Pp;
    // _VEC3
    case 35666:
      return Dp;
    // _VEC4
    case 35674:
      return Lp;
    // _MAT2
    case 35675:
      return Ip;
    // _MAT3
    case 35676:
      return Up;
    // _MAT4
    case 5124:
    case 35670:
      return Np;
    // INT, BOOL
    case 35667:
    case 35671:
      return Fp;
    // _VEC2
    case 35668:
    case 35672:
      return Op;
    // _VEC3
    case 35669:
    case 35673:
      return Bp;
    // _VEC4
    case 5125:
      return zp;
    // UINT
    case 36294:
      return Hp;
    // _VEC2
    case 36295:
      return Vp;
    // _VEC3
    case 36296:
      return Gp;
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
      return kp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Wp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Xp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Yp;
  }
}
class Zp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = wp(t.type);
  }
}
class jp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = qp(t.type);
  }
}
class $p {
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
const qs = /(\w+)(\])?(\[|\.)?/g;
function tc(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Kp(i, e, t) {
  const n = i.name, r = n.length;
  for (qs.lastIndex = 0; ; ) {
    const s = qs.exec(n), o = qs.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) {
      tc(t, l === void 0 ? new Zp(a, i, e) : new jp(a, i, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new $p(a), tc(t, h)), t = h;
    }
  }
}
class Qr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      Kp(s, o, this);
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
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, r);
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
function nc(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Jp = 37297;
let Qp = 0;
function em(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const ic = /* @__PURE__ */ new Oe();
function tm(i) {
  Xe._getMatrix(ic, Xe.workingColorSpace, i);
  const e = `mat3( ${ic.elements.map((t) => t.toFixed(4))} )`;
  switch (Xe.getTransfer(i)) {
    case is:
      return [e, "LinearTransferOETF"];
    case $e:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function rc(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + em(i.getShaderSource(e), o);
  } else
    return r;
}
function nm(i, e) {
  const t = tm(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function im(i, e) {
  let t;
  switch (e) {
    case Kl:
      t = "Linear";
      break;
    case Jl:
      t = "Reinhard";
      break;
    case Ql:
      t = "Cineon";
      break;
    case eu:
      t = "ACESFilmic";
      break;
    case nu:
      t = "AgX";
      break;
    case iu:
      t = "Neutral";
      break;
    case tu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Vr = /* @__PURE__ */ new F();
function rm() {
  Xe.getLuminanceCoefficients(Vr);
  const i = Vr.x.toFixed(4), e = Vr.y.toFixed(4), t = Vr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function sm(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(qi).join(`
`);
}
function am(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function om(i, e) {
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
function qi(i) {
  return i !== "";
}
function sc(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ac(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const cm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Oa(i) {
  return i.replace(cm, um);
}
const lm = /* @__PURE__ */ new Map();
function um(i, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = lm.get(e);
    if (n !== void 0)
      t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Oa(t);
}
const dm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function oc(i) {
  return i.replace(dm, hm);
}
function hm(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function cc(i) {
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
function fm(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Ha ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Pl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === vn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function pm(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Ii:
      case Ui:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ds:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function mm(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Ui:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function _m(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Bc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case jl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case $l:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function gm(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function vm(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = fm(t), l = pm(t), u = mm(t), h = _m(t), p = gm(t), f = sm(t), _ = am(s), g = r.createProgram();
  let m, d, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(qi).join(`
`), m.length > 0 && (m += `
`), d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(qi).join(`
`), d.length > 0 && (d += `
`)) : (m = [
    cc(t),
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
    t.shadowMapEnabled ? "#define " + c : "",
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
  ].filter(qi).join(`
`), d = [
    cc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
    p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
    p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
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
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Bn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Bn ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Bn ? im("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    nm("linearToOutputTexel", t.outputColorSpace),
    rm(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(qi).join(`
`)), o = Oa(o), o = sc(o, t), o = ac(o, t), a = Oa(a), a = sc(a, t), a = ac(a, t), o = oc(o), a = oc(a), t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, m = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, d = [
    "#define varying in",
    t.glslVersion === mo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === mo ? "" : "#define gl_FragColor pc_fragColor",
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
` + d);
  const y = A + m + o, x = A + d + a, P = nc(r, r.VERTEX_SHADER, y), C = nc(r, r.FRAGMENT_SHADER, x);
  r.attachShader(g, P), r.attachShader(g, C), t.index0AttributeName !== void 0 ? r.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(g, 0, "position"), r.linkProgram(g);
  function w(D) {
    if (i.debug.checkShaderErrors) {
      const Z = r.getProgramInfoLog(g).trim(), V = r.getShaderInfoLog(P).trim(), j = r.getShaderInfoLog(C).trim();
      let ne = !0, q = !0;
      if (r.getProgramParameter(g, r.LINK_STATUS) === !1)
        if (ne = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, g, P, C);
        else {
          const ce = rc(r, P, "vertex"), k = rc(r, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(g, r.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + Z + `
` + ce + `
` + k
          );
        }
      else Z !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", Z) : (V === "" || j === "") && (q = !1);
      q && (D.diagnostics = {
        runnable: ne,
        programLog: Z,
        vertexShader: {
          log: V,
          prefix: m
        },
        fragmentShader: {
          log: j,
          prefix: d
        }
      });
    }
    r.deleteShader(P), r.deleteShader(C), U = new Qr(r, g), E = om(r, g);
  }
  let U;
  this.getUniforms = function() {
    return U === void 0 && w(this), U;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && w(this), E;
  };
  let M = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = r.getProgramParameter(g, Jp)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Qp++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = P, this.fragmentShader = C, this;
}
let xm = 0;
class Sm {
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
    return n === void 0 && (n = new Mm(e), t.set(e, n)), n;
  }
}
class Mm {
  constructor(e) {
    this.id = xm++, this.code = e, this.usedTimes = 0;
  }
}
function Em(i, e, t, n, r, s, o) {
  const a = new Qc(), c = new Sm(), l = /* @__PURE__ */ new Set(), u = [], h = r.logarithmicDepthBuffer, p = r.vertexTextures;
  let f = r.precision;
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
  function g(E) {
    return l.add(E), E === 0 ? "uv" : `uv${E}`;
  }
  function m(E, M, D, Z, V) {
    const j = Z.fog, ne = V.geometry, q = E.isMeshStandardMaterial ? Z.environment : null, ce = (E.isMeshStandardMaterial ? t : e).get(E.envMap || q), k = ce && ce.mapping === ds ? ce.image.height : null, de = _[E.type];
    E.precision !== null && (f = r.getMaxPrecision(E.precision), f !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", f, "instead."));
    const G = ne.morphAttributes.position || ne.morphAttributes.normal || ne.morphAttributes.color, W = G !== void 0 ? G.length : 0;
    let ie = 0;
    ne.morphAttributes.position !== void 0 && (ie = 1), ne.morphAttributes.normal !== void 0 && (ie = 2), ne.morphAttributes.color !== void 0 && (ie = 3);
    let $, O, Y, J;
    if (de) {
      const je = on[de];
      $ = je.vertexShader, O = je.fragmentShader;
    } else
      $ = E.vertexShader, O = E.fragmentShader, c.update(E), Y = c.getVertexShaderID(E), J = c.getFragmentShaderID(E);
    const ee = i.getRenderTarget(), ve = i.state.buffers.depth.getReversed(), Ae = V.isInstancedMesh === !0, Se = V.isBatchedMesh === !0, et = !!E.map, tt = !!E.matcap, ze = !!ce, R = !!E.aoMap, At = !!E.lightMap, ke = !!E.bumpMap, Ge = !!E.normalMap, Ee = !!E.displacementMap, Ke = !!E.emissiveMap, ye = !!E.metalnessMap, T = !!E.roughnessMap, v = E.anisotropy > 0, B = E.clearcoat > 0, K = E.dispersion > 0, te = E.iridescence > 0, b = E.sheen > 0, re = E.transmission > 0, ae = v && !!E.anisotropyMap, le = B && !!E.clearcoatMap, Le = B && !!E.clearcoatNormalMap, se = B && !!E.clearcoatRoughnessMap, ge = te && !!E.iridescenceMap, Ce = te && !!E.iridescenceThicknessMap, Te = b && !!E.sheenColorMap, he = b && !!E.sheenRoughnessMap, He = !!E.specularMap, Be = !!E.specularColorMap, Qe = !!E.specularIntensityMap, L = re && !!E.transmissionMap, pe = re && !!E.thicknessMap, X = !!E.gradientMap, Q = !!E.alphaMap, _e = E.alphaTest > 0, me = !!E.alphaHash, Ne = !!E.extensions;
    let at = Bn;
    E.toneMapped && (ee === null || ee.isXRRenderTarget === !0) && (at = i.toneMapping);
    const Mt = {
      shaderID: de,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: $,
      fragmentShader: O,
      defines: E.defines,
      customVertexShaderID: Y,
      customFragmentShaderID: J,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: f,
      batching: Se,
      batchingColor: Se && V._colorsTexture !== null,
      instancing: Ae,
      instancingColor: Ae && V.instanceColor !== null,
      instancingMorph: Ae && V.morphTexture !== null,
      supportsVertexTextures: p,
      outputColorSpace: ee === null ? i.outputColorSpace : ee.isXRRenderTarget === !0 ? ee.texture.colorSpace : Ni,
      alphaToCoverage: !!E.alphaToCoverage,
      map: et,
      matcap: tt,
      envMap: ze,
      envMapMode: ze && ce.mapping,
      envMapCubeUVHeight: k,
      aoMap: R,
      lightMap: At,
      bumpMap: ke,
      normalMap: Ge,
      displacementMap: p && Ee,
      emissiveMap: Ke,
      normalMapObjectSpace: Ge && E.normalMapType === lu,
      normalMapTangentSpace: Ge && E.normalMapType === cu,
      metalnessMap: ye,
      roughnessMap: T,
      anisotropy: v,
      anisotropyMap: ae,
      clearcoat: B,
      clearcoatMap: le,
      clearcoatNormalMap: Le,
      clearcoatRoughnessMap: se,
      dispersion: K,
      iridescence: te,
      iridescenceMap: ge,
      iridescenceThicknessMap: Ce,
      sheen: b,
      sheenColorMap: Te,
      sheenRoughnessMap: he,
      specularMap: He,
      specularColorMap: Be,
      specularIntensityMap: Qe,
      transmission: re,
      transmissionMap: L,
      thicknessMap: pe,
      gradientMap: X,
      opaque: E.transparent === !1 && E.blending === Pi && E.alphaToCoverage === !1,
      alphaMap: Q,
      alphaTest: _e,
      alphaHash: me,
      combine: E.combine,
      //
      mapUv: et && g(E.map.channel),
      aoMapUv: R && g(E.aoMap.channel),
      lightMapUv: At && g(E.lightMap.channel),
      bumpMapUv: ke && g(E.bumpMap.channel),
      normalMapUv: Ge && g(E.normalMap.channel),
      displacementMapUv: Ee && g(E.displacementMap.channel),
      emissiveMapUv: Ke && g(E.emissiveMap.channel),
      metalnessMapUv: ye && g(E.metalnessMap.channel),
      roughnessMapUv: T && g(E.roughnessMap.channel),
      anisotropyMapUv: ae && g(E.anisotropyMap.channel),
      clearcoatMapUv: le && g(E.clearcoatMap.channel),
      clearcoatNormalMapUv: Le && g(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: se && g(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ge && g(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ce && g(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: Te && g(E.sheenColorMap.channel),
      sheenRoughnessMapUv: he && g(E.sheenRoughnessMap.channel),
      specularMapUv: He && g(E.specularMap.channel),
      specularColorMapUv: Be && g(E.specularColorMap.channel),
      specularIntensityMapUv: Qe && g(E.specularIntensityMap.channel),
      transmissionMapUv: L && g(E.transmissionMap.channel),
      thicknessMapUv: pe && g(E.thicknessMap.channel),
      alphaMapUv: Q && g(E.alphaMap.channel),
      //
      vertexTangents: !!ne.attributes.tangent && (Ge || v),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!ne.attributes.color && ne.attributes.color.itemSize === 4,
      pointsUvs: V.isPoints === !0 && !!ne.attributes.uv && (et || Q),
      fog: !!j,
      useFog: E.fog === !0,
      fogExp2: !!j && j.isFogExp2,
      flatShading: E.flatShading === !0,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reverseDepthBuffer: ve,
      skinning: V.isSkinnedMesh === !0,
      morphTargets: ne.morphAttributes.position !== void 0,
      morphNormals: ne.morphAttributes.normal !== void 0,
      morphColors: ne.morphAttributes.color !== void 0,
      morphTargetsCount: W,
      morphTextureStride: ie,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: E.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: at,
      decodeVideoTexture: et && E.map.isVideoTexture === !0 && Xe.getTransfer(E.map.colorSpace) === $e,
      decodeVideoTextureEmissive: Ke && E.emissiveMap.isVideoTexture === !0 && Xe.getTransfer(E.emissiveMap.colorSpace) === $e,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === Mn,
      flipSided: E.side === Nt,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionClipCullDistance: Ne && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ne && E.extensions.multiDraw === !0 || Se) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
    return Mt.vertexUv1s = l.has(1), Mt.vertexUv2s = l.has(2), Mt.vertexUv3s = l.has(3), l.clear(), Mt;
  }
  function d(E) {
    const M = [];
    if (E.shaderID ? M.push(E.shaderID) : (M.push(E.customVertexShaderID), M.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const D in E.defines)
        M.push(D), M.push(E.defines[D]);
    return E.isRawShaderMaterial === !1 && (A(M, E), y(M, E), M.push(i.outputColorSpace)), M.push(E.customProgramCacheKey), M.join();
  }
  function A(E, M) {
    E.push(M.precision), E.push(M.outputColorSpace), E.push(M.envMapMode), E.push(M.envMapCubeUVHeight), E.push(M.mapUv), E.push(M.alphaMapUv), E.push(M.lightMapUv), E.push(M.aoMapUv), E.push(M.bumpMapUv), E.push(M.normalMapUv), E.push(M.displacementMapUv), E.push(M.emissiveMapUv), E.push(M.metalnessMapUv), E.push(M.roughnessMapUv), E.push(M.anisotropyMapUv), E.push(M.clearcoatMapUv), E.push(M.clearcoatNormalMapUv), E.push(M.clearcoatRoughnessMapUv), E.push(M.iridescenceMapUv), E.push(M.iridescenceThicknessMapUv), E.push(M.sheenColorMapUv), E.push(M.sheenRoughnessMapUv), E.push(M.specularMapUv), E.push(M.specularColorMapUv), E.push(M.specularIntensityMapUv), E.push(M.transmissionMapUv), E.push(M.thicknessMapUv), E.push(M.combine), E.push(M.fogExp2), E.push(M.sizeAttenuation), E.push(M.morphTargetsCount), E.push(M.morphAttributeCount), E.push(M.numDirLights), E.push(M.numPointLights), E.push(M.numSpotLights), E.push(M.numSpotLightMaps), E.push(M.numHemiLights), E.push(M.numRectAreaLights), E.push(M.numDirLightShadows), E.push(M.numPointLightShadows), E.push(M.numSpotLightShadows), E.push(M.numSpotLightShadowsWithMaps), E.push(M.numLightProbes), E.push(M.shadowMapType), E.push(M.toneMapping), E.push(M.numClippingPlanes), E.push(M.numClipIntersection), E.push(M.depthPacking);
  }
  function y(E, M) {
    a.disableAll(), M.supportsVertexTextures && a.enable(0), M.instancing && a.enable(1), M.instancingColor && a.enable(2), M.instancingMorph && a.enable(3), M.matcap && a.enable(4), M.envMap && a.enable(5), M.normalMapObjectSpace && a.enable(6), M.normalMapTangentSpace && a.enable(7), M.clearcoat && a.enable(8), M.iridescence && a.enable(9), M.alphaTest && a.enable(10), M.vertexColors && a.enable(11), M.vertexAlphas && a.enable(12), M.vertexUv1s && a.enable(13), M.vertexUv2s && a.enable(14), M.vertexUv3s && a.enable(15), M.vertexTangents && a.enable(16), M.anisotropy && a.enable(17), M.alphaHash && a.enable(18), M.batching && a.enable(19), M.dispersion && a.enable(20), M.batchingColor && a.enable(21), E.push(a.mask), a.disableAll(), M.fog && a.enable(0), M.useFog && a.enable(1), M.flatShading && a.enable(2), M.logarithmicDepthBuffer && a.enable(3), M.reverseDepthBuffer && a.enable(4), M.skinning && a.enable(5), M.morphTargets && a.enable(6), M.morphNormals && a.enable(7), M.morphColors && a.enable(8), M.premultipliedAlpha && a.enable(9), M.shadowMapEnabled && a.enable(10), M.doubleSided && a.enable(11), M.flipSided && a.enable(12), M.useDepthPacking && a.enable(13), M.dithering && a.enable(14), M.transmission && a.enable(15), M.sheen && a.enable(16), M.opaque && a.enable(17), M.pointsUvs && a.enable(18), M.decodeVideoTexture && a.enable(19), M.decodeVideoTextureEmissive && a.enable(20), M.alphaToCoverage && a.enable(21), E.push(a.mask);
  }
  function x(E) {
    const M = _[E.type];
    let D;
    if (M) {
      const Z = on[M];
      D = ss.clone(Z.uniforms);
    } else
      D = E.uniforms;
    return D;
  }
  function P(E, M) {
    let D;
    for (let Z = 0, V = u.length; Z < V; Z++) {
      const j = u[Z];
      if (j.cacheKey === M) {
        D = j, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new vm(i, M, E, s), u.push(D)), D;
  }
  function C(E) {
    if (--E.usedTimes === 0) {
      const M = u.indexOf(E);
      u[M] = u[u.length - 1], u.pop(), E.destroy();
    }
  }
  function w(E) {
    c.remove(E);
  }
  function U() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: d,
    getUniforms: x,
    acquireProgram: P,
    releaseProgram: C,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: U
  };
}
function ym() {
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
  function r(o, a, c) {
    i.get(o)[a] = c;
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
function Tm(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function lc(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function uc() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(h, p, f, _, g, m) {
    let d = i[e];
    return d === void 0 ? (d = {
      id: h.id,
      object: h,
      geometry: p,
      material: f,
      groupOrder: _,
      renderOrder: h.renderOrder,
      z: g,
      group: m
    }, i[e] = d) : (d.id = h.id, d.object = h, d.geometry = p, d.material = f, d.groupOrder = _, d.renderOrder = h.renderOrder, d.z = g, d.group = m), e++, d;
  }
  function a(h, p, f, _, g, m) {
    const d = o(h, p, f, _, g, m);
    f.transmission > 0 ? n.push(d) : f.transparent === !0 ? r.push(d) : t.push(d);
  }
  function c(h, p, f, _, g, m) {
    const d = o(h, p, f, _, g, m);
    f.transmission > 0 ? n.unshift(d) : f.transparent === !0 ? r.unshift(d) : t.unshift(d);
  }
  function l(h, p) {
    t.length > 1 && t.sort(h || Tm), n.length > 1 && n.sort(p || lc), r.length > 1 && r.sort(p || lc);
  }
  function u() {
    for (let h = e, p = i.length; h < p; h++) {
      const f = i[h];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: c,
    finish: u,
    sort: l
  };
}
function bm() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new uc(), i.set(n, [o])) : r >= s.length ? (o = new uc(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Am() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new F(),
            color: new Pe()
          };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new Pe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new F(),
            color: new Pe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new F(),
            skyColor: new Pe(),
            groundColor: new Pe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Pe(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function wm() {
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
            shadowMapSize: new Re()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Rm = 0;
function Cm(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Pm(i) {
  const e = new Am(), t = wm(), n = {
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
  for (let l = 0; l < 9; l++) n.probe.push(new F());
  const r = new F(), s = new st(), o = new st();
  function a(l) {
    let u = 0, h = 0, p = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let f = 0, _ = 0, g = 0, m = 0, d = 0, A = 0, y = 0, x = 0, P = 0, C = 0, w = 0;
    l.sort(Cm);
    for (let E = 0, M = l.length; E < M; E++) {
      const D = l[E], Z = D.color, V = D.intensity, j = D.distance, ne = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        u += Z.r * V, h += Z.g * V, p += Z.b * V;
      else if (D.isLightProbe) {
        for (let q = 0; q < 9; q++)
          n.probe[q].addScaledVector(D.sh.coefficients[q], V);
        w++;
      } else if (D.isDirectionalLight) {
        const q = e.get(D);
        if (q.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const ce = D.shadow, k = t.get(D);
          k.shadowIntensity = ce.intensity, k.shadowBias = ce.bias, k.shadowNormalBias = ce.normalBias, k.shadowRadius = ce.radius, k.shadowMapSize = ce.mapSize, n.directionalShadow[f] = k, n.directionalShadowMap[f] = ne, n.directionalShadowMatrix[f] = D.shadow.matrix, A++;
        }
        n.directional[f] = q, f++;
      } else if (D.isSpotLight) {
        const q = e.get(D);
        q.position.setFromMatrixPosition(D.matrixWorld), q.color.copy(Z).multiplyScalar(V), q.distance = j, q.coneCos = Math.cos(D.angle), q.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), q.decay = D.decay, n.spot[g] = q;
        const ce = D.shadow;
        if (D.map && (n.spotLightMap[P] = D.map, P++, ce.updateMatrices(D), D.castShadow && C++), n.spotLightMatrix[g] = ce.matrix, D.castShadow) {
          const k = t.get(D);
          k.shadowIntensity = ce.intensity, k.shadowBias = ce.bias, k.shadowNormalBias = ce.normalBias, k.shadowRadius = ce.radius, k.shadowMapSize = ce.mapSize, n.spotShadow[g] = k, n.spotShadowMap[g] = ne, x++;
        }
        g++;
      } else if (D.isRectAreaLight) {
        const q = e.get(D);
        q.color.copy(Z).multiplyScalar(V), q.halfWidth.set(D.width * 0.5, 0, 0), q.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[m] = q, m++;
      } else if (D.isPointLight) {
        const q = e.get(D);
        if (q.color.copy(D.color).multiplyScalar(D.intensity), q.distance = D.distance, q.decay = D.decay, D.castShadow) {
          const ce = D.shadow, k = t.get(D);
          k.shadowIntensity = ce.intensity, k.shadowBias = ce.bias, k.shadowNormalBias = ce.normalBias, k.shadowRadius = ce.radius, k.shadowMapSize = ce.mapSize, k.shadowCameraNear = ce.camera.near, k.shadowCameraFar = ce.camera.far, n.pointShadow[_] = k, n.pointShadowMap[_] = ne, n.pointShadowMatrix[_] = D.shadow.matrix, y++;
        }
        n.point[_] = q, _++;
      } else if (D.isHemisphereLight) {
        const q = e.get(D);
        q.skyColor.copy(D.color).multiplyScalar(V), q.groundColor.copy(D.groundColor).multiplyScalar(V), n.hemi[d] = q, d++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ue.LTC_FLOAT_1, n.rectAreaLTC2 = ue.LTC_FLOAT_2) : (n.rectAreaLTC1 = ue.LTC_HALF_1, n.rectAreaLTC2 = ue.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = p;
    const U = n.hash;
    (U.directionalLength !== f || U.pointLength !== _ || U.spotLength !== g || U.rectAreaLength !== m || U.hemiLength !== d || U.numDirectionalShadows !== A || U.numPointShadows !== y || U.numSpotShadows !== x || U.numSpotMaps !== P || U.numLightProbes !== w) && (n.directional.length = f, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = d, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = x + P - C, n.spotLightMap.length = P, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = w, U.directionalLength = f, U.pointLength = _, U.spotLength = g, U.rectAreaLength = m, U.hemiLength = d, U.numDirectionalShadows = A, U.numPointShadows = y, U.numSpotShadows = x, U.numSpotMaps = P, U.numLightProbes = w, n.version = Rm++);
  }
  function c(l, u) {
    let h = 0, p = 0, f = 0, _ = 0, g = 0;
    const m = u.matrixWorldInverse;
    for (let d = 0, A = l.length; d < A; d++) {
      const y = l[d];
      if (y.isDirectionalLight) {
        const x = n.directional[h];
        x.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), x.direction.sub(r), x.direction.transformDirection(m), h++;
      } else if (y.isSpotLight) {
        const x = n.spot[f];
        x.position.setFromMatrixPosition(y.matrixWorld), x.position.applyMatrix4(m), x.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), x.direction.sub(r), x.direction.transformDirection(m), f++;
      } else if (y.isRectAreaLight) {
        const x = n.rectArea[_];
        x.position.setFromMatrixPosition(y.matrixWorld), x.position.applyMatrix4(m), o.identity(), s.copy(y.matrixWorld), s.premultiply(m), o.extractRotation(s), x.halfWidth.set(y.width * 0.5, 0, 0), x.halfHeight.set(0, y.height * 0.5, 0), x.halfWidth.applyMatrix4(o), x.halfHeight.applyMatrix4(o), _++;
      } else if (y.isPointLight) {
        const x = n.point[p];
        x.position.setFromMatrixPosition(y.matrixWorld), x.position.applyMatrix4(m), p++;
      } else if (y.isHemisphereLight) {
        const x = n.hemi[g];
        x.direction.setFromMatrixPosition(y.matrixWorld), x.direction.transformDirection(m), g++;
      }
    }
  }
  return {
    setup: a,
    setupView: c,
    state: n
  };
}
function dc(i) {
  const e = new Pm(i), t = [], n = [];
  function r(u) {
    l.camera = u, t.length = 0, n.length = 0;
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
  function c(u) {
    e.setupView(t, u);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: l,
    setupLights: a,
    setupLightsView: c,
    pushLight: s,
    pushShadow: o
  };
}
function Dm(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const o = e.get(r);
    let a;
    return o === void 0 ? (a = new dc(i), e.set(r, [a])) : s >= o.length ? (a = new dc(i), o.push(a)) : a = o[s], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Lm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Im = `uniform sampler2D shadow_pass;
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
function Um(i, e, t) {
  let n = new $a();
  const r = new Re(), s = new Re(), o = new lt(), a = new Ku({ depthPacking: ou }), c = new Ju(), l = {}, u = t.maxTextureSize, h = { [zn]: Nt, [Nt]: zn, [Mn]: Mn }, p = new bt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Re() },
      radius: { value: 4 }
    },
    vertexShader: Lm,
    fragmentShader: Im
  }), f = p.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const _ = new an();
  _.setAttribute(
    "position",
    new kt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new Ct(_, p), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ha;
  let d = this.type;
  this.render = function(C, w, U) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || C.length === 0) return;
    const E = i.getRenderTarget(), M = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), Z = i.state;
    Z.setBlending(On), Z.buffers.color.setClear(1, 1, 1, 1), Z.buffers.depth.setTest(!0), Z.setScissorTest(!1);
    const V = d !== vn && this.type === vn, j = d === vn && this.type !== vn;
    for (let ne = 0, q = C.length; ne < q; ne++) {
      const ce = C[ne], k = ce.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", ce, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      r.copy(k.mapSize);
      const de = k.getFrameExtents();
      if (r.multiply(de), s.copy(k.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / de.x), r.x = s.x * de.x, k.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / de.y), r.y = s.y * de.y, k.mapSize.y = s.y)), k.map === null || V === !0 || j === !0) {
        const W = this.type !== vn ? { minFilter: Ft, magFilter: Ft } : {};
        k.map !== null && k.map.dispose(), k.map = new ii(r.x, r.y, W), k.map.texture.name = ce.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const G = k.getViewportCount();
      for (let W = 0; W < G; W++) {
        const ie = k.getViewport(W);
        o.set(
          s.x * ie.x,
          s.y * ie.y,
          s.x * ie.z,
          s.y * ie.w
        ), Z.viewport(o), k.updateMatrices(ce, W), n = k.getFrustum(), x(w, U, k.camera, ce, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === vn && A(k, U), k.needsUpdate = !1;
    }
    d = this.type, m.needsUpdate = !1, i.setRenderTarget(E, M, D);
  };
  function A(C, w) {
    const U = e.update(g);
    p.defines.VSM_SAMPLES !== C.blurSamples && (p.defines.VSM_SAMPLES = C.blurSamples, f.defines.VSM_SAMPLES = C.blurSamples, p.needsUpdate = !0, f.needsUpdate = !0), C.mapPass === null && (C.mapPass = new ii(r.x, r.y)), p.uniforms.shadow_pass.value = C.map.texture, p.uniforms.resolution.value = C.mapSize, p.uniforms.radius.value = C.radius, i.setRenderTarget(C.mapPass), i.clear(), i.renderBufferDirect(w, null, U, p, g, null), f.uniforms.shadow_pass.value = C.mapPass.texture, f.uniforms.resolution.value = C.mapSize, f.uniforms.radius.value = C.radius, i.setRenderTarget(C.map), i.clear(), i.renderBufferDirect(w, null, U, f, g, null);
  }
  function y(C, w, U, E) {
    let M = null;
    const D = U.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (D !== void 0)
      M = D;
    else if (M = U.isPointLight === !0 ? c : a, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const Z = M.uuid, V = w.uuid;
      let j = l[Z];
      j === void 0 && (j = {}, l[Z] = j);
      let ne = j[V];
      ne === void 0 && (ne = M.clone(), j[V] = ne, w.addEventListener("dispose", P)), M = ne;
    }
    if (M.visible = w.visible, M.wireframe = w.wireframe, E === vn ? M.side = w.shadowSide !== null ? w.shadowSide : w.side : M.side = w.shadowSide !== null ? w.shadowSide : h[w.side], M.alphaMap = w.alphaMap, M.alphaTest = w.alphaTest, M.map = w.map, M.clipShadows = w.clipShadows, M.clippingPlanes = w.clippingPlanes, M.clipIntersection = w.clipIntersection, M.displacementMap = w.displacementMap, M.displacementScale = w.displacementScale, M.displacementBias = w.displacementBias, M.wireframeLinewidth = w.wireframeLinewidth, M.linewidth = w.linewidth, U.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const Z = i.properties.get(M);
      Z.light = U;
    }
    return M;
  }
  function x(C, w, U, E, M) {
    if (C.visible === !1) return;
    if (C.layers.test(w.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && M === vn) && (!C.frustumCulled || n.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, C.matrixWorld);
      const V = e.update(C), j = C.material;
      if (Array.isArray(j)) {
        const ne = V.groups;
        for (let q = 0, ce = ne.length; q < ce; q++) {
          const k = ne[q], de = j[k.materialIndex];
          if (de && de.visible) {
            const G = y(C, de, E, M);
            C.onBeforeShadow(i, C, w, U, V, G, k), i.renderBufferDirect(U, null, V, G, C, k), C.onAfterShadow(i, C, w, U, V, G, k);
          }
        }
      } else if (j.visible) {
        const ne = y(C, j, E, M);
        C.onBeforeShadow(i, C, w, U, V, ne, null), i.renderBufferDirect(U, null, V, ne, C, null), C.onAfterShadow(i, C, w, U, V, ne, null);
      }
    }
    const Z = C.children;
    for (let V = 0, j = Z.length; V < j; V++)
      x(Z[V], w, U, E, M);
  }
  function P(C) {
    C.target.removeEventListener("dispose", P);
    for (const U in l) {
      const E = l[U], M = C.target.uuid;
      M in E && (E[M].dispose(), delete E[M]);
    }
  }
}
const Nm = {
  [ea]: ta,
  [na]: sa,
  [ia]: aa,
  [Li]: ra,
  [ta]: ea,
  [sa]: na,
  [aa]: ia,
  [ra]: Li
};
function Fm(i, e) {
  function t() {
    let L = !1;
    const pe = new lt();
    let X = null;
    const Q = new lt(0, 0, 0, 0);
    return {
      setMask: function(_e) {
        X !== _e && !L && (i.colorMask(_e, _e, _e, _e), X = _e);
      },
      setLocked: function(_e) {
        L = _e;
      },
      setClear: function(_e, me, Ne, at, Mt) {
        Mt === !0 && (_e *= at, me *= at, Ne *= at), pe.set(_e, me, Ne, at), Q.equals(pe) === !1 && (i.clearColor(_e, me, Ne, at), Q.copy(pe));
      },
      reset: function() {
        L = !1, X = null, Q.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let L = !1, pe = !1, X = null, Q = null, _e = null;
    return {
      setReversed: function(me) {
        if (pe !== me) {
          const Ne = e.get("EXT_clip_control");
          me ? Ne.clipControlEXT(Ne.LOWER_LEFT_EXT, Ne.ZERO_TO_ONE_EXT) : Ne.clipControlEXT(Ne.LOWER_LEFT_EXT, Ne.NEGATIVE_ONE_TO_ONE_EXT), pe = me;
          const at = _e;
          _e = null, this.setClear(at);
        }
      },
      getReversed: function() {
        return pe;
      },
      setTest: function(me) {
        me ? ee(i.DEPTH_TEST) : ve(i.DEPTH_TEST);
      },
      setMask: function(me) {
        X !== me && !L && (i.depthMask(me), X = me);
      },
      setFunc: function(me) {
        if (pe && (me = Nm[me]), Q !== me) {
          switch (me) {
            case ea:
              i.depthFunc(i.NEVER);
              break;
            case ta:
              i.depthFunc(i.ALWAYS);
              break;
            case na:
              i.depthFunc(i.LESS);
              break;
            case Li:
              i.depthFunc(i.LEQUAL);
              break;
            case ia:
              i.depthFunc(i.EQUAL);
              break;
            case ra:
              i.depthFunc(i.GEQUAL);
              break;
            case sa:
              i.depthFunc(i.GREATER);
              break;
            case aa:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Q = me;
        }
      },
      setLocked: function(me) {
        L = me;
      },
      setClear: function(me) {
        _e !== me && (pe && (me = 1 - me), i.clearDepth(me), _e = me);
      },
      reset: function() {
        L = !1, X = null, Q = null, _e = null, pe = !1;
      }
    };
  }
  function r() {
    let L = !1, pe = null, X = null, Q = null, _e = null, me = null, Ne = null, at = null, Mt = null;
    return {
      setTest: function(je) {
        L || (je ? ee(i.STENCIL_TEST) : ve(i.STENCIL_TEST));
      },
      setMask: function(je) {
        pe !== je && !L && (i.stencilMask(je), pe = je);
      },
      setFunc: function(je, Zt, dn) {
        (X !== je || Q !== Zt || _e !== dn) && (i.stencilFunc(je, Zt, dn), X = je, Q = Zt, _e = dn);
      },
      setOp: function(je, Zt, dn) {
        (me !== je || Ne !== Zt || at !== dn) && (i.stencilOp(je, Zt, dn), me = je, Ne = Zt, at = dn);
      },
      setLocked: function(je) {
        L = je;
      },
      setClear: function(je) {
        Mt !== je && (i.clearStencil(je), Mt = je);
      },
      reset: function() {
        L = !1, pe = null, X = null, Q = null, _e = null, me = null, Ne = null, at = null, Mt = null;
      }
    };
  }
  const s = new t(), o = new n(), a = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, p = /* @__PURE__ */ new WeakMap(), f = [], _ = null, g = !1, m = null, d = null, A = null, y = null, x = null, P = null, C = null, w = new Pe(0, 0, 0), U = 0, E = !1, M = null, D = null, Z = null, V = null, j = null;
  const ne = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1, ce = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (ce = parseFloat(/^WebGL (\d)/.exec(k)[1]), q = ce >= 1) : k.indexOf("OpenGL ES") !== -1 && (ce = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), q = ce >= 2);
  let de = null, G = {};
  const W = i.getParameter(i.SCISSOR_BOX), ie = i.getParameter(i.VIEWPORT), $ = new lt().fromArray(W), O = new lt().fromArray(ie);
  function Y(L, pe, X, Q) {
    const _e = new Uint8Array(4), me = i.createTexture();
    i.bindTexture(L, me), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ne = 0; Ne < X; Ne++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY ? i.texImage3D(pe, 0, i.RGBA, 1, 1, Q, 0, i.RGBA, i.UNSIGNED_BYTE, _e) : i.texImage2D(pe + Ne, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, _e);
    return me;
  }
  const J = {};
  J[i.TEXTURE_2D] = Y(i.TEXTURE_2D, i.TEXTURE_2D, 1), J[i.TEXTURE_CUBE_MAP] = Y(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), J[i.TEXTURE_2D_ARRAY] = Y(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), J[i.TEXTURE_3D] = Y(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ee(i.DEPTH_TEST), o.setFunc(Li), ke(!1), Ge(co), ee(i.CULL_FACE), R(On);
  function ee(L) {
    u[L] !== !0 && (i.enable(L), u[L] = !0);
  }
  function ve(L) {
    u[L] !== !1 && (i.disable(L), u[L] = !1);
  }
  function Ae(L, pe) {
    return h[L] !== pe ? (i.bindFramebuffer(L, pe), h[L] = pe, L === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = pe), L === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = pe), !0) : !1;
  }
  function Se(L, pe) {
    let X = f, Q = !1;
    if (L) {
      X = p.get(pe), X === void 0 && (X = [], p.set(pe, X));
      const _e = L.textures;
      if (X.length !== _e.length || X[0] !== i.COLOR_ATTACHMENT0) {
        for (let me = 0, Ne = _e.length; me < Ne; me++)
          X[me] = i.COLOR_ATTACHMENT0 + me;
        X.length = _e.length, Q = !0;
      }
    } else
      X[0] !== i.BACK && (X[0] = i.BACK, Q = !0);
    Q && i.drawBuffers(X);
  }
  function et(L) {
    return _ !== L ? (i.useProgram(L), _ = L, !0) : !1;
  }
  const tt = {
    [Kn]: i.FUNC_ADD,
    [Ll]: i.FUNC_SUBTRACT,
    [Il]: i.FUNC_REVERSE_SUBTRACT
  };
  tt[Ul] = i.MIN, tt[Nl] = i.MAX;
  const ze = {
    [Fl]: i.ZERO,
    [Ol]: i.ONE,
    [Bl]: i.SRC_COLOR,
    [Js]: i.SRC_ALPHA,
    [Wl]: i.SRC_ALPHA_SATURATE,
    [Gl]: i.DST_COLOR,
    [Hl]: i.DST_ALPHA,
    [zl]: i.ONE_MINUS_SRC_COLOR,
    [Qs]: i.ONE_MINUS_SRC_ALPHA,
    [kl]: i.ONE_MINUS_DST_COLOR,
    [Vl]: i.ONE_MINUS_DST_ALPHA,
    [Xl]: i.CONSTANT_COLOR,
    [Yl]: i.ONE_MINUS_CONSTANT_COLOR,
    [ql]: i.CONSTANT_ALPHA,
    [Zl]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(L, pe, X, Q, _e, me, Ne, at, Mt, je) {
    if (L === On) {
      g === !0 && (ve(i.BLEND), g = !1);
      return;
    }
    if (g === !1 && (ee(i.BLEND), g = !0), L !== Dl) {
      if (L !== m || je !== E) {
        if ((d !== Kn || x !== Kn) && (i.blendEquation(i.FUNC_ADD), d = Kn, x = Kn), je)
          switch (L) {
            case Pi:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case lo:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case uo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ho:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Pi:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case lo:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case uo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ho:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        A = null, y = null, P = null, C = null, w.set(0, 0, 0), U = 0, m = L, E = je;
      }
      return;
    }
    _e = _e || pe, me = me || X, Ne = Ne || Q, (pe !== d || _e !== x) && (i.blendEquationSeparate(tt[pe], tt[_e]), d = pe, x = _e), (X !== A || Q !== y || me !== P || Ne !== C) && (i.blendFuncSeparate(ze[X], ze[Q], ze[me], ze[Ne]), A = X, y = Q, P = me, C = Ne), (at.equals(w) === !1 || Mt !== U) && (i.blendColor(at.r, at.g, at.b, Mt), w.copy(at), U = Mt), m = L, E = !1;
  }
  function At(L, pe) {
    L.side === Mn ? ve(i.CULL_FACE) : ee(i.CULL_FACE);
    let X = L.side === Nt;
    pe && (X = !X), ke(X), L.blending === Pi && L.transparent === !1 ? R(On) : R(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), o.setFunc(L.depthFunc), o.setTest(L.depthTest), o.setMask(L.depthWrite), s.setMask(L.colorWrite);
    const Q = L.stencilWrite;
    a.setTest(Q), Q && (a.setMask(L.stencilWriteMask), a.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), a.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Ke(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? ee(i.SAMPLE_ALPHA_TO_COVERAGE) : ve(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ke(L) {
    M !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = L);
  }
  function Ge(L) {
    L !== Rl ? (ee(i.CULL_FACE), L !== D && (L === co ? i.cullFace(i.BACK) : L === Cl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ve(i.CULL_FACE), D = L;
  }
  function Ee(L) {
    L !== Z && (q && i.lineWidth(L), Z = L);
  }
  function Ke(L, pe, X) {
    L ? (ee(i.POLYGON_OFFSET_FILL), (V !== pe || j !== X) && (i.polygonOffset(pe, X), V = pe, j = X)) : ve(i.POLYGON_OFFSET_FILL);
  }
  function ye(L) {
    L ? ee(i.SCISSOR_TEST) : ve(i.SCISSOR_TEST);
  }
  function T(L) {
    L === void 0 && (L = i.TEXTURE0 + ne - 1), de !== L && (i.activeTexture(L), de = L);
  }
  function v(L, pe, X) {
    X === void 0 && (de === null ? X = i.TEXTURE0 + ne - 1 : X = de);
    let Q = G[X];
    Q === void 0 && (Q = { type: void 0, texture: void 0 }, G[X] = Q), (Q.type !== L || Q.texture !== pe) && (de !== X && (i.activeTexture(X), de = X), i.bindTexture(L, pe || J[L]), Q.type = L, Q.texture = pe);
  }
  function B() {
    const L = G[de];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function K() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function te() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function b() {
    try {
      i.texSubImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      i.texSubImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ae() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function le() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Le() {
    try {
      i.texStorage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function se() {
    try {
      i.texStorage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ge() {
    try {
      i.texImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ce() {
    try {
      i.texImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Te(L) {
    $.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), $.copy(L));
  }
  function he(L) {
    O.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), O.copy(L));
  }
  function He(L, pe) {
    let X = l.get(pe);
    X === void 0 && (X = /* @__PURE__ */ new WeakMap(), l.set(pe, X));
    let Q = X.get(L);
    Q === void 0 && (Q = i.getUniformBlockIndex(pe, L.name), X.set(L, Q));
  }
  function Be(L, pe) {
    const Q = l.get(pe).get(L);
    c.get(pe) !== Q && (i.uniformBlockBinding(pe, Q, L.__bindingPointIndex), c.set(pe, Q));
  }
  function Qe() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), o.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, de = null, G = {}, h = {}, p = /* @__PURE__ */ new WeakMap(), f = [], _ = null, g = !1, m = null, d = null, A = null, y = null, x = null, P = null, C = null, w = new Pe(0, 0, 0), U = 0, E = !1, M = null, D = null, Z = null, V = null, j = null, $.set(0, 0, i.canvas.width, i.canvas.height), O.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), o.reset(), a.reset();
  }
  return {
    buffers: {
      color: s,
      depth: o,
      stencil: a
    },
    enable: ee,
    disable: ve,
    bindFramebuffer: Ae,
    drawBuffers: Se,
    useProgram: et,
    setBlending: R,
    setMaterial: At,
    setFlipSided: ke,
    setCullFace: Ge,
    setLineWidth: Ee,
    setPolygonOffset: Ke,
    setScissorTest: ye,
    activeTexture: T,
    bindTexture: v,
    unbindTexture: B,
    compressedTexImage2D: K,
    compressedTexImage3D: te,
    texImage2D: ge,
    texImage3D: Ce,
    updateUBOMapping: He,
    uniformBlockBinding: Be,
    texStorage2D: Le,
    texStorage3D: se,
    texSubImage2D: b,
    texSubImage3D: re,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: le,
    scissor: Te,
    viewport: he,
    reset: Qe
  };
}
function Om(i, e, t, n, r, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Re(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const p = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(T, v) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, v)
    ) : cr("canvas");
  }
  function g(T, v, B) {
    let K = 1;
    const te = ye(T);
    if ((te.width > B || te.height > B) && (K = B / Math.max(te.width, te.height)), K < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const b = Math.floor(K * te.width), re = Math.floor(K * te.height);
        h === void 0 && (h = _(b, re));
        const ae = v ? _(b, re) : h;
        return ae.width = b, ae.height = re, ae.getContext("2d").drawImage(T, 0, 0, b, re), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + te.width + "x" + te.height + ") to (" + b + "x" + re + ")."), ae;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + te.width + "x" + te.height + ")."), T;
    return T;
  }
  function m(T) {
    return T.generateMipmaps;
  }
  function d(T) {
    i.generateMipmap(T);
  }
  function A(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function y(T, v, B, K, te = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let b = v;
    if (v === i.RED && (B === i.FLOAT && (b = i.R32F), B === i.HALF_FLOAT && (b = i.R16F), B === i.UNSIGNED_BYTE && (b = i.R8)), v === i.RED_INTEGER && (B === i.UNSIGNED_BYTE && (b = i.R8UI), B === i.UNSIGNED_SHORT && (b = i.R16UI), B === i.UNSIGNED_INT && (b = i.R32UI), B === i.BYTE && (b = i.R8I), B === i.SHORT && (b = i.R16I), B === i.INT && (b = i.R32I)), v === i.RG && (B === i.FLOAT && (b = i.RG32F), B === i.HALF_FLOAT && (b = i.RG16F), B === i.UNSIGNED_BYTE && (b = i.RG8)), v === i.RG_INTEGER && (B === i.UNSIGNED_BYTE && (b = i.RG8UI), B === i.UNSIGNED_SHORT && (b = i.RG16UI), B === i.UNSIGNED_INT && (b = i.RG32UI), B === i.BYTE && (b = i.RG8I), B === i.SHORT && (b = i.RG16I), B === i.INT && (b = i.RG32I)), v === i.RGB_INTEGER && (B === i.UNSIGNED_BYTE && (b = i.RGB8UI), B === i.UNSIGNED_SHORT && (b = i.RGB16UI), B === i.UNSIGNED_INT && (b = i.RGB32UI), B === i.BYTE && (b = i.RGB8I), B === i.SHORT && (b = i.RGB16I), B === i.INT && (b = i.RGB32I)), v === i.RGBA_INTEGER && (B === i.UNSIGNED_BYTE && (b = i.RGBA8UI), B === i.UNSIGNED_SHORT && (b = i.RGBA16UI), B === i.UNSIGNED_INT && (b = i.RGBA32UI), B === i.BYTE && (b = i.RGBA8I), B === i.SHORT && (b = i.RGBA16I), B === i.INT && (b = i.RGBA32I)), v === i.RGB && B === i.UNSIGNED_INT_5_9_9_9_REV && (b = i.RGB9_E5), v === i.RGBA) {
      const re = te ? is : Xe.getTransfer(K);
      B === i.FLOAT && (b = i.RGBA32F), B === i.HALF_FLOAT && (b = i.RGBA16F), B === i.UNSIGNED_BYTE && (b = re === $e ? i.SRGB8_ALPHA8 : i.RGBA8), B === i.UNSIGNED_SHORT_4_4_4_4 && (b = i.RGBA4), B === i.UNSIGNED_SHORT_5_5_5_1 && (b = i.RGB5_A1);
    }
    return (b === i.R16F || b === i.R32F || b === i.RG16F || b === i.RG32F || b === i.RGBA16F || b === i.RGBA32F) && e.get("EXT_color_buffer_float"), b;
  }
  function x(T, v) {
    let B;
    return T ? v === null || v === ni || v === sr ? B = i.DEPTH24_STENCIL8 : v === nn ? B = i.DEPTH32F_STENCIL8 : v === rr && (B = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === ni || v === sr ? B = i.DEPTH_COMPONENT24 : v === nn ? B = i.DEPTH_COMPONENT32F : v === rr && (B = i.DEPTH_COMPONENT16), B;
  }
  function P(T, v) {
    return m(T) === !0 || T.isFramebufferTexture && T.minFilter !== Ft && T.minFilter !== Ht ? Math.log2(Math.max(v.width, v.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? v.mipmaps.length : 1;
  }
  function C(T) {
    const v = T.target;
    v.removeEventListener("dispose", C), U(v), v.isVideoTexture && u.delete(v);
  }
  function w(T) {
    const v = T.target;
    v.removeEventListener("dispose", w), M(v);
  }
  function U(T) {
    const v = n.get(T);
    if (v.__webglInit === void 0) return;
    const B = T.source, K = p.get(B);
    if (K) {
      const te = K[v.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && E(T), Object.keys(K).length === 0 && p.delete(B);
    }
    n.remove(T);
  }
  function E(T) {
    const v = n.get(T);
    i.deleteTexture(v.__webglTexture);
    const B = T.source, K = p.get(B);
    delete K[v.__cacheKey], o.memory.textures--;
  }
  function M(T) {
    const v = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(v.__webglFramebuffer[K]))
          for (let te = 0; te < v.__webglFramebuffer[K].length; te++) i.deleteFramebuffer(v.__webglFramebuffer[K][te]);
        else
          i.deleteFramebuffer(v.__webglFramebuffer[K]);
        v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let K = 0; K < v.__webglFramebuffer.length; K++) i.deleteFramebuffer(v.__webglFramebuffer[K]);
      else
        i.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer)
        for (let K = 0; K < v.__webglColorRenderbuffer.length; K++)
          v.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);
      v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const B = T.textures;
    for (let K = 0, te = B.length; K < te; K++) {
      const b = n.get(B[K]);
      b.__webglTexture && (i.deleteTexture(b.__webglTexture), o.memory.textures--), n.remove(B[K]);
    }
    n.remove(T);
  }
  let D = 0;
  function Z() {
    D = 0;
  }
  function V() {
    const T = D;
    return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), D += 1, T;
  }
  function j(T) {
    const v = [];
    return v.push(T.wrapS), v.push(T.wrapT), v.push(T.wrapR || 0), v.push(T.magFilter), v.push(T.minFilter), v.push(T.anisotropy), v.push(T.internalFormat), v.push(T.format), v.push(T.type), v.push(T.generateMipmaps), v.push(T.premultiplyAlpha), v.push(T.flipY), v.push(T.unpackAlignment), v.push(T.colorSpace), v.join();
  }
  function ne(T, v) {
    const B = n.get(T);
    if (T.isVideoTexture && Ee(T), T.isRenderTargetTexture === !1 && T.version > 0 && B.__version !== T.version) {
      const K = T.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        O(B, T, v);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, B.__webglTexture, i.TEXTURE0 + v);
  }
  function q(T, v) {
    const B = n.get(T);
    if (T.version > 0 && B.__version !== T.version) {
      O(B, T, v);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, B.__webglTexture, i.TEXTURE0 + v);
  }
  function ce(T, v) {
    const B = n.get(T);
    if (T.version > 0 && B.__version !== T.version) {
      O(B, T, v);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, B.__webglTexture, i.TEXTURE0 + v);
  }
  function k(T, v) {
    const B = n.get(T);
    if (T.version > 0 && B.__version !== T.version) {
      Y(B, T, v);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, B.__webglTexture, i.TEXTURE0 + v);
  }
  const de = {
    [ns]: i.REPEAT,
    [En]: i.CLAMP_TO_EDGE,
    [la]: i.MIRRORED_REPEAT
  }, G = {
    [Ft]: i.NEAREST,
    [ru]: i.NEAREST_MIPMAP_NEAREST,
    [gr]: i.NEAREST_MIPMAP_LINEAR,
    [Ht]: i.LINEAR,
    [_s]: i.LINEAR_MIPMAP_NEAREST,
    [ti]: i.LINEAR_MIPMAP_LINEAR
  }, W = {
    [uu]: i.NEVER,
    [_u]: i.ALWAYS,
    [du]: i.LESS,
    [jc]: i.LEQUAL,
    [hu]: i.EQUAL,
    [mu]: i.GEQUAL,
    [fu]: i.GREATER,
    [pu]: i.NOTEQUAL
  };
  function ie(T, v) {
    if (v.type === nn && e.has("OES_texture_float_linear") === !1 && (v.magFilter === Ht || v.magFilter === _s || v.magFilter === gr || v.magFilter === ti || v.minFilter === Ht || v.minFilter === _s || v.minFilter === gr || v.minFilter === ti) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, de[v.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, de[v.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, de[v.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, G[v.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, G[v.minFilter]), v.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, W[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (v.magFilter === Ft || v.minFilter !== gr && v.minFilter !== ti || v.type === nn && e.has("OES_texture_float_linear") === !1) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const B = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function $(T, v) {
    let B = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, v.addEventListener("dispose", C));
    const K = v.source;
    let te = p.get(K);
    te === void 0 && (te = {}, p.set(K, te));
    const b = j(v);
    if (b !== T.__cacheKey) {
      te[b] === void 0 && (te[b] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, B = !0), te[b].usedTimes++;
      const re = te[T.__cacheKey];
      re !== void 0 && (te[T.__cacheKey].usedTimes--, re.usedTimes === 0 && E(v)), T.__cacheKey = b, T.__webglTexture = te[b].texture;
    }
    return B;
  }
  function O(T, v, B) {
    let K = i.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (K = i.TEXTURE_3D);
    const te = $(T, v), b = v.source;
    t.bindTexture(K, T.__webglTexture, i.TEXTURE0 + B);
    const re = n.get(b);
    if (b.version !== re.__version || te === !0) {
      t.activeTexture(i.TEXTURE0 + B);
      const ae = Xe.getPrimaries(Xe.workingColorSpace), le = v.colorSpace === Nn ? null : Xe.getPrimaries(v.colorSpace), Le = v.colorSpace === Nn || ae === le ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Le);
      let se = g(v.image, !1, r.maxTextureSize);
      se = Ke(v, se);
      const ge = s.convert(v.format, v.colorSpace), Ce = s.convert(v.type);
      let Te = y(v.internalFormat, ge, Ce, v.colorSpace, v.isVideoTexture);
      ie(K, v);
      let he;
      const He = v.mipmaps, Be = v.isVideoTexture !== !0, Qe = re.__version === void 0 || te === !0, L = b.dataReady, pe = P(v, se);
      if (v.isDepthTexture)
        Te = x(v.format === or, v.type), Qe && (Be ? t.texStorage2D(i.TEXTURE_2D, 1, Te, se.width, se.height) : t.texImage2D(i.TEXTURE_2D, 0, Te, se.width, se.height, 0, ge, Ce, null));
      else if (v.isDataTexture)
        if (He.length > 0) {
          Be && Qe && t.texStorage2D(i.TEXTURE_2D, pe, Te, He[0].width, He[0].height);
          for (let X = 0, Q = He.length; X < Q; X++)
            he = He[X], Be ? L && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, he.width, he.height, ge, Ce, he.data) : t.texImage2D(i.TEXTURE_2D, X, Te, he.width, he.height, 0, ge, Ce, he.data);
          v.generateMipmaps = !1;
        } else
          Be ? (Qe && t.texStorage2D(i.TEXTURE_2D, pe, Te, se.width, se.height), L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, se.width, se.height, ge, Ce, se.data)) : t.texImage2D(i.TEXTURE_2D, 0, Te, se.width, se.height, 0, ge, Ce, se.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Be && Qe && t.texStorage3D(i.TEXTURE_2D_ARRAY, pe, Te, He[0].width, He[0].height, se.depth);
          for (let X = 0, Q = He.length; X < Q; X++)
            if (he = He[X], v.format !== Vt)
              if (ge !== null)
                if (Be) {
                  if (L)
                    if (v.layerUpdates.size > 0) {
                      const _e = Vo(he.width, he.height, v.format, v.type);
                      for (const me of v.layerUpdates) {
                        const Ne = he.data.subarray(
                          me * _e / he.data.BYTES_PER_ELEMENT,
                          (me + 1) * _e / he.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, me, he.width, he.height, 1, ge, Ne);
                      }
                      v.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, he.width, he.height, se.depth, ge, he.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, X, Te, he.width, he.height, se.depth, 0, he.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Be ? L && t.texSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, he.width, he.height, se.depth, ge, Ce, he.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, X, Te, he.width, he.height, se.depth, 0, ge, Ce, he.data);
        } else {
          Be && Qe && t.texStorage2D(i.TEXTURE_2D, pe, Te, He[0].width, He[0].height);
          for (let X = 0, Q = He.length; X < Q; X++)
            he = He[X], v.format !== Vt ? ge !== null ? Be ? L && t.compressedTexSubImage2D(i.TEXTURE_2D, X, 0, 0, he.width, he.height, ge, he.data) : t.compressedTexImage2D(i.TEXTURE_2D, X, Te, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? L && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, he.width, he.height, ge, Ce, he.data) : t.texImage2D(i.TEXTURE_2D, X, Te, he.width, he.height, 0, ge, Ce, he.data);
        }
      else if (v.isDataArrayTexture)
        if (Be) {
          if (Qe && t.texStorage3D(i.TEXTURE_2D_ARRAY, pe, Te, se.width, se.height, se.depth), L)
            if (v.layerUpdates.size > 0) {
              const X = Vo(se.width, se.height, v.format, v.type);
              for (const Q of v.layerUpdates) {
                const _e = se.data.subarray(
                  Q * X / se.data.BYTES_PER_ELEMENT,
                  (Q + 1) * X / se.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Q, se.width, se.height, 1, ge, Ce, _e);
              }
              v.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, se.width, se.height, se.depth, ge, Ce, se.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Te, se.width, se.height, se.depth, 0, ge, Ce, se.data);
      else if (v.isData3DTexture)
        Be ? (Qe && t.texStorage3D(i.TEXTURE_3D, pe, Te, se.width, se.height, se.depth), L && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, se.width, se.height, se.depth, ge, Ce, se.data)) : t.texImage3D(i.TEXTURE_3D, 0, Te, se.width, se.height, se.depth, 0, ge, Ce, se.data);
      else if (v.isFramebufferTexture) {
        if (Qe)
          if (Be)
            t.texStorage2D(i.TEXTURE_2D, pe, Te, se.width, se.height);
          else {
            let X = se.width, Q = se.height;
            for (let _e = 0; _e < pe; _e++)
              t.texImage2D(i.TEXTURE_2D, _e, Te, X, Q, 0, ge, Ce, null), X >>= 1, Q >>= 1;
          }
      } else if (He.length > 0) {
        if (Be && Qe) {
          const X = ye(He[0]);
          t.texStorage2D(i.TEXTURE_2D, pe, Te, X.width, X.height);
        }
        for (let X = 0, Q = He.length; X < Q; X++)
          he = He[X], Be ? L && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, ge, Ce, he) : t.texImage2D(i.TEXTURE_2D, X, Te, ge, Ce, he);
        v.generateMipmaps = !1;
      } else if (Be) {
        if (Qe) {
          const X = ye(se);
          t.texStorage2D(i.TEXTURE_2D, pe, Te, X.width, X.height);
        }
        L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ge, Ce, se);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Te, ge, Ce, se);
      m(v) && d(K), re.__version = b.version, v.onUpdate && v.onUpdate(v);
    }
    T.__version = v.version;
  }
  function Y(T, v, B) {
    if (v.image.length !== 6) return;
    const K = $(T, v), te = v.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + B);
    const b = n.get(te);
    if (te.version !== b.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + B);
      const re = Xe.getPrimaries(Xe.workingColorSpace), ae = v.colorSpace === Nn ? null : Xe.getPrimaries(v.colorSpace), le = v.colorSpace === Nn || re === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, le);
      const Le = v.isCompressedTexture || v.image[0].isCompressedTexture, se = v.image[0] && v.image[0].isDataTexture, ge = [];
      for (let Q = 0; Q < 6; Q++)
        !Le && !se ? ge[Q] = g(v.image[Q], !0, r.maxCubemapSize) : ge[Q] = se ? v.image[Q].image : v.image[Q], ge[Q] = Ke(v, ge[Q]);
      const Ce = ge[0], Te = s.convert(v.format, v.colorSpace), he = s.convert(v.type), He = y(v.internalFormat, Te, he, v.colorSpace), Be = v.isVideoTexture !== !0, Qe = b.__version === void 0 || K === !0, L = te.dataReady;
      let pe = P(v, Ce);
      ie(i.TEXTURE_CUBE_MAP, v);
      let X;
      if (Le) {
        Be && Qe && t.texStorage2D(i.TEXTURE_CUBE_MAP, pe, He, Ce.width, Ce.height);
        for (let Q = 0; Q < 6; Q++) {
          X = ge[Q].mipmaps;
          for (let _e = 0; _e < X.length; _e++) {
            const me = X[_e];
            v.format !== Vt ? Te !== null ? Be ? L && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e, 0, 0, me.width, me.height, Te, me.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e, He, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e, 0, 0, me.width, me.height, Te, he, me.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e, He, me.width, me.height, 0, Te, he, me.data);
          }
        }
      } else {
        if (X = v.mipmaps, Be && Qe) {
          X.length > 0 && pe++;
          const Q = ye(ge[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, pe, He, Q.width, Q.height);
        }
        for (let Q = 0; Q < 6; Q++)
          if (se) {
            Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, ge[Q].width, ge[Q].height, Te, he, ge[Q].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, He, ge[Q].width, ge[Q].height, 0, Te, he, ge[Q].data);
            for (let _e = 0; _e < X.length; _e++) {
              const Ne = X[_e].image[Q].image;
              Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e + 1, 0, 0, Ne.width, Ne.height, Te, he, Ne.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e + 1, He, Ne.width, Ne.height, 0, Te, he, Ne.data);
            }
          } else {
            Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, Te, he, ge[Q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, He, Te, he, ge[Q]);
            for (let _e = 0; _e < X.length; _e++) {
              const me = X[_e];
              Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e + 1, 0, 0, Te, he, me.image[Q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, _e + 1, He, Te, he, me.image[Q]);
            }
          }
      }
      m(v) && d(i.TEXTURE_CUBE_MAP), b.__version = te.version, v.onUpdate && v.onUpdate(v);
    }
    T.__version = v.version;
  }
  function J(T, v, B, K, te, b) {
    const re = s.convert(B.format, B.colorSpace), ae = s.convert(B.type), le = y(B.internalFormat, re, ae, B.colorSpace), Le = n.get(v), se = n.get(B);
    if (se.__renderTarget = v, !Le.__hasExternalTextures) {
      const ge = Math.max(1, v.width >> b), Ce = Math.max(1, v.height >> b);
      te === i.TEXTURE_3D || te === i.TEXTURE_2D_ARRAY ? t.texImage3D(te, b, le, ge, Ce, v.depth, 0, re, ae, null) : t.texImage2D(te, b, le, ge, Ce, 0, re, ae, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T), Ge(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, te, se.__webglTexture, 0, ke(v)) : (te === i.TEXTURE_2D || te >= i.TEXTURE_CUBE_MAP_POSITIVE_X && te <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, te, se.__webglTexture, b), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ee(T, v, B) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), v.depthBuffer) {
      const K = v.depthTexture, te = K && K.isDepthTexture ? K.type : null, b = x(v.stencilBuffer, te), re = v.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ae = ke(v);
      Ge(v) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ae, b, v.width, v.height) : B ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ae, b, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, b, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, re, i.RENDERBUFFER, T);
    } else {
      const K = v.textures;
      for (let te = 0; te < K.length; te++) {
        const b = K[te], re = s.convert(b.format, b.colorSpace), ae = s.convert(b.type), le = y(b.internalFormat, re, ae, b.colorSpace), Le = ke(v);
        B && Ge(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Le, le, v.width, v.height) : Ge(v) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Le, le, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, le, v.width, v.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ve(T, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const K = n.get(v.depthTexture);
    K.__renderTarget = v, (!K.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), ne(v.depthTexture, 0);
    const te = K.__webglTexture, b = ke(v);
    if (v.depthTexture.format === ar)
      Ge(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, te, 0, b) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, te, 0);
    else if (v.depthTexture.format === or)
      Ge(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, te, 0, b) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ae(T) {
    const v = n.get(T), B = T.isWebGLCubeRenderTarget === !0;
    if (v.__boundDepthTexture !== T.depthTexture) {
      const K = T.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), K) {
        const te = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, K.removeEventListener("dispose", te);
        };
        K.addEventListener("dispose", te), v.__depthDisposeCallback = te;
      }
      v.__boundDepthTexture = K;
    }
    if (T.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (B) throw new Error("target.depthTexture not supported in Cube render targets");
      ve(v.__webglFramebuffer, T);
    } else if (B) {
      v.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[K]), v.__webglDepthbuffer[K] === void 0)
          v.__webglDepthbuffer[K] = i.createRenderbuffer(), ee(v.__webglDepthbuffer[K], T, !1);
        else {
          const te = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, b = v.__webglDepthbuffer[K];
          i.bindRenderbuffer(i.RENDERBUFFER, b), i.framebufferRenderbuffer(i.FRAMEBUFFER, te, i.RENDERBUFFER, b);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0)
      v.__webglDepthbuffer = i.createRenderbuffer(), ee(v.__webglDepthbuffer, T, !1);
    else {
      const K = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, te = v.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, te), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, te);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Se(T, v, B) {
    const K = n.get(T);
    v !== void 0 && J(K.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), B !== void 0 && Ae(T);
  }
  function et(T) {
    const v = T.texture, B = n.get(T), K = n.get(v);
    T.addEventListener("dispose", w);
    const te = T.textures, b = T.isWebGLCubeRenderTarget === !0, re = te.length > 1;
    if (re || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()), K.__version = v.version, o.memory.textures++), b) {
      B.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          B.__webglFramebuffer[ae] = [];
          for (let le = 0; le < v.mipmaps.length; le++)
            B.__webglFramebuffer[ae][le] = i.createFramebuffer();
        } else
          B.__webglFramebuffer[ae] = i.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let ae = 0; ae < v.mipmaps.length; ae++)
          B.__webglFramebuffer[ae] = i.createFramebuffer();
      } else
        B.__webglFramebuffer = i.createFramebuffer();
      if (re)
        for (let ae = 0, le = te.length; ae < le; ae++) {
          const Le = n.get(te[ae]);
          Le.__webglTexture === void 0 && (Le.__webglTexture = i.createTexture(), o.memory.textures++);
        }
      if (T.samples > 0 && Ge(T) === !1) {
        B.__webglMultisampledFramebuffer = i.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < te.length; ae++) {
          const le = te[ae];
          B.__webglColorRenderbuffer[ae] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, B.__webglColorRenderbuffer[ae]);
          const Le = s.convert(le.format, le.colorSpace), se = s.convert(le.type), ge = y(le.internalFormat, Le, se, le.colorSpace, T.isXRRenderTarget === !0), Ce = ke(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ce, ge, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, B.__webglColorRenderbuffer[ae]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (B.__webglDepthRenderbuffer = i.createRenderbuffer(), ee(B.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (b) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), ie(i.TEXTURE_CUBE_MAP, v);
      for (let ae = 0; ae < 6; ae++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let le = 0; le < v.mipmaps.length; le++)
            J(B.__webglFramebuffer[ae][le], T, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, le);
        else
          J(B.__webglFramebuffer[ae], T, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      m(v) && d(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (re) {
      for (let ae = 0, le = te.length; ae < le; ae++) {
        const Le = te[ae], se = n.get(Le);
        t.bindTexture(i.TEXTURE_2D, se.__webglTexture), ie(i.TEXTURE_2D, Le), J(B.__webglFramebuffer, T, Le, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, 0), m(Le) && d(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ae = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ae, K.__webglTexture), ie(ae, v), v.mipmaps && v.mipmaps.length > 0)
        for (let le = 0; le < v.mipmaps.length; le++)
          J(B.__webglFramebuffer[le], T, v, i.COLOR_ATTACHMENT0, ae, le);
      else
        J(B.__webglFramebuffer, T, v, i.COLOR_ATTACHMENT0, ae, 0);
      m(v) && d(ae), t.unbindTexture();
    }
    T.depthBuffer && Ae(T);
  }
  function tt(T) {
    const v = T.textures;
    for (let B = 0, K = v.length; B < K; B++) {
      const te = v[B];
      if (m(te)) {
        const b = A(T), re = n.get(te).__webglTexture;
        t.bindTexture(b, re), d(b), t.unbindTexture();
      }
    }
  }
  const ze = [], R = [];
  function At(T) {
    if (T.samples > 0) {
      if (Ge(T) === !1) {
        const v = T.textures, B = T.width, K = T.height;
        let te = i.COLOR_BUFFER_BIT;
        const b = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, re = n.get(T), ae = v.length > 1;
        if (ae)
          for (let le = 0; le < v.length; le++)
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
        for (let le = 0; le < v.length; le++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (te |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (te |= i.STENCIL_BUFFER_BIT)), ae) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, re.__webglColorRenderbuffer[le]);
            const Le = n.get(v[le]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Le, 0);
          }
          i.blitFramebuffer(0, 0, B, K, 0, 0, B, K, te, i.NEAREST), c === !0 && (ze.length = 0, R.length = 0, ze.push(i.COLOR_ATTACHMENT0 + le), T.depthBuffer && T.resolveDepthBuffer === !1 && (ze.push(b), R.push(b), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, R)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ze));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ae)
          for (let le = 0; le < v.length; le++) {
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.RENDERBUFFER, re.__webglColorRenderbuffer[le]);
            const Le = n.get(v[le]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.TEXTURE_2D, Le, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
        const v = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function ke(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function Ge(T) {
    const v = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function Ee(T) {
    const v = o.render.frame;
    u.get(T) !== v && (u.set(T, v), T.update());
  }
  function Ke(T, v) {
    const B = T.colorSpace, K = T.format, te = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || B !== Ni && B !== Nn && (Xe.getTransfer(B) === $e ? (K !== Vt || te !== An) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), v;
  }
  function ye(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = Z, this.setTexture2D = ne, this.setTexture2DArray = q, this.setTexture3D = ce, this.setTextureCube = k, this.rebindTextures = Se, this.setupRenderTarget = et, this.updateRenderTargetMipmap = tt, this.updateMultisampleRenderTarget = At, this.setupDepthRenderbuffer = Ae, this.setupFrameBufferTexture = J, this.useMultisampledRTT = Ge;
}
function Bm(i, e) {
  function t(n, r = Nn) {
    let s;
    const o = Xe.getTransfer(r);
    if (n === An) return i.UNSIGNED_BYTE;
    if (n === ka) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Wa) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Vc) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === zc) return i.BYTE;
    if (n === Hc) return i.SHORT;
    if (n === rr) return i.UNSIGNED_SHORT;
    if (n === Ga) return i.INT;
    if (n === ni) return i.UNSIGNED_INT;
    if (n === nn) return i.FLOAT;
    if (n === ur) return i.HALF_FLOAT;
    if (n === Gc) return i.ALPHA;
    if (n === kc) return i.RGB;
    if (n === Vt) return i.RGBA;
    if (n === Wc) return i.LUMINANCE;
    if (n === Xc) return i.LUMINANCE_ALPHA;
    if (n === ar) return i.DEPTH_COMPONENT;
    if (n === or) return i.DEPTH_STENCIL;
    if (n === Yc) return i.RED;
    if (n === Xa) return i.RED_INTEGER;
    if (n === qc) return i.RG;
    if (n === Ya) return i.RG_INTEGER;
    if (n === qa) return i.RGBA_INTEGER;
    if (n === qr || n === Zr || n === jr || n === $r)
      if (o === $e)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === qr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Zr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === jr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === $r) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === qr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Zr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === jr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === $r) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === ua || n === da || n === ha || n === fa)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === ua) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === da) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ha) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === fa) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === pa || n === ma || n === _a)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === pa || n === ma) return o === $e ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === _a) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === ga || n === va || n === xa || n === Sa || n === Ma || n === Ea || n === ya || n === Ta || n === ba || n === Aa || n === wa || n === Ra || n === Ca || n === Pa)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === ga) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === va) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === xa) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Sa) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Ma) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ea) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === ya) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ta) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ba) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Aa) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === wa) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ra) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Ca) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Pa) return o === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Kr || n === Da || n === La)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Kr) return o === $e ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Da) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === La) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Zc || n === Ia || n === Ua || n === Na)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Kr) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ia) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Ua) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Na) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === sr ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const zm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Hm = `
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
class Vm {
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
      const r = new St(), s = e.properties.get(r);
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
      const t = e.cameras[0].viewport, n = new bt({
        vertexShader: zm,
        fragmentShader: Hm,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Ct(new Oi(20, 20), n);
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
class Gm extends si {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", c = 1, l = null, u = null, h = null, p = null, f = null, _ = null;
    const g = new Vm(), m = t.getContextAttributes();
    let d = null, A = null;
    const y = [], x = [], P = new Re();
    let C = null;
    const w = new en();
    w.viewport = new lt();
    const U = new en();
    U.viewport = new lt();
    const E = [w, U], M = new od();
    let D = null, Z = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(O) {
      let Y = y[O];
      return Y === void 0 && (Y = new Bs(), y[O] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(O) {
      let Y = y[O];
      return Y === void 0 && (Y = new Bs(), y[O] = Y), Y.getGripSpace();
    }, this.getHand = function(O) {
      let Y = y[O];
      return Y === void 0 && (Y = new Bs(), y[O] = Y), Y.getHandSpace();
    };
    function V(O) {
      const Y = x.indexOf(O.inputSource);
      if (Y === -1)
        return;
      const J = y[Y];
      J !== void 0 && (J.update(O.inputSource, O.frame, l || o), J.dispatchEvent({ type: O.type, data: O.inputSource }));
    }
    function j() {
      r.removeEventListener("select", V), r.removeEventListener("selectstart", V), r.removeEventListener("selectend", V), r.removeEventListener("squeeze", V), r.removeEventListener("squeezestart", V), r.removeEventListener("squeezeend", V), r.removeEventListener("end", j), r.removeEventListener("inputsourceschange", ne);
      for (let O = 0; O < y.length; O++) {
        const Y = x[O];
        Y !== null && (x[O] = null, y[O].disconnect(Y));
      }
      D = null, Z = null, g.reset(), e.setRenderTarget(d), f = null, p = null, h = null, r = null, A = null, $.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(P.width, P.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(O) {
      s = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(O) {
      a = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(O) {
      l = O;
    }, this.getBaseLayer = function() {
      return p !== null ? p : f;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(O) {
      if (r = O, r !== null) {
        if (d = e.getRenderTarget(), r.addEventListener("select", V), r.addEventListener("selectstart", V), r.addEventListener("selectend", V), r.addEventListener("squeeze", V), r.addEventListener("squeezestart", V), r.addEventListener("squeezeend", V), r.addEventListener("end", j), r.addEventListener("inputsourceschange", ne), m.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(P), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let J = null, ee = null, ve = null;
          m.depth && (ve = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, J = m.stencil ? or : ar, ee = m.stencil ? sr : ni);
          const Ae = {
            colorFormat: t.RGBA8,
            depthFormat: ve,
            scaleFactor: s
          };
          h = new XRWebGLBinding(r, t), p = h.createProjectionLayer(Ae), r.updateRenderState({ layers: [p] }), e.setPixelRatio(1), e.setSize(p.textureWidth, p.textureHeight, !1), A = new ii(
            p.textureWidth,
            p.textureHeight,
            {
              format: Vt,
              type: An,
              depthTexture: new ol(p.textureWidth, p.textureHeight, ee, void 0, void 0, void 0, void 0, void 0, void 0, J),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        } else {
          const J = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(r, t, J), r.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), A = new ii(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: Vt,
              type: An,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        A.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await r.requestReferenceSpace(a), $.setContext(r), $.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function ne(O) {
      for (let Y = 0; Y < O.removed.length; Y++) {
        const J = O.removed[Y], ee = x.indexOf(J);
        ee >= 0 && (x[ee] = null, y[ee].disconnect(J));
      }
      for (let Y = 0; Y < O.added.length; Y++) {
        const J = O.added[Y];
        let ee = x.indexOf(J);
        if (ee === -1) {
          for (let Ae = 0; Ae < y.length; Ae++)
            if (Ae >= x.length) {
              x.push(J), ee = Ae;
              break;
            } else if (x[Ae] === null) {
              x[Ae] = J, ee = Ae;
              break;
            }
          if (ee === -1) break;
        }
        const ve = y[ee];
        ve && ve.connect(J);
      }
    }
    const q = new F(), ce = new F();
    function k(O, Y, J) {
      q.setFromMatrixPosition(Y.matrixWorld), ce.setFromMatrixPosition(J.matrixWorld);
      const ee = q.distanceTo(ce), ve = Y.projectionMatrix.elements, Ae = J.projectionMatrix.elements, Se = ve[14] / (ve[10] - 1), et = ve[14] / (ve[10] + 1), tt = (ve[9] + 1) / ve[5], ze = (ve[9] - 1) / ve[5], R = (ve[8] - 1) / ve[0], At = (Ae[8] + 1) / Ae[0], ke = Se * R, Ge = Se * At, Ee = ee / (-R + At), Ke = Ee * -R;
      if (Y.matrixWorld.decompose(O.position, O.quaternion, O.scale), O.translateX(Ke), O.translateZ(Ee), O.matrixWorld.compose(O.position, O.quaternion, O.scale), O.matrixWorldInverse.copy(O.matrixWorld).invert(), ve[10] === -1)
        O.projectionMatrix.copy(Y.projectionMatrix), O.projectionMatrixInverse.copy(Y.projectionMatrixInverse);
      else {
        const ye = Se + Ee, T = et + Ee, v = ke - Ke, B = Ge + (ee - Ke), K = tt * et / T * ye, te = ze * et / T * ye;
        O.projectionMatrix.makePerspective(v, B, K, te, ye, T), O.projectionMatrixInverse.copy(O.projectionMatrix).invert();
      }
    }
    function de(O, Y) {
      Y === null ? O.matrixWorld.copy(O.matrix) : O.matrixWorld.multiplyMatrices(Y.matrixWorld, O.matrix), O.matrixWorldInverse.copy(O.matrixWorld).invert();
    }
    this.updateCamera = function(O) {
      if (r === null) return;
      let Y = O.near, J = O.far;
      g.texture !== null && (g.depthNear > 0 && (Y = g.depthNear), g.depthFar > 0 && (J = g.depthFar)), M.near = U.near = w.near = Y, M.far = U.far = w.far = J, (D !== M.near || Z !== M.far) && (r.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), D = M.near, Z = M.far), w.layers.mask = O.layers.mask | 2, U.layers.mask = O.layers.mask | 4, M.layers.mask = w.layers.mask | U.layers.mask;
      const ee = O.parent, ve = M.cameras;
      de(M, ee);
      for (let Ae = 0; Ae < ve.length; Ae++)
        de(ve[Ae], ee);
      ve.length === 2 ? k(M, w, U) : M.projectionMatrix.copy(w.projectionMatrix), G(O, M, ee);
    };
    function G(O, Y, J) {
      J === null ? O.matrix.copy(Y.matrixWorld) : (O.matrix.copy(J.matrixWorld), O.matrix.invert(), O.matrix.multiply(Y.matrixWorld)), O.matrix.decompose(O.position, O.quaternion, O.scale), O.updateMatrixWorld(!0), O.projectionMatrix.copy(Y.projectionMatrix), O.projectionMatrixInverse.copy(Y.projectionMatrixInverse), O.isPerspectiveCamera && (O.fov = Fa * 2 * Math.atan(1 / O.projectionMatrix.elements[5]), O.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(p === null && f === null))
        return c;
    }, this.setFoveation = function(O) {
      c = O, p !== null && (p.fixedFoveation = O), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = O);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(M);
    };
    let W = null;
    function ie(O, Y) {
      if (u = Y.getViewerPose(l || o), _ = Y, u !== null) {
        const J = u.views;
        f !== null && (e.setRenderTargetFramebuffer(A, f.framebuffer), e.setRenderTarget(A));
        let ee = !1;
        J.length !== M.cameras.length && (M.cameras.length = 0, ee = !0);
        for (let Se = 0; Se < J.length; Se++) {
          const et = J[Se];
          let tt = null;
          if (f !== null)
            tt = f.getViewport(et);
          else {
            const R = h.getViewSubImage(p, et);
            tt = R.viewport, Se === 0 && (e.setRenderTargetTextures(
              A,
              R.colorTexture,
              R.depthStencilTexture
            ), e.setRenderTarget(A));
          }
          let ze = E[Se];
          ze === void 0 && (ze = new en(), ze.layers.enable(Se), ze.viewport = new lt(), E[Se] = ze), ze.matrix.fromArray(et.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(et.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(tt.x, tt.y, tt.width, tt.height), Se === 0 && (M.matrix.copy(ze.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ee === !0 && M.cameras.push(ze);
        }
        const ve = r.enabledFeatures;
        if (ve && ve.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) {
          const Se = h.getDepthInformation(J[0]);
          Se && Se.isValid && Se.texture && g.init(e, Se, r.renderState);
        }
      }
      for (let J = 0; J < y.length; J++) {
        const ee = x[J], ve = y[J];
        ee !== null && ve !== void 0 && ve.update(ee, Y, l || o);
      }
      W && W(O, Y), Y.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Y }), _ = null;
    }
    const $ = new cl();
    $.setAnimationLoop(ie), this.setAnimationLoop = function(O) {
      W = O;
    }, this.dispose = function() {
    };
  }
}
const qn = /* @__PURE__ */ new wn(), km = /* @__PURE__ */ new st();
function Wm(i, e) {
  function t(m, d) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), d.value.copy(m.matrix);
  }
  function n(m, d) {
    d.color.getRGB(m.fogColor.value, rl(i)), d.isFog ? (m.fogNear.value = d.near, m.fogFar.value = d.far) : d.isFogExp2 && (m.fogDensity.value = d.density);
  }
  function r(m, d, A, y, x) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? s(m, d) : d.isMeshToonMaterial ? (s(m, d), h(m, d)) : d.isMeshPhongMaterial ? (s(m, d), u(m, d)) : d.isMeshStandardMaterial ? (s(m, d), p(m, d), d.isMeshPhysicalMaterial && f(m, d, x)) : d.isMeshMatcapMaterial ? (s(m, d), _(m, d)) : d.isMeshDepthMaterial ? s(m, d) : d.isMeshDistanceMaterial ? (s(m, d), g(m, d)) : d.isMeshNormalMaterial ? s(m, d) : d.isLineBasicMaterial ? (o(m, d), d.isLineDashedMaterial && a(m, d)) : d.isPointsMaterial ? c(m, d, A, y) : d.isSpriteMaterial ? l(m, d) : d.isShadowMaterial ? (m.color.value.copy(d.color), m.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(m, d) {
    m.opacity.value = d.opacity, d.color && m.diffuse.value.copy(d.color), d.emissive && m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (m.map.value = d.map, t(d.map, m.mapTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.bumpMap && (m.bumpMap.value = d.bumpMap, t(d.bumpMap, m.bumpMapTransform), m.bumpScale.value = d.bumpScale, d.side === Nt && (m.bumpScale.value *= -1)), d.normalMap && (m.normalMap.value = d.normalMap, t(d.normalMap, m.normalMapTransform), m.normalScale.value.copy(d.normalScale), d.side === Nt && m.normalScale.value.negate()), d.displacementMap && (m.displacementMap.value = d.displacementMap, t(d.displacementMap, m.displacementMapTransform), m.displacementScale.value = d.displacementScale, m.displacementBias.value = d.displacementBias), d.emissiveMap && (m.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, m.emissiveMapTransform)), d.specularMap && (m.specularMap.value = d.specularMap, t(d.specularMap, m.specularMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    const A = e.get(d), y = A.envMap, x = A.envMapRotation;
    y && (m.envMap.value = y, qn.copy(x), qn.x *= -1, qn.y *= -1, qn.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (qn.y *= -1, qn.z *= -1), m.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(qn)), m.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = d.reflectivity, m.ior.value = d.ior, m.refractionRatio.value = d.refractionRatio), d.lightMap && (m.lightMap.value = d.lightMap, m.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, m.lightMapTransform)), d.aoMap && (m.aoMap.value = d.aoMap, m.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, m.aoMapTransform));
  }
  function o(m, d) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, d.map && (m.map.value = d.map, t(d.map, m.mapTransform));
  }
  function a(m, d) {
    m.dashSize.value = d.dashSize, m.totalSize.value = d.dashSize + d.gapSize, m.scale.value = d.scale;
  }
  function c(m, d, A, y) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.size.value = d.size * A, m.scale.value = y * 0.5, d.map && (m.map.value = d.map, t(d.map, m.uvTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function l(m, d) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.rotation.value = d.rotation, d.map && (m.map.value = d.map, t(d.map, m.mapTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function u(m, d) {
    m.specular.value.copy(d.specular), m.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function h(m, d) {
    d.gradientMap && (m.gradientMap.value = d.gradientMap);
  }
  function p(m, d) {
    m.metalness.value = d.metalness, d.metalnessMap && (m.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, m.metalnessMapTransform)), m.roughness.value = d.roughness, d.roughnessMap && (m.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, m.roughnessMapTransform)), d.envMap && (m.envMapIntensity.value = d.envMapIntensity);
  }
  function f(m, d, A) {
    m.ior.value = d.ior, d.sheen > 0 && (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), m.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (m.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, m.sheenColorMapTransform)), d.sheenRoughnessMap && (m.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, m.sheenRoughnessMapTransform))), d.clearcoat > 0 && (m.clearcoat.value = d.clearcoat, m.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (m.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, m.clearcoatMapTransform)), d.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (m.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === Nt && m.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (m.dispersion.value = d.dispersion), d.iridescence > 0 && (m.iridescence.value = d.iridescence, m.iridescenceIOR.value = d.iridescenceIOR, m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (m.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, m.iridescenceMapTransform)), d.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), d.transmission > 0 && (m.transmission.value = d.transmission, m.transmissionSamplerMap.value = A.texture, m.transmissionSamplerSize.value.set(A.width, A.height), d.transmissionMap && (m.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, m.transmissionMapTransform)), m.thickness.value = d.thickness, d.thicknessMap && (m.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = d.attenuationDistance, m.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (m.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (m.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = d.specularIntensity, m.specularColor.value.copy(d.specularColor), d.specularColorMap && (m.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, m.specularColorMapTransform)), d.specularIntensityMap && (m.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, d) {
    d.matcap && (m.matcap.value = d.matcap);
  }
  function g(m, d) {
    const A = e.get(d).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld), m.nearDistance.value = A.shadow.camera.near, m.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Xm(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(A, y) {
    const x = y.program;
    n.uniformBlockBinding(A, x);
  }
  function l(A, y) {
    let x = r[A.id];
    x === void 0 && (_(A), x = u(A), r[A.id] = x, A.addEventListener("dispose", m));
    const P = y.program;
    n.updateUBOMapping(A, P);
    const C = e.render.frame;
    s[A.id] !== C && (p(A), s[A.id] = C);
  }
  function u(A) {
    const y = h();
    A.__bindingPointIndex = y;
    const x = i.createBuffer(), P = A.__size, C = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, x), i.bufferData(i.UNIFORM_BUFFER, P, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, x), x;
  }
  function h() {
    for (let A = 0; A < a; A++)
      if (o.indexOf(A) === -1)
        return o.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function p(A) {
    const y = r[A.id], x = A.uniforms, P = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let C = 0, w = x.length; C < w; C++) {
      const U = Array.isArray(x[C]) ? x[C] : [x[C]];
      for (let E = 0, M = U.length; E < M; E++) {
        const D = U[E];
        if (f(D, C, E, P) === !0) {
          const Z = D.__offset, V = Array.isArray(D.value) ? D.value : [D.value];
          let j = 0;
          for (let ne = 0; ne < V.length; ne++) {
            const q = V[ne], ce = g(q);
            typeof q == "number" || typeof q == "boolean" ? (D.__data[0] = q, i.bufferSubData(i.UNIFORM_BUFFER, Z + j, D.__data)) : q.isMatrix3 ? (D.__data[0] = q.elements[0], D.__data[1] = q.elements[1], D.__data[2] = q.elements[2], D.__data[3] = 0, D.__data[4] = q.elements[3], D.__data[5] = q.elements[4], D.__data[6] = q.elements[5], D.__data[7] = 0, D.__data[8] = q.elements[6], D.__data[9] = q.elements[7], D.__data[10] = q.elements[8], D.__data[11] = 0) : (q.toArray(D.__data, j), j += ce.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, Z, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(A, y, x, P) {
    const C = A.value, w = y + "_" + x;
    if (P[w] === void 0)
      return typeof C == "number" || typeof C == "boolean" ? P[w] = C : P[w] = C.clone(), !0;
    {
      const U = P[w];
      if (typeof C == "number" || typeof C == "boolean") {
        if (U !== C)
          return P[w] = C, !0;
      } else if (U.equals(C) === !1)
        return U.copy(C), !0;
    }
    return !1;
  }
  function _(A) {
    const y = A.uniforms;
    let x = 0;
    const P = 16;
    for (let w = 0, U = y.length; w < U; w++) {
      const E = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let M = 0, D = E.length; M < D; M++) {
        const Z = E[M], V = Array.isArray(Z.value) ? Z.value : [Z.value];
        for (let j = 0, ne = V.length; j < ne; j++) {
          const q = V[j], ce = g(q), k = x % P, de = k % ce.boundary, G = k + de;
          x += de, G !== 0 && P - G < ce.storage && (x += P - G), Z.__data = new Float32Array(ce.storage / Float32Array.BYTES_PER_ELEMENT), Z.__offset = x, x += ce.storage;
        }
      }
    }
    const C = x % P;
    return C > 0 && (x += P - C), A.__size = x, A.__cache = {}, this;
  }
  function g(A) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" || typeof A == "boolean" ? (y.boundary = 4, y.storage = 4) : A.isVector2 ? (y.boundary = 8, y.storage = 8) : A.isVector3 || A.isColor ? (y.boundary = 16, y.storage = 12) : A.isVector4 ? (y.boundary = 16, y.storage = 16) : A.isMatrix3 ? (y.boundary = 48, y.storage = 48) : A.isMatrix4 ? (y.boundary = 64, y.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), y;
  }
  function m(A) {
    const y = A.target;
    y.removeEventListener("dispose", m);
    const x = o.indexOf(y.__bindingPointIndex);
    o.splice(x, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id];
  }
  function d() {
    for (const A in r)
      i.deleteBuffer(r[A]);
    o = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: d
  };
}
class Ym {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = xu(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
      reverseDepthBuffer: p = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = o;
    const _ = new Uint32Array(4), g = new Int32Array(4);
    let m = null, d = null;
    const A = [], y = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Bn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const x = this;
    let P = !1;
    this._outputColorSpace = qt;
    let C = 0, w = 0, U = null, E = -1, M = null;
    const D = new lt(), Z = new lt();
    let V = null;
    const j = new Pe(0);
    let ne = 0, q = t.width, ce = t.height, k = 1, de = null, G = null;
    const W = new lt(0, 0, q, ce), ie = new lt(0, 0, q, ce);
    let $ = !1;
    const O = new $a();
    let Y = !1, J = !1;
    const ee = new st(), ve = new st(), Ae = new F(), Se = new lt(), et = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let tt = !1;
    function ze() {
      return U === null ? k : 1;
    }
    let R = n;
    function At(S, I) {
      return t.getContext(S, I);
    }
    try {
      const S = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${za}`), t.addEventListener("webglcontextlost", Q, !1), t.addEventListener("webglcontextrestored", _e, !1), t.addEventListener("webglcontextcreationerror", me, !1), R === null) {
        const I = "webgl2";
        if (R = At(I, S), R === null)
          throw At(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let ke, Ge, Ee, Ke, ye, T, v, B, K, te, b, re, ae, le, Le, se, ge, Ce, Te, he, He, Be, Qe, L;
    function pe() {
      ke = new np(R), ke.init(), Be = new Bm(R, ke), Ge = new jf(R, ke, e, Be), Ee = new Fm(R, ke), Ge.reverseDepthBuffer && p && Ee.buffers.depth.setReversed(!0), Ke = new sp(R), ye = new ym(), T = new Om(R, ke, Ee, ye, Ge, Be, Ke), v = new Kf(x), B = new tp(x), K = new ud(R), Qe = new qf(R, K), te = new ip(R, K, Ke, Qe), b = new op(R, te, K, Ke), Te = new ap(R, Ge, T), se = new $f(ye), re = new Em(x, v, B, ke, Ge, Qe, se), ae = new Wm(x, ye), le = new bm(), Le = new Dm(ke), Ce = new Yf(x, v, B, Ee, b, f, c), ge = new Um(x, b, Ge), L = new Xm(R, Ke, Ge, Ee), he = new Zf(R, ke, Ke), He = new rp(R, ke, Ke), Ke.programs = re.programs, x.capabilities = Ge, x.extensions = ke, x.properties = ye, x.renderLists = le, x.shadowMap = ge, x.state = Ee, x.info = Ke;
    }
    pe();
    const X = new Gm(x, R);
    this.xr = X, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = ke.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = ke.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (k = S, this.setSize(q, ce, !1));
    }, this.getSize = function(S) {
      return S.set(q, ce);
    }, this.setSize = function(S, I, z = !0) {
      if (X.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      q = S, ce = I, t.width = Math.floor(S * k), t.height = Math.floor(I * k), z === !0 && (t.style.width = S + "px", t.style.height = I + "px"), this.setViewport(0, 0, S, I);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(q * k, ce * k).floor();
    }, this.setDrawingBufferSize = function(S, I, z) {
      q = S, ce = I, k = z, t.width = Math.floor(S * z), t.height = Math.floor(I * z), this.setViewport(0, 0, S, I);
    }, this.getCurrentViewport = function(S) {
      return S.copy(D);
    }, this.getViewport = function(S) {
      return S.copy(W);
    }, this.setViewport = function(S, I, z, H) {
      S.isVector4 ? W.set(S.x, S.y, S.z, S.w) : W.set(S, I, z, H), Ee.viewport(D.copy(W).multiplyScalar(k).round());
    }, this.getScissor = function(S) {
      return S.copy(ie);
    }, this.setScissor = function(S, I, z, H) {
      S.isVector4 ? ie.set(S.x, S.y, S.z, S.w) : ie.set(S, I, z, H), Ee.scissor(Z.copy(ie).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return $;
    }, this.setScissorTest = function(S) {
      Ee.setScissorTest($ = S);
    }, this.setOpaqueSort = function(S) {
      de = S;
    }, this.setTransparentSort = function(S) {
      G = S;
    }, this.getClearColor = function(S) {
      return S.copy(Ce.getClearColor());
    }, this.setClearColor = function() {
      Ce.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ce.setClearAlpha(...arguments);
    }, this.clear = function(S = !0, I = !0, z = !0) {
      let H = 0;
      if (S) {
        let N = !1;
        if (U !== null) {
          const oe = U.texture.format;
          N = oe === qa || oe === Ya || oe === Xa;
        }
        if (N) {
          const oe = U.texture.type, fe = oe === An || oe === ni || oe === rr || oe === sr || oe === ka || oe === Wa, xe = Ce.getClearColor(), Me = Ce.getClearAlpha(), Ie = xe.r, De = xe.g, be = xe.b;
          fe ? (_[0] = Ie, _[1] = De, _[2] = be, _[3] = Me, R.clearBufferuiv(R.COLOR, 0, _)) : (g[0] = Ie, g[1] = De, g[2] = be, g[3] = Me, R.clearBufferiv(R.COLOR, 0, g));
        } else
          H |= R.COLOR_BUFFER_BIT;
      }
      I && (H |= R.DEPTH_BUFFER_BIT), z && (H |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(H);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Q, !1), t.removeEventListener("webglcontextrestored", _e, !1), t.removeEventListener("webglcontextcreationerror", me, !1), Ce.dispose(), le.dispose(), Le.dispose(), ye.dispose(), v.dispose(), B.dispose(), b.dispose(), Qe.dispose(), L.dispose(), re.dispose(), X.dispose(), X.removeEventListener("sessionstart", to), X.removeEventListener("sessionend", no), Hn.stop();
    };
    function Q(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = !0;
    }
    function _e() {
      console.log("THREE.WebGLRenderer: Context Restored."), P = !1;
      const S = Ke.autoReset, I = ge.enabled, z = ge.autoUpdate, H = ge.needsUpdate, N = ge.type;
      pe(), Ke.autoReset = S, ge.enabled = I, ge.autoUpdate = z, ge.needsUpdate = H, ge.type = N;
    }
    function me(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function Ne(S) {
      const I = S.target;
      I.removeEventListener("dispose", Ne), at(I);
    }
    function at(S) {
      Mt(S), ye.remove(S);
    }
    function Mt(S) {
      const I = ye.get(S).programs;
      I !== void 0 && (I.forEach(function(z) {
        re.releaseProgram(z);
      }), S.isShaderMaterial && re.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, I, z, H, N, oe) {
      I === null && (I = et);
      const fe = N.isMesh && N.matrixWorld.determinant() < 0, xe = gl(S, I, z, H, N);
      Ee.setMaterial(H, fe);
      let Me = z.index, Ie = 1;
      if (H.wireframe === !0) {
        if (Me = te.getWireframeAttribute(z), Me === void 0) return;
        Ie = 2;
      }
      const De = z.drawRange, be = z.attributes.position;
      let We = De.start * Ie, qe = (De.start + De.count) * Ie;
      oe !== null && (We = Math.max(We, oe.start * Ie), qe = Math.min(qe, (oe.start + oe.count) * Ie)), Me !== null ? (We = Math.max(We, 0), qe = Math.min(qe, Me.count)) : be != null && (We = Math.max(We, 0), qe = Math.min(qe, be.count));
      const ht = qe - We;
      if (ht < 0 || ht === 1 / 0) return;
      Qe.setup(N, H, xe, z, Me);
      let ot, Ye = he;
      if (Me !== null && (ot = K.get(Me), Ye = He, Ye.setIndex(ot)), N.isMesh)
        H.wireframe === !0 ? (Ee.setLineWidth(H.wireframeLinewidth * ze()), Ye.setMode(R.LINES)) : Ye.setMode(R.TRIANGLES);
      else if (N.isLine) {
        let we = H.linewidth;
        we === void 0 && (we = 1), Ee.setLineWidth(we * ze()), N.isLineSegments ? Ye.setMode(R.LINES) : N.isLineLoop ? Ye.setMode(R.LINE_LOOP) : Ye.setMode(R.LINE_STRIP);
      } else N.isPoints ? Ye.setMode(R.POINTS) : N.isSprite && Ye.setMode(R.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          Jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Ye.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (ke.get("WEBGL_multi_draw"))
          Ye.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const we = N._multiDrawStarts, xt = N._multiDrawCounts, Ze = N._multiDrawCount, jt = Me ? K.get(Me).bytesPerElement : 1, ai = ye.get(H).currentProgram.getUniforms();
          for (let Ot = 0; Ot < Ze; Ot++)
            ai.setValue(R, "_gl_DrawID", Ot), Ye.render(we[Ot] / jt, xt[Ot]);
        }
      else if (N.isInstancedMesh)
        Ye.renderInstances(We, ht, N.count);
      else if (z.isInstancedBufferGeometry) {
        const we = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, xt = Math.min(z.instanceCount, we);
        Ye.renderInstances(We, ht, xt);
      } else
        Ye.render(We, ht);
    };
    function je(S, I, z) {
      S.transparent === !0 && S.side === Mn && S.forceSinglePass === !1 ? (S.side = Nt, S.needsUpdate = !0, _r(S, I, z), S.side = zn, S.needsUpdate = !0, _r(S, I, z), S.side = Mn) : _r(S, I, z);
    }
    this.compile = function(S, I, z = null) {
      z === null && (z = S), d = Le.get(z), d.init(I), y.push(d), z.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (d.pushLight(N), N.castShadow && d.pushShadow(N));
      }), S !== z && S.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (d.pushLight(N), N.castShadow && d.pushShadow(N));
      }), d.setupLights();
      const H = /* @__PURE__ */ new Set();
      return S.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const oe = N.material;
        if (oe)
          if (Array.isArray(oe))
            for (let fe = 0; fe < oe.length; fe++) {
              const xe = oe[fe];
              je(xe, z, N), H.add(xe);
            }
          else
            je(oe, z, N), H.add(oe);
      }), d = y.pop(), H;
    }, this.compileAsync = function(S, I, z = null) {
      const H = this.compile(S, I, z);
      return new Promise((N) => {
        function oe() {
          if (H.forEach(function(fe) {
            ye.get(fe).currentProgram.isReady() && H.delete(fe);
          }), H.size === 0) {
            N(S);
            return;
          }
          setTimeout(oe, 10);
        }
        ke.get("KHR_parallel_shader_compile") !== null ? oe() : setTimeout(oe, 10);
      });
    };
    let Zt = null;
    function dn(S) {
      Zt && Zt(S);
    }
    function to() {
      Hn.stop();
    }
    function no() {
      Hn.start();
    }
    const Hn = new cl();
    Hn.setAnimationLoop(dn), typeof self < "u" && Hn.setContext(self), this.setAnimationLoop = function(S) {
      Zt = S, X.setAnimationLoop(S), S === null ? Hn.stop() : Hn.start();
    }, X.addEventListener("sessionstart", to), X.addEventListener("sessionend", no), this.render = function(S, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === !0) return;
      if (S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), X.enabled === !0 && X.isPresenting === !0 && (X.cameraAutoUpdate === !0 && X.updateCamera(I), I = X.getCamera()), S.isScene === !0 && S.onBeforeRender(x, S, I, U), d = Le.get(S, y.length), d.init(I), y.push(d), ve.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), O.setFromProjectionMatrix(ve), J = this.localClippingEnabled, Y = se.init(this.clippingPlanes, J), m = le.get(S, A.length), m.init(), A.push(m), X.enabled === !0 && X.isPresenting === !0) {
        const oe = x.xr.getDepthSensingMesh();
        oe !== null && ps(oe, I, -1 / 0, x.sortObjects);
      }
      ps(S, I, 0, x.sortObjects), m.finish(), x.sortObjects === !0 && m.sort(de, G), tt = X.enabled === !1 || X.isPresenting === !1 || X.hasDepthSensing() === !1, tt && Ce.addToRenderList(m, S), this.info.render.frame++, Y === !0 && se.beginShadows();
      const z = d.state.shadowsArray;
      ge.render(z, S, I), Y === !0 && se.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const H = m.opaque, N = m.transmissive;
      if (d.setupLights(), I.isArrayCamera) {
        const oe = I.cameras;
        if (N.length > 0)
          for (let fe = 0, xe = oe.length; fe < xe; fe++) {
            const Me = oe[fe];
            ro(H, N, S, Me);
          }
        tt && Ce.render(S);
        for (let fe = 0, xe = oe.length; fe < xe; fe++) {
          const Me = oe[fe];
          io(m, S, Me, Me.viewport);
        }
      } else
        N.length > 0 && ro(H, N, S, I), tt && Ce.render(S), io(m, S, I);
      U !== null && w === 0 && (T.updateMultisampleRenderTarget(U), T.updateRenderTargetMipmap(U)), S.isScene === !0 && S.onAfterRender(x, S, I), Qe.resetDefaultState(), E = -1, M = null, y.pop(), y.length > 0 ? (d = y[y.length - 1], Y === !0 && se.setGlobalState(x.clippingPlanes, d.state.camera)) : d = null, A.pop(), A.length > 0 ? m = A[A.length - 1] : m = null;
    };
    function ps(S, I, z, H) {
      if (S.visible === !1) return;
      if (S.layers.test(I.layers)) {
        if (S.isGroup)
          z = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(I);
        else if (S.isLight)
          d.pushLight(S), S.castShadow && d.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || O.intersectsSprite(S)) {
            H && Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);
            const fe = b.update(S), xe = S.material;
            xe.visible && m.push(S, fe, xe, z, Se.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || O.intersectsObject(S))) {
          const fe = b.update(S), xe = S.material;
          if (H && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Se.copy(S.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), Se.copy(fe.boundingSphere.center)), Se.applyMatrix4(S.matrixWorld).applyMatrix4(ve)), Array.isArray(xe)) {
            const Me = fe.groups;
            for (let Ie = 0, De = Me.length; Ie < De; Ie++) {
              const be = Me[Ie], We = xe[be.materialIndex];
              We && We.visible && m.push(S, fe, We, z, Se.z, be);
            }
          } else xe.visible && m.push(S, fe, xe, z, Se.z, null);
        }
      }
      const oe = S.children;
      for (let fe = 0, xe = oe.length; fe < xe; fe++)
        ps(oe[fe], I, z, H);
    }
    function io(S, I, z, H) {
      const N = S.opaque, oe = S.transmissive, fe = S.transparent;
      d.setupLightsView(z), Y === !0 && se.setGlobalState(x.clippingPlanes, z), H && Ee.viewport(D.copy(H)), N.length > 0 && mr(N, I, z), oe.length > 0 && mr(oe, I, z), fe.length > 0 && mr(fe, I, z), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function ro(S, I, z, H) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[H.id] === void 0 && (d.state.transmissionRenderTarget[H.id] = new ii(1, 1, {
        generateMipmaps: !0,
        type: ke.has("EXT_color_buffer_half_float") || ke.has("EXT_color_buffer_float") ? ur : An,
        minFilter: ti,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Xe.workingColorSpace
      }));
      const oe = d.state.transmissionRenderTarget[H.id], fe = H.viewport || D;
      oe.setSize(fe.z * x.transmissionResolutionScale, fe.w * x.transmissionResolutionScale);
      const xe = x.getRenderTarget();
      x.setRenderTarget(oe), x.getClearColor(j), ne = x.getClearAlpha(), ne < 1 && x.setClearColor(16777215, 0.5), x.clear(), tt && Ce.render(z);
      const Me = x.toneMapping;
      x.toneMapping = Bn;
      const Ie = H.viewport;
      if (H.viewport !== void 0 && (H.viewport = void 0), d.setupLightsView(H), Y === !0 && se.setGlobalState(x.clippingPlanes, H), mr(S, z, H), T.updateMultisampleRenderTarget(oe), T.updateRenderTargetMipmap(oe), ke.has("WEBGL_multisampled_render_to_texture") === !1) {
        let De = !1;
        for (let be = 0, We = I.length; be < We; be++) {
          const qe = I[be], ht = qe.object, ot = qe.geometry, Ye = qe.material, we = qe.group;
          if (Ye.side === Mn && ht.layers.test(H.layers)) {
            const xt = Ye.side;
            Ye.side = Nt, Ye.needsUpdate = !0, so(ht, z, H, ot, Ye, we), Ye.side = xt, Ye.needsUpdate = !0, De = !0;
          }
        }
        De === !0 && (T.updateMultisampleRenderTarget(oe), T.updateRenderTargetMipmap(oe));
      }
      x.setRenderTarget(xe), x.setClearColor(j, ne), Ie !== void 0 && (H.viewport = Ie), x.toneMapping = Me;
    }
    function mr(S, I, z) {
      const H = I.isScene === !0 ? I.overrideMaterial : null;
      for (let N = 0, oe = S.length; N < oe; N++) {
        const fe = S[N], xe = fe.object, Me = fe.geometry, Ie = fe.group;
        let De = fe.material;
        De.allowOverride === !0 && H !== null && (De = H), xe.layers.test(z.layers) && so(xe, I, z, Me, De, Ie);
      }
    }
    function so(S, I, z, H, N, oe) {
      S.onBeforeRender(x, I, z, H, N, oe), S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), N.onBeforeRender(x, I, z, H, S, oe), N.transparent === !0 && N.side === Mn && N.forceSinglePass === !1 ? (N.side = Nt, N.needsUpdate = !0, x.renderBufferDirect(z, I, H, N, S, oe), N.side = zn, N.needsUpdate = !0, x.renderBufferDirect(z, I, H, N, S, oe), N.side = Mn) : x.renderBufferDirect(z, I, H, N, S, oe), S.onAfterRender(x, I, z, H, N, oe);
    }
    function _r(S, I, z) {
      I.isScene !== !0 && (I = et);
      const H = ye.get(S), N = d.state.lights, oe = d.state.shadowsArray, fe = N.state.version, xe = re.getParameters(S, N.state, oe, I, z), Me = re.getProgramCacheKey(xe);
      let Ie = H.programs;
      H.environment = S.isMeshStandardMaterial ? I.environment : null, H.fog = I.fog, H.envMap = (S.isMeshStandardMaterial ? B : v).get(S.envMap || H.environment), H.envMapRotation = H.environment !== null && S.envMap === null ? I.environmentRotation : S.envMapRotation, Ie === void 0 && (S.addEventListener("dispose", Ne), Ie = /* @__PURE__ */ new Map(), H.programs = Ie);
      let De = Ie.get(Me);
      if (De !== void 0) {
        if (H.currentProgram === De && H.lightsStateVersion === fe)
          return oo(S, xe), De;
      } else
        xe.uniforms = re.getUniforms(S), S.onBeforeCompile(xe, x), De = re.acquireProgram(xe, Me), Ie.set(Me, De), H.uniforms = xe.uniforms;
      const be = H.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (be.clippingPlanes = se.uniform), oo(S, xe), H.needsLights = xl(S), H.lightsStateVersion = fe, H.needsLights && (be.ambientLightColor.value = N.state.ambient, be.lightProbe.value = N.state.probe, be.directionalLights.value = N.state.directional, be.directionalLightShadows.value = N.state.directionalShadow, be.spotLights.value = N.state.spot, be.spotLightShadows.value = N.state.spotShadow, be.rectAreaLights.value = N.state.rectArea, be.ltc_1.value = N.state.rectAreaLTC1, be.ltc_2.value = N.state.rectAreaLTC2, be.pointLights.value = N.state.point, be.pointLightShadows.value = N.state.pointShadow, be.hemisphereLights.value = N.state.hemi, be.directionalShadowMap.value = N.state.directionalShadowMap, be.directionalShadowMatrix.value = N.state.directionalShadowMatrix, be.spotShadowMap.value = N.state.spotShadowMap, be.spotLightMatrix.value = N.state.spotLightMatrix, be.spotLightMap.value = N.state.spotLightMap, be.pointShadowMap.value = N.state.pointShadowMap, be.pointShadowMatrix.value = N.state.pointShadowMatrix), H.currentProgram = De, H.uniformsList = null, De;
    }
    function ao(S) {
      if (S.uniformsList === null) {
        const I = S.currentProgram.getUniforms();
        S.uniformsList = Qr.seqWithValue(I.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function oo(S, I) {
      const z = ye.get(S);
      z.outputColorSpace = I.outputColorSpace, z.batching = I.batching, z.batchingColor = I.batchingColor, z.instancing = I.instancing, z.instancingColor = I.instancingColor, z.instancingMorph = I.instancingMorph, z.skinning = I.skinning, z.morphTargets = I.morphTargets, z.morphNormals = I.morphNormals, z.morphColors = I.morphColors, z.morphTargetsCount = I.morphTargetsCount, z.numClippingPlanes = I.numClippingPlanes, z.numIntersection = I.numClipIntersection, z.vertexAlphas = I.vertexAlphas, z.vertexTangents = I.vertexTangents, z.toneMapping = I.toneMapping;
    }
    function gl(S, I, z, H, N) {
      I.isScene !== !0 && (I = et), T.resetTextureUnits();
      const oe = I.fog, fe = H.isMeshStandardMaterial ? I.environment : null, xe = U === null ? x.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : Ni, Me = (H.isMeshStandardMaterial ? B : v).get(H.envMap || fe), Ie = H.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, De = !!z.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), be = !!z.morphAttributes.position, We = !!z.morphAttributes.normal, qe = !!z.morphAttributes.color;
      let ht = Bn;
      H.toneMapped && (U === null || U.isXRRenderTarget === !0) && (ht = x.toneMapping);
      const ot = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Ye = ot !== void 0 ? ot.length : 0, we = ye.get(H), xt = d.state.lights;
      if (Y === !0 && (J === !0 || S !== M)) {
        const wt = S === M && H.id === E;
        se.setState(H, S, wt);
      }
      let Ze = !1;
      H.version === we.__version ? (we.needsLights && we.lightsStateVersion !== xt.state.version || we.outputColorSpace !== xe || N.isBatchedMesh && we.batching === !1 || !N.isBatchedMesh && we.batching === !0 || N.isBatchedMesh && we.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && we.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && we.instancing === !1 || !N.isInstancedMesh && we.instancing === !0 || N.isSkinnedMesh && we.skinning === !1 || !N.isSkinnedMesh && we.skinning === !0 || N.isInstancedMesh && we.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && we.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && we.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && we.instancingMorph === !1 && N.morphTexture !== null || we.envMap !== Me || H.fog === !0 && we.fog !== oe || we.numClippingPlanes !== void 0 && (we.numClippingPlanes !== se.numPlanes || we.numIntersection !== se.numIntersection) || we.vertexAlphas !== Ie || we.vertexTangents !== De || we.morphTargets !== be || we.morphNormals !== We || we.morphColors !== qe || we.toneMapping !== ht || we.morphTargetsCount !== Ye) && (Ze = !0) : (Ze = !0, we.__version = H.version);
      let jt = we.currentProgram;
      Ze === !0 && (jt = _r(H, I, N));
      let ai = !1, Ot = !1, Hi = !1;
      const nt = jt.getUniforms(), Wt = we.uniforms;
      if (Ee.useProgram(jt.program) && (ai = !0, Ot = !0, Hi = !0), H.id !== E && (E = H.id, Ot = !0), ai || M !== S) {
        Ee.buffers.depth.getReversed() ? (ee.copy(S.projectionMatrix), Mu(ee), Eu(ee), nt.setValue(R, "projectionMatrix", ee)) : nt.setValue(R, "projectionMatrix", S.projectionMatrix), nt.setValue(R, "viewMatrix", S.matrixWorldInverse);
        const Pt = nt.map.cameraPosition;
        Pt !== void 0 && Pt.setValue(R, Ae.setFromMatrixPosition(S.matrixWorld)), Ge.logarithmicDepthBuffer && nt.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && nt.setValue(R, "isOrthographic", S.isOrthographicCamera === !0), M !== S && (M = S, Ot = !0, Hi = !0);
      }
      if (N.isSkinnedMesh) {
        nt.setOptional(R, N, "bindMatrix"), nt.setOptional(R, N, "bindMatrixInverse");
        const wt = N.skeleton;
        wt && (wt.boneTexture === null && wt.computeBoneTexture(), nt.setValue(R, "boneTexture", wt.boneTexture, T));
      }
      N.isBatchedMesh && (nt.setOptional(R, N, "batchingTexture"), nt.setValue(R, "batchingTexture", N._matricesTexture, T), nt.setOptional(R, N, "batchingIdTexture"), nt.setValue(R, "batchingIdTexture", N._indirectTexture, T), nt.setOptional(R, N, "batchingColorTexture"), N._colorsTexture !== null && nt.setValue(R, "batchingColorTexture", N._colorsTexture, T));
      const Xt = z.morphAttributes;
      if ((Xt.position !== void 0 || Xt.normal !== void 0 || Xt.color !== void 0) && Te.update(N, z, jt), (Ot || we.receiveShadow !== N.receiveShadow) && (we.receiveShadow = N.receiveShadow, nt.setValue(R, "receiveShadow", N.receiveShadow)), H.isMeshGouraudMaterial && H.envMap !== null && (Wt.envMap.value = Me, Wt.flipEnvMap.value = Me.isCubeTexture && Me.isRenderTargetTexture === !1 ? -1 : 1), H.isMeshStandardMaterial && H.envMap === null && I.environment !== null && (Wt.envMapIntensity.value = I.environmentIntensity), Ot && (nt.setValue(R, "toneMappingExposure", x.toneMappingExposure), we.needsLights && vl(Wt, Hi), oe && H.fog === !0 && ae.refreshFogUniforms(Wt, oe), ae.refreshMaterialUniforms(Wt, H, k, ce, d.state.transmissionRenderTarget[S.id]), Qr.upload(R, ao(we), Wt, T)), H.isShaderMaterial && H.uniformsNeedUpdate === !0 && (Qr.upload(R, ao(we), Wt, T), H.uniformsNeedUpdate = !1), H.isSpriteMaterial && nt.setValue(R, "center", N.center), nt.setValue(R, "modelViewMatrix", N.modelViewMatrix), nt.setValue(R, "normalMatrix", N.normalMatrix), nt.setValue(R, "modelMatrix", N.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) {
        const wt = H.uniformsGroups;
        for (let Pt = 0, ms = wt.length; Pt < ms; Pt++) {
          const Vn = wt[Pt];
          L.update(Vn, jt), L.bind(Vn, jt);
        }
      }
      return jt;
    }
    function vl(S, I) {
      S.ambientLightColor.needsUpdate = I, S.lightProbe.needsUpdate = I, S.directionalLights.needsUpdate = I, S.directionalLightShadows.needsUpdate = I, S.pointLights.needsUpdate = I, S.pointLightShadows.needsUpdate = I, S.spotLights.needsUpdate = I, S.spotLightShadows.needsUpdate = I, S.rectAreaLights.needsUpdate = I, S.hemisphereLights.needsUpdate = I;
    }
    function xl(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(S, I, z) {
      const H = ye.get(S);
      H.__autoAllocateDepthBuffer = S.resolveDepthBuffer === !1, H.__autoAllocateDepthBuffer === !1 && (H.__useRenderToTexture = !1), ye.get(S.texture).__webglTexture = I, ye.get(S.depthTexture).__webglTexture = H.__autoAllocateDepthBuffer ? void 0 : z, H.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(S, I) {
      const z = ye.get(S);
      z.__webglFramebuffer = I, z.__useDefaultFramebuffer = I === void 0;
    };
    const Sl = R.createFramebuffer();
    this.setRenderTarget = function(S, I = 0, z = 0) {
      U = S, C = I, w = z;
      let H = !0, N = null, oe = !1, fe = !1;
      if (S) {
        const Me = ye.get(S);
        if (Me.__useDefaultFramebuffer !== void 0)
          Ee.bindFramebuffer(R.FRAMEBUFFER, null), H = !1;
        else if (Me.__webglFramebuffer === void 0)
          T.setupRenderTarget(S);
        else if (Me.__hasExternalTextures)
          T.rebindTextures(S, ye.get(S.texture).__webglTexture, ye.get(S.depthTexture).__webglTexture);
        else if (S.depthBuffer) {
          const be = S.depthTexture;
          if (Me.__boundDepthTexture !== be) {
            if (be !== null && ye.has(be) && (S.width !== be.image.width || S.height !== be.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            T.setupDepthRenderbuffer(S);
          }
        }
        const Ie = S.texture;
        (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (fe = !0);
        const De = ye.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(De[I]) ? N = De[I][z] : N = De[I], oe = !0) : S.samples > 0 && T.useMultisampledRTT(S) === !1 ? N = ye.get(S).__webglMultisampledFramebuffer : Array.isArray(De) ? N = De[z] : N = De, D.copy(S.viewport), Z.copy(S.scissor), V = S.scissorTest;
      } else
        D.copy(W).multiplyScalar(k).floor(), Z.copy(ie).multiplyScalar(k).floor(), V = $;
      if (z !== 0 && (N = Sl), Ee.bindFramebuffer(R.FRAMEBUFFER, N) && H && Ee.drawBuffers(S, N), Ee.viewport(D), Ee.scissor(Z), Ee.setScissorTest(V), oe) {
        const Me = ye.get(S.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + I, Me.__webglTexture, z);
      } else if (fe) {
        const Me = ye.get(S.texture), Ie = I;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, Me.__webglTexture, z, Ie);
      } else if (S !== null && z !== 0) {
        const Me = ye.get(S.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Me.__webglTexture, z);
      }
      E = -1;
    }, this.readRenderTargetPixels = function(S, I, z, H, N, oe, fe) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let xe = ye.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && fe !== void 0 && (xe = xe[fe]), xe) {
        Ee.bindFramebuffer(R.FRAMEBUFFER, xe);
        try {
          const Me = S.texture, Ie = Me.format, De = Me.type;
          if (!Ge.textureFormatReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ge.textureTypeReadable(De)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= S.width - H && z >= 0 && z <= S.height - N && R.readPixels(I, z, H, N, Be.convert(Ie), Be.convert(De), oe);
        } finally {
          const Me = U !== null ? ye.get(U).__webglFramebuffer : null;
          Ee.bindFramebuffer(R.FRAMEBUFFER, Me);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(S, I, z, H, N, oe, fe) {
      if (!(S && S.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let xe = ye.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && fe !== void 0 && (xe = xe[fe]), xe)
        if (I >= 0 && I <= S.width - H && z >= 0 && z <= S.height - N) {
          Ee.bindFramebuffer(R.FRAMEBUFFER, xe);
          const Me = S.texture, Ie = Me.format, De = Me.type;
          if (!Ge.textureFormatReadable(Ie))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Ge.textureTypeReadable(De))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const be = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, be), R.bufferData(R.PIXEL_PACK_BUFFER, oe.byteLength, R.STREAM_READ), R.readPixels(I, z, H, N, Be.convert(Ie), Be.convert(De), 0);
          const We = U !== null ? ye.get(U).__webglFramebuffer : null;
          Ee.bindFramebuffer(R.FRAMEBUFFER, We);
          const qe = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await Su(R, qe, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, be), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, oe), R.deleteBuffer(be), R.deleteSync(qe), oe;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(S, I = null, z = 0) {
      const H = Math.pow(2, -z), N = Math.floor(S.image.width * H), oe = Math.floor(S.image.height * H), fe = I !== null ? I.x : 0, xe = I !== null ? I.y : 0;
      T.setTexture2D(S, 0), R.copyTexSubImage2D(R.TEXTURE_2D, z, 0, 0, fe, xe, N, oe), Ee.unbindTexture();
    };
    const Ml = R.createFramebuffer(), El = R.createFramebuffer();
    this.copyTextureToTexture = function(S, I, z = null, H = null, N = 0, oe = null) {
      oe === null && (N !== 0 ? (Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), oe = N, N = 0) : oe = 0);
      let fe, xe, Me, Ie, De, be, We, qe, ht;
      const ot = S.isCompressedTexture ? S.mipmaps[oe] : S.image;
      if (z !== null)
        fe = z.max.x - z.min.x, xe = z.max.y - z.min.y, Me = z.isBox3 ? z.max.z - z.min.z : 1, Ie = z.min.x, De = z.min.y, be = z.isBox3 ? z.min.z : 0;
      else {
        const Xt = Math.pow(2, -N);
        fe = Math.floor(ot.width * Xt), xe = Math.floor(ot.height * Xt), S.isDataArrayTexture ? Me = ot.depth : S.isData3DTexture ? Me = Math.floor(ot.depth * Xt) : Me = 1, Ie = 0, De = 0, be = 0;
      }
      H !== null ? (We = H.x, qe = H.y, ht = H.z) : (We = 0, qe = 0, ht = 0);
      const Ye = Be.convert(I.format), we = Be.convert(I.type);
      let xt;
      I.isData3DTexture ? (T.setTexture3D(I, 0), xt = R.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (T.setTexture2DArray(I, 0), xt = R.TEXTURE_2D_ARRAY) : (T.setTexture2D(I, 0), xt = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, I.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Ze = R.getParameter(R.UNPACK_ROW_LENGTH), jt = R.getParameter(R.UNPACK_IMAGE_HEIGHT), ai = R.getParameter(R.UNPACK_SKIP_PIXELS), Ot = R.getParameter(R.UNPACK_SKIP_ROWS), Hi = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ot.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ie), R.pixelStorei(R.UNPACK_SKIP_ROWS, De), R.pixelStorei(R.UNPACK_SKIP_IMAGES, be);
      const nt = S.isDataArrayTexture || S.isData3DTexture, Wt = I.isDataArrayTexture || I.isData3DTexture;
      if (S.isDepthTexture) {
        const Xt = ye.get(S), wt = ye.get(I), Pt = ye.get(Xt.__renderTarget), ms = ye.get(wt.__renderTarget);
        Ee.bindFramebuffer(R.READ_FRAMEBUFFER, Pt.__webglFramebuffer), Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER, ms.__webglFramebuffer);
        for (let Vn = 0; Vn < Me; Vn++)
          nt && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, ye.get(S).__webglTexture, N, be + Vn), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, ye.get(I).__webglTexture, oe, ht + Vn)), R.blitFramebuffer(Ie, De, fe, xe, We, qe, fe, xe, R.DEPTH_BUFFER_BIT, R.NEAREST);
        Ee.bindFramebuffer(R.READ_FRAMEBUFFER, null), Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || S.isRenderTargetTexture || ye.has(S)) {
        const Xt = ye.get(S), wt = ye.get(I);
        Ee.bindFramebuffer(R.READ_FRAMEBUFFER, Ml), Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER, El);
        for (let Pt = 0; Pt < Me; Pt++)
          nt ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Xt.__webglTexture, N, be + Pt) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Xt.__webglTexture, N), Wt ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, wt.__webglTexture, oe, ht + Pt) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, wt.__webglTexture, oe), N !== 0 ? R.blitFramebuffer(Ie, De, fe, xe, We, qe, fe, xe, R.COLOR_BUFFER_BIT, R.NEAREST) : Wt ? R.copyTexSubImage3D(xt, oe, We, qe, ht + Pt, Ie, De, fe, xe) : R.copyTexSubImage2D(xt, oe, We, qe, Ie, De, fe, xe);
        Ee.bindFramebuffer(R.READ_FRAMEBUFFER, null), Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else
        Wt ? S.isDataTexture || S.isData3DTexture ? R.texSubImage3D(xt, oe, We, qe, ht, fe, xe, Me, Ye, we, ot.data) : I.isCompressedArrayTexture ? R.compressedTexSubImage3D(xt, oe, We, qe, ht, fe, xe, Me, Ye, ot.data) : R.texSubImage3D(xt, oe, We, qe, ht, fe, xe, Me, Ye, we, ot) : S.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, oe, We, qe, fe, xe, Ye, we, ot.data) : S.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, oe, We, qe, ot.width, ot.height, Ye, ot.data) : R.texSubImage2D(R.TEXTURE_2D, oe, We, qe, fe, xe, Ye, we, ot);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, Ze), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, jt), R.pixelStorei(R.UNPACK_SKIP_PIXELS, ai), R.pixelStorei(R.UNPACK_SKIP_ROWS, Ot), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Hi), oe === 0 && I.generateMipmaps && R.generateMipmap(xt), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, I, z = null, H = null, N = 0) {
      return Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(S, I, z, H, N);
    }, this.initRenderTarget = function(S) {
      ye.get(S).__webglFramebuffer === void 0 && T.setupRenderTarget(S);
    }, this.initTexture = function(S) {
      S.isCubeTexture ? T.setTextureCube(S, 0) : S.isData3DTexture ? T.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? T.setTexture2DArray(S, 0) : T.setTexture2D(S, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      C = 0, w = 0, U = null, Ee.reset(), Qe.reset();
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
    return cn;
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
    t.drawingBufferColorSpace = Xe._getDrawingBufferColorSpace(e), t.unpackColorSpace = Xe._getUnpackColorSpace();
  }
}
const qm = {
  lightPositionX: -2,
  lightPositionY: 6,
  lightPositionZ: -4,
  lightCameraSize: 4.5,
  lightCameraBias: 5e-3,
  lightCameraNear: 3,
  lightCameraFar: 16
}, Qi = ri()(
  lr((i) => ({
    ...qm
  }))
), Zm = {
  u_blueNoiseTexture: { value: new St() },
  u_blueNoiseTexelSize: { value: new Re() },
  u_blueNoiseCoordOffset: { value: new Re() }
}, jm = {
  u_lightPosition: {
    value: new F(Qi.getState().lightPositionX, Qi.getState().lightPositionY, Qi.getState().lightPositionZ)
  },
  u_goboTexture: { value: null },
  u_goboIntensity: { value: 0.4 },
  u_infoTexture: { value: new as() },
  u_infoTextureLinear: { value: new as() },
  u_endAnimationRatio: { value: 0 }
}, $m = {
  u_time: { value: 0 },
  u_deltaTime: { value: 1 },
  u_resolution: { value: new Re() },
  u_viewportResolution: { value: new Re() },
  u_bgColor1: { value: new Pe("#ffffff").convertSRGBToLinear() },
  u_bgColor2: { value: new Pe("#d0d0d0").convertSRGBToLinear() },
  ...Zm,
  ...jm
}, bn = ri()(
  lr(() => ({
    ...$m
  }))
), sn = (i) => bn.setState((e) => ({ ...e, ...i })), Km = (i, e) => {
  sn({ u_time: { value: i } }), sn({ u_deltaTime: { value: e } });
}, Jm = {
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
}, Tt = ri()(
  lr((i) => ({
    ...Jm,
    setProperty: (e) => i({ [e.propertyName]: e.value })
  }))
), V_ = (i) => {
  const e = i;
  for (const t of e)
    t.propertyName === "bgColor1" && sn({
      u_bgColor1: { value: new Pe(t.value).convertSRGBToLinear() }
    }), t.propertyName === "bgColor2" && sn({
      u_bgColor2: { value: new Pe(t.value).convertSRGBToLinear() }
    }), Tt.getState().setProperty(t);
}, Qm = {
  hasNotStarted: !0,
  isFree: !1,
  isResult: !1,
  isReplayResult: !1,
  isSuccessResult: !1,
  isFailResult: !1,
  isStopped: !1
}, hc = {
  flags: Qm,
  destroyCanvas: !1,
  animationTypeEnded: null,
  status: Lt.NOT_STARTED,
  result: it.NONE
}, rt = ri()(
  lr((i) => ({
    ...hc,
    setDestroyCanvas: (e) => i({ destroyCanvas: e }),
    setAnimationTypeEnded: (e) => i({ animationTypeEnded: e }),
    setWinAnimation: ({ isReplay: e, completeAnimationLevel: t }) => i((n) => {
      const r = n.status === Lt.NOT_STARTED, s = e && r ? it.REPLAY : it.COMPLETED, o = {
        ...n.flags,
        isReplayResult: s === it.REPLAY,
        isSuccessResult: !0
      };
      return { status: Lt.RESULT, result: s, completeAnimationLevel: t, flags: o };
    }),
    setAnimationState: (e) => i((t) => {
      let n, r = t.result;
      switch (e) {
        case "start": {
          n = Lt.FREE;
          break;
        }
        case "stop": {
          n = Lt.RESULT, r = it.STOP;
          break;
        }
        case "lose": {
          n = Lt.RESULT, r = it.FAILED;
          break;
        }
        default:
          n = Lt.NOT_STARTED;
      }
      const s = n === Lt.RESULT, o = {
        isResult: s,
        hasNotStarted: n === Lt.NOT_STARTED,
        isFree: n === Lt.FREE,
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
    reset: () => i((e) => ({ ...hc, status: e.status }))
  }))
), e_ = () => {
  rt.getState().setAnimationState("start");
}, t_ = () => {
  rt.getState().setAnimationState("stop");
}, G_ = () => {
  rt.getState().setAnimationState("lose");
}, k_ = ({ isReplay: i, completeAnimationLevel: e }) => rt.getState().setWinAnimation({ isReplay: i, completeAnimationLevel: e }), Gr = (i, e) => Math.hypot(i, e);
class n_ {
  constructor(e = 0, t = 0, n = 0) {
    Je(this, "id", 0);
    Je(this, "row", 0);
    Je(this, "col", 0);
    Je(this, "distance", Gr(this.row, this.col));
    Je(this, "MAX_DISTANCE", Gr(Ut, Ut));
    Je(this, "priority", this.MAX_DISTANCE - this.distance);
    Je(this, "isMain", this.row === 0 && this.col === 0);
    Je(this, "isBorder", Math.abs(this.row) === 2 || Math.abs(this.col) === 2);
    Je(this, "isOccupied", !1);
    Je(this, "willBeOccupied", !1);
    Je(this, "activeRatio", 0);
    Je(this, "neighbours", null);
    Je(this, "reachableNeighbours", null);
    Je(this, "prioritySortedReachableNeighbours", null);
    Je(this, "randomDelay", Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5);
    Je(this, "loseAnimationPositionArray", []);
    Je(this, "loseAnimationOrientArray", []);
    this.id = e, this.row = t, this.col = n, this.distance = Gr(t, n), this.MAX_DISTANCE = Gr(Ut, Ut), this.priority = this.MAX_DISTANCE - this.distance, this.isMain = t === 0 && n === 0, this.isBorder = Math.abs(t) === 2 || Math.abs(n) === 2, this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0, this.neighbours = null, this.reachableNeighbours = null, this.prioritySortedReachableNeighbours = null, this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
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
const It = 5, xn = It + 2, Ut = Math.floor(It / 2), Qt = It * It, i_ = xn * xn;
let es = null, Sn = [];
const r_ = () => {
  function i() {
    Sn = Array.from(
      { length: It },
      (a, c) => Array.from({ length: It }, (l, u) => {
        const h = c - Ut, p = u - Ut;
        return new n_(c * It + u, h, p);
      })
    ), Sn.forEach(
      (a, c) => a.forEach((l, u) => {
        l.neighbours = n(c - Ut, u - Ut), l.init();
      })
    ), es = e(0, 0);
  }
  function e(a, c) {
    var l;
    return ((l = Sn[a + Ut]) == null ? void 0 : l[c + Ut]) || null;
  }
  function t() {
    const a = Sn.flat().filter((c) => !c.isOccupied);
    return a.length ? a[Math.floor(Math.random() * a.length)] : null;
  }
  function n(a, c) {
    return [-1, 0, 1].flatMap(
      (l) => [-1, 0, 1].map((u) => l === 0 && u === 0 ? null : e(a + l, c + u)).filter(Boolean)
    );
  }
  function r() {
    Sn.flat().forEach((a) => a.reset());
  }
  function s(a) {
    Sn.flat().forEach((c) => c.preUpdate(a));
  }
  function o(a) {
    Sn.flat().forEach((c) => c.update(a));
  }
  return {
    init: i,
    getTile: e,
    getRandomFreeTile: t,
    reset: r,
    preUpdate: s,
    update: o
  };
}, Qn = r_(), Fn = "/assets", fc = 1, s_ = [-20, 18, 20], a_ = [0, 0, 0], pc = Math.min(2, window.devicePixelRatio || 1), mc = 2560 * 1440, o_ = { antialias: !0, alpha: !1, powerPreference: "low-power" }, _c = Qt - 5, c_ = () => {
  let i = [], e = 0, t = null;
  function n(c, l) {
    i.push(async () => {
      let u = 0;
      const h = 3;
      for (; u < h; )
        try {
          const f = await (await fetch(c)).arrayBuffer(), _ = new Uint32Array(f, 0, 1)[0], g = JSON.parse(new TextDecoder().decode(new Uint8Array(f, 4, _))), { vertexCount: m, indexCount: d, attributes: A } = g;
          let y = 4 + _;
          const x = new an(), P = {};
          A.forEach((C) => {
            const { id: w, componentSize: U, storageType: E, needsPack: M, packedComponents: D } = C, Z = w === "indices" ? d : m, V = window[E], j = new V(f, y, Z * U), ne = V.BYTES_PER_ELEMENT;
            let q;
            M ? q = r(j, Z, U, D, E) : (P[w] = y, q = j), w === "indices" ? x.setIndex(new kt(q, 1)) : x.setAttribute(w, new kt(q, U)), y += Z * U * ne;
          }), l && l(x), a();
          break;
        } catch (p) {
          u++, u >= h ? console.error(`Tower animation | error loading buffer [%c${c}] after ${h} attempts, %O: `, "font-weight:900;", p) : (console.warn(`Tower animation | error loading buffer: ${c}, attempt ${u}/${h}, retrying...`, p), await new Promise((f) => setTimeout(f, 100)));
        }
    });
  }
  function r(c, l, u, h, p) {
    const f = h.length, _ = p.indexOf("Int") === 0, g = 1 << c.BYTES_PER_ELEMENT * 8, m = _ ? g * 0.5 : 0, d = 1 / g, A = new Float32Array(l * u);
    for (let y = 0, x = 0; y < l; y++)
      for (let P = 0; P < f; P++) {
        const { delta: C, from: w } = h[P];
        A[x] = (c[x] + m) * d * C + w, x++;
      }
    return A;
  }
  function s(c, l) {
    i.push(() => {
      new nd().load(
        c,
        (u) => {
          u && (u.minFilter = su, u.magFilter = Ht, u.generateMipmaps = !0, u.anisotropy = 1, u.flipY = !0, l == null || l(u), a());
        },
        void 0,
        (u) => console.error(`Tower animation | error loading texture [%c${c}] %O: `, "font-weight:900;", u)
      );
    });
  }
  function o(c) {
    e = 0, t = c, i == null || i.forEach((l) => l());
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
}, yn = c_();
class l_ {
  constructor() {
    Je(this, "PI", Math.PI);
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
const Ue = new l_(), u_ = () => {
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
function d_(i, e, t, n, r) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  function s(c, l, u, h, p) {
    const f = 3 * (u - l), _ = 3 * (h - u) - f;
    return (((p - l - f - _) * c + _) * c + f) * c + l;
  }
  function o(c, l, u, h = 1e-6) {
    let p = 0, f = 1, _ = c;
    for (; p < f; ) {
      const g = s(_, 0, l, u, 1);
      if (Math.abs(g - c) < h)
        return _;
      g < c ? p = _ : f = _, _ = (p + f) / 2;
    }
    return _;
  }
  const a = o(i, e, n);
  return s(a, 0, t, r, 1);
}
function yi(i) {
  return d_(i, 0.3, 0, 0, 1);
}
const kr = u_();
var Wr = `#ifndef IS_BASE
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

}`, gc = `uniform vec3 u_lightPosition;
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

}`, vc = `#include <common>
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
let Xr, dt = 0;
const h_ = 6;
let Zi = 0, ji = 0, Ai = 0, wi = 0, Ri = 0, $i = 0, Ki = 1;
const f_ = () => {
  function i() {
    const a = ({ status: c, result: l, completeAnimationLevel: u }) => {
      c === Lt.RESULT && (l === it.COMPLETED || l === it.REPLAY) && e(u);
    };
    rt.subscribe((c) => c, a);
  }
  function e(a) {
    Xr = a;
  }
  function t() {
    dt = 0, Zi = 0, ji = 0, Ai = 0, wi = 0, Ri = 0, $i = 0, Ki = 1, Xr = null;
  }
  function n() {
    Ki = 1, Zi = 0, ji = 0, Ai = Ue.fit(dt, 0.2, 0.49, 0, 1.2), Ri = Ue.fit(dt, 0.45, 0.55, 0, 1), $i = Ue.fit(dt, 0.45, 0.7, 0, 1), wi = Ue.fit(dt, 0.55, 1, 0, 1);
  }
  function r() {
    Ki = 1.5, ji = 0, Zi = Ue.fit(dt, 0.1, 0.45, 0, 1), Ai = Ue.fit(dt, 0.15, 0.49, 0, 1.2), Ri = Ue.fit(dt, 0.45, 0.55, 0, 1), $i = Ue.fit(dt, 0.45, 0.7, 0, 1), wi = Ue.fit(dt, 0.55, 1, 0, 1);
  }
  function s() {
    Ki = 2, Zi = Ue.fit(dt, 0.1, 0.5, 0, 1), ji = Ue.fit(dt, 0.2, 0.51, 0, 1), Ai = Ue.fit(dt, 0.2, 0.49, 0, 1.2), Ri = Ue.fit(dt, 0.45, 0.55, 0, 1), $i = Ue.fit(dt, 0.45, 0.7, 0, 1), wi = Ue.fit(dt, 0.6, 1, 0, 1);
  }
  function o(a) {
    switch (dt += (Xr ? 1 : 0) * a / h_, dt = Ue.clamp(dt, 0, 1), Xr) {
      case Yr.ONE:
        n();
        break;
      case Yr.TWO:
        r();
        break;
      case Yr.THREE:
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
}, xc = f_();
let Zs = !1, Zn = 0;
const p_ = 2.5;
let er = 0, tr = 0;
const m_ = () => {
  function i() {
    const n = ({ status: r, result: s }) => {
      r === Lt.RESULT && s === it.STOP && (Zs = !0);
    };
    rt.subscribe((r) => r, n);
  }
  function e() {
    Zn = 0, tr = 0, er = 0, Zs = !1;
  }
  function t(n) {
    Zn += (Zs ? 1 : 0) * n / p_, Zn = Ue.clamp(Zn, 0, 1), er = Ue.fit(Zn, 0, 0.5, 0, 2.5), tr = Ue.fit(Zn, 0.4, 0.65, 0, 1), Zn >= 1 && (rt.getState().setAnimationTypeEnded("stop"), e());
  }
  return {
    init: i,
    update: t,
    resetRatios: e
  };
}, Sc = m_();
let js = !1, gn = 0;
const __ = 3.5;
let Ci = 0, ei = 0, us = 0, nr = 0;
const g_ = () => {
  function i() {
    const n = ({ status: r, result: s }) => {
      r === Lt.RESULT && s === it.FAILED && (js = !0);
    };
    rt.subscribe((r) => r, n);
  }
  function e() {
    gn = 0, Ci = 0, ei = 0, nr = 0, us = 0, js = !1;
  }
  function t(n) {
    gn += (js ? 1 : 0) * n / __, gn = Ue.clamp(gn, 0, 1), Ci = Ue.fit(gn, 0, 0.3, 0, 1), ei = Ue.fit(gn, 0.35, 0.65, 0, 1), us = Ue.fit(gn, 0.3, 0.55, 0, 2.5), nr = Ue.fit(gn, 0.6, 0.8, 0, 1), gn >= 1 && (rt.getState().setAnimationTypeEnded("lose"), e());
  }
  return {
    init: i,
    resetRatios: e,
    update: t
  };
}, Mc = g_(), Ec = {
  blocks: [],
  firstStartAnimationRatio: 0,
  lastSpawnedBlock: null,
  cycleIndex: 0,
  animationSpeedRatio: 0,
  previousSuccessBlocksAnimationRatio: 0,
  activeBlocksCount: 0
}, ln = ri()(
  lr((i) => ({
    ...Ec,
    incCycleIndex: () => i((e) => ({ cycleIndex: e.cycleIndex + 1 })),
    reset: () => i(Ec)
  }))
), yc = (i) => ln.setState((e) => {
  const t = e.blocks;
  return t.length ? { blocks: [i, ...t] } : { blocks: [i] };
}), Tc = (i) => ln.setState({ lastSpawnedBlock: i }), bc = ({ animationSpeedRatio: i, firstStartAnimationRatio: e, previousSuccessBlocksAnimationRatio: t }) => ln.setState((n) => ({
  animationSpeedRatio: i ?? n.animationSpeedRatio,
  firstStartAnimationRatio: e ?? n.firstStartAnimationRatio,
  previousSuccessBlocksAnimationRatio: t ?? n.previousSuccessBlocksAnimationRatio
})), v_ = Math.PI / 2, Ac = new F();
class x_ {
  constructor() {
    Je(this, "animation", 0);
    Je(this, "boardDir", new Re());
    Je(this, "boardPos", new Re());
    Je(this, "pos", new F());
    Je(this, "orient", new Gt());
    Je(this, "showRatio", 0);
    Je(this, "spinPivot", new F());
    Je(this, "spinOrient", new Gt());
    this.animation = 0, this.boardDir = new Re(), this.boardPos = new Re(), this.pos = new F(), this.orient = new Gt(), this.showRatio = 0, this.spinPivot = new F(), this.spinOrient = new Gt();
  }
  reset() {
    this.animation = 0, this.boardDir.set(0, 0), this.boardPos.set(0, 0), this.pos.set(0, 0, 0), this.orient.identity(), this.showRatio = 0, this.spinPivot.set(0, 0, 0), this.spinOrient.identity();
  }
  update(e) {
    this.pos.set(this.boardPos.x, 0, -this.boardPos.y), this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5), Ac.set(-this.boardDir.y, 0, -this.boardDir.x), this.spinOrient.setFromAxisAngle(Ac, this.animation * v_);
  }
}
const Ji = 2 * Qt, wc = Array.from({ length: Ji }).map((i) => new x_()), S_ = {
  animationTotalFrames: 0,
  baseMesh: void 0,
  blockList: wc,
  blockRenderList: wc,
  blocksMesh: void 0,
  directLight: void 0,
  heroLoseAnimationOrientArray: void 0,
  heroLoseAnimationPositionArray: void 0,
  infoTexture: void 0,
  infoTextureLinear: void 0,
  instanceColorArray: void 0,
  instanceIsActiveArray: void 0,
  instanceNextDirectionArray: void 0,
  instanceOrientArray: void 0,
  instancePosArray: void 0,
  instanceShowRatioArray: void 0,
  instanceSpinOrientArray: void 0,
  instanceSpinPivotArray: void 0,
  isShadowCameraHelperVisible: void 0,
  shadowCameraHelper: void 0,
  successColorRatio: 0
}, pt = ri()((i) => ({
  ...S_,
  setPreloadItems: (e) => i({ ...e }),
  setBaseMesh: (e) => i({ baseMesh: e }),
  setBlocksMesh: (e) => i({ blocksMesh: e }),
  setInstanceItems: (e) => i({ ...e })
})), Ti = new mt(), M_ = () => {
  const i = new Re(), e = new Re(), t = new F(), n = new F(), r = new Gt(), s = new Gt(), o = new Pe(), a = new Pe(), c = new Pe(), l = new Pe(), u = new Pe(), { animationTotalFrames: h, blockList: p, blockRenderList: f, heroLoseAnimationPositionArray: _, heroLoseAnimationOrientArray: g } = pt.getState();
  let m = rt.getState().result, d = Tt.getState(), A = bn.getState(), y = ln.getState();
  async function x() {
    yn.loadBuf(`${Fn}/BASE.buf`, (G) => {
      P(G);
    }), yn.loadBuf(`${Fn}/BOX.buf`, (G) => {
      C(G);
    }), yn.loadBuf(`${Fn}/LOSE_ANIMATION.buf`, (G) => {
      const { position: W, orient: ie } = (G == null ? void 0 : G.attributes) || {};
      pt.getState().setPreloadItems({
        animationTotalFrames: W.count / Qt,
        heroLoseAnimationPositionArray: W.array,
        heroLoseAnimationOrientArray: ie.array
      });
    }), yn.loadTexture(`${Fn}/gobo.jpg`, (G) => {
      G.flipY = !1, G.needsUpdate = !0, sn({ u_goboTexture: { value: G } });
    }), w();
  }
  function P(G) {
    const W = {
      ...A,
      ...ss.merge([ue.lights]),
      u_color: { value: new Pe(d.neutralColor) },
      u_blocksColor: { value: new Pe(d.neutralColor) },
      u_yDisplacement: { value: 0 },
      u_prevSuccessColor: {
        value: new Pe(d.neutralColor).convertSRGBToLinear()
      },
      u_successColor: { value: new Pe(d.successColor).convertSRGBToLinear() },
      u_successAnimationRatio: { value: 0 }
    }, ie = new bt({
      uniforms: W,
      vertexShader: Wr,
      fragmentShader: gc,
      lights: !0,
      transparent: !0,
      defines: { IS_BASE: !0 }
    }), $ = new Ct(G, ie);
    $.receiveShadow = $.castShadow = !0, $.frustumCulled = !1, $.customDepthMaterial = new bt({
      vertexShader: Wr,
      fragmentShader: vc,
      defines: { IS_DEPTH: !0, IS_BASE: !0 }
    }), pt.getState().setBaseMesh($), Ti.add($);
  }
  function C(G) {
    const W = new Qa();
    W.index = G.index, Object.keys(G.attributes).forEach((Y) => {
      W.setAttribute(Y, G.attributes[Y]);
    }), W.instanceCount = Ji;
    const ie = (Y, J) => {
      const ee = new Float32Array(Ji * J);
      return W.setAttribute(Y, new os(ee, J, J !== 4, 1).setUsage(gu)), ee;
    };
    pt.getState().setInstanceItems({
      instancePosArray: ie("instancePos", 3),
      instanceOrientArray: ie("instanceOrient", 4),
      instanceShowRatioArray: ie("instanceShowRatio", 1),
      instanceSpinPivotArray: ie("instanceSpinPivot", 3),
      instanceSpinOrientArray: ie("instanceSpinOrient", 4),
      instanceColorArray: ie("instanceColor", 3),
      instanceIsActiveArray: ie("instanceIsActive", 1),
      instanceNextDirectionArray: ie("instanceNextDirection", 2)
    });
    const $ = new bt({
      uniforms: {
        ...ss.merge([ue.lights]),
        ...A
      },
      vertexShader: Wr,
      fragmentShader: gc,
      lights: !0
    }), O = new Ct(W, $);
    O.frustumCulled = !1, O.castShadow = O.receiveShadow = !0, O.customDepthMaterial = new bt({
      uniforms: { ...A },
      vertexShader: Wr,
      fragmentShader: vc,
      defines: { IS_DEPTH: !0 }
    }), pt.getState().setBlocksMesh(O), Ti.add(O);
  }
  function w() {
    const G = ($) => A = $, W = ($) => d = $, ie = ($) => y = $;
    Tt.subscribe(($) => $, W, { fireImmediately: !0 }), ln.subscribe(($) => $, ie, { fireImmediately: !0 }), bn.subscribe(($) => $, G, { fireImmediately: !0 }), rt.subscribe(
      ($) => $.result,
      ($) => {
        m = $;
      },
      { fireImmediately: !0 }
    );
  }
  async function U() {
    const G = Qi.getState(), W = new ad(16777215, 1);
    W.castShadow = !0, W.shadow.camera.near = G.lightCameraNear, W.shadow.camera.far = G.lightCameraFar, W.shadow.camera.right = G.lightCameraSize, W.shadow.camera.left = -G.lightCameraSize, W.shadow.camera.top = G.lightCameraSize, W.shadow.camera.bottom = -G.lightCameraSize, W.shadow.bias = G.lightCameraBias, W.shadow.mapSize.width = 768, W.shadow.mapSize.height = 768, pt.setState({
      directLight: W,
      isShadowCameraHelperVisible: !0,
      shadowCameraHelper: new cd(W.shadow.camera)
    }), E();
    const ie = new Float32Array(i_ * 4);
    for (let Y = 0, J = 0; Y < xn; Y++)
      for (let ee = 0; ee < xn; ee++, J += 4)
        ie[J] = 0, ie[J + 1] = 0, ie[J + 2] = 1, ie[J + 3] = 1;
    const $ = new as(ie, xn, xn, Vt, nn), O = new as(ie, xn, xn, Vt, nn, Va, En, En, Ht, Ht, 0);
    return O.needsUpdate = !0, pt.setState({
      infoTexture: $,
      infoTextureLinear: O
    }), bn.setState({
      u_infoTexture: { value: $ },
      u_infoTextureLinear: { value: O }
    }), W;
  }
  function E() {
    Sn.forEach((G, W) => {
      G.forEach((ie, $) => {
        const O = W * It + $;
        ie.loseAnimationPositionArray = new Float32Array(h * 3), ie.loseAnimationOrientArray = new Float32Array(h * 4);
        for (let Y = 0; Y < h; Y++) {
          const J = (Y * Qt + O) * 3, ee = (Y * Qt + O) * 4;
          ie.loseAnimationPositionArray.set((_ == null ? void 0 : _.subarray(J, J + 3)) || [], Y * 3), ie.loseAnimationOrientArray.set((g == null ? void 0 : g.subarray(ee, ee + 4)) || [], Y * 4);
        }
      });
    });
  }
  function M() {
    pt.setState({ successColorRatio: 0 }), p.forEach((G) => G.reset());
  }
  function D(G) {
    const W = pt.getState().baseMesh;
    o.set(d.mainColor), a.set(d.successColor), c.set(d.failColor), l.set(d.neutralColor).convertSRGBToLinear(), u.copy(o), m === it.FAILED && ei > 0 && u.copy(c), (m === it.COMPLETED || m === it.REPLAY) && pt.setState(({ successColorRatio: ie }) => {
      const $ = Math.min(1, ie + 0.5 * G);
      return u.lerp(a, $), { successColorRatio: $ };
    }), m !== it.REPLAY && m !== it.COMPLETED && u.lerp(l, Ue.saturate(tr + nr)), u.convertSRGBToLinear(), l.convertSRGBToLinear(), a.convertSRGBToLinear();
    for (let ie = 0; ie < Ji; ie++) {
      const $ = pt.getState().instanceColorArray, O = pt.getState().instanceIsActiveArray, Y = ie < y.blocks.length + (y.lastSpawnedBlock ? 1 : 0), J = Y ? u : l;
      $ == null || $.set([J.r, J.g, J.b], ie * 3), O && (O[ie] = Y ? 1 : 0), pt.setState({ instanceColorArray: $, instanceIsActiveArray: O });
    }
    W && (W.material.uniforms.u_color.value.set(l).convertSRGBToLinear(), W.material.uniforms.u_blocksColor.value.copy(u), W.material.uniforms.u_successColor.value.copy(a), W.material.uniforms.u_prevSuccessColor.value.set(l).convertSRGBToLinear(), W.material.uniforms.u_prevSuccessColor.value.lerp(u.set(d.successColor), y.previousSuccessBlocksAnimationRatio), W.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear());
  }
  function Z() {
    const G = pt.getState().infoTexture, W = pt.getState().infoTextureLinear;
    Sn.forEach((ie) => {
      ie.forEach(($) => {
        const O = $.id % It + 1, J = ((Math.floor($.id / It) + 1) * xn + O) * 4;
        let ee = 0.5 * Ai * Ue.fit(Ri, 0, 0.1, 1, 0);
        ee += (ei > 0 ? 1 : 0) * Ue.fit(nr, 0, 0.1, 1, 0), ee += er * Ue.fit(tr, 0, 0.1, 1, 0), ee = Math.min(1, ee), G && (G.image.data[J] = $.activeRatio * (1 - ee), G.image.data[J + 1] = $.isOccupied || $.willBeOccupied ? 1 : 0, G.image.data[J + 2] = $.isMain ? 1 : 0, G.image.data[J + 3] = $.isBorder ? 1 : 0);
      });
    }), G && W && (W.needsUpdate = !0, W.needsUpdate = !0, pt.setState({ infoTexture: G, infoTextureLinear: W }));
  }
  function V() {
    var G, W, ie;
    if (y.lastSpawnedBlock) {
      const $ = p[y.lastSpawnedBlock.id];
      y.lastSpawnedBlock.currentTile && $.boardPos.set((G = y.lastSpawnedBlock.currentTile) == null ? void 0 : G.row, (W = y.lastSpawnedBlock.currentTile) == null ? void 0 : W.col), $.showRatio = yi(Ue.saturate(y.lastSpawnedBlock.spawnAnimationRatioUnclamped));
    }
    (ie = y.blocks) == null || ie.forEach(($) => {
      var Y, J, ee, ve;
      const O = p[$.id];
      O && (O.showRatio = yi(Ue.saturate($.spawnAnimationRatioUnclamped)), $ != null && $.currentTile && O.boardPos.set((Y = $.currentTile) == null ? void 0 : Y.row, (J = $.currentTile) == null ? void 0 : J.col), $.targetTile && O.boardDir.set($.targetTile.row - (((ee = $.currentTile) == null ? void 0 : ee.row) || 0), $.targetTile.col - (((ve = $.currentTile) == null ? void 0 : ve.col) || 0)), O.animation = $.hasAnimationEnded ? 0 : $.easedAnimationRatio);
    });
  }
  function j(G) {
    const { blocksMesh: W, instancePosArray: ie, instanceOrientArray: $, instanceSpinOrientArray: O, instanceSpinPivotArray: Y, instanceNextDirectionArray: J, instanceShowRatioArray: ee } = pt.getState();
    for (let Ae = 0; Ae < G; Ae++) {
      const Se = f[Ae];
      Se.pos.toArray(ie || [], Ae * 3), Se.orient.toArray($ || [], Ae * 4), ee && (ee[Ae] = kr.quartInOut(Se.showRatio)), Se.spinPivot.toArray(Y || [], Ae * 3), Se.spinOrient.toArray(O || [], Ae * 4), J == null || J.set([Se.boardDir.x, Se.boardDir.y], Ae * 2);
    }
    const ve = W == null ? void 0 : W.geometry;
    if (ve) {
      for (const Ae in ve.attributes) {
        const Se = ve.attributes[Ae];
        Se.isBufferAttribute && (Se.addUpdateRange(0, G * Se.itemSize), Se.needsUpdate = !0);
      }
      ve.instanceCount = G, pt.setState({ blocksMesh: W });
    }
  }
  function ne(G, W) {
    if (W >= Qt) {
      const ie = W - Qt, $ = ie % It - Ut, O = Math.floor(ie / It) - Ut, Y = Qn.getTile(O, $);
      if (!Y.isOccupied) {
        const J = Ue.saturate(er - Y.randomDelay);
        Y.activeRatio = J, G.showRatio = yi(J), G.boardPos.set(O, $);
      }
    }
  }
  function q(G, W, ie) {
    if (G) {
      const $ = G.currentTile;
      if (ei > 0) {
        const O = Math.floor(ei * h), Y = Math.min(O + 1, h - 1), J = ei * h - O;
        t.fromArray($.loseAnimationPositionArray, O * 3), n.fromArray($.loseAnimationPositionArray, Y * 3), t.lerp(n, J), t.y *= 0.5, W.pos.set(t.z, t.y, -t.x), r.fromArray($.loseAnimationOrientArray, O * 4), s.fromArray($.loseAnimationOrientArray, Y * 4), r.slerp(s, J), W.orient.copy(r);
      }
      if (Ci > 0) {
        const O = Ue.fit(Ci, 0, 1, 0, 1, kr.sineOut);
        if (i.set($.row, $.col), i.normalize(), i.multiplyScalar(0.1 * O), W.pos.x += i.x, W.pos.z -= i.y, Ci < 1) {
          const Y = O * Ue.fit(Ci, 0.5, 0.8, 1, 0);
          i.set(G.randomVector.x, G.randomVector.y), i.normalize(), i.multiplyScalar(Y), e.set(0, 0), e.addScaledVector(i, 0.08 * Y * Math.sin(Y * 80)), W.pos.x += e.x, W.pos.z += e.y;
        }
      }
    }
    if (ie >= Qt) {
      const $ = ie - Qt, O = $ % It - Ut, Y = Math.floor($ / It) - Ut, J = Qn.getTile(Y, O), ee = Ue.saturate(us - J.randomDelay);
      J.isOccupied || (J.activeRatio = ee), W.showRatio = yi(ee), W.boardPos.set(Y, O);
    }
  }
  function ce(G, W) {
    if (G) {
      const ie = G.currentTile, $ = 0.1 * (ie == null ? void 0 : ie.randomDelay), O = Ai - $;
      let Y = Ue.fit(O, 0, 0.5, 0, 1, (J) => 1 - Math.pow(1 - J, 5));
      Y = Ue.fit(O, 0.7, 1, Y, 0, (J) => Math.pow(J, 5)), W.pos.y += Ki * Y;
    }
  }
  function k(G, W, ie) {
    m === it.FAILED && q(G, W, ie), (m === it.COMPLETED || m === it.REPLAY) && ce(G, W), m === it.STOP && ne(W, ie);
  }
  function de(G) {
    const W = pt.getState().baseMesh, ie = Qi.getState(), $ = pt.getState().directLight;
    V(), D(G);
    let O = 0;
    for (let ve = 0; ve < Ji; ve++) {
      const Ae = p[ve];
      Ae.update(G);
      const Se = y.blocks.find((et) => et.id === ve);
      Ae.showRatio > 0 && (f[O++] = Ae), Se && k(Se, Ae, ve);
    }
    Z(), j(O);
    const Y = Math.min(1, tr + nr + Ri), J = kr.backOut(Y, 3), ee = 1 - yi(ln.getState().firstStartAnimationRatio);
    Ti.position.y = -J - 2 * ee, Ti.rotation.y = 0.5 * Math.PI * ee, Ti.rotation.y += 2 * Math.PI * kr.quartInOut(Zi), W && (W.material.uniforms.u_yDisplacement.value = -J - 5 * ee, W.material.uniforms.u_successAnimationRatio.value = $i), sn({
      u_endAnimationRatio: {
        value: Math.min(1, Ue.fit(er, 0.5, 2, 0, 1) + Ue.fit(us, 0.5, 2, 0, 1) + Ue.fit(dt, 0, 0.2, 0, 1))
      }
    }), $ && ($.position.copy(A.u_lightPosition.value), $.shadow.camera.top = ie.lightCameraSize, $.shadow.camera.bottom = -ie.lightCameraSize, $.shadow.bias = ie.lightCameraBias);
  }
  return {
    preload: x,
    init: U,
    reset: M,
    update: de
  };
}, ts = M_();
var Rc = `uniform float u_time;
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
}`, E_ = `uniform vec3 u_bgColor1;
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

}`, y_ = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}`;
const fl = new mt(), T_ = () => {
  let i, e = null, t = null, n = null, r = null, s = null, o = null, a = null, c = null, l = 0, u = 0, h, p;
  const f = {
    u_time: { value: 0 },
    u_ratio: { value: 0 },
    u_isFloating: { value: 1 }
  };
  async function _() {
    yn.loadTexture(`${Fn}/matcap_gold.jpg`, (x) => {
      h = x, h.needsUpdate = !0;
    }), yn.loadBuf(`${Fn}/COIN.buf`, (x) => {
      i = x;
    }), yn.loadBuf(`${Fn}/COIN_PLACEMENT.buf`, (x) => {
      const { position: P, aoN: C, aoP: w, curveu: U, orient: E } = x.attributes;
      r = P.array, a = C.array, c = w.array, o = U.array, s = E.array, l = P.count;
    });
  }
  function g() {
    m(), d(), A(), e && fl.add(e);
  }
  function m() {
    i.computeVertexNormals();
    const x = new Qa();
    x.index = i.index, Object.entries(i.attributes).forEach(([C, w]) => x.setAttribute(C, w)), p = new Float32Array(l * 3).map(() => Math.random() * 2 - 1), [
      ["a_instancePosition", r, 3],
      ["a_instanceQuaternion", s, 4],
      ["a_instanceCurveUV", o, 1],
      ["a_instanceAoN", a, 3],
      ["a_instanceAoP", c, 3],
      ["a_instanceRand", p, 3]
    ].forEach(([C, w, U]) => {
      x.setAttribute(C, new os(w, U));
    }), t = x;
  }
  function d() {
    const x = bn.getState();
    n = new bt({
      uniforms: {
        ...x,
        ...f,
        ...ss.merge([ue.lights]),
        u_matcapTexture: { value: h }
      },
      vertexShader: Rc,
      fragmentShader: E_,
      lights: !0
    });
  }
  function A() {
    t && n && (e = new Ct(t, n), e.frustumCulled = !1, e.castShadow = !0, e.receiveShadow = !0, e.customDepthMaterial = new bt({
      uniforms: { ...f },
      vertexShader: Rc,
      fragmentShader: y_,
      defines: { IS_DEPTH: !0 }
    }));
  }
  function y(x) {
    const P = wi === 0;
    u = P ? ji : wi, f.u_ratio.value = u, f.u_time.value += x, f.u_isFloating.value = P ? 1 : 0, e && (e.rotation.y = 0 * u, e.visible = u > 0 && u < 1);
  }
  return {
    preload: _,
    init: g,
    update: y
  };
};
var b_ = `uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}`;
const A_ = () => {
  async function e() {
    yn.loadTexture(`${Fn}/LDR_RGB1_0.png`, (n) => {
      n.generateMipmaps = !1, n.minFilter = n.magFilter = Ft, n.wrapS = n.wrapT = ns, n.needsUpdate = !0, sn({ u_blueNoiseTexture: { value: n } }), sn({ u_blueNoiseTexelSize: { value: new Re(1 / 128, 1 / 128) } });
    }), Fe.getBlueNoise = b_;
  }
  function t(n) {
    sn({ u_blueNoiseCoordOffset: { value: new Re(Math.random(), Math.random()) } });
  }
  return {
    update: t,
    preInit: e,
    TEXTURE_SIZE: 128
  };
}, Cc = { type: "change" }, $s = { type: "start" }, Pc = { type: "end" };
class w_ extends si {
  constructor(e, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new F(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = Math.PI * 0.2, this.maxPolarAngle = Math.PI * 0.45, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !0, this.dampingFactor = 0.15, this.enableZoom = !1, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 0.5, this.enablePan = !1, this.panSpeed = 1, this.screenSpacePanning = !0, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: oi.ROTATE, MIDDLE: oi.DOLLY, RIGHT: oi.PAN }, this.touches = { ONE: ci.ROTATE, TWO: ci.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.scale = 1, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.scale = 1, n.object.updateProjectionMatrix(), n.dispatchEvent(Cc), n.update(), s = r.NONE;
    }, this.update = function() {
      const b = new F(), re = new Gt().setFromUnitVectors(e.up, new F(0, 1, 0)), ae = re.clone().invert(), le = new F(), Le = new Gt(), se = 2 * Math.PI;
      return function() {
        const Ce = n.object.position;
        b.copy(Ce).sub(n.target), b.applyQuaternion(re), a.setFromVector3(b), n.autoRotate && s === r.NONE && U(C()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let Te = n.minAzimuthAngle, he = n.maxAzimuthAngle;
        isFinite(Te) && isFinite(he) && (Te < -Math.PI ? Te += se : Te > Math.PI && (Te -= se), he < -Math.PI ? he += se : he > Math.PI && (he -= se), Te <= he ? a.theta = Math.max(Te, Math.min(he, a.theta)) : a.theta = a.theta > (Te + he) / 2 ? Math.max(Te, a.theta) : Math.min(he, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe();
        let He = n.enableDamping ? (n.scale - 1) * n.dampingFactor + 1 : n.scale;
        return a.radius *= He, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(l, n.dampingFactor) : n.target.add(l), b.setFromSpherical(a), b.applyQuaternion(ae), Ce.copy(n.target).add(b), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, l.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), l.set(0, 0, 0)), n.scale = n.scale / He, u || le.distanceToSquared(n.object.position) > o || 8 * (1 - Le.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Cc), le.copy(n.object.position), Le.copy(n.object.quaternion), u = !1, !0) : !1;
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
    const o = 1e-6, a = new Ho(), c = new Ho(), l = new F();
    let u = !1;
    const h = new Re(), p = new Re(), f = new Re(), _ = new Re(), g = new Re(), m = new Re(), d = new Re(), A = new Re(), y = new Re(), x = [], P = {};
    function C() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function w() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function U(b) {
      c.theta -= b;
    }
    function E(b) {
      c.phi -= b;
    }
    const M = function() {
      const b = new F();
      return function(ae, le) {
        b.setFromMatrixColumn(le, 0), b.multiplyScalar(-ae), l.add(b);
      };
    }(), D = function() {
      const b = new F();
      return function(ae, le) {
        n.screenSpacePanning === !0 ? b.setFromMatrixColumn(le, 1) : (b.setFromMatrixColumn(le, 0), b.crossVectors(n.object.up, b)), b.multiplyScalar(ae), l.add(b);
      };
    }(), Z = function() {
      const b = new F();
      return function(ae, le) {
        const Le = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const se = n.object.position;
          b.copy(se).sub(n.target);
          let ge = b.length();
          ge *= Math.tan(n.object.fov / 2 * Math.PI / 180), M(2 * ae * ge / Le.clientHeight, n.object.matrix), D(2 * le * ge / Le.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (M(ae * (n.object.right - n.object.left) / n.object.zoom / Le.clientWidth, n.object.matrix), D(le * (n.object.top - n.object.bottom) / n.object.zoom / Le.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function V(b) {
      n.object.isPerspectiveCamera ? n.scale /= b : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * b)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function j(b) {
      n.object.isPerspectiveCamera ? n.scale *= b : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / b)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function ne(b) {
      h.set(b.clientX, b.clientY);
    }
    function q(b) {
      d.set(b.clientX, b.clientY);
    }
    function ce(b) {
      _.set(b.clientX, b.clientY);
    }
    function k(b) {
      p.set(b.clientX, b.clientY), f.subVectors(p, h).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      U(2 * Math.PI * f.x / re.clientHeight), E(2 * Math.PI * f.y / re.clientHeight), h.copy(p), n.update();
    }
    function de(b) {
      A.set(b.clientX, b.clientY), y.subVectors(A, d), y.y > 0 ? V(w()) : y.y < 0 && j(w()), d.copy(A), n.update();
    }
    function G(b) {
      g.set(b.clientX, b.clientY), m.subVectors(g, _).multiplyScalar(n.panSpeed), Z(m.x, m.y), _.copy(g), n.update();
    }
    function W(b) {
      b.deltaY < 0 ? j(w()) : b.deltaY > 0 && V(w()), n.update();
    }
    function ie() {
      if (x.length === 1)
        h.set(x[0].pageX, x[0].pageY);
      else {
        const b = 0.5 * (x[0].pageX + x[1].pageX), re = 0.5 * (x[0].pageY + x[1].pageY);
        h.set(b, re);
      }
    }
    function $() {
      if (x.length === 1)
        _.set(x[0].pageX, x[0].pageY);
      else {
        const b = 0.5 * (x[0].pageX + x[1].pageX), re = 0.5 * (x[0].pageY + x[1].pageY);
        _.set(b, re);
      }
    }
    function O() {
      const b = x[0].pageX - x[1].pageX, re = x[0].pageY - x[1].pageY, ae = Math.sqrt(b * b + re * re);
      d.set(0, ae);
    }
    function Y() {
      n.enableZoom && O(), n.enablePan && $();
    }
    function J() {
      n.enableZoom && O(), n.enableRotate && ie();
    }
    function ee(b) {
      if (x.length === 1)
        p.set(b.pageX, b.pageY);
      else {
        const ae = te(b), le = 0.5 * (b.pageX + ae.x), Le = 0.5 * (b.pageY + ae.y);
        p.set(le, Le);
      }
      f.subVectors(p, h).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      U(2 * Math.PI * f.x / re.clientHeight), E(2 * Math.PI * f.y / re.clientHeight), h.copy(p);
    }
    function ve(b) {
      if (x.length === 1)
        g.set(b.pageX, b.pageY);
      else {
        const re = te(b), ae = 0.5 * (b.pageX + re.x), le = 0.5 * (b.pageY + re.y);
        g.set(ae, le);
      }
      m.subVectors(g, _).multiplyScalar(n.panSpeed), Z(m.x, m.y), _.copy(g);
    }
    function Ae(b) {
      const re = te(b), ae = b.pageX - re.x, le = b.pageY - re.y, Le = Math.sqrt(ae * ae + le * le);
      A.set(0, Le), y.set(0, Math.pow(A.y / d.y, n.zoomSpeed)), V(y.y), d.copy(A);
    }
    function Se(b) {
      n.enableZoom && Ae(b), n.enablePan && ve(b);
    }
    function et(b) {
      n.enableZoom && Ae(b), n.enableRotate && ee(b);
    }
    function tt(b) {
      n.enabled !== !1 && (x.length === 0 && (n.domElement.setPointerCapture(b.pointerId), n.domElement.addEventListener("pointermove", ze), n.domElement.addEventListener("pointerup", R)), v(b), b.pointerType === "touch" ? Ke(b) : ke(b));
    }
    function ze(b) {
      n.enabled !== !1 && (b.pointerType === "touch" ? ye(b) : Ge(b));
    }
    function R(b) {
      B(b), x.length === 0 && (n.domElement.releasePointerCapture(b.pointerId), n.domElement.removeEventListener("pointermove", ze), n.domElement.removeEventListener("pointerup", R)), n.dispatchEvent(Pc), s = r.NONE;
    }
    function At(b) {
      B(b);
    }
    function ke(b) {
      let re;
      switch (b.button) {
        case 0:
          re = n.mouseButtons.LEFT;
          break;
        case 1:
          re = n.mouseButtons.MIDDLE;
          break;
        case 2:
          re = n.mouseButtons.RIGHT;
          break;
        default:
          re = -1;
      }
      switch (re) {
        case oi.DOLLY:
          if (n.enableZoom === !1) return;
          q(b), s = r.DOLLY;
          break;
        case oi.ROTATE:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (n.enablePan === !1) return;
            ce(b), s = r.PAN;
          } else {
            if (n.enableRotate === !1) return;
            ne(b), s = r.ROTATE;
          }
          break;
        case oi.PAN:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (n.enableRotate === !1) return;
            ne(b), s = r.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            ce(b), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent($s);
    }
    function Ge(b) {
      if (n.enabled !== !1)
        switch (s) {
          case r.ROTATE:
            if (n.enableRotate === !1) return;
            k(b);
            break;
          case r.DOLLY:
            if (n.enableZoom === !1) return;
            de(b);
            break;
          case r.PAN:
            if (n.enablePan === !1) return;
            G(b);
            break;
        }
    }
    function Ee(b) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (n.dispatchEvent($s), W(b), n.dispatchEvent(Pc));
    }
    function Ke(b) {
      switch (K(b), x.length) {
        case 1:
          switch (n.touches.ONE) {
            case ci.ROTATE:
              if (n.enableRotate === !1) return;
              ie(), s = r.TOUCH_ROTATE;
              break;
            case ci.PAN:
              if (n.enablePan === !1) return;
              $(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case ci.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Y(), s = r.TOUCH_DOLLY_PAN;
              break;
            case ci.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              J(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent($s);
    }
    function ye(b) {
      switch (K(b), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ee(b), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ve(b), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Se(b), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          et(b), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function T(b) {
      n.enabled !== !1 && (b.preventDefault(), n.domElement.removeEventListener("contextmenu", T));
    }
    function v(b) {
      x.push(b);
    }
    function B(b) {
      delete P[b.pointerId];
      for (let re = 0; re < x.length; re++)
        if (x[re].pointerId === b.pointerId) {
          x.splice(re, 1);
          return;
        }
    }
    function K(b) {
      let re = P[b.pointerId];
      re === void 0 && (re = new Re(), P[b.pointerId] = re), re.set(b.pageX, b.pageY);
    }
    function te(b) {
      const re = b.pointerId === x[0].pointerId ? x[1] : x[0];
      return P[re.pointerId];
    }
    n.domElement.addEventListener("contextmenu", T), n.domElement.addEventListener("pointerdown", tt), n.domElement.addEventListener("pointercancel", At), n.domElement.addEventListener("wheel", Ee, { passive: !1 }), this.update(), n.domElement.removeEventListener("pointercancel", At), n.domElement.removeEventListener("wheel", Ee, { passive: !1 });
  }
}
const pl = {
  id: -1,
  isMoving: !1,
  hasBeenSpawned: !1,
  hasAnimationEnded: !1,
  hasBeenEvaluated: !1,
  currentTile: null,
  targetTile: null,
  moveAnimationRatio: 0,
  spawnAnimationRatio: 0,
  spawnAnimationRatioUnclamped: -Math.random(),
  easedAnimationRatio: 0,
  lifeCycle: 0,
  randomVector: {
    x: Math.random() - 0.5,
    y: Math.random() - 0.5
  }
};
function ml() {
  const i = Math.random(), e = 0.25;
  return (t) => yi(Ue.fit(t, i * e, i * e + (1 - e), 0, 1));
}
const Bi = ri()((i, e) => ({
  blocks: [],
  setNewBlock: (t) => i((n) => n.blocks.length ? {
    blocks: [...n.blocks, t]
  } : { blocks: [t] }),
  setUpdateBlock: (t) => i((n) => {
    const r = [...n.blocks], s = n.blocks.findIndex((o) => o.id === t.id);
    return r[s] = t, { blocks: r };
  }),
  resetAfterCycle: (t) => {
    t.currentTile && (t.currentTile.isOccupied = !0, t.currentTile.willBeOccupied = !1);
    const n = {
      ...pl,
      currentTile: t.currentTile,
      id: t.id,
      easingFunction: ml(),
      lifeCycle: t.lifeCycle + 1
    };
    e().setNewBlock(n);
  },
  reset: () => i({ blocks: [] })
}));
function Dc({ id: i, currentTile: e = null }) {
  const t = {
    ...pl,
    id: i,
    currentTile: e || null,
    easingFunction: ml()
  };
  return Bi.getState().setNewBlock(t), t;
}
function Lc(i, e) {
  var r;
  const t = i;
  t.hasBeenSpawned ? (t.isMoving && !t.hasAnimationEnded || rt.getState().flags.isResult) && (t.moveAnimationRatio = Math.min(1, t.moveAnimationRatio + fc * e), t.easedAnimationRatio = (r = i.easingFunction) == null ? void 0 : r.call(i, Math.max(0, t.moveAnimationRatio)), t.easedAnimationRatio === 1 && (rt.getState().flags.isFree || rt.getState().flags.isResult) && (t.moveAnimationRatio = 1, t.currentTile && (t.currentTile.isOccupied = !1), t.currentTile = t.targetTile, t.targetTile = null, t.hasAnimationEnded = !0, t.currentTile && (t.currentTile.isOccupied = !0, t.currentTile.willBeOccupied = !1))) : (t.spawnAnimationRatioUnclamped += 0.75 * fc * e, t.spawnAnimationRatio = Math.max(0, Math.min(1, t.spawnAnimationRatioUnclamped)), t.spawnAnimationRatio === 1 && (t.hasBeenSpawned = !0));
  const n = Math.max(0, Math.min(1, t.hasBeenSpawned ? t.easedAnimationRatio : t.spawnAnimationRatio));
  t.currentTile && (t.currentTile.activeRatio = t.hasBeenSpawned ? t.targetTile ? 1 - n : 1 : t.spawnAnimationRatio), t.targetTile && (t.targetTile.activeRatio = n), Bi.getState().setUpdateBlock({ ...i, ...t });
}
function R_(i, e, t) {
  var n;
  return ((n = i.filter((r) => {
    if (!r.isOccupied && !r.willBeOccupied && !r.isMain && (e || t.priority >= r.priority))
      return r;
  })) == null ? void 0 : n[0]) || null;
}
function Ic(i, e = !1, t = 0) {
  const n = i;
  if (n.hasBeenEvaluated = !0, n.moveAnimationRatio = -t, !n.currentTile) {
    Bi.getState().setUpdateBlock({ ...i, ...n });
    return;
  }
  n.currentTile.shuffleReachableNeighbours();
  const r = e ? n.currentTile.reachableNeighbours : n.currentTile.prioritySortedReachableNeighbours, s = R_(r, e, n.currentTile);
  s ? (!n.currentTile.isMain || Math.random() <= 0.8) && (n.targetTile = s, n.targetTile.willBeOccupied = !0, n.isMoving = !0) : n.hasAnimationEnded = !0, Bi.getState().setUpdateBlock({ ...i, ...n });
}
const C_ = () => {
  let i = rt.getState().flags, e = ln.getState();
  function t() {
    return i.isFailResult || i.isStopped || e.blocks.length >= Qt || es && es.isOccupied && !i.isSuccessResult && !i.isReplayResult;
  }
  function n() {
    t() || (i.isSuccessResult || i.isReplayResult ? r() : s());
  }
  function r() {
    var g;
    const f = ((g = e.blocks) == null ? void 0 : g.length) ?? 0, _ = Qt - f;
    for (let m = 0; m < _; m++) {
      const d = Qn.getRandomFreeTile();
      if (d) {
        const A = Dc({ id: e.blocks.length, currentTile: d });
        yc(A);
      }
    }
  }
  function s() {
    let f;
    const _ = i.isFree;
    !!(e.blocks.length < _c && _) && (f = Dc({
      id: e.blocks.length,
      currentTile: es
    }), Tc(f));
  }
  function o() {
    var m;
    const f = i.hasNotStarted, _ = i.isFailResult, g = i.isStopped;
    f || (e.lastSpawnedBlock && (yc(e.lastSpawnedBlock), Tc(null)), !(_ || g) && ((m = e.blocks) != null && m.length && e.blocks.forEach((d) => Bi.getState().resetAfterCycle(d)), ln.getState().incCycleIndex(), n(), a()));
  }
  function a() {
    var m;
    const f = e.cycleIndex, _ = e.blocks.length;
    (m = e.lastSpawnedBlock) != null && m.hasBeenSpawned && Ic(e.lastSpawnedBlock, i.isFree, 0);
    const g = f % 2 === 0 ? !0 : _ < _c - 1;
    e.blocks.forEach((d, A) => {
      !d.hasBeenEvaluated && d.hasBeenSpawned && Ic(d, g, A * 0.2);
    });
  }
  function c(f = !1) {
    Bi.getState().reset(), ts.reset(), Qn.reset(), ln.getState().reset();
    const _ = rt.getState().result, g = bl.includes(_);
    rt.getState().reset(), o(), !f && g && e_();
  }
  function l(f) {
    const _ = i.isResult, g = e.animationSpeedRatio, m = e.firstStartAnimationRatio, d = e.previousSuccessBlocksAnimationRatio, A = Math.min(1, g + f * (_ ? 1 : 0)), y = Ue.saturate(d - f / 1.5), x = Ue.saturate(m + f * (Tt.getState().showVisual ? 1 : 0));
    bc({
      animationSpeedRatio: A,
      firstStartAnimationRatio: x,
      previousSuccessBlocksAnimationRatio: y
    });
  }
  function u() {
    let f = !0;
    e.lastSpawnedBlock && (f = f && e.lastSpawnedBlock.hasBeenSpawned), e.blocks.forEach((d) => {
      d.lifeCycle > 0 ? f = f && d.hasBeenEvaluated && d.hasAnimationEnded : f = f && d.spawnAnimationRatio === 1;
    });
    const { isStopped: _, isFailResult: g, isResult: m } = i;
    return f || m || g || _;
  }
  function h(f) {
    if (l(f), xc.update(f), Sc.update(f), Mc.update(f), i.hasNotStarted) {
      o();
      return;
    }
    Qn.preUpdate(f), e.lastSpawnedBlock && Lc(e.lastSpawnedBlock, f), e.blocks.length && e.blocks.forEach((g) => Lc(g, f)), Qn.update(f), u() && o();
  }
  async function p() {
    const f = ({ flags: g, animationTypeEnded: m }) => {
      if (i = g, m)
        switch (m) {
          case "win": {
            c(), bc({ previousSuccessBlocksAnimationRatio: 1 }), o();
            break;
          }
          case "lose": {
            c(), o();
            break;
          }
          case "stop":
          default:
            c(!0);
            break;
        }
    }, _ = (g) => e = g;
    rt.subscribe((g) => g, f, { fireImmediately: !0 }), ln.subscribe((g) => g, _, { fireImmediately: !0 }), xc.init(), Sc.init(), Mc.init(), Qn.init();
  }
  return {
    init: p,
    update: h,
    reset: c
  };
}, Uc = C_();
var P_ = `varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}`, D_ = `uniform vec3 u_bgColor1;
uniform vec3 u_bgColor2;

varying vec2 v_uv;

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

#include <getBlueNoise>

void main() {
    vec3 color = mix(u_bgColor1, u_bgColor2, v_uv.y);
    gl_FragColor = vec4(linearToSRGB(color) + getBlueNoise(gl_FragCoord.xy) * .004, 1.0);
}`, L_ = `attribute vec3 a_instancePosition;
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

}`, I_ = `varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}`;
const U_ = () => {
  const i = new mt(), e = new Ct();
  let t = new Ct(), n = Tt.getState(), r = bn.getState();
  function s() {
    const l = (h) => n = h, u = (h) => r = h;
    bn.subscribe((h) => h, u), Tt.subscribe((h) => h, l), o();
  }
  function o() {
    const { u_resolution: l, u_bgColor1: u, u_bgColor2: h, u_blueNoiseTexture: p, u_blueNoiseTexelSize: f, u_blueNoiseCoordOffset: _ } = r, g = {
      u_resolution: l,
      u_bgColor1: u,
      u_bgColor2: h,
      u_blueNoiseTexture: p,
      u_blueNoiseTexelSize: f,
      u_blueNoiseCoordOffset: _
    }, m = new bt({
      uniforms: g,
      vertexShader: P_,
      fragmentShader: D_
    });
    t = new Ct(new Oi(2, 2), m), t.renderOrder = 1, i.add(t), a();
  }
  function a() {
    const u = new Oi(1, 1), h = new Qa();
    h.index = u.index, Object.keys(u.attributes).forEach((g) => {
      h.setAttribute(g, u.attributes[g]);
    }), h.instanceCount = 50;
    const p = new Float32Array(50 * 3), f = new Float32Array(50 * 3);
    for (let g = 0; g < 50; g++)
      p[g * 3] = 3 * (Math.random() * 2 - 1), p[g * 3 + 1] = Math.random() * 2 - 1, p[g * 3 + 2] = 0.5 + 0.5 * Math.random(), f[g * 3] = Math.random(), f[g * 3 + 1] = Math.random(), f[g * 3 + 2] = Math.random();
    h.setAttribute("a_instancePosition", new os(p, 3)), h.setAttribute("a_instanceRandom", new os(f, 3));
    const _ = new bt({
      vertexShader: L_,
      fragmentShader: I_,
      uniforms: {
        u_time: r.u_time,
        u_resolution: r.u_resolution,
        u_size: { value: n.particlesSize },
        u_color: { value: new Pe(n.particlesColor) },
        u_opacity: { value: n.particlesOpacity }
      },
      transparent: !0
    });
    e.geometry = h, e.material = _, e.renderOrder = 2, e.frustumCulled = !1, i.add(e);
  }
  function c(l) {
    t.material.uniforms.u_bgColor1.value = r.u_bgColor1.value, t.material.uniforms.u_bgColor2.value = r.u_bgColor2.value, e.material.uniforms.u_time.value = r.u_time.value, e.material.uniforms.u_size.value = n.particlesSize, e.material.uniforms.u_color.value.set(n.particlesColor), e.material.uniforms.u_opacity.value = n.particlesOpacity;
  }
  return { init: s, update: c, container: i };
};
Xe.enabled = !1;
const Un = U_(), Nc = A_(), Ks = T_(), N_ = () => {
  const i = new Yu(), e = new Ym(o_);
  let t, n, r;
  const s = window.innerWidth / window.innerHeight, o = 15, a = o * s, c = new Ja(a / -2, a / 2, o / 2, o / -2, 1, 1e3);
  let l;
  async function u() {
    if (r && e) {
      e.domElement.id = r, t = e.domElement, document.body.appendChild(t), e.shadowMap.enabled = !0, e.shadowMap.type = Ha;
      const A = new Pe(Tt.getState().bgColor2).convertSRGBToLinear();
      e.setClearColor(A, 1);
    }
  }
  function h(A, y) {
    Tt.getState().setProperty({ propertyName: "viewportWidth", value: A }), Tt.getState().setProperty({ propertyName: "viewportHeight", value: y });
    let x = A * pc, P = y * pc;
    const C = x / P;
    P * x > mc && (P = Math.sqrt(mc / C), x = Math.ceil(P * C), P = Math.ceil(P)), Tt.getState().setProperty({ propertyName: "width", value: x }), Tt.getState().setProperty({ propertyName: "height", value: P });
    const w = bn.getState().u_viewportResolution, U = bn.getState().u_resolution;
    sn({ u_viewportResolution: { value: w.value.set(A, window.innerHeight) } }), sn({ u_resolution: { value: U.value.set(x, P) } }), c.updateProjectionMatrix(), e.setSize(x, P), t.style.width = A + "px", t.style.height = y + "px";
  }
  function p() {
    h(window.innerWidth, window.innerHeight);
  }
  async function f({ canvasId: A, initCallback: y }) {
    r = A, await ts.preload(), await Nc.preInit(), await Ks.preload(), await u(), yn.start(y);
  }
  async function _() {
    i.add(c), c.position.fromArray(s_), c.updateProjectionMatrix(), l = c.clone(), n = new w_(l, t), n.target0.fromArray(a_), n.reset();
  }
  async function g() {
    await _();
    const A = (x) => {
      x && d();
    };
    rt.subscribe((x) => A(x.destroyCanvas)), await Uc.init(), Un.init();
    const y = await ts.init();
    y && (i.add(y), i.add(y.target)), Ks.init(), i.add(fl), i.add(Ti), Un != null && Un.container && i.add(Un.container);
  }
  function m(A, y) {
    t || (y *= 0), y = Math.min(y, 1 / 15);
    const x = Tt.getState().cameraOffsetX;
    let P = Tt.getState().offsetX;
    Tt.getState().setProperty({ propertyName: "time", value: A }), Tt.getState().setProperty({ propertyName: "deltaTime", value: y }), Km(A, y);
    const C = (window.innerWidth - x) / window.innerHeight, w = 10, U = w * C;
    if (P) {
      const D = P / window.innerWidth * 100;
      P = U * D / 100;
    }
    const E = -U / 2 - P / 2, M = U / 2 - P / 2;
    Nc.update(y), Uc.update(y), c.left = E, c.right = M, c.top = w / 2, c.bottom = w / -2, c.updateProjectionMatrix(), n == null || n.update(), l == null || l.updateMatrix(), l == null || l.matrix.decompose(c.position, c.quaternion, c.scale), c.matrix.compose(c.position, c.quaternion, c.scale), Un == null || Un.update(y), ts.update(y), Ks.update(y), e.render(i, c);
  }
  function d() {
    rt.getState().reset(), t.remove(), e.state.reset();
  }
  return {
    preload: f,
    init: g,
    onResize: p,
    render: m
  };
}, un = N_();
let ir = 0, Ba = 0;
const F_ = 50, O_ = 1 / F_;
let Fc;
const Oc = Tt.getState().setProperty;
function _l() {
  const i = performance.now() / 1e3, e = i - ir;
  i - Ba >= O_ && (Ba = i, un == null || un.render(ir, e), ir = i), cancelAnimationFrame(Fc), Fc = requestAnimationFrame(_l);
}
function B_() {
  un.init(), ir = performance.now() / 1e3, Ba = ir, window.addEventListener("resize", un.onResize), un.onResize(), _l();
}
async function W_({ canvasId: i, offset: e = 0 }) {
  if (!document.getElementById(i)) {
    Oc({ propertyName: "offsetX", value: e }), Oc({ propertyName: "cameraOffsetX", value: e / window.innerWidth });
    try {
      await (un == null ? void 0 : un.preload({ canvasId: i, initCallback: B_ }));
    } catch (t) {
      console.error("loadTowerAnimation", t);
    }
  }
}
async function X_({ canvasId: i }) {
  if (!document.getElementById(i)) return;
  rt.getState().status === "not-started" || t_(), rt.getState().setDestroyCanvas(!0), window.removeEventListener("resize", un.onResize);
}
export {
  Yr as SuccessLevel,
  W_ as loadTowerAnimation,
  X_ as removeTowerAnimation,
  V_ as setAnimationProperties,
  G_ as setLose,
  e_ as setStart,
  t_ as setStop,
  k_ as setWin
};
