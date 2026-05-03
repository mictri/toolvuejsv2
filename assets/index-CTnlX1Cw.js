var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function u(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var d={},f=[],p=()=>{},m=()=>!1,h=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),g=e=>e.startsWith(`onUpdate:`),_=Object.assign,v=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,b=(e,t)=>y.call(e,t),x=Array.isArray,S=e=>j(e)===`[object Map]`,C=e=>j(e)===`[object Set]`,w=e=>j(e)===`[object Date]`,T=e=>typeof e==`function`,E=e=>typeof e==`string`,D=e=>typeof e==`symbol`,O=e=>typeof e==`object`&&!!e,k=e=>(O(e)||T(e))&&T(e.then)&&T(e.catch),A=Object.prototype.toString,j=e=>A.call(e),M=e=>j(e).slice(8,-1),ee=e=>j(e)===`[object Object]`,te=e=>E(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,N=u(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),P=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},F=/-\w/g,I=P(e=>e.replace(F,e=>e.slice(1).toUpperCase())),L=/\B([A-Z])/g,R=P(e=>e.replace(L,`-$1`).toLowerCase()),ne=P(e=>e.charAt(0).toUpperCase()+e.slice(1)),re=P(e=>e?`on${ne(e)}`:``),ie=(e,t)=>!Object.is(e,t),ae=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},oe=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(x(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=E(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(E(e)||O(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function he(e){let t=``;if(E(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){let r=he(e[n]);r&&(t+=r+` `)}else if(O(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ge=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_e=u(ge);ge+``;function ve(e){return!!e||e===``}function ye(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=be(e[r],t[r]);return n}function be(e,t){if(e===t)return!0;let n=w(e),r=w(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=D(e),r=D(t),n||r)return e===t;if(n=x(e),r=x(t),n||r)return n&&r?ye(e,t):!1;if(n=O(e),r=O(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!be(e[n],t[n]))return!1}}return String(e)===String(t)}function xe(e,t){return e.findIndex(e=>be(e,t))}var Se=e=>!!(e&&e.__v_isRef===!0),z=e=>E(e)?e:e==null?``:x(e)||O(e)&&(e.toString===A||!T(e.toString))?Se(e)?z(e.value):JSON.stringify(e,Ce,2):String(e),Ce=(e,t)=>Se(t)?Ce(e,t.value):S(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[we(t,r)+` =>`]=n,e),{})}:C(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>we(e))}:D(t)?we(t):O(t)&&!x(t)&&!ee(t)?String(t):t,we=(e,t=``)=>D(e)?`Symbol(${e.description??t})`:e,Te,Ee=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!e&&Te&&(this.index=(Te.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Te;try{return Te=this,e()}finally{Te=t}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){this._on>0&&--this._on===0&&(Te=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function De(){return Te}var B,Oe=new WeakSet,ke=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oe.has(this)&&(Oe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ne(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ke(this),Ie(this);let e=B,t=He;B=this,He=!0;try{return this.fn()}finally{Le(this),B=e,He=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Be(e);this.deps=this.depsTail=void 0,Ke(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Re(this)&&this.run()}get dirty(){return Re(this)}},Ae=0,je,Me;function Ne(e,t=!1){if(e.flags|=8,t){e.next=Me,Me=e;return}e.next=je,je=e}function Pe(){Ae++}function Fe(){if(--Ae>0)return;if(Me){let e=Me;for(Me=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;je;){let t=je;for(je=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ie(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Le(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Be(r),Ve(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Re(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ze(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ze(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qe)||(e.globalVersion=qe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Re(e))))return;e.flags|=2;let t=e.dep,n=B,r=He;B=e,He=!0;try{Ie(e);let n=e.fn(e._value);(t.version===0||ie(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{B=n,He=r,Le(e),e.flags&=-3}}function Be(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Be(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ve(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var He=!0,Ue=[];function We(){Ue.push(He),He=!1}function Ge(){let e=Ue.pop();He=e===void 0?!0:e}function Ke(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=B;B=void 0;try{t()}finally{B=e}}}var qe=0,Je=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ye=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!B||!He||B===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==B)t=this.activeLink=new Je(B,this),B.deps?(t.prevDep=B.depsTail,B.depsTail.nextDep=t,B.depsTail=t):B.deps=B.depsTail=t,Xe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=B.depsTail,t.nextDep=void 0,B.depsTail.nextDep=t,B.depsTail=t,B.deps===t&&(B.deps=e)}return t}trigger(e){this.version++,qe++,this.notify(e)}notify(e){Pe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Fe()}}};function Xe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Xe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ze=new WeakMap,Qe=Symbol(``),$e=Symbol(``),et=Symbol(``);function tt(e,t,n){if(He&&B){let t=Ze.get(e);t||Ze.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ye),r.map=t,r.key=n),r.track()}}function nt(e,t,n,r,i,a){let o=Ze.get(e);if(!o){qe++;return}let s=e=>{e&&e.trigger()};if(Pe(),t===`clear`)o.forEach(s);else{let i=x(e),a=i&&te(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===et||!D(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(et)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Qe)),S(e)&&s(o.get($e)));break;case`delete`:i||(s(o.get(Qe)),S(e)&&s(o.get($e)));break;case`set`:S(e)&&s(o.get(Qe));break}}Fe()}function rt(e){let t=V(e);return t===e?t:(tt(t,`iterate`,et),Ut(e)?t:t.map(Kt))}function it(e){return tt(e=V(e),`iterate`,et),e}function at(e,t){return Ht(e)?Vt(e)?qt(Kt(t)):qt(t):Kt(t)}var ot={__proto__:null,[Symbol.iterator](){return st(this,Symbol.iterator,e=>at(this,e))},concat(...e){return rt(this).concat(...e.map(e=>x(e)?rt(e):e))},entries(){return st(this,`entries`,e=>(e[1]=at(this,e[1]),e))},every(e,t){return lt(this,`every`,e,t,void 0,arguments)},filter(e,t){return lt(this,`filter`,e,t,e=>e.map(e=>at(this,e)),arguments)},find(e,t){return lt(this,`find`,e,t,e=>at(this,e),arguments)},findIndex(e,t){return lt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return lt(this,`findLast`,e,t,e=>at(this,e),arguments)},findLastIndex(e,t){return lt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return lt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return dt(this,`includes`,e)},indexOf(...e){return dt(this,`indexOf`,e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return dt(this,`lastIndexOf`,e)},map(e,t){return lt(this,`map`,e,t,void 0,arguments)},pop(){return ft(this,`pop`)},push(...e){return ft(this,`push`,e)},reduce(e,...t){return ut(this,`reduce`,e,t)},reduceRight(e,...t){return ut(this,`reduceRight`,e,t)},shift(){return ft(this,`shift`)},some(e,t){return lt(this,`some`,e,t,void 0,arguments)},splice(...e){return ft(this,`splice`,e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return ft(this,`unshift`,e)},values(){return st(this,`values`,e=>at(this,e))}};function st(e,t,n){let r=it(e),i=r[t]();return r!==e&&!Ut(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ct=Array.prototype;function lt(e,t,n,r,i,a){let o=it(e),s=o!==e&&!Ut(e),c=o[t];if(c!==ct[t]){let t=c.apply(e,a);return s?Kt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,at(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ut(e,t,n,r){let i=it(e),a=n;return i!==e&&(Ut(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,at(e,r),i,e)}),i[t](a,...r)}function dt(e,t,n){let r=V(e);tt(r,`iterate`,et);let i=r[t](...n);return(i===-1||i===!1)&&Wt(n[0])?(n[0]=V(n[0]),r[t](...n)):i}function ft(e,t,n=[]){We(),Pe();let r=V(e)[t].apply(e,n);return Fe(),Ge(),r}var pt=u(`__proto__,__v_isRef,__isVue`),mt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(D));function ht(e){D(e)||(e=String(e));let t=V(this);return tt(t,`has`,e),t.hasOwnProperty(e)}var gt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Pt:Nt:i?Mt:jt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=x(e);if(!r){let e;if(a&&(e=ot[t]))return e;if(t===`hasOwnProperty`)return ht}let o=Reflect.get(e,t,Jt(e)?e:n);if((D(t)?mt.has(t):pt(t))||(r||tt(e,`get`,t),i))return o;if(Jt(o)){let e=a&&te(t)?o:o.value;return r&&O(e)?zt(e):e}return O(o)?r?zt(o):Lt(o):o}},_t=class extends gt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=x(e)&&te(t);if(!this._isShallow){let e=Ht(i);if(!Ut(n)&&!Ht(n)&&(i=V(i),n=V(n)),!a&&Jt(i)&&!Jt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:b(e,t),s=Reflect.set(e,t,n,Jt(e)?e:r);return e===V(r)&&(o?ie(n,i)&&nt(e,`set`,t,n,i):nt(e,`add`,t,n)),s}deleteProperty(e,t){let n=b(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&nt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!D(t)||!mt.has(t))&&tt(e,`has`,t),n}ownKeys(e){return tt(e,`iterate`,x(e)?`length`:Qe),Reflect.ownKeys(e)}},vt=class extends gt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},yt=new _t,bt=new vt,xt=new _t(!0),St=e=>e,Ct=e=>Reflect.getPrototypeOf(e);function wt(e,t,n){return function(...r){let i=this.__v_raw,a=V(i),o=S(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?St:t?qt:Kt;return!t&&tt(a,`iterate`,c?$e:Qe),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Tt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Et(e,t){let n={get(n){let r=this.__v_raw,i=V(r),a=V(n);e||(ie(n,a)&&tt(i,`get`,n),tt(i,`get`,a));let{has:o}=Ct(i),s=t?St:e?qt:Kt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&tt(V(t),`iterate`,Qe),t.size},has(t){let n=this.__v_raw,r=V(n),i=V(t);return e||(ie(t,i)&&tt(r,`has`,t),tt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=V(a),s=t?St:e?qt:Kt;return!e&&tt(o,`iterate`,Qe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return _(n,e?{add:Tt(`add`),set:Tt(`set`),delete:Tt(`delete`),clear:Tt(`clear`)}:{add(e){!t&&!Ut(e)&&!Ht(e)&&(e=V(e));let n=V(this);return Ct(n).has.call(n,e)||(n.add(e),nt(n,`add`,e,e)),this},set(e,n){!t&&!Ut(n)&&!Ht(n)&&(n=V(n));let r=V(this),{has:i,get:a}=Ct(r),o=i.call(r,e);o||=(e=V(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?ie(n,s)&&nt(r,`set`,e,n,s):nt(r,`add`,e,n),this},delete(e){let t=V(this),{has:n,get:r}=Ct(t),i=n.call(t,e);i||=(e=V(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&nt(t,`delete`,e,void 0,a),o},clear(){let e=V(this),t=e.size!==0,n=e.clear();return t&&nt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=wt(r,e,t)}),n}function Dt(e,t){let n=Et(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(b(n,r)&&r in t?n:t,r,i)}var Ot={get:Dt(!1,!1)},kt={get:Dt(!1,!0)},At={get:Dt(!0,!1)},jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;function Ft(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function It(e){return e.__v_skip||!Object.isExtensible(e)?0:Ft(M(e))}function Lt(e){return Ht(e)?e:Bt(e,!1,yt,Ot,jt)}function Rt(e){return Bt(e,!1,xt,kt,Mt)}function zt(e){return Bt(e,!0,bt,At,Nt)}function Bt(e,t,n,r,i){if(!O(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=It(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Vt(e){return Ht(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Ut(e){return!!(e&&e.__v_isShallow)}function Wt(e){return e?!!e.__v_raw:!1}function V(e){let t=e&&e.__v_raw;return t?V(t):e}function Gt(e){return!b(e,`__v_skip`)&&Object.isExtensible(e)&&oe(e,`__v_skip`,!0),e}var Kt=e=>O(e)?Lt(e):e,qt=e=>O(e)?zt(e):e;function Jt(e){return e?e.__v_isRef===!0:!1}function H(e){return Xt(e,!1)}function Yt(e){return Xt(e,!0)}function Xt(e,t){return Jt(e)?e:new Zt(e,t)}var Zt=class{constructor(e,t){this.dep=new Ye,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:V(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ut(e)||Ht(e);e=n?e:V(e),ie(e,t)&&(this._rawValue=e,this._value=n?e:Kt(e),this.dep.trigger())}};function Qt(e){return Jt(e)?e.value:e}var $t={get:(e,t,n)=>t===`__v_raw`?e:Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Jt(i)&&!Jt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function en(e){return Vt(e)?e:new Proxy(e,$t)}var tn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ye(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&B!==this)return Ne(this,!0),!0}get value(){let e=this.dep.track();return ze(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function nn(e,t,n=!1){let r,i;return T(e)?r=e:(r=e.get,i=e.set),new tn(r,i,n)}var rn={},an=new WeakMap,on=void 0;function sn(e,t=!1,n=on){if(n){let t=an.get(n);t||an.set(n,t=[]),t.push(e)}}function cn(e,t,n=d){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Ut(e)||i===!1||i===0?ln(e,1):ln(e),u,f,m,h,g=!1,_=!1;if(Jt(e)?(f=()=>e.value,g=Ut(e)):Vt(e)?(f=()=>l(e),g=!0):x(e)?(_=!0,g=e.some(e=>Vt(e)||Ut(e)),f=()=>e.map(e=>{if(Jt(e))return e.value;if(Vt(e))return l(e);if(T(e))return c?c(e,2):e()})):f=T(e)?t?c?()=>c(e,2):e:()=>{if(m){We();try{m()}finally{Ge()}}let t=on;on=u;try{return c?c(e,3,[h]):e(h)}finally{on=t}}:p,t&&i){let e=f,t=i===!0?1/0:i;f=()=>ln(e(),t)}let y=De(),b=()=>{u.stop(),y&&y.active&&v(y.effects,u)};if(a&&t){let e=t;t=(...t)=>{e(...t),b()}}let S=_?Array(e.length).fill(rn):rn,C=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let e=u.run();if(i||g||(_?e.some((e,t)=>ie(e,S[t])):ie(e,S))){m&&m();let n=on;on=u;try{let n=[e,S===rn?void 0:_&&S[0]===rn?[]:S,h];S=e,c?c(t,3,n):t(...n)}finally{on=n}}}else u.run()};return s&&s(C),u=new ke(f),u.scheduler=o?()=>o(C,!1):C,h=e=>sn(e,!1,u),m=u.onStop=()=>{let e=an.get(u);if(e){if(c)c(e,4);else for(let t of e)t();an.delete(u)}},t?r?C(!0):S=u.run():o?o(C.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function ln(e,t=1/0,n){if(t<=0||!O(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Jt(e))ln(e.value,t,n);else if(x(e))for(let r=0;r<e.length;r++)ln(e[r],t,n);else if(C(e)||S(e))e.forEach(e=>{ln(e,t,n)});else if(ee(e)){for(let r in e)ln(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ln(e[r],t,n)}return e}function un(e,t,n,r){try{return r?e(...r):e()}catch(e){fn(e,t,n)}}function dn(e,t,n,r){if(T(e)){let i=un(e,t,n,r);return i&&k(i)&&i.catch(e=>{fn(e,t,n)}),i}if(x(e)){let i=[];for(let a=0;a<e.length;a++)i.push(dn(e[a],t,n,r));return i}}function fn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||d;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){We(),un(a,null,10,[e,i,o]),Ge();return}}pn(e,n,i,r,o)}function pn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var mn=[],hn=-1,gn=[],_n=null,vn=0,yn=Promise.resolve(),bn=null;function xn(e){let t=bn||yn;return e?t.then(this?e.bind(this):e):t}function Sn(e){let t=hn+1,n=mn.length;for(;t<n;){let r=t+n>>>1,i=mn[r],a=On(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Cn(e){if(!(e.flags&1)){let t=On(e),n=mn[mn.length-1];!n||!(e.flags&2)&&t>=On(n)?mn.push(e):mn.splice(Sn(t),0,e),e.flags|=1,wn()}}function wn(){bn||=yn.then(kn)}function Tn(e){x(e)?gn.push(...e):_n&&e.id===-1?_n.splice(vn+1,0,e):e.flags&1||(gn.push(e),e.flags|=1),wn()}function En(e,t,n=hn+1){for(;n<mn.length;n++){let t=mn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;mn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Dn(e){if(gn.length){let e=[...new Set(gn)].sort((e,t)=>On(e)-On(t));if(gn.length=0,_n){_n.push(...e);return}for(_n=e,vn=0;vn<_n.length;vn++){let e=_n[vn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}_n=null,vn=0}}var On=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kn(e){try{for(hn=0;hn<mn.length;hn++){let e=mn[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),un(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<mn.length;hn++){let e=mn[hn];e&&(e.flags&=-2)}hn=-1,mn.length=0,Dn(e),bn=null,(mn.length||gn.length)&&kn(e)}}var An=null,jn=null;function Mn(e){let t=An;return An=e,jn=e&&e.type.__scopeId||null,t}function Nn(e,t=An,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Bi(-1);let i=Mn(t),a;try{a=e(...n)}finally{Mn(i),r._d&&Bi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function U(e,t){if(An===null)return e;let n=Sa(An),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=d]=t[e];i&&(T(i)&&(i={mounted:i,updated:i}),i.deep&&ln(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function Pn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(We(),dn(c,n,8,[e.el,s,e,t]),Ge())}}function Fn(e,t){if(oa){let n=oa.provides,r=oa.parent&&oa.parent.provides;r===n&&(n=oa.provides=Object.create(r)),n[e]=t}}function In(e,t,n=!1){let r=sa();if(r||Wr){let i=Wr?Wr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&T(t)?t.call(r&&r.proxy):t}}var Ln=Symbol.for(`v-scx`),Rn=()=>In(Ln);function zn(e,t,n){return Bn(e,t,n)}function Bn(e,t,n=d){let{immediate:r,deep:i,flush:a,once:o}=n,s=_({},n),c=t&&r||!t&&a!==`post`,l;if(pa){if(a===`sync`){let e=Rn();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=p,e.resume=p,e.pause=p,e}}let u=oa;s.call=(e,t,n)=>dn(e,u,t,n);let f=!1;a===`post`?s.scheduler=e=>{bi(e,u&&u.suspense)}:a!==`sync`&&(f=!0,s.scheduler=(e,t)=>{t?e():Cn(e)}),s.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let m=cn(e,t,s);return pa&&(l?l.push(m):c&&m()),m}function Vn(e,t,n){let r=this.proxy,i=E(e)?e.includes(`.`)?Hn(r,e):()=>r[e]:e.bind(r,r),a;T(t)?a=t:(a=t.handler,n=t);let o=ua(this),s=Bn(i,a.bind(r),n);return o(),s}function Hn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Un=Symbol(`_vte`),Wn=e=>e.__isTeleport,Gn=Symbol(`_leaveCb`);function Kn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Kn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function qn(e,t){return T(e)?(()=>_({name:e.name},t,{setup:e}))():e}function Jn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}var Yn=new WeakMap;function Xn(e,t,n,r,i=!1){if(x(e)){e.forEach((e,a)=>Xn(e,t&&(x(t)?t[a]:t),n,r,i));return}if(Qn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Xn(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?Sa(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===d?s.refs={}:s.refs,f=s.setupState,p=V(f),h=f===d?m:e=>b(p,e),g=e=>!0;if(l!=null&&l!==c){if(Zn(t),E(l))u[l]=null,h(l)&&(f[l]=null);else if(Jt(l)){g(l)&&(l.value=null);let e=t;e.k&&(u[e.k]=null)}}if(T(c))un(c,s,12,[o,u]);else{let t=E(c),r=Jt(c);if(t||r){let s=()=>{if(e.f){let n=t?h(c)?f[c]:u[c]:g(c)||!e.k?c.value:u[e.k];if(i)x(n)&&v(n,a);else if(x(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],h(c)&&(f[c]=u[c]);else{let t=[a];g(c)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,h(c)&&(f[c]=o)):r&&(g(c)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Yn.delete(e)};t.id=-1,Yn.set(e,t),bi(t,n)}else Zn(e),s()}}}function Zn(e){let t=Yn.get(e);t&&(t.flags|=8,Yn.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var Qn=e=>!!e.type.__asyncLoader,$n=e=>e.type.__isKeepAlive;function er(e,t){nr(e,`a`,t)}function tr(e,t){nr(e,`da`,t)}function nr(e,t,n=oa){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ir(t,r,n),n){let e=n.parent;for(;e&&e.parent;)$n(e.parent.vnode)&&rr(r,t,n,e),e=e.parent}}function rr(e,t,n,r){let i=ir(t,e,r,!0);dr(()=>{v(r[t],i)},n)}function ir(e,t,n=oa,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{We();let i=ua(n),a=dn(t,n,e,r);return i(),Ge(),a};return r?i.unshift(a):i.push(a),a}}var ar=e=>(t,n=oa)=>{(!pa||e===`sp`)&&ir(e,(...e)=>t(...e),n)},or=ar(`bm`),sr=ar(`m`),cr=ar(`bu`),lr=ar(`u`),ur=ar(`bum`),dr=ar(`um`),fr=ar(`sp`),pr=ar(`rtg`),mr=ar(`rtc`);function hr(e,t=oa){ir(`ec`,e,t)}var gr=`components`;function _r(e,t){return yr(gr,e,!0,t)||e}var vr=Symbol.for(`v-ndc`);function yr(e,t,n=!0,r=!1){let i=An||oa;if(i){let n=i.type;if(e===gr){let e=Ca(n,!1);if(e&&(e===t||e===I(t)||e===ne(I(t))))return n}let a=br(i[e]||n[e],t)||br(i.appContext[e],t);return!a&&r?n:a}}function br(e,t){return e&&(e[t]||e[I(t)]||e[ne(I(t))])}function W(e,t,n,r){let i,a=n&&n[r],o=x(e);if(o||E(e)){let n=o&&Vt(e),r=!1,s=!1;n&&(r=!Ut(e),s=Ht(e),e=it(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?qt(Kt(e[n])):Kt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(O(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var xr=e=>e?fa(e)?Sa(e):xr(e.parent):null,Sr=_(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xr(e.parent),$root:e=>xr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jr(e),$forceUpdate:e=>e.f||=()=>{Cn(e.update)},$nextTick:e=>e.n||=xn.bind(e.proxy),$watch:e=>Vn.bind(e)}),Cr=(e,t)=>e!==d&&!e.__isScriptSetup&&b(e,t),wr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Cr(r,t))return o[t]=1,r[t];else if(i!==d&&b(i,t))return o[t]=2,i[t];else if(b(a,t))return o[t]=3,a[t];else if(n!==d&&b(n,t))return o[t]=4,n[t];else Er&&(o[t]=0)}let l=Sr[t],u,f;if(l)return t===`$attrs`&&tt(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==d&&b(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,b(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Cr(i,t)?(i[t]=n,!0):r!==d&&b(r,t)?(r[t]=n,!0):b(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==d&&s[0]!==`$`&&b(e,s)||Cr(t,s)||b(a,s)||b(r,s)||b(Sr,s)||b(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?b(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Tr(e){return x(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Er=!0;function Dr(e){let t=jr(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&kr(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:S,render:C,renderTracked:w,renderTriggered:E,errorCaptured:D,serverPrefetch:k,expose:A,inheritAttrs:j,components:M,directives:ee,filters:te}=t;if(l&&Or(l,r,null),o)for(let e in o){let t=o[e];T(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);O(t)&&(e.data=Lt(t))}if(Er=!0,a)for(let e in a){let t=a[e],i=Z({get:T(t)?t.bind(n,n):T(t.get)?t.get.bind(n,n):p,set:!T(t)&&T(t.set)?t.set.bind(n):p});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Ar(s[e],r,n,e);if(c){let e=T(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Fn(t,e[t])})}u&&kr(u,e,`c`);function N(e,t){x(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(N(or,d),N(sr,f),N(cr,m),N(lr,h),N(er,g),N(tr,_),N(hr,D),N(mr,w),N(pr,E),N(ur,y),N(dr,S),N(fr,k),x(A))if(A.length){let t=e.exposed||={};A.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};C&&e.render===p&&(e.render=C),j!=null&&(e.inheritAttrs=j),M&&(e.components=M),ee&&(e.directives=ee),k&&Jn(e)}function Or(e,t,n=p){for(let n in x(e)&&(e=Ir(e)),e){let r=e[n],i;i=O(r)?`default`in r?In(r.from||n,r.default,!0):In(r.from||n):In(r),Jt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function kr(e,t,n){dn(x(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ar(e,t,n,r){let i=r.includes(`.`)?Hn(n,r):()=>n[r];if(E(e)){let n=t[e];T(n)&&zn(i,n)}else if(T(e))zn(i,e.bind(n));else if(O(e))if(x(e))e.forEach(e=>Ar(e,t,n,r));else{let r=T(e.handler)?e.handler.bind(n):t[e.handler];T(r)&&zn(i,r,e)}}function jr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Mr(c,e,o,!0)),Mr(c,t,o)),O(t)&&a.set(t,c),c}function Mr(e,t,n,r=!1){let{mixins:i,extends:a}=t;for(let o in a&&Mr(e,a,n,!0),i&&i.forEach(t=>Mr(e,t,n,!0)),t)if(!(r&&o===`expose`)){let r=Nr[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}var Nr={data:Pr,props:zr,emits:zr,methods:Rr,computed:Rr,beforeCreate:Lr,created:Lr,beforeMount:Lr,mounted:Lr,beforeUpdate:Lr,updated:Lr,beforeDestroy:Lr,beforeUnmount:Lr,destroyed:Lr,unmounted:Lr,activated:Lr,deactivated:Lr,errorCaptured:Lr,serverPrefetch:Lr,components:Rr,directives:Rr,watch:Br,provide:Pr,inject:Fr};function Pr(e,t){return t?e?function(){return _(T(e)?e.call(this,this):e,T(t)?t.call(this,this):t)}:t:e}function Fr(e,t){return Rr(Ir(e),Ir(t))}function Ir(e){if(x(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Lr(e,t){return e?[...new Set([].concat(e,t))]:t}function Rr(e,t){return e?_(Object.create(null),e,t):t}function zr(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:_(Object.create(null),Tr(e),Tr(t??{})):t}function Br(e,t){if(!e)return t;if(!t)return e;let n=_(Object.create(null),e);for(let r in t)n[r]=Lr(e[r],t[r]);return n}function Vr(){return{app:null,config:{isNativeTag:m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Hr=0;function Ur(e,t){return function(n,r=null){T(n)||(n=_({},n)),r!=null&&!O(r)&&(r=null);let i=Vr(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Hr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ea,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&T(e.install)?(a.add(e),e.install(c,...t)):T(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||Y(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Sa(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(dn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Wr;Wr=c;try{return e()}finally{Wr=t}}};return c}}var Wr=null,Gr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${I(t)}Modifiers`]||e[`${R(t)}Modifiers`];function Kr(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||d,i=n,a=t.startsWith(`update:`),o=a&&Gr(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>E(e)?e.trim():e)),o.number&&(i=n.map(se)));let s,c=r[s=re(t)]||r[s=re(I(t))];!c&&a&&(c=r[s=re(R(t))]),c&&dn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,dn(l,e,6,i)}}var qr=new WeakMap;function Jr(e,t,n=!1){let r=n?qr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!T(e)){let r=e=>{let n=Jr(e,t,!0);n&&(s=!0,_(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(O(e)&&r.set(e,null),null):(x(a)?a.forEach(e=>o[e]=null):_(o,a),O(e)&&r.set(e,o),o)}function Yr(e,t){return!e||!h(t)?!1:(t=t.slice(2).replace(/Once$/,``),b(e,t[0].toLowerCase()+t.slice(1))||b(e,R(t))||b(e,t))}function Xr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,_=Mn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Qi(l.call(t,e,u,d,p,f,m)),y=s}else{let e=t;v=Qi(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),y=t.props?s:Zr(s)}}catch(t){Ii.length=0,fn(t,e,1),v=Y(Pi)}let b=v;if(y&&h!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(g)&&(y=Qr(y,a)),b=Yi(b,y,!1,!0))}return n.dirs&&(b=Yi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Kn(b,n.transition),v=b,Mn(_),v}var Zr=e=>{let t;for(let n in e)(n===`class`||n===`style`||h(n))&&((t||={})[n]=e[n]);return t},Qr=(e,t)=>{let n={};for(let r in e)(!g(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $r(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ei(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!Yr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ei(r,o,l):!0:!!o;return!1}function ei(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!Yr(n,a))return!0}return!1}function ti({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var ni={},ri=()=>Object.create(ni),ii=e=>Object.getPrototypeOf(e)===ni;function ai(e,t,n,r=!1){let i={},a=ri();for(let n in e.propsDefaults=Object.create(null),si(e,t,i,a),e.propsOptions[0])n in i||(i[n]=void 0);n?e.props=r?i:Rt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function oi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=V(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Yr(e.emitsOptions,o))continue;let u=t[o];if(c)if(b(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=I(o);i[t]=ci(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{si(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!b(t,a)&&((r=R(a))===a||!b(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ci(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!b(t,e))&&(delete a[e],l=!0)}l&&nt(e.attrs,`set`,``)}function si(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(N(c))continue;let l=t[c],u;i&&b(i,u=I(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Yr(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=V(n),r=s||d;for(let o=0;o<a.length;o++){let s=a[o];n[s]=ci(i,t,s,r[s],e,!b(r,s))}}return o}function ci(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=b(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&T(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ua(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===R(n))&&(r=!0))}return r}var li=new WeakMap;function ui(e,t,n=!1){let r=n?li:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!T(e)){let r=e=>{c=!0;let[n,r]=ui(e,t,!0);_(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return O(e)&&r.set(e,f),f;if(x(a))for(let e=0;e<a.length;e++){let t=I(a[e]);di(t)&&(o[t]=d)}else if(a)for(let e in a){let t=I(e);if(di(t)){let n=a[e],r=o[t]=x(n)||T(n)?{type:n}:_({},n),i=r.type,c=!1,l=!0;if(x(i))for(let e=0;e<i.length;++e){let t=i[e],n=T(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=T(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||b(r,`default`))&&s.push(t)}}let l=[o,s];return O(e)&&r.set(e,l),l}function di(e){return e[0]!==`$`&&!N(e)}var fi=e=>e===`_`||e===`_ctx`||e===`$stable`,pi=e=>x(e)?e.map(Qi):[Qi(e)],mi=(e,t,n)=>{if(t._n)return t;let r=Nn((...e)=>pi(t(...e)),n);return r._c=!1,r},hi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(fi(n))continue;let i=e[n];if(T(i))t[n]=mi(n,i,r);else if(i!=null){let e=pi(i);t[n]=()=>e}}},gi=(e,t)=>{let n=pi(t);e.slots.default=()=>n},_i=(e,t,n)=>{for(let r in t)(n||!fi(r))&&(e[r]=t[r])},vi=(e,t,n)=>{let r=e.slots=ri();if(e.vnode.shapeFlag&32){let e=t._;e?(_i(r,t,n),n&&oe(r,`_`,e,!0)):hi(t,r)}else t&&gi(e,t)},yi=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=d;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:_i(i,t,n):(a=!t.$stable,hi(t,i)),o=t}else t&&(gi(e,t),o={default:1});if(a)for(let e in i)!fi(e)&&o[e]==null&&delete i[e]},bi=Mi;function xi(e){return Si(e)}function Si(e,t){let n=le();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:m,nextSibling:h,setScopeId:g=p,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wi(e,t)&&(r=ue(e),re(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ni:y(e,t,n,r);break;case Pi:b(e,t,n,r);break;case Fi:e??x(t,n,r,o);break;case G:j(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?M(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,pe)}u!=null&&i?Xn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Xn(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=h(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),O(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&D(e.children,f,null,i,s,Ci(e,c),l,d),_&&Pn(e,null,i,`created`),E(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!N(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&na(p,i,e)}_&&Pn(e,null,i,`beforeMount`);let v=Ti(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&bi(()=>{p&&na(p,i,e),v&&g.enter(f),_&&Pn(e,null,i,`mounted`)},s)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ji(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?$i(e[l]):Qi(e[l]),t,n,r,i,a,o,s)},O=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:f,dirs:p}=t;l|=e.patchFlag&16;let m=e.props||d,h=t.props||d,g;if(n&&wi(n,!1),(g=h.onVnodeBeforeUpdate)&&na(g,n,t,e),p&&Pn(t,e,n,`beforeUpdate`),n&&wi(n,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&u(c,``),f?k(e.dynamicChildren,f,c,n,r,Ci(t,i),o):s||I(e,t,c,null,n,r,Ci(t,i),o,!1),l>0){if(l&16)A(c,m,h,n,i);else if(l&2&&m.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,m.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=m[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&f==null&&A(c,m,h,n,i);((g=h.onVnodeUpdated)||p)&&bi(()=>{g&&na(g,n,t,e),p&&Pn(t,e,n,`updated`)},r)},k=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===G||!Wi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},A=(e,t,n,r,i)=>{if(t!==n){if(t!==d)for(let o in t)!N(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(N(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},j=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(k(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Ei(e,t,!0)):I(e,t,n,f,a,o,c,l,u)},M=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ee(t,n,r,i,a,o,c):te(e,t,c)},ee=(e,t,n,r,i,a,o)=>{let s=e.component=aa(e,r,i);if($n(e)&&(s.ctx.renderer=pe),ma(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,P,o),!e.el){let r=s.subTree=Y(Pi);b(null,r,t,n),e.placeholder=r.el}}else P(s,e,t,n,i,a,o)},te=(e,t,n)=>{let r=t.component=e.component;if($r(e,t,n))if(r.asyncDep&&!r.asyncResolved){F(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},P=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=Oi(e);if(n){t&&(t.el=l.el,F(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,d;wi(e,!1),t?(t.el=l.el,F(e,t,o)):t=l,n&&ae(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&na(d,c,t,l),wi(e,!0);let f=Xr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ue(p),e,i,a),t.el=f.el,u===null&&ti(e,f.el),r&&bi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&bi(()=>na(d,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Qn(t);if(wi(e,!1),l&&ae(l),!m&&(o=c&&c.onVnodeBeforeMount)&&na(o,d,t),wi(e,!0),s&&he){let t=()=>{e.subTree=Xr(e),he(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=Xr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&bi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;bi(()=>na(o,d,e),i)}(t.shapeFlag&256||d&&Qn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&bi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new ke(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Cn(u),wi(e,!0),l()},F=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,oi(e,t.props,r,n),yi(e,t.children,n),We(),En(e),Ge()},I=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){R(l,f,n,r,i,a,o,s,c);return}else if(p&256){L(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&ce(l,i,a),f!==l&&u(n,f)):d&16?m&16?R(l,f,n,r,i,a,o,s,c):ce(l,i,a,!0):(d&8&&u(n,``),m&16&&D(f,n,r,i,a,o,s,c))},L=(e,t,n,r,i,a,o,s,c)=>{e||=f,t||=f;let l=e.length,u=t.length,d=Math.min(l,u),p;for(p=0;p<d;p++){let r=t[p]=c?$i(t[p]):Qi(t[p]);v(e[p],r,n,null,i,a,o,s,c)}l>u?ce(e,i,a,!0,!1,d):D(t,n,r,i,a,o,s,c,d)},R=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,p=u-1;for(;l<=d&&l<=p;){let r=e[l],u=t[l]=c?$i(t[l]):Qi(t[l]);if(Wi(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=p;){let r=e[d],l=t[p]=c?$i(t[p]):Qi(t[p]);if(Wi(r,l))v(r,l,n,null,i,a,o,s,c);else break;d--,p--}if(l>d){if(l<=p){let e=p+1,d=e<u?t[e].el:r;for(;l<=p;)v(null,t[l]=c?$i(t[l]):Qi(t[l]),n,d,i,a,o,s,c),l++}}else if(l>p)for(;l<=d;)re(e[l],i,a,!0),l++;else{let m=l,h=l,g=new Map;for(l=h;l<=p;l++){let e=t[l]=c?$i(t[l]):Qi(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=m;l<=d;l++){let r=e[l];if(y>=b){re(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Wi(r,t[_])){u=_;break}u===void 0?re(r,i,a,!0):(C[u-h]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?Di(C):f;for(_=w.length-1,l=b-1;l>=0;l--){let e=h+l,d=t[e],f=t[e+1],p=e+1<u?f.el||Ai(f):r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?ne(d,n,p,2):_--)}}},ne=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ne(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,pe);return}if(c===G){r(s,t,n);for(let e=0;e<u.length;e++)ne(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Fi){S(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.beforeEnter(s),r(s,t,n),bi(()=>l.enter(s),o);else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{s._isLeaving&&s[Gn](!0),a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},re=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(We(),Xn(s,null,n,e,!0),Ge()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!Qn(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&na(g,t,e),u&6)se(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&Pn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,pe,r):l&&!l.hasOnce&&(a!==G||d>0&&d&64)?ce(l,t,n,!1,!0):(a===G&&d&384||!i&&u&16)&&ce(c,t,n),r&&ie(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&bi(()=>{g&&na(g,t,e),m&&Pn(e,null,t,`unmounted`)},n)},ie=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===G){oe(n,r);return}if(t===Fi){C(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},oe=(e,t)=>{let n;for(;e!==t;)n=h(e),i(e),e=n;i(t)},se=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ki(c),ki(l),r&&ae(r),i.stop(),a&&(a.flags|=8,re(o,e,t,n)),s&&bi(s,t),bi(()=>{e.isUnmounted=!0},t)},ce=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)re(e[o],t,n,r,i)},ue=e=>{if(e.shapeFlag&6)return ue(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Un];return n?h(n):t},de=!1,fe=(e,t,n)=>{let r;e==null?t._vnode&&(re(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,de||=(de=!0,En(r),Dn(),!1)},pe={p:v,um:re,m:ne,r:ie,mt:ee,mc:D,pc:I,pbc:k,n:ue,o:e},me,he;return t&&([me,he]=t(pe)),{render:fe,hydrate:me,createApp:Ur(fe,me)}}function Ci({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function wi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ti(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ei(e,t,n=!1){let r=e.children,i=t.children;if(x(r)&&x(i))for(let t=0;t<r.length;t++){let a=r[t],o=i[t];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[t]=$i(i[t]),o.el=a.el),!n&&o.patchFlag!==-2&&Ei(a,o)),o.type===Ni&&(o.patchFlag===-1?o.__elIndex=t+(e.type===G?1:0):o.el=a.el),o.type===Pi&&!o.el&&(o.el=a.el)}}function Di(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Oi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Oi(t)}function ki(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ai(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ai(t.subTree):null}var ji=e=>e.__isSuspense;function Mi(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):Tn(e)}var G=Symbol.for(`v-fgt`),Ni=Symbol.for(`v-txt`),Pi=Symbol.for(`v-cmt`),Fi=Symbol.for(`v-stc`),Ii=[],Li=null;function K(e=!1){Ii.push(Li=e?null:[])}function Ri(){Ii.pop(),Li=Ii[Ii.length-1]||null}var zi=1;function Bi(e,t=!1){zi+=e,e<0&&Li&&t&&(Li.hasOnce=!0)}function Vi(e){return e.dynamicChildren=zi>0?Li||f:null,Ri(),zi>0&&Li&&Li.push(e),e}function q(e,t,n,r,i,a){return Vi(J(e,t,n,r,i,a,!0))}function Hi(e,t,n,r,i){return Vi(Y(e,t,n,r,i,!0))}function Ui(e){return e?e.__v_isVNode===!0:!1}function Wi(e,t){return e.type===t.type&&e.key===t.key}var Gi=({key:e})=>e??null,Ki=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:E(e)||Jt(e)||T(e)?{i:An,r:e,k:t,f:!!n}:e);function J(e,t=null,n=null,r=0,i=null,a=e===G?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gi(t),ref:t&&Ki(t),scopeId:jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:An};return s?(ea(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=E(n)?8:16),zi>0&&!o&&Li&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Li.push(c),c}var Y=qi;function qi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===vr)&&(e=Pi),Ui(e)){let r=Yi(e,t,!0);return n&&ea(r,n),zi>0&&!a&&Li&&(r.shapeFlag&6?Li[Li.indexOf(e)]=r:Li.push(r)),r.patchFlag=-2,r}if(wa(e)&&(e=e.__vccOpts),t){t=Ji(t);let{class:e,style:n}=t;e&&!E(e)&&(t.class=he(e)),O(n)&&(Wt(n)&&!x(n)&&(n=_({},n)),t.style=ue(n))}let o=E(e)?1:ji(e)?128:Wn(e)?64:O(e)?4:T(e)?2:0;return J(e,t,n,r,i,o,a,!0)}function Ji(e){return e?Wt(e)||ii(e)?_({},e):e:null}function Yi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ta(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Gi(l),ref:t&&t.ref?n&&a?x(a)?a.concat(Ki(t)):[a,Ki(t)]:Ki(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==G?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yi(e.ssContent),ssFallback:e.ssFallback&&Yi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Kn(u,c.clone(u)),u}function X(e=` `,t=0){return Y(Ni,null,e,t)}function Xi(e,t){let n=Y(Fi,null,e);return n.staticCount=t,n}function Zi(e=``,t=!1){return t?(K(),Hi(Pi,null,e)):Y(Pi,null,e)}function Qi(e){return e==null||typeof e==`boolean`?Y(Pi):x(e)?Y(G,null,e.slice()):Ui(e)?$i(e):Y(Ni,null,String(e))}function $i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yi(e)}function ea(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ea(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ii(t)?t._ctx=An:r===3&&An&&(An.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else T(t)?(t={default:t,_ctx:An},n=32):(t=String(t),r&64?(n=16,t=[X(t)]):n=8);e.children=t,e.shapeFlag|=n}function ta(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=he([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(h(e)){let n=t[e],i=r[e];i&&n!==i&&!(x(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function na(e,t,n,r=null){dn(e,t,7,[n,r])}var ra=Vr(),ia=0;function aa(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||ra,a={uid:ia++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ee(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ui(r,i),emitsOptions:Jr(r,i),emit:null,emitted:null,propsDefaults:d,inheritAttrs:r.inheritAttrs,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Kr.bind(null,a),e.ce&&e.ce(a),a}var oa=null,sa=()=>oa||An,ca,la;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ca=t(`__VUE_INSTANCE_SETTERS__`,e=>oa=e),la=t(`__VUE_SSR_SETTERS__`,e=>pa=e)}var ua=e=>{let t=oa;return ca(e),e.scope.on(),()=>{e.scope.off(),ca(t)}},da=()=>{oa&&oa.scope.off(),ca(null)};function fa(e){return e.vnode.shapeFlag&4}var pa=!1;function ma(e,t=!1,n=!1){t&&la(t);let{props:r,children:i}=e.vnode,a=fa(e);ai(e,r,a,t),vi(e,i,n||t);let o=a?ha(e,t):void 0;return t&&la(!1),o}function ha(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wr);let{setup:r}=n;if(r){We();let n=e.setupContext=r.length>1?xa(e):null,i=ua(e),a=un(r,e,0,[e.props,n]),o=k(a);if(Ge(),i(),(o||e.sp)&&!Qn(e)&&Jn(e),o){if(a.then(da,da),t)return a.then(n=>{ga(e,n,t)}).catch(t=>{fn(t,e,0)});e.asyncDep=a}else ga(e,a,t)}else ya(e,t)}function ga(e,t,n){T(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:O(t)&&(e.setupState=en(t)),ya(e,n)}var _a,va;function ya(e,t,n){let r=e.type;if(!e.render){if(!t&&_a&&!r.render){let t=r.template||jr(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=_a(t,_(_({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||p,va&&va(e)}{let t=ua(e);We();try{Dr(e)}finally{Ge(),t()}}}var ba={get(e,t){return tt(e,`get`,``),e[t]}};function xa(e){return{attrs:new Proxy(e.attrs,ba),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Sa(e){return e.exposed?e.exposeProxy||=new Proxy(en(Gt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Sr)return Sr[n](e)},has(e,t){return t in e||t in Sr}}):e.proxy}function Ca(e,t=!0){return T(e)?e.displayName||e.name:e.name||t&&e.__name}function wa(e){return T(e)&&`__vccOpts`in e}var Z=(e,t)=>nn(e,t,pa);function Ta(e,t,n){try{Bi(-1);let r=arguments.length;return r===2?O(t)&&!x(t)?Ui(t)?Y(e,null,[t]):Y(e,t):Y(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ui(n)&&(n=[n]),Y(e,t,n))}finally{Bi(1)}}var Ea=`3.5.26`,Da=void 0,Oa=typeof window<`u`&&window.trustedTypes;if(Oa)try{Da=Oa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var ka=Da?e=>Da.createHTML(e):e=>e,Aa=`http://www.w3.org/2000/svg`,ja=`http://www.w3.org/1998/Math/MathML`,Ma=typeof document<`u`?document:null,Na=Ma&&Ma.createElement(`template`),Pa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ma.createElementNS(Aa,e):t===`mathml`?Ma.createElementNS(ja,e):n?Ma.createElement(e,{is:n}):Ma.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ma.createTextNode(e),createComment:e=>Ma.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ma.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Na.innerHTML=ka(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Na.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Fa=Symbol(`_vtc`);function Ia(e,t,n){let r=e[Fa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var La=Symbol(`_vod`),Ra=Symbol(`_vsh`),za=Symbol(``),Ba=/(?:^|;)\s*display\s*:/;function Va(e,t,n){let r=e.style,i=E(n),a=!1;if(n&&!i){if(t)if(E(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ua(r,t,``)}else for(let e in t)n[e]??Ua(r,e,``);for(let e in n)e===`display`&&(a=!0),Ua(r,e,n[e])}else if(i){if(t!==n){let e=r[za];e&&(n+=`;`+e),r.cssText=n,a=Ba.test(n)}}else t&&e.removeAttribute(`style`);La in e&&(e[La]=a?r.display:``,e[Ra]&&(r.display=`none`))}var Ha=/\s*!important$/;function Ua(e,t,n){if(x(n))n.forEach(n=>Ua(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ka(e,t);Ha.test(n)?e.setProperty(R(r),n.replace(Ha,``),`important`):e[r]=n}}var Wa=[`Webkit`,`Moz`,`ms`],Ga={};function Ka(e,t){let n=Ga[t];if(n)return n;let r=I(t);if(r!==`filter`&&r in e)return Ga[t]=r;r=ne(r);for(let n=0;n<Wa.length;n++){let i=Wa[n]+r;if(i in e)return Ga[t]=i}return t}var qa=`http://www.w3.org/1999/xlink`;function Ja(e,t,n,r,i,a=_e(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(qa,t.slice(6,t.length)):e.setAttributeNS(qa,t,n):n==null||a&&!ve(n)?e.removeAttribute(t):e.setAttribute(t,a?``:D(n)?String(n):n)}function Ya(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?ka(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ve(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Xa(e,t,n,r){e.addEventListener(t,n,r)}function Za(e,t,n,r){e.removeEventListener(t,n,r)}var Qa=Symbol(`_vei`);function $a(e,t,n,r,i=null){let a=e[Qa]||(e[Qa]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=to(t);r?Xa(e,n,a[t]=ao(r,i),s):o&&(Za(e,n,o,s),a[t]=void 0)}}var eo=/(?:Once|Passive|Capture)$/;function to(e){let t;if(eo.test(e)){t={};let n;for(;n=e.match(eo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):R(e.slice(2)),t]}var no=0,ro=Promise.resolve(),io=()=>no||=(ro.then(()=>no=0),Date.now());function ao(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;dn(oo(e,n.value),t,5,[e])};return n.value=e,n.attached=io(),n}function oo(e,t){if(x(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var so=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,co=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Ia(e,r,o):t===`style`?Va(e,n,r):h(t)?g(t)||$a(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):lo(e,t,r,o))?(Ya(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ja(e,t,r,o,a,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!E(r))?Ya(e,I(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ja(e,t,r,o))};function lo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&so(t)&&T(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return so(t)&&E(n)?!1:t in e}var uo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return x(t)?e=>ae(t,e):t};function fo(e){e.target.composing=!0}function po(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var mo=Symbol(`_assign`);function ho(e,t,n){return t&&(e=e.trim()),n&&(e=se(e)),e}var Q={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[mo]=uo(i);let a=r||i.props&&i.props.type===`number`;Xa(e,t?`change`:`input`,t=>{t.target.composing||e[mo](ho(e.value,n,a))}),(n||a)&&Xa(e,`change`,()=>{e.value=ho(e.value,n,a)}),t||(Xa(e,`compositionstart`,fo),Xa(e,`compositionend`,po),Xa(e,`change`,po))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[mo]=uo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?se(e.value):e.value,c=t??``;s!==c&&(document.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c))}},go={deep:!0,created(e,t,n){e[mo]=uo(n),Xa(e,`change`,()=>{let t=e._modelValue,n=xo(e),r=e.checked,i=e[mo];if(x(t)){let e=xe(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(C(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(So(e,r))})},mounted:_o,beforeUpdate(e,t,n){e[mo]=uo(n),_o(e,t,n)}};function _o(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(x(t))i=xe(t,r.props.value)>-1;else if(C(t))i=t.has(r.props.value);else{if(t===n)return;i=be(t,So(e,!0))}e.checked!==i&&(e.checked=i)}var vo={created(e,{value:t},n){e.checked=be(t,n.props.value),e[mo]=uo(n),Xa(e,`change`,()=>{e[mo](xo(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[mo]=uo(r),t!==n&&(e.checked=be(t,r.props.value))}},yo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=C(t);Xa(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?se(xo(e)):xo(e));e[mo](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,xn(()=>{e._assigning=!1})}),e[mo]=uo(r)},mounted(e,{value:t}){bo(e,t)},beforeUpdate(e,t,n){e[mo]=uo(n)},updated(e,{value:t}){e._assigning||bo(e,t)}};function bo(e,t){let n=e.multiple,r=x(t);if(!(n&&!r&&!C(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=xo(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=xe(t,o)>-1}else a.selected=t.has(o);else if(be(xo(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xo(e){return`_value`in e?e._value:e.value}function So(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Co=[`ctrl`,`shift`,`alt`,`meta`],wo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Co.some(n=>e[`${n}Key`]&&!t.includes(n))},To=(e,t)=>{let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=wo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Eo=_({patchProp:co},Pa),Do;function Oo(){return Do||=xi(Eo)}var ko=((...e)=>{let t=Oo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=jo(e);if(!r)return;let i=t._component;!T(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Ao(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Ao(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function jo(e){return E(e)?document.querySelector(e):e}var Mo=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},No={},Po={class:`header`},Fo={class:`nav`};function Io(e,t){let n=_r(`RouterLink`);return K(),q(`header`,Po,[J(`nav`,Fo,[J(`ul`,null,[J(`li`,null,[Y(n,{to:`/common`},{default:Nn(()=>[...t[0]||=[X(`Common`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/menu`},{default:Nn(()=>[...t[1]||=[X(`Menu`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/fontSize`},{default:Nn(()=>[...t[2]||=[X(`FontSize`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/fontsFace`},{default:Nn(()=>[...t[3]||=[X(`FontFace`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/gtagName`},{default:Nn(()=>[...t[4]||=[X(`Gtag`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/ftFixed`},{default:Nn(()=>[...t[5]||=[X(`ftFixed`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/layout`},{default:Nn(()=>[...t[6]||=[X(`Layout`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/askforGsap`},{default:Nn(()=>[...t[7]||=[X(`AskForGsap`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/commonGsap`},{default:Nn(()=>[...t[8]||=[X(`Common Gsap`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/convert`},{default:Nn(()=>[...t[9]||=[X(`Convert HTML`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/list-modal`},{default:Nn(()=>[...t[10]||=[X(`List Modal (Menu List)`,-1)]]),_:1})]),J(`li`,null,[Y(n,{to:`/blog-template`},{default:Nn(()=>[...t[11]||=[X(`Blog Template`,-1)]]),_:1})])])])])}var Lo=Mo(No,[[`render`,Io]]),Ro={class:`main-content`},zo={__name:`App`,setup(e){return(e,t)=>{let n=_r(`RouterView`);return K(),q(G,null,[Y(Lo),J(`main`,Ro,[Y(n)])],64)}}},Bo=typeof document<`u`;function Vo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Ho(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Vo(e.default)}var $=Object.assign;function Uo(e,t){let n={};for(let r in t){let i=t[r];n[r]=Go(i)?i.map(e):e(i)}return n}var Wo=()=>{},Go=Array.isArray;function Ko(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var qo=/#/g,Jo=/&/g,Yo=/\//g,Xo=/=/g,Zo=/\?/g,Qo=/\+/g,$o=/%5B/g,es=/%5D/g,ts=/%5E/g,ns=/%60/g,rs=/%7B/g,is=/%7C/g,as=/%7D/g,os=/%20/g;function ss(e){return e==null?``:encodeURI(``+e).replace(is,`|`).replace($o,`[`).replace(es,`]`)}function cs(e){return ss(e).replace(rs,`{`).replace(as,`}`).replace(ts,`^`)}function ls(e){return ss(e).replace(Qo,`%2B`).replace(os,`+`).replace(qo,`%23`).replace(Jo,`%26`).replace(ns,"`").replace(rs,`{`).replace(as,`}`).replace(ts,`^`)}function us(e){return ls(e).replace(Xo,`%3D`)}function ds(e){return ss(e).replace(qo,`%23`).replace(Zo,`%3F`)}function fs(e){return ds(e).replace(Yo,`%2F`)}function ps(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var ms=/\/$/,hs=e=>e.replace(ms,``);function gs(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=ws(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ps(o)}}function _s(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function vs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function ys(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&bs(t.matched[r],n.matched[i])&&xs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function bs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Ss(e[n],t[n]))return!1;return!0}function Ss(e,t){return Go(e)?Cs(e,t):Go(t)?Cs(t,e):e?.valueOf()===t?.valueOf()}function Cs(e,t){return Go(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function ws(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Ts={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Es=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Ds=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Os(e){if(!e)if(Bo){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),hs(e)}var ks=/^[^#]+#/;function As(e,t){return e.replace(ks,`#`)+t}function js(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Ms=()=>({left:window.scrollX,top:window.scrollY});function Ns(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=js(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Ps(e,t){return(history.state?history.state.position-t:-1)+e}var Fs=new Map;function Is(e,t){Fs.set(e,t)}function Ls(e){let t=Fs.get(e);return Fs.delete(e),t}function Rs(e){return typeof e==`string`||e&&typeof e==`object`}function zs(e){return typeof e==`string`||typeof e==`symbol`}var Bs=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Vs=Symbol(``);Bs.MATCHER_NOT_FOUND,Bs.NAVIGATION_GUARD_REDIRECT,Bs.NAVIGATION_ABORTED,Bs.NAVIGATION_CANCELLED,Bs.NAVIGATION_DUPLICATED;function Hs(e,t){return $(Error(),{type:e,[Vs]:!0},t)}function Us(e,t){return e instanceof Error&&Vs in e&&(t==null||!!(e.type&t))}function Ws(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Qo,` `),i=r.indexOf(`=`),a=ps(i<0?r:r.slice(0,i)),o=i<0?null:ps(r.slice(i+1));if(a in t){let e=t[a];Go(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Gs(e){let t=``;for(let n in e){let r=e[n];if(n=us(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Go(r)?r.map(e=>e&&ls(e)):[r&&ls(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Ks(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Go(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var qs=Symbol(``),Js=Symbol(``),Ys=Symbol(``),Xs=Symbol(``),Zs=Symbol(``);function Qs(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $s(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Hs(Bs.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Rs(e)?c(Hs(Bs.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function ec(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Vo(s)){let c=(s.__vccOpts||s)[t];c&&a.push($s(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Ho(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&$s(c,n,r,o,e,i)()}))}}return a}function tc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>bs(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>bs(e,s))||i.push(s))}return[n,r,i]}var nc=()=>location.protocol+`//`+location.host;function rc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),vs(n,``)}return vs(n,e)+r+i}function ic(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=rc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Es.pop,direction:u?u>0?Ds.forward:Ds.back:Ds.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState($({},e.state,{scroll:Ms()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function ac(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ms():null}}function oc(e){let{history:t,location:n}=window,r={value:rc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:nc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,$({},t.state,ac(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=$({},i.value,t.state,{forward:e,scroll:Ms()});a(o.current,o,!0),a(e,$({},ac(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function sc(e){e=Os(e);let t=oc(e),n=ic(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=$({location:``,base:e,go:r,createHref:As.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}function cc(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),sc(e)}var lc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),uc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(uc||{}),dc={type:lc.Static,value:``},fc=/[a-zA-Z0-9_]/;function pc(e){if(!e)return[[]];if(e===`/`)return[[dc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=uc.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===uc.Static?a.push({type:lc.Static,value:l}):n===uc.Param||n===uc.ParamRegExp||n===uc.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:lc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==uc.ParamRegExp){r=n,n=uc.EscapeNext;continue}switch(n){case uc.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=uc.Param):f();break;case uc.EscapeNext:f(),n=r;break;case uc.Param:c===`(`?n=uc.ParamRegExp:fc.test(c)?f():(d(),n=uc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case uc.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=uc.ParamRegExpEnd:u+=c;break;case uc.ParamRegExpEnd:d(),n=uc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===uc.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var mc=`[^/]+?`,hc={sensitive:!1,strict:!1,start:!0,end:!0},gc=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(gc||{}),_c=/[.+*?^${}()[\]/\\]/g;function vc(e,t){let n=$({},hc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[gc.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=gc.Segment+(n.sensitive?gc.BonusCaseSensitive:0);if(o.type===lc.Static)r||(i+=`/`),i+=o.value.replace(_c,`\\$&`),s+=gc.Static;else if(o.type===lc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||mc;if(u!==mc){s+=gc.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=gc.Dynamic,c&&(s+=gc.BonusOptional),n&&(s+=gc.BonusRepeatable),u===`.*`&&(s+=gc.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=gc.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===lc.Static)n+=e.value;else if(e.type===lc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Go(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Go(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function yc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===gc.Static+gc.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===gc.Static+gc.Segment?1:-1:0}function bc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=yc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(xc(r))return 1;if(xc(i))return-1}return i.length-r.length}function xc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Sc={strict:!1,end:!0,sensitive:!1};function Cc(e,t,n){let r=$(vc(pc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function wc(e,t){let n=[],r=new Map;t=Ko(Sc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Ec(e);s.aliasOf=r&&r.record;let l=Ko(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Ec($({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Cc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Oc(d)&&o(e.name)),Mc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Wo}function o(e){if(zs(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Ac(e,n);n.splice(t,0,e),e.record.name&&!Oc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Hs(Bs.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=$(Tc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Tc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Hs(Bs.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=$({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:kc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Tc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Ec(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Dc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function Dc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Oc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kc(e){return e.reduce((e,t)=>$(e,t.meta),{})}function Ac(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;bc(e,t[i])<0?r=i:n=i+1}let i=jc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function jc(e){let t=e;for(;t=t.parent;)if(Mc(t)&&bc(e,t)===0)return t}function Mc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Nc(e){let t=In(Ys),n=In(Xs),r=Z(()=>{let n=Qt(e.to);return t.resolve(n)}),i=Z(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(bs.bind(null,i));if(o>-1)return o;let s=Rc(e[t-2]);return t>1&&Rc(i)===s&&a[a.length-1].path!==s?a.findIndex(bs.bind(null,e[t-2])):o}),a=Z(()=>i.value>-1&&Lc(n.params,r.value.params)),o=Z(()=>i.value>-1&&i.value===n.matched.length-1&&xs(n.params,r.value.params));function s(n={}){if(Ic(n)){let n=t[Qt(e.replace)?`replace`:`push`](Qt(e.to)).catch(Wo);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Z(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Pc(e){return e.length===1?e[0]:e}var Fc=qn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Nc,setup(e,{slots:t}){let n=Lt(Nc(e)),{options:r}=In(Ys),i=Z(()=>({[zc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[zc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Pc(t.default(n));return e.custom?r:Ta(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Ic(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Lc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Go(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Rc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var zc=(e,t,n)=>e??t??n,Bc=qn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=In(Zs),i=Z(()=>e.route||r.value),a=In(Js,0),o=Z(()=>{let e=Qt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Z(()=>i.value.matched[o.value]);Fn(Js,Z(()=>o.value+1)),Fn(qs,s),Fn(Zs,i);let c=H();return zn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!bs(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Vc(n.default,{Component:l,route:r});let u=o.props[a],d=Ta(l,$({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Vc(n.default,{Component:d,route:r})||d}}});function Vc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Hc=Bc;function Uc(e){let t=wc(e.routes,e),n=e.parseQuery||Ws,r=e.stringifyQuery||Gs,i=e.history,a=Qs(),o=Qs(),s=Qs(),c=Yt(Ts),l=Ts;Bo&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Uo.bind(null,e=>``+e),d=Uo.bind(null,fs),f=Uo.bind(null,ps);function p(e,n){let r,i;return zs(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=$({},a||c.value),typeof e==`string`){let r=gs(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return $(r,o,{params:f(o.params),hash:ps(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=$({},e,{path:gs(n,e.path,a.path).path});else{let t=$({},e.params);for(let e in t)t[e]??delete t[e];o=$({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=_s(r,$({},e,{hash:cs(l),path:s.path})),m=i.createHref(p);return $({fullPath:p,hash:l,query:r===Gs?Ks(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?gs(n,e,c.value.path):$({},e)}function y(e,t){if(l!==e)return Hs(Bs.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b($(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),$({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C($(v(u),{state:typeof u==`object`?$({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&ys(r,i,n)&&(f=Hs(Bs.NAVIGATION_DUPLICATED,{to:d,from:i}),F(i,i,!0,!1)),(f?Promise.resolve(f):E(d,i)).catch(e=>Us(e)?Us(e,Bs.NAVIGATION_GUARD_REDIRECT)?e:P(e):te(e,d,i)).then(e=>{if(e){if(Us(e,Bs.NAVIGATION_GUARD_REDIRECT))return C($({replace:s},v(e.to),{state:typeof e.to==`object`?$({},a,e.to.state):a,force:o}),t||d)}else e=O(d,i,!0,s,a);return D(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=R.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function E(e,t){let n,[r,i,s]=tc(e,t);n=ec(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push($s(r,e,t))});let c=w.bind(null,e,t);return n.push(c),re(n).then(()=>{n=[];for(let r of a.list())n.push($s(r,e,t));return n.push(c),re(n)}).then(()=>{n=ec(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push($s(r,e,t))});return n.push(c),re(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Go(r.beforeEnter))for(let i of r.beforeEnter)n.push($s(i,e,t));else n.push($s(r.beforeEnter,e,t));return n.push(c),re(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=ec(s,`beforeRouteEnter`,e,t,T),n.push(c),re(n))).then(()=>{n=[];for(let r of o.list())n.push($s(r,e,t));return n.push(c),re(n)}).catch(e=>Us(e,Bs.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function D(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function O(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Ts,l=Bo?history.state:{};n&&(r||s?i.replace(e.fullPath,$({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,F(e,t,n,s),P()}let k;function A(){k||=i.listen((e,t,n)=>{if(!ne.listening)return;let r=_(e),a=S(r,ne.currentRoute.value);if(a){C($(a,{replace:!0,force:!0}),r).catch(Wo);return}l=r;let o=c.value;Bo&&Is(Ps(o.fullPath,n.delta),Ms()),E(r,o).catch(e=>Us(e,Bs.NAVIGATION_ABORTED|Bs.NAVIGATION_CANCELLED)?e:Us(e,Bs.NAVIGATION_GUARD_REDIRECT)?(C($(v(e.to),{force:!0}),r).then(e=>{Us(e,Bs.NAVIGATION_ABORTED|Bs.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Es.pop&&i.go(-1,!1)}).catch(Wo),Promise.reject()):(n.delta&&i.go(-n.delta,!1),te(e,r,o))).then(e=>{e||=O(r,o,!1),e&&(n.delta&&!Us(e,Bs.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Es.pop&&Us(e,Bs.NAVIGATION_ABORTED|Bs.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),D(r,o,e)}).catch(Wo)})}let j=Qs(),M=Qs(),ee;function te(e,t,n){P(e);let r=M.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function N(){return ee&&c.value!==Ts?Promise.resolve():new Promise((e,t)=>{j.add([e,t])})}function P(e){return ee||(ee=!e,A(),j.list().forEach(([t,n])=>e?n(e):t()),j.reset()),e}function F(t,n,r,i){let{scrollBehavior:a}=e;if(!Bo||!a)return Promise.resolve();let o=!r&&Ls(Ps(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return xn().then(()=>a(t,n,o)).then(e=>e&&Ns(e)).catch(e=>te(e,t,n))}let I=e=>i.go(e),L,R=new Set,ne={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:I,back:()=>I(-1),forward:()=>I(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:M.add,isReady:N,install(e){e.component(`RouterLink`,Fc),e.component(`RouterView`,Hc),e.config.globalProperties.$router=ne,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>Qt(c)}),Bo&&!L&&c.value===Ts&&(L=!0,b(i.location).catch(e=>{}));let t={};for(let e in Ts)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Ys,ne),e.provide(Xs,Rt(t)),e.provide(Zs,c);let n=e.unmount;R.add(e),e.unmount=function(){R.delete(e),R.size<1&&(l=Ts,k&&k(),k=null,c.value=Ts,L=!1,ee=!1),n()}}};function re(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return ne}var Wc={class:`menu-top`},Gc={class:`input-column`},Kc={class:`output-column`},qc={__name:`NavHeader`,setup(e){let t=H(``),n=H(!0),r=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},i=Z(()=>{let e=r();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<nav class="nav__header">
  <ul class="nav__headerList">
`;return e.forEach((e,r)=>{let i=[];r===0&&i.push(`active`),n.value&&i.push(`txt-vertical`);let a=i.length?` class="${i.join(` `)}"`:``;t+=`      <li><a href="${e.link}"${a}>${e.label}</a></li>\n`}),t+=`  </ul>
</nav>`,t}),a=Z(()=>{let e=n.value,t=` .nav__header {
  .nav__headerList {
    list-style: none;
    display: flex;
    gap: 1rem;
    li {
      position: relative;
      margin: 0 9px;
      a {
        color: #000;
        opacity: 1;
        &:hover,
        &.current {
          color: #c90018;
        }`;return e&&(t+=`
        &.txt-vertical {
          width: 30px;
          height: 200px;
          line-height: 1;
        }`),t+=`
      }
    }
    li + li {
      &::before {
        content: '';
        border-left: 1px solid #000;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 1px;
      }
    }
  }
}`,t}),o=H(`Copy HTML`),s=H(`Copy SCSS`),c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Đã copy ✅`,setTimeout(()=>o.value=`Copy HTML`,2e3)})},l=()=>{navigator.clipboard.writeText(a.value).then(()=>{s.value=`Đã copy ✅`,setTimeout(()=>s.value=`Copy SCSS`,2e3)})};return(e,r)=>(K(),q(`div`,Wc,[J(`div`,Gc,[r[3]||=J(`h2`,null,`Nav Header`,-1),U(J(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html\r
\r
`,class:`content-box`},null,512),[[Q,t.value]]),J(`label`,null,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":r[1]||=e=>n.value=e},null,512),[[go,n.value]]),r[2]||=X(`txt-vertical `,-1)])]),J(`div`,Kc,[r[4]||=J(`h2`,null,`Code HTML`,-1),J(`button`,{onClick:c},z(o.value),1),J(`pre`,null,[J(`code`,{ref:`htmlCode`,class:`language-html`},z(i.value),513)]),r[5]||=J(`h2`,null,`Code SCSS`,-1),J(`button`,{onClick:l},z(s.value),1),J(`pre`,null,[J(`code`,{ref:`scssCode`,class:`language-css`},z(a.value),513)])])]))}},Jc={class:`nav-fixed`},Yc={class:`input-column`},Xc={class:`output-column`},Zc={__name:`NavFixed`,setup(e){let t=H(``),n=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},r=Z(()=>{let e=n();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<div id="nav-fixed" class="pc">
`;return t+=`<div class="nav-fixed__ham d__flex jus">
`,t+=`  <div class="col-1">
`,t+=`    <nav class="nav-fixed__header">
`,t+=`      <ul>
`,e.forEach((e,n)=>{let r=[];n===0&&r.push(`active`);let i=r.length?` class="${r.join(` `)}"`:``;t+=`        <li><a href="${e.link}"${i}>${e.label}</a></li>\n`}),t+=`      </ul>
`,t+=`    </nav>
`,t+=`  </div>
`,t+=`  <div class="col-2">
`,t+=`    --TEXT--
`,t+=`  </div>
`,t+=`</div>
`,t+=`</div>`,t}),i=Z(()=>`.nav-fixed__ham {
  .col-1 {
    zzzzz;
  }
  .col-2 {
    zzzz;
  }
}
.nav-fixed__header {
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    li {
      position: relative;
      margin: 0 9px;
      a {
        color: #000;
        opacity: 1;
        &:hover,
        &.current {
          color: #c90018;
        }
      }
    }
    li + li {
      &::before {
        content: '';
        border-left: 1px solid #000;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 1px;
      }
    }
  }
}`),a=H(`Copy HTML`),o=H(`Copy SCSS`),s=()=>{navigator.clipboard.writeText(r.value).then(()=>{a.value=`Copy ✅`,setTimeout(()=>a.value=`Copy HTML`,2e3)})},c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Copied ✅`,setTimeout(()=>o.value=`Copy SCSS`,2e3)})};return(e,n)=>(K(),q(`div`,Jc,[J(`div`,Yc,[n[1]||=J(`h2`,null,`Nav Fixed`,-1),U(J(`textarea`,{"onUpdate:modelValue":n[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html\r
\r
`,class:`content-box`},null,512),[[Q,t.value]])]),J(`div`,Xc,[n[2]||=J(`h2`,null,`Code HTML`,-1),J(`button`,{onClick:s},z(a.value),1),J(`pre`,null,[J(`code`,{ref:`htmlCode`,class:`language-html`},z(r.value),513)]),n[3]||=J(`h2`,null,`Code SCSS`,-1),J(`button`,{onClick:c},z(o.value),1),J(`pre`,null,[J(`code`,{ref:`scssCode`,class:`language-css`},z(i.value),513)])])]))}},Qc={class:`nav-footer`},$c={class:`input-column`},el={class:`output-column`},tl={__name:`NavFooter`,setup(e){let t=H(``),n=H(!1),r=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},i=Z(()=>{let e=r();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<div class="nav__footer sp">
`;return t+=`  <nav class="nav__footerList">
`,t+=`    <ul>
`,e.forEach((e,r)=>{let i=[];r===0&&i.push(`active`),n.value&&i.push(`txt-vertical`);let a=i.length?` class="${i.join(` `)}"`:``;t+=`      <li><a href="${e.link}"${a}>${e.label}</a></li>\n`}),t+=`    </ul>
`,t+=`  </nav>
`,t+=`</div>`,t}),a=Z(()=>{let e=n.value,t=`.nav__footer {
  .nav__footerList {
    list-style: none;
    display: flex;
    gap: 1rem;
    li {
      position: relative;
      margin: 0 9px;
      a {
        color: #000;
        opacity: 1;
        &:hover,
        &.current {
          color: #c90018;
        }`;return e&&(t+=`
        &.txt-vertical {
          width: 30px;
          height: 200px;
          line-height: 1;
        }`),t+=`
      }
    }
    li + li {
      &::before {
        content: '';
        border-left: 1px solid #000;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 1px;
      }
    }
  }
}`,t}),o=H(`Copy HTML`),s=H(`Copy SCSS`),c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Copy ✅`,setTimeout(()=>o.value=`Copy HTML`,2e3)})},l=()=>{navigator.clipboard.writeText(a.value).then(()=>{s.value=`Copied ✅`,setTimeout(()=>s.value=`Copy SCSS`,2e3)})};return(e,r)=>(K(),q(`div`,Qc,[J(`div`,$c,[r[3]||=J(`h2`,null,`Nav Footer`,-1),U(J(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html`,class:`content-box`},null,512),[[Q,t.value]]),J(`label`,null,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":r[1]||=e=>n.value=e},null,512),[[go,n.value]]),r[2]||=X(` txt-vertical `,-1)])]),J(`div`,el,[r[4]||=J(`h2`,null,`Code HTML`,-1),J(`button`,{onClick:c},z(o.value),1),J(`pre`,null,[J(`code`,{ref:`htmlCode`,class:`language-html`},z(i.value),513)]),r[5]||=J(`h2`,null,`Code SCSS`,-1),J(`button`,{onClick:l},z(s.value),1),J(`pre`,null,[J(`code`,{ref:`scssCode`,class:`language-css`},z(a.value),513)])])]))}},nl={class:`menu-smartphone`},rl={class:`input-column`},il={class:`output-column`},al={__name:`NavToggle`,setup(e){let t=H(``),n=H(!1),r=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},i=Z(()=>{let e=r();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<div id="menu_toggle" class="menu_toggle">
`;return t+=`  <div class="inner">
`,t+=`    <ul class="nav__toggle">
`,e.forEach((e,r)=>{let i=[];r===0&&i.push(`active`),n.value&&i.push(`txt-vertical`);let a=i.length?` class="${i.join(` `)}"`:``;t+=`      <li><a href="${e.link}"${a}>${e.label}</a></li>\n`}),t+=`    </ul>
`,t+=`  </div>
`,t+=`</div>`,t}),a=Z(()=>{let e=n.value,t=`.nav__toggle {
  list-style: none;
  li {
    margin: 0 9px;
    a {
      color: #000;
      opacity: 1;
      &:hover,
      &.active {
        color: #c90018;
      }`;return e&&(t+=`
      &.txt-vertical {
        width: 30px;
        height: 200px;
        line-height: 1;
      }`),t+=`
    }
  }
}`,t}),o=H(`Copy HTML`),s=H(`Copy SCSS`),c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Copy ✅`,setTimeout(()=>o.value=`Copy HTML`,2e3)})},l=()=>{navigator.clipboard.writeText(a.value).then(()=>{s.value=`Copied ✅`,setTimeout(()=>s.value=`Copy SCSS`,2e3)})};return(e,r)=>(K(),q(`div`,nl,[J(`div`,rl,[r[3]||=J(`h2`,null,`Menu Smartphone`,-1),U(J(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html`,class:`content-box`},null,512),[[Q,t.value]]),J(`label`,null,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":r[1]||=e=>n.value=e},null,512),[[go,n.value]]),r[2]||=X(` txt-vertical `,-1)])]),J(`div`,il,[r[4]||=J(`h2`,null,`Code HTML`,-1),J(`button`,{onClick:c},z(o.value),1),J(`pre`,null,[J(`code`,{ref:`htmlCode`,class:`language-html`},z(i.value),513)]),r[5]||=J(`h2`,null,`Code SCSS`,-1),J(`button`,{onClick:l},z(s.value),1),J(`pre`,null,[J(`code`,{ref:`scssCode`,class:`language-css`},z(a.value),513)])])]))}},ol={__name:`Menu`,setup(e){return(e,t)=>(K(),q(G,null,[Y(qc),Y(Zc),Y(tl),Y(al)],64))}},sl={class:`layout-container`},cl={class:`layout-row layout-blue`},ll={class:`col col-input`},ul={class:`input-group`},dl={class:`col col-preview`},fl={class:`preview-wrapper`},pl={class:`tel__contact`},ml={class:`tel__num`},hl={href:`#`},gl={class:`tel__des`},_l={class:`col col-actions`},vl={class:`btn-stack`},yl={class:`mini-code`},bl={class:`layout-row layout-green`},xl={class:`col-code`},Sl={class:`code-box`},Cl={class:`code-header`},wl={class:`code-box`},Tl={class:`code-header`},El={class:`layout-row row-orange`},Dl={class:`col-code`},Ol={class:`code-box`},kl={class:`code-header`},Al={class:`code-box`},jl={class:`code-header`},Ml={class:`layout-row`},Nl={class:`column column-code`},Pl={class:`column-header`},Fl={class:`column column-code`},Il={class:`column-header`},Ll={class:`layout-row`},Rl={class:`column column-code`},zl={class:`column-header`},Bl={class:`column column-code`},Vl={class:`column-header`},Hl={class:`layout-row`},Ul={class:`column column-code`},Wl={class:`column-header`},Gl={class:`column column-code`},Kl={class:`column-header`},ql={class:`layout-row`},Jl={class:`column column-code`},Yl={class:`column-header`},Xl={class:`column column-code`},Zl={class:`column-header`},Ql={class:`layout-row`},$l={class:`column column-code`},eu={class:`column-header`},tu={class:`column column-code`},nu={class:`column-header`},ru=`.tel__contact {
	line-height: 1;
	dt {
		font-size: 12px;
		margin-bottom: 0;
	}
	.tel__num {
		span {
			font-size: 25px;
			letter-spacing: 0.12em;
			position: relative;
			display: inline-block;
			font-weight: 700;
			&::after {
				content: "";
				background: url("../img/shared/icon_tel.png") no-repeat center;
				background-size: 100% auto;
				width: 21px;
				height: 27px;
				position: absolute;
				top: 60%;
				transform: translateY(-50%);
				left: -29px;
			}
		}
	}
	.tel__des {
		font-size: 13px;
	}
}
.note {
	font-size: 13px;
	line-height: 1;
}
@media screen and (min-width: 768px) {
	.tel__contact {
		dt {
			font-size: 14px;
			margin-bottom: 0;
		}
		.tel__num {
			span {
				font-size: 30px;
				&::after {
					width: 21px;
					height: 27px;
					top: 60%;
					left: -29px;
				}
			}
		}
		.tel__des {
			font-size: 13px;
		}
	}
}`,iu=`<p class="btn-copy">
  <a class="copy" data-copy="" data-replace-text="コピーしました" data-replace-image="" onClick="gtag('event','copy_url');">
    <span>URLをコピーして共有</span>
  </a>
</p>`,au=`.btn-copy {
    span {
        position: relative;
        &::after {
            content: "";
            background: url("../img/shared/icon_url.png") no-repeat center;
            background-size: 100% auto;
            width: 15px;
            height: 15px;
            position: absolute;
            top: 5px;
            right: -20px;
        }
    }
}`,ou=`<p class="cookie"><a href="https://www.foodconnection.jp/cookie/cookie_share.html" target="_blank" rel="nofollow">Cookie情報等の取り扱いについて</a></p>`,su=`.cookie {
    text-align: right;
    padding-top: 14px;
    a {
        display: inline-block;
        background: url("../img/shared/icon-cookie.png") no-repeat center right/12px auto;
        padding-right: 27px;
        &:hover {
            text-decoration-line: underline;
            text-underline-offset: 4px;
        }
    }
}`,cu=Mo({__name:`Common`,setup(e){let t=H(``),n=H(``),r=H(``),i=H(!1),a=H(!1),o=Z(()=>{let e=t.value.trim()?`  <dt>${t.value.trim()}</dt>\n`:``,i=``;n.value.trim()&&(i=`  <dd class="tel__num"><a class="telhref" onClick="gtag('event','header_phone',{event_category:'Phone Call',transport_type:'beacon'});" href="tel:${n.value.replace(/-/g,``)}">${n.value.trim()}</a></dd>\n`);let a=r.value.trim()?`  <dd class="tel__des">${r.value.trim()}</dd>\n`:``;return!e&&!i&&!a?`<!-- No content to generate -->`:`<dl class="tel__contact">\n${e}${i}${a}</dl>`}),s=(e,t)=>{navigator.clipboard.writeText(e).then(()=>{t===`html`&&(i.value=!0,setTimeout(()=>i.value=!1,1500)),t===`scss`&&(a.value=!0,setTimeout(()=>a.value=!1,1500)),t===`html2`&&(c.value=!0,setTimeout(()=>c.value=!1,1500)),t===`scss2`&&(l.value=!0,setTimeout(()=>l.value=!1,1500)),t===`html3`&&(u.value=!0,setTimeout(()=>u.value=!1,1500)),t===`scss3`&&(d.value=!0,setTimeout(()=>d.value=!1,1500)),t===`html4`&&(htmlCopied4.value=!0,setTimeout(()=>htmlCopied4.value=!1,1500)),t===`scss4`&&(scssCopied4.value=!0,setTimeout(()=>scssCopied4.value=!1,1500))})},c=H(!1),l=H(!1),u=H(!1),d=H(!1),f=e=>{let t=e.currentTarget,n=t.closest(`.column`).querySelector(`.code-content code`);if(n){let e=n.innerText;navigator.clipboard.writeText(e).then(()=>{let e=t.innerText;t.innerText=`Copied!`,setTimeout(()=>{t.innerText=e},2e3)}).catch(e=>{console.error(`Lỗi khi copy:`,e)})}};return(e,p)=>(K(),q(`div`,sl,[J(`div`,cl,[J(`div`,ll,[p[19]||=J(`span`,{class:`badge`},`LAYOUT #1`,-1),J(`div`,ul,[U(J(`input`,{"onUpdate:modelValue":p[0]||=e=>t.value=e,type:`text`,placeholder:`Title`},null,512),[[Q,t.value]]),U(J(`input`,{"onUpdate:modelValue":p[1]||=e=>n.value=e,type:`text`,placeholder:`Number`},null,512),[[Q,n.value]]),U(J(`textarea`,{"onUpdate:modelValue":p[2]||=e=>r.value=e,placeholder:`Description`},null,512),[[Q,r.value]])])]),J(`div`,dl,[J(`div`,fl,[J(`dl`,pl,[J(`dt`,null,z(t.value),1),J(`dd`,ml,[J(`a`,hl,z(n.value),1)]),J(`dd`,gl,z(r.value),1)])])]),J(`div`,_l,[J(`div`,vl,[J(`button`,{onClick:p[3]||=e=>s(o.value,`html`),class:he({"btn-done":i.value})},z(i.value?`✅ HTML`:`Copy HTML`),3),J(`button`,{onClick:p[4]||=e=>s(ru,`scss`),class:he({"btn-done":a.value})},z(a.value?`✅ SCSS`:`Copy SCSS`),3)]),J(`pre`,yl,[J(`code`,null,z(o.value),1)])])]),J(`div`,bl,[p[22]||=J(`div`,{class:`col-input`},[J(`div`,{class:`layout-label`},`LAYOUT #2: URL COPY BUTTON`)],-1),J(`div`,xl,[J(`div`,Sl,[J(`div`,Cl,[p[20]||=J(`span`,null,`HTML`,-1),J(`button`,{onClick:p[5]||=e=>s(iu,`html2`),class:he({active:c.value})},z(c.value?`Copied!`:`Copy`),3)]),J(`pre`,null,[J(`code`,null,z(iu))])]),J(`div`,wl,[J(`div`,Tl,[p[21]||=J(`span`,null,`SCSS`,-1),J(`button`,{onClick:p[6]||=e=>s(au,`scss2`),class:he({active:l.value})},z(l.value?`Copied!`:`Copy`),3)]),J(`pre`,null,[J(`code`,null,z(au))])])])]),J(`div`,El,[p[25]||=J(`div`,{class:`col-info`},[J(`div`,{class:`layout-label`},`LAYOUT #3: COOKIE POLICY`),J(`p`,{class:`info-text`},`Cookie情報の取り扱いページへの外部リンク。共通パーツとして使用。`)],-1),J(`div`,Dl,[J(`div`,Ol,[J(`div`,kl,[p[23]||=J(`span`,null,`HTML`,-1),J(`button`,{onClick:p[7]||=e=>s(ou,`html3`),class:he({active:u.value})},z(u.value?`Copied!`:`Copy`),3)]),J(`pre`,null,[J(`code`,null,z(ou))])]),J(`div`,Al,[J(`div`,jl,[p[24]||=J(`span`,null,`SCSS`,-1),J(`button`,{onClick:p[8]||=e=>s(su,`scss3`),class:he({active:d.value})},z(d.value?`Copied!`:`Copy`),3)]),J(`pre`,null,[J(`code`,null,z(su))])])])]),p[51]||=Xi(`<div class="layout-row row-orange" data-v-fdde712a><div class="col-info" data-v-fdde712a><div class="layout-label" data-v-fdde712a>BLOG FCJ</div><pre data-v-fdde712a><code data-v-fdde712a>  
https://e-connection.info/admin/
fcv_tienttt
kuchuot1210
</code></pre></div></div><div class="layout-row row-orange" data-v-fdde712a><div class="col-info" data-v-fdde712a><div class="layout-label" data-v-fdde712a>BLOG FCJ</div><pre data-v-fdde712a><code data-v-fdde712a>  
https://e-connection.info/admin/
fcv_tienttt
kuchuot1210

http://fcv.f-concierge.biz/GiangHH/menu_list/
fcv
fcv2014

user: outsourcing
pass: zxTpBdB7wV2r

ID: bz78wx
PW: xQu$4g0*Wd@8%th2YtHFmjAu
</code></pre></div></div><div class="layout-row row-orange" data-v-fdde712a><div class="col-info" data-v-fdde712a><div class="layout-label" data-v-fdde712a>Mini Code</div><pre data-v-fdde712a><code data-v-fdde712a>  
Text Underline
------------
text-decoration-line: underline;
text-underline-offset: 6px;

text-decoration: underline;
text-underline-offset: -5px;
text-decoration-thickness: 14px;
-webkit-text-decoration-color: #d92329;
text-decoration-color: #d92329;
------------
</code></pre></div></div>`,3),J(`div`,Ml,[p[30]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Button 01`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/01-Cg20sCrB.jpg`,alt:`Hình ảnh preview`})])],-1),J(`div`,Nl,[J(`div`,Pl,[p[26]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:p[9]||=e=>f(e)},`Copy`)]),p[27]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<p class="bnr__web"><a class="hvr-radial" href="###"><span>WEB予約はこちら</span></a></p>`)],-1)]),J(`div`,Fl,[J(`div`,Il,[p[28]||=J(`span`,null,`SCSS`,-1),J(`button`,{class:`copy-button`,onClick:p[10]||=e=>f(e)},`Copy`)]),p[29]||=J(`pre`,{class:`code-content`},[J(`code`,null,`.bnr__web {
  a {
    display: block;
    line-height: 1;
    font-size: 18px;
    overflow: hidden;
    border-radius: 42px;
    border: 1px solid #fff;
    padding: 30px 0;
    span {
      position: relative;
      padding-left: 28px;
      &::before {
        content: "";
        background: url("../img/lunch/icon_web.png") no-repeat center;
        background-size: 100% auto;
        width: 25px;
        height: 23px;
        position: absolute;
        top: 50%;
        left: -27px;
        transform: translateY(-50%);
        transition: all .4s ease;
      }
    }
    &:hover {
      span {
        color: #000;
        &::before {
          filter: invert(1);
        }
      }
    }
  }
}`)],-1)])]),J(`div`,Ll,[p[35]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Button 02`),J(`div`,{class:`image-container`},[J(`img`,{src:`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABBAOkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5coooqCwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK6XwP4LbxnfXEP2n7JFCgZpQgc5JwBt3Dtnn2969Vk/ZT1PUrfXx4fubjVLixntjY7o4dt/BKB5hzFLIsbxZDMpY/Lk/KVxVcr0JujwWiu9+Nnwz/4VT46uNGhluLmwMazWl1ciMPNGcjfhHbA3K2A21sYyorP8VfDi98K+EfCviSTUNPv9N8RRTPa/ZHk8yJonCSJIropBDHGV3KcHDGoUk1dFtNOzOSoorZ8G+F7vxp4q0rQ7GC5ubm/uEgWO0hEsuCfmZVLKDgZPLKOOSBzVxi5NJEtqKuzGorf8feFY/A/jPWNBi1Wz1yPT7hoF1DT33QzY7qf0PXBB5PWpv+EA1OTwFB4ugMNzpkmpHSnjiLGaKfy/MUMpUAhlyQVJ+6c44zCkpR5lsNrlfK9zmqK7b/hUur3Hw6tPGWnz2+r2M11NaS2djHO9zatFGJJGlUxBQgRlJZWYDcM965XSNLm1vU7awt3t457h9iNdXCQRgnpukchVHuxAqrPm5eounN0KdFela9+zj8RfDPhW88S6l4baDQ7TBlvVu7eRBkgDG2Qluo+6D1rh9D8N6r4nuJrfSNPuNTuIYWuHhtYzI4jXG5to5IGcnHQZPQGl1sPzM2ivXvFn7M/ivRdJs9a0u0utU0GXRU1q41C6tvsMdmp3ZhkaRthlG3IRXZiGXA5xXkNGza6oN0pLZ/8ADhRXp3g/4A+I/GvgHWPE9pDNZw6bbyX2L+0lhgu7dBlmguCvlu4Ib5CR04JPFeY03o+V7gtVzLYKKKKQE8Nq86llKgZxzT/7Pk/vL+Z/wqfT/wDUt/vf0FWuWwAMk9AOa+Ex2cYqhiZ0oNWT7H0uHwFCpSjOW7M7+z5P7y/mf8KRrGRFLErgDPU1tX+n3WlXT217bTWdyn3oZ4yjr9QRkVUn/wBTJ/un+Vc1PO8ZKpGMmtWuhrLLsOotq/3mPRRRX6IfKhRRRQAUUUUAFFFFAHp/wH0kXmqeJtRkuUtrfR9Gk1CYurHcizQoQMAnPz5/CvofQ9M06x/ai1JL/UvDt1q5srl2886s14qtpTHAJ3RFdpydzM2M452gfJfg34ga/wDD6bU5vD2oy6Xc6hZtYzXEB2yiIujkI3VTlF+YYPWrsfxY8Ur46n8ZS6mbnxHNFJDJezRIxZXgMByuNufLOOnvTk7qy/la+bv+G34hHR38/wANP+CWfitJo9xqml3Gj6h4fvEaxjjnh8O2F1aQwyJlcMLhQzsRjMg+91POSdb4oST/APCsfhHCQ32RdGvHQ4+UyNqNyHwcdcLHn8PWvMa9A8E/Hzx/8OtDOj+HvEtxp+neY0qQeXHJ5TsPmaMupMZPfYR60acri+9/z0/H8BqVtLdLfl/kYHinwLq3gu00qTWYlsbrUYmuI9PlytzFFkBJJEI+QPyVzyQucAFSfRfgfNaa74Z1/wAHaRqUfhnx3rbrFZ6pcMFjvrfbhtOEvW3aRsHd0kwEYgHnyTVtWvte1K41DUry41C/uHMk11dStJLIx6szMSSfc1WjkeGRXRmR1O5WU4II6EGhWaals/6/ro+1tCdmmt1/X9du99S1rGkXvh/VbvTNStZbK/tJWgnt5l2vG6nDKR6givfLfwlfXH7OXw9u9Gu7qC/udcmTTobOYRNNq8lwqIzOSNojgtxg5GGmU5xmvEfGXjLWPiB4iute1+9OoavdBPPumjRDJsRUUkKAM7VAzjJxk5NOt/G2u2fh+30ODVLiHS7a/GqQQRtt8q6ChRKjD5lbAHQ9geopRukrvXT81f8A4HnYJb3Xn+T/AK9Ln1T4qtPip44/Z4kGneNY/F13bazdrqMPhu/Mfm2v2WMvG8YWP7SVIZiED8PnkE4+Yfh74FufiJrV1pNjKRqC2Nxd21skZkkupIoy4hRQQSzBTjGTx0PSpfEPxZ8a+LLmxuNY8V6xqM9iGFrJcXsjNDuGGKnPBYcE9T3zXM2d5caddw3VpPJa3MLiSKaFyjowOQysOQR6ikl70m9n+Glr/rb77jbfLGK6f53/AOBc6rULHx14+1Aw3Gn63rVzp8flC1jtJXFnGozsWNVxEoBB2gADPSsHw3eXtjr1hLp+pvo155yrHqCTtCYCTjfvXlQAeSO2a6a7+OnxJ1C0ktbr4heKrm2kXY8M2tXLIy+hUvgiuHqovlldikrqyPpT41+KfA/jb4xvpqP4l+I5MkOmQXNhqixQgKqRAWqtFKZXO3cZCQrsx+UjDHxX4qeDYPh78R/Efhq1vRqNvpd7JbR3Ixl1U4Gccbh0OO4NWtD+MXi3wvpTWGh6nFoaNEIXudLsre1u3T0a4jjWVvfLnPeuNd2kZmZizMclmOST61Ntvn89vy19bldLen4f1+B778WNU+HFnpfgeRrqXxlqlr4b0+1FhplyLeztMRl5BcS7S8khlkf92uwqAMtn5Rw3xn+H9l4HufDFzYW15pkWvaPHqp0rUZRJPZlpJE2Fgq5VggdSVB2uM5xk4PhD4ka94DUnQ5bKzn3mRbttNtpbmNiAPkmeNpE6fwsO/qaxdb13UvE2qXGpavqF1qmo3B3TXd5M0sshxjLOxJPAHWqlq211bf330+97+RMLRVuyS+62v3LbzKNFFFIZo6f/AKlv97+gro9F1+z0q1aG48O6Zq7s5cT3r3IcDAG0eXMgxwTyM8nmuc0//Ut/vf0FWq/Ksyk442q13PtcIr4eF+x6fN8VPDt94PtrO+8D6dd61aSSR2krT3Qggt22sFObgs5DGXCkhV3ZGckV5bP/AKmT/dP8qfTJ/wDUyf7p/lXLTqSqVYc3ddDaUFCEreZj0UUV+vnwgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA5ZHQYVmUexp3nyf89G/76NR0Vk6NOTu4r7i1UmtEyTz5P8Ano3/AH0aQzSEYLsR9TTKKXsaX8q+4ftJ/wAzCiiitjMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z`,alt:`Hình ảnh preview`})])],-1),J(`div`,Rl,[J(`div`,zl,[p[31]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:p[11]||=e=>f(e)},`Copy`)]),p[32]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<p class="bnr__shared style-4"><a href="####">詳しくはこちら</a></p>`)],-1)]),J(`div`,Bl,[J(`div`,Vl,[p[33]||=J(`span`,null,`SCSS`,-1),J(`button`,{class:`copy-button`,onClick:p[12]||=e=>f(e)},`Copy`)]),p[34]||=J(`pre`,{class:`code-content`},[J(`code`,null,`.bnr__shared.style-4 {
  position: relative;
  a {
    display: block;
    position: relative;
    line-height: 38px;
    color: #fff;
    font-size: 15px;
    padding-right: 55px;
    text-align: right;
    transition: all .4s ease;
    &::after {
      content: "";
      background: url("../img/dinner/course_bnr_icon.jpg") no-repeat center;
      width: 35px;
      height: 35px;
      background-size: 100% auto;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }
  @media screen and (min-width: 768px) { 
    a {
      line-height: 42px;
      font-size: 16px;
      padding-right: 62px;
      &::after {
        width: 42px;
        height: 42px;
      }
      &:hover {
        opacity: .5;
      }
    }
  }
  }`)],-1)])]),J(`div`,Hl,[p[40]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Button 03`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/03-D1K6cF26.jpg`,alt:`Hình ảnh preview`})])],-1),J(`div`,Ul,[J(`div`,Wl,[p[36]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:p[13]||=e=>f(e)},`Copy`)]),p[37]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div class="bnr__shape style-3 mask376">
                <p class="bnr__name">店内のご案内</p>
                <p class="bnr__img"><img src="shared/img/lunch/bnr376.png" width="376" height="93" alt="店内のご案内"></p>
                <a href="####">店内のご案内</a> </div>`)],-1)]),J(`div`,Gl,[J(`div`,Kl,[p[38]||=J(`span`,null,`SCSS`,-1),J(`button`,{class:`copy-button`,onClick:p[14]||=e=>f(e)},`Copy`)]),p[39]||=J(`pre`,{class:`code-content`},[J(`code`,null,`.bnr__shape {
  position: relative;
  z-index: 2;
  height: 73px;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 9px;
    right: 9px;
    bottom: 9px;
    border: 1px solid #986b1e;
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #986b1e;
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;		
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    font-size: 0;
    &::after {
      content: "";
      background: url("../img/lunch/arrow01.png") no-repeat center;
      background-size: 100% auto;
      width: 25px;
      height: 5px;
      position: absolute;
      top: 50%;
      right: 38px;
      margin-top: -2px;
    }
  }
  .bnr__name {
    font-size: 18px;
    color: #000;
    position: relative;
    z-index: 2;
    line-height: 1;
    font-weight: 500;
  }
  .bnr__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  }

  .bnr__shape.__white {
  .bnr__name {
    color: #fff;
  }
  a {
  &::after {
    filter: invert(1);	
  }
  }
  }
  .mask376{
    mask-image: url("../img/lunch/mask235.png");
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }
  @media screen and (min-width: 768px) {
  .mask376 {
    mask-image: url("../img/lunch/mask376.png");
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
    height: 93px;
    width: 376px;
  }
  }
`)],-1)])]),J(`div`,ql,[p[45]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Button 04`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/04-Dz_Iyy9f.jpg`,alt:`Hình ảnh preview`})])],-1),J(`div`,Jl,[J(`div`,Yl,[p[41]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:p[15]||=e=>f(e)},`Copy`)]),p[42]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<p class="bnr__shared style-2"><a href="####">お持ち帰りについて</a></p>`)],-1)]),J(`div`,Xl,[J(`div`,Zl,[p[43]||=J(`span`,null,`SCSS`,-1),J(`button`,{class:`copy-button`,onClick:p[16]||=e=>f(e)},`Copy`)]),p[44]||=J(`pre`,{class:`code-content`},[J(`code`,null,`.bnr__shared.style-2 {
position: relative;
width: 85%;
margin-left: auto;
margin-right: auto;
max-width: 370px;
a {
  font-size: 18px;
  letter-spacing: 0.1em;
  position: relative;
  padding: 10px 0 20px 0;
  display: block;
  text-align: center;
  line-height: 1;
  &::before {
    content: "";
    background: url("../img/shared/line.jpg") repeat-x center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
  }
  &::after {
    content: "";
    background: url(../img/shared/arow03.png) no-repeat center;
    background-size: 100% auto;
    width: 44px;
    height: 44px;
    position: absolute;
    right: -21px;
    bottom: -19px;
    transition: all 0.4s ease;
  }
}
}
@media screen and (min-width: 768px) {
.bnr__shared.style-2 {
  a {
    font-size: 22px;
    padding: 10px 24px 32px 0;
    &::after {
      width: 52px;
      height: 52px;
      right: -21px;
      bottom: -22px;
    }
    &:hover {
      &::after {
        right: -35px;
      }
    }
  }
}
}`)],-1)])]),J(`div`,Ql,[p[50]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Button 05`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/05-CQYdkyle.jpg`,alt:`Hình ảnh preview`})])],-1),J(`div`,$l,[J(`div`,eu,[p[46]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:p[17]||=e=>f(e)},`Copy`)]),p[47]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<p class="bnr__shared style-1"><a href="####">逸品と日本酒</a></p>`)],-1)]),J(`div`,tu,[J(`div`,nu,[p[48]||=J(`span`,null,`SCSS`,-1),J(`button`,{class:`copy-button`,onClick:p[18]||=e=>f(e)},`Copy`)]),p[49]||=J(`pre`,{class:`code-content`},[J(`code`,null,`.bnr__shared.style-1 {
max-width: 370px;
width: 85%;
margin-left: auto;
margin-right: auto;
a {
  display: block;
  line-height: 1;
  color: #162043;
  position: relative;
  font-size: 18px;
  border: 1px solid #162043;
  border-left-width: 6px;
  text-align: center;
  padding: 18px 0;
  &::after {
    content: "";
    background: url("../img/shared/icon_arrow.png") no-repeat center;
    background-size: 100% auto;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    margin-top: -7px;
    right: 30px;
    transition: all 0.4s ease;
  }
}
}
@media screen and (min-width: 768px) {
.bnr__shared.style-1 {
  width: 370px;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  a {
    font-size: 22px;
    border-left-width: 6px;
    padding: 28px 0;
    &::after {
      width: 14px;
      height: 14px;
      top: 50%;
      margin-top: -7px;
      right: 30px;
    }
    &:hover {
      text-decoration: none;
      &::after {
        right: 20px;
      }
    }
  }
}
}`)],-1)])])]))}},[[`__scopeId`,`data-v-fdde712a`]]),lu={class:`layout-section`},uu={class:`columns`},du={class:`input-column`},fu=[`onUpdate:modelValue`],pu={style:{"margin-left":`10px`,"font-size":`0.9em`,cursor:`pointer`}},mu=[`onUpdate:modelValue`],hu=[`onClick`],gu={class:`rows`},_u={class:`row-header`},vu=[`onClick`],yu={class:`row-controls`},bu={class:`dropdown-content`},xu=[`onClick`],Su={key:0,class:`dropdown-submenu`},Cu=[`onClick`],wu={key:0,class:`dropdown-submenu`},Tu=[`onClick`],Eu=[`onClick`],Du={key:0,class:`objects-in-row`},Ou=[`onClick`],ku={key:1,class:`cols-container`},Au={class:`col-header`},ju=[`onClick`],Mu={class:`dropdown-content`},Nu=[`onClick`],Pu={key:0,class:`dropdown-submenu`},Fu=[`onClick`],Iu={key:0,class:`dropdown-submenu`},Lu=[`onClick`],Ru={class:`objects-in-col`},zu=[`onClick`],Bu={class:`output-column`},Vu={class:`language-html`},Hu={class:`language-css`},Uu={class:`language-js`},Wu=`layout_sections_v1`,Gu={__name:`layoutSection2`,setup(e){let t=H([]),n=H([{name:`Box`,html:`<div class="box">BOX</div>`,scss:`.box {}`,children:[{name:`Title`,html:`<div class="box"><div class="title">TITLE</div></div>`,scss:`.box { .title {} }`}]},{name:`Heading`,children:[{name:`h2`,html:`<h2>HEADING</h2>`,scss:`h2 {}`},{name:`h3`,html:`<h3>HEADING</h3>`,scss:`h3 {}`},{name:`h4`,html:`<h4>HEADING</h4>`,scss:`h4 {}`},{name:`h5`,html:`<h5>HEADING</h5>`,scss:`h5 {}`},{name:`h2 + span`,html:`<h2>HEADING<span>SubHEADING</span></h2>`,scss:`h2 { span {} }`},{name:`h3 + span`,html:`<h3>HEADING<span>SubHEADING</span></h3>`,scss:`h3 { span {} }`}]},{name:`Title`,html:`<div class="title">TITLE</div>`,scss:`.title {}`,children:[{name:`dl`,html:`<dl class="title"><dt>TITLE</dt><dd>TITLE__SUP</dd></dl>`,scss:`.title { dt {}; dd {} }`}]},{name:`Text`,html:`<p class="text">TEXT</p>`,scss:`.text {}`,children:[{name:`txt-vertical`,html:`<p class="text txt-vertical">TEXT</p>`,scss:`.text.txt-vertical {}`},{name:`txt-vertical-pc`,html:`<p class="text txt-vertical-pc">TEXT</p>`,scss:`.text.txt-vertical-pc {}`},{name:`txt-vertical-sp`,html:`<p class="text txt-vertical-sp">TEXT</p>`,scss:`.text.txt-vertical-sp {}`},{name:`note`,html:`<p class="note">TEXT</p>`,scss:`.note {}`}]},{name:`Parallax`,html:`<div class="bg-parallax"><div class="img-parallax">PARALLAX</div></div>`,scss:`.bg-parallax { .img-parallax { /* styles for inner image */ } }`},{name:`List`,children:[{name:`ul`,html:`<ul class="list">LIST__UL</ul>`,scss:`ul.list {}`},{name:`dl`,html:`<div class="list"><dl>LIST__DL</dl></div>`,scss:`.list { dl {} }`},{name:`p`,html:`<div class="list"><p>LIST__TEXT</p></div>`,scss:`.list { p {} }`}]},{name:`Photo`,html:`<div class="photo ob-img">PHOTO</div>`,scss:`.photo.ob-img {}`,children:[{name:`Group`,children:[{name:`1`,html:`<div class="groupPhoto">
	<div class="ob-img item-1">PHOTO 1</div>
</div>`,scss:`.groupPhoto { .ob-img.item-1 {} }`},{name:`2`,html:`<div class="groupPhoto">
	<div class="ob-img item-1">PHOTO 1</div>
	<div class="ob-img item-2">PHOTO 2</div>
</div>`,scss:`.groupPhoto { .ob-img.item-1 {}; .ob-img.item-2 {}; }`},{name:`3`,html:`<div class="groupPhoto">
	<div class="ob-img item-1">PHOTO 1</div>
	<div class="ob-img item-2">PHOTO 2</div>
	<div class="ob-img item-3">PHOTO 3</div>
</div>`,scss:`.groupPhoto { .ob-img.item-1 {}; .ob-img.item-2 {}; .ob-img.item-3 {}; }`},{name:`4`,html:`<div class="groupPhoto">
	<div class="ob-img item-1">PHOTO 1</div>
	<div class="ob-img item-2">PHOTO 2</div>
	<div class="ob-img item-3">PHOTO 3</div>
	<div class="ob-img item-4">PHOTO 4</div>
</div>`,scss:`.groupPhoto { .ob-img.item-1 {}; .ob-img.item-2 {}; .ob-img.item-3 {}; .ob-img.item-4 {}; }`}]}]},{name:`Slider`,children:[{name:`Infinity`,html:`<div class="scrolling">
	<ul class="sliderInfinity">
		<li>ITEM__1</li>
		<li>ITEM__2</li>
		<li>ITEM__3</li>
		<li>ITEM__4</li>
	</ul>
</div>`,scss:`.scrolling { overflow: hidden; }`},{name:`Slick`,html:`<div class="slider__s">
	<div class="sec__Slick01">
		<div>CONTENT__1</div>
		<div>CONTENT__2</div>
	</div>
</div>`,scss:`.slider__s { .sec__Slick01 {} }`,children:[{name:`Thumb`,html:`<div class="slider__s">
	<div class="sec__Slick01">
		<div>CONTENT</div>
		<div>CONTENT</div>
	</div>
	<div class="sec__Slick02">
		<div>CONTENT</div>
		<div>CONTENT</div>
	</div>
</div>`,scss:`.slider__s { .sec__Slick01 {}; .sec__Slick02 {}; }`}]}]},{name:`Button`,html:`<p class="bnr__shared"><a href="#" class="style-1">LINK</a></p>`,scss:`.bnr__shared { .style-1 {} }`,children:[{name:`POPUP`,html:`<p class="bnr__shared"><a class="bnr__popup" href="#namePOPUP" data-remodal-target="namePOPUP"><span>namePOPUP</span></a></p>`,scss:`.bnr__shared { a.bnr__popup {} }`}]}]),r=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8),i=(e=``)=>String(e).toLowerCase().trim().replace(/\s+/g,`-`).replace(/[^a-z0-9\-]/g,``),a=e=>Array.isArray(e)?e.map(e=>(e.uid=e.uid||r(),e.rows=Array.isArray(e.rows)?e.rows:[],e.rows=e.rows.map(e=>(e.uid=e.uid||r(),e.objects=Array.isArray(e.objects)?e.objects.map(e=>({uid:e.uid||r(),name:e.name,html:e.html,scss:e.scss||``})):[],e.cols=Array.isArray(e.cols)?e.cols.map(e=>({uid:e.uid||r(),objects:Array.isArray(e.objects)?e.objects.map(e=>({uid:e.uid||r(),name:e.name,html:e.html,scss:e.scss||``})):[]})):[],e)),e)):[],o=()=>t.value.push({uid:r(),name:``,noWrap:!1,rows:[]}),s=e=>t.value[e].rows.push({uid:r(),objects:[],cols:[]}),c=(e,n)=>t.value[e].rows[n].cols.push({uid:r(),objects:[]}),l=(e,n)=>t.value[e].rows.splice(n,1),u=(e,n,r)=>t.value[e].rows[n].cols.splice(r,1),d=(e,n,i,a)=>{if(!a||!a.html)return;let o={uid:r(),name:a.name,html:a.html,scss:a.scss||``};i===null?t.value[e].rows[n].objects.push(o):t.value[e].rows[n].cols[i].objects.push(o)},f=(e,n,r,i)=>{r===null?t.value[e].rows[n].objects.splice(i,1):t.value[e].rows[n].cols[r].objects.splice(i,1)};sr(()=>{try{let e=localStorage.getItem(Wu);e&&(t.value=a(JSON.parse(e)))}catch(e){console.warn(`Failed to load saved sections`,e)}}),zn(t,e=>{try{localStorage.setItem(Wu,JSON.stringify(e))}catch(e){console.warn(`Failed to save sections`,e)}},{deep:!0});let p=Z(()=>{let e=``;return t.value.forEach(t=>{if(!t.name)return;let n=i(t.name);e+=`<div id="${n}">\n`,t.noWrap||(e+=`  <div class="wrap">
`);let r=t.noWrap?`  `:`    `;t.rows.forEach((t,n)=>{e+=`${r}<div class="row-${n+1}">\n`,t.objects.forEach(t=>{let n=t.html.replace(/^/gm,r+`  `);e+=`${n}\n`}),t.cols.length>0&&t.cols.forEach((t,n)=>{e+=`${r}  <div class="col-${n+1}">\n`,t.objects.forEach(t=>{let n=t.html.replace(/^/gm,r+`    `);e+=`${n}\n`}),e+=`${r}  </div>\n`}),e+=`${r}</div>\n`}),t.noWrap||(e+=`  </div>
`),e+=`</div>

`}),e||`<!-- No data available -->`}),m=Z(()=>{if(t.value.length===0)return`/* No data available */`;let e=``,n=e=>`  `.repeat(e);return t.value.forEach(t=>{if(!t.name)return;let r=i(t.name);e+=`#${r} {\n`,t.noWrap||(e+=`${n(1)}.wrap {\n`);let a=t.noWrap?1:2;t.rows.forEach((t,r)=>{e+=`${n(a)}.row-${r+1} {\n`,t.objects.forEach(t=>{if(t.scss){let r=t.scss.split(`
`).map(e=>`${n(a+1)}${e}`).join(`
`);e+=`${r}\n`}}),t.cols.length>0&&t.cols.forEach((t,r)=>{e+=`${n(a+1)}.col-${r+1} {\n`,t.objects.forEach(t=>{if(t.scss){let r=t.scss.split(`
`).map(e=>`${n(a+2)}${e}`).join(`
`);e+=`${r}\n`}}),e+=`${n(a+1)}}\n`}),e+=`${n(a)}}\n`}),t.noWrap||(e+=`${n(1)}}\n`),e+=`\n${n(1)}@media screen and (min-width: 768px) {\n`,e+=`${n(2)}/* Responsive styles here */\n`,e+=`${n(1)}}\n`,e+=`}

`}),e}),h=null,g=e=>{let t=e.querySelector(`.dropdown-submenu`);if(!t)return;let n=e.getBoundingClientRect();t.style.visibility=`hidden`,t.style.display=`block`;let r=t.getBoundingClientRect();t.style.display=`none`,t.style.visibility=`visible`;let i=window.innerWidth,a=window.innerHeight;t.style.left=`100%`,t.style.right=`auto`,t.style.top=`0`,t.style.bottom=`auto`,n.right+r.width>i&&(t.style.left=`auto`,t.style.right=`100%`),n.top+r.height>a&&(t.style.top=`auto`,t.style.bottom=`0`)},_=e=>{clearTimeout(h),e.currentTarget.querySelectorAll(`.dropdown-item`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{e.parentElement.querySelectorAll(`.dropdown-submenu.active`).forEach(e=>e.classList.remove(`active`));let t=e.querySelector(`.dropdown-submenu`);t&&(t.classList.add(`active`),g(e))})})},v=e=>{h=setTimeout(()=>{e.currentTarget.querySelectorAll(`.dropdown-submenu.active`).forEach(e=>e.classList.remove(`active`))},200)},y=H(`Copy HTML`),b=H(`Copy SCSS`),x=async()=>{if(!navigator?.clipboard?.writeText){y.value=`Clipboard not available`,setTimeout(()=>y.value=`Copy HTML`,2e3);return}try{await navigator.clipboard.writeText(p.value),y.value=`Copied ✅`,setTimeout(()=>y.value=`Copy HTML`,2e3)}catch(e){console.error(`Copy HTML failed`,e),y.value=`Copy failed`,setTimeout(()=>y.value=`Copy HTML`,2e3)}},S=async()=>{if(!navigator?.clipboard?.writeText){b.value=`Clipboard not available`,setTimeout(()=>b.value=`Copy SCSS`,2e3);return}try{await navigator.clipboard.writeText(m.value),b.value=`Copied ✅`,setTimeout(()=>b.value=`Copy SCSS`,2e3)}catch(e){console.error(`Copy SCSS failed`,e),b.value=`Copy failed`,setTimeout(()=>b.value=`Copy SCSS`,2e3)}},C=H(`Copy JS`),w=Z(()=>{let e=!1,n=!1,r=!1;t.value.forEach(t=>{t.rows.forEach(t=>{(t.objects||[]).forEach(t=>{let i=(t.name||``).toLowerCase();(i===`infinity`||i.includes(`infinity`)||i.includes(`sliderinfinity`))&&(e=!0),(i===`slick`||i.includes(`slick`))&&(n=!0),(i===`thumb`||i.includes(`thumb`))&&(r=!0)}),(t.cols||[]).forEach(t=>{(t.objects||[]).forEach(t=>{let i=(t.name||``).toLowerCase();(i===`infinity`||i.includes(`infinity`)||i.includes(`sliderinfinity`))&&(e=!0),(i===`slick`||i.includes(`slick`))&&(n=!0),(i===`thumb`||i.includes(`thumb`))&&(r=!0)})})})});let i=``;return e&&(i+=`<script src="shared/js/infiniteslidev2.js"><\/script>
`,i+=`<script>
`,i+=`$(function(){
`,i+=`	$('.sliderInfinity').infiniteslide({
`,i+=`		'speed': 80, 
`,i+=`		'direction': 'left', 
`,i+=`		'pauseonhover': false,
`,i+=`	  'clone': 4
`,i+=`	});
`,i+=`});

`,i+=`<\/script>`),n&&(i+=`$(document).ready(function() {
`,i+=`	$('.sec__Slick01').slick({
`,i+=`		slidesToShow: 1,
`,i+=`		slidesToScroll: 1,
`,i+=`		arrows: false,
`,i+=`		dots: false,
`,i+=`		infinite: true,
`,i+=`		autoplay: true,
`,i+=`		autoplaySpeed: 3500,
`,i+=`		speed: 1500,
`,i+=`		fade: true,
`,i+=`		pauseOnHover: false,
`,i+=`		pauseOnFocus: false,
`,i+=`	});
`,i+=`	$(window).on('load resize orientationchange', function() {
`,i+=`		$('.sec__Slick01').slick('resize');
`,i+=`	});
`,i+=`});

`,i+=`$('.sec__Slick01').on('touchstart', function() {
`,i+=`	$(this).slick('slickPlay');
`,i+=`});

`),r&&(i+=`$('.sec__Slick01').slick({
`,i+=`	slidesToShow: 1,
`,i+=`	slidesToScroll: 1,
`,i+=`	arrows: false,
`,i+=`	fade: true,
`,i+=`	autoplay: true,
`,i+=`	infinite: true,
`,i+=`	pauseOnHover: false,
`,i+=`	pauseOnFocus: false,
`,i+=`	asNavFor: '.sec__Slick02'
`,i+=`});

`,i+=`$('.sec__Slick02').slick({
`,i+=`		autoplay: true,
`,i+=`		slidesToShow: 6,
`,i+=`		slidesToScroll: 1,
`,i+=`		dots: false,
`,i+=`		arrows: false,
`,i+=`		fade: true,
`,i+=`		infinite: true,
`,i+=`		focusOnSelect: true,
`,i+=`		pauseOnHover: false,
`,i+=`		pauseOnFocus: false,
`,i+=`		asNavFor: '.sec__Slick01',
`,i+=`		adaptiveHeight: true
`,i+=`	});

`),i||`/* No JS snippets for current layout */`}),T=async()=>{if(!navigator?.clipboard?.writeText){C.value=`Clipboard not available`,setTimeout(()=>C.value=`Copy JS`,2e3);return}try{await navigator.clipboard.writeText(w.value),C.value=`Copied ✅`,setTimeout(()=>C.value=`Copy JS`,2e3)}catch(e){console.error(`Copy JS failed`,e),C.value=`Copy failed`,setTimeout(()=>C.value=`Copy JS`,2e3)}};return(e,r)=>(K(),q(`div`,lu,[J(`button`,{class:`create-section-btn`,onClick:o},`Create Section`),J(`div`,uu,[J(`div`,du,[r[3]||=J(`h2`,null,`Layout Section`,-1),(K(!0),q(G,null,W(t.value,(e,t)=>(K(),q(`div`,{key:e.uid,class:`section-fieldset`},[J(`fieldset`,null,[J(`legend`,null,`Section `+z(t+1),1),U(J(`input`,{"onUpdate:modelValue":t=>e.name=t,placeholder:`Tên section (vd: sec1, about)`},null,8,fu),[[Q,e.name]]),J(`label`,pu,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.noWrap=t},null,8,mu),[[go,e.noWrap]]),r[0]||=X(` No Wrap `,-1)]),e.name?(K(),q(`button`,{key:0,class:`create-row-btn`,onClick:e=>s(t)},` Create Row in `+z(e.name),9,hu)):Zi(``,!0),J(`div`,gu,[(K(!0),q(G,null,W(e.rows,(e,i)=>(K(),q(`div`,{key:e.uid,class:`row-box`},[J(`div`,_u,[J(`span`,null,`Row `+z(i+1),1),J(`button`,{class:`delete-btn`,onClick:e=>l(t,i)},`Delete Row`,8,vu)]),J(`div`,yu,[J(`div`,{class:`add-object-dropdown`,onMouseenter:_,onMouseleave:v},[r[1]||=J(`button`,{class:`add-object-main-btn`},`Add Object to Row`,-1),J(`div`,bu,[(K(!0),q(G,null,W(n.value,e=>(K(),q(`div`,{key:e.name,class:`dropdown-item`},[J(`span`,{onClick:n=>d(t,i,null,e)},z(e.name),9,xu),e.children?(K(),q(`div`,Su,[(K(!0),q(G,null,W(e.children,e=>(K(),q(`div`,{key:e.name,class:`dropdown-item`},[J(`span`,{onClick:To(n=>d(t,i,null,e),[`stop`])},z(e.name),9,Cu),e.children?(K(),q(`div`,wu,[(K(!0),q(G,null,W(e.children,e=>(K(),q(`div`,{key:e.name,class:`dropdown-item`,onClick:To(n=>d(t,i,null,e),[`stop`])},[J(`span`,null,z(e.name),1)],8,Tu))),128))])):Zi(``,!0)]))),128))])):Zi(``,!0)]))),128))])],32),J(`button`,{class:`create-col-btn`,onClick:e=>c(t,i)},`Create Col`,8,Eu)]),e.objects.length>0?(K(),q(`div`,Du,[(K(!0),q(G,null,W(e.objects,(e,n)=>(K(),q(`div`,{key:e.uid,class:`object-box`},[J(`span`,null,z(e.name),1),J(`button`,{class:`delete-btn small`,onClick:e=>f(t,i,null,n)},`x`,8,Ou)]))),128))])):Zi(``,!0),e.cols.length>0?(K(),q(`div`,ku,[(K(!0),q(G,null,W(e.cols,(e,a)=>(K(),q(`div`,{key:e.uid,class:`col-box`},[J(`div`,Au,[J(`span`,null,`Col `+z(a+1),1),J(`button`,{class:`delete-btn small`,onClick:e=>u(t,i,a)},`X`,8,ju)]),J(`div`,{class:`add-object-dropdown`,onMouseenter:_,onMouseleave:v},[r[2]||=J(`button`,{class:`add-object-main-btn small`},`Add Object to Col`,-1),J(`div`,Mu,[(K(!0),q(G,null,W(n.value,e=>(K(),q(`div`,{key:e.name,class:`dropdown-item`},[J(`span`,{onClick:n=>d(t,i,a,e)},z(e.name),9,Nu),e.children?(K(),q(`div`,Pu,[(K(!0),q(G,null,W(e.children,e=>(K(),q(`div`,{key:e.name,class:`dropdown-item`},[J(`span`,{onClick:To(n=>d(t,i,a,e),[`stop`])},z(e.name),9,Fu),e.children?(K(),q(`div`,Iu,[(K(!0),q(G,null,W(e.children,e=>(K(),q(`div`,{key:e.name,class:`dropdown-item`,onClick:To(n=>d(t,i,a,e),[`stop`])},[J(`span`,null,z(e.name),1)],8,Lu))),128))])):Zi(``,!0)]))),128))])):Zi(``,!0)]))),128))])],32),J(`div`,Ru,[(K(!0),q(G,null,W(e.objects,(e,n)=>(K(),q(`div`,{key:e.uid,class:`object-box`},[J(`span`,null,z(e.name),1),J(`button`,{class:`delete-btn small`,onClick:e=>f(t,i,a,n)},`x`,8,zu)]))),128))])]))),128))])):Zi(``,!0)]))),128))])])]))),128))]),J(`div`,Bu,[r[4]||=J(`h2`,null,`Code HTML`,-1),J(`button`,{class:`copystyle`,onClick:x},z(y.value),1),J(`pre`,null,[J(`code`,Vu,z(p.value),1)]),r[5]||=J(`h2`,null,`Code SCSS`,-1),J(`button`,{class:`copystyle`,onClick:S},z(b.value),1),J(`pre`,null,[J(`code`,Hu,z(m.value),1)]),r[6]||=J(`h2`,null,`Code Javascript`,-1),J(`button`,{class:`copystyle`,onClick:T},z(C.value),1),J(`pre`,null,[J(`code`,Uu,z(w.value),1)])])])]))}},Ku={name:`TwoColumnTemplate`,data(){return{inputText:``,htmlOutput:``,scssOutput:``,withIcon:!1,ulClassInput:``,copied:{html:!1,scss:!1}}},methods:{generateHtml(){let e=this.inputText.split(`
`).filter(e=>e.trim()!==``),t=[];this.withIcon&&t.push(`withIcon`),this.ulClassInput.trim()&&t.push(this.ulClassInput.trim()),this.htmlOutput=`<ul${t.length>0?` class="${t.join(` `)}"`:``}>\n`+e.map(e=>`  <li>${e}</li>`).join(`
`)+`
</ul>`;let n=this.ulClassInput.trim()?`.${this.ulClassInput.trim()}`:``;this.scssOutput=`ul${n} {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 4px 8px;
    border-bottom: 1px solid #ccc;
  }
}

ul.withIcon${n} {
  li {
    position: relative;
    padding-left: 24px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      background: url('https://dummyimage.com/16x16/000/fff.png') no-repeat center;
      background-size: contain;
    }
  }
}`},copyToClipboard(e){let t=e===`html`?this.htmlOutput:this.scssOutput;navigator.clipboard.writeText(t),this.copied[e]=!0,setTimeout(()=>this.copied[e]=!1,2e3)}}},qu={class:`container`},Ju={class:`left`},Yu={class:`options`},Xu={class:`right`},Zu={class:`code-block`},Qu={class:`code-block`};function $u(e,t,n,r,i,a){return K(),q(`div`,qu,[J(`div`,Ju,[t[9]||=J(`h3`,null,`list Ul (Text)`,-1),U(J(`textarea`,{"onUpdate:modelValue":t[0]||=e=>i.inputText=e,placeholder:`text1\r
text2`,onInput:t[1]||=(...e)=>a.generateHtml&&a.generateHtml(...e)},null,544),[[Q,i.inputText]]),J(`div`,Yu,[J(`label`,null,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":t[2]||=e=>i.withIcon=e,onChange:t[3]||=(...e)=>a.generateHtml&&a.generateHtml(...e)},null,544),[[go,i.withIcon]]),t[8]||=X(` Icon `,-1)]),U(J(`input`,{type:`text`,"onUpdate:modelValue":t[4]||=e=>i.ulClassInput=e,placeholder:`Enter class name...`,onInput:t[5]||=(...e)=>a.generateHtml&&a.generateHtml(...e),class:`class-input`},null,544),[[Q,i.ulClassInput]])])]),J(`div`,Xu,[J(`div`,Zu,[t[10]||=J(`h3`,null,`HTML`,-1),J(`button`,{class:`copied`,onClick:t[6]||=e=>a.copyToClipboard(`html`)},z(i.copied.html?`Copied!`:`Copy HTML`),1),J(`pre`,null,[J(`code`,null,z(i.htmlOutput),1)])]),J(`div`,Qu,[t[11]||=J(`h3`,null,`SCSS`,-1),J(`button`,{class:`copied`,onClick:t[7]||=e=>a.copyToClipboard(`scss`)},z(i.copied.scss?`Copied!`:`Copy SCSS`),1),J(`pre`,null,[J(`code`,null,z(i.scssOutput),1)])])])])}var ed=Mo(Ku,[[`render`,$u],[`__scopeId`,`data-v-ce723b20`]]),td={class:`list-dl-item`},nd={class:`container`},rd={class:`input-section`},id={class:`item-group`},ad={class:`radio-settings`},od={class:`output-section`},sd={class:`output-header`},cd={class:`copy-box`},ld={key:0,class:`copied-msg`},ud={class:`code-preview`},dd=Mo({__name:`listDlItem`,setup(e){let t=H(``),n=H(`first`),r=H(!1);function i(e,t=`first`){return!e||!e.trim()?``:e.trim().split(/\n\s*\n/).map(e=>{let n=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e);if(n.length===0)return``;let r=``,i=``;return t===`first`?(r=n[0],i=n.slice(1).join(`<br />`)):(i=n[n.length-1],r=n.slice(0,-1).join(`<br />`)),`
<dl>
  <dt>${r}</dt>
  <dd>${i}</dd>
</dl>`}).join(``)}let a=Z(()=>i(t.value,n.value).trim());function o(){a.value&&navigator.clipboard.writeText(a.value).then(()=>{r.value=!0,setTimeout(()=>r.value=!1,2e3)})}return(e,i)=>(K(),q(`div`,td,[J(`div`,nd,[J(`div`,rd,[i[6]||=J(`h3`,null,`list DL`,-1),J(`div`,id,[i[5]||=J(`label`,null,`List content:`,-1),U(J(`textarea`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,placeholder:`Text 1
Text 2

Text 3
Text 4`},null,512),[[Q,t.value]]),J(`div`,ad,[J(`label`,null,[U(J(`input`,{type:`radio`,value:`first`,"onUpdate:modelValue":i[1]||=e=>n.value=e},null,512),[[vo,n.value]]),i[3]||=X(` First`,-1)]),J(`label`,null,[U(J(`input`,{type:`radio`,value:`last`,"onUpdate:modelValue":i[2]||=e=>n.value=e},null,512),[[vo,n.value]]),i[4]||=X(` Last`,-1)])])])]),J(`div`,od,[J(`div`,sd,[i[7]||=J(`h3`,null,`CODE HTML`,-1),J(`div`,cd,[J(`button`,{class:`btn-copy`,onClick:o},`Copy Code`),r.value?(K(),q(`span`,ld,`Copied !`)):Zi(``,!0)])]),J(`pre`,ud,z(a.value),1)])])]))}},[[`__scopeId`,`data-v-e59ef021`]]),fd={class:`app`},pd={class:`editor`},md={class:`radio-group`},hd={class:`columns-config`},gd={class:`item-header`},_d=[`onClick`],vd=[`onUpdate:modelValue`],yd=[`onUpdate:modelValue`],bd={class:`radio-group`},xd=[`onUpdate:modelValue`],Sd=[`onUpdate:modelValue`],Cd=[`onClick`],wd={class:`preview`},Td={class:`pp__title`},Ed={class:`pp__note`},Dd={key:0},Od=[`innerHTML`],kd={class:`copy-box`},Ad={key:0,class:`copied-msg`},jd={class:`scss-block`},Md={key:0,class:`copied-msg`},Nd={__name:`ListModal`,setup(e){let t=H(``),n=H(``),r=H(2),i=H([{items:[{header:``,content:``,mode:`first`}]},{items:[{header:``,content:``,mode:`first`}]}]);zn(r,e=>{for(;i.value.length<e;)i.value.push({items:[{header:``,content:``,mode:`first`}]});i.value.length>e&&(i.value=i.value.slice(0,e))});let a=e=>{i.value[e].items.push({header:``,content:``,mode:`first`})},o=(e,t)=>{i.value[e].items.splice(t,1)};function s(e,t=`first`){return!e||!e.trim()?``:e.trim().split(/\n\s*\n/).map(e=>{let n=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e);if(n.length===0)return``;let r=``,i=``;return t===`first`?(r=n[0],i=n.slice(1).join(`<br />`)):(i=n[n.length-1],r=n.slice(0,-1).join(`<br />`)),`
      <dl>
        <dt>${r}</dt>
        <dd>${i}</dd>
      </dl>`}).join(``)}let c=H(!1);function l(){navigator.clipboard.writeText(u.value).then(()=>{c.value=!0,setTimeout(()=>c.value=!1,2e3)})}let u=Z(()=>`
<a class="bnr__popup" href="#namePOPUP" data-remodal-target="namePOPUP"><span>nameOfPOPUP</span></a>

<div class="remodal" data-remodal-id="namePOPUP" role="dialog">
  <div class="popup__body">
      <div class="remodal-close-top">
        <button data-remodal-action="close" class="remodal-close top" aria-label="Close"><img src="shared/img/menu/popup_01.png" width="53" height="52" alt="Close"/></button>
      </div>
    
    <div class="popupMain">
    <!--POPUP CONTENT-->
    
    ${`
<h2 class="pp__title">${t.value}</h2>
<p class="pp__note">${n.value}</p>
<div class="pp__row cols-${r.value}">
  ${i.value.map(e=>`
  <div class="pp__col">
    ${e.items.map(e=>`
    <div class="pp__item">
      ${e.header?`<h3>${e.header}</h3>`:``}
      ${s(e.content,e.mode)}
    </div>`).join(``)}
  </div>`).join(`
`)}
</div>`}
    
    <!--//POPUP CONTENT-->
    </div>
    
    <button data-remodal-action="close" class="remodal-close bottom" aria-label="Close"><img src="shared/img/menu/popup_02.png" width="117" height="48" alt="閉じる"/></button>
  </div><!--//popup__body-->
</div><!--//remodal-->`),d=H(`
.popup__body {
  max-width: 1000px;
  margin: 0 auto;
}
.popupMain {
    background: #ffffff;
    padding: 80px 0 70px;
    h3 {
      border-top: 1px solid #000;
      padding: 10px 0;
      text-align: center;
      border-bottom: 1px solid #000;
      font-size: 20px;
    }
}
.pp__title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 40px;
}
.pp__note {
  font-size: 15px;
  text-align: center;
  line-height: 1;
  margin-bottom: 30px;
}
.pp__row {
  display: grid;
  gap: 10px;
  &.cols-1 { grid-template-columns: 1fr; }
  &.cols-2 { grid-template-columns: repeat(2, 1fr); }
  &.cols-3 { grid-template-columns: repeat(3, 1fr); }
}
.pp__item {
  text-align: left;
  margin-bottom: 50px;
  dl {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted rgba(0,0,0,0.5);
    padding: 10px 0;
    margin: 0 auto;
    text-align: left;
    dd {
      text-align: right;
      margin-left: 0;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }  
}

.pp__col {
  background: #e0e0e0;
  padding: 8px;
}

.remodal-close-top {
    margin-bottom: 20px;
    position: sticky;
    top: 0;
    right: 0;
    mix-blend-mode: difference;
}

.remodal-close {
    position: relative;
    display: block;
    overflow: visible;
    width: 53px;
    height: 52px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
    text-decoration: none;
    color: #95979c;
    border: 0;
    outline: 0;
    background: rgba(0, 0, 0, 0);
    margin-left: auto;
}

.remodal-close.bottom {
    width: 117px;
    margin: 0 auto;
    position: relative;
}

@media screen and (max-width: 767px) {
.popupMain {
    padding: 15vw 0;
    h3 {
      font-size: 18px;
    }
}
.pp__title {
  font-size: 25px;
  margin-bottom: 30px;
}
.pp__note {
  margin-bottom: 20px;
}
.pp__row {
  display: block; 
  gap: 0; 
}
.pp__col {
  width: 100%; 
  margin-bottom: 20px;
}
.remodal-close {
    width: 38px;
    height: 38px;
}  

.pp__item {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }  
}

.remodal-close.bottom {
      width: 95px;
  }  
}`),f=H(!1);function p(){navigator.clipboard.writeText(d.value).then(()=>{f.value=!0,setTimeout(()=>f.value=!1,2e3)})}return(e,m)=>(K(),q(G,null,[J(`div`,fd,[J(`div`,pd,[m[11]||=J(`h3`,null,`POPUP CONTENT`,-1),m[12]||=J(`label`,null,`Title:`,-1),U(J(`input`,{"onUpdate:modelValue":m[0]||=e=>t.value=e,type:`text`,placeholder:`Title...`},null,512),[[Q,t.value]]),m[13]||=J(`br`,null,null,-1),m[14]||=J(`label`,null,`Note:`,-1),U(J(`input`,{"onUpdate:modelValue":m[1]||=e=>n.value=e,type:`text`,placeholder:`Note...`},null,512),[[Q,n.value]]),m[15]||=J(`br`,null,null,-1),m[16]||=J(`label`,{class:`lableTittle`},`Number Column Display:`,-1),J(`div`,md,[J(`label`,null,[U(J(`input`,{type:`radio`,value:1,"onUpdate:modelValue":m[2]||=e=>r.value=e},null,512),[[vo,r.value,void 0,{number:!0}]]),m[5]||=X(` 1`,-1)]),J(`label`,null,[U(J(`input`,{type:`radio`,value:2,"onUpdate:modelValue":m[3]||=e=>r.value=e},null,512),[[vo,r.value,void 0,{number:!0}]]),m[6]||=X(` 2`,-1)]),J(`label`,null,[U(J(`input`,{type:`radio`,value:3,"onUpdate:modelValue":m[4]||=e=>r.value=e},null,512),[[vo,r.value,void 0,{number:!0}]]),m[7]||=X(` 3`,-1)])]),J(`div`,hd,[(K(!0),q(G,null,W(i.value,(e,t)=>(K(),q(`div`,{key:t,class:`column-box`},[(K(!0),q(G,null,W(e.items,(n,r)=>(K(),q(`div`,{key:r,class:`item-group`},[J(`div`,gd,[e.items.length>1?(K(),q(`button`,{key:0,onClick:e=>o(t,r),class:`btn-del`},`x`,8,_d)):Zi(``,!0)]),U(J(`input`,{"onUpdate:modelValue":e=>n.header=e,type:`text`,placeholder:`Title h3...`},null,8,vd),[[Q,n.header]]),m[10]||=J(`label`,null,`List content:`,-1),U(J(`textarea`,{"onUpdate:modelValue":e=>n.content=e,placeholder:`Text 1
Text 2

Text 3
Text 4`},null,8,yd),[[Q,n.content]]),J(`div`,bd,[J(`label`,null,[U(J(`input`,{type:`radio`,value:`first`,"onUpdate:modelValue":e=>n.mode=e},null,8,xd),[[vo,n.mode]]),m[8]||=X(` First`,-1)]),J(`label`,null,[U(J(`input`,{type:`radio`,value:`last`,"onUpdate:modelValue":e=>n.mode=e},null,8,Sd),[[vo,n.mode]]),m[9]||=X(` Last`,-1)])])]))),128)),J(`button`,{onClick:e=>a(t),class:`btn-more`},`+ Add More Item`,8,Cd)]))),128))])]),J(`div`,wd,[m[17]||=J(`h3`,null,`Preview Render`,-1),J(`h2`,Td,z(t.value),1),J(`p`,Ed,z(n.value),1),J(`div`,{class:he([`pp__row`,`cols-`+r.value])},[(K(!0),q(G,null,W(i.value,(e,t)=>(K(),q(`div`,{key:t,class:`pp__col`},[(K(!0),q(G,null,W(e.items,(e,t)=>(K(),q(`div`,{key:t,class:`pp__item`},[e.header?(K(),q(`h3`,Dd,z(e.header),1)):Zi(``,!0),J(`div`,{innerHTML:s(e.content,e.mode)},null,8,Od)]))),128))]))),128))],2),m[18]||=J(`h3`,null,`Preview Code`,-1),J(`div`,kd,[J(`button`,{class:`copied`,onClick:l},`Copy Code`),c.value?(K(),q(`span`,Ad,`Copied !`)):Zi(``,!0)]),J(`pre`,null,z(u.value),1)]),J(`div`,jd,[J(`button`,{class:`copied`,onClick:p},`Copy SCSS`),f.value?(K(),q(`span`,Md,`Copied !`)):Zi(``,!0),m[19]||=J(`h3`,null,`SCSS Code`,-1),J(`pre`,null,z(d.value),1)])]),Y(dd),Y(ed)],64))}},Pd={class:`converter-container`},Fd={class:`column column-left`},Id={class:`column column-right`},Ld={class:`scss-header`},Rd={class:`options-wrapper`},zd={class:`options-area`},Bd={class:`multiselect-container`},Vd=[`onClick`],Hd=[`value`],Ud={class:`options-area`},Wd={class:`multiselect-container`},Gd=[`onClick`],Kd=[`value`],qd={class:`code-output-area scss-output`},Jd=Mo({__name:`convertHtml`,setup(e){let t=H(``),n=H(``),r=H(new Set),i=H(new Set),a=H(new Set),o=H(new Set),s=H(`Copy SCSS`),c=Z(()=>[...r.value].filter(e=>!a.value.has(e))),l=Z(()=>[...i.value].filter(e=>!o.value.has(e)));zn([t,a,o],()=>{u()},{deep:!0});let u=()=>{if(!t.value.trim()){n.value=``,r.value=new Set,i.value=new Set;return}let e=new DOMParser().parseFromString(t.value,`text/html`);f(e.body),n.value=Array.from(e.body.children).map(e=>d(e,0)).filter(Boolean).join(`

`)},d=(e,t)=>{let n=`  `.repeat(t),r=``;if(e.id&&!o.value.has(e.id)&&(r+=`#${e.id}`),e.className&&typeof e.className==`string`){let t=e.className.split(` `).filter(e=>e&&!a.value.has(e.trim()));t.length>0&&(r+=`.${t.join(`.`)}`)}if(!r){let n=e.tagName.toLowerCase();if([`div`,`span`,`strong`,`i`,`em`,`b`,`article`,`canvas`,`svg`,`script`,`style`,`picture`,`img`,`source`,`br`].includes(n))return n===`svg`?``:Array.from(e.children).map(e=>d(e,t)).filter(Boolean).join(`
`);r=n}let i=Array.from(e.children).map(e=>d(e,t+1)).filter(Boolean).join(`
`),s=``;if(t===0){let e=`  `.repeat(t+1);s=`\n${i?`
`:``}${e}@media screen and (min-width: 768px) {\n${e}  /* Responsive here */\n${e}}`}return`${n}${r} {\n${i}${s}\n${n}}`},f=e=>{let t=new Set,n=new Set;e.querySelectorAll(`[class]`).forEach(e=>e.classList.forEach(e=>e&&t.add(e))),e.querySelectorAll(`[id]`).forEach(e=>e.id&&n.add(e.id)),r.value=t,i.value=n},p=e=>{let t=e.target.value;t&&(a.value.add(t),e.target.value=``)},m=e=>a.value.delete(e),h=e=>{let t=e.target.value;t&&(o.value.add(t),e.target.value=``)},g=e=>o.value.delete(e),_=async()=>{if(n.value)try{await navigator.clipboard.writeText(n.value),s.value=`Copied!`,setTimeout(()=>{s.value=`Copy SCSS`},2e3)}catch(e){console.error(`Failed to copy: `,e),s.value=`Failed!`,setTimeout(()=>{s.value=`Copy SCSS`},2e3)}};return(e,r)=>(K(),q(`div`,Pd,[J(`div`,Fd,[r[1]||=J(`h2`,null,`Paste HTML Code Here`,-1),U(J(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`<section id="read1" class="box__c">
  ...
</section>`,class:`code-input-area`,spellcheck:`false`},null,512),[[Q,t.value]])]),J(`div`,Id,[J(`div`,Ld,[r[2]||=J(`h2`,null,`SCSS Output`,-1),J(`button`,{onClick:_,class:`copy-btn`},z(s.value),1)]),J(`div`,Rd,[J(`div`,zd,[r[4]||=J(`label`,{for:`excluded-ids-select`},`Excluded IDs:`,-1),J(`div`,Bd,[(K(!0),q(G,null,W(o.value,e=>(K(),q(`div`,{key:e,class:`selected-class-tag id-tag`},[X(` #`+z(e)+` `,1),J(`span`,{onClick:t=>g(e),class:`remove-tag-btn`},`×`,8,Vd)]))),128)),J(`select`,{id:`excluded-ids-select`,onChange:h,class:`multiselect-select`},[r[3]||=J(`option`,{value:``,disabled:``,selected:``},`Select IDs to exclude...`,-1),(K(!0),q(G,null,W(l.value,e=>(K(),q(`option`,{key:e,value:e},` #`+z(e),9,Hd))),128))],32)])]),J(`div`,Ud,[r[6]||=J(`label`,{for:`excluded-classes-select`},`Excluded Classes:`,-1),J(`div`,Wd,[(K(!0),q(G,null,W(a.value,e=>(K(),q(`div`,{key:e,class:`selected-class-tag`},[X(` .`+z(e)+` `,1),J(`span`,{onClick:t=>m(e),class:`remove-tag-btn`},`×`,8,Gd)]))),128)),J(`select`,{id:`excluded-classes-select`,onChange:p,class:`multiselect-select`},[r[5]||=J(`option`,{value:``,disabled:``,selected:``},`Select classes to exclude...`,-1),(K(!0),q(G,null,W(c.value,e=>(K(),q(`option`,{key:e,value:e},` .`+z(e),9,Kd))),128))],32)])])]),J(`pre`,qd,[J(`code`,null,z(n.value),1)])])]))}},[[`__scopeId`,`data-v-cdf13890`]]),Yd={class:`container`},Xd={class:`controls-panel`},Zd={class:`control-group`},Qd={class:`converter-section`},$d={class:`single-converter`},ef={class:`result-vw`},tf={class:`list-panel`},nf={class:`font-size-list`},rf={class:`px-value`},af={class:`vw-value`},of=[`onClick`],sf=Mo({__name:`fontSize`,setup(e){let t=H(550),n=H(200),r=H(null),i=Array.from({length:187},(e,t)=>200-t),a=(e,t)=>t<=0||!e?`0.00vw`:`${(e/t*100).toFixed(2)}vw`,o=Z(()=>a(n.value,t.value)),s=Z(()=>i.map(e=>({px:e,vw:a(e,t.value)}))),c=async(e,t)=>{if(r.value!==t)try{await navigator.clipboard.writeText(e),r.value=t,setTimeout(()=>{r.value===t&&(r.value=null)},2e3)}catch(e){console.error(`Failed to copy text: `,e),alert(`Failed to copy text.`)}};return(e,i)=>(K(),q(`div`,Yd,[J(`div`,Xd,[i[7]||=J(`h1`,{class:`title`},`PX to VW`,-1),J(`div`,Zd,[i[3]||=J(`label`,{for:`viewport`},`Viewport Width (px)`,-1),U(J(`input`,{id:`viewport`,type:`number`,"onUpdate:modelValue":i[0]||=e=>t.value=e},null,512),[[Q,t.value,void 0,{number:!0}]])]),i[8]||=J(`hr`,{class:`separator`},null,-1),J(`div`,Qd,[i[6]||=J(`h2`,{class:`subtitle`},`Single Converter`,-1),J(`div`,$d,[U(J(`input`,{type:`number`,"onUpdate:modelValue":i[1]||=e=>n.value=e,placeholder:`Enter px`},null,512),[[Q,n.value,void 0,{number:!0}]]),i[4]||=J(`span`,{class:`unit-label`},`px`,-1),i[5]||=J(`span`,{class:`equals`},`=`,-1),J(`span`,ef,z(o.value),1)]),J(`button`,{onClick:i[2]||=e=>c(o.value,`single`),class:he([`copy-btn`,{copied:r.value===`single`}])},z(r.value===`single`?`Copied!`:`Copy`),3)])]),J(`div`,tf,[i[10]||=J(`h2`,{class:`subtitle`},`Font Size List (14px to 200px)`,-1),J(`ul`,nf,[(K(!0),q(G,null,W(s.value,e=>(K(),q(`li`,{key:e.px},[J(`span`,rf,z(e.px)+`px`,1),i[9]||=J(`span`,{class:`arrow`},`→`,-1),J(`span`,af,z(e.vw),1),J(`button`,{onClick:t=>c(e.vw,e.px),class:he([`copy-btn-small`,{copied:r.value===e.px}])},z(r.value===e.px?`Copied!`:`Copy`),11,of)]))),128))])])]))}},[[`__scopeId`,`data-v-dd1614b7`]]),cf=o(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof l==`function`&&l;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var u=Error(`Cannot find module '`+o+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var a=typeof l==`function`&&l,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.1`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){return typeof e==`string`?`string`:Object.prototype.toString.call(e)===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&e instanceof Uint8Array?`uint8array`:r.arraybuffer&&e instanceof ArrayBuffer?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(e))!==-1)&&typeof FileReader<`u`?new o.Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,typeof e==`string`?s.input=a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,typeof e==`string`?p.input=a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function ee(e){return(e<<1)-(4<e?9:0)}function te(e){for(var t=e.length;0<=--t;)e[t]=0}function N(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function P(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,N(e.strm)}function F(e,t){e.pending_buf[e.pending++]=t}function I(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function R(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function ne(e,t){for(var n,r;;){if(e.lookahead<T){if(R(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=L(e,n)),e.match_length>=C)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}function re(e,t){for(var n,r,i;;){if(e.lookahead<T){if(R(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=L(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(P(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&P(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}function ie(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function ae(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function oe(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function se(e){var t=oe(e);return t===d&&function(e){e.window_size=2*e.w_size,te(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function ce(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new ae;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,se(e)}r=[new ie(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(R(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,P(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(P(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(P(e,!1),e.strm.avail_out),O)}),new ie(4,4,8,4,ne),new ie(4,5,16,8,ne),new ie(4,6,32,32,ne),new ie(4,4,16,16,re),new ie(8,16,32,32,re),new ie(8,16,128,128,re),new ie(8,32,128,256,re),new ie(32,128,258,1024,re),new ie(32,258,258,4096,re)],n.deflateInit=function(e,t){return ce(e,t,g,15,8,0)},n.deflateInit2=ce,n.deflateReset=se,n.deflateResetKeep=oe,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E)if(i.wrap===2)e.adler=0,F(i,31),F(i,139),F(i,8),i.gzhead?(F(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),F(i,255&i.gzhead.time),F(i,i.gzhead.time>>8&255),F(i,i.gzhead.time>>16&255),F(i,i.gzhead.time>>24&255),F(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),F(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(F(i,255&i.gzhead.extra.length),F(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(F(i,0),F(i,0),F(i,0),F(i,0),F(i,0),F(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),F(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,I(i,p),i.strstart!==0&&(I(i,e.adler>>>16),I(i,65535&e.adler)),e.adler=1}if(i.status===69)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),N(e),o=i.pending,i.pending!==i.pending_buf_size));)F(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(i.status===73)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),N(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,F(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91;if(i.status===91)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),N(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,F(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103;if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&N(e),i.pending+2<=i.pending_buf_size&&(F(i,255&e.adler),F(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(N(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&ee(t)<=ee(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(R(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(R(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(te(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),N(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(F(i,255&e.adler),F(i,e.adler>>8&255),F(i,e.adler>>16&255),F(i,e.adler>>24&255),F(i,255&e.total_in),F(i,e.total_in>>8&255),F(i,e.total_in>>16&255),F(i,e.total_in>>24&255)):(I(i,e.adler>>>16),I(i,65535&e.adler)),N(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(te(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,R(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,R(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,ee,te,N,P,F,I,L=0,R=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,P=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){R[n.check=0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,N=8+(15&(b>>>=4)),n.wbits===0)n.wbits=N;else if(N>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<N,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,R[2]=b>>>16&255,R[3]=b>>>24&255,n.check=a(n.check,R,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(N=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,N)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;N=p[g+ E++],n.head&&N&&n.length<65536&&(n.head.name+=String.fromCharCode(N)),N&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,N)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;N=p[g+ E++],n.head&&N&&n.length<65536&&(n.head.comment+=String.fromCharCode(N)),N&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,N)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[ne[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[ne[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,F={bits:n.lenbits},P=s(0,n.lens,0,19,n.lencode,0,n.work,F),n.lenbits=F.bits,P){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(L=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&L,!((k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(I=k+2;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}N=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(I=k+3;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,N=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(I=k+7;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,N=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=N}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,F={bits:n.lenbits},P=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,F),n.lenbits=F.bits,P){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,F={bits:n.distbits},P=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,F),n.distbits=F.bits,P){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(L=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&L,!((k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,ee=A,te=j;A=(L=n.lencode[te+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&L,!(M+(k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(I=n.extra;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(L=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&L,!((k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,ee=A,te=j;A=(L=n.distcode[te+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&L,!(M+(k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(I=n.extra;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:P=1;break e;case 30:P=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&P===u&&(P=-5),P)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,ee=null,te=0,N=new r.Buf16(16),P=new r.Buf16(16),F=null,I=0;for(C=0;C<=15;C++)N[C]=0;for(w=0;w<c;w++)N[t[n+w]]++;for(D=S,E=15;1<=E&&N[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&N[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=N[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(P[1]=0,C=1;C<15;C++)P[C+1]=P[C]+N[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[P[t[n+w]]++]=w);if(v=e===0?(ee=F=d,19):e===1?(ee=i,te-=257,F=a,I-=257,256):(ee=o,F=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=F[I+d[w]],ee[te+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--N[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=N[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,ee=Array(d);function te(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function N(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function P(e){return e<256?D[e]:D[256+(e>>>7)]}function F(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function I(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,F(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function L(e,t,n){I(e,n[2*t],n[2*t+1])}function R(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function ne(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=R(a[s]++,s))}}function re(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ie(e){8<e.bi_valid?F(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ae(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function oe(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&ae(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!ae(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function se(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?L(e,i,t):(L(e,(a=O[i])+l+1,t),(o=x[a])!==0&&I(e,i-=k[a],o),L(e,a=P(--r),n),(o=S[a])!==0&&I(e,r-=ee[a],o)),s<e.last_lit;);L(e,_,t)}function ce(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)oe(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],oe(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,oe(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),ne(a,l,e.bl_count)}function le(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function ue(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;L(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(L(e,y,e.bl_tree),I(e,s-3,3)):(L(e,b,e.bl_tree),I(e,s-11,7)):(i!==a&&(L(e,i,e.bl_tree),s--),L(e,v,e.bl_tree),I(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(ee);var de=!1;function fe(e,t,n,i){I(e,(s<<1)+(i?1:0),3),function(e,t,n,i){ie(e),i&&(F(e,n),F(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){de||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(ee[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(ee[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+ i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(ne(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=R(e,5);A=new te(T,x,l+1,u,m),j=new te(E,S,0,d,m),M=new te([],C,0,f,g)}(),!0),e.l_desc=new N(e.dyn_ltree,A),e.d_desc=new N(e.dyn_dtree,j),e.bl_desc=new N(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,re(e)},n._tr_stored_block=fe,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),ce(e,e.l_desc),ce(e,e.d_desc),c=function(e){var t;for(le(e,e.dyn_ltree,e.l_desc.max_code),le(e,e.dyn_dtree,e.d_desc.max_code),ce(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?fe(e,t,n,r):e.strategy===4||s===o?(I(e,2+(r?1:0),3),se(e,T,E)):(I(e,4+(r?1:0),3),function(e,t,n,r){var i;for(I(e,t-257,5),I(e,n-1,5),I(e,r-4,4),i=0;i<r;i++)I(e,e.bl_tree[2*w[i]+1],3);ue(e,e.dyn_ltree,t-1),ue(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),se(e,e.dyn_ltree,e.dyn_dtree)),re(e),r&&ie(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*P(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){I(e,2,3),L(e,_,T),function(e){e.bi_valid===16?(F(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})})),lf=c(cf()),uf={class:`font-face-generator`},df={class:`font-list-panel`},ff={class:`font-list-container`},pf=[`id`,`value`],mf=[`for`],hf={class:`action-section`},gf={class:`filename-label`},_f={class:`saveas-label`},vf=[`disabled`],yf={key:0,class:`error-message`},bf={key:1,class:`note`},xf={class:`css-output-panel`},Sf={class:`header`},Cf=[`disabled`],wf={key:0,class:`copy-success-message`},Tf={class:`code-display`},Ef=Mo({__name:`fontsFace`,setup(e){let t=e=>{let t=e.toLowerCase(),n=t.match(/\b(100|200|300|400|500|600|700|800|900)\b/);return n?parseInt(n[0],10):t.includes(`black`)||t.includes(`heavy`)?900:t.includes(`extrabold`)?800:t.includes(`bold`)?700:t.includes(`semibold`)||t.includes(`demibold`)?600:t.includes(`medium`)?500:t.includes(`regular`)||t.includes(`normal`)?400:t.includes(`light`)?300:t.includes(`extralight`)?200:t.includes(`thin`)?100:400},n=e=>({100:`thin`,200:`extralight`,300:`light`,400:`regular`,500:`medium`,600:`semibold`,700:`bold`,800:`extrabold`,900:`black`})[e]||`w${e}`,r=H([]);sr(()=>{fetch(`/toolvuejsv2/fonts.json`).then(e=>e.ok?e.json():[]).then(e=>{r.value=e}).catch(e=>console.error(`Error loading fonts.json:`,e))});let i=H([]),a=H(!1),o=H(!1),s=H(``),c=H(`selected-fonts.zip`),l=H(!1),u=typeof window<`u`&&`showSaveFilePicker`in window,d=Z(()=>i.value.map(e=>{let{fileName:n,fontFamily:r}=e;return`@font-face {\n  font-family: '${r}';\n  src: url('../fonts/${n}') format('${n.split(`.`).pop()}');\n  font-weight: ${t(n)};\n  font-style: normal;\n  font-display: swap;\n}`}).join(`

`)),f=Z(()=>i.value.map(e=>{let{fontFamily:r,fileName:i}=e,a=t(i),o=n(a);return`.${`fnt-${r.toLowerCase().replace(/\s+/g,`-`)}-${o}`} {\n  font-family: '${r}';\n  font-style: normal;\n  font-weight: ${a};\n}`}).join(`

`)),p=Z(()=>i.value.length===0?`/* Select a font to see the generated CSS code. */`:`${d.value}\n\n/* --- FONTS Classes --- */\n\n${f.value}`),m=async()=>{if(i.value.length!==0)try{await navigator.clipboard.writeText(p.value),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}catch(e){console.error(`Lỗi khi copy CSS: `,e)}},h=async()=>{if(i.value.length===0)return;o.value=!0,s.value=``;let e=new lf.default;try{let t=i.value.map(t=>fetch(`/toolvuejsv2/fonts/${t.fileName}`).then(e=>{if(!e.ok)throw Error(`Không thể tải file: ${t.fileName}`);return e.blob()}).then(n=>{e.file(t.fileName,n)}));await Promise.all(t);let n=await e.generateAsync({type:`blob`});if(l.value&&u)try{let e={suggestedName:c.value||`selected-fonts.zip`,types:[{description:`ZIP file`,accept:{"application/zip":[`.zip`]}}]},t=await(await window.showSaveFilePicker(e)).createWritable();await t.write(n),await t.close()}catch(e){console.warn(`File picker failed, falling back to anchor download.`,e);let t=document.createElement(`a`);t.href=URL.createObjectURL(n),t.download=c.value||`selected-fonts.zip`,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(t.href)}else{let e=document.createElement(`a`);e.href=URL.createObjectURL(n),e.download=c.value||`selected-fonts.zip`,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(e.href)}}catch(e){console.error(`Lỗi khi tạo file zip:`,e),s.value=e.message}finally{o.value=!1}};return(e,t)=>(K(),q(`div`,uf,[J(`div`,df,[t[5]||=J(`h2`,null,`Danh mục Fonts`,-1),t[6]||=J(`p`,{class:`description`},` Select fonts from the list to generate CSS code and download it. `,-1),J(`div`,ff,[(K(!0),q(G,null,W(r.value,e=>(K(),q(`div`,{key:e.fileName,class:`font-item`},[U(J(`input`,{type:`checkbox`,id:e.fileName,"onUpdate:modelValue":t[0]||=e=>i.value=e,value:e},null,8,pf),[[go,i.value]]),J(`label`,{for:e.fileName},z(e.fileName),9,mf)]))),128))]),J(`div`,hf,[J(`label`,gf,[t[3]||=X(` File Name: `,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":t[1]||=e=>c.value=e,class:`filename-input`},null,512),[[Q,c.value]])]),J(`label`,_f,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":t[2]||=e=>l.value=e},null,512),[[go,l.value]]),t[4]||=X(` Use Save As (choose folder/filename) `,-1)]),J(`button`,{onClick:h,disabled:i.value.length===0||o.value,class:`download-button`},z(o.value?`unzip...`:`Download Fonts (.zip)`),9,vf),s.value?(K(),q(`p`,yf,z(s.value),1)):Zi(``,!0),l.value&&!Qt(u)?(K(),q(`p`,bf,`Lưu ý: trình duyệt không hỗ trợ File System Access API; sẽ fallback sang download bình thường.`)):Zi(``,!0)]),t[7]||=J(`hr`,{class:`divider`},null,-1),t[8]||=J(`h3`,null,`Dummy Template (Fallback)`,-1),t[9]||=J(`pre`,{class:`dummy-code`},[J(`code`,null,`@font-face {
  font-family: 'TEMPLATE_FONT_FAMILY';
  src: url('../fonts/TEMPLATE_FONT_FILE.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`)],-1)]),J(`div`,xf,[J(`div`,Sf,[t[10]||=J(`h2`,null,`Code CSS`,-1),J(`button`,{onClick:m,class:`copy-button`,disabled:i.value.length===0},` Copy `,8,Cf)]),a.value?(K(),q(`span`,wf,`Copied !`)):Zi(``,!0),J(`pre`,Tf,[J(`code`,null,z(p.value),1)])])]))}},[[`__scopeId`,`data-v-2b487a1b`]]),Df={name:`GtagName`,data(){return{gtagList:[],copiedIndex:null,copyTimeout:null,defaultGtagList:`onClick="gtag('event','btn_shopping',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_hotpepper',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_tabelog',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_gnavi',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_ikyu',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_toreta',{transport_type:'beacon'});".onClick="gtag('event','header_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','fix_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','footer_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','info_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','recruit_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','btn_fb',{transport_type:'beacon'});".onClick="gtag('event','btn_insta',{transport_type:'beacon'});".onClick="gtag('event','btn_line',{transport_type:'beacon'});".onClick="gtag('event','gmap_print',{transport_type:'beacon'});".onClick="gtag('event','btn_blog',{transport_type:'beacon'});".onClick="gtag('event','btn_shopping',{transport_type:'beacon'});".onClick="gtag('event','shopping_商品名',{transport_type:'beacon'});".onClick="gtag('event','btn_shopping',{transport_type:'beacon'});".onClick="gtag('event','btn_hotpepper',{transport_type:'beacon'});".onClick="gtag('event','header_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','btn_reserve',{transport_type:'beacon'});".onClick="gtag('event','btn_osechi',{transport_type:'beacon'});".onClick="gtag('event','btn_ouchiset',{transport_type:'beacon'});".onClick="gtag('event','btn_衛生対策強化中',{transport_type:'beacon'});".onClick="gtag('event','btn_lunch',{transport_type:'beacon'});".onClick="gtag('event','btn_kani',{transport_type:'beacon'});".onClick="gtag('event','btn_enkai',{transport_type:'beacon'});".onClick="gtag('event','btn_takeout',{transport_type:'beacon'});".onClick="gtag('event','gmap_print',{transport_type:'beacon'});".onClick="gtag('event','sp_gmap',{transport_type:'beacon'});".onClick="gtag('event','btn_insta',{transport_type:'beacon'});".onClick="gtag('event','btn_facebook',{transport_type:'beacon'});".onClick="gtag('event','copy_url');".onClick="gtag('event','fix_takeout',{transport_type:'beacon'});".onClick="gtag('event','fix_catering',{transport_type:'beacon'});".onClick="gtag('event','fix_shopping',{transport_type:'beacon'});".onClick="gtag('event','fix_reserve',{transport_type:'beacon'});".onblur="gtag('event','form_fullname');".onblur="gtag('event','form_email');".onblur="gtag('event','form_phone');".onblur="gtag('event','form_time');".onblur="gtag('event','form_people');".onblur="gtag('event','form_message');".onClick="gtag('event','送信ボタン',{transport_type:'beacon'});".onClick="gtag('event','入力確認ボタン',{transport_type:'beacon'});"`.split(`.`)}},created(){this.loadGtagList()},watch:{gtagList:{handler(e){this.saveGtagList(e)},deep:!0}},methods:{loadGtagList(){try{let e=localStorage.getItem(`gtagList`);e?this.gtagList=JSON.parse(e):(this.gtagList=[...this.defaultGtagList],this.saveGtagList(this.gtagList))}catch(e){console.error(`Error loading gtagList from localStorage`,e),this.gtagList=[...this.defaultGtagList]}},saveGtagList(e){try{localStorage.setItem(`gtagList`,JSON.stringify(e))}catch(e){console.error(`Error saving gtagList to localStorage`,e)}},copyToClipboard(e,t){this.copyTimeout&&clearTimeout(this.copyTimeout),navigator.clipboard.writeText(e).then(()=>{this.copiedIndex=t,this.copyTimeout=setTimeout(()=>{this.copiedIndex=null,this.copyTimeout=null},2e3)}).catch(e=>{console.error(`Không thể copy văn bản: `,e),alert(`Không thể copy văn bản. Vui lòng thử lại.`)})}}},Of={class:`gtag-container`},kf={class:`gtag-text`},Af={class:`gtag-actions`},jf=[`onClick`];function Mf(e,t,n,r,i,a){return K(),q(`div`,Of,[t[0]||=J(`h1`,null,`Gtag Name 2026`,-1),t[1]||=J(`hr`,null,null,-1),(K(!0),q(G,null,W(i.gtagList,(e,t)=>(K(),q(`div`,{key:t,class:`gtag-item`},[J(`span`,kf,z(e),1),J(`div`,Af,[J(`button`,{onClick:n=>a.copyToClipboard(e,t),class:he([`copy-button`,{"copied-success":i.copiedIndex===t}])},z(i.copiedIndex===t?`Copied`:`Copy`),11,jf)])]))),128))])}var Nf=Mo(Df,[[`render`,Mf],[`__scopeId`,`data-v-4ed5790e`]]),Pf={class:`upload-box-container`},Ff={key:0,class:`image-list`},If={class:`list-header`},Lf=[`disabled`],Rf={class:`grid-items`},zf=[`onUpdate:modelValue`],Bf={class:`preview-box`},Vf=[`src`,`alt`],Hf={class:`rename-box`},Uf=[`onUpdate:modelValue`,`placeholder`],Wf={id:`image-placeholders`},Gf=[`value`],Kf=Mo({__name:`blogImage`,setup(e){let t=H([]),n=H(!1),r=Z(()=>t.value.filter(e=>e.selected).length),i=Z({get(){return t.value.length>0&&t.value.every(e=>e.selected)},set(e){t.value.forEach(t=>{t.selected=e})}}),a=()=>{},o=[`logo.png`,`ogp.png`,`bg.jpg`,`key.jpg`,`bg-nav.jpg`,`favicon.ico`,`apple-touch-icon.png`],s=e=>o[e]||`Tên file mới...`,c=e=>{Array.from(e).filter(e=>e.type.startsWith(`image/`)||e.name.endsWith(`.ico`)).forEach(e=>{t.value.push({file:e,previewUrl:URL.createObjectURL(e),selected:!0,customName:e.name})})},l=e=>{c(e.target.files),e.target.value=``},u=e=>{c(e.dataTransfer.files)},d=async()=>{let e=t.value.filter(e=>e.selected);if(e.length!==0)try{n.value=!0;let t=await window.showDirectoryPicker();for(let n of e){let e=n.customName.trim()||n.file.name,r=await(await t.getFileHandle(e,{create:!0})).createWritable();await r.write(n.file),await r.close()}alert(`🎉 Thành công! Đã lưu ${e.length} ảnh.`)}catch(e){e.name!==`AbortError`&&alert(`Đã xảy ra lỗi hoặc trình duyệt không hỗ trợ API.`)}finally{n.value=!1}};return dr(()=>{t.value.forEach(e=>URL.revokeObjectURL(e.previewUrl))}),(e,c)=>(K(),q(`div`,Pf,[c[4]||=Xi(`<h2 data-v-df5c3f45>Trình Quản Lý Upload &amp; Lưu Ảnh</h2><p class="file-guide" data-v-df5c3f45><span class="file-tag" data-v-df5c3f45>logo.png</span><span class="file-tag" data-v-df5c3f45>ogp.png</span><span class="file-tag" data-v-df5c3f45>bg.jpg (png) - root</span><span class="file-tag" data-v-df5c3f45>key.jpg</span><span class="file-tag" data-v-df5c3f45>bg-nav.jpg (png) - root</span><span class="file-tag" data-v-df5c3f45>favicon.ico</span><span class="file-tag" data-v-df5c3f45>apple-touch-icon.png</span></p>`,2),J(`div`,{class:`drop-zone`,onDragover:c[0]||=To(()=>{},[`prevent`]),onDrop:To(u,[`prevent`]),onClick:c[1]||=t=>e.$refs.fileInput.click()},[c[3]||=J(`p`,null,`📤 Kéo thả nhiều ảnh vào đây hoặc click để chọn`,-1),J(`input`,{type:`file`,ref:`fileInput`,multiple:``,accept:`image/*`,style:{display:`none`},onChange:l},null,544)],32),t.value.length>0?(K(),q(`div`,Ff,[J(`div`,If,[J(`label`,null,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":c[2]||=e=>i.value=e,onChange:a},null,544),[[go,i.value]]),X(` Chọn tất cả (`+z(r.value)+`/`+z(t.value.length)+`) `,1)]),J(`button`,{disabled:r.value===0||n.value,onClick:d,class:`btn-save`},z(n.value?`⏳ Đang lưu...`:`💾 Lưu File đã chọn (Save As)`),9,Lf)]),J(`div`,Rf,[(K(!0),q(G,null,W(t.value,(e,t)=>(K(),q(`div`,{key:t,class:`image-item`},[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.selected=t,class:`item-checkbox`},null,8,zf),[[go,e.selected]]),J(`div`,Bf,[J(`img`,{src:e.previewUrl,alt:e.file.name},null,8,Vf)]),J(`div`,Hf,[U(J(`input`,{"onUpdate:modelValue":t=>e.customName=t,type:`text`,placeholder:s(t),list:`image-placeholders`,class:`rename-input`},null,8,Uf),[[Q,e.customName]])])]))),128))]),J(`datalist`,Wf,[(K(),q(G,null,W(o,e=>J(`option`,{key:e,value:e},null,8,Gf)),64))])])):Zi(``,!0)]))}},[[`__scopeId`,`data-v-df5c3f45`]]),qf=c(cf()),Jf={class:`editor-container`},Yf={class:`header`},Xf={class:`actions`},Zf=[`disabled`],Qf=[`disabled`],$f=[`disabled`],ep={class:`workspace`},tp={class:`input-area`},np={class:`box box__textarea`},rp={class:`box`},ip={class:`style-selector`},ap={class:`menu-list`},op={class:`menu-item-row`},sp={class:`has-sub-checkbox`},cp=[`onUpdate:modelValue`,`id`],lp=[`for`],up=[`onUpdate:modelValue`],dp=[`onUpdate:modelValue`],fp=[`onUpdate:modelValue`],pp=[`onUpdate:modelValue`],mp=[`onUpdate:modelValue`],hp=[`onUpdate:modelValue`],gp=[`onClick`],_p={key:0,class:`submenu-container`},vp=[`onUpdate:modelValue`],yp=[`onUpdate:modelValue`],bp=[`onClick`],xp=[`onClick`],Sp={class:`box`},Cp={class:`css-grid`},wp={class:`css-group`},Tp={class:`input-group`},Ep={class:`input-group`},Dp={class:`input-group`},Op={class:`input-group`},kp={class:`input-group`},Ap={class:`css-group`},jp={class:`input-group`},Mp={class:`input-group`},Np={class:`input-group`},Pp={class:`input-group`},Fp={class:`input-group`},Ip={class:`input-group`},Lp={class:`input-group`},Rp={class:`input-group`},zp={class:`input-group`},Bp={class:`css-group`},Vp={class:`input-group`},Hp={class:`input-group`},Up={class:`input-group`},Wp={class:`input-group`},Gp={class:`input-group`},Kp={class:`input-group`},qp={class:`css-group`},Jp={class:`input-group`},Yp={class:`input-group`},Xp={class:`input-group`},Zp={class:`input-group`},Qp={class:`box`},$p={class:`upload-grid`},em={class:`upload-group`},tm={class:`upload-group`},nm={class:`preview-area`},rm={class:`tab-header`},im={class:`tab-content`},am=[`srcdoc`],om=[`value`],sm=[`value`],cm={key:0,class:`loading-overlay`},lm=`#navbar span.parent,#navbar a{padding:15px 20px;font-family:var(--nav-font);font-weight:var(--nav-weight);font-optical-sizing:auto;font-style:normal;color:var(--nav-color);display:block;font-size:var(--nav-size);}#navbar a:hover{text-decoration:none;background:var(--nav-hover);color:var(--nav-text-hover)}#navbar .sub{background:var(--bg-nav);display:block;width:200px}#navbar li:hover>.parent{background:var(--nav-hover);color:var(--nav-text-hover)}@media screen and (max-width:768px){#navbar ul{display:block}#navbar li{display:block;text-align: left;border-top:1px solid #dfdfdf;border-bottom:1px solid #dfdfdf}#navbar span.parent,#navbar a{color:#27170c;background:none;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}#navbar li:hover>.parent,#navbar a:hover{color:#27170c;background:#efefef}#navbar .sub{background:none;width:100%;position: relative;top:0;left:0; transform: translateX(0%);opacity: 1;visibility: visible;}#navbar .sub a:before{background:#606060}}`,um=`#navbar span.parent,#navbar a{padding:15px 20px;font-family:var(--nav-font);font-weight:var(--nav-weight);font-optical-sizing:auto;font-style:normal;color:var(--nav-color);font-size:var(--nav-size);display:block;position:relative}#navbar li:hover>.parent,#navbar a:hover{text-decoration:none;background:var(--nav-hover);color:var(--nav-text-hover)}#navbar .sub{background:var(--bg-nav);display:block;width:200px}#navbar span.t-jp{font-size:var(--nav-font-sizeJp)}#navbar span.t-en{display:block;font-family:var(--nav-font-en);font-weight:var(--nav-font-weight);font-style:var(--nav-font-style);text-transform:var(--nav-font-transform);font-size:var(--nav-font-sizeEn)}#navbar .parent::after,#navbar a::after{content:"";background:var(--nav-line);height:5px;position:absolute;bottom:0;left:10px;right:10px;transition:all .4s ease;opacity:0;visibility:hidden}#navbar li:hover>.parent::after,#navbar a:hover::after{opacity:1;visibility:visible}#navbar .sub a{font-size:15px;font-weight:400}#navbar .sub a::after{display:none}@media screen and (max-width:768px){#navbar ul{display:block}#navbar li{text-align: left;display:block;border-top:1px solid #dfdfdf;border-bottom:1px solid #dfdfdf}#navbar span.parent,#navbar a{color:#27170c;background:none;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}#navbar a:hover{color:#27170c;background:#efefef}#navbar .sub{background:none;width:100%; position: relative;top:0;left:0; transform: translateX(0); opacity:1; visibility: visible;}#navbar .sub a:before{background:#606060}#navbar .parent::after,#navbar a::after{display:none}#navbar li:hover>.parent{background:#efefef;color:#27170c}}`,dm=`#navbar ul{justify-content:center}#navbar .parent,#navbar a{padding:0;display:block;font-size:var(--nav-size);position:relative;color:var(--nav-color)}#navbar ul li .parent::before,#navbar ul li a::before,#navbar ul li .parent::after,#navbar ul li a::after{content:"";border-left:1px solid var(--nav-line);position:absolute;bottom:0;top:0;width:1px}#navbar ul li .parent::before,#navbar ul li a::before{right:-2px;left:auto}#navbar ul li .parent::after,#navbar ul li a::after{left:0}#navbar ul li:last-child a::after,#navbar ul li:last-child .parent::after,#navbar ul li:first-child a::before,#navbar ul li:first-child .parent::before{display:none}#navbar .parent:hover,#navbar a:hover{text-decoration:none}#navbar .parent span,#navbar a span{padding:15px 20px;display:block}#navbar span.changeOnText{position:absolute;top:4px;bottom:4px;left:4px;right:4px;opacity:0;color:#fff;font-size:15px;text-transform:uppercase;display:block;background:var(--nav-hover);line-height:1;z-index:2;padding:15px 0;transition:opacity .3s}#navbar a:hover span.changeOnText,#navbar li:hover .parent span.changeOnText{opacity:1}#navbar .sub{background:var(--bg-nav);display:block;width:200px}#navbar .sub a{padding:15px 10px;font-family:var(--nav-font);font-weight:400;font-style:normal;color:var(--nav-color)}#navbar .sub a:hover{background:var(--nav-hover);color:var(--nav-text-hover)}#navbar .sub a::before,#navbar .sub a::after{display:none}@media screen and (max-width: 768px){#navbar ul{display:block}#navbar li{display:block;border-top:1px solid #dfdfdf;border-bottom:1px solid #dfdfdf;text-align:left}#navbar ul li .parent::after,#navbar ul li a::after{display:none}#navbar ul li a::before{display:block}#navbar span.parent,#navbar a{color:#27170c;background:none;box-shadow:none}#navbar .sub{background:none;width:100%;position:relative;top:0;left:0;opacity:1;visibility:visible;transform:translateX(0)}#navbar .sub a,#navbar .sub a:hover,#navbar a:hover,#navbar li:hover > .parent{color:#27170c;background:#efefef}#navbar .sub a{padding:15px 40px}#navbar .sub a::before{display:block;border:none;right:auto}#navbar ul li:first-child a::before{display:block}#navbar span.changeOnText{padding:15px 20px}}`,fm=`* { margin: 0; padding: 0; box-sizing: border-box; } ul { list-style: none; } a { text-decoration: none; color: inherit; } .clearfix::after { content: ""; clear: both; display: table; } #navbar ul { position: relative;     justify-content: center; } #navbar li { position: relative; } #main { padding: 30px; max-width: 800px; margin: 0 auto; } #main h2 { padding: 10px 15px; border-radius: 4px; margin-bottom: 20px; } .pagination { margin-top: 30px; } .pagination ul { display: flex; gap: 5px; justify-content: center; } .pagination li { background: #f6f6f6; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; } .pagination li a { display: block; padding: 8px 12px; font-size: 14px; } .pagination li:hover, .pagination li.active { color: #fff; background: var(--bg-heading); border-color: var(--bg-heading); } .pagination li.active a { color: #fff; } .pagination .more-point-right { border: none; background: none; padding: 8px; cursor: default; }`,pm=Mo({__name:`blogTemplate`,setup(e){let t=H(`preview`),n=H(``),r=H(`style1`),i=H(`https://dummyimage.com/1500x600/ffaa00/ffffff`),a=H(`https://dummyimage.com/300x400/000000/fff`),o=(e,t)=>{let n=e.target.files[0];if(!n)return;let r=new FileReader;r.onload=e=>{t===`key`?i.value=e.target.result:t===`logo`&&(a.value=e.target.result)},r.readAsDataURL(n)},s=H({"--bg-heading":`#ff0000`,"--heading-color":`#ffffff`,"--calendar-color":`#000000`,"--main-color":`#000000`,"--main-font":`"Noto Serif JP", serif`,"--font-weight":`500`,"--bg-body":`url(../img/bg.jpg)`,"--bg-key":`url(../img/key.jpg)`,"--bg-logo":`rgba(255, 255, 255, .5)`,"--logo-maxWidthPc":`135px`,"--logo-maxWidthSp":`100px`,"--bg-nav":`url(../img/bg-nav.jpg)`,"--nav-font":`"Playfair Display", serif`,"--nav-weight":`700`,"--nav-color":`#000000`,"--nav-size":`15px`,"--nav-hover":`#ff0000`,"--nav-text-hover":`#ffffff`,"--nav-line":`#000000`,"--nav-font-sizeJp":`13px`,"--nav-font-en":`"Cormorant Garamond", serif`,"--nav-font-weight":`500`,"--nav-font-transform":`uppercase`,"--nav-font-sizeEn":`18px`}),c=H([{hasSub:!1,text:`トップ`,en:`TOP`,jp:`トップ`,link:``,subItems:[]},{hasSub:!1,text:`お知らせ`,en:`NEWS`,jp:`お知らせ`,link:``,subItems:[]},{hasSub:!0,text:`バーメニュー`,en:`BAR`,jp:`バーメニュー`,link:``,subItems:[{text:``,link:``}]}]),l=()=>c.value.push({hasSub:!1,text:``,en:``,jp:``,link:``,subItems:[]}),u=e=>c.value.splice(e,1),d=e=>c.value[e].subItems.push({text:``,link:``}),f=(e,t)=>c.value[e].subItems.splice(t,1),p=Z(()=>{let e=`:root {
`;for(let[t,n]of Object.entries(s.value))e+=`\t${t}: ${n};\n`;e+=`}

`;let t=``;return r.value===`style1`?t=lm:r.value===`style2`||r.value===`style3`?t=um:r.value===`style4`&&(t=dm),`/*
 * StyleName: shared.css
 * Version: 1.6
 *
 * Project: FC-Blog
 *
 * FoodConnection
 * http://foodconnection.jp
 * http://foodconnection.vn
 *
 */

`+e+`/*=============================================
 * body
 *=============================================*/

body {
  color: var(--main-color);
  font-family: var(--main-font);
  font-weight: var(--font-weight);
  font-optical-sizing: auto;
  font-style: normal;
  background: var(--bg-body) repeat center;
}



/*=============================================
 * #header
 *=============================================*/

#header {
	background: var(--bg-key) no-repeat center;
	background-size: cover;
	height: 550px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, .3);
	-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .3);
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .3);
	position: relative;
}
#header h1 {
	color: #AFAFAF;
	font-size: .85em;
	line-height: 1.6em;
	letter-spacing: .1em;
	text-align: center;
	text-shadow: 1px 1px 1px #010101;
	background: #27170C;
	box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}
body.col-x2 #header .col1 {
	background-color: rgba(0, 0, 0, .25);
}
body.col-x2 #header .col2 {
	background-color: rgba(0, 0, 0, .3);
}

#header .logo {
	margin-right: -50%;
	padding: 1em .5em;
	text-align: center;
	width: 95%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
}
#header .logo img {
	max-height: 450px;
}

#header .logo {
	padding: 1.2em;
	background: var(--bg-logo);
	max-width: var(--logo-maxWidthPc);
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
}
#header .logo img {
	max-width: 100%;
	height: auto;
}



/*=============================================
 * #navbar
 *=============================================*/

#navbar {
	background: var(--bg-nav);
	box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}
body.col-x2 #navbar menu:before {
	background: #27170C;
}
body.col-x2 #navbar menuitem {
	color: #FFF;
}
#navbar nav {
	color: #FEFEFE;
}
body.col-x2 #navbar ul {
	box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
	-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
}
#navbar ul{
	display: flex;
	justify-content: center;
}
#navbar li {text-align: center;}
#navbar a {
	display: block;
	position: relative;
	transition: all .3s ease;
	-moz-transition: all .3s ease;
	-webkit-transition: all .3s ease;
	z-index: 1;
}
#navbar .sub {
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 50%;
    transition: all .3s ease;
    -moz-transition: all .3s ease;
    -webkit-transition: all .3s ease;
    visibility: hidden;
    transform: translateX(-50%);
}
body.col-x2 #navbar menu .sub {
	display: none;
}
#navbar li:hover > .sub {
    opacity: 1;
    visibility: visible;
}
#navbar .sub ul {
}
#navbar .sub li {
	display: block;
}


/*=============================================
 * #container
 *=============================================*/

#container {
}
#container .title {
	color: #795548;
}



/*=============================================
 * #sidebar
 *=============================================*/

#sidebar section {
	background: #fef4de;
	box-shadow: 0 0 3px rgba(0, 0, 0, .3);
	-moz-box-shadow: 0 0 3px rgba(0, 0, 0, .3);
	-webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .3);
}
#sidebar h2 {
	color: #fff;
	background: var(--bg-heading);
}
#sidebar h2:before {
	border-top-color: #FEFEFE;
}
#sidebar li a {
	color: #92580D;
}
#sidebar li a:hover {
	color: #CC9E5A;
}
#sidebar li a:before {
	background: #CC9E5A;
}
#sidebar li a:hover:before {
	background: #BA863A;
}
#sidebar .calendar th {
	color: #A77834;
}
#sidebar .calendar td {
	background: #FEFEFE;
	border-color: #AFAFAF;
}
#sidebar .calendar tr:nth-of-type(odd) td {
	background: #EFEFEF;
}
#sidebar .calendar .header {
	color: #92580D;
	background: #F2EBE3;
	border-color: #AFAFAF;
}
#sidebar .calendar a {
	color: var(--calendar-color);
}
#sidebar .calendar .having_posts {
	color: #A63435;
	background: #F6E1E1 !important;
}

/*=============================================
 * #main
 *=============================================*/

#main article {
	background: #FEFEFE;
}
#main h2 {
	color: var(--heading-color);
	background: var(--bg-heading);
}
#container.tpl-post #main figcaption {
	display: none;
}
#main time {
	color: #7E7E7E;
}
#main .more a {
	color: #010101;
	border-color: #010101;
}
#main .more a:hover {
	color: #A24814;
	border-color: #A24814;
}
#main .more a:before,
#main .more a:after {
	background: #010101;
}
#main .more a:hover:before,
#main .more a:hover:after {
	background: #A24814;
}
#main .pagination {
	color: #909090;
}
#main .pagination li {
	background: #F6F6F6;
	box-shadow:
		0 -1px #FEFEFE,
		0 1px 1px rgba(0, 0, 0, .3);
	-moz-box-shadow:
		0 -1px #FEFEFE,
		0 1px 1px rgba(0, 0, 0, .3);
	-webkit-box-shadow:
		0 -1px #FEFEFE,
		0 1px 1px rgba(0, 0, 0, .3);
}
#main .pagination li:hover {
	color: #FEFEFE;
	background: var(--bg-heading);
	box-shadow:
		0 -1px var(--bg03),
		0 1px 1px rgba(0, 0, 0, .3);
	-moz-box-shadow:
		0 -1px var(--bg03),
		0 1px 1px rgba(0, 0, 0, .3);
	-webkit-box-shadow:
		0 -1px var(--bg03),
		0 1px 1px rgba(0, 0, 0, .3);
}
#main .pagination .active,
#main .pagination .active:hover {
	color: #FEFEFE;
	background: var(--bg-heading);
	box-shadow:
		0 -1px var(--bg-heading),
		0 1px 1px rgba(0, 0, 0, .3);
	-moz-box-shadow:
		0 -1px var(--bg-heading),
		0 1px 1px rgba(0, 0, 0, .3);
	-webkit-box-shadow:
		0 -1px var(--bg-heading),
		0 1px 1px rgba(0, 0, 0, .3);
}
#main .pagination .first,
#main .pagination .last {
	color: var(--bg-heading);
	font-weight: 600;
}
#main .pagination .more-point-right:hover {
	color: inherit;
	background: #F6F6F6;
	box-shadow:
		0 -1px #FEFEFE,
		0 1px 1px rgba(0, 0, 0, .3);
	-moz-box-shadow:
		0 -1px #FEFEFE,
		0 1px 1px rgba(0, 0, 0, .3);
	-webkit-box-shadow:
		0 -1px #FEFEFE,
		0 1px 1px rgba(0, 0, 0, .3);
}



/*=============================================
 * #footer
 *=============================================*/

#footer {
	color: #fff;
	background: #27170C;
}



/*=============================================
 * copyright
 *=============================================*/

address {
}



/*=============================================
 * #calendar
 *=============================================*/

#calendar {
	display: none;
}


	@media screen and (max-width: 768px) {
	iframe { 
		width: 100% !important;
		height: 50vw !important;
		}
		
	}


/*=============================================
 * RESPONSIVE
 *=============================================*/

@media screen and (max-width: 1024px) {
	#header {
		min-height: 400px;
	}
}

@media screen and (max-width: 960px) {
	#navbar li {
		min-width: initial;
	}
	#navbar .sub {
		width: 100%;
	}
}

@media screen and (max-width: 768px) {
	#header {
		width: 100%;
		height: auto;
		min-height: 300px;
	}
	#header h1 {
		position: static;
	}
	body.col-x2 #header section {
		min-height: 150px;
	}
	#header .logo {
		padding: 1em;
		top: 60%;
		        max-width: var(--logo-maxWidthSp);
	}

	#navbar {
		background: none;
	}
	#navbar.active .toggle {
		right: 230px;
	}
	body.col-x2 #navbar menuitem {
		background: #757575;
	}
	#navbar nav {
		background: #FEFEFE;
		width: 230px;
		right: -230px;
	}
	body.col-x2 #navbar nav {
		width: 230px;
	}
}

@media screen and (max-width: 640px) {
	#header {
		display: block;
		min-height: 300px;
	}
	#header h1 {
		display: block;
	}
}
`+t}),m=(e,t=!1)=>r.value===`style1`?e.text:r.value===`style2`?`<span class="t-en">${e.en}</span><span class="t-jp">${e.jp}</span>`:r.value===`style3`?`<span class="t-jp">${e.jp}</span><span class="t-en">${e.en}</span>`:r.value===`style4`?`<span class="changeOffText">${e.jp}</span><span class="changeOnText">${e.en}</span>`:``,h=Z(()=>{let e=n.value.trim()===``?``:n.value.trim(),t=`
				<ul class="clearfix">`;return c.value.forEach(e=>{let n=m(e,!1);e.hasSub?(t+=`\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span class="parent">${n}</span>\n\t\t\t\t\t\t<ul class="sub">`,e.subItems.forEach(e=>{t+=`\n\t\t\t\t\t\t\t<li><a href="#">${e.text}</a></li>`}),t+=`
						</ul>
					</li>`):t+=`\n\t\t\t\t\t<li><a href="#">${n}</a></li>`}),t+=`
				</ul>`,`<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	${e}
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header id="header" style="background: url(${i.value}) no-repeat center; background-size: cover;"><p class="logo"><img src="${a.value}" alt="Logo"></p></header>
	<aside id="navbar"><nav class="wrap">${t}</nav></aside>
	<section id="main">
		<article><h2>Heading</h2></article>
		<nav class="pagination"><ul><li class="first"><a href="#">最初</a></li><li class="previous"><a href="#">«</a></li><li><a href="#">1</a></li><li class="active"><a>2</a></li><li class="more-point-right">…</li><li class="next"><a href="#">»</a></li><li class="last"><a href="#">最後</a></li></ul></nav>
	</section>
</body>
</html>`}),g=Z(()=>{let e=n.value.trim()===``?``:n.value.trim(),t=`
				<ul class="clearfix">`;return c.value.forEach(e=>{let n=m(e,!0),r=`{{mySite}}${e.link||``}`;e.hasSub?(t+=`\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span class="parent">${n}</span>\n\t\t\t\t\t\t<ul class="sub">`,e.subItems.forEach(e=>{let n=`{{mySite}}${e.link||``}`;t+=`\n\t\t\t\t\t\t\t<li><a href="${n}">${e.text}</a></li>`}),t+=`
						</ul>
					</li>`):t+=`\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="${r}">${n}</a>\n\t\t\t\t\t</li>`}),t+=`
				</ul>`,`<!DOCTYPE html>
<!--[if lt IE 7]><html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" lang="ja"><![endif]-->
<!--[if IE 7]><html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" lang="ja"><![endif]-->
<!--[if IE 8]><html class="ie ie8 ie-lt10 ie-lt9 no-js" lang="ja"><![endif]-->
<!--[if IE 9]><html class="ie ie9 ie-lt10 no-js" lang="ja"><![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="ja"><!--<![endif]-->
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge, Chrome=1">
		<meta name="author" content="FOODCONNECTION">
		<title>{{blogTitle}} {{createTitle(post,prefix,suffix)}}</title>
		{% set prefix = " - " %}
		{% set suffix = "" %}
		<meta name="description" content="{{description}}" />
		<meta name="robots" content="index,follow" />
		<meta name="copyright" content="FoodConnection.jp" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="format-detection" content="telephone=no" />
		<meta name="format-detection" content="date=no" />
		<meta name="format-detection" content="address=no" />
		<meta name="format-detection" content="email=no" />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="ja_JP" />
		<meta property="og:url" content="{{myURL}}" />
		{{ogImage}}
		<meta property="og:title" content="{{blogTitle}} {{createTitle(post,prefix,suffix)}}" />
		<meta property="og:site_name" content="{{blogTitle}}" />
		<meta property="og:description" content="{{description}}" />
		<link rel="apple-touch-icon" href="{{mySite}}shared/img/shared/apple-touch-icon.png" />
		<link rel="icon" href="{{mySite}}shared/img/shared/favicon.ico" />
<!--FONT-->
${e}
<!--//FONT-->
		<link rel="canonical" href="{{myURL}}" />
		<link rel="stylesheet" type="text/css" id="fcblog-css-common" href="{{mySite}}shared_blog/css/common.css" />
		<link rel="stylesheet" type="text/css" id="fcblog-css-style" href="//e-connection.info/shared/css/style.css" />
		<link rel="stylesheet" type="text/css" id="fcblog-css-shared" href="{{mySite}}shared_blog/css/shared.css" />
		<!-- Google Analytics -->
	</head>
	<body data-version="">
		<header id="header">
			<h1>{{blogTitle}} {{post.title}}</h1>
			<p class="logo"><img src="{{mySite}}shared_blog/img/logo.png" alt="{{blogTitle}}" /></p>
		</header>
		<aside id="navbar">
			<div class="toggle"><span></span></div>
			<nav class="wrap">
			<!--MENU-->${t}
			<!--END MENU-->
			</nav>
		</aside>
`}),_=Z(()=>h.value.replace(`<link rel="stylesheet" href="style.css">`,`<style>${p.value}\n${fm}</style>`)),v=H(!1),y=H(!1),b=async()=>{try{v.value=!0;let e=await window.showDirectoryPicker(),t=await(await fetch(`/toolvuejsv2/downloads/templateBlog.zip`)).blob(),n=await new qf.default().loadAsync(t);for(let[t,r]of Object.entries(n.files)){if(r.dir)continue;let n=t.split(`/`),i=e;for(let e=0;e<n.length-1;e++)i=await i.getDirectoryHandle(n[e],{create:!0});let a=n[n.length-1],o=await r.async(`arraybuffer`),s=await(await i.getFileHandle(a,{create:!0})).createWritable();await s.write(o),await s.close()}v.value=!1,y.value=!0,alert(`🎉 Đã tải và giải nén template thành công! Bấm OK để xem thư mục.`);try{await window.showDirectoryPicker({startIn:e})}catch{console.log(`Người dùng đã đóng cửa sổ xem thư mục.`)}}catch(e){v.value=!1,console.error(`Lỗi trong quá trình xử lý:`,e),alert(`Đã hủy thao tác hoặc trình duyệt của bạn không hỗ trợ.`)}},x=async(e,t,n,r)=>{try{let i=await(await window.showSaveFilePicker({suggestedName:t,types:[{description:`${r.toUpperCase()} File`,accept:{[n]:[`.${r}`]}}]})).createWritable();await i.write(e),await i.close()}catch(e){e.name!==`AbortError`&&(console.error(`Lỗi khi lưu file:`,e),alert(`Không thể lưu file hoặc trình duyệt không hỗ trợ!`))}},S=()=>x(g.value,`header.html`,`text/html`,`html`),C=()=>x(p.value,`shared.css`,`text/css`,`css`);return(e,i)=>(K(),q(G,null,[J(`div`,Jf,[J(`header`,Yf,[i[34]||=J(`h2`,null,`🛠️ HTML & CSS Customizer`,-1),J(`div`,Xf,[J(`button`,{disabled:v.value,onClick:b,class:`download-btn orange`},z(v.value?`⏳ Đang xử lý...`:`Tải & Giải nén ZIP`),9,Zf),J(`button`,{disabled:!y.value,onClick:S,class:`download-btn green`},` Tải file HTML `,8,Qf),J(`button`,{disabled:!y.value,onClick:C,class:`download-btn blue`},` Tải file CSS `,8,$f)])]),J(`div`,ep,[J(`div`,tp,[J(`div`,np,[i[35]||=J(`label`,null,`🔗 Google Font URL / Tags`,-1),U(J(`textarea`,{"onUpdate:modelValue":i[0]||=e=>n.value=e,class:`font-textarea`,placeholder:`Dán thẻ link Google Font...`},null,512),[[Q,n.value]])]),J(`div`,rp,[i[38]||=J(`label`,null,`🍔 Quản lý MENU & Thiết kế`,-1),J(`div`,ip,[U(J(`select`,{"onUpdate:modelValue":i[1]||=e=>r.value=e},[...i[36]||=[J(`option`,{value:`style1`},`Style 1 (Text đơn bản chuẩn)`,-1),J(`option`,{value:`style2`},`Style 2 (Nội dung EN trên, JP dưới)`,-1),J(`option`,{value:`style3`},`Style 3 (Nội dung JP trên, EN dưới)`,-1),J(`option`,{value:`style4`},`Style 4 (Hover đổi Text - Off/On)`,-1)]],512),[[yo,r.value]])]),J(`div`,ap,[(K(!0),q(G,null,W(c.value,(e,t)=>(K(),q(`div`,{key:t,class:`menu-item-block`},[J(`div`,op,[J(`div`,sp,[U(J(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.hasSub=t,id:`sub-`+t},null,8,cp),[[go,e.hasSub]]),J(`label`,{for:`sub-`+t},`Sub Menu`,8,lp)]),r.value===`style1`?U((K(),q(`input`,{key:0,"onUpdate:modelValue":t=>e.text=t,type:`text`,placeholder:`Page Name`},null,8,up)),[[Q,e.text]]):Zi(``,!0),r.value===`style2`||r.value===`style3`?(K(),q(G,{key:1},[U(J(`input`,{"onUpdate:modelValue":t=>e.en=t,type:`text`,placeholder:`English`},null,8,dp),[[Q,e.en]]),U(J(`input`,{"onUpdate:modelValue":t=>e.jp=t,type:`text`,placeholder:`Japanese`},null,8,fp),[[Q,e.jp]])],64)):Zi(``,!0),r.value===`style4`?(K(),q(G,{key:2},[U(J(`input`,{"onUpdate:modelValue":t=>e.jp=t,type:`text`,placeholder:`Text Tĩnh (Off)`},null,8,pp),[[Q,e.jp]]),U(J(`input`,{"onUpdate:modelValue":t=>e.en=t,type:`text`,placeholder:`Text Hover (On)`},null,8,mp),[[Q,e.en]])],64)):Zi(``,!0),e.hasSub?Zi(``,!0):U((K(),q(`input`,{key:3,"onUpdate:modelValue":t=>e.link=t,type:`text`,placeholder:`index.html`},null,8,hp)),[[Q,e.link]]),J(`button`,{onClick:e=>u(t),class:`delete-btn`},`Xóa`,8,gp)]),e.hasSub?(K(),q(`div`,_p,[(K(!0),q(G,null,W(e.subItems,(e,n)=>(K(),q(`div`,{key:n,class:`submenu-row`},[i[37]||=J(`span`,null,`└─`,-1),U(J(`input`,{"onUpdate:modelValue":t=>e.text=t,type:`text`,placeholder:`Page Name`},null,8,vp),[[Q,e.text]]),U(J(`input`,{"onUpdate:modelValue":t=>e.link=t,type:`text`,placeholder:`index.html#map`},null,8,yp),[[Q,e.link]]),J(`button`,{onClick:e=>f(t,n),class:`delete-sub-btn`},`✖`,8,bp)]))),128)),J(`button`,{onClick:e=>d(t),class:`add-sub-btn`},`+ Menu con`,8,xp)])):Zi(``,!0)]))),128))]),J(`button`,{onClick:l,class:`add-btn`},`+ Thêm Menu`)]),J(`div`,Sp,[i[67]||=J(`label`,null,`🎨 Tùy chỉnh Biến CSS`,-1),J(`div`,Cp,[J(`div`,wp,[i[44]||=J(`h4`,null,`Hình nền & Logo`,-1),J(`div`,Tp,[i[39]||=J(`span`,null,`Body Background:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[2]||=e=>s.value[`--bg-body`]=e},null,512),[[Q,s.value[`--bg-body`]]])]),J(`div`,Ep,[i[40]||=J(`span`,null,`Key Background:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[3]||=e=>s.value[`--bg-key`]=e},null,512),[[Q,s.value[`--bg-key`]]])]),J(`div`,Dp,[i[41]||=J(`span`,null,`Logo Background:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[4]||=e=>s.value[`--bg-logo`]=e},null,512),[[Q,s.value[`--bg-logo`]]])]),J(`div`,Op,[i[42]||=J(`span`,null,`Logo Width PC:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[5]||=e=>s.value[`--logo-maxWidthPc`]=e},null,512),[[Q,s.value[`--logo-maxWidthPc`]]])]),J(`div`,kp,[i[43]||=J(`span`,null,`Logo Width SP:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[6]||=e=>s.value[`--logo-maxWidthSp`]=e},null,512),[[Q,s.value[`--logo-maxWidthSp`]]])])]),J(`div`,Ap,[i[54]||=J(`h4`,null,`Typography Menu`,-1),J(`div`,jp,[i[45]||=J(`span`,null,`Nav Background:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[7]||=e=>s.value[`--bg-nav`]=e},null,512),[[Q,s.value[`--bg-nav`]]])]),J(`div`,Mp,[i[46]||=J(`span`,null,`Nav Font:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[8]||=e=>s.value[`--nav-font`]=e},null,512),[[Q,s.value[`--nav-font`]]])]),J(`div`,Np,[i[47]||=J(`span`,null,`Nav Font-Weight:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[9]||=e=>s.value[`--nav-weight`]=e},null,512),[[Q,s.value[`--nav-weight`]]])]),J(`div`,Pp,[i[48]||=J(`span`,null,`Nav Color:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[10]||=e=>s.value[`--nav-color`]=e},null,512),[[Q,s.value[`--nav-color`]]])]),J(`div`,Fp,[i[49]||=J(`span`,null,`Nav Font Size:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[11]||=e=>s.value[`--nav-size`]=e},null,512),[[Q,s.value[`--nav-size`]]])]),J(`div`,Ip,[i[50]||=J(`span`,null,`Nav Hover:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[12]||=e=>s.value[`--nav-hover`]=e},null,512),[[Q,s.value[`--nav-hover`]]])]),J(`div`,Lp,[i[51]||=J(`span`,null,`Nav Text Hover:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[13]||=e=>s.value[`--nav-text-hover`]=e},null,512),[[Q,s.value[`--nav-text-hover`]]])]),J(`div`,Rp,[i[52]||=J(`span`,null,`Nav Line:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[14]||=e=>s.value[`--nav-line`]=e},null,512),[[Q,s.value[`--nav-line`]]])]),J(`div`,zp,[i[53]||=J(`span`,null,`Nav Font-Size-JP:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[15]||=e=>s.value[`--nav-font-sizeJp`]=e},null,512),[[Q,s.value[`--nav-font-sizeJp`]]])])]),J(`div`,Bp,[i[61]||=J(`h4`,null,`Màu sắc & Fonts`,-1),J(`div`,Vp,[i[55]||=J(`span`,null,`Body Color:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[16]||=e=>s.value[`--main-color`]=e},null,512),[[Q,s.value[`--main-color`]]])]),J(`div`,Hp,[i[56]||=J(`span`,null,`Body Font:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[17]||=e=>s.value[`--main-font`]=e},null,512),[[Q,s.value[`--main-font`]]])]),J(`div`,Up,[i[57]||=J(`span`,null,`Body Font-Weight:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[18]||=e=>s.value[`--font-weight`]=e},null,512),[[Q,s.value[`--font-weight`]]])]),J(`div`,Wp,[i[58]||=J(`span`,null,`Heading Background:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[19]||=e=>s.value[`--bg-heading`]=e},null,512),[[Q,s.value[`--bg-heading`]]])]),J(`div`,Gp,[i[59]||=J(`span`,null,`Heading Color:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[20]||=e=>s.value[`--heading-color`]=e},null,512),[[Q,s.value[`--heading-color`]]])]),J(`div`,Kp,[i[60]||=J(`span`,null,`Calendar Color:`,-1),U(J(`input`,{type:`color`,"onUpdate:modelValue":i[21]||=e=>s.value[`--calendar-color`]=e},null,512),[[Q,s.value[`--calendar-color`]]])])]),J(`div`,qp,[i[66]||=J(`h4`,null,`Typography English`,-1),J(`div`,Jp,[i[62]||=J(`span`,null,`Nav Font-EN:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[22]||=e=>s.value[`--nav-font-en`]=e},null,512),[[Q,s.value[`--nav-font-en`]]])]),J(`div`,Yp,[i[63]||=J(`span`,null,`Nav FWeight-En:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[23]||=e=>s.value[`--nav-font-weight`]=e},null,512),[[Q,s.value[`--nav-font-weight`]]])]),J(`div`,Xp,[i[64]||=J(`span`,null,`Nav Trans-En:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[24]||=e=>s.value[`--nav-font-transform`]=e},null,512),[[Q,s.value[`--nav-font-transform`]]])]),J(`div`,Zp,[i[65]||=J(`span`,null,`Nav FSize-EN:`,-1),U(J(`input`,{type:`text`,"onUpdate:modelValue":i[25]||=e=>s.value[`--nav-font-sizeEn`]=e},null,512),[[Q,s.value[`--nav-font-sizeEn`]]])])])])]),J(`div`,Qp,[i[70]||=J(`label`,null,`🖼️ Upload Hình Ảnh Preview (Chỉ để xem)`,-1),J(`div`,$p,[J(`div`,em,[i[68]||=J(`span`,null,`Background (Key):`,-1),J(`input`,{type:`file`,onChange:i[26]||=e=>o(e,`key`),accept:`image/*`,id:`upload-key`,style:{display:`none`}},null,32),J(`button`,{onClick:i[27]||=t=>e.$refs.keyInput.click(),class:`upload-btn-mini`},`Chọn hình Key`),J(`input`,{type:`file`,ref:`keyInput`,onChange:i[28]||=e=>o(e,`key`),accept:`image/*`,style:{display:`none`}},null,544)]),J(`div`,tm,[i[69]||=J(`span`,null,`Logo:`,-1),J(`button`,{onClick:i[29]||=t=>e.$refs.logoInput.click(),class:`upload-btn-mini`},`Chọn hình Logo`),J(`input`,{type:`file`,ref:`logoInput`,onChange:i[30]||=e=>o(e,`logo`),accept:`image/*`,style:{display:`none`}},null,544)])])])]),J(`div`,nm,[J(`div`,rm,[J(`button`,{class:he({active:t.value===`preview`}),onClick:i[31]||=e=>t.value=`preview`},`Xem trước`,2),J(`button`,{class:he({active:t.value===`html`}),onClick:i[32]||=e=>t.value=`html`},`Code HTML (Dành cho CMS)`,2),J(`button`,{class:he({active:t.value===`css`}),onClick:i[33]||=e=>t.value=`css`},`Code CSS`,2)]),J(`div`,im,[t.value===`preview`?(K(),q(`iframe`,{key:0,srcdoc:_.value,class:`preview-iframe`},null,8,am)):Zi(``,!0),t.value===`html`?(K(),q(`textarea`,{key:1,value:g.value,readonly:``},null,8,om)):Zi(``,!0),t.value===`css`?(K(),q(`textarea`,{key:2,value:p.value,readonly:``},null,8,sm)):Zi(``,!0)])])])]),Y(Kf),v.value?(K(),q(`div`,cm,[...i[71]||=[J(`div`,{class:`loading-content`},[J(`div`,{class:`spinner`}),J(`p`,null,`⏳ Đang giải nén và xử lý file...`),J(`p`,{style:{"font-size":`13px`,"font-weight":`normal`,"margin-top":`10px`,opacity:`0.8`}},`Vui lòng không đóng trình duyệt.`)],-1)]])):Zi(``,!0)],64))}},[[`__scopeId`,`data-v-88d759f2`]]),mm={class:`layout-container ftfixed`},hm={class:`layout-row`},gm={class:`column column-code`},_m={class:`column-header`},vm={class:`column column-code`},ym={class:`column-header`},bm={class:`layout-row`},xm={class:`column column-code`},Sm={class:`column-header`},Cm={class:`column column-code`},wm={class:`column-header`},Tm={class:`layout-row`},Em={class:`column column-code`},Dm={class:`column-header`},Om={class:`column column-code`},km={class:`column-header`},Am={class:`layout-row`},jm={class:`column column-code`},Mm={class:`column-header`},Nm={class:`column column-code`},Pm={class:`column-header`},Fm={class:`layout-row`},Im={class:`column column-code`},Lm={class:`column-header`},Rm={class:`column column-code`},zm={class:`column-header`},Bm={class:`layout-row`},Vm={class:`column column-code`},Hm={class:`column-header`},Um={class:`column column-code`},Wm={class:`column-header`},Gm={class:`layout-row`},Km={class:`column column-code`},qm={class:`column-header`},Jm={class:`column column-code`},Ym={class:`column-header`},Xm={class:`layout-row`},Zm={class:`column column-code`},Qm={class:`column-header`},$m={class:`column column-code`},eh={class:`column-header`},th={class:`layout-row`},nh={class:`column column-code`},rh={class:`column-header`},ih={class:`column column-code`},ah={class:`column-header`},oh=Mo({__name:`ftFixed`,setup(e){let t=e=>{let t=e.currentTarget,n=t.closest(`.column`).querySelector(`.code-content code`);if(n){let e=n.innerText;navigator.clipboard.writeText(e).then(()=>{let e=t.innerText;t.innerText=`Copied!`,t.classList.add(`copied`),setTimeout(()=>{t.innerText=e,t.classList.remove(`copied`)},2e3)}).catch(e=>{console.error(`Lỗi khi copy:`,e)})}};return(e,n)=>(K(),q(`div`,mm,[n[63]||=J(`h1`,null,`FT Fixed Templates`,-1),J(`div`,hm,[n[22]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 01`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/01-u5JuJGsE.jpg`,alt:`Style 01`})])],-1),J(`div`,gm,[J(`div`,_m,[n[18]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[0]||=e=>t(e)},`Copy`)]),n[19]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div id="ft-fixed" class="sp">
  <div class="inner">
    <p class="ww__web"><a href="#" target="_blank" rel="nofollow" onClick="gtag('event','btn_reserve',{transport_type:'beacon'});"><span>WEB予約はこちら</span></a></p>
    <div class="hamburger hamburger--slider">
      <div class="hamburger-box">
        <div class="hline-top"> </div>
        <div class="hline-center"> </div>
        <div class="hline-bottom"> </div>
      </div>
    </div>
  </div>
</div>`)],-1)]),J(`div`,vm,[J(`div`,ym,[n[20]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[1]||=e=>t(e)},`Copy`)]),n[21]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#ft-fixed {
    position: fixed;
    bottom: 5px;
    left: 5px;
    right: 5px;
    z-index: 215;
}

#ft-fixed .inner {
    display: flex;
    justify-content: space-between;
}


#ft-fixed .inner .ww__web {
    width: 60%;
    background: rgb(51, 84, 121);
    border-radius: 50px;
}

#ft-fixed .inner a {
    display: flex;
    text-align: center;
    position: relative;
    line-height: 1;
    height: 60px;
    align-items: center;
    justify-content: center;
    color: rgb(236, 229, 209);
    letter-spacing: 0px;
}
#ft-fixed .inner .ww__web span {
    font-size: 16px;
    padding-left: 34px;
    position: relative;
    display: block;
    text-align: left;
}

#ft-fixed .inner .ww__web span::before {
    content: "";
    width: 21px;
    height: 21px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    background: url(../img/shared/icon_web.png) center center / 100% no-repeat;
}



.hamburger {
  position: relative;
  background: #ffffff;
  z-index: 213;
  border-radius: 50px;
}
@media screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }
}



.hamburger:after {
    content: "Menu";
    text-align: center;
    line-height: 1;
    margin-left: 0;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 15px;
    font-family: "Amiri";
    font-weight: 400;
    font-style: normal;
    letter-spacing: 1px;
    display: none;
}

.hamburger:before {
    content: "";
    background: #000;
    width: 1px;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    display: none;
}

.nav--opened .hamburger:before {
}

.nav--opened .hamburger:after {
    color: #fff;
}

.hamburger {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
}


.hamburger .hamburger-box {
    display: block;
    position: relative;
    padding: 0px 0 0 0px;
    height: 18px;
    cursor: pointer;
    transition: all .4s ease;
    width: 32px;
       margin-left: 22%;
}

.hamburger .hamburger-box::after {
    content: "MENU";
    position: absolute;
    opacity: 1;
    visibility: visible;
    line-height: 1;
    font-size: 14px;
    letter-spacing: 0.1em;
    width: auto;
    text-align: center;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    top: 4px;
    left: 41px;
    display: block;
}

.hamburger .hamburger-box:hover {
    opacity: .7;
}

.nav--opened .hamburger .hamburger-box::after {
    content: "CLOSE";
 
}

.nav--opened .hamburger .hamburger-box:hover::after {
}

.nav--opened .hamburger .hamburger-box .hline-top,
.nav--opened .hamburger .hamburger-box .hline-center,
.nav--opened .hamburger .hamburger-box .hline-bottom {
    display: block;
}
.nav--opened .hamburger .hamburger-box .hline-top {}
.nav--opened .hamburger .hamburger-box .hline-bottom {
    transform: rotate(30deg);
    top: 9px;
    left: 0;
}
.nav--opened .hamburger .hamburger-box .hline-center {
    display: none;
}
.nav--opened .hamburger .hamburger-box .hline-top {
    transform: rotate(-30deg);
    top: 9px;
    left: 0;
}


.hamburger .hline-center,
.hamburger .hline-bottom,
.hamburger .hline-top {
    height: 1px;
    position: absolute;
    left: 0;
    top: 8px;
    width: 100%;
    background: #000;
    transition-delay: 0s;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}


.hamburger .hamburger-box .hline-bottom::before,
.hamburger .hamburger-box .hline-bottom::after,
.hamburger .hamburger-box .hline-center::before,
.hamburger .hamburger-box .hline-center::after,
.hamburger .hamburger-box .hline-top::before,
.hamburger .hamburger-box .hline-top::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: #000;
    z-index: 2;
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear;
}

.hamburger .hline-top {
    top: 0px;
}

.hamburger .hline-bottom {
    top: 22px;
}


.hamburger .hamburger-inner {
    display: block;
}


.hamburger .hamburger-inner,
.hamburger .hamburger-inner::before,
.hamburger .hamburger-inner::after {
    width: 51px;
    height: 1px;
    background: #fff;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}



.hamburger .hamburger-inner::before,
.hamburger .hamburger-inner::after {
    content: "";
    display: block;
}


.hamburger .hamburger-inner::before {
    top: -10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
}

.hamburger-ct .hamburger-inner::after,
.hamburger .hamburger-inner::after {
    bottom: -10px;
}

.hamburger.is-active .hamburger-inner {
    transform: translate3d(0, 0px, 0) rotate(30deg);
}


.hamburger.is-active .hamburger-inner::before {
    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
    opacity: 0;
}

.hamburger.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(120deg);
}


.nav--opened .hamburger .hamburger-inner,
.nav--opened .hamburger .hamburger-inner::before,
.nav--opened .hamburger .hamburger-inner::after {
    background: #fff;
}

.menu-toggle {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    -webkit-background-size: cover;
    background-size: cover;
    transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    overflow: auto;
    z-index: 213;
    left: 0;
}




body.nav--opened,
body.nav--opened *,
body.nav--opened *:hover,
body.nav--opened *:focus,
body.nav--opened *:active {
    touch-action: none !important;
    pointer-events: none !important;
}


body.nav--opened #ft-fixed,
body.nav--opened #ft-fixed *,
body.nav--opened .hamburger,
body.nav--opened #menu-toggle,
body.nav--opened #menu-toggle * {
    touch-action: auto !important;
    pointer-events: visible !important;
}

.nav--opened {
    overflow: hidden !important;
    -webkit-overflow-scrolling: touch !important;
    touch-action: none !important;
    pointer-events: none !important;
}

.nav--opened .hamburger::after {
    content: "Close";
    display: none;
}

.nav--opened #menu-toggle {
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
     transform: translateX(0);
}

        `)],-1)])]),J(`div`,bm,[n[27]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 02`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/02-QQdbmL2Q.jpg`,alt:`Style 02`})])],-1),J(`div`,xm,[J(`div`,Sm,[n[23]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[2]||=e=>t(e)},`Copy`)]),n[24]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div class="sp">
    <ul id="ft_fixed" class="ft_fixed_shared">
      <li><a href="###" target="_blank" rel="nofollow"><img src="shared/img/shared/ft_bnr01.jpg" alt="MAP" width="109" height="110"></a></li>
      <li><img src="shared/img/shared/ft_bnr02.jpg" alt="TEL" width="210" height="110"></li>
      <li><a href="###" target="_blank" rel="nofollow" onClick="gtag('event','btn_reserve_hotpepper',{transport_type:'beacon'});"><img src="shared/img/shared/ft_bnr03.jpg" alt="WEB予約はこちら" width="321" height="110"></a> </li>
      <li>
        <div class="hamburger">
          <p><img src="shared/img/shared/ft_bnr04.jpg" alt="Menu" width="110" height="110"></p>
          <p class="on"><img src="shared/img/shared/ft_bnr05.jpg" alt="close" width="110" height="110"></p>
        </div>
      </li>
    </ul>
