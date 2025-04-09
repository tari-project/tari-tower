var Hc = Object.defineProperty;
var kc = (i, e, t) => e in i ? Hc(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ce = (i, e, t) => kc(i, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const uo = "175", mi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, _i = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Vc = 0, No = 1, Gc = 2, ho = 1, Wc = 2, An = 3, Yn = 0, Vt = 1, Rn = 2, Wn = 0, ki = 1, Fo = 2, Oo = 3, Bo = 4, Xc = 5, si = 100, Yc = 101, qc = 102, Zc = 103, jc = 104, $c = 200, Kc = 201, Jc = 202, Qc = 203, Sa = 204, Ma = 205, eu = 206, tu = 207, nu = 208, iu = 209, ru = 210, su = 211, au = 212, ou = 213, lu = 214, Ea = 0, ya = 1, Ta = 2, Wi = 3, Aa = 4, ba = 5, wa = 6, Ra = 7, tc = 0, cu = 1, uu = 2, Xn = 0, hu = 1, du = 2, fu = 3, pu = 4, mu = 5, _u = 6, gu = 7, fo = 300, Xi = 301, Yi = 302, Ca = 303, Pa = 304, ws = 306, gs = 1e3, Cn = 1001, Da = 1002, Gt = 1003, vu = 1004, Lr = 1005, qt = 1006, Is = 1007, li = 1008, xu = 1008, Ln = 1009, nc = 1010, ic = 1011, xr = 1012, po = 1013, hi = 1014, dn = 1015, Ar = 1016, mo = 1017, _o = 1018, Sr = 1020, rc = 35902, sc = 1021, ac = 1022, Zt = 1023, oc = 1024, lc = 1025, Mr = 1026, Er = 1027, cc = 1028, go = 1029, uc = 1030, vo = 1031, xo = 1033, us = 33776, hs = 33777, ds = 33778, fs = 33779, La = 35840, Ua = 35841, Ia = 35842, Na = 35843, Fa = 36196, Oa = 37492, Ba = 37496, za = 37808, Ha = 37809, ka = 37810, Va = 37811, Ga = 37812, Wa = 37813, Xa = 37814, Ya = 37815, qa = 37816, Za = 37817, ja = 37818, $a = 37819, Ka = 37820, Ja = 37821, ps = 36492, Qa = 36494, eo = 36495, hc = 36283, to = 36284, no = 36285, io = 36286, Su = 3200, Mu = 3201, Eu = 0, yu = 1, Vn = "", en = "srgb", qi = "srgb-linear", vs = "linear", tt = "srgb", gi = 7680, zo = 519, Tu = 512, Au = 513, bu = 514, dc = 515, wu = 516, Ru = 517, Cu = 518, Pu = 519, Ho = 35044, Du = 35048, ko = "300 es", _n = 2e3, xs = 2001;
class fi {
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
const wt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Ns = Math.PI / 180, ro = 180 / Math.PI;
function br() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (wt[i & 255] + wt[i >> 8 & 255] + wt[i >> 16 & 255] + wt[i >> 24 & 255] + "-" + wt[e & 255] + wt[e >> 8 & 255] + "-" + wt[e >> 16 & 15 | 64] + wt[e >> 24 & 255] + "-" + wt[t & 63 | 128] + wt[t >> 8 & 255] + "-" + wt[t >> 16 & 255] + wt[t >> 24 & 255] + wt[n & 255] + wt[n >> 8 & 255] + wt[n >> 16 & 255] + wt[n >> 24 & 255]).toLowerCase();
}
function Ve(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Lu(i, e) {
  return (i % e + e) % e;
}
function Fs(i, e, t) {
  return (1 - t) * i + t * e;
}
function Ji(i, e) {
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
function Ot(i, e) {
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
class we {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    we.prototype.isVector2 = !0, this.x = e, this.y = t;
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
  constructor(e, t, n, r, s, o, a, l, c) {
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
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = a, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], f = n[7], d = n[2], m = n[5], g = n[8], x = r[0], p = r[3], u = r[6], T = r[1], S = r[4], _ = r[7], R = r[2], C = r[5], b = r[8];
    return s[0] = o * x + a * T + l * R, s[3] = o * p + a * S + l * C, s[6] = o * u + a * _ + l * b, s[1] = c * x + h * T + f * R, s[4] = c * p + h * S + f * C, s[7] = c * u + h * _ + f * b, s[2] = d * x + m * T + g * R, s[5] = d * p + m * S + g * C, s[8] = d * u + m * _ + g * b, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - n * s * h + n * a * l + r * s * c - r * o * l;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], f = h * o - a * c, d = a * l - h * s, m = c * s - o * l, g = t * f + n * d + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return e[0] = f * x, e[1] = (r * c - h * n) * x, e[2] = (a * n - r * o) * x, e[3] = d * x, e[4] = (h * t - r * l) * x, e[5] = (r * s - a * t) * x, e[6] = m * x, e[7] = (n * l - c * t) * x, e[8] = (o * t - n * s) * x, this;
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
    return this.premultiply(Os.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Os.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Os.makeTranslation(e, t)), this;
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
const Os = /* @__PURE__ */ new Oe();
function fc(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function yr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Uu() {
  const i = yr("canvas");
  return i.style.display = "block", i;
}
const Vo = {};
function ms(i) {
  i in Vo || (Vo[i] = !0, console.warn(i));
}
function Iu(i, e, t) {
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
function Nu(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Fu(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Go = /* @__PURE__ */ new Oe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Wo = /* @__PURE__ */ new Oe().set(
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
function Ou() {
  const i = {
    enabled: !0,
    workingColorSpace: qi,
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
      return this.enabled === !1 || s === o || !s || !o || (this.spaces[s].transfer === tt && (r.r = Dn(r.r), r.g = Dn(r.g), r.b = Dn(r.b)), this.spaces[s].primaries !== this.spaces[o].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === tt && (r.r = Vi(r.r), r.g = Vi(r.g), r.b = Vi(r.b))), r;
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
      return r === Vn ? vs : this.spaces[r].transfer;
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
    [qi]: {
      primaries: e,
      whitePoint: n,
      transfer: vs,
      toXYZ: Go,
      fromXYZ: Wo,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: en },
      outputColorSpaceConfig: { drawingBufferColorSpace: en }
    },
    [en]: {
      primaries: e,
      whitePoint: n,
      transfer: tt,
      toXYZ: Go,
      fromXYZ: Wo,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: en }
    }
  }), i;
}
const qe = /* @__PURE__ */ Ou();
function Dn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Vi(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let vi;
class Bu {
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
      vi === void 0 && (vi = yr("canvas")), vi.width = e.width, vi.height = e.height;
      const r = vi.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = vi;
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
      const t = yr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Dn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Dn(t[n] / 255) * 255) : t[n] = Dn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let zu = 0;
class So {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: zu++ }), this.uuid = br(), this.data = e, this.dataReady = !0, this.version = 0;
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
          r[o].isDataTexture ? s.push(Bs(r[o].image)) : s.push(Bs(r[o]));
      } else
        s = Bs(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Bs(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Bu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Hu = 0;
class Lt extends fi {
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
  constructor(e = Lt.DEFAULT_IMAGE, t = Lt.DEFAULT_MAPPING, n = Cn, r = Cn, s = qt, o = li, a = Zt, l = Ln, c = Lt.DEFAULT_ANISOTROPY, h = Vn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Hu++ }), this.uuid = br(), this.name = "", this.source = new So(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new we(0, 0), this.repeat = new we(1, 1), this.center = new we(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Oe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
    if (this.mapping !== fo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case gs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Cn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Da:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case gs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Cn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Da:
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
Lt.DEFAULT_IMAGE = null;
Lt.DEFAULT_MAPPING = fo;
Lt.DEFAULT_ANISOTROPY = 1;
class ft {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ft.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
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
    const l = e.elements, c = l[0], h = l[4], f = l[8], d = l[1], m = l[5], g = l[9], x = l[2], p = l[6], u = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(f - x) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(f + x) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (c + 1) / 2, _ = (m + 1) / 2, R = (u + 1) / 2, C = (h + d) / 4, b = (f + x) / 4, D = (g + p) / 4;
      return S > _ && S > R ? S < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(S), r = C / n, s = b / n) : _ > R ? _ < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(_), n = C / r, s = D / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = b / s, r = D / s), this.set(n, r, s, t), this;
    }
    let T = Math.sqrt((p - g) * (p - g) + (f - x) * (f - x) + (d - h) * (d - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (p - g) / T, this.y = (f - x) / T, this.z = (d - h) / T, this.w = Math.acos((c + m + u - 1) / 2), this;
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
class ku extends fi {
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
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ft(0, 0, e, t), this.scissorTest = !1, this.viewport = new ft(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: qt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new Lt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
      this.textures[t].source = new So(r);
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
class di extends ku {
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
class pc extends Lt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Gt, this.minFilter = Gt, this.wrapR = Cn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
class Vu extends Lt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Gt, this.minFilter = Gt, this.wrapR = Cn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class jt {
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
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], f = n[r + 3];
    const d = s[o + 0], m = s[o + 1], g = s[o + 2], x = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = x;
      return;
    }
    if (f !== x || l !== d || c !== m || h !== g) {
      let p = 1 - a;
      const u = l * d + c * m + h * g + f * x, T = u >= 0 ? 1 : -1, S = 1 - u * u;
      if (S > Number.EPSILON) {
        const R = Math.sqrt(S), C = Math.atan2(R, u * T);
        p = Math.sin(p * C) / R, a = Math.sin(a * C) / R;
      }
      const _ = a * T;
      if (l = l * p + d * _, c = c * p + m * _, h = h * p + g * _, f = f * p + x * _, p === 1 - a) {
        const R = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= R, c *= R, h *= R, f *= R;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
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
    const a = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], f = s[o], d = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = a * g + h * f + l * m - c * d, e[t + 1] = l * g + h * d + c * f - a * m, e[t + 2] = c * g + h * m + a * d - l * f, e[t + 3] = h * g - a * f - l * d - c * m, e;
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
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(r / 2), f = a(s / 2), d = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * f + c * m * g, this._y = c * m * f - d * h * g, this._z = c * h * g + d * m * f, this._w = c * h * f - d * m * g;
        break;
      case "YXZ":
        this._x = d * h * f + c * m * g, this._y = c * m * f - d * h * g, this._z = c * h * g - d * m * f, this._w = c * h * f + d * m * g;
        break;
      case "ZXY":
        this._x = d * h * f - c * m * g, this._y = c * m * f + d * h * g, this._z = c * h * g + d * m * f, this._w = c * h * f - d * m * g;
        break;
      case "ZYX":
        this._x = d * h * f - c * m * g, this._y = c * m * f + d * h * g, this._z = c * h * g - d * m * f, this._w = c * h * f + d * m * g;
        break;
      case "YZX":
        this._x = d * h * f + c * m * g, this._y = c * m * f + d * h * g, this._z = c * h * g - d * m * f, this._w = c * h * f - d * m * g;
        break;
      case "XZY":
        this._x = d * h * f - c * m * g, this._y = c * m * f - d * h * g, this._z = c * h * g + d * m * f, this._w = c * h * f + d * m * g;
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], f = t[10], d = n + a + f;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (s - c) * m, this._z = (o - r) * m;
    } else if (n > a && n > f) {
      const m = 2 * Math.sqrt(1 + n - a - f);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + c) / m;
    } else if (a > f) {
      const m = 2 * Math.sqrt(1 + a - n - f);
      this._w = (s - c) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - a);
      this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
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
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + o * a + r * c - s * l, this._y = r * h + o * l + s * a - n * c, this._z = s * h + o * c + n * l - r * a, this._w = o * h - n * a - r * l - s * c, this._onChangeCallback(), this;
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
    const c = Math.sqrt(l), h = Math.atan2(c, a), f = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = o * f + this._w * d, this._x = n * f + this._x * d, this._y = r * f + this._y * d, this._z = s * f + this._z * d, this._onChangeCallback(), this;
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
    return this.applyQuaternion(Xo.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Xo.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * n), h = 2 * (a * t - s * r), f = 2 * (s * n - o * t);
    return this.x = t + l * c + o * f - a * h, this.y = n + l * h + a * c - s * f, this.z = r + l * f + s * h - o * c, this;
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
    return zs.copy(this).projectOnVector(e), this.sub(zs);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(zs.copy(e).multiplyScalar(2 * this.dot(e)));
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
const zs = /* @__PURE__ */ new F(), Xo = /* @__PURE__ */ new jt();
class wr {
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
      this.expandByPoint(sn.fromArray(e, t));
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
      this.expandByPoint(sn.fromBufferAttribute(e, t));
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
    const n = sn.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(o, sn) : sn.fromBufferAttribute(s, o), sn.applyMatrix4(e.matrixWorld), this.expandByPoint(sn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ur.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ur.copy(n.boundingBox)), Ur.applyMatrix4(e.matrixWorld), this.union(Ur);
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
    return this.clampPoint(e.center, sn), sn.distanceToSquared(e.center) <= e.radius * e.radius;
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
    this.getCenter(Qi), Ir.subVectors(this.max, Qi), xi.subVectors(e.a, Qi), Si.subVectors(e.b, Qi), Mi.subVectors(e.c, Qi), In.subVectors(Si, xi), Nn.subVectors(Mi, Si), jn.subVectors(xi, Mi);
    let t = [
      0,
      -In.z,
      In.y,
      0,
      -Nn.z,
      Nn.y,
      0,
      -jn.z,
      jn.y,
      In.z,
      0,
      -In.x,
      Nn.z,
      0,
      -Nn.x,
      jn.z,
      0,
      -jn.x,
      -In.y,
      In.x,
      0,
      -Nn.y,
      Nn.x,
      0,
      -jn.y,
      jn.x,
      0
    ];
    return !Hs(t, xi, Si, Mi, Ir) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Hs(t, xi, Si, Mi, Ir)) ? !1 : (Nr.crossVectors(In, Nn), t = [Nr.x, Nr.y, Nr.z], Hs(t, xi, Si, Mi, Ir));
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
    return this.clampPoint(e, sn).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(sn).length() * 0.5), e;
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
    return this.isEmpty() ? this : (vn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), vn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), vn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), vn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), vn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), vn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), vn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), vn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(vn), this);
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
const vn = [
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F()
], sn = /* @__PURE__ */ new F(), Ur = /* @__PURE__ */ new wr(), xi = /* @__PURE__ */ new F(), Si = /* @__PURE__ */ new F(), Mi = /* @__PURE__ */ new F(), In = /* @__PURE__ */ new F(), Nn = /* @__PURE__ */ new F(), jn = /* @__PURE__ */ new F(), Qi = /* @__PURE__ */ new F(), Ir = /* @__PURE__ */ new F(), Nr = /* @__PURE__ */ new F(), $n = /* @__PURE__ */ new F();
function Hs(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    $n.fromArray(i, s);
    const a = r.x * Math.abs($n.x) + r.y * Math.abs($n.y) + r.z * Math.abs($n.z), l = e.dot($n), c = t.dot($n), h = n.dot($n);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const Gu = /* @__PURE__ */ new wr(), er = /* @__PURE__ */ new F(), ks = /* @__PURE__ */ new F();
class Rs {
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
    t !== void 0 ? n.copy(t) : Gu.setFromPoints(e).getCenter(n);
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
    er.subVectors(e, this.center);
    const t = er.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(er, r / n), this.radius += r;
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
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ks.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(er.copy(e.center).add(ks)), this.expandByPoint(er.copy(e.center).sub(ks))), this);
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
const xn = /* @__PURE__ */ new F(), Vs = /* @__PURE__ */ new F(), Fr = /* @__PURE__ */ new F(), Fn = /* @__PURE__ */ new F(), Gs = /* @__PURE__ */ new F(), Or = /* @__PURE__ */ new F(), Ws = /* @__PURE__ */ new F();
class mc {
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
    return this.origin.copy(this.at(e, xn)), this;
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
    const t = xn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (xn.copy(this.origin).addScaledVector(this.direction, t), xn.distanceToSquared(e));
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
    Vs.copy(e).add(t).multiplyScalar(0.5), Fr.copy(t).sub(e).normalize(), Fn.copy(this.origin).sub(Vs);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Fr), a = Fn.dot(this.direction), l = -Fn.dot(Fr), c = Fn.lengthSq(), h = Math.abs(1 - o * o);
    let f, d, m, g;
    if (h > 0)
      if (f = o * l - a, d = o * a - l, g = s * h, f >= 0)
        if (d >= -g)
          if (d <= g) {
            const x = 1 / h;
            f *= x, d *= x, m = f * (f + o * d + 2 * a) + d * (o * f + d + 2 * l) + c;
          } else
            d = s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
        else
          d = -s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
      else
        d <= -g ? (f = Math.max(0, -(-o * s + a)), d = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c) : d <= g ? (f = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (f = Math.max(0, -(o * s + a)), d = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c);
    else
      d = o > 0 ? -s : s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Vs).addScaledVector(Fr, d), m;
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
    xn.subVectors(e.center, this.origin);
    const n = xn.dot(this.direction), r = xn.dot(xn) - n * n, s = e.radius * e.radius;
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
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - d.z) * f, l = (e.max.z - d.z) * f) : (a = (e.max.z - d.z) * f, l = (e.min.z - d.z) * f), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, xn) !== null;
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
    Gs.subVectors(t, e), Or.subVectors(n, e), Ws.crossVectors(Gs, Or);
    let o = this.direction.dot(Ws), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Fn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Or.crossVectors(Fn, Or));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Gs.cross(Fn));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * Fn.dot(Ws);
    return h < 0 ? null : this.at(h / o, s);
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
class lt {
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
  constructor(e, t, n, r, s, o, a, l, c, h, f, d, m, g, x, p) {
    lt.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, h, f, d, m, g, x, p);
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
  set(e, t, n, r, s, o, a, l, c, h, f, d, m, g, x, p) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = o, u[9] = a, u[13] = l, u[2] = c, u[6] = h, u[10] = f, u[14] = d, u[3] = m, u[7] = g, u[11] = x, u[15] = p, this;
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
    return new lt().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / Ei.setFromMatrixColumn(e, 0).length(), s = 1 / Ei.setFromMatrixColumn(e, 1).length(), o = 1 / Ei.setFromMatrixColumn(e, 2).length();
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
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * h, m = o * f, g = a * h, x = a * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = m + g * c, t[5] = d - x * c, t[9] = -a * l, t[2] = x - d * c, t[6] = g + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * h, m = l * f, g = c * h, x = c * f;
      t[0] = d + x * a, t[4] = g * a - m, t[8] = o * c, t[1] = o * f, t[5] = o * h, t[9] = -a, t[2] = m * a - g, t[6] = x + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * h, m = l * f, g = c * h, x = c * f;
      t[0] = d - x * a, t[4] = -o * f, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * h, t[9] = x - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * h, m = o * f, g = a * h, x = a * f;
      t[0] = l * h, t[4] = g * c - m, t[8] = d * c + x, t[1] = l * f, t[5] = x * c + d, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, m = o * c, g = a * l, x = a * c;
      t[0] = l * h, t[4] = x - d * f, t[8] = g * f + m, t[1] = f, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = m * f + g, t[10] = d - x * f;
    } else if (e.order === "XZY") {
      const d = o * l, m = o * c, g = a * l, x = a * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = d * f + x, t[5] = o * h, t[9] = m * f - g, t[2] = g * f - m, t[6] = a * h, t[10] = x * f + d;
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
    return this.compose(Wu, e, Xu);
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
    return Xt.subVectors(e, t), Xt.lengthSq() === 0 && (Xt.z = 1), Xt.normalize(), On.crossVectors(n, Xt), On.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Xt.x += 1e-4 : Xt.z += 1e-4, Xt.normalize(), On.crossVectors(n, Xt)), On.normalize(), Br.crossVectors(Xt, On), r[0] = On.x, r[4] = Br.x, r[8] = Xt.x, r[1] = On.y, r[5] = Br.y, r[9] = Xt.y, r[2] = On.z, r[6] = Br.z, r[10] = Xt.z, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], f = n[5], d = n[9], m = n[13], g = n[2], x = n[6], p = n[10], u = n[14], T = n[3], S = n[7], _ = n[11], R = n[15], C = r[0], b = r[4], D = r[8], y = r[12], E = r[1], L = r[5], W = r[9], H = r[13], X = r[2], Q = r[6], G = r[10], ie = r[14], k = r[3], le = r[7], me = r[11], Me = r[15];
    return s[0] = o * C + a * E + l * X + c * k, s[4] = o * b + a * L + l * Q + c * le, s[8] = o * D + a * W + l * G + c * me, s[12] = o * y + a * H + l * ie + c * Me, s[1] = h * C + f * E + d * X + m * k, s[5] = h * b + f * L + d * Q + m * le, s[9] = h * D + f * W + d * G + m * me, s[13] = h * y + f * H + d * ie + m * Me, s[2] = g * C + x * E + p * X + u * k, s[6] = g * b + x * L + p * Q + u * le, s[10] = g * D + x * W + p * G + u * me, s[14] = g * y + x * H + p * ie + u * Me, s[3] = T * C + S * E + _ * X + R * k, s[7] = T * b + S * L + _ * Q + R * le, s[11] = T * D + S * W + _ * G + R * me, s[15] = T * y + S * H + _ * ie + R * Me, this;
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], f = e[6], d = e[10], m = e[14], g = e[3], x = e[7], p = e[11], u = e[15];
    return g * (+s * l * f - r * c * f - s * a * d + n * c * d + r * a * m - n * l * m) + x * (+t * l * m - t * c * d + s * o * d - r * o * m + r * c * h - s * l * h) + p * (+t * c * f - t * a * m - s * o * f + n * o * m + s * a * h - n * c * h) + u * (-r * a * h - t * l * f + t * a * d + r * o * f - n * o * d + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], f = e[9], d = e[10], m = e[11], g = e[12], x = e[13], p = e[14], u = e[15], T = f * p * c - x * d * c + x * l * m - a * p * m - f * l * u + a * d * u, S = g * d * c - h * p * c - g * l * m + o * p * m + h * l * u - o * d * u, _ = h * x * c - g * f * c + g * a * m - o * x * m - h * a * u + o * f * u, R = g * f * l - h * x * l - g * a * d + o * x * d + h * a * p - o * f * p, C = t * T + n * S + r * _ + s * R;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / C;
    return e[0] = T * b, e[1] = (x * d * s - f * p * s - x * r * m + n * p * m + f * r * u - n * d * u) * b, e[2] = (a * p * s - x * l * s + x * r * c - n * p * c - a * r * u + n * l * u) * b, e[3] = (f * l * s - a * d * s - f * r * c + n * d * c + a * r * m - n * l * m) * b, e[4] = S * b, e[5] = (h * p * s - g * d * s + g * r * m - t * p * m - h * r * u + t * d * u) * b, e[6] = (g * l * s - o * p * s - g * r * c + t * p * c + o * r * u - t * l * u) * b, e[7] = (o * d * s - h * l * s + h * r * c - t * d * c - o * r * m + t * l * m) * b, e[8] = _ * b, e[9] = (g * f * s - h * x * s - g * n * m + t * x * m + h * n * u - t * f * u) * b, e[10] = (o * x * s - g * a * s + g * n * c - t * x * c - o * n * u + t * a * u) * b, e[11] = (h * a * s - o * f * s - h * n * c + t * f * c + o * n * m - t * a * m) * b, e[12] = R * b, e[13] = (h * x * r - g * f * r + g * n * d - t * x * d - h * n * p + t * f * p) * b, e[14] = (g * a * r - o * x * r - g * n * l + t * x * l + o * n * p - t * a * p) * b, e[15] = (o * f * r - h * a * r + h * n * l - t * f * l - o * n * d + t * a * d) * b, this;
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
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, h = s * a;
    return this.set(
      c * o + n,
      c * a - r * l,
      c * l + r * a,
      0,
      c * a + r * l,
      h * a + n,
      h * l - r * o,
      0,
      c * l - r * a,
      h * l + r * o,
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
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, h = o + o, f = a + a, d = s * c, m = s * h, g = s * f, x = o * h, p = o * f, u = a * f, T = l * c, S = l * h, _ = l * f, R = n.x, C = n.y, b = n.z;
    return r[0] = (1 - (x + u)) * R, r[1] = (m + _) * R, r[2] = (g - S) * R, r[3] = 0, r[4] = (m - _) * C, r[5] = (1 - (d + u)) * C, r[6] = (p + T) * C, r[7] = 0, r[8] = (g + S) * b, r[9] = (p - T) * b, r[10] = (1 - (d + x)) * b, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
    let s = Ei.set(r[0], r[1], r[2]).length();
    const o = Ei.set(r[4], r[5], r[6]).length(), a = Ei.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], an.copy(this);
    const c = 1 / s, h = 1 / o, f = 1 / a;
    return an.elements[0] *= c, an.elements[1] *= c, an.elements[2] *= c, an.elements[4] *= h, an.elements[5] *= h, an.elements[6] *= h, an.elements[8] *= f, an.elements[9] *= f, an.elements[10] *= f, t.setFromRotationMatrix(an), n.x = s, n.y = o, n.z = a, this;
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
  makePerspective(e, t, n, r, s, o, a = _n) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - r), f = (t + e) / (t - e), d = (n + r) / (n - r);
    let m, g;
    if (a === _n)
      m = -(o + s) / (o - s), g = -2 * o * s / (o - s);
    else if (a === xs)
      m = -o / (o - s), g = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
  makeOrthographic(e, t, n, r, s, o, a = _n) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - r), f = 1 / (o - s), d = (t + e) * c, m = (n + r) * h;
    let g, x;
    if (a === _n)
      g = (o + s) * f, x = -2 * f;
    else if (a === xs)
      g = s * f, x = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const Ei = /* @__PURE__ */ new F(), an = /* @__PURE__ */ new lt(), Wu = /* @__PURE__ */ new F(0, 0, 0), Xu = /* @__PURE__ */ new F(1, 1, 1), On = /* @__PURE__ */ new F(), Br = /* @__PURE__ */ new F(), Xt = /* @__PURE__ */ new F(), Yo = /* @__PURE__ */ new lt(), qo = /* @__PURE__ */ new jt();
