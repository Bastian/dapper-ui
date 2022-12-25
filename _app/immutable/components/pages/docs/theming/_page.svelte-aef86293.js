import{S as q,i as O,s as H,w as l,a as b,x as i,c as D,y as u,b as c,f as d,t as _,z as g,h as p,q as w,k as U,r as x,l as E,m as k,H as z,B as v}from"../../../../chunks/index-76b41332.js";import{D as C,a as I,S as j}from"../../../../chunks/DocSection-c2e659e6.js";import{D as Y}from"../../../../chunks/DocContent-ad09106b.js";import{D as A}from"../../../../chunks/DocImport-e2d64a69.js";import{D as F}from"../../../../chunks/DocIntoText-e5459aa9.js";import{D as y}from"../../../../chunks/DocSectionText-0ce854d6.js";import{D as G}from"../../../../chunks/DocTitle-b2966dac.js";function J(a){let t,r,o,s;return{c(){t=w(`Before using any Dapper UI components, you need to wrap your app in the
			`),r=U("code"),o=w("ThemeProvider"),s=w(` component. This component is responsible for providing the theme to
			all child components and loading the default CSS styles.`)},l(n){t=x(n,`Before using any Dapper UI components, you need to wrap your app in the
			`),r=E(n,"CODE",{});var $=k(r);o=x($,"ThemeProvider"),$.forEach(p),s=x(n,` component. This component is responsible for providing the theme to
			all child components and loading the default CSS styles.`)},m(n,$){c(n,t,$),c(n,r,$),z(r,o),c(n,s,$)},p:v,d(n){n&&p(t),n&&p(r),n&&p(s)}}}function K(a){let t,r;return t=new j({props:{code:`<ThemeProvider>
    <Button>Example</Button>
</ThemeProvider>`}}),{c(){l(t.$$.fragment)},l(o){i(t.$$.fragment,o)},m(o,s){u(t,o,s),r=!0},p:v,i(o){r||(d(t.$$.fragment,o),r=!0)},o(o){_(t.$$.fragment,o),r=!1},d(o){g(t,o)}}}function L(a){let t,r,o,s;return{c(){t=w(`Dapper UI comes with a default theme but can be customized by passing a custom theme object to
			the `),r=U("code"),o=w("theme"),s=w(" prop.")},l(n){t=x(n,`Dapper UI comes with a default theme but can be customized by passing a custom theme object to
			the `),r=E(n,"CODE",{});var $=k(r);o=x($,"theme"),$.forEach(p),s=x(n," prop.")},m(n,$){c(n,t,$),c(n,r,$),z(r,o),c(n,s,$)},p:v,d(n){n&&p(t),n&&p(r),n&&p(s)}}}function M(a){let t,r;return t=new j({props:{code:`<script lang="ts">
    import { ThemeProvider, Button } from '@dapper-ui/core';
    import type { DapperUiTheme } from '@dapper-ui/core';

    const myTheme: DapperUiTheme = { /* ... */ }
<\/script>
				
<ThemeProvider theme={myTheme}>
    <Button>Example</Button>
</ThemeProvider>`}}),{c(){l(t.$$.fragment)},l(o){i(t.$$.fragment,o)},m(o,s){u(t,o,s),r=!0},p:v,i(o){r||(d(t.$$.fragment,o),r=!0)},o(o){_(t.$$.fragment,o),r=!1},d(o){g(t,o)}}}function N(a){let t,r,o,s,n,$,f,h;return t=new y({props:{$$slots:{default:[J]},$$scope:{ctx:a}}}),o=new I({props:{$$slots:{default:[K]},$$scope:{ctx:a}}}),n=new y({props:{$$slots:{default:[L]},$$scope:{ctx:a}}}),f=new I({props:{$$slots:{default:[M]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment),r=b(),l(o.$$.fragment),s=b(),l(n.$$.fragment),$=b(),l(f.$$.fragment)},l(e){i(t.$$.fragment,e),r=D(e),i(o.$$.fragment,e),s=D(e),i(n.$$.fragment,e),$=D(e),i(f.$$.fragment,e)},m(e,m){u(t,e,m),c(e,r,m),u(o,e,m),c(e,s,m),u(n,e,m),c(e,$,m),u(f,e,m),h=!0},p(e,m){const T={};m&1&&(T.$$scope={dirty:m,ctx:e}),t.$set(T);const B={};m&1&&(B.$$scope={dirty:m,ctx:e}),o.$set(B);const P={};m&1&&(P.$$scope={dirty:m,ctx:e}),n.$set(P);const S={};m&1&&(S.$$scope={dirty:m,ctx:e}),f.$set(S)},i(e){h||(d(t.$$.fragment,e),d(o.$$.fragment,e),d(n.$$.fragment,e),d(f.$$.fragment,e),h=!0)},o(e){_(t.$$.fragment,e),_(o.$$.fragment,e),_(n.$$.fragment,e),_(f.$$.fragment,e),h=!1},d(e){g(t,e),e&&p(r),g(o,e),e&&p(s),g(n,e),e&&p($),g(f,e)}}}function Q(a){let t;return{c(){t=w("tbd")},l(r){t=x(r,"tbd")},m(r,o){c(r,t,o)},d(r){r&&p(t)}}}function R(a){let t,r;return t=new y({props:{$$slots:{default:[Q]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment)},l(o){i(t.$$.fragment,o)},m(o,s){u(t,o,s),r=!0},p(o,s){const n={};s&1&&(n.$$scope={dirty:s,ctx:o}),t.$set(n)},i(o){r||(d(t.$$.fragment,o),r=!0)},o(o){_(t.$$.fragment,o),r=!1},d(o){g(t,o)}}}function V(a){let t,r,o,s;return t=new C({props:{title:"ThemeProvider",$$slots:{default:[N]},$$scope:{ctx:a}}}),o=new C({props:{title:"Colors",$$slots:{default:[R]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment),r=b(),l(o.$$.fragment)},l(n){i(t.$$.fragment,n),r=D(n),i(o.$$.fragment,n)},m(n,$){u(t,n,$),c(n,r,$),u(o,n,$),s=!0},p(n,$){const f={};$&1&&(f.$$scope={dirty:$,ctx:n}),t.$set(f);const h={};$&1&&(h.$$scope={dirty:$,ctx:n}),o.$set(h)},i(n){s||(d(t.$$.fragment,n),d(o.$$.fragment,n),s=!0)},o(n){_(t.$$.fragment,n),_(o.$$.fragment,n),s=!1},d(n){g(t,n),n&&p(r),g(o,n)}}}function W(a){let t,r,o,s,n,$,f,h;return t=new G({props:{title:"Theming"}}),o=new A({props:{what:"ThemeProvider",from:"core"}}),n=new F({props:{text:"Dapper UI offers a high level of customizability. You can easily modify the global theme to change fonts, colors, border radiuses and more. "}}),f=new Y({props:{$$slots:{default:[V]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment),r=b(),l(o.$$.fragment),s=b(),l(n.$$.fragment),$=b(),l(f.$$.fragment)},l(e){i(t.$$.fragment,e),r=D(e),i(o.$$.fragment,e),s=D(e),i(n.$$.fragment,e),$=D(e),i(f.$$.fragment,e)},m(e,m){u(t,e,m),c(e,r,m),u(o,e,m),c(e,s,m),u(n,e,m),c(e,$,m),u(f,e,m),h=!0},p(e,[m]){const T={};m&1&&(T.$$scope={dirty:m,ctx:e}),f.$set(T)},i(e){h||(d(t.$$.fragment,e),d(o.$$.fragment,e),d(n.$$.fragment,e),d(f.$$.fragment,e),h=!0)},o(e){_(t.$$.fragment,e),_(o.$$.fragment,e),_(n.$$.fragment,e),_(f.$$.fragment,e),h=!1},d(e){g(t,e),e&&p(r),g(o,e),e&&p(s),g(n,e),e&&p($),g(f,e)}}}class se extends q{constructor(t){super(),O(this,t,null,W,H,{})}}export{se as default};