</div>`)],-1)]),J(`div`,Cm,[J(`div`,wm,[n[25]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[3]||=e=>t(e)},`Copy`)]),n[26]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#ft_fixed {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0;
	visibility: hidden;
}
.navOpen #ft_fixed, .navOpen #pagetop {
	z-index: 999;
}
.has_nav #ft_fixed {
	opacity: 1;
	visibility: visible;
}
.ft_fixed_shared {
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: -webkit-box;
	display: -ms-flex-box;
	display: -ms-flexbox;
	display: flex;
	width: 100%;
	z-index: 999;
}
.ft_fixed_shared li img {
	opacity: 1 !important;
}
.ft_fixed_shared .hamburger {
	padding: 0;
	position: relative;
}
.ft_fixed_shared .hamburger .on {
	opacity: 0;
	visibility: hidden;
	position: absolute;
	top:0;
	right: 0;
	bottom:0;
	left: 0;
	z-index: 1;
}
.ft_fixed_shared .hamburger:after {
	display: none;
}

.ft_fixed_shared .hamburger.is-active .on {
	opacity: 1;
	visibility: visible;
}

        `)],-1)])]),J(`div`,Tm,[n[32]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 03`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/03-BwvVQUkS.jpg`,alt:`Style 03`})])],-1),J(`div`,Em,[J(`div`,Dm,[n[28]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[4]||=e=>t(e)},`Copy`)]),n[29]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div id="fixed-sp" class="sp">
    <ul>
      <li><a href="tel:zzzzzzzzzz" onClick="gtag('event','sp_fix_phone',{event_category:'Phone Call',transport_type:'beacon'});"><img src="shared/img/shared/icon_tel_sp.png" alt="tel" width="52" height="52">TEL</a></li>
      <li><a href="zzzzzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><img src="shared/img/shared/icon_web_sp.png" alt="WEB予約" width="52" height="52">WEB予約</a></li>
      <li><a href="zzzzzzzzzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','sp_fix_googlemap',{transport_type:'beacon'});" class="icon-location"><img src="shared/img/shared/icon_map_sp.png" alt="MAP" width="52" height="52">MAP</a></li>
    </ul>
