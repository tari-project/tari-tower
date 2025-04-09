var xn = Object.defineProperty;
var yn = (r, t, c) => t in r ? xn(r, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : r[t] = c;
var A = (r, t, c) => yn(r, typeof t != "symbol" ? t + "" : t, c);
import * as l from "three";
import { EventDispatcher as Tn, Vector3 as le, MOUSE as ye, TOUCH as Te, Quaternion as It, Spherical as kt, Vector2 as J } from "three";
import W from "min-signal";
const de = "/assets", bn = Math.min(2, window.devicePixelRatio || 1), An = 2560 * 1440, Sn = !1, Cn = [-20, 18, 20], Rn = [0, 0, 0], En = { antialias: !0, alpha: !1, powerPreference: "low-power" }, he = {
  DPR: bn,
  MAX_PIXEL_COUNT: An,
  DEFAULT_POSITION: Cn,
  DEFAULT_LOOKAT_POSITION: Rn,
  SHOW_BLOCK: Sn
}, Qe = (r, t) => Math.hypot(r, t);
class Mn {
  constructor(t = 0, c = 0, e = 0) {
    A(this, "id", 0);
    A(this, "row", 0);
    A(this, "col", 0);
    A(this, "distance", Qe(this.row, this.col));
    A(this, "MAX_DISTANCE", Qe(G, G));
    A(this, "priority", this.MAX_DISTANCE - this.distance);
    A(this, "isMain", this.row === 0 && this.col === 0);
    A(this, "isBorder", Math.abs(this.row) === 2 || Math.abs(this.col) === 2);
    A(this, "isOccupied", !1);
    A(this, "willBeOccupied", !1);
    A(this, "activeRatio", 0);
    A(this, "neighbours", null);
    A(this, "reachableNeighbours", null);
    A(this, "prioritySortedReachableNeighbours", null);
    A(this, "randomDelay", Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5);
    A(this, "loseAnimationPositionArray", []);
    A(this, "loseAnimationOrientArray", []);
    this.id = t, this.row = c, this.col = e, this.distance = Qe(c, e), this.MAX_DISTANCE = Qe(G, G), this.priority = this.MAX_DISTANCE - this.distance, this.isMain = c === 0 && e === 0, this.isBorder = Math.abs(c) === 2 || Math.abs(e) === 2, this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0, this.neighbours = null, this.reachableNeighbours = null, this.prioritySortedReachableNeighbours = null, this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
  }
  init() {
    var t;
    this.reachableNeighbours = ((t = this.neighbours) == null ? void 0 : t.filter((c) => (c == null ? void 0 : c.row) === this.row || (c == null ? void 0 : c.col) === this.col)) || null, this._sortPriorityNeighbours();
  }
  _sortPriorityNeighbours() {
    this.prioritySortedReachableNeighbours = this.reachableNeighbours ? [...this.reachableNeighbours].sort((t, c) => ((t == null ? void 0 : t.priority) || 0) - ((c == null ? void 0 : c.priority) || 0)) : null;
  }
  shuffleReachableNeighbours() {
    if (this.reachableNeighbours)
      for (let t = this.reachableNeighbours.length - 1; t > 0; t--) {
        const c = Math.floor(Math.random() * (t + 1));
        [this.reachableNeighbours[t], this.reachableNeighbours[c]] = [this.reachableNeighbours[c], this.reachableNeighbours[t]];
      }
    this._sortPriorityNeighbours();
  }
  preUpdate(t) {
    this.activeRatio = 0;
  }
  reset() {
    this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0;
  }
  update(t) {
  }
}
const Z = 5, ae = Z + 2, G = Math.floor(Z / 2), Q = Z * Z, Pn = ae * ae;
let ze = null, re = [];
const Dn = () => {
  function r() {
    re = Array.from(
      { length: Z },
      (g, m) => Array.from({ length: Z }, (x, b) => {
        const P = m - G, w = b - G;
        return new Mn(m * Z + b, P, w);
      })
    ), re.forEach(
      (g, m) => g.forEach((x, b) => {
        x.neighbours = e(m - G, b - G), x.init();
      })
    ), ze = t(0, 0);
  }
  function t(g, m) {
    var x;
    return ((x = re[g + G]) == null ? void 0 : x[m + G]) || null;
  }
  function c() {
    const g = re.flat().filter((m) => !m.isOccupied);
    return g.length ? g[Math.floor(Math.random() * g.length)] : null;
  }
  function e(g, m) {
    return [-1, 0, 1].flatMap(
      (x) => [-1, 0, 1].map((b) => x === 0 && b === 0 ? null : t(g + x, m + b)).filter(Boolean)
    );
  }
  function d() {
    re.flat().forEach((g) => g.reset());
  }
  function p(g) {
    re.flat().forEach((m) => m.preUpdate(g));
  }
  function R(g) {
    re.flat().forEach((m) => m.update(g));
  }
  return {
    init: r,
    getTile: t,
    getRandomFreeTile: c,
    reset: d,
    preUpdate: p,
    update: R
  };
}, ue = Dn(), Ut = new l.Vector2(), Ht = new l.Vector2(), Vt = Q - 5, Ln = {
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
  scene: new l.Scene(),
  postprocessing: !1,
  resolution: Ut,
  viewportResolution: Ht,
  canvas: null,
  orbitTarget: null,
  sharedUniforms: {
    u_time: { value: 0 },
    u_deltaTime: { value: 1 },
    u_resolution: { value: Ut },
    u_viewportResolution: { value: Ht },
    u_bgColor1: { value: new l.Color() },
    u_bgColor2: { value: new l.Color() }
  },
  isPaused: !1,
  showVisual: he.SHOW_BLOCK,
  loadList: [],
  animationSpeed: 1,
  activeBlocksCount: 0,
  maxFreeBlocksCount: Vt,
  lightPositionX: -2,
  lightPositionY: 6,
  lightPositionZ: -4,
  lightCameraSize: 4.5,
  lightCameraBias: 5e-3,
  lightCameraNear: 3,
  lightCameraFar: 16,
  errorBlock: null,
  errorBlockMaxLifeCycle: 4,
  minSpawnedBlocksForTheErrorBlock: Vt - 2,
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
}, i = { ...Ln }, it = new W(), On = new W(), Nn = new W(), yt = new W(), gt = new W(), tn = new W(), wt = new W(), _t = new W();
new W();
const nn = new W(), Bn = new W(), zn = new W();
var L = /* @__PURE__ */ ((r) => (r.NOT_STARTED = "not-started", r.STARTED = "started", r.FREE = "free", r.RESULT = "result", r.RESULT_ANIMATION = "result_animation", r.RESTART_ANIMATION = "restart_animation", r.RESTART = "restart", r))(L || {}), O = /* @__PURE__ */ ((r) => (r.NONE = "none", r.PAUSE = "pause", r.STOP = "stop", r.COMPLETED = "completed", r.FAILED = "failed", r.REPLAY = "replay", r))(O || {}), ve = /* @__PURE__ */ ((r) => (r[r.ONE = 1] = "ONE", r[r.TWO = 2] = "TWO", r[r.THREE = 3] = "THREE", r))(ve || {});
const st = (r) => `%c tari-tower ${r} | `, lt = "font-weight:900; font-size:12px;";
function ge(...r) {
  return console.error(st("error"), `${lt} color:red;`, ...r);
}
function ut(...r) {
  return console.info(st("info"), `${lt} color:rgb(105, 139, 219);`, ...r);
}
function Fe(...r) {
  return console.warn(st("warn"), `${lt} color:orange;`, ...r);
}
function Fn(...r) {
  return console.log(st("log"), `${lt} color:hotpink`, ...r);
}
const In = [L.NOT_STARTED, L.RESTART_ANIMATION, L.RESTART, L.STARTED], kn = [O.FAILED, O.COMPLETED];
let N = {
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
}, X = L.NOT_STARTED, V = O.NONE, oe = [];
const Un = 7, Hn = () => {
  const r = Object.values(L);
  let t = 0, c = !1;
  function e() {
    var v, S, B;
    if (!(i.errorBlock && (ut(
      "errorBlock in updateAfterCycle | ",
      `falling: ${(v = i.errorBlock) == null ? void 0 : v.isErrorBlockFalling}, lifecycle: ${(S = i.errorBlock) == null ? void 0 : S.errorLifeCycle}/${i.errorBlockMaxLifeCycle}`
    ), i.errorBlock.isErrorBlockFalling || i.errorBlock.errorLifeCycle >= i.errorBlockMaxLifeCycle - 1)) && (N.isStart ? w() : N.isResult && h(), oe.length !== 0)) {
      ut(`statusUpdateQueue (${oe.length}):`, oe.map((ee) => ee.status).join(" | "));
      const j = (B = oe.shift()) == null ? void 0 : B.callback;
      j == null || j();
    }
  }
  function d() {
    const v = X === L.RESULT || X === L.RESULT_ANIMATION;
    N = {
      hasNotStarted: X === L.NOT_STARTED,
      isStart: X === L.STARTED,
      isFree: X === L.FREE,
      isResult: X === L.RESULT,
      isResultAnimation: X === L.RESULT_ANIMATION,
      isRestart: X === L.RESTART,
      isReplayResult: v && V === O.REPLAY,
      isSuccessResult: v && V === O.COMPLETED,
      isFailResult: v && V === O.FAILED,
      isStopped: v && V === O.STOP
    };
  }
  function p(v, S) {
    if (!i.showVisual) return !1;
    const B = !!S;
    S === O.REPLAY && t === 0 && (t = 2), v === L.NOT_STARTED && S === O.NONE && t === 5 && (t = 6);
    const ee = r.indexOf(v);
    return (t + 1) % r.length === ee ? (t = ee, X = r[t], B || (d(), it.dispatch(X, S)), !0) : !1;
  }
  function R({ status: v, result: S, animationStyle: B }) {
    if (p(v, S)) {
      if (i.errorBlock && !i.errorBlock.isErrorBlockFalling && (i.errorBlock.preventErrorBlockFallAnimation(), i.errorBlock = null), S && (V = S), d(), B) {
        tn.dispatch(B);
        return;
      }
      it.dispatch(X, V);
    }
  }
  function g(v, S = !1) {
    var j;
    ut(`stateManager.set - id: ${v} ${S ? "replay" : ""}`);
    const B = {
      start: () => P(),
      stop: () => y(),
      fail: () => f(),
      resultAnimation: () => h(),
      restartAnimation: () => s(),
      restart: () => u(),
      showVisual: () => m(),
      success: () => M(S),
      success2: () => D(S),
      success3: () => _(S)
    };
    (j = B[v]) == null || j.call(B);
  }
  function m() {
    i.showVisual = !0;
  }
  function x({ status: v, result: S = null, animationStyle: B = null }) {
    oe.length >= Un && (Fe("State update queue too long, clearing to prevent backlog"), oe = []), (S || v === L.STARTED) && (oe = []);
    const j = S ? {
      status: v,
      callback: () => R({ status: v, result: S, animationStyle: B })
    } : { status: v, callback: () => p(v) };
    oe.push(j);
  }
  function b() {
    if (c) {
      X = L.NOT_STARTED, V = O.NONE, t = 0, o(!1);
      return;
    }
    x({
      status: L.NOT_STARTED,
      result: O.NONE
    });
  }
  function P() {
    oe = [], x({ status: L.STARTED });
  }
  function w() {
    x({ status: L.FREE });
  }
  function y() {
    x({
      status: L.RESULT,
      result: O.STOP
    });
  }
  function M(v = !1) {
    const S = v && N.hasNotStarted ? O.REPLAY : O.COMPLETED;
    x({
      status: L.RESULT,
      result: S,
      animationStyle: ve.ONE
    });
  }
  function D(v = !1) {
    const S = v && N.hasNotStarted ? O.REPLAY : O.COMPLETED;
    x({
      status: L.RESULT,
      result: S,
      animationStyle: ve.TWO
    });
  }
  function _(v = !1) {
    const S = v && N.hasNotStarted ? O.REPLAY : O.COMPLETED;
    x({
      status: L.RESULT,
      result: S,
      animationStyle: ve.THREE
    });
  }
  function f() {
    x({
      status: L.RESULT,
      result: O.FAILED
    });
  }
  function h() {
    x({ status: L.RESULT_ANIMATION });
  }
  function s() {
    x({ status: L.RESTART_ANIMATION });
  }
  function o(v) {
    c = v;
  }
  function u() {
    if (c) {
      yt.dispatch();
      return;
    } else
      x({ status: L.RESTART });
  }
  function T() {
    d();
  }
  return {
    init: T,
    updateAfterCycle: e,
    set: g,
    showVisual: m,
    reset: b,
    setStart: P,
    setRestartAnimation: s,
    setRestart: u,
    setRemove: o,
    statusIndex: t
  };
}, q = Hn(), Vn = () => {
  let r = [], t = 0, c = null;
  function e(m, x) {
    r.push(async () => {
      let b = 0;
      const P = 3;
      for (; b < P; )
        try {
          const y = await (await fetch(m)).arrayBuffer(), M = new Uint32Array(y, 0, 1)[0], D = JSON.parse(new TextDecoder().decode(new Uint8Array(y, 4, M))), { vertexCount: _, indexCount: f, attributes: h } = D;
          let s = 4 + M;
          const o = new l.BufferGeometry(), u = {};
          h.forEach((T) => {
            const { id: v, componentSize: S, storageType: B, needsPack: j, packedComponents: ee } = T, fe = v === "indices" ? f : _, we = window[B], Oe = new we(y, s, fe * S), We = we.BYTES_PER_ELEMENT;
            let _e;
            j ? _e = d(Oe, fe, S, ee, B) : (u[v] = s, _e = Oe), v === "indices" ? o.setIndex(new l.BufferAttribute(_e, 1)) : o.setAttribute(v, new l.BufferAttribute(_e, S)), s += fe * S * We;
          }), x && x(o), g();
          break;
        } catch (w) {
          b++, b >= P ? ge(`Failed to load buffer: ${m} after ${P} attempts`, w) : (ge(`Failed to load buffer: ${m}, attempt ${b}/${P}, retrying...`, w), await new Promise((y) => setTimeout(y, 100)));
        }
    });
  }
  function d(m, x, b, P, w) {
    const y = P.length, M = w.indexOf("Int") === 0, D = 1 << m.BYTES_PER_ELEMENT * 8, _ = M ? D * 0.5 : 0, f = 1 / D, h = new Float32Array(x * b);
    for (let s = 0, o = 0; s < x; s++)
      for (let u = 0; u < y; u++) {
        const { delta: T, from: v } = P[u];
        h[o] = (m[o] + _) * f * T + v, o++;
      }
    return h;
  }
  function p(m, x) {
    r.push(() => {
      new l.TextureLoader().load(
        m,
        (b) => {
          b.minFilter = l.LinearMipMapLinearFilter, b.magFilter = l.LinearFilter, b.generateMipmaps = !0, b.anisotropy = 1, b.flipY = !0, x && x(b), g();
        },
        void 0,
        (b) => ge(`Failed to load texture: ${m}`, b)
      );
    });
  }
  function R(m) {
    t = 0, c = m, r.forEach((x) => x());
  }
  function g() {
    t++, t === r.length && (r = [], c == null || c());
  }
  return {
    loadBuf: e,
    loadTexture: p,
    start: R,
    list: r,
    loadedCount: t,
    onLoadCallback: c
  };
}, se = Vn();
class jn {
  constructor() {
    A(this, "PI", Math.PI);
  }
  clamp(t, c, e) {
    return t < c ? c : t > e ? e : t;
  }
  mix(t, c, e) {
    return t + (c - t) * e;
  }
  cUnMix(t, c, e) {
    return this.clamp((e - t) / (c - t), 0, 1);
  }
  saturate(t) {
    return this.clamp(t, 0, 1);
  }
  fit(t, c, e, d, p, R) {
    return t = this.cUnMix(c, e, t), R && (t = R(t)), d + t * (p - d);
  }
}
const C = new jn(), Yn = () => {
  function r(p) {
    return (p *= 2) < 1 ? 0.5 * p * p * p * p : -0.5 * ((p -= 2) * p * p * p - 2);
  }
  function t(p) {
    return Math.sin(p * Math.PI / 2);
  }
  function c(p) {
    return p * p * ((1.70158 + 1) * p - 1.70158);
  }
  function e(p, R = 1.70158) {
    return --p * p * ((R + 1) * p + R) + 1;
  }
  function d(p) {
    const R = 2.5949095;
    return (p *= 2) < 1 ? 0.5 * p * p * ((R + 1) * p - R) : 0.5 * ((p -= 2) * p * ((R + 1) * p + R) + 2);
  }
  return {
    quartInOut: r,
    sineOut: t,
    backIn: c,
    backOut: e,
    backInOut: d
  };
};
function Xn(r, t, c, e, d) {
  if (r === 0) return 0;
  if (r === 1) return 1;
  function p(m, x, b, P, w) {
    const y = 3 * (b - x), M = 3 * (P - b) - y;
    return (((w - x - y - M) * m + M) * m + y) * m + x;
  }
  function R(m, x, b, P = 1e-6) {
    let w = 0, y = 1, M = m;
    for (; w < y; ) {
      const D = p(M, 0, x, b, 1);
      if (Math.abs(D - m) < P)
        return M;
      D < m ? w = M : y = M, M = (w + y) / 2;
    }
    return M;
  }
  const g = R(r, t, e);
  return p(g, 0, c, d, 1);
}
function Ce(r) {
  return Xn(r, 0.3, 0, 0, 1);
}
const Ne = Yn(), qn = `uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}
`, K = {
  u_blueNoiseTexture: { value: null },
  u_blueNoiseTexelSize: { value: null },
  u_blueNoiseCoordOffset: { value: new l.Vector2() }
}, Zn = () => {
  async function t() {
    se.loadTexture(`${de}/LDR_RGB1_0.png`, (e) => {
      e.generateMipmaps = !1, e.minFilter = e.magFilter = l.NearestFilter, e.wrapS = e.wrapT = l.RepeatWrapping, e.needsUpdate = !0, K && (K.u_blueNoiseTexture.value = e, K.u_blueNoiseTexelSize.value = new l.Vector2(1 / 128, 1 / 128));
    }), l.ShaderChunk.getBlueNoise = qn;
  }
  function c(e) {
    K == null || K.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random());
  }
  return {
    update: c,
    preInit: t,
    TEXTURE_SIZE: 128,
    bn_sharedUniforms: K
  };
};
let dt = !1, ie = 0;
const Gn = 3.5;
let Ee = 0, pe = 0, at = 0, Ye = 0;
const Wn = () => {
  function r() {
    it.add((e, d) => {
      e === L.RESULT && d === O.FAILED && (dt = !0);
    });
  }
  function t() {
    ie = 0, Ee = 0, pe = 0, Ye = 0, at = 0, dt = !1;
  }
  function c(e) {
    ie += (dt ? 1 : 0) * e / Gn, ie = C.clamp(ie, 0, 1), Ee = C.fit(ie, 0, 0.3, 0, 1), pe = C.fit(ie, 0.35, 0.65, 0, 1), at = C.fit(ie, 0.3, 0.55, 0, 2.5), Ye = C.fit(ie, 0.6, 0.8, 0, 1), ie >= 1 && (gt.dispatch(), t());
  }
  return {
    init: r,
    resetRatios: t,
    update: c
  };
}, jt = Wn();
let Ke, F = 0;
const $n = 6.5;
let Ie = 0, ke = 0, Me = 0, Pe = 0, De = 0, Ue = 0, He = 1;
const Qn = () => {
  function r() {
    tn.add((g) => {
      g && t(g);
    });
  }
  function t(g) {
    Ke = g;
  }
  function c() {
    F = 0, Ie = 0, ke = 0, Me = 0, Pe = 0, De = 0, Ue = 0, He = 1, Ke = null;
  }
  function e() {
    He = 1, Ie = 0, ke = 0, Me = C.fit(F, 0.2, 0.49, 0, 1.2), De = C.fit(F, 0.45, 0.55, 0, 1), Ue = C.fit(F, 0.45, 0.7, 0, 1), Pe = C.fit(F, 0.55, 1, 0, 1);
  }
  function d() {
    He = 1.5, ke = 0, Ie = C.fit(F, 0.1, 0.45, 0, 1), Me = C.fit(F, 0.15, 0.49, 0, 1.2), De = C.fit(F, 0.45, 0.55, 0, 1), Ue = C.fit(F, 0.45, 0.7, 0, 1), Pe = C.fit(F, 0.55, 1, 0, 1);
  }
  function p() {
    He = 2, Ie = C.fit(F, 0.1, 0.5, 0, 1), ke = C.fit(F, 0.2, 0.51, 0, 1), Me = C.fit(F, 0.2, 0.49, 0, 1.2), De = C.fit(F, 0.45, 0.55, 0, 1), Ue = C.fit(F, 0.45, 0.7, 0, 1), Pe = C.fit(F, 0.6, 1, 0, 1);
  }
  function R(g) {
    switch (F += (Ke ? 1 : 0) * g / $n, F = C.clamp(F, 0, 1), Ke) {
      case ve.ONE:
        e();
        break;
      case ve.TWO:
        d();
        break;
      case ve.THREE:
        p();
        break;
    }
    F >= 1 && (wt.dispatch(), c());
  }
  return {
    init: r,
    update: R,
    resetRatios: c
  };
}, Yt = Qn();
let ft = !1, me = 0;
const Kn = 2.5;
let Xe = 0, qe = 0;
const Jn = () => {
  function r() {
    it.add((e, d) => {
      e === L.RESULT && d === O.STOP && (ft = !0);
    });
  }
  function t() {
    me = 0, qe = 0, Xe = 0, ft = !1;
  }
  function c(e) {
    me += (ft ? 1 : 0) * e / Kn, me = C.clamp(me, 0, 1), Xe = C.fit(me, 0, 0.5, 0, 2.5), qe = C.fit(me, 0.4, 0.65, 0, 1), me >= 1 && (_t.dispatch(), t());
  }
  return {
    init: r,
    update: c,
    resetRatios: t
  };
}, Xt = Jn();
class qt {
  constructor(t) {
    A(this, "id", -1);
    A(this, "isMoving", !1);
    A(this, "hasBeenSpawned", !1);
    A(this, "hasAnimationEnded", !1);
    A(this, "hasBeenEvaluated", !1);
    A(this, "currentTile", null);
    A(this, "targetTile", null);
    A(this, "moveAnimationRatio", 0);
    A(this, "spawnAnimationRatio", 0);
    A(this, "spawnAnimationRatioUnclamped", -Math.random());
    A(this, "easedAnimationRatio", 0);
    A(this, "randomVector", {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    });
    A(this, "lifeCycle", 0);
    A(this, "easingFunction", null);
    A(this, "errorLifeCycle", 0);
    A(this, "isErrorBlock", !1);
    A(this, "errorPreFallAnimationTime", 0);
    A(this, "errorPreFallAnimationTimeScale", 0);
    A(this, "errorFallAnimationTime", 0);
    A(this, "isErrorBlockFalling", !1);
    A(this, "skipFallAnimation", !1);
    this.id = t, this.init();
  }
  init() {
    this._setNewEasingFunction();
  }
  _setNewEasingFunction() {
    const t = Math.random(), c = 0.25;
    this.easingFunction = (e) => Ce(C.fit(e, t * c, t * c + (1 - c), 0, 1));
  }
  updateTile() {
    this.currentTile && (this.currentTile.isOccupied = !0, this.currentTile.willBeOccupied = !1);
  }
  _findBestTile(t, c) {
    return t.find((e) => {
      var d;
      return e.isOccupied || e.willBeOccupied || e.isMain ? !1 : c || (((d = this.currentTile) == null ? void 0 : d.priority) ?? 0) >= e.priority;
    });
  }
  moveToNextTile(t = !1, c = 0) {
    if (this.hasBeenEvaluated = !0, this.moveAnimationRatio = -c * (this.isErrorBlock ? 0 : 1), !this.currentTile) return;
    if (this.isErrorBlock) {
      this.isMoving = !0, this.targetTile = this.currentTile;
      return;
    }
    this.currentTile.shuffleReachableNeighbours();
    const e = t ? this.currentTile.reachableNeighbours : this.currentTile.prioritySortedReachableNeighbours, d = this._findBestTile(e, t);
    d && (!this.currentTile.isMain || Math.random() <= 0.8) ? (this.targetTile = d, this.targetTile && (this.targetTile.willBeOccupied = !0), this.isMoving = !0) : this.hasAnimationEnded = !0;
  }
  resetAfterCycle() {
    var t;
    this.hasBeenEvaluated = !1, this.hasAnimationEnded = !1, this.moveAnimationRatio = 0, this.easedAnimationRatio = 0, this.isMoving = !1, this.lifeCycle++, this.isErrorBlock && !this.skipFallAnimation && (this.errorLifeCycle++, this.isErrorBlockFalling = this.errorLifeCycle >= i.errorBlockMaxLifeCycle - 1), (t = this.currentTile) != null && t.isBorder && !i.errorBlock && Math.random() < 0.5 && i.activeBlocksCount >= i.minSpawnedBlocksForTheErrorBlock && N.isFree && (i.errorBlock = this, this.isErrorBlock = !0), this._setNewEasingFunction(), this.updateTile();
  }
  reset(t = !1) {
    var c, e;
    this.isErrorBlock && (this.errorLifeCycle = 0, this.isErrorBlock = !1, (c = this.currentTile) == null || c.reset(), (e = this.targetTile) == null || e.reset(), this.errorFallAnimationTime = 0, this.isErrorBlockFalling = !1, this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0, this.errorFallAnimationTime = 0, this.skipFallAnimation = !1), this.id = t ? this.id : -1, this.isMoving = !1, this.hasBeenSpawned = !1, this.hasAnimationEnded = !1, this.hasBeenEvaluated = !1, this.currentTile = null, this.targetTile = null, this.moveAnimationRatio = 0, this.spawnAnimationRatio = 0, this.spawnAnimationRatioUnclamped = -Math.random(), this.easedAnimationRatio = 0, this.lifeCycle = 0;
  }
  preventErrorBlockFallAnimation() {
    this.skipFallAnimation = !0;
  }
  _onMovementEnd() {
    this.moveAnimationRatio = 1, this.currentTile && (this.currentTile.isOccupied = !1), this.currentTile = this.targetTile, this.targetTile = null, this.hasAnimationEnded = !0, this.updateTile();
  }
  _updateSpawnAnimation(t) {
    this.spawnAnimationRatioUnclamped += 0.75 * i.animationSpeed * t, this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped)), this.spawnAnimationRatio === 1 && (this.hasBeenSpawned = !0);
  }
  _updateMovement(t) {
    var c;
    (this.isMoving && !this.hasAnimationEnded || N.isResultAnimation) && (this.moveAnimationRatio = Math.min(1, this.moveAnimationRatio + i.animationSpeed * t * (this.isErrorBlock ? 0.7 : 1)), this.easedAnimationRatio = ((c = this.easingFunction) == null ? void 0 : c.call(this, Math.max(0, this.moveAnimationRatio))) || 0, this.easedAnimationRatio === 1 && (N.isFree || N.isResult) && this._onMovementEnd());
  }
  _updateTileRatios() {
    const t = Math.max(0, Math.min(1, this.hasBeenSpawned ? this.easedAnimationRatio : this.spawnAnimationRatio));
    this.currentTile && (this.currentTile.activeRatio = this.hasBeenSpawned ? this.targetTile ? 1 - t : 1 : this.spawnAnimationRatio), this.targetTile && (this.targetTile.activeRatio = t), this.isErrorBlock && this.isErrorBlockFalling && (this.currentTile && (this.currentTile.activeRatio = 0), this.targetTile && (this.targetTile.activeRatio = 0));
  }
  update(t) {
    this.hasBeenSpawned ? this._updateMovement(t) : this._updateSpawnAnimation(t), this.isErrorBlockFalling && (this.errorFallAnimationTime = this.errorFallAnimationTime + 3 * i.animationSpeed * t), this.isErrorBlock && (this.errorPreFallAnimationTimeScale = this.errorPreFallAnimationTimeScale + 3 * t, this.errorPreFallAnimationTimeScale = Math.min(20, this.errorPreFallAnimationTimeScale), this.errorPreFallAnimationTime = this.errorPreFallAnimationTime + this.errorPreFallAnimationTimeScale * t, this.skipFallAnimation && (this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0)), this._updateTileRatios();
  }
}
let Ve = 0, z = [], I = null, Je = 0, je = 0;
const eo = () => {
  function r() {
    t() || (N.isSuccessResult || N.isReplayResult ? c() : e(), !(z.length === i.maxFreeBlocksCount && N.isFree) && On.dispatch());
  }
  function t() {
    return N.isFailResult || N.isStopped || z.length >= Q || (ze == null ? void 0 : ze.isOccupied) && !N.isSuccessResult && !N.isReplayResult;
  }
  function c() {
    let w = Q - i.activeBlocksCount;
    i.errorBlock && (i.errorBlock.currentTile && (i.errorBlock.currentTile.isOccupied = !1), w += 1);
    for (let y = 0; y < w; y++) {
      const M = ue.getRandomFreeTile();
      if (M) {
        const D = new qt(z.length);
        D.currentTile = M, D.init(), D.updateTile(), z = [D, ...z];
      }
    }
  }
  function e() {
    var D;
    let w = null;
    const y = !!(i.errorBlock && i.errorBlock.errorLifeCycle >= i.errorBlockMaxLifeCycle), M = z.length < i.maxFreeBlocksCount && X === L.FREE;
    y ? ((D = i.errorBlock) == null || D.reset(!0), Le.resetBlockFromLogicBlock(i.errorBlock), w = i.errorBlock, i.errorBlock = null) : M && (w = new qt(z.length), I = w), w && (w.currentTile = ze, w.init(), w.updateTile());
  }
  function d() {
    q.updateAfterCycle(), !In.includes(X) && (I && (z = [I, ...z], I = null), i.activeBlocksCount = z.length, !(N.isFailResult || N.isStopped) && (z.forEach((w) => w.resetAfterCycle()), Nn.dispatch(), Je++, r(), p()));
  }
  function p() {
    I != null && I.hasBeenSpawned && I.moveToNextTile(N.isFree, 0);
    const w = Je % 2 === 0 ? !0 : i.activeBlocksCount < i.maxFreeBlocksCount - 1;
    z.forEach((y, M) => {
      !y.hasBeenEvaluated && y.hasBeenSpawned && y.moveToNextTile(w, M * 0.2);
    });
  }
  function R() {
    z.forEach((w) => w.reset()), Le.reset(), ue.reset(), z = [], I = null, Je = 0, Ve = 0;
  }
  function g(w = !1) {
    z.forEach((M) => M.reset()), Le.reset(), ue.reset(), z = [], I = null, Je = 0, w && (nn.dispatch(), Ve = 0);
    const y = kn.includes(V);
    q.reset(), d(), y && q.setStart(), wt.remove(() => {
      q.setRestart(), d(), je = 1;
    }), _t.remove(() => {
      q.setRestart(), g();
    }), gt.remove(() => {
      q.setRestart(), d();
    });
  }
  function m(w) {
    N.isResult, Ve = C.saturate(Ve + w * (i.showVisual ? 1 : 0)), je = C.saturate(je - w / 1.5);
  }
  function x() {
    let w = !0;
    return I && (w = !!(w && I.hasBeenSpawned)), z.forEach((y) => {
      y.lifeCycle > 0 ? w = !!(w && y.hasBeenEvaluated && y.hasAnimationEnded) : w = w && y.spawnAnimationRatio === 1;
    }), w || N.isResultAnimation || N.isFailResult || N.isStopped;
  }
  function b(w) {
    if (m(w), Yt.update(w), Xt.update(w), jt.update(w), N.hasNotStarted) {
      d();
      return;
    }
    if (N.isRestart) {
      g();
      return;
    }
    N.isResultAnimation && q.setRestartAnimation(), ue.preUpdate(w), I && I.update(w), z.forEach((M) => M.update(w)), ue.update(w), x() && d();
  }
  async function P() {
    q.init(), Yt.init(), Xt.init(), jt.init(), ue.init(), wt.add(() => {
      q.setRestart(), d(), je = 1;
    }), _t.add(() => {
      q.setRestart(), g();
    }), gt.add(() => {
      q.setRestart(), d();
    }), yt.addOnce(() => {
      g(!0);
    });
  }
  return {
    init: P,
    update: b,
    reset: g,
    resetPostDestroy: R
  };
}, mt = eo(), et = `#ifndef IS_BASE
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
`, Zt = `uniform vec3 u_lightPosition;
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
`, Gt = `#include <common>
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
`, to = Math.PI / 2, be = new l.Vector3();
class no {
  constructor() {
    A(this, "animation", 0);
    A(this, "boardDir", new l.Vector2());
    A(this, "boardPos", new l.Vector2());
    A(this, "pos", new l.Vector3());
    A(this, "orient", new l.Quaternion());
    A(this, "showRatio", 0);
    A(this, "spinPivot", new l.Vector3());
    A(this, "spinOrient", new l.Quaternion());
    this.animation = 0, this.boardDir = new l.Vector2(), this.boardPos = new l.Vector2(), this.pos = new l.Vector3(), this.orient = new l.Quaternion(), this.showRatio = 0, this.spinPivot = new l.Vector3(), this.spinOrient = new l.Quaternion();
  }
  reset() {
    this.animation = 0, this.boardDir.set(0, 0), this.boardPos.set(0, 0), this.pos.set(0, 0, 0), this.orient.identity(), this.showRatio = 0, this.spinPivot.set(0, 0, 0), this.spinOrient.identity();
  }
  update(t) {
    this.pos.set(this.boardPos.x, 0, -this.boardPos.y), this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5), be.set(-this.boardDir.y, 0, -this.boardDir.x), this.spinOrient.setFromAxisAngle(be, this.animation * to);
  }
  addsFallAnimation(t) {
    be.set(this.boardDir.x, -t, -this.boardDir.y), this.pos.addScaledVector(be, t), be.set(this.boardDir.x * 0.5, 0, -this.boardDir.y * 0.5), this.spinPivot.lerp(be, C.saturate(t));
  }
}
const Be = 2 * Q, U = new l.Vector2(), tt = new l.Vector2(), Ae = new l.Vector3(), Wt = new l.Vector3(), ht = new l.Quaternion(), $t = new l.Quaternion(), Qt = new l.Color(), nt = new l.Color(), pt = new l.Color(), Se = new l.Color(), ce = new l.Color(), ot = new l.Color(), Re = new l.Object3D(), Y = {
  u_lightPosition: { value: new l.Vector3(-2, 6, -4) },
  u_goboTexture: { value: null },
  u_goboIntensity: { value: 0.45 },
  u_infoTexture: { value: null },
  u_infoTextureLinear: { value: null },
  u_endAnimationRatio: { value: 0 }
}, a = {
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
}, oo = () => {
  async function r() {
    const _ = Array.from({ length: Be });
    a._blockList = _.map((f) => new no()), a._blockRenderList = [...a._blockList], se.loadBuf(`${de}/BASE.buf`, (f) => {
      t(f);
    }), se.loadBuf(`${de}/BOX.buf`, (f) => {
      c(f);
    }), se.loadBuf(`${de}/LOSE_ANIMATION.buf`, (f) => {
      const { position: h, orient: s } = f.attributes;
      a.animationTotalFrames = h.count / Q, a.heroLoseAnimationPositionArray = h.array, a.heroLoseAnimationOrientArray = s.array;
    }), se.loadTexture(`${de}/gobo.jpg`, (f) => {
      f.flipY = !1, f.needsUpdate = !0, Y && (Y.u_goboTexture.value = f);
    });
  }
  function t(_) {
    const f = {
      ...i.sharedUniforms,
      ...l.UniformsUtils.merge([l.UniformsLib.lights]),
      ...Y,
      ...K,
      u_color: { value: new l.Color(i.neutralColor) },
      u_blocksColor: { value: new l.Color() },
      u_yDisplacement: { value: 0 },
      u_prevSuccessColor: { value: new l.Color(i.neutralColor).convertSRGBToLinear() },
      u_successColor: { value: new l.Color(i.successColor).convertSRGBToLinear() },
      u_successAnimationRatio: { value: 0 }
    }, h = new l.ShaderMaterial({
      uniforms: f,
      vertexShader: et,
      fragmentShader: Zt,
      lights: !0,
      transparent: !0,
      defines: { IS_BASE: !0 }
    });
    a._baseMesh = new l.Mesh(_, h), a._baseMesh.receiveShadow = a._baseMesh.castShadow = !0, a._baseMesh.frustumCulled = !1, a._baseMesh.customDepthMaterial = new l.ShaderMaterial({
      vertexShader: et,
      fragmentShader: Gt,
      defines: { IS_DEPTH: !0, IS_BASE: !0 }
    }), Re.add(a._baseMesh);
  }
  function c(_) {
    const f = new l.InstancedBufferGeometry();
    f.index = _.index, Object.keys(_.attributes).forEach((o) => {
      f.setAttribute(o, _.attributes[o]);
    }), f.instanceCount = Be;
    const h = (o, u) => {
      const T = new Float32Array(Be * u);
      return f.setAttribute(o, new l.InstancedBufferAttribute(T, u, u !== 4, 1).setUsage(l.DynamicDrawUsage)), T;
    };
    a._instancePosArray = h("instancePos", 3), a._instanceOrientArray = h("instanceOrient", 4), a._instanceShowRatioArray = h("instanceShowRatio", 1), a._instanceSpinPivotArray = h("instanceSpinPivot", 3), a._instanceSpinOrientArray = h("instanceSpinOrient", 4), a._instanceColorArray = h("instanceColor", 3), a._instanceIsActiveArray = h("instanceIsActive", 1), a._instanceNextDirectionArray = h("instanceNextDirection", 2);
    const s = new l.ShaderMaterial({
      uniforms: {
        ...l.UniformsUtils.merge([l.UniformsLib.lights]),
        ...i.sharedUniforms,
        ...Y,
        ...K
      },
      vertexShader: et,
      fragmentShader: Zt,
      lights: !0
    });
    a._blocksMesh = new l.Mesh(f, s), a._blocksMesh.frustumCulled = !1, a._blocksMesh.castShadow = a._blocksMesh.receiveShadow = !0, a._blocksMesh.customDepthMaterial = new l.ShaderMaterial({
      uniforms: { ...Y },
      vertexShader: et,
      fragmentShader: Gt,
      defines: { IS_DEPTH: !0 }
    }), Re.add(a._blocksMesh);
  }
  function e() {
    var f, h;
    a.directLight = new l.DirectionalLight(16777215, 1), a.directLight.castShadow = !0, a.directLight.shadow.camera.near = i.lightCameraNear, a.directLight.shadow.camera.far = i.lightCameraFar, a.directLight.shadow.camera.right = i.lightCameraSize, a.directLight.shadow.camera.left = -i.lightCameraSize, a.directLight.shadow.camera.top = i.lightCameraSize, a.directLight.shadow.camera.bottom = -i.lightCameraSize, a.directLight.shadow.bias = i.lightCameraBias, a.directLight.shadow.mapSize.width = 768, a.directLight.shadow.mapSize.height = 768, (f = i.scene) == null || f.add(a.directLight), (h = i.scene) == null || h.add(a.directLight.target), a.isShadowCameraHelperVisible = !0, a.shadowCameraHelper = new l.CameraHelper(a.directLight.shadow.camera), zn.add(() => {
      var s, o;
      (s = a.directLight) == null || s.shadow.camera.updateProjectionMatrix(), (o = a.shadowCameraHelper) == null || o.update();
    }), Bn.add(() => {
      var s, o;
      a.isShadowCameraHelperVisible = !a.isShadowCameraHelperVisible, a.isShadowCameraHelperVisible && a.shadowCameraHelper ? (s = i.scene) == null || s.add(a.shadowCameraHelper) : a.shadowCameraHelper && ((o = i.scene) == null || o.remove(a.shadowCameraHelper));
    }), d();
    const _ = new Float32Array(Pn * 4);
    for (let s = 0, o = 0; s < ae; s++)
      for (let u = 0; u < ae; u++, o += 4)
        _[o] = 0, _[o + 1] = 0, _[o + 2] = 1, _[o + 3] = 1;
    a.infoTexture = new l.DataTexture(_, ae, ae, l.RGBAFormat, l.FloatType), a.infoTextureLinear = new l.DataTexture(
      _,
      ae,
      ae,
      l.RGBAFormat,
      l.FloatType,
      l.UVMapping,
      l.ClampToEdgeWrapping,
      l.ClampToEdgeWrapping,
      l.LinearFilter,
      l.LinearFilter,
      0
    ), a.infoTextureLinear.needsUpdate = !0, Y && (Y.u_infoTexture.value = a.infoTexture, Y.u_infoTextureLinear.value = a.infoTextureLinear);
  }
  function d() {
    re.forEach((_, f) => {
      _.forEach((h, s) => {
        var u, T;
        const o = f * Z + s;
        h.loseAnimationPositionArray = new Float32Array(a.animationTotalFrames * 3), h.loseAnimationOrientArray = new Float32Array(a.animationTotalFrames * 4);
        for (let v = 0; v < a.animationTotalFrames; v++) {
          const S = (v * Q + o) * 3, B = (v * Q + o) * 4;
          h.loseAnimationPositionArray.set(((u = a.heroLoseAnimationPositionArray) == null ? void 0 : u.subarray(S, S + 3)) || [], v * 3), h.loseAnimationOrientArray.set(((T = a.heroLoseAnimationOrientArray) == null ? void 0 : T.subarray(B, B + 4)) || [], v * 4);
        }
      });
    });
  }
  function p() {
    a.successColorRatio = 0, a._blockList.forEach((_) => _.reset());
  }
  function R(_) {
    a._blockList[_.id].reset();
  }
  function g(_) {
    var f, h;
    Qt.set(i.mainColor), nt.set(i.successColor), pt.set(i.failColor), Se.set(i.neutralColor).convertSRGBToLinear(), ce.copy(Qt), V === O.FAILED && pe > 0 && ce.copy(pt), (V === O.COMPLETED || V === O.REPLAY) && (a.successColorRatio = Math.min(1, a.successColorRatio + 0.5 * _), ce.lerp(nt, a.successColorRatio)), V !== O.REPLAY && V !== O.COMPLETED && ce.lerp(Se, C.saturate(qe + Ye)), ce.convertSRGBToLinear(), Se.convertSRGBToLinear(), nt.convertSRGBToLinear();
    for (let s = 0; s < Be; s++) {
      const o = z.filter((v) => v.id === s)[0], u = s < z.length + (I ? 1 : 0), T = u ? ce : Se;
      if (u && (o != null && o.isErrorBlock)) {
        let v = C.saturate(0.5 * (1 - Math.cos(o.errorPreFallAnimationTime)));
        o.errorFallAnimationTime > 0 && (v = C.saturate(0.5 * (1 - Math.cos(14 * o.errorFallAnimationTime)))), ot.lerpColors(T, pt, v), (f = a._instanceColorArray) == null || f.set([ot.r, ot.g, ot.b], s * 3);
      } else
        (h = a._instanceColorArray) == null || h.set([T.r, T.g, T.b], s * 3);
      a._instanceIsActiveArray && (a._instanceIsActiveArray[s] = u ? 1 : 0);
    }
    a._baseMesh && (a._baseMesh.material.uniforms.u_color.value.set(Se).convertSRGBToLinear(), a._baseMesh.material.uniforms.u_blocksColor.value.copy(ce), a._baseMesh.material.uniforms.u_successColor.value.copy(nt), a._baseMesh.material.uniforms.u_prevSuccessColor.value.set(Se).convertSRGBToLinear(), a._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(ce.set(i.successColor), je), a._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear());
  }
  function m() {
    re.forEach((_) => {
      _.forEach((f) => {
        const h = f.id % Z + 1, o = ((Math.floor(f.id / Z) + 1) * ae + h) * 4;
        let u = 0.5 * Me * C.fit(De, 0, 0.1, 1, 0);
        u += (pe > 0 ? 1 : 0) * C.fit(Ye, 0, 0.1, 1, 0), u += Xe * C.fit(qe, 0, 0.1, 1, 0), u = Math.min(1, u), a.infoTexture && (a.infoTexture.image.data[o] = f.activeRatio * (1 - u), a.infoTexture.image.data[o + 1] = f.isOccupied || f.willBeOccupied ? 1 : 0, a.infoTexture.image.data[o + 2] = f.isMain ? 1 : 0, a.infoTexture.image.data[o + 3] = f.isBorder ? 1 : 0);
      });
    }), a.infoTexture && a.infoTextureLinear && (a.infoTexture.needsUpdate = !0, a.infoTextureLinear.needsUpdate = !0);
  }
  function x() {
    var _, f;
    if (I) {
      const h = a._blockList[I.id];
      I.currentTile && h.boardPos.set((_ = I.currentTile) == null ? void 0 : _.row, (f = I.currentTile) == null ? void 0 : f.col), h.showRatio = Ce(C.saturate(I.spawnAnimationRatioUnclamped));
    }
    z.forEach((h) => {
      var o, u, T, v;
      const s = a._blockList[h.id];
      s && (s.showRatio = Ce(C.saturate(h.spawnAnimationRatioUnclamped)), h.currentTile && s.boardPos.set((o = h.currentTile) == null ? void 0 : o.row, (u = h.currentTile) == null ? void 0 : u.col), h.targetTile && s.boardDir.set(h.targetTile.row - (((T = h.currentTile) == null ? void 0 : T.row) || 0), h.targetTile.col - (((v = h.currentTile) == null ? void 0 : v.col) || 0)), s.animation = h.hasAnimationEnded ? 0 : h.easedAnimationRatio);
    });
  }
  function b(_) {
    var h, s;
    for (let o = 0; o < _; o++) {
      const u = a._blockRenderList[o];
      u.pos.toArray(a._instancePosArray || [], o * 3), u.orient.toArray(a._instanceOrientArray || [], o * 4), a._instanceShowRatioArray && (a._instanceShowRatioArray[o] = Ne.quartInOut(u.showRatio)), u.spinPivot.toArray(a._instanceSpinPivotArray || [], o * 3), u.spinOrient.toArray(a._instanceSpinOrientArray || [], o * 4), (h = a._instanceNextDirectionArray) == null || h.set([u.boardDir.x, u.boardDir.y], o * 2);
    }
    const f = (s = a._blocksMesh) == null ? void 0 : s.geometry;
    if (f) {
      for (const o in f.attributes) {
        const u = f.attributes[o];
        u.isBufferAttribute && (u.addUpdateRange(0, _ * u.itemSize), u.needsUpdate = !0);
      }
      f.instanceCount = _;
    }
  }
  function P(_, f) {
    if (V === O.STOP && f >= Q) {
      const h = f - Q, s = h % Z - G, o = Math.floor(h / Z) - G, u = ue.getTile(o, s);
      if (!u.isOccupied) {
        const T = C.saturate(Xe - u.randomDelay);
        u.activeRatio = T, _.showRatio = Ce(T), _.boardPos.set(o, s);
      }
    }
  }
  function w(_, f) {
    if (_ && _.isErrorBlock && _.errorLifeCycle >= i.errorBlockMaxLifeCycle - 1) {
      const h = _.currentTile, s = _.errorFallAnimationTime;
      f.boardPos.set(h.row, h.col), U.set(h.row, h.col).normalize(), Math.abs(U.x) > Math.abs(U.y) ? U.set(Math.sign(U.x), 0) : U.set(0, Math.sign(U.y)), f.boardDir.set(U.x, U.y), f.animation = C.fit(s, 0, 1, 0, 1, Ne.sineOut), f.animation += Math.max(0, s - 0.8), f.update(i.deltaTime), f.addsFallAnimation(Math.max(0, s - 0.8));
    }
  }
  function y(_, f, h) {
    if (V === O.FAILED) {
      if (_) {
        const s = _.currentTile;
        if (pe > 0) {
          const o = Math.floor(pe * a.animationTotalFrames), u = Math.min(o + 1, a.animationTotalFrames - 1), T = pe * a.animationTotalFrames - o;
          Ae.fromArray(s.loseAnimationPositionArray, o * 3), Wt.fromArray(s.loseAnimationPositionArray, u * 3), Ae.lerp(Wt, T), Ae.y *= 0.5, f.pos.set(Ae.z, Ae.y, -Ae.x), ht.fromArray(s.loseAnimationOrientArray, o * 4), $t.fromArray(s.loseAnimationOrientArray, u * 4), ht.slerp($t, T), f.orient.copy(ht);
        }
        if (Ee > 0) {
          const o = C.fit(Ee, 0, 1, 0, 1, Ne.sineOut);
          if (U.set(s.row, s.col), U.normalize(), U.multiplyScalar(0.1 * o), f.pos.x += U.x, f.pos.z -= U.y, Ee < 1) {
            const u = o * C.fit(Ee, 0.5, 0.8, 1, 0);
            U.set(_.randomVector.x, _.randomVector.y), U.normalize(), U.multiplyScalar(u), tt.set(0, 0), tt.addScaledVector(U, 0.08 * u * Math.sin(u * 80)), f.pos.x += tt.x, f.pos.z += tt.y;
          }
        }
      }
      if (h >= Q) {
        const s = h - Q, o = s % Z - G, u = Math.floor(s / Z) - G, T = ue.getTile(u, o), v = C.saturate(at - T.randomDelay);
        T.isOccupied || (T.activeRatio = v), f.showRatio = Ce(v), f.boardPos.set(u, o);
      }
    }
  }
  function M(_, f) {
    if ((V === O.COMPLETED || V === O.REPLAY) && _) {
      const s = 0.1 * _.currentTile.randomDelay, o = Me - s;
      let u = C.fit(o, 0, 0.5, 0, 1, (T) => 1 - Math.pow(1 - T, 5));
      u = C.fit(o, 0.7, 1, u, 0, (T) => Math.pow(T, 5)), f.pos.y += He * u;
    }
  }
  function D(_) {
    x(), g(_);
    let f = 0;
    for (let u = 0; u < Be; u++) {
      const T = a._blockList[u];
      T.update(_);
      const v = z.filter((S) => S.id === u)[0];
      T.showRatio > 0 && (a._blockRenderList[f++] = T), y(v, T, u), w(v, T), P(T, u), M(v, T);
    }
    m(), b(f);
    const h = Math.min(1, qe + Ye + De), s = Ne.backOut(h, 3), o = 1 - Ce(Ve);
    Re.position.y = -s - 2 * o, Re.rotation.y = 0.5 * Math.PI * o, Re.rotation.y += 2 * Math.PI * Ne.quartInOut(Ie), a._baseMesh && (a._baseMesh.material.uniforms.u_yDisplacement.value = -s - 5 * o, a._baseMesh.material.uniforms.u_successAnimationRatio.value = Ue), Y && (Y.u_endAnimationRatio.value = Math.min(
      1,
      C.fit(Xe, 0.5, 2, 0, 1) + C.fit(at, 0.5, 2, 0, 1) + C.fit(F, 0, 0.2, 0, 1)
    ), Y.u_goboIntensity.value = i.goboIntensity, Y.u_lightPosition.value.set(i.lightPositionX, i.lightPositionY, i.lightPositionZ)), a.directLight && (a.directLight.position.copy(Y == null ? void 0 : Y.u_lightPosition.value), a.directLight.shadow.camera.top = i.lightCameraSize, a.directLight.shadow.camera.bottom = -i.lightCameraSize, a.directLight.shadow.bias = i.lightCameraBias);
  }
  return {
    preload: r,
    init: e,
    reset: p,
    resetBlockFromLogicBlock: R,
    update: D
  };
}, Le = oo(), Kt = `uniform float u_time;
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
`, io = `uniform vec3 u_bgColor1;
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
`, ao = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`, on = new l.Object3D(), ro = () => {
  let r, t = null, c = null, e = null, d = null, p = null, R = null, g = null, m = null, x = 0, b = 0, P, w;
  const y = {
    u_time: { value: 0 },
    u_ratio: { value: 0 },
    u_isFloating: { value: 1 }
  };
  async function M() {
    se.loadTexture(`${de}/matcap_gold.jpg`, (o) => {
      P = o, P.needsUpdate = !0;
    }), se.loadBuf(`${de}/COIN.buf`, (o) => {
      r = o;
    }), se.loadBuf(`${de}/COIN_PLACEMENT.buf`, (o) => {
      const { position: u, aoN: T, aoP: v, curveu: S, orient: B } = o.attributes;
      d = u.array, g = T.array, m = v.array, R = S.array, p = B.array, x = u.count;
    });
  }
  function D() {
    _(), f(), h(), t && on.add(t);
  }
  function _() {
    r.computeVertexNormals();
    const o = new l.InstancedBufferGeometry();
    o.index = r.index, Object.entries(r.attributes).forEach(([T, v]) => o.setAttribute(T, v)), w = new Float32Array(x * 3).map(() => Math.random() * 2 - 1), [
      ["a_instancePosition", d, 3],
      ["a_instanceQuaternion", p, 4],
      ["a_instanceCurveUV", R, 1],
      ["a_instanceAoN", g, 3],
      ["a_instanceAoP", m, 3],
      ["a_instanceRand", w, 3]
    ].forEach(([T, v, S]) => {
      o.setAttribute(T, new l.InstancedBufferAttribute(v, S));
    }), c = o;
  }
  function f() {
    e = new l.ShaderMaterial({
      uniforms: {
        ...Y,
        ...i.sharedUniforms,
        ...y,
        ...K,
        ...l.UniformsUtils.merge([l.UniformsLib.lights]),
        u_matcapTexture: { value: P }
      },
      vertexShader: Kt,
      fragmentShader: io,
      lights: !0
    });
  }
  function h() {
    c && e && (t = new l.Mesh(c, e), t.frustumCulled = !1, t.castShadow = !0, t.receiveShadow = !0, t.customDepthMaterial = new l.ShaderMaterial({
      uniforms: { ...y },
      vertexShader: Kt,
      fragmentShader: ao,
      defines: { IS_DEPTH: !0 }
    }));
  }
  function s(o) {
    const u = Pe === 0;
    b = u ? ke : Pe, y.u_ratio.value = b, y.u_time.value += o, y.u_isFloating.value = u ? 1 : 0, t && (t.rotation.y = 0 * b, t.visible = b > 0 && b < 1);
  }
  return {
    preload: M,
    init: D,
    update: s
  };
}, Jt = { type: "change" }, vt = { type: "start" }, en = { type: "end" };
class so extends Tn {
  constructor(t, c) {
    super(), c === void 0 && Fe('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), c === document && ge('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = t, this.domElement = c, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new le(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = Math.PI * 0.2, this.maxPolarAngle = Math.PI * 0.45, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !0, this.dampingFactor = 0.15, this.enableZoom = !1, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 0.5, this.enablePan = !1, this.panSpeed = 1, this.screenSpacePanning = !0, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ye.ROTATE, MIDDLE: ye.DOLLY, RIGHT: ye.PAN }, this.touches = { ONE: Te.ROTATE, TWO: Te.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.scale = 1, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.scale = 1, e.object.updateProjectionMatrix(), e.dispatchEvent(Jt), e.update(), p = d.NONE;
    }, this.update = function() {
      const n = new le(), E = new It().setFromUnitVectors(t.up, new le(0, 1, 0)), k = E.clone().invert(), H = new le(), $ = new It(), xe = 2 * Math.PI;
      return function() {
        const zt = e.object.position;
        n.copy(zt).sub(e.target), n.applyQuaternion(E), g.setFromVector3(n), e.autoRotate && p === d.NONE && S(T()), e.enableDamping ? (g.theta += m.theta * e.dampingFactor, g.phi += m.phi * e.dampingFactor) : (g.theta += m.theta, g.phi += m.phi);
        let te = e.minAzimuthAngle, ne = e.maxAzimuthAngle;
        isFinite(te) && isFinite(ne) && (te < -Math.PI ? te += xe : te > Math.PI && (te -= xe), ne < -Math.PI ? ne += xe : ne > Math.PI && (ne -= xe), te <= ne ? g.theta = Math.max(te, Math.min(ne, g.theta)) : g.theta = g.theta > (te + ne) / 2 ? Math.max(te, g.theta) : Math.min(ne, g.theta)), g.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, g.phi)), g.makeSafe();
        let Ft = e.enableDamping ? (e.scale - 1) * e.dampingFactor + 1 : e.scale;
        return g.radius *= Ft, g.radius = Math.max(e.minDistance, Math.min(e.maxDistance, g.radius)), e.enableDamping === !0 ? e.target.addScaledVector(x, e.dampingFactor) : e.target.add(x), n.setFromSpherical(g), n.applyQuaternion(k), zt.copy(e.target).add(n), e.object.lookAt(e.target), e.enableDamping === !0 ? (m.theta *= 1 - e.dampingFactor, m.phi *= 1 - e.dampingFactor, x.multiplyScalar(1 - e.dampingFactor)) : (m.set(0, 0, 0), x.set(0, 0, 0)), e.scale = e.scale / Ft, b || H.distanceToSquared(e.object.position) > R || 8 * (1 - $.dot(e.object.quaternion)) > R ? (e.dispatchEvent(Jt), H.copy(e.object.position), $.copy(e.object.quaternion), b = !1, !0) : !1;
      };
    }();
    const e = this, d = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let p = d.NONE;
    const R = 1e-6, g = new kt(), m = new kt(), x = new le();
    let b = !1;
    const P = new J(), w = new J(), y = new J(), M = new J(), D = new J(), _ = new J(), f = new J(), h = new J(), s = new J(), o = [], u = {};
    function T() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function v() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function S(n) {
      m.theta -= n;
    }
    function B(n) {
      m.phi -= n;
    }
    const j = function() {
      const n = new le();
      return function(k, H) {
        n.setFromMatrixColumn(H, 0), n.multiplyScalar(-k), x.add(n);
      };
    }(), ee = function() {
      const n = new le();
      return function(k, H) {
        e.screenSpacePanning === !0 ? n.setFromMatrixColumn(H, 1) : (n.setFromMatrixColumn(H, 0), n.crossVectors(e.object.up, n)), n.multiplyScalar(k), x.add(n);
      };
    }(), fe = function() {
      const n = new le();
      return function(k, H) {
        const $ = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const xe = e.object.position;
          n.copy(xe).sub(e.target);
          let $e = n.length();
          $e *= Math.tan(e.object.fov / 2 * Math.PI / 180), j(2 * k * $e / $.clientHeight, e.object.matrix), ee(2 * H * $e / $.clientHeight, e.object.matrix);
        } else e.object.isOrthographicCamera ? (j(k * (e.object.right - e.object.left) / e.object.zoom / $.clientWidth, e.object.matrix), ee(H * (e.object.top - e.object.bottom) / e.object.zoom / $.clientHeight, e.object.matrix)) : (Fe("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function we(n) {
      e.object.isPerspectiveCamera ? e.scale /= n : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * n)), e.object.updateProjectionMatrix(), b = !0) : (Fe("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Oe(n) {
      e.object.isPerspectiveCamera ? e.scale *= n : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / n)), e.object.updateProjectionMatrix(), b = !0) : (Fe("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function We(n) {
      P.set(n.clientX, n.clientY);
    }
    function _e(n) {
      f.set(n.clientX, n.clientY);
    }
    function Tt(n) {
      M.set(n.clientX, n.clientY);
    }
    function rn(n) {
      w.set(n.clientX, n.clientY), y.subVectors(w, P).multiplyScalar(e.rotateSpeed);
      const E = e.domElement;
      S(2 * Math.PI * y.x / E.clientHeight), B(2 * Math.PI * y.y / E.clientHeight), P.copy(w), e.update();
    }
    function sn(n) {
      h.set(n.clientX, n.clientY), s.subVectors(h, f), s.y > 0 ? we(v()) : s.y < 0 && Oe(v()), f.copy(h), e.update();
    }
    function ln(n) {
      D.set(n.clientX, n.clientY), _.subVectors(D, M).multiplyScalar(e.panSpeed), fe(_.x, _.y), M.copy(D), e.update();
    }
    function cn(n) {
      n.deltaY < 0 ? Oe(v()) : n.deltaY > 0 && we(v()), e.update();
    }
    function bt() {
      if (o.length === 1)
        P.set(o[0].pageX, o[0].pageY);
      else {
        const n = 0.5 * (o[0].pageX + o[1].pageX), E = 0.5 * (o[0].pageY + o[1].pageY);
        P.set(n, E);
      }
    }
    function At() {
      if (o.length === 1)
        M.set(o[0].pageX, o[0].pageY);
      else {
        const n = 0.5 * (o[0].pageX + o[1].pageX), E = 0.5 * (o[0].pageY + o[1].pageY);
        M.set(n, E);
      }
    }
    function St() {
      const n = o[0].pageX - o[1].pageX, E = o[0].pageY - o[1].pageY, k = Math.sqrt(n * n + E * E);
      f.set(0, k);
    }
    function un() {
      e.enableZoom && St(), e.enablePan && At();
    }
    function dn() {
      e.enableZoom && St(), e.enableRotate && bt();
    }
    function Ct(n) {
      if (o.length === 1)
        w.set(n.pageX, n.pageY);
      else {
        const k = ct(n), H = 0.5 * (n.pageX + k.x), $ = 0.5 * (n.pageY + k.y);
        w.set(H, $);
      }
      y.subVectors(w, P).multiplyScalar(e.rotateSpeed);
      const E = e.domElement;
      S(2 * Math.PI * y.x / E.clientHeight), B(2 * Math.PI * y.y / E.clientHeight), P.copy(w);
    }
    function Rt(n) {
      if (o.length === 1)
        D.set(n.pageX, n.pageY);
      else {
        const E = ct(n), k = 0.5 * (n.pageX + E.x), H = 0.5 * (n.pageY + E.y);
        D.set(k, H);
      }
      _.subVectors(D, M).multiplyScalar(e.panSpeed), fe(_.x, _.y), M.copy(D);
    }
    function Et(n) {
      const E = ct(n), k = n.pageX - E.x, H = n.pageY - E.y, $ = Math.sqrt(k * k + H * H);
      h.set(0, $), s.set(0, Math.pow(h.y / f.y, e.zoomSpeed)), we(s.y), f.copy(h);
    }
    function fn(n) {
      e.enableZoom && Et(n), e.enablePan && Rt(n);
    }
    function mn(n) {
      e.enableZoom && Et(n), e.enableRotate && Ct(n);
    }
    function hn(n) {
      e.enabled !== !1 && (o.length === 0 && (e.domElement.setPointerCapture(n.pointerId), e.domElement.addEventListener("pointermove", Mt), e.domElement.addEventListener("pointerup", Pt)), _n(n), n.pointerType === "touch" ? gn(n) : pn(n));
    }
    function Mt(n) {
      e.enabled !== !1 && (n.pointerType === "touch" ? wn(n) : vn(n));
    }
    function Pt(n) {
      Nt(n), o.length === 0 && (e.domElement.releasePointerCapture(n.pointerId), e.domElement.removeEventListener("pointermove", Mt), e.domElement.removeEventListener("pointerup", Pt)), e.dispatchEvent(en), p = d.NONE;
    }
    function Dt(n) {
      Nt(n);
    }
    function pn(n) {
      let E;
      switch (n.button) {
        case 0:
          E = e.mouseButtons.LEFT;
          break;
        case 1:
          E = e.mouseButtons.MIDDLE;
          break;
        case 2:
          E = e.mouseButtons.RIGHT;
          break;
        default:
          E = -1;
      }
      switch (E) {
        case ye.DOLLY:
          if (e.enableZoom === !1) return;
          _e(n), p = d.DOLLY;
          break;
        case ye.ROTATE:
          if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (e.enablePan === !1) return;
            Tt(n), p = d.PAN;
          } else {
            if (e.enableRotate === !1) return;
            We(n), p = d.ROTATE;
          }
          break;
        case ye.PAN:
          if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (e.enableRotate === !1) return;
            We(n), p = d.ROTATE;
          } else {
            if (e.enablePan === !1) return;
            Tt(n), p = d.PAN;
          }
          break;
        default:
          p = d.NONE;
      }
      p !== d.NONE && e.dispatchEvent(vt);
    }
    function vn(n) {
      if (e.enabled !== !1)
        switch (p) {
          case d.ROTATE:
            if (e.enableRotate === !1) return;
            rn(n);
            break;
          case d.DOLLY:
            if (e.enableZoom === !1) return;
            sn(n);
            break;
          case d.PAN:
            if (e.enablePan === !1) return;
            ln(n);
            break;
        }
    }
    function Lt(n) {
      e.enabled === !1 || e.enableZoom === !1 || p !== d.NONE || (e.dispatchEvent(vt), cn(n), e.dispatchEvent(en));
    }
    function gn(n) {
      switch (Bt(n), o.length) {
        case 1:
          switch (e.touches.ONE) {
            case Te.ROTATE:
              if (e.enableRotate === !1) return;
              bt(), p = d.TOUCH_ROTATE;
              break;
            case Te.PAN:
              if (e.enablePan === !1) return;
              At(), p = d.TOUCH_PAN;
              break;
            default:
              p = d.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case Te.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1) return;
              un(), p = d.TOUCH_DOLLY_PAN;
              break;
            case Te.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1) return;
              dn(), p = d.TOUCH_DOLLY_ROTATE;
              break;
            default:
              p = d.NONE;
          }
          break;
        default:
          p = d.NONE;
      }
      p !== d.NONE && e.dispatchEvent(vt);
    }
    function wn(n) {
      switch (Bt(n), p) {
        case d.TOUCH_ROTATE:
          if (e.enableRotate === !1) return;
          Ct(n), e.update();
          break;
        case d.TOUCH_PAN:
          if (e.enablePan === !1) return;
          Rt(n), e.update();
          break;
        case d.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1) return;
          fn(n), e.update();
          break;
        case d.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1) return;
          mn(n), e.update();
          break;
        default:
          p = d.NONE;
      }
    }
    function Ot(n) {
      e.enabled !== !1 && (n.preventDefault(), e.domElement.removeEventListener("contextmenu", Ot));
    }
    function _n(n) {
      o.push(n);
    }
    function Nt(n) {
      delete u[n.pointerId];
      for (let E = 0; E < o.length; E++)
        if (o[E].pointerId === n.pointerId) {
          o.splice(E, 1);
          return;
        }
    }
    function Bt(n) {
      let E = u[n.pointerId];
      E === void 0 && (E = new J(), u[n.pointerId] = E), E.set(n.pageX, n.pageY);
    }
    function ct(n) {
      const E = n.pointerId === o[0].pointerId ? o[1] : o[0];
      return u[E.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Ot), e.domElement.addEventListener("pointerdown", hn), e.domElement.addEventListener("pointercancel", Dt), e.domElement.addEventListener("wheel", Lt, { passive: !1 }), this.update(), e.domElement.removeEventListener("pointercancel", Dt), e.domElement.removeEventListener("wheel", Lt, { passive: !1 });
  }
}
const lo = `varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}
`, co = `uniform vec3 u_bgColor1;
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
`, uo = `attribute vec3 a_instancePosition;
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
`, fo = `varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}
`, xt = new l.Object3D(), mo = () => {
  const r = new l.Mesh(), t = new l.Mesh(new l.PlaneGeometry(2, 2));
  function c() {
    var R, g, m;
    const p = {
      u_resolution: (R = i.sharedUniforms) == null ? void 0 : R.u_resolution,
      u_bgColor1: (g = i.sharedUniforms) == null ? void 0 : g.u_bgColor1,
      u_bgColor2: (m = i.sharedUniforms) == null ? void 0 : m.u_bgColor2,
      ...K
    };
    t.material = new l.ShaderMaterial({
      uniforms: p,
      vertexShader: lo,
      fragmentShader: co
    }), t.renderOrder = 1, xt.add(t), e();
  }
  function e() {
    var P, w;
    const R = new l.PlaneGeometry(1, 1), g = new l.InstancedBufferGeometry();
    g.index = R.index, Object.keys(R.attributes).forEach((y) => {
      g.setAttribute(y, R.attributes[y]);
    }), g.instanceCount = 50;
    const m = new Float32Array(50 * 3), x = new Float32Array(50 * 3);
    for (let y = 0; y < 50; y++)
      m[y * 3] = 3 * (Math.random() * 2 - 1), m[y * 3 + 1] = Math.random() * 2 - 1, m[y * 3 + 2] = 0.5 + 0.5 * Math.random(), x[y * 3] = Math.random(), x[y * 3 + 1] = Math.random(), x[y * 3 + 2] = Math.random();
    g.setAttribute("a_instancePosition", new l.InstancedBufferAttribute(m, 3)), g.setAttribute("a_instanceRandom", new l.InstancedBufferAttribute(x, 3));
    const b = {
      u_time: ((P = i.sharedUniforms) == null ? void 0 : P.u_time) || { value: i.time },
      u_resolution: ((w = i.sharedUniforms) == null ? void 0 : w.u_resolution) || { value: i.resolution },
      u_size: { value: 0.01 },
      u_color: { value: new l.Color() },
      u_opacity: { value: 0 }
    };
    r.material = new l.ShaderMaterial({
      vertexShader: uo,
      fragmentShader: fo,
      uniforms: b,
      transparent: !0
    }), r.geometry = g, r.frustumCulled = !1, xt.add(r);
  }
  function d(p) {
    r.material.uniforms.u_size.value = i.particlesSize, r.material.uniforms.u_color.value.set(i.particlesColor), r.material.uniforms.u_opacity.value = i.particlesOpacity;
  }
  return { init: c, update: d };
};
l.ColorManagement.enabled = !1;
const ho = () => {
  const r = mo(), t = Zn(), c = ro();
  let e, d;
  const p = window.innerWidth / window.innerHeight, R = 15, g = R * p, m = new l.OrthographicCamera(g / -2, g / 2, R / 2, R / -2, 1, 1e3);
  let x, b;
  async function P() {
    if (b) {
      if (b.shadowMap.enabled = !0, b.shadowMap.type = l.PCFShadowMap, i.sharedUniforms) {
        const s = i.sharedUniforms.u_bgColor1.value, o = i.sharedUniforms.u_bgColor2.value;
        s.set(i.bgColor1).convertSRGBToLinear(), o.set(i.bgColor2).convertSRGBToLinear();
      }
      b.setClearColor(i.bgColor1, 1);
    }
  }
  function w(s, o) {
    i.viewportWidth = s, i.viewportHeight = o, i.viewportResolution.set(s, window.innerHeight), i.sharedUniforms.u_viewportResolution.value = i.viewportResolution;
    let u = s * he.DPR, T = o * he.DPR;
    const v = u / T;
    T * u > he.MAX_PIXEL_COUNT && (T = Math.sqrt(he.MAX_PIXEL_COUNT / v), u = Math.ceil(T * v), T = Math.ceil(T)), i.width = u, i.height = T, i.resolution.set(u, T), m.updateProjectionMatrix(), b == null || b.setSize(u, T), d && (d.style.width = s + "px", d.style.height = o + "px");
  }
  function y() {
    w(window.innerWidth, window.innerHeight);
  }
  async function M({ canvasEl: s, initCallback: o }) {
    d = s, b = new l.WebGLRenderer({ ...En, canvas: d }), nn.addOnce(() => {
      h();
    }), await P(), await Le.preload(), await t.preInit(), await c.preload(), se.start(o);
  }
  async function D() {
    i.scene.add(m), m.position.fromArray(he.DEFAULT_POSITION), m.updateProjectionMatrix(), x = m.clone(), d && (e = new so(x, d), e.target0.fromArray(he.DEFAULT_LOOKAT_POSITION), e.reset());
  }
  async function _() {
    await D();
    try {
      await mt.init(), Le.init(), c.init(), r.init(), i.scene.add(on), i.scene.add(xt), i.scene.add(Re);
    } catch (s) {
      ge("init tower : ", s);
    }
  }
  function f(s) {
    if (!d) {
      s *= 0;
      return;
    }
    s = Math.min(s, 1 / 15), i.time += s, i.deltaTime = s, i.sharedUniforms && (i.sharedUniforms.u_time.value = i.time, i.sharedUniforms.u_deltaTime.value = s);
    const o = (window.innerWidth - i.cameraOffsetX) / window.innerHeight, u = 10, T = u * o;
    let v = 0;
    if (i.offsetX) {
      const j = i.offsetX / window.innerWidth * 100;
      v = T * j / 100;
    }
    const S = -T / 2 - v / 2, B = T / 2 - v / 2;
    m.left = S, m.right = B, m.top = u / 2, m.bottom = u / -2, m.updateProjectionMatrix(), e == null || e.update(), x == null || x.updateMatrix(), x == null || x.matrix.decompose(m.position, m.quaternion, m.scale), m.matrix.compose(m.position, m.quaternion, m.scale), t.update(s), mt.update(s), Le.update(s), c.update(s), r.update(s), b == null || b.render(i.scene, m);
  }
  function h() {
    i.showVisual = !1, mt.resetPostDestroy();
    const s = (d == null ? void 0 : d.id) || "canvas_id", o = document.createElement("canvas");
    o.setAttribute("id", s), d == null || d.replaceWith(o), b.state.reset();
  }
  return {
    preload: M,
    init: _,
    coins: c,
    blueNoise: t,
    onResize: y,
    render: f
  };
}, Ze = ho();
let Ge = 0, rt = 0;
const po = 50, vo = 1 / po;
function an() {
  const r = performance.now() / 1e3, t = r - Ge;
  r - rt >= vo && (rt = r, Ze.render(t), Ge = r), requestAnimationFrame(an);
}
async function go() {
  try {
    await Ze.init(), Ge = performance.now() / 1e3, rt = Ge, window.addEventListener("resize", Ze.onResize), Ze.onResize(), an();
  } catch (r) {
    ge("initCallback:", r);
  }
}
async function yo({ canvasId: r, offset: t = 0 }) {
  i.offsetX = t, i.cameraOffsetX = i.offsetX / window.innerWidth;
  const c = document.getElementById(r);
  try {
    c && await Ze.preload({ canvasEl: c, initCallback: go });
  } catch (e) {
    ge("loadTowerAnimation", e);
  }
}
async function To({ canvasId: r }) {
  document.getElementById(r) && (Fn(`removeTowerAnimation intialted, current status: ${X}`), X === "not-started" ? yt.dispatch() : (q.setRemove(!0), q.set("stop")), Ge = 0, rt = 0);
}
function bo(r, t) {
  q.set(r, t);
}
function Ao(r) {
  for (const t of r)
    i[t.property] = t.value, t.property === "bgColor1" && i.sharedUniforms && i.sharedUniforms.u_bgColor1.value.set(t.value).convertSRGBToLinear(), t.property === "bgColor2" && i.sharedUniforms && i.sharedUniforms.u_bgColor2.value.set(t.value).convertSRGBToLinear();
}
export {
  X as animationStatus,
  st as getTowerLogPrefix,
  yo as loadTowerAnimation,
  To as removeTowerAnimation,
  Ao as setAnimationProperties,
  bo as setAnimationState
};
