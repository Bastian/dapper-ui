import{S as f,i as u,s as _,w as p,a as $,k as x,x as h,c as d,l as g,n as r,y as T,b as c,f as q,t as v,z as w,h as m,q as z,r as D,u as S}from"./index-76b41332.js";import{T as b}from"./ProgressBarMeterBase.svelte_svelte_type_style_lang-872d1322.js";function k(s){let t;return{c(){t=z(s[0])},l(n){t=D(n,s[0])},m(n,a){c(n,t,a)},p(n,a){a&1&&S(t,n[0])},d(n){n&&m(t)}}}function y(s){let t,n,a,i;return t=new b({props:{tag:"div",size:"lg",lineHeight:"relaxed",$$slots:{default:[k]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment),n=$(),a=x("meta"),this.h()},l(e){h(t.$$.fragment,e),n=d(e),a=g(e,"META",{name:!0,content:!0}),this.h()},h(){r(a,"name","description"),r(a,"content",s[0])},m(e,o){T(t,e,o),c(e,n,o),c(e,a,o),i=!0},p(e,[o]){const l={};o&3&&(l.$$scope={dirty:o,ctx:e}),t.$set(l),(!i||o&1)&&r(a,"content",e[0])},i(e){i||(q(t.$$.fragment,e),i=!0)},o(e){v(t.$$.fragment,e),i=!1},d(e){w(t,e),e&&m(n),e&&m(a)}}}function A(s,t,n){let{text:a}=t;return s.$$set=i=>{"text"in i&&n(0,a=i.text)},[a]}class H extends f{constructor(t){super(),u(this,t,A,y,_,{text:0})}}export{H as D};