</div>`)],-1)]),J(`div`,Om,[J(`div`,km,[n[30]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[5]||=e=>t(e)},`Copy`)]),n[31]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#fixed-sp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #dfd5d1;
    z-index: 99;
    opacity: 1;
    transition: opacity 0.3s ease;
}
.has_nav #fixed-sp {
    opacity: 1;
}
#fixed-sp ul {
    display: flex;
}
#fixed-sp ul li {
    width: 33.33333%;
    height: 70px;
}
#fixed-sp ul li:nth-child(2) {
    border-left: 1px solid #FFF;
    border-right: 1px solid #FFF;
}
#fixed-sp ul li a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #000;
    font-family: 'Playfair Display';
    flex-direction: column;
    font-weight: bold;
	font-style: italic;
}
#fixed-sp ul li a img {
    width: 26px;
    margin-top: 10px;
}
#fixed-sp ul li:nth-child(3) a img {
    width: 26px;
}`)],-1)])]),J(`div`,Am,[n[37]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 04`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/04-DgSxsBF9.jpg`,alt:`Style 04`})])],-1),J(`div`,jm,[J(`div`,Mm,[n[33]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[6]||=e=>t(e)},`Copy`)]),n[34]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div id="fixed-sp" class="sp">
  <ul>
	<li>
	  <a href="tel:zzzzzzzzzz" onClick="gtag('event','fix_phone',{event_category:'Phone Call',transport_type:'beacon'});">
		<img src="shared/img/shared/fixed_icon1.png" alt="icon phone" width="44" height="48">
	  </a>
	</li>
	<li>
	  <a href="zzzzzzzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','gmap_print',{transport_type:'beacon'});" class="icon-location">
		<img src="shared/img/shared/fixed_icon2.png" alt="icon map" width="41" height="56">
	  </a>
	</li>
	<li>
	  <a href="zzzzzzzzzzzz" target="_blank" onClick="gtag('event','btn_reserve_ikyu',{transport_type:'beacon'});"><img src="shared/img/shared/fixed_icon3.png" alt="icon" width="37" height="37">WEB予約はこちら</a>
	</li>
	<li>
	  <div class="hamberger-btn"><span></span></div>
	</li>
  </ul>
