import{S as O,i as Q,s as J,e as A,b as N,f as v,t as w,h as z,O as te,J as P,P as U,k as T,a as V,l as S,m as E,c as X,Q as i,R as I,T as R,H,U as K,g as Y,d as F,K as B,L as C,M as q,V as le,D as ne,W,w as se,x as ie,y as ae,z as re,X as G,Y as oe}from"./index-ccf69386.js";function D(l,e,a="primary"){return l===void 0||l===a?"":e.map(r=>`--d4r-color-${a}-${r}: var(--d4r-color-${l}-${r});`).join("")}function Z(l,e){return l===void 0||l===e?"":`--d4r-border-radius-${e}: var(--d4r-border-radius-${l});`}const ue=l=>({}),p=l=>({}),fe=l=>({}),x=l=>({});function $(l){let e,a;const r=l[12]["icon-start"],t=P(r,l,l[11],x);return{c(){e=T("span"),t&&t.c()},l(n){e=S(n,"SPAN",{});var u=E(e);t&&t.l(u),u.forEach(z)},m(n,u){N(n,e,u),t&&t.m(e,null),a=!0},p(n,u){t&&t.p&&(!a||u&2048)&&B(t,r,n,n[11],a?q(r,n[11],u,fe):C(n[11]),x)},i(n){a||(v(t,n),a=!0)},o(n){w(t,n),a=!1},d(n){n&&z(e),t&&t.d(n)}}}function ee(l){let e,a;const r=l[12]["icon-end"],t=P(r,l,l[11],p);return{c(){e=T("span"),t&&t.c()},l(n){e=S(n,"SPAN",{});var u=E(e);t&&t.l(u),u.forEach(z)},m(n,u){N(n,e,u),t&&t.m(e,null),a=!0},p(n,u){t&&t.p&&(!a||u&2048)&&B(t,r,n,n[11],a?q(r,n[11],u,ue):C(n[11]),p)},i(n){a||(v(t,n),a=!0)},o(n){w(t,n),a=!1},d(n){n&&z(e),t&&t.d(n)}}}function L(l){let e,a,r,t,n,u,_,o,b,d=l[10]["icon-start"]&&$(l);const k=l[12].default,c=P(k,l,l[11],null);let h=l[10]["icon-end"]&&ee(l),y=[{href:l[6]},{class:n="button "+l[9]+" svelte-12orqwa"},{style:u=""+(D(l[2],[50,300,500,600,700,800])+Z(l[4],"button"))},{disabled:l[1]},{type:"button"}],g={};for(let s=0;s<y.length;s+=1)g=U(g,y[s]);return{c(){e=T(l[6]?"a":"button"),d&&d.c(),a=V(),r=T("span"),c&&c.c(),t=V(),h&&h.c(),this.h()},l(s){e=S(s,((l[6]?"a":"button")||"null").toUpperCase(),{href:!0,class:!0,style:!0,disabled:!0,type:!0});var m=E(e);d&&d.l(m),a=X(m),r=S(m,"SPAN",{});var j=E(r);c&&c.l(j),j.forEach(z),t=X(m),h&&h.l(m),m.forEach(z),this.h()},h(){i(r,"d4r-truncate",!l[5]),/-/.test(l[6]?"a":"button")?I(e,g):R(e,g),i(e,"d4r-w-full",l[0]),i(e,"size-base",l[3]==="base"),i(e,"size-sm",l[3]==="sm"),i(e,"outline",l[7]==="outline"||l[7]==="outline-dashed"),i(e,"outline-dashed",l[7]==="outline-dashed"),i(e,"solid",l[7]==="solid"),i(e,"light",l[7]==="light"),i(e,"subtle",l[7]==="subtle"),i(e,"icon-start",l[10]["icon-start"]),i(e,"icon-end",l[10]["icon-end"]),i(e,"d4r-justify-start",l[8]==="start"),i(e,"d4r-justify-center",l[8]==="center"),i(e,"d4r-justify-end",l[8]==="end"),i(e,"d4r-truncate",!l[5])},m(s,m){N(s,e,m),d&&d.m(e,null),H(e,a),H(e,r),c&&c.m(r,null),H(e,t),h&&h.m(e,null),_=!0,o||(b=[K(e,"click",l[13]),K(e,"keydown",l[14]),K(e,"keyup",l[15])],o=!0)},p(s,m){s[10]["icon-start"]?d?(d.p(s,m),m&1024&&v(d,1)):(d=$(s),d.c(),v(d,1),d.m(e,a)):d&&(Y(),w(d,1,1,()=>{d=null}),F()),c&&c.p&&(!_||m&2048)&&B(c,k,s,s[11],_?q(k,s[11],m,null):C(s[11]),null),(!_||m&32)&&i(r,"d4r-truncate",!s[5]),s[10]["icon-end"]?h?(h.p(s,m),m&1024&&v(h,1)):(h=ee(s),h.c(),v(h,1),h.m(e,null)):h&&(Y(),w(h,1,1,()=>{h=null}),F()),g=le(y,[(!_||m&64)&&{href:s[6]},(!_||m&512&&n!==(n="button "+s[9]+" svelte-12orqwa"))&&{class:n},(!_||m&20&&u!==(u=""+(D(s[2],[50,300,500,600,700,800])+Z(s[4],"button"))))&&{style:u},(!_||m&2)&&{disabled:s[1]},{type:"button"}]),/-/.test(s[6]?"a":"button")?I(e,g):R(e,g),i(e,"d4r-w-full",s[0]),i(e,"size-base",s[3]==="base"),i(e,"size-sm",s[3]==="sm"),i(e,"outline",s[7]==="outline"||s[7]==="outline-dashed"),i(e,"outline-dashed",s[7]==="outline-dashed"),i(e,"solid",s[7]==="solid"),i(e,"light",s[7]==="light"),i(e,"subtle",s[7]==="subtle"),i(e,"icon-start",s[10]["icon-start"]),i(e,"icon-end",s[10]["icon-end"]),i(e,"d4r-justify-start",s[8]==="start"),i(e,"d4r-justify-center",s[8]==="center"),i(e,"d4r-justify-end",s[8]==="end"),i(e,"d4r-truncate",!s[5])},i(s){_||(v(d),v(c,s),v(h),_=!0)},o(s){w(d),w(c,s),w(h),_=!1},d(s){s&&z(e),d&&d.d(),c&&c.d(s),h&&h.d(),o=!1,ne(b)}}}function de(l){let e=l[6]?"a":"button",a,r,t=(l[6]?"a":"button")&&L(l);return{c(){t&&t.c(),a=A()},l(n){t&&t.l(n),a=A()},m(n,u){t&&t.m(n,u),N(n,a,u),r=!0},p(n,[u]){n[6],e?J(e,n[6]?"a":"button")?(t.d(1),t=L(n),t.c(),t.m(a.parentNode,a)):t.p(n,u):(t=L(n),t.c(),t.m(a.parentNode,a)),e=n[6]?"a":"button"},i(n){r||(v(t),r=!0)},o(n){w(t),r=!1},d(n){n&&z(a),t&&t.d(n)}}}function _e(l,e,a){let{$$slots:r={},$$scope:t}=e;const n=te(r);let{fullWidth:u=!1}=e,{disabled:_=!1}=e,{color:o=void 0}=e,{size:b="base"}=e,{radius:d=void 0}=e,{noTruncate:k=!1}=e,{href:c=void 0}=e,{variant:h="solid"}=e,{contentJustify:y="center"}=e,{class:g=""}=e;function s(f){W.call(this,l,f)}function m(f){W.call(this,l,f)}function j(f){W.call(this,l,f)}return l.$$set=f=>{"fullWidth"in f&&a(0,u=f.fullWidth),"disabled"in f&&a(1,_=f.disabled),"color"in f&&a(2,o=f.color),"size"in f&&a(3,b=f.size),"radius"in f&&a(4,d=f.radius),"noTruncate"in f&&a(5,k=f.noTruncate),"href"in f&&a(6,c=f.href),"variant"in f&&a(7,h=f.variant),"contentJustify"in f&&a(8,y=f.contentJustify),"class"in f&&a(9,g=f.class),"$$scope"in f&&a(11,t=f.$$scope)},[u,_,o,b,d,k,c,h,y,g,n,t,r,s,m,j]}class he extends O{constructor(e){super(),Q(this,e,_e,de,J,{fullWidth:0,disabled:1,color:2,size:3,radius:4,noTruncate:5,href:6,variant:7,contentJustify:8,class:9})}}function me(l){let e;const a=l[8].default,r=P(a,l,l[12],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,n){r&&r.p&&(!e||n&4096)&&B(r,a,t,t[12],e?q(a,t[12],n,null):C(t[12]),null)},i(t){e||(v(r,t),e=!0)},o(t){w(r,t),e=!1},d(t){r&&r.d(t)}}}function be(l){let e,a;return e=new he({props:{fullWidth:l[0],disabled:l[1],color:l[2],size:l[3],radius:l[4],href:l[5],variant:l[6],class:`d4r-h-10 d4r-w-10 !d4r-p-0 
    `+(l[3]==="base"||l[3]===void 0?"!d4r-h-10 !d4r-w-10 ":"")+`
    `+(l[3]==="sm"?"!d4r-h-9 !d4r-w-9 ":"")+`
    `+l[7],$$slots:{default:[me]},$$scope:{ctx:l}}}),e.$on("click",l[9]),e.$on("keydown",l[10]),e.$on("keyup",l[11]),{c(){se(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,t){ae(e,r,t),a=!0},p(r,[t]){const n={};t&1&&(n.fullWidth=r[0]),t&2&&(n.disabled=r[1]),t&4&&(n.color=r[2]),t&8&&(n.size=r[3]),t&16&&(n.radius=r[4]),t&32&&(n.href=r[5]),t&64&&(n.variant=r[6]),t&136&&(n.class=`d4r-h-10 d4r-w-10 !d4r-p-0 
    `+(r[3]==="base"||r[3]===void 0?"!d4r-h-10 !d4r-w-10 ":"")+`
    `+(r[3]==="sm"?"!d4r-h-9 !d4r-w-9 ":"")+`
    `+r[7]),t&4096&&(n.$$scope={dirty:t,ctx:r}),e.$set(n)},i(r){a||(v(e.$$.fragment,r),a=!0)},o(r){w(e.$$.fragment,r),a=!1},d(r){re(e,r)}}}function ce(l,e,a){let{$$slots:r={},$$scope:t}=e,{fullWidth:n=!1}=e,{disabled:u=!1}=e,{color:_=void 0}=e,{size:o="base"}=e,{radius:b=void 0}=e,{href:d=void 0}=e,{variant:k="subtle"}=e,{class:c=""}=e;function h(s){W.call(this,l,s)}function y(s){W.call(this,l,s)}function g(s){W.call(this,l,s)}return l.$$set=s=>{"fullWidth"in s&&a(0,n=s.fullWidth),"disabled"in s&&a(1,u=s.disabled),"color"in s&&a(2,_=s.color),"size"in s&&a(3,o=s.size),"radius"in s&&a(4,b=s.radius),"href"in s&&a(5,d=s.href),"variant"in s&&a(6,k=s.variant),"class"in s&&a(7,c=s.class),"$$scope"in s&&a(12,t=s.$$scope)},[n,u,_,o,b,d,k,c,r,h,y,g,t]}class we extends O{constructor(e){super(),Q(this,e,ce,be,J,{fullWidth:0,disabled:1,color:2,size:3,radius:4,href:5,variant:6,class:7})}}function M(l){let e,a,r;const t=l[11].default,n=P(t,l,l[10],null);let u=[{class:l[0]},{style:a=D(l[2],l[8],"neutral")},l[9]],_={};for(let o=0;o<u.length;o+=1)_=U(_,u[o]);return{c(){e=T(l[5]),n&&n.c(),this.h()},l(o){e=S(o,(l[5]||"null").toUpperCase(),{class:!0,style:!0});var b=E(e);n&&n.l(b),b.forEach(z),this.h()},h(){/-/.test(l[5])?I(e,_):R(e,_),i(e,"contrast-highest",l[1]==="highest"),i(e,"contrast-higher",l[1]==="higher"),i(e,"contrast-high",l[1]==="high"),i(e,"contrast-base",l[1]==="base"||l[1]===void 0),i(e,"contrast-low",l[1]==="low"),i(e,"contrast-lower",l[1]==="lower"),i(e,"contrast-lowest",l[1]==="lowest"),i(e,"d4r-text-xs",l[3]==="xs"),i(e,"d4r-text-sm",l[3]==="sm"),i(e,"d4r-text-base",l[3]==="base"),i(e,"d4r-text-lg",l[3]==="lg"),i(e,"d4r-text-xl",l[3]==="xl"),i(e,"d4r-text-2xl",l[3]==="2xl"),i(e,"d4r-text-3xl",l[3]==="3xl"),i(e,"d4r-text-4xl",l[3]==="4xl"),i(e,"d4r-text-5xl",l[3]==="5xl"),i(e,"d4r-text-6xl",l[3]==="6xl"),i(e,"d4r-text-7xl",l[3]==="7xl"),i(e,"d4r-text-8xl",l[3]==="8xl"),i(e,"d4r-text-9xl",l[3]==="9xl"),i(e,"d4r-max-w-prose",l[6]),i(e,"d4r-font-thin",l[4]==="thin"),i(e,"d4r-font-extralight",l[4]==="extralight"),i(e,"d4r-font-light",l[4]==="light"),i(e,"d4r-font-normal",l[4]==="normal"),i(e,"d4r-font-medium",l[4]==="medium"),i(e,"d4r-font-semibold",l[4]==="semibold"),i(e,"d4r-font-bold",l[4]==="bold"),i(e,"d4r-font-extrabold",l[4]==="extrabold"),i(e,"d4r-font-black",l[4]==="black"),i(e,"d4r-truncate",l[7]),i(e,"svelte-1ltnbjr",!0)},m(o,b){N(o,e,b),n&&n.m(e,null),r=!0},p(o,b){n&&n.p&&(!r||b&1024)&&B(n,t,o,o[10],r?q(t,o[10],b,null):C(o[10]),null),_=le(u,[(!r||b&1)&&{class:o[0]},(!r||b&260&&a!==(a=D(o[2],o[8],"neutral")))&&{style:a},b&512&&o[9]]),/-/.test(o[5])?I(e,_):R(e,_),i(e,"contrast-highest",o[1]==="highest"),i(e,"contrast-higher",o[1]==="higher"),i(e,"contrast-high",o[1]==="high"),i(e,"contrast-base",o[1]==="base"||o[1]===void 0),i(e,"contrast-low",o[1]==="low"),i(e,"contrast-lower",o[1]==="lower"),i(e,"contrast-lowest",o[1]==="lowest"),i(e,"d4r-text-xs",o[3]==="xs"),i(e,"d4r-text-sm",o[3]==="sm"),i(e,"d4r-text-base",o[3]==="base"),i(e,"d4r-text-lg",o[3]==="lg"),i(e,"d4r-text-xl",o[3]==="xl"),i(e,"d4r-text-2xl",o[3]==="2xl"),i(e,"d4r-text-3xl",o[3]==="3xl"),i(e,"d4r-text-4xl",o[3]==="4xl"),i(e,"d4r-text-5xl",o[3]==="5xl"),i(e,"d4r-text-6xl",o[3]==="6xl"),i(e,"d4r-text-7xl",o[3]==="7xl"),i(e,"d4r-text-8xl",o[3]==="8xl"),i(e,"d4r-text-9xl",o[3]==="9xl"),i(e,"d4r-max-w-prose",o[6]),i(e,"d4r-font-thin",o[4]==="thin"),i(e,"d4r-font-extralight",o[4]==="extralight"),i(e,"d4r-font-light",o[4]==="light"),i(e,"d4r-font-normal",o[4]==="normal"),i(e,"d4r-font-medium",o[4]==="medium"),i(e,"d4r-font-semibold",o[4]==="semibold"),i(e,"d4r-font-bold",o[4]==="bold"),i(e,"d4r-font-extrabold",o[4]==="extrabold"),i(e,"d4r-font-black",o[4]==="black"),i(e,"d4r-truncate",o[7]),i(e,"svelte-1ltnbjr",!0)},i(o){r||(v(n,o),r=!0)},o(o){w(n,o),r=!1},d(o){o&&z(e),n&&n.d(o)}}}function ge(l){let e=l[5],a,r,t=l[5]&&M(l);return{c(){t&&t.c(),a=A()},l(n){t&&t.l(n),a=A()},m(n,u){t&&t.m(n,u),N(n,a,u),r=!0},p(n,[u]){n[5]?e?J(e,n[5])?(t.d(1),t=M(n),t.c(),t.m(a.parentNode,a)):t.p(n,u):(t=M(n),t.c(),t.m(a.parentNode,a)):e&&(t.d(1),t=null),e=n[5]},i(n){r||(v(t),r=!0)},o(n){w(t),r=!1},d(n){n&&z(a),t&&t.d(n)}}}function ve(l,e,a){const r=["class","contrast","color","size","weight","tag","prose","truncate"];let t=G(e,r),{$$slots:n={},$$scope:u}=e,{class:_=""}=e,{contrast:o="base"}=e,{color:b="gray"}=e,{size:d="base"}=e,{weight:k="normal"}=e,{tag:c="span"}=e,{prose:h=!1}=e,{truncate:y=!1}=e,g;return l.$$set=s=>{e=U(U({},e),oe(s)),a(9,t=G(e,r)),"class"in s&&a(0,_=s.class),"contrast"in s&&a(1,o=s.contrast),"color"in s&&a(2,b=s.color),"size"in s&&a(3,d=s.size),"weight"in s&&a(4,k=s.weight),"tag"in s&&a(5,c=s.tag),"prose"in s&&a(6,h=s.prose),"truncate"in s&&a(7,y=s.truncate),"$$scope"in s&&a(10,u=s.$$scope)},l.$$.update=()=>{l.$$.dirty&2&&a(8,g=o==="higher"?[50,900]:o==="high"?[100,800]:o==="base"?[200,700]:o==="low"?[300,600]:o==="lower"?[400,500]:o==="lowest"?[500,400]:[200,700])},[_,o,b,d,k,c,h,y,g,t,u,n]}class ye extends O{constructor(e){super(),Q(this,e,ve,ge,J,{class:0,contrast:1,color:2,size:3,weight:4,tag:5,prose:6,truncate:7})}}export{he as B,we as I,ye as T,Z as a,D as o};
