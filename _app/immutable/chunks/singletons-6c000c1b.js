import{w as u,a as _}from"./paths-6b439ae5.js";let p="";function m(e){p=e}const E="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function k(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function I(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=h(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},r=!n||v(n,t)||o.rel_external||o.target||o.download;return{url:n,has:o,external:r}}function A(e){let t=null,n=null,o=null,r=null,s=e;for(;s!==document.documentElement;)n===null&&(n=l(s,"preload-code")),o===null&&(o=l(s,"preload-data")),t===null&&(t=l(s,"noscroll")),r===null&&(r=l(s,"reload")),s=h(s);return{preload_code:d[n!=null?n:"off"],preload_data:d[o!=null?o:"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:r==="off"?!1:r===""?!0:null}}function g(e){const t=u(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function s(a){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&a(i=c)})}return{notify:o,set:r,subscribe:s}}function b(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);const r=await fetch(`${_}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const a=(await r.json()).version!==p;return a&&(e(!0),clearTimeout(n)),a}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:o}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function S(e){e.client}const T={url:g({}),page:g({}),navigating:u(null),updated:b()};export{R as I,f as P,E as S,y as a,A as b,x as c,S as d,m as e,I as f,k as g,v as i,T as s};