</div>`)],-1)]),J(`div`,Nm,[J(`div`,Pm,[n[35]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[7]||=e=>t(e)},`Copy`)]),n[36]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#fixed-sp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #ebeaee;
  z-index: 99;
  opacity: 1;
}

.fixed-btn #fixed-sp {
  opacity: 1;
}

#fixed-sp ul {
  display: flex;
}

#fixed-sp ul li {
  width: calc((50% - 70px) / 2);
  height: 60px;
}
#fixed-sp ul li:nth-child(3) {
  width: 50%;
}
#fixed-sp ul li:last-child {
  width: 70px;
}

#fixed-sp ul li a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #222222;
  font-family: "Noto Serif JP", serif;
  font-weight: 500;
}

#fixed-sp ul li a img {
  width: 18px;
}

#fixed-sp ul li:nth-child(3) a img {
  width: 18px;
  margin-right: 5px;
}

.hamberger-btn {
  position: relative;
  width: 70px;
  height: 60px;
  z-index: 201;
  transition: all 0.4s ease;
  overflow: hidden;
  background: #222222;
}

/* .hamberger-btn::after {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  content: "MENU";
  text-align: center;
  font-size: 10px;
  line-height: 20px;
  color: #fff;
  letter-spacing: 1px;
} */

.hamberger-btn span {
  width: 35px;
  height: 2px;
  position: absolute;
  top: 45%;
  transform: translate3D(-50%, -50%, 0);
  left: 50%;
  background: #fff;
}

.hamberger-btn span::before,
.hamberger-btn span::after {
  width: 35px;
  height: 2px;
  position: absolute;
  left: 0;
  background: #fff;
  content: "";
}

.hamberger-btn span::after {
  top: -8px;
}

.hamberger-btn span::before {
  top: 8px;
}

.menu-open .hamberger-btn span {
  transform: rotate(141deg) translateX(20px);
  top: 15px;
  left: 46%;
}

.menu-open .hamberger-btn span::after {
  transform: rotate(-105deg) translateX(0px);
  top: 0;
}

/* .menu-open .hamberger-btn::after {
  content: "CLOSE";
} */

.menu-open .hamberger-btn span::before {
  opacity: 0;
}`)],-1)])]),J(`div`,Fm,[n[42]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 05`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/05-DOxKgTV2.jpg`,alt:`Style 05`})])],-1),J(`div`,Im,[J(`div`,Lm,[n[38]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[8]||=e=>t(e)},`Copy`)]),n[39]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<ul id="ft_fixed" class="ft_fixed_shared fnt-notosans">
  <li><a href="zzzzzzzzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','sp_gmap',{transport_type:'beacon'});" class="icon-location">MAP</a></li>
  <li><a href="tel:zzzzzzzzz" onClick="gtag('event','fix_phone',{event_category:'Phone Call',transport_type:'beacon'});" class="icon-phone">TEL</a></li>
  <li>
	<a href="zzzzzzzzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','btn_reserve',{transport_type:'beacon'});" class="icon-desktop"><span class="fnt-shi">WEB予約</span></a>
  </li>
  <li>
	<div class="hamburger hamburger--slider">
	  <div class="hamburger-box">
		<div class="hamburger-inner"></div>
	  </div>
	</div>
  </li>
