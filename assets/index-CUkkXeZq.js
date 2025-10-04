function iI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d_={exports:{}},cu={},f_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),oI=Symbol.for("react.portal"),aI=Symbol.for("react.fragment"),lI=Symbol.for("react.strict_mode"),uI=Symbol.for("react.profiler"),cI=Symbol.for("react.provider"),hI=Symbol.for("react.context"),dI=Symbol.for("react.forward_ref"),fI=Symbol.for("react.suspense"),pI=Symbol.for("react.memo"),mI=Symbol.for("react.lazy"),Am=Symbol.iterator;function gI(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var p_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m_=Object.assign,g_={};function ls(t,e,n){this.props=t,this.context=e,this.refs=g_,this.updater=n||p_}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y_(){}y_.prototype=ls.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=g_,this.updater=n||p_}var Md=bd.prototype=new y_;Md.constructor=bd;m_(Md,ls.prototype);Md.isPureReactComponent=!0;var Rm=Array.isArray,__=Object.prototype.hasOwnProperty,Fd={current:null},v_={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)__.call(e,r)&&!v_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$o,type:t,key:s,ref:o,props:i,_owner:Fd.current}}function yI(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function _I(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_I(""+t.key):e.toString(36)}function Xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case oI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tc(o,0):r,Rm(i)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),Xa(i,e,n,"",function(c){return c})):i!=null&&(Ud(i)&&(i=yI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Tc(s,l);o+=Xa(s,e,n,u,i)}else if(u=gI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Tc(s,l++),o+=Xa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(t,e,n){if(t==null)return t;var r=[],i=0;return Xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Ya={transition:null},EI={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Fd};function w_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=ls;te.Fragment=aI;te.Profiler=uI;te.PureComponent=bd;te.StrictMode=lI;te.Suspense=fI;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI;te.act=w_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=m_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)__.call(e,u)&&!v_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:$o,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:hI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cI,_context:t},t.Consumer=t};te.createElement=E_;te.createFactory=function(t){var e=E_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:dI,render:t}};te.isValidElement=Ud;te.lazy=function(t){return{$$typeof:mI,_payload:{_status:-1,_result:t},_init:vI}};te.memo=function(t,e){return{$$typeof:pI,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};te.unstable_act=w_;te.useCallback=function(t,e){return ut.current.useCallback(t,e)};te.useContext=function(t){return ut.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};te.useEffect=function(t,e){return ut.current.useEffect(t,e)};te.useId=function(){return ut.current.useId()};te.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ut.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};te.useRef=function(t){return ut.current.useRef(t)};te.useState=function(t){return ut.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ut.current.useTransition()};te.version="18.3.1";f_.exports=te;var j=f_.exports;const Kt=sI(j),wI=iI({__proto__:null,default:Kt},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TI=j,II=Symbol.for("react.element"),SI=Symbol.for("react.fragment"),AI=Object.prototype.hasOwnProperty,RI=TI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PI={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AI.call(e,r)&&!PI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:II,type:t,key:s,ref:o,props:i,_owner:RI.current}}cu.Fragment=SI;cu.jsx=T_;cu.jsxs=T_;d_.exports=cu;var O=d_.exports,ch={},I_={exports:{}},Ct={},S_={exports:{}},A_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var _e=Z-1>>>1,ce=$[_e];if(0<i(ce,Q))$[_e]=Q,$[Z]=ce,Z=_e;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var _e=0,ce=$.length,Re=ce>>>1;_e<Re;){var gn=2*(_e+1)-1,yn=$[gn],_n=gn+1,vn=$[_n];if(0>i(yn,Z))_n<ce&&0>i(vn,yn)?($[_e]=vn,$[_n]=Z,_e=_n):($[_e]=yn,$[gn]=Z,_e=gn);else if(_n<ce&&0>i(vn,Z))$[_e]=vn,$[_n]=Z,_e=_n;else break e}}return Q}function i($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,T=!1,R=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function L($){if(P=!1,I($),!R)if(n(u)!==null)R=!0,_s(U);else{var Q=n(c);Q!==null&&mn(L,Q.startTime-$)}}function U($,Q){R=!1,P&&(P=!1,v(y),y=-1),T=!0;var Z=m;try{for(I(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!C());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var ce=_e(p.expirationTime<=Q);Q=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),I(Q)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var gn=n(c);gn!==null&&mn(L,gn.startTime-Q),Re=!1}return Re}finally{p=null,m=Z,T=!1}}var z=!1,w=null,y=-1,E=5,S=-1;function C(){return!(t.unstable_now()-S<E)}function D(){if(w!==null){var $=t.unstable_now();S=$;var Q=!0;try{Q=w(!0,$)}finally{Q?A():(z=!1,w=null)}}else z=!1}var A;if(typeof _=="function")A=function(){_(D)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,Or=Nt.port2;Nt.port1.onmessage=D,A=function(){Or.postMessage(null)}}else A=function(){N(D,0)};function _s($){w=$,z||(z=!0,A())}function mn($,Q){y=N(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,_s(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Z=m;m=Q;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Q()}finally{m=Z}},t.unstable_scheduleCallback=function($,Q,Z){var _e=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Z+ce,$={id:d++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:ce,sortIndex:-1},Z>_e?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(v(y),y=-1):P=!0,mn(L,Z-_e))):($.sortIndex=ce,e(u,$),R||T||(R=!0,_s(U))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Q=m;return function(){var Z=m;m=Q;try{return $.apply(this,arguments)}finally{m=Z}}}})(A_);S_.exports=A_;var CI=S_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kI=j,Pt=CI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,fo={};function si(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(fo[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hh=Object.prototype.hasOwnProperty,NI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},km={};function DI(t){return hh.call(km,t)?!0:hh.call(Cm,t)?!1:NI.test(t)?km[t]=!0:(Cm[t]=!0,!1)}function OI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xI(t,e,n,r){if(e===null||typeof e>"u"||OI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Bd);qe[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Bd);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Bd);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xI(e,n,i,r)&&(n=null),r||i===null?DI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=kI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Ic;function $s(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Sc=!1;function Ac(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function LI(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Ac(t.type,!1),t;case 11:return t=Ac(t.type.render,!1),t;case 1:return t=Ac(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case Ei:return"Portal";case dh:return"Profiler";case $d:return"StrictMode";case fh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C_:return(t.displayName||"Context")+".Consumer";case P_:return(t._context.displayName||"Context")+".Provider";case Hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wd:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function VI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===$d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bI(t){var e=N_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=bI(t))}function D_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O_(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function yh(t,e){O_(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_h(t,e.type,n):e.hasOwnProperty("defaultValue")&&_h(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _h(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Hs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function x_(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,V_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MI=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){MI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function b_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function M_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=b_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wh(t,e){if(e){if(FI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=null;function qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sh=null,Li=null,Vi=null;function Vm(t){if(t=qo(t)){if(typeof Sh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=mu(e),Sh(t.stateNode,t.type,e))}}function F_(t){Li?Vi?Vi.push(t):Vi=[t]:Li=t}function U_(){if(Li){var t=Li,e=Vi;if(Vi=Li=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function j_(t,e){return t(e)}function B_(){}var Rc=!1;function z_(t,e,n){if(Rc)return t(e,n);Rc=!0;try{return j_(t,e,n)}finally{Rc=!1,(Li!==null||Vi!==null)&&(B_(),U_())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ah=!1;if(On)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Ah=!1}function UI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Zs=!1,El=null,wl=!1,Rh=null,jI={onError:function(t){Zs=!0,El=t}};function BI(t,e,n,r,i,s,o,l,u){Zs=!1,El=null,UI.apply(jI,arguments)}function zI(t,e,n,r,i,s,o,l,u){if(BI.apply(this,arguments),Zs){if(Zs){var c=El;Zs=!1,El=null}else throw Error(F(198));wl||(wl=!0,Rh=c)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bm(t){if(oi(t)!==t)throw Error(F(188))}function $I(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bm(i),t;if(s===r)return bm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function H_(t){return t=$I(t),t!==null?W_(t):null}function W_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W_(t);if(e!==null)return e;t=t.sibling}return null}var q_=Pt.unstable_scheduleCallback,Mm=Pt.unstable_cancelCallback,HI=Pt.unstable_shouldYield,WI=Pt.unstable_requestPaint,Pe=Pt.unstable_now,qI=Pt.unstable_getCurrentPriorityLevel,Kd=Pt.unstable_ImmediatePriority,K_=Pt.unstable_UserBlockingPriority,Tl=Pt.unstable_NormalPriority,KI=Pt.unstable_LowPriority,G_=Pt.unstable_IdlePriority,hu=null,sn=null;function GI(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:XI,QI=Math.log,JI=Math.LN2;function XI(t){return t>>>=0,t===0?32:31-(QI(t)/JI|0)|0}var xa=64,La=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function YI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=YI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q_(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function eS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function J_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X_,Qd,Y_,Z_,ev,Ch=!1,Va=[],lr=null,ur=null,cr=null,go=new Map,yo=new Map,Yn=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qo(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nS(t,e,n,r,i){switch(e){case"focusin":return lr=Vs(lr,t,e,n,r,i),!0;case"dragenter":return ur=Vs(ur,t,e,n,r,i),!0;case"mouseover":return cr=Vs(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return go.set(s,Vs(go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,Vs(yo.get(s)||null,t,e,n,r,i)),!0}return!1}function tv(t){var e=jr(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=$_(n),e!==null){t.blockedOn=e,ev(t.priority,function(){Y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ih=r,n.target.dispatchEvent(r),Ih=null}else return e=qo(n),e!==null&&Qd(e),t.blockedOn=n,!1;e.shift()}return!0}function Um(t,e,n){Za(t)&&n.delete(e)}function rS(){Ch=!1,lr!==null&&Za(lr)&&(lr=null),ur!==null&&Za(ur)&&(ur=null),cr!==null&&Za(cr)&&(cr=null),go.forEach(Um),yo.forEach(Um)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ch||(Ch=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,rS)))}function _o(t){function e(i){return bs(i,t)}if(0<Va.length){bs(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&bs(lr,t),ur!==null&&bs(ur,t),cr!==null&&bs(cr,t),go.forEach(e),yo.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)tv(n),n.blockedOn===null&&Yn.shift()}var bi=Bn.ReactCurrentBatchConfig,Sl=!0;function iS(t,e,n,r){var i=ue,s=bi.transition;bi.transition=null;try{ue=1,Jd(t,e,n,r)}finally{ue=i,bi.transition=s}}function sS(t,e,n,r){var i=ue,s=bi.transition;bi.transition=null;try{ue=4,Jd(t,e,n,r)}finally{ue=i,bi.transition=s}}function Jd(t,e,n,r){if(Sl){var i=kh(t,e,n,r);if(i===null)Mc(t,e,r,Al,n),Fm(t,r);else if(nS(i,t,e,n,r))r.stopPropagation();else if(Fm(t,r),e&4&&-1<tS.indexOf(t)){for(;i!==null;){var s=qo(i);if(s!==null&&X_(s),s=kh(t,e,n,r),s===null&&Mc(t,e,r,Al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mc(t,e,r,null,n)}}var Al=null;function kh(t,e,n,r){if(Al=null,t=qd(r),t=jr(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function nv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qI()){case Kd:return 1;case K_:return 4;case Tl:case KI:return 16;case G_:return 536870912;default:return 16}default:return 16}}var ir=null,Xd=null,el=null;function rv(){if(el)return el;var t,e=Xd,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return el=i.slice(t,1<r?1-r:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function jm(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ba:jm,this.isPropagationStopped=jm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=kt(us),Wo=we({},us,{view:0,detail:0}),oS=kt(Wo),Cc,kc,Ms,du=we({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ms&&(Ms&&t.type==="mousemove"?(Cc=t.screenX-Ms.screenX,kc=t.screenY-Ms.screenY):kc=Cc=0,Ms=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Bm=kt(du),aS=we({},du,{dataTransfer:0}),lS=kt(aS),uS=we({},Wo,{relatedTarget:0}),Nc=kt(uS),cS=we({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=kt(cS),dS=we({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fS=kt(dS),pS=we({},us,{data:0}),zm=kt(pS),mS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yS[t])?!!e[t]:!1}function Zd(){return _S}var vS=we({},Wo,{key:function(t){if(t.key){var e=mS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ES=kt(vS),wS=we({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=kt(wS),TS=we({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),IS=kt(TS),SS=we({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),AS=kt(SS),RS=we({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PS=kt(RS),CS=[9,13,27,32],ef=On&&"CompositionEvent"in window,eo=null;On&&"documentMode"in document&&(eo=document.documentMode);var kS=On&&"TextEvent"in window&&!eo,iv=On&&(!ef||eo&&8<eo&&11>=eo),Hm=" ",Wm=!1;function sv(t,e){switch(t){case"keyup":return CS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function NS(t,e){switch(t){case"compositionend":return ov(e);case"keypress":return e.which!==32?null:(Wm=!0,Hm);case"textInput":return t=e.data,t===Hm&&Wm?null:t;default:return null}}function DS(t,e){if(Ti)return t==="compositionend"||!ef&&sv(t,e)?(t=rv(),el=Xd=ir=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iv&&e.locale!=="ko"?null:e.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OS[t.type]:e==="textarea"}function av(t,e,n,r){F_(r),e=Rl(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var to=null,vo=null;function xS(t){_v(t,0)}function fu(t){var e=Ai(t);if(D_(e))return t}function LS(t,e){if(t==="change")return e}var lv=!1;if(On){var Dc;if(On){var Oc="oninput"in document;if(!Oc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Oc=typeof Km.oninput=="function"}Dc=Oc}else Dc=!1;lv=Dc&&(!document.documentMode||9<document.documentMode)}function Gm(){to&&(to.detachEvent("onpropertychange",uv),vo=to=null)}function uv(t){if(t.propertyName==="value"&&fu(vo)){var e=[];av(e,vo,t,qd(t)),z_(xS,e)}}function VS(t,e,n){t==="focusin"?(Gm(),to=e,vo=n,to.attachEvent("onpropertychange",uv)):t==="focusout"&&Gm()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(vo)}function MS(t,e){if(t==="click")return fu(e)}function FS(t,e){if(t==="input"||t==="change")return fu(e)}function US(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:US;function Eo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hh.call(e,i)||!Xt(t[i],e[i]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jS(t){var e=hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cv(n.ownerDocument.documentElement,n)){if(r!==null&&tf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jm(n,s);var o=Jm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BS=On&&"documentMode"in document&&11>=document.documentMode,Ii=null,Nh=null,no=null,Dh=!1;function Xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dh||Ii==null||Ii!==vl(r)||(r=Ii,"selectionStart"in r&&tf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&Eo(no,r)||(no=r,r=Rl(Nh,"onSelect"),0<r.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},xc={},dv={};On&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function pu(t){if(xc[t])return xc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dv)return xc[t]=e[n];return t}var fv=pu("animationend"),pv=pu("animationiteration"),mv=pu("animationstart"),gv=pu("transitionend"),yv=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){yv.set(t,e),si(e,[t])}for(var Lc=0;Lc<Ym.length;Lc++){var Vc=Ym[Lc],zS=Vc.toLowerCase(),$S=Vc[0].toUpperCase()+Vc.slice(1);Rr(zS,"on"+$S)}Rr(fv,"onAnimationEnd");Rr(pv,"onAnimationIteration");Rr(mv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(gv,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zI(r,e,void 0,t),t.currentTarget=null}function _v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,c),s=u}}}if(wl)throw t=Rh,wl=!1,Rh=null,t}function me(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(vv(e,t,2,!1),n.add(r))}function bc(t,e,n){var r=0;e&&(r|=4),vv(n,t,r,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Fa]){t[Fa]=!0,R_.forEach(function(n){n!=="selectionchange"&&(HS.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,bc("selectionchange",!1,e))}}function vv(t,e,n,r){switch(nv(e)){case 1:var i=iS;break;case 4:i=sS;break;default:i=Jd}n=i.bind(null,e,n,t),i=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}z_(function(){var c=s,d=qd(n),p=[];e:{var m=yv.get(t);if(m!==void 0){var T=Yd,R=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":T=ES;break;case"focusin":R="focus",T=Nc;break;case"focusout":R="blur",T=Nc;break;case"beforeblur":case"afterblur":T=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=lS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=IS;break;case fv:case pv:case mv:T=hS;break;case gv:T=AS;break;case"scroll":T=oS;break;case"wheel":T=PS;break;case"copy":case"cut":case"paste":T=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=$m}var P=(e&4)!==0,N=!P&&t==="scroll",v=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,I;_!==null;){I=_;var L=I.stateNode;if(I.tag===5&&L!==null&&(I=L,v!==null&&(L=mo(_,v),L!=null&&P.push(To(_,L,I)))),N)break;_=_.return}0<P.length&&(m=new T(m,R,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Ih&&(R=n.relatedTarget||n.fromElement)&&(jr(R)||R[xn]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=c,R=R?jr(R):null,R!==null&&(N=oi(R),R!==N||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=c),T!==R)){if(P=Bm,L="onMouseLeave",v="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=$m,L="onPointerLeave",v="onPointerEnter",_="pointer"),N=T==null?m:Ai(T),I=R==null?m:Ai(R),m=new P(L,_+"leave",T,n,d),m.target=N,m.relatedTarget=I,L=null,jr(d)===c&&(P=new P(v,_+"enter",R,n,d),P.target=I,P.relatedTarget=N,L=P),N=L,T&&R)t:{for(P=T,v=R,_=0,I=P;I;I=gi(I))_++;for(I=0,L=v;L;L=gi(L))I++;for(;0<_-I;)P=gi(P),_--;for(;0<I-_;)v=gi(v),I--;for(;_--;){if(P===v||v!==null&&P===v.alternate)break t;P=gi(P),v=gi(v)}P=null}else P=null;T!==null&&eg(p,m,T,P,!1),R!==null&&N!==null&&eg(p,N,R,P,!0)}}e:{if(m=c?Ai(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var U=LS;else if(qm(m))if(lv)U=FS;else{U=bS;var z=VS}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=MS);if(U&&(U=U(t,c))){av(p,U,n,d);break e}z&&z(t,m,c),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&_h(m,"number",m.value)}switch(z=c?Ai(c):window,t){case"focusin":(qm(z)||z.contentEditable==="true")&&(Ii=z,Nh=c,no=null);break;case"focusout":no=Nh=Ii=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,Xm(p,n,d);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":Xm(p,n,d)}var w;if(ef)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ti?sv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(iv&&n.locale!=="ko"&&(Ti||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ti&&(w=rv()):(ir=d,Xd="value"in ir?ir.value:ir.textContent,Ti=!0)),z=Rl(c,y),0<z.length&&(y=new zm(y,t,null,n,d),p.push({event:y,listeners:z}),w?y.data=w:(w=ov(n),w!==null&&(y.data=w)))),(w=kS?NS(t,n):DS(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(d=new zm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}_v(p,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mo(t,n),s!=null&&r.unshift(To(t,s,i)),s=mo(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=mo(n,s),u!=null&&o.unshift(To(n,u,l))):i||(u=mo(n,s),u!=null&&o.push(To(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(WS,`
`).replace(qS,"")}function Ua(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(F(425))}function Pl(){}var Oh=null,xh=null;function Lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vh=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(QS)}:Vh;function QS(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),nn="__reactFiber$"+cs,Io="__reactProps$"+cs,xn="__reactContainer$"+cs,bh="__reactEvents$"+cs,JS="__reactListeners$"+cs,XS="__reactHandles$"+cs;function jr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[nn])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[nn]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function mu(t){return t[Io]||null}var Mh=[],Ri=-1;function Pr(t){return{current:t}}function ge(t){0>Ri||(t.current=Mh[Ri],Mh[Ri]=null,Ri--)}function de(t,e){Ri++,Mh[Ri]=t.current,t.current=e}var Er={},rt=Pr(Er),gt=Pr(!1),Gr=Er;function Hi(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function Cl(){ge(gt),ge(rt)}function ig(t,e,n){if(rt.current!==Er)throw Error(F(168));de(rt,e),de(gt,n)}function Ev(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,VI(t)||"Unknown",i));return we({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Gr=rt.current,de(rt,t),de(gt,gt.current),!0}function sg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Ev(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,ge(gt),ge(rt),de(rt,t)):ge(gt),de(gt,n)}var Sn=null,gu=!1,Uc=!1;function wv(t){Sn===null?Sn=[t]:Sn.push(t)}function YS(t){gu=!0,wv(t)}function Cr(){if(!Uc&&Sn!==null){Uc=!0;var t=0,e=ue;try{var n=Sn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,gu=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),q_(Kd,Cr),i}finally{ue=e,Uc=!1}}return null}var Pi=[],Ci=0,Nl=null,Dl=0,Dt=[],Ot=0,Qr=null,An=1,Rn="";function Mr(t,e){Pi[Ci++]=Dl,Pi[Ci++]=Nl,Nl=t,Dl=e}function Tv(t,e,n){Dt[Ot++]=An,Dt[Ot++]=Rn,Dt[Ot++]=Qr,Qr=t;var r=An;t=Rn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-Qt(e)+i|n<<i|r,Rn=s+t}else An=1<<s|n<<i|r,Rn=t}function nf(t){t.return!==null&&(Mr(t,1),Tv(t,1,0))}function rf(t){for(;t===Nl;)Nl=Pi[--Ci],Pi[Ci]=null,Dl=Pi[--Ci],Pi[Ci]=null;for(;t===Qr;)Qr=Dt[--Ot],Dt[Ot]=null,Rn=Dt[--Ot],Dt[Ot]=null,An=Dt[--Ot],Dt[Ot]=null}var At=null,It=null,ye=!1,Ht=null;function Iv(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,It=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:An,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,It=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uh(t){if(ye){var e=It;if(e){var n=e;if(!og(t,e)){if(Fh(t))throw Error(F(418));e=hr(n.nextSibling);var r=At;e&&og(t,e)?Iv(r,n):(t.flags=t.flags&-4097|2,ye=!1,At=t)}}else{if(Fh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ye=!1,At=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function ja(t){if(t!==At)return!1;if(!ye)return ag(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lh(t.type,t.memoizedProps)),e&&(e=It)){if(Fh(t))throw Sv(),Error(F(418));for(;e;)Iv(t,e),e=hr(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=At?hr(t.stateNode.nextSibling):null;return!0}function Sv(){for(var t=It;t;)t=hr(t.nextSibling)}function Wi(){It=At=null,ye=!1}function sf(t){Ht===null?Ht=[t]:Ht.push(t)}var ZS=Bn.ReactCurrentBatchConfig;function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function Av(t){function e(v,_){if(t){var I=v.deletions;I===null?(v.deletions=[_],v.flags|=16):I.push(_)}}function n(v,_){if(!t)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function r(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(v,_){return v=mr(v,_),v.index=0,v.sibling=null,v}function s(v,_,I){return v.index=I,t?(I=v.alternate,I!==null?(I=I.index,I<_?(v.flags|=2,_):I):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,_,I,L){return _===null||_.tag!==6?(_=qc(I,v.mode,L),_.return=v,_):(_=i(_,I),_.return=v,_)}function u(v,_,I,L){var U=I.type;return U===wi?d(v,_,I.props.children,L,I.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Jn&&lg(U)===_.type)?(L=i(_,I.props),L.ref=Fs(v,_,I),L.return=v,L):(L=ll(I.type,I.key,I.props,null,v.mode,L),L.ref=Fs(v,_,I),L.return=v,L)}function c(v,_,I,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=Kc(I,v.mode,L),_.return=v,_):(_=i(_,I.children||[]),_.return=v,_)}function d(v,_,I,L,U){return _===null||_.tag!==7?(_=Wr(I,v.mode,L,U),_.return=v,_):(_=i(_,I),_.return=v,_)}function p(v,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=qc(""+_,v.mode,I),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:return I=ll(_.type,_.key,_.props,null,v.mode,I),I.ref=Fs(v,null,_),I.return=v,I;case Ei:return _=Kc(_,v.mode,I),_.return=v,_;case Jn:var L=_._init;return p(v,L(_._payload),I)}if(Hs(_)||xs(_))return _=Wr(_,v.mode,I,null),_.return=v,_;Ba(v,_)}return null}function m(v,_,I,L){var U=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return U!==null?null:l(v,_,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Na:return I.key===U?u(v,_,I,L):null;case Ei:return I.key===U?c(v,_,I,L):null;case Jn:return U=I._init,m(v,_,U(I._payload),L)}if(Hs(I)||xs(I))return U!==null?null:d(v,_,I,L,null);Ba(v,I)}return null}function T(v,_,I,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return v=v.get(I)||null,l(_,v,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Na:return v=v.get(L.key===null?I:L.key)||null,u(_,v,L,U);case Ei:return v=v.get(L.key===null?I:L.key)||null,c(_,v,L,U);case Jn:var z=L._init;return T(v,_,I,z(L._payload),U)}if(Hs(L)||xs(L))return v=v.get(I)||null,d(_,v,L,U,null);Ba(_,L)}return null}function R(v,_,I,L){for(var U=null,z=null,w=_,y=_=0,E=null;w!==null&&y<I.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var S=m(v,w,I[y],L);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(v,w),_=s(S,_,y),z===null?U=S:z.sibling=S,z=S,w=E}if(y===I.length)return n(v,w),ye&&Mr(v,y),U;if(w===null){for(;y<I.length;y++)w=p(v,I[y],L),w!==null&&(_=s(w,_,y),z===null?U=w:z.sibling=w,z=w);return ye&&Mr(v,y),U}for(w=r(v,w);y<I.length;y++)E=T(w,v,y,I[y],L),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),_=s(E,_,y),z===null?U=E:z.sibling=E,z=E);return t&&w.forEach(function(C){return e(v,C)}),ye&&Mr(v,y),U}function P(v,_,I,L){var U=xs(I);if(typeof U!="function")throw Error(F(150));if(I=U.call(I),I==null)throw Error(F(151));for(var z=U=null,w=_,y=_=0,E=null,S=I.next();w!==null&&!S.done;y++,S=I.next()){w.index>y?(E=w,w=null):E=w.sibling;var C=m(v,w,S.value,L);if(C===null){w===null&&(w=E);break}t&&w&&C.alternate===null&&e(v,w),_=s(C,_,y),z===null?U=C:z.sibling=C,z=C,w=E}if(S.done)return n(v,w),ye&&Mr(v,y),U;if(w===null){for(;!S.done;y++,S=I.next())S=p(v,S.value,L),S!==null&&(_=s(S,_,y),z===null?U=S:z.sibling=S,z=S);return ye&&Mr(v,y),U}for(w=r(v,w);!S.done;y++,S=I.next())S=T(w,v,y,S.value,L),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?y:S.key),_=s(S,_,y),z===null?U=S:z.sibling=S,z=S);return t&&w.forEach(function(D){return e(v,D)}),ye&&Mr(v,y),U}function N(v,_,I,L){if(typeof I=="object"&&I!==null&&I.type===wi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Na:e:{for(var U=I.key,z=_;z!==null;){if(z.key===U){if(U=I.type,U===wi){if(z.tag===7){n(v,z.sibling),_=i(z,I.props.children),_.return=v,v=_;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Jn&&lg(U)===z.type){n(v,z.sibling),_=i(z,I.props),_.ref=Fs(v,z,I),_.return=v,v=_;break e}n(v,z);break}else e(v,z);z=z.sibling}I.type===wi?(_=Wr(I.props.children,v.mode,L,I.key),_.return=v,v=_):(L=ll(I.type,I.key,I.props,null,v.mode,L),L.ref=Fs(v,_,I),L.return=v,v=L)}return o(v);case Ei:e:{for(z=I.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(v,_.sibling),_=i(_,I.children||[]),_.return=v,v=_;break e}else{n(v,_);break}else e(v,_);_=_.sibling}_=Kc(I,v.mode,L),_.return=v,v=_}return o(v);case Jn:return z=I._init,N(v,_,z(I._payload),L)}if(Hs(I))return R(v,_,I,L);if(xs(I))return P(v,_,I,L);Ba(v,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(v,_.sibling),_=i(_,I),_.return=v,v=_):(n(v,_),_=qc(I,v.mode,L),_.return=v,v=_),o(v)):n(v,_)}return N}var qi=Av(!0),Rv=Av(!1),Ol=Pr(null),xl=null,ki=null,of=null;function af(){of=ki=xl=null}function lf(t){var e=Ol.current;ge(Ol),t._currentValue=e}function jh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){xl=t,of=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(xl===null)throw Error(F(308));ki=t,xl.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var Br=null;function uf(t){Br===null?Br=[t]:Br.push(t)}function Pv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,uf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,uf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}function ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,T=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(T,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(T,p,m):R,m==null)break e;p=we({},p,m);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=p):d=d.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=p}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ko={},on=Pr(Ko),So=Pr(Ko),Ao=Pr(Ko);function zr(t){if(t===Ko)throw Error(F(174));return t}function hf(t,e){switch(de(Ao,e),de(So,t),de(on,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eh(e,t)}ge(on),de(on,e)}function Ki(){ge(on),ge(So),ge(Ao)}function kv(t){zr(Ao.current);var e=zr(on.current),n=Eh(e,t.type);e!==n&&(de(So,t),de(on,n))}function df(t){So.current===t&&(ge(on),ge(So))}var ve=Pr(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function ff(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var rl=Bn.ReactCurrentDispatcher,Bc=Bn.ReactCurrentBatchConfig,Jr=0,Ee=null,xe=null,Fe=null,bl=!1,ro=!1,Ro=0,e1=0;function Ye(){throw Error(F(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function mf(t,e,n,r,i,s){if(Jr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?i1:s1,t=n(r,i),ro){s=0;do{if(ro=!1,Ro=0,25<=s)throw Error(F(301));s+=1,Fe=xe=null,e.updateQueue=null,rl.current=o1,t=n(r,i)}while(ro)}if(rl.current=Ml,e=xe!==null&&xe.next!==null,Jr=0,Fe=xe=Ee=null,bl=!1,e)throw Error(F(300));return t}function gf(){var t=Ro!==0;return Ro=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Ut(){if(xe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,xe=t;else{if(t===null)throw Error(F(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Po(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Jr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=d,Xr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Nv(){}function Dv(t,e){var n=Ee,r=Ut(),i=e(),s=!Xt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,yf(Lv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Co(9,xv.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(F(349));Jr&30||Ov(n,e,i)}return i}function Ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xv(t,e,n,r){e.value=n,e.getSnapshot=r,Vv(e)&&bv(t)}function Lv(t,e,n){return n(function(){Vv(e)&&bv(t)})}function Vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function bv(t){var e=Ln(t,1);e!==null&&Jt(e,t,1,-1)}function hg(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=r1.bind(null,Ee,t),[e.memoizedState,t]}function Co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Mv(){return Ut().memoizedState}function il(t,e,n,r){var i=tn();Ee.flags|=t,i.memoizedState=Co(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&pf(r,o.deps)){i.memoizedState=Co(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Co(1|e,n,s,r)}function dg(t,e){return il(8390656,8,t,e)}function yf(t,e){return yu(2048,8,t,e)}function Fv(t,e){return yu(4,2,t,e)}function Uv(t,e){return yu(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bv(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,jv.bind(null,e,t),n)}function _f(){}function zv(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hv(t,e,n){return Jr&21?(Xt(n,e)||(n=Q_(),Ee.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function t1(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Bc.transition;Bc.transition={};try{t(!1),e()}finally{ue=n,Bc.transition=r}}function Wv(){return Ut().memoizedState}function n1(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Kv(e,n);else if(n=Pv(t,e,n,r),n!==null){var i=lt();Jt(n,t,r,i),Gv(n,e,r)}}function r1(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Kv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(i.next=i,uf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Pv(t,e,i,r),n!==null&&(i=lt(),Jt(n,t,r,i),Gv(n,e,r))}}function qv(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Kv(t,e){ro=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}var Ml={readContext:Ft,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},i1={readContext:Ft,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=n1.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:hg,useDebugValue:_f,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=hg(!1),e=t[0];return t=t1.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=tn();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ue===null)throw Error(F(349));Jr&30||Ov(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dg(Lv.bind(null,r,s,t),[t]),r.flags|=2048,Co(9,xv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=Ue.identifierPrefix;if(ye){var n=Rn,r=An;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},s1={readContext:Ft,useCallback:zv,useContext:Ft,useEffect:yf,useImperativeHandle:Bv,useInsertionEffect:Fv,useLayoutEffect:Uv,useMemo:$v,useReducer:zc,useRef:Mv,useState:function(){return zc(Po)},useDebugValue:_f,useDeferredValue:function(t){var e=Ut();return Hv(e,xe.memoizedState,t)},useTransition:function(){var t=zc(Po)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Dv,useId:Wv,unstable_isNewReconciler:!1},o1={readContext:Ft,useCallback:zv,useContext:Ft,useEffect:yf,useImperativeHandle:Bv,useInsertionEffect:Fv,useLayoutEffect:Uv,useMemo:$v,useReducer:$c,useRef:Mv,useState:function(){return $c(Po)},useDebugValue:_f,useDeferredValue:function(t){var e=Ut();return xe===null?e.memoizedState=t:Hv(e,xe.memoizedState,t)},useTransition:function(){var t=$c(Po)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Dv,useId:Wv,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=pr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Jt(e,t,i,r),nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=pr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Jt(e,t,i,r),nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=pr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Jt(e,t,r,n),nl(e,t,r))}};function fg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function Qv(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=yt(e)?Gr:rt.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},cf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=yt(e)?Gr:rt.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_u.enqueueReplaceState(i,i.state,null),Ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gi(t,e){try{var n="",r=e;do n+=LI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function Jv(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,Zh=r),$h(t,e)},n}function Xv(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$h(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new a1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=w1.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var l1=Bn.ReactCurrentOwner,mt=!1;function at(t,e,n,r){e.child=t===null?Rv(e,null,n,r):qi(e,t.child,n,r)}function _g(t,e,n,r,i){n=n.render;var s=e.ref;return Mi(e,i),r=mf(t,e,n,r,s,i),n=gf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(ye&&n&&nf(e),e.flags|=1,at(t,e,r,i),e.child)}function vg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yv(t,e,s,r,i)):(t=ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Yv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Eo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return Hh(t,e,n,r,i)}function Zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Di,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Di,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Di,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Di,wt),wt|=r;return at(t,e,i,n),e.child}function eE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,r,i){var s=yt(n)?Gr:rt.current;return s=Hi(e,s),Mi(e,i),n=mf(t,e,n,r,s,i),r=gf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(ye&&r&&nf(e),e.flags|=1,at(t,e,n,i),e.child)}function Eg(t,e,n,r,i){if(yt(n)){var s=!0;kl(e)}else s=!1;if(Mi(e,i),e.stateNode===null)sl(t,e),Qv(e,n,r),zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=yt(n)?Gr:rt.current,c=Hi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&pg(e,o,r,c),Xn=!1;var m=e.memoizedState;o.state=m,Ll(e,r,o,i),u=e.memoizedState,l!==r||m!==u||gt.current||Xn?(typeof d=="function"&&(Bh(e,n,d,r),u=e.memoizedState),(l=Xn||fg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:zt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=yt(n)?Gr:rt.current,u=Hi(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&pg(e,o,r,u),Xn=!1,m=e.memoizedState,o.state=m,Ll(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||gt.current||Xn?(typeof T=="function"&&(Bh(e,n,T,r),R=e.memoizedState),(c=Xn||fg(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Wh(t,e,n,r,s,i)}function Wh(t,e,n,r,i,s){eE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sg(e,n,!1),Vn(t,e,s);r=e.stateNode,l1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&sg(e,n,!0),e.child}function tE(t){var e=t.stateNode;e.pendingContext?ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ig(t,e.context,!1),hf(t,e.containerInfo)}function wg(t,e,n,r,i){return Wi(),sf(i),e.flags|=256,at(t,e,n,r),e.child}var qh={dehydrated:null,treeContext:null,retryLane:0};function Kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function nE(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(ve,i&1),t===null)return Uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kh(n),e.memoizedState=qh,t):vf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return u1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qh,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vf(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,r){return r!==null&&sf(r),qi(e,t.child,null,n),t=vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hc(Error(F(422))),za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qi(e,t.child,null,o),e.child.memoizedState=Kh(o),e.memoizedState=qh,s);if(!(e.mode&1))return za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Hc(s,r,void 0),za(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),Jt(r,t,i,-1))}return Af(),r=Hc(Error(F(421))),za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=T1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=hr(i.nextSibling),At=e,ye=!0,Ht=null,t!==null&&(Dt[Ot++]=An,Dt[Ot++]=Rn,Dt[Ot++]=Qr,An=t.id,Rn=t.overflow,Qr=e),e=vf(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jh(t.return,e,n)}function Wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c1(t,e,n){switch(e.tag){case 3:tE(e),Wi();break;case 5:kv(e);break;case 1:yt(e.type)&&kl(e);break;case 4:hf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Ol,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?nE(t,e,n):(de(ve,ve.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return Vn(t,e,n)}var iE,Gh,sE,oE;iE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gh=function(){};sE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(on.current);var s=null;switch(n){case"input":i=gh(t,i),r=gh(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=vh(t,i),r=vh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pl)}wh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};oE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Us(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function h1(t,e,n){var r=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return yt(e.type)&&Cl(),Ze(e),null;case 3:return r=e.stateNode,Ki(),ge(gt),ge(rt),ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(nd(Ht),Ht=null))),Gh(t,e),Ze(e),null;case 5:df(e);var i=zr(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)sE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ze(e),null}if(t=zr(on.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[Io]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)me(qs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Dm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":xm(r,s),me("invalid",r)}wh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),i=["children",""+l]):fo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Da(r),Om(r,s,!0);break;case"textarea":Da(r),Lm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[Io]=r,iE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Th(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)me(qs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Dm(t,r),i=gh(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),me("invalid",t);break;case"textarea":xm(t,r),i=vh(t,r),me("invalid",t);break;default:i=r}wh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?M_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&V_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&po(t,u):typeof u=="number"&&po(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&zd(t,s,u,o))}switch(n){case"input":Da(t),Om(t,r,!1);break;case"textarea":Da(t),Lm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)oE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=zr(Ao.current),zr(on.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return Ze(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&It!==null&&e.mode&1&&!(e.flags&128))Sv(),Wi(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[nn]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Ht!==null&&(nd(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Ve===0&&(Ve=3):Af())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Ki(),Gh(t,e),t===null&&wo(e.stateNode.containerInfo),Ze(e),null;case 10:return lf(e.type._context),Ze(e),null;case 17:return yt(e.type)&&Cl(),Ze(e),null;case 19:if(ge(ve),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Us(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,Us(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Qi&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ze(e),null}else 2*Pe()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return Sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function d1(t,e){switch(rf(e),e.tag){case 1:return yt(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),ge(gt),ge(rt),ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return Ki(),null;case 10:return lf(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var $a=!1,tt=!1,f1=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Qh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Ig=!1;function p1(t,e){if(Oh=Sl,t=hv(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},Sl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,N=R.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?P:zt(e.type,P),N);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(L){Se(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=Ig,Ig=!1,R}function io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qh(e,n,s)}i=i.next}while(i!==r)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function aE(t){var e=t.alternate;e!==null&&(t.alternate=null,aE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[Io],delete e[bh],delete e[JS],delete e[XS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lE(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pl));else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}var Be=null,$t=!1;function Kn(t,e,n){for(n=n.child;n!==null;)uE(t,e,n),n=n.sibling}function uE(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:tt||Ni(n,e);case 6:var r=Be,i=$t;Be=null,Kn(t,e,n),Be=r,$t=i,Be!==null&&($t?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&($t?(t=Be,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),_o(t)):Fc(Be,n.stateNode));break;case 4:r=Be,i=$t,Be=n.stateNode.containerInfo,$t=!0,Kn(t,e,n),Be=r,$t=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qh(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!tt&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Kn(t,e,n),tt=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f1),e.forEach(function(r){var i=I1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,$t=!1;break e;case 3:Be=l.stateNode.containerInfo,$t=!0;break e;case 4:Be=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Be===null)throw Error(F(160));uE(s,o,i),Be=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Se(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cE(e,t),e=e.sibling}function cE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),en(t),r&4){try{io(3,t,t.return),vu(3,t)}catch(P){Se(t,t.return,P)}try{io(5,t,t.return)}catch(P){Se(t,t.return,P)}}break;case 1:Bt(e,t),en(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(Bt(e,t),en(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{po(i,"")}catch(P){Se(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&O_(i,s),Th(l,o);var c=Th(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?M_(i,p):d==="dangerouslySetInnerHTML"?V_(i,p):d==="children"?po(i,p):zd(i,d,p,c)}switch(l){case"input":yh(i,s);break;case"textarea":x_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?xi(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(P){Se(t,t.return,P)}}break;case 6:if(Bt(e,t),en(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Se(t,t.return,P)}}break;case 3:if(Bt(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(P){Se(t,t.return,P)}break;case 4:Bt(e,t),en(t);break;case 13:Bt(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tf=Pe())),r&4&&Ag(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,Bt(e,t),tt=c):Bt(e,t),en(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,T=m.child,m.tag){case 0:case 11:case 14:case 15:io(4,m,m.return);break;case 1:Ni(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Se(r,n,P)}}break;case 5:Ni(m,m.return);break;case 22:if(m.memoizedState!==null){Pg(p);continue}}T!==null?(T.return=m,H=T):Pg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=b_("display",o))}catch(P){Se(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Se(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bt(e,t),en(t),r&4&&Ag(t);break;case 21:break;default:Bt(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(po(i,""),r.flags&=-33);var s=Sg(t);Yh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sg(t);Xh(t,l,o);break;default:throw Error(F(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m1(t,e,n){H=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$a;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=$a;var c=tt;if($a=o,(tt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Cg(i):u!==null?(u.return=o,H=u):Cg(i);for(;s!==null;)H=s,hE(s),s=s.sibling;H=i,$a=l,tt=c}Rg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Rg(t)}}function Rg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&_o(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||e.flags&512&&Jh(e)}catch(m){Se(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Pg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Cg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{Jh(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{Jh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var g1=Math.ceil,Fl=Bn.ReactCurrentDispatcher,Ef=Bn.ReactCurrentOwner,Lt=Bn.ReactCurrentBatchConfig,oe=0,Ue=null,Ne=null,He=0,wt=0,Di=Pr(0),Ve=0,ko=null,Xr=0,Eu=0,wf=0,so=null,ft=null,Tf=0,Qi=1/0,In=null,Ul=!1,Zh=null,fr=null,Ha=!1,sr=null,jl=0,oo=0,ed=null,ol=-1,al=0;function lt(){return oe&6?Pe():ol!==-1?ol:ol=Pe()}function pr(t){return t.mode&1?oe&2&&He!==0?He&-He:ZS.transition!==null?(al===0&&(al=Q_()),al):(t=ue,t!==0||(t=window.event,t=t===void 0?16:nv(t.type)),t):1}function Jt(t,e,n,r){if(50<oo)throw oo=0,ed=null,Error(F(185));Ho(t,n,r),(!(oe&2)||t!==Ue)&&(t===Ue&&(!(oe&2)&&(Eu|=n),Ve===4&&Zn(t,He)),_t(t,r),n===1&&oe===0&&!(e.mode&1)&&(Qi=Pe()+500,gu&&Cr()))}function _t(t,e){var n=t.callbackNode;ZI(t,e);var r=Il(t,t===Ue?He:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?YS(kg.bind(null,t)):wv(kg.bind(null,t)),GS(function(){!(oe&6)&&Cr()}),n=null;else{switch(J_(r)){case 1:n=Kd;break;case 4:n=K_;break;case 16:n=Tl;break;case 536870912:n=G_;break;default:n=Tl}n=vE(n,dE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dE(t,e){if(ol=-1,al=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=Il(t,t===Ue?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bl(t,r);else{e=r;var i=oe;oe|=2;var s=pE();(Ue!==t||He!==e)&&(In=null,Qi=Pe()+500,Hr(t,e));do try{v1();break}catch(l){fE(t,l)}while(!0);af(),Fl.current=s,oe=i,Ne!==null?e=0:(Ue=null,He=0,e=Ve)}if(e!==0){if(e===2&&(i=Ph(t),i!==0&&(r=i,e=td(t,i))),e===1)throw n=ko,Hr(t,0),Zn(t,r),_t(t,Pe()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!y1(i)&&(e=Bl(t,r),e===2&&(s=Ph(t),s!==0&&(r=s,e=td(t,s))),e===1))throw n=ko,Hr(t,0),Zn(t,r),_t(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Fr(t,ft,In);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Tf+500-Pe(),10<e)){if(Il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vh(Fr.bind(null,t,ft,In),e);break}Fr(t,ft,In);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g1(r/1960))-r,10<r){t.timeoutHandle=Vh(Fr.bind(null,t,ft,In),r);break}Fr(t,ft,In);break;case 5:Fr(t,ft,In);break;default:throw Error(F(329))}}}return _t(t,Pe()),t.callbackNode===n?dE.bind(null,t):null}function td(t,e){var n=so;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=ft,ft=n,e!==null&&nd(e)),t}function nd(t){ft===null?ft=t:ft.push.apply(ft,t)}function y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~wf,e&=~Eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function kg(t){if(oe&6)throw Error(F(327));Fi();var e=Il(t,0);if(!(e&1))return _t(t,Pe()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var r=Ph(t);r!==0&&(e=r,n=td(t,r))}if(n===1)throw n=ko,Hr(t,0),Zn(t,e),_t(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,ft,In),_t(t,Pe()),null}function If(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Qi=Pe()+500,gu&&Cr())}}function Yr(t){sr!==null&&sr.tag===0&&!(oe&6)&&Fi();var e=oe;oe|=1;var n=Lt.transition,r=ue;try{if(Lt.transition=null,ue=1,t)return t()}finally{ue=r,Lt.transition=n,oe=e,!(oe&6)&&Cr()}}function Sf(){wt=Di.current,ge(Di)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:Ki(),ge(gt),ge(rt),ff();break;case 5:df(r);break;case 4:Ki();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:lf(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(Ue=t,Ne=t=mr(t.current,null),He=wt=e,Ve=0,ko=null,wf=Eu=Xr=0,ft=so=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function fE(t,e){do{var n=Ne;try{if(af(),rl.current=Ml,bl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bl=!1}if(Jr=0,Fe=xe=Ee=null,ro=!1,Ro=0,Ef.current=null,n===null||n.return===null){Ve=1,ko=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=gg(o);if(T!==null){T.flags&=-257,yg(T,o,l,s,e),T.mode&1&&mg(s,c,e),e=T,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){mg(s,c,e),Af();break e}u=Error(F(426))}}else if(ye&&l.mode&1){var N=gg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),yg(N,o,l,s,e),sf(Gi(u,l));break e}}s=u=Gi(u,l),Ve!==4&&(Ve=2),so===null?so=[s]:so.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Jv(s,u,e);ug(s,v);break e;case 1:l=u;var _=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(fr===null||!fr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Xv(s,l,e);ug(s,L);break e}}s=s.return}while(s!==null)}gE(n)}catch(U){e=U,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function pE(){var t=Fl.current;return Fl.current=Ml,t===null?Ml:t}function Af(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ue===null||!(Xr&268435455)&&!(Eu&268435455)||Zn(Ue,He)}function Bl(t,e){var n=oe;oe|=2;var r=pE();(Ue!==t||He!==e)&&(In=null,Hr(t,e));do try{_1();break}catch(i){fE(t,i)}while(!0);if(af(),oe=n,Fl.current=r,Ne!==null)throw Error(F(261));return Ue=null,He=0,Ve}function _1(){for(;Ne!==null;)mE(Ne)}function v1(){for(;Ne!==null&&!HI();)mE(Ne)}function mE(t){var e=_E(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?gE(t):Ne=e,Ef.current=null}function gE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d1(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ne=null;return}}else if(n=h1(n,e,wt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Ve===0&&(Ve=5)}function Fr(t,e,n){var r=ue,i=Lt.transition;try{Lt.transition=null,ue=1,E1(t,e,n,r)}finally{Lt.transition=i,ue=r}return null}function E1(t,e,n,r){do Fi();while(sr!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eS(t,s),t===Ue&&(Ne=Ue=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,vE(Tl,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ue;ue=1;var l=oe;oe|=4,Ef.current=null,p1(t,n),cE(n,t),jS(xh),Sl=!!Oh,xh=Oh=null,t.current=n,m1(n),WI(),oe=l,ue=o,Lt.transition=s}else t.current=n;if(Ha&&(Ha=!1,sr=t,jl=i),s=t.pendingLanes,s===0&&(fr=null),GI(n.stateNode),_t(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,t=Zh,Zh=null,t;return jl&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===ed?oo++:(oo=0,ed=t):oo=0,Cr(),null}function Fi(){if(sr!==null){var t=J_(jl),e=Lt.transition,n=ue;try{if(Lt.transition=null,ue=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,jl=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:io(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,T=d.return;if(aE(d),d===c){H=null;break}if(m!==null){m.return=T,H=m;break}H=T}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,H=v;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vu(9,l)}}catch(U){Se(l,l.return,U)}if(l===o){H=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,H=L;break e}H=l.return}}if(oe=i,Cr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(hu,t)}catch{}r=!0}return r}finally{ue=n,Lt.transition=e}}return!1}function Ng(t,e,n){e=Gi(n,e),e=Jv(t,e,1),t=dr(t,e,1),e=lt(),t!==null&&(Ho(t,1,e),_t(t,e))}function Se(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=Gi(n,t),t=Xv(e,t,1),e=dr(e,t,1),t=lt(),e!==null&&(Ho(e,1,t),_t(e,t));break}}e=e.return}}function w1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(He&n)===n&&(Ve===4||Ve===3&&(He&130023424)===He&&500>Pe()-Tf?Hr(t,0):wf|=n),_t(t,e)}function yE(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=lt();t=Ln(t,e),t!==null&&(Ho(t,e,n),_t(t,n))}function T1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yE(t,n)}function I1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),yE(t,n)}var _E;_E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,c1(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ye&&e.flags&1048576&&Tv(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sl(t,e),t=e.pendingProps;var i=Hi(e,rt.current);Mi(e,n),i=mf(null,e,r,t,i,n);var s=gf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cf(e),i.updater=_u,e.stateNode=i,i._reactInternals=e,zh(e,r,t,n),e=Wh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&nf(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=A1(r),t=zt(r,t),i){case 0:e=Hh(null,e,r,t,n);break e;case 1:e=Eg(null,e,r,t,n);break e;case 11:e=_g(null,e,r,t,n);break e;case 14:e=vg(null,e,r,zt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Eg(t,e,r,i,n);case 3:e:{if(tE(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cv(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gi(Error(F(423)),e),e=wg(t,e,r,n,i);break e}else if(r!==i){i=Gi(Error(F(424)),e),e=wg(t,e,r,n,i);break e}else for(It=hr(e.stateNode.containerInfo.firstChild),At=e,ye=!0,Ht=null,n=Rv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Vn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return kv(e),t===null&&Uh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lh(r,i)?o=null:s!==null&&Lh(r,s)&&(e.flags|=32),eE(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Uh(e),null;case 13:return nE(t,e,n);case 4:return hf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),_g(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Ol,r._currentValue),r._currentValue=o,s!==null)if(Xt(s.value,o)){if(s.children===i.children&&!gt.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),jh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),jh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mi(e,n),i=Ft(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),vg(t,e,r,i,n);case 15:return Yv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),sl(t,e),e.tag=1,yt(r)?(t=!0,kl(e)):t=!1,Mi(e,n),Qv(e,r,i),zh(e,r,i,n),Wh(null,e,r,!0,t,n);case 19:return rE(t,e,n);case 22:return Zv(t,e,n)}throw Error(F(156,e.tag))};function vE(t,e){return q_(t,e)}function S1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new S1(t,e,n,r)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A1(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hd)return 11;if(t===Wd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return Wr(n.children,i,s,e);case $d:o=8,i|=8;break;case dh:return t=xt(12,n,e,i|2),t.elementType=dh,t.lanes=s,t;case fh:return t=xt(13,n,e,i),t.elementType=fh,t.lanes=s,t;case ph:return t=xt(19,n,e,i),t.elementType=ph,t.lanes=s,t;case k_:return wu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P_:o=10;break e;case C_:o=9;break e;case Hd:o=11;break e;case Wd:o=14;break e;case Jn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function wu(t,e,n,r){return t=xt(22,t,r,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function Kc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function R1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(t,e,n,r,i,s,o,l,u){return t=new R1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(s),t}function P1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EE(t){if(!t)return Er;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(yt(n))return Ev(t,n,e)}return e}function wE(t,e,n,r,i,s,o,l,u){return t=Pf(n,r,!0,t,i,s,o,l,u),t.context=EE(null),n=t.current,r=lt(),i=pr(n),s=Nn(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,Ho(t,i,r),_t(t,r),t}function Tu(t,e,n,r){var i=e.current,s=lt(),o=pr(i);return n=EE(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Jt(t,i,o,s),nl(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){Dg(t,e),(t=t.alternate)&&Dg(t,e)}function C1(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Iu.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Tu(t,e,null,null)};Iu.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){Tu(null,t,null,null)}),e[xn]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&tv(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Og(){}function k1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=zl(o);s.call(c)}}var o=wE(e,r,t,0,null,!1,!1,"",Og);return t._reactRootContainer=o,t[xn]=o.current,wo(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zl(u);l.call(c)}}var u=Pf(t,0,!1,null,null,!1,!1,"",Og);return t._reactRootContainer=u,t[xn]=u.current,wo(t.nodeType===8?t.parentNode:t),Yr(function(){Tu(e,u,n,r)}),u}function Au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=zl(o);l.call(u)}}Tu(e,o,t,i)}else o=k1(n,e,t,i,r);return zl(o)}X_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Gd(e,n|1),_t(e,Pe()),!(oe&6)&&(Qi=Pe()+500,Cr()))}break;case 13:Yr(function(){var r=Ln(t,1);if(r!==null){var i=lt();Jt(r,t,1,i)}}),Cf(t,1)}};Qd=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=lt();Jt(e,t,134217728,n)}Cf(t,134217728)}};Y_=function(t){if(t.tag===13){var e=pr(t),n=Ln(t,e);if(n!==null){var r=lt();Jt(n,t,e,r)}Cf(t,e)}};Z_=function(){return ue};ev=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Sh=function(t,e,n){switch(e){case"input":if(yh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mu(r);if(!i)throw Error(F(90));D_(r),yh(r,i)}}}break;case"textarea":x_(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};j_=If;B_=Yr;var N1={usingClientEntryPoint:!1,Events:[qo,Ai,mu,F_,U_,If]},js={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H_(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{hu=Wa.inject(D1),sn=Wa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(F(200));return P1(t,e,null,n)};Ct.createRoot=function(t,e){if(!Nf(t))throw Error(F(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pf(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,wo(t.nodeType===8?t.parentNode:t),new kf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=H_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Yr(t)};Ct.hydrate=function(t,e,n){if(!Su(e))throw Error(F(200));return Au(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wE(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Iu(e)};Ct.render=function(t,e,n){if(!Su(e))throw Error(F(200));return Au(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Su(t))throw Error(F(40));return t._reactRootContainer?(Yr(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};Ct.unstable_batchedUpdates=If;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Su(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Au(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),I_.exports=Ct;var O1=I_.exports,xg=O1;ch.createRoot=xg.createRoot,ch.hydrateRoot=xg.hydrateRoot;var Lg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},x1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):x1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new L1;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class L1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V1=function(t){const e=SE(t);return AE.encodeByteArray(e,!0)},$l=function(t){return V1(t).replace(/\./g,"")},RE=function(t){try{return AE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Hl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!b1(n)||(t[n]=Hl(t[n],e[n]));return t}function b1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=()=>M1().__FIREBASE_DEFAULTS__,U1=()=>{if(typeof process>"u"||typeof Lg>"u")return;const t=Lg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},j1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&RE(t[1]);return e&&JSON.parse(e)},Ru=()=>{try{return F1()||U1()||j1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},PE=t=>{var e,n;return(n=(e=Ru())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},B1=t=>{const e=PE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},CE=()=>{var t;return(t=Ru())===null||t===void 0?void 0:t.config},kE=t=>{var e;return(e=Ru())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$l(JSON.stringify(n)),$l(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function W1(){var t;const e=(t=Ru())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NE(){return typeof self=="object"&&self.self===self}function q1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G1(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Q1(){return!W1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function J1(){try{return typeof indexedDB=="object"}catch{return!1}}function X1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Y1,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Z1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,l,r)}}function Z1(t,e){return t.replace(eA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function tA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bg(s)&&bg(o)){if(!Wl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DE(t,e){const n=new nA(t,e);return n.subscribe.bind(n)}class nA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gc),i.error===void 0&&(i.error=Gc),i.complete===void 0&&(i.complete=Gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new z1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oA(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sA(t){return t===Ur?void 0:t}function oA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=[];var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const xE={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},aA=ee.INFO,lA={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},uA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qo{constructor(e){this.name=e,this._logLevel=aA,this._logHandler=uA,this._userLogHandler=null,Df.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}function cA(t){Df.forEach(e=>{e.setLogLevel(t)})}function hA(t,e){for(const n of Df){let r=null;e&&e.level&&(r=xE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ee[s].toLowerCase(),message:l,args:o,type:i.name})}}}const dA=(t,e)=>e.some(n=>t instanceof n);let Mg,Fg;function fA(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pA(){return Fg||(Fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LE=new WeakMap,rd=new WeakMap,VE=new WeakMap,Qc=new WeakMap,Of=new WeakMap;function mA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LE.set(n,t)}).catch(()=>{}),Of.set(e,t),e}function gA(t){if(rd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rd.set(t,e)}let id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yA(t){id=t(id)}function _A(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return VE.set(r,e.sort?e.sort():[e]),gr(r)}:pA().includes(t)?function(...e){return t.apply(Jc(this),e),gr(LE.get(this))}:function(...e){return gr(t.apply(Jc(this),e))}}function vA(t){return typeof t=="function"?_A(t):(t instanceof IDBTransaction&&gA(t),dA(t,fA())?new Proxy(t,id):t)}function gr(t){if(t instanceof IDBRequest)return mA(t);if(Qc.has(t))return Qc.get(t);const e=vA(t);return e!==t&&(Qc.set(t,e),Of.set(e,t)),e}const Jc=t=>Of.get(t);function EA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const wA=["get","getKey","getAll","getAllKeys","count"],TA=["put","add","delete","clear"],Xc=new Map;function Ug(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xc.get(e))return Xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Xc.set(e,s),s}yA(t=>({...t,get:(e,n,r)=>Ug(e,n)||t.get(e,n,r),has:(e,n)=>!!Ug(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ql="@firebase/app",sd="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Qo("@firebase/app"),AA="@firebase/app-compat",RA="@firebase/analytics-compat",PA="@firebase/analytics",CA="@firebase/app-check-compat",kA="@firebase/app-check",NA="@firebase/auth",DA="@firebase/auth-compat",OA="@firebase/database",xA="@firebase/database-compat",LA="@firebase/functions",VA="@firebase/functions-compat",bA="@firebase/installations",MA="@firebase/installations-compat",FA="@firebase/messaging",UA="@firebase/messaging-compat",jA="@firebase/performance",BA="@firebase/performance-compat",zA="@firebase/remote-config",$A="@firebase/remote-config-compat",HA="@firebase/storage",WA="@firebase/storage-compat",qA="@firebase/firestore",KA="@firebase/vertexai-preview",GA="@firebase/firestore-compat",QA="firebase",JA="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]",XA={[ql]:"fire-core",[AA]:"fire-core-compat",[PA]:"fire-analytics",[RA]:"fire-analytics-compat",[kA]:"fire-app-check",[CA]:"fire-app-check-compat",[NA]:"fire-auth",[DA]:"fire-auth-compat",[OA]:"fire-rtdb",[xA]:"fire-rtdb-compat",[LA]:"fire-fn",[VA]:"fire-fn-compat",[bA]:"fire-iid",[MA]:"fire-iid-compat",[FA]:"fire-fcm",[UA]:"fire-fcm-compat",[jA]:"fire-perf",[BA]:"fire-perf-compat",[zA]:"fire-rc",[$A]:"fire-rc-compat",[HA]:"fire-gcs",[WA]:"fire-gcs-compat",[qA]:"fire-fst",[GA]:"fire-fst-compat",[KA]:"fire-vertex","fire-js":"fire-js",[QA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,Ji=new Map,Xi=new Map;function No(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bE(t,e){t.container.addOrOverwriteComponent(e)}function Mn(t){const e=t.name;if(Xi.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;Xi.set(e,t);for(const n of Tr.values())No(n,t);for(const n of Ji.values())No(n,t);return!0}function Jo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function YA(t,e,n=wr){Jo(t,e).clearInstance(n)}function ME(t){return t.options!==void 0}function Gt(t){return t.settings!==void 0}function ZA(){Xi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new ai("app","Firebase",eR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FE=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR extends FE{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,vt(ql,sd,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Lf(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Vt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=JA;function Pu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=CE()),!n)throw Vt.create("no-options");const s=Tr.get(i);if(s){if(Wl(n,s.options)&&Wl(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const o=new OE(i);for(const u of Xi.values())o.addComponent(u);const l=new FE(n,r,o);return Tr.set(i,l),l}function nR(t,e){if(NE())throw Vt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;ME(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,p)=>Math.imul(31,d)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Vt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Ji.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new OE(s);for(const c of Xi.values())l.addComponent(c);const u=new tR(n,e,s,l);return Ji.set(s,u),u}function xf(t=wr){const e=Tr.get(t);if(!e&&t===wr&&CE())return Pu();if(!e)throw Vt.create("no-app",{appName:t});return e}function rR(){return Array.from(Tr.values())}async function Lf(t){let e=!1;const n=t.name;Tr.has(n)?(e=!0,Tr.delete(n)):Ji.has(n)&&t.decRefCount()<=0&&(Ji.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function vt(t,e,n){var r;let i=(r=XA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(l.join(" "));return}Mn(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function UE(t,e){if(t!==null&&typeof t!="function")throw Vt.create("invalid-log-argument");hA(t,e)}function jE(t){cA(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="firebase-heartbeat-database",sR=1,Do="firebase-heartbeat-store";let Yc=null;function BE(){return Yc||(Yc=EA(iR,sR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Do)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function oR(t){try{const n=(await BE()).transaction(Do),r=await n.objectStore(Do).get(zE(t));return await n.done,r}catch(e){if(e instanceof Zt)Zr.warn(e.message);else{const n=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zr.warn(n.message)}}}async function jg(t,e){try{const r=(await BE()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,zE(t)),await r.done}catch(n){if(n instanceof Zt)Zr.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zr.warn(r.message)}}}function zE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=1024,lR=30*24*60*60*1e3;class uR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=lR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bg(),{heartbeatsToSend:r,unsentEntries:i}=cR(this._heartbeatsCache.heartbeats),s=$l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bg(){return new Date().toISOString().substring(0,10)}function cR(t,e=aR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J1()?X1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zg(t){return $l(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){Mn(new bn("platform-logger",e=>new IA(e),"PRIVATE")),Mn(new bn("heartbeat",e=>new uR(e),"PRIVATE")),vt(ql,sd,t),vt(ql,sd,"esm2017"),vt("fire-js","")}dR("");const fR=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Zt,SDK_VERSION:zn,_DEFAULT_ENTRY_NAME:wr,_addComponent:No,_addOrOverwriteComponent:bE,_apps:Tr,_clearComponents:ZA,_components:Xi,_getProvider:Jo,_isFirebaseApp:ME,_isFirebaseServerApp:Gt,_registerComponent:Mn,_removeServiceInstance:YA,_serverApps:Ji,deleteApp:Lf,getApp:xf,getApps:rR,initializeApp:Pu,initializeServerApp:nR,onLog:UE,registerVersion:vt,setLogLevel:jE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n){this._delegate=e,this.firebase=n,No(e,new bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Lf(this._delegate)))}_getService(e,n=wr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=wr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){No(this._delegate,e)}_addOrOverwriteComponent(e){bE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},$g=new ai("app-compat","Firebase",mR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:vt,setLogLevel:jE,onLog:UE,apps:null,SDK_VERSION:zn,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:fR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||wr,!Vg(e,c))throw $g.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const p=Pu(c,d);if(Vg(e,p.name))return e[p.name];const m=new t(p,n);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const d=c.name,p=d.replace("-compat","");if(Mn(c)&&c.type==="PUBLIC"){const m=(T=i())=>{if(typeof T[p]!="function")throw $g.create("invalid-app-argument",{appName:d});return T[p]()};c.serviceProps!==void 0&&Hl(m,c.serviceProps),n[p]=m,t.prototype[p]=function(...T){return this._getService.bind(this,d).apply(this,c.multipleInstances?T:[])}}return c.type==="PUBLIC"?n[p]:null}function u(c,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(){const t=gR(pR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:$E,extendNamespace:e,createSubscribe:DE,ErrorFactory:ai,deepExtend:Hl});function e(n){Hl(t,n)}return t}const yR=$E();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Qo("@firebase/app-compat"),_R="@firebase/app-compat",vR="0.2.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){vt(_R,vR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(NE()&&self.firebase!==void 0){Hg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Hg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const wR=yR;ER();var TR="firebase",IR="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wR.registerVersion(TR,IR,"app-compat");var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,HE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(S,C,D){for(var A=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)A[Nt-2]=arguments[Nt];return y.prototype[C].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,E){E||(E=0);var S=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)S[C]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(C=0;16>C;++C)S[C]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],C=w.g[2];var D=w.g[3],A=y+(D^E&(C^D))+S[0]+3614090360&4294967295;y=E+(A<<7&4294967295|A>>>25),A=D+(C^y&(E^C))+S[1]+3905402710&4294967295,D=y+(A<<12&4294967295|A>>>20),A=C+(E^D&(y^E))+S[2]+606105819&4294967295,C=D+(A<<17&4294967295|A>>>15),A=E+(y^C&(D^y))+S[3]+3250441966&4294967295,E=C+(A<<22&4294967295|A>>>10),A=y+(D^E&(C^D))+S[4]+4118548399&4294967295,y=E+(A<<7&4294967295|A>>>25),A=D+(C^y&(E^C))+S[5]+1200080426&4294967295,D=y+(A<<12&4294967295|A>>>20),A=C+(E^D&(y^E))+S[6]+2821735955&4294967295,C=D+(A<<17&4294967295|A>>>15),A=E+(y^C&(D^y))+S[7]+4249261313&4294967295,E=C+(A<<22&4294967295|A>>>10),A=y+(D^E&(C^D))+S[8]+1770035416&4294967295,y=E+(A<<7&4294967295|A>>>25),A=D+(C^y&(E^C))+S[9]+2336552879&4294967295,D=y+(A<<12&4294967295|A>>>20),A=C+(E^D&(y^E))+S[10]+4294925233&4294967295,C=D+(A<<17&4294967295|A>>>15),A=E+(y^C&(D^y))+S[11]+2304563134&4294967295,E=C+(A<<22&4294967295|A>>>10),A=y+(D^E&(C^D))+S[12]+1804603682&4294967295,y=E+(A<<7&4294967295|A>>>25),A=D+(C^y&(E^C))+S[13]+4254626195&4294967295,D=y+(A<<12&4294967295|A>>>20),A=C+(E^D&(y^E))+S[14]+2792965006&4294967295,C=D+(A<<17&4294967295|A>>>15),A=E+(y^C&(D^y))+S[15]+1236535329&4294967295,E=C+(A<<22&4294967295|A>>>10),A=y+(C^D&(E^C))+S[1]+4129170786&4294967295,y=E+(A<<5&4294967295|A>>>27),A=D+(E^C&(y^E))+S[6]+3225465664&4294967295,D=y+(A<<9&4294967295|A>>>23),A=C+(y^E&(D^y))+S[11]+643717713&4294967295,C=D+(A<<14&4294967295|A>>>18),A=E+(D^y&(C^D))+S[0]+3921069994&4294967295,E=C+(A<<20&4294967295|A>>>12),A=y+(C^D&(E^C))+S[5]+3593408605&4294967295,y=E+(A<<5&4294967295|A>>>27),A=D+(E^C&(y^E))+S[10]+38016083&4294967295,D=y+(A<<9&4294967295|A>>>23),A=C+(y^E&(D^y))+S[15]+3634488961&4294967295,C=D+(A<<14&4294967295|A>>>18),A=E+(D^y&(C^D))+S[4]+3889429448&4294967295,E=C+(A<<20&4294967295|A>>>12),A=y+(C^D&(E^C))+S[9]+568446438&4294967295,y=E+(A<<5&4294967295|A>>>27),A=D+(E^C&(y^E))+S[14]+3275163606&4294967295,D=y+(A<<9&4294967295|A>>>23),A=C+(y^E&(D^y))+S[3]+4107603335&4294967295,C=D+(A<<14&4294967295|A>>>18),A=E+(D^y&(C^D))+S[8]+1163531501&4294967295,E=C+(A<<20&4294967295|A>>>12),A=y+(C^D&(E^C))+S[13]+2850285829&4294967295,y=E+(A<<5&4294967295|A>>>27),A=D+(E^C&(y^E))+S[2]+4243563512&4294967295,D=y+(A<<9&4294967295|A>>>23),A=C+(y^E&(D^y))+S[7]+1735328473&4294967295,C=D+(A<<14&4294967295|A>>>18),A=E+(D^y&(C^D))+S[12]+2368359562&4294967295,E=C+(A<<20&4294967295|A>>>12),A=y+(E^C^D)+S[5]+4294588738&4294967295,y=E+(A<<4&4294967295|A>>>28),A=D+(y^E^C)+S[8]+2272392833&4294967295,D=y+(A<<11&4294967295|A>>>21),A=C+(D^y^E)+S[11]+1839030562&4294967295,C=D+(A<<16&4294967295|A>>>16),A=E+(C^D^y)+S[14]+4259657740&4294967295,E=C+(A<<23&4294967295|A>>>9),A=y+(E^C^D)+S[1]+2763975236&4294967295,y=E+(A<<4&4294967295|A>>>28),A=D+(y^E^C)+S[4]+1272893353&4294967295,D=y+(A<<11&4294967295|A>>>21),A=C+(D^y^E)+S[7]+4139469664&4294967295,C=D+(A<<16&4294967295|A>>>16),A=E+(C^D^y)+S[10]+3200236656&4294967295,E=C+(A<<23&4294967295|A>>>9),A=y+(E^C^D)+S[13]+681279174&4294967295,y=E+(A<<4&4294967295|A>>>28),A=D+(y^E^C)+S[0]+3936430074&4294967295,D=y+(A<<11&4294967295|A>>>21),A=C+(D^y^E)+S[3]+3572445317&4294967295,C=D+(A<<16&4294967295|A>>>16),A=E+(C^D^y)+S[6]+76029189&4294967295,E=C+(A<<23&4294967295|A>>>9),A=y+(E^C^D)+S[9]+3654602809&4294967295,y=E+(A<<4&4294967295|A>>>28),A=D+(y^E^C)+S[12]+3873151461&4294967295,D=y+(A<<11&4294967295|A>>>21),A=C+(D^y^E)+S[15]+530742520&4294967295,C=D+(A<<16&4294967295|A>>>16),A=E+(C^D^y)+S[2]+3299628645&4294967295,E=C+(A<<23&4294967295|A>>>9),A=y+(C^(E|~D))+S[0]+4096336452&4294967295,y=E+(A<<6&4294967295|A>>>26),A=D+(E^(y|~C))+S[7]+1126891415&4294967295,D=y+(A<<10&4294967295|A>>>22),A=C+(y^(D|~E))+S[14]+2878612391&4294967295,C=D+(A<<15&4294967295|A>>>17),A=E+(D^(C|~y))+S[5]+4237533241&4294967295,E=C+(A<<21&4294967295|A>>>11),A=y+(C^(E|~D))+S[12]+1700485571&4294967295,y=E+(A<<6&4294967295|A>>>26),A=D+(E^(y|~C))+S[3]+2399980690&4294967295,D=y+(A<<10&4294967295|A>>>22),A=C+(y^(D|~E))+S[10]+4293915773&4294967295,C=D+(A<<15&4294967295|A>>>17),A=E+(D^(C|~y))+S[1]+2240044497&4294967295,E=C+(A<<21&4294967295|A>>>11),A=y+(C^(E|~D))+S[8]+1873313359&4294967295,y=E+(A<<6&4294967295|A>>>26),A=D+(E^(y|~C))+S[15]+4264355552&4294967295,D=y+(A<<10&4294967295|A>>>22),A=C+(y^(D|~E))+S[6]+2734768916&4294967295,C=D+(A<<15&4294967295|A>>>17),A=E+(D^(C|~y))+S[13]+1309151649&4294967295,E=C+(A<<21&4294967295|A>>>11),A=y+(C^(E|~D))+S[4]+4149444226&4294967295,y=E+(A<<6&4294967295|A>>>26),A=D+(E^(y|~C))+S[11]+3174756917&4294967295,D=y+(A<<10&4294967295|A>>>22),A=C+(y^(D|~E))+S[2]+718787259&4294967295,C=D+(A<<15&4294967295|A>>>17),A=E+(D^(C|~y))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+D&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,S=this.B,C=this.h,D=0;D<y;){if(C==0)for(;D<=E;)i(this,w,D),D+=this.blockSize;if(typeof w=="string"){for(;D<y;)if(S[C++]=w.charCodeAt(D++),C==this.blockSize){i(this,S),C=0;break}}else for(;D<y;)if(S[C++]=w[D++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var S=0;32>S;S+=8)w[E++]=this.g[y]>>>S&255;return w};function s(w,y){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],S=!0,C=w.length-1;0<=C;C--){var D=w[C]|0;S&&D==y||(E[C]=D,S=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(c(-w));for(var y=[],E=1,S=0;w>=E;S++)y[S]=w/E|0,E*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return N(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),S=p,C=0;C<w.length;C+=8){var D=Math.min(8,w.length-C),A=parseInt(w.substring(C,C+D),y);8>D?(D=c(Math.pow(y,D)),S=S.j(D).add(c(A))):(S=S.j(E),S=S.add(c(A)))}return S}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var S=this.i(E);w+=(0<=S?S:4294967296+S)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+N(this).toString(w);for(var y=c(Math.pow(w,6)),E=this,S="";;){var C=L(E,y).g;E=v(E,C.j(y));var D=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=C,R(E))return D+S;for(;6>D.length;)D="0"+D;S=D+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=v(this,w),P(w)?-1:R(w)?0:1};function N(w){for(var y=w.g.length,E=[],S=0;S<y;S++)E[S]=~w.g[S];return new o(E,~w.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0,C=0;C<=y;C++){var D=S+(this.i(C)&65535)+(w.i(C)&65535),A=(D>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);S=A>>>16,D&=65535,A&=65535,E[C]=A<<16|D}return new o(E,E[E.length-1]&-2147483648?-1:0)};function v(w,y){return w.add(N(y))}t.j=function(w){if(R(this)||R(w))return p;if(P(this))return P(w)?N(this).j(N(w)):N(N(this).j(w));if(P(w))return N(this.j(N(w)));if(0>this.l(T)&&0>w.l(T))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<w.g.length;C++){var D=this.i(S)>>>16,A=this.i(S)&65535,Nt=w.i(C)>>>16,Or=w.i(C)&65535;E[2*S+2*C]+=A*Or,_(E,2*S+2*C),E[2*S+2*C+1]+=D*Or,_(E,2*S+2*C+1),E[2*S+2*C+1]+=A*Nt,_(E,2*S+2*C+1),E[2*S+2*C+2]+=D*Nt,_(E,2*S+2*C+2)}for(S=0;S<y;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=y;S<2*y;S++)E[S]=0;return new o(E,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function I(w,y){this.g=w,this.h=y}function L(w,y){if(R(y))throw Error("division by zero");if(R(w))return new I(p,p);if(P(w))return y=L(N(w),y),new I(N(y.g),N(y.h));if(P(y))return y=L(w,N(y)),new I(N(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=y;0>=S.l(w);)E=U(E),S=U(S);var C=z(E,1),D=z(S,1);for(S=z(S,2),E=z(E,2);!R(S);){var A=D.add(S);0>=A.l(w)&&(C=C.add(E),D=A),S=z(S,1),E=z(E,1)}return y=v(w,C.j(y)),new I(C,y)}for(C=p;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),D=c(E),A=D.j(y);P(A)||0<A.l(w);)E-=S,D=c(E),A=D.j(y);R(D)&&(D=m),C=C.add(D),w=v(w,A)}return new I(C,w)}t.A=function(w){return L(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)&w.i(S);return new o(E,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)|w.i(S);return new o(E,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)^w.i(S);return new o(E,this.h^w.h)};function U(w){for(var y=w.g.length+1,E=[],S=0;S<y;S++)E[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(E,w.h)}function z(w,y){var E=y>>5;y%=32;for(var S=w.g.length-E,C=[],D=0;D<S;D++)C[D]=0<y?w.i(D+E)>>>y|w.i(D+E+1)<<32-y:w.i(D+E);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,HE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,qr=o}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WE,qE,Qs,KE,ul,od,GE,QE,JE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,k={next:function(){if(!g&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,k,x){for(var B=Array(arguments.length-2),he=2;he<arguments.length;he++)B[he-2]=arguments[he];return h.prototype[k].apply(g,B)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const k=a.length||0,x=g.length||0;a.length=k+x;for(let B=0;B<x;B++)a[k+B]=g[B]}else a.push(g)}}class v{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var U=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function z(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let x=0;x<E.length;x++)f=E[x],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function D(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Nt{constructor(){this.h=this.g=null}add(h,f){const g=Or.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Or=new v(()=>new _s,a=>a.reset());class _s{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let mn,$=!1,Q=new Nt,Z=()=>{const a=l.Promise.resolve(void 0);mn=()=>{a.then(_e)}};var _e=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){D(f)}var h=Or;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function yn(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(U){e:{try{L(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_n[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}R(yn,Re);var _n={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),PT=0;function CT(a,h,f,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++PT,this.da=this.fa=!1}function da(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function fa(a){this.src=a,this.g={},this.h=0}fa.prototype.add=function(a,h,f,g,k){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var B=ec(a,h,g,k);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new CT(h,this.src,x,!!g,k),h.fa=f,a.push(h)),h};function Zu(a,h){var f=h.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,h,void 0),x;(x=0<=k)&&Array.prototype.splice.call(g,k,1),x&&(da(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ec(a,h,f,g){for(var k=0;k<a.length;++k){var x=a[k];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==g)return k}return-1}var tc="closure_lm_"+(1e6*Math.random()|0),nc={};function Rp(a,h,f,g,k){if(Array.isArray(h)){for(var x=0;x<h.length;x++)Rp(a,h[x],f,g,k);return null}return f=kp(f),a&&a[vn]?a.K(h,f,c(g)?!!g.capture:!!g,k):kT(a,h,f,!1,g,k)}function kT(a,h,f,g,k,x){if(!h)throw Error("Invalid event type");var B=c(k)?!!k.capture:!!k,he=ic(a);if(he||(a[tc]=he=new fa(a)),f=he.add(h,f,g,B,x),f.proxy)return f;if(g=NT(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)gn||(k=B),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(Cp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function NT(){function a(f){return h.call(a.src,a.listener,f)}const h=DT;return a}function Pp(a,h,f,g,k){if(Array.isArray(h))for(var x=0;x<h.length;x++)Pp(a,h[x],f,g,k);else g=c(g)?!!g.capture:!!g,f=kp(f),a&&a[vn]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=ec(x,f,g,k),-1<f&&(da(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=ic(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ec(h,f,g,k)),(f=-1<a?h[a]:null)&&rc(f))}function rc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[vn])Zu(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Cp(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ic(h))?(Zu(f,a),f.h==0&&(f.src=null,h[tc]=null)):da(a)}}}function Cp(a){return a in nc?nc[a]:nc[a]="on"+a}function DT(a,h){if(a.da)a=!0;else{h=new yn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&rc(a),a=f.call(g,h)}return a}function ic(a){return a=a[tc],a instanceof fa?a:null}var sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function kp(a){return typeof a=="function"?a:(a[sc]||(a[sc]=function(h){return a.handleEvent(h)}),a[sc])}function Qe(){ce.call(this),this.i=new fa(this),this.M=this,this.F=null}R(Qe,ce),Qe.prototype[vn]=!0,Qe.prototype.removeEventListener=function(a,h,f,g){Pp(this,a,h,f,g)};function st(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var k=h;h=new Re(g,a),S(h,k)}if(k=!0,f)for(var x=f.length-1;0<=x;x--){var B=h.g=f[x];k=pa(B,g,!0,h)&&k}if(B=h.g=a,k=pa(B,g,!0,h)&&k,k=pa(B,g,!1,h)&&k,f)for(x=0;x<f.length;x++)B=h.g=f[x],k=pa(B,g,!1,h)&&k}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)da(f[g]);delete a.g[h],a.h--}}this.F=null},Qe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Qe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function pa(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,x=0;x<h.length;++x){var B=h[x];if(B&&!B.da&&B.capture==f){var he=B.listener,je=B.ha||B.src;B.fa&&Zu(a.i,B),k=he.call(je,g)!==!1&&k}}return k&&!g.defaultPrevented}function Np(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Dp(a){a.g=Np(()=>{a.g=null,a.i&&(a.i=!1,Dp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class OT extends ce{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Dp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(a){ce.call(this),this.h=a,this.g={}}R(vs,ce);var Op=[];function xp(a){z(a.g,function(h,f){this.g.hasOwnProperty(f)&&rc(h)},a),a.g={}}vs.prototype.N=function(){vs.aa.N.call(this),xp(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oc=l.JSON.stringify,xT=l.JSON.parse,LT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ac(){}ac.prototype.h=null;function Lp(a){return a.h||(a.h=a.i())}function Vp(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lc(){Re.call(this,"d")}R(lc,Re);function uc(){Re.call(this,"c")}R(uc,Re);var xr={},bp=null;function ma(){return bp=bp||new Qe}xr.La="serverreachability";function Mp(a){Re.call(this,xr.La,a)}R(Mp,Re);function ws(a){const h=ma();st(h,new Mp(h))}xr.STAT_EVENT="statevent";function Fp(a,h){Re.call(this,xr.STAT_EVENT,a),this.stat=h}R(Fp,Re);function ot(a){const h=ma();st(h,new Fp(h,a))}xr.Ma="timingevent";function Up(a,h){Re.call(this,xr.Ma,a),this.size=h}R(Up,Re);function Ts(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function VT(a,h,f,g,k,x){a.info(function(){if(a.g)if(x)for(var B="",he=x.split("&"),je=0;je<he.length;je++){var ae=he[je].split("=");if(1<ae.length){var Je=ae[0];ae=ae[1];var Xe=Je.split("_");B=2<=Xe.length&&Xe[1]=="type"?B+(Je+"="+ae+"&"):B+(Je+"=redacted&")}}else B=null;else B=x;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+B})}function bT(a,h,f,g,k,x,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+x+" "+B})}function di(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+FT(a,f)+(g?" "+g:"")})}function MT(a,h){a.info(function(){return"TIMEOUT: "+h})}Is.prototype.info=function(){};function FT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var B=1;B<k.length;B++)k[B]=""}}}}return oc(f)}catch{return h}}var ga={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cc;function ya(){}R(ya,ac),ya.prototype.g=function(){return new XMLHttpRequest},ya.prototype.i=function(){return{}},cc=new ya;function Hn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var zp={},hc={};function dc(a,h,f){a.L=1,a.v=wa(En(h)),a.m=f,a.P=!0,$p(a,null)}function $p(a,h){a.F=Date.now(),_a(a),a.A=En(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),rm(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Bp,a.g=wm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new OT(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Op[0]=k.toString()),k=Op);for(var x=0;x<k.length;x++){var B=Rp(f,k[x],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ws(),VT(a.i,a.u,a.A,a.l,a.R,a.m)}Hn.prototype.ca=function(a){a=a.target;const h=this.M;h&&wn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=wn(this.g);var h=this.g.Ba();const mi=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||cm(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=mi?ws(3):ws(2)),fc(this);var f=this.g.Z();this.X=f;t:if(Hp(this)){var g=cm(this.g);a="";var k=g.length,x=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Ss(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(x&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,bT(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,je=this.g;if((he=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(he)){var ae=he;break t}}ae=null}if(f=ae)di(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pc(this,f);else{this.o=!1,this.s=3,ot(12),Lr(this),Ss(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<B.length;)if(jt=UT(this,B),jt==hc){Xe==4&&(this.s=4,ot(14),f=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==zp){this.s=4,ot(15),di(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else di(this.i,this.l,jt,null),pc(this,jt);if(Hp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||B.length!=0||this.h.h||(this.s=1,ot(16),f=!1),this.o=this.o&&f,!f)di(this.i,this.l,B,"[Invalid Chunked Response]"),Lr(this),Ss(this);else if(0<B.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ec(Je),Je.M=!0,ot(11))}}else di(this.i,this.l,B,null),pc(this,B);Xe==4&&Lr(this),this.o&&!this.J&&(Xe==4?ym(this.j,this):(this.o=!1,_a(this)))}else nI(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Lr(this),Ss(this)}}}catch{}finally{}};function Hp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function UT(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?hc:(f=Number(h.substring(f,g)),isNaN(f)?zp:(g+=1,g+f>h.length?hc:(h=h.slice(g,g+f),a.C=g+f,h)))}Hn.prototype.cancel=function(){this.J=!0,Lr(this)};function _a(a){a.S=Date.now()+a.I,Wp(a,a.I)}function Wp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ts(m(a.ba,a),h)}function fc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(MT(this.i,this.A),this.L!=2&&(ws(),ot(17)),Lr(this),this.s=2,Ss(this)):Wp(this,this.S-a)};function Ss(a){a.j.G==0||a.J||ym(a.j,a)}function Lr(a){fc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,xp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function pc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||mc(f.h,a))){if(!a.K&&mc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ra(f),Sa(f);else break e;vc(f),ot(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ts(m(f.Za,f),6e3));if(1>=Gp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else br(f,11)}else if((a.K||f.g==a)&&Ra(f),!_(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let ae=k[h];if(f.T=ae[0],ae=ae[1],f.G==2)if(ae[0]=="c"){f.K=ae[1],f.ia=ae[2];const Je=ae[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Xe=ae[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const mi=ae[5];mi!=null&&typeof mi=="number"&&0<mi&&(g=1.5*mi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const jt=a.g;if(jt){const Ca=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var x=g.h;x.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(gc(x,x.h),x.h=null))}if(g.D){const wc=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(g.ya=wc,pe(g.I,g.D,wc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=Em(g,g.J?g.ia:null,g.W),B.K){Qp(g.h,B);var he=B,je=g.L;je&&(he.I=je),he.B&&(fc(he),_a(he)),g.g=B}else mm(g);0<f.i.length&&Aa(f)}else ae[0]!="stop"&&ae[0]!="close"||br(f,7);else f.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?br(f,7):_c(f):ae[0]!="noop"&&f.l&&f.l.ta(ae),f.v=0)}}ws(4)}catch{}}var jT=class{constructor(a,h){this.g=a,this.map=h}};function qp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gp(a){return a.h?1:a.g?a.g.size:0}function mc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function gc(a,h){a.g?a.g.add(h):a.h=h}function Qp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}qp.prototype.cancel=function(){if(this.i=Jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function BT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function zT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Xp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=zT(a),g=BT(a),k=g.length,x=0;x<k;x++)h.call(void 0,g[x],f&&f[x],a)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $T(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),k=null;if(0<=g){var x=a[f].substring(0,g);k=a[f].substring(g+1)}else x=a[f];h(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,va(this,a.j),this.o=a.o,this.g=a.g,Ea(this,a.s),this.l=a.l;var h=a.i,f=new Ps;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Zp(this,f),this.m=a.m}else a&&(h=String(a).match(Yp))?(this.h=!1,va(this,h[1]||"",!0),this.o=As(h[2]||""),this.g=As(h[3]||"",!0),Ea(this,h[4]),this.l=As(h[5]||"",!0),Zp(this,h[6]||"",!0),this.m=As(h[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}Vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Rs(h,em,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Rs(h,em,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Rs(f,f.charAt(0)=="/"?qT:WT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Rs(f,GT)),a.join("")};function En(a){return new Vr(a)}function va(a,h,f){a.j=f?As(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ea(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Zp(a,h,f){h instanceof Ps?(a.i=h,QT(a.i,a.h)):(f||(h=Rs(h,KT)),a.i=new Ps(h,a.h))}function pe(a,h,f){a.i.set(h,f)}function wa(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function As(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,HT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var em=/[#\/\?@]/g,WT=/[#\?:]/g,qT=/[#\?]/g,KT=/[#\?@]/g,GT=/#/g;function Ps(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&$T(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ps.prototype,t.add=function(a,h){Wn(this),this.i=null,a=fi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function tm(a,h){Wn(a),h=fi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function nm(a,h){return Wn(a),h=fi(a,h),a.g.has(h)}t.forEach=function(a,h){Wn(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=a[g];for(let x=0;x<k.length;x++)f.push(h[g])}return f},t.V=function(a){Wn(this);let h=[];if(typeof a=="string")nm(this,a)&&(h=h.concat(this.g.get(fi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Wn(this),this.i=null,a=fi(this,a),nm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function rm(a,h,f){tm(a,h),0<f.length&&(a.i=null,a.g.set(fi(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const x=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var k=x;B[g]!==""&&(k+="="+encodeURIComponent(String(B[g]))),a.push(k)}}return this.i=a.join("&")};function fi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function QT(a,h){h&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(tm(this,g),rm(this,k,f))},a)),a.j=h}function JT(a,h){const f=new Is;if(l.Image){const g=new Image;g.onload=T(qn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=T(qn,f,"TestLoadImage: error",!1,h,g),g.onabort=T(qn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=T(qn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function XT(a,h){const f=new Is,g=new AbortController,k=setTimeout(()=>{g.abort(),qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(k),x.ok?qn(f,"TestPingServer: ok",!0,h):qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),qn(f,"TestPingServer: error",!1,h)})}function qn(a,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function YT(){this.g=new LT}function ZT(a,h,f){const g=f||"";try{Xp(a,function(k,x){let B=k;c(k)&&(B=oc(k)),h.push(g+x+"="+encodeURIComponent(B))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Cs(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Cs,ac),Cs.prototype.g=function(){return new Ta(this.l,this.j)},Cs.prototype.i=function(a){return function(){return a}}({});function Ta(a,h){Qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ta,Qe),t=Ta.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;im(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function im(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ks(this):Ns(this),this.readyState==3&&im(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Qa=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sm(a){let h="";return z(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function yc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=sm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):pe(a,h,f))}function Ie(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ie,Qe);var eI=/^https?$/i,tI=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cc.g(),this.v=this.o?Lp(this.o):Lp(cc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){om(this,x);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tI,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,B]of f)this.g.setRequestHeader(x,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{um(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){om(this,x)}};function om(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,am(a),Ia(a)}function am(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),Ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ia(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lm(this):this.bb())},t.bb=function(){lm(this)};function lm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)Np(a.Ea,0,a);else if(st(a,"readystatechange"),wn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=B===0){var k=String(a.D).match(Yp)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!eI.test(k?k.toLowerCase():"")}f=g}if(f)st(a,"complete"),st(a,"success");else{a.m=6;try{var x=2<wn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",am(a)}}finally{Ia(a)}}}}function Ia(a,h){if(a.g){um(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||st(a,"ready");try{f.onreadystatechange=g}catch{}}}function um(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xT(h)}};function cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nI(a){const h={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=C(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[k]||[];h[k]=x,x.push(f)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function hm(a){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,a),this.cb=Ds("retryDelaySeedMs",1e4,a),this.Wa=Ds("forwardChannelMaxRetries",2,a),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new qp(a&&a.concurrentRequestLimit),this.Da=new YT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){ot(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Em(this,null,this.W),Aa(this)};function _c(a){if(dm(a),a.G==3){var h=a.U++,f=En(a.I);if(pe(f,"SID",a.K),pe(f,"RID",h),pe(f,"TYPE","terminate"),Os(a,f),h=new Hn(a,a.j,h),h.L=2,h.v=wa(En(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=wm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),_a(h)}vm(a)}function Sa(a){a.g&&(Ec(a),a.g.cancel(),a.g=null)}function dm(a){Sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ra(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Aa(a){if(!Kp(a.h)&&!a.s){a.s=!0;var h=a.Ga;mn||Z(),$||(mn(),$=!0),Q.add(h,a),a.B=0}}function rI(a,h){return Gp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ts(m(a.Ga,a,h),_m(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Hn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),S(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=pm(this,k,h),f=En(this.I),pe(f,"RID",a),pe(f,"CVER",22),this.D&&pe(f,"X-HTTP-Session-Id",this.D),Os(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(sm(x)))+"&"+h:this.m&&yc(f,this.m,x)),gc(this.h,k),this.Ua&&pe(f,"TYPE","init"),this.P?(pe(f,"$req",h),pe(f,"SID","null"),k.T=!0,dc(k,f,null)):dc(k,f,h),this.G=2}}else this.G==3&&(a?fm(this,a):this.i.length==0||Kp(this.h)||fm(this))};function fm(a,h){var f;h?f=h.l:f=a.U++;const g=En(a.I);pe(g,"SID",a.K),pe(g,"RID",f),pe(g,"AID",a.T),Os(a,g),a.m&&a.o&&yc(g,a.m,a.o),f=new Hn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=pm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),gc(a.h,f),dc(f,g,h)}function Os(a,h){a.H&&z(a.H,function(f,g){pe(h,g,f)}),a.l&&Xp({},function(f,g){pe(h,g,f)})}function pm(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let x=-1;for(;;){const B=["count="+f];x==-1?0<f?(x=k[0].g,B.push("ofs="+x)):x=0:B.push("ofs="+x);let he=!0;for(let je=0;je<f;je++){let ae=k[je].g;const Je=k[je].map;if(ae-=x,0>ae)x=Math.max(0,k[je].g-100),he=!1;else try{ZT(Je,B,"req"+ae+"_")}catch{g&&g(Je)}}if(he){g=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function mm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;mn||Z(),$||(mn(),$=!0),Q.add(h,a),a.v=0}}function vc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ts(m(a.Fa,a),_m(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ts(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Sa(this),gm(this))};function Ec(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gm(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=En(a.qa);pe(h,"RID","rpc"),pe(h,"SID",a.K),pe(h,"AID",a.T),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(h,"TO",a.ja),pe(h,"TYPE","xmlhttp"),Os(a,h),a.m&&a.o&&yc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=wa(En(h)),f.m=null,f.P=!0,$p(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),vc(this),ot(19))};function Ra(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ym(a,h){var f=null;if(a.g==h){Ra(a),Ec(a),a.g=null;var g=2}else if(mc(a.h,h))f=h.D,Qp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=ma(),st(g,new Up(g,f)),Aa(a)}else mm(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&rI(a,h)||g==2&&vc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function _m(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const k=!g;g=new Vr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||va(g,"https"),wa(g),k?JT(g.toString(),f):XT(g.toString(),f)}else ot(2);a.G=0,a.l&&a.l.sa(h),vm(a),dm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function vm(a){if(a.G=0,a.ka=[],a.l){const h=Jp(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Em(a,h,f){var g=f instanceof Vr?En(f):new Vr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ea(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var x=new Vr(null);g&&va(x,g),h&&(x.g=h),k&&Ea(x,k),f&&(x.l=f),g=x}return f=a.D,h=a.ya,f&&h&&pe(g,f,h),pe(g,"VER",a.la),Os(a,g),g}function wm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ie(new Cs({eb:f})):new Ie(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pa(){}Pa.prototype.g=function(a,h){return new Et(a,h)};function Et(a,h){Qe.call(this),this.g=new hm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new pi(this)}R(Et,Qe),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){_c(this.g)},Et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=oc(a),a=f);h.i.push(new jT(h.Ya++,a)),h.G==3&&Aa(h)},Et.prototype.N=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,Et.aa.N.call(this)};function Im(a){lc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Im,lc);function Sm(){uc.call(this),this.status=1}R(Sm,uc);function pi(a){this.g=a}R(pi,Tm),pi.prototype.ua=function(){st(this.g,"a")},pi.prototype.ta=function(a){st(this.g,new Im(a))},pi.prototype.sa=function(a){st(this.g,new Sm)},pi.prototype.ra=function(){st(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,JE=function(){return new Pa},QE=function(){return ma()},GE=xr,od={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ga.NO_ERROR=0,ga.TIMEOUT=8,ga.HTTP_ERROR=6,ul=ga,jp.COMPLETE="complete",KE=jp,Vp.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Qs=Vp,qE=Cs,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,WE=Ie}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const qg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Qo("@firebase/firestore");function Bs(){return ei.logLevel}function W(t,...e){if(ei.logLevel<=ee.DEBUG){const n=e.map(Vf);ei.debug(`Firestore (${hs}): ${t}`,...n)}}function Fn(t,...e){if(ei.logLevel<=ee.ERROR){const n=e.map(Vf);ei.error(`Firestore (${hs}): ${t}`,...n)}}function Oo(t,...e){if(ei.logLevel<=ee.WARN){const n=e.map(Vf);ei.warn(`Firestore (${hs}): ${t}`,...n)}}function Vf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function fe(t,e){t||J()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let K=class extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SR=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},AR=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}};class RR{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new SR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ht(e)}}let PR=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},CR=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new PR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}},kR=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class NR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new kR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=DR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new be(0,0))}static max(){return new X(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends xo{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const OR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends xo{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return OR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ae.fromString(e))}static fromName(e){return new q(Ae.fromString(e).popFirst(5))}static empty(){return new q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ae(e.slice()))}}function xR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Ir(i,q.empty(),e)}function LR(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(X.min(),q.empty(),-1)}static max(){return new Ir(X.max(),q.empty(),-1)}}function VR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==bR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function FR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bf.oe=-1;function Cu(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function UR(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gg(this.data.getIterator())}getIteratorFrom(e){return new Gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new St([])}unionWith(e){let n=new We($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZE("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const jR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=jR.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ff(t){const e=t.mapValue.fields.__previous_value__;return Mf(e)?Ff(e):e}function Lo(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}let e0=class ad{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ad("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ad&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:zR(t)?9007199254740991:10:J()}function dn(t,e){if(t===e)return!0;const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lo(t).isEqual(Lo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Sr(i.timestampValue),l=Sr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ti(i.bytesValue).isEqual(ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?Kl(o)===Kl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Kg(o)!==Kg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function Vo(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Zi(t,e){if(t===e)return 0;const n=ni(t),r=ni(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Qg(t.timestampValue,e.timestampValue);case 4:return Qg(Lo(t),Lo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ti(s),u=ti(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=le(l[c],u[c]);if(d!==0)return d}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(ke(s.latitude),ke(o.latitude));return l!==0?l:le(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=Zi(l[c],u[c]);if(d)return d}return le(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ga.mapValue&&o===Ga.mapValue)return 0;if(s===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=le(u[p],d[p]);if(m!==0)return m;const T=Zi(l[u[p]],c[d[p]]);if(T!==0)return T}return le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J()}}function Qg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Sr(t),r=Sr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function es(t){return ld(t)}function ld(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ld(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ld(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function ud(t){return!!t&&"integerValue"in t}function Uf(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cl(t){return!!t&&"mapValue"in t}function ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ao(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());cl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];cl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(ao(this.value))}}function t0(t){const e=[];return li(t.fields,(n,r)=>{const i=new $e([n]);if(cl(r)){const s=t0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function Yg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n="asc"){this.field=e,this.dir=n}}function $R(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{}class Le extends n0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WR(e,n,r):n==="array-contains"?new GR(e,r):n==="in"?new QR(e,r):n==="not-in"?new JR(e,r):n==="array-contains-any"?new XR(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qR(e,r):new KR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zi(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.matchesComparison(Zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends n0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return r0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r0(t){return t.op==="and"}function i0(t){return HR(t)&&r0(t)}function HR(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function cd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+es(t.value);if(i0(t))return t.filters.map(e=>cd(e)).join(",");{const e=t.filters.map(n=>cd(n)).join(",");return`${t.op}(${e})`}}function s0(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&s0(o,i.filters[l]),!0):!1}(t,e):void J()}function o0(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(o0).join(" ,")+"}"}(t):"Filter"}class WR extends Le{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class qR extends Le{constructor(e,n){super(e,"in",n),this.keys=a0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KR extends Le{constructor(e,n){super(e,"not-in",n),this.keys=a0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class GR extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uf(n)&&Vo(n.arrayValue,this.value)}}class QR extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class JR extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vo(this.value.arrayValue,n)}}class XR extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ey(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YR(t,e,n,r,i,s,o)}function jf(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=n}return e.ue}function Bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$R(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zg(t.startAt,e.startAt)&&Zg(t.endAt,e.endAt)}function hd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZR(t,e,n,r,i,s,o,l){return new ku(t,e,n,r,i,s,o,l)}function zf(t){return new ku(t)}function ty(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eP(t){return t.collectionGroup!==null}function lo(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ql(s,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Ql($e.keyField(),r))}return e.ce}function an(t){const e=Y(t);return e.le||(e.le=tP(e,lo(t))),e.le}function tP(t,e){if(t.limitType==="F")return ey(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ql(i.field,s)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return ey(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dd(t,e,n){return new ku(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Bf(an(t),an(e))&&t.limitType===e.limitType}function l0(t){return`${jf(an(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>o0(i)).join(", ")}]`),Cu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>es(i)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Yg(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,l,u){const c=Yg(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,lo(r),i))}(t,e)}function nP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u0(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=rP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rP(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Zi(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=new Te(q.comparator);function Un(){return iP}const c0=new Te(q.comparator);function Js(...t){let e=c0;for(const n of t)e=e.insert(n.key,n);return e}function h0(t){let e=c0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return uo()}function d0(){return uo()}function uo(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const sP=new Te(q.comparator),oP=new We(q.comparator);function ne(...t){let e=oP;for(const n of t)e=e.add(n);return e}const aP=new We(le);function lP(){return aP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function p0(t){return{integerValue:""+t}}function uP(t,e){return UR(e)?p0(e):f0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this._=void 0}}function cP(t,e,n){return t instanceof Jl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mf(s)&&(s=Ff(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof bo?g0(t,e):t instanceof Mo?y0(t,e):function(i,s){const o=m0(i,s),l=ny(o)+ny(i.Pe);return ud(o)&&ud(i.Pe)?p0(l):f0(i.serializer,l)}(t,e)}function hP(t,e,n){return t instanceof bo?g0(t,e):t instanceof Mo?y0(t,e):n}function m0(t,e){return t instanceof Xl?function(r){return ud(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jl extends Ou{}class bo extends Ou{constructor(e){super(),this.elements=e}}function g0(t,e){const n=_0(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Mo extends Ou{constructor(e){super(),this.elements=e}}function y0(t,e){let n=_0(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Xl extends Ou{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ny(t){return ke(t.integerValue||t.doubleValue)}function _0(t){return Uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof bo&&i instanceof bo||r instanceof Mo&&i instanceof Mo?Yi(r.elements,i.elements,dn):r instanceof Xl&&i instanceof Xl?dn(r.Pe,i.Pe):r instanceof Jl&&i instanceof Jl}(t.transform,e.transform)}class fP{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function v0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new w0(t.key,ln.none()):new Zo(t.key,t.data,ln.none());{const n=t.data,r=pt.empty();let i=new We($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kr(t.key,r,new St(i.toArray()),ln.none())}}function pP(t,e,n){t instanceof Zo?function(i,s,o){const l=i.value.clone(),u=iy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(i,s,o){if(!hl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=iy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(E0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function co(t,e,n,r){return t instanceof Zo?function(s,o,l,u){if(!hl(s.precondition,o))return l;const c=s.value.clone(),d=sy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(s,o,l,u){if(!hl(s.precondition,o))return l;const c=sy(s.fieldTransforms,u,o),d=o.data;return d.setAll(E0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return hl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=m0(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function ry(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yi(r,i,(s,o)=>dP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kr extends xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function iy(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hP(o,l,n[i]))}return r}function sy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cP(s,o,e))}return r}class w0 extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gP extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=v0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>ry(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>ry(n,r))}}class $f{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return sP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $f(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,re;function EP(t){switch(t){default:return J();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function T0(t){if(t===void 0)return Fn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ce.OK:return M.OK;case Ce.CANCELLED:return M.CANCELLED;case Ce.UNKNOWN:return M.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return M.INTERNAL;case Ce.UNAVAILABLE:return M.UNAVAILABLE;case Ce.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ce.NOT_FOUND:return M.NOT_FOUND;case Ce.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ce.ABORTED:return M.ABORTED;case Ce.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ce.DATA_LOSS:return M.DATA_LOSS;default:return J()}}(re=Ce||(Ce={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new qr([4294967295,4294967295],0);function oy(t){const e=wP().encode(t),n=new HE;return n.update(e),new Uint8Array(n.digest())}function ay(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qr([n,r],0),new qr([i,s],0)]}class Hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qr.fromNumber(r)));return i.compare(TP)===1&&(i=new qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=oy(e),[r,i]=ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=oy(e),[r,i]=ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lu(X.min(),i,new Te(le),Un(),ne())}}class ea{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ea(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class I0{constructor(e,n){this.targetId=e,this.me=n}}class S0{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ly{constructor(){this.fe=0,this.ge=cy(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new ea(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=cy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class IP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=uy(),this.Qe=new Te(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(hd(s))if(r===0){const o=new q(s.path);this.Ue(n,o,nt.newNoDocument(o,X.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ti(r).toUint8Array()}catch(u){if(u instanceof ZE)return Oo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Hf(o,i,s)}catch(u){return Oo(u instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&hd(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Lu(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=uy(),this.Qe=new Te(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ly,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new We(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ly),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function uy(){return new Te(q.comparator)}function cy(){return new Te(q.comparator)}const SP={asc:"ASCENDING",desc:"DESCENDING"},AP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RP={and:"AND",or:"OR"};class PP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fd(t,e){return t.useProto3Json||Cu(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CP(t,e){return Yl(t,e.toTimestamp())}function un(t){return fe(!!t),X.fromTimestamp(function(n){const r=Sr(n);return new be(r.seconds,r.nanos)}(t))}function Wf(t,e){return pd(t,e).canonicalString()}function pd(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function R0(t){const e=Ae.fromString(t);return fe(D0(e)),e}function md(t,e){return Wf(t.databaseId,e.path)}function Zc(t,e){const n=R0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(C0(n))}function P0(t,e){return Wf(t.databaseId,e)}function kP(t){const e=R0(t);return e.length===4?Ae.emptyPath():C0(e)}function gd(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C0(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hy(t,e,n){return{name:md(t,e),fields:n.value.mapValue.fields}}function NP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(fe(d===void 0||typeof d=="string"),it.fromBase64String(d||"")):(fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),it.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:T0(c.code);return new K(d,c.message||"")}(o);n=new S0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Zc(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):X.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new dl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Zc(t,r.document),s=r.readTime?un(r.readTime):X.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new dl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Zc(t,r.document),s=r.removedTargetIds||[];n=new dl([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vP(i,s),l=r.targetId;n=new I0(l,o)}}return n}function DP(t,e){let n;if(e instanceof Zo)n={update:hy(t,e.key,e.value)};else if(e instanceof w0)n={delete:md(t,e.key)};else if(e instanceof kr)n={update:hy(t,e.key,e.data),updateMask:jP(e.fieldMask)};else{if(!(e instanceof gP))return J();n={verify:md(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Jl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:CP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function OP(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(X.min())&&(o=un(s)),new fP(o,i.transformResults||[])}(n,e))):[]}function xP(t,e){return{documents:[P0(t,e.path)]}}function LP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=P0(t,i);const s=function(c){if(c.length!==0)return N0(fn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:_i(m.field),direction:MP(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=fd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function VP(t){let e=kP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=k0(p);return m instanceof fn&&i0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Ql(vi(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Cu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new Gl(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new Gl(T,m)}(n.endAt)),ZR(e,i,o,s,l,"F",u,c)}function bP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(vi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>k0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function MP(t){return SP[t]}function FP(t){return AP[t]}function UP(t){return RP[t]}function _i(t){return{fieldPath:t.canonicalString()}}function vi(t){return $e.fromServerFormat(t.fieldPath)}function N0(t){return t instanceof Le?function(n){if(n.op==="=="){if(Xg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NAN"}};if(Jg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NAN"}};if(Jg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_i(n.field),op:FP(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>N0(i));return r.length===1?r[0]:{compositeFilter:{op:UP(n.op),filters:r}}}(t):J()}function jP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,i,s=X.min(),o=X.min(),l=it.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.ct=e}}function zP(t){const e=VP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(){this._n=new HP}addToCollectionParentIndex(e,n){return this._n.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Ir.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class HP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ts(0)}static Ln(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&co(r.mutation,i,St.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Js();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Un();const o=uo(),l=function(){return uo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof kr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),co(d.mutation,c,d.mutation.getFieldMask(),be.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new qP(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=uo();let i=new Te((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||St.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=d0();d.forEach(m=>{if(!s.has(m)){const T=v0(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve($r());let l=-1,u=s;return o.next(c=>b.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:h0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Js();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new ku(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let l=Js();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&co(d.mutation,c,St.empty(),be.now()),Du(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return b.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:zP(i.bundledQuery),readTime:un(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.overlays=new Te(q.comparator),this.hr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=$r(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=$r(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return b.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _P(n,r));let s=this.hr.get(n);s===void 0&&(s=ne(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.Pr=new We(Me.Ir),this.Tr=new We(Me.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Me(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new q(new Ae([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new q(new Ae([])),r=new Me(n,e),i=new Me(n,e+1);let s=ne();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return q.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new We(Me.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(le);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Me(new q(s),0);let l=new We(le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),b.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Me(n,0),i=this.wr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.vr=e,this.docs=function(){return new Te(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VR(LR(d),r)<=0||(i.has(d.key)||Du(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Fr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YP(this)}getSize(e){return b.resolve(this.size)}}class YP extends WP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.persistence=e,this.Mr=new ds(n=>jf(n),Bf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new qf,this.targetCount=0,this.Lr=ts.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),b.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.qn(n),b.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.Br={},this.overlays={},this.kr=new bf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new ZP(this),this.indexManager=new $P,this.remoteDocumentCache=function(i){return new XP(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new BP(n),this.$r=new GP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new JP(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new tC(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class tC extends MR{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.zr=new qf,this.jr=null}static Hr(e){return new Kf(e)}get Jr(){if(this.jr)return this.jr;throw J()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const i=q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return b.or([()=>b.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Q1()?8:FR(Ke())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nC;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Bs()<=ee.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(Bs()<=ee.DEBUG&&W("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Bs()<=ee.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):b.resolve())}ji(e,n){if(ty(n))return b.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dd(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,dd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return ty(n)||i.isEqual(X.min())?b.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?b.resolve(null):(Bs()<=ee.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.es(e,o,n,xR(i,-1)).next(l=>l))})}Zi(e,n){let r=new We(u0(e));return n.forEach((i,s)=>{Du(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Bs()<=ee.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",yi(n)),this.zi.getDocumentsMatchingQuery(e,n,Ir.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Te(le),this.rs=new ds(s=>jf(s),Bf),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function sC(t,e,n,r){return new iC(t,e,n,r)}async function O0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function oC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let T=b.resolve();return m.forEach(R=>{T=T.next(()=>d.getEntry(u,R)).next(P=>{const N=c.docVersions.get(R);fe(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function x0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function aC(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(it.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(p,T),function(P,N,v){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,T,d)&&l.push(n.Qr.updateTargetData(s,T))});let u=Un(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(lC(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(X.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function lC(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function uC(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function yd(t,e,n){const r=Y(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function dy(t,e,n){const r=Y(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Y(u),m=p.rs.get(d);return m!==void 0?b.resolve(p.ns.get(m)):p.Qr.getTargetData(c,d)}(r,o,an(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(l=>(hC(r,nP(e),l),{documents:l,hs:s})))}function hC(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class fy{constructor(){this.activeTargetIds=lP()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dC{constructor(){this.no=new fy,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new fy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa=null;function eh(){return Qa===null?Qa=function(){return 268435456+Math.round(2147483648*Math.random())}():Qa++,"0x"+Qa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class gC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=eh(),u=this.vo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Oo("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=pC[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=eh();return new Promise((o,l)=>{const u=new WE;u.setWithCredentials(!0),u.listenOnce(KE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ul.NO_ERROR:const d=u.getResponseJson();W(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ul.TIMEOUT:W(et,`RPC '${e}' ${s} timed out`),l(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const p=u.getStatus();if(W(et,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const R=function(N){const v=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(T.status);l(new K(R,T.message))}else l(new K(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(M.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{W(et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=eh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JE(),l=QE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new qE({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(et,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,T=!1;const R=new mC({lo:N=>{T?W(et,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(W(et,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(et,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},ho:()=>p.close()}),P=(N,v,_)=>{N.listen(v,I=>{try{_(I)}catch(L){setTimeout(()=>{throw L},0)}})};return P(p,Qs.EventType.OPEN,()=>{T||(W(et,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),P(p,Qs.EventType.CLOSE,()=>{T||(T=!0,W(et,`RPC '${e}' stream ${i} transport closed`),R.po())}),P(p,Qs.EventType.ERROR,N=>{T||(T=!0,Oo(et,`RPC '${e}' stream ${i} transport errored:`,N),R.po(new K(M.UNAVAILABLE,"The operation could not be completed")))}),P(p,Qs.EventType.MESSAGE,N=>{var v;if(!T){const _=N.data[0];fe(!!_);const I=_,L=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(L){W(et,`RPC '${e}' stream ${i} received error:`,L);const U=L.status;let z=function(E){const S=Ce[E];if(S!==void 0)return T0(S)}(U),w=L.message;z===void 0&&(z=M.INTERNAL,w="Unknown error status: "+U+" with message "+L.message),T=!0,R.po(new K(z,w)),p.close()}else W(et,`RPC '${e}' stream ${i} received:`,_),R.yo(_)}}),P(l,GE.STAT_EVENT,N=>{N.stat===od.PROXY?W(et,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===od.NOPROXY&&W(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}function th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return new PP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new L0(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new K(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yC extends V0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=NP(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?un(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=gd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=hd(u)?{documents:xP(s,u)}:{query:LP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=A0(s,o.resumeToken);const c=fd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Yl(s,o.snapshotVersion.toTimestamp());const c=fd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=bP(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=gd(this.serializer),n.removeTarget=e,this.i_(n)}}class _C extends V0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=OP(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.A_(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=gd(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DP(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,pd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(M.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,pd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class EC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Fn(n),this.y_=!1):W("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{ui(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.M_.add(4),await ta(c),c.N_.set("Unknown"),c.M_.delete(4),await bu(c)}(this))})}),this.N_=new EC(r,i)}}async function bu(t){if(ui(t))for(const e of t.x_)await e(!0)}async function ta(t){for(const e of t.x_)await e(!1)}function b0(t,e){const n=Y(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Yf(n)?Xf(n):fs(n).Xo()&&Jf(n,e))}function Qf(t,e){const n=Y(t),r=fs(n);n.F_.delete(e),r.Xo()&&M0(n,e),n.F_.size===0&&(r.Xo()?r.n_():ui(n)&&n.N_.set("Unknown"))}function Jf(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).P_(e)}function M0(t,e){t.L_.xe(e),fs(t).I_(e)}function Xf(t){t.L_=new IP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.N_.w_()}function Yf(t){return ui(t)&&!fs(t).Zo()&&t.F_.size>0}function ui(t){return Y(t).M_.size===0}function F0(t){t.L_=void 0}async function TC(t){t.N_.set("Online")}async function IC(t){t.F_.forEach((e,n)=>{Jf(t,e)})}async function SC(t,e){F0(t),Yf(t)?(t.N_.D_(e),Xf(t)):t.N_.set("Unknown")}async function AC(t,e,n){if(t.N_.set("Online"),e instanceof S0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zl(t,r)}else if(e instanceof dl?t.L_.Ke(e):e instanceof I0?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await x0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(it.EMPTY_BYTE_STRING,d.snapshotVersion)),M0(s,u);const p=new or(d.target,u,c,d.sequenceNumber);Jf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Zl(t,r)}}async function Zl(t,e,n){if(!Yo(e))throw e;t.M_.add(1),await ta(t),t.N_.set("Offline"),n||(n=()=>x0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await bu(t)})}function U0(t,e){return e().catch(n=>Zl(t,n,e))}async function Mu(t){const e=Y(t),n=Ar(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;RC(e);)try{const i=await uC(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,PC(e,i)}catch(i){await Zl(e,i)}j0(e)&&B0(e)}function RC(t){return ui(t)&&t.v_.length<10}function PC(t,e){t.v_.push(e);const n=Ar(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function j0(t){return ui(t)&&!Ar(t).Zo()&&t.v_.length>0}function B0(t){Ar(t).start()}async function CC(t){Ar(t).V_()}async function kC(t){const e=Ar(t);for(const n of t.v_)e.d_(n.mutations)}async function NC(t,e,n){const r=t.v_.shift(),i=$f.from(r,e,n);await U0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mu(t)}async function DC(t,e){e&&Ar(t).E_&&await async function(r,i){if(function(o){return EP(o)&&o!==M.ABORTED}(i.code)){const s=r.v_.shift();Ar(r).t_(),await U0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mu(r)}}(t,e),j0(t)&&B0(t)}async function my(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ui(n);n.M_.add(3),await ta(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await bu(n)}async function OC(t,e){const n=Y(t);e?(n.M_.delete(2),await bu(n)):e||(n.M_.add(2),await ta(n),n.N_.set("Unknown"))}function fs(t){return t.B_||(t.B_=function(n,r,i){const s=Y(n);return s.f_(),new yC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:TC.bind(null,t),To:IC.bind(null,t),Ao:SC.bind(null,t),h_:AC.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Yf(t)?Xf(t):t.N_.set("Unknown")):(await t.B_.stop(),F0(t))})),t.B_}function Ar(t){return t.k_||(t.k_=function(n,r,i){const s=Y(n);return s.f_(),new _C(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:CC.bind(null,t),Ao:DC.bind(null,t),R_:kC.bind(null,t),A_:NC.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Mu(t)):(await t.k_.stop(),t.v_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Zf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ep(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Yo(t))return new K(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Js(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.q_=new Te(q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):J():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ns(e,n,Ui.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class LC{constructor(){this.queries=new ds(e=>l0(e),Nu),this.onlineState="Unknown",this.z_=new Set}}async function VC(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new xC,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ep(o,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&tp(n)}async function bC(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MC(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&tp(n)}function FC(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function tp(t){t.z_.forEach(e=>{e.next()})}var _d,yy;(yy=_d||(_d={})).J_="default",yy.Cache="cache";class UC{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==_d.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.key=e}}class $0{constructor(e){this.key=e}}class jC{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ne(),this.mutatedKeys=ne(),this.Ia=u0(e),this.Ta=new Ui(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new gy,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),T=Du(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let N=!1;m&&T?m.data.isEqual(T.data)?R!==P&&(r.track({type:3,doc:T}),N=!0):this.Ra(m,T)||(r.track({type:2,doc:T}),N=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),N=!0):m&&!T&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(T?(o=o.add(T),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(T,R){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return P(T)-P(R)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ns(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new gy,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ne(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new $0(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new z0(r))}),n}pa(e){this.la=e.hs,this.Pa=ne();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ns.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class BC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zC{constructor(e){this.key=e,this.wa=!1}}class $C{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ds(l=>l0(l),Nu),this.Da=new Map,this.Ca=new Set,this.va=new Te(q.comparator),this.Fa=new Map,this.Ma=new qf,this.xa={},this.Oa=new Map,this.Na=ts.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function HC(t,e,n=!0){const r=Q0(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await H0(r,e,n,!0),i}async function WC(t,e){const n=Q0(t);await H0(n,e,!0,!1)}async function H0(t,e,n,r){const i=await cC(t.localStore,an(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await qC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&b0(t.remoteStore,i),l}async function qC(t,e,n,r,i){t.Ba=(p,m,T)=>async function(P,N,v,_){let I=N.view.da(v);I.Xi&&(I=await dy(P.localStore,N.query,!1).then(({documents:w})=>N.view.da(w,I)));const L=_&&_.targetChanges.get(N.targetId),U=_&&_.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(I,P.isPrimaryClient,L,U);return vy(P,N.targetId,z.fa),z.snapshot}(t,p,m,T);const s=await dy(t.localStore,e,!0),o=new jC(e,s.hs),l=o.da(s.documents),u=ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);vy(t,n,c.fa);const d=new BC(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function KC(t,e,n){const r=Y(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Nu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await yd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Qf(r.remoteStore,i.targetId),vd(r,i.targetId)}).catch(Xo)):(vd(r,i.targetId),await yd(r.localStore,i.targetId,!0))}async function GC(t,e){const n=Y(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qf(n.remoteStore,r.targetId))}async function QC(t,e,n){const r=nk(t);try{const i=await function(o,l){const u=Y(o),c=be.now(),d=l.reduce((T,R)=>T.add(R.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Un(),P=ne();return u.os.getEntries(T,d).next(N=>{R=N,R.forEach((v,_)=>{_.isValidDocument()||(P=P.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(N=>{p=N;const v=[];for(const _ of l){const I=mP(_,p.get(_.key).overlayedDocument);I!=null&&v.push(new kr(_.key,I,t0(I.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,v,l)}).next(N=>{m=N;const v=N.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(T,N.batchId,v)})}).then(()=>({batchId:m.batchId,changes:h0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Te(le)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await na(r,i.changes),await Mu(r.remoteStore)}catch(i){const s=ep(i,"Failed to persist write");n.reject(s)}}async function W0(t,e){const n=Y(t);try{const r=await aC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?fe(o.wa):i.removedDocuments.size>0&&(fe(o.wa),o.wa=!1))}),await na(n,r,e)}catch(r){await Xo(r)}}function _y(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&tp(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JC(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Te(q.comparator);o=o.insert(s,nt.newNoDocument(s,X.min()));const l=ne().add(s),u=new Lu(X.min(),new Map,new Te(le),o,l);await W0(r,u),r.va=r.va.remove(s),r.Fa.delete(e),np(r)}else await yd(r.localStore,e,!1).then(()=>vd(r,e,n)).catch(Xo)}async function XC(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await oC(n.localStore,e);K0(n,r,null),q0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await na(n,i)}catch(i){await Xo(i)}}async function YC(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(fe(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);K0(r,e,n),q0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await na(r,i)}catch(i){await Xo(i)}}function q0(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function K0(t,e,n){const r=Y(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||G0(t,r)})}function G0(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Qf(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),np(t))}function vy(t,e,n){for(const r of n)r instanceof z0?(t.Ma.addReference(r.key,e),ZC(t,r)):r instanceof $0?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||G0(t,r.key)):J()}function ZC(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Ca.add(r),np(t))}function np(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new q(Ae.fromString(e)),r=t.Na.next();t.Fa.set(r,new zC(n)),t.va=t.va.insert(n,r),b0(t.remoteStore,new or(an(zf(n.path)),r,"TargetPurposeLimboResolution",bf.oe))}}async function na(t,e,n){const r=Y(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const d=Gf.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=Y(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.qi,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>b.forEach(m.Qi,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Yo(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=d.ns.get(m),R=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(m,P)}}}(r.localStore,s))}async function ek(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await O0(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new K(M.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await na(n,r.us)}}function tk(t,e){const n=Y(t),r=n.Fa.get(e);if(r&&r.wa)return ne().add(r.key);{let i=ne();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function Q0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JC.bind(null,e),e.Sa.h_=MC.bind(null,e.eventManager),e.Sa.ka=FC.bind(null,e.eventManager),e}function nk(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YC.bind(null,e),e}class Ey{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sC(this.persistence,new rC,e.initialUser,this.serializer)}createPersistence(e){return new eC(Kf.Hr,this.serializer)}createSharedClientState(e){return new dC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_y(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ek.bind(null,this.syncEngine),await OC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LC}()}createDatastore(e){const n=Vu(e.databaseInfo.databaseId),r=function(s){return new gC(s)}(e.databaseInfo);return function(s,o,l,u){return new vC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new wC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_y(this.syncEngine,n,0),function(){return py.D()?new py:new fC}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new $C(i,s,o,l,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Y(r);W("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ta(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=XE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nh(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await O0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ak(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>my(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>my(e.remoteStore,i)),t._onlineComponents=e}function ok(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ak(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ok(n))throw n;Oo("Error using user provided cache. Falling back to memory cache: "+n),await nh(t,new Ey)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await nh(t,new Ey);return t._offlineComponents}async function J0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await wy(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await wy(t,new rk))),t._onlineComponents}function lk(t){return J0(t).then(e=>e.syncEngine)}async function uk(t){const e=await J0(t),n=e.eventManager;return n.onListen=HC.bind(null,e.syncEngine),n.onUnlisten=KC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GC.bind(null,e.syncEngine),n}function ck(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new ik({next:m=>{o.enqueueAndForget(()=>bC(s,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new K(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new K(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new UC(zf(l.path),d,{includeMetadataChanges:!0,ra:!0});return VC(s,p)}(await uk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e,n){if(!n)throw new K(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dk(t,e,n,r){if(e===!0&&r===!0)throw new K(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iy(t){if(!q.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rp(t);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sy=class{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};class Y0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AR;switch(r.type){case"firstParty":return new CR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ty.get(n);r&&(W("ComponentProvider","Removing Datastore"),Ty.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ip(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Fo extends ip{constructor(e,n,r){super(e,n,zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new q(e))}withConverter(e){return new Fo(this.firestore,e,this._path)}}function Ed(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=XE.newId()),hk("doc","path",e),t instanceof Y0){const r=Ae.fromString(e,...n);return Iy(r),new Rt(t,null,new q(r))}{if(!(t instanceof Rt||t instanceof Fo))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Iy(r),new Rt(t.firestore,t instanceof Fo?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new L0(this,"async_queue_retry"),this.hu=()=>{const n=th();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=th();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new yr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Yo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Zf.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&J()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}let Fu=class extends Y0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new fk}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ew(this),this._firestoreClient.terminate()}};function Z0(t){return t._firestoreClient||ew(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ew(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new BR(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,X0(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new sk(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(it.fromBase64String(e))}catch(n){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=/^__.*__$/;class mk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}class tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ap{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ap(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return eu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(nw(this.fu)&&pk.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class gk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vu(e)}Fu(e,n,r,i=!1){return new ap({fu:e,methodName:n,vu:r,path:$e.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rw(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new gk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yk(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);lp("Data must be an object, but it was:",o,r);const l=iw(r,o);let u,c;if(s.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=wd(e,p,n);if(!o.contains(m))throw new K(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ow(d,m)||d.push(m)}u=new St(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new mk(new pt(l),u,c)}class ju extends sp{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}function _k(t,e,n,r){const i=t.Fu(1,e,n);lp("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();li(r,(u,c)=>{const d=up(e,u,n);c=Ge(c);const p=i.Su(d);if(c instanceof ju)s.push(d);else{const m=Bu(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new St(s);return new tw(o,l,i.fieldTransforms)}function vk(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[wd(e,r,n)],u=[i];if(s.length%2!=0)throw new K(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(wd(e,s[m])),u.push(s[m+1]);const c=[],d=pt.empty();for(let m=l.length-1;m>=0;--m)if(!ow(c,l[m])){const T=l[m];let R=u[m];R=Ge(R);const P=o.Su(T);if(R instanceof ju)c.push(T);else{const N=Bu(R,P);N!=null&&(c.push(T),d.set(T,N))}}const p=new St(c);return new tw(d,p,o.fieldTransforms)}function Bu(t,e){if(sw(t=Ge(t)))return lp("Unsupported field value:",e,t),iw(t,e);if(t instanceof sp)return function(r,i){if(!nw(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Bu(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:Yl(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(i.serializer,s)}}if(r instanceof op)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof is)return{bytesValue:A0(i.serializer,r._byteString)};if(r instanceof Rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${rp(r)}`)}(t,e)}function iw(t,e){const n={};return YE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,i)=>{const s=Bu(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof op||t instanceof is||t instanceof Rt||t instanceof sp)}function lp(t,e,n){if(!sw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=rp(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function wd(t,e,n){if((e=Ge(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return up(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ek=new RegExp("[~\\*/\\[\\]]");function up(t,e,n){if(e.search(Ek)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(M.INVALID_ARGUMENT,l+t+u)}function ow(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wk extends aw{data(){return super.data()}}function lw(t,e){return typeof e=="string"?up(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}class Tk{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new op(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ff(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Lo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);fe(D0(r));const i=new e0(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uw extends aw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ak(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ak extends uw{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){t=rs(t,Rt);const e=rs(t.firestore,Fu);return ck(Z0(e),t._key).then(n=>kk(e,t,n))}class Rk extends Tk{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Pk(t,e,n){t=rs(t,Rt);const r=rs(t.firestore,Fu),i=Ik(t.converter,e);return cw(r,[yk(rw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ln.none())])}function Ck(t,e,n,...r){t=rs(t,Rt);const i=rs(t.firestore,Fu),s=rw(i);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Uu?vk(s,"updateDoc",t._key,e,n,r):_k(s,"updateDoc",t._key,e),cw(i,[o.toMutation(t._key,ln.exists(!0))])}function cw(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>QC(await lk(r),i,s)),s.promise}(Z0(t),e)}function kk(t,e,n){const r=n.docs.get(e._key),i=new Rk(t);return new uw(t,i,e._key,r,new Sk(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){hs=i})(zn),Mn(new bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Fu(new RR(r.getProvider("auth-internal")),new NR(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e0(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),vt(qg,"4.6.2",e),vt(qg,"4.6.2","esm2017")})();var Nk="firebase",Dk="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(Nk,Dk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Qo("@firebase/firestore");function Ok(t,...e){if(ss.logLevel<=ee.DEBUG){const n=e.map(cp);ss.debug(`Firestore (${ra}): ${t}`,...n)}}function xk(t,...e){if(ss.logLevel<=ee.ERROR){const n=e.map(cp);ss.error(`Firestore (${ra}): ${t}`,...n)}}function Lk(t,...e){if(ss.logLevel<=ee.WARN){const n=e.map(cp);ss.warn(`Firestore (${ra}): ${t}`,...n)}}function cp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t="Unexpected state"){const e=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+t;throw xk(e),new Error(e)}function dw(t,e){t||hw()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="invalid-argument",Ay="failed-precondition";class Tt extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class bk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mk{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(dw(typeof e.accessToken=="string"),new fw(e.accessToken,new dt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Fk{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Uk{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new Fk(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bk{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(dw(typeof e.token=="string"),new jk(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class tu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tu&&e.projectId===this.projectId&&e.database===this.database}}function zk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":hw()}function $k(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Tt(Wt,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zk(t);throw new Tt(Wt,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ry,ie;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ie=Ry||(Ry={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new Map;class Cy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Tt(Wt,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Tt(Wt,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,l,u){if(o===!0&&u===!0)throw new Tt(Wt,`${s} and ${l} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Tt(Wt,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Tt(Wt,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Tt(Wt,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pw{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Tt(Ay,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Tt(Ay,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vk;switch(r.type){case"firstParty":return new Uk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Tt(Wt,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Py.get(n);r&&(Ok("ComponentProvider","Removing Datastore"),Py.delete(n),r.terminate())}(this),Promise.resolve()}}function Wk(t,e){const n=typeof t=="object"?t:xf(),r=typeof t=="string"?t:"(default)",i=Jo(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=B1("firestore");s&&qk(i,...s)}return i}function qk(t,e,n,r={}){var i;const s=(t=$k(t,pw))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Lk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=dt.MOCK_USER;else{l=$1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Tt(Wt,"mockUserToken must contain 'sub' or 'user_id' field!");u=new dt(c)}t._authCredentials=new bk(new fw(l,u))}}(function(){(function(n){ra=n})(`${zn}_lite`),Mn(new bn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new pw(new Mk(e.getProvider("auth-internal")),new Bk(e.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Tt(Wt,'"projectId" not provided in firebase.initializeApp.');return new tu(l.options.projectId,u)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),vt("firestore-lite","4.6.2",""),vt("firestore-lite","4.6.2","esm2017")})();function hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kk=mw,gw=new ai("auth","Firebase",mw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Qo("@firebase/auth");function Gk(t,...e){nu.logLevel<=ee.WARN&&nu.warn(`Auth (${zn}): ${t}`,...e)}function fl(t,...e){nu.logLevel<=ee.ERROR&&nu.error(`Auth (${zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw dp(t,...e)}function cn(t,...e){return dp(t,...e)}function yw(t,e,n){const r=Object.assign(Object.assign({},Kk()),{[e]:n});return new ai("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return yw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gw.create(t,...e)}function G(t,e,...n){if(!t)throw dp(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function jn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qk(){return ky()==="http:"||ky()==="https:"}function ky(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qk()||q1()||"connection"in navigator)?navigator.onLine:!0}function Xk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=H1()||K1()}get(){return Jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new ia(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,i={}){return vw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),_w.fetch()(Ew(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function vw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yk),e);try{const i=new tN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ja(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yw(t,d,c);Yt(t,d)}}catch(i){if(i instanceof Zt)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function sa(t,e,n,r,i={}){const s=await $n(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ew(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fp(t.config,i):`${t.config.apiScheme}://${i}`}function eN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),Zk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}function Ny(t){return t!==void 0&&t.enterprise!==void 0}class nN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rN(t,e){return $n(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function ww(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sN(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=pp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ho(rh(i.auth_time)),issuedAtTime:ho(rh(i.iat)),expirationTime:ho(rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function pp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=RE(n);return i?JSON.parse(i):(fl("Failed to decode base64 JWT payload"),null)}catch(i){return fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dy(t){const e=pp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&oN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await os(t,ww(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tw(s.providerUserInfo):[],l=uN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Sd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function lN(t){const e=Ge(t);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tw(t){return t.map(e=>{var{providerId:n}=e,r=hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e){const n=await vw(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ew(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_w.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hN(t,e){return $n(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Dy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await os(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sN(this,e)}reload(){return lN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await os(this,iN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:L,isAnonymous:U,providerData:z,stsTokenManager:w}=n;G(I&&w,e,"internal-error");const y=ji.fromJSON(this.name,w);G(typeof I=="string",e,"internal-error"),Gn(p,e.name),Gn(m,e.name),G(typeof L=="boolean",e,"internal-error"),G(typeof U=="boolean",e,"internal-error"),Gn(T,e.name),Gn(R,e.name),Gn(P,e.name),Gn(N,e.name),Gn(v,e.name),Gn(_,e.name);const E=new Cn({uid:I,auth:e,email:m,emailVerified:L,displayName:p,isAnonymous:U,photoURL:R,phoneNumber:T,tenantId:P,stsTokenManager:y,createdAt:v,lastLoginAt:_});return z&&Array.isArray(z)&&(E.providerData=z.map(S=>Object.assign({},S))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ji;l.updateFromIdToken(r);const u=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new Map;function kn(t){jn(t instanceof Function,"Expected a class definition");let e=Oy.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iw.type="NONE";const xy=Iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(kn(xy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(xy);const o=pl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Cn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cw(e))return"Blackberry";if(kw(e))return"Webos";if(mp(e))return"Safari";if((e.includes("chrome/")||Aw(e))&&!e.includes("edge/"))return"Chrome";if(Pw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sw(t=Ke()){return/firefox\//i.test(t)}function mp(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Aw(t=Ke()){return/crios\//i.test(t)}function Rw(t=Ke()){return/iemobile/i.test(t)}function Pw(t=Ke()){return/android/i.test(t)}function Cw(t=Ke()){return/blackberry/i.test(t)}function kw(t=Ke()){return/webos/i.test(t)}function zu(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dN(t=Ke()){var e;return zu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fN(){return G1()&&document.documentMode===10}function Nw(t=Ke()){return zu(t)||Pw(t)||kw(t)||Cw(t)||/windows phone/i.test(t)||Rw(t)}function pN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e=[]){let n;switch(t){case"Browser":n=Ly(Ke());break;case"Worker":n=`${Ly(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e={}){return $n(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=6;class _N{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vy(this),this.idTokenSubscription=new Vy(this),this.beforeStateQueue=new mN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ww(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Dn(this));const n=e?Ge(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gN(this),n=new _N(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ci(t){return Ge(t)}class Vy{constructor(e){this.auth=e,this.observer=null,this.addObserver=DE(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EN(t){$u=t}function Ow(t){return $u.loadJS(t)}function wN(){return $u.recaptchaEnterpriseScript}function TN(){return $u.gapiScript}function IN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SN="recaptcha-enterprise",AN="NO_RECAPTCHA";class RN{constructor(e){this.type=SN,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{rN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new nN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Ny(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(AN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ny(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wN();u.length!==0&&(u+=l),Ow(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function by(t,e,n,r=!1){const i=new RN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ad(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await by(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await by(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t,e){const n=Jo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wl(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function CN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kN(t,e,n){const r=ci(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xw(e),{host:o,port:l}=NN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),DN()}function xw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NN(t){const e=xw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:My(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:My(o)}}}function My(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function ON(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,e){return sa(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function VN(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends gp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ad(e,n,"signInWithPassword",xN);case"emailLink":return LN(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ad(e,r,"signUpPassword",ON);case"emailLink":return VN(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return sa(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="http://localhost";class ri extends gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:bN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FN(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,r=Ks(Gs(t)).deep_link_id;return(r?Ks(Gs(r)).link:null)||r||n||e||t}class yp{constructor(e){var n,r,i,s,o,l;const u=Ks(Gs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=MN((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=FN(e);try{return new yp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return Uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yp.parseLink(n);return G(r,"argument-error"),Uo._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Lw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends oa{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends oa{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends oa{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e){return sa(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=Fy(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fy(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends Zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,iu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new iu(e,n,r,i)}}function Vw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?iu._fromErrorAndOperation(t,s,e,r):s})}async function jN(t,e,n=!1){const r=await os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(Dn(r));const i="reauthenticate";try{const s=await os(t,Vw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=pp(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(t,e,n=!1){if(Gt(t.app))return Promise.reject(Dn(t));const r="signIn",i=await Vw(t,r,e),s=await ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zN(t,e){return bw(ci(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $N(t,e,n){if(Gt(t.app))return Promise.reject(Dn(t));const r=ci(t),o=await Ad(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Mw(t),u}),l=await ii._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function HN(t,e,n){return Gt(t.app)?Promise.reject(Dn(t)):zN(Ge(t),ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t,e){return $n(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ge(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await os(r,WN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KN(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function GN(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function QN(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function JN(t){return Ge(t).signOut()}const su="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(su,"1"),this.storage.removeItem(su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(){const t=Ke();return mp(t)||zu(t)}const YN=1e3,ZN=10;class Uw extends Fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XN()&&pN(),this.fallbackToPolling=Nw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uw.type="LOCAL";const eD=Uw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw extends Fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jw.type="SESSION";const Bw=jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await tD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=_p("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function rD(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function iD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oD(){return zw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firebaseLocalStorageDb",aD=1,ou="firebaseLocalStorage",Hw="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wu(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function lD(){const t=indexedDB.deleteDatabase($w);return new aa(t).toPromise()}function Rd(){const t=indexedDB.open($w,aD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:Hw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await lD(),e(await Rd()))})})}async function Uy(t,e,n){const r=Wu(t,!0).put({[Hw]:e,value:n});return new aa(r).toPromise()}async function uD(t,e){const n=Wu(t,!1).get(e),r=await new aa(n).toPromise();return r===void 0?null:r.value}function jy(t,e){const n=Wu(t,!0).delete(e);return new aa(n).toPromise()}const cD=800,hD=3;class Ww{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(oD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iD(),!this.activeServiceWorker)return;this.sender=new nD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rd();return await Uy(e,su,"1"),await jy(e,su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wu(i,!1).getAll();return new aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ww.type="LOCAL";const dD=Ww;new ia(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t,e){return e?kn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pD(t){return bw(t.auth,new vp(t),t.bypassAuthState)}function mD(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),BN(n,new vp(t),t.bypassAuthState)}async function gD(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),jN(n,new vp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pD;case"linkViaPopup":case"linkViaRedirect":return gD;case"reauthViaPopup":case"reauthViaRedirect":return mD;default:Yt(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=new ia(2e3,1e4);class Oi extends qw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yD.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="pendingRedirect",ml=new Map;class vD extends qw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const r=await ED(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ED(t,e){const n=ID(e),r=TD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wD(t,e){ml.set(t._key(),e)}function TD(t){return kn(t._redirectPersistence)}function ID(t){return pl(_D,t.config.apiKey,t.name)}async function SD(t,e,n=!1){if(Gt(t.app))return Promise.reject(Dn(t));const r=ci(t),i=fD(r,e),o=await new vD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=10*60*1e3;class RD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Kw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AD&&this.cachedEventUids.clear(),this.cachedEventUids.has(By(e))}saveEventToCache(e){this.cachedEventUids.add(By(e)),this.lastProcessedEventTime=Date.now()}}function By(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CD(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ND=/^https?/;async function DD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CD(t);for(const n of e)try{if(OD(n))return}catch{}Yt(t,"unauthorized-domain")}function OD(t){const e=Id(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ND.test(n))return!1;if(kD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=new ia(3e4,6e4);function zy(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LD(t){return new Promise((e,n)=>{var r,i,s;function o(){zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zy(),n(cn(t,"network-request-failed"))},timeout:xD.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const l=IN("iframefcb");return hn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Ow(`${TN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw gl=null,e})}let gl=null;function VD(t){return gl=gl||LD(t),gl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=new ia(5e3,15e3),MD="__/auth/iframe",FD="emulator/auth/iframe",UD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BD(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fp(e,FD):`https://${t.config.authDomain}/${MD}`,r={apiKey:e.apiKey,appName:t.name,v:zn},i=jD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Go(r).slice(1)}`}async function zD(t){const e=await VD(t),n=hn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:BD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=hn().setTimeout(()=>{s(o)},bD.get());function u(){hn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HD=500,WD=600,qD="_blank",KD="http://localhost";class $y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GD(t,e,n,r=HD,i=WD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},$D),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ke().toLowerCase();n&&(l=Aw(c)?qD:n),Sw(c)&&(e=e||KD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[T,R])=>`${m}${T}=${R},`,"");if(dN(c)&&l!=="_self")return QD(e||"",l),new $y(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new $y(p)}function QD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD="__/auth/handler",XD="emulator/auth/handler",YD=encodeURIComponent("fac");async function Hy(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:i};if(e instanceof Lw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof oa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${YD}=${encodeURIComponent(u)}`:"";return`${ZD(t)}?${Go(l).slice(1)}${c}`}function ZD({config:t}){return t.emulator?fp(t,XD):`https://${t.authDomain}/${JD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="webStorageSupport";class eO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bw,this._completeRedirectFn=SD,this._overrideRedirectResult=wD}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hy(e,n,r,Id(),i);return GD(e,o,_p())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hy(e,n,r,Id(),i);return rD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zD(e),r=new RD(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ih];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nw()||mp()||zu()}}const tO=eO;var Wy="@firebase/auth",qy="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iO(t){Mn(new bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dw(t)},c=new vN(r,i,s,u);return CN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new bn("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new nO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Wy,qy,rO(t)),vt(Wy,qy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=5*60,oO=kE("authIdTokenMaxAge")||sO;let Ky=null;const aO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oO)return;const i=n==null?void 0:n.token;Ky!==i&&(Ky=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lO(t=xf()){const e=Jo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PN(t,{popupRedirectResolver:tO,persistence:[dD,eD,Bw]}),r=kE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=aO(s.toString());GN(n,o,()=>o(n.currentUser)),KN(n,l=>o(l))}}const i=PE("auth");return i&&kN(n,`http://${i}`),n}function uO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}EN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iO("Browser");const cO={apiKey:"AIzaSyCjHBBdnO44nG6_DmJGrofRd2gK3moewr8",authDomain:"cocktail-corner.firebaseapp.com",projectId:"cocktail-corner",storageBucket:"cocktail-corner.appspot.com",messagingSenderId:"543043394160",appId:"1:543043394160:web:b686cfc457576101aab2b5",measurementId:"G-N2EETC7P0T"},Gw=Pu(cO),Pd=Wk(Gw),au=lO(Gw);/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jo.apply(this,arguments)}var ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ar||(ar={}));const Gy="popstate";function hO(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Cd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lu(i)}return fO(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dO(){return Math.random().toString(36).substr(2,8)}function Qy(t,e){return{usr:t.state,key:t.key,idx:e}}function Cd(t,e,n,r){return n===void 0&&(n=null),jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||dO()})}function lu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fO(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ar.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(jo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=ar.Pop;let N=d(),v=N==null?null:N-c;c=N,u&&u({action:l,location:P.location,delta:v})}function m(N,v){l=ar.Push;let _=Cd(P.location,N,v);c=d()+1;let I=Qy(_,c),L=P.createHref(_);try{o.pushState(I,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function T(N,v){l=ar.Replace;let _=Cd(P.location,N,v);c=d();let I=Qy(_,c),L=P.createHref(_);o.replaceState(I,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function R(N){let v=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof N=="string"?N:lu(N);return _=_.replace(/ $/,"%20"),De(v,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,v)}let P={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Gy,p),u=N,()=>{i.removeEventListener(Gy,p),u=null}},createHref(N){return e(i,N)},createURL:R,encodeLocation(N){let v=R(N);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:T,go(N){return o.go(N)}};return P}var Jy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jy||(Jy={}));function pO(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ms(e):e,i=Ep(r.pathname||"/",n);if(i==null)return null;let s=Jw(t);mO(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=PO(i);o=SO(s[l],u)}return o}function Jw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(De(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=_r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Jw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:TO(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Xw(s.path))i(s,o,u)}),e}function Xw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Xw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function mO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gO=/^:[\w-]+$/,yO=3,_O=2,vO=1,EO=10,wO=-2,Xy=t=>t==="*";function TO(t,e){let n=t.split("/"),r=n.length;return n.some(Xy)&&(r+=wO),e&&(r+=_O),n.filter(i=>!Xy(i)).reduce((i,s)=>i+(gO.test(s)?yO:s===""?vO:EO),r)}function IO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function SO(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=AO({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let p=l.route;s.push({params:r,pathname:_r([i,d.pathname]),pathnameBase:DO(_r([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=_r([i,d.pathnameBase]))}return s}function AO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=RO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:T}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[p];return T&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function RO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Qw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function PO(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ep(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ms(t):t;return{pathname:n?n.startsWith("/")?n:kO(n,e):e,search:OO(r),hash:xO(i)}}function kO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NO(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yw(t,e){let n=NO(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ms(t):(i=jo({},t),De(!i.pathname||!i.pathname.includes("?"),sh("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),sh("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),sh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=CO(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),DO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),OO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eT=["post","put","patch","delete"];new Set(eT);const VO=["get",...eT];new Set(VO);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}const wp=j.createContext(null),bO=j.createContext(null),hi=j.createContext(null),qu=j.createContext(null),Dr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),tT=j.createContext(null);function MO(t,e){let{relative:n}=e===void 0?{}:e;la()||De(!1);let{basename:r,navigator:i}=j.useContext(hi),{hash:s,pathname:o,search:l}=rT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:_r([r,o])),i.createHref({pathname:u,search:l,hash:s})}function la(){return j.useContext(qu)!=null}function Ku(){return la()||De(!1),j.useContext(qu).location}function nT(t){j.useContext(hi).static||j.useLayoutEffect(t)}function Gu(){let{isDataRoute:t}=j.useContext(Dr);return t?XO():FO()}function FO(){la()||De(!1);let t=j.useContext(wp),{basename:e,future:n,navigator:r}=j.useContext(hi),{matches:i}=j.useContext(Dr),{pathname:s}=Ku(),o=JSON.stringify(Yw(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return nT(()=>{l.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Zw(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:_r([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function UO(){let{matches:t}=j.useContext(Dr),e=t[t.length-1];return e?e.params:{}}function rT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(hi),{matches:i}=j.useContext(Dr),{pathname:s}=Ku(),o=JSON.stringify(Yw(i,r.v7_relativeSplatPath));return j.useMemo(()=>Zw(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function jO(t,e){return BO(t,e)}function BO(t,e,n,r){la()||De(!1);let{navigator:i}=j.useContext(hi),{matches:s}=j.useContext(Dr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ku(),d;if(e){var p;let N=typeof e=="string"?ms(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||De(!1),d=N}else d=c;let m=d.pathname||"/",T=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");T="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let R=pO(t,{pathname:T}),P=qO(R&&R.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:_r([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:_r([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&P?j.createElement(qu.Provider,{value:{location:Bo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ar.Pop}},P):P}function zO(){let t=JO(),e=LO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const $O=j.createElement(zO,null);class HO extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Dr.Provider,{value:this.props.routeContext},j.createElement(tT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WO(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(wp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Dr.Provider,{value:e},r)}function qO(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||De(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:T}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!T||T[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let T,R=!1,P=null,N=null;n&&(T=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||$O,u&&(c<0&&m===0?(R=!0,N=null):c===m&&(R=!0,N=p.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),_=()=>{let I;return T?I=P:R?I=N:p.route.Component?I=j.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,j.createElement(WO,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?j.createElement(HO,{location:n.location,revalidation:n.revalidation,component:P,error:T,children:_(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):_()},null)}var iT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(iT||{}),uu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uu||{});function KO(t){let e=j.useContext(wp);return e||De(!1),e}function GO(t){let e=j.useContext(bO);return e||De(!1),e}function QO(t){let e=j.useContext(Dr);return e||De(!1),e}function sT(t){let e=QO(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function JO(){var t;let e=j.useContext(tT),n=GO(uu.UseRouteError),r=sT(uu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function XO(){let{router:t}=KO(iT.UseNavigateStable),e=sT(uu.UseNavigateStable),n=j.useRef(!1);return nT(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bo({fromRouteId:e},s)))},[t,e])}function Tn(t){De(!1)}function YO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:s,static:o=!1,future:l}=t;la()&&De(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:Bo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ms(r));let{pathname:d="/",search:p="",hash:m="",state:T=null,key:R="default"}=r,P=j.useMemo(()=>{let N=Ep(d,u);return N==null?null:{location:{pathname:N,search:p,hash:m,state:T,key:R},navigationType:i}},[u,d,p,m,T,R,i]);return P==null?null:j.createElement(hi.Provider,{value:c},j.createElement(qu.Provider,{children:n,value:P}))}function ZO(t){let{children:e,location:n}=t;return jO(kd(e),n)}new Promise(()=>{});function kd(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,kd(r.props.children,s));return}r.type!==Tn&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=kd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nd.apply(this,arguments)}function ex(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nx(t,e){return t.button===0&&(!e||e==="_self")&&!tx(t)}const rx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ix="6";try{window.__reactRouterVersion=ix}catch{}const sx="startTransition",Yy=wI[sx];function ox(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=hO({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=j.useCallback(p=>{c&&Yy?Yy(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>o.listen(d),[o,d]),j.createElement(YO,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const ax=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qt=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,m=ex(e,rx),{basename:T}=j.useContext(hi),R,P=!1;if(typeof c=="string"&&lx.test(c)&&(R=c,ax))try{let I=new URL(window.location.href),L=c.startsWith("//")?new URL(I.protocol+c):new URL(c),U=Ep(L.pathname,T);L.origin===I.origin&&U!=null?c=U+L.search+L.hash:P=!0}catch{}let N=MO(c,{relative:i}),v=ux(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function _(I){r&&r(I),I.defaultPrevented||v(I)}return j.createElement("a",Nd({},m,{href:R||N,onClick:P||s?r:_,ref:n,target:u}))});var Zy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zy||(Zy={}));var e_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(e_||(e_={}));function ux(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Gu(),c=Ku(),d=rT(t,{relative:o});return j.useCallback(p=>{if(nx(p,n)){p.preventDefault();let m=r!==void 0?r:lu(c)===lu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const gs=j.createContext(),cx=({children:t})=>{const[e,n]=j.useState(null);j.useEffect(()=>{const i=QN(au,s=>{n(s)});return()=>i()},[]);const r=()=>{JN(au).then(()=>{n(null)}).catch(i=>{console.error("Error signing out: ",i)})};return O.jsx(gs.Provider,{value:{currentUser:e,setCurrentUser:n,logout:r},children:t})};function hx({image:t,name:e,id:n,info:r,glass:i}){const[s,o]=j.useState(!1),{currentUser:l}=j.useContext(gs);j.useEffect(()=>{(async()=>{if(l){const p=Ed(Pd,"favorites",l.uid),m=await Td(p);m.exists()&&m.data()[n]&&o(!0)}})()},[l,n]);const u=async()=>{if(!l){alert("Please log in to save favorites!");return}const d=!s;o(d);try{await c(n,d)}catch(p){console.error("Error updating favorite:",p),o(!d)}},c=async(d,p)=>{const m=Ed(Pd,"favorites",l.uid);(await Td(m)).exists()||await Pk(m,{}),await Ck(m,{[d]:p})};return O.jsxs("article",{className:"cocktail",children:[O.jsx("div",{className:"img-container",children:O.jsx("img",{src:t,alt:e})}),O.jsxs("div",{className:"cocktail-footer",children:[O.jsx("h3",{children:e}),O.jsx("h4",{children:i}),O.jsx("p",{children:r}),O.jsxs("div",{className:"cocktail-actions",children:[O.jsx("button",{className:`btn-favorite ${s?"favorite":""}`,onClick:u,"aria-label":s?"Remove from favorites":"Add to favorites",children:s?"❤️":"🤍"}),O.jsx(qt,{to:`/cocktail/${n}`,className:"btn btn-primary btn-details",children:"View Recipe"})]})]})]})}function dx({cocktails:t,loading:e}){return e?O.jsx("h2",{className:"section-title",children:"Loading..."}):t.length<1?O.jsx("h2",{className:"section-title",children:"no cocktails matched your search criteria"}):O.jsxs("section",{className:"section",children:[O.jsx("h2",{className:"section-title",children:"coctails"}),O.jsx("div",{className:"cocktails-center",children:t.map(n=>O.jsx(hx,{...n},n.id))})]})}function fx({setSearchTerm:t}){Kt.useEffect(()=>{e.current.focus()},[]);const e=Kt.useRef(""),n=i=>{i.preventDefault()},r=()=>{t(e.current.value)};return O.jsxs("section",{className:"section",children:[O.jsx("h2",{className:"section-title",children:"search cocktails"}),O.jsx("form",{className:"form search-form",onSubmit:n,children:O.jsxs("div",{className:"form-control",children:[O.jsx("label",{htmlFor:"name",children:"search your favorite cocktail"}),O.jsx("input",{type:"text",name:"name",id:"name",onChange:r,ref:e})]})})]})}function px(){const[t,e]=Kt.useState(!1),[n,r]=Kt.useState("a"),[i,s]=Kt.useState([]);return Kt.useEffect(()=>{e(!0);async function o(){try{const u=await(await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${n}`)).json(),{drinks:c}=u;if(c){const d=c.map(p=>{const{idDrink:m,strDrink:T,strDrinkThumb:R,strAlcoholic:P,strGlass:N}=p;return{id:m,name:T,image:R,info:P,glass:N}});s(d)}else s([])}catch(l){console.log(l)}e(!1)}o()},[n]),O.jsxs("main",{children:[O.jsx(fx,{setSearchTerm:r}),O.jsx(dx,{loading:t,cocktails:i})]})}function mx(){return O.jsxs("section",{className:"section about-section",children:[O.jsx("h1",{className:"section-title",children:"About MixMaster"}),O.jsx("p",{children:"Welcome to MixMaster, your personal cocktail companion! I created this application to solve a common problem: finding the perfect cocktail recipe for any occasion. Whether you're hosting a party, enjoying a quiet evening, or looking to impress guests, MixMaster helps you discover delicious drink recipes."}),O.jsx("p",{children:"As a cocktail enthusiast myself, I often found it challenging to remember all the ingredients for my favorite drinks or discover new ones that matched my taste. That's why I built MixMaster - to create a personalized collection of cocktail recipes that I love and want to share with others."}),O.jsx("p",{children:"This application uses TheCocktailDB API to fetch thousands of cocktail recipes, and allows you to save your favorites for quick access. The clean, intuitive interface makes it easy to search for cocktails by name, explore different categories, and view detailed instructions for preparation."}),O.jsx("p",{children:"MixMaster represents my journey into web development, combining my passion for coding with my interest in mixology. I hope you enjoy using it as much as I enjoyed creating it!"})]})}const gx=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),{setCurrentUser:i}=j.useContext(gs),s=Gu(),o=async l=>{l.preventDefault();try{const u=await HN(au,t,n);i(u.user),s("/dashboard")}catch(u){console.error("Error logging in: ",u)}};return O.jsxs("div",{className:"login-container",children:[O.jsx("h2",{children:"Login"}),O.jsxs("form",{onSubmit:o,children:[O.jsxs("div",{className:"form-group",children:[O.jsx("label",{children:"Email"}),O.jsx("input",{type:"email",value:t,onChange:l=>e(l.target.value),required:!0})]}),O.jsxs("div",{className:"form-group",children:[O.jsx("label",{children:"Password"}),O.jsx("input",{type:"password",value:n,onChange:l=>r(l.target.value),required:!0})]}),O.jsx("button",{type:"submit",children:"Login"})]})]})},yx=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState(""),{setCurrentUser:u}=j.useContext(gs),c=Gu(),d=async p=>{if(p.preventDefault(),i!==o){alert("Passwords do not match!");return}try{const m=await $N(au,n,i);await qN(m.user,{displayName:t}),u(m.user),c("/dashboard")}catch(m){console.error("Error signing up: ",m)}};return O.jsxs("div",{className:"signup-container",children:[O.jsx("h2",{children:"Sign Up"}),O.jsxs("form",{onSubmit:d,children:[O.jsxs("div",{className:"form-group",children:[O.jsx("label",{children:"Name"}),O.jsx("input",{type:"name",value:t,onChange:p=>e(p.target.value),required:!0})]}),O.jsxs("div",{className:"form-group",children:[O.jsx("label",{children:"Email"}),O.jsx("input",{type:"email",value:n,onChange:p=>r(p.target.value),required:!0})]}),O.jsxs("div",{className:"form-group",children:[O.jsx("label",{children:"Password"}),O.jsx("input",{type:"password",value:i,onChange:p=>s(p.target.value),required:!0})]}),O.jsxs("div",{className:"form-group",children:[O.jsx("label",{children:"Confirm Password"}),O.jsx("input",{type:"password",value:o,onChange:p=>l(p.target.value),required:!0})]}),O.jsx("button",{type:"submit",children:"Sign Up"})]}),O.jsxs("p",{children:["Already have an account? ",O.jsx(qt,{to:"/login",children:"Login"})]})]})};function _x(){const{id:t}=UO(),[e,n]=Kt.useState(!1),[r,i]=Kt.useState(null);if(Kt.useEffect(()=>{n(!0);async function s(){try{const l=await(await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`)).json();if(l.drinks){const{strDrink:u,strDrinkThumb:c,strCategory:d,strGlass:p,strInstructions:m,strAlcoholic:T,strIngredient1:R,strIngredient2:P,strIngredient3:N,strIngredient4:v,strIngredient5:_}=l.drinks[0];i({name:u,image:c,info:T,category:d,glass:p,instructions:m,ingredients:[R,P,N,v,_]})}else i(null)}catch(o){console.log(o)}n(!1)}s()},[t]),e)return O.jsx("h2",{className:"section-title",children:"Loading..."});if(r){const{name:s,image:o,category:l,info:u,glass:c,instructions:d,ingredients:p}=r;return O.jsxs("section",{className:"section cocktail-section",children:[O.jsx(qt,{to:"/",className:"btn btn-primary",children:"back home"}),O.jsx("h2",{className:"section-title",children:s}),O.jsxs("div",{className:"drink",children:[O.jsx("img",{src:o,alt:s}),O.jsxs("div",{className:"drink-info",children:[O.jsxs("p",{children:["name : ",s]}),O.jsxs("p",{children:["category : ",l]}),O.jsxs("p",{children:["info : ",u]}),O.jsxs("p",{children:["glass : ",c]}),O.jsxs("p",{children:["instructions: ",d]}),O.jsxs("p",{children:["ingredients :"," ",p.map((m,T)=>m?O.jsx("span",{children:m},T):null)]})]})]})]})}else return O.jsx("h2",{className:"section-title",children:"no cocktail to display"})}function oT(t,e){return function(){return t.apply(e,arguments)}}const{toString:vx}=Object.prototype,{getPrototypeOf:Tp}=Object,Qu=(t=>e=>{const n=vx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pn=t=>(t=t.toLowerCase(),e=>Qu(e)===t),Ju=t=>e=>typeof e===t,{isArray:ys}=Array,zo=Ju("undefined");function Ex(t){return t!==null&&!zo(t)&&t.constructor!==null&&!zo(t.constructor)&&bt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const aT=pn("ArrayBuffer");function wx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&aT(t.buffer),e}const Tx=Ju("string"),bt=Ju("function"),lT=Ju("number"),Xu=t=>t!==null&&typeof t=="object",Ix=t=>t===!0||t===!1,yl=t=>{if(Qu(t)!=="object")return!1;const e=Tp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Sx=pn("Date"),Ax=pn("File"),Rx=pn("Blob"),Px=pn("FileList"),Cx=t=>Xu(t)&&bt(t.pipe),kx=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bt(t.append)&&((e=Qu(t))==="formdata"||e==="object"&&bt(t.toString)&&t.toString()==="[object FormData]"))},Nx=pn("URLSearchParams"),Dx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ua(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),ys(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function uT(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const cT=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hT=t=>!zo(t)&&t!==cT;function Dd(){const{caseless:t}=hT(this)&&this||{},e={},n=(r,i)=>{const s=t&&uT(e,i)||i;yl(e[s])&&yl(r)?e[s]=Dd(e[s],r):yl(r)?e[s]=Dd({},r):ys(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ua(arguments[r],n);return e}const Ox=(t,e,n,{allOwnKeys:r}={})=>(ua(e,(i,s)=>{n&&bt(i)?t[s]=oT(i,n):t[s]=i},{allOwnKeys:r}),t),xx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Lx=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Vx=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&Tp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},bx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Mx=t=>{if(!t)return null;if(ys(t))return t;let e=t.length;if(!lT(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Fx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Tp(Uint8Array)),Ux=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},jx=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Bx=pn("HTMLFormElement"),zx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),t_=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),$x=pn("RegExp"),dT=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ua(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},Hx=t=>{dT(t,(e,n)=>{if(bt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(bt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wx=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ys(t)?r(t):r(String(t).split(e)),n},qx=()=>{},Kx=(t,e)=>(t=+t,Number.isFinite(t)?t:e),oh="abcdefghijklmnopqrstuvwxyz",n_="0123456789",fT={DIGIT:n_,ALPHA:oh,ALPHA_DIGIT:oh+oh.toUpperCase()+n_},Gx=(t=16,e=fT.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Qx(t){return!!(t&&bt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Jx=t=>{const e=new Array(10),n=(r,i)=>{if(Xu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ys(r)?[]:{};return ua(r,(o,l)=>{const u=n(o,i+1);!zo(u)&&(s[l]=u)}),e[i]=void 0,s}}return r};return n(t,0)},Xx=pn("AsyncFunction"),Yx=t=>t&&(Xu(t)||bt(t))&&bt(t.then)&&bt(t.catch),V={isArray:ys,isArrayBuffer:aT,isBuffer:Ex,isFormData:kx,isArrayBufferView:wx,isString:Tx,isNumber:lT,isBoolean:Ix,isObject:Xu,isPlainObject:yl,isUndefined:zo,isDate:Sx,isFile:Ax,isBlob:Rx,isRegExp:$x,isFunction:bt,isStream:Cx,isURLSearchParams:Nx,isTypedArray:Fx,isFileList:Px,forEach:ua,merge:Dd,extend:Ox,trim:Dx,stripBOM:xx,inherits:Lx,toFlatObject:Vx,kindOf:Qu,kindOfTest:pn,endsWith:bx,toArray:Mx,forEachEntry:Ux,matchAll:jx,isHTMLForm:Bx,hasOwnProperty:t_,hasOwnProp:t_,reduceDescriptors:dT,freezeMethods:Hx,toObjectSet:Wx,toCamelCase:zx,noop:qx,toFiniteNumber:Kx,findKey:uT,global:cT,isContextDefined:hT,ALPHABET:fT,generateString:Gx,isSpecCompliantForm:Qx,toJSONObject:Jx,isAsyncFn:Xx,isThenable:Yx};function se(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}V.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const pT=se.prototype,mT={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{mT[t]={value:t}});Object.defineProperties(se,mT);Object.defineProperty(pT,"isAxiosError",{value:!0});se.from=(t,e,n,r,i,s)=>{const o=Object.create(pT);return V.toFlatObject(t,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),se.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const Zx=null;function Od(t){return V.isPlainObject(t)||V.isArray(t)}function gT(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}function r_(t,e,n){return t?t.concat(e).map(function(i,s){return i=gT(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function eL(t){return V.isArray(t)&&!t.some(Od)}const tL=V.toFlatObject(V,{},null,function(e){return/^is[A-Z]/.test(e)});function Yu(t,e,n){if(!V.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,N){return!V.isUndefined(N[P])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&V.isSpecCompliantForm(e);if(!V.isFunction(i))throw new TypeError("visitor must be a function");function c(R){if(R===null)return"";if(V.isDate(R))return R.toISOString();if(!u&&V.isBlob(R))throw new se("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(R)||V.isTypedArray(R)?u&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function d(R,P,N){let v=R;if(R&&!N&&typeof R=="object"){if(V.endsWith(P,"{}"))P=r?P:P.slice(0,-2),R=JSON.stringify(R);else if(V.isArray(R)&&eL(R)||(V.isFileList(R)||V.endsWith(P,"[]"))&&(v=V.toArray(R)))return P=gT(P),v.forEach(function(I,L){!(V.isUndefined(I)||I===null)&&e.append(o===!0?r_([P],L,s):o===null?P:P+"[]",c(I))}),!1}return Od(R)?!0:(e.append(r_(N,P,s),c(R)),!1)}const p=[],m=Object.assign(tL,{defaultVisitor:d,convertValue:c,isVisitable:Od});function T(R,P){if(!V.isUndefined(R)){if(p.indexOf(R)!==-1)throw Error("Circular reference detected in "+P.join("."));p.push(R),V.forEach(R,function(v,_){(!(V.isUndefined(v)||v===null)&&i.call(e,v,V.isString(_)?_.trim():_,P,m))===!0&&T(v,P?P.concat(_):[_])}),p.pop()}}if(!V.isObject(t))throw new TypeError("data must be an object");return T(t),e}function i_(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ip(t,e){this._pairs=[],t&&Yu(t,this,e)}const yT=Ip.prototype;yT.append=function(e,n){this._pairs.push([e,n])};yT.toString=function(e){const n=e?function(r){return e.call(this,r,i_)}:i_;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function nL(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _T(t,e,n){if(!e)return t;const r=n&&n.encode||nL,i=n&&n.serialize;let s;if(i?s=i(e,n):s=V.isURLSearchParams(e)?e.toString():new Ip(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class s_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,function(r){r!==null&&e(r)})}}const vT={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rL=typeof URLSearchParams<"u"?URLSearchParams:Ip,iL=typeof FormData<"u"?FormData:null,sL=typeof Blob<"u"?Blob:null,oL={isBrowser:!0,classes:{URLSearchParams:rL,FormData:iL,Blob:sL},protocols:["http","https","file","blob","url","data"]},ET=typeof window<"u"&&typeof document<"u",aL=(t=>ET&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),lL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uL=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ET,hasStandardBrowserEnv:aL,hasStandardBrowserWebWorkerEnv:lL},Symbol.toStringTag,{value:"Module"})),rn={...uL,...oL};function cL(t,e){return Yu(t,new rn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return rn.isNode&&V.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function hL(t){return V.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function dL(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function wT(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=s>=n.length;return o=!o&&V.isArray(i)?i.length:o,u?(V.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!V.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&V.isArray(i[o])&&(i[o]=dL(i[o])),!l)}if(V.isFormData(t)&&V.isFunction(t.entries)){const n={};return V.forEachEntry(t,(r,i)=>{e(hL(r),i,n,0)}),n}return null}function fL(t,e,n){if(V.isString(t))try{return(e||JSON.parse)(t),V.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ca={transitional:vT,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=V.isObject(e);if(s&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return i?JSON.stringify(wT(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cL(e,this.formSerializer).toString();if((l=V.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Yu(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),fL(e)):e}],transformResponse:[function(e){const n=this.transitional||ca.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&V.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?se.from(l,se.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rn.classes.FormData,Blob:rn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],t=>{ca.headers[t]={}});const pL=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mL=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&pL[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},o_=Symbol("internals");function zs(t){return t&&String(t).trim().toLowerCase()}function _l(t){return t===!1||t==null?t:V.isArray(t)?t.map(_l):String(t)}function gL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const yL=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ah(t,e,n,r,i){if(V.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!V.isString(e)){if(V.isString(r))return e.indexOf(r)!==-1;if(V.isRegExp(r))return r.test(e)}}function _L(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function vL(t,e){const n=V.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Mt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,u,c){const d=zs(u);if(!d)throw new Error("header name must be a non-empty string");const p=V.findKey(i,d);(!p||i[p]===void 0||c===!0||c===void 0&&i[p]!==!1)&&(i[p||u]=_l(l))}const o=(l,u)=>V.forEach(l,(c,d)=>s(c,d,u));return V.isPlainObject(e)||e instanceof this.constructor?o(e,n):V.isString(e)&&(e=e.trim())&&!yL(e)?o(mL(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=zs(e),e){const r=V.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return gL(i);if(V.isFunction(n))return n.call(this,i,r);if(V.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=zs(e),e){const r=V.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ah(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=zs(o),o){const l=V.findKey(r,o);l&&(!n||ah(r,r[l],l,n))&&(delete r[l],i=!0)}}return V.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||ah(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return V.forEach(this,(i,s)=>{const o=V.findKey(r,s);if(o){n[o]=_l(i),delete n[s];return}const l=e?_L(s):String(s).trim();l!==s&&delete n[s],n[l]=_l(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return V.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&V.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[o_]=this[o_]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=zs(o);r[l]||(vL(i,o),r[l]=!0)}return V.isArray(e)?e.forEach(s):s(e),this}}Mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);V.reduceDescriptors(Mt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});V.freezeMethods(Mt);function lh(t,e){const n=this||ca,r=e||n,i=Mt.from(r.headers);let s=r.data;return V.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function TT(t){return!!(t&&t.__CANCEL__)}function ha(t,e,n){se.call(this,t??"canceled",se.ERR_CANCELED,e,n),this.name="CanceledError"}V.inherits(ha,se,{__CANCEL__:!0});function EL(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new se("Request failed with status code "+n.status,[se.ERR_BAD_REQUEST,se.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const wL=rn.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];V.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),V.isString(r)&&o.push("path="+r),V.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function TL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function IL(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function IT(t,e){return t&&!TL(e)?IL(t,e):e}const SL=rn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=V.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function AL(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function RL(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[s];o||(o=c),n[i]=u,r[i]=c;let p=s,m=0;for(;p!==i;)m+=n[p++],p=p%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const T=d&&c-d;return T?Math.round(m*1e3/T):void 0}}function a_(t,e){let n=0;const r=RL(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,u=r(l),c=s<=o;n=s;const d={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:u||void 0,estimated:u&&o&&c?(o-s)/u:void 0,event:i};d[e?"download":"upload"]=!0,t(d)}}const PL=typeof XMLHttpRequest<"u",CL=PL&&function(t){return new Promise(function(n,r){let i=t.data;const s=Mt.from(t.headers).normalize();let{responseType:o,withXSRFToken:l}=t,u;function c(){t.cancelToken&&t.cancelToken.unsubscribe(u),t.signal&&t.signal.removeEventListener("abort",u)}let d;if(V.isFormData(i)){if(rn.hasStandardBrowserEnv||rn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[P,...N]=d?d.split(";").map(v=>v.trim()).filter(Boolean):[];s.setContentType([P||"multipart/form-data",...N].join("; "))}}let p=new XMLHttpRequest;if(t.auth){const P=t.auth.username||"",N=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(P+":"+N))}const m=IT(t.baseURL,t.url);p.open(t.method.toUpperCase(),_T(m,t.params,t.paramsSerializer),!0),p.timeout=t.timeout;function T(){if(!p)return;const P=Mt.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:P,config:t,request:p};EL(function(I){n(I),c()},function(I){r(I),c()},v),p=null}if("onloadend"in p?p.onloadend=T:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(T)},p.onabort=function(){p&&(r(new se("Request aborted",se.ECONNABORTED,t,p)),p=null)},p.onerror=function(){r(new se("Network Error",se.ERR_NETWORK,t,p)),p=null},p.ontimeout=function(){let N=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||vT;t.timeoutErrorMessage&&(N=t.timeoutErrorMessage),r(new se(N,v.clarifyTimeoutError?se.ETIMEDOUT:se.ECONNABORTED,t,p)),p=null},rn.hasStandardBrowserEnv&&(l&&V.isFunction(l)&&(l=l(t)),l||l!==!1&&SL(m))){const P=t.xsrfHeaderName&&t.xsrfCookieName&&wL.read(t.xsrfCookieName);P&&s.set(t.xsrfHeaderName,P)}i===void 0&&s.setContentType(null),"setRequestHeader"in p&&V.forEach(s.toJSON(),function(N,v){p.setRequestHeader(v,N)}),V.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),o&&o!=="json"&&(p.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&p.addEventListener("progress",a_(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",a_(t.onUploadProgress)),(t.cancelToken||t.signal)&&(u=P=>{p&&(r(!P||P.type?new ha(null,t,p):P),p.abort(),p=null)},t.cancelToken&&t.cancelToken.subscribe(u),t.signal&&(t.signal.aborted?u():t.signal.addEventListener("abort",u)));const R=AL(m);if(R&&rn.protocols.indexOf(R)===-1){r(new se("Unsupported protocol "+R+":",se.ERR_BAD_REQUEST,t));return}p.send(i||null)})},xd={http:Zx,xhr:CL};V.forEach(xd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const l_=t=>`- ${t}`,kL=t=>V.isFunction(t)||t===null||t===!1,ST={getAdapter:t=>{t=V.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!kL(n)&&(r=xd[(o=String(n)).toLowerCase()],r===void 0))throw new se(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(l_).join(`
`):" "+l_(s[0]):"as no adapter specified";throw new se("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:xd};function uh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ha(null,t)}function u_(t){return uh(t),t.headers=Mt.from(t.headers),t.data=lh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ST.getAdapter(t.adapter||ca.adapter)(t).then(function(r){return uh(t),r.data=lh.call(t,t.transformResponse,r),r.headers=Mt.from(r.headers),r},function(r){return TT(r)||(uh(t),r&&r.response&&(r.response.data=lh.call(t,t.transformResponse,r.response),r.response.headers=Mt.from(r.response.headers))),Promise.reject(r)})}const c_=t=>t instanceof Mt?{...t}:t;function as(t,e){e=e||{};const n={};function r(c,d,p){return V.isPlainObject(c)&&V.isPlainObject(d)?V.merge.call({caseless:p},c,d):V.isPlainObject(d)?V.merge({},d):V.isArray(d)?d.slice():d}function i(c,d,p){if(V.isUndefined(d)){if(!V.isUndefined(c))return r(void 0,c,p)}else return r(c,d,p)}function s(c,d){if(!V.isUndefined(d))return r(void 0,d)}function o(c,d){if(V.isUndefined(d)){if(!V.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,p){if(p in e)return r(c,d);if(p in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,d)=>i(c_(c),c_(d),!0)};return V.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=u[d]||i,m=p(t[d],e[d],d);V.isUndefined(m)&&p!==l||(n[d]=m)}),n}const AT="1.6.8",Sp={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Sp[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const h_={};Sp.transitional=function(e,n,r){function i(s,o){return"[Axios v"+AT+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new se(i(o," has been removed"+(n?" in "+n:"")),se.ERR_DEPRECATED);return n&&!h_[o]&&(h_[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function NL(t,e,n){if(typeof t!="object")throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],u=l===void 0||o(l,s,t);if(u!==!0)throw new se("option "+s+" must be "+u,se.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new se("Unknown option "+s,se.ERR_BAD_OPTION)}}const Ld={assertOptions:NL,validators:Sp},Qn=Ld.validators;class Kr{constructor(e){this.defaults=e,this.interceptors={request:new s_,response:new s_}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=as(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Ld.assertOptions(r,{silentJSONParsing:Qn.transitional(Qn.boolean),forcedJSONParsing:Qn.transitional(Qn.boolean),clarifyTimeoutError:Qn.transitional(Qn.boolean)},!1),i!=null&&(V.isFunction(i)?n.paramsSerializer={serialize:i}:Ld.assertOptions(i,{encode:Qn.function,serialize:Qn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&V.merge(s.common,s[n.method]);s&&V.forEach(["delete","get","head","post","put","patch","common"],R=>{delete s[R]}),n.headers=Mt.concat(o,s);const l=[];let u=!0;this.interceptors.request.forEach(function(P){typeof P.runWhen=="function"&&P.runWhen(n)===!1||(u=u&&P.synchronous,l.unshift(P.fulfilled,P.rejected))});const c=[];this.interceptors.response.forEach(function(P){c.push(P.fulfilled,P.rejected)});let d,p=0,m;if(!u){const R=[u_.bind(this),void 0];for(R.unshift.apply(R,l),R.push.apply(R,c),m=R.length,d=Promise.resolve(n);p<m;)d=d.then(R[p++],R[p++]);return d}m=l.length;let T=n;for(p=0;p<m;){const R=l[p++],P=l[p++];try{T=R(T)}catch(N){P.call(this,N);break}}try{d=u_.call(this,T)}catch(R){return Promise.reject(R)}for(p=0,m=c.length;p<m;)d=d.then(c[p++],c[p++]);return d}getUri(e){e=as(this.defaults,e);const n=IT(e.baseURL,e.url);return _T(n,e.params,e.paramsSerializer)}}V.forEach(["delete","get","head","options"],function(e){Kr.prototype[e]=function(n,r){return this.request(as(r||{},{method:e,url:n,data:(r||{}).data}))}});V.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(as(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Kr.prototype[e]=n(),Kr.prototype[e+"Form"]=n(!0)});class Ap{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new ha(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Ap(function(i){e=i}),cancel:e}}}function DL(t){return function(n){return t.apply(null,n)}}function OL(t){return V.isObject(t)&&t.isAxiosError===!0}const Vd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vd).forEach(([t,e])=>{Vd[e]=t});function RT(t){const e=new Kr(t),n=oT(Kr.prototype.request,e);return V.extend(n,Kr.prototype,e,{allOwnKeys:!0}),V.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return RT(as(t,i))},n}const Oe=RT(ca);Oe.Axios=Kr;Oe.CanceledError=ha;Oe.CancelToken=Ap;Oe.isCancel=TT;Oe.VERSION=AT;Oe.toFormData=Yu;Oe.AxiosError=se;Oe.Cancel=Oe.CanceledError;Oe.all=function(e){return Promise.all(e)};Oe.spread=DL;Oe.isAxiosError=OL;Oe.mergeConfig=as;Oe.AxiosHeaders=Mt;Oe.formToJSON=t=>wT(V.isHTMLForm(t)?new FormData(t):t);Oe.getAdapter=ST.getAdapter;Oe.HttpStatusCode=Vd;Oe.default=Oe;function xL(){const t=async()=>{try{const e=await Oe.post("https://api.datavortex.nl/testapp/users",{username:"testuser",email:"testuser@gmail.com",password:"testpassword",info:"testinfo",authorities:[{authority:"USER"}]},{headers:{accept:"*/*","Content-Type":"application/json"}});console.log("Response Data:",e.data),console.log("Response Headers:",e.headers)}catch(e){console.error("Error fetching data:",e)}};return j.useEffect(()=>{t()},[]),O.jsx("div",{children:O.jsx("h1",{children:"API Request Example"})})}const LL=()=>{const{currentUser:t}=j.useContext(gs),[e,n]=j.useState([]),[r,i]=j.useState(!0);return j.useEffect(()=>{(async()=>{if(t)try{const o=Ed(Pd,"favorites",t.uid),l=await Td(o);if(l.exists()){const u=l.data(),d=Object.keys(u).filter(m=>u[m]).map(async m=>{try{const R=await(await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${m}`)).json();if(R.drinks&&R.drinks[0]){const P=R.drinks[0];return{id:P.idDrink,name:P.strDrink,image:P.strDrinkThumb,category:P.strCategory}}}catch(T){return console.error(`Error fetching cocktail ${m}:`,T),null}}),p=(await Promise.all(d)).filter(Boolean);n(p)}}catch(o){console.error("Error fetching favorites:",o)}finally{i(!1)}})()},[t]),r?O.jsx("div",{className:"dashboard-container",children:"Loading your favorites..."}):O.jsxs("div",{className:"dashboard-container",children:[O.jsxs("h1",{children:["Welcome to Your Bar, ",t==null?void 0:t.displayName,"!"]}),O.jsxs("div",{className:"favorites-section",children:[O.jsx("h2",{children:"Your Favorite Cocktails"}),e.length===0?O.jsx("p",{children:"You haven't saved any favorite cocktails yet. Start exploring and add some!"}):O.jsx("div",{className:"favorites-grid",children:e.map(s=>O.jsxs("div",{className:"favorite-item",children:[O.jsx("img",{src:s.image,alt:s.name}),O.jsx("h3",{children:s.name}),O.jsx("p",{children:s.category}),O.jsx(qt,{to:`/cocktail/${s.id}`,className:"btn btn-primary",children:"View Recipe"})]},s.id))})]})]})};function VL(){return O.jsx("section",{className:"error-page section",children:O.jsxs("div",{className:"error-container",children:[O.jsx("h1",{children:"oops! it's a dead end"}),O.jsx(qt,{to:"/",className:"btn btn-primary",children:"back home"})]})})}const bL="/Cocktail-mix/assets/logo2-CzlpP9vZ.svg";function ML(){const{currentUser:t,logout:e}=j.useContext(gs),n=Gu(),r=async()=>{await e(),n("/")};return O.jsx("nav",{className:"navbar",children:O.jsxs("div",{className:"nav-center",children:[O.jsx("img",{src:bL,alt:"cocktail db logo",className:"logo"}),O.jsxs("ul",{className:"nav-links",children:[O.jsx("li",{children:O.jsx(qt,{to:"/",children:"Home"})}),O.jsx("li",{children:O.jsx(qt,{to:"/about",children:"About"})}),t&&O.jsx("li",{children:O.jsx(qt,{to:"/dashboard",children:"Dashboard"})}),t?O.jsxs(O.Fragment,{children:[O.jsx("li",{children:O.jsxs("span",{className:"username",children:["Welcome, ",t.displayName]})}),O.jsx("li",{children:O.jsx("button",{onClick:r,className:"logout-button",children:"Logout"})})]}):O.jsxs(O.Fragment,{children:[O.jsx("li",{children:O.jsx(qt,{to:"/login",children:"Login"})}),O.jsx("li",{children:O.jsx(qt,{to:"/signup",children:"Sign Up"})}),O.jsx("li",{children:O.jsx(qt,{to:"/apitest",children:"API Test"})})]})]})]})})}function FL(){return O.jsx(cx,{children:O.jsxs(ox,{children:[O.jsx(ML,{}),O.jsxs(ZO,{children:[O.jsx(Tn,{path:"/",element:O.jsx(px,{})}),O.jsx(Tn,{path:"/about",element:O.jsx(mx,{})}),O.jsx(Tn,{path:"/cocktail/:id",element:O.jsx(_x,{})}),O.jsx(Tn,{path:"/login",element:O.jsx(gx,{})}),O.jsx(Tn,{path:"/signup",element:O.jsx(yx,{})}),O.jsx(Tn,{path:"/apitest",element:O.jsx(xL,{})}),O.jsx(Tn,{path:"/dashboard",element:O.jsx(LL,{})}),O.jsx(Tn,{path:"*",element:O.jsx(VL,{})})]})]})})}ch.createRoot(document.getElementById("root")).render(O.jsx(Kt.StrictMode,{children:O.jsx(FL,{})}));
