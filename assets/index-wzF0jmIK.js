var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function u(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var d={},f=[],p=()=>{},m=()=>!1,h=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),g=e=>e.startsWith(`onUpdate:`),_=Object.assign,v=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,b=(e,t)=>y.call(e,t),x=Array.isArray,S=e=>j(e)===`[object Map]`,C=e=>j(e)===`[object Set]`,w=e=>j(e)===`[object Date]`,T=e=>typeof e==`function`,E=e=>typeof e==`string`,D=e=>typeof e==`symbol`,O=e=>typeof e==`object`&&!!e,k=e=>(O(e)||T(e))&&T(e.then)&&T(e.catch),A=Object.prototype.toString,j=e=>A.call(e),M=e=>j(e).slice(8,-1),ee=e=>j(e)===`[object Object]`,N=e=>E(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,P=u(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),F=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},I=/-\w/g,L=F(e=>e.replace(I,e=>e.slice(1).toUpperCase())),R=/\B([A-Z])/g,z=F(e=>e.replace(R,`-$1`).toLowerCase()),te=F(e=>e.charAt(0).toUpperCase()+e.slice(1)),B=F(e=>e?`on${te(e)}`:``),ne=(e,t)=>!Object.is(e,t),re=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ie=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ae=e=>{let t=parseFloat(e);return isNaN(t)?e:t},oe,se=()=>oe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ce(e){if(x(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=E(r)?fe(r):ce(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(E(e)||O(e))return e}var le=/;(?![^(]*\))/g,ue=/:([^]+)/,de=/\/\*[^]*?\*\//g;function fe(e){let t={};return e.replace(de,``).split(le).forEach(e=>{if(e){let n=e.split(ue);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function pe(e){let t=``;if(E(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){let r=pe(e[n]);r&&(t+=r+` `)}else if(O(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var me=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,he=u(me);me+``;function ge(e){return!!e||e===``}function _e(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ve(e[r],t[r]);return n}function ve(e,t){if(e===t)return!0;let n=w(e),r=w(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=D(e),r=D(t),n||r)return e===t;if(n=x(e),r=x(t),n||r)return n&&r?_e(e,t):!1;if(n=O(e),r=O(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ve(e[n],t[n]))return!1}}return String(e)===String(t)}function ye(e,t){return e.findIndex(e=>ve(e,t))}var be=e=>!!(e&&e.__v_isRef===!0),V=e=>E(e)?e:e==null?``:x(e)||O(e)&&(e.toString===A||!T(e.toString))?be(e)?V(e.value):JSON.stringify(e,xe,2):String(e),xe=(e,t)=>be(t)?xe(e,t.value):S(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Se(t,r)+` =>`]=n,e),{})}:C(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Se(e))}:D(t)?Se(t):O(t)&&!x(t)&&!ee(t)?String(t):t,Se=(e,t=``)=>D(e)?`Symbol(${e.description??t})`:e,Ce,we=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Ce;try{return Ce=this,e()}finally{Ce=t}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){this._on>0&&--this._on===0&&(Ce=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Te(){return Ce}var H,Ee=new WeakSet,De=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ee.has(this)&&(Ee.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||je(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,We(this),Pe(this);let e=H,t=Be;H=this,Be=!0;try{return this.fn()}finally{Fe(this),H=e,Be=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Re(e);this.deps=this.depsTail=void 0,We(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ee.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ie(this)&&this.run()}get dirty(){return Ie(this)}},Oe=0,ke,Ae;function je(e,t=!1){if(e.flags|=8,t){e.next=Ae,Ae=e;return}e.next=ke,ke=e}function Me(){Oe++}function Ne(){if(--Oe>0)return;if(Ae){let e=Ae;for(Ae=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ke;){let t=ke;for(ke=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Pe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Re(r),ze(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ie(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Le(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Le(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ge)||(e.globalVersion=Ge,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ie(e))))return;e.flags|=2;let t=e.dep,n=H,r=Be;H=e,Be=!0;try{Pe(e);let n=e.fn(e._value);(t.version===0||ne(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{H=n,Be=r,Fe(e),e.flags&=-3}}function Re(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Re(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ze(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Be=!0,Ve=[];function He(){Ve.push(Be),Be=!1}function Ue(){let e=Ve.pop();Be=e===void 0?!0:e}function We(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=H;H=void 0;try{t()}finally{H=e}}}var Ge=0,Ke=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},qe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!H||!Be||H===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==H)t=this.activeLink=new Ke(H,this),H.deps?(t.prevDep=H.depsTail,H.depsTail.nextDep=t,H.depsTail=t):H.deps=H.depsTail=t,Je(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=H.depsTail,t.nextDep=void 0,H.depsTail.nextDep=t,H.depsTail=t,H.deps===t&&(H.deps=e)}return t}trigger(e){this.version++,Ge++,this.notify(e)}notify(e){Me();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ne()}}};function Je(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Je(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ye=new WeakMap,Xe=Symbol(``),Ze=Symbol(``),Qe=Symbol(``);function $e(e,t,n){if(Be&&H){let t=Ye.get(e);t||Ye.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new qe),r.map=t,r.key=n),r.track()}}function et(e,t,n,r,i,a){let o=Ye.get(e);if(!o){Ge++;return}let s=e=>{e&&e.trigger()};if(Me(),t===`clear`)o.forEach(s);else{let i=x(e),a=i&&N(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Qe||!D(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Qe)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Xe)),S(e)&&s(o.get(Ze)));break;case`delete`:i||(s(o.get(Xe)),S(e)&&s(o.get(Ze)));break;case`set`:S(e)&&s(o.get(Xe));break}}Ne()}function tt(e){let t=U(e);return t===e?t:($e(t,`iterate`,Qe),Vt(e)?t:t.map(Wt))}function nt(e){return $e(e=U(e),`iterate`,Qe),e}function rt(e,t){return Bt(e)?zt(e)?Gt(Wt(t)):Gt(t):Wt(t)}var it={__proto__:null,[Symbol.iterator](){return at(this,Symbol.iterator,e=>rt(this,e))},concat(...e){return tt(this).concat(...e.map(e=>x(e)?tt(e):e))},entries(){return at(this,`entries`,e=>(e[1]=rt(this,e[1]),e))},every(e,t){return st(this,`every`,e,t,void 0,arguments)},filter(e,t){return st(this,`filter`,e,t,e=>e.map(e=>rt(this,e)),arguments)},find(e,t){return st(this,`find`,e,t,e=>rt(this,e),arguments)},findIndex(e,t){return st(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return st(this,`findLast`,e,t,e=>rt(this,e),arguments)},findLastIndex(e,t){return st(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return st(this,`forEach`,e,t,void 0,arguments)},includes(...e){return lt(this,`includes`,e)},indexOf(...e){return lt(this,`indexOf`,e)},join(e){return tt(this).join(e)},lastIndexOf(...e){return lt(this,`lastIndexOf`,e)},map(e,t){return st(this,`map`,e,t,void 0,arguments)},pop(){return ut(this,`pop`)},push(...e){return ut(this,`push`,e)},reduce(e,...t){return ct(this,`reduce`,e,t)},reduceRight(e,...t){return ct(this,`reduceRight`,e,t)},shift(){return ut(this,`shift`)},some(e,t){return st(this,`some`,e,t,void 0,arguments)},splice(...e){return ut(this,`splice`,e)},toReversed(){return tt(this).toReversed()},toSorted(e){return tt(this).toSorted(e)},toSpliced(...e){return tt(this).toSpliced(...e)},unshift(...e){return ut(this,`unshift`,e)},values(){return at(this,`values`,e=>rt(this,e))}};function at(e,t,n){let r=nt(e),i=r[t]();return r!==e&&!Vt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ot=Array.prototype;function st(e,t,n,r,i,a){let o=nt(e),s=o!==e&&!Vt(e),c=o[t];if(c!==ot[t]){let t=c.apply(e,a);return s?Wt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,rt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ct(e,t,n,r){let i=nt(e),a=n;return i!==e&&(Vt(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,rt(e,r),i,e)}),i[t](a,...r)}function lt(e,t,n){let r=U(e);$e(r,`iterate`,Qe);let i=r[t](...n);return(i===-1||i===!1)&&Ht(n[0])?(n[0]=U(n[0]),r[t](...n)):i}function ut(e,t,n=[]){He(),Me();let r=U(e)[t].apply(e,n);return Ne(),Ue(),r}var dt=u(`__proto__,__v_isRef,__isVue`),ft=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(D));function pt(e){D(e)||(e=String(e));let t=U(this);return $e(t,`has`,e),t.hasOwnProperty(e)}var mt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Mt:jt:i?At:kt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=x(e);if(!r){let e;if(a&&(e=it[t]))return e;if(t===`hasOwnProperty`)return pt}let o=Reflect.get(e,t,Kt(e)?e:n);if((D(t)?ft.has(t):dt(t))||(r||$e(e,`get`,t),i))return o;if(Kt(o)){let e=a&&N(t)?o:o.value;return r&&O(e)?Lt(e):e}return O(o)?r?Lt(o):Ft(o):o}},ht=class extends mt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=x(e)&&N(t);if(!this._isShallow){let e=Bt(i);if(!Vt(n)&&!Bt(n)&&(i=U(i),n=U(n)),!a&&Kt(i)&&!Kt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:b(e,t),s=Reflect.set(e,t,n,Kt(e)?e:r);return e===U(r)&&(o?ne(n,i)&&et(e,`set`,t,n,i):et(e,`add`,t,n)),s}deleteProperty(e,t){let n=b(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&et(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!D(t)||!ft.has(t))&&$e(e,`has`,t),n}ownKeys(e){return $e(e,`iterate`,x(e)?`length`:Xe),Reflect.ownKeys(e)}},gt=class extends mt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},_t=new ht,vt=new gt,yt=new ht(!0),bt=e=>e,xt=e=>Reflect.getPrototypeOf(e);function St(e,t,n){return function(...r){let i=this.__v_raw,a=U(i),o=S(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?bt:t?Gt:Wt;return!t&&$e(a,`iterate`,c?Ze:Xe),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ct(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function wt(e,t){let n={get(n){let r=this.__v_raw,i=U(r),a=U(n);e||(ne(n,a)&&$e(i,`get`,n),$e(i,`get`,a));let{has:o}=xt(i),s=t?bt:e?Gt:Wt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&$e(U(t),`iterate`,Xe),t.size},has(t){let n=this.__v_raw,r=U(n),i=U(t);return e||(ne(t,i)&&$e(r,`has`,t),$e(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=U(a),s=t?bt:e?Gt:Wt;return!e&&$e(o,`iterate`,Xe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return _(n,e?{add:Ct(`add`),set:Ct(`set`),delete:Ct(`delete`),clear:Ct(`clear`)}:{add(e){!t&&!Vt(e)&&!Bt(e)&&(e=U(e));let n=U(this);return xt(n).has.call(n,e)||(n.add(e),et(n,`add`,e,e)),this},set(e,n){!t&&!Vt(n)&&!Bt(n)&&(n=U(n));let r=U(this),{has:i,get:a}=xt(r),o=i.call(r,e);o||=(e=U(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?ne(n,s)&&et(r,`set`,e,n,s):et(r,`add`,e,n),this},delete(e){let t=U(this),{has:n,get:r}=xt(t),i=n.call(t,e);i||=(e=U(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&et(t,`delete`,e,void 0,a),o},clear(){let e=U(this),t=e.size!==0,n=e.clear();return t&&et(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=St(r,e,t)}),n}function Tt(e,t){let n=wt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(b(n,r)&&r in t?n:t,r,i)}var Et={get:Tt(!1,!1)},Dt={get:Tt(!1,!0)},Ot={get:Tt(!0,!1)},kt=new WeakMap,At=new WeakMap,jt=new WeakMap,Mt=new WeakMap;function Nt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Pt(e){return e.__v_skip||!Object.isExtensible(e)?0:Nt(M(e))}function Ft(e){return Bt(e)?e:Rt(e,!1,_t,Et,kt)}function It(e){return Rt(e,!1,yt,Dt,At)}function Lt(e){return Rt(e,!0,vt,Ot,jt)}function Rt(e,t,n,r,i){if(!O(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Pt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function zt(e){return Bt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Vt(e){return!!(e&&e.__v_isShallow)}function Ht(e){return e?!!e.__v_raw:!1}function U(e){let t=e&&e.__v_raw;return t?U(t):e}function Ut(e){return!b(e,`__v_skip`)&&Object.isExtensible(e)&&ie(e,`__v_skip`,!0),e}var Wt=e=>O(e)?Ft(e):e,Gt=e=>O(e)?Lt(e):e;function Kt(e){return e?e.__v_isRef===!0:!1}function W(e){return Jt(e,!1)}function qt(e){return Jt(e,!0)}function Jt(e,t){return Kt(e)?e:new Yt(e,t)}var Yt=class{constructor(e,t){this.dep=new qe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:U(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Vt(e)||Bt(e);e=n?e:U(e),ne(e,t)&&(this._rawValue=e,this._value=n?e:Wt(e),this.dep.trigger())}};function Xt(e){return Kt(e)?e.value:e}var Zt={get:(e,t,n)=>t===`__v_raw`?e:Xt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Kt(i)&&!Kt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qt(e){return zt(e)?e:new Proxy(e,Zt)}var $t=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new qe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ge-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&H!==this)return je(this,!0),!0}get value(){let e=this.dep.track();return Le(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function en(e,t,n=!1){let r,i;return T(e)?r=e:(r=e.get,i=e.set),new $t(r,i,n)}var tn={},nn=new WeakMap,rn=void 0;function an(e,t=!1,n=rn){if(n){let t=nn.get(n);t||nn.set(n,t=[]),t.push(e)}}function on(e,t,n=d){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Vt(e)||i===!1||i===0?sn(e,1):sn(e),u,f,m,h,g=!1,_=!1;if(Kt(e)?(f=()=>e.value,g=Vt(e)):zt(e)?(f=()=>l(e),g=!0):x(e)?(_=!0,g=e.some(e=>zt(e)||Vt(e)),f=()=>e.map(e=>{if(Kt(e))return e.value;if(zt(e))return l(e);if(T(e))return c?c(e,2):e()})):f=T(e)?t?c?()=>c(e,2):e:()=>{if(m){He();try{m()}finally{Ue()}}let t=rn;rn=u;try{return c?c(e,3,[h]):e(h)}finally{rn=t}}:p,t&&i){let e=f,t=i===!0?1/0:i;f=()=>sn(e(),t)}let y=Te(),b=()=>{u.stop(),y&&y.active&&v(y.effects,u)};if(a&&t){let e=t;t=(...t)=>{e(...t),b()}}let S=_?Array(e.length).fill(tn):tn,C=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let e=u.run();if(i||g||(_?e.some((e,t)=>ne(e,S[t])):ne(e,S))){m&&m();let n=rn;rn=u;try{let n=[e,S===tn?void 0:_&&S[0]===tn?[]:S,h];S=e,c?c(t,3,n):t(...n)}finally{rn=n}}}else u.run()};return s&&s(C),u=new De(f),u.scheduler=o?()=>o(C,!1):C,h=e=>an(e,!1,u),m=u.onStop=()=>{let e=nn.get(u);if(e){if(c)c(e,4);else for(let t of e)t();nn.delete(u)}},t?r?C(!0):S=u.run():o?o(C.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function sn(e,t=1/0,n){if(t<=0||!O(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Kt(e))sn(e.value,t,n);else if(x(e))for(let r=0;r<e.length;r++)sn(e[r],t,n);else if(C(e)||S(e))e.forEach(e=>{sn(e,t,n)});else if(ee(e)){for(let r in e)sn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&sn(e[r],t,n)}return e}function cn(e,t,n,r){try{return r?e(...r):e()}catch(e){un(e,t,n)}}function ln(e,t,n,r){if(T(e)){let i=cn(e,t,n,r);return i&&k(i)&&i.catch(e=>{un(e,t,n)}),i}if(x(e)){let i=[];for(let a=0;a<e.length;a++)i.push(ln(e[a],t,n,r));return i}}function un(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||d;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){He(),cn(a,null,10,[e,i,o]),Ue();return}}dn(e,n,i,r,o)}function dn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var fn=[],pn=-1,mn=[],hn=null,gn=0,_n=Promise.resolve(),vn=null;function yn(e){let t=vn||_n;return e?t.then(this?e.bind(this):e):t}function bn(e){let t=pn+1,n=fn.length;for(;t<n;){let r=t+n>>>1,i=fn[r],a=En(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function xn(e){if(!(e.flags&1)){let t=En(e),n=fn[fn.length-1];!n||!(e.flags&2)&&t>=En(n)?fn.push(e):fn.splice(bn(t),0,e),e.flags|=1,Sn()}}function Sn(){vn||=_n.then(Dn)}function Cn(e){x(e)?mn.push(...e):hn&&e.id===-1?hn.splice(gn+1,0,e):e.flags&1||(mn.push(e),e.flags|=1),Sn()}function wn(e,t,n=pn+1){for(;n<fn.length;n++){let t=fn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;fn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Tn(e){if(mn.length){let e=[...new Set(mn)].sort((e,t)=>En(e)-En(t));if(mn.length=0,hn){hn.push(...e);return}for(hn=e,gn=0;gn<hn.length;gn++){let e=hn[gn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}hn=null,gn=0}}var En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Dn(e){try{for(pn=0;pn<fn.length;pn++){let e=fn[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<fn.length;pn++){let e=fn[pn];e&&(e.flags&=-2)}pn=-1,fn.length=0,Tn(e),vn=null,(fn.length||mn.length)&&Dn(e)}}var On=null,kn=null;function An(e){let t=On;return On=e,kn=e&&e.type.__scopeId||null,t}function jn(e,t=On,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&zi(-1);let i=An(t),a;try{a=e(...n)}finally{An(i),r._d&&zi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function G(e,t){if(On===null)return e;let n=xa(On),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=d]=t[e];i&&(T(i)&&(i={mounted:i,updated:i}),i.deep&&sn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function Mn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(He(),ln(c,n,8,[e.el,s,e,t]),Ue())}}function Nn(e,t){if(aa){let n=aa.provides,r=aa.parent&&aa.parent.provides;r===n&&(n=aa.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){let r=oa();if(r||Ur){let i=Ur?Ur._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&T(t)?t.call(r&&r.proxy):t}}var Fn=Symbol.for(`v-scx`),In=()=>Pn(Fn);function Ln(e,t,n){return Rn(e,t,n)}function Rn(e,t,n=d){let{immediate:r,deep:i,flush:a,once:o}=n,s=_({},n),c=t&&r||!t&&a!==`post`,l;if(fa){if(a===`sync`){let e=In();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=p,e.resume=p,e.pause=p,e}}let u=aa;s.call=(e,t,n)=>ln(e,u,t,n);let f=!1;a===`post`?s.scheduler=e=>{yi(e,u&&u.suspense)}:a!==`sync`&&(f=!0,s.scheduler=(e,t)=>{t?e():xn(e)}),s.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let m=on(e,t,s);return fa&&(l?l.push(m):c&&m()),m}function zn(e,t,n){let r=this.proxy,i=E(e)?e.includes(`.`)?Bn(r,e):()=>r[e]:e.bind(r,r),a;T(t)?a=t:(a=t.handler,n=t);let o=la(this),s=Rn(i,a.bind(r),n);return o(),s}function Bn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Vn=Symbol(`_vte`),Hn=e=>e.__isTeleport,Un=Symbol(`_leaveCb`);function Wn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Wn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gn(e,t){return T(e)?(()=>_({name:e.name},t,{setup:e}))():e}function Kn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}var qn=new WeakMap;function Jn(e,t,n,r,i=!1){if(x(e)){e.forEach((e,a)=>Jn(e,t&&(x(t)?t[a]:t),n,r,i));return}if(Xn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Jn(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?xa(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===d?s.refs={}:s.refs,f=s.setupState,p=U(f),h=f===d?m:e=>b(p,e),g=e=>!0;if(l!=null&&l!==c){if(Yn(t),E(l))u[l]=null,h(l)&&(f[l]=null);else if(Kt(l)){g(l)&&(l.value=null);let e=t;e.k&&(u[e.k]=null)}}if(T(c))cn(c,s,12,[o,u]);else{let t=E(c),r=Kt(c);if(t||r){let s=()=>{if(e.f){let n=t?h(c)?f[c]:u[c]:g(c)||!e.k?c.value:u[e.k];if(i)x(n)&&v(n,a);else if(x(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],h(c)&&(f[c]=u[c]);else{let t=[a];g(c)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,h(c)&&(f[c]=o)):r&&(g(c)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),qn.delete(e)};t.id=-1,qn.set(e,t),yi(t,n)}else Yn(e),s()}}}function Yn(e){let t=qn.get(e);t&&(t.flags|=8,qn.delete(e))}se().requestIdleCallback,se().cancelIdleCallback;var Xn=e=>!!e.type.__asyncLoader,Zn=e=>e.type.__isKeepAlive;function Qn(e,t){er(e,`a`,t)}function $n(e,t){er(e,`da`,t)}function er(e,t,n=aa){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(nr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Zn(e.parent.vnode)&&tr(r,t,n,e),e=e.parent}}function tr(e,t,n,r){let i=nr(t,e,r,!0);lr(()=>{v(r[t],i)},n)}function nr(e,t,n=aa,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{He();let i=la(n),a=ln(t,n,e,r);return i(),Ue(),a};return r?i.unshift(a):i.push(a),a}}var rr=e=>(t,n=aa)=>{(!fa||e===`sp`)&&nr(e,(...e)=>t(...e),n)},ir=rr(`bm`),ar=rr(`m`),or=rr(`bu`),sr=rr(`u`),cr=rr(`bum`),lr=rr(`um`),ur=rr(`sp`),dr=rr(`rtg`),fr=rr(`rtc`);function pr(e,t=aa){nr(`ec`,e,t)}var mr=`components`;function hr(e,t){return _r(mr,e,!0,t)||e}var gr=Symbol.for(`v-ndc`);function _r(e,t,n=!0,r=!1){let i=On||aa;if(i){let n=i.type;if(e===mr){let e=Sa(n,!1);if(e&&(e===t||e===L(t)||e===te(L(t))))return n}let a=vr(i[e]||n[e],t)||vr(i.appContext[e],t);return!a&&r?n:a}}function vr(e,t){return e&&(e[t]||e[L(t)]||e[te(L(t))])}function yr(e,t,n,r){let i,a=n&&n[r],o=x(e);if(o||E(e)){let n=o&&zt(e),r=!1,s=!1;n&&(r=!Vt(e),s=Bt(e),e=nt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Gt(Wt(e[n])):Wt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(O(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var br=e=>e?da(e)?xa(e):br(e.parent):null,xr=_(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>br(e.parent),$root:e=>br(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ar(e),$forceUpdate:e=>e.f||=()=>{xn(e.update)},$nextTick:e=>e.n||=yn.bind(e.proxy),$watch:e=>zn.bind(e)}),Sr=(e,t)=>e!==d&&!e.__isScriptSetup&&b(e,t),Cr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Sr(r,t))return o[t]=1,r[t];else if(i!==d&&b(i,t))return o[t]=2,i[t];else if(b(a,t))return o[t]=3,a[t];else if(n!==d&&b(n,t))return o[t]=4,n[t];else Tr&&(o[t]=0)}let l=xr[t],u,f;if(l)return t===`$attrs`&&$e(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==d&&b(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,b(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Sr(i,t)?(i[t]=n,!0):r!==d&&b(r,t)?(r[t]=n,!0):b(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==d&&s[0]!==`$`&&b(e,s)||Sr(t,s)||b(a,s)||b(r,s)||b(xr,s)||b(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?b(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function wr(e){return x(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Tr=!0;function Er(e){let t=Ar(e),n=e.proxy,r=e.ctx;Tr=!1,t.beforeCreate&&Or(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:S,render:C,renderTracked:w,renderTriggered:E,errorCaptured:D,serverPrefetch:k,expose:A,inheritAttrs:j,components:M,directives:ee,filters:N}=t;if(l&&Dr(l,r,null),o)for(let e in o){let t=o[e];T(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);O(t)&&(e.data=Ft(t))}if(Tr=!0,a)for(let e in a){let t=a[e],i=Q({get:T(t)?t.bind(n,n):T(t.get)?t.get.bind(n,n):p,set:!T(t)&&T(t.set)?t.set.bind(n):p});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)kr(s[e],r,n,e);if(c){let e=T(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Nn(t,e[t])})}u&&Or(u,e,`c`);function P(e,t){x(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(P(ir,d),P(ar,f),P(or,m),P(sr,h),P(Qn,g),P($n,_),P(pr,D),P(fr,w),P(dr,E),P(cr,y),P(lr,S),P(ur,k),x(A))if(A.length){let t=e.exposed||={};A.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};C&&e.render===p&&(e.render=C),j!=null&&(e.inheritAttrs=j),M&&(e.components=M),ee&&(e.directives=ee),k&&Kn(e)}function Dr(e,t,n=p){for(let n in x(e)&&(e=Fr(e)),e){let r=e[n],i;i=O(r)?`default`in r?Pn(r.from||n,r.default,!0):Pn(r.from||n):Pn(r),Kt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Or(e,t,n){ln(x(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function kr(e,t,n,r){let i=r.includes(`.`)?Bn(n,r):()=>n[r];if(E(e)){let n=t[e];T(n)&&Ln(i,n)}else if(T(e))Ln(i,e.bind(n));else if(O(e))if(x(e))e.forEach(e=>kr(e,t,n,r));else{let r=T(e.handler)?e.handler.bind(n):t[e.handler];T(r)&&Ln(i,r,e)}}function Ar(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>jr(c,e,o,!0)),jr(c,t,o)),O(t)&&a.set(t,c),c}function jr(e,t,n,r=!1){let{mixins:i,extends:a}=t;for(let o in a&&jr(e,a,n,!0),i&&i.forEach(t=>jr(e,t,n,!0)),t)if(!(r&&o===`expose`)){let r=Mr[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}var Mr={data:Nr,props:Rr,emits:Rr,methods:Lr,computed:Lr,beforeCreate:Ir,created:Ir,beforeMount:Ir,mounted:Ir,beforeUpdate:Ir,updated:Ir,beforeDestroy:Ir,beforeUnmount:Ir,destroyed:Ir,unmounted:Ir,activated:Ir,deactivated:Ir,errorCaptured:Ir,serverPrefetch:Ir,components:Lr,directives:Lr,watch:zr,provide:Nr,inject:Pr};function Nr(e,t){return t?e?function(){return _(T(e)?e.call(this,this):e,T(t)?t.call(this,this):t)}:t:e}function Pr(e,t){return Lr(Fr(e),Fr(t))}function Fr(e){if(x(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ir(e,t){return e?[...new Set([].concat(e,t))]:t}function Lr(e,t){return e?_(Object.create(null),e,t):t}function Rr(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:_(Object.create(null),wr(e),wr(t??{})):t}function zr(e,t){if(!e)return t;if(!t)return e;let n=_(Object.create(null),e);for(let r in t)n[r]=Ir(e[r],t[r]);return n}function Br(){return{app:null,config:{isNativeTag:m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Vr=0;function Hr(e,t){return function(n,r=null){T(n)||(n=_({},n)),r!=null&&!O(r)&&(r=null);let i=Br(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Vr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ta,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&T(e.install)?(a.add(e),e.install(c,...t)):T(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||X(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,xa(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(ln(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Ur;Ur=c;try{return e()}finally{Ur=t}}};return c}}var Ur=null,Wr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${L(t)}Modifiers`]||e[`${z(t)}Modifiers`];function Gr(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||d,i=n,a=t.startsWith(`update:`),o=a&&Wr(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>E(e)?e.trim():e)),o.number&&(i=n.map(ae)));let s,c=r[s=B(t)]||r[s=B(L(t))];!c&&a&&(c=r[s=B(z(t))]),c&&ln(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ln(l,e,6,i)}}var Kr=new WeakMap;function qr(e,t,n=!1){let r=n?Kr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!T(e)){let r=e=>{let n=qr(e,t,!0);n&&(s=!0,_(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(O(e)&&r.set(e,null),null):(x(a)?a.forEach(e=>o[e]=null):_(o,a),O(e)&&r.set(e,o),o)}function Jr(e,t){return!e||!h(t)?!1:(t=t.slice(2).replace(/Once$/,``),b(e,t[0].toLowerCase()+t.slice(1))||b(e,z(t))||b(e,t))}function Yr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,_=An(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Zi(l.call(t,e,u,d,p,f,m)),y=s}else{let e=t;v=Zi(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),y=t.props?s:Xr(s)}}catch(t){Fi.length=0,un(t,e,1),v=X(Ni)}let b=v;if(y&&h!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(g)&&(y=Zr(y,a)),b=Ji(b,y,!1,!0))}return n.dirs&&(b=Ji(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Wn(b,n.transition),v=b,An(_),v}var Xr=e=>{let t;for(let n in e)(n===`class`||n===`style`||h(n))&&((t||={})[n]=e[n]);return t},Zr=(e,t)=>{let n={};for(let r in e)(!g(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$r(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!Jr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?$r(r,o,l):!0:!!o;return!1}function $r(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!Jr(n,a))return!0}return!1}function ei({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var ti={},ni=()=>Object.create(ti),ri=e=>Object.getPrototypeOf(e)===ti;function ii(e,t,n,r=!1){let i={},a=ni();for(let n in e.propsDefaults=Object.create(null),oi(e,t,i,a),e.propsOptions[0])n in i||(i[n]=void 0);n?e.props=r?i:It(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ai(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=U(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Jr(e.emitsOptions,o))continue;let u=t[o];if(c)if(b(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=L(o);i[t]=si(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{oi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!b(t,a)&&((r=z(a))===a||!b(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=si(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!b(t,e))&&(delete a[e],l=!0)}l&&et(e.attrs,`set`,``)}function oi(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(P(c))continue;let l=t[c],u;i&&b(i,u=L(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Jr(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=U(n),r=s||d;for(let o=0;o<a.length;o++){let s=a[o];n[s]=si(i,t,s,r[s],e,!b(r,s))}}return o}function si(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=b(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&T(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=la(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===z(n))&&(r=!0))}return r}var ci=new WeakMap;function li(e,t,n=!1){let r=n?ci:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!T(e)){let r=e=>{c=!0;let[n,r]=li(e,t,!0);_(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return O(e)&&r.set(e,f),f;if(x(a))for(let e=0;e<a.length;e++){let t=L(a[e]);ui(t)&&(o[t]=d)}else if(a)for(let e in a){let t=L(e);if(ui(t)){let n=a[e],r=o[t]=x(n)||T(n)?{type:n}:_({},n),i=r.type,c=!1,l=!0;if(x(i))for(let e=0;e<i.length;++e){let t=i[e],n=T(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=T(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||b(r,`default`))&&s.push(t)}}let l=[o,s];return O(e)&&r.set(e,l),l}function ui(e){return e[0]!==`$`&&!P(e)}var di=e=>e===`_`||e===`_ctx`||e===`$stable`,fi=e=>x(e)?e.map(Zi):[Zi(e)],pi=(e,t,n)=>{if(t._n)return t;let r=jn((...e)=>fi(t(...e)),n);return r._c=!1,r},mi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(di(n))continue;let i=e[n];if(T(i))t[n]=pi(n,i,r);else if(i!=null){let e=fi(i);t[n]=()=>e}}},hi=(e,t)=>{let n=fi(t);e.slots.default=()=>n},gi=(e,t,n)=>{for(let r in t)(n||!di(r))&&(e[r]=t[r])},_i=(e,t,n)=>{let r=e.slots=ni();if(e.vnode.shapeFlag&32){let e=t._;e?(gi(r,t,n),n&&ie(r,`_`,e,!0)):mi(t,r)}else t&&hi(e,t)},vi=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=d;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:gi(i,t,n):(a=!t.$stable,mi(t,i)),o=t}else t&&(hi(e,t),o={default:1});if(a)for(let e in i)!di(e)&&o[e]==null&&delete i[e]},yi=ji;function bi(e){return xi(e)}function xi(e,t){let n=se();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:m,nextSibling:h,setScopeId:g=p,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ui(e,t)&&(r=ce(e),B(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Mi:y(e,t,n,r);break;case Ni:b(e,t,n,r);break;case Pi:e??x(t,n,r,o);break;case K:j(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?M(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,de)}u!=null&&i?Jn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Jn(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=h(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),O(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&D(e.children,f,null,i,s,Si(e,c),l,d),_&&Mn(e,null,i,`created`),E(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!P(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&ta(p,i,e)}_&&Mn(e,null,i,`beforeMount`);let v=wi(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&yi(()=>{p&&ta(p,i,e),v&&g.enter(f),_&&Mn(e,null,i,`mounted`)},s)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ai(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Qi(e[l]):Zi(e[l]),t,n,r,i,a,o,s)},O=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:f,dirs:p}=t;l|=e.patchFlag&16;let m=e.props||d,h=t.props||d,g;if(n&&Ci(n,!1),(g=h.onVnodeBeforeUpdate)&&ta(g,n,t,e),p&&Mn(t,e,n,`beforeUpdate`),n&&Ci(n,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&u(c,``),f?k(e.dynamicChildren,f,c,n,r,Si(t,i),o):s||L(e,t,c,null,n,r,Si(t,i),o,!1),l>0){if(l&16)A(c,m,h,n,i);else if(l&2&&m.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,m.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=m[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&f==null&&A(c,m,h,n,i);((g=h.onVnodeUpdated)||p)&&yi(()=>{g&&ta(g,n,t,e),p&&Mn(t,e,n,`updated`)},r)},k=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===K||!Ui(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},A=(e,t,n,r,i)=>{if(t!==n){if(t!==d)for(let o in t)!P(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(P(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},j=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(k(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Ti(e,t,!0)):L(e,t,n,f,a,o,c,l,u)},M=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ee(t,n,r,i,a,o,c):N(e,t,c)},ee=(e,t,n,r,i,a,o)=>{let s=e.component=ia(e,r,i);if(Zn(e)&&(s.ctx.renderer=de),pa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,F,o),!e.el){let r=s.subTree=X(Ni);b(null,r,t,n),e.placeholder=r.el}}else F(s,e,t,n,i,a,o)},N=(e,t,n)=>{let r=t.component=e.component;if(Qr(e,t,n))if(r.asyncDep&&!r.asyncResolved){I(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},F=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=Di(e);if(n){t&&(t.el=l.el,I(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,d;Ci(e,!1),t?(t.el=l.el,I(e,t,o)):t=l,n&&re(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ta(d,c,t,l),Ci(e,!0);let f=Yr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ce(p),e,i,a),t.el=f.el,u===null&&ei(e,f.el),r&&yi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&yi(()=>ta(d,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Xn(t);if(Ci(e,!1),l&&re(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ta(o,d,t),Ci(e,!0),s&&pe){let t=()=>{e.subTree=Yr(e),pe(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=Yr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&yi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;yi(()=>ta(o,d,e),i)}(t.shapeFlag&256||d&&Xn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&yi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new De(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>xn(u),Ci(e,!0),l()},I=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ai(e,t.props,r,n),vi(e,t.children,n),He(),wn(e),Ue()},L=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){z(l,f,n,r,i,a,o,s,c);return}else if(p&256){R(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&oe(l,i,a),f!==l&&u(n,f)):d&16?m&16?z(l,f,n,r,i,a,o,s,c):oe(l,i,a,!0):(d&8&&u(n,``),m&16&&D(f,n,r,i,a,o,s,c))},R=(e,t,n,r,i,a,o,s,c)=>{e||=f,t||=f;let l=e.length,u=t.length,d=Math.min(l,u),p;for(p=0;p<d;p++){let r=t[p]=c?Qi(t[p]):Zi(t[p]);v(e[p],r,n,null,i,a,o,s,c)}l>u?oe(e,i,a,!0,!1,d):D(t,n,r,i,a,o,s,c,d)},z=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,p=u-1;for(;l<=d&&l<=p;){let r=e[l],u=t[l]=c?Qi(t[l]):Zi(t[l]);if(Ui(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=p;){let r=e[d],l=t[p]=c?Qi(t[p]):Zi(t[p]);if(Ui(r,l))v(r,l,n,null,i,a,o,s,c);else break;d--,p--}if(l>d){if(l<=p){let e=p+1,d=e<u?t[e].el:r;for(;l<=p;)v(null,t[l]=c?Qi(t[l]):Zi(t[l]),n,d,i,a,o,s,c),l++}}else if(l>p)for(;l<=d;)B(e[l],i,a,!0),l++;else{let m=l,h=l,g=new Map;for(l=h;l<=p;l++){let e=t[l]=c?Qi(t[l]):Zi(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=m;l<=d;l++){let r=e[l];if(y>=b){B(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ui(r,t[_])){u=_;break}u===void 0?B(r,i,a,!0):(C[u-h]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?Ei(C):f;for(_=w.length-1,l=b-1;l>=0;l--){let e=h+l,d=t[e],f=t[e+1],p=e+1<u?f.el||ki(f):r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?te(d,n,p,2):_--)}}},te=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){te(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,de);return}if(c===K){r(s,t,n);for(let e=0;e<u.length;e++)te(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Pi){S(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.beforeEnter(s),r(s,t,n),yi(()=>l.enter(s),o);else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{s._isLeaving&&s[Un](!0),a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},B=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(He(),Jn(s,null,n,e,!0),Ue()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!Xn(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&ta(g,t,e),u&6)ae(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&Mn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,de,r):l&&!l.hasOnce&&(a!==K||d>0&&d&64)?oe(l,t,n,!1,!0):(a===K&&d&384||!i&&u&16)&&oe(c,t,n),r&&ne(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&yi(()=>{g&&ta(g,t,e),m&&Mn(e,null,t,`unmounted`)},n)},ne=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===K){ie(n,r);return}if(t===Pi){C(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},ie=(e,t)=>{let n;for(;e!==t;)n=h(e),i(e),e=n;i(t)},ae=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Oi(c),Oi(l),r&&re(r),i.stop(),a&&(a.flags|=8,B(o,e,t,n)),s&&yi(s,t),yi(()=>{e.isUnmounted=!0},t)},oe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)B(e[o],t,n,r,i)},ce=e=>{if(e.shapeFlag&6)return ce(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Vn];return n?h(n):t},le=!1,ue=(e,t,n)=>{let r;e==null?t._vnode&&(B(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,le||=(le=!0,wn(r),Tn(),!1)},de={p:v,um:B,m:te,r:ne,mt:ee,mc:D,pc:L,pbc:k,n:ce,o:e},fe,pe;return t&&([fe,pe]=t(de)),{render:ue,hydrate:fe,createApp:Hr(ue,fe)}}function Si({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ci({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ti(e,t,n=!1){let r=e.children,i=t.children;if(x(r)&&x(i))for(let t=0;t<r.length;t++){let a=r[t],o=i[t];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[t]=Qi(i[t]),o.el=a.el),!n&&o.patchFlag!==-2&&Ti(a,o)),o.type===Mi&&(o.patchFlag===-1?o.__elIndex=t+(e.type===K?1:0):o.el=a.el),o.type===Ni&&!o.el&&(o.el=a.el)}}function Ei(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Di(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Di(t)}function Oi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ki(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ki(t.subTree):null}var Ai=e=>e.__isSuspense;function ji(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):Cn(e)}var K=Symbol.for(`v-fgt`),Mi=Symbol.for(`v-txt`),Ni=Symbol.for(`v-cmt`),Pi=Symbol.for(`v-stc`),Fi=[],Ii=null;function q(e=!1){Fi.push(Ii=e?null:[])}function Li(){Fi.pop(),Ii=Fi[Fi.length-1]||null}var Ri=1;function zi(e,t=!1){Ri+=e,e<0&&Ii&&t&&(Ii.hasOnce=!0)}function Bi(e){return e.dynamicChildren=Ri>0?Ii||f:null,Li(),Ri>0&&Ii&&Ii.push(e),e}function J(e,t,n,r,i,a){return Bi(Y(e,t,n,r,i,a,!0))}function Vi(e,t,n,r,i){return Bi(X(e,t,n,r,i,!0))}function Hi(e){return e?e.__v_isVNode===!0:!1}function Ui(e,t){return e.type===t.type&&e.key===t.key}var Wi=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:E(e)||Kt(e)||T(e)?{i:On,r:e,k:t,f:!!n}:e);function Y(e,t=null,n=null,r=0,i=null,a=e===K?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Gi(t),scopeId:kn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:On};return s?($i(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=E(n)?8:16),Ri>0&&!o&&Ii&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ii.push(c),c}var X=Ki;function Ki(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===gr)&&(e=Ni),Hi(e)){let r=Ji(e,t,!0);return n&&$i(r,n),Ri>0&&!a&&Ii&&(r.shapeFlag&6?Ii[Ii.indexOf(e)]=r:Ii.push(r)),r.patchFlag=-2,r}if(Ca(e)&&(e=e.__vccOpts),t){t=qi(t);let{class:e,style:n}=t;e&&!E(e)&&(t.class=pe(e)),O(n)&&(Ht(n)&&!x(n)&&(n=_({},n)),t.style=ce(n))}let o=E(e)?1:Ai(e)?128:Hn(e)?64:O(e)?4:T(e)?2:0;return Y(e,t,n,r,i,o,a,!0)}function qi(e){return e?Ht(e)||ri(e)?_({},e):e:null}function Ji(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ea(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Wi(l),ref:t&&t.ref?n&&a?x(a)?a.concat(Gi(t)):[a,Gi(t)]:Gi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==K?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ji(e.ssContent),ssFallback:e.ssFallback&&Ji(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Wn(u,c.clone(u)),u}function Z(e=` `,t=0){return X(Mi,null,e,t)}function Yi(e,t){let n=X(Pi,null,e);return n.staticCount=t,n}function Xi(e=``,t=!1){return t?(q(),Vi(Ni,null,e)):X(Ni,null,e)}function Zi(e){return e==null||typeof e==`boolean`?X(Ni):x(e)?X(K,null,e.slice()):Hi(e)?Qi(e):X(Mi,null,String(e))}function Qi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ji(e)}function $i(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),$i(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ri(t)?t._ctx=On:r===3&&On&&(On.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else T(t)?(t={default:t,_ctx:On},n=32):(t=String(t),r&64?(n=16,t=[Z(t)]):n=8);e.children=t,e.shapeFlag|=n}function ea(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=pe([t.class,r.class]));else if(e===`style`)t.style=ce([t.style,r.style]);else if(h(e)){let n=t[e],i=r[e];i&&n!==i&&!(x(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function ta(e,t,n,r=null){ln(e,t,7,[n,r])}var na=Br(),ra=0;function ia(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||na,a={uid:ra++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new we(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:li(r,i),emitsOptions:qr(r,i),emit:null,emitted:null,propsDefaults:d,inheritAttrs:r.inheritAttrs,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Gr.bind(null,a),e.ce&&e.ce(a),a}var aa=null,oa=()=>aa||On,sa,ca;{let e=se(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};sa=t(`__VUE_INSTANCE_SETTERS__`,e=>aa=e),ca=t(`__VUE_SSR_SETTERS__`,e=>fa=e)}var la=e=>{let t=aa;return sa(e),e.scope.on(),()=>{e.scope.off(),sa(t)}},ua=()=>{aa&&aa.scope.off(),sa(null)};function da(e){return e.vnode.shapeFlag&4}var fa=!1;function pa(e,t=!1,n=!1){t&&ca(t);let{props:r,children:i}=e.vnode,a=da(e);ii(e,r,a,t),_i(e,i,n||t);let o=a?ma(e,t):void 0;return t&&ca(!1),o}function ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Cr);let{setup:r}=n;if(r){He();let n=e.setupContext=r.length>1?ba(e):null,i=la(e),a=cn(r,e,0,[e.props,n]),o=k(a);if(Ue(),i(),(o||e.sp)&&!Xn(e)&&Kn(e),o){if(a.then(ua,ua),t)return a.then(n=>{ha(e,n,t)}).catch(t=>{un(t,e,0)});e.asyncDep=a}else ha(e,a,t)}else va(e,t)}function ha(e,t,n){T(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:O(t)&&(e.setupState=Qt(t)),va(e,n)}var ga,_a;function va(e,t,n){let r=e.type;if(!e.render){if(!t&&ga&&!r.render){let t=r.template||Ar(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=ga(t,_(_({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||p,_a&&_a(e)}{let t=la(e);He();try{Er(e)}finally{Ue(),t()}}}var ya={get(e,t){return $e(e,`get`,``),e[t]}};function ba(e){return{attrs:new Proxy(e.attrs,ya),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function xa(e){return e.exposed?e.exposeProxy||=new Proxy(Qt(Ut(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xr)return xr[n](e)},has(e,t){return t in e||t in xr}}):e.proxy}function Sa(e,t=!0){return T(e)?e.displayName||e.name:e.name||t&&e.__name}function Ca(e){return T(e)&&`__vccOpts`in e}var Q=(e,t)=>en(e,t,fa);function wa(e,t,n){try{zi(-1);let r=arguments.length;return r===2?O(t)&&!x(t)?Hi(t)?X(e,null,[t]):X(e,t):X(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hi(n)&&(n=[n]),X(e,t,n))}finally{zi(1)}}var Ta=`3.5.26`,Ea=void 0,Da=typeof window<`u`&&window.trustedTypes;if(Da)try{Ea=Da.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Oa=Ea?e=>Ea.createHTML(e):e=>e,ka=`http://www.w3.org/2000/svg`,Aa=`http://www.w3.org/1998/Math/MathML`,ja=typeof document<`u`?document:null,Ma=ja&&ja.createElement(`template`),Na={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ja.createElementNS(ka,e):t===`mathml`?ja.createElementNS(Aa,e):n?ja.createElement(e,{is:n}):ja.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ja.createTextNode(e),createComment:e=>ja.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ja.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ma.innerHTML=Oa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ma.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pa=Symbol(`_vtc`);function Fa(e,t,n){let r=e[Pa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ia=Symbol(`_vod`),La=Symbol(`_vsh`),Ra=Symbol(``),za=/(?:^|;)\s*display\s*:/;function Ba(e,t,n){let r=e.style,i=E(n),a=!1;if(n&&!i){if(t)if(E(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ha(r,t,``)}else for(let e in t)n[e]??Ha(r,e,``);for(let e in n)e===`display`&&(a=!0),Ha(r,e,n[e])}else if(i){if(t!==n){let e=r[Ra];e&&(n+=`;`+e),r.cssText=n,a=za.test(n)}}else t&&e.removeAttribute(`style`);Ia in e&&(e[Ia]=a?r.display:``,e[La]&&(r.display=`none`))}var Va=/\s*!important$/;function Ha(e,t,n){if(x(n))n.forEach(n=>Ha(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ga(e,t);Va.test(n)?e.setProperty(z(r),n.replace(Va,``),`important`):e[r]=n}}var Ua=[`Webkit`,`Moz`,`ms`],Wa={};function Ga(e,t){let n=Wa[t];if(n)return n;let r=L(t);if(r!==`filter`&&r in e)return Wa[t]=r;r=te(r);for(let n=0;n<Ua.length;n++){let i=Ua[n]+r;if(i in e)return Wa[t]=i}return t}var Ka=`http://www.w3.org/1999/xlink`;function qa(e,t,n,r,i,a=he(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ka,t.slice(6,t.length)):e.setAttributeNS(Ka,t,n):n==null||a&&!ge(n)?e.removeAttribute(t):e.setAttribute(t,a?``:D(n)?String(n):n)}function Ja(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Oa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ge(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ya(e,t,n,r){e.addEventListener(t,n,r)}function Xa(e,t,n,r){e.removeEventListener(t,n,r)}var Za=Symbol(`_vei`);function Qa(e,t,n,r,i=null){let a=e[Za]||(e[Za]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=eo(t);r?Ya(e,n,a[t]=io(r,i),s):o&&(Xa(e,n,o,s),a[t]=void 0)}}var $a=/(?:Once|Passive|Capture)$/;function eo(e){let t;if($a.test(e)){t={};let n;for(;n=e.match($a);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):z(e.slice(2)),t]}var to=0,no=Promise.resolve(),ro=()=>to||=(no.then(()=>to=0),Date.now());function io(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;ln(ao(e,n.value),t,5,[e])};return n.value=e,n.attached=ro(),n}function ao(e,t){if(x(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var oo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,so=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Fa(e,r,o):t===`style`?Ba(e,n,r):h(t)?g(t)||Qa(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):co(e,t,r,o))?(Ja(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&qa(e,t,r,o,a,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!E(r))?Ja(e,L(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),qa(e,t,r,o))};function co(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&oo(t)&&T(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return oo(t)&&E(n)?!1:t in e}var lo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return x(t)?e=>re(t,e):t};function uo(e){e.target.composing=!0}function fo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var po=Symbol(`_assign`);function mo(e,t,n){return t&&(e=e.trim()),n&&(e=ae(e)),e}var ho={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[po]=lo(i);let a=r||i.props&&i.props.type===`number`;Ya(e,t?`change`:`input`,t=>{t.target.composing||e[po](mo(e.value,n,a))}),(n||a)&&Ya(e,`change`,()=>{e.value=mo(e.value,n,a)}),t||(Ya(e,`compositionstart`,uo),Ya(e,`compositionend`,fo),Ya(e,`change`,fo))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[po]=lo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?ae(e.value):e.value,c=t??``;s!==c&&(document.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c))}},go={deep:!0,created(e,t,n){e[po]=lo(n),Ya(e,`change`,()=>{let t=e._modelValue,n=yo(e),r=e.checked,i=e[po];if(x(t)){let e=ye(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(C(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(bo(e,r))})},mounted:_o,beforeUpdate(e,t,n){e[po]=lo(n),_o(e,t,n)}};function _o(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(x(t))i=ye(t,r.props.value)>-1;else if(C(t))i=t.has(r.props.value);else{if(t===n)return;i=ve(t,bo(e,!0))}e.checked!==i&&(e.checked=i)}var vo={created(e,{value:t},n){e.checked=ve(t,n.props.value),e[po]=lo(n),Ya(e,`change`,()=>{e[po](yo(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[po]=lo(r),t!==n&&(e.checked=ve(t,r.props.value))}};function yo(e){return`_value`in e?e._value:e.value}function bo(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var xo=[`ctrl`,`shift`,`alt`,`meta`],So={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>xo.some(n=>e[`${n}Key`]&&!t.includes(n))},Co=(e,t)=>{let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=So[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},wo=_({patchProp:so},Na),To;function Eo(){return To||=bi(wo)}var Do=((...e)=>{let t=Eo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ko(e);if(!r)return;let i=t._component;!T(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Oo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Oo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ko(e){return E(e)?document.querySelector(e):e}var Ao=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},jo={},Mo={class:`header`},No={class:`nav`};function Po(e,t){let n=hr(`RouterLink`);return q(),J(`header`,Mo,[Y(`nav`,No,[Y(`ul`,null,[Y(`li`,null,[X(n,{to:`/common`},{default:jn(()=>[...t[0]||=[Z(`Common`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/menu`},{default:jn(()=>[...t[1]||=[Z(`Menu`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/fontSize`},{default:jn(()=>[...t[2]||=[Z(`FontSize`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/fontsFace`},{default:jn(()=>[...t[3]||=[Z(`FontFace`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/gtagName`},{default:jn(()=>[...t[4]||=[Z(`Gtag`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/ftFixed`},{default:jn(()=>[...t[5]||=[Z(`ftFixed`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/layout`},{default:jn(()=>[...t[6]||=[Z(`Layout`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/askforGsap`},{default:jn(()=>[...t[7]||=[Z(`AskForGsap`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/commonGsap`},{default:jn(()=>[...t[8]||=[Z(`Common Gsap`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/convert`},{default:jn(()=>[...t[9]||=[Z(`Convert HTML`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/list-modal`},{default:jn(()=>[...t[10]||=[Z(`List Modal (Menu List)`,-1)]]),_:1})]),Y(`li`,null,[X(n,{to:`/wordpress`},{default:jn(()=>[...t[11]||=[Z(`Wordpress`,-1)]]),_:1})])])])])}var Fo=Ao(jo,[[`render`,Po]]),Io={class:`main-content`},Lo={__name:`App`,setup(e){return(e,t)=>{let n=hr(`RouterView`);return q(),J(K,null,[X(Fo),Y(`main`,Io,[X(n)])],64)}}},Ro=typeof document<`u`;function zo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Bo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&zo(e.default)}var $=Object.assign;function Vo(e,t){let n={};for(let r in t){let i=t[r];n[r]=Uo(i)?i.map(e):e(i)}return n}var Ho=()=>{},Uo=Array.isArray;function Wo(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Go=/#/g,Ko=/&/g,qo=/\//g,Jo=/=/g,Yo=/\?/g,Xo=/\+/g,Zo=/%5B/g,Qo=/%5D/g,$o=/%5E/g,es=/%60/g,ts=/%7B/g,ns=/%7C/g,rs=/%7D/g,is=/%20/g;function as(e){return e==null?``:encodeURI(``+e).replace(ns,`|`).replace(Zo,`[`).replace(Qo,`]`)}function os(e){return as(e).replace(ts,`{`).replace(rs,`}`).replace($o,`^`)}function ss(e){return as(e).replace(Xo,`%2B`).replace(is,`+`).replace(Go,`%23`).replace(Ko,`%26`).replace(es,"`").replace(ts,`{`).replace(rs,`}`).replace($o,`^`)}function cs(e){return ss(e).replace(Jo,`%3D`)}function ls(e){return as(e).replace(Go,`%23`).replace(Yo,`%3F`)}function us(e){return ls(e).replace(qo,`%2F`)}function ds(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var fs=/\/$/,ps=e=>e.replace(fs,``);function ms(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Ss(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ds(o)}}function hs(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function gs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function _s(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&vs(t.matched[r],n.matched[i])&&ys(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function vs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ys(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!bs(e[n],t[n]))return!1;return!0}function bs(e,t){return Uo(e)?xs(e,t):Uo(t)?xs(t,e):e?.valueOf()===t?.valueOf()}function xs(e,t){return Uo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Ss(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Cs={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},ws=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Ts=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Es(e){if(!e)if(Ro){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),ps(e)}var Ds=/^[^#]+#/;function Os(e,t){return e.replace(Ds,`#`)+t}function ks(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var As=()=>({left:window.scrollX,top:window.scrollY});function js(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=ks(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Ms(e,t){return(history.state?history.state.position-t:-1)+e}var Ns=new Map;function Ps(e,t){Ns.set(e,t)}function Fs(e){let t=Ns.get(e);return Ns.delete(e),t}function Is(e){return typeof e==`string`||e&&typeof e==`object`}function Ls(e){return typeof e==`string`||typeof e==`symbol`}var Rs=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),zs=Symbol(``);Rs.MATCHER_NOT_FOUND,Rs.NAVIGATION_GUARD_REDIRECT,Rs.NAVIGATION_ABORTED,Rs.NAVIGATION_CANCELLED,Rs.NAVIGATION_DUPLICATED;function Bs(e,t){return $(Error(),{type:e,[zs]:!0},t)}function Vs(e,t){return e instanceof Error&&zs in e&&(t==null||!!(e.type&t))}function Hs(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Xo,` `),i=r.indexOf(`=`),a=ds(i<0?r:r.slice(0,i)),o=i<0?null:ds(r.slice(i+1));if(a in t){let e=t[a];Uo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Us(e){let t=``;for(let n in e){let r=e[n];if(n=cs(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Uo(r)?r.map(e=>e&&ss(e)):[r&&ss(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Ws(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Uo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Gs=Symbol(``),Ks=Symbol(``),qs=Symbol(``),Js=Symbol(``),Ys=Symbol(``);function Xs(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Zs(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Bs(Rs.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Is(e)?c(Bs(Rs.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Qs(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(zo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Zs(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Bo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Zs(c,n,r,o,e,i)()}))}}return a}function $s(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>vs(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>vs(e,s))||i.push(s))}return[n,r,i]}var ec=()=>location.protocol+`//`+location.host;function tc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),gs(n,``)}return gs(n,e)+r+i}function nc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=tc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:ws.pop,direction:u?u>0?Ts.forward:Ts.back:Ts.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState($({},e.state,{scroll:As()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function rc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?As():null}}function ic(e){let{history:t,location:n}=window,r={value:tc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:ec()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,$({},t.state,rc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=$({},i.value,t.state,{forward:e,scroll:As()});a(o.current,o,!0),a(e,$({},rc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function ac(e){e=Es(e);let t=ic(e),n=nc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=$({location:``,base:e,go:r,createHref:Os.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}function oc(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),ac(e)}var sc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),cc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(cc||{}),lc={type:sc.Static,value:``},uc=/[a-zA-Z0-9_]/;function dc(e){if(!e)return[[]];if(e===`/`)return[[lc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=cc.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===cc.Static?a.push({type:sc.Static,value:l}):n===cc.Param||n===cc.ParamRegExp||n===cc.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:sc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==cc.ParamRegExp){r=n,n=cc.EscapeNext;continue}switch(n){case cc.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=cc.Param):f();break;case cc.EscapeNext:f(),n=r;break;case cc.Param:c===`(`?n=cc.ParamRegExp:uc.test(c)?f():(d(),n=cc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case cc.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=cc.ParamRegExpEnd:u+=c;break;case cc.ParamRegExpEnd:d(),n=cc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===cc.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var fc=`[^/]+?`,pc={sensitive:!1,strict:!1,start:!0,end:!0},mc=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(mc||{}),hc=/[.+*?^${}()[\]/\\]/g;function gc(e,t){let n=$({},pc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[mc.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=mc.Segment+(n.sensitive?mc.BonusCaseSensitive:0);if(o.type===sc.Static)r||(i+=`/`),i+=o.value.replace(hc,`\\$&`),s+=mc.Static;else if(o.type===sc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||fc;if(u!==fc){s+=mc.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=mc.Dynamic,c&&(s+=mc.BonusOptional),n&&(s+=mc.BonusRepeatable),u===`.*`&&(s+=mc.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=mc.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===sc.Static)n+=e.value;else if(e.type===sc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Uo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Uo(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function _c(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===mc.Static+mc.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===mc.Static+mc.Segment?1:-1:0}function vc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=_c(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(yc(r))return 1;if(yc(i))return-1}return i.length-r.length}function yc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var bc={strict:!1,end:!0,sensitive:!1};function xc(e,t,n){let r=$(gc(dc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Sc(e,t){let n=[],r=new Map;t=Wo(bc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=wc(e);s.aliasOf=r&&r.record;let l=Wo(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(wc($({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=xc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Ec(d)&&o(e.name)),Ac(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Ho}function o(e){if(Ls(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Oc(e,n);n.splice(t,0,e),e.record.name&&!Ec(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Bs(Rs.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=$(Cc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Cc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Bs(Rs.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=$({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Dc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Cc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function wc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Tc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function Tc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Ec(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dc(e){return e.reduce((e,t)=>$(e,t.meta),{})}function Oc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;vc(e,t[i])<0?r=i:n=i+1}let i=kc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function kc(e){let t=e;for(;t=t.parent;)if(Ac(t)&&vc(e,t)===0)return t}function Ac({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function jc(e){let t=Pn(qs),n=Pn(Js),r=Q(()=>{let n=Xt(e.to);return t.resolve(n)}),i=Q(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(vs.bind(null,i));if(o>-1)return o;let s=Ic(e[t-2]);return t>1&&Ic(i)===s&&a[a.length-1].path!==s?a.findIndex(vs.bind(null,e[t-2])):o}),a=Q(()=>i.value>-1&&Fc(n.params,r.value.params)),o=Q(()=>i.value>-1&&i.value===n.matched.length-1&&ys(n.params,r.value.params));function s(n={}){if(Pc(n)){let n=t[Xt(e.replace)?`replace`:`push`](Xt(e.to)).catch(Ho);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Q(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Mc(e){return e.length===1?e[0]:e}var Nc=Gn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:jc,setup(e,{slots:t}){let n=Ft(jc(e)),{options:r}=Pn(qs),i=Q(()=>({[Lc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Lc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Mc(t.default(n));return e.custom?r:wa(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Pc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Fc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Uo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Ic(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Lc=(e,t,n)=>e??t??n,Rc=Gn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Pn(Ys),i=Q(()=>e.route||r.value),a=Pn(Ks,0),o=Q(()=>{let e=Xt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Q(()=>i.value.matched[o.value]);Nn(Ks,Q(()=>o.value+1)),Nn(Gs,s),Nn(Ys,i);let c=W();return Ln(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!vs(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return zc(n.default,{Component:l,route:r});let u=o.props[a],d=wa(l,$({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return zc(n.default,{Component:d,route:r})||d}}});function zc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Bc=Rc;function Vc(e){let t=Sc(e.routes,e),n=e.parseQuery||Hs,r=e.stringifyQuery||Us,i=e.history,a=Xs(),o=Xs(),s=Xs(),c=qt(Cs),l=Cs;Ro&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Vo.bind(null,e=>``+e),d=Vo.bind(null,us),f=Vo.bind(null,ds);function p(e,n){let r,i;return Ls(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=$({},a||c.value),typeof e==`string`){let r=ms(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return $(r,o,{params:f(o.params),hash:ds(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=$({},e,{path:ms(n,e.path,a.path).path});else{let t=$({},e.params);for(let e in t)t[e]??delete t[e];o=$({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=hs(r,$({},e,{hash:os(l),path:s.path})),m=i.createHref(p);return $({fullPath:p,hash:l,query:r===Us?Ws(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ms(n,e,c.value.path):$({},e)}function y(e,t){if(l!==e)return Bs(Rs.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b($(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),$({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C($(v(u),{state:typeof u==`object`?$({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&_s(r,i,n)&&(f=Bs(Rs.NAVIGATION_DUPLICATED,{to:d,from:i}),I(i,i,!0,!1)),(f?Promise.resolve(f):E(d,i)).catch(e=>Vs(e)?Vs(e,Rs.NAVIGATION_GUARD_REDIRECT)?e:F(e):N(e,d,i)).then(e=>{if(e){if(Vs(e,Rs.NAVIGATION_GUARD_REDIRECT))return C($({replace:s},v(e.to),{state:typeof e.to==`object`?$({},a,e.to.state):a,force:o}),t||d)}else e=O(d,i,!0,s,a);return D(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=z.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function E(e,t){let n,[r,i,s]=$s(e,t);n=Qs(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Zs(r,e,t))});let c=w.bind(null,e,t);return n.push(c),B(n).then(()=>{n=[];for(let r of a.list())n.push(Zs(r,e,t));return n.push(c),B(n)}).then(()=>{n=Qs(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Zs(r,e,t))});return n.push(c),B(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Uo(r.beforeEnter))for(let i of r.beforeEnter)n.push(Zs(i,e,t));else n.push(Zs(r.beforeEnter,e,t));return n.push(c),B(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Qs(s,`beforeRouteEnter`,e,t,T),n.push(c),B(n))).then(()=>{n=[];for(let r of o.list())n.push(Zs(r,e,t));return n.push(c),B(n)}).catch(e=>Vs(e,Rs.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function D(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function O(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Cs,l=Ro?history.state:{};n&&(r||s?i.replace(e.fullPath,$({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,I(e,t,n,s),F()}let k;function A(){k||=i.listen((e,t,n)=>{if(!te.listening)return;let r=_(e),a=S(r,te.currentRoute.value);if(a){C($(a,{replace:!0,force:!0}),r).catch(Ho);return}l=r;let o=c.value;Ro&&Ps(Ms(o.fullPath,n.delta),As()),E(r,o).catch(e=>Vs(e,Rs.NAVIGATION_ABORTED|Rs.NAVIGATION_CANCELLED)?e:Vs(e,Rs.NAVIGATION_GUARD_REDIRECT)?(C($(v(e.to),{force:!0}),r).then(e=>{Vs(e,Rs.NAVIGATION_ABORTED|Rs.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===ws.pop&&i.go(-1,!1)}).catch(Ho),Promise.reject()):(n.delta&&i.go(-n.delta,!1),N(e,r,o))).then(e=>{e||=O(r,o,!1),e&&(n.delta&&!Vs(e,Rs.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===ws.pop&&Vs(e,Rs.NAVIGATION_ABORTED|Rs.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),D(r,o,e)}).catch(Ho)})}let j=Xs(),M=Xs(),ee;function N(e,t,n){F(e);let r=M.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function P(){return ee&&c.value!==Cs?Promise.resolve():new Promise((e,t)=>{j.add([e,t])})}function F(e){return ee||(ee=!e,A(),j.list().forEach(([t,n])=>e?n(e):t()),j.reset()),e}function I(t,n,r,i){let{scrollBehavior:a}=e;if(!Ro||!a)return Promise.resolve();let o=!r&&Fs(Ms(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return yn().then(()=>a(t,n,o)).then(e=>e&&js(e)).catch(e=>N(e,t,n))}let L=e=>i.go(e),R,z=new Set,te={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:L,back:()=>L(-1),forward:()=>L(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:M.add,isReady:P,install(e){e.component(`RouterLink`,Nc),e.component(`RouterView`,Bc),e.config.globalProperties.$router=te,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>Xt(c)}),Ro&&!R&&c.value===Cs&&(R=!0,b(i.location).catch(e=>{}));let t={};for(let e in Cs)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(qs,te),e.provide(Js,It(t)),e.provide(Ys,c);let n=e.unmount;z.add(e),e.unmount=function(){z.delete(e),z.size<1&&(l=Cs,k&&k(),k=null,c.value=Cs,R=!1,ee=!1),n()}}};function B(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return te}var Hc={class:`menu-top`},Uc={class:`input-column`},Wc={class:`output-column`},Gc={__name:`NavHeader`,setup(e){let t=W(``),n=W(!0),r=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},i=Q(()=>{let e=r();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<nav class="nav__header">
  <ul class="nav__headerList">
`;return e.forEach((e,r)=>{let i=[];r===0&&i.push(`active`),n.value&&i.push(`txt-vertical`);let a=i.length?` class="${i.join(` `)}"`:``;t+=`      <li><a href="${e.link}"${a}>${e.label}</a></li>\n`}),t+=`  </ul>
</nav>`,t}),a=Q(()=>{let e=n.value,t=` .nav__header {
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
}`,t}),o=W(`Copy HTML`),s=W(`Copy SCSS`),c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Đã copy ✅`,setTimeout(()=>o.value=`Copy HTML`,2e3)})},l=()=>{navigator.clipboard.writeText(a.value).then(()=>{s.value=`Đã copy ✅`,setTimeout(()=>s.value=`Copy SCSS`,2e3)})};return(e,r)=>(q(),J(`div`,Hc,[Y(`div`,Uc,[r[3]||=Y(`h2`,null,`Nav Header`,-1),G(Y(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html\r
\r
`,class:`content-box`},null,512),[[ho,t.value]]),Y(`label`,null,[G(Y(`input`,{type:`checkbox`,"onUpdate:modelValue":r[1]||=e=>n.value=e},null,512),[[go,n.value]]),r[2]||=Z(`txt-vertical `,-1)])]),Y(`div`,Wc,[r[4]||=Y(`h2`,null,`Code HTML`,-1),Y(`button`,{onClick:c},V(o.value),1),Y(`pre`,null,[Y(`code`,{ref:`htmlCode`,class:`language-html`},V(i.value),513)]),r[5]||=Y(`h2`,null,`Code SCSS`,-1),Y(`button`,{onClick:l},V(s.value),1),Y(`pre`,null,[Y(`code`,{ref:`scssCode`,class:`language-css`},V(a.value),513)])])]))}},Kc={class:`nav-fixed`},qc={class:`input-column`},Jc={class:`output-column`},Yc={__name:`NavFixed`,setup(e){let t=W(``),n=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},r=Q(()=>{let e=n();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<div id="nav-fixed" class="pc">
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
`,t+=`</div>`,t}),i=Q(()=>`.nav-fixed__ham {
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
}`),a=W(`Copy HTML`),o=W(`Copy SCSS`),s=()=>{navigator.clipboard.writeText(r.value).then(()=>{a.value=`Copy ✅`,setTimeout(()=>a.value=`Copy HTML`,2e3)})},c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Copied ✅`,setTimeout(()=>o.value=`Copy SCSS`,2e3)})};return(e,n)=>(q(),J(`div`,Kc,[Y(`div`,qc,[n[1]||=Y(`h2`,null,`Nav Fixed`,-1),G(Y(`textarea`,{"onUpdate:modelValue":n[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html\r
\r
`,class:`content-box`},null,512),[[ho,t.value]])]),Y(`div`,Jc,[n[2]||=Y(`h2`,null,`Code HTML`,-1),Y(`button`,{onClick:s},V(a.value),1),Y(`pre`,null,[Y(`code`,{ref:`htmlCode`,class:`language-html`},V(r.value),513)]),n[3]||=Y(`h2`,null,`Code SCSS`,-1),Y(`button`,{onClick:c},V(o.value),1),Y(`pre`,null,[Y(`code`,{ref:`scssCode`,class:`language-css`},V(i.value),513)])])]))}},Xc={class:`nav-footer`},Zc={class:`input-column`},Qc={class:`output-column`},$c={__name:`NavFooter`,setup(e){let t=W(``),n=W(!1),r=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},i=Q(()=>{let e=r();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<div class="nav__footer sp">
`;return t+=`  <nav class="nav__footerList">
`,t+=`    <ul>
`,e.forEach((e,r)=>{let i=[];r===0&&i.push(`active`),n.value&&i.push(`txt-vertical`);let a=i.length?` class="${i.join(` `)}"`:``;t+=`      <li><a href="${e.link}"${a}>${e.label}</a></li>\n`}),t+=`    </ul>
`,t+=`  </nav>
`,t+=`</div>`,t}),a=Q(()=>{let e=n.value,t=`.nav__footer {
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
}`,t}),o=W(`Copy HTML`),s=W(`Copy SCSS`),c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Copy ✅`,setTimeout(()=>o.value=`Copy HTML`,2e3)})},l=()=>{navigator.clipboard.writeText(a.value).then(()=>{s.value=`Copied ✅`,setTimeout(()=>s.value=`Copy SCSS`,2e3)})};return(e,r)=>(q(),J(`div`,Xc,[Y(`div`,Zc,[r[3]||=Y(`h2`,null,`Nav Footer`,-1),G(Y(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html`,class:`content-box`},null,512),[[ho,t.value]]),Y(`label`,null,[G(Y(`input`,{type:`checkbox`,"onUpdate:modelValue":r[1]||=e=>n.value=e},null,512),[[go,n.value]]),r[2]||=Z(` txt-vertical `,-1)])]),Y(`div`,Qc,[r[4]||=Y(`h2`,null,`Code HTML`,-1),Y(`button`,{onClick:c},V(o.value),1),Y(`pre`,null,[Y(`code`,{ref:`htmlCode`,class:`language-html`},V(i.value),513)]),r[5]||=Y(`h2`,null,`Code SCSS`,-1),Y(`button`,{onClick:l},V(s.value),1),Y(`pre`,null,[Y(`code`,{ref:`scssCode`,class:`language-css`},V(a.value),513)])])]))}},el={class:`menu-smartphone`},tl={class:`input-column`},nl={class:`output-column`},rl={__name:`NavToggle`,setup(e){let t=W(``),n=W(!1),r=()=>{let e=t.value.split(`
`).map(e=>e.trim()).filter(e=>e),n=[];for(let t=0;t<e.length;t+=2)e[t+1]&&n.push({label:e[t],link:e[t+1]});return n},i=Q(()=>{let e=r();if(e.length===0)return`<!-- Chưa có dữ liệu -->`;let t=`<div id="menu_toggle" class="menu_toggle">
`;return t+=`  <div class="inner">
`,t+=`    <ul class="nav__toggle">
`,e.forEach((e,r)=>{let i=[];r===0&&i.push(`active`),n.value&&i.push(`txt-vertical`);let a=i.length?` class="${i.join(` `)}"`:``;t+=`      <li><a href="${e.link}"${a}>${e.label}</a></li>\n`}),t+=`    </ul>
`,t+=`  </div>
`,t+=`</div>`,t}),a=Q(()=>{let e=n.value,t=`.nav__toggle {
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
}`,t}),o=W(`Copy HTML`),s=W(`Copy SCSS`),c=()=>{navigator.clipboard.writeText(i.value).then(()=>{o.value=`Copy ✅`,setTimeout(()=>o.value=`Copy HTML`,2e3)})},l=()=>{navigator.clipboard.writeText(a.value).then(()=>{s.value=`Copied ✅`,setTimeout(()=>s.value=`Copy SCSS`,2e3)})};return(e,r)=>(q(),J(`div`,el,[Y(`div`,tl,[r[3]||=Y(`h2`,null,`Menu Smartphone`,-1),G(Y(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`HOME\r
index.html\r
\r
COURSE\r
course.html`,class:`content-box`},null,512),[[ho,t.value]]),Y(`label`,null,[G(Y(`input`,{type:`checkbox`,"onUpdate:modelValue":r[1]||=e=>n.value=e},null,512),[[go,n.value]]),r[2]||=Z(` txt-vertical `,-1)])]),Y(`div`,nl,[r[4]||=Y(`h2`,null,`Code HTML`,-1),Y(`button`,{onClick:c},V(o.value),1),Y(`pre`,null,[Y(`code`,{ref:`htmlCode`,class:`language-html`},V(i.value),513)]),r[5]||=Y(`h2`,null,`Code SCSS`,-1),Y(`button`,{onClick:l},V(s.value),1),Y(`pre`,null,[Y(`code`,{ref:`scssCode`,class:`language-css`},V(a.value),513)])])]))}},il={__name:`Menu`,setup(e){return(e,t)=>(q(),J(K,null,[X(Gc),X(Yc),X($c),X(rl)],64))}},al={class:`layout-container`},ol={class:`layout-row layout-blue`},sl={class:`col col-input`},cl={class:`input-group`},ll={class:`col col-preview`},ul={class:`preview-wrapper`},dl={class:`tel__contact`},fl={class:`tel__num`},pl={href:`#`},ml={class:`tel__des`},hl={class:`col col-actions`},gl={class:`btn-stack`},_l={class:`mini-code`},vl={class:`layout-row layout-green`},yl={class:`col-code`},bl={class:`code-box`},xl={class:`code-header`},Sl={class:`code-box`},Cl={class:`code-header`},wl={class:`layout-row row-orange`},Tl={class:`col-code`},El={class:`code-box`},Dl={class:`code-header`},Ol={class:`code-box`},kl={class:`code-header`},Al={class:`layout-row`},jl={class:`column column-code`},Ml={class:`column-header`},Nl={class:`column column-code`},Pl={class:`column-header`},Fl={class:`layout-row`},Il={class:`column column-code`},Ll={class:`column-header`},Rl={class:`column column-code`},zl={class:`column-header`},Bl={class:`layout-row`},Vl={class:`column column-code`},Hl={class:`column-header`},Ul={class:`column column-code`},Wl={class:`column-header`},Gl={class:`layout-row`},Kl={class:`column column-code`},ql={class:`column-header`},Jl={class:`column column-code`},Yl={class:`column-header`},Xl={class:`layout-row`},Zl={class:`column column-code`},Ql={class:`column-header`},$l={class:`column column-code`},eu={class:`column-header`},tu=`.tel__contact {
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
}`,nu=`<p class="btn-copy">
  <a class="copy" data-copy="" data-replace-text="コピーしました" data-replace-image="" onClick="gtag('event','copy_url');">
    <span>URLをコピーして共有</span>
  </a>
</p>`,ru=`.btn-copy {
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
}`,iu=`<p class="cookie"><a href="https://www.foodconnection.jp/cookie/cookie_share.html" target="_blank" rel="nofollow">Cookie情報等の取り扱いについて</a></p>`,au=`.cookie {
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
}`,ou=Ao({__name:`Common`,setup(e){let t=W(``),n=W(``),r=W(``),i=W(!1),a=W(!1),o=Q(()=>{let e=t.value.trim()?`  <dt>${t.value.trim()}</dt>\n`:``,i=``;n.value.trim()&&(i=`  <dd class="tel__num"><a class="telhref" onClick="gtag('event','header_phone',{event_category:'Phone Call',transport_type:'beacon'});" href="tel:${n.value.replace(/-/g,``)}">${n.value.trim()}</a></dd>\n`);let a=r.value.trim()?`  <dd class="tel__des">${r.value.trim()}</dd>\n`:``;return!e&&!i&&!a?`<!-- No content to generate -->`:`<dl class="tel__contact">\n${e}${i}${a}</dl>`}),s=(e,t)=>{navigator.clipboard.writeText(e).then(()=>{t===`html`&&(i.value=!0,setTimeout(()=>i.value=!1,1500)),t===`scss`&&(a.value=!0,setTimeout(()=>a.value=!1,1500)),t===`html2`&&(c.value=!0,setTimeout(()=>c.value=!1,1500)),t===`scss2`&&(l.value=!0,setTimeout(()=>l.value=!1,1500)),t===`html3`&&(u.value=!0,setTimeout(()=>u.value=!1,1500)),t===`scss3`&&(d.value=!0,setTimeout(()=>d.value=!1,1500)),t===`html4`&&(htmlCopied4.value=!0,setTimeout(()=>htmlCopied4.value=!1,1500)),t===`scss4`&&(scssCopied4.value=!0,setTimeout(()=>scssCopied4.value=!1,1500))})},c=W(!1),l=W(!1),u=W(!1),d=W(!1),f=e=>{let t=e.currentTarget,n=t.closest(`.column`).querySelector(`.code-content code`);if(n){let e=n.innerText;navigator.clipboard.writeText(e).then(()=>{let e=t.innerText;t.innerText=`Copied!`,setTimeout(()=>{t.innerText=e},2e3)}).catch(e=>{console.error(`Lỗi khi copy:`,e)})}};return(e,p)=>(q(),J(`div`,al,[Y(`div`,ol,[Y(`div`,sl,[p[19]||=Y(`span`,{class:`badge`},`LAYOUT #1`,-1),Y(`div`,cl,[G(Y(`input`,{"onUpdate:modelValue":p[0]||=e=>t.value=e,type:`text`,placeholder:`Title`},null,512),[[ho,t.value]]),G(Y(`input`,{"onUpdate:modelValue":p[1]||=e=>n.value=e,type:`text`,placeholder:`Number`},null,512),[[ho,n.value]]),G(Y(`textarea`,{"onUpdate:modelValue":p[2]||=e=>r.value=e,placeholder:`Description`},null,512),[[ho,r.value]])])]),Y(`div`,ll,[Y(`div`,ul,[Y(`dl`,dl,[Y(`dt`,null,V(t.value),1),Y(`dd`,fl,[Y(`a`,pl,V(n.value),1)]),Y(`dd`,ml,V(r.value),1)])])]),Y(`div`,hl,[Y(`div`,gl,[Y(`button`,{onClick:p[3]||=e=>s(o.value,`html`),class:pe({"btn-done":i.value})},V(i.value?`✅ HTML`:`Copy HTML`),3),Y(`button`,{onClick:p[4]||=e=>s(tu,`scss`),class:pe({"btn-done":a.value})},V(a.value?`✅ SCSS`:`Copy SCSS`),3)]),Y(`pre`,_l,[Y(`code`,null,V(o.value),1)])])]),Y(`div`,vl,[p[22]||=Y(`div`,{class:`col-input`},[Y(`div`,{class:`layout-label`},`LAYOUT #2: URL COPY BUTTON`)],-1),Y(`div`,yl,[Y(`div`,bl,[Y(`div`,xl,[p[20]||=Y(`span`,null,`HTML`,-1),Y(`button`,{onClick:p[5]||=e=>s(nu,`html2`),class:pe({active:c.value})},V(c.value?`Copied!`:`Copy`),3)]),Y(`pre`,null,[Y(`code`,null,V(nu))])]),Y(`div`,Sl,[Y(`div`,Cl,[p[21]||=Y(`span`,null,`SCSS`,-1),Y(`button`,{onClick:p[6]||=e=>s(ru,`scss2`),class:pe({active:l.value})},V(l.value?`Copied!`:`Copy`),3)]),Y(`pre`,null,[Y(`code`,null,V(ru))])])])]),Y(`div`,wl,[p[25]||=Y(`div`,{class:`col-info`},[Y(`div`,{class:`layout-label`},`LAYOUT #3: COOKIE POLICY`),Y(`p`,{class:`info-text`},`Cookie情報の取り扱いページへの外部リンク。共通パーツとして使用。`)],-1),Y(`div`,Tl,[Y(`div`,El,[Y(`div`,Dl,[p[23]||=Y(`span`,null,`HTML`,-1),Y(`button`,{onClick:p[7]||=e=>s(iu,`html3`),class:pe({active:u.value})},V(u.value?`Copied!`:`Copy`),3)]),Y(`pre`,null,[Y(`code`,null,V(iu))])]),Y(`div`,Ol,[Y(`div`,kl,[p[24]||=Y(`span`,null,`SCSS`,-1),Y(`button`,{onClick:p[8]||=e=>s(au,`scss3`),class:pe({active:d.value})},V(d.value?`Copied!`:`Copy`),3)]),Y(`pre`,null,[Y(`code`,null,V(au))])])])]),p[51]||=Yi(`<div class="layout-row row-orange" data-v-fdde712a><div class="col-info" data-v-fdde712a><div class="layout-label" data-v-fdde712a>BLOG FCJ</div><pre data-v-fdde712a><code data-v-fdde712a>  
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
</code></pre></div></div>`,3),Y(`div`,Al,[p[30]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Button 01`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/01-Cg20sCrB.jpg`,alt:`Hình ảnh preview`})])],-1),Y(`div`,jl,[Y(`div`,Ml,[p[26]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:p[9]||=e=>f(e)},`Copy`)]),p[27]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<p class="bnr__web"><a class="hvr-radial" href="###"><span>WEB予約はこちら</span></a></p>`)],-1)]),Y(`div`,Nl,[Y(`div`,Pl,[p[28]||=Y(`span`,null,`SCSS`,-1),Y(`button`,{class:`copy-button`,onClick:p[10]||=e=>f(e)},`Copy`)]),p[29]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`.bnr__web {
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
}`)],-1)])]),Y(`div`,Fl,[p[35]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Button 02`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABBAOkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5coooqCwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK6XwP4LbxnfXEP2n7JFCgZpQgc5JwBt3Dtnn2969Vk/ZT1PUrfXx4fubjVLixntjY7o4dt/BKB5hzFLIsbxZDMpY/Lk/KVxVcr0JujwWiu9+Nnwz/4VT46uNGhluLmwMazWl1ciMPNGcjfhHbA3K2A21sYyorP8VfDi98K+EfCviSTUNPv9N8RRTPa/ZHk8yJonCSJIropBDHGV3KcHDGoUk1dFtNOzOSoorZ8G+F7vxp4q0rQ7GC5ubm/uEgWO0hEsuCfmZVLKDgZPLKOOSBzVxi5NJEtqKuzGorf8feFY/A/jPWNBi1Wz1yPT7hoF1DT33QzY7qf0PXBB5PWpv+EA1OTwFB4ugMNzpkmpHSnjiLGaKfy/MUMpUAhlyQVJ+6c44zCkpR5lsNrlfK9zmqK7b/hUur3Hw6tPGWnz2+r2M11NaS2djHO9zatFGJJGlUxBQgRlJZWYDcM965XSNLm1vU7awt3t457h9iNdXCQRgnpukchVHuxAqrPm5eounN0KdFela9+zj8RfDPhW88S6l4baDQ7TBlvVu7eRBkgDG2Qluo+6D1rh9D8N6r4nuJrfSNPuNTuIYWuHhtYzI4jXG5to5IGcnHQZPQGl1sPzM2ivXvFn7M/ivRdJs9a0u0utU0GXRU1q41C6tvsMdmp3ZhkaRthlG3IRXZiGXA5xXkNGza6oN0pLZ/8ADhRXp3g/4A+I/GvgHWPE9pDNZw6bbyX2L+0lhgu7dBlmguCvlu4Ib5CR04JPFeY03o+V7gtVzLYKKKKQE8Nq86llKgZxzT/7Pk/vL+Z/wqfT/wDUt/vf0FWuWwAMk9AOa+Ex2cYqhiZ0oNWT7H0uHwFCpSjOW7M7+z5P7y/mf8KRrGRFLErgDPU1tX+n3WlXT217bTWdyn3oZ4yjr9QRkVUn/wBTJ/un+Vc1PO8ZKpGMmtWuhrLLsOotq/3mPRRRX6IfKhRRRQAUUUUAFFFFAHp/wH0kXmqeJtRkuUtrfR9Gk1CYurHcizQoQMAnPz5/CvofQ9M06x/ai1JL/UvDt1q5srl2886s14qtpTHAJ3RFdpydzM2M452gfJfg34ga/wDD6bU5vD2oy6Xc6hZtYzXEB2yiIujkI3VTlF+YYPWrsfxY8Ur46n8ZS6mbnxHNFJDJezRIxZXgMByuNufLOOnvTk7qy/la+bv+G34hHR38/wANP+CWfitJo9xqml3Gj6h4fvEaxjjnh8O2F1aQwyJlcMLhQzsRjMg+91POSdb4oST/APCsfhHCQ32RdGvHQ4+UyNqNyHwcdcLHn8PWvMa9A8E/Hzx/8OtDOj+HvEtxp+neY0qQeXHJ5TsPmaMupMZPfYR60acri+9/z0/H8BqVtLdLfl/kYHinwLq3gu00qTWYlsbrUYmuI9PlytzFFkBJJEI+QPyVzyQucAFSfRfgfNaa74Z1/wAHaRqUfhnx3rbrFZ6pcMFjvrfbhtOEvW3aRsHd0kwEYgHnyTVtWvte1K41DUry41C/uHMk11dStJLIx6szMSSfc1WjkeGRXRmR1O5WU4II6EGhWaals/6/ro+1tCdmmt1/X9du99S1rGkXvh/VbvTNStZbK/tJWgnt5l2vG6nDKR6givfLfwlfXH7OXw9u9Gu7qC/udcmTTobOYRNNq8lwqIzOSNojgtxg5GGmU5xmvEfGXjLWPiB4iute1+9OoavdBPPumjRDJsRUUkKAM7VAzjJxk5NOt/G2u2fh+30ODVLiHS7a/GqQQRtt8q6ChRKjD5lbAHQ9geopRukrvXT81f8A4HnYJb3Xn+T/AK9Ln1T4qtPip44/Z4kGneNY/F13bazdrqMPhu/Mfm2v2WMvG8YWP7SVIZiED8PnkE4+Yfh74FufiJrV1pNjKRqC2Nxd21skZkkupIoy4hRQQSzBTjGTx0PSpfEPxZ8a+LLmxuNY8V6xqM9iGFrJcXsjNDuGGKnPBYcE9T3zXM2d5caddw3VpPJa3MLiSKaFyjowOQysOQR6ikl70m9n+Glr/rb77jbfLGK6f53/AOBc6rULHx14+1Aw3Gn63rVzp8flC1jtJXFnGozsWNVxEoBB2gADPSsHw3eXtjr1hLp+pvo155yrHqCTtCYCTjfvXlQAeSO2a6a7+OnxJ1C0ktbr4heKrm2kXY8M2tXLIy+hUvgiuHqovlldikrqyPpT41+KfA/jb4xvpqP4l+I5MkOmQXNhqixQgKqRAWqtFKZXO3cZCQrsx+UjDHxX4qeDYPh78R/Efhq1vRqNvpd7JbR3Ixl1U4Gccbh0OO4NWtD+MXi3wvpTWGh6nFoaNEIXudLsre1u3T0a4jjWVvfLnPeuNd2kZmZizMclmOST61Ntvn89vy19bldLen4f1+B778WNU+HFnpfgeRrqXxlqlr4b0+1FhplyLeztMRl5BcS7S8khlkf92uwqAMtn5Rw3xn+H9l4HufDFzYW15pkWvaPHqp0rUZRJPZlpJE2Fgq5VggdSVB2uM5xk4PhD4ka94DUnQ5bKzn3mRbttNtpbmNiAPkmeNpE6fwsO/qaxdb13UvE2qXGpavqF1qmo3B3TXd5M0sshxjLOxJPAHWqlq211bf330+97+RMLRVuyS+62v3LbzKNFFFIZo6f/AKlv97+gro9F1+z0q1aG48O6Zq7s5cT3r3IcDAG0eXMgxwTyM8nmuc0//Ut/vf0FWq/Ksyk442q13PtcIr4eF+x6fN8VPDt94PtrO+8D6dd61aSSR2krT3Qggt22sFObgs5DGXCkhV3ZGckV5bP/AKmT/dP8qfTJ/wDUyf7p/lXLTqSqVYc3ddDaUFCEreZj0UUV+vnwgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA5ZHQYVmUexp3nyf89G/76NR0Vk6NOTu4r7i1UmtEyTz5P8Ano3/AH0aQzSEYLsR9TTKKXsaX8q+4ftJ/wAzCiiitjMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z`,alt:`Hình ảnh preview`})])],-1),Y(`div`,Il,[Y(`div`,Ll,[p[31]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:p[11]||=e=>f(e)},`Copy`)]),p[32]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<p class="bnr__shared style-4"><a href="####">詳しくはこちら</a></p>`)],-1)]),Y(`div`,Rl,[Y(`div`,zl,[p[33]||=Y(`span`,null,`SCSS`,-1),Y(`button`,{class:`copy-button`,onClick:p[12]||=e=>f(e)},`Copy`)]),p[34]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`.bnr__shared.style-4 {
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
  }`)],-1)])]),Y(`div`,Bl,[p[40]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Button 03`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/03-D1K6cF26.jpg`,alt:`Hình ảnh preview`})])],-1),Y(`div`,Vl,[Y(`div`,Hl,[p[36]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:p[13]||=e=>f(e)},`Copy`)]),p[37]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div class="bnr__shape style-3 mask376">
                <p class="bnr__name">店内のご案内</p>
                <p class="bnr__img"><img src="shared/img/lunch/bnr376.png" width="376" height="93" alt="店内のご案内"></p>
                <a href="####">店内のご案内</a> </div>`)],-1)]),Y(`div`,Ul,[Y(`div`,Wl,[p[38]||=Y(`span`,null,`SCSS`,-1),Y(`button`,{class:`copy-button`,onClick:p[14]||=e=>f(e)},`Copy`)]),p[39]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`.bnr__shape {
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
`)],-1)])]),Y(`div`,Gl,[p[45]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Button 04`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/04-Dz_Iyy9f.jpg`,alt:`Hình ảnh preview`})])],-1),Y(`div`,Kl,[Y(`div`,ql,[p[41]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:p[15]||=e=>f(e)},`Copy`)]),p[42]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<p class="bnr__shared style-2"><a href="####">お持ち帰りについて</a></p>`)],-1)]),Y(`div`,Jl,[Y(`div`,Yl,[p[43]||=Y(`span`,null,`SCSS`,-1),Y(`button`,{class:`copy-button`,onClick:p[16]||=e=>f(e)},`Copy`)]),p[44]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`.bnr__shared.style-2 {
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
}`)],-1)])]),Y(`div`,Xl,[p[50]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Button 05`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/05-CQYdkyle.jpg`,alt:`Hình ảnh preview`})])],-1),Y(`div`,Zl,[Y(`div`,Ql,[p[46]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:p[17]||=e=>f(e)},`Copy`)]),p[47]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<p class="bnr__shared style-1"><a href="####">逸品と日本酒</a></p>`)],-1)]),Y(`div`,$l,[Y(`div`,eu,[p[48]||=Y(`span`,null,`SCSS`,-1),Y(`button`,{class:`copy-button`,onClick:p[18]||=e=>f(e)},`Copy`)]),p[49]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`.bnr__shared.style-1 {
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
}`)],-1)])])]))}},[[`__scopeId`,`data-v-fdde712a`]]),su={class:`layout-section`},cu={class:`columns`},lu={class:`input-column`},uu=[`onUpdate:modelValue`],du={style:{"margin-left":`10px`,"font-size":`0.9em`,cursor:`pointer`}},fu=[`onUpdate:modelValue`],pu=[`onClick`],mu={class:`rows`},hu={class:`row-header`},gu=[`onClick`],_u={class:`row-controls`},vu={class:`dropdown-content`},yu=[`onClick`],bu={key:0,class:`dropdown-submenu`},xu=[`onClick`],Su={key:0,class:`dropdown-submenu`},Cu=[`onClick`],wu=[`onClick`],Tu={key:0,class:`objects-in-row`},Eu=[`onClick`],Du={key:1,class:`cols-container`},Ou={class:`col-header`},ku=[`onClick`],Au={class:`dropdown-content`},ju=[`onClick`],Mu={key:0,class:`dropdown-submenu`},Nu=[`onClick`],Pu={key:0,class:`dropdown-submenu`},Fu=[`onClick`],Iu={class:`objects-in-col`},Lu=[`onClick`],Ru={class:`output-column`},zu={class:`language-html`},Bu={class:`language-css`},Vu={class:`language-js`},Hu=`layout_sections_v1`,Uu={__name:`layoutSection2`,setup(e){let t=W([]),n=W([{name:`Box`,html:`<div class="box">BOX</div>`,scss:`.box {}`,children:[{name:`Title`,html:`<div class="box"><div class="title">TITLE</div></div>`,scss:`.box { .title {} }`}]},{name:`Heading`,children:[{name:`h2`,html:`<h2>HEADING</h2>`,scss:`h2 {}`},{name:`h3`,html:`<h3>HEADING</h3>`,scss:`h3 {}`},{name:`h4`,html:`<h4>HEADING</h4>`,scss:`h4 {}`},{name:`h5`,html:`<h5>HEADING</h5>`,scss:`h5 {}`},{name:`h2 + span`,html:`<h2>HEADING<span>SubHEADING</span></h2>`,scss:`h2 { span {} }`},{name:`h3 + span`,html:`<h3>HEADING<span>SubHEADING</span></h3>`,scss:`h3 { span {} }`}]},{name:`Title`,html:`<div class="title">TITLE</div>`,scss:`.title {}`,children:[{name:`dl`,html:`<dl class="title"><dt>TITLE</dt><dd>TITLE__SUP</dd></dl>`,scss:`.title { dt {}; dd {} }`}]},{name:`Text`,html:`<p class="text">TEXT</p>`,scss:`.text {}`,children:[{name:`txt-vertical`,html:`<p class="text txt-vertical">TEXT</p>`,scss:`.text.txt-vertical {}`},{name:`txt-vertical-pc`,html:`<p class="text txt-vertical-pc">TEXT</p>`,scss:`.text.txt-vertical-pc {}`},{name:`txt-vertical-sp`,html:`<p class="text txt-vertical-sp">TEXT</p>`,scss:`.text.txt-vertical-sp {}`},{name:`note`,html:`<p class="note">TEXT</p>`,scss:`.note {}`}]},{name:`Parallax`,html:`<div class="bg-parallax"><div class="img-parallax">PARALLAX</div></div>`,scss:`.bg-parallax { .img-parallax { /* styles for inner image */ } }`},{name:`List`,children:[{name:`ul`,html:`<ul class="list">LIST__UL</ul>`,scss:`ul.list {}`},{name:`dl`,html:`<div class="list"><dl>LIST__DL</dl></div>`,scss:`.list { dl {} }`},{name:`p`,html:`<div class="list"><p>LIST__TEXT</p></div>`,scss:`.list { p {} }`}]},{name:`Photo`,html:`<div class="photo ob-img">PHOTO</div>`,scss:`.photo.ob-img {}`,children:[{name:`Group`,children:[{name:`1`,html:`<div class="groupPhoto">
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
</div>`,scss:`.slider__s { .sec__Slick01 {}; .sec__Slick02 {}; }`}]}]},{name:`Button`,html:`<p class="bnr__shared"><a href="#" class="style-1">LINK</a></p>`,scss:`.bnr__shared { .style-1 {} }`,children:[{name:`POPUP`,html:`<p class="bnr__shared"><a class="bnr__popup" href="#namePOPUP" data-remodal-target="namePOPUP"><span>namePOPUP</span></a></p>`,scss:`.bnr__shared { a.bnr__popup {} }`}]}]),r=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8),i=(e=``)=>String(e).toLowerCase().trim().replace(/\s+/g,`-`).replace(/[^a-z0-9\-]/g,``),a=e=>Array.isArray(e)?e.map(e=>(e.uid=e.uid||r(),e.rows=Array.isArray(e.rows)?e.rows:[],e.rows=e.rows.map(e=>(e.uid=e.uid||r(),e.objects=Array.isArray(e.objects)?e.objects.map(e=>({uid:e.uid||r(),name:e.name,html:e.html,scss:e.scss||``})):[],e.cols=Array.isArray(e.cols)?e.cols.map(e=>({uid:e.uid||r(),objects:Array.isArray(e.objects)?e.objects.map(e=>({uid:e.uid||r(),name:e.name,html:e.html,scss:e.scss||``})):[]})):[],e)),e)):[],o=()=>t.value.push({uid:r(),name:``,noWrap:!1,rows:[]}),s=e=>t.value[e].rows.push({uid:r(),objects:[],cols:[]}),c=(e,n)=>t.value[e].rows[n].cols.push({uid:r(),objects:[]}),l=(e,n)=>t.value[e].rows.splice(n,1),u=(e,n,r)=>t.value[e].rows[n].cols.splice(r,1),d=(e,n,i,a)=>{if(!a||!a.html)return;let o={uid:r(),name:a.name,html:a.html,scss:a.scss||``};i===null?t.value[e].rows[n].objects.push(o):t.value[e].rows[n].cols[i].objects.push(o)},f=(e,n,r,i)=>{r===null?t.value[e].rows[n].objects.splice(i,1):t.value[e].rows[n].cols[r].objects.splice(i,1)};ar(()=>{try{let e=localStorage.getItem(Hu);e&&(t.value=a(JSON.parse(e)))}catch(e){console.warn(`Failed to load saved sections`,e)}}),Ln(t,e=>{try{localStorage.setItem(Hu,JSON.stringify(e))}catch(e){console.warn(`Failed to save sections`,e)}},{deep:!0});let p=Q(()=>{let e=``;return t.value.forEach(t=>{if(!t.name)return;let n=i(t.name);e+=`<div id="${n}">\n`,t.noWrap||(e+=`  <div class="wrap">
`);let r=t.noWrap?`  `:`    `;t.rows.forEach((t,n)=>{e+=`${r}<div class="row-${n+1}">\n`,t.objects.forEach(t=>{let n=t.html.replace(/^/gm,r+`  `);e+=`${n}\n`}),t.cols.length>0&&t.cols.forEach((t,n)=>{e+=`${r}  <div class="col-${n+1}">\n`,t.objects.forEach(t=>{let n=t.html.replace(/^/gm,r+`    `);e+=`${n}\n`}),e+=`${r}  </div>\n`}),e+=`${r}</div>\n`}),t.noWrap||(e+=`  </div>
`),e+=`</div>

`}),e||`<!-- No data available -->`}),m=Q(()=>{if(t.value.length===0)return`/* No data available */`;let e=``,n=e=>`  `.repeat(e);return t.value.forEach(t=>{if(!t.name)return;let r=i(t.name);e+=`#${r} {\n`,t.noWrap||(e+=`${n(1)}.wrap {\n`);let a=t.noWrap?1:2;t.rows.forEach((t,r)=>{e+=`${n(a)}.row-${r+1} {\n`,t.objects.forEach(t=>{if(t.scss){let r=t.scss.split(`
`).map(e=>`${n(a+1)}${e}`).join(`
`);e+=`${r}\n`}}),t.cols.length>0&&t.cols.forEach((t,r)=>{e+=`${n(a+1)}.col-${r+1} {\n`,t.objects.forEach(t=>{if(t.scss){let r=t.scss.split(`
`).map(e=>`${n(a+2)}${e}`).join(`
`);e+=`${r}\n`}}),e+=`${n(a+1)}}\n`}),e+=`${n(a)}}\n`}),t.noWrap||(e+=`${n(1)}}\n`),e+=`\n${n(1)}@media screen and (min-width: 768px) {\n`,e+=`${n(2)}/* Responsive styles here */\n`,e+=`${n(1)}}\n`,e+=`}

`}),e}),h=null,g=e=>{let t=e.querySelector(`.dropdown-submenu`);if(!t)return;let n=e.getBoundingClientRect();t.style.visibility=`hidden`,t.style.display=`block`;let r=t.getBoundingClientRect();t.style.display=`none`,t.style.visibility=`visible`;let i=window.innerWidth,a=window.innerHeight;t.style.left=`100%`,t.style.right=`auto`,t.style.top=`0`,t.style.bottom=`auto`,n.right+r.width>i&&(t.style.left=`auto`,t.style.right=`100%`),n.top+r.height>a&&(t.style.top=`auto`,t.style.bottom=`0`)},_=e=>{clearTimeout(h),e.currentTarget.querySelectorAll(`.dropdown-item`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{e.parentElement.querySelectorAll(`.dropdown-submenu.active`).forEach(e=>e.classList.remove(`active`));let t=e.querySelector(`.dropdown-submenu`);t&&(t.classList.add(`active`),g(e))})})},v=e=>{h=setTimeout(()=>{e.currentTarget.querySelectorAll(`.dropdown-submenu.active`).forEach(e=>e.classList.remove(`active`))},200)},y=W(`Copy HTML`),b=W(`Copy SCSS`),x=async()=>{if(!navigator?.clipboard?.writeText){y.value=`Clipboard not available`,setTimeout(()=>y.value=`Copy HTML`,2e3);return}try{await navigator.clipboard.writeText(p.value),y.value=`Copied ✅`,setTimeout(()=>y.value=`Copy HTML`,2e3)}catch(e){console.error(`Copy HTML failed`,e),y.value=`Copy failed`,setTimeout(()=>y.value=`Copy HTML`,2e3)}},S=async()=>{if(!navigator?.clipboard?.writeText){b.value=`Clipboard not available`,setTimeout(()=>b.value=`Copy SCSS`,2e3);return}try{await navigator.clipboard.writeText(m.value),b.value=`Copied ✅`,setTimeout(()=>b.value=`Copy SCSS`,2e3)}catch(e){console.error(`Copy SCSS failed`,e),b.value=`Copy failed`,setTimeout(()=>b.value=`Copy SCSS`,2e3)}},C=W(`Copy JS`),w=Q(()=>{let e=!1,n=!1,r=!1;t.value.forEach(t=>{t.rows.forEach(t=>{(t.objects||[]).forEach(t=>{let i=(t.name||``).toLowerCase();(i===`infinity`||i.includes(`infinity`)||i.includes(`sliderinfinity`))&&(e=!0),(i===`slick`||i.includes(`slick`))&&(n=!0),(i===`thumb`||i.includes(`thumb`))&&(r=!0)}),(t.cols||[]).forEach(t=>{(t.objects||[]).forEach(t=>{let i=(t.name||``).toLowerCase();(i===`infinity`||i.includes(`infinity`)||i.includes(`sliderinfinity`))&&(e=!0),(i===`slick`||i.includes(`slick`))&&(n=!0),(i===`thumb`||i.includes(`thumb`))&&(r=!0)})})})});let i=``;return e&&(i+=`<script src="shared/js/infiniteslidev2.js"><\/script>
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

`),i||`/* No JS snippets for current layout */`}),T=async()=>{if(!navigator?.clipboard?.writeText){C.value=`Clipboard not available`,setTimeout(()=>C.value=`Copy JS`,2e3);return}try{await navigator.clipboard.writeText(w.value),C.value=`Copied ✅`,setTimeout(()=>C.value=`Copy JS`,2e3)}catch(e){console.error(`Copy JS failed`,e),C.value=`Copy failed`,setTimeout(()=>C.value=`Copy JS`,2e3)}};return(e,r)=>(q(),J(`div`,su,[Y(`button`,{class:`create-section-btn`,onClick:o},`Create Section`),Y(`div`,cu,[Y(`div`,lu,[r[3]||=Y(`h2`,null,`Layout Section`,-1),(q(!0),J(K,null,yr(t.value,(e,t)=>(q(),J(`div`,{key:e.uid,class:`section-fieldset`},[Y(`fieldset`,null,[Y(`legend`,null,`Section `+V(t+1),1),G(Y(`input`,{"onUpdate:modelValue":t=>e.name=t,placeholder:`Tên section (vd: sec1, about)`},null,8,uu),[[ho,e.name]]),Y(`label`,du,[G(Y(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.noWrap=t},null,8,fu),[[go,e.noWrap]]),r[0]||=Z(` No Wrap `,-1)]),e.name?(q(),J(`button`,{key:0,class:`create-row-btn`,onClick:e=>s(t)},` Create Row in `+V(e.name),9,pu)):Xi(``,!0),Y(`div`,mu,[(q(!0),J(K,null,yr(e.rows,(e,i)=>(q(),J(`div`,{key:e.uid,class:`row-box`},[Y(`div`,hu,[Y(`span`,null,`Row `+V(i+1),1),Y(`button`,{class:`delete-btn`,onClick:e=>l(t,i)},`Delete Row`,8,gu)]),Y(`div`,_u,[Y(`div`,{class:`add-object-dropdown`,onMouseenter:_,onMouseleave:v},[r[1]||=Y(`button`,{class:`add-object-main-btn`},`Add Object to Row`,-1),Y(`div`,vu,[(q(!0),J(K,null,yr(n.value,e=>(q(),J(`div`,{key:e.name,class:`dropdown-item`},[Y(`span`,{onClick:n=>d(t,i,null,e)},V(e.name),9,yu),e.children?(q(),J(`div`,bu,[(q(!0),J(K,null,yr(e.children,e=>(q(),J(`div`,{key:e.name,class:`dropdown-item`},[Y(`span`,{onClick:Co(n=>d(t,i,null,e),[`stop`])},V(e.name),9,xu),e.children?(q(),J(`div`,Su,[(q(!0),J(K,null,yr(e.children,e=>(q(),J(`div`,{key:e.name,class:`dropdown-item`,onClick:Co(n=>d(t,i,null,e),[`stop`])},[Y(`span`,null,V(e.name),1)],8,Cu))),128))])):Xi(``,!0)]))),128))])):Xi(``,!0)]))),128))])],32),Y(`button`,{class:`create-col-btn`,onClick:e=>c(t,i)},`Create Col`,8,wu)]),e.objects.length>0?(q(),J(`div`,Tu,[(q(!0),J(K,null,yr(e.objects,(e,n)=>(q(),J(`div`,{key:e.uid,class:`object-box`},[Y(`span`,null,V(e.name),1),Y(`button`,{class:`delete-btn small`,onClick:e=>f(t,i,null,n)},`x`,8,Eu)]))),128))])):Xi(``,!0),e.cols.length>0?(q(),J(`div`,Du,[(q(!0),J(K,null,yr(e.cols,(e,a)=>(q(),J(`div`,{key:e.uid,class:`col-box`},[Y(`div`,Ou,[Y(`span`,null,`Col `+V(a+1),1),Y(`button`,{class:`delete-btn small`,onClick:e=>u(t,i,a)},`X`,8,ku)]),Y(`div`,{class:`add-object-dropdown`,onMouseenter:_,onMouseleave:v},[r[2]||=Y(`button`,{class:`add-object-main-btn small`},`Add Object to Col`,-1),Y(`div`,Au,[(q(!0),J(K,null,yr(n.value,e=>(q(),J(`div`,{key:e.name,class:`dropdown-item`},[Y(`span`,{onClick:n=>d(t,i,a,e)},V(e.name),9,ju),e.children?(q(),J(`div`,Mu,[(q(!0),J(K,null,yr(e.children,e=>(q(),J(`div`,{key:e.name,class:`dropdown-item`},[Y(`span`,{onClick:Co(n=>d(t,i,a,e),[`stop`])},V(e.name),9,Nu),e.children?(q(),J(`div`,Pu,[(q(!0),J(K,null,yr(e.children,e=>(q(),J(`div`,{key:e.name,class:`dropdown-item`,onClick:Co(n=>d(t,i,a,e),[`stop`])},[Y(`span`,null,V(e.name),1)],8,Fu))),128))])):Xi(``,!0)]))),128))])):Xi(``,!0)]))),128))])],32),Y(`div`,Iu,[(q(!0),J(K,null,yr(e.objects,(e,n)=>(q(),J(`div`,{key:e.uid,class:`object-box`},[Y(`span`,null,V(e.name),1),Y(`button`,{class:`delete-btn small`,onClick:e=>f(t,i,a,n)},`x`,8,Lu)]))),128))])]))),128))])):Xi(``,!0)]))),128))])])]))),128))]),Y(`div`,Ru,[r[4]||=Y(`h2`,null,`Code HTML`,-1),Y(`button`,{class:`copystyle`,onClick:x},V(y.value),1),Y(`pre`,null,[Y(`code`,zu,V(p.value),1)]),r[5]||=Y(`h2`,null,`Code SCSS`,-1),Y(`button`,{class:`copystyle`,onClick:S},V(b.value),1),Y(`pre`,null,[Y(`code`,Bu,V(m.value),1)]),r[6]||=Y(`h2`,null,`Code Javascript`,-1),Y(`button`,{class:`copystyle`,onClick:T},V(C.value),1),Y(`pre`,null,[Y(`code`,Vu,V(w.value),1)])])])]))}},Wu={name:`TwoColumnTemplate`,data(){return{inputText:``,htmlOutput:``,scssOutput:``,withIcon:!1,ulClassInput:``,copied:{html:!1,scss:!1}}},methods:{generateHtml(){let e=this.inputText.split(`
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
}`},copyToClipboard(e){let t=e===`html`?this.htmlOutput:this.scssOutput;navigator.clipboard.writeText(t),this.copied[e]=!0,setTimeout(()=>this.copied[e]=!1,2e3)}}},Gu={class:`container`},Ku={class:`left`},qu={class:`options`},Ju={class:`right`},Yu={class:`code-block`},Xu={class:`code-block`};function Zu(e,t,n,r,i,a){return q(),J(`div`,Gu,[Y(`div`,Ku,[t[9]||=Y(`h3`,null,`list Ul (Text)`,-1),G(Y(`textarea`,{"onUpdate:modelValue":t[0]||=e=>i.inputText=e,placeholder:`text1\r
text2`,onInput:t[1]||=(...e)=>a.generateHtml&&a.generateHtml(...e)},null,544),[[ho,i.inputText]]),Y(`div`,qu,[Y(`label`,null,[G(Y(`input`,{type:`checkbox`,"onUpdate:modelValue":t[2]||=e=>i.withIcon=e,onChange:t[3]||=(...e)=>a.generateHtml&&a.generateHtml(...e)},null,544),[[go,i.withIcon]]),t[8]||=Z(` Icon `,-1)]),G(Y(`input`,{type:`text`,"onUpdate:modelValue":t[4]||=e=>i.ulClassInput=e,placeholder:`Enter class name...`,onInput:t[5]||=(...e)=>a.generateHtml&&a.generateHtml(...e),class:`class-input`},null,544),[[ho,i.ulClassInput]])])]),Y(`div`,Ju,[Y(`div`,Yu,[t[10]||=Y(`h3`,null,`HTML`,-1),Y(`button`,{class:`copied`,onClick:t[6]||=e=>a.copyToClipboard(`html`)},V(i.copied.html?`Copied!`:`Copy HTML`),1),Y(`pre`,null,[Y(`code`,null,V(i.htmlOutput),1)])]),Y(`div`,Xu,[t[11]||=Y(`h3`,null,`SCSS`,-1),Y(`button`,{class:`copied`,onClick:t[7]||=e=>a.copyToClipboard(`scss`)},V(i.copied.scss?`Copied!`:`Copy SCSS`),1),Y(`pre`,null,[Y(`code`,null,V(i.scssOutput),1)])])])])}var Qu=Ao(Wu,[[`render`,Zu],[`__scopeId`,`data-v-ce723b20`]]),$u={class:`list-dl-item`},ed={class:`container`},td={class:`input-section`},nd={class:`item-group`},rd={class:`radio-settings`},id={class:`output-section`},ad={class:`output-header`},od={class:`copy-box`},sd={key:0,class:`copied-msg`},cd={class:`code-preview`},ld=Ao({__name:`listDlItem`,setup(e){let t=W(``),n=W(`first`),r=W(!1);function i(e,t=`first`){return!e||!e.trim()?``:e.trim().split(/\n\s*\n/).map(e=>{let n=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e);if(n.length===0)return``;let r=``,i=``;return t===`first`?(r=n[0],i=n.slice(1).join(`<br />`)):(i=n[n.length-1],r=n.slice(0,-1).join(`<br />`)),`
<dl>
  <dt>${r}</dt>
  <dd>${i}</dd>
</dl>`}).join(``)}let a=Q(()=>i(t.value,n.value).trim());function o(){a.value&&navigator.clipboard.writeText(a.value).then(()=>{r.value=!0,setTimeout(()=>r.value=!1,2e3)})}return(e,i)=>(q(),J(`div`,$u,[Y(`div`,ed,[Y(`div`,td,[i[6]||=Y(`h3`,null,`list DL`,-1),Y(`div`,nd,[i[5]||=Y(`label`,null,`List content:`,-1),G(Y(`textarea`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,placeholder:`Text 1
Text 2

Text 3
Text 4`},null,512),[[ho,t.value]]),Y(`div`,rd,[Y(`label`,null,[G(Y(`input`,{type:`radio`,value:`first`,"onUpdate:modelValue":i[1]||=e=>n.value=e},null,512),[[vo,n.value]]),i[3]||=Z(` First`,-1)]),Y(`label`,null,[G(Y(`input`,{type:`radio`,value:`last`,"onUpdate:modelValue":i[2]||=e=>n.value=e},null,512),[[vo,n.value]]),i[4]||=Z(` Last`,-1)])])])]),Y(`div`,id,[Y(`div`,ad,[i[7]||=Y(`h3`,null,`CODE HTML`,-1),Y(`div`,od,[Y(`button`,{class:`btn-copy`,onClick:o},`Copy Code`),r.value?(q(),J(`span`,sd,`Copied !`)):Xi(``,!0)])]),Y(`pre`,cd,V(a.value),1)])])]))}},[[`__scopeId`,`data-v-e59ef021`]]),ud={class:`app`},dd={class:`editor`},fd={class:`radio-group`},pd={class:`columns-config`},md={class:`item-header`},hd=[`onClick`],gd=[`onUpdate:modelValue`],_d=[`onUpdate:modelValue`],vd={class:`radio-group`},yd=[`onUpdate:modelValue`],bd=[`onUpdate:modelValue`],xd=[`onClick`],Sd={class:`preview`},Cd={class:`pp__title`},wd={class:`pp__note`},Td={key:0},Ed=[`innerHTML`],Dd={class:`copy-box`},Od={key:0,class:`copied-msg`},kd={class:`scss-block`},Ad={key:0,class:`copied-msg`},jd={__name:`ListModal`,setup(e){let t=W(``),n=W(``),r=W(2),i=W([{items:[{header:``,content:``,mode:`first`}]},{items:[{header:``,content:``,mode:`first`}]}]);Ln(r,e=>{for(;i.value.length<e;)i.value.push({items:[{header:``,content:``,mode:`first`}]});i.value.length>e&&(i.value=i.value.slice(0,e))});let a=e=>{i.value[e].items.push({header:``,content:``,mode:`first`})},o=(e,t)=>{i.value[e].items.splice(t,1)};function s(e,t=`first`){return!e||!e.trim()?``:e.trim().split(/\n\s*\n/).map(e=>{let n=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e);if(n.length===0)return``;let r=``,i=``;return t===`first`?(r=n[0],i=n.slice(1).join(`<br />`)):(i=n[n.length-1],r=n.slice(0,-1).join(`<br />`)),`
      <dl>
        <dt>${r}</dt>
        <dd>${i}</dd>
      </dl>`}).join(``)}let c=W(!1);function l(){navigator.clipboard.writeText(u.value).then(()=>{c.value=!0,setTimeout(()=>c.value=!1,2e3)})}let u=Q(()=>`
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
</div><!--//remodal-->`),d=W(`
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
}`),f=W(!1);function p(){navigator.clipboard.writeText(d.value).then(()=>{f.value=!0,setTimeout(()=>f.value=!1,2e3)})}return(e,m)=>(q(),J(K,null,[Y(`div`,ud,[Y(`div`,dd,[m[11]||=Y(`h3`,null,`POPUP CONTENT`,-1),m[12]||=Y(`label`,null,`Title:`,-1),G(Y(`input`,{"onUpdate:modelValue":m[0]||=e=>t.value=e,type:`text`,placeholder:`Title...`},null,512),[[ho,t.value]]),m[13]||=Y(`br`,null,null,-1),m[14]||=Y(`label`,null,`Note:`,-1),G(Y(`input`,{"onUpdate:modelValue":m[1]||=e=>n.value=e,type:`text`,placeholder:`Note...`},null,512),[[ho,n.value]]),m[15]||=Y(`br`,null,null,-1),m[16]||=Y(`label`,{class:`lableTittle`},`Number Column Display:`,-1),Y(`div`,fd,[Y(`label`,null,[G(Y(`input`,{type:`radio`,value:1,"onUpdate:modelValue":m[2]||=e=>r.value=e},null,512),[[vo,r.value,void 0,{number:!0}]]),m[5]||=Z(` 1`,-1)]),Y(`label`,null,[G(Y(`input`,{type:`radio`,value:2,"onUpdate:modelValue":m[3]||=e=>r.value=e},null,512),[[vo,r.value,void 0,{number:!0}]]),m[6]||=Z(` 2`,-1)]),Y(`label`,null,[G(Y(`input`,{type:`radio`,value:3,"onUpdate:modelValue":m[4]||=e=>r.value=e},null,512),[[vo,r.value,void 0,{number:!0}]]),m[7]||=Z(` 3`,-1)])]),Y(`div`,pd,[(q(!0),J(K,null,yr(i.value,(e,t)=>(q(),J(`div`,{key:t,class:`column-box`},[(q(!0),J(K,null,yr(e.items,(n,r)=>(q(),J(`div`,{key:r,class:`item-group`},[Y(`div`,md,[e.items.length>1?(q(),J(`button`,{key:0,onClick:e=>o(t,r),class:`btn-del`},`x`,8,hd)):Xi(``,!0)]),G(Y(`input`,{"onUpdate:modelValue":e=>n.header=e,type:`text`,placeholder:`Title h3...`},null,8,gd),[[ho,n.header]]),m[10]||=Y(`label`,null,`List content:`,-1),G(Y(`textarea`,{"onUpdate:modelValue":e=>n.content=e,placeholder:`Text 1
Text 2

Text 3
Text 4`},null,8,_d),[[ho,n.content]]),Y(`div`,vd,[Y(`label`,null,[G(Y(`input`,{type:`radio`,value:`first`,"onUpdate:modelValue":e=>n.mode=e},null,8,yd),[[vo,n.mode]]),m[8]||=Z(` First`,-1)]),Y(`label`,null,[G(Y(`input`,{type:`radio`,value:`last`,"onUpdate:modelValue":e=>n.mode=e},null,8,bd),[[vo,n.mode]]),m[9]||=Z(` Last`,-1)])])]))),128)),Y(`button`,{onClick:e=>a(t),class:`btn-more`},`+ Add More Item`,8,xd)]))),128))])]),Y(`div`,Sd,[m[17]||=Y(`h3`,null,`Preview Render`,-1),Y(`h2`,Cd,V(t.value),1),Y(`p`,wd,V(n.value),1),Y(`div`,{class:pe([`pp__row`,`cols-`+r.value])},[(q(!0),J(K,null,yr(i.value,(e,t)=>(q(),J(`div`,{key:t,class:`pp__col`},[(q(!0),J(K,null,yr(e.items,(e,t)=>(q(),J(`div`,{key:t,class:`pp__item`},[e.header?(q(),J(`h3`,Td,V(e.header),1)):Xi(``,!0),Y(`div`,{innerHTML:s(e.content,e.mode)},null,8,Ed)]))),128))]))),128))],2),m[18]||=Y(`h3`,null,`Preview Code`,-1),Y(`div`,Dd,[Y(`button`,{class:`copied`,onClick:l},`Copy Code`),c.value?(q(),J(`span`,Od,`Copied !`)):Xi(``,!0)]),Y(`pre`,null,V(u.value),1)]),Y(`div`,kd,[Y(`button`,{class:`copied`,onClick:p},`Copy SCSS`),f.value?(q(),J(`span`,Ad,`Copied !`)):Xi(``,!0),m[19]||=Y(`h3`,null,`SCSS Code`,-1),Y(`pre`,null,V(d.value),1)])]),X(ld),X(Qu)],64))}},Md={class:`converter-container`},Nd={class:`column column-left`},Pd={class:`column column-right`},Fd={class:`scss-header`},Id={class:`options-wrapper`},Ld={class:`options-area`},Rd={class:`multiselect-container`},zd=[`onClick`],Bd=[`value`],Vd={class:`options-area`},Hd={class:`multiselect-container`},Ud=[`onClick`],Wd=[`value`],Gd={class:`code-output-area scss-output`},Kd=Ao({__name:`convertHtml`,setup(e){let t=W(``),n=W(``),r=W(new Set),i=W(new Set),a=W(new Set),o=W(new Set),s=W(`Copy SCSS`),c=Q(()=>[...r.value].filter(e=>!a.value.has(e))),l=Q(()=>[...i.value].filter(e=>!o.value.has(e)));Ln([t,a,o],()=>{u()},{deep:!0});let u=()=>{if(!t.value.trim()){n.value=``,r.value=new Set,i.value=new Set;return}let e=new DOMParser().parseFromString(t.value,`text/html`);f(e.body),n.value=Array.from(e.body.children).map(e=>d(e,0)).filter(Boolean).join(`

`)},d=(e,t)=>{let n=`  `.repeat(t),r=``;if(e.id&&!o.value.has(e.id)&&(r+=`#${e.id}`),e.className&&typeof e.className==`string`){let t=e.className.split(` `).filter(e=>e&&!a.value.has(e.trim()));t.length>0&&(r+=`.${t.join(`.`)}`)}if(!r){let n=e.tagName.toLowerCase();if([`div`,`span`,`strong`,`i`,`em`,`b`,`article`,`canvas`,`svg`,`script`,`style`,`picture`,`img`,`source`,`br`].includes(n))return n===`svg`?``:Array.from(e.children).map(e=>d(e,t)).filter(Boolean).join(`
`);r=n}let i=Array.from(e.children).map(e=>d(e,t+1)).filter(Boolean).join(`
`),s=``;if(t===0){let e=`  `.repeat(t+1);s=`\n${i?`
`:``}${e}@media screen and (min-width: 768px) {\n${e}  /* Responsive here */\n${e}}`}return`${n}${r} {\n${i}${s}\n${n}}`},f=e=>{let t=new Set,n=new Set;e.querySelectorAll(`[class]`).forEach(e=>e.classList.forEach(e=>e&&t.add(e))),e.querySelectorAll(`[id]`).forEach(e=>e.id&&n.add(e.id)),r.value=t,i.value=n},p=e=>{let t=e.target.value;t&&(a.value.add(t),e.target.value=``)},m=e=>a.value.delete(e),h=e=>{let t=e.target.value;t&&(o.value.add(t),e.target.value=``)},g=e=>o.value.delete(e),_=async()=>{if(n.value)try{await navigator.clipboard.writeText(n.value),s.value=`Copied!`,setTimeout(()=>{s.value=`Copy SCSS`},2e3)}catch(e){console.error(`Failed to copy: `,e),s.value=`Failed!`,setTimeout(()=>{s.value=`Copy SCSS`},2e3)}};return(e,r)=>(q(),J(`div`,Md,[Y(`div`,Nd,[r[1]||=Y(`h2`,null,`Paste HTML Code Here`,-1),G(Y(`textarea`,{"onUpdate:modelValue":r[0]||=e=>t.value=e,placeholder:`<section id="read1" class="box__c">
  ...
</section>`,class:`code-input-area`,spellcheck:`false`},null,512),[[ho,t.value]])]),Y(`div`,Pd,[Y(`div`,Fd,[r[2]||=Y(`h2`,null,`SCSS Output`,-1),Y(`button`,{onClick:_,class:`copy-btn`},V(s.value),1)]),Y(`div`,Id,[Y(`div`,Ld,[r[4]||=Y(`label`,{for:`excluded-ids-select`},`Excluded IDs:`,-1),Y(`div`,Rd,[(q(!0),J(K,null,yr(o.value,e=>(q(),J(`div`,{key:e,class:`selected-class-tag id-tag`},[Z(` #`+V(e)+` `,1),Y(`span`,{onClick:t=>g(e),class:`remove-tag-btn`},`×`,8,zd)]))),128)),Y(`select`,{id:`excluded-ids-select`,onChange:h,class:`multiselect-select`},[r[3]||=Y(`option`,{value:``,disabled:``,selected:``},`Select IDs to exclude...`,-1),(q(!0),J(K,null,yr(l.value,e=>(q(),J(`option`,{key:e,value:e},` #`+V(e),9,Bd))),128))],32)])]),Y(`div`,Vd,[r[6]||=Y(`label`,{for:`excluded-classes-select`},`Excluded Classes:`,-1),Y(`div`,Hd,[(q(!0),J(K,null,yr(a.value,e=>(q(),J(`div`,{key:e,class:`selected-class-tag`},[Z(` .`+V(e)+` `,1),Y(`span`,{onClick:t=>m(e),class:`remove-tag-btn`},`×`,8,Ud)]))),128)),Y(`select`,{id:`excluded-classes-select`,onChange:p,class:`multiselect-select`},[r[5]||=Y(`option`,{value:``,disabled:``,selected:``},`Select classes to exclude...`,-1),(q(!0),J(K,null,yr(c.value,e=>(q(),J(`option`,{key:e,value:e},` .`+V(e),9,Wd))),128))],32)])])]),Y(`pre`,Gd,[Y(`code`,null,V(n.value),1)])])]))}},[[`__scopeId`,`data-v-cdf13890`]]),qd={class:`container`},Jd={class:`controls-panel`},Yd={class:`control-group`},Xd={class:`converter-section`},Zd={class:`single-converter`},Qd={class:`result-vw`},$d={class:`list-panel`},ef={class:`font-size-list`},tf={class:`px-value`},nf={class:`vw-value`},rf=[`onClick`],af=Ao({__name:`fontSize`,setup(e){let t=W(550),n=W(200),r=W(null),i=Array.from({length:187},(e,t)=>200-t),a=(e,t)=>t<=0||!e?`0.00vw`:`${(e/t*100).toFixed(2)}vw`,o=Q(()=>a(n.value,t.value)),s=Q(()=>i.map(e=>({px:e,vw:a(e,t.value)}))),c=async(e,t)=>{if(r.value!==t)try{await navigator.clipboard.writeText(e),r.value=t,setTimeout(()=>{r.value===t&&(r.value=null)},2e3)}catch(e){console.error(`Failed to copy text: `,e),alert(`Failed to copy text.`)}};return(e,i)=>(q(),J(`div`,qd,[Y(`div`,Jd,[i[7]||=Y(`h1`,{class:`title`},`PX to VW`,-1),Y(`div`,Yd,[i[3]||=Y(`label`,{for:`viewport`},`Viewport Width (px)`,-1),G(Y(`input`,{id:`viewport`,type:`number`,"onUpdate:modelValue":i[0]||=e=>t.value=e},null,512),[[ho,t.value,void 0,{number:!0}]])]),i[8]||=Y(`hr`,{class:`separator`},null,-1),Y(`div`,Xd,[i[6]||=Y(`h2`,{class:`subtitle`},`Single Converter`,-1),Y(`div`,Zd,[G(Y(`input`,{type:`number`,"onUpdate:modelValue":i[1]||=e=>n.value=e,placeholder:`Enter px`},null,512),[[ho,n.value,void 0,{number:!0}]]),i[4]||=Y(`span`,{class:`unit-label`},`px`,-1),i[5]||=Y(`span`,{class:`equals`},`=`,-1),Y(`span`,Qd,V(o.value),1)]),Y(`button`,{onClick:i[2]||=e=>c(o.value,`single`),class:pe([`copy-btn`,{copied:r.value===`single`}])},V(r.value===`single`?`Copied!`:`Copy`),3)])]),Y(`div`,$d,[i[10]||=Y(`h2`,{class:`subtitle`},`Font Size List (14px to 200px)`,-1),Y(`ul`,ef,[(q(!0),J(K,null,yr(s.value,e=>(q(),J(`li`,{key:e.px},[Y(`span`,tf,V(e.px)+`px`,1),i[9]||=Y(`span`,{class:`arrow`},`→`,-1),Y(`span`,nf,V(e.vw),1),Y(`button`,{onClick:t=>c(e.vw,e.px),class:pe([`copy-btn-small`,{copied:r.value===e.px}])},V(r.value===e.px?`Copied!`:`Copy`),11,rf)]))),128))])])]))}},[[`__scopeId`,`data-v-dd1614b7`]]),of=c(o(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof l==`function`&&l;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var u=Error(`Cannot find module '`+o+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var a=typeof l==`function`&&l,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.1`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){return typeof e==`string`?`string`:Object.prototype.toString.call(e)===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&e instanceof Uint8Array?`uint8array`:r.arraybuffer&&e instanceof ArrayBuffer?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(e))!==-1)&&typeof FileReader<`u`?new o.Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,typeof e==`string`?s.input=a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,typeof e==`string`?p.input=a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function ee(e){return(e<<1)-(4<e?9:0)}function N(e){for(var t=e.length;0<=--t;)e[t]=0}function P(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function F(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,P(e.strm)}function I(e,t){e.pending_buf[e.pending++]=t}function L(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function R(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function z(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function te(e,t){for(var n,r;;){if(e.lookahead<T){if(z(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=R(e,n)),e.match_length>=C)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}function B(e,t){for(var n,r,i;;){if(e.lookahead<T){if(z(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=R(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(F(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&F(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}function ne(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),N(this.dyn_ltree),N(this.dyn_dtree),N(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),N(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),N(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ie(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function ae(e){var t=ie(e);return t===d&&function(e){e.window_size=2*e.w_size,N(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function oe(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new re;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,ae(e)}r=[new ne(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(z(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,F(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(F(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(F(e,!1),e.strm.avail_out),O)}),new ne(4,4,8,4,te),new ne(4,5,16,8,te),new ne(4,6,32,32,te),new ne(4,4,16,16,B),new ne(8,16,32,32,B),new ne(8,16,128,128,B),new ne(8,32,128,256,B),new ne(32,128,258,1024,B),new ne(32,258,258,4096,B)],n.deflateInit=function(e,t){return oe(e,t,g,15,8,0)},n.deflateInit2=oe,n.deflateReset=ae,n.deflateResetKeep=ie,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E)if(i.wrap===2)e.adler=0,I(i,31),I(i,139),I(i,8),i.gzhead?(I(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),I(i,255&i.gzhead.time),I(i,i.gzhead.time>>8&255),I(i,i.gzhead.time>>16&255),I(i,i.gzhead.time>>24&255),I(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),I(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(I(i,255&i.gzhead.extra.length),I(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(I(i,0),I(i,0),I(i,0),I(i,0),I(i,0),I(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),I(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,L(i,p),i.strstart!==0&&(L(i,e.adler>>>16),L(i,65535&e.adler)),e.adler=1}if(i.status===69)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),P(e),o=i.pending,i.pending!==i.pending_buf_size));)I(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(i.status===73)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),P(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,I(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91;if(i.status===91)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),P(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,I(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103;if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&P(e),i.pending+2<=i.pending_buf_size&&(I(i,255&e.adler),I(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(P(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&ee(t)<=ee(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(z(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(z(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(N(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),P(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(I(i,255&e.adler),I(i,e.adler>>8&255),I(i,e.adler>>16&255),I(i,e.adler>>24&255),I(i,255&e.total_in),I(i,e.total_in>>8&255),I(i,e.total_in>>16&255),I(i,e.total_in>>24&255)):(L(i,e.adler>>>16),L(i,65535&e.adler)),P(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(N(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,z(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,z(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,ee,N,P,F,I,L,R=0,z=new r.Buf8(4),te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,F=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){z[n.check=0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,P=8+(15&(b>>>=4)),n.wbits===0)n.wbits=P;else if(P>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<P,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,z[2]=b>>>16&255,z[3]=b>>>24&255,n.check=a(n.check,z,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(P=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,P)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;P=p[g+ E++],n.head&&P&&n.length<65536&&(n.head.name+=String.fromCharCode(P)),P&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,P)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;P=p[g+ E++],n.head&&P&&n.length<65536&&(n.head.comment+=String.fromCharCode(P)),P&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,P)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[te[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[te[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,I={bits:n.lenbits},F=s(0,n.lens,0,19,n.lencode,0,n.work,I),n.lenbits=I.bits,F){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(R=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&R,!((k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(L=k+2;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}P=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(L=k+3;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,P=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(L=k+7;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,P=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=P}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,I={bits:n.lenbits},F=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,I),n.lenbits=I.bits,F){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,I={bits:n.distbits},F=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,I),n.distbits=I.bits,F){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(R=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&R,!((k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,ee=A,N=j;A=(R=n.lencode[N+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&R,!(M+(k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(L=n.extra;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(R=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&R,!((k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,ee=A,N=j;A=(R=n.distcode[N+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&R,!(M+(k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(L=n.extra;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:F=1;break e;case 30:F=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&F===u&&(F=-5),F)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,ee=null,N=0,P=new r.Buf16(16),F=new r.Buf16(16),I=null,L=0;for(C=0;C<=15;C++)P[C]=0;for(w=0;w<c;w++)P[t[n+w]]++;for(D=S,E=15;1<=E&&P[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&P[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=P[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(F[1]=0,C=1;C<15;C++)F[C+1]=F[C]+P[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[F[t[n+w]]++]=w);if(v=e===0?(ee=I=d,19):e===1?(ee=i,N-=257,I=a,L-=257,256):(ee=o,I=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=I[L+d[w]],ee[N+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--P[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=P[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,ee=Array(d);function N(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function P(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function F(e){return e<256?D[e]:D[256+(e>>>7)]}function I(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function L(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,I(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function R(e,t,n){L(e,n[2*t],n[2*t+1])}function z(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function te(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=z(a[s]++,s))}}function B(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ne(e){8<e.bi_valid?I(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function re(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function ie(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&re(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!re(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function ae(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?R(e,i,t):(R(e,(a=O[i])+l+1,t),(o=x[a])!==0&&L(e,i-=k[a],o),R(e,a=F(--r),n),(o=S[a])!==0&&L(e,r-=ee[a],o)),s<e.last_lit;);R(e,_,t)}function oe(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)ie(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],ie(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,ie(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),te(a,l,e.bl_count)}function se(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function ce(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;R(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(R(e,y,e.bl_tree),L(e,s-3,3)):(R(e,b,e.bl_tree),L(e,s-11,7)):(i!==a&&(R(e,i,e.bl_tree),s--),R(e,v,e.bl_tree),L(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(ee);var le=!1;function ue(e,t,n,i){L(e,(s<<1)+(i?1:0),3),function(e,t,n,i){ne(e),i&&(I(e,n),I(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){le||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(ee[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(ee[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+ i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(te(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=z(e,5);A=new N(T,x,l+1,u,m),j=new N(E,S,0,d,m),M=new N([],C,0,f,g)}(),!0),e.l_desc=new P(e.dyn_ltree,A),e.d_desc=new P(e.dyn_dtree,j),e.bl_desc=new P(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,B(e)},n._tr_stored_block=ue,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),oe(e,e.l_desc),oe(e,e.d_desc),c=function(e){var t;for(se(e,e.dyn_ltree,e.l_desc.max_code),se(e,e.dyn_dtree,e.d_desc.max_code),oe(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?ue(e,t,n,r):e.strategy===4||s===o?(L(e,2+(r?1:0),3),ae(e,T,E)):(L(e,4+(r?1:0),3),function(e,t,n,r){var i;for(L(e,t-257,5),L(e,n-1,5),L(e,r-4,4),i=0;i<r;i++)L(e,e.bl_tree[2*w[i]+1],3);ce(e,e.dyn_ltree,t-1),ce(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),ae(e,e.dyn_ltree,e.dyn_dtree)),B(e),r&&ne(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*F(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){L(e,2,3),R(e,_,T),function(e){e.bi_valid===16?(I(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})}))()),sf={class:`font-face-generator`},cf={class:`font-list-panel`},lf={class:`font-list-container`},uf=[`id`,`value`],df=[`for`],ff={class:`action-section`},pf={class:`filename-label`},mf={class:`saveas-label`},hf=[`disabled`],gf={key:0,class:`error-message`},_f={key:1,class:`note`},vf={class:`css-output-panel`},yf={class:`header`},bf=[`disabled`],xf={key:0,class:`copy-success-message`},Sf={class:`code-display`},Cf=Ao({__name:`fontsFace`,setup(e){let t=e=>{let t=e.toLowerCase(),n=t.match(/\b(100|200|300|400|500|600|700|800|900)\b/);return n?parseInt(n[0],10):t.includes(`black`)||t.includes(`heavy`)?900:t.includes(`extrabold`)?800:t.includes(`bold`)?700:t.includes(`semibold`)||t.includes(`demibold`)?600:t.includes(`medium`)?500:t.includes(`regular`)||t.includes(`normal`)?400:t.includes(`light`)?300:t.includes(`extralight`)?200:t.includes(`thin`)?100:400},n=e=>({100:`thin`,200:`extralight`,300:`light`,400:`regular`,500:`medium`,600:`semibold`,700:`bold`,800:`extrabold`,900:`black`})[e]||`w${e}`,r=W([]);ar(()=>{fetch(`/toolvuejsv2/fonts.json`).then(e=>e.ok?e.json():[]).then(e=>{r.value=e}).catch(e=>console.error(`Error loading fonts.json:`,e))});let i=W([]),a=W(!1),o=W(!1),s=W(``),c=W(`selected-fonts.zip`),l=W(!1),u=typeof window<`u`&&`showSaveFilePicker`in window,d=Q(()=>i.value.map(e=>{let{fileName:n,fontFamily:r}=e;return`@font-face {\n  font-family: '${r}';\n  src: url('../fonts/${n}') format('${n.split(`.`).pop()}');\n  font-weight: ${t(n)};\n  font-style: normal;\n  font-display: swap;\n}`}).join(`

`)),f=Q(()=>i.value.map(e=>{let{fontFamily:r,fileName:i}=e,a=t(i),o=n(a);return`.${`fnt-${r.toLowerCase().replace(/\s+/g,`-`)}-${o}`} {\n  font-family: '${r}';\n  font-style: normal;\n  font-weight: ${a};\n}`}).join(`

`)),p=Q(()=>i.value.length===0?`/* Select a font to see the generated CSS code. */`:`${d.value}\n\n/* --- FONTS Classes --- */\n\n${f.value}`),m=async()=>{if(i.value.length!==0)try{await navigator.clipboard.writeText(p.value),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}catch(e){console.error(`Lỗi khi copy CSS: `,e)}},h=async()=>{if(i.value.length===0)return;o.value=!0,s.value=``;let e=new of.default;try{let t=i.value.map(t=>fetch(`/toolvuejsv2/fonts/${t.fileName}`).then(e=>{if(!e.ok)throw Error(`Không thể tải file: ${t.fileName}`);return e.blob()}).then(n=>{e.file(t.fileName,n)}));await Promise.all(t);let n=await e.generateAsync({type:`blob`});if(l.value&&u)try{let e={suggestedName:c.value||`selected-fonts.zip`,types:[{description:`ZIP file`,accept:{"application/zip":[`.zip`]}}]},t=await(await window.showSaveFilePicker(e)).createWritable();await t.write(n),await t.close()}catch(e){console.warn(`File picker failed, falling back to anchor download.`,e);let t=document.createElement(`a`);t.href=URL.createObjectURL(n),t.download=c.value||`selected-fonts.zip`,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(t.href)}else{let e=document.createElement(`a`);e.href=URL.createObjectURL(n),e.download=c.value||`selected-fonts.zip`,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(e.href)}}catch(e){console.error(`Lỗi khi tạo file zip:`,e),s.value=e.message}finally{o.value=!1}};return(e,t)=>(q(),J(`div`,sf,[Y(`div`,cf,[t[5]||=Y(`h2`,null,`Danh mục Fonts`,-1),t[6]||=Y(`p`,{class:`description`},` Select fonts from the list to generate CSS code and download it. `,-1),Y(`div`,lf,[(q(!0),J(K,null,yr(r.value,e=>(q(),J(`div`,{key:e.fileName,class:`font-item`},[G(Y(`input`,{type:`checkbox`,id:e.fileName,"onUpdate:modelValue":t[0]||=e=>i.value=e,value:e},null,8,uf),[[go,i.value]]),Y(`label`,{for:e.fileName},V(e.fileName),9,df)]))),128))]),Y(`div`,ff,[Y(`label`,pf,[t[3]||=Z(` File Name: `,-1),G(Y(`input`,{type:`text`,"onUpdate:modelValue":t[1]||=e=>c.value=e,class:`filename-input`},null,512),[[ho,c.value]])]),Y(`label`,mf,[G(Y(`input`,{type:`checkbox`,"onUpdate:modelValue":t[2]||=e=>l.value=e},null,512),[[go,l.value]]),t[4]||=Z(` Use Save As (choose folder/filename) `,-1)]),Y(`button`,{onClick:h,disabled:i.value.length===0||o.value,class:`download-button`},V(o.value?`unzip...`:`Download Fonts (.zip)`),9,hf),s.value?(q(),J(`p`,gf,V(s.value),1)):Xi(``,!0),l.value&&!Xt(u)?(q(),J(`p`,_f,`Lưu ý: trình duyệt không hỗ trợ File System Access API; sẽ fallback sang download bình thường.`)):Xi(``,!0)]),t[7]||=Y(`hr`,{class:`divider`},null,-1),t[8]||=Y(`h3`,null,`Dummy Template (Fallback)`,-1),t[9]||=Y(`pre`,{class:`dummy-code`},[Y(`code`,null,`@font-face {
  font-family: 'TEMPLATE_FONT_FAMILY';
  src: url('../fonts/TEMPLATE_FONT_FILE.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`)],-1)]),Y(`div`,vf,[Y(`div`,yf,[t[10]||=Y(`h2`,null,`Code CSS`,-1),Y(`button`,{onClick:m,class:`copy-button`,disabled:i.value.length===0},` Copy `,8,bf)]),a.value?(q(),J(`span`,xf,`Copied !`)):Xi(``,!0),Y(`pre`,Sf,[Y(`code`,null,V(p.value),1)])])]))}},[[`__scopeId`,`data-v-2b487a1b`]]),wf={name:`GtagName`,data(){return{gtagList:[],copiedIndex:null,copyTimeout:null,defaultGtagList:`onClick="gtag('event','btn_shopping',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_hotpepper',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_tabelog',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_gnavi',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_ikyu',{transport_type:'beacon'});".onClick="gtag('event','btn_reserve_toreta',{transport_type:'beacon'});".onClick="gtag('event','header_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','fix_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','footer_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','info_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','recruit_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','btn_fb',{transport_type:'beacon'});".onClick="gtag('event','btn_insta',{transport_type:'beacon'});".onClick="gtag('event','btn_line',{transport_type:'beacon'});".onClick="gtag('event','gmap_print',{transport_type:'beacon'});".onClick="gtag('event','btn_blog',{transport_type:'beacon'});".onClick="gtag('event','btn_shopping',{transport_type:'beacon'});".onClick="gtag('event','shopping_商品名',{transport_type:'beacon'});".onClick="gtag('event','btn_shopping',{transport_type:'beacon'});".onClick="gtag('event','btn_hotpepper',{transport_type:'beacon'});".onClick="gtag('event','header_phone',{event_category:'Phone Call',transport_type:'beacon'});".onClick="gtag('event','btn_reserve',{transport_type:'beacon'});".onClick="gtag('event','btn_osechi',{transport_type:'beacon'});".onClick="gtag('event','btn_ouchiset',{transport_type:'beacon'});".onClick="gtag('event','btn_衛生対策強化中',{transport_type:'beacon'});".onClick="gtag('event','btn_lunch',{transport_type:'beacon'});".onClick="gtag('event','btn_kani',{transport_type:'beacon'});".onClick="gtag('event','btn_enkai',{transport_type:'beacon'});".onClick="gtag('event','btn_takeout',{transport_type:'beacon'});".onClick="gtag('event','gmap_print',{transport_type:'beacon'});".onClick="gtag('event','sp_gmap',{transport_type:'beacon'});".onClick="gtag('event','btn_insta',{transport_type:'beacon'});".onClick="gtag('event','btn_facebook',{transport_type:'beacon'});".onClick="gtag('event','copy_url');".onClick="gtag('event','fix_takeout',{transport_type:'beacon'});".onClick="gtag('event','fix_catering',{transport_type:'beacon'});".onClick="gtag('event','fix_shopping',{transport_type:'beacon'});".onClick="gtag('event','fix_reserve',{transport_type:'beacon'});".onblur="gtag('event','form_fullname');".onblur="gtag('event','form_email');".onblur="gtag('event','form_phone');".onblur="gtag('event','form_time');".onblur="gtag('event','form_people');".onblur="gtag('event','form_message');".onClick="gtag('event','送信ボタン',{transport_type:'beacon'});".onClick="gtag('event','入力確認ボタン',{transport_type:'beacon'});"`.split(`.`)}},created(){this.loadGtagList()},watch:{gtagList:{handler(e){this.saveGtagList(e)},deep:!0}},methods:{loadGtagList(){try{let e=localStorage.getItem(`gtagList`);e?this.gtagList=JSON.parse(e):(this.gtagList=[...this.defaultGtagList],this.saveGtagList(this.gtagList))}catch(e){console.error(`Error loading gtagList from localStorage`,e),this.gtagList=[...this.defaultGtagList]}},saveGtagList(e){try{localStorage.setItem(`gtagList`,JSON.stringify(e))}catch(e){console.error(`Error saving gtagList to localStorage`,e)}},copyToClipboard(e,t){this.copyTimeout&&clearTimeout(this.copyTimeout),navigator.clipboard.writeText(e).then(()=>{this.copiedIndex=t,this.copyTimeout=setTimeout(()=>{this.copiedIndex=null,this.copyTimeout=null},2e3)}).catch(e=>{console.error(`Không thể copy văn bản: `,e),alert(`Không thể copy văn bản. Vui lòng thử lại.`)})}}},Tf={class:`gtag-container`},Ef={class:`gtag-text`},Df={class:`gtag-actions`},Of=[`onClick`];function kf(e,t,n,r,i,a){return q(),J(`div`,Tf,[t[0]||=Y(`h1`,null,`Gtag Name 2026`,-1),t[1]||=Y(`hr`,null,null,-1),(q(!0),J(K,null,yr(i.gtagList,(e,t)=>(q(),J(`div`,{key:t,class:`gtag-item`},[Y(`span`,Ef,V(e),1),Y(`div`,Df,[Y(`button`,{onClick:n=>a.copyToClipboard(e,t),class:pe([`copy-button`,{"copied-success":i.copiedIndex===t}])},V(i.copiedIndex===t?`Copied`:`Copy`),11,Of)])]))),128))])}var Af=Ao(wf,[[`render`,kf],[`__scopeId`,`data-v-4ed5790e`]]),jf={};function Mf(e,t){return` fadsf `}var Nf=Ao(jf,[[`render`,Mf]]),Pf={class:`layout-container ftfixed`},Ff={class:`layout-row`},If={class:`column column-code`},Lf={class:`column-header`},Rf={class:`column column-code`},zf={class:`column-header`},Bf={class:`layout-row`},Vf={class:`column column-code`},Hf={class:`column-header`},Uf={class:`column column-code`},Wf={class:`column-header`},Gf={class:`layout-row`},Kf={class:`column column-code`},qf={class:`column-header`},Jf={class:`column column-code`},Yf={class:`column-header`},Xf={class:`layout-row`},Zf={class:`column column-code`},Qf={class:`column-header`},$f={class:`column column-code`},ep={class:`column-header`},tp={class:`layout-row`},np={class:`column column-code`},rp={class:`column-header`},ip={class:`column column-code`},ap={class:`column-header`},op={class:`layout-row`},sp={class:`column column-code`},cp={class:`column-header`},lp={class:`column column-code`},up={class:`column-header`},dp={class:`layout-row`},fp={class:`column column-code`},pp={class:`column-header`},mp={class:`column column-code`},hp={class:`column-header`},gp={class:`layout-row`},_p={class:`column column-code`},vp={class:`column-header`},yp={class:`column column-code`},bp={class:`column-header`},xp={class:`layout-row`},Sp={class:`column column-code`},Cp={class:`column-header`},wp={class:`column column-code`},Tp={class:`column-header`},Ep=Ao({__name:`ftFixed`,setup(e){let t=e=>{let t=e.currentTarget,n=t.closest(`.column`).querySelector(`.code-content code`);if(n){let e=n.innerText;navigator.clipboard.writeText(e).then(()=>{let e=t.innerText;t.innerText=`Copied!`,t.classList.add(`copied`),setTimeout(()=>{t.innerText=e,t.classList.remove(`copied`)},2e3)}).catch(e=>{console.error(`Lỗi khi copy:`,e)})}};return(e,n)=>(q(),J(`div`,Pf,[n[63]||=Y(`h1`,null,`FT Fixed Templates`,-1),Y(`div`,Ff,[n[22]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 01`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/01-u5JuJGsE.jpg`,alt:`Style 01`})])],-1),Y(`div`,If,[Y(`div`,Lf,[n[18]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[0]||=e=>t(e)},`Copy`)]),n[19]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div id="ft-fixed" class="sp">
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
</div>`)],-1)]),Y(`div`,Rf,[Y(`div`,zf,[n[20]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[1]||=e=>t(e)},`Copy`)]),n[21]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#ft-fixed {
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

        `)],-1)])]),Y(`div`,Bf,[n[27]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 02`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/02-QQdbmL2Q.jpg`,alt:`Style 02`})])],-1),Y(`div`,Vf,[Y(`div`,Hf,[n[23]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[2]||=e=>t(e)},`Copy`)]),n[24]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div class="sp">
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
</div>`)],-1)]),Y(`div`,Uf,[Y(`div`,Wf,[n[25]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[3]||=e=>t(e)},`Copy`)]),n[26]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#ft_fixed {
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

        `)],-1)])]),Y(`div`,Gf,[n[32]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 03`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/03-BwvVQUkS.jpg`,alt:`Style 03`})])],-1),Y(`div`,Kf,[Y(`div`,qf,[n[28]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[4]||=e=>t(e)},`Copy`)]),n[29]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div id="fixed-sp" class="sp">
    <ul>
      <li><a href="tel:zzzzzzzzzz" onClick="gtag('event','sp_fix_phone',{event_category:'Phone Call',transport_type:'beacon'});"><img src="shared/img/shared/icon_tel_sp.png" alt="tel" width="52" height="52">TEL</a></li>
      <li><a href="zzzzzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><img src="shared/img/shared/icon_web_sp.png" alt="WEB予約" width="52" height="52">WEB予約</a></li>
      <li><a href="zzzzzzzzzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','sp_fix_googlemap',{transport_type:'beacon'});" class="icon-location"><img src="shared/img/shared/icon_map_sp.png" alt="MAP" width="52" height="52">MAP</a></li>
    </ul>
