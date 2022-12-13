import{S as I,i as C,s as N,e as y,a as L,Z as X,h as d,c as q,H as g,b as _,g as O,t as p,d as Z,f as w,I as x,_ as ee,N as te,$ as oe,a0 as re,J,K,L as U,M as Y,k as V,l as H,m,n as i,F as v,q as P,G as T,r as R,B as $,w as S,x as j,y as M,z as E}from"./index-83d82b2f.js";import{d as ne,w as ae}from"./paths-6b439ae5.js";import{B as le,I as fe}from"./IconButton-39b0c0f8.js";function se(f){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f);if(!e)throw new Error(`Invalid hex color ${f}`);return{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}}function ie(f,e){const r=[50,100,200,300,400,500,600,700,800,900];return f.map((o,l)=>{const n=se(o),a=`${n.r} ${n.g} ${n.b}`;return`--d4r-color-${e}-${r[l]}: ${a};`})}const ce=[k(230,1,75),k(230,2,59),k(230,4,45),k(230,6,35),k(230,8,25),k(230,10,20),k(230,15,17),k(230,20,11),k(230,25,8),k(230,30,6)];function k(f,e,r){r/=100;const t=e*Math.min(r,1-r)/100,o=l=>{const n=(l+f/30)%12,a=r-t*Math.max(Math.min(n-3,9-n,1),-1);return Math.round(255*a).toString(16).padStart(2,"0")};return`#${o(0)}${o(8)}${o(4)}`}const de=["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a"],A=["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280","#4b5563","#374151","#1f2937","#111827"],ue=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"],be=["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#737373","#525252","#404040","#262626","#171717"],me=["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#78716c","#57534e","#44403c","#292524","#1c1917"],he=["#fef2f2","#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d"],_e=["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#c2410c","#9a3412","#7c2d12"],ke=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#fbbf24","#f59e0b","#d97706","#b45309","#92400e","#78350f"],ge=["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#eab308","#ca8a04","#a16207","#854d0e","#713f12"],pe=["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#84cc16","#65a30d","#4d7c0f","#3f6212","#365314"],we=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d"],ve=["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#10b981","#059669","#047857","#065f46","#064e3b"],Te=["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a"],ye=["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#06b6d4","#0891b2","#0e7490","#155e75","#164e63"],$e=["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0ea5e9","#0284c7","#0369a1","#075985","#0c4a6e"],F=["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a"],Se=["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81"],je=["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9","#5b21b6","#4c1d95"],Me=["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7","#9333ea","#7e22ce","#6b21a8","#581c87"],Ee=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf","#86198f","#701a75"],ze=["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899","#db2777","#be185d","#9d174d","#831843"],De=["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#f43f5e","#e11d48","#be123c","#9f1239","#881337"],Be={colors:{primary:F,neutral:A,dark:ce,slate:de,gray:A,zinc:ue,"neutral-gray":be,stone:me,red:he,orange:_e,amber:ke,yellow:ge,lime:pe,green:we,emerald:ve,teal:Te,cyan:ye,sky:$e,blue:F,indigo:Se,violet:je,purple:Me,fuchsia:Ee,pink:ze,rose:De},radiuses:{button:"base",input:"base",checkbox:"base",slider:{thumb:"full",track:"full"}}};function G(f){let e,r=`<style type="text/css">:root {
${z(f[2].colors).join(`
`)}
${D(f[2]).join(`
`)}
${B(f[2]).join(`
`)}
	</style>`,t;return{c(){e=new oe(!1),t=y(),this.h()},l(o){e=re(o,!1),t=y(),this.h()},h(){e.a=t},m(o,l){e.m(r,o,l),_(o,t,l)},p(o,l){l&4&&r!==(r=`<style type="text/css">:root {
${z(o[2].colors).join(`
`)}
${D(o[2]).join(`
`)}
${B(o[2]).join(`
`)}
	</style>`)&&e.p(r)},d(o){o&&d(t),o&&e.d()}}}function Ie(f){let e;const r=f[5].default,t=J(r,f,f[4],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,l){t&&t.m(o,l),e=!0},p(o,l){t&&t.p&&(!e||l&16)&&K(t,r,o,o[4],e?Y(r,o[4],l,null):U(o[4]),null)},i(o){e||(w(t,o),e=!0)},o(o){p(t,o),e=!1},d(o){t&&t.d(o)}}}function Ce(f){let e,r,t;const o=f[5].default,l=J(o,f,f[4],null);return{c(){e=V("div"),l&&l.c(),this.h()},l(n){e=H(n,"DIV",{class:!0,style:!0});var a=m(e);l&&l.l(a),a.forEach(d),this.h()},h(){i(e,"class",f[0]),i(e,"style",r=""+(z(f[2].colors).join("")+D(f[2]).join("")+B(f[2]).join("")))},m(n,a){_(n,e,a),l&&l.m(e,null),t=!0},p(n,a){l&&l.p&&(!t||a&16)&&K(l,o,n,n[4],t?Y(o,n[4],a,null):U(n[4]),null),(!t||a&1)&&i(e,"class",n[0]),(!t||a&4&&r!==(r=""+(z(n[2].colors).join("")+D(n[2]).join("")+B(n[2]).join(""))))&&i(e,"style",r)},i(n){t||(w(l,n),t=!0)},o(n){p(l,n),t=!1},d(n){n&&d(e),l&&l.d(n)}}}function Ne(f){let e,r,t,o,l,n,a=!f[1]&&G(f);const s=[Ce,Ie],c=[];function b(u,h){return u[1]?0:1}return t=b(f),o=c[t]=s[t](f),{c(){a&&a.c(),e=y(),r=L(),o.c(),l=y()},l(u){const h=X("svelte-14llyz1",document.head);a&&a.l(h),e=y(),h.forEach(d),r=q(u),o.l(u),l=y()},m(u,h){a&&a.m(document.head,null),g(document.head,e),_(u,r,h),c[t].m(u,h),_(u,l,h),n=!0},p(u,[h]){u[1]?a&&(a.d(1),a=null):a?a.p(u,h):(a=G(u),a.c(),a.m(e.parentNode,e));let W=t;t=b(u),t===W?c[t].p(u,h):(O(),p(c[W],1,1,()=>{c[W]=null}),Z(),o=c[t],o?o.p(u,h):(o=c[t]=s[t](u),o.c()),w(o,1),o.m(l.parentNode,l))},i(u){n||(w(o),n=!0)},o(u){p(o),n=!1},d(u){a&&a.d(u),d(e),u&&d(r),c[t].d(u),u&&d(l)}}}function z(f){return Object.entries(f).flatMap(([e,r])=>ie(r,e))}function D(f){function e(r,t){return`--d4r-border-radius-${r}: var(--d4r-border-radius-${t});`}return["--d4r-border-radius-none: 0px;","--d4r-border-radius-sm: 0.125rem;","--d4r-border-radius-base: 0.25rem;","--d4r-border-radius-md: 0.375rem;","--d4r-border-radius-lg: 0.5rem;","--d4r-border-radius-xl: 0.75rem;","--d4r-border-radius-2xl: 1rem;","--d4r-border-radius-3xl: 1.5rem;","--d4r-border-radius-full: 9999px;",e("button",f.radiuses.button),e("input",f.radiuses.input),e("checkbox",f.radiuses.checkbox),e("slider-thumb",f.radiuses.slider.thumb),e("slider-track",f.radiuses.slider.track)]}function B(f){var e;return(e=f.font)!=null&&e.default?[`font-family: ${f.font.default};`]:[]}function We(f,e,r){let t,{$$slots:o={},$$scope:l}=e,{class:n=""}=e,{localStyle:a=!1}=e,{theme:s=Be}=e;const c=ae(s);return x(f,c,b=>r(6,t=b)),ee("d4r-theme",ne(c,b=>b)),f.$$set=b=>{"class"in b&&r(0,n=b.class),"localStyle"in b&&r(1,a=b.localStyle),"theme"in b&&r(2,s=b.theme),"$$scope"in b&&r(4,l=b.$$scope)},f.$$.update=()=>{f.$$.dirty&4&&te(c,t=s,t)},[n,a,s,c,l,o]}class Qe extends I{constructor(e){super(),C(this,e,We,Ne,N,{class:0,localStyle:1,theme:2})}}function Ve(f){let e,r,t,o,l;return{c(){e=v("svg"),r=v("desc"),t=P("Download more icon variants from https://tabler-icons.io/i/moon"),o=v("path"),l=v("path"),this.h()},l(n){e=T(n,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var a=m(e);r=T(a,"desc",{});var s=m(r);t=R(s,"Download more icon variants from https://tabler-icons.io/i/moon"),s.forEach(d),o=T(a,"path",{stroke:!0,d:!0,fill:!0}),m(o).forEach(d),l=T(a,"path",{d:!0}),m(l).forEach(d),a.forEach(d),this.h()},h(){i(o,"stroke","none"),i(o,"d","M0 0h24v24H0z"),i(o,"fill","none"),i(l,"d","M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","icon icon-tabler icon-tabler-moon"),i(e,"width",f[0]),i(e,"height",f[0]),i(e,"viewBox","0 0 24 24"),i(e,"stroke",f[1]),i(e,"stroke-width",f[2]),i(e,"fill","none"),i(e,"stroke-linecap","round"),i(e,"stroke-linejoin","round")},m(n,a){_(n,e,a),g(e,r),g(r,t),g(e,o),g(e,l)},p(n,[a]){a&1&&i(e,"width",n[0]),a&1&&i(e,"height",n[0]),a&2&&i(e,"stroke",n[1]),a&4&&i(e,"stroke-width",n[2])},i:$,o:$,d(n){n&&d(e)}}}function He(f,e,r){let{size:t=24}=e,{color:o="currentColor"}=e,{strokeWidth:l=2}=e;return f.$$set=n=>{"size"in n&&r(0,t=n.size),"color"in n&&r(1,o=n.color),"strokeWidth"in n&&r(2,l=n.strokeWidth)},[t,o,l]}class Pe extends I{constructor(e){super(),C(this,e,He,Ve,N,{size:0,color:1,strokeWidth:2})}}function Re(f){let e,r,t,o,l,n;return{c(){e=v("svg"),r=v("desc"),t=P("Download more icon variants from https://tabler-icons.io/i/sun"),o=v("path"),l=v("circle"),n=v("path"),this.h()},l(a){e=T(a,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var s=m(e);r=T(s,"desc",{});var c=m(r);t=R(c,"Download more icon variants from https://tabler-icons.io/i/sun"),c.forEach(d),o=T(s,"path",{stroke:!0,d:!0,fill:!0}),m(o).forEach(d),l=T(s,"circle",{cx:!0,cy:!0,r:!0}),m(l).forEach(d),n=T(s,"path",{d:!0}),m(n).forEach(d),s.forEach(d),this.h()},h(){i(o,"stroke","none"),i(o,"d","M0 0h24v24H0z"),i(o,"fill","none"),i(l,"cx","12"),i(l,"cy","12"),i(l,"r","4"),i(n,"d","M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","icon icon-tabler icon-tabler-sun"),i(e,"width",f[0]),i(e,"height",f[0]),i(e,"viewBox","0 0 24 24"),i(e,"stroke",f[1]),i(e,"stroke-width",f[2]),i(e,"fill","none"),i(e,"stroke-linecap","round"),i(e,"stroke-linejoin","round")},m(a,s){_(a,e,s),g(e,r),g(r,t),g(e,o),g(e,l),g(e,n)},p(a,[s]){s&1&&i(e,"width",a[0]),s&1&&i(e,"height",a[0]),s&2&&i(e,"stroke",a[1]),s&4&&i(e,"stroke-width",a[2])},i:$,o:$,d(a){a&&d(e)}}}function Ae(f,e,r){let{size:t=24}=e,{color:o="currentColor"}=e,{strokeWidth:l=2}=e;return f.$$set=n=>{"size"in n&&r(0,t=n.size),"color"in n&&r(1,o=n.color),"strokeWidth"in n&&r(2,l=n.strokeWidth)},[t,o,l]}class Fe extends I{constructor(e){super(),C(this,e,Ae,Re,N,{size:0,color:1,strokeWidth:2})}}function Ge(f){let e,r;return e=new le({props:{color:"neutral",$$slots:{default:[qe]},$$scope:{ctx:f}}}),e.$on("click",Q),{c(){S(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){M(e,t,o),r=!0},p(t,o){const l={};o&2&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Le(f){let e,r;return e=new fe({props:{label:"Toggle Dark Mode",$$slots:{default:[Oe]},$$scope:{ctx:f}}}),e.$on("click",Q),{c(){S(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){M(e,t,o),r=!0},p(t,o){const l={};o&2&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function qe(f){let e;return{c(){e=P("Toogle Dark Mode")},l(r){e=R(r,"Toogle Dark Mode")},m(r,t){_(r,e,t)},d(r){r&&d(e)}}}function Oe(f){let e,r,t,o,l,n;return r=new Pe({}),l=new Fe({}),{c(){e=V("span"),S(r.$$.fragment),t=L(),o=V("span"),S(l.$$.fragment),this.h()},l(a){e=H(a,"SPAN",{class:!0});var s=m(e);j(r.$$.fragment,s),s.forEach(d),t=q(a),o=H(a,"SPAN",{class:!0});var c=m(o);j(l.$$.fragment,c),c.forEach(d),this.h()},h(){i(e,"class","dark:d4r-hidden"),i(o,"class","d4r-hidden dark:d4r-inline")},m(a,s){_(a,e,s),M(r,e,null),_(a,t,s),_(a,o,s),M(l,o,null),n=!0},p:$,i(a){n||(w(r.$$.fragment,a),w(l.$$.fragment,a),n=!0)},o(a){p(r.$$.fragment,a),p(l.$$.fragment,a),n=!1},d(a){a&&d(e),E(r),a&&d(t),a&&d(o),E(l)}}}function Ze(f){let e,r,t,o;const l=[Le,Ge],n=[];function a(s,c){return s[0]?0:1}return e=a(f),r=n[e]=l[e](f),{c(){r.c(),t=y()},l(s){r.l(s),t=y()},m(s,c){n[e].m(s,c),_(s,t,c),o=!0},p(s,[c]){let b=e;e=a(s),e===b?n[e].p(s,c):(O(),p(n[b],1,1,()=>{n[b]=null}),Z(),r=n[e],r?r.p(s,c):(r=n[e]=l[e](s),r.c()),w(r,1),r.m(t.parentNode,t))},i(s){o||(w(r),o=!0)},o(s){p(r),o=!1},d(s){n[e].d(s),s&&d(t)}}}function Q(){document.documentElement.classList.toggle("d4r-dark")}function Je(f,e,r){let{icon:t=!1}=e;return f.$$set=o=>{"icon"in o&&r(0,t=o.icon)},[t]}class Xe extends I{constructor(e){super(),C(this,e,Je,Ze,N,{icon:0})}}export{Pe as M,Qe as T,Xe as a,de as b,ze as c,Be as d};