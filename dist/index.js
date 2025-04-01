var bn = Object.defineProperty;
var Sn = (i, t, n) => t in i ? bn(i, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[t] = n;
var S = (i, t, n) => Sn(i, typeof t != "symbol" ? t + "" : t, n);
import { Vector2 as U, DataTexture as $e, Vector3 as X, Color as $, TextureLoader as Tn, LinearMipMapLinearFilter as An, LinearFilter as st, BufferGeometry as Cn, BufferAttribute as Mt, Quaternion as ce, Object3D as mt, DirectionalLight as Rn, CameraHelper as En, RGBAFormat as Dt, FloatType as Nt, UVMapping as Pn, ClampToEdgeWrapping as Lt, UniformsUtils as ct, UniformsLib as lt, ShaderMaterial as le, Mesh as Fe, InstancedBufferGeometry as ft, InstancedBufferAttribute as Qe, DynamicDrawUsage as Mn, NearestFilter as Dn, RepeatWrapping as Nn, ShaderChunk as Ln, EventDispatcher as On, MOUSE as pe, TOUCH as ve, Spherical as Ot, PlaneGeometry as zt, ColorManagement as zn, Scene as Bn, WebGLRenderer as In, OrthographicCamera as Fn, PCFShadowMap as kn } from "three";
var Z = /* @__PURE__ */ ((i) => (i.NOT_STARTED = "not-started", i.FREE = "free", i.RESULT = "result", i))(Z || {}), z = /* @__PURE__ */ ((i) => (i.NONE = "none", i.STOP = "stop", i.COMPLETED = "completed", i.FAILED = "failed", i.REPLAY = "replay", i))(z || {}), Ge = /* @__PURE__ */ ((i) => (i[i.ONE = 1] = "ONE", i[i.TWO = 2] = "TWO", i[i.THREE = 3] = "THREE", i))(Ge || {});
const Un = [
  "failed",
  "completed"
  /* COMPLETED */
], jn = (i) => {
  let t;
  const n = /* @__PURE__ */ new Set(), e = (v, _) => {
    const b = typeof v == "function" ? v(t) : v;
    if (!Object.is(b, t)) {
      const g = t;
      t = _ ?? (typeof b != "object" || b === null) ? b : Object.assign({}, t, b), n.forEach((T) => T(t, g));
    }
  }, r = () => t, f = { setState: e, getState: r, getInitialState: () => m, subscribe: (v) => (n.add(v), () => n.delete(v)) }, m = t = i(e, r, f);
  return f;
}, ke = (i) => jn, Hn = (i) => (t, n, e) => {
  const r = e.subscribe;
  return e.subscribe = (y, f, m) => {
    let v = y;
    if (f) {
      const _ = (m == null ? void 0 : m.equalityFn) || Object.is;
      let b = y(e.getState());
      v = (g) => {
        const T = y(g);
        if (!_(b, T)) {
          const h = b;
          f(b = T, h);
        }
      }, m != null && m.fireImmediately && f(b, b);
    }
    return r(v);
  }, i(t, n, e);
}, Ue = Hn, Yn = {
  lightPositionX: -2,
  lightPositionY: 6,
  lightPositionZ: -4,
  lightCameraSize: 4.5,
  lightCameraBias: 5e-3,
  lightCameraNear: 3,
  lightCameraFar: 16
}, Le = ke()(
  Ue((i) => ({
    ...Yn
  }))
), Xn = {
  u_blueNoiseTexture: { value: null },
  u_blueNoiseTexelSize: { value: new U() },
  u_blueNoiseCoordOffset: { value: new U() }
}, qn = {
  u_lightPosition: {
    value: new X(
      Le.getState().lightPositionX,
      Le.getState().lightPositionY,
      Le.getState().lightPositionZ
    )
  },
  u_goboTexture: { value: null },
  u_goboIntensity: { value: k.getState().goboIntensity },
  u_infoTexture: { value: new $e() },
  u_infoTextureLinear: { value: new $e() },
  u_endAnimationRatio: { value: 0 }
}, Zn = {
  u_time: { value: 0 },
  u_deltaTime: { value: 1 },
  u_resolution: { value: new U() },
  u_viewportResolution: { value: new U() },
  u_bgColor1: { value: new $(k.getState().bgColor1) },
  u_bgColor2: { value: new $(k.getState().bgColor2) },
  ...Xn,
  ...qn
}, q = ke()(
  Ue(() => ({
    ...Zn
  }))
), Wn = {
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
}, k = ke()(
  Ue((i) => ({
    ...Wn,
    setProperty: (t) => i((n) => ({ ...n, property: t }))
  }))
), Gn = (i) => {
  k.setState({ errorBlock: i });
};
function Io() {
  k.getState().setProperty({ propertyName: "showVisual", value: !0 });
}
const Fo = (i) => {
  const t = i;
  for (const n of t)
    n.propertyName === "bgColor1" && q.setState((e) => ({
      u_bgColor1: { value: e.u_bgColor1.value.set(n.value).convertSRGBToLinear() }
    })), n.propertyName === "bgColor2" && q.setState((e) => ({
      u_bgColor2: { value: e.u_bgColor2.value.set(n.value).convertSRGBToLinear() }
    })), k.getState().setProperty(n);
}, Vn = {
  hasNotStarted: !0,
  isFree: !1,
  isResult: !1,
  isReplayResult: !1,
  isSuccessResult: !1,
  isFailResult: !1,
  isStopped: !1
}, Bt = {
  flags: Vn,
  destroyCanvas: !1,
  animationTypeEnded: null,
  status: Z.NOT_STARTED,
  result: z.NONE
}, I = ke()(
  Ue((i) => ({
    ...Bt,
    setDestroyCanvas: (t) => i({ destroyCanvas: t }),
    setAnimationTypeEnded: (t) => i({ animationTypeEnded: t }),
    setWinAnimation: ({ isReplay: t, completeAnimationLevel: n }) => i((e) => {
      const r = e.status === Z.NOT_STARTED, s = t && r ? z.REPLAY : z.COMPLETED, y = {
        ...e.flags,
        isReplayResult: s === z.REPLAY,
        isSuccessResult: !0
      };
      return { ...e, status: Z.RESULT, result: s, completeAnimationLevel: n, flags: y };
    }),
    setAnimationState: (t) => i((n) => {
      let e, r = n.result;
      switch (t) {
        case "start": {
          e = Z.FREE;
          break;
        }
        case "stop": {
          e = Z.RESULT, r = z.STOP;
          break;
        }
        case "lose": {
          e = Z.RESULT, r = z.FAILED;
          break;
        }
        default:
          e = Z.NOT_STARTED;
      }
      const s = e === Z.RESULT, y = {
        isResult: s,
        hasNotStarted: e === Z.NOT_STARTED,
        isFree: e === Z.FREE,
        isReplayResult: s && r === z.REPLAY,
        isSuccessResult: s && r === z.COMPLETED,
        isFailResult: s && r === z.FAILED,
        isStopped: s && r === z.STOP
      };
      return {
        ...n,
        status: e,
        result: r,
        flags: { ...n.flags, ...y }
      };
    }),
    reset: () => i((t) => ({ ...Bt, status: t.status }))
  }))
), $n = () => {
  I.getState().setAnimationState("start");
}, Qn = () => {
  I.getState().setAnimationState("stop");
}, ko = () => {
  I.getState().setAnimationState("lose");
}, Uo = ({ isReplay: i, completeAnimationLevel: t }) => I.getState().setWinAnimation({ isReplay: i, completeAnimationLevel: t }), He = (i, t) => Math.hypot(i, t);
class Kn {
  constructor(t = 0, n = 0, e = 0) {
    S(this, "id", 0);
    S(this, "row", 0);
    S(this, "col", 0);
    S(this, "distance", He(this.row, this.col));
    S(this, "MAX_DISTANCE", He(G, G));
    S(this, "priority", this.MAX_DISTANCE - this.distance);
    S(this, "isMain", this.row === 0 && this.col === 0);
    S(this, "isBorder", Math.abs(this.row) === 2 || Math.abs(this.col) === 2);
    S(this, "isOccupied", !1);
    S(this, "willBeOccupied", !1);
    S(this, "activeRatio", 0);
    S(this, "neighbours", null);
    S(this, "reachableNeighbours", null);
    S(this, "prioritySortedReachableNeighbours", null);
    S(this, "randomDelay", Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5);
    S(this, "loseAnimationPositionArray", []);
    S(this, "loseAnimationOrientArray", []);
    this.id = t, this.row = n, this.col = e, this.distance = He(n, e), this.MAX_DISTANCE = He(G, G), this.priority = this.MAX_DISTANCE - this.distance, this.isMain = n === 0 && e === 0, this.isBorder = Math.abs(n) === 2 || Math.abs(e) === 2, this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0, this.neighbours = null, this.reachableNeighbours = null, this.prioritySortedReachableNeighbours = null, this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
  }
  init() {
    var t;
    this.reachableNeighbours = ((t = this.neighbours) == null ? void 0 : t.filter((n) => (n == null ? void 0 : n.row) === this.row || (n == null ? void 0 : n.col) === this.col)) || null, this._sortPriorityNeighbours();
  }
  _sortPriorityNeighbours() {
    this.prioritySortedReachableNeighbours = this.reachableNeighbours ? [...this.reachableNeighbours].sort((t, n) => ((t == null ? void 0 : t.priority) || 0) - ((n == null ? void 0 : n.priority) || 0)) : null;
  }
  shuffleReachableNeighbours() {
    if (this.reachableNeighbours)
      for (let t = this.reachableNeighbours.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1));
        [this.reachableNeighbours[t], this.reachableNeighbours[n]] = [
          this.reachableNeighbours[n],
          this.reachableNeighbours[t]
        ];
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
const W = 5, ie = W + 2, G = Math.floor(W / 2), J = W * W, Jn = ie * ie;
let Re = null, ae = [];
const eo = () => {
  function i() {
    ae = Array.from(
      { length: W },
      (f, m) => Array.from({ length: W }, (v, _) => {
        const b = m - G, g = _ - G;
        return new Kn(m * W + _, b, g);
      })
    ), ae.forEach(
      (f, m) => f.forEach((v, _) => {
        v.neighbours = e(m - G, _ - G), v.init();
      })
    ), Re = t(0, 0);
  }
  function t(f, m) {
    var v;
    return ((v = ae[f + G]) == null ? void 0 : v[m + G]) || null;
  }
  function n() {
    const f = ae.flat().filter((m) => !m.isOccupied);
    return f.length ? f[Math.floor(Math.random() * f.length)] : null;
  }
  function e(f, m) {
    return [-1, 0, 1].flatMap(
      (v) => [-1, 0, 1].map((_) => v === 0 && _ === 0 ? null : t(f + v, m + _)).filter(Boolean)
    );
  }
  function r() {
    ae.flat().forEach((f) => f.reset());
  }
  function s(f) {
    ae.flat().forEach((m) => m.preUpdate(f));
  }
  function y(f) {
    ae.flat().forEach((m) => m.update(f));
  }
  return {
    init: i,
    getTile: t,
    getRandomFreeTile: n,
    reset: r,
    preUpdate: s,
    update: y
  };
}, me = eo(), ue = "/assets", tt = 1, to = [-20, 18, 20], no = [0, 0, 0], It = Math.min(2, window.devicePixelRatio || 1), Ft = 2560 * 1440, oo = { antialias: !0, alpha: !1, powerPreference: "low-power" }, Ve = J - 5, an = 4, io = Ve - 2, ao = () => {
  let i = [], t = 0, n = null;
  function e(m, v) {
    i.push(async () => {
      let _ = 0;
      const b = 3;
      for (; _ < b; )
        try {
          const T = await (await fetch(m)).arrayBuffer(), h = new Uint32Array(T, 0, 1)[0], E = JSON.parse(
            new TextDecoder().decode(new Uint8Array(T, 4, h))
          ), { vertexCount: C, indexCount: M, attributes: N } = E;
          let O = 4 + h;
          const x = new Cn(), B = {};
          N.forEach((D) => {
            const { id: l, componentSize: a, storageType: u, needsPack: w, packedComponents: d } = D, p = l === "indices" ? M : C, R = window[u], L = new R(T, O, p * a), V = R.BYTES_PER_ELEMENT;
            let Q;
            w ? Q = r(L, p, a, d, u) : (B[l] = O, Q = L), l === "indices" ? x.setIndex(new Mt(Q, 1)) : x.setAttribute(l, new Mt(Q, a)), O += p * a * V;
          }), v && v(x), f();
          break;
        } catch (g) {
          _++, _ >= b ? console.error(
            `Tower animation | error loading buffer [%c${m}] after ${b} attempts, %O: `,
            "font-weight:900;",
            g
          ) : (console.warn(
            `Tower animation | error loading buffer: ${m}, attempt ${_}/${b}, retrying...`,
            g
          ), await new Promise((T) => setTimeout(T, 100)));
        }
    });
  }
  function r(m, v, _, b, g) {
    const T = b.length, h = g.indexOf("Int") === 0, E = 1 << m.BYTES_PER_ELEMENT * 8, C = h ? E * 0.5 : 0, M = 1 / E, N = new Float32Array(v * _);
    for (let O = 0, x = 0; O < v; O++)
      for (let B = 0; B < T; B++) {
        const { delta: D, from: l } = b[B];
        N[x] = (m[x] + C) * M * D + l, x++;
      }
    return N;
  }
  function s(m, v) {
    i.push(() => {
      new Tn().load(
        m,
        (_) => {
          _ && (_.minFilter = An, _.magFilter = st, _.generateMipmaps = !0, _.anisotropy = 1, _.flipY = !0, v == null || v(_), f());
        },
        void 0,
        (_) => console.error(`Tower animation | error loading texture [%c${m}] %O: `, "font-weight:900;", _)
      );
    });
  }
  function y(m) {
    t = 0, n = m, i.forEach((v) => v());
  }
  function f() {
    t++, t === i.length && (i = [], n == null || n());
  }
  return {
    loadBuf: e,
    loadTexture: s,
    start: y,
    list: i,
    loadedCount: t,
    onLoadCallback: n
  };
}, re = ao();
class ro {
  constructor() {
    S(this, "PI", Math.PI);
  }
  clamp(t, n, e) {
    return t < n ? n : t > e ? e : t;
  }
  mix(t, n, e) {
    return t + (n - t) * e;
  }
  cUnMix(t, n, e) {
    return this.clamp((e - t) / (n - t), 0, 1);
  }
  saturate(t) {
    return this.clamp(t, 0, 1);
  }
  fit(t, n, e, r, s, y) {
    return t = this.cUnMix(n, e, t), y && (t = y(t)), r + t * (s - r);
  }
}
const A = new ro(), so = () => {
  function i(s) {
    return (s *= 2) < 1 ? 0.5 * s * s * s * s : -0.5 * ((s -= 2) * s * s * s - 2);
  }
  function t(s) {
    return Math.sin(s * Math.PI / 2);
  }
  function n(s) {
    return s * s * ((1.70158 + 1) * s - 1.70158);
  }
  function e(s, y = 1.70158) {
    return --s * s * ((y + 1) * s + y) + 1;
  }
  function r(s) {
    const y = 2.5949095;
    return (s *= 2) < 1 ? 0.5 * s * s * ((y + 1) * s - y) : 0.5 * ((s -= 2) * s * ((y + 1) * s + y) + 2);
  }
  return {
    quartInOut: i,
    sineOut: t,
    backIn: n,
    backOut: e,
    backInOut: r
  };
};
function co(i, t, n, e, r) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  function s(m, v, _, b, g) {
    const T = 3 * (_ - v), h = 3 * (b - _) - T;
    return (((g - v - T - h) * m + h) * m + T) * m + v;
  }
  function y(m, v, _, b = 1e-6) {
    let g = 0, T = 1, h = m;
    for (; g < T; ) {
      const E = s(h, 0, v, _, 1);
      if (Math.abs(E - m) < b)
        return h;
      E < m ? g = h : T = h, h = (g + T) / 2;
    }
    return h;
  }
  const f = y(i, t, e);
  return s(f, 0, n, r, 1);
}
function xe(i) {
  return co(i, 0.3, 0, 0, 1);
}
const Ae = so(), Ye = `#ifndef IS_BASE
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
`, kt = `uniform vec3 u_lightPosition;
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
`, Ut = `#include <common>
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
let Xe, F = 0;
const lo = 6;
let Ee = 0, Pe = 0, ye = 0, be = 0, Se = 0, Me = 0, De = 1;
const uo = () => {
  function i() {
    const f = ({
      status: m,
      result: v,
      completeAnimationLevel: _
    }) => {
      m === Z.RESULT && (v === z.COMPLETED || v === z.REPLAY) && t(_);
    };
    I.subscribe((m) => m, f);
  }
  function t(f) {
    Xe = f;
  }
  function n() {
    F = 0, Ee = 0, Pe = 0, ye = 0, be = 0, Se = 0, Me = 0, De = 1, Xe = null;
  }
  function e() {
    De = 1, Ee = 0, Pe = 0, ye = A.fit(F, 0.2, 0.49, 0, 1.2), Se = A.fit(F, 0.45, 0.55, 0, 1), Me = A.fit(F, 0.45, 0.7, 0, 1), be = A.fit(F, 0.55, 1, 0, 1);
  }
  function r() {
    De = 1.5, Pe = 0, Ee = A.fit(F, 0.1, 0.45, 0, 1), ye = A.fit(F, 0.15, 0.49, 0, 1.2), Se = A.fit(F, 0.45, 0.55, 0, 1), Me = A.fit(F, 0.45, 0.7, 0, 1), be = A.fit(F, 0.55, 1, 0, 1);
  }
  function s() {
    De = 2, Ee = A.fit(F, 0.1, 0.5, 0, 1), Pe = A.fit(F, 0.2, 0.51, 0, 1), ye = A.fit(F, 0.2, 0.49, 0, 1.2), Se = A.fit(F, 0.45, 0.55, 0, 1), Me = A.fit(F, 0.45, 0.7, 0, 1), be = A.fit(F, 0.6, 1, 0, 1);
  }
  function y(f) {
    switch (F += (Xe ? 1 : 0) * f / lo, F = A.clamp(F, 0, 1), Xe) {
      case Ge.ONE:
        e();
        break;
      case Ge.TWO:
        r();
        break;
      case Ge.THREE:
        s();
        break;
    }
    F >= 1 && (I.getState().setAnimationTypeEnded("win"), n());
  }
  return {
    init: i,
    update: y,
    resetRatios: n
  };
}, jt = uo();
let nt = !1, de = 0;
const mo = 2.5;
let Oe = 0, ze = 0;
const fo = () => {
  function i() {
    const e = ({ status: r, result: s }) => {
      r === Z.RESULT && s === z.STOP && (nt = !0);
    };
    I.subscribe((r) => r, e);
  }
  function t() {
    de = 0, ze = 0, Oe = 0, nt = !1;
  }
  function n(e) {
    de += (nt ? 1 : 0) * e / mo, de = A.clamp(de, 0, 1), Oe = A.fit(de, 0, 0.5, 0, 2.5), ze = A.fit(de, 0.4, 0.65, 0, 1), de >= 1 && (I.getState().setAnimationTypeEnded("stop"), t());
  }
  return {
    init: i,
    update: n,
    resetRatios: t
  };
}, Ht = fo();
let ot = !1, oe = 0;
const ho = 3.5;
let Te = 0, fe = 0, Ke = 0, Be = 0;
const po = () => {
  function i() {
    const e = ({ status: r, result: s }) => {
      r === Z.RESULT && s === z.FAILED && (ot = !0);
    };
    I.subscribe((r) => r, e);
  }
  function t() {
    oe = 0, Te = 0, fe = 0, Be = 0, Ke = 0, ot = !1;
  }
  function n(e) {
    oe += (ot ? 1 : 0) * e / ho, oe = A.clamp(oe, 0, 1), Te = A.fit(oe, 0, 0.3, 0, 1), fe = A.fit(oe, 0.35, 0.65, 0, 1), Ke = A.fit(oe, 0.3, 0.55, 0, 2.5), Be = A.fit(oe, 0.6, 0.8, 0, 1), oe >= 1 && (I.getState().setAnimationTypeEnded("lose"), t());
  }
  return {
    init: i,
    resetRatios: t,
    update: n
  };
}, Yt = po(), vo = Math.PI / 2, ge = new X();
class go {
  constructor() {
    S(this, "animation", 0);
    S(this, "boardDir", new U());
    S(this, "boardPos", new U());
    S(this, "pos", new X());
    S(this, "orient", new ce());
    S(this, "showRatio", 0);
    S(this, "spinPivot", new X());
    S(this, "spinOrient", new ce());
    this.animation = 0, this.boardDir = new U(), this.boardPos = new U(), this.pos = new X(), this.orient = new ce(), this.showRatio = 0, this.spinPivot = new X(), this.spinOrient = new ce();
  }
  reset() {
    this.animation = 0, this.boardDir.set(0, 0), this.boardPos.set(0, 0), this.pos.set(0, 0, 0), this.orient.identity(), this.showRatio = 0, this.spinPivot.set(0, 0, 0), this.spinOrient.identity();
  }
  update(t) {
    this.pos.set(this.boardPos.x, 0, -this.boardPos.y), this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5), ge.set(-this.boardDir.y, 0, -this.boardDir.x), this.spinOrient.setFromAxisAngle(ge, this.animation * vo);
  }
  addsFallAnimation(t) {
    ge.set(this.boardDir.x, -t, -this.boardDir.y), this.pos.addScaledVector(ge, t), ge.set(this.boardDir.x * 0.5, 0, -this.boardDir.y * 0.5), this.spinPivot.lerp(ge, A.saturate(t));
  }
}
const Xt = {
  blocks: [],
  firstStartAnimationRatio: 0,
  lastSpawnedBlock: null,
  cycleIndex: 0,
  animationSpeedRatio: 0,
  previousSuccessBlocksAnimationRatio: 0,
  activeBlocksCount: 0
}, ee = ke()(
  Ue((i) => ({
    ...Xt,
    incCycleIndex: () => i((t) => ({ cycleIndex: t.cycleIndex + 1 })),
    reset: () => i((t) => ({ ...Xt, firstStartAnimationRatio: t.firstStartAnimationRatio }))
  }))
), qt = (i) => ee.setState((t) => ({ blocks: [i, ...t.blocks] })), Zt = (i) => ee.setState({ lastSpawnedBlock: i }), Wt = ({
  animationSpeedRatio: i,
  firstStartAnimationRatio: t,
  previousSuccessBlocksAnimationRatio: n
}) => ee.setState((e) => ({
  animationSpeedRatio: i ?? e.animationSpeedRatio,
  firstStartAnimationRatio: t ?? e.firstStartAnimationRatio,
  previousSuccessBlocksAnimationRatio: n ?? e.previousSuccessBlocksAnimationRatio
})), Ce = 2 * J, H = new U(), qe = new U(), we = new X(), Gt = new X(), it = new ce(), Vt = new ce(), $t = new $(), Ze = new $(), at = new $(), _e = new $(), se = new $(), We = new $(), c = {
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
}, wo = () => {
  let i, t, n;
  const e = ee.getInitialState();
  let { blocks: r, ...s } = e;
  const y = new mt();
  async function f() {
    const l = Array.from({ length: Ce });
    c._blockList = l.map((a) => new go()), c._blockRenderList = [...c._blockList], re.loadBuf(`${ue}/BASE.buf`, (a) => {
      m(a);
    }), re.loadBuf(`${ue}/BOX.buf`, (a) => {
      v(a);
    }), re.loadBuf(`${ue}/LOSE_ANIMATION.buf`, (a) => {
      const { position: u, orient: w } = a.attributes;
      c.animationTotalFrames = u.count / J, c.heroLoseAnimationPositionArray = u.array, c.heroLoseAnimationOrientArray = w.array;
    }), re.loadTexture(`${ue}/gobo.jpg`, (a) => {
      a.flipY = !1, a.needsUpdate = !0, q.setState({ u_goboTexture: { value: a } });
    }), _();
  }
  function m(l) {
    const a = {
      ...i,
      ...ct.merge([lt.lights]),
      u_color: { value: new $(t.neutralColor) },
      u_blocksColor: { value: new $(t.neutralColor) },
      u_yDisplacement: { value: 0 },
      u_prevSuccessColor: {
        value: new $(t.neutralColor).convertSRGBToLinear()
      },
      u_successColor: { value: new $(t.successColor).convertSRGBToLinear() },
      u_successAnimationRatio: { value: 0 }
    }, u = new le({
      uniforms: a,
      vertexShader: Ye,
      fragmentShader: kt,
      lights: !0,
      transparent: !0,
      defines: { IS_BASE: !0 }
    });
    c._baseMesh = new Fe(l, u), c._baseMesh.receiveShadow = c._baseMesh.castShadow = !0, c._baseMesh.frustumCulled = !1, c._baseMesh.customDepthMaterial = new le({
      vertexShader: Ye,
      fragmentShader: Ut,
      defines: { IS_DEPTH: !0, IS_BASE: !0 }
    }), y.add(c._baseMesh);
  }
  function v(l) {
    const a = new ft();
    a.index = l.index, Object.keys(l.attributes).forEach((d) => {
      a.setAttribute(d, l.attributes[d]);
    }), a.instanceCount = Ce;
    const u = (d, p) => {
      const R = new Float32Array(Ce * p);
      return a.setAttribute(
        d,
        new Qe(R, p, p !== 4, 1).setUsage(Mn)
      ), R;
    };
    c._instancePosArray = u("instancePos", 3), c._instanceOrientArray = u("instanceOrient", 4), c._instanceShowRatioArray = u("instanceShowRatio", 1), c._instanceSpinPivotArray = u("instanceSpinPivot", 3), c._instanceSpinOrientArray = u("instanceSpinOrient", 4), c._instanceColorArray = u("instanceColor", 3), c._instanceIsActiveArray = u("instanceIsActive", 1), c._instanceNextDirectionArray = u("instanceNextDirection", 2);
    const w = new le({
      uniforms: {
        ...ct.merge([lt.lights]),
        ...i
      },
      vertexShader: Ye,
      fragmentShader: kt,
      lights: !0
    });
    c._blocksMesh = new Fe(a, w), c._blocksMesh.frustumCulled = !1, c._blocksMesh.castShadow = c._blocksMesh.receiveShadow = !0, c._blocksMesh.customDepthMaterial = new le({
      uniforms: i,
      vertexShader: Ye,
      fragmentShader: Ut,
      defines: { IS_DEPTH: !0 }
    }), y.add(c._blocksMesh);
  }
  function _() {
    const l = (d) => t = d, a = (d) => {
      n = d;
    }, u = ({ blocks: d, ...p }) => {
      r = d, s = p;
    }, w = (d) => i = d;
    I.subscribe((d) => a(d.result)), k.subscribe((d) => l(d)), ee.subscribe((d) => u(d)), q.subscribe((d) => w(d));
  }
  async function b() {
    const l = Le.getState();
    c.directLight = new Rn(16777215, 1), c.directLight.castShadow = !0, c.directLight.shadow.camera.near = l.lightCameraNear, c.directLight.shadow.camera.far = l.lightCameraFar, c.directLight.shadow.camera.right = l.lightCameraSize, c.directLight.shadow.camera.left = -l.lightCameraSize, c.directLight.shadow.camera.top = l.lightCameraSize, c.directLight.shadow.camera.bottom = -l.lightCameraSize, c.directLight.shadow.bias = l.lightCameraBias, c.directLight.shadow.mapSize.width = 768, c.directLight.shadow.mapSize.height = 768, c.isShadowCameraHelperVisible = !0, c.shadowCameraHelper = new En(c.directLight.shadow.camera), g();
    const a = new Float32Array(Jn * 4);
    for (let u = 0, w = 0; u < ie; u++)
      for (let d = 0; d < ie; d++, w += 4)
        a[w] = 0, a[w + 1] = 0, a[w + 2] = 1, a[w + 3] = 1;
    return c.infoTexture = new $e(a, ie, ie, Dt, Nt), c.infoTextureLinear = new $e(
      a,
      ie,
      ie,
      Dt,
      Nt,
      Pn,
      Lt,
      Lt,
      st,
      st,
      0
    ), c.infoTextureLinear.needsUpdate = !0, q.setState({
      u_infoTexture: { value: c.infoTexture },
      u_infoTextureLinear: { value: c.infoTextureLinear }
    }), c.directLight;
  }
  function g() {
    ae.forEach((l, a) => {
      l.forEach((u, w) => {
        var p, R;
        const d = a * W + w;
        u.loseAnimationPositionArray = new Float32Array(c.animationTotalFrames * 3), u.loseAnimationOrientArray = new Float32Array(c.animationTotalFrames * 4);
        for (let L = 0; L < c.animationTotalFrames; L++) {
          const V = (L * J + d) * 3, Q = (L * J + d) * 4;
          u.loseAnimationPositionArray.set(
            ((p = c.heroLoseAnimationPositionArray) == null ? void 0 : p.subarray(V, V + 3)) || [],
            L * 3
          ), u.loseAnimationOrientArray.set(
            ((R = c.heroLoseAnimationOrientArray) == null ? void 0 : R.subarray(Q, Q + 4)) || [],
            L * 4
          );
        }
      });
    });
  }
  function T() {
    c.successColorRatio = 0, c._blockList.forEach((l) => l.reset());
  }
  function h(l) {
    var a, u;
    $t.set(t.mainColor), Ze.set(t.successColor), at.set(t.failColor), _e.set(t.neutralColor).convertSRGBToLinear(), se.copy($t), n === z.FAILED && fe > 0 && se.copy(at), (n === z.COMPLETED || n === z.REPLAY) && (c.successColorRatio = Math.min(1, c.successColorRatio + 0.5 * l), se.lerp(Ze, c.successColorRatio)), n !== z.REPLAY && n !== z.COMPLETED && se.lerp(_e, A.saturate(ze + Be)), se.convertSRGBToLinear(), _e.convertSRGBToLinear(), Ze.convertSRGBToLinear();
    for (let w = 0; w < Ce; w++) {
      const d = r.filter((L) => L.id === w)[0], p = w < r.length + (s.lastSpawnedBlock ? 1 : 0), R = p ? se : _e;
      if (p && (d != null && d.isErrorBlock)) {
        let L = A.saturate(0.5 * (1 - Math.cos(d.errorPreFallAnimationTime)));
        d.errorFallAnimationTime > 0 && (L = A.saturate(0.5 * (1 - Math.cos(14 * d.errorFallAnimationTime)))), We.lerpColors(R, at, L), (a = c._instanceColorArray) == null || a.set([We.r, We.g, We.b], w * 3);
      } else
        (u = c._instanceColorArray) == null || u.set([R.r, R.g, R.b], w * 3);
      c._instanceIsActiveArray && (c._instanceIsActiveArray[w] = p ? 1 : 0);
    }
    c._baseMesh && (c._baseMesh.material.uniforms.u_color.value.set(_e).convertSRGBToLinear(), c._baseMesh.material.uniforms.u_blocksColor.value.copy(se), c._baseMesh.material.uniforms.u_successColor.value.copy(Ze), c._baseMesh.material.uniforms.u_prevSuccessColor.value.set(_e).convertSRGBToLinear(), c._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(
      se.set(t.successColor),
      s.previousSuccessBlocksAnimationRatio
    ), c._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear());
  }
  function E() {
    ae.forEach((l) => {
      l.forEach((a) => {
        const u = a.id % W + 1, d = ((Math.floor(a.id / W) + 1) * ie + u) * 4;
        let p = 0.5 * ye * A.fit(Se, 0, 0.1, 1, 0);
        p += (fe > 0 ? 1 : 0) * A.fit(Be, 0, 0.1, 1, 0), p += Oe * A.fit(ze, 0, 0.1, 1, 0), p = Math.min(1, p), c.infoTexture && (c.infoTexture.image.data[d] = a.activeRatio * (1 - p), c.infoTexture.image.data[d + 1] = a.isOccupied || a.willBeOccupied ? 1 : 0, c.infoTexture.image.data[d + 2] = a.isMain ? 1 : 0, c.infoTexture.image.data[d + 3] = a.isBorder ? 1 : 0);
      });
    }), c.infoTexture && c.infoTextureLinear && (c.infoTexture.needsUpdate = !0, c.infoTextureLinear.needsUpdate = !0);
  }
  function C() {
    var l, a;
    if (s.lastSpawnedBlock) {
      const u = c._blockList[s.lastSpawnedBlock.id];
      s.lastSpawnedBlock.currentTile && u.boardPos.set(
        (l = s.lastSpawnedBlock.currentTile) == null ? void 0 : l.row,
        (a = s.lastSpawnedBlock.currentTile) == null ? void 0 : a.col
      ), u.showRatio = xe(
        A.saturate(s.lastSpawnedBlock.spawnAnimationRatioUnclamped)
      );
    }
    r == null || r.forEach((u) => {
      var d, p, R, L;
      const w = c._blockList[u.id];
      w && (w.showRatio = xe(A.saturate(u.spawnAnimationRatioUnclamped)), u != null && u.currentTile && w.boardPos.set((d = u.currentTile) == null ? void 0 : d.row, (p = u.currentTile) == null ? void 0 : p.col), u.targetTile && w.boardDir.set(
        u.targetTile.row - (((R = u.currentTile) == null ? void 0 : R.row) || 0),
        u.targetTile.col - (((L = u.currentTile) == null ? void 0 : L.col) || 0)
      ), w.animation = u.hasAnimationEnded ? 0 : u.easedAnimationRatio);
    });
  }
  function M(l) {
    var u, w;
    for (let d = 0; d < l; d++) {
      const p = c._blockRenderList[d];
      p.pos.toArray(c._instancePosArray || [], d * 3), p.orient.toArray(c._instanceOrientArray || [], d * 4), c._instanceShowRatioArray && (c._instanceShowRatioArray[d] = Ae.quartInOut(p.showRatio)), p.spinPivot.toArray(c._instanceSpinPivotArray || [], d * 3), p.spinOrient.toArray(c._instanceSpinOrientArray || [], d * 4), (u = c._instanceNextDirectionArray) == null || u.set([p.boardDir.x, p.boardDir.y], d * 2);
    }
    const a = (w = c._blocksMesh) == null ? void 0 : w.geometry;
    if (a) {
      for (const d in a.attributes) {
        const p = a.attributes[d];
        p.isBufferAttribute && (p.addUpdateRange(0, l * p.itemSize), p.needsUpdate = !0);
      }
      a.instanceCount = l;
    }
  }
  function N(l, a) {
    if (n === z.STOP && a >= J) {
      const u = a - J, w = u % W - G, d = Math.floor(u / W) - G, p = me.getTile(d, w);
      if (!p.isOccupied) {
        const R = A.saturate(Oe - p.randomDelay);
        p.activeRatio = R, l.showRatio = xe(R), l.boardPos.set(d, w);
      }
    }
  }
  function O(l, a) {
    if (l && l.isErrorBlock && l.errorLifeCycle >= an - 1) {
      const u = l.currentTile, w = l.errorFallAnimationTime;
      a.boardPos.set(u.row, u.col), H.set(u.row, u.col).normalize(), Math.abs(H.x) > Math.abs(H.y) ? H.set(Math.sign(H.x), 0) : H.set(0, Math.sign(H.y)), a.boardDir.set(H.x, H.y), a.animation = A.fit(w, 0, 1, 0, 1, Ae.sineOut), a.animation += Math.max(0, w - 0.8), a.update(k.getState().deltaTime), a.addsFallAnimation(Math.max(0, w - 0.8));
    }
  }
  function x(l, a, u) {
    if (n === z.FAILED) {
      if (l) {
        const w = l.currentTile;
        if (fe > 0) {
          const d = Math.floor(fe * c.animationTotalFrames), p = Math.min(d + 1, c.animationTotalFrames - 1), R = fe * c.animationTotalFrames - d;
          we.fromArray(w.loseAnimationPositionArray, d * 3), Gt.fromArray(w.loseAnimationPositionArray, p * 3), we.lerp(Gt, R), we.y *= 0.5, a.pos.set(we.z, we.y, -we.x), it.fromArray(w.loseAnimationOrientArray, d * 4), Vt.fromArray(w.loseAnimationOrientArray, p * 4), it.slerp(Vt, R), a.orient.copy(it);
        }
        if (Te > 0) {
          const d = A.fit(Te, 0, 1, 0, 1, Ae.sineOut);
          if (H.set(w.row, w.col), H.normalize(), H.multiplyScalar(0.1 * d), a.pos.x += H.x, a.pos.z -= H.y, Te < 1) {
            const p = d * A.fit(Te, 0.5, 0.8, 1, 0);
            H.set(l.randomVector.x, l.randomVector.y), H.normalize(), H.multiplyScalar(p), qe.set(0, 0), qe.addScaledVector(H, 0.08 * p * Math.sin(p * 80)), a.pos.x += qe.x, a.pos.z += qe.y;
          }
        }
      }
      if (u >= J) {
        const w = u - J, d = w % W - G, p = Math.floor(w / W) - G, R = me.getTile(p, d), L = A.saturate(Ke - R.randomDelay);
        R.isOccupied || (R.activeRatio = L), a.showRatio = xe(L), a.boardPos.set(p, d);
      }
    }
  }
  function B(l, a) {
    if ((n === z.COMPLETED || n === z.REPLAY) && l) {
      const u = l.currentTile, w = 0.1 * (u == null ? void 0 : u.randomDelay), d = ye - w;
      let p = A.fit(d, 0, 0.5, 0, 1, (R) => 1 - Math.pow(1 - R, 5));
      p = A.fit(d, 0.7, 1, p, 0, (R) => Math.pow(R, 5)), a.pos.y += De * p;
    }
  }
  function D(l) {
    C(), h(l);
    let a = 0;
    for (let R = 0; R < Ce; R++) {
      const L = c._blockList[R];
      L.update(l);
      const V = r.find((Q) => Q.id === R);
      L.showRatio > 0 && (c._blockRenderList[a++] = L), x(V, L, R), O(V, L), B(V, L), N(L, R);
    }
    E(), M(a);
    const u = Math.min(1, ze + Be + Se), w = Ae.backOut(u, 3), d = 1 - xe(ee.getState().firstStartAnimationRatio);
    y.position.y = -w - 2 * d, y.rotation.y = 0.5 * Math.PI * d, y.rotation.y += 2 * Math.PI * Ae.quartInOut(Ee), c._baseMesh && (c._baseMesh.material.uniforms.u_yDisplacement.value = -w - 5 * d, c._baseMesh.material.uniforms.u_successAnimationRatio.value = Me);
    const p = Le.getState();
    q.setState({
      u_endAnimationRatio: {
        value: Math.min(
          1,
          A.fit(Oe, 0.5, 2, 0, 1) + A.fit(Ke, 0.5, 2, 0, 1) + A.fit(F, 0, 0.2, 0, 1)
        )
      }
    }), c.directLight && (c.directLight.position.copy(i.u_lightPosition.value), c.directLight.shadow.camera.top = p.lightCameraSize, c.directLight.shadow.camera.bottom = -p.lightCameraSize, c.directLight.shadow.bias = p.lightCameraBias);
  }
  return {
    preload: f,
    init: b,
    reset: T,
    update: D,
    heroContainer: y
  };
}, Ne = wo(), Qt = `uniform float u_time;
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
`, _o = `uniform vec3 u_bgColor1;
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
`, xo = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`, rn = new mt(), yo = () => {
  let i, t = null, n = null, e = null, r = null, s = null, y = null, f = null, m = null, v = 0, _ = 0, b, g;
  const T = {
    u_time: { value: 0 },
    u_ratio: { value: 0 },
    u_isFloating: { value: 1 }
  };
  async function h() {
    re.loadTexture(`${ue}/matcap_gold.jpg`, (x) => {
      b = x, b.needsUpdate = !0;
    }), re.loadBuf(`${ue}/COIN.buf`, (x) => {
      i = x;
    }), re.loadBuf(`${ue}/COIN_PLACEMENT.buf`, (x) => {
      const { position: B, aoN: D, aoP: l, curveu: a, orient: u } = x.attributes;
      r = B.array, f = D.array, m = l.array, y = a.array, s = u.array, v = B.count;
    });
  }
  function E() {
    C(), M(), N(), t && rn.add(t);
  }
  function C() {
    i.computeVertexNormals();
    const x = new ft();
    x.index = i.index, Object.entries(i.attributes).forEach(([D, l]) => x.setAttribute(D, l)), g = new Float32Array(v * 3).map(() => Math.random() * 2 - 1), [
      ["a_instancePosition", r, 3],
      ["a_instanceQuaternion", s, 4],
      ["a_instanceCurveUV", y, 1],
      ["a_instanceAoN", f, 3],
      ["a_instanceAoP", m, 3],
      ["a_instanceRand", g, 3]
    ].forEach(([D, l, a]) => {
      x.setAttribute(D, new Qe(l, a));
    }), n = x;
  }
  function M() {
    const x = q.getState();
    e = new le({
      uniforms: {
        ...x,
        ...T,
        ...ct.merge([lt.lights]),
        u_matcapTexture: { value: b }
      },
      vertexShader: Qt,
      fragmentShader: _o,
      lights: !0
    });
  }
  function N() {
    n && e && (t = new Fe(n, e), t.frustumCulled = !1, t.castShadow = !0, t.receiveShadow = !0, t.customDepthMaterial = new le({
      uniforms: { ...T },
      vertexShader: Qt,
      fragmentShader: xo,
      defines: { IS_DEPTH: !0 }
    }));
  }
  function O(x) {
    const B = be === 0;
    _ = B ? Pe : be, T.u_ratio.value = _, T.u_time.value += x, T.u_isFloating.value = B ? 1 : 0, t && (t.rotation.y = 0 * _, t.visible = _ > 0 && _ < 1);
  }
  return {
    preload: h,
    init: E,
    update: O
  };
}, bo = `uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}
`, So = () => {
  async function t() {
    const e = q.getState();
    re.loadTexture(`${ue}/LDR_RGB1_0.png`, (r) => {
      r.generateMipmaps = !1, r.minFilter = r.magFilter = Dn, r.wrapS = r.wrapT = Nn, r.needsUpdate = !0, e && (e.u_blueNoiseTexture.value = r, e.u_blueNoiseTexelSize.value.set(1 / 128, 1 / 128));
    }), Ln.getBlueNoise = bo;
  }
  function n(e) {
    q.setState((r) => ({
      u_blueNoiseCoordOffset: { value: r.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random()) }
    }));
  }
  return {
    update: n,
    preInit: t,
    TEXTURE_SIZE: 128
  };
}, Kt = { type: "change" }, rt = { type: "start" }, Jt = { type: "end" };
class To extends On {
  constructor(t, n) {
    super(), n === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), n === document && console.error(
      'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
    ), this.object = t, this.domElement = n, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new X(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = Math.PI * 0.2, this.maxPolarAngle = Math.PI * 0.45, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !0, this.dampingFactor = 0.15, this.enableZoom = !1, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 0.5, this.enablePan = !1, this.panSpeed = 1, this.screenSpacePanning = !0, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: pe.ROTATE, MIDDLE: pe.DOLLY, RIGHT: pe.PAN }, this.touches = { ONE: ve.ROTATE, TWO: ve.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.scale = 1, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.scale = 1, e.object.updateProjectionMatrix(), e.dispatchEvent(Kt), e.update(), s = r.NONE;
    }, this.update = function() {
      const o = new X(), P = new ce().setFromUnitVectors(t.up, new X(0, 1, 0)), j = P.clone().invert(), Y = new X(), K = new ce(), he = 2 * Math.PI;
      return function() {
        const Et = e.object.position;
        o.copy(Et).sub(e.target), o.applyQuaternion(P), f.setFromVector3(o), e.autoRotate && s === r.NONE && a(D()), e.enableDamping ? (f.theta += m.theta * e.dampingFactor, f.phi += m.phi * e.dampingFactor) : (f.theta += m.theta, f.phi += m.phi);
        let te = e.minAzimuthAngle, ne = e.maxAzimuthAngle;
        isFinite(te) && isFinite(ne) && (te < -Math.PI ? te += he : te > Math.PI && (te -= he), ne < -Math.PI ? ne += he : ne > Math.PI && (ne -= he), te <= ne ? f.theta = Math.max(te, Math.min(ne, f.theta)) : f.theta = f.theta > (te + ne) / 2 ? Math.max(te, f.theta) : Math.min(ne, f.theta)), f.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, f.phi)), f.makeSafe();
        let Pt = e.enableDamping ? (e.scale - 1) * e.dampingFactor + 1 : e.scale;
        return f.radius *= Pt, f.radius = Math.max(e.minDistance, Math.min(e.maxDistance, f.radius)), e.enableDamping === !0 ? e.target.addScaledVector(v, e.dampingFactor) : e.target.add(v), o.setFromSpherical(f), o.applyQuaternion(j), Et.copy(e.target).add(o), e.object.lookAt(e.target), e.enableDamping === !0 ? (m.theta *= 1 - e.dampingFactor, m.phi *= 1 - e.dampingFactor, v.multiplyScalar(1 - e.dampingFactor)) : (m.set(0, 0, 0), v.set(0, 0, 0)), e.scale = e.scale / Pt, _ || Y.distanceToSquared(e.object.position) > y || 8 * (1 - K.dot(e.object.quaternion)) > y ? (e.dispatchEvent(Kt), Y.copy(e.object.position), K.copy(e.object.quaternion), _ = !1, !0) : !1;
      };
    }();
    const e = this, r = {
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
    const y = 1e-6, f = new Ot(), m = new Ot(), v = new X();
    let _ = !1;
    const b = new U(), g = new U(), T = new U(), h = new U(), E = new U(), C = new U(), M = new U(), N = new U(), O = new U(), x = [], B = {};
    function D() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function l() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function a(o) {
      m.theta -= o;
    }
    function u(o) {
      m.phi -= o;
    }
    const w = function() {
      const o = new X();
      return function(j, Y) {
        o.setFromMatrixColumn(Y, 0), o.multiplyScalar(-j), v.add(o);
      };
    }(), d = function() {
      const o = new X();
      return function(j, Y) {
        e.screenSpacePanning === !0 ? o.setFromMatrixColumn(Y, 1) : (o.setFromMatrixColumn(Y, 0), o.crossVectors(e.object.up, o)), o.multiplyScalar(j), v.add(o);
      };
    }(), p = function() {
      const o = new X();
      return function(j, Y) {
        const K = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const he = e.object.position;
          o.copy(he).sub(e.target);
          let je = o.length();
          je *= Math.tan(e.object.fov / 2 * Math.PI / 180), w(2 * j * je / K.clientHeight, e.object.matrix), d(2 * Y * je / K.clientHeight, e.object.matrix);
        } else e.object.isOrthographicCamera ? (w(
          j * (e.object.right - e.object.left) / e.object.zoom / K.clientWidth,
          e.object.matrix
        ), d(
          Y * (e.object.top - e.object.bottom) / e.object.zoom / K.clientHeight,
          e.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function R(o) {
      e.object.isPerspectiveCamera ? e.scale /= o : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * o)), e.object.updateProjectionMatrix(), _ = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function L(o) {
      e.object.isPerspectiveCamera ? e.scale *= o : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / o)), e.object.updateProjectionMatrix(), _ = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function V(o) {
      b.set(o.clientX, o.clientY);
    }
    function Q(o) {
      M.set(o.clientX, o.clientY);
    }
    function ht(o) {
      h.set(o.clientX, o.clientY);
    }
    function cn(o) {
      g.set(o.clientX, o.clientY), T.subVectors(g, b).multiplyScalar(e.rotateSpeed);
      const P = e.domElement;
      a(2 * Math.PI * T.x / P.clientHeight), u(2 * Math.PI * T.y / P.clientHeight), b.copy(g), e.update();
    }
    function ln(o) {
      N.set(o.clientX, o.clientY), O.subVectors(N, M), O.y > 0 ? R(l()) : O.y < 0 && L(l()), M.copy(N), e.update();
    }
    function un(o) {
      E.set(o.clientX, o.clientY), C.subVectors(E, h).multiplyScalar(e.panSpeed), p(C.x, C.y), h.copy(E), e.update();
    }
    function dn(o) {
      o.deltaY < 0 ? L(l()) : o.deltaY > 0 && R(l()), e.update();
    }
    function pt() {
      if (x.length === 1)
        b.set(x[0].pageX, x[0].pageY);
      else {
        const o = 0.5 * (x[0].pageX + x[1].pageX), P = 0.5 * (x[0].pageY + x[1].pageY);
        b.set(o, P);
      }
    }
    function vt() {
      if (x.length === 1)
        h.set(x[0].pageX, x[0].pageY);
      else {
        const o = 0.5 * (x[0].pageX + x[1].pageX), P = 0.5 * (x[0].pageY + x[1].pageY);
        h.set(o, P);
      }
    }
    function gt() {
      const o = x[0].pageX - x[1].pageX, P = x[0].pageY - x[1].pageY, j = Math.sqrt(o * o + P * P);
      M.set(0, j);
    }
    function mn() {
      e.enableZoom && gt(), e.enablePan && vt();
    }
    function fn() {
      e.enableZoom && gt(), e.enableRotate && pt();
    }
    function wt(o) {
      if (x.length === 1)
        g.set(o.pageX, o.pageY);
      else {
        const j = et(o), Y = 0.5 * (o.pageX + j.x), K = 0.5 * (o.pageY + j.y);
        g.set(Y, K);
      }
      T.subVectors(g, b).multiplyScalar(e.rotateSpeed);
      const P = e.domElement;
      a(2 * Math.PI * T.x / P.clientHeight), u(2 * Math.PI * T.y / P.clientHeight), b.copy(g);
    }
    function _t(o) {
      if (x.length === 1)
        E.set(o.pageX, o.pageY);
      else {
        const P = et(o), j = 0.5 * (o.pageX + P.x), Y = 0.5 * (o.pageY + P.y);
        E.set(j, Y);
      }
      C.subVectors(E, h).multiplyScalar(e.panSpeed), p(C.x, C.y), h.copy(E);
    }
    function xt(o) {
      const P = et(o), j = o.pageX - P.x, Y = o.pageY - P.y, K = Math.sqrt(j * j + Y * Y);
      N.set(0, K), O.set(0, Math.pow(N.y / M.y, e.zoomSpeed)), R(O.y), M.copy(N);
    }
    function hn(o) {
      e.enableZoom && xt(o), e.enablePan && _t(o);
    }
    function pn(o) {
      e.enableZoom && xt(o), e.enableRotate && wt(o);
    }
    function vn(o) {
      e.enabled !== !1 && (x.length === 0 && (e.domElement.setPointerCapture(o.pointerId), e.domElement.addEventListener("pointermove", yt), e.domElement.addEventListener("pointerup", bt)), yn(o), o.pointerType === "touch" ? _n(o) : gn(o));
    }
    function yt(o) {
      e.enabled !== !1 && (o.pointerType === "touch" ? xn(o) : wn(o));
    }
    function bt(o) {
      Ct(o), x.length === 0 && (e.domElement.releasePointerCapture(o.pointerId), e.domElement.removeEventListener("pointermove", yt), e.domElement.removeEventListener("pointerup", bt)), e.dispatchEvent(Jt), s = r.NONE;
    }
    function St(o) {
      Ct(o);
    }
    function gn(o) {
      let P;
      switch (o.button) {
        case 0:
          P = e.mouseButtons.LEFT;
          break;
        case 1:
          P = e.mouseButtons.MIDDLE;
          break;
        case 2:
          P = e.mouseButtons.RIGHT;
          break;
        default:
          P = -1;
      }
      switch (P) {
        case pe.DOLLY:
          if (e.enableZoom === !1) return;
          Q(o), s = r.DOLLY;
          break;
        case pe.ROTATE:
          if (o.ctrlKey || o.metaKey || o.shiftKey) {
            if (e.enablePan === !1) return;
            ht(o), s = r.PAN;
          } else {
            if (e.enableRotate === !1) return;
            V(o), s = r.ROTATE;
          }
          break;
        case pe.PAN:
          if (o.ctrlKey || o.metaKey || o.shiftKey) {
            if (e.enableRotate === !1) return;
            V(o), s = r.ROTATE;
          } else {
            if (e.enablePan === !1) return;
            ht(o), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && e.dispatchEvent(rt);
    }
    function wn(o) {
      if (e.enabled !== !1)
        switch (s) {
          case r.ROTATE:
            if (e.enableRotate === !1) return;
            cn(o);
            break;
          case r.DOLLY:
            if (e.enableZoom === !1) return;
            ln(o);
            break;
          case r.PAN:
            if (e.enablePan === !1) return;
            un(o);
            break;
        }
    }
    function Tt(o) {
      e.enabled === !1 || e.enableZoom === !1 || s !== r.NONE || (e.dispatchEvent(rt), dn(o), e.dispatchEvent(Jt));
    }
    function _n(o) {
      switch (Rt(o), x.length) {
        case 1:
          switch (e.touches.ONE) {
            case ve.ROTATE:
              if (e.enableRotate === !1) return;
              pt(), s = r.TOUCH_ROTATE;
              break;
            case ve.PAN:
              if (e.enablePan === !1) return;
              vt(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case ve.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1) return;
              mn(), s = r.TOUCH_DOLLY_PAN;
              break;
            case ve.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1) return;
              fn(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && e.dispatchEvent(rt);
    }
    function xn(o) {
      switch (Rt(o), s) {
        case r.TOUCH_ROTATE:
          if (e.enableRotate === !1) return;
          wt(o), e.update();
          break;
        case r.TOUCH_PAN:
          if (e.enablePan === !1) return;
          _t(o), e.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1) return;
          hn(o), e.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1) return;
          pn(o), e.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function At(o) {
      e.enabled !== !1 && (o.preventDefault(), e.domElement.removeEventListener("contextmenu", At));
    }
    function yn(o) {
      x.push(o);
    }
    function Ct(o) {
      delete B[o.pointerId];
      for (let P = 0; P < x.length; P++)
        if (x[P].pointerId === o.pointerId) {
          x.splice(P, 1);
          return;
        }
    }
    function Rt(o) {
      let P = B[o.pointerId];
      P === void 0 && (P = new U(), B[o.pointerId] = P), P.set(o.pageX, o.pageY);
    }
    function et(o) {
      const P = o.pointerId === x[0].pointerId ? x[1] : x[0];
      return B[P.pointerId];
    }
    e.domElement.addEventListener("contextmenu", At), e.domElement.addEventListener("pointerdown", vn), e.domElement.addEventListener("pointercancel", St), e.domElement.addEventListener("wheel", Tt, { passive: !1 }), this.update(), e.domElement.removeEventListener("pointercancel", St), e.domElement.removeEventListener("wheel", Tt, { passive: !1 });
  }
}
class en {
  constructor(t) {
    S(this, "id", -1);
    S(this, "isMoving", !1);
    S(this, "hasBeenSpawned", !1);
    S(this, "hasAnimationEnded", !1);
    S(this, "hasBeenEvaluated", !1);
    S(this, "currentTile", null);
    S(this, "targetTile", null);
    S(this, "moveAnimationRatio", 0);
    S(this, "spawnAnimationRatio", 0);
    S(this, "spawnAnimationRatioUnclamped", -Math.random());
    S(this, "easedAnimationRatio", 0);
    S(this, "randomVector", {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    });
    S(this, "lifeCycle", 0);
    S(this, "easingFunction", null);
    S(this, "errorLifeCycle", 0);
    S(this, "isErrorBlock", !1);
    S(this, "errorPreFallAnimationTime", 0);
    S(this, "errorPreFallAnimationTimeScale", 0);
    S(this, "errorFallAnimationTime", 0);
    S(this, "isErrorBlockFalling", !1);
    S(this, "skipFallAnimation", !1);
    this.id = t, this.init();
  }
  init() {
    this._setNewEasingFunction();
  }
  _setNewEasingFunction() {
    const t = Math.random(), n = 0.25;
    this.easingFunction = (e) => xe(A.fit(e, t * n, t * n + (1 - n), 0, 1));
  }
  updateTile() {
    this.currentTile && (this.currentTile.isOccupied = !0, this.currentTile.willBeOccupied = !1);
  }
  _findBestTile(t, n) {
    return t.find((e) => {
      var r;
      return e.isOccupied || e.willBeOccupied || e.isMain ? !1 : n || (((r = this.currentTile) == null ? void 0 : r.priority) ?? 0) >= e.priority;
    });
  }
  moveToNextTile(t = !1, n = 0) {
    if (this.hasBeenEvaluated = !0, this.moveAnimationRatio = -n * (this.isErrorBlock ? 0 : 1), !this.currentTile) return;
    if (this.isErrorBlock) {
      this.isMoving = !0, this.targetTile = this.currentTile;
      return;
    }
    this.currentTile.shuffleReachableNeighbours();
    const e = t ? this.currentTile.reachableNeighbours : this.currentTile.prioritySortedReachableNeighbours, r = this._findBestTile(e, t);
    r && (!this.currentTile.isMain || Math.random() <= 0.8) ? (this.targetTile = r, this.targetTile && (this.targetTile.willBeOccupied = !0), this.isMoving = !0) : this.hasAnimationEnded = !0;
  }
  resetAfterCycle() {
    var r, s;
    this.hasBeenEvaluated = !1, this.hasAnimationEnded = !1, this.moveAnimationRatio = 0, this.easedAnimationRatio = 0, this.isMoving = !1, this.lifeCycle++, this.isErrorBlock && !this.skipFallAnimation && (this.errorLifeCycle++, this.isErrorBlockFalling = this.errorLifeCycle >= an - 1);
    const t = (r = ee.getState().blocks) == null ? void 0 : r.length, n = I.getState().flags.isFree, e = k.getState().errorBlock;
    (s = this.currentTile) != null && s.isBorder && !e && Math.random() < 0.5 && t >= io && n && (Gn(this), this.isErrorBlock = !0), this._setNewEasingFunction(), this.updateTile();
  }
  reset(t = !1) {
    var n, e;
    this.isErrorBlock && (this.errorLifeCycle = 0, this.isErrorBlock = !1, (n = this.currentTile) == null || n.reset(), (e = this.targetTile) == null || e.reset(), this.errorFallAnimationTime = 0, this.isErrorBlockFalling = !1, this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0, this.errorFallAnimationTime = 0, this.skipFallAnimation = !1), this.id = t ? this.id : -1, this.isMoving = !1, this.hasBeenSpawned = !1, this.hasAnimationEnded = !1, this.hasBeenEvaluated = !1, this.currentTile = null, this.targetTile = null, this.moveAnimationRatio = 0, this.spawnAnimationRatio = 0, this.spawnAnimationRatioUnclamped = -Math.random(), this.easedAnimationRatio = 0, this.lifeCycle = 0;
  }
  _onMovementEnd() {
    this.moveAnimationRatio = 1, this.currentTile && (this.currentTile.isOccupied = !1), this.currentTile = this.targetTile, this.targetTile = null, this.hasAnimationEnded = !0, this.updateTile();
  }
  _updateSpawnAnimation(t) {
    this.spawnAnimationRatioUnclamped += 0.75 * tt * t, this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped)), this.spawnAnimationRatio === 1 && (this.hasBeenSpawned = !0);
  }
  _updateMovement(t) {
    var r;
    const n = I.getState().flags.isResult, e = I.getState().flags.isFree;
    (this.isMoving && !this.hasAnimationEnded || n) && (this.moveAnimationRatio = Math.min(
      1,
      this.moveAnimationRatio + tt * t * (this.isErrorBlock ? 0.7 : 1)
    ), this.easedAnimationRatio = ((r = this.easingFunction) == null ? void 0 : r.call(this, Math.max(0, this.moveAnimationRatio))) || 0, this.easedAnimationRatio === 1 && (e || n) && this._onMovementEnd());
  }
  _updateTileRatios() {
    const t = Math.max(
      0,
      Math.min(1, this.hasBeenSpawned ? this.easedAnimationRatio : this.spawnAnimationRatio)
    );
    this.currentTile && (this.currentTile.activeRatio = this.hasBeenSpawned ? this.targetTile ? 1 - t : 1 : this.spawnAnimationRatio), this.targetTile && (this.targetTile.activeRatio = t), this.isErrorBlock && this.isErrorBlockFalling && (this.currentTile && (this.currentTile.activeRatio = 0), this.targetTile && (this.targetTile.activeRatio = 0));
  }
  update(t) {
    this.hasBeenSpawned ? this._updateMovement(t) : this._updateSpawnAnimation(t), this.isErrorBlockFalling && (this.errorFallAnimationTime = this.errorFallAnimationTime + 3 * tt * t), this.isErrorBlock && (this.errorPreFallAnimationTimeScale = this.errorPreFallAnimationTimeScale + 3 * t, this.errorPreFallAnimationTimeScale = Math.min(20, this.errorPreFallAnimationTimeScale), this.errorPreFallAnimationTime = this.errorPreFallAnimationTime + this.errorPreFallAnimationTimeScale * t, this.skipFallAnimation && (this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0)), this._updateTileRatios();
  }
}
const Ao = () => {
  let i = I.getInitialState().flags;
  const t = ee.getInitialState();
  let { blocks: n, ...e } = t;
  function r() {
    const { isFailResult: h, isStopped: E, isSuccessResult: C, isReplayResult: M, isFree: N } = i;
    h || E || n.length >= J || Re != null && Re.isOccupied && !C && !M || (C || M ? s() : y(), n.length);
  }
  function s() {
    const h = (n == null ? void 0 : n.length) ?? 0, E = J - h;
    for (let C = 0; C < E; C++) {
      const M = me.getRandomFreeTile();
      if (M) {
        const N = new en(n.length);
        N.currentTile = M, N.init(), N.updateTile(), qt(N);
      }
    }
  }
  function y() {
    let h = null;
    const E = i.isFree, C = !!(n.length < Ve && E);
    console.debug("isFree=", E), C && (h = new en(n.length), console.debug("block1=", h), Zt(h)), h && (h.currentTile = Re, h.init(), h.updateTile()), console.debug("block2=", h);
  }
  function f() {
    const h = i.hasNotStarted, E = i.isFailResult, C = i.isStopped;
    h || (e.lastSpawnedBlock && (qt(e.lastSpawnedBlock), Zt(null)), !(E || C) && (n.forEach((M) => M.resetAfterCycle()), ee.getState().incCycleIndex(), r(), m()));
  }
  function m() {
    var M;
    const h = e.cycleIndex, E = (n == null ? void 0 : n.length) ?? 0, C = h % 2 === 0 ? !0 : E < Ve - 1;
    (M = e.lastSpawnedBlock) != null && M.hasBeenSpawned && e.lastSpawnedBlock.moveToNextTile(C, 0), n.forEach((N, O) => {
      !N.hasBeenEvaluated && N.hasBeenSpawned && N.moveToNextTile(C, O * 0.2);
    });
  }
  function v(h = !1) {
    n.forEach((M) => M.reset()), Ne.reset(), me.reset(), ee.getState().reset();
    const E = I.getState().result, C = Un.includes(E);
    I.getState().reset(), f(), !h && C && $n();
  }
  function _(h) {
    const E = i.isResult, C = e.animationSpeedRatio, M = e.firstStartAnimationRatio, N = e.previousSuccessBlocksAnimationRatio, O = Math.min(1, C + h * (E ? 1 : 0)), x = A.saturate(N - h / 1.5), B = A.saturate(
      M + h * (k.getState().showVisual ? 1 : 0)
    );
    Wt({
      animationSpeedRatio: O,
      firstStartAnimationRatio: B,
      previousSuccessBlocksAnimationRatio: x
    });
  }
  function b() {
    var N;
    let h = !0;
    e.lastSpawnedBlock && (h = !!((N = e.lastSpawnedBlock) != null && N.hasBeenSpawned)), n.forEach((O) => {
      O.lifeCycle > 0 ? h = !!(O.hasBeenEvaluated && O.hasAnimationEnded) : h = O.spawnAnimationRatio === 1;
    });
    const { isStopped: E, isFailResult: C, isResult: M } = i;
    return h || M || C || E;
  }
  function g(h) {
    if (_(h), jt.update(h), Ht.update(h), Yt.update(h), i.hasNotStarted) {
      f();
      return;
    }
    me.preUpdate(h), e.lastSpawnedBlock && e.lastSpawnedBlock.update(h), n.forEach((C) => C.update(h)), me.update(h), b() && f();
  }
  async function T() {
    const h = ({ flags: C, animationTypeEnded: M }) => {
      if (i = C, M)
        switch (M) {
          case "win": {
            v(), Wt({ previousSuccessBlocksAnimationRatio: 1 }), f();
            break;
          }
          case "lose": {
            v(), f();
            break;
          }
          case "stop":
          default:
            v(!0);
            break;
        }
    }, E = ({ blocks: C, ...M }) => {
      n = C, e = M;
    };
    I.subscribe((C) => h(C)), ee.subscribe((C) => E(C)), jt.init(), Ht.init(), Yt.init(), me.init();
  }
  return {
    init: T,
    update: g,
    reset: v
  };
}, tn = Ao(), Co = `varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}
`, Ro = `uniform vec3 u_bgColor1;
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
`, Eo = `attribute vec3 a_instancePosition;
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
`, Po = `varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}
`, ut = new mt(), Mo = () => {
  const i = new Fe(new zt(2, 2)), t = new Fe();
  let n;
  function e(f) {
    n = f;
  }
  function r() {
    const f = (m) => {
      e({
        u_resolution: m.u_resolution,
        u_bgColor1: m.u_bgColor1,
        u_bgColor2: m.u_bgColor2,
        u_blueNoiseTexture: m.u_blueNoiseTexture,
        u_blueNoiseTexelSize: m.u_blueNoiseTexelSize,
        u_blueNoiseCoordOffset: m.u_blueNoiseCoordOffset,
        u_time: (m == null ? void 0 : m.u_time) || { value: k.getState().time }
      });
    };
    q.subscribe((m) => f(m)), i.material = new le({
      uniforms: n,
      vertexShader: Co,
      fragmentShader: Ro
    }), i.renderOrder = 1, ut.add(i), s();
  }
  function s() {
    const m = new zt(1, 1), v = new ft();
    v.index = m.index, Object.keys(m.attributes).forEach((g) => {
      v.setAttribute(g, m.attributes[g]);
    }), v.instanceCount = 50;
    const _ = new Float32Array(50 * 3), b = new Float32Array(50 * 3);
    for (let g = 0; g < 50; g++)
      _[g * 3] = 3 * (Math.random() * 2 - 1), _[g * 3 + 1] = Math.random() * 2 - 1, _[g * 3 + 2] = 0.5 + 0.5 * Math.random(), b[g * 3] = Math.random(), b[g * 3 + 1] = Math.random(), b[g * 3 + 2] = Math.random();
    v.setAttribute("a_instancePosition", new Qe(_, 3)), v.setAttribute("a_instanceRandom", new Qe(b, 3)), t.material = new le({
      vertexShader: Eo,
      fragmentShader: Po,
      uniforms: n,
      transparent: !0
    }), t.geometry = v, t.frustumCulled = !1, ut.add(t);
  }
  function y(f) {
    t.material.uniforms.u_size.value = k.getState().particlesSize, t.material.uniforms.u_color.value.set(k.getState().particlesColor), t.material.uniforms.u_opacity.value = k.getState().particlesOpacity;
  }
  return { init: r, update: y };
};
zn.enabled = !1;
const Do = () => {
  const i = new Bn(), t = k.getState().setProperty, n = new In(oo), e = Mo(), r = So(), s = yo();
  let y, f, m;
  const v = window.innerWidth / window.innerHeight, _ = 15, b = _ * v, g = new Fn(b / -2, b / 2, _ / 2, _ / -2, 1, 1e3);
  let T;
  async function h() {
    if (m && n) {
      n.domElement.id = m, y = n.domElement, document.body.appendChild(y), n.shadowMap.enabled = !0, n.shadowMap.type = kn;
      const D = k.getState().bgColor1, l = k.getState().bgColor2, a = q.getState().u_bgColor1.value.set(D).convertSRGBToLinear(), u = q.getState().u_bgColor2.value.set(l).convertSRGBToLinear();
      q.setState({ u_bgColor1: { value: a }, u_bgColor2: { value: u } }), n.setClearColor(a, 1);
    }
  }
  function E(D, l) {
    t({ propertyName: "viewportWidth", value: D }), t({ propertyName: "viewportHeight", value: l });
    let a = D * It, u = l * It;
    const w = a / u;
    u * a > Ft && (u = Math.sqrt(Ft / w), a = Math.ceil(u * w), u = Math.ceil(u)), t({ propertyName: "width", value: a }), t({ propertyName: "height", value: u }), g.updateProjectionMatrix(), q.setState((d) => ({
      u_viewportResolution: {
        value: d.u_viewportResolution.value.set(D, window.innerHeight)
      },
      u_resolution: { value: d.u_resolution.value.set(a, u) }
    })), n.setSize(a, u), y.style.width = D + "px", y.style.height = l + "px";
  }
  function C() {
    E(window.innerWidth, window.innerHeight);
  }
  async function M({ canvasId: D, initCallback: l }) {
    m = D;
    try {
      await h();
    } catch (a) {
      console.error("renderer", a);
    }
    try {
      await Ne.preload();
    } catch (a) {
      console.error("blocks preload", a);
    }
    try {
      await r.preInit();
    } catch (a) {
      console.error("blue noise preload", a);
    }
    try {
      await s.preload();
    } catch (a) {
      console.error("coins preload", a);
    }
    re.start(l);
  }
  async function N() {
    i.add(g), g.position.fromArray(to), g.updateProjectionMatrix(), T = g.clone(), f = new To(T, y), f.target0.fromArray(no), f.reset();
  }
  async function O() {
    await N();
    const D = (l) => {
      l && B();
    };
    I.subscribe((l) => D(l.destroyCanvas));
    try {
      await tn.init();
      const l = await Ne.init();
      l && (i.add(l), i.add(l.target)), s.init(), e.init(), i.add(rn), i.add(ut), i.add(Ne.heroContainer);
    } catch (l) {
      console.error("init tower error: ", l);
    }
  }
  function x(D) {
    y || (D *= 0), D = Math.min(D, 1 / 15);
    let l = k.getState().time;
    const a = k.getState().cameraOffsetX;
    let u = k.getState().offsetX;
    l += D, t({ propertyName: "time", value: l }), t({ propertyName: "deltaTime", value: D }), q.setState({
      u_time: { value: l },
      u_deltaTime: { value: D }
    });
    const w = (window.innerWidth - a) / window.innerHeight, d = 10, p = d * w;
    if (u) {
      const V = u / window.innerWidth * 100;
      u = p * V / 100;
    }
    const R = -p / 2 - u / 2, L = p / 2 - u / 2;
    g.left = R, g.right = L, g.top = d / 2, g.bottom = d / -2, g.updateProjectionMatrix(), f == null || f.update(), T == null || T.updateMatrix(), T == null || T.matrix.decompose(g.position, g.quaternion, g.scale), g.matrix.compose(g.position, g.quaternion, g.scale), r.update(D), tn.update(D), Ne.update(D), s.update(D), e.update(D), n && i && n.render(i, g);
  }
  function B() {
    I.getState().reset(), y.remove(), n.state.reset();
  }
  return {
    preload: M,
    init: O,
    onResize: C,
    render: x
  };
}, Ie = Do();
let Je = 0, dt = 0;
const No = 60, Lo = 1 / No;
let nn;
const on = k.getState().setProperty;
function sn() {
  const i = performance.now() / 1e3, t = i - Je;
  i - dt >= Lo && (dt = i, Ie.render(t), Je = i), cancelAnimationFrame(nn), nn = requestAnimationFrame(sn);
}
function Oo() {
  Ie.init().then(() => {
    Je = performance.now() / 1e3, dt = Je, window.addEventListener("resize", () => Ie.onResize()), Ie.onResize(), sn();
  }).catch((i) => {
    console.error("init err:", i);
  });
}
async function jo({ canvasId: i, offset: t = 0 }) {
  if (!document.getElementById(i)) {
    on({ propertyName: "offsetX", value: t }), on({ propertyName: "cameraOffsetX", value: t / window.innerWidth });
    try {
      await Ie.preload({ canvasId: i, initCallback: Oo });
    } catch (n) {
      console.error("loadTowerAnimation", n);
    }
  }
}
async function Ho({ canvasId: i }) {
  if (!document.getElementById(i)) return;
  I.getState().status === "not-started" || Qn(), I.getState().setDestroyCanvas(!0);
}
export {
  Ge as SuccessLevel,
  jo as loadTowerAnimation,
  Ho as removeTowerAnimation,
  Fo as setAnimationProperties,
  ko as setLose,
  $n as setStart,
  Qn as setStop,
  Uo as setWin,
  Io as showVisual
};
