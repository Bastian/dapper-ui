import{S as m,i as c,s as f,k as l,w as d,l as u,m as h,x as p,h as i,n as _,b as y,y as g,f as w,t as $,z as k}from"./index-f0bdd1f8.js";import{C as v}from"./CodeBlock-ba732c39.js";function A(n){let t,r,o;return r=new v({props:{class:"d4r-py-2",language:"typescript",code:`import { ${Array.isArray(n[1])?n[1].join(", "):n[1]} } from "@dapper-ui/${n[0]}";`}}),{c(){t=l("div"),d(r.$$.fragment),this.h()},l(e){t=u(e,"DIV",{class:!0});var a=h(t);p(r.$$.fragment,a),a.forEach(i),this.h()},h(){_(t,"class","d4r-my-2")},m(e,a){y(e,t,a),g(r,t,null),o=!0},p(e,[a]){const s={};a&3&&(s.code=`import { ${Array.isArray(e[1])?e[1].join(", "):e[1]} } from "@dapper-ui/${e[0]}";`),r.$set(s)},i(e){o||(w(r.$$.fragment,e),o=!0)},o(e){$(r.$$.fragment,e),o=!1},d(e){e&&i(t),k(r)}}}function b(n,t,r){let{from:o}=t,{what:e}=t;return n.$$set=a=>{"from"in a&&r(0,o=a.from),"what"in a&&r(1,e=a.what)},[o,e]}class j extends m{constructor(t){super(),c(this,t,b,A,f,{from:0,what:1})}}export{j as D};