</ul>`)],-1)]),J(`div`,Rm,[J(`div`,zm,[n[40]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[9]||=e=>t(e)},`Copy`)]),n[41]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#ft_fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 125;
		background: #3e4813;
		display: none;
		justify-content: space-between;
		align-items: center;
		opacity: 1;
		visibility: visible;
		text-align: center;
		overflow: hidden;
	}
	#ft_fixed li {
		width: 20%;
		position: relative;
	}
	#ft_fixed li::after {
		content: "";
		border-right: 1px solid #fff;
		position: absolute;
		top: -5px;
		bottom: -5px;
		width: 1px;
		right: 0;
	}
	#ft_fixed li a {
		display: block;
		padding-top: 10px;
		text-align: center;
		color: #fff;
		font-size: 14px;
		padding-bottom: 8px;
		position: relative;
	}
	#ft_fixed li a::before {
		content: "";
		position: relative;
		display: block;
		text-align: center;
		margin: 0 auto;
	}
	#ft_fixed li a:hover {
		text-decoration: none;
	}
	#ft_fixed li:nth-child(3) {
		width: 40%;
		background: #a93212;
	}
	#ft_fixed li:nth-child(3) a {
		font-size: 16px;
		padding: 20px 0;
	}
	#ft_fixed li:last-child::after {
		border-right: none;
	}
	#ft_fixed .icon-location::before {
		background: url(../img/shared/icon_map_sp.png) no-repeat;
		-webkit-background-size: 100% auto;
		background-size: 100% auto;
		width: 15px;
		height: 20px;
	}
	#ft_fixed .icon-phone::before {
		background: url(../img/shared/icon_tel.png) no-repeat;
		-webkit-background-size: 100% auto;
		background-size: 100% auto;
		width: 15px;
		height: 20px;
	}
	#ft_fixed .icon-desktop::before {
		display: none;
	}
	#ft_fixed .icon-desktop span {
		position: relative;
		padding-left: 25px;
	}
	#ft_fixed .icon-desktop span::before {
		content: "";
		background: url(../img/shared/icon_web_sp.png) no-repeat;
		-webkit-background-size: 100% auto;
		background-size: 100% auto;
		position: absolute;
		width: 21px;
		height: 21px;
		left: -8px;
		transform: translateY(-50%);
		top: 50%;
	}

	@media screen and (max-width: 767px) {
	#ft_fixed {
		display: flex;
	}
	}



.hamburger:after {
    content: "MENU";
    display: inline-block;
    text-align: center;
    line-height: 1;
    margin-left: 0;
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 13px;
    letter-spacing: 1px;
}
.hamburger:before {
	content: "";
	background: #000;
	width: 1px;
	position: absolute;
	top: 10px;
	bottom: 10px;
	left: 0;
	display: none;
}
.nav--opened .hamburger:before {
	display: none;
}
.nav--opened .hamburger:after {
	color: #fff;
}
.hamburger .hamburger-box {
    width: 40px;
    display: block;
    position: relative;
    padding: 12px 0 35px;
    margin: 0 auto;
}
.hamburger .hamburger-inner {
	display: block;
}
.hamburger .hamburger-inner,  .hamburger .hamburger-inner::before,  .hamburger .hamburger-inner::after {
	width: 40px;
	height: 1px;
	background: #fff;
	position: absolute;
	transition-property: transform;
	transition-duration: 0.15s;
	transition-timing-function: ease;
}
.hamburger .hamburger-inner::before,  .hamburger .hamburger-inner::after {
	content: "";
	display: block;
}
.hamburger .hamburger-inner::before {
	top: -10px;
	transition-property: transform, opacity;
	transition-timing-function: ease;
	transition-duration: 0.15s;
}
.hamburger .hamburger-inner::after {
	bottom: -10px;
}
.hamburger.is-active .hamburger-inner {
	transform: translate3d(0, 0px, 0) rotate(25deg);
}
.hamburger.is-active .hamburger-inner::before {
	transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
	opacity: 0;
}
.hamburger.is-active .hamburger-inner::after {
	transform: translate3d(0, -10px, 0) rotate(130deg);
}
.nav--opened .hamburger .hamburger-inner, .nav--opened .hamburger .hamburger-inner::before, .nav--opened .hamburger .hamburger-inner::after {
	background: #fff;
}
.menu-toggle {
	opacity: 1;
	visibility: visible;
	position: absolute;
	top: 0;
	right: 0;
	box-sizing: border-box;
	background-repeat: repeat;
	transition: all 0.5s ease 0s;
	-moz-transition: all 0.5s ease 0s;
	-webkit-transition: all 0.5s ease 0s;
	overflow: auto;
	left: 0;
	bottom: 0;
}


.menu-toggle .inner-ham .menu-link, .menu-toggle .inner-ham .menu-link li {

}
.menu-toggle .inner-ham .menu-link {
	border-bottom: none;
}
.menu-toggle .inner-ham .menu-link::before {
/*
	content: "";
	background: #d8d3c1;
	width: 1px;
	position: absolute;
	top: 0;
	left: -20px;
	bottom: 0;
*/
}
.menu-toggle .menu-link a:hover::before,  .menu-toggle .menu-link .active::before {
/*   	display: block;*/
}

body.nav--opened,  body.nav--opened *,  body.nav--opened *:hover,  body.nav--opened *:focus,  body.nav--opened *:active {
	/*    cursor: none !important;*/
	touch-action: none !important;
	pointer-events: none !important;
}
body.nav--opened .ham-reserve,  body.nav--opened .ham-reserve *,  body.nav--opened #ft-fixed,  body.nav--opened #ft-fixed *,  body.nav--opened .hamburger,  body.nav--opened #menu-toggle,  body.nav--opened #menu-toggle * {
	touch-action: auto !important;
	pointer-events: visible !important;
}
.nav--opened {
	overflow: hidden !important;
	-webkit-overflow-scrolling: touch !important;
	touch-action: none !important;
	pointer-events: none !important;
}
.nav--opened .hamburger::after {
	content: "CLOSE";
}
.nav--opened #menu-toggle {
	opacity: 1;
	visibility: visible;
	pointer-events: visible;
}


@media screen and (min-width: 767px) {

.hamburger {
	top: 0;
	right: 0;
	width: 130px;
	height: 130px;
	transition: all .4s ease;
	opacity: 0;
	visibility: hidden;
	background: #201310;
}
.hamburger:after {
	font-size: 21px;
	bottom: 23px;
}
.hamburger .hamburger-inner, .hamburger .hamburger-inner::before, .hamburger .hamburger-inner::after {
	height: 2px;
}
.hamburger .hamburger-inner::before {
	top: -16px;
}
.hamburger .hamburger-inner::after {
	bottom: -16px;
}
.hamburger.is-active .hamburger-inner {
	transform: translate3d(0, 0px, 0) rotate(45deg);
}
.hamburger.is-active .hamburger-inner::after {
	bottom: -11px;
	transform: translate3d(0, -10px, 0) rotate(90deg);
}
.hamburger:before,  .hamburger:after {
/*        display: none;*/
}
.hamburger:hover {
	opacity: .7;
}
.has-nav .hamburger {
	opacity: 1;
	visibility: visible;
}
.has-nav .hamburger:hover {
	opacity: .7;
}
.nav--opened .hamburger {
/*
        top: 30px;
        right: 40px;
*/
}
.menu-toggle {

}
.hamburger .hamburger-inner, .hamburger .hamburger-inner::before, .hamburger .hamburger-inner::after {
	/*    background: #fff;*/
	width: 60px;
}
.nav--opened .hamburger .hamburger-inner,  .nav--opened .hamburger .hamburger-inner::before,  .nav--opened .hamburger .hamburger-inner::after {
/*		background: #000;*/
}
.hamburger .hamburger-box {
	padding: 55px 0 0 0;
	width: 60px;
}
}`)],-1)])]),J(`div`,Bm,[n[47]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 06`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/06-ZyKQH42H.jpg`,alt:`Style 06`})])],-1),J(`div`,Vm,[J(`div`,Hm,[n[43]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[10]||=e=>t(e)},`Copy`)]),n[44]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div id="ft-fixed" class="sp">
  <div class="inner">
    <div class="ft__tel">
      <dl>
        <dt>ご予約・<br>
          お問い合わせ</dt>
        <dd><a href="tel:zzzzzzzzzz" onClick="gtag('event','fix_phone',{event_category:'Phone Call',transport_type:'beacon'});"><span>zzzzzzzzz</span></a></dd>
      </dl>
    </div>
    <div class="ft__map"> <a href="zzzzzzzzzz" target="_blank" onClick="gtag('event','sp_gmap',{transport_type:'beacon'});"> <i><img src="shared/img/shared/icon_map.png" width="27" height="38" alt="MAP"></i> <span>MAP</span> </a> </div>
    <div class="hamburger hamburger--slider">
      <div class="hamburger-box">
        <div class="hline-top"></div>
        <div class="hline-center"></div>
        <div class="hline-bottom"></div>
      </div>
    </div>
  </div>
