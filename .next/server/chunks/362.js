"use strict";exports.id=362,exports.ids=[362],exports.modules={4900:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(6812);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:u="",children:c,iconNode:s,...l},d)=>(0,r.createElement)("svg",{ref:d,...i,width:t,height:t,stroke:e,strokeWidth:o?24*Number(n)/Number(t):n,className:a("lucide",u),...l},[...s.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(c)?c:[c]])),c=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...i},c)=>(0,r.createElement)(u,{ref:c,iconNode:t,className:a(`lucide-${o(e)}`,n),...i}));return n.displayName=`${e}`,n}},6352:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(4900).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},4741:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},9211:(e,t,n)=>{n.d(t,{A:()=>i,q:()=>a});var r=n(6812),o=n(6137);function a(e,t){let n=r.createContext(t),a=e=>{let{children:t,...a}=e,i=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(n.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=r.useContext(n);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],a=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return a.scopeName=e,[function(t,a){let i=r.createContext(a),u=n.length;n=[...n,a];let c=t=>{let{scope:n,children:a,...c}=t,s=n?.[e]?.[u]||i,l=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(s.Provider,{value:l,children:a})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[u]||i,s=r.useContext(c);if(s)return s;if(void 0!==a)return a;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(a,...t)]}},4507:(e,t,n)=>{n.d(t,{bm:()=>tc,UC:()=>ta,VY:()=>tu,hJ:()=>to,ZL:()=>tr,bL:()=>tt,hE:()=>ti,l9:()=>tn});var r,o,a,i=n(6812),u=n.t(i,2),c=n(4741),s=n(6106),l=n(9211),d=n(8668),f=u["useId".toString()]||(()=>void 0),p=0;function m(e){let[t,n]=i.useState(f());return(0,d.N)(()=>{e||n(e=>e??String(p++))},[e]),e||(t?`radix-${t}`:"")}var v=n(3518),h=n(2331),g=n(6458),y=n(6137),E="dismissableLayer.update",b=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),w=i.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:u,onInteractOutside:l,onDismiss:d,...f}=e,p=i.useContext(b),[m,v]=i.useState(null),w=m?.ownerDocument??globalThis?.document,[,x]=i.useState({}),R=(0,s.s)(t,e=>v(e)),O=Array.from(p.layers),[S]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),D=O.indexOf(S),L=m?O.indexOf(m):-1,A=p.layersWithOutsidePointerEventsDisabled.size>0,M=L>=D,P=function(e,t=globalThis?.document){let n=(0,g.c)(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){C("dismissableLayer.pointerDownOutside",n,a,{discrete:!0})},a={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...p.branches].some(e=>e.contains(t));!M||n||(a?.(e),l?.(e),e.defaultPrevented||d?.())},w),T=function(e,t=globalThis?.document){let n=(0,g.c)(e),r=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!r.current&&C("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...p.branches].some(e=>e.contains(t))||(u?.(e),l?.(e),e.defaultPrevented||d?.())},w);return function(e,t=globalThis?.document){let n=(0,g.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{L!==p.layers.size-1||(r?.(e),!e.defaultPrevented&&d&&(e.preventDefault(),d()))},w),i.useEffect(()=>{if(m)return n&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(o=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(m)),p.layers.add(m),N(),()=>{n&&1===p.layersWithOutsidePointerEventsDisabled.size&&(w.body.style.pointerEvents=o)}},[m,w,n,p]),i.useEffect(()=>()=>{m&&(p.layers.delete(m),p.layersWithOutsidePointerEventsDisabled.delete(m),N())},[m,p]),i.useEffect(()=>{let e=()=>x({});return document.addEventListener(E,e),()=>document.removeEventListener(E,e)},[]),(0,y.jsx)(h.sG.div,{...f,ref:R,style:{pointerEvents:A?M?"auto":"none":void 0,...e.style},onFocusCapture:(0,c.m)(e.onFocusCapture,T.onFocusCapture),onBlurCapture:(0,c.m)(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:(0,c.m)(e.onPointerDownCapture,P.onPointerDownCapture)})});function N(){let e=new CustomEvent(E);document.dispatchEvent(e)}function C(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,h.hO)(o,a):o.dispatchEvent(a)}w.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(b),r=i.useRef(null),o=(0,s.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,y.jsx)(h.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var x="focusScope.autoFocusOnMount",R="focusScope.autoFocusOnUnmount",O={bubbles:!1,cancelable:!0},S=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[c,l]=i.useState(null),d=(0,g.c)(o),f=(0,g.c)(a),p=i.useRef(null),m=(0,s.s)(t,e=>l(e)),v=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(v.paused||!c)return;let t=e.target;c.contains(t)?p.current=t:A(p.current,{select:!0})},t=function(e){if(v.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||A(p.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&A(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,v.paused]),i.useEffect(()=>{if(c){M.add(v);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(x,O);c.addEventListener(x,d),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(A(r,{select:t}),document.activeElement!==n)return}(D(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&A(c))}return()=>{c.removeEventListener(x,d),setTimeout(()=>{let t=new CustomEvent(R,O);c.addEventListener(R,f),c.dispatchEvent(t),t.defaultPrevented||A(e??document.body,{select:!0}),c.removeEventListener(R,f),M.remove(v)},0)}}},[c,d,f,v]);let E=i.useCallback(e=>{if(!n&&!r||v.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=D(e);return[L(t,e),L(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&A(a,{select:!0})):(e.preventDefault(),n&&A(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,v.paused]);return(0,y.jsx)(h.sG.div,{tabIndex:-1,...u,ref:m,onKeyDown:E})});function D(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function L(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function A(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}S.displayName="FocusScope";var M=function(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),(e=P(e,t)).unshift(t)},remove(t){e=P(e,t),e[0]?.resume()}}}();function P(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var T=n(4669),k=i.forwardRef((e,t)=>{let{container:n,...r}=e,[o,a]=i.useState(!1);(0,d.N)(()=>a(!0),[]);let u=n||o&&globalThis?.document?.body;return u?T.createPortal((0,y.jsx)(h.sG.div,{...r,ref:t}),u):null});k.displayName="Portal";var j=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,o]=i.useState(),a=i.useRef({}),u=i.useRef(e),c=i.useRef("none"),[s,l]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>n[e][t]??e,t));return i.useEffect(()=>{let e=I(a.current);c.current="mounted"===s?e:"none"},[s]),(0,d.N)(()=>{let t=a.current,n=u.current;if(n!==e){let r=c.current,o=I(t);e?l("MOUNT"):"none"===o||t?.display==="none"?l("UNMOUNT"):n&&r!==o?l("ANIMATION_OUT"):l("UNMOUNT"),u.current=e}},[e,l]),(0,d.N)(()=>{if(r){let e;let t=r.ownerDocument.defaultView??window,n=n=>{let o=I(a.current).includes(n.animationName);if(n.target===r&&o&&(l("ANIMATION_END"),!u.current)){let n=r.style.animationFillMode;r.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=n)})}},o=e=>{e.target===r&&(c.current=I(a.current))};return r.addEventListener("animationstart",o),r.addEventListener("animationcancel",n),r.addEventListener("animationend",n),()=>{t.clearTimeout(e),r.removeEventListener("animationstart",o),r.removeEventListener("animationcancel",n),r.removeEventListener("animationend",n)}}l("ANIMATION_END")},[r,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:i.useCallback(e=>{e&&(a.current=getComputedStyle(e)),o(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):i.Children.only(n),a=(0,s.s)(r.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o));return"function"==typeof n||r.isPresent?i.cloneElement(o,{ref:a}):null};function I(e){return e?.animationName||"none"}j.displayName="Presence";var F=0;function W(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var _=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var $=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),U="width-before-scroll-bar";function K(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var G="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,X=new WeakMap;function Y(e){return e}var z=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=Y),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=_({async:!0,ssr:!1},e),o}(),Z=function(){},q=i.forwardRef(function(e,t){var n,r,o,a,u=i.useRef(null),c=i.useState({onScrollCapture:Z,onWheelCapture:Z,onTouchMoveCapture:Z}),s=c[0],l=c[1],d=e.forwardProps,f=e.children,p=e.className,m=e.removeScrollBar,v=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,N=e.gapMode,C=B(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[u,t],r=function(e){return n.forEach(function(t){return K(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,G(function(){var e=X.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||K(e,null)}),r.forEach(function(e){t.has(e)||K(e,o)})}X.set(a,n)},[n]),a),R=_(_({},C),s);return i.createElement(i.Fragment,null,v&&i.createElement(g,{sideCar:z,removeScrollBar:m,shards:h,noIsolation:y,inert:E,setCallbacks:l,allowPinchZoom:!!b,lockRef:u,gapMode:N}),d?i.cloneElement(i.Children.only(f),_(_({},R),{ref:x})):i.createElement(void 0===w?"div":w,_({},R,{className:p,ref:x}),f))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},q.classNames={fullWidth:U,zeroRight:$};var H=function(e){var t=e.sideCar,n=B(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,_({},n))};H.isSideCarExport=!0;var V=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},J=function(){var e=V();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Q=function(){var e=J();return function(t){return e(t.styles,t.dynamic),null}},ee={left:0,top:0,right:0,gap:0},et=function(e){return parseInt(e||"",10)||0},en=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[et(n),et(r),et(o)]},er=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ee;var t=en(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},eo=Q(),ea="data-scroll-locked",ei=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(ea,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat($," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(U," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat($," .").concat($," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(U," .").concat(U," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(ea,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},eu=function(){var e=parseInt(document.body.getAttribute(ea)||"0",10);return isFinite(e)?e:0},ec=function(){i.useEffect(function(){return document.body.setAttribute(ea,(eu()+1).toString()),function(){var e=eu()-1;e<=0?document.body.removeAttribute(ea):document.body.setAttribute(ea,e.toString())}},[])},es=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;ec();var a=i.useMemo(function(){return er(o)},[o]);return i.createElement(eo,{styles:ei(a,!t,o,n?"":"!important")})},el=!1;if("undefined"!=typeof window)try{var ed=Object.defineProperty({},"passive",{get:function(){return el=!0,!0}});window.addEventListener("test",ed,ed),window.removeEventListener("test",ed,ed)}catch(e){el=!1}var ef=!!el&&{passive:!1},ep=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},em=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ev(e,r)){var o=eh(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ev=function(e,t){return"v"===e?ep(t,"overflowY"):ep(t,"overflowX")},eh=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eg=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,s=t.contains(c),l=!1,d=u>0,f=0,p=0;do{var m=eh(e,c),v=m[0],h=m[1]-m[2]-i*v;(v||h)&&ev(e,c)&&(f+=h,p+=v),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!s&&c!==document.body||s&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?l=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(l=!0),l},ey=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eE=function(e){return[e.deltaX,e.deltaY]},eb=function(e){return e&&"current"in e?e.current:e},ew=0,eN=[];let eC=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(ew++)[0],a=i.useState(Q)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eb),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=ey(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-a[0],s="deltaY"in e?e.deltaY:i[1]-a[1],l=e.target,d=Math.abs(c)>Math.abs(s)?"h":"v";if("touches"in e&&"h"===d&&"range"===l.type)return!1;var f=em(d,l);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=em(d,l)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||s)&&(r.current=o),!o)return!0;var p=r.current||o;return eg(p,t,e,"h"===p?c:s,!0)},[]),s=i.useCallback(function(e){if(eN.length&&eN[eN.length-1]===a){var n="deltaY"in e?eE(e):ey(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(eb).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=ey(e),r.current=void 0},[]),f=i.useCallback(function(t){l(t.type,eE(t),t.target,c(t,e.lockRef.current))},[]),p=i.useCallback(function(t){l(t.type,ey(t),t.target,c(t,e.lockRef.current))},[]);i.useEffect(function(){return eN.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",s,ef),document.addEventListener("touchmove",s,ef),document.addEventListener("touchstart",d,ef),function(){eN=eN.filter(function(e){return e!==a}),document.removeEventListener("wheel",s,ef),document.removeEventListener("touchmove",s,ef),document.removeEventListener("touchstart",d,ef)}},[]);var m=e.removeScrollBar,v=e.inert;return i.createElement(i.Fragment,null,v?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?i.createElement(es,{gapMode:e.gapMode}):null)},z.useMedium(r),H);var ex=i.forwardRef(function(e,t){return i.createElement(q,_({},e,{ref:t,sideCar:eC}))});ex.classNames=q.classNames;var eR=new WeakMap,eO=new WeakMap,eS={},eD=0,eL=function(e){return e&&(e.host||eL(e.parentNode))},eA=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eL(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eS[n]||(eS[n]=new WeakMap);var a=eS[n],i=[],u=new Set,c=new Set(o),s=function(e){!e||u.has(e)||(u.add(e),s(e.parentNode))};o.forEach(s);var l=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))l(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(eR.get(e)||0)+1,s=(a.get(e)||0)+1;eR.set(e,c),a.set(e,s),i.push(e),1===c&&o&&eO.set(e,!0),1===s&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return l(t),u.clear(),eD++,function(){i.forEach(function(e){var t=eR.get(e)-1,o=a.get(e)-1;eR.set(e,t),a.set(e,o),t||(eO.has(e)||e.removeAttribute(r),eO.delete(e)),o||e.removeAttribute(n)}),--eD||(eR=new WeakMap,eR=new WeakMap,eO=new WeakMap,eS={})}},eM=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),eA(o,a,n,"aria-hidden")):function(){return null}},eP=n(630),eT="Dialog",[ek,ej]=(0,l.A)(eT),[eI,eF]=ek(eT),eW=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,c=i.useRef(null),s=i.useRef(null),[l=!1,d]=(0,v.i)({prop:r,defaultProp:o,onChange:a});return(0,y.jsx)(eI,{scope:t,triggerRef:c,contentRef:s,contentId:m(),titleId:m(),descriptionId:m(),open:l,onOpenChange:d,onOpenToggle:i.useCallback(()=>d(e=>!e),[d]),modal:u,children:n})};eW.displayName=eT;var e_="DialogTrigger",eB=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(e_,n),a=(0,s.s)(t,o.triggerRef);return(0,y.jsx)(h.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e4(o.open),...r,ref:a,onClick:(0,c.m)(e.onClick,o.onOpenToggle)})});eB.displayName=e_;var e$="DialogPortal",[eU,eK]=ek(e$,{forceMount:void 0}),eG=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eF(e$,t);return(0,y.jsx)(eU,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,y.jsx)(j,{present:n||a.open,children:(0,y.jsx)(k,{asChild:!0,container:o,children:e})}))})};eG.displayName=e$;var eX="DialogOverlay",eY=i.forwardRef((e,t)=>{let n=eK(eX,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eF(eX,e.__scopeDialog);return a.modal?(0,y.jsx)(j,{present:r||a.open,children:(0,y.jsx)(ez,{...o,ref:t})}):null});eY.displayName=eX;var ez=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(eX,n);return(0,y.jsx)(ex,{as:eP.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,y.jsx)(h.sG.div,{"data-state":e4(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eZ="DialogContent",eq=i.forwardRef((e,t)=>{let n=eK(eZ,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eF(eZ,e.__scopeDialog);return(0,y.jsx)(j,{present:r||a.open,children:a.modal?(0,y.jsx)(eH,{...o,ref:t}):(0,y.jsx)(eV,{...o,ref:t})})});eq.displayName=eZ;var eH=i.forwardRef((e,t)=>{let n=eF(eZ,e.__scopeDialog),r=i.useRef(null),o=(0,s.s)(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return eM(e)},[]),(0,y.jsx)(eJ,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,c.m)(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:(0,c.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,c.m)(e.onFocusOutside,e=>e.preventDefault())})}),eV=i.forwardRef((e,t)=>{let n=eF(eZ,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,y.jsx)(eJ,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eJ=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,c=eF(eZ,n),l=i.useRef(null),d=(0,s.s)(t,l);return i.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??W()),document.body.insertAdjacentElement("beforeend",e[1]??W()),F++,()=>{1===F&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),F--}},[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,y.jsx)(w,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":e4(c.open),...u,ref:d,onDismiss:()=>c.onOpenChange(!1)})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(e7,{titleId:c.titleId}),(0,y.jsx)(te,{contentRef:l,descriptionId:c.descriptionId})]})]})}),eQ="DialogTitle",e0=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(eQ,n);return(0,y.jsx)(h.sG.h2,{id:o.titleId,...r,ref:t})});e0.displayName=eQ;var e1="DialogDescription",e2=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(e1,n);return(0,y.jsx)(h.sG.p,{id:o.descriptionId,...r,ref:t})});e2.displayName=e1;var e6="DialogClose",e8=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eF(e6,n);return(0,y.jsx)(h.sG.button,{type:"button",...r,ref:t,onClick:(0,c.m)(e.onClick,()=>o.onOpenChange(!1))})});function e4(e){return e?"open":"closed"}e8.displayName=e6;var e3="DialogTitleWarning",[e5,e9]=(0,l.q)(e3,{contentName:eZ,titleName:eQ,docsSlug:"dialog"}),e7=({titleId:e})=>{let t=e9(e3),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&!document.getElementById(e)&&console.error(n)},[n,e]),null},te=({contentRef:e,descriptionId:t})=>{let n=e9("DialogDescriptionWarning"),r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return i.useEffect(()=>{let n=e.current?.getAttribute("aria-describedby");t&&n&&!document.getElementById(t)&&console.warn(r)},[r,e,t]),null},tt=eW,tn=eB,tr=eG,to=eY,ta=eq,ti=e0,tu=e2,tc=e8},6458:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(6812);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},3518:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(6812),o=n(6458);function a({prop:e,defaultProp:t,onChange:n=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[a]=n,i=r.useRef(a),u=(0,o.c)(t);return r.useEffect(()=>{i.current!==a&&(u(a),i.current=a)},[a,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,c=u?e:a,s=(0,o.c)(n);return[c,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else i(t)},[u,e,i,s])]}},8668:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(6812),o=globalThis?.document?r.useLayoutEffect:()=>{}}};