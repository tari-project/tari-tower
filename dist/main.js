var Yn=Object.defineProperty;var Vn=(i,n,s)=>n in i?Yn(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s;var b=(i,n,s)=>Vn(i,typeof n!="symbol"?n+"":n,s);import*as l from"three";import{EventDispatcher as Xn,Vector3 as re,MOUSE as xe,TOUCH as Ae,Quaternion as Vt,Spherical as Xt,Vector2 as K}from"three";import ae from"min-signal";const Qt={type:"change"},mt={type:"start"},Wt={type:"end"};class Qn extends Xn{constructor(n,s){super(),s===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),s===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=n,this.domElement=s,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new re,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=Math.PI*.2,this.maxPolarAngle=Math.PI*.45,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.15,this.enableZoom=!1,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=.5,this.enablePan=!1,this.panSpeed=1,this.screenSpacePanning=!0,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xe.ROTATE,MIDDLE:xe.DOLLY,RIGHT:xe.PAN},this.touches={ONE:Ae.ROTATE,TWO:Ae.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.scale=1,this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.scale=1,e.object.updateProjectionMatrix(),e.dispatchEvent(Qt),e.update(),m=u.NONE},this.update=function(){const o=new re,S=new Vt().setFromUnitVectors(n.up,new re(0,1,0)),F=S.clone().invert(),U=new re,W=new Vt,ge=2*Math.PI;return function(){const Ht=e.object.position;o.copy(Ht).sub(e.target),o.applyQuaternion(S),f.setFromVector3(o),e.autoRotate&&m===u.NONE&&L(_()),e.enableDamping?(f.theta+=h.theta*e.dampingFactor,f.phi+=h.phi*e.dampingFactor):(f.theta+=h.theta,f.phi+=h.phi);let $=e.minAzimuthAngle,ee=e.maxAzimuthAngle;isFinite($)&&isFinite(ee)&&($<-Math.PI?$+=ge:$>Math.PI&&($-=ge),ee<-Math.PI?ee+=ge:ee>Math.PI&&(ee-=ge),$<=ee?f.theta=Math.max($,Math.min(ee,f.theta)):f.theta=f.theta>($+ee)/2?Math.max($,f.theta):Math.min(ee,f.theta)),f.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,f.phi)),f.makeSafe();let Yt=e.enableDamping?(e.scale-1)*e.dampingFactor+1:e.scale;return f.radius*=Yt,f.radius=Math.max(e.minDistance,Math.min(e.maxDistance,f.radius)),e.enableDamping===!0?e.target.addScaledVector(w,e.dampingFactor):e.target.add(w),o.setFromSpherical(f),o.applyQuaternion(F),Ht.copy(e.target).add(o),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,w.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),w.set(0,0,0)),e.scale=e.scale/Yt,E||U.distanceToSquared(e.object.position)>v||8*(1-W.dot(e.object.quaternion))>v?(e.dispatchEvent(Qt),U.copy(e.object.position),W.copy(e.object.quaternion),E=!1,!0):!1}}();const e=this,u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let m=u.NONE;const v=1e-6,f=new Xt,h=new Xt,w=new re;let E=!1;const p=new K,T=new K,y=new K,R=new K,z=new K,A=new K,x=new K,g=new K,d=new K,r=[],c={};function _(){return 2*Math.PI/60/60*e.autoRotateSpeed}function C(){return Math.pow(.95,e.zoomSpeed)}function L(o){h.theta-=o}function Z(o){h.phi-=o}const Q=function(){const o=new re;return function(F,U){o.setFromMatrixColumn(U,0),o.multiplyScalar(-F),w.add(o)}}(),j=function(){const o=new re;return function(F,U){e.screenSpacePanning===!0?o.setFromMatrixColumn(U,1):(o.setFromMatrixColumn(U,0),o.crossVectors(e.object.up,o)),o.multiplyScalar(F),w.add(o)}}(),Oe=function(){const o=new re;return function(F,U){const W=e.domElement;if(e.object.isPerspectiveCamera){const ge=e.object.position;o.copy(ge).sub(e.target);let Ke=o.length();Ke*=Math.tan(e.object.fov/2*Math.PI/180),Q(2*F*Ke/W.clientHeight,e.object.matrix),j(2*U*Ke/W.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(Q(F*(e.object.right-e.object.left)/e.object.zoom/W.clientWidth,e.object.matrix),j(U*(e.object.top-e.object.bottom)/e.object.zoom/W.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function ve(o){e.object.isPerspectiveCamera?e.scale/=o:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*o)),e.object.updateProjectionMatrix(),E=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function qe(o){e.object.isPerspectiveCamera?e.scale*=o:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/o)),e.object.updateProjectionMatrix(),E=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function me(o){p.set(o.clientX,o.clientY)}function Cn(o){x.set(o.clientX,o.clientY)}function Ot(o){R.set(o.clientX,o.clientY)}function Sn(o){T.set(o.clientX,o.clientY),y.subVectors(T,p).multiplyScalar(e.rotateSpeed);const S=e.domElement;L(2*Math.PI*y.x/S.clientHeight),Z(2*Math.PI*y.y/S.clientHeight),p.copy(T),e.update()}function En(o){g.set(o.clientX,o.clientY),d.subVectors(g,x),d.y>0?ve(C()):d.y<0&&qe(C()),x.copy(g),e.update()}function Mn(o){z.set(o.clientX,o.clientY),A.subVectors(z,R).multiplyScalar(e.panSpeed),Oe(A.x,A.y),R.copy(z),e.update()}function Rn(o){o.deltaY<0?qe(C()):o.deltaY>0&&ve(C()),e.update()}function Lt(){if(r.length===1)p.set(r[0].pageX,r[0].pageY);else{const o=.5*(r[0].pageX+r[1].pageX),S=.5*(r[0].pageY+r[1].pageY);p.set(o,S)}}function Nt(){if(r.length===1)R.set(r[0].pageX,r[0].pageY);else{const o=.5*(r[0].pageX+r[1].pageX),S=.5*(r[0].pageY+r[1].pageY);R.set(o,S)}}function zt(){const o=r[0].pageX-r[1].pageX,S=r[0].pageY-r[1].pageY,F=Math.sqrt(o*o+S*S);x.set(0,F)}function Dn(){e.enableZoom&&zt(),e.enablePan&&Nt()}function On(){e.enableZoom&&zt(),e.enableRotate&&Lt()}function It(o){if(r.length===1)T.set(o.pageX,o.pageY);else{const F=ut(o),U=.5*(o.pageX+F.x),W=.5*(o.pageY+F.y);T.set(U,W)}y.subVectors(T,p).multiplyScalar(e.rotateSpeed);const S=e.domElement;L(2*Math.PI*y.x/S.clientHeight),Z(2*Math.PI*y.y/S.clientHeight),p.copy(T)}function Bt(o){if(r.length===1)z.set(o.pageX,o.pageY);else{const S=ut(o),F=.5*(o.pageX+S.x),U=.5*(o.pageY+S.y);z.set(F,U)}A.subVectors(z,R).multiplyScalar(e.panSpeed),Oe(A.x,A.y),R.copy(z)}function Ft(o){const S=ut(o),F=o.pageX-S.x,U=o.pageY-S.y,W=Math.sqrt(F*F+U*U);g.set(0,W),d.set(0,Math.pow(g.y/x.y,e.zoomSpeed)),ve(d.y),x.copy(g)}function Ln(o){e.enableZoom&&Ft(o),e.enablePan&&Bt(o)}function Nn(o){e.enableZoom&&Ft(o),e.enableRotate&&It(o)}function zn(o){e.enabled!==!1&&(r.length===0&&(e.domElement.setPointerCapture(o.pointerId),e.domElement.addEventListener("pointermove",kt),e.domElement.addEventListener("pointerup",Ut)),Hn(o),o.pointerType==="touch"?Un(o):Bn(o))}function kt(o){e.enabled!==!1&&(o.pointerType==="touch"?Zn(o):Fn(o))}function Ut(o){Zt(o),r.length===0&&(e.domElement.releasePointerCapture(o.pointerId),e.domElement.removeEventListener("pointermove",kt),e.domElement.removeEventListener("pointerup",Ut)),e.dispatchEvent(Wt),m=u.NONE}function In(o){Zt(o)}function Bn(o){let S;switch(o.button){case 0:S=e.mouseButtons.LEFT;break;case 1:S=e.mouseButtons.MIDDLE;break;case 2:S=e.mouseButtons.RIGHT;break;default:S=-1}switch(S){case xe.DOLLY:if(e.enableZoom===!1)return;Cn(o),m=u.DOLLY;break;case xe.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(e.enablePan===!1)return;Ot(o),m=u.PAN}else{if(e.enableRotate===!1)return;me(o),m=u.ROTATE}break;case xe.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(e.enableRotate===!1)return;me(o),m=u.ROTATE}else{if(e.enablePan===!1)return;Ot(o),m=u.PAN}break;default:m=u.NONE}m!==u.NONE&&e.dispatchEvent(mt)}function Fn(o){if(e.enabled!==!1)switch(m){case u.ROTATE:if(e.enableRotate===!1)return;Sn(o);break;case u.DOLLY:if(e.enableZoom===!1)return;En(o);break;case u.PAN:if(e.enablePan===!1)return;Mn(o);break}}function kn(o){e.enabled===!1||e.enableZoom===!1||m!==u.NONE||(e.dispatchEvent(mt),Rn(o),e.dispatchEvent(Wt))}function Un(o){switch(jt(o),r.length){case 1:switch(e.touches.ONE){case Ae.ROTATE:if(e.enableRotate===!1)return;Lt(),m=u.TOUCH_ROTATE;break;case Ae.PAN:if(e.enablePan===!1)return;Nt(),m=u.TOUCH_PAN;break;default:m=u.NONE}break;case 2:switch(e.touches.TWO){case Ae.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Dn(),m=u.TOUCH_DOLLY_PAN;break;case Ae.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;On(),m=u.TOUCH_DOLLY_ROTATE;break;default:m=u.NONE}break;default:m=u.NONE}m!==u.NONE&&e.dispatchEvent(mt)}function Zn(o){switch(jt(o),m){case u.TOUCH_ROTATE:if(e.enableRotate===!1)return;It(o),e.update();break;case u.TOUCH_PAN:if(e.enablePan===!1)return;Bt(o),e.update();break;case u.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ln(o),e.update();break;case u.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Nn(o),e.update();break;default:m=u.NONE}}function jn(o){e.enabled!==!1&&o.preventDefault()}function Hn(o){r.push(o)}function Zt(o){delete c[o.pointerId];for(let S=0;S<r.length;S++)if(r[S].pointerId===o.pointerId){r.splice(S,1);return}}function jt(o){let S=c[o.pointerId];S===void 0&&(S=new K,c[o.pointerId]=S),S.set(o.pageX,o.pageY)}function ut(o){const S=o.pointerId===r[0].pointerId?r[1]:r[0];return c[S.pointerId]}e.domElement.addEventListener("contextmenu",jn),e.domElement.addEventListener("pointerdown",zn),e.domElement.addEventListener("pointercancel",In),e.domElement.addEventListener("wheel",kn,{passive:!1}),this.update()}}const Qe="",Wn=Math.min(2,window.devicePixelRatio||1),Gn=!0,qn=2560*1440,Kn=12,Jn=!0,$n=!1,eo=!1,to=[-20,18,20],no=[0,0,0],oo={antialias:!0,alpha:!1},ce={DPR:Wn,USE_PIXEL_LIMIT:Gn,MAX_PIXEL_COUNT:qn,DEFAULT_POSITION:to,DEFAULT_LOOKAT_POSITION:no,WEBGL_OPTS:oo,FREE_BLOCKS_COUNT:Kn,AUTO_RESTART:Jn,AUTO_START:$n,SHOW_BLOCK:eo},Je=(i,n)=>Math.hypot(i,n);class io{constructor(n=0,s=0,e=0){b(this,"id",0);b(this,"row",0);b(this,"col",0);b(this,"distance",Je(this.row,this.col));b(this,"MAX_DISTANCE",Je(V,V));b(this,"priority",this.MAX_DISTANCE-this.distance);b(this,"isMain",this.row===0&&this.col===0);b(this,"isBorder",Math.abs(this.row)===2||Math.abs(this.col)===2);b(this,"isOccupied",!1);b(this,"willBeOccupied",!1);b(this,"activeRatio",0);b(this,"neighbours",null);b(this,"reachableNeighbours",null);b(this,"prioritySortedReachableNeighbours",null);b(this,"randomDelay",Math.random()*.5+(this.MAX_DISTANCE-this.priority)*.5);b(this,"loseAnimationPositionArray",[]);b(this,"loseAnimationOrientArray",[]);this.id=n,this.row=s,this.col=e,this.distance=Je(s,e),this.MAX_DISTANCE=Je(V,V),this.priority=this.MAX_DISTANCE-this.distance,this.isMain=s===0&&e===0,this.isBorder=Math.abs(s)===2||Math.abs(e)===2,this.isOccupied=!1,this.willBeOccupied=!1,this.activeRatio=0,this.neighbours=null,this.reachableNeighbours=null,this.prioritySortedReachableNeighbours=null,this.randomDelay=Math.random()*.5+(this.MAX_DISTANCE-this.priority)*.5}init(){var n;this.reachableNeighbours=((n=this.neighbours)==null?void 0:n.filter(s=>(s==null?void 0:s.row)===this.row||(s==null?void 0:s.col)===this.col))||null,this._sortPriorityNeighbours()}_sortPriorityNeighbours(){this.prioritySortedReachableNeighbours=this.reachableNeighbours?[...this.reachableNeighbours].sort((n,s)=>((n==null?void 0:n.priority)||0)-((s==null?void 0:s.priority)||0)):null}shuffleReachableNeighbours(){if(this.reachableNeighbours)for(let n=this.reachableNeighbours.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[this.reachableNeighbours[n],this.reachableNeighbours[s]]=[this.reachableNeighbours[s],this.reachableNeighbours[n]]}this._sortPriorityNeighbours()}preUpdate(n){this.activeRatio=0}reset(){this.isOccupied=!1,this.willBeOccupied=!1,this.activeRatio=0}update(n){}}const Y=5,ne=Y+2,V=Math.floor(Y/2),q=Y*Y,ao=ne*ne;let Be=null,oe=[];const ro=()=>{function i(){oe=Array.from({length:Y},(f,h)=>Array.from({length:Y},(w,E)=>{const p=h-V,T=E-V;return new io(h*Y+E,p,T)})),oe.forEach((f,h)=>f.forEach((w,E)=>{w.neighbours=e(h-V,E-V),w.init()})),Be=n(0,0)}function n(f,h){var w;return((w=oe[f+V])==null?void 0:w[h+V])||null}function s(){const f=oe.flat().filter(h=>!h.isOccupied);return f.length?f[Math.floor(Math.random()*f.length)]:null}function e(f,h){return[-1,0,1].flatMap(w=>[-1,0,1].map(E=>w===0&&E===0?null:n(f+w,h+E)).filter(Boolean))}function u(){oe.flat().forEach(f=>f.reset())}function m(f){oe.flat().forEach(h=>h.preUpdate(f))}function v(f){oe.flat().forEach(h=>h.update(f))}return{init:i,getTile:n,getRandomFreeTile:s,reset:u,preUpdate:m,update:v}},he=ro(),xn=new l.Vector2,An=new l.Vector2,so={u_time:{value:0},u_deltaTime:{value:1},u_resolution:{value:xn},u_viewportResolution:{value:An},u_bgColor1:{value:new l.Color},u_bgColor2:{value:new l.Color}},Gt=q-5,lo={bgColor1:"#ffffff",bgColor2:"#d0d0d0",neutralColor:"#ffffff",mainColor:"#0096ff",successColor:"#00c881",failColor:"#ca0101",particlesColor:"#505050",goboIntensity:.45,particlesOpacity:.75,particlesSize:.01},wn={canvasId:void 0,time:0,deltaTime:0,width:0,height:0,viewportWidth:0,viewportHeight:0,camera:void 0,orbitCamera:void 0,cameraZoom:1,cameraOffsetX:0,cameraOffsetY:0,renderer:void 0,scene:void 0,postprocessing:!1,resolution:xn,viewportResolution:An,canvas:null,orbitTarget:null,sharedUniforms:so,isPaused:!1,showVisual:ce.SHOW_BLOCK,loadList:[],animationSpeed:1.1,activeBlocksCount:0,maxFreeBlocksCount:Gt,lightPositionX:-2,lightPositionY:6,lightPositionZ:-4,lightCameraSize:4.5,lightCameraBias:.005,lightCameraNear:3,lightCameraFar:16,errorBlock:null,errorBlockMaxLifeCycle:4,minSpawnedBlocksForTheErrorBlock:Gt-2,...lo};let t=wn;function co(){t=wn}const uo="/assets/BASE.buf",mo="data:application/octet-stream;base64,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",fo="/assets/COIN.buf",ho="/assets/COIN_PLACEMENT.buf",po="/assets/LOSE_ANIMATION.buf",vo="/assets/gobo.jpg",go="/assets/LDR_RGB1_0.png",xo="/assets/matcap_gold.jpg",qt={"models/BASE.buf":uo,"models/BOX.buf":mo,"models/COIN.buf":fo,"models/COIN_PLACEMENT.buf":ho,"models/LOSE_ANIMATION.buf":po,"textures/gobo.jpg":vo,"textures/LDR_RGB1_0.png":go,"textures/matcap_gold.jpg":xo},Ao=()=>{let i=[],n=0,s=null;function e(h,w){console.debug(h);const E=qt[h];console.debug(E),i.push(async()=>{try{const p=await fetch(E);console.debug(p);const T=await p.arrayBuffer(),y=new Uint32Array(T,0,1)[0],R=JSON.parse(new TextDecoder().decode(new Uint8Array(T,4,y))),{vertexCount:z,indexCount:A,attributes:x}=R;let g=4+y;const d=new l.BufferGeometry,r={};x.forEach(c=>{const{id:_,componentSize:C,storageType:L,needsPack:Z,packedComponents:Q}=c,j=_==="indices"?A:z,Oe=window[L],ve=new Oe(T,g,j*C),qe=Oe.BYTES_PER_ELEMENT;let me;Z?me=u(ve,j,C,Q,L):(r[_]=g,me=ve),_==="indices"?d.setIndex(new l.BufferAttribute(me,1)):d.setAttribute(_,new l.BufferAttribute(me,C)),g+=j*C*qe}),w&&w(d),f()}catch(p){console.error("Error loading buffer:",p)}})}function u(h,w,E,p,T){const y=p.length,R=T.indexOf("Int")===0,z=1<<h.BYTES_PER_ELEMENT*8,A=R?z*.5:0,x=1/z,g=new Float32Array(w*E);for(let d=0,r=0;d<w;d++)for(let c=0;c<y;c++){const{delta:_,from:C}=p[c];g[r]=(h[r]+A)*x*_+C,r++}return g}function m(h,w){console.debug(`filename= ${h}`);const E=qt[h];console.debug(E),i.push(()=>{new l.TextureLoader().load(E,p=>{var T;p.minFilter=l.LinearMipMapLinearFilter,p.magFilter=l.LinearFilter,p.generateMipmaps=!0,p.anisotropy=((T=t.renderer)==null?void 0:T.capabilities.getMaxAnisotropy())||1,p.flipY=!0,w&&w(p),f()},void 0,p=>console.error("Error loading texture:",p))})}function v(h){n=0,s=h,i.forEach(w=>w())}function f(){n++,n===i.length&&(i=[],s&&s())}return{loadBuf:e,loadTexture:m,start:v,list:i,loadedCount:n,onLoadCallback:s}},ie=Ao();class wo{constructor(){b(this,"PI",Math.PI)}clamp(n,s,e){return n<s?s:n>e?e:n}mix(n,s,e){return n+(s-n)*e}cUnMix(n,s,e){return this.clamp((e-n)/(s-n),0,1)}saturate(n){return this.clamp(n,0,1)}fit(n,s,e,u,m,v){return n=this.cUnMix(s,e,n),v&&(n=v(n)),u+n*(m-u)}}const P=new wo,_o=()=>{function i(m){return(m*=2)<1?.5*m*m*m*m:-.5*((m-=2)*m*m*m-2)}function n(m){return Math.sin(m*Math.PI/2)}function s(m){return m*m*((1.70158+1)*m-1.70158)}function e(m,v=1.70158){return--m*m*((v+1)*m+v)+1}function u(m){const v=2.5949095;return(m*=2)<1?.5*m*m*((v+1)*m-v):.5*((m-=2)*m*((v+1)*m+v)+2)}return{quartInOut:i,sineOut:n,backIn:s,backOut:e,backInOut:u}};function To(i,n,s,e,u){if(i===0)return 0;if(i===1)return 1;function m(h,w,E,p,T){const y=3*(E-w),R=3*(p-E)-y;return(((T-w-y-R)*h+R)*h+y)*h+w}function v(h,w,E,p=1e-6){let T=0,y=1,R=h;for(;T<y;){const z=m(R,0,w,E,1);if(Math.abs(z-h)<p)return R;z<h?T=R:y=R,R=(T+y)/2}return R}const f=v(i,n,e);return m(f,0,s,u,1)}function be(i){return To(i,.3,0,0,1)}const Le=_o(),bo=`uniform sampler2D u_blueNoiseTexture;
uniform vec2 u_blueNoiseTexelSize;
uniform vec2 u_blueNoiseCoordOffset;

vec3 getBlueNoise (vec2 coord) {
	return texture2D(u_blueNoiseTexture, coord * u_blueNoiseTexelSize + u_blueNoiseCoordOffset).rgb;
}
`,yo=()=>{const i={u_blueNoiseTexture:{value:null},u_blueNoiseTexelSize:{value:null},u_blueNoiseCoordOffset:{value:new l.Vector2}},n=128;async function s(){ie.loadTexture(`${Qe+"textures"}/LDR_RGB1_0.png`,u=>{u.generateMipmaps=!1,u.minFilter=u.magFilter=l.NearestFilter,u.wrapS=u.wrapT=l.RepeatWrapping,u.needsUpdate=!0,i.u_blueNoiseTexture.value=u,i.u_blueNoiseTexelSize.value=new l.Vector2(1/n,1/n)}),l.ShaderChunk.getBlueNoise=bo}function e(u){i==null||i.u_blueNoiseCoordOffset.value.set(Math.random(),Math.random())}return{update:e,preInit:s,TEXTURE_SIZE:n,bn_sharedUniforms:i}},Ge=yo(),We=new ae,Po=new ae,Co=new ae,So=new ae,_t=new ae,Tt=new ae,bt=new ae,Eo=new ae,Mo=new ae;var D=(i=>(i.NOT_STARTED="not-started",i.STARTED="started",i.FREE="free",i.RESULT="result",i.RESULT_ANIMATION="result_animation",i.RESTART_ANIMATION="restart_animation",i.RESTART="restart",i))(D||{}),M=(i=>(i.NONE="none",i.PAUSE="pause",i.STOP="stop",i.COMPLETED="completed",i.FAILED="failed",i.REPLAY="replay",i))(M||{}),ue=(i=>(i[i.ONE=1]="ONE",i[i.TWO=2]="TWO",i[i.THREE=3]="THREE",i))(ue||{});const Ro=[D.NOT_STARTED,D.RESTART_ANIMATION,D.RESTART,D.STARTED],at=Object.values(D),Do=[M.FAILED,M.COMPLETED];let ye=0,G=at[ye],Fe=!0,Kt=!1,Re=!1,fe=!1,le=!1,_n=!1,yt=!1,Pt=!1,rt=!1,st=!1,B=M.NONE;const dt=[];let Jt=ue.ONE;const Oo=()=>{function i(){if(t.errorBlock&&(t.errorBlock.isErrorBlockFalling||t.errorBlock.errorLifeCycle<t.errorBlockMaxLifeCycle))return;Kt&&w(),fe&&x();const c=dt.shift();c==null||c()}function n(){Fe=G===D.NOT_STARTED,Kt=G===D.STARTED,Re=G===D.FREE,fe=G===D.RESULT,le=G===D.RESULT_ANIMATION,_n=G===D.RESTART,yt=(fe||le)&&B===M.REPLAY,Pt=(fe||le)&&B===M.COMPLETED,rt=(fe||le)&&B===M.FAILED,st=(fe||le)&&B===M.STOP}function s(c,_=!1,C=!1){if(!t.showVisual||!t.canvas)return!1;C&&ye===0&&(ye=2);const L=at.indexOf(c);return(ye+1)%at.length===L?(ye=L,G=at[ye],_||(n(),We.dispatch(G,B)),!0):!1}function e({status:c,result:_,animationStyle:C}){s(c,!0,_===M.REPLAY)&&(t.errorBlock&&!t.errorBlock.isErrorBlockFalling&&(t.errorBlock.preventErrorBlockFallAnimation(),t.errorBlock=null),B=_,Jt=C,n(),We.dispatch(G,B,Jt))}function u(c,_=!1){var Z,Q;const C={start:()=>h(),free:()=>w(),pause:()=>E(),resume:()=>p(),stop:()=>T(),fail:()=>A(),resultAnimation:()=>x(),restartAnimation:()=>g(),restart:()=>d(),showVisual:()=>m()},L={success:j=>y(j),success2:j=>R(j),success3:j=>z(j)};(Z=C[c])==null||Z.call(C),(Q=L[c])==null||Q.call(L,_)}function m(){t.showVisual=!0}function v({status:c,result:_=null,animationStyle:C=null}){var L;if(t.errorBlock&&((L=t.errorBlock)==null?void 0:L.errorFallAnimationTime)<1){const Z=O==null?void 0:O.find(Q=>{var j;return(Q==null?void 0:Q.id)===((j=t.errorBlock)==null?void 0:j.id)});Z&&(Z.isErrorBlock=!1,De.resetBlockFromLogicBlock(Z)),t.errorBlock=null}dt.push(()=>_?e({status:c,result:_,animationStyle:C}):s(c))}function f(){v({status:D.NOT_STARTED,result:M.NONE})}function h(){v({status:D.STARTED})}function w(){v({status:D.FREE})}function E(){t.isPaused=!0}function p(){t.isPaused=!1}function T(){v({status:D.RESULT,result:M.STOP})}function y(c=!1){const _=c&&Fe?M.REPLAY:M.COMPLETED;v({status:D.RESULT,result:_,animationStyle:ue.ONE})}function R(c=!1){const _=c&&Fe?M.REPLAY:M.COMPLETED;v({status:D.RESULT,result:_,animationStyle:ue.TWO})}function z(c=!1){const _=c&&Fe?M.REPLAY:M.COMPLETED;v({status:D.RESULT,result:_,animationStyle:ue.THREE})}function A(){v({status:D.RESULT,result:M.FAILED})}function x(){v({status:D.RESULT_ANIMATION})}function g(){v({status:D.RESTART_ANIMATION})}function d(){dt.push(()=>{s(D.RESTART)&&So.dispatch()})}function r(){n()}return{init:r,updateAfterCycle:i,set:u,showVisual:m,reset:f,setStart:h,setRestartAnimation:g,setRestart:d}},X=Oo();class $t{constructor(n){b(this,"id",-1);b(this,"isMoving",!1);b(this,"hasBeenSpawned",!1);b(this,"hasAnimationEnded",!1);b(this,"hasBeenEvaluated",!1);b(this,"currentTile",null);b(this,"targetTile",null);b(this,"moveAnimationRatio",0);b(this,"spawnAnimationRatio",0);b(this,"spawnAnimationRatioUnclamped",-Math.random());b(this,"easedAnimationRatio",0);b(this,"randomVector",{x:Math.random()-.5,y:Math.random()-.5});b(this,"lifeCycle",0);b(this,"easingFunction",null);b(this,"errorLifeCycle",0);b(this,"isErrorBlock",!1);b(this,"errorPreFallAnimationTime",0);b(this,"errorPreFallAnimationTimeScale",0);b(this,"errorFallAnimationTime",0);b(this,"isErrorBlockFalling",!1);b(this,"skipFallAnimation",!1);this.id=n,this.init()}init(){this._setNewEasingFunction()}_setNewEasingFunction(){const n=Math.random(),s=.25;this.easingFunction=e=>be(P.fit(e,n*s,n*s+(1-s),0,1))}updateTile(){this.currentTile&&(this.currentTile.isOccupied=!0,this.currentTile.willBeOccupied=!1)}_findBestTile(n,s){return n.find(e=>{var u;return e.isOccupied||e.willBeOccupied||e.isMain?!1:s||(((u=this.currentTile)==null?void 0:u.priority)??0)>=e.priority})}moveToNextTile(n=!1,s=0){if(this.hasBeenEvaluated=!0,this.moveAnimationRatio=-s*(this.isErrorBlock?0:1),!this.currentTile)return;if(this.isErrorBlock){this.isMoving=!0,this.targetTile=this.currentTile;return}this.currentTile.shuffleReachableNeighbours();const e=n?this.currentTile.reachableNeighbours:this.currentTile.prioritySortedReachableNeighbours,u=this._findBestTile(e,n);u&&(!this.currentTile.isMain||Math.random()<=.8)?(this.targetTile=u,this.targetTile&&(this.targetTile.willBeOccupied=!0),this.isMoving=!0):this.hasAnimationEnded=!0}resetAfterCycle(){var n;this.hasBeenEvaluated=!1,this.hasAnimationEnded=!1,this.moveAnimationRatio=0,this.easedAnimationRatio=0,this.isMoving=!1,this.lifeCycle++,this.isErrorBlock&&!this.skipFallAnimation&&(this.errorLifeCycle++,this.isErrorBlockFalling=this.errorLifeCycle>=t.errorBlockMaxLifeCycle-1),(n=this.currentTile)!=null&&n.isBorder&&!t.errorBlock&&Math.random()<.5&&t.activeBlocksCount>=t.minSpawnedBlocksForTheErrorBlock&&Re&&(t.errorBlock=this,this.isErrorBlock=!0),this._setNewEasingFunction(),this.updateTile()}reset(n=!1){var s,e;this.isErrorBlock&&(this.errorLifeCycle=0,this.isErrorBlock=!1,(s=this.currentTile)==null||s.reset(),(e=this.targetTile)==null||e.reset(),this.errorFallAnimationTime=0,this.isErrorBlockFalling=!1,this.errorPreFallAnimationTime=0,this.errorPreFallAnimationTimeScale=0,this.errorFallAnimationTime=0,this.skipFallAnimation=!1),this.id=n?this.id:-1,this.isMoving=!1,this.hasBeenSpawned=!1,this.hasAnimationEnded=!1,this.hasBeenEvaluated=!1,this.currentTile=null,this.targetTile=null,this.moveAnimationRatio=0,this.spawnAnimationRatio=0,this.spawnAnimationRatioUnclamped=-Math.random(),this.easedAnimationRatio=0,this.lifeCycle=0}preventErrorBlockFallAnimation(){this.skipFallAnimation=!0}_onMovementEnd(){this.moveAnimationRatio=1,this.currentTile&&(this.currentTile.isOccupied=!1),this.currentTile=this.targetTile,this.targetTile=null,this.hasAnimationEnded=!0,this.updateTile()}_updateSpawnAnimation(n){this.spawnAnimationRatioUnclamped+=.75*t.animationSpeed*n,this.spawnAnimationRatio=Math.max(0,Math.min(1,this.spawnAnimationRatioUnclamped)),this.spawnAnimationRatio===1&&(this.hasBeenSpawned=!0)}_updateMovement(n){var s;(this.isMoving&&!this.hasAnimationEnded||le)&&(this.moveAnimationRatio=Math.min(1,this.moveAnimationRatio+t.animationSpeed*n*(this.isErrorBlock?.7:1)),this.easedAnimationRatio=((s=this.easingFunction)==null?void 0:s.call(this,Math.max(0,this.moveAnimationRatio)))||0,this.easedAnimationRatio===1&&(Re||fe)&&this._onMovementEnd())}_updateTileRatios(){const n=Math.max(0,Math.min(1,this.hasBeenSpawned?this.easedAnimationRatio:this.spawnAnimationRatio));this.currentTile&&(this.currentTile.activeRatio=this.hasBeenSpawned?this.targetTile?1-n:1:this.spawnAnimationRatio),this.targetTile&&(this.targetTile.activeRatio=n),this.isErrorBlock&&this.isErrorBlockFalling&&(this.currentTile&&(this.currentTile.activeRatio=0),this.targetTile&&(this.targetTile.activeRatio=0))}update(n){this.hasBeenSpawned?this._updateMovement(n):this._updateSpawnAnimation(n),this.isErrorBlockFalling&&(this.errorFallAnimationTime=this.errorFallAnimationTime+3*t.animationSpeed*n),this.isErrorBlock&&(this.errorPreFallAnimationTimeScale=this.errorPreFallAnimationTimeScale+3*n,this.errorPreFallAnimationTimeScale=Math.min(20,this.errorPreFallAnimationTimeScale),this.errorPreFallAnimationTime=this.errorPreFallAnimationTime+this.errorPreFallAnimationTimeScale*n,this.skipFallAnimation&&(this.errorPreFallAnimationTime=0,this.errorPreFallAnimationTimeScale=0)),this._updateTileRatios()}}let ft=!1,de=0;const Ct=2.5;let Ye=0,Ve=0;const Lo=()=>{function i(){We.add((e,u)=>{e===D.RESULT&&u===M.STOP&&(ft=!0)})}function n(){de=0,Ve=0,Ye=0,ft=!1}function s(e){de+=(ft?1:0)*e/Ct,de=P.clamp(de,0,1),Ye=P.fit(de,0,.5,0,2.5),Ve=P.fit(de,.4,.65,0,1),de>=1&&(bt.dispatch(),n())}return{init:i,update:s,resetRatios:n}},en=Lo();let ht=!1,te=0;const Tn=3.5;let Ce=0,pe=0,lt=0,Xe=0;const No=()=>{function i(){We.add((e,u)=>{e===D.RESULT&&u===M.FAILED&&(ht=!0)})}function n(){te=0,Ce=0,pe=0,Xe=0,lt=0,ht=!1}function s(e){te+=(ht?1:0)*e/Tn,te=P.clamp(te,0,1),Ce=P.fit(te,0,.3,0,1),pe=P.fit(te,.35,.65,0,1),lt=P.fit(te,.3,.55,0,2.5),Xe=P.fit(te,.6,.8,0,1),te>=1&&(_t.dispatch(),n())}return{init:i,resetRatios:n,update:s}},tn=No();let $e,N=0;const St=6.5;let ke=0,Ue=0,Se=0,Ee=0,Me=0,Ze=0,je=1;const zo=()=>{function i(){We.add((f,h,w)=>{f===D.RESULT&&(h===M.COMPLETED||h===M.REPLAY)&&n(w)})}function n(f){$e=f}function s(){N=0,ke=0,Ue=0,Se=0,Ee=0,Me=0,Ze=0,je=1,$e=null}function e(){je=1,ke=0,Ue=0,Se=P.fit(N,.2,.49,0,1.2),Me=P.fit(N,.45,.55,0,1),Ze=P.fit(N,.45,.7,0,1),Ee=P.fit(N,.55,1,0,1)}function u(){je=1.5,Ue=0,ke=P.fit(N,.1,.45,0,1),Se=P.fit(N,.15,.49,0,1.2),Me=P.fit(N,.45,.55,0,1),Ze=P.fit(N,.45,.7,0,1),Ee=P.fit(N,.55,1,0,1)}function m(){je=2,ke=P.fit(N,.1,.5,0,1),Ue=P.fit(N,.2,.51,0,1),Se=P.fit(N,.2,.49,0,1.2),Me=P.fit(N,.45,.55,0,1),Ze=P.fit(N,.45,.7,0,1),Ee=P.fit(N,.6,1,0,1)}function v(f){switch(N+=($e?1:0)*f/St,N=P.clamp(N,0,1),$e){case ue.ONE:e();break;case ue.TWO:u();break;case ue.THREE:m();break}N>=1&&(Tt.dispatch(),s())}return{init:i,update:v,resetRatios:s}},nn=zo();let Et=0,O=[],I=null,pt=0,He=0;const Io=()=>{function i(){n()||(Pt||yt?s():e(),!(O.length===t.maxFreeBlocksCount&&Re)&&Po.dispatch())}function n(){return rt||B==="failed"||st||O.length>=q||(Be==null?void 0:Be.isOccupied)&&!Pt&&!yt}function s(){let p=q-t.activeBlocksCount;t.errorBlock&&(t.errorBlock.currentTile&&(t.errorBlock.currentTile.isOccupied=!1),p+=1);for(let T=0;T<p;T++){const y=he.getRandomFreeTile();if(y){const R=new $t(O.length);R.currentTile=y,R.init(),R.updateTile(),O=[R,...O]}}}function e(){var R;let p=null;const T=!!(t.errorBlock&&t.errorBlock.errorLifeCycle>=t.errorBlockMaxLifeCycle),y=!!(O.length<t.maxFreeBlocksCount&&Re);T?((R=t.errorBlock)==null||R.reset(!0),De.resetBlockFromLogicBlock(t.errorBlock),p=t.errorBlock,t.errorBlock=null):y&&(p=new $t(O.length),I=p),p&&(p.currentTile=Be,p.init(),p.updateTile())}function u(){X.updateAfterCycle(),!Ro.includes(G)&&(I&&(O=[I,...O],I=null),t.activeBlocksCount=O.length,!(rt||st)&&(O.forEach(p=>p.resetAfterCycle()),Co.dispatch(),pt++,i(),m()))}function m(){I!=null&&I.hasBeenSpawned&&I.moveToNextTile(Re,0);const p=pt%2===0?!0:t.activeBlocksCount<t.maxFreeBlocksCount-1;O.forEach((T,y)=>{!T.hasBeenEvaluated&&T.hasBeenSpawned&&T.moveToNextTile(p,y*.2)})}function v(){O.forEach(T=>T.reset()),De.reset(),he.reset(),O=[],I=null,pt=0;const p=Do.includes(B);X.reset(),u(),p&&X.setStart(),Tt.remove(()=>{X.setRestart(),u(),He=1}),bt.remove(()=>{X.setRestart(),v()}),_t.remove(()=>{X.setRestart(),u()})}function f(p){Et=P.saturate(Et+p*(t.showVisual?1:0)),He=P.saturate(He-p/1.5)}function h(){let p=!0;return I&&(p=!!(p&&I.hasBeenSpawned)),O.forEach(T=>{T.lifeCycle>0?p=!!(p&&T.hasBeenEvaluated&&T.hasAnimationEnded):p=p&&T.spawnAnimationRatio===1}),p||le||rt||st}function w(p){if(f(p),nn.update(p),en.update(p),tn.update(p),Fe){u();return}if(_n){v();return}le&&X.setRestartAnimation(),he.preUpdate(p),I&&I.update(p),O.forEach(y=>y.update(p)),he.update(p),h()&&u()}function E(){X.init(),nn.init(),en.init(),tn.init(),he.init(),Tt.add(()=>{X.setRestart(),u(),He=1}),bt.add(()=>{X.setRestart(),v()}),_t.add(()=>{X.setRestart(),u()})}return{init:E,update:w,reset:v}},bn=Io(),et=`#ifndef IS_BASE
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
`,on=`uniform vec3 u_lightPosition;
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
`,an=`#include <common>
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
`,Bo=Math.PI/2,we=new l.Vector3;class Fo{constructor(){b(this,"animation",0);b(this,"boardDir",new l.Vector2);b(this,"boardPos",new l.Vector2);b(this,"pos",new l.Vector3);b(this,"orient",new l.Quaternion);b(this,"showRatio",0);b(this,"spinPivot",new l.Vector3);b(this,"spinOrient",new l.Quaternion);this.animation=0,this.boardDir=new l.Vector2,this.boardPos=new l.Vector2,this.pos=new l.Vector3,this.orient=new l.Quaternion,this.showRatio=0,this.spinPivot=new l.Vector3,this.spinOrient=new l.Quaternion}reset(){this.animation=0,this.boardDir.set(0,0),this.boardPos.set(0,0),this.pos.set(0,0,0),this.orient.identity(),this.showRatio=0,this.spinPivot.set(0,0,0),this.spinOrient.identity()}update(n){this.pos.set(this.boardPos.x,0,-this.boardPos.y),this.spinPivot.set(this.boardDir.x*.5,-.5,-this.boardDir.y*.5),we.set(-this.boardDir.y,0,-this.boardDir.x),this.spinOrient.setFromAxisAngle(we,this.animation*Bo)}addsFallAnimation(n){we.set(this.boardDir.x,-n,-this.boardDir.y),this.pos.addScaledVector(we,n),we.set(this.boardDir.x*.5,0,-this.boardDir.y*.5),this.spinPivot.lerp(we,P.saturate(n))}}const Ne=2*q,k=new l.Vector2,tt=new l.Vector2,_e=new l.Vector3,rn=new l.Vector3,vt=new l.Quaternion,sn=new l.Quaternion,ln=new l.Color,nt=new l.Color,gt=new l.Color,Te=new l.Color,se=new l.Color,ot=new l.Color,Pe=new l.Object3D,H={u_lightPosition:{value:new l.Vector3(-2,6,-4)},u_goboTexture:{value:null},u_goboIntensity:{value:.45},u_infoTexture:{value:null},u_infoTextureLinear:{value:null},u_endAnimationRatio:{value:0}},a={_baseMesh:void 0,_blocksMesh:void 0,_blockList:[],animationTotalFrames:0,heroLoseAnimationPositionArray:void 0,heroLoseAnimationOrientArray:void 0,_blockRenderList:[],successColorRatio:0,directLight:void 0,infoTexture:void 0,_instancePosArray:void 0,_instanceOrientArray:void 0,_instanceShowRatioArray:void 0,_instanceSpinPivotArray:void 0,_instanceSpinOrientArray:void 0,_instanceColorArray:void 0,_instanceIsActiveArray:void 0,_instanceNextDirectionArray:void 0,isShadowCameraHelperVisible:void 0,shadowCameraHelper:void 0,infoTextureLinear:void 0,heroSharedUniforms:H},ko=()=>{async function i(){const A=Array.from({length:Ne});a._blockList=A.map(d=>new Fo),a._blockRenderList=[...a._blockList];const x=Qe+"models",g=Qe+"textures";ie.loadBuf(`${x}/BASE.buf`,d=>{n(d)}),ie.loadBuf(`${x}/BOX.buf`,d=>{s(d)}),ie.loadBuf(`${x}/LOSE_ANIMATION.buf`,d=>{const{position:r,orient:c}=d.attributes;a.animationTotalFrames=r.count/q,a.heroLoseAnimationPositionArray=r.array,a.heroLoseAnimationOrientArray=c.array}),ie.loadTexture(`${g}/gobo.jpg`,d=>{d.flipY=!1,d.needsUpdate=!0,H.u_goboTexture.value=d})}function n(A){const x={...l.UniformsUtils.merge([l.UniformsLib.lights]),...t.sharedUniforms,...H,u_color:{value:new l.Color(t.neutralColor)},u_blocksColor:{value:new l.Color},u_yDisplacement:{value:0},u_prevSuccessColor:{value:new l.Color(t.neutralColor).convertSRGBToLinear()},u_successColor:{value:new l.Color(t.successColor).convertSRGBToLinear()},u_successAnimationRatio:{value:0}},g=new l.ShaderMaterial({uniforms:x,vertexShader:et,fragmentShader:on,lights:!0,transparent:!0,defines:{IS_BASE:!0}});a._baseMesh=new l.Mesh(A,g),a._baseMesh.receiveShadow=a._baseMesh.castShadow=!0,a._baseMesh.frustumCulled=!1,a._baseMesh.customDepthMaterial=new l.ShaderMaterial({vertexShader:et,fragmentShader:an,defines:{IS_DEPTH:!0,IS_BASE:!0}}),Pe.add(a._baseMesh)}function s(A){const x=new l.InstancedBufferGeometry;x.index=A.index,Object.keys(A.attributes).forEach(r=>{x.setAttribute(r,A.attributes[r])}),x.instanceCount=Ne;const g=(r,c)=>{const _=new Float32Array(Ne*c);return x.setAttribute(r,new l.InstancedBufferAttribute(_,c,c!==4,1).setUsage(l.DynamicDrawUsage)),_};a._instancePosArray=g("instancePos",3),a._instanceOrientArray=g("instanceOrient",4),a._instanceShowRatioArray=g("instanceShowRatio",1),a._instanceSpinPivotArray=g("instanceSpinPivot",3),a._instanceSpinOrientArray=g("instanceSpinOrient",4),a._instanceColorArray=g("instanceColor",3),a._instanceIsActiveArray=g("instanceIsActive",1),a._instanceNextDirectionArray=g("instanceNextDirection",2);const d=new l.ShaderMaterial({uniforms:{...l.UniformsUtils.merge([l.UniformsLib.lights]),...t.sharedUniforms,...H,...Ge.bn_sharedUniforms},vertexShader:et,fragmentShader:on,lights:!0});a._blocksMesh=new l.Mesh(x,d),a._blocksMesh.frustumCulled=!1,a._blocksMesh.castShadow=a._blocksMesh.receiveShadow=!0,a._blocksMesh.customDepthMaterial=new l.ShaderMaterial({uniforms:{...H},vertexShader:et,fragmentShader:an,defines:{IS_DEPTH:!0}}),Pe.add(a._blocksMesh)}function e(){var x,g;a.directLight=new l.DirectionalLight(16777215,1),a.directLight.castShadow=!0,a.directLight.shadow.camera.near=t.lightCameraNear,a.directLight.shadow.camera.far=t.lightCameraFar,a.directLight.shadow.camera.right=t.lightCameraSize,a.directLight.shadow.camera.left=-t.lightCameraSize,a.directLight.shadow.camera.top=t.lightCameraSize,a.directLight.shadow.camera.bottom=-t.lightCameraSize,a.directLight.shadow.bias=t.lightCameraBias,a.directLight.shadow.mapSize.width=768,a.directLight.shadow.mapSize.height=768,(x=t.scene)==null||x.add(a.directLight),(g=t.scene)==null||g.add(a.directLight.target),a.isShadowCameraHelperVisible=!0,a.shadowCameraHelper=new l.CameraHelper(a.directLight.shadow.camera),Mo.add(()=>{var d,r;(d=a.directLight)==null||d.shadow.camera.updateProjectionMatrix(),(r=a.shadowCameraHelper)==null||r.update()}),Eo.add(()=>{var d,r;a.isShadowCameraHelperVisible=!a.isShadowCameraHelperVisible,a.isShadowCameraHelperVisible&&a.shadowCameraHelper?(d=t.scene)==null||d.add(a.shadowCameraHelper):a.shadowCameraHelper&&((r=t.scene)==null||r.remove(a.shadowCameraHelper))}),u();const A=new Float32Array(ao*4);for(let d=0,r=0;d<ne;d++)for(let c=0;c<ne;c++,r+=4)A[r]=0,A[r+1]=0,A[r+2]=1,A[r+3]=1;a.infoTexture=new l.DataTexture(A,ne,ne,l.RGBAFormat,l.FloatType),a.infoTextureLinear=new l.DataTexture(A,ne,ne,l.RGBAFormat,l.FloatType,l.UVMapping,l.ClampToEdgeWrapping,l.ClampToEdgeWrapping,l.LinearFilter,l.LinearFilter,0),a.infoTextureLinear.needsUpdate=!0,H.u_infoTexture.value=a.infoTexture,H.u_infoTextureLinear.value=a.infoTextureLinear}function u(){oe.forEach((A,x)=>{A.forEach((g,d)=>{var c,_;const r=x*Y+d;g.loseAnimationPositionArray=new Float32Array(a.animationTotalFrames*3),g.loseAnimationOrientArray=new Float32Array(a.animationTotalFrames*4);for(let C=0;C<a.animationTotalFrames;C++){const L=(C*q+r)*3,Z=(C*q+r)*4;g.loseAnimationPositionArray.set(((c=a.heroLoseAnimationPositionArray)==null?void 0:c.subarray(L,L+3))||[],C*3),g.loseAnimationOrientArray.set(((_=a.heroLoseAnimationOrientArray)==null?void 0:_.subarray(Z,Z+4))||[],C*4)}})})}function m(){a.successColorRatio=0,a._blockList.forEach(A=>A.reset())}function v(A){a._blockList[A.id].reset()}function f(A){var x,g;ln.set(t.mainColor),nt.set(t.successColor),gt.set(t.failColor),Te.set(t.neutralColor),se.copy(ln),B===M.FAILED&&pe>0&&se.copy(gt),(B===M.COMPLETED||B===M.REPLAY)&&(a.successColorRatio=Math.min(1,a.successColorRatio+.5*A),se.lerp(nt,a.successColorRatio)),B!==M.REPLAY&&B!==M.COMPLETED&&se.lerp(Te,P.saturate(Ve+Xe)),se.convertSRGBToLinear(),Te.convertSRGBToLinear(),nt.convertSRGBToLinear();for(let d=0;d<Ne;d++){const r=O.filter(C=>C.id===d)[0],c=d<O.length+(I?1:0),_=c?se:Te;if(c&&(r!=null&&r.isErrorBlock)){let C=P.saturate(.5*(1-Math.cos(r.errorPreFallAnimationTime)));r.errorFallAnimationTime>0&&(C=P.saturate(.5*(1-Math.cos(14*r.errorFallAnimationTime)))),ot.lerpColors(_,gt,C),(x=a._instanceColorArray)==null||x.set([ot.r,ot.g,ot.b],d*3)}else(g=a._instanceColorArray)==null||g.set([_.r,_.g,_.b],d*3);a._instanceIsActiveArray&&(a._instanceIsActiveArray[d]=c?1:0)}a._baseMesh&&(a._baseMesh.material.uniforms.u_color.value.set(Te).convertSRGBToLinear(),a._baseMesh.material.uniforms.u_blocksColor.value.copy(se),a._baseMesh.material.uniforms.u_successColor.value.copy(nt),a._baseMesh.material.uniforms.u_prevSuccessColor.value.set(Te),a._baseMesh.material.uniforms.u_prevSuccessColor.value.lerp(se.set(t.successColor),He),a._baseMesh.material.uniforms.u_prevSuccessColor.value.convertSRGBToLinear())}function h(){oe.forEach(A=>{A.forEach(x=>{const g=x.id%Y+1,r=((Math.floor(x.id/Y)+1)*ne+g)*4;let c=.5*Se*P.fit(Me,0,.1,1,0);c+=(pe>0?1:0)*P.fit(Xe,0,.1,1,0),c+=Ye*P.fit(Ve,0,.1,1,0),c=Math.min(1,c),a.infoTexture&&(a.infoTexture.image.data[r]=x.activeRatio*(1-c),a.infoTexture.image.data[r+1]=x.isOccupied||x.willBeOccupied?1:0,a.infoTexture.image.data[r+2]=x.isMain?1:0,a.infoTexture.image.data[r+3]=x.isBorder?1:0)})}),a.infoTexture&&a.infoTextureLinear&&(a.infoTexture.needsUpdate=!0,a.infoTextureLinear.needsUpdate=!0)}function w(){var A,x;if(I){const g=a._blockList[I.id];I.currentTile&&g.boardPos.set((A=I.currentTile)==null?void 0:A.row,(x=I.currentTile)==null?void 0:x.col),g.showRatio=be(P.saturate(I.spawnAnimationRatioUnclamped))}O.forEach(g=>{var r,c,_,C;const d=a._blockList[g.id];d&&(d.showRatio=be(P.saturate(g.spawnAnimationRatioUnclamped)),g.currentTile&&d.boardPos.set((r=g.currentTile)==null?void 0:r.row,(c=g.currentTile)==null?void 0:c.col),g.targetTile&&d.boardDir.set(g.targetTile.row-(((_=g.currentTile)==null?void 0:_.row)||0),g.targetTile.col-(((C=g.currentTile)==null?void 0:C.col)||0)),d.animation=g.hasAnimationEnded?0:g.easedAnimationRatio)})}function E(A){var g,d;for(let r=0;r<A;r++){const c=a._blockRenderList[r];c.pos.toArray(a._instancePosArray||[],r*3),c.orient.toArray(a._instanceOrientArray||[],r*4),a._instanceShowRatioArray&&(a._instanceShowRatioArray[r]=Le.quartInOut(c.showRatio)),c.spinPivot.toArray(a._instanceSpinPivotArray||[],r*3),c.spinOrient.toArray(a._instanceSpinOrientArray||[],r*4),(g=a._instanceNextDirectionArray)==null||g.set([c.boardDir.x,c.boardDir.y],r*2)}const x=(d=a._blocksMesh)==null?void 0:d.geometry;if(x){for(const r in x.attributes){const c=x.attributes[r];c.isBufferAttribute&&(c.addUpdateRange(0,A*c.itemSize),c.needsUpdate=!0)}x.instanceCount=A}}function p(A,x){if(B===M.STOP&&x>=q){const g=x-q,d=g%Y-V,r=Math.floor(g/Y)-V,c=he.getTile(r,d);if(!c.isOccupied){const _=P.saturate(Ye-c.randomDelay);c.activeRatio=_,A.showRatio=be(_),A.boardPos.set(r,d)}}}function T(A,x){if(A&&A.isErrorBlock&&A.errorLifeCycle>=t.errorBlockMaxLifeCycle-1){const g=A.currentTile,d=A.errorFallAnimationTime;x.boardPos.set(g.row,g.col),k.set(g.row,g.col).normalize(),Math.abs(k.x)>Math.abs(k.y)?k.set(Math.sign(k.x),0):k.set(0,Math.sign(k.y)),x.boardDir.set(k.x,k.y),x.animation=P.fit(d,0,1,0,1,Le.sineOut),x.animation+=Math.max(0,d-.8),x.update(t.deltaTime),x.addsFallAnimation(Math.max(0,d-.8))}}function y(A,x,g){if(B===M.FAILED){if(A){const d=A.currentTile;if(pe>0){const r=Math.floor(pe*a.animationTotalFrames),c=Math.min(r+1,a.animationTotalFrames-1),_=pe*a.animationTotalFrames-r;_e.fromArray(d.loseAnimationPositionArray,r*3),rn.fromArray(d.loseAnimationPositionArray,c*3),_e.lerp(rn,_),_e.y*=.5,x.pos.set(_e.z,_e.y,-_e.x),vt.fromArray(d.loseAnimationOrientArray,r*4),sn.fromArray(d.loseAnimationOrientArray,c*4),vt.slerp(sn,_),x.orient.copy(vt)}if(Ce>0){const r=P.fit(Ce,0,1,0,1,Le.sineOut);if(k.set(d.row,d.col),k.normalize(),k.multiplyScalar(.1*r),x.pos.x+=k.x,x.pos.z-=k.y,Ce<1){const c=r*P.fit(Ce,.5,.8,1,0);k.set(A.randomVector.x,A.randomVector.y),k.normalize(),k.multiplyScalar(c),tt.set(0,0),tt.addScaledVector(k,.08*c*Math.sin(c*80)),x.pos.x+=tt.x,x.pos.z+=tt.y}}}if(g>=q){const d=g-q,r=d%Y-V,c=Math.floor(d/Y)-V,_=he.getTile(c,r),C=P.saturate(lt-_.randomDelay);_.isOccupied||(_.activeRatio=C),x.showRatio=be(C),x.boardPos.set(c,r)}}}function R(A,x){if((B===M.COMPLETED||B===M.REPLAY)&&A){const d=.1*A.currentTile.randomDelay,r=Se-d;let c=P.fit(r,0,.5,0,1,_=>1-Math.pow(1-_,5));c=P.fit(r,.7,1,c,0,_=>Math.pow(_,5)),x.pos.y+=je*c}}function z(A){w(),f(A);let x=0;for(let c=0;c<Ne;c++){const _=a._blockList[c];_.update(A);const C=O.filter(L=>L.id===c)[0];_.showRatio>0&&(a._blockRenderList[x++]=_),y(C,_,c),T(C,_),p(_,c),R(C,_)}h(),E(x);const g=Math.min(1,Ve+Xe+Me),d=Le.backOut(g,3),r=1-be(Et);Pe.position.y=-d-2*r,Pe.rotation.y=.5*Math.PI*r,Pe.rotation.y+=2*Math.PI*Le.quartInOut(ke),a._baseMesh&&(a._baseMesh.material.uniforms.u_yDisplacement.value=-d-5*r,a._baseMesh.material.uniforms.u_successAnimationRatio.value=Ze),H.u_endAnimationRatio.value=Math.min(1,P.fit(Ye,.5,2,0,1)+P.fit(lt,.5,2,0,1)+P.fit(N,0,.2,0,1)),H.u_goboIntensity.value=t.goboIntensity,H.u_lightPosition.value.set(t.lightPositionX,t.lightPositionY,t.lightPositionZ),a.directLight&&(a.directLight.position.copy(H==null?void 0:H.u_lightPosition.value),a.directLight.shadow.camera.top=t.lightCameraSize,a.directLight.shadow.camera.bottom=-t.lightCameraSize,a.directLight.shadow.bias=t.lightCameraBias)}return{preload:i,init:e,reset:m,resetBlockFromLogicBlock:v,update:z}},De=ko(),cn=`uniform float u_time;
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
`,Uo=`uniform vec3 u_bgColor1;
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
`,Zo=`#include <common>
#include <packing>

varying vec2 vHighPrecisionZW;

void main() {
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
    gl_FragColor = packDepthToRGBA( fragCoordZ );
}
`,yn=new l.Object3D;let J=null,xt=null,At=null,un=null,mn=null,dn=null,fn=null,hn=null,pn=0,ze=0,wt,it,vn;const Ie={u_time:{value:0},u_ratio:{value:0},u_isFloating:{value:1}},jo=()=>{async function i(){const v=Qe+"models",f=Qe+"textures";ie.loadTexture(`${f}/matcap_gold.jpg`,h=>{wt=h,wt.needsUpdate=!0}),ie.loadBuf(`${v}/COIN.buf`,h=>{it=h}),ie.loadBuf(`${v}/COIN_PLACEMENT.buf`,h=>{const{position:w,aoN:E,aoP:p,curveu:T,orient:y}=h.attributes;un=w.array,fn=E.array,hn=p.array,dn=T.array,mn=y.array,pn=w.count})}function n(){s(),e(),u(),J&&yn.add(J)}function s(){it.computeVertexNormals();const v=new l.InstancedBufferGeometry;v.index=it.index,Object.entries(it.attributes).forEach(([h,w])=>v.setAttribute(h,w)),vn=new Float32Array(pn*3).map(()=>Math.random()*2-1),[["a_instancePosition",un,3],["a_instanceQuaternion",mn,4],["a_instanceCurveUV",dn,1],["a_instanceAoN",fn,3],["a_instanceAoP",hn,3],["a_instanceRand",vn,3]].forEach(([h,w,E])=>{v.setAttribute(h,new l.InstancedBufferAttribute(w,E))}),xt=v}function e(){At=new l.ShaderMaterial({uniforms:{...H,...t.sharedUniforms,...Ie,...Ge.bn_sharedUniforms,...l.UniformsUtils.merge([l.UniformsLib.lights]),u_matcapTexture:{value:wt}},vertexShader:cn,fragmentShader:Uo,lights:!0})}function u(){xt&&At&&(J=new l.Mesh(xt,At),J.frustumCulled=!1,J.castShadow=!0,J.receiveShadow=!0,J.customDepthMaterial=new l.ShaderMaterial({uniforms:{...Ie},vertexShader:cn,fragmentShader:Zo,defines:{IS_DEPTH:!0}}))}function m(v){const f=Ee===0;ze=f?Ue:Ee,Ie.u_ratio.value=ze,Ie.u_time.value+=v,Ie.u_isFloating.value=f?1:0,J&&(J.rotation.y=0*ze,J.visible=ze>0&&ze<1)}return{preload:i,init:n,update:m}},Dt=jo(),Ho=`varying vec2 v_uv;

void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    v_uv = uv;
}
`,Yo=`uniform vec3 u_bgColor1;
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
`,Vo=`attribute vec3 a_instancePosition;
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
`,Xo=`varying vec2 v_uv;
varying float v_opacity;
uniform vec3 u_color;
uniform float u_opacity;

void main() {
    float dist = length(2.0 * (v_uv - 0.5));
    float alpha = 1.0 - dist;

    gl_FragColor = vec4(u_color, u_opacity * alpha * v_opacity);
}
`,Qo=()=>{const i=new l.Object3D;let n;function s(){var f,h,w;const m=new l.ShaderMaterial({uniforms:Object.assign({u_resolution:(f=t.sharedUniforms)==null?void 0:f.u_resolution,u_bgColor1:(h=t.sharedUniforms)==null?void 0:h.u_bgColor1,u_bgColor2:(w=t.sharedUniforms)==null?void 0:w.u_bgColor2},Ge.bn_sharedUniforms),vertexShader:Ho,fragmentShader:Yo}),v=new l.Mesh(new l.PlaneGeometry(2,2),m);v.renderOrder=1,i.add(v),e()}function e(){var p,T;const v=new l.PlaneGeometry(1,1),f=new l.InstancedBufferGeometry;f.index=v.index,Object.keys(v.attributes).forEach(y=>{f.setAttribute(y,v.attributes[y])}),f.instanceCount=50;const h=new Float32Array(50*3),w=new Float32Array(50*3);for(let y=0;y<50;y++)h[y*3]=3*(Math.random()*2-1),h[y*3+1]=Math.random()*2-1,h[y*3+2]=.5+.5*Math.random(),w[y*3]=Math.random(),w[y*3+1]=Math.random(),w[y*3+2]=Math.random();f.setAttribute("a_instancePosition",new l.InstancedBufferAttribute(h,3)),f.setAttribute("a_instanceRandom",new l.InstancedBufferAttribute(w,3));const E=new l.ShaderMaterial({vertexShader:Vo,fragmentShader:Xo,uniforms:{u_time:((p=t.sharedUniforms)==null?void 0:p.u_time)||{value:t.time},u_resolution:((T=t.sharedUniforms)==null?void 0:T.u_resolution)||{value:t.resolution},u_size:{value:.01},u_color:{value:new l.Color},u_opacity:{value:0}},transparent:!0});n=new l.Mesh(f,E),n.renderOrder=2,n.frustumCulled=!1,i.add(n)}function u(m){n.material.uniforms.u_size.value=t.particlesSize,n.material.uniforms.u_color.value.set(t.particlesColor),n.material.uniforms.u_opacity.value=t.particlesOpacity}return{init:s,container:i,update:u}};l.ColorManagement.enabled=!1;const Mt=Qo();let ct=0,Rt=0;const Wo=60,Go=1/Wo;function qo(i){var f,h,w;t.isPaused&&(i*=0),i=Math.min(i,1/15),t.time+=i,t.deltaTime=i,t.sharedUniforms&&(t.sharedUniforms.u_time.value=t.time,t.sharedUniforms.u_deltaTime.value=i);const n=t.viewportWidth,s=t.viewportHeight,e=t.cameraZoom*s/10,u=t.cameraOffsetX,m=t.cameraOffsetY;t.camera&&(t.camera.zoom=e,t.camera.left=-n/2-u*n/e/2,t.camera.right=n/2-u*n/e/2,t.camera.top=s/2-m*s/e/2,t.camera.bottom=-s/2-m*s/e/2,t.camera.updateProjectionMatrix()),Ge.update(i),bn.update(i);const v=t.camera;(f=t.orbitControls)==null||f.update(),(h=t.orbitCamera)==null||h.updateMatrix(),v&&((w=t.orbitCamera)==null||w.matrix.decompose(v.position,v.quaternion,v.scale),v.matrix.compose(v.position,v.quaternion,v.scale)),De.update(i),Dt.update(i),Mt.update(i),t.camera&&t.scene&&t.renderer&&t.renderer.render(t==null?void 0:t.scene,t.camera)}function Pn(){var s;const i=performance.now()/1e3,n=i-ct;i-Rt>=Go&&(Rt=i,qo(n),ct=i),(s=t.renderer)==null||s.setAnimationLoop(Pn)}function Ko(){var n;t.renderer&&(t.renderer.shadowMap.enabled=!0,t.renderer.shadowMap.type=l.PCFShadowMap),t.scene=new l.Scene,t.camera=new l.OrthographicCamera(-1,1,1,-1,1,60),t.scene.add(t.camera),t.camera.position.fromArray(ce.DEFAULT_POSITION),t.orbitCamera=t.camera.clone();const i=t.orbitControls=new Qn(t.orbitCamera,t.orbitTarget);if(i.target0.fromArray(ce.DEFAULT_LOOKAT_POSITION),i.enableDamping=!0,i.enablePan=!1,i.minPolarAngle=Math.PI*.2,i.maxPolarAngle=Math.PI*.45,t.sharedUniforms){const s=t.sharedUniforms.u_bgColor1.value,e=t.sharedUniforms.u_bgColor2.value;s.set(t.bgColor1).convertSRGBToLinear(),e.set(t.bgColor2).convertSRGBToLinear()}(n=t.renderer)==null||n.setClearColor(t.bgColor1,1),bn.init(),De.init(),Dt.init(),Mt.init(),t.scene.add(yn),t.scene.add(Mt.container),t.scene.add(Pe)}function Jo(i,n){var u,m;t.viewportWidth=i,t.viewportHeight=n,t.viewportResolution.set(i,window.innerHeight);let s=i*ce.DPR,e=n*ce.DPR;if(s*e>ce.MAX_PIXEL_COUNT){const v=s/e;e=Math.sqrt(ce.MAX_PIXEL_COUNT/v),s=Math.ceil(e*v),e=Math.ceil(e)}t.width=s,t.height=e,t.resolution.set(s,e),(u=t.camera)==null||u.updateProjectionMatrix(),(m=t.renderer)==null||m.setSize(s,e),t.canvas&&(t.canvas.style.width=`${i}px`,t.canvas.style.height=`${n}px`)}function gn(i){t.cameraOffsetX=i?i/window.innerWidth:0,Jo(window.innerWidth,window.innerHeight)}function $o(i){Ko(),ct=performance.now()/1e3,Rt=ct,window.addEventListener("resize",()=>gn(i)),gn(i),Pn()}async function ai(i,n){var e;(e=t.renderer)!=null&&e.domElement||document.getElementById(i)||(await De.preload(),await Dt.preload(),await Ge.preInit(),t.renderer=new l.WebGLRenderer({...ce.WEBGL_OPTS}),t.renderer&&(t.renderer.domElement.id=i,t.canvas=t.renderer.domElement,t.orbitTarget=t.renderer.domElement,ie.start(()=>$o(n)),document.body.appendChild(t.renderer.domElement)))}function ei(i){var s,e,u,m,v,f;const n=document.getElementById(i);n==null||n.remove(),(e=(s=t.renderer)==null?void 0:s.domElement)==null||e.remove(),(m=(u=t.renderer)==null?void 0:u.state)==null||m.reset(),(v=t.renderer)==null||v.resetState(),t.canvas=void 0,t.orbitTarget=void 0,(f=t.renderer)==null||f.dispose(),t.renderer=void 0,co()}async function ri(i){if(!document.getElementById(i))return;const s={[M.FAILED]:Tn,[M.COMPLETED]:St,[M.REPLAY]:St,[M.STOP]:Ct},e=G==="not-started",u=B!==null,m=1e3*3.5,v=(s[B]||1)*1e3+m,f=Ct*1e3*2,h=u?v:m,w=u?f+v:f;e||setTimeout(()=>ti("stop"),w),setTimeout(()=>ei(i),e?h:h+w)}function ti(i,n=!1){X.set(i,n)}function si(i){for(const n of i)t[n.property]=n.value}export{B as animationResult,G as animationStatus,ye as animationStatusIndex,ai as loadTowerAnimation,ri as removeTowerAnimation,si as setAnimationProperties,ti as setAnimationState};
//# sourceMappingURL=main.js.map