</div>`)],-1)]),J(`div`,Um,[J(`div`,Wm,[n[45]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[11]||=e=>t(e)},`Copy`)]),n[46]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#ft-fixed {
  background: url("../img/shared/bg02.jpg");
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 214;
}
#ft-fixed .inner {
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-between;
}
#ft-fixed .ft__tel {
  background: #182244;
  color: white;
  width: 66%;
  display: flex;
  justify-content: center;
}
#ft-fixed .ft__tel dl {
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  gap: 15px;
}
#ft-fixed .ft__tel dl dt {
  line-height: 1.6;
  font-size: 11px;
  letter-spacing: 0;
}
#ft-fixed .ft__tel dl dd span {
  font-size: 18px;
  position: relative;
  display: inline-block;
  letter-spacing: 0.12em;
  padding-left: 18px;
}
#ft-fixed .ft__tel dl dd span::before {
  content: "";
  background: url(../img/shared/icon_tel.png) no-repeat center;
  background-size: 100% auto;
  width: 13px;
  height: 20px;
  position: absolute;
  top: 52%;
  left: 0;
  transform: translateY(-50%);
}
#ft-fixed .ft__map {
  width: 17%;
  text-align: center;
  font-size: 12px;
  border-top: 1px solid #e2ddd9;
  border-right: 1px solid #e2ddd9;
  padding-top: 8px;
  padding-bottom: 10px;
  height: 45px;
}
#ft-fixed .ft__map i {
  display: block;
  width: 16px;
  margin: 0 auto 0px;
}




.hamburger:after {
    content: "Menu";
    /*    display: inline-block;*/
    text-align: center;
    line-height: 1;
    margin-left: 0;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 15px;
    font-family: "Amiri";
    font-weight: 400;
    font-style: normal;
    letter-spacing: 1px;
    display: none;
}

.hamburger:before {
    content: "";
    background: #000;
    width: 1px;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    display: none;
}

.cl-black .hamburger:before {
    background: #fff;
}

.nav--opened .hamburger:before {
    /*	display: none;*/
}

.nav--opened .hamburger:after {
    color: #fff;
}

.hamburger {
	border-top: 1px solid #e2ddd9;
}


.hamburger .hamburger-box {
    display: block;
    position: relative;
    height: 18px;
    cursor: pointer;
    transition: all .4s ease;
    width: 38px;
    margin: 14px auto 0;
}

.hamburger .hamburger-box::after {
    content: "MENU";
    position: absolute;
    opacity: 1;
    visibility: visible;
    line-height: 1;
    font-size: 12px;
    letter-spacing: 0.05em;
    width: auto;
    text-align: center;
    top: 25px;
    left: -2px;
    display: block;
    right: 0;
}

.hamburger .hamburger-box:hover {
    opacity: .7;
}

.nav--opened .hamburger .hamburger-box::after {
    content: "CLOSE";
 
}

.nav--opened .hamburger .hamburger-box:hover::after {
}

.nav--opened .hamburger .hamburger-box .hline-top,
.nav--opened .hamburger .hamburger-box .hline-center,
.nav--opened .hamburger .hamburger-box .hline-bottom {
    display: block;
}
.nav--opened .hamburger .hamburger-box .hline-top {}
.nav--opened .hamburger .hamburger-box .hline-bottom {
    transform: rotate(30deg);
    top: 9px;
    left: 0;
}
.nav--opened .hamburger .hamburger-box .hline-center {
    display: none;
}
.nav--opened .hamburger .hamburger-box .hline-top {
    transform: rotate(-30deg);
    top: 9px;
    left: 0;
}


.hamburger .hline-center,
.hamburger .hline-bottom,
.hamburger .hline-top {
    height: 1px;
    position: absolute;
    left: 0;
    top: 8px;
    width: 100%;
    background: #000;
    transition-delay: 0s;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}


.hamburger {
  position: relative;
  z-index: 213;
}
@media screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }
}`)],-1)])]),J(`div`,Gm,[n[52]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 07`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/07-eRmdhz5C.jpg`,alt:`Style 07`})])],-1),J(`div`,Km,[J(`div`,qm,[n[48]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[12]||=e=>t(e)},`Copy`)]),n[49]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div id="fixed-sp" class="sp">
  <div class="fixed__shared">
	<p class="fixed__home"><a href="index.html"><i><img src="shared/img/shared/logo.svg" width="150" height="150" alt="logo"></i>zzzzz</a></p>
	<p class="fixed__mail"><a href="contact.html" rel="nofollow" target="_blank" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><i><img src="shared/img/shared/mail.svg" width="219" height="150" alt="mail"></i></a></p>
	<p class="fixed__map"><a href="zzzzzzzzzzzzzzz" target="_blank" onClick="gtag('event','sp_gmap',{transport_type:'beacon'});"><i><img src="shared/img/shared/icon_map2.png" alt="map" width="50" height="70"></i></a></p>
	<div class="hamberger-btn"> <span></span></div> 
  </div>
