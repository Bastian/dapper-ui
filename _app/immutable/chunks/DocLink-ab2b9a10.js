import{S as i,i as u,s as c,w as _,x as m,y as p,f,t as l,z as $,J as d,K as g,L as h,M as w}from"./index-f0bdd1f8.js";import{T as y}from"./TextField.svelte_svelte_type_style_lang-60c645ce.js";function D(o){let n;const s=o[1].default,e=d(s,o,o[2],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),n=!0},p(t,r){e&&e.p&&(!n||r&4)&&g(e,s,t,t[2],n?w(s,t[2],r,null):h(t[2]),null)},i(t){n||(f(e,t),n=!0)},o(t){l(e,t),n=!1},d(t){e&&e.d(t)}}}function L(o){let n,s;return n=new y({props:{tag:"a",color:"primary",class:"d4r-underline d4r-decoration-primary-500 d4r-underline-offset-2",href:o[0],$$slots:{default:[D]},$$scope:{ctx:o}}}),{c(){_(n.$$.fragment)},l(e){m(n.$$.fragment,e)},m(e,t){p(n,e,t),s=!0},p(e,[t]){const r={};t&1&&(r.href=e[0]),t&4&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){s||(f(n.$$.fragment,e),s=!0)},o(e){l(n.$$.fragment,e),s=!1},d(e){$(n,e)}}}function S(o,n,s){let{$$slots:e={},$$scope:t}=n,{href:r}=n;return o.$$set=a=>{"href"in a&&s(0,r=a.href),"$$scope"in a&&s(2,t=a.$$scope)},[r,e,t]}class k extends i{constructor(n){super(),u(this,n,S,L,c,{href:0})}}export{k as D};