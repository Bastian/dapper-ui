import{S as M,i as E,s as H,e as _,a as N,R as P,h as m,c as D,G,b as p,g as B,t as T,d as F,f as w,T as O,U,V as q,W as z,X as A,F as V,H as I,I as C,J as R,k as J,l as L,m as W,n as h}from"./index-972f31bf.js";import{d as X,w as Y}from"./paths-1935d5f9.js";const Z=[u(230,1,75),u(230,2,59),u(230,4,45),u(230,6,35),u(230,8,25),u(230,10,20),u(230,15,17),u(230,20,11),u(230,25,8),u(230,30,6)];function u(o,e,l){l/=100;const f=e*Math.min(l,1-l)/100,a=r=>{const t=(r+o/30)%12,s=l-f*Math.max(Math.min(t-3,9-t,1),-1);return Math.round(255*s).toString(16).padStart(2,"0")};return`#${a(0)}${a(8)}${a(4)}`}const K=["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a"],S=["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280","#4b5563","#374151","#1f2937","#111827"],Q=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"],$=["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#737373","#525252","#404040","#262626","#171717"],x=["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#78716c","#57534e","#44403c","#292524","#1c1917"],ee=["#fef2f2","#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d"],fe=["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#c2410c","#9a3412","#7c2d12"],ae=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#fbbf24","#f59e0b","#d97706","#b45309","#92400e","#78350f"],oe=["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#eab308","#ca8a04","#a16207","#854d0e","#713f12"],re=["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#84cc16","#65a30d","#4d7c0f","#3f6212","#365314"],le=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d"],te=["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#10b981","#059669","#047857","#065f46","#064e3b"],se=["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a"],ce=["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#06b6d4","#0891b2","#0e7490","#155e75","#164e63"],de=["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0ea5e9","#0284c7","#0369a1","#075985","#0c4a6e"],ne=["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a"],v=["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81"],ie=["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9","#5b21b6","#4c1d95"],ue=["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7","#9333ea","#7e22ce","#6b21a8","#581c87"],be=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf","#86198f","#701a75"],me=["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899","#db2777","#be185d","#9d174d","#831843"],_e=["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#f43f5e","#e11d48","#be123c","#9f1239","#881337"],he={colors:{primary:v,neutral:S,dark:Z,slate:K,gray:S,zinc:Q,"neutral-gray":$,stone:x,red:ee,orange:fe,amber:ae,yellow:oe,lime:re,green:le,emerald:te,teal:se,cyan:ce,sky:de,blue:ne,indigo:v,violet:ie,purple:ue,fuchsia:be,pink:me,rose:_e},radiuses:{button:"base",input:"base",checkbox:"base",slider:{thumb:"full",track:"full"}}};function pe(o){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);if(!e)throw new Error(`Invalid hex color ${o}`);return{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}}function Te(o,e){const l=[50,100,200,300,400,500,600,700,800,900];return o.map((a,r)=>{const t=pe(a),s=`${t.r} ${t.g} ${t.b}`;return`--d4r-color-${e}-${l[r]}: ${s};`})}function j(o){let e,l=`<style type="text/css">:root {
${k(o[2].colors).join(`
`)}
${y(o[2]).join(`
`)}
	</style>`,f;return{c(){e=new z(!1),f=_(),this.h()},l(a){e=A(a,!1),f=_(),this.h()},h(){e.a=f},m(a,r){e.m(l,a,r),p(a,f,r)},p(a,r){r&4&&l!==(l=`<style type="text/css">:root {
${k(a[2].colors).join(`
`)}
${y(a[2]).join(`
`)}
	</style>`)&&e.p(l)},d(a){a&&m(f),a&&e.d()}}}function we(o){let e;const l=o[5].default,f=V(l,o,o[4],null);return{c(){f&&f.c()},l(a){f&&f.l(a)},m(a,r){f&&f.m(a,r),e=!0},p(a,r){f&&f.p&&(!e||r&16)&&I(f,l,a,a[4],e?R(l,a[4],r,null):C(a[4]),null)},i(a){e||(w(f,a),e=!0)},o(a){T(f,a),e=!1},d(a){f&&f.d(a)}}}function ke(o){let e,l,f;const a=o[5].default,r=V(a,o,o[4],null);return{c(){e=J("div"),r&&r.c(),this.h()},l(t){e=L(t,"DIV",{class:!0,style:!0});var s=W(e);r&&r.l(s),s.forEach(m),this.h()},h(){h(e,"class",o[0]),h(e,"style",l=""+(k(o[2].colors).join("")+y(o[2]).join("")))},m(t,s){p(t,e,s),r&&r.m(e,null),f=!0},p(t,s){r&&r.p&&(!f||s&16)&&I(r,a,t,t[4],f?R(a,t[4],s,null):C(t[4]),null),(!f||s&1)&&h(e,"class",t[0]),(!f||s&4&&l!==(l=""+(k(t[2].colors).join("")+y(t[2]).join(""))))&&h(e,"style",l)},i(t){f||(w(r,t),f=!0)},o(t){T(r,t),f=!1},d(t){t&&m(e),r&&r.d(t)}}}function ye(o){let e,l,f,a,r,t,s=!o[1]&&j(o);const b=[ke,we],n=[];function d(c,i){return c[1]?0:1}return f=d(o),a=n[f]=b[f](o),{c(){s&&s.c(),e=_(),l=N(),a.c(),r=_()},l(c){const i=P("svelte-1i1kraa",document.head);s&&s.l(i),e=_(),i.forEach(m),l=D(c),a.l(c),r=_()},m(c,i){s&&s.m(document.head,null),G(document.head,e),p(c,l,i),n[f].m(c,i),p(c,r,i),t=!0},p(c,[i]){c[1]?s&&(s.d(1),s=null):s?s.p(c,i):(s=j(c),s.c(),s.m(e.parentNode,e));let g=f;f=d(c),f===g?n[f].p(c,i):(B(),T(n[g],1,1,()=>{n[g]=null}),F(),a=n[f],a?a.p(c,i):(a=n[f]=b[f](c),a.c()),w(a,1),a.m(r.parentNode,r))},i(c){t||(w(a),t=!0)},o(c){T(a),t=!1},d(c){s&&s.d(c),m(e),c&&m(l),n[f].d(c),c&&m(r)}}}function k(o){return Object.entries(o).flatMap(([e,l])=>Te(l,e))}function y(o){function e(l,f){return`--d4r-border-radius-${l}: var(--d4r-border-radius-${f});`}return["--d4r-border-radius-none: 0px;","--d4r-border-radius-sm: 0.125rem;","--d4r-border-radius-base: 0.25rem;","--d4r-border-radius-md: 0.375rem;","--d4r-border-radius-lg: 0.5rem;","--d4r-border-radius-xl: 0.75rem;","--d4r-border-radius-2xl: 1rem;","--d4r-border-radius-3xl: 1.5rem;","--d4r-border-radius-full: 9999px;",e("button",o.radiuses.button),e("input",o.radiuses.input),e("checkbox",o.radiuses.checkbox),e("slider-thumb",o.radiuses.slider.thumb),e("slider-track",o.radiuses.slider.track)]}function ge(o,e,l){let f,{$$slots:a={},$$scope:r}=e,{class:t=""}=e,{localStyle:s=!1}=e,{theme:b=he}=e;const n=Y(b);return O(o,n,d=>l(6,f=d)),U("d4r-theme",X(n,d=>d)),o.$$set=d=>{"class"in d&&l(0,t=d.class),"localStyle"in d&&l(1,s=d.localStyle),"theme"in d&&l(2,b=d.theme),"$$scope"in d&&l(4,r=d.$$scope)},o.$$.update=()=>{o.$$.dirty&4&&q(n,f=b,f)},[t,s,b,n,r,a]}class je extends M{constructor(e){super(),E(this,e,ge,ye,H,{class:0,localStyle:1,theme:2})}}export{je as T,le as a,K as c,he as d};