class Un {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = Un.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], h = r[9], f = r[2], d = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ve(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ve(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ve(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ve(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ve(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ve(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
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
    return Yo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Yo, t, n);
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
    return qo.setFromEuler(this), this.setFromQuaternion(qo, e);
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
Un.DEFAULT_ORDER = "XYZ";
class _c {
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
let Yu = 0;
const Zo = /* @__PURE__ */ new F(), yi = /* @__PURE__ */ new jt(), Sn = /* @__PURE__ */ new lt(), zr = /* @__PURE__ */ new F(), tr = /* @__PURE__ */ new F(), qu = /* @__PURE__ */ new F(), Zu = /* @__PURE__ */ new jt(), jo = /* @__PURE__ */ new F(1, 0, 0), $o = /* @__PURE__ */ new F(0, 1, 0), Ko = /* @__PURE__ */ new F(0, 0, 1), Jo = { type: "added" }, ju = { type: "removed" }, Ti = { type: "childadded", child: null }, Xs = { type: "childremoved", child: null };
class xt extends fi {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Yu++ }), this.uuid = br(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = xt.DEFAULT_UP.clone();
    const e = new F(), t = new Un(), n = new jt(), r = new F(1, 1, 1);
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
        value: new lt()
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
    }), this.matrix = new lt(), this.matrixWorld = new lt(), this.matrixAutoUpdate = xt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new _c(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return yi.setFromAxisAngle(e, t), this.quaternion.multiply(yi), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return yi.setFromAxisAngle(e, t), this.quaternion.premultiply(yi), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(jo, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis($o, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Ko, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Zo.copy(e).applyQuaternion(this.quaternion), this.position.add(Zo.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(jo, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis($o, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Ko, e);
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
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Sn.copy(this.matrixWorld).invert());
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
    e.isVector3 ? zr.copy(e) : zr.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), tr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Sn.lookAt(tr, zr, this.up) : Sn.lookAt(zr, tr, this.up), this.quaternion.setFromRotationMatrix(Sn), r && (Sn.extractRotation(r.matrixWorld), yi.setFromRotationMatrix(Sn), this.quaternion.premultiply(yi.invert()));
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
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Jo), Ti.child = e, this.dispatchEvent(Ti), Ti.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ju), Xs.child = e, this.dispatchEvent(Xs), Xs.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), Sn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Sn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Sn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Jo), Ti.child = e, this.dispatchEvent(Ti), Ti.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, e, qu), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, Zu, e), e;
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
          for (let c = 0, h = l.length; c < h; c++) {
            const f = l[c];
            s(e.shapes, f);
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
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), f = o(e.shapes), d = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
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
xt.DEFAULT_UP = /* @__PURE__ */ new F(0, 1, 0);
xt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const on = /* @__PURE__ */ new F(), Mn = /* @__PURE__ */ new F(), Ys = /* @__PURE__ */ new F(), En = /* @__PURE__ */ new F(), Ai = /* @__PURE__ */ new F(), bi = /* @__PURE__ */ new F(), Qo = /* @__PURE__ */ new F(), qs = /* @__PURE__ */ new F(), Zs = /* @__PURE__ */ new F(), js = /* @__PURE__ */ new F(), $s = /* @__PURE__ */ new ft(), Ks = /* @__PURE__ */ new ft(), Js = /* @__PURE__ */ new ft();
class hn {
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
    r.subVectors(n, t), on.subVectors(e, t), r.cross(on);
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
    on.subVectors(r, t), Mn.subVectors(n, t), Ys.subVectors(e, t);
    const o = on.dot(on), a = on.dot(Mn), l = on.dot(Ys), c = Mn.dot(Mn), h = Mn.dot(Ys), f = o * c - a * a;
    if (f === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / f, m = (c * l - a * h) * d, g = (o * h - a * l) * d;
    return s.set(1 - m - g, g, m);
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
    return this.getBarycoord(e, t, n, r, En) === null ? !1 : En.x >= 0 && En.y >= 0 && En.x + En.y <= 1;
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
    return this.getBarycoord(e, t, n, r, En) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, En.x), l.addScaledVector(o, En.y), l.addScaledVector(a, En.z), l);
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
    return $s.setScalar(0), Ks.setScalar(0), Js.setScalar(0), $s.fromBufferAttribute(e, t), Ks.fromBufferAttribute(e, n), Js.fromBufferAttribute(e, r), o.setScalar(0), o.addScaledVector($s, s.x), o.addScaledVector(Ks, s.y), o.addScaledVector(Js, s.z), o;
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
    return on.subVectors(n, t), Mn.subVectors(e, t), on.cross(Mn).dot(r) < 0;
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
    return on.subVectors(this.c, this.b), Mn.subVectors(this.a, this.b), on.cross(Mn).length() * 0.5;
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
    return hn.getNormal(this.a, this.b, this.c, e);
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
    return hn.getBarycoord(e, this.a, this.b, this.c, t);
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
    return hn.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
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
    return hn.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return hn.isFrontFacing(this.a, this.b, this.c, e);
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
    Ai.subVectors(r, n), bi.subVectors(s, n), qs.subVectors(e, n);
    const l = Ai.dot(qs), c = bi.dot(qs);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Zs.subVectors(e, r);
    const h = Ai.dot(Zs), f = bi.dot(Zs);
    if (h >= 0 && f <= h)
      return t.copy(r);
    const d = l * f - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(n).addScaledVector(Ai, o);
    js.subVectors(e, s);
    const m = Ai.dot(js), g = bi.dot(js);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const x = m * c - l * g;
    if (x <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(bi, a);
    const p = h * g - m * f;
    if (p <= 0 && f - h >= 0 && m - g >= 0)
      return Qo.subVectors(s, r), a = (f - h) / (f - h + (m - g)), t.copy(r).addScaledVector(Qo, a);
    const u = 1 / (p + x + d);
    return o = x * u, a = d * u, t.copy(n).addScaledVector(Ai, o).addScaledVector(bi, a);
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
const gc = {
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
}, Bn = { h: 0, s: 0, l: 0 }, Hr = { h: 0, s: 0, l: 0 };
function Qs(i, e, t) {
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
  setHex(e, t = en) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.toWorkingColorSpace(this, t), this;
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
  setRGB(e, t, n, r = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, qe.toWorkingColorSpace(this, r), this;
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
  setHSL(e, t, n, r = qe.workingColorSpace) {
    if (e = Lu(e, 1), t = Ve(t, 0, 1), n = Ve(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Qs(o, s, e + 1 / 3), this.g = Qs(o, s, e), this.b = Qs(o, s, e - 1 / 3);
    }
    return qe.toWorkingColorSpace(this, r), this;
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
  setStyle(e, t = en) {
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
  setColorName(e, t = en) {
    const n = gc[e.toLowerCase()];
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
    return this.r = Dn(e.r), this.g = Dn(e.g), this.b = Dn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Vi(e.r), this.g = Vi(e.g), this.b = Vi(e.b), this;
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
  getHex(e = en) {
    return qe.fromWorkingColorSpace(Rt.copy(this), e), Math.round(Ve(Rt.r * 255, 0, 255)) * 65536 + Math.round(Ve(Rt.g * 255, 0, 255)) * 256 + Math.round(Ve(Rt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = en) {
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
  getHSL(e, t = qe.workingColorSpace) {
    qe.fromWorkingColorSpace(Rt.copy(this), t);
    const n = Rt.r, r = Rt.g, s = Rt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let l, c;
    const h = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const f = o - a;
      switch (c = h <= 0.5 ? f / (o + a) : f / (2 - o - a), o) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = qe.workingColorSpace) {
    return qe.fromWorkingColorSpace(Rt.copy(this), t), e.r = Rt.r, e.g = Rt.g, e.b = Rt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = en) {
    qe.fromWorkingColorSpace(Rt.copy(this), e);
    const t = Rt.r, n = Rt.g, r = Rt.b;
    return e !== en ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
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
    return this.getHSL(Bn), this.setHSL(Bn.h + e, Bn.s + t, Bn.l + n);
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
    this.getHSL(Bn), e.getHSL(Hr);
    const n = Fs(Bn.h, Hr.h, t), r = Fs(Bn.s, Hr.s, t), s = Fs(Bn.l, Hr.l, t);
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
const Rt = /* @__PURE__ */ new Pe();
Pe.NAMES = gc;
let $u = 0;
class Rr extends fi {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: $u++ }), this.uuid = br(), this.name = "", this.type = "Material", this.blending = ki, this.side = Yn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Sa, this.blendDst = Ma, this.blendEquation = si, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Wi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = zo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = gi, this.stencilZFail = gi, this.stencilZPass = gi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ki && (n.blending = this.blending), this.side !== Yn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Sa && (n.blendSrc = this.blendSrc), this.blendDst !== Ma && (n.blendDst = this.blendDst), this.blendEquation !== si && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Wi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== zo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== gi && (n.stencilFail = this.stencilFail), this.stencilZFail !== gi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== gi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class vc extends Rr {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Pe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Un(), this.combine = tc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const vt = /* @__PURE__ */ new F(), kr = /* @__PURE__ */ new we();
let Ku = 0;
class $t {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Ku++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ho, this.updateRanges = [], this.gpuType = dn, this.version = 0;
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
        kr.fromBufferAttribute(this, t), kr.applyMatrix3(e), this.setXY(t, kr.x, kr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        vt.fromBufferAttribute(this, t), vt.applyMatrix3(e), this.setXYZ(t, vt.x, vt.y, vt.z);
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
      vt.fromBufferAttribute(this, t), vt.applyMatrix4(e), this.setXYZ(t, vt.x, vt.y, vt.z);
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
      vt.fromBufferAttribute(this, t), vt.applyNormalMatrix(e), this.setXYZ(t, vt.x, vt.y, vt.z);
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
      vt.fromBufferAttribute(this, t), vt.transformDirection(e), this.setXYZ(t, vt.x, vt.y, vt.z);
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
    return this.normalized && (n = Ji(n, this.array)), n;
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
    return this.normalized && (n = Ot(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ji(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Ot(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
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
    return e *= this.itemSize, this.normalized && (t = Ot(t, this.array), n = Ot(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
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
    return e *= this.itemSize, this.normalized && (t = Ot(t, this.array), n = Ot(n, this.array), r = Ot(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
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
    return e *= this.itemSize, this.normalized && (t = Ot(t, this.array), n = Ot(n, this.array), r = Ot(r, this.array), s = Ot(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Ho && (e.usage = this.usage), e;
  }
}
class xc extends $t {
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
class Sc extends $t {
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
class fn extends $t {
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
let Ju = 0;
const Qt = /* @__PURE__ */ new lt(), ea = /* @__PURE__ */ new xt(), wi = /* @__PURE__ */ new F(), Yt = /* @__PURE__ */ new wr(), nr = /* @__PURE__ */ new wr(), Et = /* @__PURE__ */ new F();
class pn extends fi {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ju++ }), this.uuid = br(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(e) ? this.index = new (fc(e) ? Sc : xc)(e, 1) : this.index = e, this;
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
    return Qt.makeRotationFromQuaternion(e), this.applyMatrix4(Qt), this;
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
    return Qt.makeRotationX(e), this.applyMatrix4(Qt), this;
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
    return Qt.makeRotationY(e), this.applyMatrix4(Qt), this;
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
    return Qt.makeRotationZ(e), this.applyMatrix4(Qt), this;
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
    return Qt.makeTranslation(e, t, n), this.applyMatrix4(Qt), this;
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
    return Qt.makeScale(e, t, n), this.applyMatrix4(Qt), this;
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
    return ea.lookAt(e), ea.updateMatrix(), this.applyMatrix4(ea.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(wi).negate(), this.translate(wi.x, wi.y, wi.z), this;
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
      this.setAttribute("position", new fn(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new wr());
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
          Yt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Et.addVectors(this.boundingBox.min, Yt.min), this.boundingBox.expandByPoint(Et), Et.addVectors(this.boundingBox.max, Yt.max), this.boundingBox.expandByPoint(Et)) : (this.boundingBox.expandByPoint(Yt.min), this.boundingBox.expandByPoint(Yt.max));
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
    this.boundingSphere === null && (this.boundingSphere = new Rs());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Yt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          nr.setFromBufferAttribute(a), this.morphTargetsRelative ? (Et.addVectors(Yt.min, nr.min), Yt.expandByPoint(Et), Et.addVectors(Yt.max, nr.max), Yt.expandByPoint(Et)) : (Yt.expandByPoint(nr.min), Yt.expandByPoint(nr.max));
        }
      Yt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        Et.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(Et));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            Et.fromBufferAttribute(a, c), l && (wi.fromBufferAttribute(e, c), Et.add(wi)), r = Math.max(r, n.distanceToSquared(Et));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new $t(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let D = 0; D < n.count; D++)
      a[D] = new F(), l[D] = new F();
    const c = new F(), h = new F(), f = new F(), d = new we(), m = new we(), g = new we(), x = new F(), p = new F();
    function u(D, y, E) {
      c.fromBufferAttribute(n, D), h.fromBufferAttribute(n, y), f.fromBufferAttribute(n, E), d.fromBufferAttribute(s, D), m.fromBufferAttribute(s, y), g.fromBufferAttribute(s, E), h.sub(c), f.sub(c), m.sub(d), g.sub(d);
      const L = 1 / (m.x * g.y - g.x * m.y);
      isFinite(L) && (x.copy(h).multiplyScalar(g.y).addScaledVector(f, -m.y).multiplyScalar(L), p.copy(f).multiplyScalar(m.x).addScaledVector(h, -g.x).multiplyScalar(L), a[D].add(x), a[y].add(x), a[E].add(x), l[D].add(p), l[y].add(p), l[E].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: e.count
    }]);
    for (let D = 0, y = T.length; D < y; ++D) {
      const E = T[D], L = E.start, W = E.count;
      for (let H = L, X = L + W; H < X; H += 3)
        u(
          e.getX(H + 0),
          e.getX(H + 1),
          e.getX(H + 2)
        );
    }
    const S = new F(), _ = new F(), R = new F(), C = new F();
    function b(D) {
      R.fromBufferAttribute(r, D), C.copy(R);
      const y = a[D];
      S.copy(y), S.sub(R.multiplyScalar(R.dot(y))).normalize(), _.crossVectors(C, y);
      const L = _.dot(l[D]) < 0 ? -1 : 1;
      o.setXYZW(D, S.x, S.y, S.z, L);
    }
    for (let D = 0, y = T.length; D < y; ++D) {
      const E = T[D], L = E.start, W = E.count;
      for (let H = L, X = L + W; H < X; H += 3)
        b(e.getX(H + 0)), b(e.getX(H + 1)), b(e.getX(H + 2));
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
        n = new $t(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const r = new F(), s = new F(), o = new F(), a = new F(), l = new F(), c = new F(), h = new F(), f = new F();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), x = e.getX(d + 1), p = e.getX(d + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, x), o.fromBufferAttribute(t, p), h.subVectors(o, s), f.subVectors(r, s), h.cross(f), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, p), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, s), f.subVectors(r, s), h.cross(f), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
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
      Et.fromBufferAttribute(e, t), Et.normalize(), e.setXYZ(t, Et.x, Et.y, Et.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, f = a.normalized, d = new c.constructor(l.length * h);
      let m = 0, g = 0;
      for (let x = 0, p = l.length; x < p; x++) {
        a.isInterleavedBufferAttribute ? m = l[x] * a.data.stride + a.offset : m = l[x] * h;
        for (let u = 0; u < h; u++)
          d[g++] = c[m++];
      }
      return new $t(d, h, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new pn(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let h = 0, f = c.length; h < f; h++) {
        const d = c[h], m = e(d, n);
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
      const c = this.morphAttributes[l], h = [];
      for (let f = 0, d = c.length; f < d; f++) {
        const m = c[f];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
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
      const h = r[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], f = s[c];
      for (let d = 0, m = f.length; d < m; d++)
        h.push(f[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
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
const el = /* @__PURE__ */ new lt(), Kn = /* @__PURE__ */ new mc(), Vr = /* @__PURE__ */ new Rs(), tl = /* @__PURE__ */ new F(), Gr = /* @__PURE__ */ new F(), Wr = /* @__PURE__ */ new F(), Xr = /* @__PURE__ */ new F(), ta = /* @__PURE__ */ new F(), Yr = /* @__PURE__ */ new F(), nl = /* @__PURE__ */ new F(), qr = /* @__PURE__ */ new F();
class kt extends xt {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new pn(), t = new vc()) {
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
      Yr.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l], f = s[l];
        h !== 0 && (ta.fromBufferAttribute(f, e), o ? Yr.addScaledVector(ta, h) : Yr.addScaledVector(ta.sub(t), h));
      }
      t.add(Yr);
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
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Vr.copy(n.boundingSphere), Vr.applyMatrix4(s), Kn.copy(e.ray).recast(e.near), !(Vr.containsPoint(Kn.origin) === !1 && (Kn.intersectSphere(Vr, tl) === null || Kn.origin.distanceToSquared(tl) > (e.far - e.near) ** 2)) && (el.copy(s).invert(), Kn.copy(e.ray).applyMatrix4(el), !(n.boundingBox !== null && Kn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Kn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, f = s.attributes.normal, d = s.groups, m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, x = d.length; g < x; g++) {
          const p = d[g], u = o[p.materialIndex], T = Math.max(p.start, m.start), S = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count));
          for (let _ = T, R = S; _ < R; _ += 3) {
            const C = a.getX(_), b = a.getX(_ + 1), D = a.getX(_ + 2);
            r = Zr(this, u, e, n, c, h, f, C, b, D), r && (r.faceIndex = Math.floor(_ / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), x = Math.min(a.count, m.start + m.count);
        for (let p = g, u = x; p < u; p += 3) {
          const T = a.getX(p), S = a.getX(p + 1), _ = a.getX(p + 2);
          r = Zr(this, o, e, n, c, h, f, T, S, _), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, x = d.length; g < x; g++) {
          const p = d[g], u = o[p.materialIndex], T = Math.max(p.start, m.start), S = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
          for (let _ = T, R = S; _ < R; _ += 3) {
            const C = _, b = _ + 1, D = _ + 2;
            r = Zr(this, u, e, n, c, h, f, C, b, D), r && (r.faceIndex = Math.floor(_ / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), x = Math.min(l.count, m.start + m.count);
        for (let p = g, u = x; p < u; p += 3) {
          const T = p, S = p + 1, _ = p + 2;
          r = Zr(this, o, e, n, c, h, f, T, S, _), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Qu(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === Vt ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, e.side === Yn, a), l === null) return null;
  qr.copy(a), qr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(qr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: qr.clone(),
    object: i
  };
}
function Zr(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Gr), i.getVertexPosition(l, Wr), i.getVertexPosition(c, Xr);
  const h = Qu(i, e, t, n, Gr, Wr, Xr, nl);
  if (h) {
    const f = new F();
    hn.getBarycoord(nl, Gr, Wr, Xr, f), r && (h.uv = hn.getInterpolatedAttribute(r, a, l, c, f, new we())), s && (h.uv1 = hn.getInterpolatedAttribute(s, a, l, c, f, new we())), o && (h.normal = hn.getInterpolatedAttribute(o, a, l, c, f, new F()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a,
      b: l,
      c,
      normal: new F(),
      materialIndex: 0
    };
    hn.getNormal(Gr, Wr, Xr, d.normal), h.face = d, h.barycoord = f;
  }
  return h;
}
class Cr extends pn {
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
    const l = [], c = [], h = [], f = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, o, 2), g("x", "z", "y", 1, -1, e, n, -t, r, o, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new fn(c, 3)), this.setAttribute("normal", new fn(h, 3)), this.setAttribute("uv", new fn(f, 2));
    function g(x, p, u, T, S, _, R, C, b, D, y) {
      const E = _ / b, L = R / D, W = _ / 2, H = R / 2, X = C / 2, Q = b + 1, G = D + 1;
      let ie = 0, k = 0;
      const le = new F();
      for (let me = 0; me < G; me++) {
        const Me = me * L - H;
        for (let Be = 0; Be < Q; Be++) {
          const Ke = Be * E - W;
          le[x] = Ke * T, le[p] = Me * S, le[u] = X, c.push(le.x, le.y, le.z), le[x] = 0, le[p] = 0, le[u] = C > 0 ? 1 : -1, h.push(le.x, le.y, le.z), f.push(Be / b), f.push(1 - me / D), ie += 1;
        }
      }
      for (let me = 0; me < D; me++)
        for (let Me = 0; Me < b; Me++) {
          const Be = d + Me + Q * me, Ke = d + Me + Q * (me + 1), q = d + (Me + 1) + Q * (me + 1), se = d + (Me + 1) + Q * me;
          l.push(Be, Ke, se), l.push(Ke, q, se), k += 6;
        }
      a.addGroup(m, k, y), m += k, d += ie;
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
    return new Cr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Zi(i) {
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
function Nt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Zi(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function eh(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Mc(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : qe.workingColorSpace;
}
const Ss = { clone: Zi, merge: Nt };
var th = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, nh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Dt extends Rr {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = th, this.fragmentShader = nh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Zi(e.uniforms), this.uniformsGroups = eh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class Mo extends xt {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new lt(), this.projectionMatrix = new lt(), this.projectionMatrixInverse = new lt(), this.coordinateSystem = _n;
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
const zn = /* @__PURE__ */ new F(), il = /* @__PURE__ */ new we(), rl = /* @__PURE__ */ new we();
class un extends Mo {
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
    this.fov = ro * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Ns * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return ro * 2 * Math.atan(
      Math.tan(Ns * 0.5 * this.fov) / this.zoom
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
    zn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(zn.x, zn.y).multiplyScalar(-e / zn.z), zn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(zn.x, zn.y).multiplyScalar(-e / zn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, il, rl), t.subVectors(rl, il);
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
    let t = e * Math.tan(Ns * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
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
const Ri = -90, Ci = 1;
class ih extends xt {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new un(Ri, Ci, e, t);
    r.layers = this.layers, this.add(r);
    const s = new un(Ri, Ci, e, t);
    s.layers = this.layers, this.add(s);
    const o = new un(Ri, Ci, e, t);
    o.layers = this.layers, this.add(o);
    const a = new un(Ri, Ci, e, t);
    a.layers = this.layers, this.add(a);
    const l = new un(Ri, Ci, e, t);
    l.layers = this.layers, this.add(l);
    const c = new un(Ri, Ci, e, t);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === _n)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === xs)
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
    const [s, o, a, l, c, h] = this.children, f = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = x, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(f, d, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Ec extends Lt {
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
  constructor(e = [], t = Xi, n, r, s, o, a, l, c, h) {
    super(e, t, n, r, s, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
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
class rh extends di {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Ec(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : qt;
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
    }, r = new Cr(5, 5, 5), s = new Dt({
      name: "CubemapFromEquirect",
      uniforms: Zi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Vt,
      blending: Wn
    });
    s.uniforms.tEquirect.value = t;
    const o = new kt(r, s), a = t.minFilter;
    return t.minFilter === li && (t.minFilter = qt), new ih(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
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
class jr extends xt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const sh = { type: "move" };
class na {
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
    return this._hand === null && (this._hand = new jr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new jr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new F(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new F()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new jr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new F(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new F()), this._grip;
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
        for (const x of e.hand.values()) {
          const p = t.getJointPose(x, n), u = this._getHandJoint(c, x);
          p !== null && (u.matrix.fromArray(p.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = p.radius), u.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], d = h.position.distanceTo(f.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && d > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(sh)));
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
      const n = new jr();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class ah extends xt {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Un(), this.environmentIntensity = 1, this.environmentRotation = new Un(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class sl extends Lt {
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
  constructor(e = null, t = 1, n = 1, r, s, o, a, l, c = Gt, h = Gt, f, d) {
    super(null, o, a, l, c, h, r, s, f, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ms extends $t {
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
const ia = /* @__PURE__ */ new F(), oh = /* @__PURE__ */ new F(), lh = /* @__PURE__ */ new Oe();
class ni {
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
    const r = ia.subVectors(n, t).cross(oh.subVectors(e, t)).normalize();
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
    const n = e.delta(ia), r = this.normal.dot(n);
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
    const n = t || lh.getNormalMatrix(e), r = this.coplanarPoint(ia).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Jn = /* @__PURE__ */ new Rs(), $r = /* @__PURE__ */ new F();
class Eo {
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
  constructor(e = new ni(), t = new ni(), n = new ni(), r = new ni(), s = new ni(), o = new ni()) {
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
  setFromProjectionMatrix(e, t = _n) {
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], h = r[5], f = r[6], d = r[7], m = r[8], g = r[9], x = r[10], p = r[11], u = r[12], T = r[13], S = r[14], _ = r[15];
    if (n[0].setComponents(l - s, d - c, p - m, _ - u).normalize(), n[1].setComponents(l + s, d + c, p + m, _ + u).normalize(), n[2].setComponents(l + o, d + h, p + g, _ + T).normalize(), n[3].setComponents(l - o, d - h, p - g, _ - T).normalize(), n[4].setComponents(l - a, d - f, p - x, _ - S).normalize(), t === _n)
      n[5].setComponents(l + a, d + f, p + x, _ + S).normalize();
    else if (t === xs)
      n[5].setComponents(a, f, x, S).normalize();
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
      e.boundingSphere === null && e.computeBoundingSphere(), Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Jn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    return Jn.center.set(0, 0, 0), Jn.radius = 0.7071067811865476, Jn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Jn);
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
      if ($r.x = r.normal.x > 0 ? e.max.x : e.min.x, $r.y = r.normal.y > 0 ? e.max.y : e.min.y, $r.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint($r) < 0)
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
class yc extends Rr {
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
const Es = /* @__PURE__ */ new F(), ys = /* @__PURE__ */ new F(), al = /* @__PURE__ */ new lt(), ir = /* @__PURE__ */ new mc(), Kr = /* @__PURE__ */ new Rs(), ra = /* @__PURE__ */ new F(), ol = /* @__PURE__ */ new F();
class ch extends xt {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new pn(), t = new yc()) {
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
        Es.fromBufferAttribute(t, r - 1), ys.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Es.distanceTo(ys);
      e.setAttribute("lineDistance", new fn(n, 1));
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), Kr.copy(n.boundingSphere), Kr.applyMatrix4(r), Kr.radius += s, e.ray.intersectsSphere(Kr) === !1) return;
    al.copy(r).invert(), ir.copy(e.ray).applyMatrix4(al);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const m = Math.max(0, o.start), g = Math.min(h.count, o.start + o.count);
      for (let x = m, p = g - 1; x < p; x += c) {
        const u = h.getX(x), T = h.getX(x + 1), S = Jr(this, e, ir, l, u, T, x);
        S && t.push(S);
      }
      if (this.isLineLoop) {
        const x = h.getX(g - 1), p = h.getX(m), u = Jr(this, e, ir, l, x, p, g - 1);
        u && t.push(u);
      }
    } else {
      const m = Math.max(0, o.start), g = Math.min(d.count, o.start + o.count);
      for (let x = m, p = g - 1; x < p; x += c) {
        const u = Jr(this, e, ir, l, x, x + 1, x);
        u && t.push(u);
      }
      if (this.isLineLoop) {
        const x = Jr(this, e, ir, l, g - 1, m, g - 1);
        x && t.push(x);
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
function Jr(i, e, t, n, r, s, o) {
  const a = i.geometry.attributes.position;
  if (Es.fromBufferAttribute(a, r), ys.fromBufferAttribute(a, s), t.distanceSqToSegment(Es, ys, ra, ol) > n) return;
  ra.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(ra);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: ol.clone().applyMatrix4(i.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const ll = /* @__PURE__ */ new F(), cl = /* @__PURE__ */ new F();
class uh extends ch {
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
        ll.fromBufferAttribute(t, r), cl.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + ll.distanceTo(cl);
      e.setAttribute("lineDistance", new fn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Tc extends Lt {
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
  constructor(e, t, n = hi, r, s, o, a = Gt, l = Gt, c, h = Mr) {
    if (h !== Mr && h !== Er)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, r, s, o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new So(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class ji extends pn {
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
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, h = l + 1, f = e / a, d = t / l, m = [], g = [], x = [], p = [];
    for (let u = 0; u < h; u++) {
      const T = u * d - o;
      for (let S = 0; S < c; S++) {
        const _ = S * f - s;
        g.push(_, -T, 0), x.push(0, 0, 1), p.push(S / a), p.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let T = 0; T < a; T++) {
        const S = T + c * u, _ = T + c * (u + 1), R = T + 1 + c * (u + 1), C = T + 1 + c * u;
        m.push(S, _, C), m.push(_, R, C);
      }
    this.setIndex(m), this.setAttribute("position", new fn(g, 3)), this.setAttribute("normal", new fn(x, 3)), this.setAttribute("uv", new fn(p, 2));
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
    return new ji(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class hh extends Rr {
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
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Su, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class dh extends Rr {
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
const ul = {
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
class fh {
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
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, r.onProgress !== void 0 && r.onProgress(h, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(h) {
      r.onError !== void 0 && r.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, f) {
      return c.push(h, f), this;
    }, this.removeHandler = function(h) {
      const f = c.indexOf(h);
      return f !== -1 && c.splice(f, 2), this;
    }, this.getHandler = function(h) {
      for (let f = 0, d = c.length; f < d; f += 2) {
        const m = c[f], g = c[f + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const ph = /* @__PURE__ */ new fh();
let yo = class {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : ph, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
yo.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class mh extends yo {
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
    const s = this, o = ul.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = yr("img");
    function l() {
      h(), ul.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(f) {
      h(), r && r(f), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class _h extends yo {
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
    const s = new Lt(), o = new mh(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class gh extends xt {
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
const sa = /* @__PURE__ */ new lt(), hl = /* @__PURE__ */ new F(), dl = /* @__PURE__ */ new F();
class vh {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new we(512, 512), this.map = null, this.mapPass = null, this.matrix = new lt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Eo(), this._frameExtents = new we(1, 1), this._viewportCount = 1, this._viewports = [
      new ft(0, 0, 1, 1)
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
    hl.setFromMatrixPosition(e.matrixWorld), t.position.copy(hl), dl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(dl), t.updateMatrixWorld(), sa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(sa), n.set(
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
    ), n.multiply(sa);
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
class To extends Mo {
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
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class xh extends vh {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new To(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Sh extends gh {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(xt.DEFAULT_UP), this.updateMatrix(), this.target = new xt(), this.shadow = new xh();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Ao extends pn {
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
class Mh extends un {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e, this.index = 0;
  }
}
class fl {
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
const Qr = /* @__PURE__ */ new F(), ht = /* @__PURE__ */ new Mo();
class Eh extends uh {
  /**
   * Constructs a new arrow helper.
   *
   * @param {Camera} camera - The camera to visualize.
   */
  constructor(e) {
    const t = new pn(), n = new yc({ color: 16777215, vertexColors: !0, toneMapped: !1 }), r = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(g, x) {
      l(g), l(x);
    }
    function l(g) {
      r.push(0, 0, 0), s.push(0, 0, 0), o[g] === void 0 && (o[g] = []), o[g].push(r.length / 3 - 1);
    }
    t.setAttribute("position", new fn(r, 3)), t.setAttribute("color", new fn(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    const c = new Pe(16755200), h = new Pe(16711680), f = new Pe(43775), d = new Pe(16777215), m = new Pe(3355443);
    this.setColors(c, h, f, d, m);
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
    ht.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    const s = this.camera.coordinateSystem === _n ? -1 : 0;
    pt("c", t, e, ht, 0, 0, s), pt("t", t, e, ht, 0, 0, 1), pt("n1", t, e, ht, -1, -1, s), pt("n2", t, e, ht, n, -1, s), pt("n3", t, e, ht, -1, r, s), pt("n4", t, e, ht, n, r, s), pt("f1", t, e, ht, -1, -1, 1), pt("f2", t, e, ht, n, -1, 1), pt("f3", t, e, ht, -1, r, 1), pt("f4", t, e, ht, n, r, 1), pt("u1", t, e, ht, n * 0.7, r * 1.1, s), pt("u2", t, e, ht, -1 * 0.7, r * 1.1, s), pt("u3", t, e, ht, 0, r * 2, s), pt("cf1", t, e, ht, -1, 0, 1), pt("cf2", t, e, ht, n, 0, 1), pt("cf3", t, e, ht, 0, -1, 1), pt("cf4", t, e, ht, 0, r, 1), pt("cn1", t, e, ht, -1, 0, s), pt("cn2", t, e, ht, n, 0, s), pt("cn3", t, e, ht, 0, -1, s), pt("cn4", t, e, ht, 0, r, s), e.getAttribute("position").needsUpdate = !0;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function pt(i, e, t, n, r, s, o) {
  Qr.set(r, s, o).unproject(n);
  const a = e[i];
  if (a !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, h = a.length; c < h; c++)
      l.setXYZ(a[c], Qr.x, Qr.y, Qr.z);
  }
}
function pl(i, e, t, n) {
  const r = yh(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case sc:
      return i * e;
    case oc:
      return i * e;
    case lc:
      return i * e * 2;
    case cc:
      return i * e / r.components * r.byteLength;
    case go:
      return i * e / r.components * r.byteLength;
    case uc:
      return i * e * 2 / r.components * r.byteLength;
    case vo:
      return i * e * 2 / r.components * r.byteLength;
    case ac:
      return i * e * 3 / r.components * r.byteLength;
    case Zt:
      return i * e * 4 / r.components * r.byteLength;
    case xo:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case us:
    case hs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ds:
    case fs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Ua:
    case Na:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case La:
    case Ia:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Fa:
    case Oa:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ba:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case za:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ha:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case ka:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Va:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ga:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Wa:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Xa:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ya:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case qa:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Za:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case ja:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case $a:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ka:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ja:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case ps:
    case Qa:
    case eo:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case hc:
    case to:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case no:
    case io:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function yh(i) {
  switch (i) {
    case Ln:
    case nc:
      return { byteLength: 1, components: 1 };
    case xr:
    case ic:
    case Ar:
      return { byteLength: 2, components: 1 };
    case mo:
    case _o:
      return { byteLength: 2, components: 4 };
    case hi:
    case po:
    case dn:
      return { byteLength: 4, components: 1 };
    case rc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: uo
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = uo);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Ac() {
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
function Th(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, h = a.usage, f = c.byteLength, d = i.createBuffer();
    i.bindBuffer(l, d), i.bufferData(l, c, h), a.onUploadCallback();
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
      buffer: d,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: a.version,
      size: f
    };
  }
  function n(a, l, c) {
    const h = l.array, f = l.updateRanges;
    if (i.bindBuffer(c, a), f.length === 0)
      i.bufferSubData(c, 0, h);
    else {
      f.sort((m, g) => m.start - g.start);
      let d = 0;
      for (let m = 1; m < f.length; m++) {
        const g = f[d], x = f[m];
        x.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          x.start + x.count - g.start
        ) : (++d, f[d] = x);
      }
      f.length = d + 1;
      for (let m = 0, g = f.length; m < g; m++) {
        const x = f[m];
        i.bufferSubData(
          c,
          x.start * h.BYTES_PER_ELEMENT,
          h,
          x.start,
          x.count
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
      const h = e.get(a);
      (!h || h.version < a.version) && e.set(a, {
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
var Ah = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, bh = `#ifdef USE_ALPHAHASH
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
#endif`, wh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Rh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ch = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ph = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Dh = `#ifdef USE_AOMAP
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
#endif`, Lh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Uh = `#ifdef USE_BATCHING
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
#endif`, Ih = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Nh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Fh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Oh = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Bh = `#ifdef USE_IRIDESCENCE
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
#endif`, zh = `#ifdef USE_BUMPMAP
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
#endif`, Hh = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, kh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Vh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Gh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Wh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Xh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Yh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, qh = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Zh = `#define PI 3.141592653589793
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
} // validated`, jh = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, $h = `vec3 transformedNormal = objectNormal;
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
#endif`, Kh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Jh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Qh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, ed = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, td = "gl_FragColor = linearToOutputTexel( gl_FragColor );", nd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, id = `#ifdef USE_ENVMAP
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
#endif`, rd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, sd = `#ifdef USE_ENVMAP
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
#endif`, ad = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, od = `#ifdef USE_ENVMAP
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
#endif`, ld = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, cd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ud = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, hd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, dd = `#ifdef USE_GRADIENTMAP
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
}`, fd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, pd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, md = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, _d = `uniform bool receiveShadow;
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
#endif`, gd = `#ifdef USE_ENVMAP
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
#endif`, vd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, xd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Sd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Md = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ed = `PhysicalMaterial material;
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
#endif`, yd = `struct PhysicalMaterial {
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
}`, Td = `
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
#endif`, Ad = `#if defined( RE_IndirectDiffuse )
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
#endif`, bd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, wd = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Rd = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Cd = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Pd = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Dd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ld = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ud = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Id = `#if defined( USE_POINTS_UV )
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
#endif`, Nd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Fd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Od = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Bd = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, zd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Hd = `#ifdef USE_MORPHTARGETS
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
#endif`, kd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Vd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Gd = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Wd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Xd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Yd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, qd = `#ifdef USE_NORMALMAP
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
#endif`, Zd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, jd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, $d = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Kd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Jd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Qd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, ef = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, tf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, nf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, rf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, sf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, af = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, of = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, lf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, cf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, uf = `float getShadowMask() {
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
}`, hf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, df = `#ifdef USE_SKINNING
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
#endif`, ff = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, pf = `#ifdef USE_SKINNING
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
#endif`, mf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, _f = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, gf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, vf = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, xf = `#ifdef USE_TRANSMISSION
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
#endif`, Sf = `#ifdef USE_TRANSMISSION
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
#endif`, Mf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Ef = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, yf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Tf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Af = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, bf = `uniform sampler2D t2D;
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
}`, wf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Rf = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Pf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Df = `#include <common>
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
}`, Lf = `#if DEPTH_PACKING == 3200
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
}`, Uf = `#define DISTANCE
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
}`, If = `#define DISTANCE
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
}`, Nf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ff = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Of = `uniform float scale;
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
}`, Bf = `uniform vec3 diffuse;
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
}`, zf = `#include <common>
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
}`, Hf = `uniform vec3 diffuse;
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
}`, kf = `#define LAMBERT
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
}`, Vf = `#define LAMBERT
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
}`, Gf = `#define MATCAP
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
}`, Wf = `#define MATCAP
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
}`, Xf = `#define NORMAL
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
}`, Yf = `#define NORMAL
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
}`, qf = `#define PHONG
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
}`, Zf = `#define PHONG
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
}`, jf = `#define STANDARD
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
}`, $f = `#define STANDARD
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
}`, Kf = `#define TOON
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
}`, Jf = `#define TOON
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
}`, Qf = `uniform float size;
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
}`, ep = `uniform vec3 diffuse;
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
}`, tp = `#include <common>
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
}`, np = `uniform vec3 color;
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
}`, ip = `uniform float rotation;
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
}`, rp = `uniform vec3 diffuse;
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
  alphahash_fragment: Ah,
  alphahash_pars_fragment: bh,
  alphamap_fragment: wh,
  alphamap_pars_fragment: Rh,
  alphatest_fragment: Ch,
  alphatest_pars_fragment: Ph,
  aomap_fragment: Dh,
  aomap_pars_fragment: Lh,
  batching_pars_vertex: Uh,
  batching_vertex: Ih,
  begin_vertex: Nh,
  beginnormal_vertex: Fh,
  bsdfs: Oh,
  iridescence_fragment: Bh,
  bumpmap_pars_fragment: zh,
  clipping_planes_fragment: Hh,
  clipping_planes_pars_fragment: kh,
  clipping_planes_pars_vertex: Vh,
  clipping_planes_vertex: Gh,
  color_fragment: Wh,
  color_pars_fragment: Xh,
  color_pars_vertex: Yh,
  color_vertex: qh,
  common: Zh,
  cube_uv_reflection_fragment: jh,
  defaultnormal_vertex: $h,
  displacementmap_pars_vertex: Kh,
  displacementmap_vertex: Jh,
  emissivemap_fragment: Qh,
  emissivemap_pars_fragment: ed,
  colorspace_fragment: td,
  colorspace_pars_fragment: nd,
  envmap_fragment: id,
  envmap_common_pars_fragment: rd,
  envmap_pars_fragment: sd,
  envmap_pars_vertex: ad,
  envmap_physical_pars_fragment: gd,
  envmap_vertex: od,
  fog_vertex: ld,
  fog_pars_vertex: cd,
  fog_fragment: ud,
  fog_pars_fragment: hd,
  gradientmap_pars_fragment: dd,
  lightmap_pars_fragment: fd,
  lights_lambert_fragment: pd,
  lights_lambert_pars_fragment: md,
  lights_pars_begin: _d,
  lights_toon_fragment: vd,
  lights_toon_pars_fragment: xd,
  lights_phong_fragment: Sd,
  lights_phong_pars_fragment: Md,
  lights_physical_fragment: Ed,
  lights_physical_pars_fragment: yd,
  lights_fragment_begin: Td,
  lights_fragment_maps: Ad,
  lights_fragment_end: bd,
  logdepthbuf_fragment: wd,
  logdepthbuf_pars_fragment: Rd,
  logdepthbuf_pars_vertex: Cd,
  logdepthbuf_vertex: Pd,
  map_fragment: Dd,
  map_pars_fragment: Ld,
  map_particle_fragment: Ud,
  map_particle_pars_fragment: Id,
  metalnessmap_fragment: Nd,
  metalnessmap_pars_fragment: Fd,
  morphinstance_vertex: Od,
  morphcolor_vertex: Bd,
  morphnormal_vertex: zd,
  morphtarget_pars_vertex: Hd,
  morphtarget_vertex: kd,
  normal_fragment_begin: Vd,
  normal_fragment_maps: Gd,
  normal_pars_fragment: Wd,
  normal_pars_vertex: Xd,
  normal_vertex: Yd,
  normalmap_pars_fragment: qd,
  clearcoat_normal_fragment_begin: Zd,
  clearcoat_normal_fragment_maps: jd,
  clearcoat_pars_fragment: $d,
  iridescence_pars_fragment: Kd,
  opaque_fragment: Jd,
  packing: Qd,
  premultiplied_alpha_fragment: ef,
  project_vertex: tf,
  dithering_fragment: nf,
  dithering_pars_fragment: rf,
  roughnessmap_fragment: sf,
  roughnessmap_pars_fragment: af,
  shadowmap_pars_fragment: of,
  shadowmap_pars_vertex: lf,
  shadowmap_vertex: cf,
  shadowmask_pars_fragment: uf,
  skinbase_vertex: hf,
  skinning_pars_vertex: df,
  skinning_vertex: ff,
  skinnormal_vertex: pf,
  specularmap_fragment: mf,
  specularmap_pars_fragment: _f,
  tonemapping_fragment: gf,
  tonemapping_pars_fragment: vf,
  transmission_fragment: xf,
  transmission_pars_fragment: Sf,
  uv_pars_fragment: Mf,
  uv_pars_vertex: Ef,
  uv_vertex: yf,
  worldpos_vertex: Tf,
  background_vert: Af,
  background_frag: bf,
  backgroundCube_vert: wf,
  backgroundCube_frag: Rf,
  cube_vert: Cf,
  cube_frag: Pf,
  depth_vert: Df,
  depth_frag: Lf,
  distanceRGBA_vert: Uf,
  distanceRGBA_frag: If,
  equirect_vert: Nf,
  equirect_frag: Ff,
  linedashed_vert: Of,
  linedashed_frag: Bf,
  meshbasic_vert: zf,
  meshbasic_frag: Hf,
  meshlambert_vert: kf,
  meshlambert_frag: Vf,
  meshmatcap_vert: Gf,
  meshmatcap_frag: Wf,
  meshnormal_vert: Xf,
  meshnormal_frag: Yf,
  meshphong_vert: qf,
  meshphong_frag: Zf,
  meshphysical_vert: jf,
  meshphysical_frag: $f,
  meshtoon_vert: Kf,
  meshtoon_frag: Jf,
  points_vert: Qf,
  points_frag: ep,
  shadow_vert: tp,
  shadow_frag: np,
  sprite_vert: ip,
  sprite_frag: rp
}, ae = {
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
    normalScale: { value: /* @__PURE__ */ new we(1, 1) }
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
    center: { value: /* @__PURE__ */ new we(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaTest: { value: 0 }
  }
}, mn = {
  basic: {
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pe(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
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
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.roughnessmap,
      ae.metalnessmap,
      ae.fog,
      ae.lights,
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
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.gradientmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Pe(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Nt([
      ae.points,
      ae.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.fog,
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
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Nt([
      ae.sprite,
      ae.fog
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
    uniforms: /* @__PURE__ */ Nt([
      ae.common,
      ae.displacementmap,
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
    uniforms: /* @__PURE__ */ Nt([
      ae.lights,
      ae.fog,
      {
        color: { value: /* @__PURE__ */ new Pe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
mn.physical = {
  uniforms: /* @__PURE__ */ Nt([
    mn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Oe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Oe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new we(1, 1) },
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
      transmissionSamplerSize: { value: /* @__PURE__ */ new we() },
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
      anisotropyVector: { value: /* @__PURE__ */ new we() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Oe() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const es = { r: 0, b: 0, g: 0 }, Qn = /* @__PURE__ */ new Un(), sp = /* @__PURE__ */ new lt();
function ap(i, e, t, n, r, s, o) {
  const a = new Pe(0);
  let l = s === !0 ? 0 : 1, c, h, f = null, d = 0, m = null;
  function g(S) {
    let _ = S.isScene === !0 ? S.background : null;
    return _ && _.isTexture && (_ = (S.backgroundBlurriness > 0 ? t : e).get(_)), _;
  }
  function x(S) {
    let _ = !1;
    const R = g(S);
    R === null ? u(a, l) : R && R.isColor && (u(R, 1), _ = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || _) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(S, _) {
    const R = g(_);
    R && (R.isCubeTexture || R.mapping === ws) ? (h === void 0 && (h = new kt(
      new Cr(1, 1, 1),
      new Dt({
        name: "BackgroundCubeMaterial",
        uniforms: Zi(mn.backgroundCube.uniforms),
        vertexShader: mn.backgroundCube.vertexShader,
        fragmentShader: mn.backgroundCube.fragmentShader,
        side: Vt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, b, D) {
      this.matrixWorld.copyPosition(D.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), Qn.copy(_.backgroundRotation), Qn.x *= -1, Qn.y *= -1, Qn.z *= -1, R.isCubeTexture && R.isRenderTargetTexture === !1 && (Qn.y *= -1, Qn.z *= -1), h.material.uniforms.envMap.value = R, h.material.uniforms.flipEnvMap.value = R.isCubeTexture && R.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(Qn)), h.material.toneMapped = qe.getTransfer(R.colorSpace) !== tt, (f !== R || d !== R.version || m !== i.toneMapping) && (h.material.needsUpdate = !0, f = R, d = R.version, m = i.toneMapping), h.layers.enableAll(), S.unshift(h, h.geometry, h.material, 0, 0, null)) : R && R.isTexture && (c === void 0 && (c = new kt(
      new ji(2, 2),
      new Dt({
        name: "BackgroundMaterial",
        uniforms: Zi(mn.background.uniforms),
        vertexShader: mn.background.vertexShader,
        fragmentShader: mn.background.fragmentShader,
        side: Yn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = R, c.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, c.material.toneMapped = qe.getTransfer(R.colorSpace) !== tt, R.matrixAutoUpdate === !0 && R.updateMatrix(), c.material.uniforms.uvTransform.value.copy(R.matrix), (f !== R || d !== R.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, f = R, d = R.version, m = i.toneMapping), c.layers.enableAll(), S.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function u(S, _) {
    S.getRGB(es, Mc(i)), n.buffers.color.setClear(es.r, es.g, es.b, _, o);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(S, _ = 1) {
      a.set(S), l = _, u(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(S) {
      l = S, u(a, l);
    },
    render: x,
    addToRenderList: p,
    dispose: T
  };
}
function op(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = d(null);
  let s = r, o = !1;
  function a(E, L, W, H, X) {
    let Q = !1;
    const G = f(H, W, L);
    s !== G && (s = G, c(s.object)), Q = m(E, H, W, X), Q && g(E, H, W, X), X !== null && e.update(X, i.ELEMENT_ARRAY_BUFFER), (Q || o) && (o = !1, _(E, L, W, H), X !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(X).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(E) {
    return i.bindVertexArray(E);
  }
  function h(E) {
    return i.deleteVertexArray(E);
  }
  function f(E, L, W) {
    const H = W.wireframe === !0;
    let X = n[E.id];
    X === void 0 && (X = {}, n[E.id] = X);
    let Q = X[L.id];
    Q === void 0 && (Q = {}, X[L.id] = Q);
    let G = Q[H];
    return G === void 0 && (G = d(l()), Q[H] = G), G;
  }
  function d(E) {
    const L = [], W = [], H = [];
    for (let X = 0; X < t; X++)
      L[X] = 0, W[X] = 0, H[X] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: W,
      attributeDivisors: H,
      object: E,
      attributes: {},
      index: null
    };
  }
  function m(E, L, W, H) {
    const X = s.attributes, Q = L.attributes;
    let G = 0;
    const ie = W.getAttributes();
    for (const k in ie)
      if (ie[k].location >= 0) {
        const me = X[k];
        let Me = Q[k];
        if (Me === void 0 && (k === "instanceMatrix" && E.instanceMatrix && (Me = E.instanceMatrix), k === "instanceColor" && E.instanceColor && (Me = E.instanceColor)), me === void 0 || me.attribute !== Me || Me && me.data !== Me.data) return !0;
        G++;
      }
    return s.attributesNum !== G || s.index !== H;
  }
  function g(E, L, W, H) {
    const X = {}, Q = L.attributes;
    let G = 0;
    const ie = W.getAttributes();
    for (const k in ie)
      if (ie[k].location >= 0) {
        let me = Q[k];
        me === void 0 && (k === "instanceMatrix" && E.instanceMatrix && (me = E.instanceMatrix), k === "instanceColor" && E.instanceColor && (me = E.instanceColor));
        const Me = {};
        Me.attribute = me, me && me.data && (Me.data = me.data), X[k] = Me, G++;
      }
    s.attributes = X, s.attributesNum = G, s.index = H;
  }
  function x() {
    const E = s.newAttributes;
    for (let L = 0, W = E.length; L < W; L++)
      E[L] = 0;
  }
  function p(E) {
    u(E, 0);
  }
  function u(E, L) {
    const W = s.newAttributes, H = s.enabledAttributes, X = s.attributeDivisors;
    W[E] = 1, H[E] === 0 && (i.enableVertexAttribArray(E), H[E] = 1), X[E] !== L && (i.vertexAttribDivisor(E, L), X[E] = L);
  }
  function T() {
    const E = s.newAttributes, L = s.enabledAttributes;
    for (let W = 0, H = L.length; W < H; W++)
      L[W] !== E[W] && (i.disableVertexAttribArray(W), L[W] = 0);
  }
  function S(E, L, W, H, X, Q, G) {
    G === !0 ? i.vertexAttribIPointer(E, L, W, X, Q) : i.vertexAttribPointer(E, L, W, H, X, Q);
  }
  function _(E, L, W, H) {
    x();
    const X = H.attributes, Q = W.getAttributes(), G = L.defaultAttributeValues;
    for (const ie in Q) {
      const k = Q[ie];
      if (k.location >= 0) {
        let le = X[ie];
        if (le === void 0 && (ie === "instanceMatrix" && E.instanceMatrix && (le = E.instanceMatrix), ie === "instanceColor" && E.instanceColor && (le = E.instanceColor)), le !== void 0) {
          const me = le.normalized, Me = le.itemSize, Be = e.get(le);
          if (Be === void 0) continue;
          const Ke = Be.buffer, q = Be.type, se = Be.bytesPerElement, ve = q === i.INT || q === i.UNSIGNED_INT || le.gpuType === po;
          if (le.isInterleavedBufferAttribute) {
            const oe = le.data, Te = oe.stride, Xe = le.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let Re = 0; Re < k.locationSize; Re++)
                u(k.location + Re, oe.meshPerAttribute);
              E.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let Re = 0; Re < k.locationSize; Re++)
                p(k.location + Re);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let Re = 0; Re < k.locationSize; Re++)
              S(
                k.location + Re,
                Me / k.locationSize,
                q,
                me,
                Te * se,
                (Xe + Me / k.locationSize * Re) * se,
                ve
              );
          } else {
            if (le.isInstancedBufferAttribute) {
              for (let oe = 0; oe < k.locationSize; oe++)
                u(k.location + oe, le.meshPerAttribute);
              E.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let oe = 0; oe < k.locationSize; oe++)
                p(k.location + oe);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let oe = 0; oe < k.locationSize; oe++)
              S(
                k.location + oe,
                Me / k.locationSize,
                q,
                me,
                Me * se,
                Me / k.locationSize * oe * se,
                ve
              );
          }
        } else if (G !== void 0) {
          const me = G[ie];
          if (me !== void 0)
            switch (me.length) {
              case 2:
                i.vertexAttrib2fv(k.location, me);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, me);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, me);
                break;
              default:
                i.vertexAttrib1fv(k.location, me);
            }
        }
      }
    }
    T();
  }
  function R() {
    D();
    for (const E in n) {
      const L = n[E];
      for (const W in L) {
        const H = L[W];
        for (const X in H)
          h(H[X].object), delete H[X];
        delete L[W];
      }
      delete n[E];
    }
  }
  function C(E) {
    if (n[E.id] === void 0) return;
    const L = n[E.id];
    for (const W in L) {
      const H = L[W];
      for (const X in H)
        h(H[X].object), delete H[X];
      delete L[W];
    }
    delete n[E.id];
  }
  function b(E) {
    for (const L in n) {
      const W = n[L];
      if (W[E.id] === void 0) continue;
      const H = W[E.id];
      for (const X in H)
        h(H[X].object), delete H[X];
      delete W[E.id];
    }
  }
  function D() {
    y(), o = !0, s !== r && (s = r, c(s.object));
  }
  function y() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: a,
    reset: D,
    resetDefaultState: y,
    dispose: R,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: b,
    initAttributes: x,
    enableAttribute: p,
    disableUnusedAttributes: T
  };
}
function lp(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, h) {
    i.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function o(c, h, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, h, f), t.update(h, n, f));
  }
  function a(c, h, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, f);
    let m = 0;
    for (let g = 0; g < f; g++)
      m += h[g];
    t.update(m, n, 1);
  }
  function l(c, h, f, d) {
    if (f === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let g = 0; g < c.length; g++)
        o(c[g], h[g], d[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, f);
      let g = 0;
      for (let x = 0; x < f; x++)
        g += h[x] * d[x];
      t.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function cp(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function o(b) {
    return !(b !== Zt && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(b) {
    const D = b === Ar && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(b !== Ln && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    b !== dn && !D);
  }
  function l(b) {
    if (b === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      b = "mediump";
    }
    return b === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const f = t.logarithmicDepthBuffer === !0, d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), u = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), S = i.getParameter(i.MAX_VARYING_VECTORS), _ = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = g > 0, C = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: d,
    maxTextures: m,
    maxVertexTextures: g,
    maxTextureSize: x,
    maxCubemapSize: p,
    maxAttributes: u,
    maxVertexUniforms: T,
    maxVaryings: S,
    maxFragmentUniforms: _,
    vertexTextures: R,
    maxSamples: C
  };
}
function up(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new ni(), a = new Oe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, d) {
    const m = f.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = d, n = f.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, d) {
    t = h(f, d, 0);
  }, this.setState = function(f, d, m) {
    const g = f.clippingPlanes, x = f.clipIntersection, p = f.clipShadows, u = i.get(f);
    if (!r || g === null || g.length === 0 || s && !p)
      s ? h(null) : c();
    else {
      const T = s ? 0 : n, S = T * 4;
      let _ = u.clippingState || null;
      l.value = _, _ = h(g, d, S, m);
      for (let R = 0; R !== S; ++R)
        _[R] = t[R];
      u.clippingState = _, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(f, d, m, g) {
    const x = f !== null ? f.length : 0;
    let p = null;
    if (x !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const u = m + x * 4, T = d.matrixWorldInverse;
        a.getNormalMatrix(T), (p === null || p.length < u) && (p = new Float32Array(u));
        for (let S = 0, _ = m; S !== x; ++S, _ += 4)
          o.copy(f[S]).applyMatrix4(T, a), o.normal.toArray(p, _), p[_ + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = x, e.numIntersection = 0, p;
  }
}
function hp(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Ca ? o.mapping = Xi : a === Pa && (o.mapping = Yi), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Ca || a === Pa)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new rh(l.height);
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
const Fi = 4, ml = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ai = 20, aa = /* @__PURE__ */ new To(), _l = /* @__PURE__ */ new Pe();
let oa = null, la = 0, ca = 0, ua = !1;
const ii = (1 + Math.sqrt(5)) / 2, Pi = 1 / ii, gl = [
  /* @__PURE__ */ new F(-ii, Pi, 0),
  /* @__PURE__ */ new F(ii, Pi, 0),
  /* @__PURE__ */ new F(-Pi, 0, ii),
  /* @__PURE__ */ new F(Pi, 0, ii),
  /* @__PURE__ */ new F(0, ii, -Pi),
  /* @__PURE__ */ new F(0, ii, Pi),
  /* @__PURE__ */ new F(-1, 1, -1),
  /* @__PURE__ */ new F(1, 1, -1),
  /* @__PURE__ */ new F(-1, 1, 1),
  /* @__PURE__ */ new F(1, 1, 1)
], dp = /* @__PURE__ */ new F();
class vl {
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
      position: a = dp
    } = s;
    oa = this._renderer.getRenderTarget(), la = this._renderer.getActiveCubeFace(), ca = this._renderer.getActiveMipmapLevel(), ua = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(o);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Ml(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Sl(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(oa, la, ca), this._renderer.xr.enabled = ua, e.scissorTest = !1, ts(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Xi || e.mapping === Yi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), oa = this._renderer.getRenderTarget(), la = this._renderer.getActiveCubeFace(), ca = this._renderer.getActiveMipmapLevel(), ua = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: qt,
      minFilter: qt,
      generateMipmaps: !1,
      type: Ar,
      format: Zt,
      colorSpace: qi,
      depthBuffer: !1
    }, r = xl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = xl(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = fp(s)), this._blurMaterial = pp(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new kt(this._lodPlanes[0], e);
    this._renderer.compile(t, aa);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const l = new un(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], f = this._renderer, d = f.autoClear, m = f.toneMapping;
    f.getClearColor(_l), f.toneMapping = Xn, f.autoClear = !1;
    const g = new vc({
      name: "PMREM.Background",
      side: Vt,
      depthWrite: !1,
      depthTest: !1
    }), x = new kt(new Cr(), g);
    let p = !1;
    const u = e.background;
    u ? u.isColor && (g.color.copy(u), e.background = null, p = !0) : (g.color.copy(_l), p = !0);
    for (let T = 0; T < 6; T++) {
      const S = T % 3;
      S === 0 ? (l.up.set(0, c[T], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + h[T], s.y, s.z)) : S === 1 ? (l.up.set(0, 0, c[T]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + h[T], s.z)) : (l.up.set(0, c[T], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + h[T]));
      const _ = this._cubeSize;
      ts(r, S * _, T > 2 ? _ : 0, _, _), f.setRenderTarget(r), p && f.render(x, l), f.render(e, l);
    }
    x.geometry.dispose(), x.material.dispose(), f.toneMapping = m, f.autoClear = d, e.background = u;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Xi || e.mapping === Yi;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ml()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Sl());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new kt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    ts(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, aa);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = gl[(r - s - 1) % gl.length];
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
    const h = 3, f = new kt(this._lodPlanes[r], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * ai - 1), x = s / g, p = isFinite(s) ? 1 + Math.floor(h * x) : ai;
    p > ai && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);
    const u = [];
    let T = 0;
    for (let b = 0; b < ai; ++b) {
      const D = b / x, y = Math.exp(-D * D / 2);
      u.push(y), b === 0 ? T += y : b < p && (T += 2 * y);
    }
    for (let b = 0; b < u.length; b++)
      u[b] = u[b] / T;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = u, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: S } = this;
    d.dTheta.value = g, d.mipInt.value = S - n;
    const _ = this._sizeLods[r], R = 3 * _ * (r > S - Fi ? r - S + Fi : 0), C = 4 * (this._cubeSize - _);
    ts(t, R, C, 3 * _, 2 * _), l.setRenderTarget(t), l.render(f, aa);
  }
}
function fp(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Fi + 1 + ml.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - Fi ? l = ml[o - i + Fi - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, f = 1 + c, d = [h, h, f, h, f, f, h, h, f, f, h, f], m = 6, g = 6, x = 3, p = 2, u = 1, T = new Float32Array(x * g * m), S = new Float32Array(p * g * m), _ = new Float32Array(u * g * m);
    for (let C = 0; C < m; C++) {
      const b = C % 3 * 2 / 3 - 1, D = C > 2 ? 0 : -1, y = [
        b,
        D,
        0,
        b + 2 / 3,
        D,
        0,
        b + 2 / 3,
        D + 1,
        0,
        b,
        D,
        0,
        b + 2 / 3,
        D + 1,
        0,
        b,
        D + 1,
        0
      ];
      T.set(y, x * g * C), S.set(d, p * g * C);
      const E = [C, C, C, C, C, C];
      _.set(E, u * g * C);
    }
    const R = new pn();
    R.setAttribute("position", new $t(T, x)), R.setAttribute("uv", new $t(S, p)), R.setAttribute("faceIndex", new $t(_, u)), e.push(R), r > Fi && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function xl(i, e, t) {
  const n = new di(i, e, t);
  return n.texture.mapping = ws, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ts(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function pp(i, e, t) {
  const n = new Float32Array(ai), r = new F(0, 1, 0);
  return new Dt({
    name: "SphericalGaussianBlur",
    defines: {
      n: ai,
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
    vertexShader: bo(),
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
    blending: Wn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Sl() {
  return new Dt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: bo(),
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
    blending: Wn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ml() {
  return new Dt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: bo(),
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
    blending: Wn,
    depthTest: !1,
    depthWrite: !1
  });
}
function bo() {
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
function mp(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === Ca || l === Pa, h = l === Xi || l === Yi;
      if (c || h) {
        let f = e.get(a);
        const d = f !== void 0 ? f.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d)
          return t === null && (t = new vl(i)), f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f), f.texture.pmremVersion = a.pmremVersion, e.set(a, f), f.texture;
        if (f !== void 0)
          return f.texture;
        {
          const m = a.image;
          return c && m && m.height > 0 || h && m && r(m) ? (t === null && (t = new vl(i)), f = c ? t.fromEquirectangular(a) : t.fromCubemap(a), f.texture.pmremVersion = a.pmremVersion, e.set(a, f), a.addEventListener("dispose", s), f.texture) : null;
        }
      }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      a[h] !== void 0 && l++;
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
function _p(i) {
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
      return r === null && ms("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function gp(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", o), delete r[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(f, d) {
    return r[d.id] === !0 || (d.addEventListener("dispose", o), r[d.id] = !0, t.memory.geometries++), d;
  }
  function l(f) {
    const d = f.attributes;
    for (const m in d)
      e.update(d[m], i.ARRAY_BUFFER);
  }
  function c(f) {
    const d = [], m = f.index, g = f.attributes.position;
    let x = 0;
    if (m !== null) {
      const T = m.array;
      x = m.version;
      for (let S = 0, _ = T.length; S < _; S += 3) {
        const R = T[S + 0], C = T[S + 1], b = T[S + 2];
        d.push(R, C, C, b, b, R);
      }
    } else if (g !== void 0) {
      const T = g.array;
      x = g.version;
      for (let S = 0, _ = T.length / 3 - 1; S < _; S += 3) {
        const R = S + 0, C = S + 1, b = S + 2;
        d.push(R, C, C, b, b, R);
      }
    } else
      return;
    const p = new (fc(d) ? Sc : xc)(d, 1);
    p.version = x;
    const u = s.get(f);
    u && e.remove(u), s.set(f, p);
  }
  function h(f) {
    const d = s.get(f);
    if (d) {
      const m = f.index;
      m !== null && d.version < m.version && c(f);
    } else
      c(f);
    return s.get(f);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: h
  };
}
function vp(i, e, t) {
  let n;
  function r(d) {
    n = d;
  }
  let s, o;
  function a(d) {
    s = d.type, o = d.bytesPerElement;
  }
  function l(d, m) {
    i.drawElements(n, m, s, d * o), t.update(m, n, 1);
  }
  function c(d, m, g) {
    g !== 0 && (i.drawElementsInstanced(n, m, s, d * o, g), t.update(m, n, g));
  }
  function h(d, m, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, d, 0, g);
    let p = 0;
    for (let u = 0; u < g; u++)
      p += m[u];
    t.update(p, n, 1);
  }
  function f(d, m, g, x) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let u = 0; u < d.length; u++)
        c(d[u] / o, m[u], x[u]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, s, d, 0, x, 0, g);
      let u = 0;
      for (let T = 0; T < g; T++)
        u += m[T] * x[T];
      t.update(u, n, 1);
    }
  }
  this.setMode = r, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = f;
}
function xp(i) {
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
function Sp(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new ft();
  function s(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let d = n.get(a);
    if (d === void 0 || d.count !== f) {
      let y = function() {
        b.dispose(), n.delete(a), a.removeEventListener("dispose", y);
      };
      d !== void 0 && d.texture.dispose();
      const m = a.morphAttributes.position !== void 0, g = a.morphAttributes.normal !== void 0, x = a.morphAttributes.color !== void 0, p = a.morphAttributes.position || [], u = a.morphAttributes.normal || [], T = a.morphAttributes.color || [];
      let S = 0;
      m === !0 && (S = 1), g === !0 && (S = 2), x === !0 && (S = 3);
      let _ = a.attributes.position.count * S, R = 1;
      _ > e.maxTextureSize && (R = Math.ceil(_ / e.maxTextureSize), _ = e.maxTextureSize);
      const C = new Float32Array(_ * R * 4 * f), b = new pc(C, _, R, f);
      b.type = dn, b.needsUpdate = !0;
      const D = S * 4;
      for (let E = 0; E < f; E++) {
        const L = p[E], W = u[E], H = T[E], X = _ * R * 4 * E;
        for (let Q = 0; Q < L.count; Q++) {
          const G = Q * D;
          m === !0 && (r.fromBufferAttribute(L, Q), C[X + G + 0] = r.x, C[X + G + 1] = r.y, C[X + G + 2] = r.z, C[X + G + 3] = 0), g === !0 && (r.fromBufferAttribute(W, Q), C[X + G + 4] = r.x, C[X + G + 5] = r.y, C[X + G + 6] = r.z, C[X + G + 7] = 0), x === !0 && (r.fromBufferAttribute(H, Q), C[X + G + 8] = r.x, C[X + G + 9] = r.y, C[X + G + 10] = r.z, C[X + G + 11] = H.itemSize === 4 ? r.w : 1);
        }
      }
      d = {
        count: f,
        texture: b,
        size: new we(_, R)
      }, n.set(a, d), a.addEventListener("dispose", y);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
    else {
      let m = 0;
      for (let x = 0; x < c.length; x++)
        m += c[x];
      const g = a.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size);
  }
  return {
    update: s
  };
}
function Mp(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, f = e.get(l, h);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return f;
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
const bc = /* @__PURE__ */ new Lt(), El = /* @__PURE__ */ new Tc(1, 1), wc = /* @__PURE__ */ new pc(), Rc = /* @__PURE__ */ new Vu(), Cc = /* @__PURE__ */ new Ec(), yl = [], Tl = [], Al = new Float32Array(16), bl = new Float32Array(9), wl = new Float32Array(4);
function $i(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = yl[r];
  if (s === void 0 && (s = new Float32Array(r), yl[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function St(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function Mt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Cs(i, e) {
  let t = Tl[e];
  t === void 0 && (t = new Int32Array(e), Tl[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Ep(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function yp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e)) return;
    i.uniform2fv(this.addr, e), Mt(t, e);
  }
}
function Tp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (St(t, e)) return;
    i.uniform3fv(this.addr, e), Mt(t, e);
  }
}
function Ap(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e)) return;
    i.uniform4fv(this.addr, e), Mt(t, e);
  }
}
function bp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Mt(t, e);
  } else {
    if (St(t, n)) return;
    wl.set(n), i.uniformMatrix2fv(this.addr, !1, wl), Mt(t, n);
  }
}
function wp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Mt(t, e);
  } else {
    if (St(t, n)) return;
    bl.set(n), i.uniformMatrix3fv(this.addr, !1, bl), Mt(t, n);
  }
}
function Rp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Mt(t, e);
  } else {
    if (St(t, n)) return;
    Al.set(n), i.uniformMatrix4fv(this.addr, !1, Al), Mt(t, n);
  }
}
function Cp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Pp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e)) return;
    i.uniform2iv(this.addr, e), Mt(t, e);
  }
}
function Dp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (St(t, e)) return;
    i.uniform3iv(this.addr, e), Mt(t, e);
  }
}
function Lp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e)) return;
    i.uniform4iv(this.addr, e), Mt(t, e);
  }
}
function Up(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Ip(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e)) return;
    i.uniform2uiv(this.addr, e), Mt(t, e);
  }
}
function Np(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (St(t, e)) return;
    i.uniform3uiv(this.addr, e), Mt(t, e);
  }
}
function Fp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e)) return;
    i.uniform4uiv(this.addr, e), Mt(t, e);
  }
}
function Op(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (El.compareFunction = dc, s = El) : s = bc, t.setTexture2D(e || s, r);
}
function Bp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Rc, r);
}
function zp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Cc, r);
}
function Hp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || wc, r);
}
function kp(i) {
  switch (i) {
    case 5126:
      return Ep;
    // FLOAT
    case 35664:
      return yp;
    // _VEC2
    case 35665:
      return Tp;
    // _VEC3
    case 35666:
      return Ap;
    // _VEC4
    case 35674:
      return bp;
    // _MAT2
    case 35675:
      return wp;
    // _MAT3
    case 35676:
      return Rp;
    // _MAT4
    case 5124:
    case 35670:
      return Cp;
    // INT, BOOL
    case 35667:
    case 35671:
      return Pp;
    // _VEC2
    case 35668:
    case 35672:
      return Dp;
    // _VEC3
    case 35669:
    case 35673:
      return Lp;
    // _VEC4
    case 5125:
      return Up;
    // UINT
    case 36294:
      return Ip;
    // _VEC2
    case 36295:
      return Np;
    // _VEC3
    case 36296:
      return Fp;
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
      return Op;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Bp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return zp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Hp;
  }
}
function Vp(i, e) {
  i.uniform1fv(this.addr, e);
}
function Gp(i, e) {
  const t = $i(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Wp(i, e) {
  const t = $i(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Xp(i, e) {
  const t = $i(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Yp(i, e) {
  const t = $i(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function qp(i, e) {
  const t = $i(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Zp(i, e) {
  const t = $i(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function jp(i, e) {
  i.uniform1iv(this.addr, e);
}
function $p(i, e) {
  i.uniform2iv(this.addr, e);
}
function Kp(i, e) {
  i.uniform3iv(this.addr, e);
}
function Jp(i, e) {
  i.uniform4iv(this.addr, e);
}
function Qp(i, e) {
  i.uniform1uiv(this.addr, e);
}
function em(i, e) {
  i.uniform2uiv(this.addr, e);
}
function tm(i, e) {
  i.uniform3uiv(this.addr, e);
}
function nm(i, e) {
  i.uniform4uiv(this.addr, e);
}
function im(i, e, t) {
  const n = this.cache, r = e.length, s = Cs(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || bc, s[o]);
}
function rm(i, e, t) {
  const n = this.cache, r = e.length, s = Cs(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || Rc, s[o]);
}
function sm(i, e, t) {
  const n = this.cache, r = e.length, s = Cs(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || Cc, s[o]);
}
function am(i, e, t) {
  const n = this.cache, r = e.length, s = Cs(t, r);
  St(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || wc, s[o]);
}
function om(i) {
  switch (i) {
    case 5126:
      return Vp;
    // FLOAT
    case 35664:
      return Gp;
    // _VEC2
    case 35665:
      return Wp;
    // _VEC3
    case 35666:
      return Xp;
    // _VEC4
    case 35674:
      return Yp;
    // _MAT2
    case 35675:
      return qp;
    // _MAT3
    case 35676:
      return Zp;
    // _MAT4
    case 5124:
    case 35670:
      return jp;
    // INT, BOOL
    case 35667:
    case 35671:
      return $p;
    // _VEC2
    case 35668:
    case 35672:
      return Kp;
    // _VEC3
    case 35669:
    case 35673:
      return Jp;
    // _VEC4
    case 5125:
      return Qp;
    // UINT
    case 36294:
      return em;
    // _VEC2
    case 36295:
      return tm;
    // _VEC3
    case 36296:
      return nm;
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
      return im;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return rm;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return sm;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return am;
  }
}
class lm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = kp(t.type);
  }
}
class cm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = om(t.type);
  }
}
class um {
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
const ha = /(\w+)(\])?(\[|\.)?/g;
function Rl(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function hm(i, e, t) {
  const n = i.name, r = n.length;
  for (ha.lastIndex = 0; ; ) {
    const s = ha.exec(n), o = ha.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      Rl(t, c === void 0 ? new lm(a, i, e) : new cm(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && (f = new um(a), Rl(t, f)), t = f;
    }
  }
}
class _s {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      hm(s, o, this);
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
function Cl(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const dm = 37297;
let fm = 0;
function pm(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const Pl = /* @__PURE__ */ new Oe();
function mm(i) {
  qe._getMatrix(Pl, qe.workingColorSpace, i);
  const e = `mat3( ${Pl.elements.map((t) => t.toFixed(4))} )`;
  switch (qe.getTransfer(i)) {
    case vs:
      return [e, "LinearTransferOETF"];
    case tt:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function Dl(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + pm(i.getShaderSource(e), o);
  } else
    return r;
}
function _m(i, e) {
  const t = mm(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function gm(i, e) {
  let t;
  switch (e) {
    case hu:
      t = "Linear";
      break;
    case du:
      t = "Reinhard";
      break;
    case fu:
      t = "Cineon";
      break;
    case pu:
      t = "ACESFilmic";
      break;
    case _u:
      t = "AgX";
      break;
    case gu:
      t = "Neutral";
      break;
    case mu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ns = /* @__PURE__ */ new F();
function vm() {
  qe.getLuminanceCoefficients(ns);
  const i = ns.x.toFixed(4), e = ns.y.toFixed(4), t = ns.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function xm(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ar).join(`
`);
}
function Sm(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Mm(i, e) {
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
function ar(i) {
  return i !== "";
}
function Ll(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ul(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Em = /^[ \t]*#include +<([\w\d./]+)>/gm;
function so(i) {
  return i.replace(Em, Tm);
}
const ym = /* @__PURE__ */ new Map();
function Tm(i, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = ym.get(e);
    if (n !== void 0)
      t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return so(t);
}
const Am = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Il(i) {
  return i.replace(Am, bm);
}
function bm(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Nl(i) {
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
function wm(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === ho ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Wc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === An && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Rm(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Xi:
      case Yi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ws:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Cm(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Yi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Pm(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case tc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case cu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case uu:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Dm(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Lm(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = wm(t), c = Rm(t), h = Cm(t), f = Pm(t), d = Dm(t), m = xm(t), g = Sm(s), x = r.createProgram();
  let p, u, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ar).join(`
`), p.length > 0 && (p += `
`), u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ar).join(`
`), u.length > 0 && (u += `
`)) : (p = [
    Nl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
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
    t.envMap ? "#define " + h : "",
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
  ].filter(ar).join(`
`), u = [
    Nl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + f : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
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
    t.toneMapping !== Xn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Xn ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Xn ? gm("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    _m("linearToOutputTexel", t.outputColorSpace),
    vm(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ar).join(`
`)), o = so(o), o = Ll(o, t), o = Ul(o, t), a = so(a), a = Ll(a, t), a = Ul(a, t), o = Il(o), a = Il(a), t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, p = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, u = [
    "#define varying in",
    t.glslVersion === ko ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === ko ? "" : "#define gl_FragColor pc_fragColor",
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
` + u);
  const S = T + p + o, _ = T + u + a, R = Cl(r, r.VERTEX_SHADER, S), C = Cl(r, r.FRAGMENT_SHADER, _);
  r.attachShader(x, R), r.attachShader(x, C), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function b(L) {
    if (i.debug.checkShaderErrors) {
      const W = r.getProgramInfoLog(x).trim(), H = r.getShaderInfoLog(R).trim(), X = r.getShaderInfoLog(C).trim();
      let Q = !0, G = !0;
      if (r.getProgramParameter(x, r.LINK_STATUS) === !1)
        if (Q = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, x, R, C);
        else {
          const ie = Dl(r, R, "vertex"), k = Dl(r, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + W + `
` + ie + `
` + k
          );
        }
      else W !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", W) : (H === "" || X === "") && (G = !1);
      G && (L.diagnostics = {
        runnable: Q,
        programLog: W,
        vertexShader: {
          log: H,
          prefix: p
        },
        fragmentShader: {
          log: X,
          prefix: u
        }
      });
    }
    r.deleteShader(R), r.deleteShader(C), D = new _s(r, x), y = Mm(r, x);
  }
  let D;
  this.getUniforms = function() {
    return D === void 0 && b(this), D;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && b(this), y;
  };
  let E = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return E === !1 && (E = r.getProgramParameter(x, dm)), E;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = fm++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = R, this.fragmentShader = C, this;
}
let Um = 0;
class Im {
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
    return n === void 0 && (n = new Nm(e), t.set(e, n)), n;
  }
}
class Nm {
  constructor(e) {
    this.id = Um++, this.code = e, this.usedTimes = 0;
  }
}
function Fm(i, e, t, n, r, s, o) {
  const a = new _c(), l = new Im(), c = /* @__PURE__ */ new Set(), h = [], f = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let m = r.precision;
  const g = {
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
  function x(y) {
    return c.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function p(y, E, L, W, H) {
    const X = W.fog, Q = H.geometry, G = y.isMeshStandardMaterial ? W.environment : null, ie = (y.isMeshStandardMaterial ? t : e).get(y.envMap || G), k = ie && ie.mapping === ws ? ie.image.height : null, le = g[y.type];
    y.precision !== null && (m = r.getMaxPrecision(y.precision), m !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", m, "instead."));
    const me = Q.morphAttributes.position || Q.morphAttributes.normal || Q.morphAttributes.color, Me = me !== void 0 ? me.length : 0;
    let Be = 0;
    Q.morphAttributes.position !== void 0 && (Be = 1), Q.morphAttributes.normal !== void 0 && (Be = 2), Q.morphAttributes.color !== void 0 && (Be = 3);
    let Ke, q, se, ve;
    if (le) {
      const et = mn[le];
      Ke = et.vertexShader, q = et.fragmentShader;
    } else
      Ke = y.vertexShader, q = y.fragmentShader, l.update(y), se = l.getVertexShaderID(y), ve = l.getFragmentShaderID(y);
    const oe = i.getRenderTarget(), Te = i.state.buffers.depth.getReversed(), Xe = H.isInstancedMesh === !0, Re = H.isBatchedMesh === !0, ot = !!y.map, st = !!y.matcap, He = !!ie, P = !!y.aoMap, Ut = !!y.lightMap, We = !!y.bumpMap, Ge = !!y.normalMap, xe = !!y.displacementMap, nt = !!y.emissiveMap, Se = !!y.metalnessMap, A = !!y.roughnessMap, v = y.anisotropy > 0, O = y.clearcoat > 0, j = y.dispersion > 0, K = y.iridescence > 0, w = y.sheen > 0, J = y.transmission > 0, te = v && !!y.anisotropyMap, re = O && !!y.clearcoatMap, Ue = O && !!y.clearcoatNormalMap, ee = O && !!y.clearcoatRoughnessMap, pe = K && !!y.iridescenceMap, be = K && !!y.iridescenceThicknessMap, Ee = w && !!y.sheenColorMap, ce = w && !!y.sheenRoughnessMap, ke = !!y.specularMap, ze = !!y.specularColorMap, rt = !!y.specularIntensityMap, U = J && !!y.transmissionMap, he = J && !!y.thicknessMap, V = !!y.gradientMap, $ = !!y.alphaMap, fe = y.alphaTest > 0, de = !!y.alphaHash, Ne = !!y.extensions;
    let ct = Xn;
    y.toneMapped && (oe === null || oe.isXRRenderTarget === !0) && (ct = i.toneMapping);
    const bt = {
      shaderID: le,
      shaderType: y.type,
      shaderName: y.name,
      vertexShader: Ke,
      fragmentShader: q,
      defines: y.defines,
      customVertexShaderID: se,
      customFragmentShaderID: ve,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: m,
      batching: Re,
      batchingColor: Re && H._colorsTexture !== null,
      instancing: Xe,
      instancingColor: Xe && H.instanceColor !== null,
      instancingMorph: Xe && H.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: oe === null ? i.outputColorSpace : oe.isXRRenderTarget === !0 ? oe.texture.colorSpace : qi,
      alphaToCoverage: !!y.alphaToCoverage,
      map: ot,
      matcap: st,
      envMap: He,
      envMapMode: He && ie.mapping,
      envMapCubeUVHeight: k,
      aoMap: P,
      lightMap: Ut,
      bumpMap: We,
      normalMap: Ge,
      displacementMap: d && xe,
      emissiveMap: nt,
      normalMapObjectSpace: Ge && y.normalMapType === yu,
      normalMapTangentSpace: Ge && y.normalMapType === Eu,
      metalnessMap: Se,
      roughnessMap: A,
      anisotropy: v,
      anisotropyMap: te,
      clearcoat: O,
      clearcoatMap: re,
      clearcoatNormalMap: Ue,
      clearcoatRoughnessMap: ee,
      dispersion: j,
      iridescence: K,
      iridescenceMap: pe,
      iridescenceThicknessMap: be,
      sheen: w,
      sheenColorMap: Ee,
      sheenRoughnessMap: ce,
      specularMap: ke,
      specularColorMap: ze,
      specularIntensityMap: rt,
      transmission: J,
      transmissionMap: U,
      thicknessMap: he,
      gradientMap: V,
      opaque: y.transparent === !1 && y.blending === ki && y.alphaToCoverage === !1,
      alphaMap: $,
      alphaTest: fe,
      alphaHash: de,
      combine: y.combine,
      //
      mapUv: ot && x(y.map.channel),
      aoMapUv: P && x(y.aoMap.channel),
      lightMapUv: Ut && x(y.lightMap.channel),
      bumpMapUv: We && x(y.bumpMap.channel),
      normalMapUv: Ge && x(y.normalMap.channel),
      displacementMapUv: xe && x(y.displacementMap.channel),
      emissiveMapUv: nt && x(y.emissiveMap.channel),
      metalnessMapUv: Se && x(y.metalnessMap.channel),
      roughnessMapUv: A && x(y.roughnessMap.channel),
      anisotropyMapUv: te && x(y.anisotropyMap.channel),
      clearcoatMapUv: re && x(y.clearcoatMap.channel),
      clearcoatNormalMapUv: Ue && x(y.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ee && x(y.clearcoatRoughnessMap.channel),
      iridescenceMapUv: pe && x(y.iridescenceMap.channel),
      iridescenceThicknessMapUv: be && x(y.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee && x(y.sheenColorMap.channel),
      sheenRoughnessMapUv: ce && x(y.sheenRoughnessMap.channel),
      specularMapUv: ke && x(y.specularMap.channel),
      specularColorMapUv: ze && x(y.specularColorMap.channel),
      specularIntensityMapUv: rt && x(y.specularIntensityMap.channel),
      transmissionMapUv: U && x(y.transmissionMap.channel),
      thicknessMapUv: he && x(y.thicknessMap.channel),
      alphaMapUv: $ && x(y.alphaMap.channel),
      //
      vertexTangents: !!Q.attributes.tangent && (Ge || v),
      vertexColors: y.vertexColors,
      vertexAlphas: y.vertexColors === !0 && !!Q.attributes.color && Q.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!Q.attributes.uv && (ot || $),
      fog: !!X,
      useFog: y.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: y.flatShading === !0,
      sizeAttenuation: y.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: Te,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: Q.morphAttributes.position !== void 0,
      morphNormals: Q.morphAttributes.normal !== void 0,
      morphColors: Q.morphAttributes.color !== void 0,
      morphTargetsCount: Me,
      morphTextureStride: Be,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numLightProbes: E.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: i.shadowMap.enabled && L.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: ct,
      decodeVideoTexture: ot && y.map.isVideoTexture === !0 && qe.getTransfer(y.map.colorSpace) === tt,
      decodeVideoTextureEmissive: nt && y.emissiveMap.isVideoTexture === !0 && qe.getTransfer(y.emissiveMap.colorSpace) === tt,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === Rn,
      flipSided: y.side === Vt,
      useDepthPacking: y.depthPacking >= 0,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionClipCullDistance: Ne && y.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ne && y.extensions.multiDraw === !0 || Re) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: y.customProgramCacheKey()
    };
    return bt.vertexUv1s = c.has(1), bt.vertexUv2s = c.has(2), bt.vertexUv3s = c.has(3), c.clear(), bt;
  }
  function u(y) {
    const E = [];
    if (y.shaderID ? E.push(y.shaderID) : (E.push(y.customVertexShaderID), E.push(y.customFragmentShaderID)), y.defines !== void 0)
      for (const L in y.defines)
        E.push(L), E.push(y.defines[L]);
    return y.isRawShaderMaterial === !1 && (T(E, y), S(E, y), E.push(i.outputColorSpace)), E.push(y.customProgramCacheKey), E.join();
  }
  function T(y, E) {
    y.push(E.precision), y.push(E.outputColorSpace), y.push(E.envMapMode), y.push(E.envMapCubeUVHeight), y.push(E.mapUv), y.push(E.alphaMapUv), y.push(E.lightMapUv), y.push(E.aoMapUv), y.push(E.bumpMapUv), y.push(E.normalMapUv), y.push(E.displacementMapUv), y.push(E.emissiveMapUv), y.push(E.metalnessMapUv), y.push(E.roughnessMapUv), y.push(E.anisotropyMapUv), y.push(E.clearcoatMapUv), y.push(E.clearcoatNormalMapUv), y.push(E.clearcoatRoughnessMapUv), y.push(E.iridescenceMapUv), y.push(E.iridescenceThicknessMapUv), y.push(E.sheenColorMapUv), y.push(E.sheenRoughnessMapUv), y.push(E.specularMapUv), y.push(E.specularColorMapUv), y.push(E.specularIntensityMapUv), y.push(E.transmissionMapUv), y.push(E.thicknessMapUv), y.push(E.combine), y.push(E.fogExp2), y.push(E.sizeAttenuation), y.push(E.morphTargetsCount), y.push(E.morphAttributeCount), y.push(E.numDirLights), y.push(E.numPointLights), y.push(E.numSpotLights), y.push(E.numSpotLightMaps), y.push(E.numHemiLights), y.push(E.numRectAreaLights), y.push(E.numDirLightShadows), y.push(E.numPointLightShadows), y.push(E.numSpotLightShadows), y.push(E.numSpotLightShadowsWithMaps), y.push(E.numLightProbes), y.push(E.shadowMapType), y.push(E.toneMapping), y.push(E.numClippingPlanes), y.push(E.numClipIntersection), y.push(E.depthPacking);
  }
  function S(y, E) {
    a.disableAll(), E.supportsVertexTextures && a.enable(0), E.instancing && a.enable(1), E.instancingColor && a.enable(2), E.instancingMorph && a.enable(3), E.matcap && a.enable(4), E.envMap && a.enable(5), E.normalMapObjectSpace && a.enable(6), E.normalMapTangentSpace && a.enable(7), E.clearcoat && a.enable(8), E.iridescence && a.enable(9), E.alphaTest && a.enable(10), E.vertexColors && a.enable(11), E.vertexAlphas && a.enable(12), E.vertexUv1s && a.enable(13), E.vertexUv2s && a.enable(14), E.vertexUv3s && a.enable(15), E.vertexTangents && a.enable(16), E.anisotropy && a.enable(17), E.alphaHash && a.enable(18), E.batching && a.enable(19), E.dispersion && a.enable(20), E.batchingColor && a.enable(21), y.push(a.mask), a.disableAll(), E.fog && a.enable(0), E.useFog && a.enable(1), E.flatShading && a.enable(2), E.logarithmicDepthBuffer && a.enable(3), E.reverseDepthBuffer && a.enable(4), E.skinning && a.enable(5), E.morphTargets && a.enable(6), E.morphNormals && a.enable(7), E.morphColors && a.enable(8), E.premultipliedAlpha && a.enable(9), E.shadowMapEnabled && a.enable(10), E.doubleSided && a.enable(11), E.flipSided && a.enable(12), E.useDepthPacking && a.enable(13), E.dithering && a.enable(14), E.transmission && a.enable(15), E.sheen && a.enable(16), E.opaque && a.enable(17), E.pointsUvs && a.enable(18), E.decodeVideoTexture && a.enable(19), E.decodeVideoTextureEmissive && a.enable(20), E.alphaToCoverage && a.enable(21), y.push(a.mask);
  }
  function _(y) {
    const E = g[y.type];
    let L;
    if (E) {
      const W = mn[E];
      L = Ss.clone(W.uniforms);
    } else
      L = y.uniforms;
    return L;
  }
  function R(y, E) {
    let L;
    for (let W = 0, H = h.length; W < H; W++) {
      const X = h[W];
      if (X.cacheKey === E) {
        L = X, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new Lm(i, E, y, s), h.push(L)), L;
  }
  function C(y) {
    if (--y.usedTimes === 0) {
      const E = h.indexOf(y);
      h[E] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function b(y) {
    l.remove(y);
  }
  function D() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: u,
    getUniforms: _,
    acquireProgram: R,
    releaseProgram: C,
    releaseShaderCache: b,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: D
  };
}
function Om() {
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
function Bm(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Fl(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Ol() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(f, d, m, g, x, p) {
    let u = i[e];
    return u === void 0 ? (u = {
      id: f.id,
      object: f,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: f.renderOrder,
      z: x,
      group: p
    }, i[e] = u) : (u.id = f.id, u.object = f, u.geometry = d, u.material = m, u.groupOrder = g, u.renderOrder = f.renderOrder, u.z = x, u.group = p), e++, u;
  }
  function a(f, d, m, g, x, p) {
    const u = o(f, d, m, g, x, p);
    m.transmission > 0 ? n.push(u) : m.transparent === !0 ? r.push(u) : t.push(u);
  }
  function l(f, d, m, g, x, p) {
    const u = o(f, d, m, g, x, p);
    m.transmission > 0 ? n.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function c(f, d) {
    t.length > 1 && t.sort(f || Bm), n.length > 1 && n.sort(d || Fl), r.length > 1 && r.sort(d || Fl);
  }
  function h() {
    for (let f = e, d = i.length; f < d; f++) {
      const m = i[f];
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
    finish: h,
    sort: c
  };
}
function zm() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Ol(), i.set(n, [o])) : r >= s.length ? (o = new Ol(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Hm() {
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
function km() {
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
            shadowMapSize: new we()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Vm = 0;
function Gm(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Wm(i) {
  const e = new Hm(), t = km(), n = {
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
  for (let c = 0; c < 9; c++) n.probe.push(new F());
  const r = new F(), s = new lt(), o = new lt();
  function a(c) {
    let h = 0, f = 0, d = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let m = 0, g = 0, x = 0, p = 0, u = 0, T = 0, S = 0, _ = 0, R = 0, C = 0, b = 0;
    c.sort(Gm);
    for (let y = 0, E = c.length; y < E; y++) {
      const L = c[y], W = L.color, H = L.intensity, X = L.distance, Q = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        h += W.r * H, f += W.g * H, d += W.b * H;
      else if (L.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(L.sh.coefficients[G], H);
        b++;
      } else if (L.isDirectionalLight) {
        const G = e.get(L);
        if (G.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const ie = L.shadow, k = t.get(L);
          k.shadowIntensity = ie.intensity, k.shadowBias = ie.bias, k.shadowNormalBias = ie.normalBias, k.shadowRadius = ie.radius, k.shadowMapSize = ie.mapSize, n.directionalShadow[m] = k, n.directionalShadowMap[m] = Q, n.directionalShadowMatrix[m] = L.shadow.matrix, T++;
        }
        n.directional[m] = G, m++;
      } else if (L.isSpotLight) {
        const G = e.get(L);
        G.position.setFromMatrixPosition(L.matrixWorld), G.color.copy(W).multiplyScalar(H), G.distance = X, G.coneCos = Math.cos(L.angle), G.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), G.decay = L.decay, n.spot[x] = G;
        const ie = L.shadow;
        if (L.map && (n.spotLightMap[R] = L.map, R++, ie.updateMatrices(L), L.castShadow && C++), n.spotLightMatrix[x] = ie.matrix, L.castShadow) {
          const k = t.get(L);
          k.shadowIntensity = ie.intensity, k.shadowBias = ie.bias, k.shadowNormalBias = ie.normalBias, k.shadowRadius = ie.radius, k.shadowMapSize = ie.mapSize, n.spotShadow[x] = k, n.spotShadowMap[x] = Q, _++;
        }
        x++;
      } else if (L.isRectAreaLight) {
        const G = e.get(L);
        G.color.copy(W).multiplyScalar(H), G.halfWidth.set(L.width * 0.5, 0, 0), G.halfHeight.set(0, L.height * 0.5, 0), n.rectArea[p] = G, p++;
      } else if (L.isPointLight) {
        const G = e.get(L);
        if (G.color.copy(L.color).multiplyScalar(L.intensity), G.distance = L.distance, G.decay = L.decay, L.castShadow) {
          const ie = L.shadow, k = t.get(L);
          k.shadowIntensity = ie.intensity, k.shadowBias = ie.bias, k.shadowNormalBias = ie.normalBias, k.shadowRadius = ie.radius, k.shadowMapSize = ie.mapSize, k.shadowCameraNear = ie.camera.near, k.shadowCameraFar = ie.camera.far, n.pointShadow[g] = k, n.pointShadowMap[g] = Q, n.pointShadowMatrix[g] = L.shadow.matrix, S++;
        }
        n.point[g] = G, g++;
      } else if (L.isHemisphereLight) {
        const G = e.get(L);
        G.skyColor.copy(L.color).multiplyScalar(H), G.groundColor.copy(L.groundColor).multiplyScalar(H), n.hemi[u] = G, u++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1, n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1, n.rectAreaLTC2 = ae.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = d;
    const D = n.hash;
    (D.directionalLength !== m || D.pointLength !== g || D.spotLength !== x || D.rectAreaLength !== p || D.hemiLength !== u || D.numDirectionalShadows !== T || D.numPointShadows !== S || D.numSpotShadows !== _ || D.numSpotMaps !== R || D.numLightProbes !== b) && (n.directional.length = m, n.spot.length = x, n.rectArea.length = p, n.point.length = g, n.hemi.length = u, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = S, n.pointShadowMap.length = S, n.spotShadow.length = _, n.spotShadowMap.length = _, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = S, n.spotLightMatrix.length = _ + R - C, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = b, D.directionalLength = m, D.pointLength = g, D.spotLength = x, D.rectAreaLength = p, D.hemiLength = u, D.numDirectionalShadows = T, D.numPointShadows = S, D.numSpotShadows = _, D.numSpotMaps = R, D.numLightProbes = b, n.version = Vm++);
  }
  function l(c, h) {
    let f = 0, d = 0, m = 0, g = 0, x = 0;
    const p = h.matrixWorldInverse;
    for (let u = 0, T = c.length; u < T; u++) {
      const S = c[u];
      if (S.isDirectionalLight) {
        const _ = n.directional[f];
        _.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), _.direction.sub(r), _.direction.transformDirection(p), f++;
      } else if (S.isSpotLight) {
        const _ = n.spot[m];
        _.position.setFromMatrixPosition(S.matrixWorld), _.position.applyMatrix4(p), _.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), _.direction.sub(r), _.direction.transformDirection(p), m++;
      } else if (S.isRectAreaLight) {
        const _ = n.rectArea[g];
        _.position.setFromMatrixPosition(S.matrixWorld), _.position.applyMatrix4(p), o.identity(), s.copy(S.matrixWorld), s.premultiply(p), o.extractRotation(s), _.halfWidth.set(S.width * 0.5, 0, 0), _.halfHeight.set(0, S.height * 0.5, 0), _.halfWidth.applyMatrix4(o), _.halfHeight.applyMatrix4(o), g++;
      } else if (S.isPointLight) {
        const _ = n.point[d];
        _.position.setFromMatrixPosition(S.matrixWorld), _.position.applyMatrix4(p), d++;
      } else if (S.isHemisphereLight) {
        const _ = n.hemi[x];
        _.direction.setFromMatrixPosition(S.matrixWorld), _.direction.transformDirection(p), x++;
      }
    }
  }
  return {
    setup: a,
    setupView: l,
    state: n
  };
}
function Bl(i) {
  const e = new Wm(i), t = [], n = [];
  function r(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function a() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
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
function Xm(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const o = e.get(r);
    let a;
    return o === void 0 ? (a = new Bl(i), e.set(r, [a])) : s >= o.length ? (a = new Bl(i), o.push(a)) : a = o[s], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Ym = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, qm = `uniform sampler2D shadow_pass;
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
function Zm(i, e, t) {
  let n = new Eo();
  const r = new we(), s = new we(), o = new ft(), a = new hh({ depthPacking: Mu }), l = new dh(), c = {}, h = t.maxTextureSize, f = { [Yn]: Vt, [Vt]: Yn, [Rn]: Rn }, d = new Dt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new we() },
      radius: { value: 4 }
    },
    vertexShader: Ym,
    fragmentShader: qm
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new pn();
  g.setAttribute(
    "position",
    new $t(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new kt(g, d), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = ho;
  let u = this.type;
  this.render = function(C, b, D) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || C.length === 0) return;
    const y = i.getRenderTarget(), E = i.getActiveCubeFace(), L = i.getActiveMipmapLevel(), W = i.state;
    W.setBlending(Wn), W.buffers.color.setClear(1, 1, 1, 1), W.buffers.depth.setTest(!0), W.setScissorTest(!1);
    const H = u !== An && this.type === An, X = u === An && this.type !== An;
    for (let Q = 0, G = C.length; Q < G; Q++) {
      const ie = C[Q], k = ie.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", ie, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      r.copy(k.mapSize);
      const le = k.getFrameExtents();
      if (r.multiply(le), s.copy(k.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / le.x), r.x = s.x * le.x, k.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / le.y), r.y = s.y * le.y, k.mapSize.y = s.y)), k.map === null || H === !0 || X === !0) {
        const Me = this.type !== An ? { minFilter: Gt, magFilter: Gt } : {};
        k.map !== null && k.map.dispose(), k.map = new di(r.x, r.y, Me), k.map.texture.name = ie.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const me = k.getViewportCount();
      for (let Me = 0; Me < me; Me++) {
        const Be = k.getViewport(Me);
        o.set(
          s.x * Be.x,
          s.y * Be.y,
          s.x * Be.z,
          s.y * Be.w
        ), W.viewport(o), k.updateMatrices(ie, Me), n = k.getFrustum(), _(b, D, k.camera, ie, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === An && T(k, D), k.needsUpdate = !1;
    }
    u = this.type, p.needsUpdate = !1, i.setRenderTarget(y, E, L);
  };
  function T(C, b) {
    const D = e.update(x);
    d.defines.VSM_SAMPLES !== C.blurSamples && (d.defines.VSM_SAMPLES = C.blurSamples, m.defines.VSM_SAMPLES = C.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), C.mapPass === null && (C.mapPass = new di(r.x, r.y)), d.uniforms.shadow_pass.value = C.map.texture, d.uniforms.resolution.value = C.mapSize, d.uniforms.radius.value = C.radius, i.setRenderTarget(C.mapPass), i.clear(), i.renderBufferDirect(b, null, D, d, x, null), m.uniforms.shadow_pass.value = C.mapPass.texture, m.uniforms.resolution.value = C.mapSize, m.uniforms.radius.value = C.radius, i.setRenderTarget(C.map), i.clear(), i.renderBufferDirect(b, null, D, m, x, null);
  }
  function S(C, b, D, y) {
    let E = null;
    const L = D.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (L !== void 0)
      E = L;
    else if (E = D.isPointLight === !0 ? l : a, i.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) {
      const W = E.uuid, H = b.uuid;
      let X = c[W];
      X === void 0 && (X = {}, c[W] = X);
      let Q = X[H];
      Q === void 0 && (Q = E.clone(), X[H] = Q, b.addEventListener("dispose", R)), E = Q;
    }
    if (E.visible = b.visible, E.wireframe = b.wireframe, y === An ? E.side = b.shadowSide !== null ? b.shadowSide : b.side : E.side = b.shadowSide !== null ? b.shadowSide : f[b.side], E.alphaMap = b.alphaMap, E.alphaTest = b.alphaTest, E.map = b.map, E.clipShadows = b.clipShadows, E.clippingPlanes = b.clippingPlanes, E.clipIntersection = b.clipIntersection, E.displacementMap = b.displacementMap, E.displacementScale = b.displacementScale, E.displacementBias = b.displacementBias, E.wireframeLinewidth = b.wireframeLinewidth, E.linewidth = b.linewidth, D.isPointLight === !0 && E.isMeshDistanceMaterial === !0) {
      const W = i.properties.get(E);
      W.light = D;
    }
    return E;
  }
  function _(C, b, D, y, E) {
    if (C.visible === !1) return;
    if (C.layers.test(b.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && E === An) && (!C.frustumCulled || n.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, C.matrixWorld);
      const H = e.update(C), X = C.material;
      if (Array.isArray(X)) {
        const Q = H.groups;
        for (let G = 0, ie = Q.length; G < ie; G++) {
          const k = Q[G], le = X[k.materialIndex];
          if (le && le.visible) {
            const me = S(C, le, y, E);
            C.onBeforeShadow(i, C, b, D, H, me, k), i.renderBufferDirect(D, null, H, me, C, k), C.onAfterShadow(i, C, b, D, H, me, k);
          }
        }
      } else if (X.visible) {
        const Q = S(C, X, y, E);
        C.onBeforeShadow(i, C, b, D, H, Q, null), i.renderBufferDirect(D, null, H, Q, C, null), C.onAfterShadow(i, C, b, D, H, Q, null);
      }
    }
    const W = C.children;
    for (let H = 0, X = W.length; H < X; H++)
      _(W[H], b, D, y, E);
  }
  function R(C) {
    C.target.removeEventListener("dispose", R);
    for (const D in c) {
      const y = c[D], E = C.target.uuid;
      E in y && (y[E].dispose(), delete y[E]);
    }
  }
}
const jm = {
  [Ea]: ya,
  [Ta]: wa,
  [Aa]: Ra,
  [Wi]: ba,
  [ya]: Ea,
  [wa]: Ta,
  [Ra]: Aa,
  [ba]: Wi
};
function $m(i, e) {
  function t() {
    let U = !1;
    const he = new ft();
    let V = null;
    const $ = new ft(0, 0, 0, 0);
    return {
      setMask: function(fe) {
        V !== fe && !U && (i.colorMask(fe, fe, fe, fe), V = fe);
      },
      setLocked: function(fe) {
        U = fe;
      },
      setClear: function(fe, de, Ne, ct, bt) {
        bt === !0 && (fe *= ct, de *= ct, Ne *= ct), he.set(fe, de, Ne, ct), $.equals(he) === !1 && (i.clearColor(fe, de, Ne, ct), $.copy(he));
      },
      reset: function() {
        U = !1, V = null, $.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let U = !1, he = !1, V = null, $ = null, fe = null;
    return {
      setReversed: function(de) {
        if (he !== de) {
          const Ne = e.get("EXT_clip_control");
          de ? Ne.clipControlEXT(Ne.LOWER_LEFT_EXT, Ne.ZERO_TO_ONE_EXT) : Ne.clipControlEXT(Ne.LOWER_LEFT_EXT, Ne.NEGATIVE_ONE_TO_ONE_EXT), he = de;
          const ct = fe;
          fe = null, this.setClear(ct);
        }
      },
      getReversed: function() {
        return he;
      },
      setTest: function(de) {
        de ? oe(i.DEPTH_TEST) : Te(i.DEPTH_TEST);
      },
      setMask: function(de) {
        V !== de && !U && (i.depthMask(de), V = de);
      },
      setFunc: function(de) {
        if (he && (de = jm[de]), $ !== de) {
          switch (de) {
            case Ea:
              i.depthFunc(i.NEVER);
              break;
            case ya:
              i.depthFunc(i.ALWAYS);
              break;
            case Ta:
              i.depthFunc(i.LESS);
              break;
            case Wi:
              i.depthFunc(i.LEQUAL);
              break;
            case Aa:
              i.depthFunc(i.EQUAL);
              break;
            case ba:
              i.depthFunc(i.GEQUAL);
              break;
            case wa:
              i.depthFunc(i.GREATER);
              break;
            case Ra:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          $ = de;
        }
      },
      setLocked: function(de) {
        U = de;
      },
      setClear: function(de) {
        fe !== de && (he && (de = 1 - de), i.clearDepth(de), fe = de);
      },
      reset: function() {
        U = !1, V = null, $ = null, fe = null, he = !1;
      }
    };
  }
  function r() {
    let U = !1, he = null, V = null, $ = null, fe = null, de = null, Ne = null, ct = null, bt = null;
    return {
      setTest: function(et) {
        U || (et ? oe(i.STENCIL_TEST) : Te(i.STENCIL_TEST));
      },
      setMask: function(et) {
        he !== et && !U && (i.stencilMask(et), he = et);
      },
      setFunc: function(et, nn, gn) {
        (V !== et || $ !== nn || fe !== gn) && (i.stencilFunc(et, nn, gn), V = et, $ = nn, fe = gn);
      },
      setOp: function(et, nn, gn) {
        (de !== et || Ne !== nn || ct !== gn) && (i.stencilOp(et, nn, gn), de = et, Ne = nn, ct = gn);
      },
      setLocked: function(et) {
        U = et;
      },
      setClear: function(et) {
        bt !== et && (i.clearStencil(et), bt = et);
      },
      reset: function() {
        U = !1, he = null, V = null, $ = null, fe = null, de = null, Ne = null, ct = null, bt = null;
      }
    };
  }
  const s = new t(), o = new n(), a = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, d = /* @__PURE__ */ new WeakMap(), m = [], g = null, x = !1, p = null, u = null, T = null, S = null, _ = null, R = null, C = null, b = new Pe(0, 0, 0), D = 0, y = !1, E = null, L = null, W = null, H = null, X = null;
  const Q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = !1, ie = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (ie = parseFloat(/^WebGL (\d)/.exec(k)[1]), G = ie >= 1) : k.indexOf("OpenGL ES") !== -1 && (ie = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), G = ie >= 2);
  let le = null, me = {};
  const Me = i.getParameter(i.SCISSOR_BOX), Be = i.getParameter(i.VIEWPORT), Ke = new ft().fromArray(Me), q = new ft().fromArray(Be);
  function se(U, he, V, $) {
    const fe = new Uint8Array(4), de = i.createTexture();
    i.bindTexture(U, de), i.texParameteri(U, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(U, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ne = 0; Ne < V; Ne++)
      U === i.TEXTURE_3D || U === i.TEXTURE_2D_ARRAY ? i.texImage3D(he, 0, i.RGBA, 1, 1, $, 0, i.RGBA, i.UNSIGNED_BYTE, fe) : i.texImage2D(he + Ne, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, fe);
    return de;
  }
  const ve = {};
  ve[i.TEXTURE_2D] = se(i.TEXTURE_2D, i.TEXTURE_2D, 1), ve[i.TEXTURE_CUBE_MAP] = se(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ve[i.TEXTURE_2D_ARRAY] = se(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ve[i.TEXTURE_3D] = se(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), oe(i.DEPTH_TEST), o.setFunc(Wi), We(!1), Ge(No), oe(i.CULL_FACE), P(Wn);
  function oe(U) {
    h[U] !== !0 && (i.enable(U), h[U] = !0);
  }
  function Te(U) {
    h[U] !== !1 && (i.disable(U), h[U] = !1);
  }
  function Xe(U, he) {
    return f[U] !== he ? (i.bindFramebuffer(U, he), f[U] = he, U === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = he), U === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = he), !0) : !1;
  }
  function Re(U, he) {
    let V = m, $ = !1;
    if (U) {
      V = d.get(he), V === void 0 && (V = [], d.set(he, V));
      const fe = U.textures;
      if (V.length !== fe.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let de = 0, Ne = fe.length; de < Ne; de++)
          V[de] = i.COLOR_ATTACHMENT0 + de;
        V.length = fe.length, $ = !0;
      }
    } else
      V[0] !== i.BACK && (V[0] = i.BACK, $ = !0);
    $ && i.drawBuffers(V);
  }
  function ot(U) {
    return g !== U ? (i.useProgram(U), g = U, !0) : !1;
  }
  const st = {
    [si]: i.FUNC_ADD,
    [Yc]: i.FUNC_SUBTRACT,
    [qc]: i.FUNC_REVERSE_SUBTRACT
  };
  st[Zc] = i.MIN, st[jc] = i.MAX;
  const He = {
    [$c]: i.ZERO,
    [Kc]: i.ONE,
    [Jc]: i.SRC_COLOR,
    [Sa]: i.SRC_ALPHA,
    [ru]: i.SRC_ALPHA_SATURATE,
    [nu]: i.DST_COLOR,
    [eu]: i.DST_ALPHA,
    [Qc]: i.ONE_MINUS_SRC_COLOR,
    [Ma]: i.ONE_MINUS_SRC_ALPHA,
    [iu]: i.ONE_MINUS_DST_COLOR,
    [tu]: i.ONE_MINUS_DST_ALPHA,
    [su]: i.CONSTANT_COLOR,
    [au]: i.ONE_MINUS_CONSTANT_COLOR,
    [ou]: i.CONSTANT_ALPHA,
    [lu]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function P(U, he, V, $, fe, de, Ne, ct, bt, et) {
    if (U === Wn) {
      x === !0 && (Te(i.BLEND), x = !1);
      return;
    }
    if (x === !1 && (oe(i.BLEND), x = !0), U !== Xc) {
      if (U !== p || et !== y) {
        if ((u !== si || _ !== si) && (i.blendEquation(i.FUNC_ADD), u = si, _ = si), et)
          switch (U) {
            case ki:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Fo:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Oo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Bo:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        else
          switch (U) {
            case ki:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Fo:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Oo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Bo:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        T = null, S = null, R = null, C = null, b.set(0, 0, 0), D = 0, p = U, y = et;
      }
      return;
    }
    fe = fe || he, de = de || V, Ne = Ne || $, (he !== u || fe !== _) && (i.blendEquationSeparate(st[he], st[fe]), u = he, _ = fe), (V !== T || $ !== S || de !== R || Ne !== C) && (i.blendFuncSeparate(He[V], He[$], He[de], He[Ne]), T = V, S = $, R = de, C = Ne), (ct.equals(b) === !1 || bt !== D) && (i.blendColor(ct.r, ct.g, ct.b, bt), b.copy(ct), D = bt), p = U, y = !1;
  }
  function Ut(U, he) {
    U.side === Rn ? Te(i.CULL_FACE) : oe(i.CULL_FACE);
    let V = U.side === Vt;
    he && (V = !V), We(V), U.blending === ki && U.transparent === !1 ? P(Wn) : P(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.blendColor, U.blendAlpha, U.premultipliedAlpha), o.setFunc(U.depthFunc), o.setTest(U.depthTest), o.setMask(U.depthWrite), s.setMask(U.colorWrite);
    const $ = U.stencilWrite;
    a.setTest($), $ && (a.setMask(U.stencilWriteMask), a.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), a.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), nt(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === !0 ? oe(i.SAMPLE_ALPHA_TO_COVERAGE) : Te(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function We(U) {
    E !== U && (U ? i.frontFace(i.CW) : i.frontFace(i.CCW), E = U);
  }
  function Ge(U) {
    U !== Vc ? (oe(i.CULL_FACE), U !== L && (U === No ? i.cullFace(i.BACK) : U === Gc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Te(i.CULL_FACE), L = U;
  }
  function xe(U) {
    U !== W && (G && i.lineWidth(U), W = U);
  }
  function nt(U, he, V) {
    U ? (oe(i.POLYGON_OFFSET_FILL), (H !== he || X !== V) && (i.polygonOffset(he, V), H = he, X = V)) : Te(i.POLYGON_OFFSET_FILL);
  }
  function Se(U) {
    U ? oe(i.SCISSOR_TEST) : Te(i.SCISSOR_TEST);
  }
  function A(U) {
    U === void 0 && (U = i.TEXTURE0 + Q - 1), le !== U && (i.activeTexture(U), le = U);
  }
  function v(U, he, V) {
    V === void 0 && (le === null ? V = i.TEXTURE0 + Q - 1 : V = le);
    let $ = me[V];
    $ === void 0 && ($ = { type: void 0, texture: void 0 }, me[V] = $), ($.type !== U || $.texture !== he) && (le !== V && (i.activeTexture(V), le = V), i.bindTexture(U, he || ve[U]), $.type = U, $.texture = he);
  }
  function O() {
    const U = me[le];
    U !== void 0 && U.type !== void 0 && (i.bindTexture(U.type, null), U.type = void 0, U.texture = void 0);
  }
  function j() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function K() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function w() {
    try {
      i.texSubImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function J() {
    try {
      i.texSubImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function te() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function re() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Ue() {
    try {
      i.texStorage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ee() {
    try {
      i.texStorage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function pe() {
    try {
      i.texImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function be() {
    try {
      i.texImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Ee(U) {
    Ke.equals(U) === !1 && (i.scissor(U.x, U.y, U.z, U.w), Ke.copy(U));
  }
  function ce(U) {
    q.equals(U) === !1 && (i.viewport(U.x, U.y, U.z, U.w), q.copy(U));
  }
  function ke(U, he) {
    let V = c.get(he);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), c.set(he, V));
    let $ = V.get(U);
    $ === void 0 && ($ = i.getUniformBlockIndex(he, U.name), V.set(U, $));
  }
  function ze(U, he) {
    const $ = c.get(he).get(U);
    l.get(he) !== $ && (i.uniformBlockBinding(he, $, U.__bindingPointIndex), l.set(he, $));
  }
  function rt() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), o.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, le = null, me = {}, f = {}, d = /* @__PURE__ */ new WeakMap(), m = [], g = null, x = !1, p = null, u = null, T = null, S = null, _ = null, R = null, C = null, b = new Pe(0, 0, 0), D = 0, y = !1, E = null, L = null, W = null, H = null, X = null, Ke.set(0, 0, i.canvas.width, i.canvas.height), q.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), o.reset(), a.reset();
  }
  return {
    buffers: {
      color: s,
      depth: o,
      stencil: a
    },
    enable: oe,
    disable: Te,
    bindFramebuffer: Xe,
    drawBuffers: Re,
    useProgram: ot,
    setBlending: P,
    setMaterial: Ut,
    setFlipSided: We,
    setCullFace: Ge,
    setLineWidth: xe,
    setPolygonOffset: nt,
    setScissorTest: Se,
    activeTexture: A,
    bindTexture: v,
    unbindTexture: O,
    compressedTexImage2D: j,
    compressedTexImage3D: K,
    texImage2D: pe,
    texImage3D: be,
    updateUBOMapping: ke,
    uniformBlockBinding: ze,
    texStorage2D: Ue,
    texStorage3D: ee,
    texSubImage2D: w,
    texSubImage3D: J,
    compressedTexSubImage2D: te,
    compressedTexSubImage3D: re,
    scissor: Ee,
    viewport: ce,
    reset: rt
  };
}
function Km(i, e, t, n, r, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new we(), h = /* @__PURE__ */ new WeakMap();
  let f;
  const d = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(A, v) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(A, v)
    ) : yr("canvas");
  }
  function x(A, v, O) {
    let j = 1;
    const K = Se(A);
    if ((K.width > O || K.height > O) && (j = O / Math.max(K.width, K.height)), j < 1)
      if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
        const w = Math.floor(j * K.width), J = Math.floor(j * K.height);
        f === void 0 && (f = g(w, J));
        const te = v ? g(w, J) : f;
        return te.width = w, te.height = J, te.getContext("2d").drawImage(A, 0, 0, w, J), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + w + "x" + J + ")."), te;
      } else
        return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), A;
    return A;
  }
  function p(A) {
    return A.generateMipmaps;
  }
  function u(A) {
    i.generateMipmap(A);
  }
  function T(A) {
    return A.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : A.isWebGL3DRenderTarget ? i.TEXTURE_3D : A.isWebGLArrayRenderTarget || A.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function S(A, v, O, j, K = !1) {
    if (A !== null) {
      if (i[A] !== void 0) return i[A];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let w = v;
    if (v === i.RED && (O === i.FLOAT && (w = i.R32F), O === i.HALF_FLOAT && (w = i.R16F), O === i.UNSIGNED_BYTE && (w = i.R8)), v === i.RED_INTEGER && (O === i.UNSIGNED_BYTE && (w = i.R8UI), O === i.UNSIGNED_SHORT && (w = i.R16UI), O === i.UNSIGNED_INT && (w = i.R32UI), O === i.BYTE && (w = i.R8I), O === i.SHORT && (w = i.R16I), O === i.INT && (w = i.R32I)), v === i.RG && (O === i.FLOAT && (w = i.RG32F), O === i.HALF_FLOAT && (w = i.RG16F), O === i.UNSIGNED_BYTE && (w = i.RG8)), v === i.RG_INTEGER && (O === i.UNSIGNED_BYTE && (w = i.RG8UI), O === i.UNSIGNED_SHORT && (w = i.RG16UI), O === i.UNSIGNED_INT && (w = i.RG32UI), O === i.BYTE && (w = i.RG8I), O === i.SHORT && (w = i.RG16I), O === i.INT && (w = i.RG32I)), v === i.RGB_INTEGER && (O === i.UNSIGNED_BYTE && (w = i.RGB8UI), O === i.UNSIGNED_SHORT && (w = i.RGB16UI), O === i.UNSIGNED_INT && (w = i.RGB32UI), O === i.BYTE && (w = i.RGB8I), O === i.SHORT && (w = i.RGB16I), O === i.INT && (w = i.RGB32I)), v === i.RGBA_INTEGER && (O === i.UNSIGNED_BYTE && (w = i.RGBA8UI), O === i.UNSIGNED_SHORT && (w = i.RGBA16UI), O === i.UNSIGNED_INT && (w = i.RGBA32UI), O === i.BYTE && (w = i.RGBA8I), O === i.SHORT && (w = i.RGBA16I), O === i.INT && (w = i.RGBA32I)), v === i.RGB && O === i.UNSIGNED_INT_5_9_9_9_REV && (w = i.RGB9_E5), v === i.RGBA) {
      const J = K ? vs : qe.getTransfer(j);
      O === i.FLOAT && (w = i.RGBA32F), O === i.HALF_FLOAT && (w = i.RGBA16F), O === i.UNSIGNED_BYTE && (w = J === tt ? i.SRGB8_ALPHA8 : i.RGBA8), O === i.UNSIGNED_SHORT_4_4_4_4 && (w = i.RGBA4), O === i.UNSIGNED_SHORT_5_5_5_1 && (w = i.RGB5_A1);
    }
    return (w === i.R16F || w === i.R32F || w === i.RG16F || w === i.RG32F || w === i.RGBA16F || w === i.RGBA32F) && e.get("EXT_color_buffer_float"), w;
  }
  function _(A, v) {
    let O;
    return A ? v === null || v === hi || v === Sr ? O = i.DEPTH24_STENCIL8 : v === dn ? O = i.DEPTH32F_STENCIL8 : v === xr && (O = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === hi || v === Sr ? O = i.DEPTH_COMPONENT24 : v === dn ? O = i.DEPTH_COMPONENT32F : v === xr && (O = i.DEPTH_COMPONENT16), O;
  }
  function R(A, v) {
    return p(A) === !0 || A.isFramebufferTexture && A.minFilter !== Gt && A.minFilter !== qt ? Math.log2(Math.max(v.width, v.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? v.mipmaps.length : 1;
  }
  function C(A) {
    const v = A.target;
    v.removeEventListener("dispose", C), D(v), v.isVideoTexture && h.delete(v);
  }
  function b(A) {
    const v = A.target;
    v.removeEventListener("dispose", b), E(v);
  }
  function D(A) {
    const v = n.get(A);
    if (v.__webglInit === void 0) return;
    const O = A.source, j = d.get(O);
    if (j) {
      const K = j[v.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && y(A), Object.keys(j).length === 0 && d.delete(O);
    }
    n.remove(A);
  }
  function y(A) {
    const v = n.get(A);
    i.deleteTexture(v.__webglTexture);
    const O = A.source, j = d.get(O);
    delete j[v.__cacheKey], o.memory.textures--;
  }
  function E(A) {
    const v = n.get(A);
    if (A.depthTexture && (A.depthTexture.dispose(), n.remove(A.depthTexture)), A.isWebGLCubeRenderTarget)
      for (let j = 0; j < 6; j++) {
        if (Array.isArray(v.__webglFramebuffer[j]))
          for (let K = 0; K < v.__webglFramebuffer[j].length; K++) i.deleteFramebuffer(v.__webglFramebuffer[j][K]);
        else
          i.deleteFramebuffer(v.__webglFramebuffer[j]);
        v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[j]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let j = 0; j < v.__webglFramebuffer.length; j++) i.deleteFramebuffer(v.__webglFramebuffer[j]);
      else
        i.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer)
        for (let j = 0; j < v.__webglColorRenderbuffer.length; j++)
          v.__webglColorRenderbuffer[j] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);
      v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const O = A.textures;
    for (let j = 0, K = O.length; j < K; j++) {
      const w = n.get(O[j]);
      w.__webglTexture && (i.deleteTexture(w.__webglTexture), o.memory.textures--), n.remove(O[j]);
    }
    n.remove(A);
  }
  let L = 0;
  function W() {
    L = 0;
  }
  function H() {
    const A = L;
    return A >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + r.maxTextures), L += 1, A;
  }
  function X(A) {
    const v = [];
    return v.push(A.wrapS), v.push(A.wrapT), v.push(A.wrapR || 0), v.push(A.magFilter), v.push(A.minFilter), v.push(A.anisotropy), v.push(A.internalFormat), v.push(A.format), v.push(A.type), v.push(A.generateMipmaps), v.push(A.premultiplyAlpha), v.push(A.flipY), v.push(A.unpackAlignment), v.push(A.colorSpace), v.join();
  }
  function Q(A, v) {
    const O = n.get(A);
    if (A.isVideoTexture && xe(A), A.isRenderTargetTexture === !1 && A.version > 0 && O.__version !== A.version) {
      const j = A.image;
      if (j === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (j.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(O, A, v);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, O.__webglTexture, i.TEXTURE0 + v);
  }
  function G(A, v) {
    const O = n.get(A);
    if (A.version > 0 && O.__version !== A.version) {
      q(O, A, v);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, O.__webglTexture, i.TEXTURE0 + v);
  }
  function ie(A, v) {
    const O = n.get(A);
    if (A.version > 0 && O.__version !== A.version) {
      q(O, A, v);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, O.__webglTexture, i.TEXTURE0 + v);
  }
  function k(A, v) {
    const O = n.get(A);
    if (A.version > 0 && O.__version !== A.version) {
      se(O, A, v);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + v);
  }
  const le = {
    [gs]: i.REPEAT,
    [Cn]: i.CLAMP_TO_EDGE,
    [Da]: i.MIRRORED_REPEAT
  }, me = {
    [Gt]: i.NEAREST,
    [vu]: i.NEAREST_MIPMAP_NEAREST,
    [Lr]: i.NEAREST_MIPMAP_LINEAR,
    [qt]: i.LINEAR,
    [Is]: i.LINEAR_MIPMAP_NEAREST,
    [li]: i.LINEAR_MIPMAP_LINEAR
  }, Me = {
    [Tu]: i.NEVER,
    [Pu]: i.ALWAYS,
    [Au]: i.LESS,
    [dc]: i.LEQUAL,
    [bu]: i.EQUAL,
    [Cu]: i.GEQUAL,
    [wu]: i.GREATER,
    [Ru]: i.NOTEQUAL
  };
  function Be(A, v) {
    if (v.type === dn && e.has("OES_texture_float_linear") === !1 && (v.magFilter === qt || v.magFilter === Is || v.magFilter === Lr || v.magFilter === li || v.minFilter === qt || v.minFilter === Is || v.minFilter === Lr || v.minFilter === li) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(A, i.TEXTURE_WRAP_S, le[v.wrapS]), i.texParameteri(A, i.TEXTURE_WRAP_T, le[v.wrapT]), (A === i.TEXTURE_3D || A === i.TEXTURE_2D_ARRAY) && i.texParameteri(A, i.TEXTURE_WRAP_R, le[v.wrapR]), i.texParameteri(A, i.TEXTURE_MAG_FILTER, me[v.magFilter]), i.texParameteri(A, i.TEXTURE_MIN_FILTER, me[v.minFilter]), v.compareFunction && (i.texParameteri(A, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(A, i.TEXTURE_COMPARE_FUNC, Me[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (v.magFilter === Gt || v.minFilter !== Lr && v.minFilter !== li || v.type === dn && e.has("OES_texture_float_linear") === !1) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const O = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(A, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Ke(A, v) {
    let O = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, v.addEventListener("dispose", C));
    const j = v.source;
    let K = d.get(j);
    K === void 0 && (K = {}, d.set(j, K));
    const w = X(v);
    if (w !== A.__cacheKey) {
      K[w] === void 0 && (K[w] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, O = !0), K[w].usedTimes++;
      const J = K[A.__cacheKey];
      J !== void 0 && (K[A.__cacheKey].usedTimes--, J.usedTimes === 0 && y(v)), A.__cacheKey = w, A.__webglTexture = K[w].texture;
    }
    return O;
  }
  function q(A, v, O) {
    let j = i.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (j = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (j = i.TEXTURE_3D);
    const K = Ke(A, v), w = v.source;
    t.bindTexture(j, A.__webglTexture, i.TEXTURE0 + O);
    const J = n.get(w);
    if (w.version !== J.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + O);
      const te = qe.getPrimaries(qe.workingColorSpace), re = v.colorSpace === Vn ? null : qe.getPrimaries(v.colorSpace), Ue = v.colorSpace === Vn || te === re ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ue);
      let ee = x(v.image, !1, r.maxTextureSize);
      ee = nt(v, ee);
      const pe = s.convert(v.format, v.colorSpace), be = s.convert(v.type);
      let Ee = S(v.internalFormat, pe, be, v.colorSpace, v.isVideoTexture);
      Be(j, v);
      let ce;
      const ke = v.mipmaps, ze = v.isVideoTexture !== !0, rt = J.__version === void 0 || K === !0, U = w.dataReady, he = R(v, ee);
      if (v.isDepthTexture)
        Ee = _(v.format === Er, v.type), rt && (ze ? t.texStorage2D(i.TEXTURE_2D, 1, Ee, ee.width, ee.height) : t.texImage2D(i.TEXTURE_2D, 0, Ee, ee.width, ee.height, 0, pe, be, null));
      else if (v.isDataTexture)
        if (ke.length > 0) {
          ze && rt && t.texStorage2D(i.TEXTURE_2D, he, Ee, ke[0].width, ke[0].height);
          for (let V = 0, $ = ke.length; V < $; V++)
            ce = ke[V], ze ? U && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, ce.width, ce.height, pe, be, ce.data) : t.texImage2D(i.TEXTURE_2D, V, Ee, ce.width, ce.height, 0, pe, be, ce.data);
          v.generateMipmaps = !1;
        } else
          ze ? (rt && t.texStorage2D(i.TEXTURE_2D, he, Ee, ee.width, ee.height), U && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ee.width, ee.height, pe, be, ee.data)) : t.texImage2D(i.TEXTURE_2D, 0, Ee, ee.width, ee.height, 0, pe, be, ee.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          ze && rt && t.texStorage3D(i.TEXTURE_2D_ARRAY, he, Ee, ke[0].width, ke[0].height, ee.depth);
          for (let V = 0, $ = ke.length; V < $; V++)
            if (ce = ke[V], v.format !== Zt)
              if (pe !== null)
                if (ze) {
                  if (U)
                    if (v.layerUpdates.size > 0) {
                      const fe = pl(ce.width, ce.height, v.format, v.type);
                      for (const de of v.layerUpdates) {
                        const Ne = ce.data.subarray(
                          de * fe / ce.data.BYTES_PER_ELEMENT,
                          (de + 1) * fe / ce.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, de, ce.width, ce.height, 1, pe, Ne);
                      }
                      v.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, ce.width, ce.height, ee.depth, pe, ce.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, V, Ee, ce.width, ce.height, ee.depth, 0, ce.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              ze ? U && t.texSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, ce.width, ce.height, ee.depth, pe, be, ce.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, V, Ee, ce.width, ce.height, ee.depth, 0, pe, be, ce.data);
        } else {
          ze && rt && t.texStorage2D(i.TEXTURE_2D, he, Ee, ke[0].width, ke[0].height);
          for (let V = 0, $ = ke.length; V < $; V++)
            ce = ke[V], v.format !== Zt ? pe !== null ? ze ? U && t.compressedTexSubImage2D(i.TEXTURE_2D, V, 0, 0, ce.width, ce.height, pe, ce.data) : t.compressedTexImage2D(i.TEXTURE_2D, V, Ee, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ze ? U && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, ce.width, ce.height, pe, be, ce.data) : t.texImage2D(i.TEXTURE_2D, V, Ee, ce.width, ce.height, 0, pe, be, ce.data);
        }
      else if (v.isDataArrayTexture)
        if (ze) {
          if (rt && t.texStorage3D(i.TEXTURE_2D_ARRAY, he, Ee, ee.width, ee.height, ee.depth), U)
            if (v.layerUpdates.size > 0) {
              const V = pl(ee.width, ee.height, v.format, v.type);
              for (const $ of v.layerUpdates) {
                const fe = ee.data.subarray(
                  $ * V / ee.data.BYTES_PER_ELEMENT,
                  ($ + 1) * V / ee.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, $, ee.width, ee.height, 1, pe, be, fe);
              }
              v.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, pe, be, ee.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ee, ee.width, ee.height, ee.depth, 0, pe, be, ee.data);
      else if (v.isData3DTexture)
        ze ? (rt && t.texStorage3D(i.TEXTURE_3D, he, Ee, ee.width, ee.height, ee.depth), U && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, pe, be, ee.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ee, ee.width, ee.height, ee.depth, 0, pe, be, ee.data);
      else if (v.isFramebufferTexture) {
        if (rt)
          if (ze)
            t.texStorage2D(i.TEXTURE_2D, he, Ee, ee.width, ee.height);
          else {
            let V = ee.width, $ = ee.height;
            for (let fe = 0; fe < he; fe++)
              t.texImage2D(i.TEXTURE_2D, fe, Ee, V, $, 0, pe, be, null), V >>= 1, $ >>= 1;
          }
      } else if (ke.length > 0) {
        if (ze && rt) {
          const V = Se(ke[0]);
          t.texStorage2D(i.TEXTURE_2D, he, Ee, V.width, V.height);
        }
        for (let V = 0, $ = ke.length; V < $; V++)
          ce = ke[V], ze ? U && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, pe, be, ce) : t.texImage2D(i.TEXTURE_2D, V, Ee, pe, be, ce);
        v.generateMipmaps = !1;
      } else if (ze) {
        if (rt) {
          const V = Se(ee);
          t.texStorage2D(i.TEXTURE_2D, he, Ee, V.width, V.height);
        }
        U && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, pe, be, ee);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Ee, pe, be, ee);
      p(v) && u(j), J.__version = w.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function se(A, v, O) {
    if (v.image.length !== 6) return;
    const j = Ke(A, v), K = v.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, A.__webglTexture, i.TEXTURE0 + O);
    const w = n.get(K);
    if (K.version !== w.__version || j === !0) {
      t.activeTexture(i.TEXTURE0 + O);
      const J = qe.getPrimaries(qe.workingColorSpace), te = v.colorSpace === Vn ? null : qe.getPrimaries(v.colorSpace), re = v.colorSpace === Vn || J === te ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, re);
      const Ue = v.isCompressedTexture || v.image[0].isCompressedTexture, ee = v.image[0] && v.image[0].isDataTexture, pe = [];
      for (let $ = 0; $ < 6; $++)
        !Ue && !ee ? pe[$] = x(v.image[$], !0, r.maxCubemapSize) : pe[$] = ee ? v.image[$].image : v.image[$], pe[$] = nt(v, pe[$]);
      const be = pe[0], Ee = s.convert(v.format, v.colorSpace), ce = s.convert(v.type), ke = S(v.internalFormat, Ee, ce, v.colorSpace), ze = v.isVideoTexture !== !0, rt = w.__version === void 0 || j === !0, U = K.dataReady;
      let he = R(v, be);
      Be(i.TEXTURE_CUBE_MAP, v);
      let V;
      if (Ue) {
        ze && rt && t.texStorage2D(i.TEXTURE_CUBE_MAP, he, ke, be.width, be.height);
        for (let $ = 0; $ < 6; $++) {
          V = pe[$].mipmaps;
          for (let fe = 0; fe < V.length; fe++) {
            const de = V[fe];
            v.format !== Zt ? Ee !== null ? ze ? U && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe, 0, 0, de.width, de.height, Ee, de.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe, ke, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ze ? U && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe, 0, 0, de.width, de.height, Ee, ce, de.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe, ke, de.width, de.height, 0, Ee, ce, de.data);
          }
        }
      } else {
        if (V = v.mipmaps, ze && rt) {
          V.length > 0 && he++;
          const $ = Se(pe[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, he, ke, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++)
          if (ee) {
            ze ? U && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, pe[$].width, pe[$].height, Ee, ce, pe[$].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, ke, pe[$].width, pe[$].height, 0, Ee, ce, pe[$].data);
            for (let fe = 0; fe < V.length; fe++) {
              const Ne = V[fe].image[$].image;
              ze ? U && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe + 1, 0, 0, Ne.width, Ne.height, Ee, ce, Ne.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe + 1, ke, Ne.width, Ne.height, 0, Ee, ce, Ne.data);
            }
          } else {
            ze ? U && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Ee, ce, pe[$]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, ke, Ee, ce, pe[$]);
            for (let fe = 0; fe < V.length; fe++) {
              const de = V[fe];
              ze ? U && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe + 1, 0, 0, Ee, ce, de.image[$]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, fe + 1, ke, Ee, ce, de.image[$]);
            }
          }
      }
      p(v) && u(i.TEXTURE_CUBE_MAP), w.__version = K.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function ve(A, v, O, j, K, w) {
    const J = s.convert(O.format, O.colorSpace), te = s.convert(O.type), re = S(O.internalFormat, J, te, O.colorSpace), Ue = n.get(v), ee = n.get(O);
    if (ee.__renderTarget = v, !Ue.__hasExternalTextures) {
      const pe = Math.max(1, v.width >> w), be = Math.max(1, v.height >> w);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? t.texImage3D(K, w, re, pe, be, v.depth, 0, J, te, null) : t.texImage2D(K, w, re, pe, be, 0, J, te, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, A), Ge(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, j, K, ee.__webglTexture, 0, We(v)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, j, K, ee.__webglTexture, w), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function oe(A, v, O) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, A), v.depthBuffer) {
      const j = v.depthTexture, K = j && j.isDepthTexture ? j.type : null, w = _(v.stencilBuffer, K), J = v.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, te = We(v);
      Ge(v) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, te, w, v.width, v.height) : O ? i.renderbufferStorageMultisample(i.RENDERBUFFER, te, w, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, w, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, A);
    } else {
      const j = v.textures;
      for (let K = 0; K < j.length; K++) {
        const w = j[K], J = s.convert(w.format, w.colorSpace), te = s.convert(w.type), re = S(w.internalFormat, J, te, w.colorSpace), Ue = We(v);
        O && Ge(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Ue, re, v.width, v.height) : Ge(v) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Ue, re, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, re, v.width, v.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Te(A, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, A), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const j = n.get(v.depthTexture);
    j.__renderTarget = v, (!j.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), Q(v.depthTexture, 0);
    const K = j.__webglTexture, w = We(v);
    if (v.depthTexture.format === Mr)
      Ge(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, w) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (v.depthTexture.format === Er)
      Ge(v) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, w) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Xe(A) {
    const v = n.get(A), O = A.isWebGLCubeRenderTarget === !0;
    if (v.__boundDepthTexture !== A.depthTexture) {
      const j = A.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), j) {
        const K = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, j.removeEventListener("dispose", K);
        };
        j.addEventListener("dispose", K), v.__depthDisposeCallback = K;
      }
      v.__boundDepthTexture = j;
    }
    if (A.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O) throw new Error("target.depthTexture not supported in Cube render targets");
      Te(v.__webglFramebuffer, A);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[j]), v.__webglDepthbuffer[j] === void 0)
          v.__webglDepthbuffer[j] = i.createRenderbuffer(), oe(v.__webglDepthbuffer[j], A, !1);
        else {
          const K = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, w = v.__webglDepthbuffer[j];
          i.bindRenderbuffer(i.RENDERBUFFER, w), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, w);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0)
      v.__webglDepthbuffer = i.createRenderbuffer(), oe(v.__webglDepthbuffer, A, !1);
    else {
      const j = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, K = v.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, K), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, K);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Re(A, v, O) {
    const j = n.get(A);
    v !== void 0 && ve(j.__webglFramebuffer, A, A.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), O !== void 0 && Xe(A);
  }
  function ot(A) {
    const v = A.texture, O = n.get(A), j = n.get(v);
    A.addEventListener("dispose", b);
    const K = A.textures, w = A.isWebGLCubeRenderTarget === !0, J = K.length > 1;
    if (J || (j.__webglTexture === void 0 && (j.__webglTexture = i.createTexture()), j.__version = v.version, o.memory.textures++), w) {
      O.__webglFramebuffer = [];
      for (let te = 0; te < 6; te++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          O.__webglFramebuffer[te] = [];
          for (let re = 0; re < v.mipmaps.length; re++)
            O.__webglFramebuffer[te][re] = i.createFramebuffer();
        } else
          O.__webglFramebuffer[te] = i.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let te = 0; te < v.mipmaps.length; te++)
          O.__webglFramebuffer[te] = i.createFramebuffer();
      } else
        O.__webglFramebuffer = i.createFramebuffer();
      if (J)
        for (let te = 0, re = K.length; te < re; te++) {
          const Ue = n.get(K[te]);
          Ue.__webglTexture === void 0 && (Ue.__webglTexture = i.createTexture(), o.memory.textures++);
        }
      if (A.samples > 0 && Ge(A) === !1) {
        O.__webglMultisampledFramebuffer = i.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let te = 0; te < K.length; te++) {
          const re = K[te];
          O.__webglColorRenderbuffer[te] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[te]);
          const Ue = s.convert(re.format, re.colorSpace), ee = s.convert(re.type), pe = S(re.internalFormat, Ue, ee, re.colorSpace, A.isXRRenderTarget === !0), be = We(A);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, be, pe, A.width, A.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + te, i.RENDERBUFFER, O.__webglColorRenderbuffer[te]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), A.depthBuffer && (O.__webglDepthRenderbuffer = i.createRenderbuffer(), oe(O.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (w) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture), Be(i.TEXTURE_CUBE_MAP, v);
      for (let te = 0; te < 6; te++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let re = 0; re < v.mipmaps.length; re++)
            ve(O.__webglFramebuffer[te][re], A, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + te, re);
        else
          ve(O.__webglFramebuffer[te], A, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0);
      p(v) && u(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (J) {
      for (let te = 0, re = K.length; te < re; te++) {
        const Ue = K[te], ee = n.get(Ue);
        t.bindTexture(i.TEXTURE_2D, ee.__webglTexture), Be(i.TEXTURE_2D, Ue), ve(O.__webglFramebuffer, A, Ue, i.COLOR_ATTACHMENT0 + te, i.TEXTURE_2D, 0), p(Ue) && u(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let te = i.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (te = A.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(te, j.__webglTexture), Be(te, v), v.mipmaps && v.mipmaps.length > 0)
        for (let re = 0; re < v.mipmaps.length; re++)
          ve(O.__webglFramebuffer[re], A, v, i.COLOR_ATTACHMENT0, te, re);
      else
        ve(O.__webglFramebuffer, A, v, i.COLOR_ATTACHMENT0, te, 0);
      p(v) && u(te), t.unbindTexture();
    }
    A.depthBuffer && Xe(A);
  }
  function st(A) {
    const v = A.textures;
    for (let O = 0, j = v.length; O < j; O++) {
      const K = v[O];
      if (p(K)) {
        const w = T(A), J = n.get(K).__webglTexture;
        t.bindTexture(w, J), u(w), t.unbindTexture();
      }
    }
  }
  const He = [], P = [];
  function Ut(A) {
    if (A.samples > 0) {
      if (Ge(A) === !1) {
        const v = A.textures, O = A.width, j = A.height;
        let K = i.COLOR_BUFFER_BIT;
        const w = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, J = n.get(A), te = v.length > 1;
        if (te)
          for (let re = 0; re < v.length; re++)
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + re, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + re, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, J.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglFramebuffer);
        for (let re = 0; re < v.length; re++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), te) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, J.__webglColorRenderbuffer[re]);
            const Ue = n.get(v[re]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Ue, 0);
          }
          i.blitFramebuffer(0, 0, O, j, 0, 0, O, j, K, i.NEAREST), l === !0 && (He.length = 0, P.length = 0, He.push(i.COLOR_ATTACHMENT0 + re), A.depthBuffer && A.resolveDepthBuffer === !1 && (He.push(w), P.push(w), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, P)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, He));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), te)
          for (let re = 0; re < v.length; re++) {
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + re, i.RENDERBUFFER, J.__webglColorRenderbuffer[re]);
            const Ue = n.get(v[re]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + re, i.TEXTURE_2D, Ue, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && l) {
        const v = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function We(A) {
    return Math.min(r.maxSamples, A.samples);
  }
  function Ge(A) {
    const v = n.get(A);
    return A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function xe(A) {
    const v = o.render.frame;
    h.get(A) !== v && (h.set(A, v), A.update());
  }
  function nt(A, v) {
    const O = A.colorSpace, j = A.format, K = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || O !== qi && O !== Vn && (qe.getTransfer(O) === tt ? (j !== Zt || K !== Ln) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), v;
  }
  function Se(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (c.width = A.naturalWidth || A.width, c.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (c.width = A.displayWidth, c.height = A.displayHeight) : (c.width = A.width, c.height = A.height), c;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = W, this.setTexture2D = Q, this.setTexture2DArray = G, this.setTexture3D = ie, this.setTextureCube = k, this.rebindTextures = Re, this.setupRenderTarget = ot, this.updateRenderTargetMipmap = st, this.updateMultisampleRenderTarget = Ut, this.setupDepthRenderbuffer = Xe, this.setupFrameBufferTexture = ve, this.useMultisampledRTT = Ge;
}
function Jm(i, e) {
  function t(n, r = Vn) {
    let s;
    const o = qe.getTransfer(r);
    if (n === Ln) return i.UNSIGNED_BYTE;
    if (n === mo) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === _o) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === rc) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === nc) return i.BYTE;
    if (n === ic) return i.SHORT;
    if (n === xr) return i.UNSIGNED_SHORT;
    if (n === po) return i.INT;
    if (n === hi) return i.UNSIGNED_INT;
    if (n === dn) return i.FLOAT;
    if (n === Ar) return i.HALF_FLOAT;
    if (n === sc) return i.ALPHA;
    if (n === ac) return i.RGB;
    if (n === Zt) return i.RGBA;
    if (n === oc) return i.LUMINANCE;
    if (n === lc) return i.LUMINANCE_ALPHA;
    if (n === Mr) return i.DEPTH_COMPONENT;
    if (n === Er) return i.DEPTH_STENCIL;
    if (n === cc) return i.RED;
    if (n === go) return i.RED_INTEGER;
    if (n === uc) return i.RG;
    if (n === vo) return i.RG_INTEGER;
    if (n === xo) return i.RGBA_INTEGER;
    if (n === us || n === hs || n === ds || n === fs)
      if (o === tt)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === us) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === hs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === ds) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === fs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === us) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === hs) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === ds) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === fs) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === La || n === Ua || n === Ia || n === Na)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === La) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ua) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ia) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Na) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Fa || n === Oa || n === Ba)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Fa || n === Oa) return o === tt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Ba) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === za || n === Ha || n === ka || n === Va || n === Ga || n === Wa || n === Xa || n === Ya || n === qa || n === Za || n === ja || n === $a || n === Ka || n === Ja)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === za) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ha) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === ka) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Va) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Ga) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Wa) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Xa) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ya) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === qa) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Za) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === ja) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === $a) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Ka) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Ja) return o === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === ps || n === Qa || n === eo)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === ps) return o === tt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Qa) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === eo) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === hc || n === to || n === no || n === io)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === ps) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === to) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === no) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === io) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Sr ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Qm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, e_ = `
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
class t_ {
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
      const r = new Lt(), s = e.properties.get(r);
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
      const t = e.cameras[0].viewport, n = new Dt({
        vertexShader: Qm,
        fragmentShader: e_,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new kt(new ji(20, 20), n);
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
class n_ extends fi {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, h = null, f = null, d = null, m = null, g = null;
    const x = new t_(), p = t.getContextAttributes();
    let u = null, T = null;
    const S = [], _ = [], R = new we();
    let C = null;
    const b = new un();
    b.viewport = new ft();
    const D = new un();
    D.viewport = new ft();
    const y = [b, D], E = new Mh();
    let L = null, W = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let se = S[q];
      return se === void 0 && (se = new na(), S[q] = se), se.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let se = S[q];
      return se === void 0 && (se = new na(), S[q] = se), se.getGripSpace();
    }, this.getHand = function(q) {
      let se = S[q];
      return se === void 0 && (se = new na(), S[q] = se), se.getHandSpace();
    };
    function H(q) {
      const se = _.indexOf(q.inputSource);
      if (se === -1)
        return;
      const ve = S[se];
      ve !== void 0 && (ve.update(q.inputSource, q.frame, c || o), ve.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function X() {
      r.removeEventListener("select", H), r.removeEventListener("selectstart", H), r.removeEventListener("selectend", H), r.removeEventListener("squeeze", H), r.removeEventListener("squeezestart", H), r.removeEventListener("squeezeend", H), r.removeEventListener("end", X), r.removeEventListener("inputsourceschange", Q);
      for (let q = 0; q < S.length; q++) {
        const se = _[q];
        se !== null && (_[q] = null, S[q].disconnect(se));
      }
      L = null, W = null, x.reset(), e.setRenderTarget(u), m = null, d = null, f = null, r = null, T = null, Ke.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(R.width, R.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      s = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      a = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(q) {
      c = q;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(q) {
      if (r = q, r !== null) {
        if (u = e.getRenderTarget(), r.addEventListener("select", H), r.addEventListener("selectstart", H), r.addEventListener("selectend", H), r.addEventListener("squeeze", H), r.addEventListener("squeezestart", H), r.addEventListener("squeezeend", H), r.addEventListener("end", X), r.addEventListener("inputsourceschange", Q), p.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(R), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ve = null, oe = null, Te = null;
          p.depth && (Te = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ve = p.stencil ? Er : Mr, oe = p.stencil ? Sr : hi);
          const Xe = {
            colorFormat: t.RGBA8,
            depthFormat: Te,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), d = f.createProjectionLayer(Xe), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), T = new di(
            d.textureWidth,
            d.textureHeight,
            {
              format: Zt,
              type: Ln,
              depthTexture: new Tc(d.textureWidth, d.textureHeight, oe, void 0, void 0, void 0, void 0, void 0, void 0, ve),
              stencilBuffer: p.stencil,
              colorSpace: e.outputColorSpace,
              samples: p.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1,
              resolveStencilBuffer: d.ignoreDepthValues === !1
            }
          );
        } else {
          const ve = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, ve), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), T = new di(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Zt,
              type: Ln,
              colorSpace: e.outputColorSpace,
              stencilBuffer: p.stencil,
              resolveDepthBuffer: m.ignoreDepthValues === !1,
              resolveStencilBuffer: m.ignoreDepthValues === !1
            }
          );
        }
        T.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), Ke.setContext(r), Ke.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return x.getDepthTexture();
    };
    function Q(q) {
      for (let se = 0; se < q.removed.length; se++) {
        const ve = q.removed[se], oe = _.indexOf(ve);
        oe >= 0 && (_[oe] = null, S[oe].disconnect(ve));
      }
      for (let se = 0; se < q.added.length; se++) {
        const ve = q.added[se];
        let oe = _.indexOf(ve);
        if (oe === -1) {
          for (let Xe = 0; Xe < S.length; Xe++)
            if (Xe >= _.length) {
              _.push(ve), oe = Xe;
              break;
            } else if (_[Xe] === null) {
              _[Xe] = ve, oe = Xe;
              break;
            }
          if (oe === -1) break;
        }
        const Te = S[oe];
        Te && Te.connect(ve);
      }
    }
    const G = new F(), ie = new F();
    function k(q, se, ve) {
      G.setFromMatrixPosition(se.matrixWorld), ie.setFromMatrixPosition(ve.matrixWorld);
      const oe = G.distanceTo(ie), Te = se.projectionMatrix.elements, Xe = ve.projectionMatrix.elements, Re = Te[14] / (Te[10] - 1), ot = Te[14] / (Te[10] + 1), st = (Te[9] + 1) / Te[5], He = (Te[9] - 1) / Te[5], P = (Te[8] - 1) / Te[0], Ut = (Xe[8] + 1) / Xe[0], We = Re * P, Ge = Re * Ut, xe = oe / (-P + Ut), nt = xe * -P;
      if (se.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(nt), q.translateZ(xe), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), Te[10] === -1)
        q.projectionMatrix.copy(se.projectionMatrix), q.projectionMatrixInverse.copy(se.projectionMatrixInverse);
      else {
        const Se = Re + xe, A = ot + xe, v = We - nt, O = Ge + (oe - nt), j = st * ot / A * Se, K = He * ot / A * Se;
        q.projectionMatrix.makePerspective(v, O, j, K, Se, A), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function le(q, se) {
      se === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(se.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (r === null) return;
      let se = q.near, ve = q.far;
      x.texture !== null && (x.depthNear > 0 && (se = x.depthNear), x.depthFar > 0 && (ve = x.depthFar)), E.near = D.near = b.near = se, E.far = D.far = b.far = ve, (L !== E.near || W !== E.far) && (r.updateRenderState({
        depthNear: E.near,
        depthFar: E.far
      }), L = E.near, W = E.far), b.layers.mask = q.layers.mask | 2, D.layers.mask = q.layers.mask | 4, E.layers.mask = b.layers.mask | D.layers.mask;
      const oe = q.parent, Te = E.cameras;
      le(E, oe);
      for (let Xe = 0; Xe < Te.length; Xe++)
        le(Te[Xe], oe);
      Te.length === 2 ? k(E, b, D) : E.projectionMatrix.copy(b.projectionMatrix), me(q, E, oe);
    };
    function me(q, se, ve) {
      ve === null ? q.matrix.copy(se.matrixWorld) : (q.matrix.copy(ve.matrixWorld), q.matrix.invert(), q.matrix.multiply(se.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy(se.projectionMatrix), q.projectionMatrixInverse.copy(se.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = ro * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return E;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return l;
    }, this.setFoveation = function(q) {
      l = q, d !== null && (d.fixedFoveation = q), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return x.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return x.getMesh(E);
    };
    let Me = null;
    function Be(q, se) {
      if (h = se.getViewerPose(c || o), g = se, h !== null) {
        const ve = h.views;
        m !== null && (e.setRenderTargetFramebuffer(T, m.framebuffer), e.setRenderTarget(T));
        let oe = !1;
        ve.length !== E.cameras.length && (E.cameras.length = 0, oe = !0);
        for (let Re = 0; Re < ve.length; Re++) {
          const ot = ve[Re];
          let st = null;
          if (m !== null)
            st = m.getViewport(ot);
          else {
            const P = f.getViewSubImage(d, ot);
            st = P.viewport, Re === 0 && (e.setRenderTargetTextures(
              T,
              P.colorTexture,
              P.depthStencilTexture
            ), e.setRenderTarget(T));
          }
          let He = y[Re];
          He === void 0 && (He = new un(), He.layers.enable(Re), He.viewport = new ft(), y[Re] = He), He.matrix.fromArray(ot.transform.matrix), He.matrix.decompose(He.position, He.quaternion, He.scale), He.projectionMatrix.fromArray(ot.projectionMatrix), He.projectionMatrixInverse.copy(He.projectionMatrix).invert(), He.viewport.set(st.x, st.y, st.width, st.height), Re === 0 && (E.matrix.copy(He.matrix), E.matrix.decompose(E.position, E.quaternion, E.scale)), oe === !0 && E.cameras.push(He);
        }
        const Te = r.enabledFeatures;
        if (Te && Te.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && f) {
          const Re = f.getDepthInformation(ve[0]);
          Re && Re.isValid && Re.texture && x.init(e, Re, r.renderState);
        }
      }
      for (let ve = 0; ve < S.length; ve++) {
        const oe = _[ve], Te = S[ve];
        oe !== null && Te !== void 0 && Te.update(oe, se, c || o);
      }
      Me && Me(q, se), se.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: se }), g = null;
    }
    const Ke = new Ac();
    Ke.setAnimationLoop(Be), this.setAnimationLoop = function(q) {
      Me = q;
    }, this.dispose = function() {
    };
  }
}
const ei = /* @__PURE__ */ new Un(), i_ = /* @__PURE__ */ new lt();
function r_(i, e) {
  function t(p, u) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix);
  }
  function n(p, u) {
    u.color.getRGB(p.fogColor.value, Mc(i)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function r(p, u, T, S, _) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), f(p, u)) : u.isMeshPhongMaterial ? (s(p, u), h(p, u)) : u.isMeshStandardMaterial ? (s(p, u), d(p, u), u.isMeshPhysicalMaterial && m(p, u, _)) : u.isMeshMatcapMaterial ? (s(p, u), g(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), x(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (o(p, u), u.isLineDashedMaterial && a(p, u)) : u.isPointsMaterial ? l(p, u, T, S) : u.isSpriteMaterial ? c(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(p, u) {
    p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, t(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === Vt && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, t(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === Vt && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, t(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, t(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const T = e.get(u), S = T.envMap, _ = T.envMapRotation;
    S && (p.envMap.value = S, ei.copy(_), ei.x *= -1, ei.y *= -1, ei.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (ei.y *= -1, ei.z *= -1), p.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(ei)), p.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap && (p.lightMap.value = u.lightMap, p.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, p.lightMapTransform)), u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, p.aoMapTransform));
  }
  function o(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, t(u.map, p.mapTransform));
  }
  function a(p, u) {
    p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale;
  }
  function l(p, u, T, S) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * T, p.scale.value = S * 0.5, u.map && (p.map.value = u.map, t(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function c(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function h(p, u) {
    p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function f(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function d(p, u) {
    p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, p.roughnessMapTransform)), u.envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function m(p, u, T) {
    p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === Vt && p.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (p.dispersion.value = u.dispersion), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = T.texture, p.transmissionSamplerSize.value.set(T.width, T.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function x(p, u) {
    const T = e.get(u).light;
    p.referencePosition.value.setFromMatrixPosition(T.matrixWorld), p.nearDistance.value = T.shadow.camera.near, p.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function s_(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, S) {
    const _ = S.program;
    n.uniformBlockBinding(T, _);
  }
  function c(T, S) {
    let _ = r[T.id];
    _ === void 0 && (g(T), _ = h(T), r[T.id] = _, T.addEventListener("dispose", p));
    const R = S.program;
    n.updateUBOMapping(T, R);
    const C = e.render.frame;
    s[T.id] !== C && (d(T), s[T.id] = C);
  }
  function h(T) {
    const S = f();
    T.__bindingPointIndex = S;
    const _ = i.createBuffer(), R = T.__size, C = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, _), i.bufferData(i.UNIFORM_BUFFER, R, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, S, _), _;
  }
  function f() {
    for (let T = 0; T < a; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const S = r[T.id], _ = T.uniforms, R = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, S);
    for (let C = 0, b = _.length; C < b; C++) {
      const D = Array.isArray(_[C]) ? _[C] : [_[C]];
      for (let y = 0, E = D.length; y < E; y++) {
        const L = D[y];
        if (m(L, C, y, R) === !0) {
          const W = L.__offset, H = Array.isArray(L.value) ? L.value : [L.value];
          let X = 0;
          for (let Q = 0; Q < H.length; Q++) {
            const G = H[Q], ie = x(G);
            typeof G == "number" || typeof G == "boolean" ? (L.__data[0] = G, i.bufferSubData(i.UNIFORM_BUFFER, W + X, L.__data)) : G.isMatrix3 ? (L.__data[0] = G.elements[0], L.__data[1] = G.elements[1], L.__data[2] = G.elements[2], L.__data[3] = 0, L.__data[4] = G.elements[3], L.__data[5] = G.elements[4], L.__data[6] = G.elements[5], L.__data[7] = 0, L.__data[8] = G.elements[6], L.__data[9] = G.elements[7], L.__data[10] = G.elements[8], L.__data[11] = 0) : (G.toArray(L.__data, X), X += ie.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, W, L.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, S, _, R) {
    const C = T.value, b = S + "_" + _;
    if (R[b] === void 0)
      return typeof C == "number" || typeof C == "boolean" ? R[b] = C : R[b] = C.clone(), !0;
    {
      const D = R[b];
      if (typeof C == "number" || typeof C == "boolean") {
        if (D !== C)
          return R[b] = C, !0;
      } else if (D.equals(C) === !1)
        return D.copy(C), !0;
    }
    return !1;
  }
  function g(T) {
    const S = T.uniforms;
    let _ = 0;
    const R = 16;
    for (let b = 0, D = S.length; b < D; b++) {
      const y = Array.isArray(S[b]) ? S[b] : [S[b]];
      for (let E = 0, L = y.length; E < L; E++) {
        const W = y[E], H = Array.isArray(W.value) ? W.value : [W.value];
        for (let X = 0, Q = H.length; X < Q; X++) {
          const G = H[X], ie = x(G), k = _ % R, le = k % ie.boundary, me = k + le;
          _ += le, me !== 0 && R - me < ie.storage && (_ += R - me), W.__data = new Float32Array(ie.storage / Float32Array.BYTES_PER_ELEMENT), W.__offset = _, _ += ie.storage;
        }
      }
    }
    const C = _ % R;
    return C > 0 && (_ += R - C), T.__size = _, T.__cache = {}, this;
  }
  function x(T) {
    const S = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" || typeof T == "boolean" ? (S.boundary = 4, S.storage = 4) : T.isVector2 ? (S.boundary = 8, S.storage = 8) : T.isVector3 || T.isColor ? (S.boundary = 16, S.storage = 12) : T.isVector4 ? (S.boundary = 16, S.storage = 16) : T.isMatrix3 ? (S.boundary = 48, S.storage = 48) : T.isMatrix4 ? (S.boundary = 64, S.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), S;
  }
  function p(T) {
    const S = T.target;
    S.removeEventListener("dispose", p);
    const _ = o.indexOf(S.__bindingPointIndex);
    o.splice(_, 1), i.deleteBuffer(r[S.id]), delete r[S.id], delete s[S.id];
  }
  function u() {
    for (const T in r)
      i.deleteBuffer(r[T]);
    o = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: u
  };
}
class a_ {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = Uu(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: f = !1,
      reverseDepthBuffer: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else
      m = o;
    const g = new Uint32Array(4), x = new Int32Array(4);
    let p = null, u = null;
    const T = [], S = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Xn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const _ = this;
    let R = !1;
    this._outputColorSpace = en;
    let C = 0, b = 0, D = null, y = -1, E = null;
    const L = new ft(), W = new ft();
    let H = null;
    const X = new Pe(0);
    let Q = 0, G = t.width, ie = t.height, k = 1, le = null, me = null;
    const Me = new ft(0, 0, G, ie), Be = new ft(0, 0, G, ie);
    let Ke = !1;
    const q = new Eo();
    let se = !1, ve = !1;
    const oe = new lt(), Te = new lt(), Xe = new F(), Re = new ft(), ot = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let st = !1;
    function He() {
      return D === null ? k : 1;
    }
    let P = n;
    function Ut(M, I) {
      return t.getContext(M, I);
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${uo}`), t.addEventListener("webglcontextlost", $, !1), t.addEventListener("webglcontextrestored", fe, !1), t.addEventListener("webglcontextcreationerror", de, !1), P === null) {
        const I = "webgl2";
        if (P = Ut(I, M), P === null)
          throw Ut(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let We, Ge, xe, nt, Se, A, v, O, j, K, w, J, te, re, Ue, ee, pe, be, Ee, ce, ke, ze, rt, U;
    function he() {
      We = new _p(P), We.init(), ze = new Jm(P, We), Ge = new cp(P, We, e, ze), xe = new $m(P, We), Ge.reverseDepthBuffer && d && xe.buffers.depth.setReversed(!0), nt = new xp(P), Se = new Om(), A = new Km(P, We, xe, Se, Ge, ze, nt), v = new hp(_), O = new mp(_), j = new Th(P), rt = new op(P, j), K = new gp(P, j, nt, rt), w = new Mp(P, K, j, nt), Ee = new Sp(P, Ge, A), ee = new up(Se), J = new Fm(_, v, O, We, Ge, rt, ee), te = new r_(_, Se), re = new zm(), Ue = new Xm(We), be = new ap(_, v, O, xe, w, m, l), pe = new Zm(_, w, Ge), U = new s_(P, nt, Ge, xe), ce = new lp(P, We, nt), ke = new vp(P, We, nt), nt.programs = J.programs, _.capabilities = Ge, _.extensions = We, _.properties = Se, _.renderLists = re, _.shadowMap = pe, _.state = xe, _.info = nt;
    }
    he();
    const V = new n_(_, P);
    this.xr = V, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = We.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = We.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (k = M, this.setSize(G, ie, !1));
    }, this.getSize = function(M) {
      return M.set(G, ie);
    }, this.setSize = function(M, I, B = !0) {
      if (V.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = M, ie = I, t.width = Math.floor(M * k), t.height = Math.floor(I * k), B === !0 && (t.style.width = M + "px", t.style.height = I + "px"), this.setViewport(0, 0, M, I);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(G * k, ie * k).floor();
    }, this.setDrawingBufferSize = function(M, I, B) {
      G = M, ie = I, k = B, t.width = Math.floor(M * B), t.height = Math.floor(I * B), this.setViewport(0, 0, M, I);
    }, this.getCurrentViewport = function(M) {
      return M.copy(L);
    }, this.getViewport = function(M) {
      return M.copy(Me);
    }, this.setViewport = function(M, I, B, z) {
      M.isVector4 ? Me.set(M.x, M.y, M.z, M.w) : Me.set(M, I, B, z), xe.viewport(L.copy(Me).multiplyScalar(k).round());
    }, this.getScissor = function(M) {
      return M.copy(Be);
    }, this.setScissor = function(M, I, B, z) {
      M.isVector4 ? Be.set(M.x, M.y, M.z, M.w) : Be.set(M, I, B, z), xe.scissor(W.copy(Be).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return Ke;
    }, this.setScissorTest = function(M) {
      xe.setScissorTest(Ke = M);
    }, this.setOpaqueSort = function(M) {
      le = M;
    }, this.setTransparentSort = function(M) {
      me = M;
    }, this.getClearColor = function(M) {
      return M.copy(be.getClearColor());
    }, this.setClearColor = function() {
      be.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return be.getClearAlpha();
    }, this.setClearAlpha = function() {
      be.setClearAlpha(...arguments);
    }, this.clear = function(M = !0, I = !0, B = !0) {
      let z = 0;
      if (M) {
        let N = !1;
        if (D !== null) {
          const ne = D.texture.format;
          N = ne === xo || ne === vo || ne === go;
        }
        if (N) {
          const ne = D.texture.type, ue = ne === Ln || ne === hi || ne === xr || ne === Sr || ne === mo || ne === _o, _e = be.getClearColor(), ge = be.getClearAlpha(), Ie = _e.r, De = _e.g, ye = _e.b;
          ue ? (g[0] = Ie, g[1] = De, g[2] = ye, g[3] = ge, P.clearBufferuiv(P.COLOR, 0, g)) : (x[0] = Ie, x[1] = De, x[2] = ye, x[3] = ge, P.clearBufferiv(P.COLOR, 0, x));
        } else
          z |= P.COLOR_BUFFER_BIT;
      }
      I && (z |= P.DEPTH_BUFFER_BIT), B && (z |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), P.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", $, !1), t.removeEventListener("webglcontextrestored", fe, !1), t.removeEventListener("webglcontextcreationerror", de, !1), be.dispose(), re.dispose(), Ue.dispose(), Se.dispose(), v.dispose(), O.dispose(), w.dispose(), rt.dispose(), U.dispose(), J.dispose(), V.dispose(), V.removeEventListener("sessionstart", Ro), V.removeEventListener("sessionend", Co), qn.stop();
    };
    function $(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = !0;
    }
    function fe() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = !1;
      const M = nt.autoReset, I = pe.enabled, B = pe.autoUpdate, z = pe.needsUpdate, N = pe.type;
      he(), nt.autoReset = M, pe.enabled = I, pe.autoUpdate = B, pe.needsUpdate = z, pe.type = N;
    }
    function de(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function Ne(M) {
      const I = M.target;
      I.removeEventListener("dispose", Ne), ct(I);
    }
    function ct(M) {
      bt(M), Se.remove(M);
    }
    function bt(M) {
      const I = Se.get(M).programs;
      I !== void 0 && (I.forEach(function(B) {
        J.releaseProgram(B);
      }), M.isShaderMaterial && J.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, I, B, z, N, ne) {
      I === null && (I = ot);
      const ue = N.isMesh && N.matrixWorld.determinant() < 0, _e = Ic(M, I, B, z, N);
      xe.setMaterial(z, ue);
      let ge = B.index, Ie = 1;
      if (z.wireframe === !0) {
        if (ge = K.getWireframeAttribute(B), ge === void 0) return;
        Ie = 2;
      }
      const De = B.drawRange, ye = B.attributes.position;
      let Ye = De.start * Ie, Je = (De.start + De.count) * Ie;
      ne !== null && (Ye = Math.max(Ye, ne.start * Ie), Je = Math.min(Je, (ne.start + ne.count) * Ie)), ge !== null ? (Ye = Math.max(Ye, 0), Je = Math.min(Je, ge.count)) : ye != null && (Ye = Math.max(Ye, 0), Je = Math.min(Je, ye.count));
      const gt = Je - Ye;
      if (gt < 0 || gt === 1 / 0) return;
      rt.setup(N, z, _e, B, ge);
      let ut, Ze = ce;
      if (ge !== null && (ut = j.get(ge), Ze = ke, Ze.setIndex(ut)), N.isMesh)
        z.wireframe === !0 ? (xe.setLineWidth(z.wireframeLinewidth * He()), Ze.setMode(P.LINES)) : Ze.setMode(P.TRIANGLES);
      else if (N.isLine) {
        let Ae = z.linewidth;
        Ae === void 0 && (Ae = 1), xe.setLineWidth(Ae * He()), N.isLineSegments ? Ze.setMode(P.LINES) : N.isLineLoop ? Ze.setMode(P.LINE_LOOP) : Ze.setMode(P.LINE_STRIP);
      } else N.isPoints ? Ze.setMode(P.POINTS) : N.isSprite && Ze.setMode(P.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Ze.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (We.get("WEBGL_multi_draw"))
          Ze.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const Ae = N._multiDrawStarts, Tt = N._multiDrawCounts, Qe = N._multiDrawCount, rn = ge ? j.get(ge).bytesPerElement : 1, pi = Se.get(z).currentProgram.getUniforms();
          for (let Wt = 0; Wt < Qe; Wt++)
            pi.setValue(P, "_gl_DrawID", Wt), Ze.render(Ae[Wt] / rn, Tt[Wt]);
        }
      else if (N.isInstancedMesh)
        Ze.renderInstances(Ye, gt, N.count);
      else if (B.isInstancedBufferGeometry) {
        const Ae = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Tt = Math.min(B.instanceCount, Ae);
        Ze.renderInstances(Ye, gt, Tt);
      } else
        Ze.render(Ye, gt);
    };
    function et(M, I, B) {
      M.transparent === !0 && M.side === Rn && M.forceSinglePass === !1 ? (M.side = Vt, M.needsUpdate = !0, Dr(M, I, B), M.side = Yn, M.needsUpdate = !0, Dr(M, I, B), M.side = Rn) : Dr(M, I, B);
    }
    this.compile = function(M, I, B = null) {
      B === null && (B = M), u = Ue.get(B), u.init(I), S.push(u), B.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (u.pushLight(N), N.castShadow && u.pushShadow(N));
      }), M !== B && M.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (u.pushLight(N), N.castShadow && u.pushShadow(N));
      }), u.setupLights();
      const z = /* @__PURE__ */ new Set();
      return M.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const ne = N.material;
        if (ne)
          if (Array.isArray(ne))
            for (let ue = 0; ue < ne.length; ue++) {
              const _e = ne[ue];
              et(_e, B, N), z.add(_e);
            }
          else
            et(ne, B, N), z.add(ne);
      }), u = S.pop(), z;
    }, this.compileAsync = function(M, I, B = null) {
      const z = this.compile(M, I, B);
      return new Promise((N) => {
        function ne() {
          if (z.forEach(function(ue) {
            Se.get(ue).currentProgram.isReady() && z.delete(ue);
          }), z.size === 0) {
            N(M);
            return;
          }
          setTimeout(ne, 10);
        }
        We.get("KHR_parallel_shader_compile") !== null ? ne() : setTimeout(ne, 10);
      });
    };
    let nn = null;
    function gn(M) {
      nn && nn(M);
    }
    function Ro() {
      qn.stop();
    }
    function Co() {
      qn.start();
    }
    const qn = new Ac();
    qn.setAnimationLoop(gn), typeof self < "u" && qn.setContext(self), this.setAnimationLoop = function(M) {
      nn = M, V.setAnimationLoop(M), M === null ? qn.stop() : qn.start();
    }, V.addEventListener("sessionstart", Ro), V.addEventListener("sessionend", Co), this.render = function(M, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === !0) return;
      if (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), V.enabled === !0 && V.isPresenting === !0 && (V.cameraAutoUpdate === !0 && V.updateCamera(I), I = V.getCamera()), M.isScene === !0 && M.onBeforeRender(_, M, I, D), u = Ue.get(M, S.length), u.init(I), S.push(u), Te.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), q.setFromProjectionMatrix(Te), ve = this.localClippingEnabled, se = ee.init(this.clippingPlanes, ve), p = re.get(M, T.length), p.init(), T.push(p), V.enabled === !0 && V.isPresenting === !0) {
        const ne = _.xr.getDepthSensingMesh();
        ne !== null && Ls(ne, I, -1 / 0, _.sortObjects);
      }
      Ls(M, I, 0, _.sortObjects), p.finish(), _.sortObjects === !0 && p.sort(le, me), st = V.enabled === !1 || V.isPresenting === !1 || V.hasDepthSensing() === !1, st && be.addToRenderList(p, M), this.info.render.frame++, se === !0 && ee.beginShadows();
      const B = u.state.shadowsArray;
      pe.render(B, M, I), se === !0 && ee.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = p.opaque, N = p.transmissive;
      if (u.setupLights(), I.isArrayCamera) {
        const ne = I.cameras;
        if (N.length > 0)
          for (let ue = 0, _e = ne.length; ue < _e; ue++) {
            const ge = ne[ue];
            Do(z, N, M, ge);
          }
        st && be.render(M);
        for (let ue = 0, _e = ne.length; ue < _e; ue++) {
          const ge = ne[ue];
          Po(p, M, ge, ge.viewport);
        }
      } else
        N.length > 0 && Do(z, N, M, I), st && be.render(M), Po(p, M, I);
      D !== null && b === 0 && (A.updateMultisampleRenderTarget(D), A.updateRenderTargetMipmap(D)), M.isScene === !0 && M.onAfterRender(_, M, I), rt.resetDefaultState(), y = -1, E = null, S.pop(), S.length > 0 ? (u = S[S.length - 1], se === !0 && ee.setGlobalState(_.clippingPlanes, u.state.camera)) : u = null, T.pop(), T.length > 0 ? p = T[T.length - 1] : p = null;
    };
    function Ls(M, I, B, z) {
      if (M.visible === !1) return;
      if (M.layers.test(I.layers)) {
        if (M.isGroup)
          B = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(I);
        else if (M.isLight)
          u.pushLight(M), M.castShadow && u.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || q.intersectsSprite(M)) {
            z && Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);
            const ue = w.update(M), _e = M.material;
            _e.visible && p.push(M, ue, _e, B, Re.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || q.intersectsObject(M))) {
          const ue = w.update(M), _e = M.material;
          if (z && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Re.copy(M.boundingSphere.center)) : (ue.boundingSphere === null && ue.computeBoundingSphere(), Re.copy(ue.boundingSphere.center)), Re.applyMatrix4(M.matrixWorld).applyMatrix4(Te)), Array.isArray(_e)) {
            const ge = ue.groups;
            for (let Ie = 0, De = ge.length; Ie < De; Ie++) {
              const ye = ge[Ie], Ye = _e[ye.materialIndex];
              Ye && Ye.visible && p.push(M, ue, Ye, B, Re.z, ye);
            }
          } else _e.visible && p.push(M, ue, _e, B, Re.z, null);
        }
      }
      const ne = M.children;
      for (let ue = 0, _e = ne.length; ue < _e; ue++)
        Ls(ne[ue], I, B, z);
    }
    function Po(M, I, B, z) {
      const N = M.opaque, ne = M.transmissive, ue = M.transparent;
      u.setupLightsView(B), se === !0 && ee.setGlobalState(_.clippingPlanes, B), z && xe.viewport(L.copy(z)), N.length > 0 && Pr(N, I, B), ne.length > 0 && Pr(ne, I, B), ue.length > 0 && Pr(ue, I, B), xe.buffers.depth.setTest(!0), xe.buffers.depth.setMask(!0), xe.buffers.color.setMask(!0), xe.setPolygonOffset(!1);
    }
    function Do(M, I, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      u.state.transmissionRenderTarget[z.id] === void 0 && (u.state.transmissionRenderTarget[z.id] = new di(1, 1, {
        generateMipmaps: !0,
        type: We.has("EXT_color_buffer_half_float") || We.has("EXT_color_buffer_float") ? Ar : Ln,
        minFilter: li,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: qe.workingColorSpace
      }));
      const ne = u.state.transmissionRenderTarget[z.id], ue = z.viewport || L;
      ne.setSize(ue.z * _.transmissionResolutionScale, ue.w * _.transmissionResolutionScale);
      const _e = _.getRenderTarget();
      _.setRenderTarget(ne), _.getClearColor(X), Q = _.getClearAlpha(), Q < 1 && _.setClearColor(16777215, 0.5), _.clear(), st && be.render(B);
      const ge = _.toneMapping;
      _.toneMapping = Xn;
      const Ie = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), u.setupLightsView(z), se === !0 && ee.setGlobalState(_.clippingPlanes, z), Pr(M, B, z), A.updateMultisampleRenderTarget(ne), A.updateRenderTargetMipmap(ne), We.has("WEBGL_multisampled_render_to_texture") === !1) {
        let De = !1;
        for (let ye = 0, Ye = I.length; ye < Ye; ye++) {
          const Je = I[ye], gt = Je.object, ut = Je.geometry, Ze = Je.material, Ae = Je.group;
          if (Ze.side === Rn && gt.layers.test(z.layers)) {
            const Tt = Ze.side;
            Ze.side = Vt, Ze.needsUpdate = !0, Lo(gt, B, z, ut, Ze, Ae), Ze.side = Tt, Ze.needsUpdate = !0, De = !0;
          }
        }
        De === !0 && (A.updateMultisampleRenderTarget(ne), A.updateRenderTargetMipmap(ne));
      }
      _.setRenderTarget(_e), _.setClearColor(X, Q), Ie !== void 0 && (z.viewport = Ie), _.toneMapping = ge;
    }
    function Pr(M, I, B) {
      const z = I.isScene === !0 ? I.overrideMaterial : null;
      for (let N = 0, ne = M.length; N < ne; N++) {
        const ue = M[N], _e = ue.object, ge = ue.geometry, Ie = ue.group;
        let De = ue.material;
        De.allowOverride === !0 && z !== null && (De = z), _e.layers.test(B.layers) && Lo(_e, I, B, ge, De, Ie);
      }
    }
    function Lo(M, I, B, z, N, ne) {
      M.onBeforeRender(_, I, B, z, N, ne), M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), N.onBeforeRender(_, I, B, z, M, ne), N.transparent === !0 && N.side === Rn && N.forceSinglePass === !1 ? (N.side = Vt, N.needsUpdate = !0, _.renderBufferDirect(B, I, z, N, M, ne), N.side = Yn, N.needsUpdate = !0, _.renderBufferDirect(B, I, z, N, M, ne), N.side = Rn) : _.renderBufferDirect(B, I, z, N, M, ne), M.onAfterRender(_, I, B, z, N, ne);
    }
    function Dr(M, I, B) {
      I.isScene !== !0 && (I = ot);
      const z = Se.get(M), N = u.state.lights, ne = u.state.shadowsArray, ue = N.state.version, _e = J.getParameters(M, N.state, ne, I, B), ge = J.getProgramCacheKey(_e);
      let Ie = z.programs;
      z.environment = M.isMeshStandardMaterial ? I.environment : null, z.fog = I.fog, z.envMap = (M.isMeshStandardMaterial ? O : v).get(M.envMap || z.environment), z.envMapRotation = z.environment !== null && M.envMap === null ? I.environmentRotation : M.envMapRotation, Ie === void 0 && (M.addEventListener("dispose", Ne), Ie = /* @__PURE__ */ new Map(), z.programs = Ie);
      let De = Ie.get(ge);
      if (De !== void 0) {
        if (z.currentProgram === De && z.lightsStateVersion === ue)
          return Io(M, _e), De;
      } else
        _e.uniforms = J.getUniforms(M), M.onBeforeCompile(_e, _), De = J.acquireProgram(_e, ge), Ie.set(ge, De), z.uniforms = _e.uniforms;
      const ye = z.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (ye.clippingPlanes = ee.uniform), Io(M, _e), z.needsLights = Fc(M), z.lightsStateVersion = ue, z.needsLights && (ye.ambientLightColor.value = N.state.ambient, ye.lightProbe.value = N.state.probe, ye.directionalLights.value = N.state.directional, ye.directionalLightShadows.value = N.state.directionalShadow, ye.spotLights.value = N.state.spot, ye.spotLightShadows.value = N.state.spotShadow, ye.rectAreaLights.value = N.state.rectArea, ye.ltc_1.value = N.state.rectAreaLTC1, ye.ltc_2.value = N.state.rectAreaLTC2, ye.pointLights.value = N.state.point, ye.pointLightShadows.value = N.state.pointShadow, ye.hemisphereLights.value = N.state.hemi, ye.directionalShadowMap.value = N.state.directionalShadowMap, ye.directionalShadowMatrix.value = N.state.directionalShadowMatrix, ye.spotShadowMap.value = N.state.spotShadowMap, ye.spotLightMatrix.value = N.state.spotLightMatrix, ye.spotLightMap.value = N.state.spotLightMap, ye.pointShadowMap.value = N.state.pointShadowMap, ye.pointShadowMatrix.value = N.state.pointShadowMatrix), z.currentProgram = De, z.uniformsList = null, De;
    }
    function Uo(M) {
      if (M.uniformsList === null) {
        const I = M.currentProgram.getUniforms();
        M.uniformsList = _s.seqWithValue(I.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function Io(M, I) {
      const B = Se.get(M);
      B.outputColorSpace = I.outputColorSpace, B.batching = I.batching, B.batchingColor = I.batchingColor, B.instancing = I.instancing, B.instancingColor = I.instancingColor, B.instancingMorph = I.instancingMorph, B.skinning = I.skinning, B.morphTargets = I.morphTargets, B.morphNormals = I.morphNormals, B.morphColors = I.morphColors, B.morphTargetsCount = I.morphTargetsCount, B.numClippingPlanes = I.numClippingPlanes, B.numIntersection = I.numClipIntersection, B.vertexAlphas = I.vertexAlphas, B.vertexTangents = I.vertexTangents, B.toneMapping = I.toneMapping;
    }
    function Ic(M, I, B, z, N) {
      I.isScene !== !0 && (I = ot), A.resetTextureUnits();
      const ne = I.fog, ue = z.isMeshStandardMaterial ? I.environment : null, _e = D === null ? _.outputColorSpace : D.isXRRenderTarget === !0 ? D.texture.colorSpace : qi, ge = (z.isMeshStandardMaterial ? O : v).get(z.envMap || ue), Ie = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, De = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), ye = !!B.morphAttributes.position, Ye = !!B.morphAttributes.normal, Je = !!B.morphAttributes.color;
      let gt = Xn;
      z.toneMapped && (D === null || D.isXRRenderTarget === !0) && (gt = _.toneMapping);
      const ut = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Ze = ut !== void 0 ? ut.length : 0, Ae = Se.get(z), Tt = u.state.lights;
      if (se === !0 && (ve === !0 || M !== E)) {
        const It = M === E && z.id === y;
        ee.setState(z, M, It);
      }
      let Qe = !1;
      z.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== Tt.state.version || Ae.outputColorSpace !== _e || N.isBatchedMesh && Ae.batching === !1 || !N.isBatchedMesh && Ae.batching === !0 || N.isBatchedMesh && Ae.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && Ae.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && Ae.instancing === !1 || !N.isInstancedMesh && Ae.instancing === !0 || N.isSkinnedMesh && Ae.skinning === !1 || !N.isSkinnedMesh && Ae.skinning === !0 || N.isInstancedMesh && Ae.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && Ae.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && Ae.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && Ae.instancingMorph === !1 && N.morphTexture !== null || Ae.envMap !== ge || z.fog === !0 && Ae.fog !== ne || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== ee.numPlanes || Ae.numIntersection !== ee.numIntersection) || Ae.vertexAlphas !== Ie || Ae.vertexTangents !== De || Ae.morphTargets !== ye || Ae.morphNormals !== Ye || Ae.morphColors !== Je || Ae.toneMapping !== gt || Ae.morphTargetsCount !== Ze) && (Qe = !0) : (Qe = !0, Ae.__version = z.version);
      let rn = Ae.currentProgram;
      Qe === !0 && (rn = Dr(z, I, N));
      let pi = !1, Wt = !1, Ki = !1;
      const at = rn.getUniforms(), Kt = Ae.uniforms;
      if (xe.useProgram(rn.program) && (pi = !0, Wt = !0, Ki = !0), z.id !== y && (y = z.id, Wt = !0), pi || E !== M) {
        xe.buffers.depth.getReversed() ? (oe.copy(M.projectionMatrix), Nu(oe), Fu(oe), at.setValue(P, "projectionMatrix", oe)) : at.setValue(P, "projectionMatrix", M.projectionMatrix), at.setValue(P, "viewMatrix", M.matrixWorldInverse);
        const Ft = at.map.cameraPosition;
        Ft !== void 0 && Ft.setValue(P, Xe.setFromMatrixPosition(M.matrixWorld)), Ge.logarithmicDepthBuffer && at.setValue(
          P,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && at.setValue(P, "isOrthographic", M.isOrthographicCamera === !0), E !== M && (E = M, Wt = !0, Ki = !0);
      }
      if (N.isSkinnedMesh) {
        at.setOptional(P, N, "bindMatrix"), at.setOptional(P, N, "bindMatrixInverse");
        const It = N.skeleton;
        It && (It.boneTexture === null && It.computeBoneTexture(), at.setValue(P, "boneTexture", It.boneTexture, A));
      }
      N.isBatchedMesh && (at.setOptional(P, N, "batchingTexture"), at.setValue(P, "batchingTexture", N._matricesTexture, A), at.setOptional(P, N, "batchingIdTexture"), at.setValue(P, "batchingIdTexture", N._indirectTexture, A), at.setOptional(P, N, "batchingColorTexture"), N._colorsTexture !== null && at.setValue(P, "batchingColorTexture", N._colorsTexture, A));
      const Jt = B.morphAttributes;
      if ((Jt.position !== void 0 || Jt.normal !== void 0 || Jt.color !== void 0) && Ee.update(N, B, rn), (Wt || Ae.receiveShadow !== N.receiveShadow) && (Ae.receiveShadow = N.receiveShadow, at.setValue(P, "receiveShadow", N.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Kt.envMap.value = ge, Kt.flipEnvMap.value = ge.isCubeTexture && ge.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && I.environment !== null && (Kt.envMapIntensity.value = I.environmentIntensity), Wt && (at.setValue(P, "toneMappingExposure", _.toneMappingExposure), Ae.needsLights && Nc(Kt, Ki), ne && z.fog === !0 && te.refreshFogUniforms(Kt, ne), te.refreshMaterialUniforms(Kt, z, k, ie, u.state.transmissionRenderTarget[M.id]), _s.upload(P, Uo(Ae), Kt, A)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (_s.upload(P, Uo(Ae), Kt, A), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && at.setValue(P, "center", N.center), at.setValue(P, "modelViewMatrix", N.modelViewMatrix), at.setValue(P, "normalMatrix", N.normalMatrix), at.setValue(P, "modelMatrix", N.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const It = z.uniformsGroups;
        for (let Ft = 0, Us = It.length; Ft < Us; Ft++) {
          const Zn = It[Ft];
          U.update(Zn, rn), U.bind(Zn, rn);
        }
      }
      return rn;
    }
    function Nc(M, I) {
      M.ambientLightColor.needsUpdate = I, M.lightProbe.needsUpdate = I, M.directionalLights.needsUpdate = I, M.directionalLightShadows.needsUpdate = I, M.pointLights.needsUpdate = I, M.pointLightShadows.needsUpdate = I, M.spotLights.needsUpdate = I, M.spotLightShadows.needsUpdate = I, M.rectAreaLights.needsUpdate = I, M.hemisphereLights.needsUpdate = I;
    }
    function Fc(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return D;
    }, this.setRenderTargetTextures = function(M, I, B) {
      const z = Se.get(M);
      z.__autoAllocateDepthBuffer = M.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), Se.get(M.texture).__webglTexture = I, Se.get(M.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(M, I) {
      const B = Se.get(M);
      B.__webglFramebuffer = I, B.__useDefaultFramebuffer = I === void 0;
    };
    const Oc = P.createFramebuffer();
    this.setRenderTarget = function(M, I = 0, B = 0) {
      D = M, C = I, b = B;
      let z = !0, N = null, ne = !1, ue = !1;
      if (M) {
        const ge = Se.get(M);
        if (ge.__useDefaultFramebuffer !== void 0)
          xe.bindFramebuffer(P.FRAMEBUFFER, null), z = !1;
        else if (ge.__webglFramebuffer === void 0)
          A.setupRenderTarget(M);
        else if (ge.__hasExternalTextures)
          A.rebindTextures(M, Se.get(M.texture).__webglTexture, Se.get(M.depthTexture).__webglTexture);
        else if (M.depthBuffer) {
          const ye = M.depthTexture;
          if (ge.__boundDepthTexture !== ye) {
            if (ye !== null && Se.has(ye) && (M.width !== ye.image.width || M.height !== ye.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            A.setupDepthRenderbuffer(M);
          }
        }
        const Ie = M.texture;
        (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (ue = !0);
        const De = Se.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(De[I]) ? N = De[I][B] : N = De[I], ne = !0) : M.samples > 0 && A.useMultisampledRTT(M) === !1 ? N = Se.get(M).__webglMultisampledFramebuffer : Array.isArray(De) ? N = De[B] : N = De, L.copy(M.viewport), W.copy(M.scissor), H = M.scissorTest;
      } else
        L.copy(Me).multiplyScalar(k).floor(), W.copy(Be).multiplyScalar(k).floor(), H = Ke;
      if (B !== 0 && (N = Oc), xe.bindFramebuffer(P.FRAMEBUFFER, N) && z && xe.drawBuffers(M, N), xe.viewport(L), xe.scissor(W), xe.setScissorTest(H), ne) {
        const ge = Se.get(M.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + I, ge.__webglTexture, B);
      } else if (ue) {
        const ge = Se.get(M.texture), Ie = I;
        P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, ge.__webglTexture, B, Ie);
      } else if (M !== null && B !== 0) {
        const ge = Se.get(M.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, ge.__webglTexture, B);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(M, I, B, z, N, ne, ue) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let _e = Se.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ue !== void 0 && (_e = _e[ue]), _e) {
        xe.bindFramebuffer(P.FRAMEBUFFER, _e);
        try {
          const ge = M.texture, Ie = ge.format, De = ge.type;
          if (!Ge.textureFormatReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ge.textureTypeReadable(De)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= M.width - z && B >= 0 && B <= M.height - N && P.readPixels(I, B, z, N, ze.convert(Ie), ze.convert(De), ne);
        } finally {
          const ge = D !== null ? Se.get(D).__webglFramebuffer : null;
          xe.bindFramebuffer(P.FRAMEBUFFER, ge);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(M, I, B, z, N, ne, ue) {
      if (!(M && M.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let _e = Se.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ue !== void 0 && (_e = _e[ue]), _e)
        if (I >= 0 && I <= M.width - z && B >= 0 && B <= M.height - N) {
          xe.bindFramebuffer(P.FRAMEBUFFER, _e);
          const ge = M.texture, Ie = ge.format, De = ge.type;
          if (!Ge.textureFormatReadable(Ie))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Ge.textureTypeReadable(De))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const ye = P.createBuffer();
          P.bindBuffer(P.PIXEL_PACK_BUFFER, ye), P.bufferData(P.PIXEL_PACK_BUFFER, ne.byteLength, P.STREAM_READ), P.readPixels(I, B, z, N, ze.convert(Ie), ze.convert(De), 0);
          const Ye = D !== null ? Se.get(D).__webglFramebuffer : null;
          xe.bindFramebuffer(P.FRAMEBUFFER, Ye);
          const Je = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return P.flush(), await Iu(P, Je, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, ye), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, ne), P.deleteBuffer(ye), P.deleteSync(Je), ne;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(M, I = null, B = 0) {
      const z = Math.pow(2, -B), N = Math.floor(M.image.width * z), ne = Math.floor(M.image.height * z), ue = I !== null ? I.x : 0, _e = I !== null ? I.y : 0;
      A.setTexture2D(M, 0), P.copyTexSubImage2D(P.TEXTURE_2D, B, 0, 0, ue, _e, N, ne), xe.unbindTexture();
    };
    const Bc = P.createFramebuffer(), zc = P.createFramebuffer();
    this.copyTextureToTexture = function(M, I, B = null, z = null, N = 0, ne = null) {
      ne === null && (N !== 0 ? (ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ne = N, N = 0) : ne = 0);
      let ue, _e, ge, Ie, De, ye, Ye, Je, gt;
      const ut = M.isCompressedTexture ? M.mipmaps[ne] : M.image;
      if (B !== null)
        ue = B.max.x - B.min.x, _e = B.max.y - B.min.y, ge = B.isBox3 ? B.max.z - B.min.z : 1, Ie = B.min.x, De = B.min.y, ye = B.isBox3 ? B.min.z : 0;
      else {
        const Jt = Math.pow(2, -N);
        ue = Math.floor(ut.width * Jt), _e = Math.floor(ut.height * Jt), M.isDataArrayTexture ? ge = ut.depth : M.isData3DTexture ? ge = Math.floor(ut.depth * Jt) : ge = 1, Ie = 0, De = 0, ye = 0;
      }
      z !== null ? (Ye = z.x, Je = z.y, gt = z.z) : (Ye = 0, Je = 0, gt = 0);
      const Ze = ze.convert(I.format), Ae = ze.convert(I.type);
      let Tt;
      I.isData3DTexture ? (A.setTexture3D(I, 0), Tt = P.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (A.setTexture2DArray(I, 0), Tt = P.TEXTURE_2D_ARRAY) : (A.setTexture2D(I, 0), Tt = P.TEXTURE_2D), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, I.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Qe = P.getParameter(P.UNPACK_ROW_LENGTH), rn = P.getParameter(P.UNPACK_IMAGE_HEIGHT), pi = P.getParameter(P.UNPACK_SKIP_PIXELS), Wt = P.getParameter(P.UNPACK_SKIP_ROWS), Ki = P.getParameter(P.UNPACK_SKIP_IMAGES);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, ut.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ut.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Ie), P.pixelStorei(P.UNPACK_SKIP_ROWS, De), P.pixelStorei(P.UNPACK_SKIP_IMAGES, ye);
      const at = M.isDataArrayTexture || M.isData3DTexture, Kt = I.isDataArrayTexture || I.isData3DTexture;
      if (M.isDepthTexture) {
        const Jt = Se.get(M), It = Se.get(I), Ft = Se.get(Jt.__renderTarget), Us = Se.get(It.__renderTarget);
        xe.bindFramebuffer(P.READ_FRAMEBUFFER, Ft.__webglFramebuffer), xe.bindFramebuffer(P.DRAW_FRAMEBUFFER, Us.__webglFramebuffer);
        for (let Zn = 0; Zn < ge; Zn++)
          at && (P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, Se.get(M).__webglTexture, N, ye + Zn), P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, Se.get(I).__webglTexture, ne, gt + Zn)), P.blitFramebuffer(Ie, De, ue, _e, Ye, Je, ue, _e, P.DEPTH_BUFFER_BIT, P.NEAREST);
        xe.bindFramebuffer(P.READ_FRAMEBUFFER, null), xe.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || M.isRenderTargetTexture || Se.has(M)) {
        const Jt = Se.get(M), It = Se.get(I);
        xe.bindFramebuffer(P.READ_FRAMEBUFFER, Bc), xe.bindFramebuffer(P.DRAW_FRAMEBUFFER, zc);
        for (let Ft = 0; Ft < ge; Ft++)
          at ? P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, Jt.__webglTexture, N, ye + Ft) : P.framebufferTexture2D(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, Jt.__webglTexture, N), Kt ? P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, It.__webglTexture, ne, gt + Ft) : P.framebufferTexture2D(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, It.__webglTexture, ne), N !== 0 ? P.blitFramebuffer(Ie, De, ue, _e, Ye, Je, ue, _e, P.COLOR_BUFFER_BIT, P.NEAREST) : Kt ? P.copyTexSubImage3D(Tt, ne, Ye, Je, gt + Ft, Ie, De, ue, _e) : P.copyTexSubImage2D(Tt, ne, Ye, Je, Ie, De, ue, _e);
        xe.bindFramebuffer(P.READ_FRAMEBUFFER, null), xe.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else
        Kt ? M.isDataTexture || M.isData3DTexture ? P.texSubImage3D(Tt, ne, Ye, Je, gt, ue, _e, ge, Ze, Ae, ut.data) : I.isCompressedArrayTexture ? P.compressedTexSubImage3D(Tt, ne, Ye, Je, gt, ue, _e, ge, Ze, ut.data) : P.texSubImage3D(Tt, ne, Ye, Je, gt, ue, _e, ge, Ze, Ae, ut) : M.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, ne, Ye, Je, ue, _e, Ze, Ae, ut.data) : M.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, ne, Ye, Je, ut.width, ut.height, Ze, ut.data) : P.texSubImage2D(P.TEXTURE_2D, ne, Ye, Je, ue, _e, Ze, Ae, ut);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, Qe), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, rn), P.pixelStorei(P.UNPACK_SKIP_PIXELS, pi), P.pixelStorei(P.UNPACK_SKIP_ROWS, Wt), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Ki), ne === 0 && I.generateMipmaps && P.generateMipmap(Tt), xe.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, I, B = null, z = null, N = 0) {
      return ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(M, I, B, z, N);
    }, this.initRenderTarget = function(M) {
      Se.get(M).__webglFramebuffer === void 0 && A.setupRenderTarget(M);
    }, this.initTexture = function(M) {
      M.isCubeTexture ? A.setTextureCube(M, 0) : M.isData3DTexture ? A.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? A.setTexture2DArray(M, 0) : A.setTexture2D(M, 0), xe.unbindTexture();
    }, this.resetState = function() {
      C = 0, b = 0, D = null, xe.reset(), rt.reset();
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
    return _n;
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
    t.drawingBufferColorSpace = qe._getDrawingBufferColorSpace(e), t.unpackColorSpace = qe._getUnpackColorSpace();
  }
}
const Gn = "/assets", o_ = Math.min(2, window.devicePixelRatio || 1), l_ = 2560 * 1440, c_ = !1, u_ = [-20, 18, 20], h_ = [0, 0, 0], d_ = { antialias: !0, alpha: !1, powerPreference: "low-power" }, ri = {
  DPR: o_,
  MAX_PIXEL_COUNT: l_,
  DEFAULT_POSITION: u_,
  DEFAULT_LOOKAT_POSITION: h_,
  SHOW_BLOCK: c_
}, is = (i, e) => Math.hypot(i, e);
class f_ {
  constructor(e = 0, t = 0, n = 0) {
    Ce(this, "id", 0);
    Ce(this, "row", 0);
    Ce(this, "col", 0);
    Ce(this, "distance", is(this.row, this.col));
    Ce(this, "MAX_DISTANCE", is(Ht, Ht));
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
    this.id = e, this.row = t, this.col = n, this.distance = is(t, n), this.MAX_DISTANCE = is(Ht, Ht), this.priority = this.MAX_DISTANCE - this.distance, this.isMain = t === 0 && n === 0, this.isBorder = Math.abs(t) === 2 || Math.abs(n) === 2, this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0, this.neighbours = null, this.reachableNeighbours = null, this.prioritySortedReachableNeighbours = null, this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
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
const zt = 5, bn = zt + 2, Ht = Math.floor(zt / 2), ln = zt * zt, p_ = bn * bn;
let or = null, wn = [];
const m_ = () => {
  function i() {
    wn = Array.from(
      { length: zt },
      (a, l) => Array.from({ length: zt }, (c, h) => {
        const f = l - Ht, d = h - Ht;
        return new f_(l * zt + h, f, d);
      })
    ), wn.forEach(
      (a, l) => a.forEach((c, h) => {
        c.neighbours = n(l - Ht, h - Ht), c.init();
      })
    ), or = e(0, 0);
  }
  function e(a, l) {
    var c;
    return ((c = wn[a + Ht]) == null ? void 0 : c[l + Ht]) || null;
  }
  function t() {
    const a = wn.flat().filter((l) => !l.isOccupied);
    return a.length ? a[Math.floor(Math.random() * a.length)] : null;
  }
  function n(a, l) {
    return [-1, 0, 1].flatMap(
      (c) => [-1, 0, 1].map((h) => c === 0 && h === 0 ? null : e(a + c, l + h)).filter(Boolean)
    );
  }
  function r() {
    wn.flat().forEach((a) => a.reset());
  }
  function s(a) {
    wn.flat().forEach((l) => l.preUpdate(a));
  }
  function o(a) {
    wn.flat().forEach((l) => l.update(a));
  }
  return {
    init: i,
    getTile: e,
    getRandomFreeTile: t,
    reset: r,
    preUpdate: s,
    update: o
  };
}, kn = m_(), zl = new we(), Hl = new we(), kl = ln - 5, __ = {
  canvasId: void 0,
  time: 0,
  deltaTime: 0,
  width: 0,
  height: 0,
  viewportWidth: 0,
  viewportHeight: 0,
  cameraZoom: 1,
  offsetX: 0,
  cameraOffsetX: 0,
  cameraOffsetY: 0,
  scene: new ah(),
  postprocessing: !1,
  resolution: zl,
  viewportResolution: Hl,
  canvas: null,
  orbitTarget: null,
  sharedUniforms: {
    u_time: { value: 0 },
    u_deltaTime: { value: 1 },
    u_resolution: { value: zl },
    u_viewportResolution: { value: Hl },
    u_bgColor1: { value: new Pe() },
    u_bgColor2: { value: new Pe() }
  },
  isPaused: !1,
  showVisual: ri.SHOW_BLOCK,
  loadList: [],
  animationSpeed: 1,
  activeBlocksCount: 0,
  maxFreeBlocksCount: kl,
  lightPositionX: -2,
  lightPositionY: 6,
  lightPositionZ: -4,
  lightCameraSize: 4.5,
  lightCameraBias: 5e-3,
  lightCameraNear: 3,
  lightCameraFar: 16,
  errorBlock: null,
  errorBlockMaxLifeCycle: 4,
  minSpawnedBlocksForTheErrorBlock: kl - 2,
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
}, Y = { ...__ };
function g_(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var da = { exports: {} }, Vl;
function v_() {
  return Vl || (Vl = 1, function(i) {
    (function(e) {
      function t() {
        this._listeners = [], this.dispatchCount = 0;
      }
      var n = t.prototype;
      n.add = a, n.addOnce = l, n.remove = c, n.dispatch = h;
      var r = "Callback function is missing!", s = Array.prototype.slice;
      function o(f) {
        f.sort(function(d, m) {
          return d = d.p, m = m.p, m < d ? 1 : m > d ? -1 : 0;
        });
      }
      function a(f, d, m, g) {
        if (!f)
          throw r;
        m = m || 0;
        for (var x = this._listeners, p, u, T, S = x.length; S--; )
          if (p = x[S], p.f === f && p.c === d)
            return !1;
        typeof m == "function" && (u = m, m = g, T = 4), x.unshift({ f, c: d, p: m, r: u || f, a: s.call(arguments, T || 3), j: 0 }), o(x);
      }
      function l(f, d, m, g) {
        if (!f)
          throw r;
        var x = this, p = function() {
          return x.remove.call(x, f, d), f.apply(d, s.call(arguments, 0));
        };
        g = s.call(arguments, 0), g.length === 1 && g.push(e), g.splice(2, 0, p), a.apply(x, g);
      }
      function c(f, d) {
        if (!f)
          return this._listeners.length = 0, !0;
        for (var m = this._listeners, g, x = m.length; x--; )
          if (g = m[x], g.f === f && (!d || g.c === d))
            return g.j = 0, m.splice(x, 1), !0;
        return !1;
      }
      function h(f) {
        f = s.call(arguments, 0), this.dispatchCount++;
        for (var d = this.dispatchCount, m = this._listeners, g, x, p = m.length; p--; )
          if (g = m[p], g && g.j < d && (g.j = d, g.r.apply(g.c, g.a.concat(f)) === !1)) {
            x = g;
            break;
          }
        for (m = this._listeners, p = m.length; p--; )
          m[p].j = 0;
        return x;
      }
      i.exports = t;
    })();
  }(da)), da.exports;
}
var x_ = v_();
const tn = /* @__PURE__ */ g_(x_), Ts = new tn(), S_ = new tn(), M_ = new tn(), wo = new tn(), ao = new tn(), Pc = new tn(), oo = new tn(), lo = new tn();
new tn();
const Dc = new tn(), E_ = new tn(), y_ = new tn();
var je = /* @__PURE__ */ ((i) => (i.NOT_STARTED = "not-started", i.STARTED = "started", i.FREE = "free", i.RESULT = "result", i.RESULT_ANIMATION = "result_animation", i.RESTART_ANIMATION = "restart_animation", i.RESTART = "restart", i))(je || {}), $e = /* @__PURE__ */ ((i) => (i.NONE = "none", i.PAUSE = "pause", i.STOP = "stop", i.COMPLETED = "completed", i.FAILED = "failed", i.REPLAY = "replay", i))($e || {}), ci = /* @__PURE__ */ ((i) => (i[i.ONE = 1] = "ONE", i[i.TWO = 2] = "TWO", i[i.THREE = 3] = "THREE", i))(ci || {});
const Ps = (i) => `%c tari-tower ${i} | `, Ds = "font-weight:900; font-size:12px;";
function ui(...i) {
  return console.error(Ps("error"), `${Ds} color:red;`, ...i);
}
function fa(...i) {
  return console.info(Ps("info"), `${Ds} color:rgb(105, 139, 219);`, ...i);
}
function lr(...i) {
  return console.warn(Ps("warn"), `${Ds} color:orange;`, ...i);
}
function T_(...i) {
  return console.log(Ps("log"), `${Ds} color:hotpink`, ...i);
}
const A_ = [je.NOT_STARTED, je.RESTART_ANIMATION, je.RESTART, je.STARTED], b_ = [$e.FAILED, $e.COMPLETED];
let it = {
  hasNotStarted: !0,
  isStart: !1,
  isFree: !1,
  isResult: !1,
  isResultAnimation: !1,
  isRestart: !1,
  isReplayResult: !1,
  isSuccessResult: !1,
  isFailResult: !1,
  isStopped: !1
}, Pt = je.NOT_STARTED, At = $e.NONE, yn = [];
const w_ = 7, R_ = () => {
  const i = Object.values(je);
  let e = 0, t = !1;
  function n() {
    var b, D, y;
    if (!(Y.errorBlock && (fa(
      "errorBlock in updateAfterCycle | ",
      `falling: ${(b = Y.errorBlock) == null ? void 0 : b.isErrorBlockFalling}, lifecycle: ${(D = Y.errorBlock) == null ? void 0 : D.errorLifeCycle}/${Y.errorBlockMaxLifeCycle}`
    ), Y.errorBlock.isErrorBlockFalling || Y.errorBlock.errorLifeCycle >= Y.errorBlockMaxLifeCycle - 1)) && (it.isStart ? d() : it.isResult && T(), yn.length !== 0)) {
      fa(`statusUpdateQueue (${yn.length}):`, yn.map((L) => L.status).join(" | "));
      const E = (y = yn.shift()) == null ? void 0 : y.callback;
      E == null || E();
    }
  }
  function r() {
    const b = Pt === je.RESULT || Pt === je.RESULT_ANIMATION;
    it = {
      hasNotStarted: Pt === je.NOT_STARTED,
      isStart: Pt === je.STARTED,
      isFree: Pt === je.FREE,
      isResult: Pt === je.RESULT,
      isResultAnimation: Pt === je.RESULT_ANIMATION,
      isRestart: Pt === je.RESTART,
      isReplayResult: b && At === $e.REPLAY,
      isSuccessResult: b && At === $e.COMPLETED,
      isFailResult: b && At === $e.FAILED,
      isStopped: b && At === $e.STOP
    };
  }
  function s(b, D) {
    if (!Y.showVisual) return !1;
    const y = !!D;
    D === $e.REPLAY && e === 0 && (e = 2), b === je.NOT_STARTED && D === $e.NONE && e === 5 && (e = 6);
    const L = i.indexOf(b);
    return (e + 1) % i.length === L ? (e = L, Pt = i[e], y || (r(), Ts.dispatch(Pt, D)), !0) : !1;
  }
  function o({ status: b, result: D, animationStyle: y }) {
    if (s(b, D)) {
      if (Y.errorBlock && !Y.errorBlock.isErrorBlockFalling && (Y.errorBlock.preventErrorBlockFallAnimation(), Y.errorBlock = null), D && (At = D), r(), y) {
        Pc.dispatch(y);
        return;
      }
      Ts.dispatch(Pt, At);
    }
  }
  function a(b, D = !1) {
    var E;
    fa(`stateManager.set - id: ${b} ${D ? "replay" : ""}`);
    const y = {
      start: () => f(),
      stop: () => m(),
      fail: () => u(),
      resultAnimation: () => T(),
      restartAnimation: () => S(),
      restart: () => R(),
      showVisual: () => l(),
      success: () => g(D),
      success2: () => x(D),
      success3: () => p(D)
    };
    (E = y[b]) == null || E.call(y);
  }
  function l() {
    Y.showVisual = !0;
  }
  function c({ status: b, result: D = null, animationStyle: y = null }) {
    yn.length >= w_ && (lr("State update queue too long, clearing to prevent backlog"), yn = []), (D || b === je.STARTED) && (yn = []);
    const E = D ? {
      status: b,
      callback: () => o({ status: b, result: D, animationStyle: y })
    } : { status: b, callback: () => s(b) };
    yn.push(E);
  }
  function h() {
    if (t) {
      Pt = je.NOT_STARTED, At = $e.NONE, e = 0, _(!1);
      return;
    }
    c({
      status: je.NOT_STARTED,
      result: $e.NONE
    });
  }
  function f() {
    yn = [], c({ status: je.STARTED });
  }
  function d() {
    c({ status: je.FREE });
  }
  function m() {
    c({
      status: je.RESULT,
      result: $e.STOP
    });
  }
  function g(b = !1) {
    const D = b && it.hasNotStarted ? $e.REPLAY : $e.COMPLETED;
    c({
      status: je.RESULT,
      result: D,
      animationStyle: ci.ONE
    });
  }
  function x(b = !1) {
    const D = b && it.hasNotStarted ? $e.REPLAY : $e.COMPLETED;
    c({
      status: je.RESULT,
      result: D,
      animationStyle: ci.TWO
    });
  }
  function p(b = !1) {
    const D = b && it.hasNotStarted ? $e.REPLAY : $e.COMPLETED;
    c({
      status: je.RESULT,
      result: D,
      animationStyle: ci.THREE
    });
  }
  function u() {
    c({
      status: je.RESULT,
      result: $e.FAILED
    });
  }
  function T() {
    c({ status: je.RESULT_ANIMATION });
  }
  function S() {
    c({ status: je.RESTART_ANIMATION });
  }
  function _(b) {
    t = b;
  }
  function R() {
    if (t) {
      wo.dispatch();
      return;
    } else
      c({ status: je.RESTART });
  }
  function C() {
    r();
  }
  return {
    init: C,
    updateAfterCycle: n,
    set: a,
    showVisual: l,
    reset: h,
    setStart: f,
    setRestartAnimation: S,
    setRestart: R,
    setRemove: _,
    statusIndex: e
  };
}, Bt = R_(), C_ = () => {
  let i = [], e = 0, t = null;
  function n(l, c) {
    i.push(async () => {
      let h = 0;
      const f = 3;
      for (; h < f; )
        try {
          const m = await (await fetch(l)).arrayBuffer(), g = new Uint32Array(m, 0, 1)[0], x = JSON.parse(new TextDecoder().decode(new Uint8Array(m, 4, g))), { vertexCount: p, indexCount: u, attributes: T } = x;
          let S = 4 + g;
          const _ = new pn(), R = {};
          T.forEach((C) => {
            const { id: b, componentSize: D, storageType: y, needsPack: E, packedComponents: L } = C, W = b === "indices" ? u : p, H = window[y], X = new H(m, S, W * D), Q = H.BYTES_PER_ELEMENT;
            let G;
            E ? G = r(X, W, D, L, y) : (R[b] = S, G = X), b === "indices" ? _.setIndex(new $t(G, 1)) : _.setAttribute(b, new $t(G, D)), S += W * D * Q;
          }), c && c(_), a();
          break;
        } catch (d) {
          h++, h >= f ? ui(`Failed to load buffer: ${l} after ${f} attempts`, d) : (ui(`Failed to load buffer: ${l}, attempt ${h}/${f}, retrying...`, d), await new Promise((m) => setTimeout(m, 100)));
        }
    });
  }
  function r(l, c, h, f, d) {
    const m = f.length, g = d.indexOf("Int") === 0, x = 1 << l.BYTES_PER_ELEMENT * 8, p = g ? x * 0.5 : 0, u = 1 / x, T = new Float32Array(c * h);
    for (let S = 0, _ = 0; S < c; S++)
      for (let R = 0; R < m; R++) {
        const { delta: C, from: b } = f[R];
        T[_] = (l[_] + p) * u * C + b, _++;
      }
    return T;
  }
  function s(l, c) {
    i.push(() => {
      new _h().load(
        l,
        (h) => {
          h.minFilter = xu, h.magFilter = qt, h.generateMipmaps = !0, h.anisotropy = 1, h.flipY = !0, c && c(h), a();
        },
        void 0,
        (h) => ui(`Failed to load texture: ${l}`, h)
      );
    });
  }
  function o(l) {
    e = 0, t = l, i.forEach((c) => c());
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
}, Pn = C_();
class P_ {
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
const Le = new P_(), D_ = () => {
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
function L_(i, e, t, n, r) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  function s(l, c, h, f, d) {
    const m = 3 * (h - c), g = 3 * (f - h) - m;
    return (((d - c - m - g) * l + g) * l + m) * l + c;
  }
  function o(l, c, h, f = 1e-6) {
    let d = 0, m = 1, g = l;
    for (; d < m; ) {
      const x = s(g, 0, c, h, 1);
      if (Math.abs(x - l) < f)
        return g;
      x < l ? d = g : m = g, g = (d + m) / 2;
    }
    return g;
  }
  const a = o(i, e, n);
  return s(a, 0, t, r, 1);
}
function Ii(i) {
  return L_(i, 0.3, 0, 0, 1);
}
const rr = D_(), U_ = `uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}
`, cn = {
  u_blueNoiseTexture: { value: null },
  u_blueNoiseTexelSize: { value: null },
  u_blueNoiseCoordOffset: { value: new we() }
}, I_ = () => {
  async function e() {
    Pn.loadTexture(`${Gn}/LDR_RGB1_0.png`, (n) => {
      n.generateMipmaps = !1, n.minFilter = n.magFilter = Gt, n.wrapS = n.wrapT = gs, n.needsUpdate = !0, cn && (cn.u_blueNoiseTexture.value = n, cn.u_blueNoiseTexelSize.value = new we(1 / 128, 1 / 128));
    }), Fe.getBlueNoise = U_;
  }
  function t(n) {
    cn == null || cn.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random());
  }
  return {
    update: t,
    preInit: e,
    TEXTURE_SIZE: 128,
    bn_sharedUniforms: cn
  };
};
let pa = !1, Tn = 0;
const N_ = 3.5;
let Oi = 0, oi = 0, As = 0, mr = 0;
const F_ = () => {
  function i() {
    Ts.add((n, r) => {
      n === je.RESULT && r === $e.FAILED && (pa = !0);
    });
  }
  function e() {
    Tn = 0, Oi = 0, oi = 0, mr = 0, As = 0, pa = !1;
  }
  function t(n) {
    Tn += (pa ? 1 : 0) * n / N_, Tn = Le.clamp(Tn, 0, 1), Oi = Le.fit(Tn, 0, 0.3, 0, 1), oi = Le.fit(Tn, 0.35, 0.65, 0, 1), As = Le.fit(Tn, 0.3, 0.55, 0, 2.5), mr = Le.fit(Tn, 0.6, 0.8, 0, 1), Tn >= 1 && (ao.dispatch(), e());
  }
  return {
    init: i,
    resetRatios: e,
    update: t
  };
}, Gl = F_();
let rs, mt = 0;
const O_ = 6.5;
let cr = 0, ur = 0, Bi = 0, zi = 0, Hi = 0, hr = 0, dr = 1;
const B_ = () => {
  function i() {
    Pc.add((a) => {
      a && e(a);
    });
  }
  function e(a) {
    rs = a;
  }
  function t() {
    mt = 0, cr = 0, ur = 0, Bi = 0, zi = 0, Hi = 0, hr = 0, dr = 1, rs = null;
  }
  function n() {
    dr = 1, cr = 0, ur = 0, Bi = Le.fit(mt, 0.2, 0.49, 0, 1.2), Hi = Le.fit(mt, 0.45, 0.55, 0, 1), hr = Le.fit(mt, 0.45, 0.7, 0, 1), zi = Le.fit(mt, 0.55, 1, 0, 1);
  }
  function r() {
    dr = 1.5, ur = 0, cr = Le.fit(mt, 0.1, 0.45, 0, 1), Bi = Le.fit(mt, 0.15, 0.49, 0, 1.2), Hi = Le.fit(mt, 0.45, 0.55, 0, 1), hr = Le.fit(mt, 0.45, 0.7, 0, 1), zi = Le.fit(mt, 0.55, 1, 0, 1);
  }
  function s() {
    dr = 2, cr = Le.fit(mt, 0.1, 0.5, 0, 1), ur = Le.fit(mt, 0.2, 0.51, 0, 1), Bi = Le.fit(mt, 0.2, 0.49, 0, 1.2), Hi = Le.fit(mt, 0.45, 0.55, 0, 1), hr = Le.fit(mt, 0.45, 0.7, 0, 1), zi = Le.fit(mt, 0.6, 1, 0, 1);
  }
  function o(a) {
    switch (mt += (rs ? 1 : 0) * a / O_, mt = Le.clamp(mt, 0, 1), rs) {
      case ci.ONE:
        n();
        break;
      case ci.TWO:
        r();
        break;
      case ci.THREE:
        s();
        break;
    }
    mt >= 1 && (oo.dispatch(), t());
  }
  return {
    init: i,
    update: o,
    resetRatios: t
  };
}, Wl = B_();
let ma = !1, ti = 0;
const z_ = 2.5;
let _r = 0, gr = 0;
const H_ = () => {
  function i() {
    Ts.add((n, r) => {
      n === je.RESULT && r === $e.STOP && (ma = !0);
    });
  }
  function e() {
    ti = 0, gr = 0, _r = 0, ma = !1;
  }
  function t(n) {
    ti += (ma ? 1 : 0) * n / z_, ti = Le.clamp(ti, 0, 1), _r = Le.fit(ti, 0, 0.5, 0, 2.5), gr = Le.fit(ti, 0.4, 0.65, 0, 1), ti >= 1 && (lo.dispatch(), e());
  }
  return {
    init: i,
    update: t,
    resetRatios: e
  };
}, Xl = H_();
class Yl {
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
    this.easingFunction = (n) => Ii(Le.fit(n, e * t, e * t + (1 - t), 0, 1));
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
    var e;
    this.hasBeenEvaluated = !1, this.hasAnimationEnded = !1, this.moveAnimationRatio = 0, this.easedAnimationRatio = 0, this.isMoving = !1, this.lifeCycle++, this.isErrorBlock && !this.skipFallAnimation && (this.errorLifeCycle++, this.isErrorBlockFalling = this.errorLifeCycle >= Y.errorBlockMaxLifeCycle - 1), (e = this.currentTile) != null && e.isBorder && !Y.errorBlock && Math.random() < 0.5 && Y.activeBlocksCount >= Y.minSpawnedBlocksForTheErrorBlock && it.isFree && (Y.errorBlock = this, this.isErrorBlock = !0), this._setNewEasingFunction(), this.updateTile();
  }
  reset(e = !1) {
    var t, n;
    this.isErrorBlock && (this.errorLifeCycle = 0, this.isErrorBlock = !1, (t = this.currentTile) == null || t.reset(), (n = this.targetTile) == null || n.reset(), this.errorFallAnimationTime = 0, this.isErrorBlockFalling = !1, this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0, this.errorFallAnimationTime = 0, this.skipFallAnimation = !1), this.id = e ? this.id : -1, this.isMoving = !1, this.hasBeenSpawned = !1, this.hasAnimationEnded = !1, this.hasBeenEvaluated = !1, this.currentTile = null, this.targetTile = null, this.moveAnimationRatio = 0, this.spawnAnimationRatio = 0, this.spawnAnimationRatioUnclamped = -Math.random(), this.easedAnimationRatio = 0, this.lifeCycle = 0;
  }
  preventErrorBlockFallAnimation() {
    this.skipFallAnimation = !0;
  }
  _onMovementEnd() {
    this.moveAnimationRatio = 1, this.currentTile && (this.currentTile.isOccupied = !1), this.currentTile = this.targetTile, this.targetTile = null, this.hasAnimationEnded = !0, this.updateTile();
  }
  _updateSpawnAnimation(e) {
    this.spawnAnimationRatioUnclamped += 0.75 * Y.animationSpeed * e, this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped)), this.spawnAnimationRatio === 1 && (this.hasBeenSpawned = !0);
  }
  _updateMovement(e) {
    var t;
    (this.isMoving && !this.hasAnimationEnded || it.isResultAnimation) && (this.moveAnimationRatio = Math.min(1, this.moveAnimationRatio + Y.animationSpeed * e * (this.isErrorBlock ? 0.7 : 1)), this.easedAnimationRatio = ((t = this.easingFunction) == null ? void 0 : t.call(this, Math.max(0, this.moveAnimationRatio))) || 0, this.easedAnimationRatio === 1 && (it.isFree || it.isResult) && this._onMovementEnd());
  }
  _updateTileRatios() {
    const e = Math.max(0, Math.min(1, this.hasBeenSpawned ? this.easedAnimationRatio : this.spawnAnimationRatio));
    this.currentTile && (this.currentTile.activeRatio = this.hasBeenSpawned ? this.targetTile ? 1 - e : 1 : this.spawnAnimationRatio), this.targetTile && (this.targetTile.activeRatio = e), this.isErrorBlock && this.isErrorBlockFalling && (this.currentTile && (this.currentTile.activeRatio = 0), this.targetTile && (this.targetTile.activeRatio = 0));
  }
  update(e) {
    this.hasBeenSpawned ? this._updateMovement(e) : this._updateSpawnAnimation(e), this.isErrorBlockFalling && (this.errorFallAnimationTime = this.errorFallAnimationTime + 3 * Y.animationSpeed * e), this.isErrorBlock && (this.errorPreFallAnimationTimeScale = this.errorPreFallAnimationTimeScale + 3 * e, this.errorPreFallAnimationTimeScale = Math.min(20, this.errorPreFallAnimationTimeScale), this.errorPreFallAnimationTime = this.errorPreFallAnimationTime + this.errorPreFallAnimationTimeScale * e, this.skipFallAnimation && (this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0)), this._updateTileRatios();
  }
}
let fr = 0, dt = [], _t = null, ss = 0, pr = 0;
const k_ = () => {
  function i() {
    e() || (it.isSuccessResult || it.isReplayResult ? t() : n(), !(dt.length === Y.maxFreeBlocksCount && it.isFree) && S_.dispatch());
  }
  function e() {
    return it.isFailResult || it.isStopped || dt.length >= ln || (or == null ? void 0 : or.isOccupied) && !it.isSuccessResult && !it.isReplayResult;
  }
  function t() {
    let d = ln - Y.activeBlocksCount;
    Y.errorBlock && (Y.errorBlock.currentTile && (Y.errorBlock.currentTile.isOccupied = !1), d += 1);
    for (let m = 0; m < d; m++) {
      const g = kn.getRandomFreeTile();
      if (g) {
        const x = new Yl(dt.length);
        x.currentTile = g, x.init(), x.updateTile(), dt = [x, ...dt];
      }
    }
  }
  function n() {
    var x;
    let d = null;
    const m = !!(Y.errorBlock && Y.errorBlock.errorLifeCycle >= Y.errorBlockMaxLifeCycle), g = dt.length < Y.maxFreeBlocksCount && Pt === je.FREE;
    m ? ((x = Y.errorBlock) == null || x.reset(!0), Gi.resetBlockFromLogicBlock(Y.errorBlock), d = Y.errorBlock, Y.errorBlock = null) : g && (d = new Yl(dt.length), _t = d), d && (d.currentTile = or, d.init(), d.updateTile());
  }
  function r() {
    Bt.updateAfterCycle(), !A_.includes(Pt) && (_t && (dt = [_t, ...dt], _t = null), Y.activeBlocksCount = dt.length, !(it.isFailResult || it.isStopped) && (dt.forEach((d) => d.resetAfterCycle()), M_.dispatch(), ss++, i(), s()));
  }
  function s() {
    _t != null && _t.hasBeenSpawned && _t.moveToNextTile(it.isFree, 0);
    const d = ss % 2 === 0 ? !0 : Y.activeBlocksCount < Y.maxFreeBlocksCount - 1;
    dt.forEach((m, g) => {
      !m.hasBeenEvaluated && m.hasBeenSpawned && m.moveToNextTile(d, g * 0.2);
    });
  }
  function o() {
    dt.forEach((d) => d.reset()), Gi.reset(), kn.reset(), dt = [], _t = null, ss = 0, fr = 0;
  }
  function a(d = !1) {
    dt.forEach((g) => g.reset()), Gi.reset(), kn.reset(), dt = [], _t = null, ss = 0, d && (Dc.dispatch(), fr = 0);
    const m = b_.includes(At);
    Bt.reset(), r(), m && Bt.setStart(), oo.remove(() => {
      Bt.setRestart(), r(), pr = 1;
    }), lo.remove(() => {
      Bt.setRestart(), a();
    }), ao.remove(() => {
      Bt.setRestart(), r();
    });
  }
  function l(d) {
    it.isResult, fr = Le.saturate(fr + d * (Y.showVisual ? 1 : 0)), pr = Le.saturate(pr - d / 1.5);
  }
  function c() {
    let d = !0;
    return _t && (d = !!(d && _t.hasBeenSpawned)), dt.forEach((m) => {
      m.lifeCycle > 0 ? d = !!(d && m.hasBeenEvaluated && m.hasAnimationEnded) : d = d && m.spawnAnimationRatio === 1;
    }), d || it.isResultAnimation || it.isFailResult || it.isStopped;
  }
  function h(d) {
    if (l(d), Wl.update(d), Xl.update(d), Gl.update(d), it.hasNotStarted) {
      r();
      return;
    }
    if (it.isRestart) {
      a();
      return;
    }
    it.isResultAnimation && Bt.setRestartAnimation(), kn.preUpdate(d), _t && _t.update(d), dt.forEach((g) => g.update(d)), kn.update(d), c() && r();
  }
  async function f() {
    Bt.init(), Wl.init(), Xl.init(), Gl.init(), kn.init(), oo.add(() => {
      Bt.setRestart(), r(), pr = 1;
    }), lo.add(() => {
      Bt.setRestart(), a();
    }), ao.add(() => {
      Bt.setRestart(), r();
    }), wo.addOnce(() => {
      a(!0);
    });
  }
  return {
    init: f,
    update: h,
    reset: a,
    resetPostDestroy: o
  };
}, _a = k_(), as = `#ifndef IS_BASE
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

        // local spin
        pos = qrotate(instanceSpinOrient, pos - instanceSpinPivot) + instanceSpinPivot;
        nor = qrotate(instanceSpinOrient, nor);

        // global transform
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

    // Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
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

        // ao
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

}
`, ql = `uniform vec3 u_lightPosition;
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

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.
vec3 ACESFilmicToneMapping( vec3 color, float toneMappingExposure ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
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

// https://stackoverflow.com/questions/13501081/efficient-bicubic-filtering-code-in-glsl
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
	vec3 N = normalize(v_worldNormal); // normal in world space
	vec3 V = normalize(cameraPosition - v_worldPosition); // view direction
	vec3 L = u_lightPosition - v_worldPosition; // light direction
	float lightDistance = length(L);
	L /= lightDistance;
	vec3 H = normalize(L + V); // half vector

    // basic shading
    float attenuation = 1. / (0.08 * lightDistance + 0.001 * lightDistance * lightDistance);
	float NdL = max(0., dot(N, L));
	float NdV = max(0., dot(N, V));
	float specular = pow(max(0., dot(N, H)), 50.);

    // ao
    float ao = v_ao;

    // shadows
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

    // final
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

	// color = color + (0.5 + 0.5 * shadowMask) * color * 8.0 * linearstep(0.5, 0.0, u_endAnimationRatio) * blockAoColor * infoTextureLinear.x * linearstep(-0.55, -0.5, v_modelPosition.y);
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

}
`, Zl = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;
varying float v_clipY;

void main() {
    #ifndef IS_BASE
        if (v_clipY < 0.0) discard;
    #endif

	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`, V_ = Math.PI / 2, Di = new F();
class G_ {
  constructor() {
    Ce(this, "animation", 0);
    Ce(this, "boardDir", new we());
    Ce(this, "boardPos", new we());
    Ce(this, "pos", new F());
    Ce(this, "orient", new jt());
    Ce(this, "showRatio", 0);
    Ce(this, "spinPivot", new F());
    Ce(this, "spinOrient", new jt());
    this.animation = 0, this.boardDir = new we(), this.boardPos = new we(), this.pos = new F(), this.orient = new jt(), this.showRatio = 0, this.spinPivot = new F(), this.spinOrient = new jt();
  }
  reset() {
    this.animation = 0, this.boardDir.set(0, 0), this.boardPos.set(0, 0), this.pos.set(0, 0, 0), this.orient.identity(), this.showRatio = 0, this.spinPivot.set(0, 0, 0), this.spinOrient.identity();
  }
  update(e) {
    this.pos.set(this.boardPos.x, 0, -this.boardPos.y), this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5), Di.set(-this.boardDir.y, 0, -this.boardDir.x), this.spinOrient.setFromAxisAngle(Di, this.animation * V_);
  }
  addsFallAnimation(e) {
    Di.set(this.boardDir.x, -e, -this.boardDir.y), this.pos.addScaledVector(Di, e), Di.set(this.boardDir.x * 0.5, 0, -this.boardDir.y * 0.5), this.spinPivot.lerp(Di, Le.saturate(e));
  }
}
const sr = 2 * ln, yt = new we(), os = new we(), Li = new F(), jl = new F(), ga = new jt(), $l = new jt(), Kl = new Pe(), ls = new Pe(), va = new Pe(), Ui = new Pe(), Hn = new Pe(), cs = new Pe(), Ni = new xt(), Ct = {
  u_lightPosition: { value: new F(-2, 6, -4) },
  u_goboTexture: { value: null },
  u_goboIntensity: { value: 0.45 },
  u_infoTexture: { value: null },
  u_infoTextureLinear: { value: null },
  u_endAnimationRatio: { value: 0 }
}, Z = {
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
}, W_ = () => {
  async function i() {
    const p = Array.from({ length: sr });
    Z._blockList = p.map((u) => new G_()), Z._blockRenderList = [...Z._blockList], Pn.loadBuf(`${Gn}/BASE.buf`, (u) => {
      e(u);
    }), Pn.loadBuf(`${Gn}/BOX.buf`, (u) => {
      t(u);
    }), Pn.loadBuf(`${Gn}/LOSE_ANIMATION.buf`, (u) => {
      const { position: T, orient: S } = u.attributes;
      Z.animationTotalFrames = T.count / ln, Z.heroLoseAnimationPositionArray = T.array, Z.heroLoseAnimationOrientArray = S.array;
    }), Pn.loadTexture(`${Gn}/gobo.jpg`, (u) => {
      u.flipY = !1, u.needsUpdate = !0, Ct && (Ct.u_goboTexture.value = u);
    });
  }
  function e(p) {
    const u = {
      ...Y.sharedUniforms,
      ...Ss.merge([ae.lights]),
      ...Ct,
      ...cn,
      u_color: { value: new Pe(Y.neutralColor) },
      u_blocksColor: { value: new Pe() },
      u_yDisplacement: { value: 0 },
      u_prevSuccessColor: { value: new Pe(Y.neutralColor).convertSRGBToLinear() },
      u_successColor: { value: new Pe(Y.successColor).convertSRGBToLinear() },
      u_successAnimationRatio: { value: 0 }
    }, T = new Dt({
      uniforms: u,
      vertexShader: as,
      fragmentShader: ql,
      lights: !0,
      transparent: !0,
      defines: { IS_BASE: !0 }
    });
    Z._baseMesh = new kt(p, T), Z._baseMesh.receiveShadow = Z._baseMesh.castShadow = !0, Z._baseMesh.frustumCulled = !1, Z._baseMesh.customDepthMaterial = new Dt({
      vertexShader: as,
      fragmentShader: Zl,
      defines: { IS_DEPTH: !0, IS_BASE: !0 }
    }), Ni.add(Z._baseMesh);
  }
  function t(p) {
    const u = new Ao();
    u.index = p.index, Object.keys(p.attributes).forEach((_) => {
      u.setAttribute(_, p.attributes[_]);
    }), u.instanceCount = sr;
    const T = (_, R) => {
      const C = new Float32Array(sr * R);
      return u.setAttribute(_, new Ms(C, R, R !== 4, 1).setUsage(Du)), C;
    };
    Z._instancePosArray = T("instancePos", 3), Z._instanceOrientArray = T("instanceOrient", 4), Z._instanceShowRatioArray = T("instanceShowRatio", 1), Z._instanceSpinPivotArray = T("instanceSpinPivot", 3), Z._instanceSpinOrientArray = T("instanceSpinOrient", 4), Z._instanceColorArray = T("instanceColor", 3), Z._instanceIsActiveArray = T("instanceIsActive", 1), Z._instanceNextDirectionArray = T("instanceNextDirection", 2);
    const S = new Dt({
      uniforms: {
        ...Ss.merge([ae.lights]),
        ...Y.sharedUniforms,
        ...Ct,
        ...cn
      },
      vertexShader: as,
      fragmentShader: ql,
      lights: !0
    });
    Z._blocksMesh = new kt(u, S), Z._blocksMesh.frustumCulled = !1, Z._blocksMesh.castShadow = Z._blocksMesh.receiveShadow = !0, Z._blocksMesh.customDepthMaterial = new Dt({
      uniforms: { ...Ct },
      vertexShader: as,
      fragmentShader: Zl,
      defines: { IS_DEPTH: !0 }
    }), Ni.add(Z._blocksMesh);
  }
  function n() {
    var u, T;
    Z.directLight = new Sh(16777215, 1), Z.directLight.castShadow = !0, Z.directLight.shadow.camera.near = Y.lightCameraNear, Z.directLight.shadow.camera.far = Y.lightCameraFar, Z.directLight.shadow.camera.right = Y.lightCameraSize, Z.directLight.shadow.camera.left = -Y.lightCameraSize, Z.directLight.shadow.camera.top = Y.lightCameraSize, Z.directLight.shadow.camera.bottom = -Y.lightCameraSize, Z.directLight.shadow.bias = Y.lightCameraBias, Z.directLight.shadow.mapSize.width = 768, Z.directLight.shadow.mapSize.height = 768, (u = Y.scene) == null || u.add(Z.directLight), (T = Y.scene) == null || T.add(Z.directLight.target), Z.isShadowCameraHelperVisible = !0, Z.shadowCameraHelper = new Eh(Z.directLight.shadow.camera), y_.add(() => {
      var S, _;
      (S = Z.directLight) == null || S.shadow.camera.updateProjectionMatrix(), (_ = Z.shadowCameraHelper) == null || _.update();
    }), E_.add(() => {
      var S, _;
      Z.isShadowCameraHelperVisible = !Z.isShadowCameraHelperVisible, Z.isShadowCameraHelperVisible && Z.shadowCameraHelper ? (S = Y.scene) == null || S.add(Z.shadowCameraHelper) : Z.shadowCameraHelper && ((_ = Y.scene) == null || _.remove(Z.shadowCameraHelper));
    }), r();
    const p = new Float32Array(p_ * 4);
    for (let S = 0, _ = 0; S < bn; S++)
      for (let R = 0; R < bn; R++, _ += 4)
        p[_] = 0, p[_ + 1] = 0, p[_ + 2] = 1, p[_ + 3] = 1;
    Z.infoTexture = new sl(p, bn, bn, Zt, dn), Z.infoTextureLinear = new sl(
      p,
      bn,
      bn,
      Zt,
      dn,
      fo,
      Cn,
      Cn,
      qt,
      qt,
      0
    ), Z.infoTextureLinear.needsUpdate = !0, Ct && (Ct.u_infoTexture.value = Z.infoTexture, Ct.u_infoTextureLinear.value = Z.infoTextureLinear);
  }
  function r() {
    wn.forEach((p, u) => {
      p.forEach((T, S) => {
        var R, C;
        const _ = u * zt + S;
        T.loseAnimationPositionArray = new Float32Array(Z.animationTotalFrames * 3), T.loseAnimationOrientArray = new Float32Array(Z.animationTotalFrames * 4);
        for (let b = 0; b < Z.animationTotalFrames; b++) {
          const D = (b * ln + _) * 3, y = (b * ln + _) * 4;
          T.loseAnimationPositionArray.set(((R = Z.heroLoseAnimationPositionArray) == null ? void 0 : R.subarray(D, D + 3)) || [], b * 3), T.loseAnimationOrientArray.set(((C = Z.heroLoseAnimationOrientArray) == null ? void 0 : C.subarray(y, y + 4)) || [], b * 4);
        }
      });
    });
  }
  function s() {
    Z.successColorRatio = 0, Z._blockList.forEach((p) => p.reset());
  }
  function o(p) {
    Z._blockList[p.id].reset();
  }
  function a(p) {
    var u, T;
    Kl.set(Y.mainColor), ls.set(Y.successColor), va.set(Y.failColor), Ui.set(Y.neutralColor).convertSRGBToLinear(), Hn.copy(Kl), At === $e.FAILED && oi > 0 && Hn.copy(va), (At === $e.COMPLETED || At === $e.REPLAY) && (Z.successColorRatio = Math.min(1, Z.successColorRatio + 0.5 * p), Hn.lerp(ls, Z.successColorRatio)), At !== $e.REPLAY && At !== $e.COMPLETED && Hn.lerp(Ui, Le.saturate(gr + mr)), Hn.convertSRGBToLinear(), Ui.convertSRGBToLinear(), ls.convertSRGBToLinear();
    for (let S = 0; S < sr; S++) {
      const _ = dt.filter((b) => b.id === S)[0], R = S < dt.length + (_t ? 1 : 0), C = R ? Hn : Ui;
      if (R && (_ != null && _.isErrorBlock)) {
        let b = Le.saturate(0.5 * (1 - Math.cos(_.errorPreFallAnimationTime)));
        _.errorFallAnimationTime > 0 && (b = Le.saturate(0.5 * (1 - Math.cos(14 * _.errorFallAnimationTime)))), cs.lerpColors(C, va, b), (u = Z._instanceColorArray) == null || u.set([cs.r, cs.g, cs.b], S * 3);
      } else
        (T = Z._instanceColorArray) == null || T.set([C.r, C.g, C.b], S * 3);
      Z._instanceIsActiveArray && (Z._instanceIsActiveArray[S] = R ? 1 : 0);
    }
    Z._baseMesh && (Z._baseMesh.material.uniforms.u_color.value.set(Ui).convertSRGBToLinear(), Z._baseMesh.material.uniforms.u_blocksColor.value.copy(Hn), Z._baseMesh.material.uniforms.u_successColor.value.copy(ls), Z._baseMesh.material.uniforms.u_prevSuccessColor.value.set(Ui).convertSRGBToLinear(), Z._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(Hn.set(Y.successColor), pr), Z._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear());
  }
  function l() {
    wn.forEach((p) => {
      p.forEach((u) => {
        const T = u.id % zt + 1, _ = ((Math.floor(u.id / zt) + 1) * bn + T) * 4;
        let R = 0.5 * Bi * Le.fit(Hi, 0, 0.1, 1, 0);
        R += (oi > 0 ? 1 : 0) * Le.fit(mr, 0, 0.1, 1, 0), R += _r * Le.fit(gr, 0, 0.1, 1, 0), R = Math.min(1, R), Z.infoTexture && (Z.infoTexture.image.data[_] = u.activeRatio * (1 - R), Z.infoTexture.image.data[_ + 1] = u.isOccupied || u.willBeOccupied ? 1 : 0, Z.infoTexture.image.data[_ + 2] = u.isMain ? 1 : 0, Z.infoTexture.image.data[_ + 3] = u.isBorder ? 1 : 0);
      });
    }), Z.infoTexture && Z.infoTextureLinear && (Z.infoTexture.needsUpdate = !0, Z.infoTextureLinear.needsUpdate = !0);
  }
  function c() {
    var p, u;
    if (_t) {
      const T = Z._blockList[_t.id];
      _t.currentTile && T.boardPos.set((p = _t.currentTile) == null ? void 0 : p.row, (u = _t.currentTile) == null ? void 0 : u.col), T.showRatio = Ii(Le.saturate(_t.spawnAnimationRatioUnclamped));
    }
    dt.forEach((T) => {
      var _, R, C, b;
      const S = Z._blockList[T.id];
      S && (S.showRatio = Ii(Le.saturate(T.spawnAnimationRatioUnclamped)), T.currentTile && S.boardPos.set((_ = T.currentTile) == null ? void 0 : _.row, (R = T.currentTile) == null ? void 0 : R.col), T.targetTile && S.boardDir.set(T.targetTile.row - (((C = T.currentTile) == null ? void 0 : C.row) || 0), T.targetTile.col - (((b = T.currentTile) == null ? void 0 : b.col) || 0)), S.animation = T.hasAnimationEnded ? 0 : T.easedAnimationRatio);
    });
  }
  function h(p) {
    var T, S;
    for (let _ = 0; _ < p; _++) {
      const R = Z._blockRenderList[_];
      R.pos.toArray(Z._instancePosArray || [], _ * 3), R.orient.toArray(Z._instanceOrientArray || [], _ * 4), Z._instanceShowRatioArray && (Z._instanceShowRatioArray[_] = rr.quartInOut(R.showRatio)), R.spinPivot.toArray(Z._instanceSpinPivotArray || [], _ * 3), R.spinOrient.toArray(Z._instanceSpinOrientArray || [], _ * 4), (T = Z._instanceNextDirectionArray) == null || T.set([R.boardDir.x, R.boardDir.y], _ * 2);
    }
    const u = (S = Z._blocksMesh) == null ? void 0 : S.geometry;
    if (u) {
      for (const _ in u.attributes) {
        const R = u.attributes[_];
        R.isBufferAttribute && (R.addUpdateRange(0, p * R.itemSize), R.needsUpdate = !0);
      }
      u.instanceCount = p;
    }
  }
  function f(p, u) {
    if (At === $e.STOP && u >= ln) {
      const T = u - ln, S = T % zt - Ht, _ = Math.floor(T / zt) - Ht, R = kn.getTile(_, S);
      if (!R.isOccupied) {
        const C = Le.saturate(_r - R.randomDelay);
        R.activeRatio = C, p.showRatio = Ii(C), p.boardPos.set(_, S);
      }
    }
  }
  function d(p, u) {
    if (p && p.isErrorBlock && p.errorLifeCycle >= Y.errorBlockMaxLifeCycle - 1) {
      const T = p.currentTile, S = p.errorFallAnimationTime;
      u.boardPos.set(T.row, T.col), yt.set(T.row, T.col).normalize(), Math.abs(yt.x) > Math.abs(yt.y) ? yt.set(Math.sign(yt.x), 0) : yt.set(0, Math.sign(yt.y)), u.boardDir.set(yt.x, yt.y), u.animation = Le.fit(S, 0, 1, 0, 1, rr.sineOut), u.animation += Math.max(0, S - 0.8), u.update(Y.deltaTime), u.addsFallAnimation(Math.max(0, S - 0.8));
    }
  }
  function m(p, u, T) {
    if (At === $e.FAILED) {
      if (p) {
        const S = p.currentTile;
        if (oi > 0) {
          const _ = Math.floor(oi * Z.animationTotalFrames), R = Math.min(_ + 1, Z.animationTotalFrames - 1), C = oi * Z.animationTotalFrames - _;
          Li.fromArray(S.loseAnimationPositionArray, _ * 3), jl.fromArray(S.loseAnimationPositionArray, R * 3), Li.lerp(jl, C), Li.y *= 0.5, u.pos.set(Li.z, Li.y, -Li.x), ga.fromArray(S.loseAnimationOrientArray, _ * 4), $l.fromArray(S.loseAnimationOrientArray, R * 4), ga.slerp($l, C), u.orient.copy(ga);
        }
        if (Oi > 0) {
          const _ = Le.fit(Oi, 0, 1, 0, 1, rr.sineOut);
          if (yt.set(S.row, S.col), yt.normalize(), yt.multiplyScalar(0.1 * _), u.pos.x += yt.x, u.pos.z -= yt.y, Oi < 1) {
            const R = _ * Le.fit(Oi, 0.5, 0.8, 1, 0);
            yt.set(p.randomVector.x, p.randomVector.y), yt.normalize(), yt.multiplyScalar(R), os.set(0, 0), os.addScaledVector(yt, 0.08 * R * Math.sin(R * 80)), u.pos.x += os.x, u.pos.z += os.y;
          }
        }
      }
      if (T >= ln) {
        const S = T - ln, _ = S % zt - Ht, R = Math.floor(S / zt) - Ht, C = kn.getTile(R, _), b = Le.saturate(As - C.randomDelay);
        C.isOccupied || (C.activeRatio = b), u.showRatio = Ii(b), u.boardPos.set(R, _);
      }
    }
  }
  function g(p, u) {
    if ((At === $e.COMPLETED || At === $e.REPLAY) && p) {
      const S = 0.1 * p.currentTile.randomDelay, _ = Bi - S;
      let R = Le.fit(_, 0, 0.5, 0, 1, (C) => 1 - Math.pow(1 - C, 5));
      R = Le.fit(_, 0.7, 1, R, 0, (C) => Math.pow(C, 5)), u.pos.y += dr * R;
    }
  }
  function x(p) {
    c(), a(p);
    let u = 0;
    for (let R = 0; R < sr; R++) {
      const C = Z._blockList[R];
      C.update(p);
      const b = dt.filter((D) => D.id === R)[0];
      C.showRatio > 0 && (Z._blockRenderList[u++] = C), m(b, C, R), d(b, C), f(C, R), g(b, C);
    }
    l(), h(u);
    const T = Math.min(1, gr + mr + Hi), S = rr.backOut(T, 3), _ = 1 - Ii(fr);
    Ni.position.y = -S - 2 * _, Ni.rotation.y = 0.5 * Math.PI * _, Ni.rotation.y += 2 * Math.PI * rr.quartInOut(cr), Z._baseMesh && (Z._baseMesh.material.uniforms.u_yDisplacement.value = -S - 5 * _, Z._baseMesh.material.uniforms.u_successAnimationRatio.value = hr), Ct && (Ct.u_endAnimationRatio.value = Math.min(
      1,
      Le.fit(_r, 0.5, 2, 0, 1) + Le.fit(As, 0.5, 2, 0, 1) + Le.fit(mt, 0, 0.2, 0, 1)
    ), Ct.u_goboIntensity.value = Y.goboIntensity, Ct.u_lightPosition.value.set(Y.lightPositionX, Y.lightPositionY, Y.lightPositionZ)), Z.directLight && (Z.directLight.position.copy(Ct == null ? void 0 : Ct.u_lightPosition.value), Z.directLight.shadow.camera.top = Y.lightCameraSize, Z.directLight.shadow.camera.bottom = -Y.lightCameraSize, Z.directLight.shadow.bias = Y.lightCameraBias);
  }
  return {
    preload: i,
    init: n,
    reset: s,
    resetBlockFromLogicBlock: o,
    update: x
  };
}, Gi = W_(), Jl = `uniform float u_time;
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
}
`, X_ = `uniform vec3 u_bgColor1;
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

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.
vec3 ACESFilmicToneMapping( vec3 color, float toneMappingExposure ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );
}

void main () {
	vec3 viewNormal = normalize(v_viewNormal);
    vec3 viewDir = normalize( v_viewPosition );

	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 matcapUv = vec2( dot( x, viewNormal ), dot( y, viewNormal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
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

}
`, Y_ = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`, Lc = new xt(), q_ = () => {
  let i, e = null, t = null, n = null, r = null, s = null, o = null, a = null, l = null, c = 0, h = 0, f, d;
  const m = {
    u_time: { value: 0 },
    u_ratio: { value: 0 },
    u_isFloating: { value: 1 }
  };
  async function g() {
    Pn.loadTexture(`${Gn}/matcap_gold.jpg`, (_) => {
      f = _, f.needsUpdate = !0;
    }), Pn.loadBuf(`${Gn}/COIN.buf`, (_) => {
      i = _;
    }), Pn.loadBuf(`${Gn}/COIN_PLACEMENT.buf`, (_) => {
      const { position: R, aoN: C, aoP: b, curveu: D, orient: y } = _.attributes;
      r = R.array, a = C.array, l = b.array, o = D.array, s = y.array, c = R.count;
    });
  }
  function x() {
    p(), u(), T(), e && Lc.add(e);
  }
  function p() {
    i.computeVertexNormals();
    const _ = new Ao();
    _.index = i.index, Object.entries(i.attributes).forEach(([C, b]) => _.setAttribute(C, b)), d = new Float32Array(c * 3).map(() => Math.random() * 2 - 1), [
      ["a_instancePosition", r, 3],
      ["a_instanceQuaternion", s, 4],
      ["a_instanceCurveUV", o, 1],
      ["a_instanceAoN", a, 3],
      ["a_instanceAoP", l, 3],
      ["a_instanceRand", d, 3]
    ].forEach(([C, b, D]) => {
      _.setAttribute(C, new Ms(b, D));
    }), t = _;
  }
  function u() {
    n = new Dt({
      uniforms: {
        ...Ct,
        ...Y.sharedUniforms,
        ...m,
        ...cn,
        ...Ss.merge([ae.lights]),
        u_matcapTexture: { value: f }
      },
      vertexShader: Jl,
      fragmentShader: X_,
      lights: !0
    });
  }
  function T() {
    t && n && (e = new kt(t, n), e.frustumCulled = !1, e.castShadow = !0, e.receiveShadow = !0, e.customDepthMaterial = new Dt({
      uniforms: { ...m },
      vertexShader: Jl,
      fragmentShader: Y_,
      defines: { IS_DEPTH: !0 }
    }));
  }
  function S(_) {
    const R = zi === 0;
    h = R ? ur : zi, m.u_ratio.value = h, m.u_time.value += _, m.u_isFloating.value = R ? 1 : 0, e && (e.rotation.y = 0 * h, e.visible = h > 0 && h < 1);
  }
  return {
    preload: g,
    init: x,
    update: S
  };
}, Ql = { type: "change" }, xa = { type: "start" }, ec = { type: "end" };
class Z_ extends fi {
  constructor(e, t) {
    super(), t === void 0 && lr('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && ui('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new F(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = Math.PI * 0.2, this.maxPolarAngle = Math.PI * 0.45, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !0, this.dampingFactor = 0.15, this.enableZoom = !1, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 0.5, this.enablePan = !1, this.panSpeed = 1, this.screenSpacePanning = !0, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: mi.ROTATE, MIDDLE: mi.DOLLY, RIGHT: mi.PAN }, this.touches = { ONE: _i.ROTATE, TWO: _i.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.scale = 1, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.scale = 1, n.object.updateProjectionMatrix(), n.dispatchEvent(Ql), n.update(), s = r.NONE;
    }, this.update = function() {
      const w = new F(), J = new jt().setFromUnitVectors(e.up, new F(0, 1, 0)), te = J.clone().invert(), re = new F(), Ue = new jt(), ee = 2 * Math.PI;
      return function() {
        const be = n.object.position;
        w.copy(be).sub(n.target), w.applyQuaternion(J), a.setFromVector3(w), n.autoRotate && s === r.NONE && D(C()), n.enableDamping ? (a.theta += l.theta * n.dampingFactor, a.phi += l.phi * n.dampingFactor) : (a.theta += l.theta, a.phi += l.phi);
        let Ee = n.minAzimuthAngle, ce = n.maxAzimuthAngle;
        isFinite(Ee) && isFinite(ce) && (Ee < -Math.PI ? Ee += ee : Ee > Math.PI && (Ee -= ee), ce < -Math.PI ? ce += ee : ce > Math.PI && (ce -= ee), Ee <= ce ? a.theta = Math.max(Ee, Math.min(ce, a.theta)) : a.theta = a.theta > (Ee + ce) / 2 ? Math.max(Ee, a.theta) : Math.min(ce, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe();
        let ke = n.enableDamping ? (n.scale - 1) * n.dampingFactor + 1 : n.scale;
        return a.radius *= ke, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c), w.setFromSpherical(a), w.applyQuaternion(te), be.copy(n.target).add(w), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, c.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), c.set(0, 0, 0)), n.scale = n.scale / ke, h || re.distanceToSquared(n.object.position) > o || 8 * (1 - Ue.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Ql), re.copy(n.object.position), Ue.copy(n.object.quaternion), h = !1, !0) : !1;
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
    const o = 1e-6, a = new fl(), l = new fl(), c = new F();
    let h = !1;
    const f = new we(), d = new we(), m = new we(), g = new we(), x = new we(), p = new we(), u = new we(), T = new we(), S = new we(), _ = [], R = {};
    function C() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function b() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function D(w) {
      l.theta -= w;
    }
    function y(w) {
      l.phi -= w;
    }
    const E = function() {
      const w = new F();
      return function(te, re) {
        w.setFromMatrixColumn(re, 0), w.multiplyScalar(-te), c.add(w);
      };
    }(), L = function() {
      const w = new F();
      return function(te, re) {
        n.screenSpacePanning === !0 ? w.setFromMatrixColumn(re, 1) : (w.setFromMatrixColumn(re, 0), w.crossVectors(n.object.up, w)), w.multiplyScalar(te), c.add(w);
      };
    }(), W = function() {
      const w = new F();
      return function(te, re) {
        const Ue = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const ee = n.object.position;
          w.copy(ee).sub(n.target);
          let pe = w.length();
          pe *= Math.tan(n.object.fov / 2 * Math.PI / 180), E(2 * te * pe / Ue.clientHeight, n.object.matrix), L(2 * re * pe / Ue.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (E(te * (n.object.right - n.object.left) / n.object.zoom / Ue.clientWidth, n.object.matrix), L(re * (n.object.top - n.object.bottom) / n.object.zoom / Ue.clientHeight, n.object.matrix)) : (lr("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function H(w) {
      n.object.isPerspectiveCamera ? n.scale /= w : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * w)), n.object.updateProjectionMatrix(), h = !0) : (lr("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function X(w) {
      n.object.isPerspectiveCamera ? n.scale *= w : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / w)), n.object.updateProjectionMatrix(), h = !0) : (lr("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function Q(w) {
      f.set(w.clientX, w.clientY);
    }
    function G(w) {
      u.set(w.clientX, w.clientY);
    }
    function ie(w) {
      g.set(w.clientX, w.clientY);
    }
    function k(w) {
      d.set(w.clientX, w.clientY), m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      D(2 * Math.PI * m.x / J.clientHeight), y(2 * Math.PI * m.y / J.clientHeight), f.copy(d), n.update();
    }
    function le(w) {
      T.set(w.clientX, w.clientY), S.subVectors(T, u), S.y > 0 ? H(b()) : S.y < 0 && X(b()), u.copy(T), n.update();
    }
    function me(w) {
      x.set(w.clientX, w.clientY), p.subVectors(x, g).multiplyScalar(n.panSpeed), W(p.x, p.y), g.copy(x), n.update();
    }
    function Me(w) {
      w.deltaY < 0 ? X(b()) : w.deltaY > 0 && H(b()), n.update();
    }
    function Be() {
      if (_.length === 1)
        f.set(_[0].pageX, _[0].pageY);
      else {
        const w = 0.5 * (_[0].pageX + _[1].pageX), J = 0.5 * (_[0].pageY + _[1].pageY);
        f.set(w, J);
      }
    }
    function Ke() {
      if (_.length === 1)
        g.set(_[0].pageX, _[0].pageY);
      else {
        const w = 0.5 * (_[0].pageX + _[1].pageX), J = 0.5 * (_[0].pageY + _[1].pageY);
        g.set(w, J);
      }
    }
    function q() {
      const w = _[0].pageX - _[1].pageX, J = _[0].pageY - _[1].pageY, te = Math.sqrt(w * w + J * J);
      u.set(0, te);
    }
    function se() {
      n.enableZoom && q(), n.enablePan && Ke();
    }
    function ve() {
      n.enableZoom && q(), n.enableRotate && Be();
    }
    function oe(w) {
      if (_.length === 1)
        d.set(w.pageX, w.pageY);
      else {
        const te = K(w), re = 0.5 * (w.pageX + te.x), Ue = 0.5 * (w.pageY + te.y);
        d.set(re, Ue);
      }
      m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      D(2 * Math.PI * m.x / J.clientHeight), y(2 * Math.PI * m.y / J.clientHeight), f.copy(d);
    }
    function Te(w) {
      if (_.length === 1)
        x.set(w.pageX, w.pageY);
      else {
        const J = K(w), te = 0.5 * (w.pageX + J.x), re = 0.5 * (w.pageY + J.y);
        x.set(te, re);
      }
      p.subVectors(x, g).multiplyScalar(n.panSpeed), W(p.x, p.y), g.copy(x);
    }
    function Xe(w) {
      const J = K(w), te = w.pageX - J.x, re = w.pageY - J.y, Ue = Math.sqrt(te * te + re * re);
      T.set(0, Ue), S.set(0, Math.pow(T.y / u.y, n.zoomSpeed)), H(S.y), u.copy(T);
    }
    function Re(w) {
      n.enableZoom && Xe(w), n.enablePan && Te(w);
    }
    function ot(w) {
      n.enableZoom && Xe(w), n.enableRotate && oe(w);
    }
    function st(w) {
      n.enabled !== !1 && (_.length === 0 && (n.domElement.setPointerCapture(w.pointerId), n.domElement.addEventListener("pointermove", He), n.domElement.addEventListener("pointerup", P)), v(w), w.pointerType === "touch" ? nt(w) : We(w));
    }
    function He(w) {
      n.enabled !== !1 && (w.pointerType === "touch" ? Se(w) : Ge(w));
    }
    function P(w) {
      O(w), _.length === 0 && (n.domElement.releasePointerCapture(w.pointerId), n.domElement.removeEventListener("pointermove", He), n.domElement.removeEventListener("pointerup", P)), n.dispatchEvent(ec), s = r.NONE;
    }
    function Ut(w) {
      O(w);
    }
    function We(w) {
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
        case mi.DOLLY:
          if (n.enableZoom === !1) return;
          G(w), s = r.DOLLY;
          break;
        case mi.ROTATE:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enablePan === !1) return;
            ie(w), s = r.PAN;
          } else {
            if (n.enableRotate === !1) return;
            Q(w), s = r.ROTATE;
          }
          break;
        case mi.PAN:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enableRotate === !1) return;
            Q(w), s = r.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            ie(w), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(xa);
    }
    function Ge(w) {
      if (n.enabled !== !1)
        switch (s) {
          case r.ROTATE:
            if (n.enableRotate === !1) return;
            k(w);
            break;
          case r.DOLLY:
            if (n.enableZoom === !1) return;
            le(w);
            break;
          case r.PAN:
            if (n.enablePan === !1) return;
            me(w);
            break;
        }
    }
    function xe(w) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (n.dispatchEvent(xa), Me(w), n.dispatchEvent(ec));
    }
    function nt(w) {
      switch (j(w), _.length) {
        case 1:
          switch (n.touches.ONE) {
            case _i.ROTATE:
              if (n.enableRotate === !1) return;
              Be(), s = r.TOUCH_ROTATE;
              break;
            case _i.PAN:
              if (n.enablePan === !1) return;
              Ke(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case _i.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              se(), s = r.TOUCH_DOLLY_PAN;
              break;
            case _i.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ve(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(xa);
    }
    function Se(w) {
      switch (j(w), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          oe(w), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          Te(w), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Re(w), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          ot(w), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function A(w) {
      n.enabled !== !1 && (w.preventDefault(), n.domElement.removeEventListener("contextmenu", A));
    }
    function v(w) {
      _.push(w);
    }
    function O(w) {
      delete R[w.pointerId];
      for (let J = 0; J < _.length; J++)
        if (_[J].pointerId === w.pointerId) {
          _.splice(J, 1);
          return;
        }
    }
    function j(w) {
      let J = R[w.pointerId];
      J === void 0 && (J = new we(), R[w.pointerId] = J), J.set(w.pageX, w.pageY);
    }
    function K(w) {
      const J = w.pointerId === _[0].pointerId ? _[1] : _[0];
      return R[J.pointerId];
    }
    n.domElement.addEventListener("contextmenu", A), n.domElement.addEventListener("pointerdown", st), n.domElement.addEventListener("pointercancel", Ut), n.domElement.addEventListener("wheel", xe, { passive: !1 }), this.update(), n.domElement.removeEventListener("pointercancel", Ut), n.domElement.removeEventListener("wheel", xe, { passive: !1 });
  }
}
const j_ = `varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}
`, $_ = `uniform vec3 u_bgColor1;
uniform vec3 u_bgColor2;

varying vec2 v_uv;

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

#include <getBlueNoise>

void main() {
    vec3 color = mix(u_bgColor1, u_bgColor2, v_uv.y);
    gl_FragColor = vec4(linearToSRGB(color) + getBlueNoise(gl_FragCoord.xy) * .004, 1.0);
}
`, K_ = `attribute vec3 a_instancePosition;
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

    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point
    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));

    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance
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

}
`, J_ = `varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}
`, co = new xt(), Q_ = () => {
  const i = new kt(), e = new kt(new ji(2, 2));
  function t() {
    var o, a, l;
    const s = {
      u_resolution: (o = Y.sharedUniforms) == null ? void 0 : o.u_resolution,
      u_bgColor1: (a = Y.sharedUniforms) == null ? void 0 : a.u_bgColor1,
      u_bgColor2: (l = Y.sharedUniforms) == null ? void 0 : l.u_bgColor2,
      ...cn
    };
    e.material = new Dt({
      uniforms: s,
      vertexShader: j_,
      fragmentShader: $_
    }), e.renderOrder = 1, co.add(e), n();
  }
  function n() {
    var f, d;
    const o = new ji(1, 1), a = new Ao();
    a.index = o.index, Object.keys(o.attributes).forEach((m) => {
      a.setAttribute(m, o.attributes[m]);
    }), a.instanceCount = 50;
    const l = new Float32Array(50 * 3), c = new Float32Array(50 * 3);
    for (let m = 0; m < 50; m++)
      l[m * 3] = 3 * (Math.random() * 2 - 1), l[m * 3 + 1] = Math.random() * 2 - 1, l[m * 3 + 2] = 0.5 + 0.5 * Math.random(), c[m * 3] = Math.random(), c[m * 3 + 1] = Math.random(), c[m * 3 + 2] = Math.random();
    a.setAttribute("a_instancePosition", new Ms(l, 3)), a.setAttribute("a_instanceRandom", new Ms(c, 3));
    const h = {
      u_time: ((f = Y.sharedUniforms) == null ? void 0 : f.u_time) || { value: Y.time },
      u_resolution: ((d = Y.sharedUniforms) == null ? void 0 : d.u_resolution) || { value: Y.resolution },
      u_size: { value: 0.01 },
      u_color: { value: new Pe() },
      u_opacity: { value: 0 }
    };
    i.material = new Dt({
      vertexShader: K_,
      fragmentShader: J_,
      uniforms: h,
      transparent: !0
    }), i.geometry = a, i.frustumCulled = !1, co.add(i);
  }
  function r(s) {
    i.material.uniforms.u_size.value = Y.particlesSize, i.material.uniforms.u_color.value.set(Y.particlesColor), i.material.uniforms.u_opacity.value = Y.particlesOpacity;
  }
  return { init: t, update: r };
};
qe.enabled = !1;
const eg = () => {
  const i = Q_(), e = I_(), t = q_();
  let n, r;
  const s = window.innerWidth / window.innerHeight, o = 15, a = o * s, l = new To(a / -2, a / 2, o / 2, o / -2, 1, 1e3);
  let c, h;
  async function f() {
    if (h) {
      if (h.shadowMap.enabled = !0, h.shadowMap.type = ho, Y.sharedUniforms) {
        const S = Y.sharedUniforms.u_bgColor1.value, _ = Y.sharedUniforms.u_bgColor2.value;
        S.set(Y.bgColor1).convertSRGBToLinear(), _.set(Y.bgColor2).convertSRGBToLinear();
      }
      h.setClearColor(Y.bgColor1, 1);
    }
  }
  function d(S, _) {
    Y.viewportWidth = S, Y.viewportHeight = _, Y.viewportResolution.set(S, window.innerHeight), Y.sharedUniforms.u_viewportResolution.value = Y.viewportResolution;
    let R = S * ri.DPR, C = _ * ri.DPR;
    const b = R / C;
    C * R > ri.MAX_PIXEL_COUNT && (C = Math.sqrt(ri.MAX_PIXEL_COUNT / b), R = Math.ceil(C * b), C = Math.ceil(C)), Y.width = R, Y.height = C, Y.resolution.set(R, C), l.updateProjectionMatrix(), h == null || h.setSize(R, C), r && (r.style.width = S + "px", r.style.height = _ + "px");
  }
  function m() {
    d(window.innerWidth, window.innerHeight);
  }
  async function g({ canvasEl: S, initCallback: _ }) {
    r = S, h = new a_({ ...d_, canvas: r }), Dc.addOnce(() => {
      T();
    }), await f(), await Gi.preload(), await e.preInit(), await t.preload(), Pn.start(_);
  }
  async function x() {
    Y.scene.add(l), l.position.fromArray(ri.DEFAULT_POSITION), l.updateProjectionMatrix(), c = l.clone(), r && (n = new Z_(c, r), n.target0.fromArray(ri.DEFAULT_LOOKAT_POSITION), n.reset());
  }
  async function p() {
    await x();
    try {
      await _a.init(), Gi.init(), t.init(), i.init(), Y.scene.add(Lc), Y.scene.add(co), Y.scene.add(Ni);
    } catch (S) {
      ui("init tower : ", S);
    }
  }
  function u(S) {
    if (!r) {
      S *= 0;
      return;
    }
    S = Math.min(S, 1 / 15), Y.time += S, Y.deltaTime = S, Y.sharedUniforms && (Y.sharedUniforms.u_time.value = Y.time, Y.sharedUniforms.u_deltaTime.value = S);
    const _ = (window.innerWidth - Y.cameraOffsetX) / window.innerHeight, R = 10, C = R * _;
    let b = 0;
    if (Y.offsetX) {
      const E = Y.offsetX / window.innerWidth * 100;
      b = C * E / 100;
    }
    const D = -C / 2 - b / 2, y = C / 2 - b / 2;
    l.left = D, l.right = y, l.top = R / 2, l.bottom = R / -2, l.updateProjectionMatrix(), n == null || n.update(), c == null || c.updateMatrix(), c == null || c.matrix.decompose(l.position, l.quaternion, l.scale), l.matrix.compose(l.position, l.quaternion, l.scale), e.update(S), _a.update(S), Gi.update(S), t.update(S), i.update(S), h == null || h.render(Y.scene, l);
  }
  function T() {
    Y.showVisual = !1, _a.resetPostDestroy();
    const S = (r == null ? void 0 : r.id) || "canvas_id", _ = document.createElement("canvas");
    _.setAttribute("id", S), r == null || r.replaceWith(_), h.state.reset();
  }
  return {
    preload: g,
    init: p,
    coins: t,
    blueNoise: e,
    onResize: m,
    render: u
  };
}, vr = eg();
let Tr = 0, bs = 0;
const tg = 50, ng = 1 / tg;
function Uc() {
  const i = performance.now() / 1e3, e = i - Tr;
  i - bs >= ng && (bs = i, vr.render(e), Tr = i), requestAnimationFrame(Uc);
}
async function ig() {
  try {
    await vr.init(), Tr = performance.now() / 1e3, bs = Tr, window.addEventListener("resize", vr.onResize), vr.onResize(), Uc();
  } catch (i) {
    ui("initCallback:", i);
  }
}
async function ag({ canvasId: i, offset: e = 0 }) {
  Y.offsetX = e, Y.cameraOffsetX = Y.offsetX / window.innerWidth;
  const t = document.getElementById(i);
  try {
    t && await vr.preload({ canvasEl: t, initCallback: ig });
  } catch (n) {
    ui("loadTowerAnimation", n);
  }
}
async function og({ canvasId: i }) {
  document.getElementById(i) && (T_(`removeTowerAnimation intialted, current status: ${Pt}`), Pt === "not-started" ? wo.dispatch() : (Bt.setRemove(!0), Bt.set("stop")), Tr = 0, bs = 0);
}
function lg(i, e) {
  Bt.set(i, e);
}
function cg(i) {
  for (const e of i)
    Y[e.property] = e.value, e.property === "bgColor1" && Y.sharedUniforms && Y.sharedUniforms.u_bgColor1.value.set(e.value).convertSRGBToLinear(), e.property === "bgColor2" && Y.sharedUniforms && Y.sharedUniforms.u_bgColor2.value.set(e.value).convertSRGBToLinear();
}
export {
  Pt as animationStatus,
  Ps as getTowerLogPrefix,
  ag as loadTowerAnimation,
  og as removeTowerAnimation,
  cg as setAnimationProperties,
  lg as setAnimationState
};
