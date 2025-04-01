var Ac = Object.defineProperty;
var wc = (i, e, t) => e in i ? Ac(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Re = (i, e, t) => wc(i, typeof e != "symbol" ? e + "" : e, t);
var It = /* @__PURE__ */ ((i) => (i.NOT_STARTED = "not-started", i.FREE = "free", i.RESULT = "result", i))(It || {}), rt = /* @__PURE__ */ ((i) => (i.NONE = "none", i.STOP = "stop", i.COMPLETED = "completed", i.FAILED = "failed", i.REPLAY = "replay", i))(rt || {}), Kr = /* @__PURE__ */ ((i) => (i[i.ONE = 1] = "ONE", i[i.TWO = 2] = "TWO", i[i.THREE = 3] = "THREE", i))(Kr || {});
const Rc = [
  "failed",
  "completed"
  /* COMPLETED */
], Cc = (i) => {
  let e;
  const t = /* @__PURE__ */ new Set(), n = (c, h) => {
    const f = typeof c == "function" ? c(e) : c;
    if (!Object.is(f, e)) {
      const u = e;
      e = h ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), t.forEach((p) => p(e, u));
    }
  }, r = () => e, a = { setState: n, getState: r, getInitialState: () => l, subscribe: (c) => (t.add(c), () => t.delete(c)) }, l = e = i(n, r, a);
  return a;
}, hr = (i) => Cc, Pc = (i) => (e, t, n) => {
  const r = n.subscribe;
  return n.subscribe = (o, a, l) => {
    let c = o;
    if (a) {
      const h = (l == null ? void 0 : l.equalityFn) || Object.is;
      let f = o(n.getState());
      c = (u) => {
        const p = o(u);
        if (!h(f, p)) {
          const _ = f;
          a(f = p, _);
        }
      }, l != null && l.fireImmediately && a(f, f);
    }
    return r(c);
  }, i(e, t, n);
}, dr = Pc, Dc = {
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
  particlesSize: 0.6
  // particlesSize: 0.01,
}, st = hr()(
  dr((i) => ({
    ...Dc,
    setProperty: (e) => i((t) => ({ ...t, property: e }))
  }))
), Lc = (i) => {
  st.setState({ errorBlock: i });
};
function V_() {
  st.getState().setProperty({ propertyName: "showVisual", value: !0 });
}
const Ic = {
  hasNotStarted: !0,
  isFree: !1,
  isResult: !1,
  isReplayResult: !1,
  isSuccessResult: !1,
  isFailResult: !1,
  isStopped: !1
}, go = {
  flags: Ic,
  destroyCanvas: !1,
  animationTypeEnded: null,
  status: It.NOT_STARTED,
  result: rt.NONE
}, nt = hr()(
  dr((i) => ({
    ...go,
    setDestroyCanvas: (e) => i({ destroyCanvas: e }),
    setAnimationTypeEnded: (e) => i({ animationTypeEnded: e }),
    setWinAnimation: ({ isReplay: e, completeAnimationLevel: t }) => i((n) => {
      const r = n.status === It.NOT_STARTED, s = e && r ? rt.REPLAY : rt.COMPLETED, o = {
        ...n.flags,
        isReplayResult: s === rt.REPLAY,
        isSuccessResult: !0
      };
      return { ...n, status: It.RESULT, result: s, completeAnimationLevel: t, flags: o };
    }),
    setAnimationState: (e) => i((t) => {
      let n, r = t.result;
      switch (e) {
        case "start": {
          n = It.FREE;
          break;
        }
        case "stop": {
          n = It.RESULT, r = rt.STOP;
          break;
        }
        case "lose": {
          n = It.RESULT, r = rt.FAILED;
          break;
        }
        default:
          n = It.NOT_STARTED;
      }
      const s = n === It.RESULT, o = {
        isResult: s,
        hasNotStarted: n === It.NOT_STARTED,
        isFree: n === It.FREE,
        isReplayResult: s && r === rt.REPLAY,
        isSuccessResult: s && r === rt.COMPLETED,
        isFailResult: s && r === rt.FAILED,
        isStopped: s && r === rt.STOP
      };
      return {
        ...t,
        status: n,
        result: r,
        flags: { ...t.flags, ...o }
      };
    }),
    reset: () => i((e) => ({ ...go, status: e.status }))
  }))
), Uc = () => {
  nt.getState().setAnimationState("start");
}, Nc = () => {
  nt.getState().setAnimationState("stop");
}, G_ = () => {
  nt.getState().setAnimationState("lose");
}, W_ = ({ isReplay: i, completeAnimationLevel: e }) => nt.getState().setWinAnimation({ isReplay: i, completeAnimationLevel: e });
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const qa = "175", si = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ai = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Fc = 0, vo = 1, Oc = 2, Za = 1, Bc = 2, vn = 3, Bn = 0, Bt = 1, Mn = 2, Fn = 0, Pi = 1, xo = 2, So = 3, Mo = 4, zc = 5, $n = 100, Hc = 101, kc = 102, Vc = 103, Gc = 104, Wc = 200, Xc = 201, Yc = 202, qc = 203, sa = 204, aa = 205, Zc = 206, jc = 207, $c = 208, Kc = 209, Jc = 210, Qc = 211, eu = 212, tu = 213, nu = 214, oa = 0, la = 1, ca = 2, Li = 3, ua = 4, ha = 5, da = 6, fa = 7, Vl = 0, iu = 1, ru = 2, On = 0, su = 1, au = 2, ou = 3, lu = 4, cu = 5, uu = 6, hu = 7, ja = 300, Ii = 301, Ui = 302, pa = 303, ma = 304, _s = 306, as = 1e3, En = 1001, _a = 1002, zt = 1003, du = 1004, Sr = 1005, Gt = 1006, Ms = 1007, ei = 1008, fu = 1008, bn = 1009, Gl = 1010, Wl = 1011, ar = 1012, $a = 1013, ti = 1014, sn = 1015, fr = 1016, Ka = 1017, Ja = 1018, or = 1020, Xl = 35902, Yl = 1021, ql = 1022, Wt = 1023, Zl = 1024, jl = 1025, lr = 1026, cr = 1027, $l = 1028, Qa = 1029, Kl = 1030, eo = 1031, to = 1033, Jr = 33776, Qr = 33777, es = 33778, ts = 33779, ga = 35840, va = 35841, xa = 35842, Sa = 35843, Ma = 36196, Ea = 37492, ya = 37496, Ta = 37808, ba = 37809, Aa = 37810, wa = 37811, Ra = 37812, Ca = 37813, Pa = 37814, Da = 37815, La = 37816, Ia = 37817, Ua = 37818, Na = 37819, Fa = 37820, Oa = 37821, ns = 36492, Ba = 36494, za = 36495, Jl = 36283, Ha = 36284, ka = 36285, Va = 36286, pu = 3200, mu = 3201, _u = 0, gu = 1, Un = "", $t = "srgb", Ni = "srgb-linear", os = "linear", Je = "srgb", oi = 7680, Eo = 519, vu = 512, xu = 513, Su = 514, Ql = 515, Mu = 516, Eu = 517, yu = 518, Tu = 519, yo = 35044, bu = 35048, To = "300 es", un = 2e3, ls = 2001;
class ii {
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
const yt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Es = Math.PI / 180, Ga = 180 / Math.PI;
function pr() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (yt[i & 255] + yt[i >> 8 & 255] + yt[i >> 16 & 255] + yt[i >> 24 & 255] + "-" + yt[e & 255] + yt[e >> 8 & 255] + "-" + yt[e >> 16 & 15 | 64] + yt[e >> 24 & 255] + "-" + yt[t & 63 | 128] + yt[t >> 8 & 255] + "-" + yt[t >> 16 & 255] + yt[t >> 24 & 255] + yt[n & 255] + yt[n >> 8 & 255] + yt[n >> 16 & 255] + yt[n >> 24 & 255]).toLowerCase();
}
function ke(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Au(i, e) {
  return (i % e + e) % e;
}
function ys(i, e, t) {
  return (1 - t) * i + t * e;
}
function Hi(i, e) {
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
class Ae {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    Ae.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    return this.x = ke(this.x, e.x, t.x), this.y = ke(this.y, e.y, t.y), this;
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
    return this.x = ke(this.x, e, t), this.y = ke(this.y, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(ke(n, e, t));
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
    return Math.acos(ke(n, -1, 1));
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], f = n[7], u = n[2], p = n[5], _ = n[8], S = r[0], m = r[3], d = r[6], P = r[1], R = r[4], E = r[7], I = r[2], C = r[5], y = r[8];
    return s[0] = o * S + a * P + l * I, s[3] = o * m + a * R + l * C, s[6] = o * d + a * E + l * y, s[1] = c * S + h * P + f * I, s[4] = c * m + h * R + f * C, s[7] = c * d + h * E + f * y, s[2] = u * S + p * P + _ * I, s[5] = u * m + p * R + _ * C, s[8] = u * d + p * E + _ * y, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], f = h * o - a * c, u = a * l - h * s, p = c * s - o * l, _ = t * f + n * u + r * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / _;
    return e[0] = f * S, e[1] = (r * c - h * n) * S, e[2] = (a * n - r * o) * S, e[3] = u * S, e[4] = (h * t - r * l) * S, e[5] = (r * s - a * t) * S, e[6] = p * S, e[7] = (n * l - c * t) * S, e[8] = (o * t - n * s) * S, this;
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
    return this.premultiply(Ts.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Ts.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Ts.makeTranslation(e, t)), this;
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
const Ts = /* @__PURE__ */ new Fe();
function ec(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function ur(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function wu() {
  const i = ur("canvas");
  return i.style.display = "block", i;
}
const bo = {};
function is(i) {
  i in bo || (bo[i] = !0, console.warn(i));
}
function Ru(i, e, t) {
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
function Cu(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Pu(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Ao = /* @__PURE__ */ new Fe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), wo = /* @__PURE__ */ new Fe().set(
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
function Du() {
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
      return this.enabled === !1 || s === o || !s || !o || (this.spaces[s].transfer === Je && (r.r = Tn(r.r), r.g = Tn(r.g), r.b = Tn(r.b)), this.spaces[s].primaries !== this.spaces[o].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === Je && (r.r = Di(r.r), r.g = Di(r.g), r.b = Di(r.b))), r;
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
      return r === Un ? os : this.spaces[r].transfer;
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
      transfer: os,
      toXYZ: Ao,
      fromXYZ: wo,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: $t },
      outputColorSpaceConfig: { drawingBufferColorSpace: $t }
    },
    [$t]: {
      primaries: e,
      whitePoint: n,
      transfer: Je,
      toXYZ: Ao,
      fromXYZ: wo,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: $t }
    }
  }), i;
}
const Ye = /* @__PURE__ */ Du();
function Tn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Di(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let li;
class Lu {
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
      li === void 0 && (li = ur("canvas")), li.width = e.width, li.height = e.height;
      const r = li.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = li;
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
      const t = ur("canvas");
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
let Iu = 0;
class no {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Iu++ }), this.uuid = pr(), this.data = e, this.dataReady = !0, this.version = 0;
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
          r[o].isDataTexture ? s.push(bs(r[o].image)) : s.push(bs(r[o]));
      } else
        s = bs(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function bs(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Lu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Uu = 0;
class wt extends ii {
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
  constructor(e = wt.DEFAULT_IMAGE, t = wt.DEFAULT_MAPPING, n = En, r = En, s = Gt, o = ei, a = Wt, l = bn, c = wt.DEFAULT_ANISOTROPY, h = Un) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Uu++ }), this.uuid = pr(), this.name = "", this.source = new no(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Ae(0, 0), this.repeat = new Ae(1, 1), this.center = new Ae(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Fe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
    if (this.mapping !== ja) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case as:
          e.x = e.x - Math.floor(e.x);
          break;
        case En:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case _a:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case as:
          e.y = e.y - Math.floor(e.y);
          break;
        case En:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case _a:
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
wt.DEFAULT_IMAGE = null;
wt.DEFAULT_MAPPING = ja;
wt.DEFAULT_ANISOTROPY = 1;
class ht {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ht.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
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
    const l = e.elements, c = l[0], h = l[4], f = l[8], u = l[1], p = l[5], _ = l[9], S = l[2], m = l[6], d = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(f - S) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(f + S) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + p + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const R = (c + 1) / 2, E = (p + 1) / 2, I = (d + 1) / 2, C = (h + u) / 4, y = (f + S) / 4, b = (_ + m) / 4;
      return R > E && R > I ? R < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(R), r = C / n, s = y / n) : E > I ? E < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(E), n = C / r, s = b / r) : I < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(I), n = y / s, r = b / s), this.set(n, r, s, t), this;
    }
    let P = Math.sqrt((m - _) * (m - _) + (f - S) * (f - S) + (u - h) * (u - h));
    return Math.abs(P) < 1e-3 && (P = 1), this.x = (m - _) / P, this.y = (f - S) / P, this.z = (u - h) / P, this.w = Math.acos((c + p + d - 1) / 2), this;
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
    return this.x = ke(this.x, e.x, t.x), this.y = ke(this.y, e.y, t.y), this.z = ke(this.z, e.z, t.z), this.w = ke(this.w, e.w, t.w), this;
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
    return this.x = ke(this.x, e, t), this.y = ke(this.y, e, t), this.z = ke(this.z, e, t), this.w = ke(this.w, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(ke(n, e, t));
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
class Nu extends ii {
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
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ht(0, 0, e, t), this.scissorTest = !1, this.viewport = new ht(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Gt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new wt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
      this.textures[t].source = new no(r);
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
class ni extends Nu {
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
class tc extends wt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = zt, this.minFilter = zt, this.wrapR = En, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
class Fu extends wt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = zt, this.minFilter = zt, this.wrapR = En, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Xt {
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
    const u = s[o + 0], p = s[o + 1], _ = s[o + 2], S = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
      return;
    }
    if (a === 1) {
      e[t + 0] = u, e[t + 1] = p, e[t + 2] = _, e[t + 3] = S;
      return;
    }
    if (f !== S || l !== u || c !== p || h !== _) {
      let m = 1 - a;
      const d = l * u + c * p + h * _ + f * S, P = d >= 0 ? 1 : -1, R = 1 - d * d;
      if (R > Number.EPSILON) {
        const I = Math.sqrt(R), C = Math.atan2(I, d * P);
        m = Math.sin(m * C) / I, a = Math.sin(a * C) / I;
      }
      const E = a * P;
      if (l = l * m + u * E, c = c * m + p * E, h = h * m + _ * E, f = f * m + S * E, m === 1 - a) {
        const I = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= I, c *= I, h *= I, f *= I;
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
    const a = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], f = s[o], u = s[o + 1], p = s[o + 2], _ = s[o + 3];
    return e[t] = a * _ + h * f + l * p - c * u, e[t + 1] = l * _ + h * u + c * f - a * p, e[t + 2] = c * _ + h * p + a * u - l * f, e[t + 3] = h * _ - a * f - l * u - c * p, e;
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
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(r / 2), f = a(s / 2), u = l(n / 2), p = l(r / 2), _ = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = u * h * f + c * p * _, this._y = c * p * f - u * h * _, this._z = c * h * _ + u * p * f, this._w = c * h * f - u * p * _;
        break;
      case "YXZ":
        this._x = u * h * f + c * p * _, this._y = c * p * f - u * h * _, this._z = c * h * _ - u * p * f, this._w = c * h * f + u * p * _;
        break;
      case "ZXY":
        this._x = u * h * f - c * p * _, this._y = c * p * f + u * h * _, this._z = c * h * _ + u * p * f, this._w = c * h * f - u * p * _;
        break;
      case "ZYX":
        this._x = u * h * f - c * p * _, this._y = c * p * f + u * h * _, this._z = c * h * _ - u * p * f, this._w = c * h * f + u * p * _;
        break;
      case "YZX":
        this._x = u * h * f + c * p * _, this._y = c * p * f + u * h * _, this._z = c * h * _ - u * p * f, this._w = c * h * f - u * p * _;
        break;
      case "XZY":
        this._x = u * h * f - c * p * _, this._y = c * p * f - u * h * _, this._z = c * h * _ + u * p * f, this._w = c * h * f + u * p * _;
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], f = t[10], u = n + a + f;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (s - c) * p, this._z = (o - r) * p;
    } else if (n > a && n > f) {
      const p = 2 * Math.sqrt(1 + n - a - f);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (r + o) / p, this._z = (s + c) / p;
    } else if (a > f) {
      const p = 2 * Math.sqrt(1 + a - n - f);
      this._w = (s - c) / p, this._x = (r + o) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + f - n - a);
      this._w = (o - r) / p, this._x = (s + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
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
    return 2 * Math.acos(Math.abs(ke(this.dot(e), -1, 1)));
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
      const p = 1 - t;
      return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), f = Math.sin((1 - t) * h) / c, u = Math.sin(t * h) / c;
    return this._w = o * f + this._w * u, this._x = n * f + this._x * u, this._y = r * f + this._y * u, this._z = s * f + this._z * u, this._onChangeCallback(), this;
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
    return this.applyQuaternion(Ro.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ro.setFromAxisAngle(e, t));
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
    return this.x = ke(this.x, e.x, t.x), this.y = ke(this.y, e.y, t.y), this.z = ke(this.z, e.z, t.z), this;
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
    return this.x = ke(this.x, e, t), this.y = ke(this.y, e, t), this.z = ke(this.z, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(ke(n, e, t));
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
    return As.copy(this).projectOnVector(e), this.sub(As);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(As.copy(e).multiplyScalar(2 * this.dot(e)));
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
    return Math.acos(ke(n, -1, 1));
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
const As = /* @__PURE__ */ new B(), Ro = /* @__PURE__ */ new Xt();
class mr {
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
      this.expandByPoint(Qt.fromArray(e, t));
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
      this.expandByPoint(Qt.fromBufferAttribute(e, t));
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
    const n = Qt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(o, Qt) : Qt.fromBufferAttribute(s, o), Qt.applyMatrix4(e.matrixWorld), this.expandByPoint(Qt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Mr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Mr.copy(n.boundingBox)), Mr.applyMatrix4(e.matrixWorld), this.union(Mr);
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
    return this.clampPoint(e.center, Qt), Qt.distanceToSquared(e.center) <= e.radius * e.radius;
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
    this.getCenter(ki), Er.subVectors(this.max, ki), ci.subVectors(e.a, ki), ui.subVectors(e.b, ki), hi.subVectors(e.c, ki), wn.subVectors(ui, ci), Rn.subVectors(hi, ui), kn.subVectors(ci, hi);
    let t = [
      0,
      -wn.z,
      wn.y,
      0,
      -Rn.z,
      Rn.y,
      0,
      -kn.z,
      kn.y,
      wn.z,
      0,
      -wn.x,
      Rn.z,
      0,
      -Rn.x,
      kn.z,
      0,
      -kn.x,
      -wn.y,
      wn.x,
      0,
      -Rn.y,
      Rn.x,
      0,
      -kn.y,
      kn.x,
      0
    ];
    return !ws(t, ci, ui, hi, Er) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ws(t, ci, ui, hi, Er)) ? !1 : (yr.crossVectors(wn, Rn), t = [yr.x, yr.y, yr.z], ws(t, ci, ui, hi, Er));
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
    return this.clampPoint(e, Qt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Qt).length() * 0.5), e;
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
    return this.isEmpty() ? this : (dn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), dn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), dn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), dn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), dn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), dn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), dn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), dn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(dn), this);
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
const dn = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], Qt = /* @__PURE__ */ new B(), Mr = /* @__PURE__ */ new mr(), ci = /* @__PURE__ */ new B(), ui = /* @__PURE__ */ new B(), hi = /* @__PURE__ */ new B(), wn = /* @__PURE__ */ new B(), Rn = /* @__PURE__ */ new B(), kn = /* @__PURE__ */ new B(), ki = /* @__PURE__ */ new B(), Er = /* @__PURE__ */ new B(), yr = /* @__PURE__ */ new B(), Vn = /* @__PURE__ */ new B();
function ws(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    Vn.fromArray(i, s);
    const a = r.x * Math.abs(Vn.x) + r.y * Math.abs(Vn.y) + r.z * Math.abs(Vn.z), l = e.dot(Vn), c = t.dot(Vn), h = n.dot(Vn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const Ou = /* @__PURE__ */ new mr(), Vi = /* @__PURE__ */ new B(), Rs = /* @__PURE__ */ new B();
class gs {
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
    t !== void 0 ? n.copy(t) : Ou.setFromPoints(e).getCenter(n);
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
    Vi.subVectors(e, this.center);
    const t = Vi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Vi, r / n), this.radius += r;
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
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Rs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Vi.copy(e.center).add(Rs)), this.expandByPoint(Vi.copy(e.center).sub(Rs))), this);
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
const fn = /* @__PURE__ */ new B(), Cs = /* @__PURE__ */ new B(), Tr = /* @__PURE__ */ new B(), Cn = /* @__PURE__ */ new B(), Ps = /* @__PURE__ */ new B(), br = /* @__PURE__ */ new B(), Ds = /* @__PURE__ */ new B();
class nc {
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
    Cs.copy(e).add(t).multiplyScalar(0.5), Tr.copy(t).sub(e).normalize(), Cn.copy(this.origin).sub(Cs);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Tr), a = Cn.dot(this.direction), l = -Cn.dot(Tr), c = Cn.lengthSq(), h = Math.abs(1 - o * o);
    let f, u, p, _;
    if (h > 0)
      if (f = o * l - a, u = o * a - l, _ = s * h, f >= 0)
        if (u >= -_)
          if (u <= _) {
            const S = 1 / h;
            f *= S, u *= S, p = f * (f + o * u + 2 * a) + u * (o * f + u + 2 * l) + c;
          } else
            u = s, f = Math.max(0, -(o * u + a)), p = -f * f + u * (u + 2 * l) + c;
        else
          u = -s, f = Math.max(0, -(o * u + a)), p = -f * f + u * (u + 2 * l) + c;
      else
        u <= -_ ? (f = Math.max(0, -(-o * s + a)), u = f > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -f * f + u * (u + 2 * l) + c) : u <= _ ? (f = 0, u = Math.min(Math.max(-s, -l), s), p = u * (u + 2 * l) + c) : (f = Math.max(0, -(o * s + a)), u = f > 0 ? s : Math.min(Math.max(-s, -l), s), p = -f * f + u * (u + 2 * l) + c);
    else
      u = o > 0 ? -s : s, f = Math.max(0, -(o * u + a)), p = -f * f + u * (u + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Cs).addScaledVector(Tr, u), p;
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
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, r = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, r = (e.min.x - u.x) * c), h >= 0 ? (s = (e.min.y - u.y) * h, o = (e.max.y - u.y) * h) : (s = (e.max.y - u.y) * h, o = (e.min.y - u.y) * h), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - u.z) * f, l = (e.max.z - u.z) * f) : (a = (e.max.z - u.z) * f, l = (e.min.z - u.z) * f), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
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
    Ps.subVectors(t, e), br.subVectors(n, e), Ds.crossVectors(Ps, br);
    let o = this.direction.dot(Ds), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Cn.subVectors(this.origin, e);
    const l = a * this.direction.dot(br.crossVectors(Cn, br));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Ps.cross(Cn));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * Cn.dot(Ds);
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
class ot {
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
  constructor(e, t, n, r, s, o, a, l, c, h, f, u, p, _, S, m) {
    ot.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, h, f, u, p, _, S, m);
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
  set(e, t, n, r, s, o, a, l, c, h, f, u, p, _, S, m) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = s, d[5] = o, d[9] = a, d[13] = l, d[2] = c, d[6] = h, d[10] = f, d[14] = u, d[3] = p, d[7] = _, d[11] = S, d[15] = m, this;
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
    return new ot().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / di.setFromMatrixColumn(e, 0).length(), s = 1 / di.setFromMatrixColumn(e, 1).length(), o = 1 / di.setFromMatrixColumn(e, 2).length();
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
      const u = o * h, p = o * f, _ = a * h, S = a * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = p + _ * c, t[5] = u - S * c, t[9] = -a * l, t[2] = S - u * c, t[6] = _ + p * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const u = l * h, p = l * f, _ = c * h, S = c * f;
      t[0] = u + S * a, t[4] = _ * a - p, t[8] = o * c, t[1] = o * f, t[5] = o * h, t[9] = -a, t[2] = p * a - _, t[6] = S + u * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const u = l * h, p = l * f, _ = c * h, S = c * f;
      t[0] = u - S * a, t[4] = -o * f, t[8] = _ + p * a, t[1] = p + _ * a, t[5] = o * h, t[9] = S - u * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const u = o * h, p = o * f, _ = a * h, S = a * f;
      t[0] = l * h, t[4] = _ * c - p, t[8] = u * c + S, t[1] = l * f, t[5] = S * c + u, t[9] = p * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const u = o * l, p = o * c, _ = a * l, S = a * c;
      t[0] = l * h, t[4] = S - u * f, t[8] = _ * f + p, t[1] = f, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = p * f + _, t[10] = u - S * f;
    } else if (e.order === "XZY") {
      const u = o * l, p = o * c, _ = a * l, S = a * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = u * f + S, t[5] = o * h, t[9] = p * f - _, t[2] = _ * f - p, t[6] = a * h, t[10] = S * f + u;
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
    return this.compose(Bu, e, zu);
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
    return kt.subVectors(e, t), kt.lengthSq() === 0 && (kt.z = 1), kt.normalize(), Pn.crossVectors(n, kt), Pn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? kt.x += 1e-4 : kt.z += 1e-4, kt.normalize(), Pn.crossVectors(n, kt)), Pn.normalize(), Ar.crossVectors(kt, Pn), r[0] = Pn.x, r[4] = Ar.x, r[8] = kt.x, r[1] = Pn.y, r[5] = Ar.y, r[9] = kt.y, r[2] = Pn.z, r[6] = Ar.z, r[10] = kt.z, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], f = n[5], u = n[9], p = n[13], _ = n[2], S = n[6], m = n[10], d = n[14], P = n[3], R = n[7], E = n[11], I = n[15], C = r[0], y = r[4], b = r[8], v = r[12], g = r[1], A = r[5], U = r[9], N = r[13], H = r[2], Z = r[6], G = r[10], ne = r[14], W = r[3], oe = r[7], pe = r[11], Se = r[15];
    return s[0] = o * C + a * g + l * H + c * W, s[4] = o * y + a * A + l * Z + c * oe, s[8] = o * b + a * U + l * G + c * pe, s[12] = o * v + a * N + l * ne + c * Se, s[1] = h * C + f * g + u * H + p * W, s[5] = h * y + f * A + u * Z + p * oe, s[9] = h * b + f * U + u * G + p * pe, s[13] = h * v + f * N + u * ne + p * Se, s[2] = _ * C + S * g + m * H + d * W, s[6] = _ * y + S * A + m * Z + d * oe, s[10] = _ * b + S * U + m * G + d * pe, s[14] = _ * v + S * N + m * ne + d * Se, s[3] = P * C + R * g + E * H + I * W, s[7] = P * y + R * A + E * Z + I * oe, s[11] = P * b + R * U + E * G + I * pe, s[15] = P * v + R * N + E * ne + I * Se, this;
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], f = e[6], u = e[10], p = e[14], _ = e[3], S = e[7], m = e[11], d = e[15];
    return _ * (+s * l * f - r * c * f - s * a * u + n * c * u + r * a * p - n * l * p) + S * (+t * l * p - t * c * u + s * o * u - r * o * p + r * c * h - s * l * h) + m * (+t * c * f - t * a * p - s * o * f + n * o * p + s * a * h - n * c * h) + d * (-r * a * h - t * l * f + t * a * u + r * o * f - n * o * u + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], f = e[9], u = e[10], p = e[11], _ = e[12], S = e[13], m = e[14], d = e[15], P = f * m * c - S * u * c + S * l * p - a * m * p - f * l * d + a * u * d, R = _ * u * c - h * m * c - _ * l * p + o * m * p + h * l * d - o * u * d, E = h * S * c - _ * f * c + _ * a * p - o * S * p - h * a * d + o * f * d, I = _ * f * l - h * S * l - _ * a * u + o * S * u + h * a * m - o * f * m, C = t * P + n * R + r * E + s * I;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / C;
    return e[0] = P * y, e[1] = (S * u * s - f * m * s - S * r * p + n * m * p + f * r * d - n * u * d) * y, e[2] = (a * m * s - S * l * s + S * r * c - n * m * c - a * r * d + n * l * d) * y, e[3] = (f * l * s - a * u * s - f * r * c + n * u * c + a * r * p - n * l * p) * y, e[4] = R * y, e[5] = (h * m * s - _ * u * s + _ * r * p - t * m * p - h * r * d + t * u * d) * y, e[6] = (_ * l * s - o * m * s - _ * r * c + t * m * c + o * r * d - t * l * d) * y, e[7] = (o * u * s - h * l * s + h * r * c - t * u * c - o * r * p + t * l * p) * y, e[8] = E * y, e[9] = (_ * f * s - h * S * s - _ * n * p + t * S * p + h * n * d - t * f * d) * y, e[10] = (o * S * s - _ * a * s + _ * n * c - t * S * c - o * n * d + t * a * d) * y, e[11] = (h * a * s - o * f * s - h * n * c + t * f * c + o * n * p - t * a * p) * y, e[12] = I * y, e[13] = (h * S * r - _ * f * r + _ * n * u - t * S * u - h * n * m + t * f * m) * y, e[14] = (_ * a * r - o * S * r - _ * n * l + t * S * l + o * n * m - t * a * m) * y, e[15] = (o * f * r - h * a * r + h * n * l - t * f * l - o * n * u + t * a * u) * y, this;
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
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, h = o + o, f = a + a, u = s * c, p = s * h, _ = s * f, S = o * h, m = o * f, d = a * f, P = l * c, R = l * h, E = l * f, I = n.x, C = n.y, y = n.z;
    return r[0] = (1 - (S + d)) * I, r[1] = (p + E) * I, r[2] = (_ - R) * I, r[3] = 0, r[4] = (p - E) * C, r[5] = (1 - (u + d)) * C, r[6] = (m + P) * C, r[7] = 0, r[8] = (_ + R) * y, r[9] = (m - P) * y, r[10] = (1 - (u + S)) * y, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
    let s = di.set(r[0], r[1], r[2]).length();
    const o = di.set(r[4], r[5], r[6]).length(), a = di.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], en.copy(this);
    const c = 1 / s, h = 1 / o, f = 1 / a;
    return en.elements[0] *= c, en.elements[1] *= c, en.elements[2] *= c, en.elements[4] *= h, en.elements[5] *= h, en.elements[6] *= h, en.elements[8] *= f, en.elements[9] *= f, en.elements[10] *= f, t.setFromRotationMatrix(en), n.x = s, n.y = o, n.z = a, this;
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
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - r), f = (t + e) / (t - e), u = (n + r) / (n - r);
    let p, _;
    if (a === un)
      p = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
    else if (a === ls)
      p = -o / (o - s), _ = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = u, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - r), f = 1 / (o - s), u = (t + e) * c, p = (n + r) * h;
    let _, S;
    if (a === un)
      _ = (o + s) * f, S = -2 * f;
    else if (a === ls)
      _ = s * f, S = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -u, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = S, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const di = /* @__PURE__ */ new B(), en = /* @__PURE__ */ new ot(), Bu = /* @__PURE__ */ new B(0, 0, 0), zu = /* @__PURE__ */ new B(1, 1, 1), Pn = /* @__PURE__ */ new B(), Ar = /* @__PURE__ */ new B(), kt = /* @__PURE__ */ new B(), Co = /* @__PURE__ */ new ot(), Po = /* @__PURE__ */ new Xt();
