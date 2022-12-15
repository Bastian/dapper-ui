import{S as q,i as A,s as C,F as w,q as F,G as k,m as p,r as L,h as d,n,b as H,H as _,B as M,w as I,x as z,y as T,f as b,t as x,z as B,I as G,J,k as E,a as W,l as D,c as j,K,L as N,M as P,N as R}from"../../chunks/index-5f858542.js";import{w as Q,b as X}from"../../chunks/paths-2904247a.js";import{I as Y}from"../../chunks/IconButton-e22cef0d.js";import{T as Z}from"../../chunks/Text-c6051a60.js";import{T as ee,d as U,a as te}from"../../chunks/ToggleDarkModeButton-13ae38dd.js";function re(a){let e,r,t,s,u,o,c;return{c(){e=w("svg"),r=w("desc"),t=F(`Download more icon variants from https://tabler-icons.io/i/menu-2
    `),s=w("path"),u=w("line"),o=w("line"),c=w("line"),this.h()},l(l){e=k(l,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var f=p(e);r=k(f,"desc",{});var $=p(r);t=L($,`Download more icon variants from https://tabler-icons.io/i/menu-2
    `),$.forEach(d),s=k(f,"path",{stroke:!0,d:!0,fill:!0}),p(s).forEach(d),u=k(f,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),p(u).forEach(d),o=k(f,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),p(o).forEach(d),c=k(f,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),p(c).forEach(d),f.forEach(d),this.h()},h(){n(s,"stroke","none"),n(s,"d","M0 0h24v24H0z"),n(s,"fill","none"),n(u,"x1","4"),n(u,"y1","6"),n(u,"x2","20"),n(u,"y2","6"),n(o,"x1","4"),n(o,"y1","12"),n(o,"x2","20"),n(o,"y2","12"),n(c,"x1","4"),n(c,"y1","18"),n(c,"x2","20"),n(c,"y2","18"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"class","icon icon-tabler icon-tabler-menu-2"),n(e,"width",a[0]),n(e,"height",a[0]),n(e,"viewBox","0 0 24 24"),n(e,"stroke",a[1]),n(e,"stroke-width",a[2]),n(e,"fill","none"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round")},m(l,f){H(l,e,f),_(e,r),_(r,t),_(e,s),_(e,u),_(e,o),_(e,c)},p(l,[f]){f&1&&n(e,"width",l[0]),f&1&&n(e,"height",l[0]),f&2&&n(e,"stroke",l[1]),f&4&&n(e,"stroke-width",l[2])},i:M,o:M,d(l){l&&d(e)}}}function se(a,e,r){let{size:t=24}=e,{color:s="currentColor"}=e,{strokeWidth:u=2}=e;return a.$$set=o=>{"size"in o&&r(0,t=o.size),"color"in o&&r(1,s=o.color),"strokeWidth"in o&&r(2,u=o.strokeWidth)},[t,s,u]}class ne extends q{constructor(e){super(),A(this,e,se,re,C,{size:0,color:1,strokeWidth:2})}}function oe(a){let e,r;return e=new ne({}),{c(){I(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function ae(a){let e,r;return{c(){e=E("a"),r=F("Dapper UI"),this.h()},l(t){e=D(t,"A",{href:!0});var s=p(e);r=L(s,"Dapper UI"),s.forEach(d),this.h()},h(){n(e,"href",X+"/")},m(t,s){H(t,e,s),_(e,r)},p:M,d(t){t&&d(e)}}}function le(a){let e,r,t,s,u,o,c,l,f,$,v;s=new Y({props:{label:"Toggle drawer",variant:"subtle",$$slots:{default:[oe]},$$scope:{ctx:a}}}),s.$on("click",a[2]),o=new Z({props:{size:"lg",weight:"bold",contrast:"higher",$$slots:{default:[ae]},$$scope:{ctx:a}}}),l=new te({props:{icon:!0}});const O=a[1].default,h=J(O,a,a[3],null);return{c(){e=E("div"),r=E("header"),t=E("div"),I(s.$$.fragment),u=W(),I(o.$$.fragment),c=W(),I(l.$$.fragment),f=W(),$=E("div"),h&&h.c(),this.h()},l(i){e=D(i,"DIV",{class:!0});var m=p(e);r=D(m,"HEADER",{class:!0});var g=p(r);t=D(g,"DIV",{class:!0});var y=p(t);z(s.$$.fragment,y),y.forEach(d),u=j(g),z(o.$$.fragment,g),c=j(g),z(l.$$.fragment,g),g.forEach(d),f=j(m),$=D(m,"DIV",{class:!0});var S=p($);h&&h.l(S),S.forEach(d),m.forEach(d),this.h()},h(){n(t,"class","d4r-flex d4r-items-center d4r-gap-4 lg:d4r-hidden"),n(r,"class","d4r-flex d4r-w-full d4r-justify-between d4r-px-8 svelte-1pp87gv"),n($,"class","d4r-h-full d4r-flex-grow d4r-pt-14"),n(e,"class","d4r-flex d4r-h-full d4r-flex-col")},m(i,m){H(i,e,m),_(e,r),_(r,t),T(s,t,null),_(r,u),T(o,r,null),_(r,c),T(l,r,null),_(e,f),_(e,$),h&&h.m($,null),v=!0},p(i,m){const g={};m&8&&(g.$$scope={dirty:m,ctx:i}),s.$set(g);const y={};m&8&&(y.$$scope={dirty:m,ctx:i}),o.$set(y),h&&h.p&&(!v||m&8)&&K(h,O,i,i[3],v?P(O,i[3],m,null):N(i[3]),null)},i(i){v||(b(s.$$.fragment,i),b(o.$$.fragment,i),b(l.$$.fragment,i),b(h,i),v=!0)},o(i){x(s.$$.fragment,i),x(o.$$.fragment,i),x(l.$$.fragment,i),x(h,i),v=!1},d(i){i&&d(e),B(s),B(o),B(l),h&&h.d(i)}}}function ie(a){let e,r;return e=new ee({props:{theme:{...U,font:{...U.font,default:"'Open Sans', sans-serif",code:"'Fira Mono', monospace"}},$$slots:{default:[le]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,[s]){const u={};s&9&&(u.$$scope={dirty:s,ctx:t}),e.$set(u)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}let V=Q(!1);function ue(a,e,r){let t,s=M;G(a,V,l=>r(0,t=l)),a.$$.on_destroy.push(()=>s());let{$$slots:u={},$$scope:o}=e;const c=()=>R(V,t=!t,t);return a.$$set=l=>{"$$scope"in l&&r(3,o=l.$$scope)},[t,u,c,o]}class _e extends q{constructor(e){super(),A(this,e,ue,ie,C,{})}}export{_e as default,V as drawerOpen};
