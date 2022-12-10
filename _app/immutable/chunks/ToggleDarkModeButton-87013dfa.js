import{S as B,i as C,s as N,e as y,a as L,Z as X,h as d,c as q,H as p,b as _,g as F,t as w,d as O,f as g,I as x,_ as ee,N as te,$ as re,a0 as oe,J as Z,K as J,L as K,M as U,k as I,l as V,m,n as c,F as v,q as H,G as T,r as P,B as $,w as S,x as E,y as M,z as j}from"./index-ccf69386.js";import{d as ae,w as ne}from"./paths-65ef2094.js";import{B as Y}from"./Text-8a3e5c45.js";function se(l){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l);if(!e)throw new Error(`Invalid hex color ${l}`);return{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}}function le(l,e){const o=[50,100,200,300,400,500,600,700,800,900];return l.map((r,s)=>{const a=se(r),n=`${a.r} ${a.g} ${a.b}`;return`--d4r-color-${e}-${o[s]}: ${n};`})}const fe=[k(230,1,75),k(230,2,59),k(230,4,45),k(230,6,35),k(230,8,25),k(230,10,20),k(230,15,17),k(230,20,11),k(230,25,8),k(230,30,6)];function k(l,e,o){o/=100;const t=e*Math.min(o,1-o)/100,r=s=>{const a=(s+l/30)%12,n=o-t*Math.max(Math.min(a-3,9-a,1),-1);return Math.round(255*n).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}const ce=["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a"],R=["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280","#4b5563","#374151","#1f2937","#111827"],ie=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#52525b","#3f3f46","#27272a","#18181b"],de=["#fafafa","#f5f5f5","#e5e5e5","#d4d4d4","#a3a3a3","#737373","#525252","#404040","#262626","#171717"],ue=["#fafaf9","#f5f5f4","#e7e5e4","#d6d3d1","#a8a29e","#78716c","#57534e","#44403c","#292524","#1c1917"],be=["#fef2f2","#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d"],me=["#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#c2410c","#9a3412","#7c2d12"],he=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#fbbf24","#f59e0b","#d97706","#b45309","#92400e","#78350f"],_e=["#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#eab308","#ca8a04","#a16207","#854d0e","#713f12"],ke=["#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#84cc16","#65a30d","#4d7c0f","#3f6212","#365314"],pe=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d"],we=["#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#10b981","#059669","#047857","#065f46","#064e3b"],ge=["#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a"],ve=["#ecfeff","#cffafe","#a5f3fc","#67e8f9","#22d3ee","#06b6d4","#0891b2","#0e7490","#155e75","#164e63"],Te=["#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0ea5e9","#0284c7","#0369a1","#075985","#0c4a6e"],ye=["#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a"],A=["#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81"],$e=["#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9","#5b21b6","#4c1d95"],Se=["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7","#9333ea","#7e22ce","#6b21a8","#581c87"],Ee=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf","#86198f","#701a75"],Me=["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899","#db2777","#be185d","#9d174d","#831843"],je=["#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#f43f5e","#e11d48","#be123c","#9f1239","#881337"],ze={colors:{primary:A,neutral:R,dark:fe,slate:ce,gray:R,zinc:ie,"neutral-gray":de,stone:ue,red:be,orange:me,amber:he,yellow:_e,lime:ke,green:pe,emerald:we,teal:ge,cyan:ve,sky:Te,blue:ye,indigo:A,violet:$e,purple:Se,fuchsia:Ee,pink:Me,rose:je},radiuses:{button:"base",input:"base",checkbox:"base",slider:{thumb:"full",track:"full"}}};function G(l){let e,o=`<style type="text/css">:root {
${z(l[2].colors).join(`
`)}
${D(l[2]).join(`
`)}
	</style>`,t;return{c(){e=new re(!1),t=y(),this.h()},l(r){e=oe(r,!1),t=y(),this.h()},h(){e.a=t},m(r,s){e.m(o,r,s),_(r,t,s)},p(r,s){s&4&&o!==(o=`<style type="text/css">:root {
${z(r[2].colors).join(`
`)}
${D(r[2]).join(`
`)}
	</style>`)&&e.p(o)},d(r){r&&d(t),r&&e.d()}}}function De(l){let e;const o=l[5].default,t=Z(o,l,l[4],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&16)&&J(t,o,r,r[4],e?U(o,r[4],s,null):K(r[4]),null)},i(r){e||(g(t,r),e=!0)},o(r){w(t,r),e=!1},d(r){t&&t.d(r)}}}function Be(l){let e,o,t;const r=l[5].default,s=Z(r,l,l[4],null);return{c(){e=I("div"),s&&s.c(),this.h()},l(a){e=V(a,"DIV",{class:!0,style:!0});var n=m(e);s&&s.l(n),n.forEach(d),this.h()},h(){c(e,"class",l[0]),c(e,"style",o=""+(z(l[2].colors).join("")+D(l[2]).join("")))},m(a,n){_(a,e,n),s&&s.m(e,null),t=!0},p(a,n){s&&s.p&&(!t||n&16)&&J(s,r,a,a[4],t?U(r,a[4],n,null):K(a[4]),null),(!t||n&1)&&c(e,"class",a[0]),(!t||n&4&&o!==(o=""+(z(a[2].colors).join("")+D(a[2]).join(""))))&&c(e,"style",o)},i(a){t||(g(s,a),t=!0)},o(a){w(s,a),t=!1},d(a){a&&d(e),s&&s.d(a)}}}function Ce(l){let e,o,t,r,s,a,n=!l[1]&&G(l);const f=[Be,De],i=[];function b(u,h){return u[1]?0:1}return t=b(l),r=i[t]=f[t](l),{c(){n&&n.c(),e=y(),o=L(),r.c(),s=y()},l(u){const h=X("svelte-1i1kraa",document.head);n&&n.l(h),e=y(),h.forEach(d),o=q(u),r.l(u),s=y()},m(u,h){n&&n.m(document.head,null),p(document.head,e),_(u,o,h),i[t].m(u,h),_(u,s,h),a=!0},p(u,[h]){u[1]?n&&(n.d(1),n=null):n?n.p(u,h):(n=G(u),n.c(),n.m(e.parentNode,e));let W=t;t=b(u),t===W?i[t].p(u,h):(F(),w(i[W],1,1,()=>{i[W]=null}),O(),r=i[t],r?r.p(u,h):(r=i[t]=f[t](u),r.c()),g(r,1),r.m(s.parentNode,s))},i(u){a||(g(r),a=!0)},o(u){w(r),a=!1},d(u){n&&n.d(u),d(e),u&&d(o),i[t].d(u),u&&d(s)}}}function z(l){return Object.entries(l).flatMap(([e,o])=>le(o,e))}function D(l){function e(o,t){return`--d4r-border-radius-${o}: var(--d4r-border-radius-${t});`}return["--d4r-border-radius-none: 0px;","--d4r-border-radius-sm: 0.125rem;","--d4r-border-radius-base: 0.25rem;","--d4r-border-radius-md: 0.375rem;","--d4r-border-radius-lg: 0.5rem;","--d4r-border-radius-xl: 0.75rem;","--d4r-border-radius-2xl: 1rem;","--d4r-border-radius-3xl: 1.5rem;","--d4r-border-radius-full: 9999px;",e("button",l.radiuses.button),e("input",l.radiuses.input),e("checkbox",l.radiuses.checkbox),e("slider-thumb",l.radiuses.slider.thumb),e("slider-track",l.radiuses.slider.track)]}function Ne(l,e,o){let t,{$$slots:r={},$$scope:s}=e,{class:a=""}=e,{localStyle:n=!1}=e,{theme:f=ze}=e;const i=ne(f);return x(l,i,b=>o(6,t=b)),ee("d4r-theme",ae(i,b=>b)),l.$$set=b=>{"class"in b&&o(0,a=b.class),"localStyle"in b&&o(1,n=b.localStyle),"theme"in b&&o(2,f=b.theme),"$$scope"in b&&o(4,s=b.$$scope)},l.$$.update=()=>{l.$$.dirty&4&&te(i,t=f,t)},[a,n,f,i,s,r]}class Ue extends B{constructor(e){super(),C(this,e,Ne,Ce,N,{class:0,localStyle:1,theme:2})}}function We(l){let e,o,t,r,s;return{c(){e=v("svg"),o=v("desc"),t=H("Download more icon variants from https://tabler-icons.io/i/moon"),r=v("path"),s=v("path"),this.h()},l(a){e=T(a,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var n=m(e);o=T(n,"desc",{});var f=m(o);t=P(f,"Download more icon variants from https://tabler-icons.io/i/moon"),f.forEach(d),r=T(n,"path",{stroke:!0,d:!0,fill:!0}),m(r).forEach(d),s=T(n,"path",{d:!0}),m(s).forEach(d),n.forEach(d),this.h()},h(){c(r,"stroke","none"),c(r,"d","M0 0h24v24H0z"),c(r,"fill","none"),c(s,"d","M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","icon icon-tabler icon-tabler-moon"),c(e,"width",l[0]),c(e,"height",l[0]),c(e,"viewBox","0 0 24 24"),c(e,"stroke",l[1]),c(e,"stroke-width",l[2]),c(e,"fill","none"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round")},m(a,n){_(a,e,n),p(e,o),p(o,t),p(e,r),p(e,s)},p(a,[n]){n&1&&c(e,"width",a[0]),n&1&&c(e,"height",a[0]),n&2&&c(e,"stroke",a[1]),n&4&&c(e,"stroke-width",a[2])},i:$,o:$,d(a){a&&d(e)}}}function Ie(l,e,o){let{size:t=24}=e,{color:r="currentColor"}=e,{strokeWidth:s=2}=e;return l.$$set=a=>{"size"in a&&o(0,t=a.size),"color"in a&&o(1,r=a.color),"strokeWidth"in a&&o(2,s=a.strokeWidth)},[t,r,s]}class Ve extends B{constructor(e){super(),C(this,e,Ie,We,N,{size:0,color:1,strokeWidth:2})}}function He(l){let e,o,t,r,s,a;return{c(){e=v("svg"),o=v("desc"),t=H("Download more icon variants from https://tabler-icons.io/i/sun"),r=v("path"),s=v("circle"),a=v("path"),this.h()},l(n){e=T(n,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var f=m(e);o=T(f,"desc",{});var i=m(o);t=P(i,"Download more icon variants from https://tabler-icons.io/i/sun"),i.forEach(d),r=T(f,"path",{stroke:!0,d:!0,fill:!0}),m(r).forEach(d),s=T(f,"circle",{cx:!0,cy:!0,r:!0}),m(s).forEach(d),a=T(f,"path",{d:!0}),m(a).forEach(d),f.forEach(d),this.h()},h(){c(r,"stroke","none"),c(r,"d","M0 0h24v24H0z"),c(r,"fill","none"),c(s,"cx","12"),c(s,"cy","12"),c(s,"r","4"),c(a,"d","M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","icon icon-tabler icon-tabler-sun"),c(e,"width",l[0]),c(e,"height",l[0]),c(e,"viewBox","0 0 24 24"),c(e,"stroke",l[1]),c(e,"stroke-width",l[2]),c(e,"fill","none"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round")},m(n,f){_(n,e,f),p(e,o),p(o,t),p(e,r),p(e,s),p(e,a)},p(n,[f]){f&1&&c(e,"width",n[0]),f&1&&c(e,"height",n[0]),f&2&&c(e,"stroke",n[1]),f&4&&c(e,"stroke-width",n[2])},i:$,o:$,d(n){n&&d(e)}}}function Pe(l,e,o){let{size:t=24}=e,{color:r="currentColor"}=e,{strokeWidth:s=2}=e;return l.$$set=a=>{"size"in a&&o(0,t=a.size),"color"in a&&o(1,r=a.color),"strokeWidth"in a&&o(2,s=a.strokeWidth)},[t,r,s]}class Re extends B{constructor(e){super(),C(this,e,Pe,He,N,{size:0,color:1,strokeWidth:2})}}function Ae(l){let e,o;return e=new Y({props:{color:"neutral",$$slots:{default:[Le]},$$scope:{ctx:l}}}),e.$on("click",Q),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){M(e,t,r),o=!0},p(t,r){const s={};r&2&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){w(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function Ge(l){let e,o;return e=new Y({props:{class:"d4r-w-10 !d4r-p-0",variant:"subtle",$$slots:{default:[qe]},$$scope:{ctx:l}}}),e.$on("click",Q),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,r){M(e,t,r),o=!0},p(t,r){const s={};r&2&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){w(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function Le(l){let e;return{c(){e=H("Toogle Dark Mode")},l(o){e=P(o,"Toogle Dark Mode")},m(o,t){_(o,e,t)},d(o){o&&d(e)}}}function qe(l){let e,o,t,r,s,a;return o=new Ve({}),s=new Re({}),{c(){e=I("span"),S(o.$$.fragment),t=L(),r=I("span"),S(s.$$.fragment),this.h()},l(n){e=V(n,"SPAN",{class:!0});var f=m(e);E(o.$$.fragment,f),f.forEach(d),t=q(n),r=V(n,"SPAN",{class:!0});var i=m(r);E(s.$$.fragment,i),i.forEach(d),this.h()},h(){c(e,"class","dark:d4r-hidden"),c(r,"class","d4r-hidden dark:d4r-inline")},m(n,f){_(n,e,f),M(o,e,null),_(n,t,f),_(n,r,f),M(s,r,null),a=!0},p:$,i(n){a||(g(o.$$.fragment,n),g(s.$$.fragment,n),a=!0)},o(n){w(o.$$.fragment,n),w(s.$$.fragment,n),a=!1},d(n){n&&d(e),j(o),n&&d(t),n&&d(r),j(s)}}}function Fe(l){let e,o,t,r;const s=[Ge,Ae],a=[];function n(f,i){return f[0]?0:1}return e=n(l),o=a[e]=s[e](l),{c(){o.c(),t=y()},l(f){o.l(f),t=y()},m(f,i){a[e].m(f,i),_(f,t,i),r=!0},p(f,[i]){let b=e;e=n(f),e===b?a[e].p(f,i):(F(),w(a[b],1,1,()=>{a[b]=null}),O(),o=a[e],o?o.p(f,i):(o=a[e]=s[e](f),o.c()),g(o,1),o.m(t.parentNode,t))},i(f){r||(g(o),r=!0)},o(f){w(o),r=!1},d(f){a[e].d(f),f&&d(t)}}}function Q(){document.documentElement.classList.toggle("d4r-dark")}function Oe(l,e,o){let{icon:t=!1}=e;return l.$$set=r=>{"icon"in r&&o(0,t=r.icon)},[t]}class Ye extends B{constructor(e){super(),C(this,e,Oe,Fe,N,{icon:0})}}export{Ue as T,Ye as a,pe as b,ce as c,ze as d};