</div>`)],-1)]),Y(`div`,Jf,[Y(`div`,Yf,[n[30]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[5]||=e=>t(e)},`Copy`)]),n[31]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#fixed-sp {
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
}`)],-1)])]),Y(`div`,Xf,[n[37]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 04`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/04-DgSxsBF9.jpg`,alt:`Style 04`})])],-1),Y(`div`,Zf,[Y(`div`,Qf,[n[33]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[6]||=e=>t(e)},`Copy`)]),n[34]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div id="fixed-sp" class="sp">
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
</div>`)],-1)]),Y(`div`,$f,[Y(`div`,ep,[n[35]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[7]||=e=>t(e)},`Copy`)]),n[36]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#fixed-sp {
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
}`)],-1)])]),Y(`div`,tp,[n[42]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 05`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/05-DOxKgTV2.jpg`,alt:`Style 05`})])],-1),Y(`div`,np,[Y(`div`,rp,[n[38]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[8]||=e=>t(e)},`Copy`)]),n[39]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<ul id="ft_fixed" class="ft_fixed_shared fnt-notosans">
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
</ul>`)],-1)]),Y(`div`,ip,[Y(`div`,ap,[n[40]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[9]||=e=>t(e)},`Copy`)]),n[41]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#ft_fixed {
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
}`)],-1)])]),Y(`div`,op,[n[47]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 06`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/06-ZyKQH42H.jpg`,alt:`Style 06`})])],-1),Y(`div`,sp,[Y(`div`,cp,[n[43]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[10]||=e=>t(e)},`Copy`)]),n[44]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div id="ft-fixed" class="sp">
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
</div>`)],-1)]),Y(`div`,lp,[Y(`div`,up,[n[45]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[11]||=e=>t(e)},`Copy`)]),n[46]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#ft-fixed {
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
}`)],-1)])]),Y(`div`,dp,[n[52]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 07`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/07-eRmdhz5C.jpg`,alt:`Style 07`})])],-1),Y(`div`,fp,[Y(`div`,pp,[n[48]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[12]||=e=>t(e)},`Copy`)]),n[49]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div id="fixed-sp" class="sp">
  <div class="fixed__shared">
	<p class="fixed__home"><a href="index.html"><i><img src="shared/img/shared/logo.svg" width="150" height="150" alt="logo"></i>zzzzz</a></p>
	<p class="fixed__mail"><a href="contact.html" rel="nofollow" target="_blank" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><i><img src="shared/img/shared/mail.svg" width="219" height="150" alt="mail"></i></a></p>
	<p class="fixed__map"><a href="zzzzzzzzzzzzzzz" target="_blank" onClick="gtag('event','sp_gmap',{transport_type:'beacon'});"><i><img src="shared/img/shared/icon_map2.png" alt="map" width="50" height="70"></i></a></p>
	<div class="hamberger-btn"> <span></span></div> 
  </div>