</div>`)],-1)]),J(`div`,Jm,[J(`div`,Ym,[n[50]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[13]||=e=>t(e)},`Copy`)]),n[51]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#fixed-sp {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 124;
  background: #a34c1d;
}
.fixed__shared {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  line-height: 1;
}
.fixed__shared p {
  position: relative;
  border-right: 2px solid #af653c;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fixed__shared p i, .fixed__shared p a {
  display: block;
}
.fixed__shared p img {
  filter: brightness(0) invert(1);
}
.fixed__shared .fixed__home {
  width: 40%;
}
.fixed__shared .fixed__home a {
  font-size: 18px;
  color: #fff;
  letter-spacing: 0.1em;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.fixed__shared .fixed__home i {
  width: 40px;
}
.fixed__shared .fixed__mail {
  width: 20%;
}
.fixed__shared .fixed__mail i {
  width: 35px;
}
.fixed__shared .fixed__map {
  width: 20%;
}
.fixed__shared .fixed__map i {
  width: 25px;
}




.hamberger-btn {
  top: 0;
  right: 0;
  z-index: 201;
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
  width: 20%;
}
.hamberger-btn::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    line-height: 1;
    display: block;
    font-size: 11px;
    text-align: center;
    color: #fff;
	
}
.hamberger-btn span {
    width: 35px;
    height: 2px;
    position: absolute;
    top: 18px;
    left: 0;
    background: #fff;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.13s;
    padding: 0 !important;
    margin: 0 auto;
    right: 0;
}
.fixed-btn .hamberger-btn span,
.home .hamberger-btn span {
	background: #fff;
}
.hamberger-btn span::after,
.hamberger-btn span::before {
  width: 35px;
  height: 2px;
  position: absolute;
  left: 0;
  background: #fff;
  content: '';
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.fixed-btn .hamberger-btn span::after,
.fixed-btn .hamberger-btn span::before{
	background: #fff;
}

.hamberger-btn span::before {
	top: -8px;
}
.hamberger-btn span::after {
  top: 8px;
}
.menu-open .hamberger-btn {
/*
  border-color: transparent;
  background: transparent;
*/

}

.menu-open .hamberger-btn::after{
	content: "";
}
.menu-open .hamberger-btn span {
  transform: rotate(360deg);
  /* background: #000; */
}
.menu-open .hamberger-btn span,
.menu-open .hamberger-btn span::before {
/*
    background: #fff;
     width: 50px;
*/

}
.menu-open .hamberger-btn span::after, 
.menu-open .hamberger-btn span::before {
	/* background: #000; */
}
.menu-open .hamberger-btn span {
  transform: translate3d(0, 0px, 0) rotate(-40deg);
  transition: transform 0.12s cubic-bezier(0.215, 0.61, 0.355, 1) 0.22s;
}
.menu-open .hamberger-btn span::before {
  top: 0;
  transform: rotate(-100deg);
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-open .hamberger-btn span::after {
  top: 0;
  transform: rotate(-100deg);
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
	display: none;
}`)],-1)])]),J(`div`,Xm,[n[57]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 08`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/08-BOCBzMrb.jpg`,alt:`Style 08`})])],-1),J(`div`,Zm,[J(`div`,Qm,[n[53]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[14]||=e=>t(e)},`Copy`)]),n[54]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<ul id="ft_fixed" class="ft_fixed_shared">
  <li class="ft_fixed-tel"><i><img src="shared/img/shared/icon_tel.png" width="36" height="37" alt="TEL"></i>TEL</li>
  <li class="ft_fixed-mail"><a href="zzzzzzzzzz" target="_blank" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><i><img src="shared/img/shared/icon_web.png" width="36" height="37" alt="WEB予約"></i><span>WEB予約</span></a></li>
  <li class="ft_fixed-map"><a href="zzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','sp_gmap',{transport_type:'beacon'});"><i><img class="imgInvert" src="shared/img/shared/icon_map.png" width="56" height="76" alt="MAP"></i>MAP</a></li>
  <li class="hamburger">
	<p><img src="shared/img/shared/ft_bnr04.jpg" alt="Menu" width="110" height="110"></p>
	<p class="on"><img src="shared/img/shared/ft_bnr04_on.jpg" alt="close" width="110" height="110"></p>
  </li>
