import{S as ot,i as st,s as it,a as lt,e as U,c as ct,b as B,g as Z,t as D,d as Q,f as V,h as F,j as ft,o as Pe,k as ut,l as dt,m as pt,n as $e,p as z,q as ht,r as mt,u as _t,v as J,w as G,x as se,y as K,z as M,A as de}from"./chunks/index-8ce385f3.js";import{S as nt,I as H,g as He,f as We,a as Re,b as pe,s as X,i as Ye,c as _e,P as Xe,d as gt,e as wt}from"./chunks/singletons-d8473387.js";import{s as yt}from"./chunks/paths-2ef4a24d.js";function bt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function vt(r){return r.split("%25").map(decodeURI).join("%25")}function Et(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const kt=["href","pathname","search","searchParams","toString","toJSON"];function $t(r,e){const n=new URL(r);for(const o of kt){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Ot(r){return r.replace(/\/$/,"")+St}function It(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ae.delete(o)}return ge(r,e)};const ae=new Map;function Lt(r,e){const n=rt(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...l}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ae.set(n,{body:a,init:l,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,l))}return ge(r,e)}function Pt(r,e,n){if(ae.size>0){const o=rt(r,n),a=ae.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ae.delete(o)}}return ge(e,n)}function rt(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${It(e.body)}"]`),o}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Nt(r).map(o=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(l)return e.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((d,p)=>{if(p%2){if(d.startsWith("x+"))return Se(String.fromCharCode(parseInt(d.slice(2),16)));if(d.startsWith("u+"))return Se(String.fromCharCode(...d.slice(2).split("-").map(W=>parseInt(W,16))));const g=At.exec(d);if(!g)throw new Error(`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,A,$,P]=g;return e.push({name:$,matcher:P,optional:!!b,rest:!!A,chained:A?p===1&&t[0]==="":!1}),A?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return Se(d)}).join("")}).join("")}/?$`),params:e}}function Tt(r){return!/^\([^)]+\)$/.test(r)}function Nt(r){return r.slice(1).split("/").filter(Tt)}function Ut(r,e,n){const o={},a=r.slice(1);let l="";for(let t=0;t<e.length;t+=1){const c=e[t];let d=a[t];if(c.chained&&c.rest&&l&&(d=d?l+"/"+d:l),l="",d===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!n[c.matcher](d)){if(c.optional&&c.chained){let p=a.indexOf(void 0,t);if(p===-1){const g=e[t+1];if((g==null?void 0:g.rest)&&g.chained)l=d;else return}for(;p>=t;)a[p]=a[p-1],p-=1;continue}return}o[c.name]=d}}if(!l)return o}function Se(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([c,[d,p,g]])=>{const{pattern:b,params:A}=jt(c),$={id:c,exec:P=>{const W=b.exec(P);if(W)return Ut(W,A,o)},errors:[1,...g||[]].map(P=>r[P]),layouts:[0,...p||[]].map(t),leaf:l(d)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function l(c){const d=c<0;return d&&(c=~c),[d,r[c]]}function t(c){return c===void 0?c:[a.has(c),r[c]]}}function Vt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&4&&(d.data=t[2]),c&2&&(d.form=t[1]),a!==(a=t[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&M(e,t)}}}function qt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[Jt]},$$scope:{ctx:t}}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&4&&(d.data=t[2]),c&1051&&(d.$$scope={dirty:c,ctx:t}),a!==(a=t[0][0])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&M(e,t)}}}function Ct(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&8&&(d.data=t[3]),c&2&&(d.form=t[1]),a!==(a=t[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&M(e,t)}}}function Ft(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&8&&(d.data=t[3]),c&1043&&(d.$$scope={dirty:c,ctx:t}),a!==(a=t[0][1])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&M(e,t)}}}function Bt(r){let e,n,o;var a=r[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=J(a,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&se(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&16&&(d.data=t[4]),c&2&&(d.form=t[1]),a!==(a=t[0][2])){if(e){Z();const p=e;D(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=J(a,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&M(e,t)}}}function Jt(r){let e,n,o,a;const l=[Ft,Ct],t=[];function c(d,p){return d[0][2]?0:1}return e=c(r),n=t[e]=l[e](r),{c(){n.c(),o=U()},l(d){n.l(d),o=U()},m(d,p){t[e].m(d,p),B(d,o,p),a=!0},p(d,p){let g=e;e=c(d),e===g?t[e].p(d,p):(Z(),D(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(d,p):(n=t[e]=l[e](d),n.c()),V(n,1),n.m(o.parentNode,o))},i(d){a||(V(n),a=!0)},o(d){D(n),a=!1},d(d){t[e].d(d),d&&F(o)}}}function Ze(r){let e,n=r[6]&&Qe(r);return{c(){e=ut("div"),n&&n.c(),this.h()},l(o){e=dt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=pt(e);n&&n.l(a),a.forEach(F),this.h()},h(){$e(e,"id","svelte-announcer"),$e(e,"aria-live","assertive"),$e(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(o,a){B(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Qe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&F(e),n&&n.d()}}}function Qe(r){let e;return{c(){e=ht(r[7])},l(n){e=mt(n,r[7])},m(n,o){B(n,e,o)},p(n,o){o&128&&_t(e,n[7])},d(n){n&&F(e)}}}function Gt(r){let e,n,o,a,l;const t=[qt,Vt],c=[];function d(g,b){return g[0][1]?0:1}e=d(r),n=c[e]=t[e](r);let p=r[5]&&Ze(r);return{c(){n.c(),o=lt(),p&&p.c(),a=U()},l(g){n.l(g),o=ct(g),p&&p.l(g),a=U()},m(g,b){c[e].m(g,b),B(g,o,b),p&&p.m(g,b),B(g,a,b),l=!0},p(g,[b]){let A=e;e=d(g),e===A?c[e].p(g,b):(Z(),D(c[A],1,1,()=>{c[A]=null}),Q(),n=c[e],n?n.p(g,b):(n=c[e]=t[e](g),n.c()),V(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,b):(p=Ze(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){l||(V(n),l=!0)},o(g){D(n),l=!1},d(g){c[e].d(g),g&&F(o),p&&p.d(g),g&&F(a)}}}function Kt(r,e,n){let{stores:o}=e,{page:a}=e,{components:l}=e,{form:t}=e,{data_0:c=null}=e,{data_1:d=null}=e,{data_2:p=null}=e;ft(o.page.notify);let g=!1,b=!1,A=null;return Pe(()=>{const $=o.page.subscribe(()=>{g&&(n(6,b=!0),n(7,A=document.title||"untitled page"))});return n(5,g=!0),$}),r.$$set=$=>{"stores"in $&&n(8,o=$.stores),"page"in $&&n(9,a=$.page),"components"in $&&n(0,l=$.components),"form"in $&&n(1,t=$.form),"data_0"in $&&n(2,c=$.data_0),"data_1"in $&&n(3,d=$.data_1),"data_2"in $&&n(4,p=$.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[l,t,c,d,p,g,b,A,o,a]}class Mt extends ot{constructor(e){super(),st(this,e,Kt,Gt,it,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const zt="modulepreload",Ht=function(r,e){return new URL(r,e).href},xe={},N=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Ht(l,o),l in xe)return;xe[l]=!0;const t=l.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let g=a.length-1;g>=0;g--){const b=a[g];if(b.href===l&&(!t||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":zt,t||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),t)return new Promise((g,b)=>{p.addEventListener("load",g),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Wt={},we=[()=>N(()=>import("./chunks/0-df5f3116.js"),["./chunks/0-df5f3116.js","./chunks/_layout-1daba58d.js","./components/pages/_layout.svelte-5f14ba55.js","./chunks/index-8ce385f3.js","./chunks/paths-2ef4a24d.js","./chunks/IconButton-6b3e342b.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./assets/IconButton-d90fa013.css","./chunks/ToggleDarkModeButton-8886134c.js","./assets/ToggleDarkModeButton-18710e7a.css","./assets/_layout-0eda187a.css"],import.meta.url),()=>N(()=>import("./chunks/1-2d9da905.js"),["./chunks/1-2d9da905.js","./components/error.svelte-7d570356.js","./chunks/index-8ce385f3.js","./chunks/stores-d906eac6.js","./chunks/singletons-d8473387.js","./chunks/paths-2ef4a24d.js"],import.meta.url),()=>N(()=>import("./chunks/2-92d100f6.js"),["./chunks/2-92d100f6.js","./components/pages/docs/_layout.svelte-1bddbfc0.js","./chunks/index-8ce385f3.js","./chunks/paths-2ef4a24d.js","./chunks/stores-d906eac6.js","./chunks/singletons-d8473387.js","./chunks/IconButton-6b3e342b.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./assets/IconButton-d90fa013.css","./chunks/ToggleDarkModeButton-8886134c.js","./assets/ToggleDarkModeButton-18710e7a.css","./components/pages/_layout.svelte-5f14ba55.js","./assets/_layout-0eda187a.css","./chunks/Footer-d29ac61e.js"],import.meta.url),()=>N(()=>import("./chunks/3-51c05a04.js"),["./chunks/3-51c05a04.js","./components/pages/_page.svelte-cce3c269.js","./chunks/index-8ce385f3.js","./chunks/paths-2ef4a24d.js","./chunks/IconButton-6b3e342b.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./assets/IconButton-d90fa013.css","./chunks/ToggleDarkModeButton-8886134c.js","./assets/ToggleDarkModeButton-18710e7a.css","./chunks/Example-87d2f72a.js","./assets/Example-16574e3d.css","./chunks/TextField-e63b5c83.js","./assets/TextField-0aa27560.css","./chunks/Footer-d29ac61e.js","./assets/_page-3ae4930d.css"],import.meta.url),()=>N(()=>import("./chunks/4-37c78e82.js"),["./chunks/4-37c78e82.js","./components/pages/docs/button/_page.svelte-3d69ac65.js","./chunks/index-8ce385f3.js","./chunks/IconButton-6b3e342b.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./assets/IconButton-d90fa013.css","./chunks/Example-87d2f72a.js","./assets/Example-16574e3d.css","./chunks/DocContent-03736151.js","./chunks/DocIntoText-6bb6c507.js","./chunks/DocTitle-2a0dfdaa.js","./chunks/Select-1ad70e94.js","./assets/Select-775a58c1.css","./chunks/TextField-e63b5c83.js","./assets/TextField-0aa27560.css","./chunks/RadiusSlider-9efe1028.js","./chunks/Slider-00dc1f6f.js","./assets/Slider-e2c6d01d.css"],import.meta.url),()=>N(()=>import("./chunks/5-1239e143.js"),["./chunks/5-1239e143.js","./components/pages/docs/checkbox/_page.svelte-5ed2f5e4.js","./chunks/index-8ce385f3.js","./chunks/DocIntoText-6bb6c507.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocTitle-2a0dfdaa.js"],import.meta.url),()=>N(()=>import("./chunks/6-c153d954.js"),["./chunks/6-c153d954.js","./components/pages/docs/dark-mode/_page.svelte-3d54290e.js","./chunks/index-8ce385f3.js","./chunks/DocIntoText-6bb6c507.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocTitle-2a0dfdaa.js"],import.meta.url),()=>N(()=>import("./chunks/7-001300a1.js"),["./chunks/7-001300a1.js","./components/pages/docs/icons/_page.svelte-d925d2d1.js","./chunks/index-8ce385f3.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocContent-03736151.js","./chunks/DocTitle-2a0dfdaa.js"],import.meta.url),()=>N(()=>import("./chunks/8-364b676c.js"),["./chunks/8-364b676c.js","./components/pages/docs/select/_page.svelte-6704a76f.js","./chunks/index-8ce385f3.js","./chunks/DocContent-03736151.js","./chunks/DocIntoText-6bb6c507.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocTitle-2a0dfdaa.js","./chunks/Example-87d2f72a.js","./chunks/IconButton-6b3e342b.js","./assets/IconButton-d90fa013.css","./assets/Example-16574e3d.css","./chunks/RadiusSlider-9efe1028.js","./chunks/Slider-00dc1f6f.js","./assets/Slider-e2c6d01d.css","./chunks/Select-1ad70e94.js","./assets/Select-775a58c1.css"],import.meta.url),()=>N(()=>import("./chunks/9-3d8ac362.js"),["./chunks/9-3d8ac362.js","./components/pages/docs/slider/_page.svelte-e49e0426.js","./chunks/index-8ce385f3.js","./chunks/DocContent-03736151.js","./chunks/DocIntoText-6bb6c507.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocTitle-2a0dfdaa.js","./chunks/Example-87d2f72a.js","./chunks/IconButton-6b3e342b.js","./assets/IconButton-d90fa013.css","./assets/Example-16574e3d.css","./chunks/RadiusSlider-9efe1028.js","./chunks/Slider-00dc1f6f.js","./assets/Slider-e2c6d01d.css"],import.meta.url),()=>N(()=>import("./chunks/10-2ae0047d.js"),["./chunks/10-2ae0047d.js","./components/pages/docs/styling/_page.svelte-71303ee2.js","./chunks/index-8ce385f3.js","./chunks/DocIntoText-6bb6c507.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocTitle-2a0dfdaa.js"],import.meta.url),()=>N(()=>import("./chunks/11-eb344550.js"),["./chunks/11-eb344550.js","./components/pages/docs/text/_page.svelte-db14ab7f.js","./chunks/index-8ce385f3.js","./chunks/DocContent-03736151.js","./chunks/DocIntoText-6bb6c507.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocTitle-2a0dfdaa.js","./chunks/Example-87d2f72a.js","./chunks/IconButton-6b3e342b.js","./assets/IconButton-d90fa013.css","./assets/Example-16574e3d.css","./chunks/Slider-00dc1f6f.js","./assets/Slider-e2c6d01d.css","./chunks/TextField-e63b5c83.js","./assets/TextField-0aa27560.css","./chunks/Select-1ad70e94.js","./assets/Select-775a58c1.css"],import.meta.url),()=>N(()=>import("./chunks/12-6fc4f6f3.js"),["./chunks/12-6fc4f6f3.js","./components/pages/docs/text-field/_page.svelte-ed05e84b.js","./chunks/index-8ce385f3.js","./chunks/TextField-e63b5c83.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/IconButton-6b3e342b.js","./assets/IconButton-d90fa013.css","./chunks/Example-87d2f72a.js","./assets/Example-16574e3d.css","./assets/TextField-0aa27560.css","./chunks/DocContent-03736151.js","./chunks/DocIntoText-6bb6c507.js","./chunks/DocTitle-2a0dfdaa.js","./chunks/RadiusSlider-9efe1028.js","./chunks/Slider-00dc1f6f.js","./assets/Slider-e2c6d01d.css","./chunks/Select-1ad70e94.js","./assets/Select-775a58c1.css"],import.meta.url),()=>N(()=>import("./chunks/13-fd9a9227.js"),["./chunks/13-fd9a9227.js","./components/pages/docs/theming/_page.svelte-b38afbce.js","./chunks/index-8ce385f3.js","./chunks/DocIntoText-6bb6c507.js","./chunks/Text-bd1f663b.js","./assets/Text-766c024b.css","./chunks/DocTitle-2a0dfdaa.js"],import.meta.url)],Yt=[],Xt={"/":[3],"/docs/button":[4,[2]],"/docs/checkbox":[5,[2]],"/docs/dark-mode":[6,[2]],"/docs/icons":[7,[2]],"/docs/select":[8,[2]],"/docs/slider":[9,[2]],"/docs/styling":[10,[2]],"/docs/text-field":[12,[2]],"/docs/text":[11,[2]],"/docs/theming":[13,[2]]},Zt={handleError:({error:r})=>{console.error(r)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,n){this.status=e,this.location=n}}async function Qt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const xt=-1,en=-2,tn=-3,nn=-4,rn=-5,an=-6;function on(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,l=!1){if(a===xt)return;if(a===tn)return NaN;if(a===nn)return 1/0;if(a===rn)return-1/0;if(a===an)return-0;if(l)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const d=new Set;n[a]=d;for(let b=1;b<t.length;b+=1)d.add(o(t[b]));break;case"Map":const p=new Map;n[a]=p;for(let b=1;b<t.length;b+=2)p.set(o(t[b]),o(t[b+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let b=1;b<t.length;b+=2)g[t[b]]=o(t[b+1]);break}else{const c=new Array(t.length);n[a]=c;for(let d=0;d<t.length;d+=1){const p=t[d];p!==en&&(c[d]=o(p))}}else{const c={};n[a]=c;for(const d in t){const p=t[d];c[d]=o(p)}}return n[a]}return o(0)}const Oe=Dt(we,Yt,Xt,Wt),je=we[0],Te=we[1];je();Te();let oe={};try{oe=JSON.parse(sessionStorage[nt])}catch{}function Ie(r){oe[r]=_e()}function sn({target:r,base:e}){var Ke;const n=[];let o=null;const a={before_navigate:[],after_navigate:[]};let l={branch:[],error:null,url:null},t=!1,c=!1,d=!0,p=!1,g=!1,b=!1,A=!1,$,P=(Ke=history.state)==null?void 0:Ke[H];P||(P=Date.now(),history.replaceState({...history.state,[H]:P},"",location.href));const W=oe[P];W&&(history.scrollRestoration="manual",scrollTo(W.x,W.y));let Y,Ne,ie;async function Ue(){ie=ie||Promise.resolve(),await ie,ie=null;const s=new URL(location.href),i=Ee(s,!0);o=null,await Ve(i,s,[])}async function ye(s,{noScroll:i=!1,replaceState:f=!1,keepFocus:u=!1,state:_={},invalidateAll:m=!1},h,k){return typeof s=="string"&&(s=new URL(s,He(document))),fe({url:s,scroll:i?_e():null,keepfocus:u,redirect_chain:h,details:{state:_,replaceState:f},nav_token:k,accepted:()=>{m&&(A=!0)},blocked:()=>{},type:"goto"})}async function De(s){const i=Ee(s,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);return o={id:i.id,promise:Fe(i).then(f=>(f.type==="loaded"&&f.state.error&&(o=null),f))},o.promise}async function le(...s){const f=Oe.filter(u=>s.some(_=>u.exec(_))).map(u=>Promise.all([...u.layouts,u.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(f)}async function Ve(s,i,f,u,_={},m){var k,v;Ne=_;let h=s&&await Fe(s);if(h||(h=await Ge(i,{id:null},await re(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(s==null?void 0:s.url)||i,Ne!==_)return!1;if(h.type==="redirect")if(f.length>10||f.includes(i.pathname))h=await ce({status:500,error:await re(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ye(new URL(h.location,i).href,{},[...f,i.pathname],_),!1;else((v=(k=h.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await X.updated.check()&&await ue(i);if(n.length=0,A=!1,p=!0,u&&u.details){const{details:y}=u,E=y.replaceState?0:1;y.state[H]=P+=E,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(o=null,c){l=h.state,h.props.page&&(h.props.page.url=i);const y=me();$.$set(h.props),y()}else qe(h);if(u){const{scroll:y,keepfocus:E}=u;if(E||Le(),await de(),d){const S=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):S?S.scrollIntoView():scrollTo(0,0)}}else await de();d=!0,h.props.page&&(Y=h.props.page),m&&m(),p=!1}function qe(s){var _,m;l=s.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),Y=s.props.page;const f=me();$=new Mt({target:r,props:{...s.props,stores:X},hydrate:!0}),f();const u={from:null,to:he("to",{params:l.params,route:{id:(m=(_=l.route)==null?void 0:_.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};a.after_navigate.forEach(h=>h(u)),c=!0}async function ee({url:s,params:i,branch:f,status:u,error:_,route:m,form:h}){var T;const k=f.filter(Boolean);let v="never";for(const O of f)(O==null?void 0:O.slash)!==void 0&&(v=O.slash);s.pathname=bt(s.pathname,v),s.search=s.search;const y={type:"loaded",state:{url:s,params:i,branch:f,error:_,route:m},props:{components:k.map(O=>O.node.component)}};h!==void 0&&(y.props.form=h);let E={},S=!Y;for(let O=0;O<k.length;O+=1){const j=k[O];E={...E,...j.data},(S||!l.branch.some(C=>C===j))&&(y.props[`data_${O}`]=E,S=S||Object.keys((T=j.data)!=null?T:{}).length>0)}if(S||(S=Object.keys(Y.data).length!==Object.keys(E).length),!l.url||s.href!==l.url.href||l.error!==_||h!==void 0||S){y.props.page={error:_,params:i,route:m,status:u,url:new URL(s),form:h,data:S?E:Y.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const O=(j,C)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${C}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return y}async function be({loader:s,parent:i,url:f,params:u,route:_,server_data_node:m}){var y,E,S,q,T,O,j;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await s();if((y=v.shared)!=null&&y.load){let C=function(...w){for(const R of w){const{href:I}=new URL(R,f);k.dependencies.add(I)}};const te={route:{get id(){return k.route=!0,_.id}},params:new Proxy(u,{get:(w,R)=>(k.params.add(R),w[R])}),data:(E=m==null?void 0:m.data)!=null?E:null,url:$t(f,()=>{k.url=!0}),async fetch(w,R){let I;w instanceof Request?(I=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):I=w;const L=new URL(I,f).href;return C(L),c?Pt(I,L,R):Lt(I,R)},setHeaders:()=>{},depends:C,parent(){return k.parent=!0,i()}};Object.defineProperties(te,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(S=await v.shared.load.call(null,te))!=null?S:null,h=h?await Qt(h):null}return{node:v,loader:s,server:m,shared:(q=v.shared)!=null&&q.load?{type:"data",data:h,uses:k}:null,data:(T=h!=null?h:m==null?void 0:m.data)!=null?T:null,slash:(j=(O=v.shared)==null?void 0:O.trailingSlash)!=null?j:m==null?void 0:m.slash}}function Ce(s,i,f,u,_){if(A)return!0;if(!u)return!1;if(u.parent&&s||u.route&&i||u.url&&f)return!0;for(const m of u.params)if(_[m]!==l.params[m])return!0;for(const m of u.dependencies)if(n.some(h=>h(new URL(m))))return!0;return!1}function ve(s,i){var f,u;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((f=s.uses.dependencies)!=null?f:[]),params:new Set((u=s.uses.params)!=null?u:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"&&i!=null?i:null}async function Fe({id:s,invalidating:i,url:f,params:u,route:_}){var te;if((o==null?void 0:o.id)===s)return o.promise;const{errors:m,layouts:h,leaf:k}=_,v=[...h,k];m.forEach(w=>w==null?void 0:w().catch(()=>{})),v.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const E=l.url?s!==l.url.pathname+l.url.search:!1,S=l.route?s!==l.route.id:!1,q=v.reduce((w,R,I)=>{var ne;const L=l.branch[I],x=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||Ce(w.some(Boolean),S,E,(ne=L.server)==null?void 0:ne.uses,u));return w.push(x),w},[]);if(q.some(Boolean)){try{y=await tt(f,q)}catch(w){return ce({status:500,error:await re(w,{url:f,params:u,route:{id:_.id}}),url:f,route:_})}if(y.type==="redirect")return y}const T=y==null?void 0:y.nodes;let O=!1;const j=v.map(async(w,R)=>{var ne;if(!w)return;const I=l.branch[R],L=T==null?void 0:T[R];if((!L||L.type==="skip")&&w[1]===(I==null?void 0:I.loader)&&!Ce(O,S,E,(ne=I.shared)==null?void 0:ne.uses,u))return I;if(O=!0,(L==null?void 0:L.type)==="error")throw L;return be({loader:w[1],url:f,params:u,route:_,parent:async()=>{var ze;const Me={};for(let ke=0;ke<R;ke+=1)Object.assign(Me,(ze=await j[ke])==null?void 0:ze.data);return Me},server_data_node:ve(L===void 0&&w[0]?{type:"skip"}:L!=null?L:null,I==null?void 0:I.server)})});for(const w of j)w.catch(()=>{});const C=[];for(let w=0;w<v.length;w+=1)if(v[w])try{C.push(await j[w])}catch(R){if(R instanceof et)return{type:"redirect",location:R.location};let I=500,L;T!=null&&T.includes(R)?(I=(te=R.status)!=null?te:I,L=R.error):R instanceof Ae?(I=R.status,L=R.body):L=await re(R,{params:u,url:f,route:{id:_.id}});const x=await Be(w,C,m);return x?await ee({url:f,params:u,branch:C.slice(0,x.idx).concat(x.node),status:I,error:L,route:_}):await Ge(f,{id:_.id},L,I)}else C.push(void 0);return await ee({url:f,params:u,branch:C,status:200,error:null,route:_,form:i?void 0:null})}async function Be(s,i,f){for(;s--;)if(f[s]){let u=s;for(;!i[u];)u-=1;try{return{idx:u+1,node:{node:await f[s](),loader:f[s],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:s,error:i,url:f,route:u}){var y;const _={},m=await je();let h=null;if(m.server)try{const E=await tt(f,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;h=(y=E.nodes[0])!=null?y:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||t)&&await ue(f)}const k=await be({loader:je,url:f,params:_,route:u,parent:()=>Promise.resolve({}),server_data_node:ve(h)}),v={node:await Te(),loader:Te,shared:null,server:null,data:null};return await ee({url:f,params:_,branch:[k,v],status:s,error:i,route:null})}function Ee(s,i){if(Ye(s,e))return;const f=vt(s.pathname.slice(e.length)||"/");for(const u of Oe){const _=u.exec(f);if(_)return{id:s.pathname+s.search,invalidating:i,route:u,params:Et(_),url:s}}}function Je({url:s,type:i,intent:f,delta:u}){var k,v,y,E,S;let _=!1;const m={from:he("from",{params:l.params,route:{id:(v=(k=l.route)==null?void 0:k.id)!=null?v:null},url:l.url}),to:he("to",{params:(y=f==null?void 0:f.params)!=null?y:null,route:{id:(S=(E=f==null?void 0:f.route)==null?void 0:E.id)!=null?S:null},url:s}),willUnload:!f,type:i};u!==void 0&&(m.delta=u);const h={...m,cancel:()=>{_=!0}};return g||a.before_navigate.forEach(q=>q(h)),_?null:m}async function fe({url:s,scroll:i,keepfocus:f,redirect_chain:u,details:_,type:m,delta:h,nav_token:k,accepted:v,blocked:y}){const E=Ee(s,!1),S=Je({url:s,type:m,delta:h,intent:E});if(!S){y();return}Ie(P),v(),g=!0,c&&X.navigating.set(S),await Ve(E,s,u,{scroll:i,keepfocus:f,details:_},k,()=>{g=!1,a.after_navigate.forEach(q=>q(S)),X.navigating.set(null)})}async function Ge(s,i,f,u){return s.origin===location.origin&&s.pathname===location.pathname&&!t?await ce({status:u,error:f,url:s,route:i}):await ue(s)}function ue(s){return location.href=s.href,new Promise(()=>{})}function at(){let s;r.addEventListener("mousemove",m=>{const h=m.target;clearTimeout(s),s=setTimeout(()=>{u(h,2)},20)});function i(m){u(m.composedPath()[0],1)}r.addEventListener("mousedown",i),r.addEventListener("touchstart",i,{passive:!0});const f=new IntersectionObserver(m=>{for(const h of m)h.isIntersecting&&(le(new URL(h.target.href).pathname),f.unobserve(h.target))},{threshold:0});function u(m,h){const k=We(m,r);if(!k)return;const{url:v,external:y}=Re(k,e);if(y)return;const E=pe(k);E.reload||(h<=E.preload_data?De(v):h<=E.preload_code&&le(v.pathname))}function _(){f.disconnect();for(const m of r.querySelectorAll("a")){const{url:h,external:k}=Re(m,e);if(k)continue;const v=pe(m);v.reload||(v.preload_code===Xe.viewport&&f.observe(m),v.preload_code===Xe.eager&&le(h.pathname))}}a.after_navigate.push(_),_()}return{after_navigate:s=>{Pe(()=>(a.after_navigate.push(s),()=>{const i=a.after_navigate.indexOf(s);a.after_navigate.splice(i,1)}))},before_navigate:s=>{Pe(()=>(a.before_navigate.push(s),()=>{const i=a.before_navigate.indexOf(s);a.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(p||!c)&&(d=!1)},goto:(s,i={})=>{if("keepfocus"in i&&!("keepFocus"in i))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in i&&!("noScroll"in i))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ye(s,i,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")n.push(s);else{const{href:i}=new URL(s,location.href);n.push(f=>f.href===i)}return Ue()},invalidateAll:()=>(A=!0,Ue()),preload_data:async s=>{const i=new URL(s,He(document));await De(i)},preload_code:le,apply_action:async s=>{if(s.type==="error"){const i=new URL(location.href),{branch:f,route:u}=l;if(!u)return;const _=await Be(l.branch.length,f,u.errors);if(_){const m=await ee({url:i,params:l.params,branch:f.slice(0,_.idx).concat(_.node),status:500,error:s.error,route:u});l=m.state;const h=me();$.$set(m.props),h(),de().then(Le)}}else if(s.type==="redirect")ye(s.location,{invalidateAll:!0},[]);else{const i={form:s.data,page:{...Y,form:s.data,status:s.status}},f=me();$.$set(i),f(),s.type==="success"&&de().then(Le)}},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var u,_;let f=!1;if(!g){const m={from:he("from",{params:l.params,route:{id:(_=(u=l.route)==null?void 0:u.id)!=null?_:null},url:l.url}),to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};a.before_navigate.forEach(h=>h(m))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(P);try{sessionStorage[nt]=JSON.stringify(oe)}catch{}}}),(s=navigator.connection)!=null&&s.saveData||at(),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const f=We(i.composedPath()[0],r);if(!f)return;const{url:u,external:_,has:m}=Re(f,e),h=pe(f);if(!u||!(f instanceof SVGAElement)&&u.protocol!==location.protocol&&!(u.protocol==="https:"||u.protocol==="http:")||m.download)return;if(_||h.reload){Je({url:u,type:"link"})||i.preventDefault(),g=!0;return}const[v,y]=u.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){b=!0,Ie(P),l.url=u,X.page.set({...Y,url:u}),X.page.notify();return}fe({url:u,scroll:h.noscroll?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:u.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),r.addEventListener("submit",i=>{var v;if(i.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(i.target),u=i.submitter;if(((u==null?void 0:u.formMethod)||f.method)!=="get")return;const m=new URL(((v=i.submitter)==null?void 0:v.hasAttribute("formaction"))&&(u==null?void 0:u.formAction)||f.action);if(Ye(m,e))return;const{noscroll:h,reload:k}=pe(i.target);k||(i.preventDefault(),i.stopPropagation(),m.search=new URLSearchParams(new FormData(i.target)).toString(),fe({url:m,scroll:h?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",i=>{var f;if((f=i.state)!=null&&f[H]){if(i.state[H]===P)return;const u=i.state[H]-P;fe({url:new URL(location.href),scroll:oe[i.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=i.state[H]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[H]:++P},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&X.navigating.set(null)})},_hydrate:async({status:s,error:i,node_ids:f,params:u,route:_,data:m,form:h})=>{var y;t=!0;const k=new URL(location.href);let v;try{const E=f.map(async(S,q)=>{const T=m[q];return be({loader:we[S],url:k,params:u,route:_,parent:async()=>{const O={};for(let j=0;j<q;j+=1)Object.assign(O,(await E[j]).data);return O},server_data_node:ve(T)})});v=await ee({url:k,params:u,branch:await Promise.all(E),status:s,error:i,form:h,route:(y=Oe.find(({id:S})=>S===_.id))!=null?y:null})}catch(E){if(E instanceof et){await ue(new URL(E.location,location.href));return}v=await ce({status:E instanceof Ae?E.status:500,error:await re(E,{url:k,params:u,route:_}),url:k,route:_})}qe(v)}}}async function tt(r,e){var l;const n=new URL(r);n.pathname=Ot(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await ge(n.href),a=await o.json();if(!o.ok)throw new Error(a);return(l=a.nodes)==null||l.forEach(t=>{var c,d;(t==null?void 0:t.type)==="data"&&(t.data=on(t.data),t.uses={dependencies:new Set((c=t.uses.dependencies)!=null?c:[]),params:new Set((d=t.uses.params)!=null?d:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function re(r,e){var n;return r instanceof Ae?r.body:(n=Zt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const ln=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function he(r,e){for(const n of ln)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function me(){return()=>{}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function dn({env:r,hydrate:e,paths:n,target:o,version:a}){yt(n),wt(a);const l=sn({target:o,base:n.base});gt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{dn as start};