</div>`)],-1)]),Y(`div`,mp,[Y(`div`,hp,[n[50]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[13]||=e=>t(e)},`Copy`)]),n[51]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#fixed-sp {
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
}`)],-1)])]),Y(`div`,gp,[n[57]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 08`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/08-BOCBzMrb.jpg`,alt:`Style 08`})])],-1),Y(`div`,_p,[Y(`div`,vp,[n[53]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[14]||=e=>t(e)},`Copy`)]),n[54]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<ul id="ft_fixed" class="ft_fixed_shared">
  <li class="ft_fixed-tel"><i><img src="shared/img/shared/icon_tel.png" width="36" height="37" alt="TEL"></i>TEL</li>
  <li class="ft_fixed-mail"><a href="zzzzzzzzzz" target="_blank" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><i><img src="shared/img/shared/icon_web.png" width="36" height="37" alt="WEB予約"></i><span>WEB予約</span></a></li>
  <li class="ft_fixed-map"><a href="zzzzzzz" target="_blank" rel="nofollow" onClick="gtag('event','sp_gmap',{transport_type:'beacon'});"><i><img class="imgInvert" src="shared/img/shared/icon_map.png" width="56" height="76" alt="MAP"></i>MAP</a></li>
  <li class="hamburger">
	<p><img src="shared/img/shared/ft_bnr04.jpg" alt="Menu" width="110" height="110"></p>
	<p class="on"><img src="shared/img/shared/ft_bnr04_on.jpg" alt="close" width="110" height="110"></p>
  </li>
