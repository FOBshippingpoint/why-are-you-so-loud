function q(){}function H(a){return a()}function L(){return Object.create(null)}function C(a){a.forEach(H)}function ye(a){return typeof a=="function"}function Se(a,o){return a!=a?o==o:a!==o||a&&typeof a=="object"||typeof a=="function"}let M;function Ee(a,o){return M||(M=document.createElement("a")),M.href=o,a===M.href}function ve(a){return Object.keys(a).length===0}function Te(a,o){a.appendChild(o)}function ke(a,o,u){a.insertBefore(o,u||null)}function pe(a){a.parentNode.removeChild(a)}function De(a){return document.createElement(a)}function j(a){return document.createTextNode(a)}function ze(){return j(" ")}function qe(){return j("")}function He(a,o,u,f){return a.addEventListener(o,u,f),()=>a.removeEventListener(o,u,f)}function Le(a,o,u){u==null?a.removeAttribute(o):a.getAttribute(o)!==u&&a.setAttribute(o,u)}function xe(a){return Array.from(a.childNodes)}function je(a,o){o=""+o,a.wholeText!==o&&(a.data=o)}function Fe(a,o,u,f){u===null?a.style.removeProperty(o):a.style.setProperty(o,u,f?"important":"")}let T;function b(a){T=a}const N=[],F=[],S=[],G=[],be=Promise.resolve();let k=!1;function Ne(){k||(k=!0,be.then(V))}function D(a){S.push(a)}const z=new Set;let E=0;function V(){const a=T;do{for(;E<N.length;){const o=N[E];E++,b(o),_e(o.$$)}for(b(null),N.length=0,E=0;F.length;)F.pop()();for(let o=0;o<S.length;o+=1){const u=S[o];z.has(u)||(z.add(u),u())}S.length=0}while(N.length);for(;G.length;)G.pop()();k=!1,z.clear(),b(a)}function _e(a){if(a.fragment!==null){a.update(),C(a.before_update);const o=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,o),a.after_update.forEach(D)}}const $e=new Set;function Re(a,o){a&&a.i&&($e.delete(a),a.i(o))}function we(a,o,u,f){const{fragment:d,on_mount:h,on_destroy:p,after_update:x}=a.$$;d&&d.m(o,u),f||D(()=>{const g=h.map(H).filter(ye);p?p.push(...g):C(g),a.$$.on_mount=[]}),x.forEach(D)}function Ae(a,o){const u=a.$$;u.fragment!==null&&(C(u.on_destroy),u.fragment&&u.fragment.d(o),u.on_destroy=u.fragment=null,u.ctx=[])}function Ce(a,o){a.$$.dirty[0]===-1&&(N.push(a),Ne(),a.$$.dirty.fill(0)),a.$$.dirty[o/31|0]|=1<<o%31}function Ge(a,o,u,f,d,h,p,x=[-1]){const g=T;b(a);const l=a.$$={fragment:null,ctx:null,props:h,update:q,not_equal:d,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(g?g.$$.context:[])),callbacks:L(),dirty:x,skip_bound:!1,root:o.target||g.$$.root};p&&p(l.root);let _=!1;if(l.ctx=u?u(a,o.props||{},(y,$,...R)=>{const w=R.length?R[0]:$;return l.ctx&&d(l.ctx[y],l.ctx[y]=w)&&(!l.skip_bound&&l.bound[y]&&l.bound[y](w),_&&Ce(a,y)),$}):[],l.update(),_=!0,C(l.before_update),l.fragment=f?f(l.ctx):!1,o.target){if(o.hydrate){const y=xe(o.target);l.fragment&&l.fragment.l(y),y.forEach(pe)}else l.fragment&&l.fragment.c();o.intro&&Re(a.$$.fragment),we(a,o.target,o.anchor,o.customElement),V()}b(g)}class Ve{$destroy(){Ae(this,1),this.$destroy=q}$on(o,u){const f=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return f.push(u),()=>{const d=f.indexOf(u);d!==-1&&f.splice(d,1)}}$set(o){this.$$set&&!ve(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}var Me=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B={exports:{}};(function(a,o){(function(u,f){a.exports=f()})(Me,function(){var u=function(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")},f=function(){function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}}(),d=function i(){var n=this;u(this,i),this.initialise=function(e){n.analyser=e,n.analyser.fftSize=2048},this.reset=function(){n.hzHistory=[],n.frequences=new Uint8Array(n.analyser.frequencyBinCount)},this.analyse=function(){n.analyser.getByteFrequencyData(n.frequences);for(var e=0;e<n.frequences.length;e++)n.hzHistory[e]||(n.hzHistory[e]=[]),n.hzHistory[e].length>n.maxValueHistory&&n.hzHistory[e].shift(),n.hzHistory[e].push(n.frequences[e])},this.getRangeAverageRatio=function(e,t){for(var r=0,s=e;s<t+e;s++)r+=n.getFrequenceRatio(s);return r/t},this.getFrequenceRatio=function(e){var t=255,r=0;n.hzHistory[e].forEach(function(v){v<t&&(t=v),v>r&&(r=v)});var s=r-t,c=n.frequences[e]-t,m=s===0?0:c/s;return n.startingScale+n.pulseRatio*m},this.startingScale=0,this.pulseRatio=1,this.maxValueHistory=100,this.hzHistory=[]},h=new d,p=function i(n){var e=this;u(this,i),this.createSourceFromAudioElement=function(t){t.setAttribute("rythm-connected",e.connectedSources.length);var r=e.audioCtx.createMediaElementSource(t);return e.connectedSources.push(r),r},this.connectExternalAudioElement=function(t){e.audio=t,e.currentInputType=e.inputTypeList.EXTERNAL;var r=t.getAttribute("rythm-connected");r?e.source=e.connectedSources[r]:e.source=e.createSourceFromAudioElement(e.audio),e.connectSource(e.source)},this.connectSource=function(t){t.connect(e.gain),e.gain.connect(h.analyser),e.currentInputType!==e.inputTypeList.STREAM?(h.analyser.connect(e.audioCtx.destination),e.audio.addEventListener("ended",e.stop)):h.analyser.disconnect()},this.setMusic=function(t){e.audio=new Audio(t),e.currentInputType=e.inputTypeList.TRACK,e.source=e.createSourceFromAudioElement(e.audio),e.connectSource(e.source)},this.setGain=function(t){e.gain.gain.value=t},this.plugMicrophone=function(){return e.getMicrophoneStream().then(function(t){e.audio=t,e.currentInputType=e.inputTypeList.STREAM,e.source=e.audioCtx.createMediaStreamSource(t),e.connectSource(e.source)})},this.getMicrophoneStream=function(){return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,new Promise(function(t,r){navigator.getUserMedia({audio:!0},function(s){return t(s)},function(s){return r(s)})})},this.start=function(){e.currentInputType===e.inputTypeList.TRACK&&(e.audioCtx.state==="suspended"?e.audioCtx.resume().then(function(){return e.audio.play()}):e.audio.play())},this.stop=function(){e.currentInputType===e.inputTypeList.TRACK?e.audio.pause():e.currentInputType===e.inputTypeList.STREAM&&(e.audio.getAudioTracks()[0].enabled=!1)},this.browserAudioCtx=window.AudioContext||window.webkitAudioContext,this.audioCtx=n||new this.browserAudioCtx,this.connectedSources=[],h.initialise(this.audioCtx.createAnalyser()),this.gain=this.audioCtx.createGain(),this.source={},this.audio={},this.hzHistory=[],this.inputTypeList={TRACK:0,STREAM:1,EXTERNAL:2}},x=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?1.25:e.max,r=isNaN(e.min)?.75:e.min,s=(t-r)*n;i.style.transform="scale("+(r+s)+") translateZ(0)"},g=function(n){n.style.transform=""},l=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?15:e.max,r=isNaN(e.min)?-15:e.min;e.direction==="left"&&(t=-t,r=-r);var s=(t-r)*n;i.style.transform="translate3d("+(r+s)+"px, 0, 0)"},_=function(n){n.style.transform=""},y=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?30:e.max,r=isNaN(e.min)?0:e.min,s=(t-r)*n;i.style.transform="translate3d(0, "+-s+"px, 0)"},$=function(n){n.style.transform=""},R=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?20:e.max,r=isNaN(e.min)?-20:e.min;e.direction==="left"&&(t=-t,r=-r);var s=(t-r)*n;i.style.transform="rotate("+(r+s)+"deg) translateZ(0)"},w=function(n){n.style.transform=""},P=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?1:e.max,r=isNaN(e.max)?0:e.max,s=(t-r)*n;e.reverse?i.style.opacity=t-s:i.style.opacity=r+s},U=function(n){n.style.opacity=""},O=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],r=e.to||[255,255,255],s=(r[0]-t[0])*n,c=(r[1]-t[1])*n,m=(r[2]-t[2])*n;i.style.borderColor="rgb("+Math.floor(r[0]-s)+", "+Math.floor(r[1]-c)+", "+Math.floor(r[2]-m)+")"},W=function(n){n.style.borderColor=""},K=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],r=e.to||[255,255,255],s=(r[0]-t[0])*n,c=(r[1]-t[1])*n,m=(r[2]-t[2])*n;i.style.backgroundColor="rgb("+Math.floor(r[0]-s)+", "+Math.floor(r[1]-c)+", "+Math.floor(r[2]-m)+")"},I=function(n){n.style.backgroundColor=""},X=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?25:e.max,r=isNaN(e.min)?0:e.min,s=(t-r)*n;e.reverse?s=t-s:s=r+s,i.style.borderRadius=s+"px"},Z=function(n){n.style.borderRadius=""},J=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?8:e.max,r=isNaN(e.min)?0:e.min,s=(t-r)*n;e.reverse?s=t-s:s=r+s,i.style.filter="blur("+s+"px)"},Q=function(n){n.style.filter=""},A={up:-1,down:1,left:1,right:-1},Y=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.radius)?20:e.radius,r=Object.keys(A).includes(e.direction)?e.direction:"right",s=Object.keys(A).includes(e.curve)?e.curve:"down",c=[A[r],A[s]],m=c[0],v=c[1];i.style.transform="translate3d("+m*t*Math.cos(n*Math.PI)+"px, "+v*t*Math.sin(n*Math.PI)+"px, 0)"},ee=function(n){n.style.transform=""},te=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],r=e.to||[255,255,255],s=(r[0]-t[0])*n,c=(r[1]-t[1])*n,m=(r[2]-t[2])*n;i.style.boxShadow="0 0 1em rgb("+Math.floor(r[0]-s)+", "+Math.floor(r[1]-c)+", "+Math.floor(r[2]-m)+")"},ne=function(n){n.style.boxShadow=""},re=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?25:e.max,r=isNaN(e.min)?0:e.min,s=(t-r)*n;e.reverse?s=t-s:s=r+s,i.style.letterSpacing=s+"px"},ae=function(n){n.style.letterSpacing=""},se=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?.8:e.max,r=isNaN(e.min)?1.2:e.min,s=(t-r)*n+r;i.style.fontSize=s+"em"},ie=function(n){n.style.fontSize="1em"},oe=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?5:e.max,r=isNaN(e.min)?0:e.min,s=(t-r)*n+r;i.style.borderWidth=s+"px"},ue=function(n){n.style.borderWidth=""},ce=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?25:e.max,r=isNaN(e.min)?20:e.min,s=(t-r)*n;e.reverse&&(s=t-s),i.style.transform="matrix(1, "+Math.sin(s)+", 0, 1 , 0 ,0)"},le=function(n){n.style.transform=""},fe=function(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],r=e.to||[255,255,255],s=(r[0]-t[0])*n,c=(r[1]-t[1])*n,m=(r[2]-t[2])*n;i.style.color="rgb("+Math.floor(r[0]-s)+", "+Math.floor(r[1]-c)+", "+Math.floor(r[2]-m)+")"},me=function(n){n.style.color=""},de=function(){function i(){u(this,i),this.resets={},this.dances={},this.registerDance("size",x,g),this.registerDance("pulse",x,g),this.registerDance("shake",l,_),this.registerDance("jump",y,$),this.registerDance("twist",R,w),this.registerDance("vanish",P,U),this.registerDance("color",K,I),this.registerDance("borderColor",O,W),this.registerDance("radius",X,Z),this.registerDance("blur",J,Q),this.registerDance("swing",Y,ee),this.registerDance("neon",te,ne),this.registerDance("kern",re,ae),this.registerDance("borderWidth",oe,ue),this.registerDance("fontSize",se,ie),this.registerDance("tilt",ce,le),this.registerDance("fontColor",fe,me)}return f(i,[{key:"registerDance",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){};this.dances[e]=t,this.resets[e]=r}},{key:"dance",value:function(e,t,r,s){var c=e;typeof e=="string"?c=this.dances[e]||this.dances.pulse:c=e.dance;var m=document.getElementsByClassName(t);Array.from(m).forEach(function(v){return c(v,r,s)})}},{key:"reset",value:function(e,t){var r=e;typeof e=="string"?r=this.resets[e]||this.resets.pulse:r=e.reset;var s=document.getElementsByClassName(t);Array.from(s).forEach(function(c){return r(c)})}}]),i}(),he=new de,ge=function i(n){var e=this;u(this,i),this.connectExternalAudioElement=function(t){return e.player.connectExternalAudioElement(t)},this.setMusic=function(t){return e.player.setMusic(t)},this.plugMicrophone=function(){return e.player.plugMicrophone()},this.setGain=function(t){return e.player.setGain(t)},this.connectSource=function(t){return e.player.connectSource(t)},this.addRythm=function(t,r,s,c,m){e.rythms.push({elementClass:t,type:r,startValue:s,nbValue:c,options:m})},this.start=function(){e.stopped=!1,e.player.start(),e.analyser.reset(),e.renderRythm()},this.renderRythm=function(){e.stopped||(e.analyser.analyse(),e.rythms.forEach(function(t){var r=t.type,s=t.elementClass,c=t.nbValue,m=t.startValue,v=t.options;e.dancer.dance(r,s,e.analyser.getRangeAverageRatio(m,c),v)}),e.animationFrameRequest=requestAnimationFrame(e.renderRythm))},this.resetRythm=function(){e.rythms.forEach(function(t){var r=t.type,s=t.elementClass;t.nbValue,t.startValue,t.options,e.dancer.reset(r,s)})},this.stop=function(t){e.stopped=!0,e.player.stop(),e.animationFrameRequest&&cancelAnimationFrame(e.animationFrameRequest),t||e.resetRythm()},this.player=new p(n),this.analyser=h,this.maxValueHistory=h.maxValueHistory,this.dancer=he,this.rythms=[],this.addRythm("rythm-bass","pulse",0,10),this.addRythm("rythm-medium","pulse",150,40),this.addRythm("rythm-high","pulse",400,200),this.animationFrameRequest=void 0};return ge})})(B);var Be=B.exports;export{Be as R,Ve as S,ze as a,Ee as b,Le as c,Fe as d,De as e,ke as f,Te as g,pe as h,Ge as i,F as j,je as k,He as l,qe as m,q as n,C as r,Se as s,j as t};
