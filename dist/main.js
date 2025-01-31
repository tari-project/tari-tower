var Vn = Object.defineProperty;
var jn = (i, n, s) => n in i ? Vn(i, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[n] = s;
var T = (i, n, s) => jn(i, typeof n != "symbol" ? n + "" : n, s);
import * as c from "three";
import { EventDispatcher as Zn, Vector3 as re, MOUSE as ge, TOUCH as xe, Quaternion as Zt, Spherical as Xt, Vector2 as $ } from "three";
import ae from "min-signal";
const qt = { type: "change" }, ut = { type: "start" }, Gt = { type: "end" };
class Xn extends Zn {
  constructor(n, s) {
    super(), s === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), s === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = n, this.domElement = s, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new re(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = Math.PI * 0.2, this.maxPolarAngle = Math.PI * 0.45, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.15, this.enableZoom = !1, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 0.5, this.enablePan = !1, this.panSpeed = 1, this.screenSpacePanning = !0, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ge.ROTATE, MIDDLE: ge.DOLLY, RIGHT: ge.PAN }, this.touches = { ONE: xe.ROTATE, TWO: xe.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.scale = 1, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.scale = 1, e.object.updateProjectionMatrix(), e.dispatchEvent(qt), e.update(), d = u.NONE;
    }, this.update = function() {
      const o = new re(), E = new Zt().setFromUnitVectors(n.up, new re(0, 1, 0)), F = E.clone().invert(), U = new re(), G = new Zt(), ve = 2 * Math.PI;
      return function() {
        const Vt = e.object.position;
        o.copy(Vt).sub(e.target), o.applyQuaternion(E), f.setFromVector3(o), e.autoRotate && d === u.NONE && B(y()), e.enableDamping ? (f.theta += h.theta * e.dampingFactor, f.phi += h.phi * e.dampingFactor) : (f.theta += h.theta, f.phi += h.phi);
        let J = e.minAzimuthAngle, ee = e.maxAzimuthAngle;
        isFinite(J) && isFinite(ee) && (J < -Math.PI ? J += ve : J > Math.PI && (J -= ve), ee < -Math.PI ? ee += ve : ee > Math.PI && (ee -= ve), J <= ee ? f.theta = Math.max(J, Math.min(ee, f.theta)) : f.theta = f.theta > (J + ee) / 2 ? Math.max(J, f.theta) : Math.min(ee, f.theta)), f.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, f.phi)), f.makeSafe();
        let jt = e.enableDamping ? (e.scale - 1) * e.dampingFactor + 1 : e.scale;
        return f.radius *= jt, f.radius = Math.max(e.minDistance, Math.min(e.maxDistance, f.radius)), e.enableDamping === !0 ? e.target.addScaledVector(w, e.dampingFactor) : e.target.add(w), o.setFromSpherical(f), o.applyQuaternion(F), Vt.copy(e.target).add(o), e.object.lookAt(e.target), e.enableDamping === !0 ? (h.theta *= 1 - e.dampingFactor, h.phi *= 1 - e.dampingFactor, w.multiplyScalar(1 - e.dampingFactor)) : (h.set(0, 0, 0), w.set(0, 0, 0)), e.scale = e.scale / jt, C || U.distanceToSquared(e.object.position) > v || 8 * (1 - G.dot(e.object.quaternion)) > v ? (e.dispatchEvent(qt), U.copy(e.object.position), G.copy(e.object.quaternion), C = !1, !0) : !1;
      };
    }();
    const e = this, u = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let d = u.NONE;
    const v = 1e-6, f = new Xt(), h = new Xt(), w = new re();
    let C = !1;
    const x = new $(), b = new $(), S = new $(), P = new $(), N = new $(), _ = new $(), p = new $(), g = new $(), m = new $(), r = [], l = {};
    function y() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function R() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function B(o) {
      h.theta -= o;
    }
    function H(o) {
      h.phi -= o;
    }
    const X = function() {
      const o = new re();
      return function(F, U) {
        o.setFromMatrixColumn(U, 0), o.multiplyScalar(-F), w.add(o);
      };
    }(), Y = function() {
      const o = new re();
      return function(F, U) {
        e.screenSpacePanning === !0 ? o.setFromMatrixColumn(U, 1) : (o.setFromMatrixColumn(U, 0), o.crossVectors(e.object.up, o)), o.multiplyScalar(F), w.add(o);
      };
    }(), De = function() {
      const o = new re();
      return function(F, U) {
        const G = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const ve = e.object.position;
          o.copy(ve).sub(e.target);
          let Qe = o.length();
          Qe *= Math.tan(e.object.fov / 2 * Math.PI / 180), X(2 * F * Qe / G.clientHeight, e.object.matrix), Y(2 * U * Qe / G.clientHeight, e.object.matrix);
        } else e.object.isOrthographicCamera ? (X(F * (e.object.right - e.object.left) / e.object.zoom / G.clientWidth, e.object.matrix), Y(U * (e.object.top - e.object.bottom) / e.object.zoom / G.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function Le(o) {
      e.object.isPerspectiveCamera ? e.scale /= o : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * o)), e.object.updateProjectionMatrix(), C = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function de(o) {
      e.object.isPerspectiveCamera ? e.scale *= o : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / o)), e.object.updateProjectionMatrix(), C = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Dt(o) {
      x.set(o.clientX, o.clientY);
    }
    function Sn(o) {
      p.set(o.clientX, o.clientY);
    }
    function Lt(o) {
      P.set(o.clientX, o.clientY);
    }
    function Cn(o) {
      b.set(o.clientX, o.clientY), S.subVectors(b, x).multiplyScalar(e.rotateSpeed);
      const E = e.domElement;
      B(2 * Math.PI * S.x / E.clientHeight), H(2 * Math.PI * S.y / E.clientHeight), x.copy(b), e.update();
    }
    function En(o) {
      g.set(o.clientX, o.clientY), m.subVectors(g, p), m.y > 0 ? Le(R()) : m.y < 0 && de(R()), p.copy(g), e.update();
    }
    function Rn(o) {
      N.set(o.clientX, o.clientY), _.subVectors(N, P).multiplyScalar(e.panSpeed), De(_.x, _.y), P.copy(N), e.update();
    }
    function Mn(o) {
      o.deltaY < 0 ? de(R()) : o.deltaY > 0 && Le(R()), e.update();
    }
    function Ot() {
      if (r.length === 1)
        x.set(r[0].pageX, r[0].pageY);
      else {
        const o = 0.5 * (r[0].pageX + r[1].pageX), E = 0.5 * (r[0].pageY + r[1].pageY);
        x.set(o, E);
      }
    }
    function Nt() {
      if (r.length === 1)
        P.set(r[0].pageX, r[0].pageY);
      else {
        const o = 0.5 * (r[0].pageX + r[1].pageX), E = 0.5 * (r[0].pageY + r[1].pageY);
        P.set(o, E);
      }
    }
    function Bt() {
      const o = r[0].pageX - r[1].pageX, E = r[0].pageY - r[1].pageY, F = Math.sqrt(o * o + E * E);
      p.set(0, F);
    }
    function Pn() {
      e.enableZoom && Bt(), e.enablePan && Nt();
    }
    function Dn() {
      e.enableZoom && Bt(), e.enableRotate && Ot();
    }
    function zt(o) {
      if (r.length === 1)
        b.set(o.pageX, o.pageY);
      else {
        const F = ct(o), U = 0.5 * (o.pageX + F.x), G = 0.5 * (o.pageY + F.y);
        b.set(U, G);
      }
      S.subVectors(b, x).multiplyScalar(e.rotateSpeed);
      const E = e.domElement;
      B(2 * Math.PI * S.x / E.clientHeight), H(2 * Math.PI * S.y / E.clientHeight), x.copy(b);
    }
    function It(o) {
      if (r.length === 1)
        N.set(o.pageX, o.pageY);
      else {
        const E = ct(o), F = 0.5 * (o.pageX + E.x), U = 0.5 * (o.pageY + E.y);
        N.set(F, U);
      }
      _.subVectors(N, P).multiplyScalar(e.panSpeed), De(_.x, _.y), P.copy(N);
    }
    function Ft(o) {
      const E = ct(o), F = o.pageX - E.x, U = o.pageY - E.y, G = Math.sqrt(F * F + U * U);
      g.set(0, G), m.set(0, Math.pow(g.y / p.y, e.zoomSpeed)), Le(m.y), p.copy(g);
    }
    function Ln(o) {
      e.enableZoom && Ft(o), e.enablePan && It(o);
    }
    function On(o) {
      e.enableZoom && Ft(o), e.enableRotate && zt(o);
    }
    function Nn(o) {
      e.enabled !== !1 && (r.length === 0 && (e.domElement.setPointerCapture(o.pointerId), e.domElement.addEventListener("pointermove", kt), e.domElement.addEventListener("pointerup", Ut)), Yn(o), o.pointerType === "touch" ? kn(o) : zn(o));
    }
    function kt(o) {
      e.enabled !== !1 && (o.pointerType === "touch" ? Un(o) : In(o));
    }
    function Ut(o) {
      Ht(o), r.length === 0 && (e.domElement.releasePointerCapture(o.pointerId), e.domElement.removeEventListener("pointermove", kt), e.domElement.removeEventListener("pointerup", Ut)), e.dispatchEvent(Gt), d = u.NONE;
    }
    function Bn(o) {
      Ht(o);
    }
    function zn(o) {
      let E;
      switch (o.button) {
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
        case ge.DOLLY:
          if (e.enableZoom === !1) return;
          Sn(o), d = u.DOLLY;
          break;
        case ge.ROTATE:
          if (o.ctrlKey || o.metaKey || o.shiftKey) {
            if (e.enablePan === !1) return;
            Lt(o), d = u.PAN;
          } else {
            if (e.enableRotate === !1) return;
            Dt(o), d = u.ROTATE;
          }
          break;
        case ge.PAN:
          if (o.ctrlKey || o.metaKey || o.shiftKey) {
            if (e.enableRotate === !1) return;
            Dt(o), d = u.ROTATE;
          } else {
            if (e.enablePan === !1) return;
            Lt(o), d = u.PAN;
          }
          break;
        default:
          d = u.NONE;
      }
      d !== u.NONE && e.dispatchEvent(ut);
    }
    function In(o) {
      if (e.enabled !== !1)
        switch (d) {
          case u.ROTATE:
            if (e.enableRotate === !1) return;
            Cn(o);
            break;
          case u.DOLLY:
            if (e.enableZoom === !1) return;
            En(o);
            break;
          case u.PAN:
            if (e.enablePan === !1) return;
            Rn(o);
            break;
        }
    }
    function Fn(o) {
      e.enabled === !1 || e.enableZoom === !1 || d !== u.NONE || (e.dispatchEvent(ut), Mn(o), e.dispatchEvent(Gt));
    }
    function kn(o) {
      switch (Yt(o), r.length) {
        case 1:
          switch (e.touches.ONE) {
            case xe.ROTATE:
              if (e.enableRotate === !1) return;
              Ot(), d = u.TOUCH_ROTATE;
              break;
            case xe.PAN:
              if (e.enablePan === !1) return;
              Nt(), d = u.TOUCH_PAN;
              break;
            default:
              d = u.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case xe.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1) return;
              Pn(), d = u.TOUCH_DOLLY_PAN;
              break;
            case xe.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1) return;
              Dn(), d = u.TOUCH_DOLLY_ROTATE;
              break;
            default:
              d = u.NONE;
          }
          break;
        default:
          d = u.NONE;
      }
      d !== u.NONE && e.dispatchEvent(ut);
    }
    function Un(o) {
      switch (Yt(o), d) {
        case u.TOUCH_ROTATE:
          if (e.enableRotate === !1) return;
          zt(o), e.update();
          break;
        case u.TOUCH_PAN:
          if (e.enablePan === !1) return;
          It(o), e.update();
          break;
        case u.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1) return;
          Ln(o), e.update();
          break;
        case u.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1) return;
          On(o), e.update();
          break;
        default:
          d = u.NONE;
      }
    }
    function Hn(o) {
      e.enabled !== !1 && o.preventDefault();
    }
    function Yn(o) {
      r.push(o);
    }
    function Ht(o) {
      delete l[o.pointerId];
      for (let E = 0; E < r.length; E++)
        if (r[E].pointerId === o.pointerId) {
          r.splice(E, 1);
          return;
        }
    }
    function Yt(o) {
      let E = l[o.pointerId];
      E === void 0 && (E = new $(), l[o.pointerId] = E), E.set(o.pageX, o.pageY);
    }
    function ct(o) {
      const E = o.pointerId === r[0].pointerId ? r[1] : r[0];
      return l[E.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Hn), e.domElement.addEventListener("pointerdown", Nn), e.domElement.addEventListener("pointercancel", Bn), e.domElement.addEventListener("wheel", Fn, { passive: !1 }), this.update();
  }
}
const qe = "/assets", qn = Math.min(2, window.devicePixelRatio || 1), Gn = !0, Wn = 2560 * 1440, Qn = 12, $n = !0, Kn = !1, Jn = !1, eo = [-20, 18, 20], to = [0, 0, 0], no = { antialias: !0, alpha: !1 }, ce = {
  DPR: qn,
  USE_PIXEL_LIMIT: Gn,
  MAX_PIXEL_COUNT: Wn,
  DEFAULT_POSITION: eo,
  DEFAULT_LOOKAT_POSITION: to,
  WEBGL_OPTS: no,
  FREE_BLOCKS_COUNT: Qn,
  AUTO_RESTART: $n,
  AUTO_START: Kn,
  SHOW_BLOCK: Jn
}, $e = (i, n) => Math.hypot(i, n);
class oo {
  constructor(n = 0, s = 0, e = 0) {
    T(this, "id", 0);
    T(this, "row", 0);
    T(this, "col", 0);
    T(this, "distance", $e(this.row, this.col));
    T(this, "MAX_DISTANCE", $e(Z, Z));
    T(this, "priority", this.MAX_DISTANCE - this.distance);
    T(this, "isMain", this.row === 0 && this.col === 0);
    T(this, "isBorder", Math.abs(this.row) === 2 || Math.abs(this.col) === 2);
    T(this, "isOccupied", !1);
    T(this, "willBeOccupied", !1);
    T(this, "activeRatio", 0);
    T(this, "neighbours", null);
    T(this, "reachableNeighbours", null);
    T(this, "prioritySortedReachableNeighbours", null);
    T(this, "randomDelay", Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5);
    T(this, "loseAnimationPositionArray", []);
    T(this, "loseAnimationOrientArray", []);
    this.id = n, this.row = s, this.col = e, this.distance = $e(s, e), this.MAX_DISTANCE = $e(Z, Z), this.priority = this.MAX_DISTANCE - this.distance, this.isMain = s === 0 && e === 0, this.isBorder = Math.abs(s) === 2 || Math.abs(e) === 2, this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0, this.neighbours = null, this.reachableNeighbours = null, this.prioritySortedReachableNeighbours = null, this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
  }
  init() {
    var n;
    this.reachableNeighbours = ((n = this.neighbours) == null ? void 0 : n.filter((s) => (s == null ? void 0 : s.row) === this.row || (s == null ? void 0 : s.col) === this.col)) || null, this._sortPriorityNeighbours();
  }
  _sortPriorityNeighbours() {
    this.prioritySortedReachableNeighbours = this.reachableNeighbours ? [...this.reachableNeighbours].sort((n, s) => ((n == null ? void 0 : n.priority) || 0) - ((s == null ? void 0 : s.priority) || 0)) : null;
  }
  shuffleReachableNeighbours() {
    if (this.reachableNeighbours)
      for (let n = this.reachableNeighbours.length - 1; n > 0; n--) {
        const s = Math.floor(Math.random() * (n + 1));
        [this.reachableNeighbours[n], this.reachableNeighbours[s]] = [this.reachableNeighbours[s], this.reachableNeighbours[n]];
      }
    this._sortPriorityNeighbours();
  }
  preUpdate(n) {
    this.activeRatio = 0;
  }
  reset() {
    this.isOccupied = !1, this.willBeOccupied = !1, this.activeRatio = 0;
  }
  update(n) {
  }
}
const j = 5, ne = j + 2, Z = Math.floor(j / 2), Q = j * j, io = ne * ne;
let Ie = null, oe = [];
const ao = () => {
  function i() {
    oe = Array.from(
      { length: j },
      (f, h) => Array.from({ length: j }, (w, C) => {
        const x = h - Z, b = C - Z;
        return new oo(h * j + C, x, b);
      })
    ), oe.forEach(
      (f, h) => f.forEach((w, C) => {
        w.neighbours = e(h - Z, C - Z), w.init();
      })
    ), Ie = n(0, 0);
  }
  function n(f, h) {
    var w;
    return ((w = oe[f + Z]) == null ? void 0 : w[h + Z]) || null;
  }
  function s() {
    const f = oe.flat().filter((h) => !h.isOccupied);
    return f.length ? f[Math.floor(Math.random() * f.length)] : null;
  }
  function e(f, h) {
    return [-1, 0, 1].flatMap(
      (w) => [-1, 0, 1].map((C) => w === 0 && C === 0 ? null : n(f + w, h + C)).filter(Boolean)
    );
  }
  function u() {
    oe.flat().forEach((f) => f.reset());
  }
  function d(f) {
    oe.flat().forEach((h) => h.preUpdate(f));
  }
  function v(f) {
    oe.flat().forEach((h) => h.update(f));
  }
  return {
    init: i,
    getTile: n,
    getRandomFreeTile: s,
    reset: u,
    preUpdate: d,
    update: v
  };
}, he = ao(), gn = new c.Vector2(), xn = new c.Vector2(), ro = {
  u_time: { value: 0 },
  u_deltaTime: { value: 1 },
  u_resolution: { value: gn },
  u_viewportResolution: { value: xn },
  u_bgColor1: { value: new c.Color() },
  u_bgColor2: { value: new c.Color() }
}, Wt = Q - 5, so = {
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
}, _n = {
  canvasId: void 0,
  time: 0,
  deltaTime: 0,
  width: 0,
  height: 0,
  viewportWidth: 0,
  viewportHeight: 0,
  camera: void 0,
  orbitCamera: void 0,
  cameraZoom: 1,
  cameraOffsetX: 0,
  cameraOffsetY: 0,
  renderer: void 0,
  scene: void 0,
  postprocessing: !1,
  resolution: gn,
  viewportResolution: xn,
  canvas: null,
  orbitTarget: null,
  sharedUniforms: ro,
  isPaused: !1,
  showVisual: ce.SHOW_BLOCK,
  loadList: [],
  animationSpeed: 1.1,
  activeBlocksCount: 0,
  maxFreeBlocksCount: Wt,
  lightPositionX: -2,
  lightPositionY: 6,
  lightPositionZ: -4,
  lightCameraSize: 4.5,
  lightCameraBias: 5e-3,
  lightCameraNear: 3,
  lightCameraFar: 16,
  errorBlock: null,
  errorBlockMaxLifeCycle: 4,
  minSpawnedBlocksForTheErrorBlock: Wt - 2,
  ...so
};
let t = _n;
function lo() {
  t = _n;
}
const co = () => {
  let i = [], n = 0, s = null;
  function e(h, w) {
    i.push(async () => {
      try {
        const x = await (await fetch(h)).arrayBuffer(), b = new Uint32Array(x, 0, 1)[0], S = JSON.parse(new TextDecoder().decode(new Uint8Array(x, 4, b))), { vertexCount: P, indexCount: N, attributes: _ } = S;
        let p = 4 + b;
        const g = new c.BufferGeometry(), m = {};
        _.forEach((r) => {
          const { id: l, componentSize: y, storageType: R, needsPack: B, packedComponents: H } = r, X = l === "indices" ? N : P, Y = window[R], De = new Y(x, p, X * y), Le = Y.BYTES_PER_ELEMENT;
          let de;
          B ? de = u(De, X, y, H, R) : (m[l] = p, de = De), l === "indices" ? g.setIndex(new c.BufferAttribute(de, 1)) : g.setAttribute(l, new c.BufferAttribute(de, y)), p += X * y * Le;
        }), w && w(g), f();
      } catch (C) {
        console.error("Error loading buffer:", C);
      }
    });
  }
  function u(h, w, C, x, b) {
    const S = x.length, P = b.indexOf("Int") === 0, N = 1 << h.BYTES_PER_ELEMENT * 8, _ = P ? N * 0.5 : 0, p = 1 / N, g = new Float32Array(w * C);
    for (let m = 0, r = 0; m < w; m++)
      for (let l = 0; l < S; l++) {
        const { delta: y, from: R } = x[l];
        g[r] = (h[r] + _) * p * y + R, r++;
      }
    return g;
  }
  function d(h, w) {
    console.debug(h), i.push(() => {
      new c.TextureLoader().load(
        h,
        (C) => {
          var x;
          C.minFilter = c.LinearMipMapLinearFilter, C.magFilter = c.LinearFilter, C.generateMipmaps = !0, C.anisotropy = ((x = t.renderer) == null ? void 0 : x.capabilities.getMaxAnisotropy()) || 1, C.flipY = !0, w && w(C), f();
        },
        void 0,
        (C) => console.error("Error loading texture:", C)
      );
    });
  }
  function v(h) {
    n = 0, s = h, i.forEach((w) => w());
  }
  function f() {
    n++, n === i.length && (i = [], s && s());
  }
  return {
    loadBuf: e,
    loadTexture: d,
    start: v,
    list: i,
    loadedCount: n,
    onLoadCallback: s
  };
}, ie = co();
class uo {
  constructor() {
    T(this, "PI", Math.PI);
  }
  clamp(n, s, e) {
    return n < s ? s : n > e ? e : n;
  }
  mix(n, s, e) {
    return n + (s - n) * e;
  }
  cUnMix(n, s, e) {
    return this.clamp((e - n) / (s - n), 0, 1);
  }
  saturate(n) {
    return this.clamp(n, 0, 1);
  }
  fit(n, s, e, u, d, v) {
    return n = this.cUnMix(s, e, n), v && (n = v(n)), u + n * (d - u);
  }
}
const A = new uo(), fo = () => {
  function i(d) {
    return (d *= 2) < 1 ? 0.5 * d * d * d * d : -0.5 * ((d -= 2) * d * d * d - 2);
  }
  function n(d) {
    return Math.sin(d * Math.PI / 2);
  }
  function s(d) {
    return d * d * ((1.70158 + 1) * d - 1.70158);
  }
  function e(d, v = 1.70158) {
    return --d * d * ((v + 1) * d + v) + 1;
  }
  function u(d) {
    const v = 2.5949095;
    return (d *= 2) < 1 ? 0.5 * d * d * ((v + 1) * d - v) : 0.5 * ((d -= 2) * d * ((v + 1) * d + v) + 2);
  }
  return {
    quartInOut: i,
    sineOut: n,
    backIn: s,
    backOut: e,
    backInOut: u
  };
};
function mo(i, n, s, e, u) {
  if (i === 0) return 0;
  if (i === 1) return 1;
  function d(h, w, C, x, b) {
    const S = 3 * (C - w), P = 3 * (x - C) - S;
    return (((b - w - S - P) * h + P) * h + S) * h + w;
  }
  function v(h, w, C, x = 1e-6) {
    let b = 0, S = 1, P = h;
    for (; b < S; ) {
      const N = d(P, 0, w, C, 1);
      if (Math.abs(N - h) < x)
        return P;
      N < h ? b = P : S = P, P = (b + S) / 2;
    }
    return P;
  }
  const f = v(i, n, e);
  return d(f, 0, s, u, 1);
}
function Te(i) {
  return mo(i, 0.3, 0, 0, 1);
}
const Oe = fo(), ho = `uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}
`, po = () => {
  const i = {
    u_blueNoiseTexture: { value: null },
    u_blueNoiseTexelSize: { value: null },
    u_blueNoiseCoordOffset: { value: new c.Vector2() }
  }, n = 128;
  async function s() {
    ie.loadTexture(`${qe + "/textures"}/LDR_RGB1_0.png`, (u) => {
      u.generateMipmaps = !1, u.minFilter = u.magFilter = c.NearestFilter, u.wrapS = u.wrapT = c.RepeatWrapping, u.needsUpdate = !0, i.u_blueNoiseTexture.value = u, i.u_blueNoiseTexelSize.value = new c.Vector2(1 / n, 1 / n);
    }), c.ShaderChunk.getBlueNoise = ho;
  }
  function e(u) {
    i == null || i.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random());
  }
  return {
    update: e,
    preInit: s,
    TEXTURE_SIZE: n,
    bn_sharedUniforms: i
  };
}, We = po(), Ge = new ae(), vo = new ae(), go = new ae(), xo = new ae(), wt = new ae(), yt = new ae(), Tt = new ae(), _o = new ae(), wo = new ae();
var D = /* @__PURE__ */ ((i) => (i.NOT_STARTED = "not-started", i.STARTED = "started", i.FREE = "free", i.RESULT = "result", i.RESULT_ANIMATION = "result_animation", i.RESTART_ANIMATION = "restart_animation", i.RESTART = "restart", i))(D || {}), M = /* @__PURE__ */ ((i) => (i.NONE = "none", i.PAUSE = "pause", i.STOP = "stop", i.COMPLETED = "completed", i.FAILED = "failed", i.REPLAY = "replay", i))(M || {}), ue = /* @__PURE__ */ ((i) => (i[i.ONE = 1] = "ONE", i[i.TWO = 2] = "TWO", i[i.THREE = 3] = "THREE", i))(ue || {});
const yo = [D.NOT_STARTED, D.RESTART_ANIMATION, D.RESTART, D.STARTED], it = Object.values(D), To = [M.FAILED, M.COMPLETED];
let be = 0, W = it[be], Fe = !0, Qt = !1, Me = !1, me = !1, le = !1, wn = !1, bt = !1, At = !1, at = !1, rt = !1, I = M.NONE;
const dt = [];
let $t = ue.ONE;
const bo = () => {
  function i() {
    if (t.errorBlock && (t.errorBlock.isErrorBlockFalling || t.errorBlock.errorLifeCycle < t.errorBlockMaxLifeCycle))
      return;
    Qt && w(), me && p();
    const l = dt.shift();
    l == null || l();
  }
  function n() {
    Fe = W === D.NOT_STARTED, Qt = W === D.STARTED, Me = W === D.FREE, me = W === D.RESULT, le = W === D.RESULT_ANIMATION, wn = W === D.RESTART, bt = (me || le) && I === M.REPLAY, At = (me || le) && I === M.COMPLETED, at = (me || le) && I === M.FAILED, rt = (me || le) && I === M.STOP;
  }
  function s(l, y = !1, R = !1) {
    if (!t.showVisual || !t.canvas)
      return !1;
    R && be === 0 && (be = 2);
    const B = it.indexOf(l);
    return (be + 1) % it.length === B ? (be = B, W = it[be], y || (n(), Ge.dispatch(W, I)), !0) : !1;
  }
  function e({
    status: l,
    result: y,
    animationStyle: R
  }) {
    s(l, !0, y === M.REPLAY) && (t.errorBlock && !t.errorBlock.isErrorBlockFalling && (t.errorBlock.preventErrorBlockFallAnimation(), t.errorBlock = null), I = y, $t = R, n(), Ge.dispatch(W, I, $t));
  }
  function u(l, y = !1) {
    var H, X;
    const R = {
      start: () => h(),
      free: () => w(),
      pause: () => C(),
      resume: () => x(),
      stop: () => b(),
      fail: () => _(),
      resultAnimation: () => p(),
      restartAnimation: () => g(),
      restart: () => m(),
      showVisual: () => d()
    }, B = {
      success: (Y) => S(Y),
      success2: (Y) => P(Y),
      success3: (Y) => N(Y)
    };
    (H = R[l]) == null || H.call(R), (X = B[l]) == null || X.call(B, y);
  }
  function d() {
    t.showVisual = !0;
  }
  function v({
    status: l,
    result: y = null,
    animationStyle: R = null
  }) {
    var B;
    if (t.errorBlock && ((B = t.errorBlock) == null ? void 0 : B.errorFallAnimationTime) < 1) {
      const H = L == null ? void 0 : L.find((X) => {
        var Y;
        return (X == null ? void 0 : X.id) === ((Y = t.errorBlock) == null ? void 0 : Y.id);
      });
      H && (H.isErrorBlock = !1, Pe.resetBlockFromLogicBlock(H)), t.errorBlock = null;
    }
    dt.push(() => y ? e({ status: l, result: y, animationStyle: R }) : s(l));
  }
  function f() {
    v({ status: D.NOT_STARTED, result: M.NONE });
  }
  function h() {
    v({ status: D.STARTED });
  }
  function w() {
    v({ status: D.FREE });
  }
  function C() {
    t.isPaused = !0;
  }
  function x() {
    t.isPaused = !1;
  }
  function b() {
    v({ status: D.RESULT, result: M.STOP });
  }
  function S(l = !1) {
    const y = l && Fe ? M.REPLAY : M.COMPLETED;
    v({ status: D.RESULT, result: y, animationStyle: ue.ONE });
  }
  function P(l = !1) {
    const y = l && Fe ? M.REPLAY : M.COMPLETED;
    v({ status: D.RESULT, result: y, animationStyle: ue.TWO });
  }
  function N(l = !1) {
    const y = l && Fe ? M.REPLAY : M.COMPLETED;
    v({ status: D.RESULT, result: y, animationStyle: ue.THREE });
  }
  function _() {
    v({ status: D.RESULT, result: M.FAILED });
  }
  function p() {
    v({ status: D.RESULT_ANIMATION });
  }
  function g() {
    v({ status: D.RESTART_ANIMATION });
  }
  function m() {
    dt.push(() => {
      s(D.RESTART) && xo.dispatch();
    });
  }
  function r() {
    n();
  }
  return {
    init: r,
    updateAfterCycle: i,
    set: u,
    showVisual: d,
    reset: f,
    setStart: h,
    setRestartAnimation: g,
    setRestart: m
  };
}, q = bo();
class Kt {
  constructor(n) {
    T(this, "id", -1);
    T(this, "isMoving", !1);
    T(this, "hasBeenSpawned", !1);
    T(this, "hasAnimationEnded", !1);
    T(this, "hasBeenEvaluated", !1);
    T(this, "currentTile", null);
    T(this, "targetTile", null);
    T(this, "moveAnimationRatio", 0);
    T(this, "spawnAnimationRatio", 0);
    T(this, "spawnAnimationRatioUnclamped", -Math.random());
    T(this, "easedAnimationRatio", 0);
    T(this, "randomVector", {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    });
    T(this, "lifeCycle", 0);
    T(this, "easingFunction", null);
    T(this, "errorLifeCycle", 0);
    T(this, "isErrorBlock", !1);
    T(this, "errorPreFallAnimationTime", 0);
    T(this, "errorPreFallAnimationTimeScale", 0);
    T(this, "errorFallAnimationTime", 0);
    T(this, "isErrorBlockFalling", !1);
    T(this, "skipFallAnimation", !1);
    this.id = n, this.init();
  }
  init() {
    this._setNewEasingFunction();
  }
  _setNewEasingFunction() {
    const n = Math.random(), s = 0.25;
    this.easingFunction = (e) => Te(A.fit(e, n * s, n * s + (1 - s), 0, 1));
  }
  updateTile() {
    this.currentTile && (this.currentTile.isOccupied = !0, this.currentTile.willBeOccupied = !1);
  }
  _findBestTile(n, s) {
    return n.find((e) => {
      var u;
      return e.isOccupied || e.willBeOccupied || e.isMain ? !1 : s || (((u = this.currentTile) == null ? void 0 : u.priority) ?? 0) >= e.priority;
    });
  }
  moveToNextTile(n = !1, s = 0) {
    if (this.hasBeenEvaluated = !0, this.moveAnimationRatio = -s * (this.isErrorBlock ? 0 : 1), !this.currentTile) return;
    if (this.isErrorBlock) {
      this.isMoving = !0, this.targetTile = this.currentTile;
      return;
    }
    this.currentTile.shuffleReachableNeighbours();
    const e = n ? this.currentTile.reachableNeighbours : this.currentTile.prioritySortedReachableNeighbours, u = this._findBestTile(e, n);
    u && (!this.currentTile.isMain || Math.random() <= 0.8) ? (this.targetTile = u, this.targetTile && (this.targetTile.willBeOccupied = !0), this.isMoving = !0) : this.hasAnimationEnded = !0;
  }
  resetAfterCycle() {
    var n;
    this.hasBeenEvaluated = !1, this.hasAnimationEnded = !1, this.moveAnimationRatio = 0, this.easedAnimationRatio = 0, this.isMoving = !1, this.lifeCycle++, this.isErrorBlock && !this.skipFallAnimation && (this.errorLifeCycle++, this.isErrorBlockFalling = this.errorLifeCycle >= t.errorBlockMaxLifeCycle - 1), (n = this.currentTile) != null && n.isBorder && !t.errorBlock && Math.random() < 0.5 && t.activeBlocksCount >= t.minSpawnedBlocksForTheErrorBlock && Me && (t.errorBlock = this, this.isErrorBlock = !0), this._setNewEasingFunction(), this.updateTile();
  }
  reset(n = !1) {
    var s, e;
    this.isErrorBlock && (this.errorLifeCycle = 0, this.isErrorBlock = !1, (s = this.currentTile) == null || s.reset(), (e = this.targetTile) == null || e.reset(), this.errorFallAnimationTime = 0, this.isErrorBlockFalling = !1, this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0, this.errorFallAnimationTime = 0, this.skipFallAnimation = !1), this.id = n ? this.id : -1, this.isMoving = !1, this.hasBeenSpawned = !1, this.hasAnimationEnded = !1, this.hasBeenEvaluated = !1, this.currentTile = null, this.targetTile = null, this.moveAnimationRatio = 0, this.spawnAnimationRatio = 0, this.spawnAnimationRatioUnclamped = -Math.random(), this.easedAnimationRatio = 0, this.lifeCycle = 0;
  }
  preventErrorBlockFallAnimation() {
    this.skipFallAnimation = !0;
  }
  _onMovementEnd() {
    this.moveAnimationRatio = 1, this.currentTile && (this.currentTile.isOccupied = !1), this.currentTile = this.targetTile, this.targetTile = null, this.hasAnimationEnded = !0, this.updateTile();
  }
  _updateSpawnAnimation(n) {
    this.spawnAnimationRatioUnclamped += 0.75 * t.animationSpeed * n, this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped)), this.spawnAnimationRatio === 1 && (this.hasBeenSpawned = !0);
  }
  _updateMovement(n) {
    var s;
    (this.isMoving && !this.hasAnimationEnded || le) && (this.moveAnimationRatio = Math.min(1, this.moveAnimationRatio + t.animationSpeed * n * (this.isErrorBlock ? 0.7 : 1)), this.easedAnimationRatio = ((s = this.easingFunction) == null ? void 0 : s.call(this, Math.max(0, this.moveAnimationRatio))) || 0, this.easedAnimationRatio === 1 && (Me || me) && this._onMovementEnd());
  }
  _updateTileRatios() {
    const n = Math.max(0, Math.min(1, this.hasBeenSpawned ? this.easedAnimationRatio : this.spawnAnimationRatio));
    this.currentTile && (this.currentTile.activeRatio = this.hasBeenSpawned ? this.targetTile ? 1 - n : 1 : this.spawnAnimationRatio), this.targetTile && (this.targetTile.activeRatio = n), this.isErrorBlock && this.isErrorBlockFalling && (this.currentTile && (this.currentTile.activeRatio = 0), this.targetTile && (this.targetTile.activeRatio = 0));
  }
  update(n) {
    this.hasBeenSpawned ? this._updateMovement(n) : this._updateSpawnAnimation(n), this.isErrorBlockFalling && (this.errorFallAnimationTime = this.errorFallAnimationTime + 3 * t.animationSpeed * n), this.isErrorBlock && (this.errorPreFallAnimationTimeScale = this.errorPreFallAnimationTimeScale + 3 * n, this.errorPreFallAnimationTimeScale = Math.min(20, this.errorPreFallAnimationTimeScale), this.errorPreFallAnimationTime = this.errorPreFallAnimationTime + this.errorPreFallAnimationTimeScale * n, this.skipFallAnimation && (this.errorPreFallAnimationTime = 0, this.errorPreFallAnimationTimeScale = 0)), this._updateTileRatios();
  }
}
let ft = !1, fe = 0;
const St = 2.5;
let je = 0, Ze = 0;
const Ao = () => {
  function i() {
    Ge.add((e, u) => {
      e === D.RESULT && u === M.STOP && (ft = !0);
    });
  }
  function n() {
    fe = 0, Ze = 0, je = 0, ft = !1;
  }
  function s(e) {
    fe += (ft ? 1 : 0) * e / St, fe = A.clamp(fe, 0, 1), je = A.fit(fe, 0, 0.5, 0, 2.5), Ze = A.fit(fe, 0.4, 0.65, 0, 1), fe >= 1 && (Tt.dispatch(), n());
  }
  return {
    init: i,
    update: s,
    resetRatios: n
  };
}, Jt = Ao();
let mt = !1, te = 0;
const yn = 3.5;
let Se = 0, pe = 0, st = 0, Xe = 0;
const So = () => {
  function i() {
    Ge.add((e, u) => {
      e === D.RESULT && u === M.FAILED && (mt = !0);
    });
  }
  function n() {
    te = 0, Se = 0, pe = 0, Xe = 0, st = 0, mt = !1;
  }
  function s(e) {
    te += (mt ? 1 : 0) * e / yn, te = A.clamp(te, 0, 1), Se = A.fit(te, 0, 0.3, 0, 1), pe = A.fit(te, 0.35, 0.65, 0, 1), st = A.fit(te, 0.3, 0.55, 0, 2.5), Xe = A.fit(te, 0.6, 0.8, 0, 1), te >= 1 && (wt.dispatch(), n());
  }
  return {
    init: i,
    resetRatios: n,
    update: s
  };
}, en = So();
let Ke, O = 0;
const Ct = 6.5;
let ke = 0, Ue = 0, Ce = 0, Ee = 0, Re = 0, He = 0, Ye = 1;
const Co = () => {
  function i() {
    Ge.add((f, h, w) => {
      f === D.RESULT && (h === M.COMPLETED || h === M.REPLAY) && n(w);
    });
  }
  function n(f) {
    Ke = f;
  }
  function s() {
    O = 0, ke = 0, Ue = 0, Ce = 0, Ee = 0, Re = 0, He = 0, Ye = 1, Ke = null;
  }
  function e() {
    Ye = 1, ke = 0, Ue = 0, Ce = A.fit(O, 0.2, 0.49, 0, 1.2), Re = A.fit(O, 0.45, 0.55, 0, 1), He = A.fit(O, 0.45, 0.7, 0, 1), Ee = A.fit(O, 0.55, 1, 0, 1);
  }
  function u() {
    Ye = 1.5, Ue = 0, ke = A.fit(O, 0.1, 0.45, 0, 1), Ce = A.fit(O, 0.15, 0.49, 0, 1.2), Re = A.fit(O, 0.45, 0.55, 0, 1), He = A.fit(O, 0.45, 0.7, 0, 1), Ee = A.fit(O, 0.55, 1, 0, 1);
  }
  function d() {
    Ye = 2, ke = A.fit(O, 0.1, 0.5, 0, 1), Ue = A.fit(O, 0.2, 0.51, 0, 1), Ce = A.fit(O, 0.2, 0.49, 0, 1.2), Re = A.fit(O, 0.45, 0.55, 0, 1), He = A.fit(O, 0.45, 0.7, 0, 1), Ee = A.fit(O, 0.6, 1, 0, 1);
  }
  function v(f) {
    switch (O += (Ke ? 1 : 0) * f / Ct, O = A.clamp(O, 0, 1), Ke) {
      case ue.ONE:
        e();
        break;
      case ue.TWO:
        u();
        break;
      case ue.THREE:
        d();
        break;
    }
    O >= 1 && (yt.dispatch(), s());
  }
  return {
    init: i,
    update: v,
    resetRatios: s
  };
}, tn = Co();
let Et = 0, L = [], z = null, ht = 0, Ve = 0;
const Eo = () => {
  function i() {
    n() || (At || bt ? s() : e(), !(L.length === t.maxFreeBlocksCount && Me) && vo.dispatch());
  }
  function n() {
    return at || I === "failed" || rt || L.length >= Q || (Ie == null ? void 0 : Ie.isOccupied) && !At && !bt;
  }
  function s() {
    let x = Q - t.activeBlocksCount;
    t.errorBlock && (t.errorBlock.currentTile && (t.errorBlock.currentTile.isOccupied = !1), x += 1);
    for (let b = 0; b < x; b++) {
      const S = he.getRandomFreeTile();
      if (S) {
        const P = new Kt(L.length);
        P.currentTile = S, P.init(), P.updateTile(), L = [P, ...L];
      }
    }
  }
  function e() {
    var P;
    let x = null;
    const b = !!(t.errorBlock && t.errorBlock.errorLifeCycle >= t.errorBlockMaxLifeCycle), S = !!(L.length < t.maxFreeBlocksCount && Me);
    b ? ((P = t.errorBlock) == null || P.reset(!0), Pe.resetBlockFromLogicBlock(t.errorBlock), x = t.errorBlock, t.errorBlock = null) : S && (x = new Kt(L.length), z = x), x && (x.currentTile = Ie, x.init(), x.updateTile());
  }
  function u() {
    q.updateAfterCycle(), !yo.includes(W) && (z && (L = [z, ...L], z = null), t.activeBlocksCount = L.length, !(at || rt) && (L.forEach((x) => x.resetAfterCycle()), go.dispatch(), ht++, i(), d()));
  }
  function d() {
    z != null && z.hasBeenSpawned && z.moveToNextTile(Me, 0);
    const x = ht % 2 === 0 ? !0 : t.activeBlocksCount < t.maxFreeBlocksCount - 1;
    L.forEach((b, S) => {
      !b.hasBeenEvaluated && b.hasBeenSpawned && b.moveToNextTile(x, S * 0.2);
    });
  }
  function v() {
    L.forEach((b) => b.reset()), Pe.reset(), he.reset(), L = [], z = null, ht = 0;
    const x = To.includes(I);
    q.reset(), u(), x && q.setStart(), yt.remove(() => {
      q.setRestart(), u(), Ve = 1;
    }), Tt.remove(() => {
      q.setRestart(), v();
    }), wt.remove(() => {
      q.setRestart(), u();
    });
  }
  function f(x) {
    Et = A.saturate(Et + x * (t.showVisual ? 1 : 0)), Ve = A.saturate(Ve - x / 1.5);
  }
  function h() {
    let x = !0;
    return z && (x = !!(x && z.hasBeenSpawned)), L.forEach((b) => {
      b.lifeCycle > 0 ? x = !!(x && b.hasBeenEvaluated && b.hasAnimationEnded) : x = x && b.spawnAnimationRatio === 1;
    }), x || le || at || rt;
  }
  function w(x) {
    if (f(x), tn.update(x), Jt.update(x), en.update(x), Fe) {
      u();
      return;
    }
    if (wn) {
      v();
      return;
    }
    le && q.setRestartAnimation(), he.preUpdate(x), z && z.update(x), L.forEach((S) => S.update(x)), he.update(x), h() && u();
  }
  function C() {
    q.init(), tn.init(), Jt.init(), en.init(), he.init(), yt.add(() => {
      q.setRestart(), u(), Ve = 1;
    }), Tt.add(() => {
      q.setRestart(), v();
    }), wt.add(() => {
      q.setRestart(), u();
    });
  }
  return {
    init: C,
    update: w,
    reset: v
  };
}, Tn = Eo(), Je = `#ifndef IS_BASE
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
`, nn = `uniform vec3 u_lightPosition;
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
`, on = `#include <common>
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
`, Ro = Math.PI / 2, _e = new c.Vector3();
class Mo {
  constructor() {
    T(this, "animation", 0);
    T(this, "boardDir", new c.Vector2());
    T(this, "boardPos", new c.Vector2());
    T(this, "pos", new c.Vector3());
    T(this, "orient", new c.Quaternion());
    T(this, "showRatio", 0);
    T(this, "spinPivot", new c.Vector3());
    T(this, "spinOrient", new c.Quaternion());
    this.animation = 0, this.boardDir = new c.Vector2(), this.boardPos = new c.Vector2(), this.pos = new c.Vector3(), this.orient = new c.Quaternion(), this.showRatio = 0, this.spinPivot = new c.Vector3(), this.spinOrient = new c.Quaternion();
  }
  reset() {
    this.animation = 0, this.boardDir.set(0, 0), this.boardPos.set(0, 0), this.pos.set(0, 0, 0), this.orient.identity(), this.showRatio = 0, this.spinPivot.set(0, 0, 0), this.spinOrient.identity();
  }
  update(n) {
    this.pos.set(this.boardPos.x, 0, -this.boardPos.y), this.spinPivot.set(this.boardDir.x * 0.5, -0.5, -this.boardDir.y * 0.5), _e.set(-this.boardDir.y, 0, -this.boardDir.x), this.spinOrient.setFromAxisAngle(_e, this.animation * Ro);
  }
  addsFallAnimation(n) {
    _e.set(this.boardDir.x, -n, -this.boardDir.y), this.pos.addScaledVector(_e, n), _e.set(this.boardDir.x * 0.5, 0, -this.boardDir.y * 0.5), this.spinPivot.lerp(_e, A.saturate(n));
  }
}
const Ne = 2 * Q, k = new c.Vector2(), et = new c.Vector2(), we = new c.Vector3(), an = new c.Vector3(), pt = new c.Quaternion(), rn = new c.Quaternion(), sn = new c.Color(), tt = new c.Color(), vt = new c.Color(), ye = new c.Color(), se = new c.Color(), nt = new c.Color(), Ae = new c.Object3D(), V = {
  u_lightPosition: { value: new c.Vector3(-2, 6, -4) },
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
  infoTextureLinear: void 0,
  heroSharedUniforms: V
}, Po = () => {
  async function i() {
    const _ = Array.from({ length: Ne });
    a._blockList = _.map((m) => new Mo()), a._blockRenderList = [...a._blockList];
    const p = qe + "/models", g = qe + "/textures";
    ie.loadBuf(`${p}/BASE.buf`, (m) => {
      n(m);
    }), ie.loadBuf(`${p}/BOX.buf`, (m) => {
      s(m);
    }), ie.loadBuf(`${p}/LOSE_ANIMATION.buf`, (m) => {
      const { position: r, orient: l } = m.attributes;
      a.animationTotalFrames = r.count / Q, a.heroLoseAnimationPositionArray = r.array, a.heroLoseAnimationOrientArray = l.array;
    }), ie.loadTexture(`${g}/gobo.jpg`, (m) => {
      m.flipY = !1, m.needsUpdate = !0, V.u_goboTexture.value = m;
    });
  }
  function n(_) {
    const p = {
      ...c.UniformsUtils.merge([c.UniformsLib.lights]),
      ...t.sharedUniforms,
      ...V,
      // ...blueNoise.sharedUniforms,
      u_color: { value: new c.Color(t.neutralColor) },
      u_blocksColor: { value: new c.Color() },
      u_yDisplacement: { value: 0 },
      u_prevSuccessColor: { value: new c.Color(t.neutralColor).convertSRGBToLinear() },
      u_successColor: { value: new c.Color(t.successColor).convertSRGBToLinear() },
      u_successAnimationRatio: { value: 0 }
    }, g = new c.ShaderMaterial({
      uniforms: p,
      vertexShader: Je,
      fragmentShader: nn,
      lights: !0,
      transparent: !0,
      defines: { IS_BASE: !0 }
    });
    a._baseMesh = new c.Mesh(_, g), a._baseMesh.receiveShadow = a._baseMesh.castShadow = !0, a._baseMesh.frustumCulled = !1, a._baseMesh.customDepthMaterial = new c.ShaderMaterial({
      vertexShader: Je,
      fragmentShader: on,
      defines: { IS_DEPTH: !0, IS_BASE: !0 }
    }), Ae.add(a._baseMesh);
  }
  function s(_) {
    const p = new c.InstancedBufferGeometry();
    p.index = _.index, Object.keys(_.attributes).forEach((r) => {
      p.setAttribute(r, _.attributes[r]);
    }), p.instanceCount = Ne;
    const g = (r, l) => {
      const y = new Float32Array(Ne * l);
      return p.setAttribute(r, new c.InstancedBufferAttribute(y, l, l !== 4, 1).setUsage(c.DynamicDrawUsage)), y;
    };
    a._instancePosArray = g("instancePos", 3), a._instanceOrientArray = g("instanceOrient", 4), a._instanceShowRatioArray = g("instanceShowRatio", 1), a._instanceSpinPivotArray = g("instanceSpinPivot", 3), a._instanceSpinOrientArray = g("instanceSpinOrient", 4), a._instanceColorArray = g("instanceColor", 3), a._instanceIsActiveArray = g("instanceIsActive", 1), a._instanceNextDirectionArray = g("instanceNextDirection", 2);
    const m = new c.ShaderMaterial({
      uniforms: {
        ...c.UniformsUtils.merge([c.UniformsLib.lights]),
        ...t.sharedUniforms,
        ...V,
        ...We.bn_sharedUniforms
      },
      vertexShader: Je,
      fragmentShader: nn,
      lights: !0
    });
    a._blocksMesh = new c.Mesh(p, m), a._blocksMesh.frustumCulled = !1, a._blocksMesh.castShadow = a._blocksMesh.receiveShadow = !0, a._blocksMesh.customDepthMaterial = new c.ShaderMaterial({
      uniforms: { ...V },
      vertexShader: Je,
      fragmentShader: on,
      defines: { IS_DEPTH: !0 }
    }), Ae.add(a._blocksMesh);
  }
  function e() {
    var p, g;
    a.directLight = new c.DirectionalLight(16777215, 1), a.directLight.castShadow = !0, a.directLight.shadow.camera.near = t.lightCameraNear, a.directLight.shadow.camera.far = t.lightCameraFar, a.directLight.shadow.camera.right = t.lightCameraSize, a.directLight.shadow.camera.left = -t.lightCameraSize, a.directLight.shadow.camera.top = t.lightCameraSize, a.directLight.shadow.camera.bottom = -t.lightCameraSize, a.directLight.shadow.bias = t.lightCameraBias, a.directLight.shadow.mapSize.width = 768, a.directLight.shadow.mapSize.height = 768, (p = t.scene) == null || p.add(a.directLight), (g = t.scene) == null || g.add(a.directLight.target), a.isShadowCameraHelperVisible = !0, a.shadowCameraHelper = new c.CameraHelper(a.directLight.shadow.camera), wo.add(() => {
      var m, r;
      (m = a.directLight) == null || m.shadow.camera.updateProjectionMatrix(), (r = a.shadowCameraHelper) == null || r.update();
    }), _o.add(() => {
      var m, r;
      a.isShadowCameraHelperVisible = !a.isShadowCameraHelperVisible, a.isShadowCameraHelperVisible && a.shadowCameraHelper ? (m = t.scene) == null || m.add(a.shadowCameraHelper) : a.shadowCameraHelper && ((r = t.scene) == null || r.remove(a.shadowCameraHelper));
    }), u();
    const _ = new Float32Array(io * 4);
    for (let m = 0, r = 0; m < ne; m++)
      for (let l = 0; l < ne; l++, r += 4)
        _[r] = 0, _[r + 1] = 0, _[r + 2] = 1, _[r + 3] = 1;
    a.infoTexture = new c.DataTexture(_, ne, ne, c.RGBAFormat, c.FloatType), a.infoTextureLinear = new c.DataTexture(
      _,
      ne,
      ne,
      c.RGBAFormat,
      c.FloatType,
      c.UVMapping,
      c.ClampToEdgeWrapping,
      c.ClampToEdgeWrapping,
      c.LinearFilter,
      c.LinearFilter,
      0
    ), a.infoTextureLinear.needsUpdate = !0, V.u_infoTexture.value = a.infoTexture, V.u_infoTextureLinear.value = a.infoTextureLinear;
  }
  function u() {
    oe.forEach((_, p) => {
      _.forEach((g, m) => {
        var l, y;
        const r = p * j + m;
        g.loseAnimationPositionArray = new Float32Array(a.animationTotalFrames * 3), g.loseAnimationOrientArray = new Float32Array(a.animationTotalFrames * 4);
        for (let R = 0; R < a.animationTotalFrames; R++) {
          const B = (R * Q + r) * 3, H = (R * Q + r) * 4;
          g.loseAnimationPositionArray.set(((l = a.heroLoseAnimationPositionArray) == null ? void 0 : l.subarray(B, B + 3)) || [], R * 3), g.loseAnimationOrientArray.set(((y = a.heroLoseAnimationOrientArray) == null ? void 0 : y.subarray(H, H + 4)) || [], R * 4);
        }
      });
    });
  }
  function d() {
    a.successColorRatio = 0, a._blockList.forEach((_) => _.reset());
  }
  function v(_) {
    a._blockList[_.id].reset();
  }
  function f(_) {
    var p, g;
    sn.set(t.mainColor), tt.set(t.successColor), vt.set(t.failColor), ye.set(t.neutralColor), se.copy(sn), I === M.FAILED && pe > 0 && se.copy(vt), (I === M.COMPLETED || I === M.REPLAY) && (a.successColorRatio = Math.min(1, a.successColorRatio + 0.5 * _), se.lerp(tt, a.successColorRatio)), I !== M.REPLAY && I !== M.COMPLETED && se.lerp(ye, A.saturate(Ze + Xe)), se.convertSRGBToLinear(), ye.convertSRGBToLinear(), tt.convertSRGBToLinear();
    for (let m = 0; m < Ne; m++) {
      const r = L.filter((R) => R.id === m)[0], l = m < L.length + (z ? 1 : 0), y = l ? se : ye;
      if (l && (r != null && r.isErrorBlock)) {
        let R = A.saturate(0.5 * (1 - Math.cos(r.errorPreFallAnimationTime)));
        r.errorFallAnimationTime > 0 && (R = A.saturate(0.5 * (1 - Math.cos(14 * r.errorFallAnimationTime)))), nt.lerpColors(y, vt, R), (p = a._instanceColorArray) == null || p.set([nt.r, nt.g, nt.b], m * 3);
      } else
        (g = a._instanceColorArray) == null || g.set([y.r, y.g, y.b], m * 3);
      a._instanceIsActiveArray && (a._instanceIsActiveArray[m] = l ? 1 : 0);
    }
    a._baseMesh && (a._baseMesh.material.uniforms.u_color.value.set(ye).convertSRGBToLinear(), a._baseMesh.material.uniforms.u_blocksColor.value.copy(se), a._baseMesh.material.uniforms.u_successColor.value.copy(tt), a._baseMesh.material.uniforms.u_prevSuccessColor.value.set(ye), a._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(se.set(t.successColor), Ve), a._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear());
  }
  function h() {
    oe.forEach((_) => {
      _.forEach((p) => {
        const g = p.id % j + 1, r = ((Math.floor(p.id / j) + 1) * ne + g) * 4;
        let l = 0.5 * Ce * A.fit(Re, 0, 0.1, 1, 0);
        l += (pe > 0 ? 1 : 0) * A.fit(Xe, 0, 0.1, 1, 0), l += je * A.fit(Ze, 0, 0.1, 1, 0), l = Math.min(1, l), a.infoTexture && (a.infoTexture.image.data[r] = p.activeRatio * (1 - l), a.infoTexture.image.data[r + 1] = p.isOccupied || p.willBeOccupied ? 1 : 0, a.infoTexture.image.data[r + 2] = p.isMain ? 1 : 0, a.infoTexture.image.data[r + 3] = p.isBorder ? 1 : 0);
      });
    }), a.infoTexture && a.infoTextureLinear && (a.infoTexture.needsUpdate = !0, a.infoTextureLinear.needsUpdate = !0);
  }
  function w() {
    var _, p;
    if (z) {
      const g = a._blockList[z.id];
      z.currentTile && g.boardPos.set((_ = z.currentTile) == null ? void 0 : _.row, (p = z.currentTile) == null ? void 0 : p.col), g.showRatio = Te(A.saturate(z.spawnAnimationRatioUnclamped));
    }
    L.forEach((g) => {
      var r, l, y, R;
      const m = a._blockList[g.id];
      m && (m.showRatio = Te(A.saturate(g.spawnAnimationRatioUnclamped)), g.currentTile && m.boardPos.set((r = g.currentTile) == null ? void 0 : r.row, (l = g.currentTile) == null ? void 0 : l.col), g.targetTile && m.boardDir.set(g.targetTile.row - (((y = g.currentTile) == null ? void 0 : y.row) || 0), g.targetTile.col - (((R = g.currentTile) == null ? void 0 : R.col) || 0)), m.animation = g.hasAnimationEnded ? 0 : g.easedAnimationRatio);
    });
  }
  function C(_) {
    var g, m;
    for (let r = 0; r < _; r++) {
      const l = a._blockRenderList[r];
      l.pos.toArray(a._instancePosArray || [], r * 3), l.orient.toArray(a._instanceOrientArray || [], r * 4), a._instanceShowRatioArray && (a._instanceShowRatioArray[r] = Oe.quartInOut(l.showRatio)), l.spinPivot.toArray(a._instanceSpinPivotArray || [], r * 3), l.spinOrient.toArray(a._instanceSpinOrientArray || [], r * 4), (g = a._instanceNextDirectionArray) == null || g.set([l.boardDir.x, l.boardDir.y], r * 2);
    }
    const p = (m = a._blocksMesh) == null ? void 0 : m.geometry;
    if (p) {
      for (const r in p.attributes) {
        const l = p.attributes[r];
        l.isBufferAttribute && (l.addUpdateRange(0, _ * l.itemSize), l.needsUpdate = !0);
      }
      p.instanceCount = _;
    }
  }
  function x(_, p) {
    if (I === M.STOP && p >= Q) {
      const g = p - Q, m = g % j - Z, r = Math.floor(g / j) - Z, l = he.getTile(r, m);
      if (!l.isOccupied) {
        const y = A.saturate(je - l.randomDelay);
        l.activeRatio = y, _.showRatio = Te(y), _.boardPos.set(r, m);
      }
    }
  }
  function b(_, p) {
    if (_ && _.isErrorBlock && _.errorLifeCycle >= t.errorBlockMaxLifeCycle - 1) {
      const g = _.currentTile, m = _.errorFallAnimationTime;
      p.boardPos.set(g.row, g.col), k.set(g.row, g.col).normalize(), Math.abs(k.x) > Math.abs(k.y) ? k.set(Math.sign(k.x), 0) : k.set(0, Math.sign(k.y)), p.boardDir.set(k.x, k.y), p.animation = A.fit(m, 0, 1, 0, 1, Oe.sineOut), p.animation += Math.max(0, m - 0.8), p.update(t.deltaTime), p.addsFallAnimation(Math.max(0, m - 0.8));
    }
  }
  function S(_, p, g) {
    if (I === M.FAILED) {
      if (_) {
        const m = _.currentTile;
        if (pe > 0) {
          const r = Math.floor(pe * a.animationTotalFrames), l = Math.min(r + 1, a.animationTotalFrames - 1), y = pe * a.animationTotalFrames - r;
          we.fromArray(m.loseAnimationPositionArray, r * 3), an.fromArray(m.loseAnimationPositionArray, l * 3), we.lerp(an, y), we.y *= 0.5, p.pos.set(we.z, we.y, -we.x), pt.fromArray(m.loseAnimationOrientArray, r * 4), rn.fromArray(m.loseAnimationOrientArray, l * 4), pt.slerp(rn, y), p.orient.copy(pt);
        }
        if (Se > 0) {
          const r = A.fit(Se, 0, 1, 0, 1, Oe.sineOut);
          if (k.set(m.row, m.col), k.normalize(), k.multiplyScalar(0.1 * r), p.pos.x += k.x, p.pos.z -= k.y, Se < 1) {
            const l = r * A.fit(Se, 0.5, 0.8, 1, 0);
            k.set(_.randomVector.x, _.randomVector.y), k.normalize(), k.multiplyScalar(l), et.set(0, 0), et.addScaledVector(k, 0.08 * l * Math.sin(l * 80)), p.pos.x += et.x, p.pos.z += et.y;
          }
        }
      }
      if (g >= Q) {
        const m = g - Q, r = m % j - Z, l = Math.floor(m / j) - Z, y = he.getTile(l, r), R = A.saturate(st - y.randomDelay);
        y.isOccupied || (y.activeRatio = R), p.showRatio = Te(R), p.boardPos.set(l, r);
      }
    }
  }
  function P(_, p) {
    if ((I === M.COMPLETED || I === M.REPLAY) && _) {
      const m = 0.1 * _.currentTile.randomDelay, r = Ce - m;
      let l = A.fit(r, 0, 0.5, 0, 1, (y) => 1 - Math.pow(1 - y, 5));
      l = A.fit(r, 0.7, 1, l, 0, (y) => Math.pow(y, 5)), p.pos.y += Ye * l;
    }
  }
  function N(_) {
    w(), f(_);
    let p = 0;
    for (let l = 0; l < Ne; l++) {
      const y = a._blockList[l];
      y.update(_);
      const R = L.filter((B) => B.id === l)[0];
      y.showRatio > 0 && (a._blockRenderList[p++] = y), S(R, y, l), b(R, y), x(y, l), P(R, y);
    }
    h(), C(p);
    const g = Math.min(1, Ze + Xe + Re), m = Oe.backOut(g, 3), r = 1 - Te(Et);
    Ae.position.y = -m - 2 * r, Ae.rotation.y = 0.5 * Math.PI * r, Ae.rotation.y += 2 * Math.PI * Oe.quartInOut(ke), a._baseMesh && (a._baseMesh.material.uniforms.u_yDisplacement.value = -m - 5 * r, a._baseMesh.material.uniforms.u_successAnimationRatio.value = He), V.u_endAnimationRatio.value = Math.min(
      1,
      A.fit(je, 0.5, 2, 0, 1) + A.fit(st, 0.5, 2, 0, 1) + A.fit(O, 0, 0.2, 0, 1)
    ), V.u_goboIntensity.value = t.goboIntensity, V.u_lightPosition.value.set(t.lightPositionX, t.lightPositionY, t.lightPositionZ), a.directLight && (a.directLight.position.copy(V == null ? void 0 : V.u_lightPosition.value), a.directLight.shadow.camera.top = t.lightCameraSize, a.directLight.shadow.camera.bottom = -t.lightCameraSize, a.directLight.shadow.bias = t.lightCameraBias);
  }
  return {
    preload: i,
    init: e,
    reset: d,
    resetBlockFromLogicBlock: v,
    update: N
  };
}, Pe = Po(), ln = `uniform float u_time;
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
`, Do = `uniform vec3 u_bgColor1;
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
`, Lo = `#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`, bn = new c.Object3D();
let K = null, gt = null, xt = null, cn = null, un = null, dn = null, fn = null, mn = null, hn = 0, Be = 0, _t, ot, pn;
const ze = {
  u_time: { value: 0 },
  u_ratio: { value: 0 },
  u_isFloating: { value: 1 }
}, Oo = () => {
  async function i() {
    const v = qe + "/models", f = qe + "/textures";
    ie.loadTexture(`${f}/matcap_gold.jpg`, (h) => {
      _t = h, _t.needsUpdate = !0;
    }), ie.loadBuf(`${v}/COIN.buf`, (h) => {
      ot = h;
    }), ie.loadBuf(`${v}/COIN_PLACEMENT.buf`, (h) => {
      const { position: w, aoN: C, aoP: x, curveu: b, orient: S } = h.attributes;
      cn = w.array, fn = C.array, mn = x.array, dn = b.array, un = S.array, hn = w.count;
    });
  }
  function n() {
    s(), e(), u(), K && bn.add(K);
  }
  function s() {
    ot.computeVertexNormals();
    const v = new c.InstancedBufferGeometry();
    v.index = ot.index, Object.entries(ot.attributes).forEach(([h, w]) => v.setAttribute(h, w)), pn = new Float32Array(hn * 3).map(() => Math.random() * 2 - 1), [
      ["a_instancePosition", cn, 3],
      ["a_instanceQuaternion", un, 4],
      ["a_instanceCurveUV", dn, 1],
      ["a_instanceAoN", fn, 3],
      ["a_instanceAoP", mn, 3],
      ["a_instanceRand", pn, 3]
    ].forEach(([h, w, C]) => {
      v.setAttribute(h, new c.InstancedBufferAttribute(w, C));
    }), gt = v;
  }
  function e() {
    xt = new c.ShaderMaterial({
      uniforms: {
        ...V,
        ...t.sharedUniforms,
        ...ze,
        ...We.bn_sharedUniforms,
        ...c.UniformsUtils.merge([c.UniformsLib.lights]),
        u_matcapTexture: { value: _t }
      },
      vertexShader: ln,
      fragmentShader: Do,
      lights: !0
    });
  }
  function u() {
    gt && xt && (K = new c.Mesh(gt, xt), K.frustumCulled = !1, K.castShadow = !0, K.receiveShadow = !0, K.customDepthMaterial = new c.ShaderMaterial({
      uniforms: { ...ze },
      vertexShader: ln,
      fragmentShader: Lo,
      defines: { IS_DEPTH: !0 }
    }));
  }
  function d(v) {
    const f = Ee === 0;
    Be = f ? Ue : Ee, ze.u_ratio.value = Be, ze.u_time.value += v, ze.u_isFloating.value = f ? 1 : 0, K && (K.rotation.y = 0 * Be, K.visible = Be > 0 && Be < 1);
  }
  return {
    preload: i,
    init: n,
    update: d
  };
}, Pt = Oo(), No = `varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}
`, Bo = `uniform vec3 u_bgColor1;
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
`, zo = `attribute vec3 a_instancePosition;
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
`, Io = `varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}
`, Fo = () => {
  const i = new c.Object3D();
  let n;
  function s() {
    var f, h, w;
    const d = new c.ShaderMaterial({
      uniforms: Object.assign(
        {
          u_resolution: (f = t.sharedUniforms) == null ? void 0 : f.u_resolution,
          u_bgColor1: (h = t.sharedUniforms) == null ? void 0 : h.u_bgColor1,
          u_bgColor2: (w = t.sharedUniforms) == null ? void 0 : w.u_bgColor2
        },
        We.bn_sharedUniforms
      ),
      vertexShader: No,
      fragmentShader: Bo
    }), v = new c.Mesh(new c.PlaneGeometry(2, 2), d);
    v.renderOrder = 1, i.add(v), e();
  }
  function e() {
    var x, b;
    const v = new c.PlaneGeometry(1, 1), f = new c.InstancedBufferGeometry();
    f.index = v.index, Object.keys(v.attributes).forEach((S) => {
      f.setAttribute(S, v.attributes[S]);
    }), f.instanceCount = 50;
    const h = new Float32Array(50 * 3), w = new Float32Array(50 * 3);
    for (let S = 0; S < 50; S++)
      h[S * 3] = 3 * (Math.random() * 2 - 1), h[S * 3 + 1] = Math.random() * 2 - 1, h[S * 3 + 2] = 0.5 + 0.5 * Math.random(), w[S * 3] = Math.random(), w[S * 3 + 1] = Math.random(), w[S * 3 + 2] = Math.random();
    f.setAttribute("a_instancePosition", new c.InstancedBufferAttribute(h, 3)), f.setAttribute("a_instanceRandom", new c.InstancedBufferAttribute(w, 3));
    const C = new c.ShaderMaterial({
      vertexShader: zo,
      fragmentShader: Io,
      uniforms: {
        u_time: ((x = t.sharedUniforms) == null ? void 0 : x.u_time) || { value: t.time },
        u_resolution: ((b = t.sharedUniforms) == null ? void 0 : b.u_resolution) || { value: t.resolution },
        u_size: { value: 0.01 },
        u_color: { value: new c.Color() },
        u_opacity: { value: 0 }
      },
      transparent: !0
    });
    n = new c.Mesh(f, C), n.renderOrder = 2, n.frustumCulled = !1, i.add(n);
  }
  function u(d) {
    n.material.uniforms.u_size.value = t.particlesSize, n.material.uniforms.u_color.value.set(t.particlesColor), n.material.uniforms.u_opacity.value = t.particlesOpacity;
  }
  return { init: s, container: i, update: u };
};
c.ColorManagement.enabled = !1;
const Rt = Fo();
let lt = 0, Mt = 0;
const ko = 60, Uo = 1 / ko;
function Ho(i) {
  var f, h, w;
  t.isPaused && (i *= 0), i = Math.min(i, 1 / 15), t.time += i, t.deltaTime = i, t.sharedUniforms && (t.sharedUniforms.u_time.value = t.time, t.sharedUniforms.u_deltaTime.value = i);
  const n = t.viewportWidth, s = t.viewportHeight, e = t.cameraZoom * s / 10, u = t.cameraOffsetX, d = t.cameraOffsetY;
  t.camera && (t.camera.zoom = e, t.camera.left = -n / 2 - u * n / e / 2, t.camera.right = n / 2 - u * n / e / 2, t.camera.top = s / 2 - d * s / e / 2, t.camera.bottom = -s / 2 - d * s / e / 2, t.camera.updateProjectionMatrix()), We.update(i), Tn.update(i);
  const v = t.camera;
  (f = t.orbitControls) == null || f.update(), (h = t.orbitCamera) == null || h.updateMatrix(), v && ((w = t.orbitCamera) == null || w.matrix.decompose(v.position, v.quaternion, v.scale), v.matrix.compose(v.position, v.quaternion, v.scale)), Pe.update(i), Pt.update(i), Rt.update(i), t.camera && t.scene && t.renderer && t.renderer.render(t == null ? void 0 : t.scene, t.camera);
}
function An() {
  var s;
  const i = performance.now() / 1e3, n = i - lt;
  i - Mt >= Uo && (Mt = i, Ho(n), lt = i), (s = t.renderer) == null || s.setAnimationLoop(An);
}
function Yo() {
  var n;
  t.renderer && (t.renderer.shadowMap.enabled = !0, t.renderer.shadowMap.type = c.PCFShadowMap), t.scene = new c.Scene(), t.camera = new c.OrthographicCamera(-1, 1, 1, -1, 1, 60), t.scene.add(t.camera), t.camera.position.fromArray(ce.DEFAULT_POSITION), t.orbitCamera = t.camera.clone();
  const i = t.orbitControls = new Xn(t.orbitCamera, t.orbitTarget);
  if (i.target0.fromArray(ce.DEFAULT_LOOKAT_POSITION), i.enableDamping = !0, i.enablePan = !1, i.minPolarAngle = Math.PI * 0.2, i.maxPolarAngle = Math.PI * 0.45, t.sharedUniforms) {
    const s = t.sharedUniforms.u_bgColor1.value, e = t.sharedUniforms.u_bgColor2.value;
    s.set(t.bgColor1).convertSRGBToLinear(), e.set(t.bgColor2).convertSRGBToLinear();
  }
  (n = t.renderer) == null || n.setClearColor(t.bgColor1, 1), Tn.init(), Pe.init(), Pt.init(), Rt.init(), t.scene.add(bn), t.scene.add(Rt.container), t.scene.add(Ae);
}
function Vo(i, n) {
  var u, d;
  t.viewportWidth = i, t.viewportHeight = n, t.viewportResolution.set(i, window.innerHeight);
  let s = i * ce.DPR, e = n * ce.DPR;
  if (s * e > ce.MAX_PIXEL_COUNT) {
    const v = s / e;
    e = Math.sqrt(ce.MAX_PIXEL_COUNT / v), s = Math.ceil(e * v), e = Math.ceil(e);
  }
  t.width = s, t.height = e, t.resolution.set(s, e), (u = t.camera) == null || u.updateProjectionMatrix(), (d = t.renderer) == null || d.setSize(s, e), t.canvas && (t.canvas.style.width = `${i}px`, t.canvas.style.height = `${n}px`);
}
function vn(i) {
  t.cameraOffsetX = i ? i / window.innerWidth : 0, Vo(window.innerWidth, window.innerHeight);
}
function jo(i) {
  Yo(), lt = performance.now() / 1e3, Mt = lt, window.addEventListener("resize", () => vn(i)), vn(i), An();
}
async function Qo(i, n) {
  var e;
  (e = t.renderer) != null && e.domElement || document.getElementById(i) || (await Pe.preload(), await Pt.preload(), await We.preInit(), t.renderer = new c.WebGLRenderer({ ...ce.WEBGL_OPTS }), t.renderer && (t.renderer.domElement.id = i, t.canvas = t.renderer.domElement, t.orbitTarget = t.renderer.domElement, ie.start(() => jo(n)), document.body.appendChild(t.renderer.domElement)));
}
function Zo(i) {
  var s, e, u, d, v, f;
  const n = document.getElementById(i);
  n == null || n.remove(), (e = (s = t.renderer) == null ? void 0 : s.domElement) == null || e.remove(), (d = (u = t.renderer) == null ? void 0 : u.state) == null || d.reset(), (v = t.renderer) == null || v.resetState(), t.canvas = void 0, t.orbitTarget = void 0, (f = t.renderer) == null || f.dispose(), t.renderer = void 0, lo();
}
async function $o(i) {
  if (!document.getElementById(i)) return;
  const s = {
    [M.FAILED]: yn,
    [M.COMPLETED]: Ct,
    [M.REPLAY]: Ct,
    [M.STOP]: St
  }, e = W === "not-started", u = I !== null, d = 1e3 * 3.5, v = (s[I] || 1) * 1e3 + d, f = St * 1e3 * 2, h = u ? v : d, w = u ? f + v : f;
  e || setTimeout(() => Xo("stop"), w), setTimeout(() => Zo(i), e ? h : h + w);
}
function Xo(i, n = !1) {
  q.set(i, n);
}
function Ko(i) {
  for (const n of i)
    t[n.property] = n.value;
}
export {
  I as animationResult,
  W as animationStatus,
  be as animationStatusIndex,
  Qo as loadTowerAnimation,
  $o as removeTowerAnimation,
  Ko as setAnimationProperties,
  Xo as setAnimationState
};