</ul>`)],-1)]),Y(`div`,yp,[Y(`div`,bp,[n[55]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[15]||=e=>t(e)},`Copy`)]),n[56]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#ft_fixed {
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
    
    `)],-1)])]),Y(`div`,xp,[n[62]||=Y(`div`,{class:`column column-image`},[Y(`div`,{class:`column-header`},`Style 09`),Y(`div`,{class:`image-container`},[Y(`img`,{src:`/toolvuejsv2/assets/09-Bqs8sUp7.jpg`,alt:`Style 09`})])],-1),Y(`div`,Sp,[Y(`div`,Cp,[n[58]||=Y(`span`,null,`HTML`,-1),Y(`button`,{class:`copy-button`,onClick:n[16]||=e=>t(e)},`Copy`)]),n[59]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`<div id="fixed-sp" class="sp">
  <ul>
	  <li class="ft__tel"><a href="tel:zzzzzzzzzz" onClick="gtag('event','sp_fix_phone',{event_category:'Phone Call',transport_type:'beacon'});"><span>お電話</span></a></li>
	  <li class="ft__web"><a href="__WEB__" rel="nofollow" target="_blank" onClick="gtag('event','sp_btn_reserve',{transport_type:'beacon'});"><span>お問い合わせ</span></a></li>
	 <li class="hamberger-btn"> <span></span> </li>
  </ul>
</div>`)],-1)]),Y(`div`,wp,[Y(`div`,Tp,[n[60]||=Y(`span`,null,`CSS`,-1),Y(`button`,{class:`copy-button`,onClick:n[17]||=e=>t(e)},`Copy`)]),n[61]||=Y(`pre`,{class:`code-content`},[Y(`code`,null,`#fixed-sp {
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
}`)],-1)])])]))}},[[`__scopeId`,`data-v-e6db1715`]]),Dp={class:`ask-gsap-wrapper`},Op={class:`top-bar`},kp={class:`ask-gsap-container`},Ap={class:`column col-left`},jp={class:`column col-middle`},Mp={class:`ai-prompt-box`},Np=[`disabled`],Pp={key:0},Fp={key:1},Ip={class:`column col-right`},Lp={class:`col-header`},Rp=[`disabled`],zp=Ao({__name:`askforGsap`,setup(e){let t=W(``);ar(()=>{t.value=localStorage.getItem(`gemini_api_key`)||``});let n=()=>{localStorage.setItem(`gemini_api_key`,t.value)},r=W(``),i=W(``),a=W(``),o=W(!1),s=W(!1),c=async()=>{if(a.value)try{await navigator.clipboard.writeText(a.value),s.value=!0,setTimeout(()=>{s.value=!1},2e3)}catch(e){console.error(`Failed to copy text: `,e)}},l=async()=>{if(!r.value.trim()||!i.value.trim()){alert(`Please put HTML and Ask AI!`);return}if(!t.value.trim()){alert(`Please put Gemini API Key!`);return}o.value=!0,a.value=``;try{let e=`Tôi có đoạn mã HTML sau:
\`\`\`html
${r.value}
\`\`\`

Yêu cầu về hiệu ứng: ${i.value}

Vui lòng viết mã JavaScript có sử dụng thư viện GSAP (kết hợp ScrollTrigger) để thực hiện hiệu ứng này.
QUAN TRỌNG: 
1. Chỉ trả về trực tiếp MÃ CODE JAVASCRIPT hoàn chỉnh, KHÔNG có giải thích mở đầu hay kết thúc.
2. KHÔNG bao bọc bằng ký hiệu markdown \`\`\`javascript hay \`\`\`.
3. Đảm bảo mã có thể copy và chạy được trực tiếp (nhớ gọi gsap.registerPlugin).`,n=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${t.value}`,o=await fetch(n,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{temperature:.2}})});if(!o.ok)throw Error(`API Error: ${o.status} - ${o.statusText}`);let s=o.body.getReader(),c=new TextDecoder(`utf-8`),l=``;for(;;){let{done:e,value:t}=await s.read();if(t){l+=c.decode(t,{stream:!0});let e;for(;(e=l.indexOf(`
`))>=0;){let t=l.slice(0,e).trim();if(l=l.slice(e+1),t.startsWith(`data:`)){let e=t.slice(5).trim();if(e===`[DONE]`||!e)continue;try{let t=JSON.parse(e),n=``;t.candidates&&t.candidates.length>0&&t.candidates[0].content&&t.candidates[0].content.parts&&t.candidates[0].content.parts.length>0&&(n=t.candidates[0].content.parts[0].text),n&&(a.value+=n,yn(()=>{let e=document.querySelector(`.col-right .code-editor`);e&&(e.scrollTop=e.scrollHeight)}))}catch(t){console.error(`Lỗi parse JSON đoạn stream:`,t,e)}}}}if(e)break}}catch(e){console.error(`AI Error:`,e),a.value+=`\n[Lỗi truy cập AI]: ${e.message}`}finally{o.value=!1}};return(e,u)=>(q(),J(`div`,Dp,[Y(`div`,Op,[G(Y(`input`,{type:`password`,"onUpdate:modelValue":u[0]||=e=>t.value=e,onChange:n,placeholder:`Gemimi API Key (Required to use real AI)`,class:`api-key-input`},null,544),[[ho,t.value]]),u[4]||=Y(`a`,{href:`https://aistudio.google.com/app/apikey`,target:`_blank`,class:`get-key-link`},`Get API Key`,-1)]),Y(`div`,kp,[Y(`div`,Ap,[u[5]||=Y(`h2`,{class:`col-title`},`HTML Code`,-1),G(Y(`textarea`,{"onUpdate:modelValue":u[1]||=e=>r.value=e,class:`code-editor`,placeholder:`HTML here...`},null,512),[[ho,r.value]])]),Y(`div`,jp,[u[6]||=Y(`h2`,{class:`col-title`},`Ask AI`,-1),Y(`div`,Mp,[G(Y(`textarea`,{"onUpdate:modelValue":u[2]||=e=>i.value=e,class:`prompt-input`,placeholder:`Beginning ask AI to make an animation for this html code`},null,512),[[ho,i.value]]),Y(`button`,{onClick:l,class:`submit-btn`,disabled:o.value},[o.value?(q(),J(`span`,Fp,`AI working...`)):(q(),J(`span`,Pp,`Submit`))],8,Np)])]),Y(`div`,Ip,[Y(`div`,Lp,[u[7]||=Y(`h2`,{class:`col-title`},`AI Result (Real-time Stream)`,-1),Y(`button`,{class:pe([`copy-btn`,{copied:s.value}]),onClick:c,disabled:!a.value},V(s.value?`Copied`:`Copy`),11,Rp)]),G(Y(`textarea`,{"onUpdate:modelValue":u[3]||=e=>a.value=e,class:`code-editor readonly`,readonly:``,placeholder:`Result from AI ....`},null,512),[[ho,a.value]])])])]))}},[[`__scopeId`,`data-v-e57dc2fe`]]),Bp={name:`CommonGsap`,data(){return{copiedRow:null}},methods:{copyCode(e,t){let n=t.innerText;navigator.clipboard.writeText(n).then(()=>{this.copiedRow=e,setTimeout(()=>{this.copiedRow=null},2e3)})}}},Vp={class:`common-gsap`},Hp={class:`row`},Up={class:`col left`},Wp={class:`code-box`},Gp={ref:`code1`},Kp={class:`col center`},qp={class:`code-box`},Jp={ref:`css1`},Yp={class:`col right`},Xp={class:`code-box`},Zp={ref:`gsap1`},Qp={class:`row`},$p={class:`col left`},em={class:`code-box`},tm={ref:`code2`},nm={class:`col right`},rm={class:`code-box`},im={ref:`gsap2`},am={class:`row`},om={class:`col left`},sm={class:`code-box`},cm={ref:`code3`},lm={class:`col right`},um={class:`code-box`},dm={ref:`gsap3`};function fm(e,t,n,r,i,a){return q(),J(`div`,Vp,[t[3]||=Y(`h2`,null,`Pin Photo when Scroll`,-1),Y(`div`,Hp,[Y(`div`,Up,[Y(`div`,Wp,[Y(`pre`,null,[Y(`code`,Gp,`<div class="scrollStick">
    <div class="content">
        <div class="right sticky">
            <p class="photo">PHOTO</p>
        </div>
        <div class="left">
            CONTENT DUMMY
        </div>
    </div>
</div>`,512)])])]),Y(`div`,Kp,[Y(`div`,qp,[Y(`pre`,null,[Y(`code`,Jp,`.scrollStick .right {
    padding-top: 143px;
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 512px);
}`,512)])])]),Y(`div`,Yp,[Y(`div`,Xp,[Y(`pre`,null,[Y(`code`,Zp,`$(window).on("load", function () {
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
});`,512)]),Y(`button`,{class:pe([`copy-btn`,{copied:i.copiedRow===1}]),onClick:t[0]||=t=>a.copyCode(1,e.$refs.gsap1)},V(i.copiedRow===1?`Copied`:`Copy`),3)])])]),Y(`div`,Qp,[Y(`div`,$p,[Y(`div`,em,[Y(`pre`,null,[Y(`code`,tm,`<div>HTML content 2</div>`,512)])])]),Y(`div`,nm,[Y(`div`,rm,[Y(`pre`,null,[Y(`code`,im,`gsap.to(".box2", { y: 200 });`,512)]),Y(`button`,{class:pe([`copy-btn`,{copied:i.copiedRow===2}]),onClick:t[1]||=t=>a.copyCode(2,e.$refs.gsap2)},V(i.copiedRow===2?`Copied`:`Copy`),3)])])]),Y(`div`,am,[Y(`div`,om,[Y(`div`,sm,[Y(`pre`,null,[Y(`code`,cm,`<div>HTML content 3</div>`,512)])])]),Y(`div`,lm,[Y(`div`,um,[Y(`pre`,null,[Y(`code`,dm,`gsap.to(".box3", { rotation: 360 });`,512)]),Y(`button`,{class:pe([`copy-btn`,{copied:i.copiedRow===3}]),onClick:t[2]||=t=>a.copyCode(3,e.$refs.gsap3)},V(i.copiedRow===3?`Copied`:`Copy`),3)])])])])}var pm=[{path:`/`,redirect:`/common`},{path:`/common`,component:ou},{path:`/menu`,component:il},{path:`/fontSize`,component:af},{path:`/fontsFace`,component:Cf},{path:`/ftFixed`,component:Ep},{path:`/gtagName`,component:Af},{path:`/menu-toggle`,component:rl},{path:`/layout`,component:Uu},{path:`/askforGsap`,component:zp},{path:`/commonGsap`,component:Ao(Bp,[[`render`,fm],[`__scopeId`,`data-v-1b59b1a5`]])},{path:`/convert`,component:Kd},{path:`/list-modal`,component:jd},{path:`/wordpress`,component:Nf}],mm=Vc({history:oc(`/toolvuejsv2/`),routes:pm});Do(Lo).use(mm).mount(`#app`);