</ul>`)],-1)]),J(`div`,$m,[J(`div`,eh,[n[55]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[15]||=e=>t(e)},`Copy`)]),n[56]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#ft_fixed {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
}

.ft_fixed_shared {
  justify-content: space-between;
  background: url("../img/shared/bg_fixed2.jpg") no-repeat center;
  background-size: cover; }
  .ft_fixed_shared li {
    width: 25%;
    position: relative;
    font-size: 13px;
    text-align: center;
    line-height: 1; }
    .ft_fixed_shared li a {
      display: block; }
    .ft_fixed_shared li i {
    height: 6vw;
    margin: 0 auto 2vw;
    display: block;}
      .ft_fixed_shared li i img {
        width: auto;
        height: 100%; }
  .ft_fixed_shared .ft_fixed-tel,
  .ft_fixed_shared .ft_fixed-mail,
  .ft_fixed_shared .ft_fixed-map {
    padding-top: 12px;
    padding-bottom: 12px; }
    .ft_fixed_shared .ft_fixed-tel span,
    .ft_fixed_shared .ft_fixed-mail span,
    .ft_fixed_shared .ft_fixed-map span {
      display: block;
      line-height: 1; }
  .ft_fixed_shared .ft_fixed-tel,
  .ft_fixed_shared .ft_fixed-mail {
    background: url("../img/shared/togglenav_hover.png") no-repeat center;
    background-size: cover; }
  .ft_fixed_shared .ft_fixed-tel::before {
    content: "";
    border-right: 1px solid rgba(0, 0, 0, 0.18);
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 0; }
  .ft_fixed_shared .ft_fixed-map::before {
    content: "";
    border-right: 1px solid rgba(0, 0, 0, 0.18);
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0; }
  .ft_fixed_shared .hamburger {
    padding: 0;
    position: relative; }
    .ft_fixed_shared .hamburger p {
      background-size: cover;
      background-position: center center;
      height: 100%; }
      .ft_fixed_shared .hamburger p img {
        object-fit: cover;
        width: 100% !important;
        height: 100% !important; }
    .ft_fixed_shared .hamburger .on {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: all .4s ease; }
    .ft_fixed_shared .hamburger.is-active .on {
      opacity: 1; }
    
.hamberger-btn {
  position: relative;
  width: 70px;
  height: 60px;
  z-index: 201;
  transition: all 0.4s ease;
  overflow: hidden;
  background: #222222;
}

/* .hamberger-btn::after {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  content: "MENU";
  text-align: center;
  font-size: 10px;
  line-height: 20px;
  color: #fff;
  letter-spacing: 1px;
} */

.hamberger-btn span {
  width: 35px;
  height: 2px;
  position: absolute;
  top: 45%;
  transform: translate3D(-50%, -50%, 0);
  left: 50%;
  background: #fff;
}

.hamberger-btn span::before,
.hamberger-btn span::after {
  width: 35px;
  height: 2px;
  position: absolute;
  left: 0;
  background: #fff;
  content: "";
}

.hamberger-btn span::after {
  top: -8px;
}

.hamberger-btn span::before {
  top: 8px;
}

.menu-open .hamberger-btn span {
  transform: rotate(141deg) translateX(20px);
  top: 15px;
  left: 46%;
}

.menu-open .hamberger-btn span::after {
  transform: rotate(-105deg) translateX(0px);
  top: 0;
}

/* .menu-open .hamberger-btn::after {
  content: "CLOSE";
} */

.menu-open .hamberger-btn span::before {
  opacity: 0;
}
    
    `)],-1)])]),J(`div`,th,[n[62]||=J(`div`,{class:`column column-image`},[J(`div`,{class:`column-header`},`Style 09`),J(`div`,{class:`image-container`},[J(`img`,{src:`/toolvuejsv2/assets/09-Bqs8sUp7.jpg`,alt:`Style 09`})])],-1),J(`div`,nh,[J(`div`,rh,[n[58]||=J(`span`,null,`HTML`,-1),J(`button`,{class:`copy-button`,onClick:n[16]||=e=>t(e)},`Copy`)]),n[59]||=J(`pre`,{class:`code-content`},[J(`code`,null,`<div id="fixed-sp" class="sp">
  <ul>
	  <li class="ft__tel"><a href="tel:zzzzzzzzzz" onClick="gtag('event','sp_fix_phone',{event_category:'Phone Call',transport_type:'beacon'});"><span>お電話</span></a></li>
	  <li class="ft__web"><a href="__WEB__" rel="nofollow" target="_blank" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><span>お問い合わせ</span></a></li>
	 <li class="hamberger-btn"> <span></span> </li>
  </ul>
</div>`)],-1)]),J(`div`,ih,[J(`div`,ah,[n[60]||=J(`span`,null,`CSS`,-1),J(`button`,{class:`copy-button`,onClick:n[17]||=e=>t(e)},`Copy`)]),n[61]||=J(`pre`,{class:`code-content`},[J(`code`,null,`#fixed-sp {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0d2f5d;
  z-index: 124;
}
#fixed-sp ul {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-between;
}
#fixed-sp ul li {
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
  font-weight: 700;
  color: #fff;
  width: 33.333%;
}
#fixed-sp ul li a {
  display: block;
  text-align: center;
  position: relative;
  font-size: 14px;
}
#fixed-sp ul li a:hover {
  text-decoration: none;
}
#fixed-sp ul li:last-child {
  border-right: none;
}
#fixed-sp ul .ft__tel a, #fixed-sp ul .ft__web a {
  padding-top: 30px;
}
#fixed-sp ul .ft__tel a::before, #fixed-sp ul .ft__web a::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
#fixed-sp ul .ft__tel a::before {
  background: url("../img/shared/fix_icon_tel.png") no-repeat center;
  background-size: 100% auto;
  width: 18px;
  height: 26px;
  top: 5px;
}
#fixed-sp ul .ft__web a::before {
  background: url("../img/shared/fix_icon_mail.png") no-repeat center;
  background-size: 100% auto;
  width: 21px;
  height: 17px;
  top: 12px;
}




.hamberger-btn {
  top: 0;
  right: 0;
  z-index: 201;
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
  width: 65px;
  height: 65px;
  background: #1f222a;
}
.hamberger-btn::after {
	content: "メニュー";
	position: absolute;
	top: 38px;
	left: 0;
	right: 0;
	font-size: 14px;
	color: #fff;
	line-height: 1;
}
.menu-open .hamberger-btn::after {
	content: "閉じる";
	
}


.hamberger-btn span {
    width: 35px;
    height: 1px;
    position: absolute;
    top: 25px;
    left: 0;
    background: #fff;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.13s;
    padding: 0 !important;
    margin: 0 auto;
    right: 0;
}
.fixed-btn .hamberger-btn span,
.home .hamberger-btn span {
	background: #fff;
}
.hamberger-btn span::after,
.hamberger-btn span::before {
  width: 35px;
  height: 1px;
  position: absolute;
  left: 0;
  background: #fff;
  content: '';
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.fixed-btn .hamberger-btn span::after,
.fixed-btn .hamberger-btn span::before{
	background: #fff;
}

.hamberger-btn span::before {
	top: -8px;
}
.hamberger-btn span::after {
  top: 8px;
}
.menu-open .hamberger-btn {
  border-color: transparent;
  background: #1f222a;

}
.menu-open .hamberger-btn span {
  transform: rotate(360deg);
  /* background: #000; */
}
.menu-open .hamberger-btn span,
.menu-open .hamberger-btn span::before {
/*
    background: #fff;
     width: 50px;
*/

}
.menu-open .hamberger-btn span::after, 
.menu-open .hamberger-btn span::before {
	/* background: #000; */
}
.menu-open .hamberger-btn span {
  transform: translate3d(0, -4px, 0) rotate(-40deg);
  transition: transform 0.12s cubic-bezier(0.215, 0.61, 0.355, 1) 0.22s;
}
.menu-open .hamberger-btn span::before {
  top: 0;
  transform: rotate(-100deg);
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-open .hamberger-btn span::after {
  top: 0;
  transform: rotate(-100deg);
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
	display: none;
}`)],-1)])])]))}},[[`__scopeId`,`data-v-e6db1715`]]),sh={class:`ask-gsap-wrapper`},ch={class:`top-bar`},lh={class:`ask-gsap-container`},uh={class:`column col-left`},dh={class:`column col-middle`},fh={class:`ai-prompt-box`},ph=[`disabled`],mh={key:0},hh={key:1},gh={class:`column col-right`},_h={class:`col-header`},vh=[`disabled`],yh=Mo({__name:`askforGsap`,setup(e){let t=H(``);sr(()=>{t.value=localStorage.getItem(`gemini_api_key`)||``});let n=()=>{localStorage.setItem(`gemini_api_key`,t.value)},r=H(``),i=H(``),a=H(``),o=H(!1),s=H(!1),c=async()=>{if(a.value)try{await navigator.clipboard.writeText(a.value),s.value=!0,setTimeout(()=>{s.value=!1},2e3)}catch(e){console.error(`Failed to copy text: `,e)}},l=async()=>{if(!r.value.trim()||!i.value.trim()){alert(`Please put HTML and Ask AI!`);return}if(!t.value.trim()){alert(`Please put Gemini API Key!`);return}o.value=!0,a.value=``;try{let e=`Tôi có đoạn mã HTML sau:
\`\`\`html
${r.value}
\`\`\`

Yêu cầu về hiệu ứng: ${i.value}

Vui lòng viết mã JavaScript có sử dụng thư viện GSAP (kết hợp ScrollTrigger) để thực hiện hiệu ứng này.
QUAN TRỌNG: 
1. Chỉ trả về trực tiếp MÃ CODE JAVASCRIPT hoàn chỉnh, KHÔNG có giải thích mở đầu hay kết thúc.
2. KHÔNG bao bọc bằng ký hiệu markdown \`\`\`javascript hay \`\`\`.
3. Đảm bảo mã có thể copy và chạy được trực tiếp (nhớ gọi gsap.registerPlugin).`,n=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${t.value}`,o=await fetch(n,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{temperature:.2}})});if(!o.ok)throw Error(`API Error: ${o.status} - ${o.statusText}`);let s=o.body.getReader(),c=new TextDecoder(`utf-8`),l=``;for(;;){let{done:e,value:t}=await s.read();if(t){l+=c.decode(t,{stream:!0});let e;for(;(e=l.indexOf(`
`))>=0;){let t=l.slice(0,e).trim();if(l=l.slice(e+1),t.startsWith(`data:`)){let e=t.slice(5).trim();if(e===`[DONE]`||!e)continue;try{let t=JSON.parse(e),n=``;t.candidates&&t.candidates.length>0&&t.candidates[0].content&&t.candidates[0].content.parts&&t.candidates[0].content.parts.length>0&&(n=t.candidates[0].content.parts[0].text),n&&(a.value+=n,xn(()=>{let e=document.querySelector(`.col-right .code-editor`);e&&(e.scrollTop=e.scrollHeight)}))}catch(t){console.error(`Lỗi parse JSON đoạn stream:`,t,e)}}}}if(e)break}}catch(e){console.error(`AI Error:`,e),a.value+=`\n[Lỗi truy cập AI]: ${e.message}`}finally{o.value=!1}};return(e,u)=>(K(),q(`div`,sh,[J(`div`,ch,[U(J(`input`,{type:`password`,"onUpdate:modelValue":u[0]||=e=>t.value=e,onChange:n,placeholder:`Gemimi API Key (Required to use real AI)`,class:`api-key-input`},null,544),[[Q,t.value]]),u[4]||=J(`a`,{href:`https://aistudio.google.com/app/apikey`,target:`_blank`,class:`get-key-link`},`Get API Key`,-1)]),J(`div`,lh,[J(`div`,uh,[u[5]||=J(`h2`,{class:`col-title`},`HTML Code`,-1),U(J(`textarea`,{"onUpdate:modelValue":u[1]||=e=>r.value=e,class:`code-editor`,placeholder:`HTML here...`},null,512),[[Q,r.value]])]),J(`div`,dh,[u[6]||=J(`h2`,{class:`col-title`},`Ask AI`,-1),J(`div`,fh,[U(J(`textarea`,{"onUpdate:modelValue":u[2]||=e=>i.value=e,class:`prompt-input`,placeholder:`Beginning ask AI to make an animation for this html code`},null,512),[[Q,i.value]]),J(`button`,{onClick:l,class:`submit-btn`,disabled:o.value},[o.value?(K(),q(`span`,hh,`AI working...`)):(K(),q(`span`,mh,`Submit`))],8,ph)])]),J(`div`,gh,[J(`div`,_h,[u[7]||=J(`h2`,{class:`col-title`},`AI Result (Real-time Stream)`,-1),J(`button`,{class:he([`copy-btn`,{copied:s.value}]),onClick:c,disabled:!a.value},z(s.value?`Copied`:`Copy`),11,vh)]),U(J(`textarea`,{"onUpdate:modelValue":u[3]||=e=>a.value=e,class:`code-editor readonly`,readonly:``,placeholder:`Result from AI ....`},null,512),[[Q,a.value]])])])]))}},[[`__scopeId`,`data-v-e57dc2fe`]]),bh={name:`CommonGsap`,data(){return{copiedRow:null}},methods:{copyCode(e,t){let n=t.innerText;navigator.clipboard.writeText(n).then(()=>{this.copiedRow=e,setTimeout(()=>{this.copiedRow=null},2e3)})}}},xh={class:`common-gsap`},Sh={class:`row`},Ch={class:`col left`},wh={class:`code-box`},Th={ref:`code1`},Eh={class:`col center`},Dh={class:`code-box`},Oh={ref:`css1`},kh={class:`col right`},Ah={class:`code-box`},jh={ref:`gsap1`},Mh={class:`row`},Nh={class:`col left`},Ph={class:`code-box`},Fh={ref:`code2`},Ih={class:`col right`},Lh={class:`code-box`},Rh={ref:`gsap2`},zh={class:`row`},Bh={class:`col left`},Vh={class:`code-box`},Hh={ref:`code3`},Uh={class:`col right`},Wh={class:`code-box`},Gh={ref:`gsap3`};function Kh(e,t,n,r,i,a){return K(),q(`div`,xh,[t[3]||=J(`h2`,null,`Pin Photo when Scroll`,-1),J(`div`,Sh,[J(`div`,Ch,[J(`div`,wh,[J(`pre`,null,[J(`code`,Th,`<div class="scrollStick">
    <div class="content">
        <div class="right sticky">
            <p class="photo">PHOTO</p>
        </div>
        <div class="left">
            CONTENT DUMMY
        </div>
    </div>
</div>`,512)])])]),J(`div`,Eh,[J(`div`,Dh,[J(`pre`,null,[J(`code`,Oh,`.scrollStick .right {
    padding-top: 143px;
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 512px);
}`,512)])])]),J(`div`,kh,[J(`div`,Ah,[J(`pre`,null,[J(`code`,jh,`$(window).on("load", function () {
    $(function () {
    let h = $(".scrollStick .content").innerHeight() - $(".scrollStick .right").innerHeight();
    gsap.registerPlugin(ScrollTrigger);
    if ($(window).width() > 767) {
        let tl = gsap.to(".scrollStick .right", {
        scrollTrigger: {
            scrub: true,
            trigger: ".scrollStick .right",
            pin: true,
            start: "top top",
            end: \`+=\${h}\`,
        },
        });
    }
    });
});`,512)]),J(`button`,{class:he([`copy-btn`,{copied:i.copiedRow===1}]),onClick:t[0]||=t=>a.copyCode(1,e.$refs.gsap1)},z(i.copiedRow===1?`Copied`:`Copy`),3)])])]),J(`div`,Mh,[J(`div`,Nh,[J(`div`,Ph,[J(`pre`,null,[J(`code`,Fh,`<div>HTML content 2</div>`,512)])])]),J(`div`,Ih,[J(`div`,Lh,[J(`pre`,null,[J(`code`,Rh,`gsap.to(".box2", { y: 200 });`,512)]),J(`button`,{class:he([`copy-btn`,{copied:i.copiedRow===2}]),onClick:t[1]||=t=>a.copyCode(2,e.$refs.gsap2)},z(i.copiedRow===2?`Copied`:`Copy`),3)])])]),J(`div`,zh,[J(`div`,Bh,[J(`div`,Vh,[J(`pre`,null,[J(`code`,Hh,`<div>HTML content 3</div>`,512)])])]),J(`div`,Uh,[J(`div`,Wh,[J(`pre`,null,[J(`code`,Gh,`gsap.to(".box3", { rotation: 360 });`,512)]),J(`button`,{class:he([`copy-btn`,{copied:i.copiedRow===3}]),onClick:t[2]||=t=>a.copyCode(3,e.$refs.gsap3)},z(i.copiedRow===3?`Copied`:`Copy`),3)])])])])}var qh=[{path:`/`,redirect:`/common`},{path:`/common`,component:cu},{path:`/menu`,component:ol},{path:`/fontSize`,component:sf},{path:`/fontsFace`,component:Ef},{path:`/ftFixed`,component:oh},{path:`/gtagName`,component:Nf},{path:`/menu-toggle`,component:al},{path:`/layout`,component:Gu},{path:`/askforGsap`,component:yh},{path:`/commonGsap`,component:Mo(bh,[[`render`,Kh],[`__scopeId`,`data-v-1b59b1a5`]])},{path:`/convert`,component:Jd},{path:`/list-modal`,component:Nd},{path:`/blog-template`,component:pm}],Jh=Uc({history:cc(`/toolvuejsv2/`),routes:qh});ko(zo).use(Jh).mount(`#app`);