class An {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = An.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], h = r[9], f = r[2], u = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ke(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ke(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ke(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ke(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(ke(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-ke(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
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
    return Co.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Co, t, n);
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
    return Po.setFromEuler(this), this.setFromQuaternion(Po, e);
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
An.DEFAULT_ORDER = "XYZ";
class ic {
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
let Hu = 0;
const Do = /* @__PURE__ */ new B(), fi = /* @__PURE__ */ new Xt(), pn = /* @__PURE__ */ new ot(), wr = /* @__PURE__ */ new B(), Gi = /* @__PURE__ */ new B(), ku = /* @__PURE__ */ new B(), Vu = /* @__PURE__ */ new Xt(), Lo = /* @__PURE__ */ new B(1, 0, 0), Io = /* @__PURE__ */ new B(0, 1, 0), Uo = /* @__PURE__ */ new B(0, 0, 1), No = { type: "added" }, Gu = { type: "removed" }, pi = { type: "childadded", child: null }, Ls = { type: "childremoved", child: null };
class _t extends ii {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Hu++ }), this.uuid = pr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _t.DEFAULT_UP.clone();
    const e = new B(), t = new An(), n = new Xt(), r = new B(1, 1, 1);
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
        value: new ot()
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
    }), this.matrix = new ot(), this.matrixWorld = new ot(), this.matrixAutoUpdate = _t.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ic(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return fi.setFromAxisAngle(e, t), this.quaternion.multiply(fi), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return fi.setFromAxisAngle(e, t), this.quaternion.premultiply(fi), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Lo, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Io, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Uo, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Do.copy(e).applyQuaternion(this.quaternion), this.position.add(Do.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Lo, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Io, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Uo, e);
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
    e.isVector3 ? wr.copy(e) : wr.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Gi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pn.lookAt(Gi, wr, this.up) : pn.lookAt(wr, Gi, this.up), this.quaternion.setFromRotationMatrix(pn), r && (pn.extractRotation(r.matrixWorld), fi.setFromRotationMatrix(pn), this.quaternion.premultiply(fi.invert()));
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
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(No), pi.child = e, this.dispatchEvent(pi), pi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Gu), Ls.child = e, this.dispatchEvent(Ls), Ls.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), pn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), pn.multiply(e.parent.matrixWorld)), e.applyMatrix4(pn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(No), pi.child = e, this.dispatchEvent(pi), pi.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Gi, e, ku), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Gi, Vu, e), e;
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
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), f = o(e.shapes), u = o(e.skeletons), p = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), u.length > 0 && (n.skeletons = u), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
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
_t.DEFAULT_UP = /* @__PURE__ */ new B(0, 1, 0);
_t.DEFAULT_MATRIX_AUTO_UPDATE = !0;
_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const tn = /* @__PURE__ */ new B(), mn = /* @__PURE__ */ new B(), Is = /* @__PURE__ */ new B(), _n = /* @__PURE__ */ new B(), mi = /* @__PURE__ */ new B(), _i = /* @__PURE__ */ new B(), Fo = /* @__PURE__ */ new B(), Us = /* @__PURE__ */ new B(), Ns = /* @__PURE__ */ new B(), Fs = /* @__PURE__ */ new B(), Os = /* @__PURE__ */ new ht(), Bs = /* @__PURE__ */ new ht(), zs = /* @__PURE__ */ new ht();
class rn {
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
    r.subVectors(n, t), tn.subVectors(e, t), r.cross(tn);
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
    tn.subVectors(r, t), mn.subVectors(n, t), Is.subVectors(e, t);
    const o = tn.dot(tn), a = tn.dot(mn), l = tn.dot(Is), c = mn.dot(mn), h = mn.dot(Is), f = o * c - a * a;
    if (f === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / f, p = (c * l - a * h) * u, _ = (o * h - a * l) * u;
    return s.set(1 - p - _, _, p);
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
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return this.getBarycoord(e, t, n, r, _n) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, _n.x), l.addScaledVector(o, _n.y), l.addScaledVector(a, _n.z), l);
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
    return Os.setScalar(0), Bs.setScalar(0), zs.setScalar(0), Os.fromBufferAttribute(e, t), Bs.fromBufferAttribute(e, n), zs.fromBufferAttribute(e, r), o.setScalar(0), o.addScaledVector(Os, s.x), o.addScaledVector(Bs, s.y), o.addScaledVector(zs, s.z), o;
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
    return tn.subVectors(n, t), mn.subVectors(e, t), tn.cross(mn).dot(r) < 0;
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
    return tn.subVectors(this.c, this.b), mn.subVectors(this.a, this.b), tn.cross(mn).length() * 0.5;
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
    return rn.getNormal(this.a, this.b, this.c, e);
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
    return rn.getBarycoord(e, this.a, this.b, this.c, t);
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
    return rn.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
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
    return rn.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return rn.isFrontFacing(this.a, this.b, this.c, e);
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
    mi.subVectors(r, n), _i.subVectors(s, n), Us.subVectors(e, n);
    const l = mi.dot(Us), c = _i.dot(Us);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Ns.subVectors(e, r);
    const h = mi.dot(Ns), f = _i.dot(Ns);
    if (h >= 0 && f <= h)
      return t.copy(r);
    const u = l * f - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(n).addScaledVector(mi, o);
    Fs.subVectors(e, s);
    const p = mi.dot(Fs), _ = _i.dot(Fs);
    if (_ >= 0 && p <= _)
      return t.copy(s);
    const S = p * c - l * _;
    if (S <= 0 && c >= 0 && _ <= 0)
      return a = c / (c - _), t.copy(n).addScaledVector(_i, a);
    const m = h * _ - p * f;
    if (m <= 0 && f - h >= 0 && p - _ >= 0)
      return Fo.subVectors(s, r), a = (f - h) / (f - h + (p - _)), t.copy(r).addScaledVector(Fo, a);
    const d = 1 / (m + S + u);
    return o = S * d, a = u * d, t.copy(n).addScaledVector(mi, o).addScaledVector(_i, a);
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
const rc = {
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
}, Dn = { h: 0, s: 0, l: 0 }, Rr = { h: 0, s: 0, l: 0 };
function Hs(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ce {
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
  setHex(e, t = $t) {
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
    if (e = Au(e, 1), t = ke(t, 0, 1), n = ke(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Hs(o, s, e + 1 / 3), this.g = Hs(o, s, e), this.b = Hs(o, s, e - 1 / 3);
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
  setStyle(e, t = $t) {
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
  setColorName(e, t = $t) {
    const n = rc[e.toLowerCase()];
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
  getHex(e = $t) {
    return Ye.fromWorkingColorSpace(Tt.copy(this), e), Math.round(ke(Tt.r * 255, 0, 255)) * 65536 + Math.round(ke(Tt.g * 255, 0, 255)) * 256 + Math.round(ke(Tt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = $t) {
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
    Ye.fromWorkingColorSpace(Tt.copy(this), t);
    const n = Tt.r, r = Tt.g, s = Tt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
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
  getRGB(e, t = Ye.workingColorSpace) {
    return Ye.fromWorkingColorSpace(Tt.copy(this), t), e.r = Tt.r, e.g = Tt.g, e.b = Tt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = $t) {
    Ye.fromWorkingColorSpace(Tt.copy(this), e);
    const t = Tt.r, n = Tt.g, r = Tt.b;
    return e !== $t ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
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
    return this.getHSL(Dn), this.setHSL(Dn.h + e, Dn.s + t, Dn.l + n);
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
    this.getHSL(Dn), e.getHSL(Rr);
    const n = ys(Dn.h, Rr.h, t), r = ys(Dn.s, Rr.s, t), s = ys(Dn.l, Rr.l, t);
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
const Tt = /* @__PURE__ */ new Ce();
Ce.NAMES = rc;
let Wu = 0;
class _r extends ii {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Wu++ }), this.uuid = pr(), this.name = "", this.type = "Material", this.blending = Pi, this.side = Bn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = sa, this.blendDst = aa, this.blendEquation = $n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ce(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Li, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Eo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = oi, this.stencilZFail = oi, this.stencilZPass = oi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Pi && (n.blending = this.blending), this.side !== Bn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== sa && (n.blendSrc = this.blendSrc), this.blendDst !== aa && (n.blendDst = this.blendDst), this.blendEquation !== $n && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Li && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Eo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== oi && (n.stencilFail = this.stencilFail), this.stencilZFail !== oi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== oi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class sc extends _r {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ce(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new An(), this.combine = Vl, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const mt = /* @__PURE__ */ new B(), Cr = /* @__PURE__ */ new Ae();
let Xu = 0;
class Yt {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Xu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = yo, this.updateRanges = [], this.gpuType = sn, this.version = 0;
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
        Cr.fromBufferAttribute(this, t), Cr.applyMatrix3(e), this.setXY(t, Cr.x, Cr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
    return this.normalized && (n = Hi(n, this.array)), n;
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
    return this.normalized && (t = Hi(t, this.array)), t;
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
    return this.normalized && (t = Hi(t, this.array)), t;
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
    return this.normalized && (t = Hi(t, this.array)), t;
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
    return this.normalized && (t = Hi(t, this.array)), t;
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
    return this.name !== "" && (e.name = this.name), this.usage !== yo && (e.usage = this.usage), e;
  }
}
class ac extends Yt {
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
class oc extends Yt {
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
class an extends Yt {
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
let Yu = 0;
const jt = /* @__PURE__ */ new ot(), ks = /* @__PURE__ */ new _t(), gi = /* @__PURE__ */ new B(), Vt = /* @__PURE__ */ new mr(), Wi = /* @__PURE__ */ new mr(), xt = /* @__PURE__ */ new B();
class on extends ii {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Yu++ }), this.uuid = pr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(e) ? this.index = new (ec(e) ? oc : ac)(e, 1) : this.index = e, this;
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
    return jt.makeRotationFromQuaternion(e), this.applyMatrix4(jt), this;
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
    return jt.makeRotationX(e), this.applyMatrix4(jt), this;
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
    return jt.makeRotationY(e), this.applyMatrix4(jt), this;
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
    return jt.makeRotationZ(e), this.applyMatrix4(jt), this;
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
    return jt.makeTranslation(e, t, n), this.applyMatrix4(jt), this;
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
    return jt.makeScale(e, t, n), this.applyMatrix4(jt), this;
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
    return this.computeBoundingBox(), this.boundingBox.getCenter(gi).negate(), this.translate(gi.x, gi.y, gi.z), this;
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
    this.boundingBox === null && (this.boundingBox = new mr());
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
          Vt.setFromBufferAttribute(s), this.morphTargetsRelative ? (xt.addVectors(this.boundingBox.min, Vt.min), this.boundingBox.expandByPoint(xt), xt.addVectors(this.boundingBox.max, Vt.max), this.boundingBox.expandByPoint(xt)) : (this.boundingBox.expandByPoint(Vt.min), this.boundingBox.expandByPoint(Vt.max));
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
    this.boundingSphere === null && (this.boundingSphere = new gs());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Vt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Wi.setFromBufferAttribute(a), this.morphTargetsRelative ? (xt.addVectors(Vt.min, Wi.min), Vt.expandByPoint(xt), xt.addVectors(Vt.max, Wi.max), Vt.expandByPoint(xt)) : (Vt.expandByPoint(Wi.min), Vt.expandByPoint(Wi.max));
        }
      Vt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        xt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(xt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            xt.fromBufferAttribute(a, c), l && (gi.fromBufferAttribute(e, c), xt.add(gi)), r = Math.max(r, n.distanceToSquared(xt));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Yt(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let b = 0; b < n.count; b++)
      a[b] = new B(), l[b] = new B();
    const c = new B(), h = new B(), f = new B(), u = new Ae(), p = new Ae(), _ = new Ae(), S = new B(), m = new B();
    function d(b, v, g) {
      c.fromBufferAttribute(n, b), h.fromBufferAttribute(n, v), f.fromBufferAttribute(n, g), u.fromBufferAttribute(s, b), p.fromBufferAttribute(s, v), _.fromBufferAttribute(s, g), h.sub(c), f.sub(c), p.sub(u), _.sub(u);
      const A = 1 / (p.x * _.y - _.x * p.y);
      isFinite(A) && (S.copy(h).multiplyScalar(_.y).addScaledVector(f, -p.y).multiplyScalar(A), m.copy(f).multiplyScalar(p.x).addScaledVector(h, -_.x).multiplyScalar(A), a[b].add(S), a[v].add(S), a[g].add(S), l[b].add(m), l[v].add(m), l[g].add(m));
    }
    let P = this.groups;
    P.length === 0 && (P = [{
      start: 0,
      count: e.count
    }]);
    for (let b = 0, v = P.length; b < v; ++b) {
      const g = P[b], A = g.start, U = g.count;
      for (let N = A, H = A + U; N < H; N += 3)
        d(
          e.getX(N + 0),
          e.getX(N + 1),
          e.getX(N + 2)
        );
    }
    const R = new B(), E = new B(), I = new B(), C = new B();
    function y(b) {
      I.fromBufferAttribute(r, b), C.copy(I);
      const v = a[b];
      R.copy(v), R.sub(I.multiplyScalar(I.dot(v))).normalize(), E.crossVectors(C, v);
      const A = E.dot(l[b]) < 0 ? -1 : 1;
      o.setXYZW(b, R.x, R.y, R.z, A);
    }
    for (let b = 0, v = P.length; b < v; ++b) {
      const g = P[b], A = g.start, U = g.count;
      for (let N = A, H = A + U; N < H; N += 3)
        y(e.getX(N + 0)), y(e.getX(N + 1)), y(e.getX(N + 2));
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
        n = new Yt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, p = n.count; u < p; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new B(), s = new B(), o = new B(), a = new B(), l = new B(), c = new B(), h = new B(), f = new B();
      if (e)
        for (let u = 0, p = e.count; u < p; u += 3) {
          const _ = e.getX(u + 0), S = e.getX(u + 1), m = e.getX(u + 2);
          r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, S), o.fromBufferAttribute(t, m), h.subVectors(o, s), f.subVectors(r, s), h.cross(f), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, S), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(S, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let u = 0, p = t.count; u < p; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), o.fromBufferAttribute(t, u + 2), h.subVectors(o, s), f.subVectors(r, s), h.cross(f), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
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
      const c = a.array, h = a.itemSize, f = a.normalized, u = new c.constructor(l.length * h);
      let p = 0, _ = 0;
      for (let S = 0, m = l.length; S < m; S++) {
        a.isInterleavedBufferAttribute ? p = l[S] * a.data.stride + a.offset : p = l[S] * h;
        for (let d = 0; d < h; d++)
          u[_++] = c[p++];
      }
      return new Yt(u, h, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new on(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let h = 0, f = c.length; h < f; h++) {
        const u = c[h], p = e(u, n);
        l.push(p);
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
      for (let f = 0, u = c.length; f < u; f++) {
        const p = c[f];
        h.push(p.toJSON(e.data));
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
      for (let u = 0, p = f.length; u < p; u++)
        h.push(f[u].clone(t));
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
const Oo = /* @__PURE__ */ new ot(), Gn = /* @__PURE__ */ new nc(), Pr = /* @__PURE__ */ new gs(), Bo = /* @__PURE__ */ new B(), Dr = /* @__PURE__ */ new B(), Lr = /* @__PURE__ */ new B(), Ir = /* @__PURE__ */ new B(), Vs = /* @__PURE__ */ new B(), Ur = /* @__PURE__ */ new B(), zo = /* @__PURE__ */ new B(), Nr = /* @__PURE__ */ new B();
class Ot extends _t {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new on(), t = new sc()) {
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
      Ur.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l], f = s[l];
        h !== 0 && (Vs.fromBufferAttribute(f, e), o ? Ur.addScaledVector(Vs, h) : Ur.addScaledVector(Vs.sub(t), h));
      }
      t.add(Ur);
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
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Pr.copy(n.boundingSphere), Pr.applyMatrix4(s), Gn.copy(e.ray).recast(e.near), !(Pr.containsPoint(Gn.origin) === !1 && (Gn.intersectSphere(Pr, Bo) === null || Gn.origin.distanceToSquared(Bo) > (e.far - e.near) ** 2)) && (Oo.copy(s).invert(), Gn.copy(e.ray).applyMatrix4(Oo), !(n.boundingBox !== null && Gn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Gn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, f = s.attributes.normal, u = s.groups, p = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, S = u.length; _ < S; _++) {
          const m = u[_], d = o[m.materialIndex], P = Math.max(m.start, p.start), R = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = P, I = R; E < I; E += 3) {
            const C = a.getX(E), y = a.getX(E + 1), b = a.getX(E + 2);
            r = Fr(this, d, e, n, c, h, f, C, y, b), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, p.start), S = Math.min(a.count, p.start + p.count);
        for (let m = _, d = S; m < d; m += 3) {
          const P = a.getX(m), R = a.getX(m + 1), E = a.getX(m + 2);
          r = Fr(this, o, e, n, c, h, f, P, R, E), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, S = u.length; _ < S; _++) {
          const m = u[_], d = o[m.materialIndex], P = Math.max(m.start, p.start), R = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = P, I = R; E < I; E += 3) {
            const C = E, y = E + 1, b = E + 2;
            r = Fr(this, d, e, n, c, h, f, C, y, b), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, p.start), S = Math.min(l.count, p.start + p.count);
        for (let m = _, d = S; m < d; m += 3) {
          const P = m, R = m + 1, E = m + 2;
          r = Fr(this, o, e, n, c, h, f, P, R, E), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
  }
}
function qu(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === Bt ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, e.side === Bn, a), l === null) return null;
  Nr.copy(a), Nr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Nr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Nr.clone(),
    object: i
  };
}
function Fr(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Dr), i.getVertexPosition(l, Lr), i.getVertexPosition(c, Ir);
  const h = qu(i, e, t, n, Dr, Lr, Ir, zo);
  if (h) {
    const f = new B();
    rn.getBarycoord(zo, Dr, Lr, Ir, f), r && (h.uv = rn.getInterpolatedAttribute(r, a, l, c, f, new Ae())), s && (h.uv1 = rn.getInterpolatedAttribute(s, a, l, c, f, new Ae())), o && (h.normal = rn.getInterpolatedAttribute(o, a, l, c, f, new B()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: l,
      c,
      normal: new B(),
      materialIndex: 0
    };
    rn.getNormal(Dr, Lr, Ir, u.normal), h.face = u, h.barycoord = f;
  }
  return h;
}
class gr extends on {
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
    let u = 0, p = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, r, o, 2), _("x", "z", "y", 1, -1, e, n, -t, r, o, 3), _("x", "y", "z", 1, -1, e, t, n, r, s, 4), _("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new an(c, 3)), this.setAttribute("normal", new an(h, 3)), this.setAttribute("uv", new an(f, 2));
    function _(S, m, d, P, R, E, I, C, y, b, v) {
      const g = E / y, A = I / b, U = E / 2, N = I / 2, H = C / 2, Z = y + 1, G = b + 1;
      let ne = 0, W = 0;
      const oe = new B();
      for (let pe = 0; pe < G; pe++) {
        const Se = pe * A - N;
        for (let Oe = 0; Oe < Z; Oe++) {
          const Ze = Oe * g - U;
          oe[S] = Ze * P, oe[m] = Se * R, oe[d] = H, c.push(oe.x, oe.y, oe.z), oe[S] = 0, oe[m] = 0, oe[d] = C > 0 ? 1 : -1, h.push(oe.x, oe.y, oe.z), f.push(Oe / y), f.push(1 - pe / b), ne += 1;
        }
      }
      for (let pe = 0; pe < b; pe++)
        for (let Se = 0; Se < y; Se++) {
          const Oe = u + Se + Z * pe, Ze = u + Se + Z * (pe + 1), Y = u + (Se + 1) + Z * (pe + 1), re = u + (Se + 1) + Z * pe;
          l.push(Oe, Ze, re), l.push(Ze, Y, re), W += 6;
        }
      a.addGroup(p, W, v), p += W, u += ne;
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
    return new gr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
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
function Pt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Fi(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Zu(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function lc(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ye.workingColorSpace;
}
const cs = { clone: Fi, merge: Pt };
var ju = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, $u = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class At extends _r {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ju, this.fragmentShader = $u, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Fi(e.uniforms), this.uniformsGroups = Zu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class io extends _t {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ot(), this.projectionMatrix = new ot(), this.projectionMatrixInverse = new ot(), this.coordinateSystem = un;
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
const Ln = /* @__PURE__ */ new B(), Ho = /* @__PURE__ */ new Ae(), ko = /* @__PURE__ */ new Ae();
class nn extends io {
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
    this.fov = Ga * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Es * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Ga * 2 * Math.atan(
      Math.tan(Es * 0.5 * this.fov) / this.zoom
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
    Ln.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Ln.x, Ln.y).multiplyScalar(-e / Ln.z), Ln.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Ln.x, Ln.y).multiplyScalar(-e / Ln.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Ho, ko), t.subVectors(ko, Ho);
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
    let t = e * Math.tan(Es * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
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
const vi = -90, xi = 1;
class Ku extends _t {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new nn(vi, xi, e, t);
    r.layers = this.layers, this.add(r);
    const s = new nn(vi, xi, e, t);
    s.layers = this.layers, this.add(s);
    const o = new nn(vi, xi, e, t);
    o.layers = this.layers, this.add(o);
    const a = new nn(vi, xi, e, t);
    a.layers = this.layers, this.add(a);
    const l = new nn(vi, xi, e, t);
    l.layers = this.layers, this.add(l);
    const c = new nn(vi, xi, e, t);
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
    else if (e === ls)
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
    const [s, o, a, l, c, h] = this.children, f = e.getRenderTarget(), u = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(f, u, p), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class cc extends wt {
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
  constructor(e = [], t = Ii, n, r, s, o, a, l, c, h) {
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
class Ju extends ni {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new cc(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Gt;
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
    }, r = new gr(5, 5, 5), s = new At({
      name: "CubemapFromEquirect",
      uniforms: Fi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Bt,
      blending: Fn
    });
    s.uniforms.tEquirect.value = t;
    const o = new Ot(r, s), a = t.minFilter;
    return t.minFilter === ei && (t.minFilter = Gt), new Ku(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
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
class Or extends _t {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Qu = { type: "move" };
class Gs {
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
    return this._hand === null && (this._hand = new Or(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Or(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Or(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B()), this._grip;
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
        for (const S of e.hand.values()) {
          const m = t.getJointPose(S, n), d = this._getHandJoint(c, S);
          m !== null && (d.matrix.fromArray(m.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = m.radius), d.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], u = h.position.distanceTo(f.position), p = 0.02, _ = 5e-3;
        c.inputState.pinching && u > p + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && u <= p - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Qu)));
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
      const n = new Or();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class eh extends _t {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new An(), this.environmentIntensity = 1, this.environmentRotation = new An(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class us extends wt {
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
  constructor(e = null, t = 1, n = 1, r, s, o, a, l, c = zt, h = zt, f, u) {
    super(null, o, a, l, c, h, r, s, f, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class hs extends Yt {
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
const Ws = /* @__PURE__ */ new B(), th = /* @__PURE__ */ new B(), nh = /* @__PURE__ */ new Fe();
class Zn {
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
    const r = Ws.subVectors(n, t).cross(th.subVectors(e, t)).normalize();
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
    const n = e.delta(Ws), r = this.normal.dot(n);
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
    const n = t || nh.getNormalMatrix(e), r = this.coplanarPoint(Ws).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Wn = /* @__PURE__ */ new gs(), Br = /* @__PURE__ */ new B();
class ro {
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
  constructor(e = new Zn(), t = new Zn(), n = new Zn(), r = new Zn(), s = new Zn(), o = new Zn()) {
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
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], h = r[5], f = r[6], u = r[7], p = r[8], _ = r[9], S = r[10], m = r[11], d = r[12], P = r[13], R = r[14], E = r[15];
    if (n[0].setComponents(l - s, u - c, m - p, E - d).normalize(), n[1].setComponents(l + s, u + c, m + p, E + d).normalize(), n[2].setComponents(l + o, u + h, m + _, E + P).normalize(), n[3].setComponents(l - o, u - h, m - _, E - P).normalize(), n[4].setComponents(l - a, u - f, m - S, E - R).normalize(), t === un)
      n[5].setComponents(l + a, u + f, m + S, E + R).normalize();
    else if (t === ls)
      n[5].setComponents(a, f, S, R).normalize();
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
      e.boundingSphere === null && e.computeBoundingSphere(), Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Wn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    return Wn.center.set(0, 0, 0), Wn.radius = 0.7071067811865476, Wn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Wn);
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
      if (Br.x = r.normal.x > 0 ? e.max.x : e.min.x, Br.y = r.normal.y > 0 ? e.max.y : e.min.y, Br.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Br) < 0)
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
class uc extends _r {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ce(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const ds = /* @__PURE__ */ new B(), fs = /* @__PURE__ */ new B(), Vo = /* @__PURE__ */ new ot(), Xi = /* @__PURE__ */ new nc(), zr = /* @__PURE__ */ new gs(), Xs = /* @__PURE__ */ new B(), Go = /* @__PURE__ */ new B();
class ih extends _t {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new on(), t = new uc()) {
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
        ds.fromBufferAttribute(t, r - 1), fs.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += ds.distanceTo(fs);
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), zr.copy(n.boundingSphere), zr.applyMatrix4(r), zr.radius += s, e.ray.intersectsSphere(zr) === !1) return;
    Vo.copy(r).invert(), Xi.copy(e.ray).applyMatrix4(Vo);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, u = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, o.start), _ = Math.min(h.count, o.start + o.count);
      for (let S = p, m = _ - 1; S < m; S += c) {
        const d = h.getX(S), P = h.getX(S + 1), R = Hr(this, e, Xi, l, d, P, S);
        R && t.push(R);
      }
      if (this.isLineLoop) {
        const S = h.getX(_ - 1), m = h.getX(p), d = Hr(this, e, Xi, l, S, m, _ - 1);
        d && t.push(d);
      }
    } else {
      const p = Math.max(0, o.start), _ = Math.min(u.count, o.start + o.count);
      for (let S = p, m = _ - 1; S < m; S += c) {
        const d = Hr(this, e, Xi, l, S, S + 1, S);
        d && t.push(d);
      }
      if (this.isLineLoop) {
        const S = Hr(this, e, Xi, l, _ - 1, p, _ - 1);
        S && t.push(S);
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
function Hr(i, e, t, n, r, s, o) {
  const a = i.geometry.attributes.position;
  if (ds.fromBufferAttribute(a, r), fs.fromBufferAttribute(a, s), t.distanceSqToSegment(ds, fs, Xs, Go) > n) return;
  Xs.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(Xs);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Go.clone().applyMatrix4(i.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Wo = /* @__PURE__ */ new B(), Xo = /* @__PURE__ */ new B();
class rh extends ih {
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
        Wo.fromBufferAttribute(t, r), Xo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Wo.distanceTo(Xo);
      e.setAttribute("lineDistance", new an(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class hc extends wt {
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
  constructor(e, t, n = ti, r, s, o, a = zt, l = zt, c, h = lr) {
    if (h !== lr && h !== cr)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, r, s, o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new no(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Oi extends on {
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
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, h = l + 1, f = e / a, u = t / l, p = [], _ = [], S = [], m = [];
    for (let d = 0; d < h; d++) {
      const P = d * u - o;
      for (let R = 0; R < c; R++) {
        const E = R * f - s;
        _.push(E, -P, 0), S.push(0, 0, 1), m.push(R / a), m.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let P = 0; P < a; P++) {
        const R = P + c * d, E = P + c * (d + 1), I = P + 1 + c * (d + 1), C = P + 1 + c * d;
        p.push(R, E, C), p.push(E, I, C);
      }
    this.setIndex(p), this.setAttribute("position", new an(_, 3)), this.setAttribute("normal", new an(S, 3)), this.setAttribute("uv", new an(m, 2));
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
class sh extends _r {
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
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = pu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class ah extends _r {
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
const Yo = {
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
class oh {
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
      for (let f = 0, u = c.length; f < u; f += 2) {
        const p = c[f], _ = c[f + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return _;
      }
      return null;
    };
  }
}
const lh = /* @__PURE__ */ new oh();
let so = class {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : lh, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
so.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class ch extends so {
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
    const s = this, o = Yo.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = ur("img");
    function l() {
      h(), Yo.add(e, this), t && t(this), s.manager.itemEnd(e);
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
class uh extends so {
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
    const s = new wt(), o = new ch(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class hh extends _t {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ce(e), this.intensity = t;
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
const Ys = /* @__PURE__ */ new ot(), qo = /* @__PURE__ */ new B(), Zo = /* @__PURE__ */ new B();
class dh {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ae(512, 512), this.map = null, this.mapPass = null, this.matrix = new ot(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ro(), this._frameExtents = new Ae(1, 1), this._viewportCount = 1, this._viewports = [
      new ht(0, 0, 1, 1)
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
    qo.setFromMatrixPosition(e.matrixWorld), t.position.copy(qo), Zo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Zo), t.updateMatrixWorld(), Ys.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ys), n.set(
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
    ), n.multiply(Ys);
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
class ao extends io {
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
class fh extends dh {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new ao(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ph extends hh {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.shadow = new fh();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class oo extends on {
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
class mh extends nn {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e, this.index = 0;
  }
}
class jo {
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
    return this.phi = ke(this.phi, 1e-6, Math.PI - 1e-6), this;
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
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ke(t / this.radius, -1, 1))), this;
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
const kr = /* @__PURE__ */ new B(), ut = /* @__PURE__ */ new io();
class _h extends rh {
  /**
   * Constructs a new arrow helper.
   *
   * @param {Camera} camera - The camera to visualize.
   */
  constructor(e) {
    const t = new on(), n = new uc({ color: 16777215, vertexColors: !0, toneMapped: !1 }), r = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(_, S) {
      l(_), l(S);
    }
    function l(_) {
      r.push(0, 0, 0), s.push(0, 0, 0), o[_] === void 0 && (o[_] = []), o[_].push(r.length / 3 - 1);
    }
    t.setAttribute("position", new an(r, 3)), t.setAttribute("color", new an(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    const c = new Ce(16755200), h = new Ce(16711680), f = new Ce(43775), u = new Ce(16777215), p = new Ce(3355443);
    this.setColors(c, h, f, u, p);
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
    ut.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    const s = this.camera.coordinateSystem === un ? -1 : 0;
    dt("c", t, e, ut, 0, 0, s), dt("t", t, e, ut, 0, 0, 1), dt("n1", t, e, ut, -1, -1, s), dt("n2", t, e, ut, n, -1, s), dt("n3", t, e, ut, -1, r, s), dt("n4", t, e, ut, n, r, s), dt("f1", t, e, ut, -1, -1, 1), dt("f2", t, e, ut, n, -1, 1), dt("f3", t, e, ut, -1, r, 1), dt("f4", t, e, ut, n, r, 1), dt("u1", t, e, ut, n * 0.7, r * 1.1, s), dt("u2", t, e, ut, -1 * 0.7, r * 1.1, s), dt("u3", t, e, ut, 0, r * 2, s), dt("cf1", t, e, ut, -1, 0, 1), dt("cf2", t, e, ut, n, 0, 1), dt("cf3", t, e, ut, 0, -1, 1), dt("cf4", t, e, ut, 0, r, 1), dt("cn1", t, e, ut, -1, 0, s), dt("cn2", t, e, ut, n, 0, s), dt("cn3", t, e, ut, 0, -1, s), dt("cn4", t, e, ut, 0, r, s), e.getAttribute("position").needsUpdate = !0;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function dt(i, e, t, n, r, s, o) {
  kr.set(r, s, o).unproject(n);
  const a = e[i];
  if (a !== void 0) {
    const l = t.getAttribute("position");
    for (let c = 0, h = a.length; c < h; c++)
      l.setXYZ(a[c], kr.x, kr.y, kr.z);
  }
}
function $o(i, e, t, n) {
  const r = gh(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Yl:
      return i * e;
    case Zl:
      return i * e;
    case jl:
      return i * e * 2;
    case $l:
      return i * e / r.components * r.byteLength;
    case Qa:
      return i * e / r.components * r.byteLength;
    case Kl:
      return i * e * 2 / r.components * r.byteLength;
    case eo:
      return i * e * 2 / r.components * r.byteLength;
    case ql:
      return i * e * 3 / r.components * r.byteLength;
    case Wt:
      return i * e * 4 / r.components * r.byteLength;
    case to:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Jr:
    case Qr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case es:
    case ts:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case va:
    case Sa:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case ga:
    case xa:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Ma:
    case Ea:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ya:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Ta:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ba:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Aa:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case wa:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ra:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ca:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Pa:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Da:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case La:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Ia:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ua:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Na:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Fa:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Oa:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case ns:
    case Ba:
    case za:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Jl:
    case Ha:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case ka:
    case Va:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function gh(i) {
  switch (i) {
    case bn:
    case Gl:
      return { byteLength: 1, components: 1 };
    case ar:
    case Wl:
    case fr:
      return { byteLength: 2, components: 1 };
    case Ka:
    case Ja:
      return { byteLength: 2, components: 4 };
    case ti:
    case $a:
    case sn:
      return { byteLength: 4, components: 1 };
    case Xl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: qa
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = qa);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function dc() {
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
function vh(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, h = a.usage, f = c.byteLength, u = i.createBuffer();
    i.bindBuffer(l, u), i.bufferData(l, c, h), a.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = i.FLOAT;
    else if (c instanceof Uint16Array)
      a.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = i.SHORT;
    else if (c instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = i.INT;
    else if (c instanceof Int8Array)
      p = i.BYTE;
    else if (c instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: u,
      type: p,
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
      f.sort((p, _) => p.start - _.start);
      let u = 0;
      for (let p = 1; p < f.length; p++) {
        const _ = f[u], S = f[p];
        S.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          S.start + S.count - _.start
        ) : (++u, f[u] = S);
      }
      f.length = u + 1;
      for (let p = 0, _ = f.length; p < _; p++) {
        const S = f[p];
        i.bufferSubData(
          c,
          S.start * h.BYTES_PER_ELEMENT,
          h,
          S.start,
          S.count
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
var xh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Sh = `#ifdef USE_ALPHAHASH
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
#endif`, Mh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Eh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Th = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, bh = `#ifdef USE_AOMAP
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
#endif`, Ah = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, wh = `#ifdef USE_BATCHING
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
#endif`, Rh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ch = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Ph = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Dh = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Lh = `#ifdef USE_IRIDESCENCE
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
#endif`, Ih = `#ifdef USE_BUMPMAP
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
#endif`, Uh = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Nh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Fh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Oh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Bh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, zh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Hh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, kh = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Vh = `#define PI 3.141592653589793
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
} // validated`, Gh = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Wh = `vec3 transformedNormal = objectNormal;
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
#endif`, Xh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Yh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, qh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Zh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, jh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", $h = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Kh = `#ifdef USE_ENVMAP
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
#endif`, Jh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Qh = `#ifdef USE_ENVMAP
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
#endif`, ed = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, td = `#ifdef USE_ENVMAP
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
#endif`, nd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, id = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, rd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, sd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, ad = `#ifdef USE_GRADIENTMAP
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
}`, od = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ld = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, cd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ud = `uniform bool receiveShadow;
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
#endif`, hd = `#ifdef USE_ENVMAP
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
#endif`, dd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, fd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, pd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, md = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, _d = `PhysicalMaterial material;
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
#endif`, gd = `struct PhysicalMaterial {
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
}`, vd = `
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
#endif`, xd = `#if defined( RE_IndirectDiffuse )
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
#endif`, Sd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Md = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ed = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, yd = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Td = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, bd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ad = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, wd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Rd = `#if defined( USE_POINTS_UV )
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
#endif`, Cd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Pd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Dd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Ld = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Id = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ud = `#ifdef USE_MORPHTARGETS
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
#endif`, Nd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Fd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Od = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Bd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, zd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, kd = `#ifdef USE_NORMALMAP
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
#endif`, Vd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Gd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Wd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Xd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Yd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, qd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Zd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, jd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, $d = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Kd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Jd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Qd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ef = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, tf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, nf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, rf = `float getShadowMask() {
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
}`, sf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, af = `#ifdef USE_SKINNING
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
#endif`, of = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, lf = `#ifdef USE_SKINNING
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
#endif`, cf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, uf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, hf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, df = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, ff = `#ifdef USE_TRANSMISSION
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
#endif`, pf = `#ifdef USE_TRANSMISSION
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
#endif`, mf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, _f = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, gf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, vf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Sf = `uniform sampler2D t2D;
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
}`, Mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ef = `#ifdef ENVMAP_TYPE_CUBE
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
}`, yf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Tf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bf = `#include <common>
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
}`, Af = `#if DEPTH_PACKING == 3200
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
}`, wf = `#define DISTANCE
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
}`, Rf = `#define DISTANCE
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
}`, Cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Pf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Df = `uniform float scale;
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
}`, Lf = `uniform vec3 diffuse;
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
}`, If = `#include <common>
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
}`, Uf = `uniform vec3 diffuse;
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
}`, Nf = `#define LAMBERT
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
}`, Ff = `#define LAMBERT
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
}`, Of = `#define MATCAP
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
}`, Bf = `#define MATCAP
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
}`, zf = `#define NORMAL
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
}`, Hf = `#define NORMAL
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
}`, kf = `#define PHONG
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
}`, Vf = `#define PHONG
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
}`, Gf = `#define STANDARD
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
}`, Wf = `#define STANDARD
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
}`, Xf = `#define TOON
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
}`, Yf = `#define TOON
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
}`, qf = `uniform float size;
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
}`, Zf = `uniform vec3 diffuse;
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
}`, jf = `#include <common>
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
}`, $f = `uniform vec3 color;
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
}`, Kf = `uniform float rotation;
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
}`, Jf = `uniform vec3 diffuse;
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
  alphahash_fragment: xh,
  alphahash_pars_fragment: Sh,
  alphamap_fragment: Mh,
  alphamap_pars_fragment: Eh,
  alphatest_fragment: yh,
  alphatest_pars_fragment: Th,
  aomap_fragment: bh,
  aomap_pars_fragment: Ah,
  batching_pars_vertex: wh,
  batching_vertex: Rh,
  begin_vertex: Ch,
  beginnormal_vertex: Ph,
  bsdfs: Dh,
  iridescence_fragment: Lh,
  bumpmap_pars_fragment: Ih,
  clipping_planes_fragment: Uh,
  clipping_planes_pars_fragment: Nh,
  clipping_planes_pars_vertex: Fh,
  clipping_planes_vertex: Oh,
  color_fragment: Bh,
  color_pars_fragment: zh,
  color_pars_vertex: Hh,
  color_vertex: kh,
  common: Vh,
  cube_uv_reflection_fragment: Gh,
  defaultnormal_vertex: Wh,
  displacementmap_pars_vertex: Xh,
  displacementmap_vertex: Yh,
  emissivemap_fragment: qh,
  emissivemap_pars_fragment: Zh,
  colorspace_fragment: jh,
  colorspace_pars_fragment: $h,
  envmap_fragment: Kh,
  envmap_common_pars_fragment: Jh,
  envmap_pars_fragment: Qh,
  envmap_pars_vertex: ed,
  envmap_physical_pars_fragment: hd,
  envmap_vertex: td,
  fog_vertex: nd,
  fog_pars_vertex: id,
  fog_fragment: rd,
  fog_pars_fragment: sd,
  gradientmap_pars_fragment: ad,
  lightmap_pars_fragment: od,
  lights_lambert_fragment: ld,
  lights_lambert_pars_fragment: cd,
  lights_pars_begin: ud,
  lights_toon_fragment: dd,
  lights_toon_pars_fragment: fd,
  lights_phong_fragment: pd,
  lights_phong_pars_fragment: md,
  lights_physical_fragment: _d,
  lights_physical_pars_fragment: gd,
  lights_fragment_begin: vd,
  lights_fragment_maps: xd,
  lights_fragment_end: Sd,
  logdepthbuf_fragment: Md,
  logdepthbuf_pars_fragment: Ed,
  logdepthbuf_pars_vertex: yd,
  logdepthbuf_vertex: Td,
  map_fragment: bd,
  map_pars_fragment: Ad,
  map_particle_fragment: wd,
  map_particle_pars_fragment: Rd,
  metalnessmap_fragment: Cd,
  metalnessmap_pars_fragment: Pd,
  morphinstance_vertex: Dd,
  morphcolor_vertex: Ld,
  morphnormal_vertex: Id,
  morphtarget_pars_vertex: Ud,
  morphtarget_vertex: Nd,
  normal_fragment_begin: Fd,
  normal_fragment_maps: Od,
  normal_pars_fragment: Bd,
  normal_pars_vertex: zd,
  normal_vertex: Hd,
  normalmap_pars_fragment: kd,
  clearcoat_normal_fragment_begin: Vd,
  clearcoat_normal_fragment_maps: Gd,
  clearcoat_pars_fragment: Wd,
  iridescence_pars_fragment: Xd,
  opaque_fragment: Yd,
  packing: qd,
  premultiplied_alpha_fragment: Zd,
  project_vertex: jd,
  dithering_fragment: $d,
  dithering_pars_fragment: Kd,
  roughnessmap_fragment: Jd,
  roughnessmap_pars_fragment: Qd,
  shadowmap_pars_fragment: ef,
  shadowmap_pars_vertex: tf,
  shadowmap_vertex: nf,
  shadowmask_pars_fragment: rf,
  skinbase_vertex: sf,
  skinning_pars_vertex: af,
  skinning_vertex: of,
  skinnormal_vertex: lf,
  specularmap_fragment: cf,
  specularmap_pars_fragment: uf,
  tonemapping_fragment: hf,
  tonemapping_pars_fragment: df,
  transmission_fragment: ff,
  transmission_pars_fragment: pf,
  uv_pars_fragment: mf,
  uv_pars_vertex: _f,
  uv_vertex: gf,
  worldpos_vertex: vf,
  background_vert: xf,
  background_frag: Sf,
  backgroundCube_vert: Mf,
  backgroundCube_frag: Ef,
  cube_vert: yf,
  cube_frag: Tf,
  depth_vert: bf,
  depth_frag: Af,
  distanceRGBA_vert: wf,
  distanceRGBA_frag: Rf,
  equirect_vert: Cf,
  equirect_frag: Pf,
  linedashed_vert: Df,
  linedashed_frag: Lf,
  meshbasic_vert: If,
  meshbasic_frag: Uf,
  meshlambert_vert: Nf,
  meshlambert_frag: Ff,
  meshmatcap_vert: Of,
  meshmatcap_frag: Bf,
  meshnormal_vert: zf,
  meshnormal_frag: Hf,
  meshphong_vert: kf,
  meshphong_frag: Vf,
  meshphysical_vert: Gf,
  meshphysical_frag: Wf,
  meshtoon_vert: Xf,
  meshtoon_frag: Yf,
  points_vert: qf,
  points_frag: Zf,
  shadow_vert: jf,
  shadow_frag: $f,
  sprite_vert: Kf,
  sprite_frag: Jf
}, se = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ce(16777215) },
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
    normalScale: { value: /* @__PURE__ */ new Ae(1, 1) }
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
    fogColor: { value: /* @__PURE__ */ new Ce(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Ce(16777215) },
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
    diffuse: { value: /* @__PURE__ */ new Ce(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ae(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  }
}, cn = {
  basic: {
    uniforms: /* @__PURE__ */ Pt([
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
    uniforms: /* @__PURE__ */ Pt([
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
        emissive: { value: /* @__PURE__ */ new Ce(0) }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Pt([
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
        emissive: { value: /* @__PURE__ */ new Ce(0) },
        specular: { value: /* @__PURE__ */ new Ce(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Pt([
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
        emissive: { value: /* @__PURE__ */ new Ce(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Pt([
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
        emissive: { value: /* @__PURE__ */ new Ce(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Pt([
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
    uniforms: /* @__PURE__ */ Pt([
      se.points,
      se.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Pt([
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
    uniforms: /* @__PURE__ */ Pt([
      se.common,
      se.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Pt([
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
    uniforms: /* @__PURE__ */ Pt([
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
    uniforms: /* @__PURE__ */ Pt([
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
    uniforms: /* @__PURE__ */ Pt([
      se.lights,
      se.fog,
      {
        color: { value: /* @__PURE__ */ new Ce(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
cn.physical = {
  uniforms: /* @__PURE__ */ Pt([
    cn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ae(1, 1) },
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
      sheenColor: { value: /* @__PURE__ */ new Ce(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ae() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ce(0) },
      specularColor: { value: /* @__PURE__ */ new Ce(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Fe() },
      anisotropyVector: { value: /* @__PURE__ */ new Ae() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Fe() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const Vr = { r: 0, b: 0, g: 0 }, Xn = /* @__PURE__ */ new An(), Qf = /* @__PURE__ */ new ot();
function ep(i, e, t, n, r, s, o) {
  const a = new Ce(0);
  let l = s === !0 ? 0 : 1, c, h, f = null, u = 0, p = null;
  function _(R) {
    let E = R.isScene === !0 ? R.background : null;
    return E && E.isTexture && (E = (R.backgroundBlurriness > 0 ? t : e).get(E)), E;
  }
  function S(R) {
    let E = !1;
    const I = _(R);
    I === null ? d(a, l) : I && I.isColor && (d(I, 1), E = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || E) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(R, E) {
    const I = _(E);
    I && (I.isCubeTexture || I.mapping === _s) ? (h === void 0 && (h = new Ot(
      new gr(1, 1, 1),
      new At({
        name: "BackgroundCubeMaterial",
        uniforms: Fi(cn.backgroundCube.uniforms),
        vertexShader: cn.backgroundCube.vertexShader,
        fragmentShader: cn.backgroundCube.fragmentShader,
        side: Bt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, y, b) {
      this.matrixWorld.copyPosition(b.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), Xn.copy(E.backgroundRotation), Xn.x *= -1, Xn.y *= -1, Xn.z *= -1, I.isCubeTexture && I.isRenderTargetTexture === !1 && (Xn.y *= -1, Xn.z *= -1), h.material.uniforms.envMap.value = I, h.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(Xn)), h.material.toneMapped = Ye.getTransfer(I.colorSpace) !== Je, (f !== I || u !== I.version || p !== i.toneMapping) && (h.material.needsUpdate = !0, f = I, u = I.version, p = i.toneMapping), h.layers.enableAll(), R.unshift(h, h.geometry, h.material, 0, 0, null)) : I && I.isTexture && (c === void 0 && (c = new Ot(
      new Oi(2, 2),
      new At({
        name: "BackgroundMaterial",
        uniforms: Fi(cn.background.uniforms),
        vertexShader: cn.background.vertexShader,
        fragmentShader: cn.background.fragmentShader,
        side: Bn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = I, c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, c.material.toneMapped = Ye.getTransfer(I.colorSpace) !== Je, I.matrixAutoUpdate === !0 && I.updateMatrix(), c.material.uniforms.uvTransform.value.copy(I.matrix), (f !== I || u !== I.version || p !== i.toneMapping) && (c.material.needsUpdate = !0, f = I, u = I.version, p = i.toneMapping), c.layers.enableAll(), R.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(R, E) {
    R.getRGB(Vr, lc(i)), n.buffers.color.setClear(Vr.r, Vr.g, Vr.b, E, o);
  }
  function P() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(R, E = 1) {
      a.set(R), l = E, d(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(R) {
      l = R, d(a, l);
    },
    render: S,
    addToRenderList: m,
    dispose: P
  };
}
function tp(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, o = !1;
  function a(g, A, U, N, H) {
    let Z = !1;
    const G = f(N, U, A);
    s !== G && (s = G, c(s.object)), Z = p(g, N, U, H), Z && _(g, N, U, H), H !== null && e.update(H, i.ELEMENT_ARRAY_BUFFER), (Z || o) && (o = !1, E(g, A, U, N), H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function h(g) {
    return i.deleteVertexArray(g);
  }
  function f(g, A, U) {
    const N = U.wireframe === !0;
    let H = n[g.id];
    H === void 0 && (H = {}, n[g.id] = H);
    let Z = H[A.id];
    Z === void 0 && (Z = {}, H[A.id] = Z);
    let G = Z[N];
    return G === void 0 && (G = u(l()), Z[N] = G), G;
  }
  function u(g) {
    const A = [], U = [], N = [];
    for (let H = 0; H < t; H++)
      A[H] = 0, U[H] = 0, N[H] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: A,
      enabledAttributes: U,
      attributeDivisors: N,
      object: g,
      attributes: {},
      index: null
    };
  }
  function p(g, A, U, N) {
    const H = s.attributes, Z = A.attributes;
    let G = 0;
    const ne = U.getAttributes();
    for (const W in ne)
      if (ne[W].location >= 0) {
        const pe = H[W];
        let Se = Z[W];
        if (Se === void 0 && (W === "instanceMatrix" && g.instanceMatrix && (Se = g.instanceMatrix), W === "instanceColor" && g.instanceColor && (Se = g.instanceColor)), pe === void 0 || pe.attribute !== Se || Se && pe.data !== Se.data) return !0;
        G++;
      }
    return s.attributesNum !== G || s.index !== N;
  }
  function _(g, A, U, N) {
    const H = {}, Z = A.attributes;
    let G = 0;
    const ne = U.getAttributes();
    for (const W in ne)
      if (ne[W].location >= 0) {
        let pe = Z[W];
        pe === void 0 && (W === "instanceMatrix" && g.instanceMatrix && (pe = g.instanceMatrix), W === "instanceColor" && g.instanceColor && (pe = g.instanceColor));
        const Se = {};
        Se.attribute = pe, pe && pe.data && (Se.data = pe.data), H[W] = Se, G++;
      }
    s.attributes = H, s.attributesNum = G, s.index = N;
  }
  function S() {
    const g = s.newAttributes;
    for (let A = 0, U = g.length; A < U; A++)
      g[A] = 0;
  }
  function m(g) {
    d(g, 0);
  }
  function d(g, A) {
    const U = s.newAttributes, N = s.enabledAttributes, H = s.attributeDivisors;
    U[g] = 1, N[g] === 0 && (i.enableVertexAttribArray(g), N[g] = 1), H[g] !== A && (i.vertexAttribDivisor(g, A), H[g] = A);
  }
  function P() {
    const g = s.newAttributes, A = s.enabledAttributes;
    for (let U = 0, N = A.length; U < N; U++)
      A[U] !== g[U] && (i.disableVertexAttribArray(U), A[U] = 0);
  }
  function R(g, A, U, N, H, Z, G) {
    G === !0 ? i.vertexAttribIPointer(g, A, U, H, Z) : i.vertexAttribPointer(g, A, U, N, H, Z);
  }
  function E(g, A, U, N) {
    S();
    const H = N.attributes, Z = U.getAttributes(), G = A.defaultAttributeValues;
    for (const ne in Z) {
      const W = Z[ne];
      if (W.location >= 0) {
        let oe = H[ne];
        if (oe === void 0 && (ne === "instanceMatrix" && g.instanceMatrix && (oe = g.instanceMatrix), ne === "instanceColor" && g.instanceColor && (oe = g.instanceColor)), oe !== void 0) {
          const pe = oe.normalized, Se = oe.itemSize, Oe = e.get(oe);
          if (Oe === void 0) continue;
          const Ze = Oe.buffer, Y = Oe.type, re = Oe.bytesPerElement, ge = Y === i.INT || Y === i.UNSIGNED_INT || oe.gpuType === $a;
          if (oe.isInterleavedBufferAttribute) {
            const ae = oe.data, ye = ae.stride, We = oe.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let we = 0; we < W.locationSize; we++)
                d(W.location + we, ae.meshPerAttribute);
              g.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let we = 0; we < W.locationSize; we++)
                m(W.location + we);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let we = 0; we < W.locationSize; we++)
              R(
                W.location + we,
                Se / W.locationSize,
                Y,
                pe,
                ye * re,
                (We + Se / W.locationSize * we) * re,
                ge
              );
          } else {
            if (oe.isInstancedBufferAttribute) {
              for (let ae = 0; ae < W.locationSize; ae++)
                d(W.location + ae, oe.meshPerAttribute);
              g.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let ae = 0; ae < W.locationSize; ae++)
                m(W.location + ae);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let ae = 0; ae < W.locationSize; ae++)
              R(
                W.location + ae,
                Se / W.locationSize,
                Y,
                pe,
                Se * re,
                Se / W.locationSize * ae * re,
                ge
              );
          }
        } else if (G !== void 0) {
          const pe = G[ne];
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
    P();
  }
  function I() {
    b();
    for (const g in n) {
      const A = n[g];
      for (const U in A) {
        const N = A[U];
        for (const H in N)
          h(N[H].object), delete N[H];
        delete A[U];
      }
      delete n[g];
    }
  }
  function C(g) {
    if (n[g.id] === void 0) return;
    const A = n[g.id];
    for (const U in A) {
      const N = A[U];
      for (const H in N)
        h(N[H].object), delete N[H];
      delete A[U];
    }
    delete n[g.id];
  }
  function y(g) {
    for (const A in n) {
      const U = n[A];
      if (U[g.id] === void 0) continue;
      const N = U[g.id];
      for (const H in N)
        h(N[H].object), delete N[H];
      delete U[g.id];
    }
  }
  function b() {
    v(), o = !0, s !== r && (s = r, c(s.object));
  }
  function v() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: a,
    reset: b,
    resetDefaultState: v,
    dispose: I,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: y,
    initAttributes: S,
    enableAttribute: m,
    disableUnusedAttributes: P
  };
}
function np(i, e, t) {
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
    let p = 0;
    for (let _ = 0; _ < f; _++)
      p += h[_];
    t.update(p, n, 1);
  }
  function l(c, h, f, u) {
    if (f === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let _ = 0; _ < c.length; _++)
        o(c[_], h[_], u[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, u, 0, f);
      let _ = 0;
      for (let S = 0; S < f; S++)
        _ += h[S] * u[S];
      t.update(_, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function ip(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const y = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function o(y) {
    return !(y !== Wt && n.convert(y) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(y) {
    const b = y === fr && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(y !== bn && n.convert(y) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    y !== sn && !b);
  }
  function l(y) {
    if (y === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      y = "mediump";
    }
    return y === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const f = t.logarithmicDepthBuffer === !0, u = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), P = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), R = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), I = _ > 0, C = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: u,
    maxTextures: p,
    maxVertexTextures: _,
    maxTextureSize: S,
    maxCubemapSize: m,
    maxAttributes: d,
    maxVertexUniforms: P,
    maxVaryings: R,
    maxFragmentUniforms: E,
    vertexTextures: I,
    maxSamples: C
  };
}
function rp(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new Zn(), a = new Fe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, u) {
    const p = f.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = f.length, p;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, u) {
    t = h(f, u, 0);
  }, this.setState = function(f, u, p) {
    const _ = f.clippingPlanes, S = f.clipIntersection, m = f.clipShadows, d = i.get(f);
    if (!r || _ === null || _.length === 0 || s && !m)
      s ? h(null) : c();
    else {
      const P = s ? 0 : n, R = P * 4;
      let E = d.clippingState || null;
      l.value = E, E = h(_, u, R, p);
      for (let I = 0; I !== R; ++I)
        E[I] = t[I];
      d.clippingState = E, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += P;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(f, u, p, _) {
    const S = f !== null ? f.length : 0;
    let m = null;
    if (S !== 0) {
      if (m = l.value, _ !== !0 || m === null) {
        const d = p + S * 4, P = u.matrixWorldInverse;
        a.getNormalMatrix(P), (m === null || m.length < d) && (m = new Float32Array(d));
        for (let R = 0, E = p; R !== S; ++R, E += 4)
          o.copy(f[R]).applyMatrix4(P, a), o.normal.toArray(m, E), m[E + 3] = o.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = S, e.numIntersection = 0, m;
  }
}
function sp(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === pa ? o.mapping = Ii : a === ma && (o.mapping = Ui), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === pa || a === ma)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Ju(l.height);
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
const bi = 4, Ko = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Kn = 20, qs = /* @__PURE__ */ new ao(), Jo = /* @__PURE__ */ new Ce();
let Zs = null, js = 0, $s = 0, Ks = !1;
const jn = (1 + Math.sqrt(5)) / 2, Si = 1 / jn, Qo = [
  /* @__PURE__ */ new B(-jn, Si, 0),
  /* @__PURE__ */ new B(jn, Si, 0),
  /* @__PURE__ */ new B(-Si, 0, jn),
  /* @__PURE__ */ new B(Si, 0, jn),
  /* @__PURE__ */ new B(0, jn, -Si),
  /* @__PURE__ */ new B(0, jn, Si),
  /* @__PURE__ */ new B(-1, 1, -1),
  /* @__PURE__ */ new B(1, 1, -1),
  /* @__PURE__ */ new B(-1, 1, 1),
  /* @__PURE__ */ new B(1, 1, 1)
], ap = /* @__PURE__ */ new B();
class el {
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
      position: a = ap
    } = s;
    Zs = this._renderer.getRenderTarget(), js = this._renderer.getActiveCubeFace(), $s = this._renderer.getActiveMipmapLevel(), Ks = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(o);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = il(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = nl(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Zs, js, $s), this._renderer.xr.enabled = Ks, e.scissorTest = !1, Gr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ii || e.mapping === Ui ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Zs = this._renderer.getRenderTarget(), js = this._renderer.getActiveCubeFace(), $s = this._renderer.getActiveMipmapLevel(), Ks = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Gt,
      minFilter: Gt,
      generateMipmaps: !1,
      type: fr,
      format: Wt,
      colorSpace: Ni,
      depthBuffer: !1
    }, r = tl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = tl(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = op(s)), this._blurMaterial = lp(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Ot(this._lodPlanes[0], e);
    this._renderer.compile(t, qs);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const l = new nn(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], f = this._renderer, u = f.autoClear, p = f.toneMapping;
    f.getClearColor(Jo), f.toneMapping = On, f.autoClear = !1;
    const _ = new sc({
      name: "PMREM.Background",
      side: Bt,
      depthWrite: !1,
      depthTest: !1
    }), S = new Ot(new gr(), _);
    let m = !1;
    const d = e.background;
    d ? d.isColor && (_.color.copy(d), e.background = null, m = !0) : (_.color.copy(Jo), m = !0);
    for (let P = 0; P < 6; P++) {
      const R = P % 3;
      R === 0 ? (l.up.set(0, c[P], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + h[P], s.y, s.z)) : R === 1 ? (l.up.set(0, 0, c[P]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + h[P], s.z)) : (l.up.set(0, c[P], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + h[P]));
      const E = this._cubeSize;
      Gr(r, R * E, P > 2 ? E : 0, E, E), f.setRenderTarget(r), m && f.render(S, l), f.render(e, l);
    }
    S.geometry.dispose(), S.material.dispose(), f.toneMapping = p, f.autoClear = u, e.background = d;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Ii || e.mapping === Ui;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = il()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = nl());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Ot(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Gr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, qs);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = Qo[(r - s - 1) % Qo.length];
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
    const h = 3, f = new Ot(this._lodPlanes[r], c), u = c.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Kn - 1), S = s / _, m = isFinite(s) ? 1 + Math.floor(h * S) : Kn;
    m > Kn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);
    const d = [];
    let P = 0;
    for (let y = 0; y < Kn; ++y) {
      const b = y / S, v = Math.exp(-b * b / 2);
      d.push(v), y === 0 ? P += v : y < m && (P += 2 * v);
    }
    for (let y = 0; y < d.length; y++)
      d[y] = d[y] / P;
    u.envMap.value = e.texture, u.samples.value = m, u.weights.value = d, u.latitudinal.value = o === "latitudinal", a && (u.poleAxis.value = a);
    const { _lodMax: R } = this;
    u.dTheta.value = _, u.mipInt.value = R - n;
    const E = this._sizeLods[r], I = 3 * E * (r > R - bi ? r - R + bi : 0), C = 4 * (this._cubeSize - E);
    Gr(t, I, C, 3 * E, 2 * E), l.setRenderTarget(t), l.render(f, qs);
  }
}
function op(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - bi + 1 + Ko.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - bi ? l = Ko[o - i + bi - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, f = 1 + c, u = [h, h, f, h, f, f, h, h, f, f, h, f], p = 6, _ = 6, S = 3, m = 2, d = 1, P = new Float32Array(S * _ * p), R = new Float32Array(m * _ * p), E = new Float32Array(d * _ * p);
    for (let C = 0; C < p; C++) {
      const y = C % 3 * 2 / 3 - 1, b = C > 2 ? 0 : -1, v = [
        y,
        b,
        0,
        y + 2 / 3,
        b,
        0,
        y + 2 / 3,
        b + 1,
        0,
        y,
        b,
        0,
        y + 2 / 3,
        b + 1,
        0,
        y,
        b + 1,
        0
      ];
      P.set(v, S * _ * C), R.set(u, m * _ * C);
      const g = [C, C, C, C, C, C];
      E.set(g, d * _ * C);
    }
    const I = new on();
    I.setAttribute("position", new Yt(P, S)), I.setAttribute("uv", new Yt(R, m)), I.setAttribute("faceIndex", new Yt(E, d)), e.push(I), r > bi && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function tl(i, e, t) {
  const n = new ni(i, e, t);
  return n.texture.mapping = _s, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Gr(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function lp(i, e, t) {
  const n = new Float32Array(Kn), r = new B(0, 1, 0);
  return new At({
    name: "SphericalGaussianBlur",
    defines: {
      n: Kn,
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
    vertexShader: lo(),
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
    blending: Fn,
    depthTest: !1,
    depthWrite: !1
  });
}
function nl() {
  return new At({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: lo(),
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
    blending: Fn,
    depthTest: !1,
    depthWrite: !1
  });
}
function il() {
  return new At({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: lo(),
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
    blending: Fn,
    depthTest: !1,
    depthWrite: !1
  });
}
function lo() {
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
function cp(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === pa || l === ma, h = l === Ii || l === Ui;
      if (c || h) {
        let f = e.get(a);
        const u = f !== void 0 ? f.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== u)
          return t === null && (t = new el(i)), f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f), f.texture.pmremVersion = a.pmremVersion, e.set(a, f), f.texture;
        if (f !== void 0)
          return f.texture;
        {
          const p = a.image;
          return c && p && p.height > 0 || h && p && r(p) ? (t === null && (t = new el(i)), f = c ? t.fromEquirectangular(a) : t.fromCubemap(a), f.texture.pmremVersion = a.pmremVersion, e.set(a, f), a.addEventListener("dispose", s), f.texture) : null;
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
function up(i) {
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
      return r === null && is("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function hp(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(f) {
    const u = f.target;
    u.index !== null && e.remove(u.index);
    for (const _ in u.attributes)
      e.remove(u.attributes[_]);
    u.removeEventListener("dispose", o), delete r[u.id];
    const p = s.get(u);
    p && (e.remove(p), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function a(f, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", o), r[u.id] = !0, t.memory.geometries++), u;
  }
  function l(f) {
    const u = f.attributes;
    for (const p in u)
      e.update(u[p], i.ARRAY_BUFFER);
  }
  function c(f) {
    const u = [], p = f.index, _ = f.attributes.position;
    let S = 0;
    if (p !== null) {
      const P = p.array;
      S = p.version;
      for (let R = 0, E = P.length; R < E; R += 3) {
        const I = P[R + 0], C = P[R + 1], y = P[R + 2];
        u.push(I, C, C, y, y, I);
      }
    } else if (_ !== void 0) {
      const P = _.array;
      S = _.version;
      for (let R = 0, E = P.length / 3 - 1; R < E; R += 3) {
        const I = R + 0, C = R + 1, y = R + 2;
        u.push(I, C, C, y, y, I);
      }
    } else
      return;
    const m = new (ec(u) ? oc : ac)(u, 1);
    m.version = S;
    const d = s.get(f);
    d && e.remove(d), s.set(f, m);
  }
  function h(f) {
    const u = s.get(f);
    if (u) {
      const p = f.index;
      p !== null && u.version < p.version && c(f);
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
function dp(i, e, t) {
  let n;
  function r(u) {
    n = u;
  }
  let s, o;
  function a(u) {
    s = u.type, o = u.bytesPerElement;
  }
  function l(u, p) {
    i.drawElements(n, p, s, u * o), t.update(p, n, 1);
  }
  function c(u, p, _) {
    _ !== 0 && (i.drawElementsInstanced(n, p, s, u * o, _), t.update(p, n, _));
  }
  function h(u, p, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, u, 0, _);
    let m = 0;
    for (let d = 0; d < _; d++)
      m += p[d];
    t.update(m, n, 1);
  }
  function f(u, p, _, S) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let d = 0; d < u.length; d++)
        c(u[d] / o, p[d], S[d]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, u, 0, S, 0, _);
      let d = 0;
      for (let P = 0; P < _; P++)
        d += p[P] * S[P];
      t.update(d, n, 1);
    }
  }
  this.setMode = r, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = f;
}
function fp(i) {
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
function pp(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new ht();
  function s(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let u = n.get(a);
    if (u === void 0 || u.count !== f) {
      let v = function() {
        y.dispose(), n.delete(a), a.removeEventListener("dispose", v);
      };
      u !== void 0 && u.texture.dispose();
      const p = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, S = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], d = a.morphAttributes.normal || [], P = a.morphAttributes.color || [];
      let R = 0;
      p === !0 && (R = 1), _ === !0 && (R = 2), S === !0 && (R = 3);
      let E = a.attributes.position.count * R, I = 1;
      E > e.maxTextureSize && (I = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const C = new Float32Array(E * I * 4 * f), y = new tc(C, E, I, f);
      y.type = sn, y.needsUpdate = !0;
      const b = R * 4;
      for (let g = 0; g < f; g++) {
        const A = m[g], U = d[g], N = P[g], H = E * I * 4 * g;
        for (let Z = 0; Z < A.count; Z++) {
          const G = Z * b;
          p === !0 && (r.fromBufferAttribute(A, Z), C[H + G + 0] = r.x, C[H + G + 1] = r.y, C[H + G + 2] = r.z, C[H + G + 3] = 0), _ === !0 && (r.fromBufferAttribute(U, Z), C[H + G + 4] = r.x, C[H + G + 5] = r.y, C[H + G + 6] = r.z, C[H + G + 7] = 0), S === !0 && (r.fromBufferAttribute(N, Z), C[H + G + 8] = r.x, C[H + G + 9] = r.y, C[H + G + 10] = r.z, C[H + G + 11] = N.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: f,
        texture: y,
        size: new Ae(E, I)
      }, n.set(a, u), a.addEventListener("dispose", v);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
    else {
      let p = 0;
      for (let S = 0; S < c.length; S++)
        p += c[S];
      const _ = a.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function mp(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, f = e.get(l, h);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const u = l.skeleton;
      r.get(u) !== c && (u.update(), r.set(u, c));
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
const fc = /* @__PURE__ */ new wt(), rl = /* @__PURE__ */ new hc(1, 1), pc = /* @__PURE__ */ new tc(), mc = /* @__PURE__ */ new Fu(), _c = /* @__PURE__ */ new cc(), sl = [], al = [], ol = new Float32Array(16), ll = new Float32Array(9), cl = new Float32Array(4);
function Bi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = sl[r];
  if (s === void 0 && (s = new Float32Array(r), sl[r] = s), e !== 0) {
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
function vs(i, e) {
  let t = al[e];
  t === void 0 && (t = new Int32Array(e), al[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function _p(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function gp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2fv(this.addr, e), vt(t, e);
  }
}
function vp(i, e) {
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
function xp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4fv(this.addr, e), vt(t, e);
  }
}
function Sp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), vt(t, e);
  } else {
    if (gt(t, n)) return;
    cl.set(n), i.uniformMatrix2fv(this.addr, !1, cl), vt(t, n);
  }
}
function Mp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), vt(t, e);
  } else {
    if (gt(t, n)) return;
    ll.set(n), i.uniformMatrix3fv(this.addr, !1, ll), vt(t, n);
  }
}
function Ep(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), vt(t, e);
  } else {
    if (gt(t, n)) return;
    ol.set(n), i.uniformMatrix4fv(this.addr, !1, ol), vt(t, n);
  }
}
function yp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Tp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2iv(this.addr, e), vt(t, e);
  }
}
function bp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3iv(this.addr, e), vt(t, e);
  }
}
function Ap(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4iv(this.addr, e), vt(t, e);
  }
}
function wp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Rp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2uiv(this.addr, e), vt(t, e);
  }
}
function Cp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3uiv(this.addr, e), vt(t, e);
  }
}
function Pp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4uiv(this.addr, e), vt(t, e);
  }
}
function Dp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (rl.compareFunction = Ql, s = rl) : s = fc, t.setTexture2D(e || s, r);
}
function Lp(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || mc, r);
}
function Ip(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || _c, r);
}
function Up(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || pc, r);
}
function Np(i) {
  switch (i) {
    case 5126:
      return _p;
    // FLOAT
    case 35664:
      return gp;
    // _VEC2
    case 35665:
      return vp;
    // _VEC3
    case 35666:
      return xp;
    // _VEC4
    case 35674:
      return Sp;
    // _MAT2
    case 35675:
      return Mp;
    // _MAT3
    case 35676:
      return Ep;
    // _MAT4
    case 5124:
    case 35670:
      return yp;
    // INT, BOOL
    case 35667:
    case 35671:
      return Tp;
    // _VEC2
    case 35668:
    case 35672:
      return bp;
    // _VEC3
    case 35669:
    case 35673:
      return Ap;
    // _VEC4
    case 5125:
      return wp;
    // UINT
    case 36294:
      return Rp;
    // _VEC2
    case 36295:
      return Cp;
    // _VEC3
    case 36296:
      return Pp;
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
      return Dp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Lp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Ip;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Up;
  }
}
function Fp(i, e) {
  i.uniform1fv(this.addr, e);
}
function Op(i, e) {
  const t = Bi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Bp(i, e) {
  const t = Bi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function zp(i, e) {
  const t = Bi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Hp(i, e) {
  const t = Bi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function kp(i, e) {
  const t = Bi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Vp(i, e) {
  const t = Bi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Gp(i, e) {
  i.uniform1iv(this.addr, e);
}
function Wp(i, e) {
  i.uniform2iv(this.addr, e);
}
function Xp(i, e) {
  i.uniform3iv(this.addr, e);
}
function Yp(i, e) {
  i.uniform4iv(this.addr, e);
}
function qp(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Zp(i, e) {
  i.uniform2uiv(this.addr, e);
}
function jp(i, e) {
  i.uniform3uiv(this.addr, e);
}
function $p(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Kp(i, e, t) {
  const n = this.cache, r = e.length, s = vs(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || fc, s[o]);
}
function Jp(i, e, t) {
  const n = this.cache, r = e.length, s = vs(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || mc, s[o]);
}
function Qp(i, e, t) {
  const n = this.cache, r = e.length, s = vs(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || _c, s[o]);
}
function em(i, e, t) {
  const n = this.cache, r = e.length, s = vs(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), vt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || pc, s[o]);
}
function tm(i) {
  switch (i) {
    case 5126:
      return Fp;
    // FLOAT
    case 35664:
      return Op;
    // _VEC2
    case 35665:
      return Bp;
    // _VEC3
    case 35666:
      return zp;
    // _VEC4
    case 35674:
      return Hp;
    // _MAT2
    case 35675:
      return kp;
    // _MAT3
    case 35676:
      return Vp;
    // _MAT4
    case 5124:
    case 35670:
      return Gp;
    // INT, BOOL
    case 35667:
    case 35671:
      return Wp;
    // _VEC2
    case 35668:
    case 35672:
      return Xp;
    // _VEC3
    case 35669:
    case 35673:
      return Yp;
    // _VEC4
    case 5125:
      return qp;
    // UINT
    case 36294:
      return Zp;
    // _VEC2
    case 36295:
      return jp;
    // _VEC3
    case 36296:
      return $p;
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
      return Kp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Jp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Qp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return em;
  }
}
class nm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Np(t.type);
  }
}
class im {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = tm(t.type);
  }
}
class rm {
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
const Js = /(\w+)(\])?(\[|\.)?/g;
function ul(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function sm(i, e, t) {
  const n = i.name, r = n.length;
  for (Js.lastIndex = 0; ; ) {
    const s = Js.exec(n), o = Js.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      ul(t, c === void 0 ? new nm(a, i, e) : new im(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && (f = new rm(a), ul(t, f)), t = f;
    }
  }
}
class rs {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      sm(s, o, this);
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
function hl(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const am = 37297;
let om = 0;
function lm(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const dl = /* @__PURE__ */ new Fe();
function cm(i) {
  Ye._getMatrix(dl, Ye.workingColorSpace, i);
  const e = `mat3( ${dl.elements.map((t) => t.toFixed(4))} )`;
  switch (Ye.getTransfer(i)) {
    case os:
      return [e, "LinearTransferOETF"];
    case Je:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function fl(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + lm(i.getShaderSource(e), o);
  } else
    return r;
}
function um(i, e) {
  const t = cm(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function hm(i, e) {
  let t;
  switch (e) {
    case su:
      t = "Linear";
      break;
    case au:
      t = "Reinhard";
      break;
    case ou:
      t = "Cineon";
      break;
    case lu:
      t = "ACESFilmic";
      break;
    case uu:
      t = "AgX";
      break;
    case hu:
      t = "Neutral";
      break;
    case cu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Wr = /* @__PURE__ */ new B();
function dm() {
  Ye.getLuminanceCoefficients(Wr);
  const i = Wr.x.toFixed(4), e = Wr.y.toFixed(4), t = Wr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function fm(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Zi).join(`
`);
}
function pm(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function mm(i, e) {
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
function Zi(i) {
  return i !== "";
}
function pl(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ml(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const _m = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Wa(i) {
  return i.replace(_m, vm);
}
const gm = /* @__PURE__ */ new Map();
function vm(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = gm.get(e);
    if (n !== void 0)
      t = Ne[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Wa(t);
}
const xm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function _l(i) {
  return i.replace(xm, Sm);
}
function Sm(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function gl(i) {
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
function Mm(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Za ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Bc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === vn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Em(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Ii:
      case Ui:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case _s:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function ym(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Ui:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Tm(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Vl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case iu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ru:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function bm(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Am(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = Mm(t), c = Em(t), h = ym(t), f = Tm(t), u = bm(t), p = fm(t), _ = pm(s), S = r.createProgram();
  let m, d, P = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Zi).join(`
`), m.length > 0 && (m += `
`), d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Zi).join(`
`), d.length > 0 && (d += `
`)) : (m = [
    gl(t),
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
  ].filter(Zi).join(`
`), d = [
    gl(t),
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
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + f : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
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
    t.toneMapping !== On ? "#define TONE_MAPPING" : "",
    t.toneMapping !== On ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== On ? hm("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    um("linearToOutputTexel", t.outputColorSpace),
    dm(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Zi).join(`
`)), o = Wa(o), o = pl(o, t), o = ml(o, t), a = Wa(a), a = pl(a, t), a = ml(a, t), o = _l(o), a = _l(a), t.isRawShaderMaterial !== !0 && (P = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, d = [
    "#define varying in",
    t.glslVersion === To ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === To ? "" : "#define gl_FragColor pc_fragColor",
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
  const R = P + m + o, E = P + d + a, I = hl(r, r.VERTEX_SHADER, R), C = hl(r, r.FRAGMENT_SHADER, E);
  r.attachShader(S, I), r.attachShader(S, C), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);
  function y(A) {
    if (i.debug.checkShaderErrors) {
      const U = r.getProgramInfoLog(S).trim(), N = r.getShaderInfoLog(I).trim(), H = r.getShaderInfoLog(C).trim();
      let Z = !0, G = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (Z = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, S, I, C);
        else {
          const ne = fl(r, I, "vertex"), W = fl(r, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + A.name + `
Material Type: ` + A.type + `

Program Info Log: ` + U + `
` + ne + `
` + W
          );
        }
      else U !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", U) : (N === "" || H === "") && (G = !1);
      G && (A.diagnostics = {
        runnable: Z,
        programLog: U,
        vertexShader: {
          log: N,
          prefix: m
        },
        fragmentShader: {
          log: H,
          prefix: d
        }
      });
    }
    r.deleteShader(I), r.deleteShader(C), b = new rs(r, S), v = mm(r, S);
  }
  let b;
  this.getUniforms = function() {
    return b === void 0 && y(this), b;
  };
  let v;
  this.getAttributes = function() {
    return v === void 0 && y(this), v;
  };
  let g = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return g === !1 && (g = r.getProgramParameter(S, am)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = om++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = I, this.fragmentShader = C, this;
}
let wm = 0;
class Rm {
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
    return n === void 0 && (n = new Cm(e), t.set(e, n)), n;
  }
}
class Cm {
  constructor(e) {
    this.id = wm++, this.code = e, this.usedTimes = 0;
  }
}
function Pm(i, e, t, n, r, s, o) {
  const a = new ic(), l = new Rm(), c = /* @__PURE__ */ new Set(), h = [], f = r.logarithmicDepthBuffer, u = r.vertexTextures;
  let p = r.precision;
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
  function S(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function m(v, g, A, U, N) {
    const H = U.fog, Z = N.geometry, G = v.isMeshStandardMaterial ? U.environment : null, ne = (v.isMeshStandardMaterial ? t : e).get(v.envMap || G), W = ne && ne.mapping === _s ? ne.image.height : null, oe = _[v.type];
    v.precision !== null && (p = r.getMaxPrecision(v.precision), p !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", p, "instead."));
    const pe = Z.morphAttributes.position || Z.morphAttributes.normal || Z.morphAttributes.color, Se = pe !== void 0 ? pe.length : 0;
    let Oe = 0;
    Z.morphAttributes.position !== void 0 && (Oe = 1), Z.morphAttributes.normal !== void 0 && (Oe = 2), Z.morphAttributes.color !== void 0 && (Oe = 3);
    let Ze, Y, re, ge;
    if (oe) {
      const Ke = cn[oe];
      Ze = Ke.vertexShader, Y = Ke.fragmentShader;
    } else
      Ze = v.vertexShader, Y = v.fragmentShader, l.update(v), re = l.getVertexShaderID(v), ge = l.getFragmentShaderID(v);
    const ae = i.getRenderTarget(), ye = i.state.buffers.depth.getReversed(), We = N.isInstancedMesh === !0, we = N.isBatchedMesh === !0, at = !!v.map, tt = !!v.matcap, ze = !!ne, D = !!v.aoMap, Rt = !!v.lightMap, Ge = !!v.bumpMap, Ve = !!v.normalMap, ve = !!v.displacementMap, Qe = !!v.emissiveMap, xe = !!v.metalnessMap, T = !!v.roughnessMap, x = v.anisotropy > 0, z = v.clearcoat > 0, q = v.dispersion > 0, $ = v.iridescence > 0, w = v.sheen > 0, J = v.transmission > 0, ee = x && !!v.anisotropyMap, ie = z && !!v.clearcoatMap, Le = z && !!v.clearcoatNormalMap, Q = z && !!v.clearcoatRoughnessMap, fe = $ && !!v.iridescenceMap, be = $ && !!v.iridescenceThicknessMap, Me = w && !!v.sheenColorMap, le = w && !!v.sheenRoughnessMap, He = !!v.specularMap, Be = !!v.specularColorMap, et = !!v.specularIntensityMap, L = J && !!v.transmissionMap, ue = J && !!v.thicknessMap, X = !!v.gradientMap, j = !!v.alphaMap, de = v.alphaTest > 0, he = !!v.alphaHash, Ue = !!v.extensions;
    let lt = On;
    v.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (lt = i.toneMapping);
    const Et = {
      shaderID: oe,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: Ze,
      fragmentShader: Y,
      defines: v.defines,
      customVertexShaderID: re,
      customFragmentShaderID: ge,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: p,
      batching: we,
      batchingColor: we && N._colorsTexture !== null,
      instancing: We,
      instancingColor: We && N.instanceColor !== null,
      instancingMorph: We && N.morphTexture !== null,
      supportsVertexTextures: u,
      outputColorSpace: ae === null ? i.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : Ni,
      alphaToCoverage: !!v.alphaToCoverage,
      map: at,
      matcap: tt,
      envMap: ze,
      envMapMode: ze && ne.mapping,
      envMapCubeUVHeight: W,
      aoMap: D,
      lightMap: Rt,
      bumpMap: Ge,
      normalMap: Ve,
      displacementMap: u && ve,
      emissiveMap: Qe,
      normalMapObjectSpace: Ve && v.normalMapType === gu,
      normalMapTangentSpace: Ve && v.normalMapType === _u,
      metalnessMap: xe,
      roughnessMap: T,
      anisotropy: x,
      anisotropyMap: ee,
      clearcoat: z,
      clearcoatMap: ie,
      clearcoatNormalMap: Le,
      clearcoatRoughnessMap: Q,
      dispersion: q,
      iridescence: $,
      iridescenceMap: fe,
      iridescenceThicknessMap: be,
      sheen: w,
      sheenColorMap: Me,
      sheenRoughnessMap: le,
      specularMap: He,
      specularColorMap: Be,
      specularIntensityMap: et,
      transmission: J,
      transmissionMap: L,
      thicknessMap: ue,
      gradientMap: X,
      opaque: v.transparent === !1 && v.blending === Pi && v.alphaToCoverage === !1,
      alphaMap: j,
      alphaTest: de,
      alphaHash: he,
      combine: v.combine,
      //
      mapUv: at && S(v.map.channel),
      aoMapUv: D && S(v.aoMap.channel),
      lightMapUv: Rt && S(v.lightMap.channel),
      bumpMapUv: Ge && S(v.bumpMap.channel),
      normalMapUv: Ve && S(v.normalMap.channel),
      displacementMapUv: ve && S(v.displacementMap.channel),
      emissiveMapUv: Qe && S(v.emissiveMap.channel),
      metalnessMapUv: xe && S(v.metalnessMap.channel),
      roughnessMapUv: T && S(v.roughnessMap.channel),
      anisotropyMapUv: ee && S(v.anisotropyMap.channel),
      clearcoatMapUv: ie && S(v.clearcoatMap.channel),
      clearcoatNormalMapUv: Le && S(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Q && S(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: fe && S(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: be && S(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: Me && S(v.sheenColorMap.channel),
      sheenRoughnessMapUv: le && S(v.sheenRoughnessMap.channel),
      specularMapUv: He && S(v.specularMap.channel),
      specularColorMapUv: Be && S(v.specularColorMap.channel),
      specularIntensityMapUv: et && S(v.specularIntensityMap.channel),
      transmissionMapUv: L && S(v.transmissionMap.channel),
      thicknessMapUv: ue && S(v.thicknessMap.channel),
      alphaMapUv: j && S(v.alphaMap.channel),
      //
      vertexTangents: !!Z.attributes.tangent && (Ve || x),
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!Z.attributes.color && Z.attributes.color.itemSize === 4,
      pointsUvs: N.isPoints === !0 && !!Z.attributes.uv && (at || j),
      fog: !!H,
      useFog: v.fog === !0,
      fogExp2: !!H && H.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: ye,
      skinning: N.isSkinnedMesh === !0,
      morphTargets: Z.morphAttributes.position !== void 0,
      morphNormals: Z.morphAttributes.normal !== void 0,
      morphColors: Z.morphAttributes.color !== void 0,
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
      dithering: v.dithering,
      shadowMapEnabled: i.shadowMap.enabled && A.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: lt,
      decodeVideoTexture: at && v.map.isVideoTexture === !0 && Ye.getTransfer(v.map.colorSpace) === Je,
      decodeVideoTextureEmissive: Qe && v.emissiveMap.isVideoTexture === !0 && Ye.getTransfer(v.emissiveMap.colorSpace) === Je,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === Mn,
      flipSided: v.side === Bt,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: Ue && v.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ue && v.extensions.multiDraw === !0 || we) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return Et.vertexUv1s = c.has(1), Et.vertexUv2s = c.has(2), Et.vertexUv3s = c.has(3), c.clear(), Et;
  }
  function d(v) {
    const g = [];
    if (v.shaderID ? g.push(v.shaderID) : (g.push(v.customVertexShaderID), g.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const A in v.defines)
        g.push(A), g.push(v.defines[A]);
    return v.isRawShaderMaterial === !1 && (P(g, v), R(g, v), g.push(i.outputColorSpace)), g.push(v.customProgramCacheKey), g.join();
  }
  function P(v, g) {
    v.push(g.precision), v.push(g.outputColorSpace), v.push(g.envMapMode), v.push(g.envMapCubeUVHeight), v.push(g.mapUv), v.push(g.alphaMapUv), v.push(g.lightMapUv), v.push(g.aoMapUv), v.push(g.bumpMapUv), v.push(g.normalMapUv), v.push(g.displacementMapUv), v.push(g.emissiveMapUv), v.push(g.metalnessMapUv), v.push(g.roughnessMapUv), v.push(g.anisotropyMapUv), v.push(g.clearcoatMapUv), v.push(g.clearcoatNormalMapUv), v.push(g.clearcoatRoughnessMapUv), v.push(g.iridescenceMapUv), v.push(g.iridescenceThicknessMapUv), v.push(g.sheenColorMapUv), v.push(g.sheenRoughnessMapUv), v.push(g.specularMapUv), v.push(g.specularColorMapUv), v.push(g.specularIntensityMapUv), v.push(g.transmissionMapUv), v.push(g.thicknessMapUv), v.push(g.combine), v.push(g.fogExp2), v.push(g.sizeAttenuation), v.push(g.morphTargetsCount), v.push(g.morphAttributeCount), v.push(g.numDirLights), v.push(g.numPointLights), v.push(g.numSpotLights), v.push(g.numSpotLightMaps), v.push(g.numHemiLights), v.push(g.numRectAreaLights), v.push(g.numDirLightShadows), v.push(g.numPointLightShadows), v.push(g.numSpotLightShadows), v.push(g.numSpotLightShadowsWithMaps), v.push(g.numLightProbes), v.push(g.shadowMapType), v.push(g.toneMapping), v.push(g.numClippingPlanes), v.push(g.numClipIntersection), v.push(g.depthPacking);
  }
  function R(v, g) {
    a.disableAll(), g.supportsVertexTextures && a.enable(0), g.instancing && a.enable(1), g.instancingColor && a.enable(2), g.instancingMorph && a.enable(3), g.matcap && a.enable(4), g.envMap && a.enable(5), g.normalMapObjectSpace && a.enable(6), g.normalMapTangentSpace && a.enable(7), g.clearcoat && a.enable(8), g.iridescence && a.enable(9), g.alphaTest && a.enable(10), g.vertexColors && a.enable(11), g.vertexAlphas && a.enable(12), g.vertexUv1s && a.enable(13), g.vertexUv2s && a.enable(14), g.vertexUv3s && a.enable(15), g.vertexTangents && a.enable(16), g.anisotropy && a.enable(17), g.alphaHash && a.enable(18), g.batching && a.enable(19), g.dispersion && a.enable(20), g.batchingColor && a.enable(21), v.push(a.mask), a.disableAll(), g.fog && a.enable(0), g.useFog && a.enable(1), g.flatShading && a.enable(2), g.logarithmicDepthBuffer && a.enable(3), g.reverseDepthBuffer && a.enable(4), g.skinning && a.enable(5), g.morphTargets && a.enable(6), g.morphNormals && a.enable(7), g.morphColors && a.enable(8), g.premultipliedAlpha && a.enable(9), g.shadowMapEnabled && a.enable(10), g.doubleSided && a.enable(11), g.flipSided && a.enable(12), g.useDepthPacking && a.enable(13), g.dithering && a.enable(14), g.transmission && a.enable(15), g.sheen && a.enable(16), g.opaque && a.enable(17), g.pointsUvs && a.enable(18), g.decodeVideoTexture && a.enable(19), g.decodeVideoTextureEmissive && a.enable(20), g.alphaToCoverage && a.enable(21), v.push(a.mask);
  }
  function E(v) {
    const g = _[v.type];
    let A;
    if (g) {
      const U = cn[g];
      A = cs.clone(U.uniforms);
    } else
      A = v.uniforms;
    return A;
  }
  function I(v, g) {
    let A;
    for (let U = 0, N = h.length; U < N; U++) {
      const H = h[U];
      if (H.cacheKey === g) {
        A = H, ++A.usedTimes;
        break;
      }
    }
    return A === void 0 && (A = new Am(i, g, v, s), h.push(A)), A;
  }
  function C(v) {
    if (--v.usedTimes === 0) {
      const g = h.indexOf(v);
      h[g] = h[h.length - 1], h.pop(), v.destroy();
    }
  }
  function y(v) {
    l.remove(v);
  }
  function b() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: d,
    getUniforms: E,
    acquireProgram: I,
    releaseProgram: C,
    releaseShaderCache: y,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: b
  };
}
function Dm() {
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
function Lm(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function vl(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function xl() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(f, u, p, _, S, m) {
    let d = i[e];
    return d === void 0 ? (d = {
      id: f.id,
      object: f,
      geometry: u,
      material: p,
      groupOrder: _,
      renderOrder: f.renderOrder,
      z: S,
      group: m
    }, i[e] = d) : (d.id = f.id, d.object = f, d.geometry = u, d.material = p, d.groupOrder = _, d.renderOrder = f.renderOrder, d.z = S, d.group = m), e++, d;
  }
  function a(f, u, p, _, S, m) {
    const d = o(f, u, p, _, S, m);
    p.transmission > 0 ? n.push(d) : p.transparent === !0 ? r.push(d) : t.push(d);
  }
  function l(f, u, p, _, S, m) {
    const d = o(f, u, p, _, S, m);
    p.transmission > 0 ? n.unshift(d) : p.transparent === !0 ? r.unshift(d) : t.unshift(d);
  }
  function c(f, u) {
    t.length > 1 && t.sort(f || Lm), n.length > 1 && n.sort(u || vl), r.length > 1 && r.sort(u || vl);
  }
  function h() {
    for (let f = e, u = i.length; f < u; f++) {
      const p = i[f];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
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
function Im() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new xl(), i.set(n, [o])) : r >= s.length ? (o = new xl(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Um() {
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
            color: new Ce()
          };
          break;
        case "SpotLight":
          t = {
            position: new B(),
            direction: new B(),
            color: new Ce(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new B(),
            color: new Ce(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new B(),
            skyColor: new Ce(),
            groundColor: new Ce()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ce(),
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
function Nm() {
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
            shadowMapSize: new Ae()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ae()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ae(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Fm = 0;
function Om(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Bm(i) {
  const e = new Um(), t = Nm(), n = {
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
  const r = new B(), s = new ot(), o = new ot();
  function a(c) {
    let h = 0, f = 0, u = 0;
    for (let v = 0; v < 9; v++) n.probe[v].set(0, 0, 0);
    let p = 0, _ = 0, S = 0, m = 0, d = 0, P = 0, R = 0, E = 0, I = 0, C = 0, y = 0;
    c.sort(Om);
    for (let v = 0, g = c.length; v < g; v++) {
      const A = c[v], U = A.color, N = A.intensity, H = A.distance, Z = A.shadow && A.shadow.map ? A.shadow.map.texture : null;
      if (A.isAmbientLight)
        h += U.r * N, f += U.g * N, u += U.b * N;
      else if (A.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(A.sh.coefficients[G], N);
        y++;
      } else if (A.isDirectionalLight) {
        const G = e.get(A);
        if (G.color.copy(A.color).multiplyScalar(A.intensity), A.castShadow) {
          const ne = A.shadow, W = t.get(A);
          W.shadowIntensity = ne.intensity, W.shadowBias = ne.bias, W.shadowNormalBias = ne.normalBias, W.shadowRadius = ne.radius, W.shadowMapSize = ne.mapSize, n.directionalShadow[p] = W, n.directionalShadowMap[p] = Z, n.directionalShadowMatrix[p] = A.shadow.matrix, P++;
        }
        n.directional[p] = G, p++;
      } else if (A.isSpotLight) {
        const G = e.get(A);
        G.position.setFromMatrixPosition(A.matrixWorld), G.color.copy(U).multiplyScalar(N), G.distance = H, G.coneCos = Math.cos(A.angle), G.penumbraCos = Math.cos(A.angle * (1 - A.penumbra)), G.decay = A.decay, n.spot[S] = G;
        const ne = A.shadow;
        if (A.map && (n.spotLightMap[I] = A.map, I++, ne.updateMatrices(A), A.castShadow && C++), n.spotLightMatrix[S] = ne.matrix, A.castShadow) {
          const W = t.get(A);
          W.shadowIntensity = ne.intensity, W.shadowBias = ne.bias, W.shadowNormalBias = ne.normalBias, W.shadowRadius = ne.radius, W.shadowMapSize = ne.mapSize, n.spotShadow[S] = W, n.spotShadowMap[S] = Z, E++;
        }
        S++;
      } else if (A.isRectAreaLight) {
        const G = e.get(A);
        G.color.copy(U).multiplyScalar(N), G.halfWidth.set(A.width * 0.5, 0, 0), G.halfHeight.set(0, A.height * 0.5, 0), n.rectArea[m] = G, m++;
      } else if (A.isPointLight) {
        const G = e.get(A);
        if (G.color.copy(A.color).multiplyScalar(A.intensity), G.distance = A.distance, G.decay = A.decay, A.castShadow) {
          const ne = A.shadow, W = t.get(A);
          W.shadowIntensity = ne.intensity, W.shadowBias = ne.bias, W.shadowNormalBias = ne.normalBias, W.shadowRadius = ne.radius, W.shadowMapSize = ne.mapSize, W.shadowCameraNear = ne.camera.near, W.shadowCameraFar = ne.camera.far, n.pointShadow[_] = W, n.pointShadowMap[_] = Z, n.pointShadowMatrix[_] = A.shadow.matrix, R++;
        }
        n.point[_] = G, _++;
      } else if (A.isHemisphereLight) {
        const G = e.get(A);
        G.skyColor.copy(A.color).multiplyScalar(N), G.groundColor.copy(A.groundColor).multiplyScalar(N), n.hemi[d] = G, d++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = se.LTC_FLOAT_1, n.rectAreaLTC2 = se.LTC_FLOAT_2) : (n.rectAreaLTC1 = se.LTC_HALF_1, n.rectAreaLTC2 = se.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = u;
    const b = n.hash;
    (b.directionalLength !== p || b.pointLength !== _ || b.spotLength !== S || b.rectAreaLength !== m || b.hemiLength !== d || b.numDirectionalShadows !== P || b.numPointShadows !== R || b.numSpotShadows !== E || b.numSpotMaps !== I || b.numLightProbes !== y) && (n.directional.length = p, n.spot.length = S, n.rectArea.length = m, n.point.length = _, n.hemi.length = d, n.directionalShadow.length = P, n.directionalShadowMap.length = P, n.pointShadow.length = R, n.pointShadowMap.length = R, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = P, n.pointShadowMatrix.length = R, n.spotLightMatrix.length = E + I - C, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = y, b.directionalLength = p, b.pointLength = _, b.spotLength = S, b.rectAreaLength = m, b.hemiLength = d, b.numDirectionalShadows = P, b.numPointShadows = R, b.numSpotShadows = E, b.numSpotMaps = I, b.numLightProbes = y, n.version = Fm++);
  }
  function l(c, h) {
    let f = 0, u = 0, p = 0, _ = 0, S = 0;
    const m = h.matrixWorldInverse;
    for (let d = 0, P = c.length; d < P; d++) {
      const R = c[d];
      if (R.isDirectionalLight) {
        const E = n.directional[f];
        E.direction.setFromMatrixPosition(R.matrixWorld), r.setFromMatrixPosition(R.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(m), f++;
      } else if (R.isSpotLight) {
        const E = n.spot[p];
        E.position.setFromMatrixPosition(R.matrixWorld), E.position.applyMatrix4(m), E.direction.setFromMatrixPosition(R.matrixWorld), r.setFromMatrixPosition(R.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(m), p++;
      } else if (R.isRectAreaLight) {
        const E = n.rectArea[_];
        E.position.setFromMatrixPosition(R.matrixWorld), E.position.applyMatrix4(m), o.identity(), s.copy(R.matrixWorld), s.premultiply(m), o.extractRotation(s), E.halfWidth.set(R.width * 0.5, 0, 0), E.halfHeight.set(0, R.height * 0.5, 0), E.halfWidth.applyMatrix4(o), E.halfHeight.applyMatrix4(o), _++;
      } else if (R.isPointLight) {
        const E = n.point[u];
        E.position.setFromMatrixPosition(R.matrixWorld), E.position.applyMatrix4(m), u++;
      } else if (R.isHemisphereLight) {
        const E = n.hemi[S];
        E.direction.setFromMatrixPosition(R.matrixWorld), E.direction.transformDirection(m), S++;
      }
    }
  }
  return {
    setup: a,
    setupView: l,
    state: n
  };
}
function Sl(i) {
  const e = new Bm(i), t = [], n = [];
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
function zm(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const o = e.get(r);
    let a;
    return o === void 0 ? (a = new Sl(i), e.set(r, [a])) : s >= o.length ? (a = new Sl(i), o.push(a)) : a = o[s], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Hm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, km = `uniform sampler2D shadow_pass;
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
function Vm(i, e, t) {
  let n = new ro();
  const r = new Ae(), s = new Ae(), o = new ht(), a = new sh({ depthPacking: mu }), l = new ah(), c = {}, h = t.maxTextureSize, f = { [Bn]: Bt, [Bt]: Bn, [Mn]: Mn }, u = new At({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ae() },
      radius: { value: 4 }
    },
    vertexShader: Hm,
    fragmentShader: km
  }), p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new on();
  _.setAttribute(
    "position",
    new Yt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const S = new Ot(_, u), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Za;
  let d = this.type;
  this.render = function(C, y, b) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || C.length === 0) return;
    const v = i.getRenderTarget(), g = i.getActiveCubeFace(), A = i.getActiveMipmapLevel(), U = i.state;
    U.setBlending(Fn), U.buffers.color.setClear(1, 1, 1, 1), U.buffers.depth.setTest(!0), U.setScissorTest(!1);
    const N = d !== vn && this.type === vn, H = d === vn && this.type !== vn;
    for (let Z = 0, G = C.length; Z < G; Z++) {
      const ne = C[Z], W = ne.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      r.copy(W.mapSize);
      const oe = W.getFrameExtents();
      if (r.multiply(oe), s.copy(W.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / oe.x), r.x = s.x * oe.x, W.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / oe.y), r.y = s.y * oe.y, W.mapSize.y = s.y)), W.map === null || N === !0 || H === !0) {
        const Se = this.type !== vn ? { minFilter: zt, magFilter: zt } : {};
        W.map !== null && W.map.dispose(), W.map = new ni(r.x, r.y, Se), W.map.texture.name = ne.name + ".shadowMap", W.camera.updateProjectionMatrix();
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
        ), U.viewport(o), W.updateMatrices(ne, Se), n = W.getFrustum(), E(y, b, W.camera, ne, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === vn && P(W, b), W.needsUpdate = !1;
    }
    d = this.type, m.needsUpdate = !1, i.setRenderTarget(v, g, A);
  };
  function P(C, y) {
    const b = e.update(S);
    u.defines.VSM_SAMPLES !== C.blurSamples && (u.defines.VSM_SAMPLES = C.blurSamples, p.defines.VSM_SAMPLES = C.blurSamples, u.needsUpdate = !0, p.needsUpdate = !0), C.mapPass === null && (C.mapPass = new ni(r.x, r.y)), u.uniforms.shadow_pass.value = C.map.texture, u.uniforms.resolution.value = C.mapSize, u.uniforms.radius.value = C.radius, i.setRenderTarget(C.mapPass), i.clear(), i.renderBufferDirect(y, null, b, u, S, null), p.uniforms.shadow_pass.value = C.mapPass.texture, p.uniforms.resolution.value = C.mapSize, p.uniforms.radius.value = C.radius, i.setRenderTarget(C.map), i.clear(), i.renderBufferDirect(y, null, b, p, S, null);
  }
  function R(C, y, b, v) {
    let g = null;
    const A = b.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (A !== void 0)
      g = A;
    else if (g = b.isPointLight === !0 ? l : a, i.localClippingEnabled && y.clipShadows === !0 && Array.isArray(y.clippingPlanes) && y.clippingPlanes.length !== 0 || y.displacementMap && y.displacementScale !== 0 || y.alphaMap && y.alphaTest > 0 || y.map && y.alphaTest > 0) {
      const U = g.uuid, N = y.uuid;
      let H = c[U];
      H === void 0 && (H = {}, c[U] = H);
      let Z = H[N];
      Z === void 0 && (Z = g.clone(), H[N] = Z, y.addEventListener("dispose", I)), g = Z;
    }
    if (g.visible = y.visible, g.wireframe = y.wireframe, v === vn ? g.side = y.shadowSide !== null ? y.shadowSide : y.side : g.side = y.shadowSide !== null ? y.shadowSide : f[y.side], g.alphaMap = y.alphaMap, g.alphaTest = y.alphaTest, g.map = y.map, g.clipShadows = y.clipShadows, g.clippingPlanes = y.clippingPlanes, g.clipIntersection = y.clipIntersection, g.displacementMap = y.displacementMap, g.displacementScale = y.displacementScale, g.displacementBias = y.displacementBias, g.wireframeLinewidth = y.wireframeLinewidth, g.linewidth = y.linewidth, b.isPointLight === !0 && g.isMeshDistanceMaterial === !0) {
      const U = i.properties.get(g);
      U.light = b;
    }
    return g;
  }
  function E(C, y, b, v, g) {
    if (C.visible === !1) return;
    if (C.layers.test(y.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && g === vn) && (!C.frustumCulled || n.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, C.matrixWorld);
      const N = e.update(C), H = C.material;
      if (Array.isArray(H)) {
        const Z = N.groups;
        for (let G = 0, ne = Z.length; G < ne; G++) {
          const W = Z[G], oe = H[W.materialIndex];
          if (oe && oe.visible) {
            const pe = R(C, oe, v, g);
            C.onBeforeShadow(i, C, y, b, N, pe, W), i.renderBufferDirect(b, null, N, pe, C, W), C.onAfterShadow(i, C, y, b, N, pe, W);
          }
        }
      } else if (H.visible) {
        const Z = R(C, H, v, g);
        C.onBeforeShadow(i, C, y, b, N, Z, null), i.renderBufferDirect(b, null, N, Z, C, null), C.onAfterShadow(i, C, y, b, N, Z, null);
      }
    }
    const U = C.children;
    for (let N = 0, H = U.length; N < H; N++)
      E(U[N], y, b, v, g);
  }
  function I(C) {
    C.target.removeEventListener("dispose", I);
    for (const b in c) {
      const v = c[b], g = C.target.uuid;
      g in v && (v[g].dispose(), delete v[g]);
    }
  }
}
const Gm = {
  [oa]: la,
  [ca]: da,
  [ua]: fa,
  [Li]: ha,
  [la]: oa,
  [da]: ca,
  [fa]: ua,
  [ha]: Li
};
function Wm(i, e) {
  function t() {
    let L = !1;
    const ue = new ht();
    let X = null;
    const j = new ht(0, 0, 0, 0);
    return {
      setMask: function(de) {
        X !== de && !L && (i.colorMask(de, de, de, de), X = de);
      },
      setLocked: function(de) {
        L = de;
      },
      setClear: function(de, he, Ue, lt, Et) {
        Et === !0 && (de *= lt, he *= lt, Ue *= lt), ue.set(de, he, Ue, lt), j.equals(ue) === !1 && (i.clearColor(de, he, Ue, lt), j.copy(ue));
      },
      reset: function() {
        L = !1, X = null, j.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let L = !1, ue = !1, X = null, j = null, de = null;
    return {
      setReversed: function(he) {
        if (ue !== he) {
          const Ue = e.get("EXT_clip_control");
          he ? Ue.clipControlEXT(Ue.LOWER_LEFT_EXT, Ue.ZERO_TO_ONE_EXT) : Ue.clipControlEXT(Ue.LOWER_LEFT_EXT, Ue.NEGATIVE_ONE_TO_ONE_EXT), ue = he;
          const lt = de;
          de = null, this.setClear(lt);
        }
      },
      getReversed: function() {
        return ue;
      },
      setTest: function(he) {
        he ? ae(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
      },
      setMask: function(he) {
        X !== he && !L && (i.depthMask(he), X = he);
      },
      setFunc: function(he) {
        if (ue && (he = Gm[he]), j !== he) {
          switch (he) {
            case oa:
              i.depthFunc(i.NEVER);
              break;
            case la:
              i.depthFunc(i.ALWAYS);
              break;
            case ca:
              i.depthFunc(i.LESS);
              break;
            case Li:
              i.depthFunc(i.LEQUAL);
              break;
            case ua:
              i.depthFunc(i.EQUAL);
              break;
            case ha:
              i.depthFunc(i.GEQUAL);
              break;
            case da:
              i.depthFunc(i.GREATER);
              break;
            case fa:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          j = he;
        }
      },
      setLocked: function(he) {
        L = he;
      },
      setClear: function(he) {
        de !== he && (ue && (he = 1 - he), i.clearDepth(he), de = he);
      },
      reset: function() {
        L = !1, X = null, j = null, de = null, ue = !1;
      }
    };
  }
  function r() {
    let L = !1, ue = null, X = null, j = null, de = null, he = null, Ue = null, lt = null, Et = null;
    return {
      setTest: function(Ke) {
        L || (Ke ? ae(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
      },
      setMask: function(Ke) {
        ue !== Ke && !L && (i.stencilMask(Ke), ue = Ke);
      },
      setFunc: function(Ke, Kt, hn) {
        (X !== Ke || j !== Kt || de !== hn) && (i.stencilFunc(Ke, Kt, hn), X = Ke, j = Kt, de = hn);
      },
      setOp: function(Ke, Kt, hn) {
        (he !== Ke || Ue !== Kt || lt !== hn) && (i.stencilOp(Ke, Kt, hn), he = Ke, Ue = Kt, lt = hn);
      },
      setLocked: function(Ke) {
        L = Ke;
      },
      setClear: function(Ke) {
        Et !== Ke && (i.clearStencil(Ke), Et = Ke);
      },
      reset: function() {
        L = !1, ue = null, X = null, j = null, de = null, he = null, Ue = null, lt = null, Et = null;
      }
    };
  }
  const s = new t(), o = new n(), a = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, u = /* @__PURE__ */ new WeakMap(), p = [], _ = null, S = !1, m = null, d = null, P = null, R = null, E = null, I = null, C = null, y = new Ce(0, 0, 0), b = 0, v = !1, g = null, A = null, U = null, N = null, H = null;
  const Z = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = !1, ne = 0;
  const W = i.getParameter(i.VERSION);
  W.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(W)[1]), G = ne >= 1) : W.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(W)[1]), G = ne >= 2);
  let oe = null, pe = {};
  const Se = i.getParameter(i.SCISSOR_BOX), Oe = i.getParameter(i.VIEWPORT), Ze = new ht().fromArray(Se), Y = new ht().fromArray(Oe);
  function re(L, ue, X, j) {
    const de = new Uint8Array(4), he = i.createTexture();
    i.bindTexture(L, he), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ue = 0; Ue < X; Ue++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY ? i.texImage3D(ue, 0, i.RGBA, 1, 1, j, 0, i.RGBA, i.UNSIGNED_BYTE, de) : i.texImage2D(ue + Ue, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, de);
    return he;
  }
  const ge = {};
  ge[i.TEXTURE_2D] = re(i.TEXTURE_2D, i.TEXTURE_2D, 1), ge[i.TEXTURE_CUBE_MAP] = re(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ge[i.TEXTURE_2D_ARRAY] = re(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ge[i.TEXTURE_3D] = re(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ae(i.DEPTH_TEST), o.setFunc(Li), Ge(!1), Ve(vo), ae(i.CULL_FACE), D(Fn);
  function ae(L) {
    h[L] !== !0 && (i.enable(L), h[L] = !0);
  }
  function ye(L) {
    h[L] !== !1 && (i.disable(L), h[L] = !1);
  }
  function We(L, ue) {
    return f[L] !== ue ? (i.bindFramebuffer(L, ue), f[L] = ue, L === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = ue), L === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = ue), !0) : !1;
  }
  function we(L, ue) {
    let X = p, j = !1;
    if (L) {
      X = u.get(ue), X === void 0 && (X = [], u.set(ue, X));
      const de = L.textures;
      if (X.length !== de.length || X[0] !== i.COLOR_ATTACHMENT0) {
        for (let he = 0, Ue = de.length; he < Ue; he++)
          X[he] = i.COLOR_ATTACHMENT0 + he;
        X.length = de.length, j = !0;
      }
    } else
      X[0] !== i.BACK && (X[0] = i.BACK, j = !0);
    j && i.drawBuffers(X);
  }
  function at(L) {
    return _ !== L ? (i.useProgram(L), _ = L, !0) : !1;
  }
  const tt = {
    [$n]: i.FUNC_ADD,
    [Hc]: i.FUNC_SUBTRACT,
    [kc]: i.FUNC_REVERSE_SUBTRACT
  };
  tt[Vc] = i.MIN, tt[Gc] = i.MAX;
  const ze = {
    [Wc]: i.ZERO,
    [Xc]: i.ONE,
    [Yc]: i.SRC_COLOR,
    [sa]: i.SRC_ALPHA,
    [Jc]: i.SRC_ALPHA_SATURATE,
    [$c]: i.DST_COLOR,
    [Zc]: i.DST_ALPHA,
    [qc]: i.ONE_MINUS_SRC_COLOR,
    [aa]: i.ONE_MINUS_SRC_ALPHA,
    [Kc]: i.ONE_MINUS_DST_COLOR,
    [jc]: i.ONE_MINUS_DST_ALPHA,
    [Qc]: i.CONSTANT_COLOR,
    [eu]: i.ONE_MINUS_CONSTANT_COLOR,
    [tu]: i.CONSTANT_ALPHA,
    [nu]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function D(L, ue, X, j, de, he, Ue, lt, Et, Ke) {
    if (L === Fn) {
      S === !0 && (ye(i.BLEND), S = !1);
      return;
    }
    if (S === !1 && (ae(i.BLEND), S = !0), L !== zc) {
      if (L !== m || Ke !== v) {
        if ((d !== $n || E !== $n) && (i.blendEquation(i.FUNC_ADD), d = $n, E = $n), Ke)
          switch (L) {
            case Pi:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case xo:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case So:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Mo:
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
            case xo:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case So:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Mo:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        P = null, R = null, I = null, C = null, y.set(0, 0, 0), b = 0, m = L, v = Ke;
      }
      return;
    }
    de = de || ue, he = he || X, Ue = Ue || j, (ue !== d || de !== E) && (i.blendEquationSeparate(tt[ue], tt[de]), d = ue, E = de), (X !== P || j !== R || he !== I || Ue !== C) && (i.blendFuncSeparate(ze[X], ze[j], ze[he], ze[Ue]), P = X, R = j, I = he, C = Ue), (lt.equals(y) === !1 || Et !== b) && (i.blendColor(lt.r, lt.g, lt.b, Et), y.copy(lt), b = Et), m = L, v = !1;
  }
  function Rt(L, ue) {
    L.side === Mn ? ye(i.CULL_FACE) : ae(i.CULL_FACE);
    let X = L.side === Bt;
    ue && (X = !X), Ge(X), L.blending === Pi && L.transparent === !1 ? D(Fn) : D(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), o.setFunc(L.depthFunc), o.setTest(L.depthTest), o.setMask(L.depthWrite), s.setMask(L.colorWrite);
    const j = L.stencilWrite;
    a.setTest(j), j && (a.setMask(L.stencilWriteMask), a.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), a.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Qe(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? ae(i.SAMPLE_ALPHA_TO_COVERAGE) : ye(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ge(L) {
    g !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), g = L);
  }
  function Ve(L) {
    L !== Fc ? (ae(i.CULL_FACE), L !== A && (L === vo ? i.cullFace(i.BACK) : L === Oc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ye(i.CULL_FACE), A = L;
  }
  function ve(L) {
    L !== U && (G && i.lineWidth(L), U = L);
  }
  function Qe(L, ue, X) {
    L ? (ae(i.POLYGON_OFFSET_FILL), (N !== ue || H !== X) && (i.polygonOffset(ue, X), N = ue, H = X)) : ye(i.POLYGON_OFFSET_FILL);
  }
  function xe(L) {
    L ? ae(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function T(L) {
    L === void 0 && (L = i.TEXTURE0 + Z - 1), oe !== L && (i.activeTexture(L), oe = L);
  }
  function x(L, ue, X) {
    X === void 0 && (oe === null ? X = i.TEXTURE0 + Z - 1 : X = oe);
    let j = pe[X];
    j === void 0 && (j = { type: void 0, texture: void 0 }, pe[X] = j), (j.type !== L || j.texture !== ue) && (oe !== X && (i.activeTexture(X), oe = X), i.bindTexture(L, ue || ge[L]), j.type = L, j.texture = ue);
  }
  function z() {
    const L = pe[oe];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function q() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function $() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function w() {
    try {
      i.texSubImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function J() {
    try {
      i.texSubImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ee() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ie() {
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
  function Q() {
    try {
      i.texStorage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function fe() {
    try {
      i.texImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function be() {
    try {
      i.texImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Me(L) {
    Ze.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), Ze.copy(L));
  }
  function le(L) {
    Y.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), Y.copy(L));
  }
  function He(L, ue) {
    let X = c.get(ue);
    X === void 0 && (X = /* @__PURE__ */ new WeakMap(), c.set(ue, X));
    let j = X.get(L);
    j === void 0 && (j = i.getUniformBlockIndex(ue, L.name), X.set(L, j));
  }
  function Be(L, ue) {
    const j = c.get(ue).get(L);
    l.get(ue) !== j && (i.uniformBlockBinding(ue, j, L.__bindingPointIndex), l.set(ue, j));
  }
  function et() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), o.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, oe = null, pe = {}, f = {}, u = /* @__PURE__ */ new WeakMap(), p = [], _ = null, S = !1, m = null, d = null, P = null, R = null, E = null, I = null, C = null, y = new Ce(0, 0, 0), b = 0, v = !1, g = null, A = null, U = null, N = null, H = null, Ze.set(0, 0, i.canvas.width, i.canvas.height), Y.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), o.reset(), a.reset();
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
    drawBuffers: we,
    useProgram: at,
    setBlending: D,
    setMaterial: Rt,
    setFlipSided: Ge,
    setCullFace: Ve,
    setLineWidth: ve,
    setPolygonOffset: Qe,
    setScissorTest: xe,
    activeTexture: T,
    bindTexture: x,
    unbindTexture: z,
    compressedTexImage2D: q,
    compressedTexImage3D: $,
    texImage2D: fe,
    texImage3D: be,
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
function Xm(i, e, t, n, r, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Ae(), h = /* @__PURE__ */ new WeakMap();
  let f;
  const u = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(T, x) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, x)
    ) : ur("canvas");
  }
  function S(T, x, z) {
    let q = 1;
    const $ = xe(T);
    if (($.width > z || $.height > z) && (q = z / Math.max($.width, $.height)), q < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const w = Math.floor(q * $.width), J = Math.floor(q * $.height);
        f === void 0 && (f = _(w, J));
        const ee = x ? _(w, J) : f;
        return ee.width = w, ee.height = J, ee.getContext("2d").drawImage(T, 0, 0, w, J), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + w + "x" + J + ")."), ee;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), T;
    return T;
  }
  function m(T) {
    return T.generateMipmaps;
  }
  function d(T) {
    i.generateMipmap(T);
  }
  function P(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function R(T, x, z, q, $ = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let w = x;
    if (x === i.RED && (z === i.FLOAT && (w = i.R32F), z === i.HALF_FLOAT && (w = i.R16F), z === i.UNSIGNED_BYTE && (w = i.R8)), x === i.RED_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.R8UI), z === i.UNSIGNED_SHORT && (w = i.R16UI), z === i.UNSIGNED_INT && (w = i.R32UI), z === i.BYTE && (w = i.R8I), z === i.SHORT && (w = i.R16I), z === i.INT && (w = i.R32I)), x === i.RG && (z === i.FLOAT && (w = i.RG32F), z === i.HALF_FLOAT && (w = i.RG16F), z === i.UNSIGNED_BYTE && (w = i.RG8)), x === i.RG_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.RG8UI), z === i.UNSIGNED_SHORT && (w = i.RG16UI), z === i.UNSIGNED_INT && (w = i.RG32UI), z === i.BYTE && (w = i.RG8I), z === i.SHORT && (w = i.RG16I), z === i.INT && (w = i.RG32I)), x === i.RGB_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.RGB8UI), z === i.UNSIGNED_SHORT && (w = i.RGB16UI), z === i.UNSIGNED_INT && (w = i.RGB32UI), z === i.BYTE && (w = i.RGB8I), z === i.SHORT && (w = i.RGB16I), z === i.INT && (w = i.RGB32I)), x === i.RGBA_INTEGER && (z === i.UNSIGNED_BYTE && (w = i.RGBA8UI), z === i.UNSIGNED_SHORT && (w = i.RGBA16UI), z === i.UNSIGNED_INT && (w = i.RGBA32UI), z === i.BYTE && (w = i.RGBA8I), z === i.SHORT && (w = i.RGBA16I), z === i.INT && (w = i.RGBA32I)), x === i.RGB && z === i.UNSIGNED_INT_5_9_9_9_REV && (w = i.RGB9_E5), x === i.RGBA) {
      const J = $ ? os : Ye.getTransfer(q);
      z === i.FLOAT && (w = i.RGBA32F), z === i.HALF_FLOAT && (w = i.RGBA16F), z === i.UNSIGNED_BYTE && (w = J === Je ? i.SRGB8_ALPHA8 : i.RGBA8), z === i.UNSIGNED_SHORT_4_4_4_4 && (w = i.RGBA4), z === i.UNSIGNED_SHORT_5_5_5_1 && (w = i.RGB5_A1);
    }
    return (w === i.R16F || w === i.R32F || w === i.RG16F || w === i.RG32F || w === i.RGBA16F || w === i.RGBA32F) && e.get("EXT_color_buffer_float"), w;
  }
  function E(T, x) {
    let z;
    return T ? x === null || x === ti || x === or ? z = i.DEPTH24_STENCIL8 : x === sn ? z = i.DEPTH32F_STENCIL8 : x === ar && (z = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === ti || x === or ? z = i.DEPTH_COMPONENT24 : x === sn ? z = i.DEPTH_COMPONENT32F : x === ar && (z = i.DEPTH_COMPONENT16), z;
  }
  function I(T, x) {
    return m(T) === !0 || T.isFramebufferTexture && T.minFilter !== zt && T.minFilter !== Gt ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function C(T) {
    const x = T.target;
    x.removeEventListener("dispose", C), b(x), x.isVideoTexture && h.delete(x);
  }
  function y(T) {
    const x = T.target;
    x.removeEventListener("dispose", y), g(x);
  }
  function b(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0) return;
    const z = T.source, q = u.get(z);
    if (q) {
      const $ = q[x.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && v(T), Object.keys(q).length === 0 && u.delete(z);
    }
    n.remove(T);
  }
  function v(T) {
    const x = n.get(T);
    i.deleteTexture(x.__webglTexture);
    const z = T.source, q = u.get(z);
    delete q[x.__cacheKey], o.memory.textures--;
  }
  function g(T) {
    const x = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
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
    const z = T.textures;
    for (let q = 0, $ = z.length; q < $; q++) {
      const w = n.get(z[q]);
      w.__webglTexture && (i.deleteTexture(w.__webglTexture), o.memory.textures--), n.remove(z[q]);
    }
    n.remove(T);
  }
  let A = 0;
  function U() {
    A = 0;
  }
  function N() {
    const T = A;
    return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), A += 1, T;
  }
  function H(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function Z(T, x) {
    const z = n.get(T);
    if (T.isVideoTexture && ve(T), T.isRenderTargetTexture === !1 && T.version > 0 && z.__version !== T.version) {
      const q = T.image;
      if (q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(z, T, x);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function G(T, x) {
    const z = n.get(T);
    if (T.version > 0 && z.__version !== T.version) {
      Y(z, T, x);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, z.__webglTexture, i.TEXTURE0 + x);
  }
  function ne(T, x) {
    const z = n.get(T);
    if (T.version > 0 && z.__version !== T.version) {
      Y(z, T, x);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function W(T, x) {
    const z = n.get(T);
    if (T.version > 0 && z.__version !== T.version) {
      re(z, T, x);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture, i.TEXTURE0 + x);
  }
  const oe = {
    [as]: i.REPEAT,
    [En]: i.CLAMP_TO_EDGE,
    [_a]: i.MIRRORED_REPEAT
  }, pe = {
    [zt]: i.NEAREST,
    [du]: i.NEAREST_MIPMAP_NEAREST,
    [Sr]: i.NEAREST_MIPMAP_LINEAR,
    [Gt]: i.LINEAR,
    [Ms]: i.LINEAR_MIPMAP_NEAREST,
    [ei]: i.LINEAR_MIPMAP_LINEAR
  }, Se = {
    [vu]: i.NEVER,
    [Tu]: i.ALWAYS,
    [xu]: i.LESS,
    [Ql]: i.LEQUAL,
    [Su]: i.EQUAL,
    [yu]: i.GEQUAL,
    [Mu]: i.GREATER,
    [Eu]: i.NOTEQUAL
  };
  function Oe(T, x) {
    if (x.type === sn && e.has("OES_texture_float_linear") === !1 && (x.magFilter === Gt || x.magFilter === Ms || x.magFilter === Sr || x.magFilter === ei || x.minFilter === Gt || x.minFilter === Ms || x.minFilter === Sr || x.minFilter === ei) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, oe[x.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, oe[x.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, oe[x.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, pe[x.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, pe[x.minFilter]), x.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Se[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === zt || x.minFilter !== Sr && x.minFilter !== ei || x.type === sn && e.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const z = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, r.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function Ze(T, x) {
    let z = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", C));
    const q = x.source;
    let $ = u.get(q);
    $ === void 0 && ($ = {}, u.set(q, $));
    const w = H(x);
    if (w !== T.__cacheKey) {
      $[w] === void 0 && ($[w] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, z = !0), $[w].usedTimes++;
      const J = $[T.__cacheKey];
      J !== void 0 && ($[T.__cacheKey].usedTimes--, J.usedTimes === 0 && v(x)), T.__cacheKey = w, T.__webglTexture = $[w].texture;
    }
    return z;
  }
  function Y(T, x, z) {
    let q = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (q = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (q = i.TEXTURE_3D);
    const $ = Ze(T, x), w = x.source;
    t.bindTexture(q, T.__webglTexture, i.TEXTURE0 + z);
    const J = n.get(w);
    if (w.version !== J.__version || $ === !0) {
      t.activeTexture(i.TEXTURE0 + z);
      const ee = Ye.getPrimaries(Ye.workingColorSpace), ie = x.colorSpace === Un ? null : Ye.getPrimaries(x.colorSpace), Le = x.colorSpace === Un || ee === ie ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Le);
      let Q = S(x.image, !1, r.maxTextureSize);
      Q = Qe(x, Q);
      const fe = s.convert(x.format, x.colorSpace), be = s.convert(x.type);
      let Me = R(x.internalFormat, fe, be, x.colorSpace, x.isVideoTexture);
      Oe(q, x);
      let le;
      const He = x.mipmaps, Be = x.isVideoTexture !== !0, et = J.__version === void 0 || $ === !0, L = w.dataReady, ue = I(x, Q);
      if (x.isDepthTexture)
        Me = E(x.format === cr, x.type), et && (Be ? t.texStorage2D(i.TEXTURE_2D, 1, Me, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, Me, Q.width, Q.height, 0, fe, be, null));
      else if (x.isDataTexture)
        if (He.length > 0) {
          Be && et && t.texStorage2D(i.TEXTURE_2D, ue, Me, He[0].width, He[0].height);
          for (let X = 0, j = He.length; X < j; X++)
            le = He[X], Be ? L && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, le.width, le.height, fe, be, le.data) : t.texImage2D(i.TEXTURE_2D, X, Me, le.width, le.height, 0, fe, be, le.data);
          x.generateMipmaps = !1;
        } else
          Be ? (et && t.texStorage2D(i.TEXTURE_2D, ue, Me, Q.width, Q.height), L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, fe, be, Q.data)) : t.texImage2D(i.TEXTURE_2D, 0, Me, Q.width, Q.height, 0, fe, be, Q.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Be && et && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, Me, He[0].width, He[0].height, Q.depth);
          for (let X = 0, j = He.length; X < j; X++)
            if (le = He[X], x.format !== Wt)
              if (fe !== null)
                if (Be) {
                  if (L)
                    if (x.layerUpdates.size > 0) {
                      const de = $o(le.width, le.height, x.format, x.type);
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
              Be ? L && t.texSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, le.width, le.height, Q.depth, fe, be, le.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, X, Me, le.width, le.height, Q.depth, 0, fe, be, le.data);
        } else {
          Be && et && t.texStorage2D(i.TEXTURE_2D, ue, Me, He[0].width, He[0].height);
          for (let X = 0, j = He.length; X < j; X++)
            le = He[X], x.format !== Wt ? fe !== null ? Be ? L && t.compressedTexSubImage2D(i.TEXTURE_2D, X, 0, 0, le.width, le.height, fe, le.data) : t.compressedTexImage2D(i.TEXTURE_2D, X, Me, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? L && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, le.width, le.height, fe, be, le.data) : t.texImage2D(i.TEXTURE_2D, X, Me, le.width, le.height, 0, fe, be, le.data);
        }
      else if (x.isDataArrayTexture)
        if (Be) {
          if (et && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, Me, Q.width, Q.height, Q.depth), L)
            if (x.layerUpdates.size > 0) {
              const X = $o(Q.width, Q.height, x.format, x.type);
              for (const j of x.layerUpdates) {
                const de = Q.data.subarray(
                  j * X / Q.data.BYTES_PER_ELEMENT,
                  (j + 1) * X / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, j, Q.width, Q.height, 1, fe, be, de);
              }
              x.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, fe, be, Q.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Me, Q.width, Q.height, Q.depth, 0, fe, be, Q.data);
      else if (x.isData3DTexture)
        Be ? (et && t.texStorage3D(i.TEXTURE_3D, ue, Me, Q.width, Q.height, Q.depth), L && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, fe, be, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, Me, Q.width, Q.height, Q.depth, 0, fe, be, Q.data);
      else if (x.isFramebufferTexture) {
        if (et)
          if (Be)
            t.texStorage2D(i.TEXTURE_2D, ue, Me, Q.width, Q.height);
          else {
            let X = Q.width, j = Q.height;
            for (let de = 0; de < ue; de++)
              t.texImage2D(i.TEXTURE_2D, de, Me, X, j, 0, fe, be, null), X >>= 1, j >>= 1;
          }
      } else if (He.length > 0) {
        if (Be && et) {
          const X = xe(He[0]);
          t.texStorage2D(i.TEXTURE_2D, ue, Me, X.width, X.height);
        }
        for (let X = 0, j = He.length; X < j; X++)
          le = He[X], Be ? L && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, fe, be, le) : t.texImage2D(i.TEXTURE_2D, X, Me, fe, be, le);
        x.generateMipmaps = !1;
      } else if (Be) {
        if (et) {
          const X = xe(Q);
          t.texStorage2D(i.TEXTURE_2D, ue, Me, X.width, X.height);
        }
        L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, fe, be, Q);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Me, fe, be, Q);
      m(x) && d(q), J.__version = w.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function re(T, x, z) {
    if (x.image.length !== 6) return;
    const q = Ze(T, x), $ = x.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + z);
    const w = n.get($);
    if ($.version !== w.__version || q === !0) {
      t.activeTexture(i.TEXTURE0 + z);
      const J = Ye.getPrimaries(Ye.workingColorSpace), ee = x.colorSpace === Un ? null : Ye.getPrimaries(x.colorSpace), ie = x.colorSpace === Un || J === ee ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ie);
      const Le = x.isCompressedTexture || x.image[0].isCompressedTexture, Q = x.image[0] && x.image[0].isDataTexture, fe = [];
      for (let j = 0; j < 6; j++)
        !Le && !Q ? fe[j] = S(x.image[j], !0, r.maxCubemapSize) : fe[j] = Q ? x.image[j].image : x.image[j], fe[j] = Qe(x, fe[j]);
      const be = fe[0], Me = s.convert(x.format, x.colorSpace), le = s.convert(x.type), He = R(x.internalFormat, Me, le, x.colorSpace), Be = x.isVideoTexture !== !0, et = w.__version === void 0 || q === !0, L = $.dataReady;
      let ue = I(x, be);
      Oe(i.TEXTURE_CUBE_MAP, x);
      let X;
      if (Le) {
        Be && et && t.texStorage2D(i.TEXTURE_CUBE_MAP, ue, He, be.width, be.height);
        for (let j = 0; j < 6; j++) {
          X = fe[j].mipmaps;
          for (let de = 0; de < X.length; de++) {
            const he = X[de];
            x.format !== Wt ? Me !== null ? Be ? L && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de, 0, 0, he.width, he.height, Me, he.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de, He, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de, 0, 0, he.width, he.height, Me, le, he.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de, He, he.width, he.height, 0, Me, le, he.data);
          }
        }
      } else {
        if (X = x.mipmaps, Be && et) {
          X.length > 0 && ue++;
          const j = xe(fe[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ue, He, j.width, j.height);
        }
        for (let j = 0; j < 6; j++)
          if (Q) {
            Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, fe[j].width, fe[j].height, Me, le, fe[j].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, He, fe[j].width, fe[j].height, 0, Me, le, fe[j].data);
            for (let de = 0; de < X.length; de++) {
              const Ue = X[de].image[j].image;
              Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de + 1, 0, 0, Ue.width, Ue.height, Me, le, Ue.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de + 1, He, Ue.width, Ue.height, 0, Me, le, Ue.data);
            }
          } else {
            Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, Me, le, fe[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, He, Me, le, fe[j]);
            for (let de = 0; de < X.length; de++) {
              const he = X[de];
              Be ? L && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de + 1, 0, 0, Me, le, he.image[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, de + 1, He, Me, le, he.image[j]);
            }
          }
      }
      m(x) && d(i.TEXTURE_CUBE_MAP), w.__version = $.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function ge(T, x, z, q, $, w) {
    const J = s.convert(z.format, z.colorSpace), ee = s.convert(z.type), ie = R(z.internalFormat, J, ee, z.colorSpace), Le = n.get(x), Q = n.get(z);
    if (Q.__renderTarget = x, !Le.__hasExternalTextures) {
      const fe = Math.max(1, x.width >> w), be = Math.max(1, x.height >> w);
      $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? t.texImage3D($, w, ie, fe, be, x.depth, 0, J, ee, null) : t.texImage2D($, w, ie, fe, be, 0, J, ee, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T), Ve(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, q, $, Q.__webglTexture, 0, Ge(x)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, q, $, Q.__webglTexture, w), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ae(T, x, z) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), x.depthBuffer) {
      const q = x.depthTexture, $ = q && q.isDepthTexture ? q.type : null, w = E(x.stencilBuffer, $), J = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ee = Ge(x);
      Ve(x) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ee, w, x.width, x.height) : z ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ee, w, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, w, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, T);
    } else {
      const q = x.textures;
      for (let $ = 0; $ < q.length; $++) {
        const w = q[$], J = s.convert(w.format, w.colorSpace), ee = s.convert(w.type), ie = R(w.internalFormat, J, ee, w.colorSpace), Le = Ge(x);
        z && Ve(x) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Le, ie, x.width, x.height) : Ve(x) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Le, ie, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, ie, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ye(T, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const q = n.get(x.depthTexture);
    q.__renderTarget = x, (!q.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), Z(x.depthTexture, 0);
    const $ = q.__webglTexture, w = Ge(x);
    if (x.depthTexture.format === lr)
      Ve(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, w) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else if (x.depthTexture.format === cr)
      Ve(x) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, w) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function We(T) {
    const x = n.get(T), z = T.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== T.depthTexture) {
      const q = T.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), q) {
        const $ = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, q.removeEventListener("dispose", $);
        };
        q.addEventListener("dispose", $), x.__depthDisposeCallback = $;
      }
      x.__boundDepthTexture = q;
    }
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (z) throw new Error("target.depthTexture not supported in Cube render targets");
      ye(x.__webglFramebuffer, T);
    } else if (z) {
      x.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[q]), x.__webglDepthbuffer[q] === void 0)
          x.__webglDepthbuffer[q] = i.createRenderbuffer(), ae(x.__webglDepthbuffer[q], T, !1);
        else {
          const $ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, w = x.__webglDepthbuffer[q];
          i.bindRenderbuffer(i.RENDERBUFFER, w), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, w);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
      x.__webglDepthbuffer = i.createRenderbuffer(), ae(x.__webglDepthbuffer, T, !1);
    else {
      const q = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, $ = x.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, $), i.framebufferRenderbuffer(i.FRAMEBUFFER, q, i.RENDERBUFFER, $);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function we(T, x, z) {
    const q = n.get(T);
    x !== void 0 && ge(q.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), z !== void 0 && We(T);
  }
  function at(T) {
    const x = T.texture, z = n.get(T), q = n.get(x);
    T.addEventListener("dispose", y);
    const $ = T.textures, w = T.isWebGLCubeRenderTarget === !0, J = $.length > 1;
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
      if (T.samples > 0 && Ve(T) === !1) {
        z.__webglMultisampledFramebuffer = i.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let ee = 0; ee < $.length; ee++) {
          const ie = $[ee];
          z.__webglColorRenderbuffer[ee] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, z.__webglColorRenderbuffer[ee]);
          const Le = s.convert(ie.format, ie.colorSpace), Q = s.convert(ie.type), fe = R(ie.internalFormat, Le, Q, ie.colorSpace, T.isXRRenderTarget === !0), be = Ge(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, be, fe, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ee, i.RENDERBUFFER, z.__webglColorRenderbuffer[ee]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (z.__webglDepthRenderbuffer = i.createRenderbuffer(), ae(z.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (w) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture), Oe(i.TEXTURE_CUBE_MAP, x);
      for (let ee = 0; ee < 6; ee++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let ie = 0; ie < x.mipmaps.length; ie++)
            ge(z.__webglFramebuffer[ee][ie], T, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, ie);
        else
          ge(z.__webglFramebuffer[ee], T, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0);
      m(x) && d(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (J) {
      for (let ee = 0, ie = $.length; ee < ie; ee++) {
        const Le = $[ee], Q = n.get(Le);
        t.bindTexture(i.TEXTURE_2D, Q.__webglTexture), Oe(i.TEXTURE_2D, Le), ge(z.__webglFramebuffer, T, Le, i.COLOR_ATTACHMENT0 + ee, i.TEXTURE_2D, 0), m(Le) && d(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ee = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ee = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ee, q.__webglTexture), Oe(ee, x), x.mipmaps && x.mipmaps.length > 0)
        for (let ie = 0; ie < x.mipmaps.length; ie++)
          ge(z.__webglFramebuffer[ie], T, x, i.COLOR_ATTACHMENT0, ee, ie);
      else
        ge(z.__webglFramebuffer, T, x, i.COLOR_ATTACHMENT0, ee, 0);
      m(x) && d(ee), t.unbindTexture();
    }
    T.depthBuffer && We(T);
  }
  function tt(T) {
    const x = T.textures;
    for (let z = 0, q = x.length; z < q; z++) {
      const $ = x[z];
      if (m($)) {
        const w = P(T), J = n.get($).__webglTexture;
        t.bindTexture(w, J), d(w), t.unbindTexture();
      }
    }
  }
  const ze = [], D = [];
  function Rt(T) {
    if (T.samples > 0) {
      if (Ve(T) === !1) {
        const x = T.textures, z = T.width, q = T.height;
        let $ = i.COLOR_BUFFER_BIT;
        const w = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, J = n.get(T), ee = x.length > 1;
        if (ee)
          for (let ie = 0; ie < x.length; ie++)
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, J.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglFramebuffer);
        for (let ie = 0; ie < x.length; ie++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)), ee) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, J.__webglColorRenderbuffer[ie]);
            const Le = n.get(x[ie]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Le, 0);
          }
          i.blitFramebuffer(0, 0, z, q, 0, 0, z, q, $, i.NEAREST), l === !0 && (ze.length = 0, D.length = 0, ze.push(i.COLOR_ATTACHMENT0 + ie), T.depthBuffer && T.resolveDepthBuffer === !1 && (ze.push(w), D.push(w), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, D)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ze));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ee)
          for (let ie = 0; ie < x.length; ie++) {
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, J.__webglColorRenderbuffer[ie]);
            const Le = n.get(x[ie]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, Le, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && l) {
        const x = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function Ge(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function Ve(T) {
    const x = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function ve(T) {
    const x = o.render.frame;
    h.get(T) !== x && (h.set(T, x), T.update());
  }
  function Qe(T, x) {
    const z = T.colorSpace, q = T.format, $ = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || z !== Ni && z !== Un && (Ye.getTransfer(z) === Je ? (q !== Wt || $ !== bn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", z)), x;
  }
  function xe(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = N, this.resetTextureUnits = U, this.setTexture2D = Z, this.setTexture2DArray = G, this.setTexture3D = ne, this.setTextureCube = W, this.rebindTextures = we, this.setupRenderTarget = at, this.updateRenderTargetMipmap = tt, this.updateMultisampleRenderTarget = Rt, this.setupDepthRenderbuffer = We, this.setupFrameBufferTexture = ge, this.useMultisampledRTT = Ve;
}
function Ym(i, e) {
  function t(n, r = Un) {
    let s;
    const o = Ye.getTransfer(r);
    if (n === bn) return i.UNSIGNED_BYTE;
    if (n === Ka) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ja) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Xl) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Gl) return i.BYTE;
    if (n === Wl) return i.SHORT;
    if (n === ar) return i.UNSIGNED_SHORT;
    if (n === $a) return i.INT;
    if (n === ti) return i.UNSIGNED_INT;
    if (n === sn) return i.FLOAT;
    if (n === fr) return i.HALF_FLOAT;
    if (n === Yl) return i.ALPHA;
    if (n === ql) return i.RGB;
    if (n === Wt) return i.RGBA;
    if (n === Zl) return i.LUMINANCE;
    if (n === jl) return i.LUMINANCE_ALPHA;
    if (n === lr) return i.DEPTH_COMPONENT;
    if (n === cr) return i.DEPTH_STENCIL;
    if (n === $l) return i.RED;
    if (n === Qa) return i.RED_INTEGER;
    if (n === Kl) return i.RG;
    if (n === eo) return i.RG_INTEGER;
    if (n === to) return i.RGBA_INTEGER;
    if (n === Jr || n === Qr || n === es || n === ts)
      if (o === Je)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === Jr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Qr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === es) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === ts) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Jr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Qr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === es) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === ts) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === ga || n === va || n === xa || n === Sa)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === ga) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === va) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === xa) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Sa) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ma || n === Ea || n === ya)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Ma || n === Ea) return o === Je ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === ya) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Ta || n === ba || n === Aa || n === wa || n === Ra || n === Ca || n === Pa || n === Da || n === La || n === Ia || n === Ua || n === Na || n === Fa || n === Oa)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === Ta) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ba) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Aa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === wa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Ra) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ca) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Pa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Da) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === La) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Ia) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ua) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Na) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Fa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Oa) return o === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === ns || n === Ba || n === za)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === ns) return o === Je ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Ba) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === za) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Jl || n === Ha || n === ka || n === Va)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === ns) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ha) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ka) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Va) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === or ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const qm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Zm = `
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
class jm {
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
      const r = new wt(), s = e.properties.get(r);
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
        vertexShader: qm,
        fragmentShader: Zm,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Ot(new Oi(20, 20), n);
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
class $m extends ii {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, h = null, f = null, u = null, p = null, _ = null;
    const S = new jm(), m = t.getContextAttributes();
    let d = null, P = null;
    const R = [], E = [], I = new Ae();
    let C = null;
    const y = new nn();
    y.viewport = new ht();
    const b = new nn();
    b.viewport = new ht();
    const v = [y, b], g = new mh();
    let A = null, U = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Y) {
      let re = R[Y];
      return re === void 0 && (re = new Gs(), R[Y] = re), re.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let re = R[Y];
      return re === void 0 && (re = new Gs(), R[Y] = re), re.getGripSpace();
    }, this.getHand = function(Y) {
      let re = R[Y];
      return re === void 0 && (re = new Gs(), R[Y] = re), re.getHandSpace();
    };
    function N(Y) {
      const re = E.indexOf(Y.inputSource);
      if (re === -1)
        return;
      const ge = R[re];
      ge !== void 0 && (ge.update(Y.inputSource, Y.frame, c || o), ge.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function H() {
      r.removeEventListener("select", N), r.removeEventListener("selectstart", N), r.removeEventListener("selectend", N), r.removeEventListener("squeeze", N), r.removeEventListener("squeezestart", N), r.removeEventListener("squeezeend", N), r.removeEventListener("end", H), r.removeEventListener("inputsourceschange", Z);
      for (let Y = 0; Y < R.length; Y++) {
        const re = E[Y];
        re !== null && (E[Y] = null, R[Y].disconnect(re));
      }
      A = null, U = null, S.reset(), e.setRenderTarget(d), p = null, u = null, f = null, r = null, P = null, Ze.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(I.width, I.height, !1), n.dispatchEvent({ type: "sessionend" });
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
      return u !== null ? u : p;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Y) {
      if (r = Y, r !== null) {
        if (d = e.getRenderTarget(), r.addEventListener("select", N), r.addEventListener("selectstart", N), r.addEventListener("selectend", N), r.addEventListener("squeeze", N), r.addEventListener("squeezestart", N), r.addEventListener("squeezeend", N), r.addEventListener("end", H), r.addEventListener("inputsourceschange", Z), m.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(I), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ge = null, ae = null, ye = null;
          m.depth && (ye = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ge = m.stencil ? cr : lr, ae = m.stencil ? or : ti);
          const We = {
            colorFormat: t.RGBA8,
            depthFormat: ye,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), u = f.createProjectionLayer(We), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), P = new ni(
            u.textureWidth,
            u.textureHeight,
            {
              format: Wt,
              type: bn,
              depthTexture: new hc(u.textureWidth, u.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, ge),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const ge = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, ge), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), P = new ni(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: Wt,
              type: bn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        P.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), Ze.setContext(r), Ze.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return S.getDepthTexture();
    };
    function Z(Y) {
      for (let re = 0; re < Y.removed.length; re++) {
        const ge = Y.removed[re], ae = E.indexOf(ge);
        ae >= 0 && (E[ae] = null, R[ae].disconnect(ge));
      }
      for (let re = 0; re < Y.added.length; re++) {
        const ge = Y.added[re];
        let ae = E.indexOf(ge);
        if (ae === -1) {
          for (let We = 0; We < R.length; We++)
            if (We >= E.length) {
              E.push(ge), ae = We;
              break;
            } else if (E[We] === null) {
              E[We] = ge, ae = We;
              break;
            }
          if (ae === -1) break;
        }
        const ye = R[ae];
        ye && ye.connect(ge);
      }
    }
    const G = new B(), ne = new B();
    function W(Y, re, ge) {
      G.setFromMatrixPosition(re.matrixWorld), ne.setFromMatrixPosition(ge.matrixWorld);
      const ae = G.distanceTo(ne), ye = re.projectionMatrix.elements, We = ge.projectionMatrix.elements, we = ye[14] / (ye[10] - 1), at = ye[14] / (ye[10] + 1), tt = (ye[9] + 1) / ye[5], ze = (ye[9] - 1) / ye[5], D = (ye[8] - 1) / ye[0], Rt = (We[8] + 1) / We[0], Ge = we * D, Ve = we * Rt, ve = ae / (-D + Rt), Qe = ve * -D;
      if (re.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(Qe), Y.translateZ(ve), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), ye[10] === -1)
        Y.projectionMatrix.copy(re.projectionMatrix), Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);
      else {
        const xe = we + ve, T = at + ve, x = Ge - Qe, z = Ve + (ae - Qe), q = tt * at / T * xe, $ = ze * at / T * xe;
        Y.projectionMatrix.makePerspective(x, z, q, $, xe, T), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function oe(Y, re) {
      re === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(re.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (r === null) return;
      let re = Y.near, ge = Y.far;
      S.texture !== null && (S.depthNear > 0 && (re = S.depthNear), S.depthFar > 0 && (ge = S.depthFar)), g.near = b.near = y.near = re, g.far = b.far = y.far = ge, (A !== g.near || U !== g.far) && (r.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), A = g.near, U = g.far), y.layers.mask = Y.layers.mask | 2, b.layers.mask = Y.layers.mask | 4, g.layers.mask = y.layers.mask | b.layers.mask;
      const ae = Y.parent, ye = g.cameras;
      oe(g, ae);
      for (let We = 0; We < ye.length; We++)
        oe(ye[We], ae);
      ye.length === 2 ? W(g, y, b) : g.projectionMatrix.copy(y.projectionMatrix), pe(Y, g, ae);
    };
    function pe(Y, re, ge) {
      ge === null ? Y.matrix.copy(re.matrixWorld) : (Y.matrix.copy(ge.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(re.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(re.projectionMatrix), Y.projectionMatrixInverse.copy(re.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = Ga * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(u === null && p === null))
        return l;
    }, this.setFoveation = function(Y) {
      l = Y, u !== null && (u.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return S.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return S.getMesh(g);
    };
    let Se = null;
    function Oe(Y, re) {
      if (h = re.getViewerPose(c || o), _ = re, h !== null) {
        const ge = h.views;
        p !== null && (e.setRenderTargetFramebuffer(P, p.framebuffer), e.setRenderTarget(P));
        let ae = !1;
        ge.length !== g.cameras.length && (g.cameras.length = 0, ae = !0);
        for (let we = 0; we < ge.length; we++) {
          const at = ge[we];
          let tt = null;
          if (p !== null)
            tt = p.getViewport(at);
          else {
            const D = f.getViewSubImage(u, at);
            tt = D.viewport, we === 0 && (e.setRenderTargetTextures(
              P,
              D.colorTexture,
              D.depthStencilTexture
            ), e.setRenderTarget(P));
          }
          let ze = v[we];
          ze === void 0 && (ze = new nn(), ze.layers.enable(we), ze.viewport = new ht(), v[we] = ze), ze.matrix.fromArray(at.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(at.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(tt.x, tt.y, tt.width, tt.height), we === 0 && (g.matrix.copy(ze.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), ae === !0 && g.cameras.push(ze);
        }
        const ye = r.enabledFeatures;
        if (ye && ye.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && f) {
          const we = f.getDepthInformation(ge[0]);
          we && we.isValid && we.texture && S.init(e, we, r.renderState);
        }
      }
      for (let ge = 0; ge < R.length; ge++) {
        const ae = E[ge], ye = R[ge];
        ae !== null && ye !== void 0 && ye.update(ae, re, c || o);
      }
      Se && Se(Y, re), re.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: re }), _ = null;
    }
    const Ze = new dc();
    Ze.setAnimationLoop(Oe), this.setAnimationLoop = function(Y) {
      Se = Y;
    }, this.dispose = function() {
    };
  }
}
const Yn = /* @__PURE__ */ new An(), Km = /* @__PURE__ */ new ot();
function Jm(i, e) {
  function t(m, d) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), d.value.copy(m.matrix);
  }
  function n(m, d) {
    d.color.getRGB(m.fogColor.value, lc(i)), d.isFog ? (m.fogNear.value = d.near, m.fogFar.value = d.far) : d.isFogExp2 && (m.fogDensity.value = d.density);
  }
  function r(m, d, P, R, E) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? s(m, d) : d.isMeshToonMaterial ? (s(m, d), f(m, d)) : d.isMeshPhongMaterial ? (s(m, d), h(m, d)) : d.isMeshStandardMaterial ? (s(m, d), u(m, d), d.isMeshPhysicalMaterial && p(m, d, E)) : d.isMeshMatcapMaterial ? (s(m, d), _(m, d)) : d.isMeshDepthMaterial ? s(m, d) : d.isMeshDistanceMaterial ? (s(m, d), S(m, d)) : d.isMeshNormalMaterial ? s(m, d) : d.isLineBasicMaterial ? (o(m, d), d.isLineDashedMaterial && a(m, d)) : d.isPointsMaterial ? l(m, d, P, R) : d.isSpriteMaterial ? c(m, d) : d.isShadowMaterial ? (m.color.value.copy(d.color), m.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(m, d) {
    m.opacity.value = d.opacity, d.color && m.diffuse.value.copy(d.color), d.emissive && m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (m.map.value = d.map, t(d.map, m.mapTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.bumpMap && (m.bumpMap.value = d.bumpMap, t(d.bumpMap, m.bumpMapTransform), m.bumpScale.value = d.bumpScale, d.side === Bt && (m.bumpScale.value *= -1)), d.normalMap && (m.normalMap.value = d.normalMap, t(d.normalMap, m.normalMapTransform), m.normalScale.value.copy(d.normalScale), d.side === Bt && m.normalScale.value.negate()), d.displacementMap && (m.displacementMap.value = d.displacementMap, t(d.displacementMap, m.displacementMapTransform), m.displacementScale.value = d.displacementScale, m.displacementBias.value = d.displacementBias), d.emissiveMap && (m.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, m.emissiveMapTransform)), d.specularMap && (m.specularMap.value = d.specularMap, t(d.specularMap, m.specularMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    const P = e.get(d), R = P.envMap, E = P.envMapRotation;
    R && (m.envMap.value = R, Yn.copy(E), Yn.x *= -1, Yn.y *= -1, Yn.z *= -1, R.isCubeTexture && R.isRenderTargetTexture === !1 && (Yn.y *= -1, Yn.z *= -1), m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Yn)), m.flipEnvMap.value = R.isCubeTexture && R.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = d.reflectivity, m.ior.value = d.ior, m.refractionRatio.value = d.refractionRatio), d.lightMap && (m.lightMap.value = d.lightMap, m.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, m.lightMapTransform)), d.aoMap && (m.aoMap.value = d.aoMap, m.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, m.aoMapTransform));
  }
  function o(m, d) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, d.map && (m.map.value = d.map, t(d.map, m.mapTransform));
  }
  function a(m, d) {
    m.dashSize.value = d.dashSize, m.totalSize.value = d.dashSize + d.gapSize, m.scale.value = d.scale;
  }
  function l(m, d, P, R) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.size.value = d.size * P, m.scale.value = R * 0.5, d.map && (m.map.value = d.map, t(d.map, m.uvTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function c(m, d) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.rotation.value = d.rotation, d.map && (m.map.value = d.map, t(d.map, m.mapTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function h(m, d) {
    m.specular.value.copy(d.specular), m.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function f(m, d) {
    d.gradientMap && (m.gradientMap.value = d.gradientMap);
  }
  function u(m, d) {
    m.metalness.value = d.metalness, d.metalnessMap && (m.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, m.metalnessMapTransform)), m.roughness.value = d.roughness, d.roughnessMap && (m.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, m.roughnessMapTransform)), d.envMap && (m.envMapIntensity.value = d.envMapIntensity);
  }
  function p(m, d, P) {
    m.ior.value = d.ior, d.sheen > 0 && (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), m.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (m.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, m.sheenColorMapTransform)), d.sheenRoughnessMap && (m.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, m.sheenRoughnessMapTransform))), d.clearcoat > 0 && (m.clearcoat.value = d.clearcoat, m.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (m.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, m.clearcoatMapTransform)), d.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (m.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === Bt && m.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (m.dispersion.value = d.dispersion), d.iridescence > 0 && (m.iridescence.value = d.iridescence, m.iridescenceIOR.value = d.iridescenceIOR, m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (m.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, m.iridescenceMapTransform)), d.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), d.transmission > 0 && (m.transmission.value = d.transmission, m.transmissionSamplerMap.value = P.texture, m.transmissionSamplerSize.value.set(P.width, P.height), d.transmissionMap && (m.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, m.transmissionMapTransform)), m.thickness.value = d.thickness, d.thicknessMap && (m.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = d.attenuationDistance, m.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (m.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (m.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = d.specularIntensity, m.specularColor.value.copy(d.specularColor), d.specularColorMap && (m.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, m.specularColorMapTransform)), d.specularIntensityMap && (m.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, d) {
    d.matcap && (m.matcap.value = d.matcap);
  }
  function S(m, d) {
    const P = e.get(d).light;
    m.referencePosition.value.setFromMatrixPosition(P.matrixWorld), m.nearDistance.value = P.shadow.camera.near, m.farDistance.value = P.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Qm(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(P, R) {
    const E = R.program;
    n.uniformBlockBinding(P, E);
  }
  function c(P, R) {
    let E = r[P.id];
    E === void 0 && (_(P), E = h(P), r[P.id] = E, P.addEventListener("dispose", m));
    const I = R.program;
    n.updateUBOMapping(P, I);
    const C = e.render.frame;
    s[P.id] !== C && (u(P), s[P.id] = C);
  }
  function h(P) {
    const R = f();
    P.__bindingPointIndex = R;
    const E = i.createBuffer(), I = P.__size, C = P.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, I, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, R, E), E;
  }
  function f() {
    for (let P = 0; P < a; P++)
      if (o.indexOf(P) === -1)
        return o.push(P), P;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(P) {
    const R = r[P.id], E = P.uniforms, I = P.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, R);
    for (let C = 0, y = E.length; C < y; C++) {
      const b = Array.isArray(E[C]) ? E[C] : [E[C]];
      for (let v = 0, g = b.length; v < g; v++) {
        const A = b[v];
        if (p(A, C, v, I) === !0) {
          const U = A.__offset, N = Array.isArray(A.value) ? A.value : [A.value];
          let H = 0;
          for (let Z = 0; Z < N.length; Z++) {
            const G = N[Z], ne = S(G);
            typeof G == "number" || typeof G == "boolean" ? (A.__data[0] = G, i.bufferSubData(i.UNIFORM_BUFFER, U + H, A.__data)) : G.isMatrix3 ? (A.__data[0] = G.elements[0], A.__data[1] = G.elements[1], A.__data[2] = G.elements[2], A.__data[3] = 0, A.__data[4] = G.elements[3], A.__data[5] = G.elements[4], A.__data[6] = G.elements[5], A.__data[7] = 0, A.__data[8] = G.elements[6], A.__data[9] = G.elements[7], A.__data[10] = G.elements[8], A.__data[11] = 0) : (G.toArray(A.__data, H), H += ne.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, U, A.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(P, R, E, I) {
    const C = P.value, y = R + "_" + E;
    if (I[y] === void 0)
      return typeof C == "number" || typeof C == "boolean" ? I[y] = C : I[y] = C.clone(), !0;
    {
      const b = I[y];
      if (typeof C == "number" || typeof C == "boolean") {
        if (b !== C)
          return I[y] = C, !0;
      } else if (b.equals(C) === !1)
        return b.copy(C), !0;
    }
    return !1;
  }
  function _(P) {
    const R = P.uniforms;
    let E = 0;
    const I = 16;
    for (let y = 0, b = R.length; y < b; y++) {
      const v = Array.isArray(R[y]) ? R[y] : [R[y]];
      for (let g = 0, A = v.length; g < A; g++) {
        const U = v[g], N = Array.isArray(U.value) ? U.value : [U.value];
        for (let H = 0, Z = N.length; H < Z; H++) {
          const G = N[H], ne = S(G), W = E % I, oe = W % ne.boundary, pe = W + oe;
          E += oe, pe !== 0 && I - pe < ne.storage && (E += I - pe), U.__data = new Float32Array(ne.storage / Float32Array.BYTES_PER_ELEMENT), U.__offset = E, E += ne.storage;
        }
      }
    }
    const C = E % I;
    return C > 0 && (E += I - C), P.__size = E, P.__cache = {}, this;
  }
  function S(P) {
    const R = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof P == "number" || typeof P == "boolean" ? (R.boundary = 4, R.storage = 4) : P.isVector2 ? (R.boundary = 8, R.storage = 8) : P.isVector3 || P.isColor ? (R.boundary = 16, R.storage = 12) : P.isVector4 ? (R.boundary = 16, R.storage = 16) : P.isMatrix3 ? (R.boundary = 48, R.storage = 48) : P.isMatrix4 ? (R.boundary = 64, R.storage = 64) : P.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", P), R;
  }
  function m(P) {
    const R = P.target;
    R.removeEventListener("dispose", m);
    const E = o.indexOf(R.__bindingPointIndex);
    o.splice(E, 1), i.deleteBuffer(r[R.id]), delete r[R.id], delete s[R.id];
  }
  function d() {
    for (const P in r)
      i.deleteBuffer(r[P]);
    o = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: d
  };
}
class e_ {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = wu(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: f = !1,
      reverseDepthBuffer: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = o;
    const _ = new Uint32Array(4), S = new Int32Array(4);
    let m = null, d = null;
    const P = [], R = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = On, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const E = this;
    let I = !1;
    this._outputColorSpace = $t;
    let C = 0, y = 0, b = null, v = -1, g = null;
    const A = new ht(), U = new ht();
    let N = null;
    const H = new Ce(0);
    let Z = 0, G = t.width, ne = t.height, W = 1, oe = null, pe = null;
    const Se = new ht(0, 0, G, ne), Oe = new ht(0, 0, G, ne);
    let Ze = !1;
    const Y = new ro();
    let re = !1, ge = !1;
    const ae = new ot(), ye = new ot(), We = new B(), we = new ht(), at = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let tt = !1;
    function ze() {
      return b === null ? W : 1;
    }
    let D = n;
    function Rt(M, F) {
      return t.getContext(M, F);
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
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${qa}`), t.addEventListener("webglcontextlost", j, !1), t.addEventListener("webglcontextrestored", de, !1), t.addEventListener("webglcontextcreationerror", he, !1), D === null) {
        const F = "webgl2";
        if (D = Rt(F, M), D === null)
          throw Rt(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let Ge, Ve, ve, Qe, xe, T, x, z, q, $, w, J, ee, ie, Le, Q, fe, be, Me, le, He, Be, et, L;
    function ue() {
      Ge = new up(D), Ge.init(), Be = new Ym(D, Ge), Ve = new ip(D, Ge, e, Be), ve = new Wm(D, Ge), Ve.reverseDepthBuffer && u && ve.buffers.depth.setReversed(!0), Qe = new fp(D), xe = new Dm(), T = new Xm(D, Ge, ve, xe, Ve, Be, Qe), x = new sp(E), z = new cp(E), q = new vh(D), et = new tp(D, q), $ = new hp(D, q, Qe, et), w = new mp(D, $, q, Qe), Me = new pp(D, Ve, T), Q = new rp(xe), J = new Pm(E, x, z, Ge, Ve, et, Q), ee = new Jm(E, xe), ie = new Im(), Le = new zm(Ge), be = new ep(E, x, z, ve, w, p, l), fe = new Vm(E, w, Ve), L = new Qm(D, Qe, Ve, ve), le = new np(D, Ge, Qe), He = new dp(D, Ge, Qe), Qe.programs = J.programs, E.capabilities = Ve, E.extensions = Ge, E.properties = xe, E.renderLists = ie, E.shadowMap = fe, E.state = ve, E.info = Qe;
    }
    ue();
    const X = new $m(E, D);
    this.xr = X, this.getContext = function() {
      return D;
    }, this.getContextAttributes = function() {
      return D.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = Ge.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = Ge.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return W;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (W = M, this.setSize(G, ne, !1));
    }, this.getSize = function(M) {
      return M.set(G, ne);
    }, this.setSize = function(M, F, k = !0) {
      if (X.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = M, ne = F, t.width = Math.floor(M * W), t.height = Math.floor(F * W), k === !0 && (t.style.width = M + "px", t.style.height = F + "px"), this.setViewport(0, 0, M, F);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(G * W, ne * W).floor();
    }, this.setDrawingBufferSize = function(M, F, k) {
      G = M, ne = F, W = k, t.width = Math.floor(M * k), t.height = Math.floor(F * k), this.setViewport(0, 0, M, F);
    }, this.getCurrentViewport = function(M) {
      return M.copy(A);
    }, this.getViewport = function(M) {
      return M.copy(Se);
    }, this.setViewport = function(M, F, k, V) {
      M.isVector4 ? Se.set(M.x, M.y, M.z, M.w) : Se.set(M, F, k, V), ve.viewport(A.copy(Se).multiplyScalar(W).round());
    }, this.getScissor = function(M) {
      return M.copy(Oe);
    }, this.setScissor = function(M, F, k, V) {
      M.isVector4 ? Oe.set(M.x, M.y, M.z, M.w) : Oe.set(M, F, k, V), ve.scissor(U.copy(Oe).multiplyScalar(W).round());
    }, this.getScissorTest = function() {
      return Ze;
    }, this.setScissorTest = function(M) {
      ve.setScissorTest(Ze = M);
    }, this.setOpaqueSort = function(M) {
      oe = M;
    }, this.setTransparentSort = function(M) {
      pe = M;
    }, this.getClearColor = function(M) {
      return M.copy(be.getClearColor());
    }, this.setClearColor = function() {
      be.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return be.getClearAlpha();
    }, this.setClearAlpha = function() {
      be.setClearAlpha(...arguments);
    }, this.clear = function(M = !0, F = !0, k = !0) {
      let V = 0;
      if (M) {
        let O = !1;
        if (b !== null) {
          const te = b.texture.format;
          O = te === to || te === eo || te === Qa;
        }
        if (O) {
          const te = b.texture.type, ce = te === bn || te === ti || te === ar || te === or || te === Ka || te === Ja, me = be.getClearColor(), _e = be.getClearAlpha(), Ie = me.r, Pe = me.g, Ee = me.b;
          ce ? (_[0] = Ie, _[1] = Pe, _[2] = Ee, _[3] = _e, D.clearBufferuiv(D.COLOR, 0, _)) : (S[0] = Ie, S[1] = Pe, S[2] = Ee, S[3] = _e, D.clearBufferiv(D.COLOR, 0, S));
        } else
          V |= D.COLOR_BUFFER_BIT;
      }
      F && (V |= D.DEPTH_BUFFER_BIT), k && (V |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), D.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", j, !1), t.removeEventListener("webglcontextrestored", de, !1), t.removeEventListener("webglcontextcreationerror", he, !1), be.dispose(), ie.dispose(), Le.dispose(), xe.dispose(), x.dispose(), z.dispose(), w.dispose(), et.dispose(), L.dispose(), J.dispose(), X.dispose(), X.removeEventListener("sessionstart", co), X.removeEventListener("sessionend", uo), zn.stop();
    };
    function j(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0;
    }
    function de() {
      console.log("THREE.WebGLRenderer: Context Restored."), I = !1;
      const M = Qe.autoReset, F = fe.enabled, k = fe.autoUpdate, V = fe.needsUpdate, O = fe.type;
      ue(), Qe.autoReset = M, fe.enabled = F, fe.autoUpdate = k, fe.needsUpdate = V, fe.type = O;
    }
    function he(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function Ue(M) {
      const F = M.target;
      F.removeEventListener("dispose", Ue), lt(F);
    }
    function lt(M) {
      Et(M), xe.remove(M);
    }
    function Et(M) {
      const F = xe.get(M).programs;
      F !== void 0 && (F.forEach(function(k) {
        J.releaseProgram(k);
      }), M.isShaderMaterial && J.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, F, k, V, O, te) {
      F === null && (F = at);
      const ce = O.isMesh && O.matrixWorld.determinant() < 0, me = Sc(M, F, k, V, O);
      ve.setMaterial(V, ce);
      let _e = k.index, Ie = 1;
      if (V.wireframe === !0) {
        if (_e = $.getWireframeAttribute(k), _e === void 0) return;
        Ie = 2;
      }
      const Pe = k.drawRange, Ee = k.attributes.position;
      let Xe = Pe.start * Ie, je = (Pe.start + Pe.count) * Ie;
      te !== null && (Xe = Math.max(Xe, te.start * Ie), je = Math.min(je, (te.start + te.count) * Ie)), _e !== null ? (Xe = Math.max(Xe, 0), je = Math.min(je, _e.count)) : Ee != null && (Xe = Math.max(Xe, 0), je = Math.min(je, Ee.count));
      const pt = je - Xe;
      if (pt < 0 || pt === 1 / 0) return;
      et.setup(O, V, me, k, _e);
      let ct, qe = le;
      if (_e !== null && (ct = q.get(_e), qe = He, qe.setIndex(ct)), O.isMesh)
        V.wireframe === !0 ? (ve.setLineWidth(V.wireframeLinewidth * ze()), qe.setMode(D.LINES)) : qe.setMode(D.TRIANGLES);
      else if (O.isLine) {
        let Te = V.linewidth;
        Te === void 0 && (Te = 1), ve.setLineWidth(Te * ze()), O.isLineSegments ? qe.setMode(D.LINES) : O.isLineLoop ? qe.setMode(D.LINE_LOOP) : qe.setMode(D.LINE_STRIP);
      } else O.isPoints ? qe.setMode(D.POINTS) : O.isSprite && qe.setMode(D.TRIANGLES);
      if (O.isBatchedMesh)
        if (O._multiDrawInstances !== null)
          is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), qe.renderMultiDrawInstances(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount, O._multiDrawInstances);
        else if (Ge.get("WEBGL_multi_draw"))
          qe.renderMultiDraw(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount);
        else {
          const Te = O._multiDrawStarts, Mt = O._multiDrawCounts, $e = O._multiDrawCount, Jt = _e ? q.get(_e).bytesPerElement : 1, ri = xe.get(V).currentProgram.getUniforms();
          for (let Ht = 0; Ht < $e; Ht++)
            ri.setValue(D, "_gl_DrawID", Ht), qe.render(Te[Ht] / Jt, Mt[Ht]);
        }
      else if (O.isInstancedMesh)
        qe.renderInstances(Xe, pt, O.count);
      else if (k.isInstancedBufferGeometry) {
        const Te = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, Mt = Math.min(k.instanceCount, Te);
        qe.renderInstances(Xe, pt, Mt);
      } else
        qe.render(Xe, pt);
    };
    function Ke(M, F, k) {
      M.transparent === !0 && M.side === Mn && M.forceSinglePass === !1 ? (M.side = Bt, M.needsUpdate = !0, xr(M, F, k), M.side = Bn, M.needsUpdate = !0, xr(M, F, k), M.side = Mn) : xr(M, F, k);
    }
    this.compile = function(M, F, k = null) {
      k === null && (k = M), d = Le.get(k), d.init(F), R.push(d), k.traverseVisible(function(O) {
        O.isLight && O.layers.test(F.layers) && (d.pushLight(O), O.castShadow && d.pushShadow(O));
      }), M !== k && M.traverseVisible(function(O) {
        O.isLight && O.layers.test(F.layers) && (d.pushLight(O), O.castShadow && d.pushShadow(O));
      }), d.setupLights();
      const V = /* @__PURE__ */ new Set();
      return M.traverse(function(O) {
        if (!(O.isMesh || O.isPoints || O.isLine || O.isSprite))
          return;
        const te = O.material;
        if (te)
          if (Array.isArray(te))
            for (let ce = 0; ce < te.length; ce++) {
              const me = te[ce];
              Ke(me, k, O), V.add(me);
            }
          else
            Ke(te, k, O), V.add(te);
      }), d = R.pop(), V;
    }, this.compileAsync = function(M, F, k = null) {
      const V = this.compile(M, F, k);
      return new Promise((O) => {
        function te() {
          if (V.forEach(function(ce) {
            xe.get(ce).currentProgram.isReady() && V.delete(ce);
          }), V.size === 0) {
            O(M);
            return;
          }
          setTimeout(te, 10);
        }
        Ge.get("KHR_parallel_shader_compile") !== null ? te() : setTimeout(te, 10);
      });
    };
    let Kt = null;
    function hn(M) {
      Kt && Kt(M);
    }
    function co() {
      zn.stop();
    }
    function uo() {
      zn.start();
    }
    const zn = new dc();
    zn.setAnimationLoop(hn), typeof self < "u" && zn.setContext(self), this.setAnimationLoop = function(M) {
      Kt = M, X.setAnimationLoop(M), M === null ? zn.stop() : zn.start();
    }, X.addEventListener("sessionstart", co), X.addEventListener("sessionend", uo), this.render = function(M, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (I === !0) return;
      if (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(), X.enabled === !0 && X.isPresenting === !0 && (X.cameraAutoUpdate === !0 && X.updateCamera(F), F = X.getCamera()), M.isScene === !0 && M.onBeforeRender(E, M, F, b), d = Le.get(M, R.length), d.init(F), R.push(d), ye.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), Y.setFromProjectionMatrix(ye), ge = this.localClippingEnabled, re = Q.init(this.clippingPlanes, ge), m = ie.get(M, P.length), m.init(), P.push(m), X.enabled === !0 && X.isPresenting === !0) {
        const te = E.xr.getDepthSensingMesh();
        te !== null && xs(te, F, -1 / 0, E.sortObjects);
      }
      xs(M, F, 0, E.sortObjects), m.finish(), E.sortObjects === !0 && m.sort(oe, pe), tt = X.enabled === !1 || X.isPresenting === !1 || X.hasDepthSensing() === !1, tt && be.addToRenderList(m, M), this.info.render.frame++, re === !0 && Q.beginShadows();
      const k = d.state.shadowsArray;
      fe.render(k, M, F), re === !0 && Q.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const V = m.opaque, O = m.transmissive;
      if (d.setupLights(), F.isArrayCamera) {
        const te = F.cameras;
        if (O.length > 0)
          for (let ce = 0, me = te.length; ce < me; ce++) {
            const _e = te[ce];
            fo(V, O, M, _e);
          }
        tt && be.render(M);
        for (let ce = 0, me = te.length; ce < me; ce++) {
          const _e = te[ce];
          ho(m, M, _e, _e.viewport);
        }
      } else
        O.length > 0 && fo(V, O, M, F), tt && be.render(M), ho(m, M, F);
      b !== null && y === 0 && (T.updateMultisampleRenderTarget(b), T.updateRenderTargetMipmap(b)), M.isScene === !0 && M.onAfterRender(E, M, F), et.resetDefaultState(), v = -1, g = null, R.pop(), R.length > 0 ? (d = R[R.length - 1], re === !0 && Q.setGlobalState(E.clippingPlanes, d.state.camera)) : d = null, P.pop(), P.length > 0 ? m = P[P.length - 1] : m = null;
    };
    function xs(M, F, k, V) {
      if (M.visible === !1) return;
      if (M.layers.test(F.layers)) {
        if (M.isGroup)
          k = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(F);
        else if (M.isLight)
          d.pushLight(M), M.castShadow && d.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || Y.intersectsSprite(M)) {
            V && we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);
            const ce = w.update(M), me = M.material;
            me.visible && m.push(M, ce, me, k, we.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || Y.intersectsObject(M))) {
          const ce = w.update(M), me = M.material;
          if (V && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), we.copy(M.boundingSphere.center)) : (ce.boundingSphere === null && ce.computeBoundingSphere(), we.copy(ce.boundingSphere.center)), we.applyMatrix4(M.matrixWorld).applyMatrix4(ye)), Array.isArray(me)) {
            const _e = ce.groups;
            for (let Ie = 0, Pe = _e.length; Ie < Pe; Ie++) {
              const Ee = _e[Ie], Xe = me[Ee.materialIndex];
              Xe && Xe.visible && m.push(M, ce, Xe, k, we.z, Ee);
            }
          } else me.visible && m.push(M, ce, me, k, we.z, null);
        }
      }
      const te = M.children;
      for (let ce = 0, me = te.length; ce < me; ce++)
        xs(te[ce], F, k, V);
    }
    function ho(M, F, k, V) {
      const O = M.opaque, te = M.transmissive, ce = M.transparent;
      d.setupLightsView(k), re === !0 && Q.setGlobalState(E.clippingPlanes, k), V && ve.viewport(A.copy(V)), O.length > 0 && vr(O, F, k), te.length > 0 && vr(te, F, k), ce.length > 0 && vr(ce, F, k), ve.buffers.depth.setTest(!0), ve.buffers.depth.setMask(!0), ve.buffers.color.setMask(!0), ve.setPolygonOffset(!1);
    }
    function fo(M, F, k, V) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[V.id] === void 0 && (d.state.transmissionRenderTarget[V.id] = new ni(1, 1, {
        generateMipmaps: !0,
        type: Ge.has("EXT_color_buffer_half_float") || Ge.has("EXT_color_buffer_float") ? fr : bn,
        minFilter: ei,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Ye.workingColorSpace
      }));
      const te = d.state.transmissionRenderTarget[V.id], ce = V.viewport || A;
      te.setSize(ce.z * E.transmissionResolutionScale, ce.w * E.transmissionResolutionScale);
      const me = E.getRenderTarget();
      E.setRenderTarget(te), E.getClearColor(H), Z = E.getClearAlpha(), Z < 1 && E.setClearColor(16777215, 0.5), E.clear(), tt && be.render(k);
      const _e = E.toneMapping;
      E.toneMapping = On;
      const Ie = V.viewport;
      if (V.viewport !== void 0 && (V.viewport = void 0), d.setupLightsView(V), re === !0 && Q.setGlobalState(E.clippingPlanes, V), vr(M, k, V), T.updateMultisampleRenderTarget(te), T.updateRenderTargetMipmap(te), Ge.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Pe = !1;
        for (let Ee = 0, Xe = F.length; Ee < Xe; Ee++) {
          const je = F[Ee], pt = je.object, ct = je.geometry, qe = je.material, Te = je.group;
          if (qe.side === Mn && pt.layers.test(V.layers)) {
            const Mt = qe.side;
            qe.side = Bt, qe.needsUpdate = !0, po(pt, k, V, ct, qe, Te), qe.side = Mt, qe.needsUpdate = !0, Pe = !0;
          }
        }
        Pe === !0 && (T.updateMultisampleRenderTarget(te), T.updateRenderTargetMipmap(te));
      }
      E.setRenderTarget(me), E.setClearColor(H, Z), Ie !== void 0 && (V.viewport = Ie), E.toneMapping = _e;
    }
    function vr(M, F, k) {
      const V = F.isScene === !0 ? F.overrideMaterial : null;
      for (let O = 0, te = M.length; O < te; O++) {
        const ce = M[O], me = ce.object, _e = ce.geometry, Ie = ce.group;
        let Pe = ce.material;
        Pe.allowOverride === !0 && V !== null && (Pe = V), me.layers.test(k.layers) && po(me, F, k, _e, Pe, Ie);
      }
    }
    function po(M, F, k, V, O, te) {
      M.onBeforeRender(E, F, k, V, O, te), M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), O.onBeforeRender(E, F, k, V, M, te), O.transparent === !0 && O.side === Mn && O.forceSinglePass === !1 ? (O.side = Bt, O.needsUpdate = !0, E.renderBufferDirect(k, F, V, O, M, te), O.side = Bn, O.needsUpdate = !0, E.renderBufferDirect(k, F, V, O, M, te), O.side = Mn) : E.renderBufferDirect(k, F, V, O, M, te), M.onAfterRender(E, F, k, V, O, te);
    }
    function xr(M, F, k) {
      F.isScene !== !0 && (F = at);
      const V = xe.get(M), O = d.state.lights, te = d.state.shadowsArray, ce = O.state.version, me = J.getParameters(M, O.state, te, F, k), _e = J.getProgramCacheKey(me);
      let Ie = V.programs;
      V.environment = M.isMeshStandardMaterial ? F.environment : null, V.fog = F.fog, V.envMap = (M.isMeshStandardMaterial ? z : x).get(M.envMap || V.environment), V.envMapRotation = V.environment !== null && M.envMap === null ? F.environmentRotation : M.envMapRotation, Ie === void 0 && (M.addEventListener("dispose", Ue), Ie = /* @__PURE__ */ new Map(), V.programs = Ie);
      let Pe = Ie.get(_e);
      if (Pe !== void 0) {
        if (V.currentProgram === Pe && V.lightsStateVersion === ce)
          return _o(M, me), Pe;
      } else
        me.uniforms = J.getUniforms(M), M.onBeforeCompile(me, E), Pe = J.acquireProgram(me, _e), Ie.set(_e, Pe), V.uniforms = me.uniforms;
      const Ee = V.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Ee.clippingPlanes = Q.uniform), _o(M, me), V.needsLights = Ec(M), V.lightsStateVersion = ce, V.needsLights && (Ee.ambientLightColor.value = O.state.ambient, Ee.lightProbe.value = O.state.probe, Ee.directionalLights.value = O.state.directional, Ee.directionalLightShadows.value = O.state.directionalShadow, Ee.spotLights.value = O.state.spot, Ee.spotLightShadows.value = O.state.spotShadow, Ee.rectAreaLights.value = O.state.rectArea, Ee.ltc_1.value = O.state.rectAreaLTC1, Ee.ltc_2.value = O.state.rectAreaLTC2, Ee.pointLights.value = O.state.point, Ee.pointLightShadows.value = O.state.pointShadow, Ee.hemisphereLights.value = O.state.hemi, Ee.directionalShadowMap.value = O.state.directionalShadowMap, Ee.directionalShadowMatrix.value = O.state.directionalShadowMatrix, Ee.spotShadowMap.value = O.state.spotShadowMap, Ee.spotLightMatrix.value = O.state.spotLightMatrix, Ee.spotLightMap.value = O.state.spotLightMap, Ee.pointShadowMap.value = O.state.pointShadowMap, Ee.pointShadowMatrix.value = O.state.pointShadowMatrix), V.currentProgram = Pe, V.uniformsList = null, Pe;
    }
    function mo(M) {
      if (M.uniformsList === null) {
        const F = M.currentProgram.getUniforms();
        M.uniformsList = rs.seqWithValue(F.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function _o(M, F) {
      const k = xe.get(M);
      k.outputColorSpace = F.outputColorSpace, k.batching = F.batching, k.batchingColor = F.batchingColor, k.instancing = F.instancing, k.instancingColor = F.instancingColor, k.instancingMorph = F.instancingMorph, k.skinning = F.skinning, k.morphTargets = F.morphTargets, k.morphNormals = F.morphNormals, k.morphColors = F.morphColors, k.morphTargetsCount = F.morphTargetsCount, k.numClippingPlanes = F.numClippingPlanes, k.numIntersection = F.numClipIntersection, k.vertexAlphas = F.vertexAlphas, k.vertexTangents = F.vertexTangents, k.toneMapping = F.toneMapping;
    }
    function Sc(M, F, k, V, O) {
      F.isScene !== !0 && (F = at), T.resetTextureUnits();
      const te = F.fog, ce = V.isMeshStandardMaterial ? F.environment : null, me = b === null ? E.outputColorSpace : b.isXRRenderTarget === !0 ? b.texture.colorSpace : Ni, _e = (V.isMeshStandardMaterial ? z : x).get(V.envMap || ce), Ie = V.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Pe = !!k.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), Ee = !!k.morphAttributes.position, Xe = !!k.morphAttributes.normal, je = !!k.morphAttributes.color;
      let pt = On;
      V.toneMapped && (b === null || b.isXRRenderTarget === !0) && (pt = E.toneMapping);
      const ct = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, qe = ct !== void 0 ? ct.length : 0, Te = xe.get(V), Mt = d.state.lights;
      if (re === !0 && (ge === !0 || M !== g)) {
        const Ct = M === g && V.id === v;
        Q.setState(V, M, Ct);
      }
      let $e = !1;
      V.version === Te.__version ? (Te.needsLights && Te.lightsStateVersion !== Mt.state.version || Te.outputColorSpace !== me || O.isBatchedMesh && Te.batching === !1 || !O.isBatchedMesh && Te.batching === !0 || O.isBatchedMesh && Te.batchingColor === !0 && O.colorTexture === null || O.isBatchedMesh && Te.batchingColor === !1 && O.colorTexture !== null || O.isInstancedMesh && Te.instancing === !1 || !O.isInstancedMesh && Te.instancing === !0 || O.isSkinnedMesh && Te.skinning === !1 || !O.isSkinnedMesh && Te.skinning === !0 || O.isInstancedMesh && Te.instancingColor === !0 && O.instanceColor === null || O.isInstancedMesh && Te.instancingColor === !1 && O.instanceColor !== null || O.isInstancedMesh && Te.instancingMorph === !0 && O.morphTexture === null || O.isInstancedMesh && Te.instancingMorph === !1 && O.morphTexture !== null || Te.envMap !== _e || V.fog === !0 && Te.fog !== te || Te.numClippingPlanes !== void 0 && (Te.numClippingPlanes !== Q.numPlanes || Te.numIntersection !== Q.numIntersection) || Te.vertexAlphas !== Ie || Te.vertexTangents !== Pe || Te.morphTargets !== Ee || Te.morphNormals !== Xe || Te.morphColors !== je || Te.toneMapping !== pt || Te.morphTargetsCount !== qe) && ($e = !0) : ($e = !0, Te.__version = V.version);
      let Jt = Te.currentProgram;
      $e === !0 && (Jt = xr(V, F, O));
      let ri = !1, Ht = !1, zi = !1;
      const it = Jt.getUniforms(), qt = Te.uniforms;
      if (ve.useProgram(Jt.program) && (ri = !0, Ht = !0, zi = !0), V.id !== v && (v = V.id, Ht = !0), ri || g !== M) {
        ve.buffers.depth.getReversed() ? (ae.copy(M.projectionMatrix), Cu(ae), Pu(ae), it.setValue(D, "projectionMatrix", ae)) : it.setValue(D, "projectionMatrix", M.projectionMatrix), it.setValue(D, "viewMatrix", M.matrixWorldInverse);
        const Dt = it.map.cameraPosition;
        Dt !== void 0 && Dt.setValue(D, We.setFromMatrixPosition(M.matrixWorld)), Ve.logarithmicDepthBuffer && it.setValue(
          D,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && it.setValue(D, "isOrthographic", M.isOrthographicCamera === !0), g !== M && (g = M, Ht = !0, zi = !0);
      }
      if (O.isSkinnedMesh) {
        it.setOptional(D, O, "bindMatrix"), it.setOptional(D, O, "bindMatrixInverse");
        const Ct = O.skeleton;
        Ct && (Ct.boneTexture === null && Ct.computeBoneTexture(), it.setValue(D, "boneTexture", Ct.boneTexture, T));
      }
      O.isBatchedMesh && (it.setOptional(D, O, "batchingTexture"), it.setValue(D, "batchingTexture", O._matricesTexture, T), it.setOptional(D, O, "batchingIdTexture"), it.setValue(D, "batchingIdTexture", O._indirectTexture, T), it.setOptional(D, O, "batchingColorTexture"), O._colorsTexture !== null && it.setValue(D, "batchingColorTexture", O._colorsTexture, T));
      const Zt = k.morphAttributes;
      if ((Zt.position !== void 0 || Zt.normal !== void 0 || Zt.color !== void 0) && Me.update(O, k, Jt), (Ht || Te.receiveShadow !== O.receiveShadow) && (Te.receiveShadow = O.receiveShadow, it.setValue(D, "receiveShadow", O.receiveShadow)), V.isMeshGouraudMaterial && V.envMap !== null && (qt.envMap.value = _e, qt.flipEnvMap.value = _e.isCubeTexture && _e.isRenderTargetTexture === !1 ? -1 : 1), V.isMeshStandardMaterial && V.envMap === null && F.environment !== null && (qt.envMapIntensity.value = F.environmentIntensity), Ht && (it.setValue(D, "toneMappingExposure", E.toneMappingExposure), Te.needsLights && Mc(qt, zi), te && V.fog === !0 && ee.refreshFogUniforms(qt, te), ee.refreshMaterialUniforms(qt, V, W, ne, d.state.transmissionRenderTarget[M.id]), rs.upload(D, mo(Te), qt, T)), V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (rs.upload(D, mo(Te), qt, T), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && it.setValue(D, "center", O.center), it.setValue(D, "modelViewMatrix", O.modelViewMatrix), it.setValue(D, "normalMatrix", O.normalMatrix), it.setValue(D, "modelMatrix", O.matrixWorld), V.isShaderMaterial || V.isRawShaderMaterial) {
        const Ct = V.uniformsGroups;
        for (let Dt = 0, Ss = Ct.length; Dt < Ss; Dt++) {
          const Hn = Ct[Dt];
          L.update(Hn, Jt), L.bind(Hn, Jt);
        }
      }
      return Jt;
    }
    function Mc(M, F) {
      M.ambientLightColor.needsUpdate = F, M.lightProbe.needsUpdate = F, M.directionalLights.needsUpdate = F, M.directionalLightShadows.needsUpdate = F, M.pointLights.needsUpdate = F, M.pointLightShadows.needsUpdate = F, M.spotLights.needsUpdate = F, M.spotLightShadows.needsUpdate = F, M.rectAreaLights.needsUpdate = F, M.hemisphereLights.needsUpdate = F;
    }
    function Ec(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return y;
    }, this.getRenderTarget = function() {
      return b;
    }, this.setRenderTargetTextures = function(M, F, k) {
      const V = xe.get(M);
      V.__autoAllocateDepthBuffer = M.resolveDepthBuffer === !1, V.__autoAllocateDepthBuffer === !1 && (V.__useRenderToTexture = !1), xe.get(M.texture).__webglTexture = F, xe.get(M.depthTexture).__webglTexture = V.__autoAllocateDepthBuffer ? void 0 : k, V.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(M, F) {
      const k = xe.get(M);
      k.__webglFramebuffer = F, k.__useDefaultFramebuffer = F === void 0;
    };
    const yc = D.createFramebuffer();
    this.setRenderTarget = function(M, F = 0, k = 0) {
      b = M, C = F, y = k;
      let V = !0, O = null, te = !1, ce = !1;
      if (M) {
        const _e = xe.get(M);
        if (_e.__useDefaultFramebuffer !== void 0)
          ve.bindFramebuffer(D.FRAMEBUFFER, null), V = !1;
        else if (_e.__webglFramebuffer === void 0)
          T.setupRenderTarget(M);
        else if (_e.__hasExternalTextures)
          T.rebindTextures(M, xe.get(M.texture).__webglTexture, xe.get(M.depthTexture).__webglTexture);
        else if (M.depthBuffer) {
          const Ee = M.depthTexture;
          if (_e.__boundDepthTexture !== Ee) {
            if (Ee !== null && xe.has(Ee) && (M.width !== Ee.image.width || M.height !== Ee.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            T.setupDepthRenderbuffer(M);
          }
        }
        const Ie = M.texture;
        (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (ce = !0);
        const Pe = xe.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Pe[F]) ? O = Pe[F][k] : O = Pe[F], te = !0) : M.samples > 0 && T.useMultisampledRTT(M) === !1 ? O = xe.get(M).__webglMultisampledFramebuffer : Array.isArray(Pe) ? O = Pe[k] : O = Pe, A.copy(M.viewport), U.copy(M.scissor), N = M.scissorTest;
      } else
        A.copy(Se).multiplyScalar(W).floor(), U.copy(Oe).multiplyScalar(W).floor(), N = Ze;
      if (k !== 0 && (O = yc), ve.bindFramebuffer(D.FRAMEBUFFER, O) && V && ve.drawBuffers(M, O), ve.viewport(A), ve.scissor(U), ve.setScissorTest(N), te) {
        const _e = xe.get(M.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + F, _e.__webglTexture, k);
      } else if (ce) {
        const _e = xe.get(M.texture), Ie = F;
        D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, _e.__webglTexture, k, Ie);
      } else if (M !== null && k !== 0) {
        const _e = xe.get(M.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, _e.__webglTexture, k);
      }
      v = -1;
    }, this.readRenderTargetPixels = function(M, F, k, V, O, te, ce) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let me = xe.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ce !== void 0 && (me = me[ce]), me) {
        ve.bindFramebuffer(D.FRAMEBUFFER, me);
        try {
          const _e = M.texture, Ie = _e.format, Pe = _e.type;
          if (!Ve.textureFormatReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ve.textureTypeReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= M.width - V && k >= 0 && k <= M.height - O && D.readPixels(F, k, V, O, Be.convert(Ie), Be.convert(Pe), te);
        } finally {
          const _e = b !== null ? xe.get(b).__webglFramebuffer : null;
          ve.bindFramebuffer(D.FRAMEBUFFER, _e);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(M, F, k, V, O, te, ce) {
      if (!(M && M.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let me = xe.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ce !== void 0 && (me = me[ce]), me)
        if (F >= 0 && F <= M.width - V && k >= 0 && k <= M.height - O) {
          ve.bindFramebuffer(D.FRAMEBUFFER, me);
          const _e = M.texture, Ie = _e.format, Pe = _e.type;
          if (!Ve.textureFormatReadable(Ie))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Ve.textureTypeReadable(Pe))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Ee = D.createBuffer();
          D.bindBuffer(D.PIXEL_PACK_BUFFER, Ee), D.bufferData(D.PIXEL_PACK_BUFFER, te.byteLength, D.STREAM_READ), D.readPixels(F, k, V, O, Be.convert(Ie), Be.convert(Pe), 0);
          const Xe = b !== null ? xe.get(b).__webglFramebuffer : null;
          ve.bindFramebuffer(D.FRAMEBUFFER, Xe);
          const je = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return D.flush(), await Ru(D, je, 4), D.bindBuffer(D.PIXEL_PACK_BUFFER, Ee), D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, te), D.deleteBuffer(Ee), D.deleteSync(je), te;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(M, F = null, k = 0) {
      const V = Math.pow(2, -k), O = Math.floor(M.image.width * V), te = Math.floor(M.image.height * V), ce = F !== null ? F.x : 0, me = F !== null ? F.y : 0;
      T.setTexture2D(M, 0), D.copyTexSubImage2D(D.TEXTURE_2D, k, 0, 0, ce, me, O, te), ve.unbindTexture();
    };
    const Tc = D.createFramebuffer(), bc = D.createFramebuffer();
    this.copyTextureToTexture = function(M, F, k = null, V = null, O = 0, te = null) {
      te === null && (O !== 0 ? (is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), te = O, O = 0) : te = 0);
      let ce, me, _e, Ie, Pe, Ee, Xe, je, pt;
      const ct = M.isCompressedTexture ? M.mipmaps[te] : M.image;
      if (k !== null)
        ce = k.max.x - k.min.x, me = k.max.y - k.min.y, _e = k.isBox3 ? k.max.z - k.min.z : 1, Ie = k.min.x, Pe = k.min.y, Ee = k.isBox3 ? k.min.z : 0;
      else {
        const Zt = Math.pow(2, -O);
        ce = Math.floor(ct.width * Zt), me = Math.floor(ct.height * Zt), M.isDataArrayTexture ? _e = ct.depth : M.isData3DTexture ? _e = Math.floor(ct.depth * Zt) : _e = 1, Ie = 0, Pe = 0, Ee = 0;
      }
      V !== null ? (Xe = V.x, je = V.y, pt = V.z) : (Xe = 0, je = 0, pt = 0);
      const qe = Be.convert(F.format), Te = Be.convert(F.type);
      let Mt;
      F.isData3DTexture ? (T.setTexture3D(F, 0), Mt = D.TEXTURE_3D) : F.isDataArrayTexture || F.isCompressedArrayTexture ? (T.setTexture2DArray(F, 0), Mt = D.TEXTURE_2D_ARRAY) : (T.setTexture2D(F, 0), Mt = D.TEXTURE_2D), D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, F.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, F.unpackAlignment);
      const $e = D.getParameter(D.UNPACK_ROW_LENGTH), Jt = D.getParameter(D.UNPACK_IMAGE_HEIGHT), ri = D.getParameter(D.UNPACK_SKIP_PIXELS), Ht = D.getParameter(D.UNPACK_SKIP_ROWS), zi = D.getParameter(D.UNPACK_SKIP_IMAGES);
      D.pixelStorei(D.UNPACK_ROW_LENGTH, ct.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, ct.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, Ie), D.pixelStorei(D.UNPACK_SKIP_ROWS, Pe), D.pixelStorei(D.UNPACK_SKIP_IMAGES, Ee);
      const it = M.isDataArrayTexture || M.isData3DTexture, qt = F.isDataArrayTexture || F.isData3DTexture;
      if (M.isDepthTexture) {
        const Zt = xe.get(M), Ct = xe.get(F), Dt = xe.get(Zt.__renderTarget), Ss = xe.get(Ct.__renderTarget);
        ve.bindFramebuffer(D.READ_FRAMEBUFFER, Dt.__webglFramebuffer), ve.bindFramebuffer(D.DRAW_FRAMEBUFFER, Ss.__webglFramebuffer);
        for (let Hn = 0; Hn < _e; Hn++)
          it && (D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, xe.get(M).__webglTexture, O, Ee + Hn), D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, xe.get(F).__webglTexture, te, pt + Hn)), D.blitFramebuffer(Ie, Pe, ce, me, Xe, je, ce, me, D.DEPTH_BUFFER_BIT, D.NEAREST);
        ve.bindFramebuffer(D.READ_FRAMEBUFFER, null), ve.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else if (O !== 0 || M.isRenderTargetTexture || xe.has(M)) {
        const Zt = xe.get(M), Ct = xe.get(F);
        ve.bindFramebuffer(D.READ_FRAMEBUFFER, Tc), ve.bindFramebuffer(D.DRAW_FRAMEBUFFER, bc);
        for (let Dt = 0; Dt < _e; Dt++)
          it ? D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Zt.__webglTexture, O, Ee + Dt) : D.framebufferTexture2D(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, Zt.__webglTexture, O), qt ? D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Ct.__webglTexture, te, pt + Dt) : D.framebufferTexture2D(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, Ct.__webglTexture, te), O !== 0 ? D.blitFramebuffer(Ie, Pe, ce, me, Xe, je, ce, me, D.COLOR_BUFFER_BIT, D.NEAREST) : qt ? D.copyTexSubImage3D(Mt, te, Xe, je, pt + Dt, Ie, Pe, ce, me) : D.copyTexSubImage2D(Mt, te, Xe, je, Ie, Pe, ce, me);
        ve.bindFramebuffer(D.READ_FRAMEBUFFER, null), ve.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else
        qt ? M.isDataTexture || M.isData3DTexture ? D.texSubImage3D(Mt, te, Xe, je, pt, ce, me, _e, qe, Te, ct.data) : F.isCompressedArrayTexture ? D.compressedTexSubImage3D(Mt, te, Xe, je, pt, ce, me, _e, qe, ct.data) : D.texSubImage3D(Mt, te, Xe, je, pt, ce, me, _e, qe, Te, ct) : M.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, te, Xe, je, ce, me, qe, Te, ct.data) : M.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, te, Xe, je, ct.width, ct.height, qe, ct.data) : D.texSubImage2D(D.TEXTURE_2D, te, Xe, je, ce, me, qe, Te, ct);
      D.pixelStorei(D.UNPACK_ROW_LENGTH, $e), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, Jt), D.pixelStorei(D.UNPACK_SKIP_PIXELS, ri), D.pixelStorei(D.UNPACK_SKIP_ROWS, Ht), D.pixelStorei(D.UNPACK_SKIP_IMAGES, zi), te === 0 && F.generateMipmaps && D.generateMipmap(Mt), ve.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, F, k = null, V = null, O = 0) {
      return is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(M, F, k, V, O);
    }, this.initRenderTarget = function(M) {
      xe.get(M).__webglFramebuffer === void 0 && T.setupRenderTarget(M);
    }, this.initTexture = function(M) {
      M.isCubeTexture ? T.setTextureCube(M, 0) : M.isData3DTexture ? T.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? T.setTexture2DArray(M, 0) : T.setTexture2D(M, 0), ve.unbindTexture();
    }, this.resetState = function() {
      C = 0, y = 0, b = null, ve.reset(), et.reset();
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
const Nn = "/assets", Qs = 1, t_ = [-20, 18, 20], n_ = [0, 0, 0], Ml = Math.min(2, window.devicePixelRatio || 1), El = 2560 * 1440, i_ = { antialias: !0, alpha: !1, powerPreference: "low-power" }, ss = 1, gc = 4, r_ = ss - 2, s_ = () => {
  let i = [], e = 0, t = null;
  function n(l, c) {
    i.push(async () => {
      let h = 0;
      const f = 3;
      for (; h < f; )
        try {
          const p = await (await fetch(l)).arrayBuffer(), _ = new Uint32Array(p, 0, 1)[0], S = JSON.parse(
            new TextDecoder().decode(new Uint8Array(p, 4, _))
          ), { vertexCount: m, indexCount: d, attributes: P } = S;
          let R = 4 + _;
          const E = new on(), I = {};
          P.forEach((C) => {
            const { id: y, componentSize: b, storageType: v, needsPack: g, packedComponents: A } = C, U = y === "indices" ? d : m, N = window[v], H = new N(p, R, U * b), Z = N.BYTES_PER_ELEMENT;
            let G;
            g ? G = r(H, U, b, A, v) : (I[y] = R, G = H), y === "indices" ? E.setIndex(new Yt(G, 1)) : E.setAttribute(y, new Yt(G, b)), R += U * b * Z;
          }), c && c(E), a();
          break;
        } catch (u) {
          h++, h >= f ? console.error(
            `Tower animation | error loading buffer: ${l}after ${f} attempts`,
            u
          ) : (console.warn(
            `Tower animation | error loading buffer: ${l}, attempt ${h}/${f}, retrying...`,
            u
          ), await new Promise((p) => setTimeout(p, 100)));
        }
    });
  }
  function r(l, c, h, f, u) {
    const p = f.length, _ = u.indexOf("Int") === 0, S = 1 << l.BYTES_PER_ELEMENT * 8, m = _ ? S * 0.5 : 0, d = 1 / S, P = new Float32Array(c * h);
    for (let R = 0, E = 0; R < c; R++)
      for (let I = 0; I < p; I++) {
        const { delta: C, from: y } = f[I];
        P[E] = (l[E] + m) * d * C + y, E++;
      }
    return P;
  }
  function s(l, c) {
    i.push(() => {
      new uh().load(
        l,
        (h) => {
          h && (h.minFilter = fu, h.magFilter = Gt, h.generateMipmaps = !0, h.anisotropy = 1, h.flipY = !0, c == null || c(h), a());
        },
        void 0,
        (h) => console.error(`Tower animation | error loading texture: ${l}`, h)
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
}, yn = s_();
class a_ {
  constructor() {
    Re(this, "PI", Math.PI);
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
const De = new a_(), o_ = () => {
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
function l_(i, e, t, n, r) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  function s(l, c, h, f, u) {
    const p = 3 * (h - c), _ = 3 * (f - h) - p;
    return (((u - c - p - _) * l + _) * l + p) * l + c;
  }
  function o(l, c, h, f = 1e-6) {
    let u = 0, p = 1, _ = l;
    for (; u < p; ) {
      const S = s(_, 0, c, h, 1);
      if (Math.abs(S - l) < f)
        return _;
      S < l ? u = _ : p = _, _ = (u + p) / 2;
    }
    return _;
  }
  const a = o(i, e, n);
  return s(a, 0, t, r, 1);
}
function Ti(i) {
  return l_(i, 0.3, 0, 0, 1);
}
const Yi = o_(), Xr = (i, e) => Math.hypot(i, e);
class c_ {
  constructor(e = 0, t = 0, n = 0) {
    Re(this, "id", 0);
    Re(this, "row", 0);
    Re(this, "col", 0);
    Re(this, "distance", Xr(this.row, this.col));
    Re(this, "MAX_DISTANCE", Xr(Nt, Nt));
    Re(this, "priority", this.MAX_DISTANCE - this.distance);
    Re(this, "isMain", this.row === 0 && this.col === 0);
    Re(this, "isBorder", Math.abs(this.row) === 2 || Math.abs(this.col) === 2);
    Re(this, "isOccupied", !1);
    Re(this, "willBeOccupied", !1);
    Re(this, "activeRatio", 0);
    Re(this, "neighbours", null);
    Re(this, "reachableNeighbours", null);
    Re(this, "prioritySortedReachableNeighbours", null);
    Re(this, "randomDelay", Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5);
    Re(this, "loseAnimationPositionArray", []);
    Re(this, "loseAnimationOrientArray", []);
    this.id = e, this.row = t, this.col = n, this.distance = Xr(t, n), this.MAX_DISTANCE = Xr(Nt, Nt), this.priority = this.MAX_DISTANCE - this.distance, this.isMain = t === 0 && n === 0, this.isBorder = Math.abs(t) === 2 || Math.abs(n) === 2, this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0, this.neighbours = null, this.reachableNeighbours = null, this.prioritySortedReachableNeighbours = null, this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
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
        [this.reachableNeighbours[e], this.reachableNeighbours[t]] = [
          this.reachableNeighbours[t],
          this.reachableNeighbours[e]
        ];
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
const Ut = 5, xn = Ut + 2, Nt = Math.floor(Ut / 2), ln = Ut * Ut, u_ = xn * xn;
let ji = null, Sn = [];
const h_ = () => {
  function i() {
    Sn = Array.from(
      { length: Ut },
      (a, l) => Array.from({ length: Ut }, (c, h) => {
        const f = l - Nt, u = h - Nt;
        return new c_(l * Ut + h, f, u);
      })
    ), Sn.forEach(
      (a, l) => a.forEach((c, h) => {
        c.neighbours = n(l - Nt, h - Nt), c.init();
      })
    ), ji = e(0, 0);
  }
  function e(a, l) {
    var c;
    return ((c = Sn[a + Nt]) == null ? void 0 : c[l + Nt]) || null;
  }
  function t() {
    const a = Sn.flat().filter((l) => !l.isOccupied);
    return a.length ? a[Math.floor(Math.random() * a.length)] : null;
  }
  function n(a, l) {
    return [-1, 0, 1].flatMap(
      (c) => [-1, 0, 1].map((h) => c === 0 && h === 0 ? null : e(a + c, l + h)).filter(Boolean)
    );
  }
  function r() {
    Sn.flat().forEach((a) => a.reset());
  }
  function s(a) {
    Sn.flat().forEach((l) => l.preUpdate(a));
  }
  function o(a) {
    Sn.flat().forEach((l) => l.update(a));
  }
  return {
    init: i,
    getTile: e,
    getRandomFreeTile: t,
    reset: r,
    preUpdate: s,
    update: o
  };
}, Jn = h_(), Yr = `#ifndef IS_BASE
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
`, yl = `uniform vec3 u_lightPosition;
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
`, Tl = `#include <common>
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
`;
let qr, ft = 0;
const d_ = 6;
let $i = 0, Ki = 0, Ai = 0, wi = 0, Ri = 0, Ji = 0, Qi = 1;
const f_ = () => {
  function i() {
    const a = ({
      status: l,
      result: c,
      completeAnimationLevel: h
    }) => {
      l === It.RESULT && (c === rt.COMPLETED || c === rt.REPLAY) && e(h);
    };
    nt.subscribe((l) => l, a);
  }
  function e(a) {
    qr = a;
  }
  function t() {
    ft = 0, $i = 0, Ki = 0, Ai = 0, wi = 0, Ri = 0, Ji = 0, Qi = 1, qr = null;
  }
  function n() {
    Qi = 1, $i = 0, Ki = 0, Ai = De.fit(ft, 0.2, 0.49, 0, 1.2), Ri = De.fit(ft, 0.45, 0.55, 0, 1), Ji = De.fit(ft, 0.45, 0.7, 0, 1), wi = De.fit(ft, 0.55, 1, 0, 1);
  }
  function r() {
    Qi = 1.5, Ki = 0, $i = De.fit(ft, 0.1, 0.45, 0, 1), Ai = De.fit(ft, 0.15, 0.49, 0, 1.2), Ri = De.fit(ft, 0.45, 0.55, 0, 1), Ji = De.fit(ft, 0.45, 0.7, 0, 1), wi = De.fit(ft, 0.55, 1, 0, 1);
  }
  function s() {
    Qi = 2, $i = De.fit(ft, 0.1, 0.5, 0, 1), Ki = De.fit(ft, 0.2, 0.51, 0, 1), Ai = De.fit(ft, 0.2, 0.49, 0, 1.2), Ri = De.fit(ft, 0.45, 0.55, 0, 1), Ji = De.fit(ft, 0.45, 0.7, 0, 1), wi = De.fit(ft, 0.6, 1, 0, 1);
  }
  function o(a) {
    switch (ft += (qr ? 1 : 0) * a / d_, ft = De.clamp(ft, 0, 1), qr) {
      case Kr.ONE:
        n();
        break;
      case Kr.TWO:
        r();
        break;
      case Kr.THREE:
        s();
        break;
    }
    ft >= 1 && (nt.getState().setAnimationTypeEnded("win"), t());
  }
  return {
    init: i,
    update: o,
    resetRatios: t
  };
}, bl = f_();
let ea = !1, qn = 0;
const p_ = 2.5;
let tr = 0, nr = 0;
const m_ = () => {
  function i() {
    const n = ({ status: r, result: s }) => {
      r === It.RESULT && s === rt.STOP && (ea = !0);
    };
    nt.subscribe((r) => r, n);
  }
  function e() {
    qn = 0, nr = 0, tr = 0, ea = !1;
  }
  function t(n) {
    qn += (ea ? 1 : 0) * n / p_, qn = De.clamp(qn, 0, 1), tr = De.fit(qn, 0, 0.5, 0, 2.5), nr = De.fit(qn, 0.4, 0.65, 0, 1), qn >= 1 && (nt.getState().setAnimationTypeEnded("stop"), e());
  }
  return {
    init: i,
    update: t,
    resetRatios: e
  };
}, Al = m_();
let ta = !1, gn = 0;
const __ = 3.5;
let Ci = 0, Qn = 0, ps = 0, ir = 0;
const g_ = () => {
  function i() {
    const n = ({ status: r, result: s }) => {
      r === It.RESULT && s === rt.FAILED && (ta = !0);
    };
    nt.subscribe((r) => r, n);
  }
  function e() {
    gn = 0, Ci = 0, Qn = 0, ir = 0, ps = 0, ta = !1;
  }
  function t(n) {
    gn += (ta ? 1 : 0) * n / __, gn = De.clamp(gn, 0, 1), Ci = De.fit(gn, 0, 0.3, 0, 1), Qn = De.fit(gn, 0.35, 0.65, 0, 1), ps = De.fit(gn, 0.3, 0.55, 0, 2.5), ir = De.fit(gn, 0.6, 0.8, 0, 1), gn >= 1 && (nt.getState().setAnimationTypeEnded("lose"), e());
  }
  return {
    init: i,
    resetRatios: e,
    update: t
  };
}, wl = g_(), v_ = Math.PI / 2, Mi = new B();
class x_ {
  constructor() {
    Re(this, "animation", 0);
    Re(this, "boardDir", new Ae());
    Re(this, "boardPos", new Ae());
    Re(this, "pos", new B());
    Re(this, "orient", new Xt());
    Re(this, "showRatio", 0);
    Re(this, "spinPivot", new B());
    Re(this, "spinOrient", new Xt());
    this.animation = 0, this.boardDir = new Ae(), this.boardPos = new Ae(), this.pos = new B(), this.orient = new Xt(), this.showRatio = 0, this.spinPivot = new B(), this.spinOrient = new Xt();
  }
  reset() {
    this.animation = 0, this.boardDir.set(0, 0), this.boardPos.set(0, 0), this.pos.set(0, 0, 0), this.orient.identity(), this.showRatio = 0, this.spinPivot.set(0, 0, 0), this.spinOrient.identity();
  }
  update(e) {
    this.pos.set(this.boardPos.x, 0, -this.boardPos.y), this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5), Mi.set(-this.boardDir.y, 0, -this.boardDir.x), this.spinOrient.setFromAxisAngle(Mi, this.animation * v_);
  }
  addsFallAnimation(e) {
    Mi.set(this.boardDir.x, -e, -this.boardDir.y), this.pos.addScaledVector(Mi, e), Mi.set(this.boardDir.x * 0.5, 0, -this.boardDir.y * 0.5), this.spinPivot.lerp(Mi, De.saturate(e));
  }
}
const Rl = {
  blocks: [],
  firstStartAnimationRatio: 0,
  lastSpawnedBlock: null,
  cycleIndex: 0,
  animationSpeedRatio: 0,
  previousSuccessBlocksAnimationRatio: 0,
  activeBlocksCount: 0
}, bt = hr()(
  dr((i) => ({
    ...Rl,
    incCycleIndex: () => i((e) => ({ cycleIndex: e.cycleIndex + 1 })),
    reset: () => i((e) => ({ ...Rl, firstStartAnimationRatio: e.firstStartAnimationRatio }))
  }))
), Cl = (i) => bt.setState((e) => ({ blocks: [i, ...e.blocks] })), Pl = (i) => bt.setState({ lastSpawnedBlock: i }), Dl = ({
  animationSpeedRatio: i,
  firstStartAnimationRatio: e,
  previousSuccessBlocksAnimationRatio: t
}) => bt.setState((n) => ({
  animationSpeedRatio: i ?? n.animationSpeedRatio,
  firstStartAnimationRatio: e ?? n.firstStartAnimationRatio,
  previousSuccessBlocksAnimationRatio: t ?? n.previousSuccessBlocksAnimationRatio
})), S_ = {
  lightPositionX: -2,
  lightPositionY: 6,
  lightPositionZ: -4,
  lightCameraSize: 4.5,
  lightCameraBias: 5e-3,
  lightCameraNear: 3,
  lightCameraFar: 16
}, rr = hr()(
  dr((i) => ({
    ...S_
  }))
), M_ = {
  u_blueNoiseTexture: { value: null },
  u_blueNoiseTexelSize: { value: new Ae() },
  u_blueNoiseCoordOffset: { value: new Ae() }
}, E_ = {
  u_lightPosition: {
    value: new B(
      rr.getState().lightPositionX,
      rr.getState().lightPositionY,
      rr.getState().lightPositionZ
    )
  },
  u_goboTexture: { value: null },
  u_goboIntensity: { value: st.getState().goboIntensity },
  u_infoTexture: { value: new us() },
  u_infoTextureLinear: { value: new us() },
  u_endAnimationRatio: { value: 0 }
}, y_ = {
  u_time: { value: 0 },
  u_deltaTime: { value: 1 },
  u_resolution: { value: new Ae() },
  u_viewportResolution: { value: new Ae() },
  u_bgColor1: { value: new Ce(st.getState().bgColor1) },
  u_bgColor2: { value: new Ce(st.getState().bgColor2) },
  ...M_,
  ...E_
}, Ft = hr()(
  dr((i) => ({
    ...y_
  }))
), qi = 2 * ln, St = new Ae(), Zr = new Ae(), Ei = new B(), Ll = new B(), na = new Xt(), Il = new Xt(), Ul = new Ce(), jr = new Ce(), ia = new Ce(), yi = new Ce(), In = new Ce(), $r = new Ce(), K = {
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
}, T_ = () => {
  const i = new _t();
  let e = bt.getState(), t = nt.getState().result;
  const { blocks: n, previousSuccessBlocksAnimationRatio: r, lastSpawnedBlock: s } = e;
  let o, a;
  bt.subscribe(
    (y) => y,
    (y, b) => {
      b !== y && (e = y);
    },
    { fireImmediately: !0 }
  ), nt.subscribe(
    (y) => y.result,
    (y) => {
      t = y;
    },
    { fireImmediately: !0 }
  ), st.subscribe(
    ({ time: y, deltaTime: b, ...v }) => v,
    (y, b) => {
      b !== y && (a = y);
    },
    { fireImmediately: !0 }
  );
  async function l() {
    const y = Array.from({ length: qi });
    K._blockList = y.map((b) => new x_()), K._blockRenderList = [...K._blockList], yn.loadBuf(`${Nn}/BASE.buf`, (b) => {
      c(b);
    }), yn.loadBuf(`${Nn}/BOX.buf`, (b) => {
      h(b);
    }), yn.loadBuf(`${Nn}/LOSE_ANIMATION.buf`, (b) => {
      const { position: v, orient: g } = b.attributes;
      K.animationTotalFrames = v.count / ln, K.heroLoseAnimationPositionArray = v.array, K.heroLoseAnimationOrientArray = g.array;
    }), yn.loadTexture(`${Nn}/gobo.jpg`, (b) => {
      b.flipY = !1, b.needsUpdate = !0, Ft.setState({ u_goboTexture: { value: b } });
    });
  }
  function c(y) {
    const b = {
      ...o,
      ...cs.merge([se.lights]),
      u_color: { value: new Ce(a.neutralColor) },
      u_blocksColor: { value: new Ce(a.neutralColor) },
      u_yDisplacement: { value: 0 },
      u_prevSuccessColor: {
        value: new Ce(a.neutralColor).convertSRGBToLinear()
      },
      u_successColor: { value: new Ce(a.successColor).convertSRGBToLinear() },
      u_successAnimationRatio: { value: 0 }
    }, v = new At({
      uniforms: b,
      vertexShader: Yr,
      fragmentShader: yl,
      lights: !0,
      transparent: !0,
      defines: { IS_BASE: !0 }
    });
    K._baseMesh = new Ot(y, v), K._baseMesh.receiveShadow = K._baseMesh.castShadow = !0, K._baseMesh.frustumCulled = !1, K._baseMesh.customDepthMaterial = new At({
      vertexShader: Yr,
      fragmentShader: Tl,
      defines: { IS_DEPTH: !0, IS_BASE: !0 }
    }), i.add(K._baseMesh);
  }
  function h(y) {
    const b = new oo();
    b.index = y.index, Object.keys(y.attributes).forEach((A) => {
      b.setAttribute(A, y.attributes[A]);
    }), b.instanceCount = qi;
    const v = (A, U) => {
      const N = new Float32Array(qi * U);
      return b.setAttribute(
        A,
        new hs(N, U, U !== 4, 1).setUsage(bu)
      ), N;
    };
    K._instancePosArray = v("instancePos", 3), K._instanceOrientArray = v("instanceOrient", 4), K._instanceShowRatioArray = v("instanceShowRatio", 1), K._instanceSpinPivotArray = v("instanceSpinPivot", 3), K._instanceSpinOrientArray = v("instanceSpinOrient", 4), K._instanceColorArray = v("instanceColor", 3), K._instanceIsActiveArray = v("instanceIsActive", 1), K._instanceNextDirectionArray = v("instanceNextDirection", 2);
    const g = new At({
      uniforms: {
        ...cs.merge([se.lights]),
        ...o
      },
      vertexShader: Yr,
      fragmentShader: yl,
      lights: !0
    });
    K._blocksMesh = new Ot(b, g), K._blocksMesh.frustumCulled = !1, K._blocksMesh.castShadow = K._blocksMesh.receiveShadow = !0, K._blocksMesh.customDepthMaterial = new At({
      uniforms: o,
      vertexShader: Yr,
      fragmentShader: Tl,
      defines: { IS_DEPTH: !0 }
    }), i.add(K._blocksMesh);
  }
  async function f() {
    const y = rr.getState();
    K.directLight = new ph(16777215, 1), K.directLight.castShadow = !0, K.directLight.shadow.camera.near = y.lightCameraNear, K.directLight.shadow.camera.far = y.lightCameraFar, K.directLight.shadow.camera.right = y.lightCameraSize, K.directLight.shadow.camera.left = -y.lightCameraSize, K.directLight.shadow.camera.top = y.lightCameraSize, K.directLight.shadow.camera.bottom = -y.lightCameraSize, K.directLight.shadow.bias = y.lightCameraBias, K.directLight.shadow.mapSize.width = 768, K.directLight.shadow.mapSize.height = 768, K.isShadowCameraHelperVisible = !0, K.shadowCameraHelper = new _h(K.directLight.shadow.camera), u();
    const b = new Float32Array(u_ * 4);
    for (let v = 0, g = 0; v < xn; v++)
      for (let A = 0; A < xn; A++, g += 4)
        b[g] = 0, b[g + 1] = 0, b[g + 2] = 1, b[g + 3] = 1;
    return K.infoTexture = new us(b, xn, xn, Wt, sn), K.infoTextureLinear = new us(
      b,
      xn,
      xn,
      Wt,
      sn,
      ja,
      En,
      En,
      Gt,
      Gt,
      0
    ), K.infoTextureLinear.needsUpdate = !0, Ft.setState({
      u_infoTexture: { value: K.infoTexture },
      u_infoTextureLinear: { value: K.infoTextureLinear }
    }), K.directLight;
  }
  function u() {
    Sn.forEach((y, b) => {
      y.forEach((v, g) => {
        var U, N;
        const A = b * Ut + g;
        v.loseAnimationPositionArray = new Float32Array(K.animationTotalFrames * 3), v.loseAnimationOrientArray = new Float32Array(K.animationTotalFrames * 4);
        for (let H = 0; H < K.animationTotalFrames; H++) {
          const Z = (H * ln + A) * 3, G = (H * ln + A) * 4;
          v.loseAnimationPositionArray.set(
            ((U = K.heroLoseAnimationPositionArray) == null ? void 0 : U.subarray(Z, Z + 3)) || [],
            H * 3
          ), v.loseAnimationOrientArray.set(
            ((N = K.heroLoseAnimationOrientArray) == null ? void 0 : N.subarray(G, G + 4)) || [],
            H * 4
          );
        }
      });
    });
  }
  function p() {
    K.successColorRatio = 0, K._blockList.forEach((y) => y.reset());
  }
  function _(y) {
    var b, v;
    Ul.set(a.mainColor), jr.set(a.successColor), ia.set(a.failColor), yi.set(a.neutralColor).convertSRGBToLinear(), In.copy(Ul), t === rt.FAILED && Qn > 0 && In.copy(ia), (t === rt.COMPLETED || t === rt.REPLAY) && (K.successColorRatio = Math.min(1, K.successColorRatio + 0.5 * y), In.lerp(jr, K.successColorRatio)), t !== rt.REPLAY && t !== rt.COMPLETED && In.lerp(yi, De.saturate(nr + ir)), In.convertSRGBToLinear(), yi.convertSRGBToLinear(), jr.convertSRGBToLinear();
    for (let g = 0; g < qi; g++) {
      const A = n.filter((H) => H.id === g)[0], U = g < n.length + (s ? 1 : 0), N = U ? In : yi;
      if (U && (A != null && A.isErrorBlock)) {
        let H = De.saturate(0.5 * (1 - Math.cos(A.errorPreFallAnimationTime)));
        A.errorFallAnimationTime > 0 && (H = De.saturate(0.5 * (1 - Math.cos(14 * A.errorFallAnimationTime)))), $r.lerpColors(N, ia, H), (b = K._instanceColorArray) == null || b.set([$r.r, $r.g, $r.b], g * 3);
      } else
        (v = K._instanceColorArray) == null || v.set([N.r, N.g, N.b], g * 3);
      K._instanceIsActiveArray && (K._instanceIsActiveArray[g] = U ? 1 : 0);
    }
    K._baseMesh && (K._baseMesh.material.uniforms.u_color.value.set(yi).convertSRGBToLinear(), K._baseMesh.material.uniforms.u_blocksColor.value.copy(In), K._baseMesh.material.uniforms.u_successColor.value.copy(jr), K._baseMesh.material.uniforms.u_prevSuccessColor.value.set(yi).convertSRGBToLinear(), K._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(
      In.set(a.successColor),
      r
    ), K._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear());
  }
  function S() {
    Sn.forEach((y) => {
      y.forEach((b) => {
        const v = b.id % Ut + 1, A = ((Math.floor(b.id / Ut) + 1) * xn + v) * 4;
        let U = 0.5 * Ai * De.fit(Ri, 0, 0.1, 1, 0);
        U += (Qn > 0 ? 1 : 0) * De.fit(ir, 0, 0.1, 1, 0), U += tr * De.fit(nr, 0, 0.1, 1, 0), U = Math.min(1, U), K.infoTexture && (K.infoTexture.image.data[A] = b.activeRatio * (1 - U), K.infoTexture.image.data[A + 1] = b.isOccupied || b.willBeOccupied ? 1 : 0, K.infoTexture.image.data[A + 2] = b.isMain ? 1 : 0, K.infoTexture.image.data[A + 3] = b.isBorder ? 1 : 0);
      });
    }), K.infoTexture && K.infoTextureLinear && (K.infoTexture.needsUpdate = !0, K.infoTextureLinear.needsUpdate = !0);
  }
  function m() {
    var y, b;
    if (s) {
      const v = K._blockList[s.id];
      s.currentTile && v.boardPos.set((y = s.currentTile) == null ? void 0 : y.row, (b = s.currentTile) == null ? void 0 : b.col), v.showRatio = Ti(De.saturate(s.spawnAnimationRatioUnclamped));
    }
    n == null || n.forEach((v) => {
      var A, U, N, H;
      const g = K._blockList[v.id];
      g && (g.showRatio = Ti(De.saturate(v.spawnAnimationRatioUnclamped)), v != null && v.currentTile && g.boardPos.set((A = v.currentTile) == null ? void 0 : A.row, (U = v.currentTile) == null ? void 0 : U.col), v.targetTile && g.boardDir.set(
        v.targetTile.row - (((N = v.currentTile) == null ? void 0 : N.row) || 0),
        v.targetTile.col - (((H = v.currentTile) == null ? void 0 : H.col) || 0)
      ), g.animation = v.hasAnimationEnded ? 0 : v.easedAnimationRatio);
    });
  }
  function d(y) {
    var v, g;
    for (let A = 0; A < y; A++) {
      const U = K._blockRenderList[A];
      U.pos.toArray(K._instancePosArray || [], A * 3), U.orient.toArray(K._instanceOrientArray || [], A * 4), K._instanceShowRatioArray && (K._instanceShowRatioArray[A] = Yi.quartInOut(U.showRatio)), U.spinPivot.toArray(K._instanceSpinPivotArray || [], A * 3), U.spinOrient.toArray(K._instanceSpinOrientArray || [], A * 4), (v = K._instanceNextDirectionArray) == null || v.set([U.boardDir.x, U.boardDir.y], A * 2);
    }
    const b = (g = K._blocksMesh) == null ? void 0 : g.geometry;
    if (b) {
      for (const A in b.attributes) {
        const U = b.attributes[A];
        U.isBufferAttribute && (U.addUpdateRange(0, y * U.itemSize), U.needsUpdate = !0);
      }
      b.instanceCount = y;
    }
  }
  function P(y, b) {
    if (t === rt.STOP && b >= ln) {
      const v = b - ln, g = v % Ut - Nt, A = Math.floor(v / Ut) - Nt, U = Jn.getTile(A, g);
      if (!U.isOccupied) {
        const N = De.saturate(tr - U.randomDelay);
        U.activeRatio = N, y.showRatio = Ti(N), y.boardPos.set(A, g);
      }
    }
  }
  function R(y, b) {
    if (y && y.isErrorBlock && y.errorLifeCycle >= gc - 1) {
      const v = y.currentTile, g = y.errorFallAnimationTime;
      b.boardPos.set(v.row, v.col), St.set(v.row, v.col).normalize(), Math.abs(St.x) > Math.abs(St.y) ? St.set(Math.sign(St.x), 0) : St.set(0, Math.sign(St.y)), b.boardDir.set(St.x, St.y), b.animation = De.fit(g, 0, 1, 0, 1, Yi.sineOut), b.animation += Math.max(0, g - 0.8), b.update(st.getState().deltaTime), b.addsFallAnimation(Math.max(0, g - 0.8));
    }
  }
  function E(y, b, v) {
    if (t === rt.FAILED) {
      if (y) {
        const g = y.currentTile;
        if (Qn > 0) {
          const A = Math.floor(Qn * K.animationTotalFrames), U = Math.min(A + 1, K.animationTotalFrames - 1), N = Qn * K.animationTotalFrames - A;
          Ei.fromArray(g.loseAnimationPositionArray, A * 3), Ll.fromArray(g.loseAnimationPositionArray, U * 3), Ei.lerp(Ll, N), Ei.y *= 0.5, b.pos.set(Ei.z, Ei.y, -Ei.x), na.fromArray(g.loseAnimationOrientArray, A * 4), Il.fromArray(g.loseAnimationOrientArray, U * 4), na.slerp(Il, N), b.orient.copy(na);
        }
        if (Ci > 0) {
          const A = De.fit(Ci, 0, 1, 0, 1, Yi.sineOut);
          if (St.set(g.row, g.col), St.normalize(), St.multiplyScalar(0.1 * A), b.pos.x += St.x, b.pos.z -= St.y, Ci < 1) {
            const U = A * De.fit(Ci, 0.5, 0.8, 1, 0);
            St.set(y.randomVector.x, y.randomVector.y), St.normalize(), St.multiplyScalar(U), Zr.set(0, 0), Zr.addScaledVector(St, 0.08 * U * Math.sin(U * 80)), b.pos.x += Zr.x, b.pos.z += Zr.y;
          }
        }
      }
      if (v >= ln) {
        const g = v - ln, A = g % Ut - Nt, U = Math.floor(g / Ut) - Nt, N = Jn.getTile(U, A), H = De.saturate(ps - N.randomDelay);
        N.isOccupied || (N.activeRatio = H), b.showRatio = Ti(H), b.boardPos.set(U, A);
      }
    }
  }
  function I(y, b) {
    if ((t === rt.COMPLETED || t === rt.REPLAY) && y) {
      const v = y.currentTile, g = 0.1 * (v == null ? void 0 : v.randomDelay), A = Ai - g;
      let U = De.fit(A, 0, 0.5, 0, 1, (N) => 1 - Math.pow(1 - N, 5));
      U = De.fit(A, 0.7, 1, U, 0, (N) => Math.pow(N, 5)), b.pos.y += Qi * U;
    }
  }
  function C(y) {
    m(), _(y);
    let b = 0;
    for (let N = 0; N < qi; N++) {
      const H = K._blockList[N];
      H.update(y);
      const Z = n.find((G) => G.id === N);
      H.showRatio > 0 && (K._blockRenderList[b++] = H), E(Z, H, N), R(Z, H), I(Z, H), P(H, N);
    }
    S(), d(b);
    const v = Math.min(1, nr + ir + Ri), g = Yi.backOut(v, 3), A = 1 - Ti(bt.getState().firstStartAnimationRatio);
    i.position.y = -g - 2 * A, i.rotation.y = 0.5 * Math.PI * A, i.rotation.y += 2 * Math.PI * Yi.quartInOut($i), K._baseMesh && (K._baseMesh.material.uniforms.u_yDisplacement.value = -g - 5 * A, K._baseMesh.material.uniforms.u_successAnimationRatio.value = Ji);
    const U = rr.getState();
    Ft.setState({
      u_endAnimationRatio: {
        value: Math.min(
          1,
          De.fit(tr, 0.5, 2, 0, 1) + De.fit(ps, 0.5, 2, 0, 1) + De.fit(ft, 0, 0.2, 0, 1)
        )
      }
    }), K.directLight && (K.directLight.position.copy(o.u_lightPosition.value), K.directLight.shadow.camera.top = U.lightCameraSize, K.directLight.shadow.camera.bottom = -U.lightCameraSize, K.directLight.shadow.bias = U.lightCameraBias);
  }
  return {
    preload: l,
    init: f,
    reset: p,
    update: C,
    heroContainer: i
  };
}, er = T_(), Nl = `uniform float u_time;
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
`, b_ = `uniform vec3 u_bgColor1;
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
`, A_ = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`, vc = new _t(), w_ = () => {
  let i, e = null, t = null, n = null, r = null, s = null, o = null, a = null, l = null, c = 0, h = 0, f, u;
  const p = {
    u_time: { value: 0 },
    u_ratio: { value: 0 },
    u_isFloating: { value: 1 }
  };
  async function _() {
    yn.loadTexture(`${Nn}/matcap_gold.jpg`, (E) => {
      f = E, f.needsUpdate = !0;
    }), yn.loadBuf(`${Nn}/COIN.buf`, (E) => {
      i = E;
    }), yn.loadBuf(`${Nn}/COIN_PLACEMENT.buf`, (E) => {
      const { position: I, aoN: C, aoP: y, curveu: b, orient: v } = E.attributes;
      r = I.array, a = C.array, l = y.array, o = b.array, s = v.array, c = I.count;
    });
  }
  function S() {
    m(), d(), P(), e && vc.add(e);
  }
  function m() {
    i.computeVertexNormals();
    const E = new oo();
    E.index = i.index, Object.entries(i.attributes).forEach(([C, y]) => E.setAttribute(C, y)), u = new Float32Array(c * 3).map(() => Math.random() * 2 - 1), [
      ["a_instancePosition", r, 3],
      ["a_instanceQuaternion", s, 4],
      ["a_instanceCurveUV", o, 1],
      ["a_instanceAoN", a, 3],
      ["a_instanceAoP", l, 3],
      ["a_instanceRand", u, 3]
    ].forEach(([C, y, b]) => {
      E.setAttribute(C, new hs(y, b));
    }), t = E;
  }
  function d() {
    const E = Ft.getState();
    n = new At({
      uniforms: {
        ...E,
        ...p,
        ...cs.merge([se.lights]),
        u_matcapTexture: { value: f }
      },
      vertexShader: Nl,
      fragmentShader: b_,
      lights: !0
    });
  }
  function P() {
    t && n && (e = new Ot(t, n), e.frustumCulled = !1, e.castShadow = !0, e.receiveShadow = !0, e.customDepthMaterial = new At({
      uniforms: { ...p },
      vertexShader: Nl,
      fragmentShader: A_,
      defines: { IS_DEPTH: !0 }
    }));
  }
  function R(E) {
    const I = wi === 0;
    h = I ? Ki : wi, p.u_ratio.value = h, p.u_time.value += E, p.u_isFloating.value = I ? 1 : 0, e && (e.rotation.y = 0 * h, e.visible = h > 0 && h < 1);
  }
  return {
    preload: _,
    init: S,
    update: R
  };
}, R_ = `uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}
`, C_ = () => {
  async function e() {
    const n = Ft.getState();
    yn.loadTexture(`${Nn}/LDR_RGB1_0.png`, (r) => {
      r.generateMipmaps = !1, r.minFilter = r.magFilter = zt, r.wrapS = r.wrapT = as, r.needsUpdate = !0, n && (n.u_blueNoiseTexture.value = r, n.u_blueNoiseTexelSize.value.set(1 / 128, 1 / 128));
    }), Ne.getBlueNoise = R_;
  }
  function t(n) {
    Ft.setState((r) => ({
      u_blueNoiseCoordOffset: { value: r.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random()) }
    }));
  }
  return {
    update: t,
    preInit: e,
    TEXTURE_SIZE: 128
  };
}, Fl = { type: "change" }, ra = { type: "start" }, Ol = { type: "end" };
class P_ extends ii {
  constructor(e, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error(
      'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
    ), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new B(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = Math.PI * 0.2, this.maxPolarAngle = Math.PI * 0.45, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !0, this.dampingFactor = 0.15, this.enableZoom = !1, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 0.5, this.enablePan = !1, this.panSpeed = 1, this.screenSpacePanning = !0, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: si.ROTATE, MIDDLE: si.DOLLY, RIGHT: si.PAN }, this.touches = { ONE: ai.ROTATE, TWO: ai.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.scale = 1, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.scale = 1, n.object.updateProjectionMatrix(), n.dispatchEvent(Fl), n.update(), s = r.NONE;
    }, this.update = function() {
      const w = new B(), J = new Xt().setFromUnitVectors(e.up, new B(0, 1, 0)), ee = J.clone().invert(), ie = new B(), Le = new Xt(), Q = 2 * Math.PI;
      return function() {
        const be = n.object.position;
        w.copy(be).sub(n.target), w.applyQuaternion(J), a.setFromVector3(w), n.autoRotate && s === r.NONE && b(C()), n.enableDamping ? (a.theta += l.theta * n.dampingFactor, a.phi += l.phi * n.dampingFactor) : (a.theta += l.theta, a.phi += l.phi);
        let Me = n.minAzimuthAngle, le = n.maxAzimuthAngle;
        isFinite(Me) && isFinite(le) && (Me < -Math.PI ? Me += Q : Me > Math.PI && (Me -= Q), le < -Math.PI ? le += Q : le > Math.PI && (le -= Q), Me <= le ? a.theta = Math.max(Me, Math.min(le, a.theta)) : a.theta = a.theta > (Me + le) / 2 ? Math.max(Me, a.theta) : Math.min(le, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe();
        let He = n.enableDamping ? (n.scale - 1) * n.dampingFactor + 1 : n.scale;
        return a.radius *= He, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c), w.setFromSpherical(a), w.applyQuaternion(ee), be.copy(n.target).add(w), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, c.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), c.set(0, 0, 0)), n.scale = n.scale / He, h || ie.distanceToSquared(n.object.position) > o || 8 * (1 - Le.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Fl), ie.copy(n.object.position), Le.copy(n.object.quaternion), h = !1, !0) : !1;
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
    const o = 1e-6, a = new jo(), l = new jo(), c = new B();
    let h = !1;
    const f = new Ae(), u = new Ae(), p = new Ae(), _ = new Ae(), S = new Ae(), m = new Ae(), d = new Ae(), P = new Ae(), R = new Ae(), E = [], I = {};
    function C() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function y() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function b(w) {
      l.theta -= w;
    }
    function v(w) {
      l.phi -= w;
    }
    const g = function() {
      const w = new B();
      return function(ee, ie) {
        w.setFromMatrixColumn(ie, 0), w.multiplyScalar(-ee), c.add(w);
      };
    }(), A = function() {
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
          fe *= Math.tan(n.object.fov / 2 * Math.PI / 180), g(2 * ee * fe / Le.clientHeight, n.object.matrix), A(2 * ie * fe / Le.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (g(
          ee * (n.object.right - n.object.left) / n.object.zoom / Le.clientWidth,
          n.object.matrix
        ), A(
          ie * (n.object.top - n.object.bottom) / n.object.zoom / Le.clientHeight,
          n.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function N(w) {
      n.object.isPerspectiveCamera ? n.scale /= w : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * w)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function H(w) {
      n.object.isPerspectiveCamera ? n.scale *= w : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / w)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function Z(w) {
      f.set(w.clientX, w.clientY);
    }
    function G(w) {
      d.set(w.clientX, w.clientY);
    }
    function ne(w) {
      _.set(w.clientX, w.clientY);
    }
    function W(w) {
      u.set(w.clientX, w.clientY), p.subVectors(u, f).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      b(2 * Math.PI * p.x / J.clientHeight), v(2 * Math.PI * p.y / J.clientHeight), f.copy(u), n.update();
    }
    function oe(w) {
      P.set(w.clientX, w.clientY), R.subVectors(P, d), R.y > 0 ? N(y()) : R.y < 0 && H(y()), d.copy(P), n.update();
    }
    function pe(w) {
      S.set(w.clientX, w.clientY), m.subVectors(S, _).multiplyScalar(n.panSpeed), U(m.x, m.y), _.copy(S), n.update();
    }
    function Se(w) {
      w.deltaY < 0 ? H(y()) : w.deltaY > 0 && N(y()), n.update();
    }
    function Oe() {
      if (E.length === 1)
        f.set(E[0].pageX, E[0].pageY);
      else {
        const w = 0.5 * (E[0].pageX + E[1].pageX), J = 0.5 * (E[0].pageY + E[1].pageY);
        f.set(w, J);
      }
    }
    function Ze() {
      if (E.length === 1)
        _.set(E[0].pageX, E[0].pageY);
      else {
        const w = 0.5 * (E[0].pageX + E[1].pageX), J = 0.5 * (E[0].pageY + E[1].pageY);
        _.set(w, J);
      }
    }
    function Y() {
      const w = E[0].pageX - E[1].pageX, J = E[0].pageY - E[1].pageY, ee = Math.sqrt(w * w + J * J);
      d.set(0, ee);
    }
    function re() {
      n.enableZoom && Y(), n.enablePan && Ze();
    }
    function ge() {
      n.enableZoom && Y(), n.enableRotate && Oe();
    }
    function ae(w) {
      if (E.length === 1)
        u.set(w.pageX, w.pageY);
      else {
        const ee = $(w), ie = 0.5 * (w.pageX + ee.x), Le = 0.5 * (w.pageY + ee.y);
        u.set(ie, Le);
      }
      p.subVectors(u, f).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      b(2 * Math.PI * p.x / J.clientHeight), v(2 * Math.PI * p.y / J.clientHeight), f.copy(u);
    }
    function ye(w) {
      if (E.length === 1)
        S.set(w.pageX, w.pageY);
      else {
        const J = $(w), ee = 0.5 * (w.pageX + J.x), ie = 0.5 * (w.pageY + J.y);
        S.set(ee, ie);
      }
      m.subVectors(S, _).multiplyScalar(n.panSpeed), U(m.x, m.y), _.copy(S);
    }
    function We(w) {
      const J = $(w), ee = w.pageX - J.x, ie = w.pageY - J.y, Le = Math.sqrt(ee * ee + ie * ie);
      P.set(0, Le), R.set(0, Math.pow(P.y / d.y, n.zoomSpeed)), N(R.y), d.copy(P);
    }
    function we(w) {
      n.enableZoom && We(w), n.enablePan && ye(w);
    }
    function at(w) {
      n.enableZoom && We(w), n.enableRotate && ae(w);
    }
    function tt(w) {
      n.enabled !== !1 && (E.length === 0 && (n.domElement.setPointerCapture(w.pointerId), n.domElement.addEventListener("pointermove", ze), n.domElement.addEventListener("pointerup", D)), x(w), w.pointerType === "touch" ? Qe(w) : Ge(w));
    }
    function ze(w) {
      n.enabled !== !1 && (w.pointerType === "touch" ? xe(w) : Ve(w));
    }
    function D(w) {
      z(w), E.length === 0 && (n.domElement.releasePointerCapture(w.pointerId), n.domElement.removeEventListener("pointermove", ze), n.domElement.removeEventListener("pointerup", D)), n.dispatchEvent(Ol), s = r.NONE;
    }
    function Rt(w) {
      z(w);
    }
    function Ge(w) {
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
        case si.DOLLY:
          if (n.enableZoom === !1) return;
          G(w), s = r.DOLLY;
          break;
        case si.ROTATE:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enablePan === !1) return;
            ne(w), s = r.PAN;
          } else {
            if (n.enableRotate === !1) return;
            Z(w), s = r.ROTATE;
          }
          break;
        case si.PAN:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enableRotate === !1) return;
            Z(w), s = r.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            ne(w), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(ra);
    }
    function Ve(w) {
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
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (n.dispatchEvent(ra), Se(w), n.dispatchEvent(Ol));
    }
    function Qe(w) {
      switch (q(w), E.length) {
        case 1:
          switch (n.touches.ONE) {
            case ai.ROTATE:
              if (n.enableRotate === !1) return;
              Oe(), s = r.TOUCH_ROTATE;
              break;
            case ai.PAN:
              if (n.enablePan === !1) return;
              Ze(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case ai.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              re(), s = r.TOUCH_DOLLY_PAN;
              break;
            case ai.DOLLY_ROTATE:
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
      s !== r.NONE && n.dispatchEvent(ra);
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
          we(w), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          at(w), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function T(w) {
      n.enabled !== !1 && (w.preventDefault(), n.domElement.removeEventListener("contextmenu", T));
    }
    function x(w) {
      E.push(w);
    }
    function z(w) {
      delete I[w.pointerId];
      for (let J = 0; J < E.length; J++)
        if (E[J].pointerId === w.pointerId) {
          E.splice(J, 1);
          return;
        }
    }
    function q(w) {
      let J = I[w.pointerId];
      J === void 0 && (J = new Ae(), I[w.pointerId] = J), J.set(w.pageX, w.pageY);
    }
    function $(w) {
      const J = w.pointerId === E[0].pointerId ? E[1] : E[0];
      return I[J.pointerId];
    }
    n.domElement.addEventListener("contextmenu", T), n.domElement.addEventListener("pointerdown", tt), n.domElement.addEventListener("pointercancel", Rt), n.domElement.addEventListener("wheel", ve, { passive: !1 }), this.update(), n.domElement.removeEventListener("pointercancel", Rt), n.domElement.removeEventListener("wheel", ve, { passive: !1 });
  }
}
class Bl {
  constructor(e) {
    Re(this, "id", -1);
    Re(this, "isMoving", !1);
    Re(this, "hasBeenSpawned", !1);
    Re(this, "hasAnimationEnded", !1);
    Re(this, "hasBeenEvaluated", !1);
    Re(this, "currentTile", null);
    Re(this, "targetTile", null);
    Re(this, "moveAnimationRatio", 0);
    Re(this, "spawnAnimationRatio", 0);
    Re(this, "spawnAnimationRatioUnclamped", -Math.random());
    Re(this, "easedAnimationRatio", 0);
    Re(this, "randomVector", {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    });
    Re(this, "lifeCycle", 0);
    Re(this, "easingFunction", null);
    Re(this, "errorLifeCycle", 0);
    Re(this, "isErrorBlock", !1);
    Re(this, "errorPreFallAnimationTime", 0);
    Re(this, "errorPreFallAnimationTimeScale", 0);
    Re(this, "errorFallAnimationTime", 0);
    Re(this, "isErrorBlockFalling", !1);
    Re(this, "skipFallAnimation", !1);
    this.id = e, this.init();
  }
  init() {
    this._setNewEasingFunction();
  }
  _setNewEasingFunction() {
    const e = Math.random(), t = 0.25;
    this.easingFunction = (n) => Ti(De.fit(n, e * t, e * t + (1 - t), 0, 1));
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
    this.hasBeenEvaluated = !1, this.hasAnimationEnded = !1, this.moveAnimationRatio = 0, this.easedAnimationRatio = 0, this.isMoving = !1, this.lifeCycle++, this.isErrorBlock && !this.skipFallAnimation && (this.errorLifeCycle++, this.isErrorBlockFalling = this.errorLifeCycle >= gc - 1);
    const e = (r = bt.getState().blocks) == null ? void 0 : r.length, t = nt.getState().flags.isFree, n = st.getState().errorBlock;
    (s = this.currentTile) != null && s.isBorder && !n && Math.random() < 0.5 && e >= r_ && t && (Lc(this), this.isErrorBlock = !0), this._setNewEasingFunction(), this.updateTile();
  }
  reset(e = !1) {
    var t, n;
    this.isErrorBlock && (this.errorLifeCycle = 0, this.isErrorBlock = !1, (t = this.currentTile) == null || t.reset(), (n = this.targetTile) == null || n.reset(), this.errorFallAnimationTime = 0, this.isErrorBlockFalling = !1, this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0, this.errorFallAnimationTime = 0, this.skipFallAnimation = !1), this.id = e ? this.id : -1, this.isMoving = !1, this.hasBeenSpawned = !1, this.hasAnimationEnded = !1, this.hasBeenEvaluated = !1, this.currentTile = null, this.targetTile = null, this.moveAnimationRatio = 0, this.spawnAnimationRatio = 0, this.spawnAnimationRatioUnclamped = -Math.random(), this.easedAnimationRatio = 0, this.lifeCycle = 0;
  }
  _onMovementEnd() {
    this.moveAnimationRatio = 1, this.currentTile && (this.currentTile.isOccupied = !1), this.currentTile = this.targetTile, this.targetTile = null, this.hasAnimationEnded = !0, this.updateTile();
  }
  _updateSpawnAnimation(e) {
    this.spawnAnimationRatioUnclamped += 0.75 * Qs * e, this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped)), this.spawnAnimationRatio === 1 && (this.hasBeenSpawned = !0);
  }
  _updateMovement(e) {
    var r;
    const t = nt.getState().flags.isResult, n = nt.getState().flags.isFree;
    (this.isMoving && !this.hasAnimationEnded || t) && (this.moveAnimationRatio = Math.min(
      1,
      this.moveAnimationRatio + Qs * e * (this.isErrorBlock ? 0.7 : 1)
    ), this.easedAnimationRatio = ((r = this.easingFunction) == null ? void 0 : r.call(this, Math.max(0, this.moveAnimationRatio))) || 0, this.easedAnimationRatio === 1 && (n || t) && this._onMovementEnd());
  }
  _updateTileRatios() {
    const e = Math.max(
      0,
      Math.min(1, this.hasBeenSpawned ? this.easedAnimationRatio : this.spawnAnimationRatio)
    );
    this.currentTile && (this.currentTile.activeRatio = this.hasBeenSpawned ? this.targetTile ? 1 - e : 1 : this.spawnAnimationRatio), this.targetTile && (this.targetTile.activeRatio = e), this.isErrorBlock && this.isErrorBlockFalling && (this.currentTile && (this.currentTile.activeRatio = 0), this.targetTile && (this.targetTile.activeRatio = 0));
  }
  update(e) {
    this.hasBeenSpawned ? this._updateMovement(e) : this._updateSpawnAnimation(e), this.isErrorBlockFalling && (this.errorFallAnimationTime = this.errorFallAnimationTime + 3 * Qs * e), this.isErrorBlock && (this.errorPreFallAnimationTimeScale = this.errorPreFallAnimationTimeScale + 3 * e, this.errorPreFallAnimationTimeScale = Math.min(20, this.errorPreFallAnimationTimeScale), this.errorPreFallAnimationTime = this.errorPreFallAnimationTime + this.errorPreFallAnimationTimeScale * e, this.skipFallAnimation && (this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0)), this._updateTileRatios();
  }
}
const D_ = () => {
  let i = bt.getState(), e = nt.getState().flags;
  nt.subscribe(
    (u) => u.flags,
    (u) => {
      e = u;
    },
    { fireImmediately: !0 }
  ), bt.subscribe(
    (u) => u,
    (u) => i = u,
    { fireImmediately: !0 }
  ), nt.subscribe(
    (u) => u.animationTypeEnded,
    (u) => {
      if (u)
        switch (u) {
          case "win": {
            a(), Dl({ previousSuccessBlocksAnimationRatio: 1 }), s();
            break;
          }
          case "lose": {
            a(), s();
            break;
          }
          case "stop":
          default:
            a(!0);
            break;
        }
    },
    { fireImmediately: !0 }
  );
  function t() {
    const { isFailResult: u, isStopped: p, isSuccessResult: _, isReplayResult: S, isFree: m } = e;
    u || p || i.blocks.length >= ln || ji != null && ji.isOccupied && !_ && !S || (_ || S ? n() : r(), i.blocks.length);
  }
  function n() {
    var _;
    const u = (_ = i.blocks) == null ? void 0 : _.length, p = ln - u;
    for (let S = 0; S < p; S++) {
      const m = Jn.getRandomFreeTile();
      if (m) {
        const d = new Bl(i.blocks.length);
        d.currentTile = m, d.init(), d.updateTile(), Cl(d);
      }
    }
  }
  function r() {
    let u = null;
    const p = e.isFree, _ = !!(i.blocks.length < ss && p);
    console.debug("isFree=", p), _ && (u = new Bl(i.blocks.length), console.debug("block1=", u), Pl(u)), u && (u.currentTile = ji, u.init(), u.updateTile()), console.debug("block2=", u);
  }
  function s() {
    const u = e.hasNotStarted, p = e.isFailResult, _ = e.isStopped;
    u || (i.lastSpawnedBlock && (Cl(i.lastSpawnedBlock), Pl(null)), !(p || _) && (i.blocks.forEach((S) => S.resetAfterCycle()), bt.getState().incCycleIndex(), t(), o()));
  }
  function o() {
    var S, m;
    const u = bt.getState().cycleIndex, p = (S = bt.getState().blocks) == null ? void 0 : S.length, _ = u % 2 === 0 ? !0 : p < ss - 1;
    (m = i.lastSpawnedBlock) != null && m.hasBeenSpawned && i.lastSpawnedBlock.moveToNextTile(_, 0), i.blocks.forEach((d, P) => {
      !d.hasBeenEvaluated && d.hasBeenSpawned && d.moveToNextTile(_, P * 0.2);
    });
  }
  function a(u = !1) {
    i.blocks.forEach((S) => S.reset()), er.reset(), Jn.reset(), bt.getState().reset();
    const p = nt.getState().result, _ = Rc.includes(p);
    nt.getState().reset(), s(), !u && _ && Uc();
  }
  function l(u) {
    const p = e.isResult, _ = bt.getState().animationSpeedRatio, S = bt.getState().firstStartAnimationRatio, m = bt.getState().previousSuccessBlocksAnimationRatio, d = Math.min(1, _ + u * (p ? 1 : 0)), P = De.saturate(m - u / 1.5), R = De.saturate(
      S + u * (st.getState().showVisual ? 1 : 0)
    );
    Dl({
      animationSpeedRatio: d,
      firstStartAnimationRatio: R,
      previousSuccessBlocksAnimationRatio: P
    });
  }
  function c() {
    var m;
    let u = !0;
    i.lastSpawnedBlock && (u = !!((m = i.lastSpawnedBlock) != null && m.hasBeenSpawned)), i.blocks.forEach((d) => {
      d.lifeCycle > 0 ? u = !!(d.hasBeenEvaluated && d.hasAnimationEnded) : u = d.spawnAnimationRatio === 1;
    });
    const { isStopped: p, isFailResult: _, isResult: S } = e;
    return u || S || _ || p;
  }
  function h(u) {
    if (l(u), bl.update(u), Al.update(u), wl.update(u), e.hasNotStarted) {
      s();
      return;
    }
    Jn.preUpdate(u), i.lastSpawnedBlock && i.lastSpawnedBlock.update(u), i.blocks.forEach((_) => _.update(u)), Jn.update(u), c() && s();
  }
  async function f() {
    bl.init(), Al.init(), wl.init(), Jn.init();
  }
  return {
    init: f,
    update: h,
    reset: a
  };
}, zl = D_(), L_ = `varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}
`, I_ = `uniform vec3 u_bgColor1;
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
`, U_ = `attribute vec3 a_instancePosition;
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
`, N_ = `varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}
`, Xa = new _t(), F_ = () => {
  const i = new Ot(new Oi(2, 2)), e = new Ot();
  let t;
  Ft.subscribe(
    (o) => o,
    (o) => {
      t = o;
    },
    { fireImmediately: !0 }
  );
  function n() {
    const o = {
      u_resolution: t.u_resolution,
      u_bgColor1: t.u_bgColor1,
      u_bgColor2: t.u_bgColor2,
      u_blueNoiseTexture: t.u_blueNoiseTexture,
      u_blueNoiseTexelSize: t.u_blueNoiseTexelSize,
      u_blueNoiseCoordOffset: t.u_blueNoiseCoordOffset
    };
    i.material = new At({
      uniforms: o,
      vertexShader: L_,
      fragmentShader: I_
    }), i.renderOrder = 1, Xa.add(i), r();
  }
  function r() {
    const a = new Oi(1, 1), l = new oo();
    l.index = a.index, Object.keys(a.attributes).forEach((u) => {
      l.setAttribute(u, a.attributes[u]);
    }), l.instanceCount = 50;
    const c = new Float32Array(50 * 3), h = new Float32Array(50 * 3);
    for (let u = 0; u < 50; u++)
      c[u * 3] = 3 * (Math.random() * 2 - 1), c[u * 3 + 1] = Math.random() * 2 - 1, c[u * 3 + 2] = 0.5 + 0.5 * Math.random(), h[u * 3] = Math.random(), h[u * 3 + 1] = Math.random(), h[u * 3 + 2] = Math.random();
    l.setAttribute("a_instancePosition", new hs(c, 3)), l.setAttribute("a_instanceRandom", new hs(h, 3));
    const f = {
      u_time: (t == null ? void 0 : t.u_time) || { value: st.getState().time },
      u_resolution: t.u_resolution,
      u_size: { value: st.getState().particlesSize },
      u_color: { value: new Ce(st.getState().particlesColor) },
      u_opacity: { value: st.getState().particlesOpacity }
    };
    e.material = new At({
      vertexShader: U_,
      fragmentShader: N_,
      uniforms: f,
      transparent: !0
    }), e.geometry = l, e.frustumCulled = !1, Xa.add(e);
  }
  function s(o) {
    e.material.uniforms.u_size.value = st.getState().particlesSize, e.material.uniforms.u_color.value.set(st.getState().particlesColor), e.material.uniforms.u_opacity.value = st.getState().particlesOpacity;
  }
  return { init: n, update: s };
};
Ye.enabled = !1;
const O_ = () => {
  const i = new eh(), e = st.getState().setProperty, t = new e_(i_), n = F_(), r = C_(), s = w_();
  let o, a, l;
  const c = window.innerWidth / window.innerHeight, h = 15, f = h * c, u = new ao(f / -2, f / 2, h / 2, h / -2, 1, 1e3);
  let p;
  async function _() {
    if (l && t) {
      t.domElement.id = l, o = t.domElement, document.body.appendChild(o), t.shadowMap.enabled = !0, t.shadowMap.type = Za;
      const C = st.getState().bgColor1, y = st.getState().bgColor2, b = Ft.getState().u_bgColor1.value.set(C).convertSRGBToLinear(), v = Ft.getState().u_bgColor2.value.set(y).convertSRGBToLinear();
      Ft.setState({ u_bgColor1: { value: b }, u_bgColor2: { value: v } }), t.setClearColor(b, 1);
    }
  }
  function S(C, y) {
    e({ propertyName: "viewportWidth", value: C }), e({ propertyName: "viewportHeight", value: y });
    let b = C * Ml, v = y * Ml;
    const g = b / v;
    v * b > El && (v = Math.sqrt(El / g), b = Math.ceil(v * g), v = Math.ceil(v)), e({ propertyName: "width", value: b }), e({ propertyName: "height", value: v }), u.updateProjectionMatrix(), Ft.setState((A) => ({
      u_viewportResolution: {
        value: A.u_viewportResolution.value.set(C, window.innerHeight)
      },
      u_resolution: { value: A.u_resolution.value.set(b, v) }
    })), t.setSize(b, v), o.style.width = C + "px", o.style.height = y + "px";
  }
  function m() {
    S(window.innerWidth, window.innerHeight);
  }
  async function d({ canvasId: C, initCallback: y }) {
    l = C;
    try {
      await _();
    } catch (b) {
      console.error("renderer", b);
    }
    try {
      await er.preload();
    } catch (b) {
      console.error("blocks preload", b);
    }
    try {
      await r.preInit();
    } catch (b) {
      console.error("blue noise preload", b);
    }
    try {
      await s.preload();
    } catch (b) {
      console.error("coins preload", b);
    }
    yn.start(y);
  }
  async function P() {
    i.add(u), u.position.fromArray(t_), u.updateProjectionMatrix(), p = u.clone(), a = new P_(p, o), a.target0.fromArray(n_), a.reset();
  }
  async function R() {
    await P(), nt.subscribe(
      (C) => C.destroyCanvas,
      (C) => {
        C && I();
      },
      { fireImmediately: !0 }
    );
    try {
      await zl.init();
      const C = await er.init();
      C && (i.add(C), i.add(C.target)), s.init(), n.init(), i.add(vc), i.add(Xa), i.add(er.heroContainer);
    } catch (C) {
      console.error("init tower error: ", C);
    }
  }
  function E(C) {
    o || (C *= 0), C = Math.min(C, 1 / 15);
    let y = st.getState().time;
    const b = st.getState().cameraOffsetX;
    let v = st.getState().offsetX;
    y += C, e({ propertyName: "time", value: y }), e({ propertyName: "deltaTime", value: C }), Ft.setState({
      u_time: { value: y },
      u_deltaTime: { value: C }
    });
    const g = (window.innerWidth - b) / window.innerHeight, A = 10, U = A * g;
    if (v) {
      const Z = v / window.innerWidth * 100;
      v = U * Z / 100;
    }
    const N = -U / 2 - v / 2, H = U / 2 - v / 2;
    u.left = N, u.right = H, u.top = A / 2, u.bottom = A / -2, u.updateProjectionMatrix(), a == null || a.update(), p == null || p.updateMatrix(), p == null || p.matrix.decompose(u.position, u.quaternion, u.scale), u.matrix.compose(u.position, u.quaternion, u.scale), r.update(C), zl.update(C), er.update(C), s.update(C), n.update(C), t && i && t.render(i, u);
  }
  function I() {
    nt.getState().reset(), o.remove(), t.state.reset();
  }
  return {
    preload: d,
    init: R,
    onResize: m,
    render: E
  };
}, sr = O_();
let ms = 0, Ya = 0;
const B_ = 60, z_ = 1 / B_;
let Hl;
const kl = st.getState().setProperty;
function xc() {
  const i = performance.now() / 1e3, e = i - ms;
  i - Ya >= z_ && (Ya = i, sr.render(e), ms = i), cancelAnimationFrame(Hl), Hl = requestAnimationFrame(xc);
}
function H_() {
  sr.init().then(() => {
    ms = performance.now() / 1e3, Ya = ms, window.addEventListener("resize", () => sr.onResize()), sr.onResize(), xc();
  }).catch((i) => {
    console.error("init err:", i);
  });
}
async function Y_({ canvasId: i, offset: e = 0 }) {
  if (!document.getElementById(i)) {
    kl({ propertyName: "offsetX", value: e }), kl({ propertyName: "cameraOffsetX", value: e / window.innerWidth });
    try {
      await sr.preload({ canvasId: i, initCallback: H_ });
    } catch (t) {
      console.error("loadTowerAnimation", t);
    }
  }
}
async function q_({ canvasId: i }) {
  if (!document.getElementById(i)) return;
  nt.getState().status === "not-started" || Nc(), nt.getState().setDestroyCanvas(!0);
}
const Z_ = (i) => {
  for (const e of i)
    e.propertyName === "bgColor1" && Ft.setState((t) => ({
      u_bgColor1: { value: t.u_bgColor1.value.set(e.value).convertSRGBToLinear() }
    })), e.propertyName === "bgColor2" && Ft.setState((t) => ({
      u_bgColor2: { value: t.u_bgColor2.value.set(e.value).convertSRGBToLinear() }
    })), st.getState().setProperty(e);
};
export {
  Kr as SuccessLevel,
  Y_ as loadTowerAnimation,
  q_ as removeTowerAnimation,
  Z_ as setAnimationProperties,
  G_ as setLose,
  Uc as setStart,
  Nc as setStop,
  W_ as setWin,
  V_ as showVisual
};
