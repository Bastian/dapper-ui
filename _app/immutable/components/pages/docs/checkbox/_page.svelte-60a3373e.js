import{S as J,i as K,s as L,w as d,x as _,y as g,f as b,t as h,z as k,I as W,a6 as I,a7 as T,k as B,a as v,l as F,m as G,h as w,c as q,n as X,b as D,H as Y,a8 as R}from"../../../../chunks/index-9ef34302.js";import{D as Z}from"../../../../chunks/DocContent-2d6aa00a.js";import{D as y}from"../../../../chunks/DocImport-ecda4852.js";import{D as ee}from"../../../../chunks/DocIntoText-4170de79.js";import{D as re}from"../../../../chunks/DocTitle-c10cf865.js";import"../../../../chunks/Dialog.svelte_svelte_type_style_lang-1e225ebb.js";import{C as S}from"../../../../chunks/InputBase-724cd643.js";import{g as te,R as ne}from"../../../../chunks/RadiusSlider-a4170795.js";import{c as se,C as oe}from"../../../../chunks/ColorPicker-d3221817.js";import{E as ie}from"../../../../chunks/Example-7d928227.js";function ae(o){let t,s;return t=new S({props:{slot:"preview",label:"Click Me",radius:o[0],color:o[3],disabled:o[1],required:o[2]}}),{c(){d(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){g(t,e,a),s=!0},p(e,a){const i={};a&1&&(i.radius=e[0]),a&8&&(i.color=e[3]),a&2&&(i.disabled=e[1]),a&4&&(i.required=e[2]),t.$set(i)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}function ce(o){let t,s,e,a,i,m,f,c,r,u,C,p,E,l;function N(n){o[7](n)}let M={};o[0]!==void 0&&(M.radius=o[0]),s=new ne({props:M}),I.push(()=>T(s,"radius",N));function O(n){o[8](n)}let P={};o[3]!==void 0&&(P.color=o[3]),i=new oe({props:P}),I.push(()=>T(i,"color",O));function Q(n){o[9](n)}let V={label:"Disabled"};o[1]!==void 0&&(V.checked=o[1]),r=new S({props:V}),I.push(()=>T(r,"checked",Q));function U(n){o[10](n)}let z={label:"Required"};return o[2]!==void 0&&(z.checked=o[2]),p=new S({props:z}),I.push(()=>T(p,"checked",U)),{c(){t=B("div"),d(s.$$.fragment),a=v(),d(i.$$.fragment),f=v(),c=B("div"),d(r.$$.fragment),C=v(),d(p.$$.fragment),this.h()},l(n){t=F(n,"DIV",{});var $=G(t);_(s.$$.fragment,$),$.forEach(w),a=q(n),_(i.$$.fragment,n),f=q(n),c=F(n,"DIV",{class:!0});var x=G(c);_(r.$$.fragment,x),C=q(x),_(p.$$.fragment,x),x.forEach(w),this.h()},h(){X(c,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(n,$){D(n,t,$),g(s,t,null),D(n,a,$),g(i,n,$),D(n,f,$),D(n,c,$),g(r,c,null),Y(c,C),g(p,c,null),l=!0},p(n,$){const x={};!e&&$&1&&(e=!0,x.radius=n[0],R(()=>e=!1)),s.$set(x);const H={};!m&&$&8&&(m=!0,H.color=n[3],R(()=>m=!1)),i.$set(H);const j={};!u&&$&2&&(u=!0,j.checked=n[1],R(()=>u=!1)),r.$set(j);const A={};!E&&$&4&&(E=!0,A.checked=n[2],R(()=>E=!1)),p.$set(A)},i(n){l||(b(s.$$.fragment,n),b(i.$$.fragment,n),b(r.$$.fragment,n),b(p.$$.fragment,n),l=!0)},o(n){h(s.$$.fragment,n),h(i.$$.fragment,n),h(r.$$.fragment,n),h(p.$$.fragment,n),l=!1},d(n){n&&w(t),k(s),n&&w(a),k(i,n),n&&w(f),n&&w(c),k(r),k(p)}}}function fe(o){let t,s;return t=new ie({props:{title:"Demo",code:o[4],$$slots:{controls:[ce],preview:[ae]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){g(t,e,a),s=!0},p(e,[a]){const i={};a&16&&(i.code=e[4]),a&2063&&(i.$$scope={dirty:a,ctx:e}),t.$set(i)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}function le(o,t,s){let e,a;const i=te();W(o,i,l=>s(6,a=l));let m=!1,f=!1,c,{radius:r=a.radiuses.checkbox}=t;function u(l){r=l,s(0,r)}function C(l){c=l,s(3,c)}function p(l){m=l,s(1,m)}function E(l){f=l,s(2,f)}return o.$$set=l=>{"radius"in l&&s(0,r=l.radius)},o.$$.update=()=>{o.$$.dirty&79&&s(4,e=se({name:"Checkbox",props:{label:"Click Me",disabled:m,color:c,radius:r===a.radiuses.checkbox?void 0:r,required:f}}))},[r,m,f,c,e,i,a,u,C,p,E]}class ue extends J{constructor(t){super(),K(this,t,le,fe,L,{radius:0})}}function me(o){let t,s;return t=new ue({}),{c(){d(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){g(t,e,a),s=!0},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}function $e(o){let t,s,e,a,i,m,f,c;return t=new re({props:{title:"Checkbox"}}),e=new y({props:{what:"Checkbox",from:"core"}}),i=new ee({props:{text:"The Checkbox component allows users to select a boolean value."}}),f=new Z({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment),s=v(),d(e.$$.fragment),a=v(),d(i.$$.fragment),m=v(),d(f.$$.fragment)},l(r){_(t.$$.fragment,r),s=q(r),_(e.$$.fragment,r),a=q(r),_(i.$$.fragment,r),m=q(r),_(f.$$.fragment,r)},m(r,u){g(t,r,u),D(r,s,u),g(e,r,u),D(r,a,u),g(i,r,u),D(r,m,u),g(f,r,u),c=!0},p(r,[u]){const C={};u&1&&(C.$$scope={dirty:u,ctx:r}),f.$set(C)},i(r){c||(b(t.$$.fragment,r),b(e.$$.fragment,r),b(i.$$.fragment,r),b(f.$$.fragment,r),c=!0)},o(r){h(t.$$.fragment,r),h(e.$$.fragment,r),h(i.$$.fragment,r),h(f.$$.fragment,r),c=!1},d(r){k(t,r),r&&w(s),k(e,r),r&&w(a),k(i,r),r&&w(m),k(f,r)}}}class De extends J{constructor(t){super(),K(this,t,null,$e,L,{})}}export{De as default};
