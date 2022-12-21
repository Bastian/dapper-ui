import{S as K,i as O,s as z,w as c,a as D,x as u,c as v,y as i,b as x,f as g,t as d,z as _,h as w,q as k,r as h,B as I,k as H,l as W,m as Y,H as A}from"../../../../chunks/index-f0bdd1f8.js";import{T as F}from"../../../../chunks/TextField.svelte_svelte_type_style_lang-60c645ce.js";import{C as S}from"../../../../chunks/CodeBlock-ba732c39.js";import{D as U,a as C,S as G}from"../../../../chunks/DocSection-45764420.js";import{D as L}from"../../../../chunks/DocContent-6c778bc7.js";import{D as Q}from"../../../../chunks/DocIntoText-4fb75b52.js";import{D as R}from"../../../../chunks/DocLink-ab2b9a10.js";import{D as P}from"../../../../chunks/DocSectionText-3877ab5b.js";import{D as y}from"../../../../chunks/DocTitle-916ac9c8.js";function J(l){let t;return{c(){t=k("Install Dapper UI with your favorite package manager:")},l(o){t=h(o,"Install Dapper UI with your favorite package manager:")},m(o,e){x(o,t,e)},d(o){o&&w(t)}}}function M(l){let t,o;return t=new S({props:{class:"d4r-p-4",language:"bash",code:"npm install @dapper-ui/core"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function N(l){let t,o;return t=new S({props:{class:"d4r-p-4",language:"bash",code:"yarn add @dapper-ui/core"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function V(l){let t,o;return t=new S({props:{class:"d4r-p-4",language:"bash",code:"pnpm add @dapper-ui/core"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function X(l){let t,o,e,f,s,r,$,m;return t=new P({props:{$$slots:{default:[J]},$$scope:{ctx:l}}}),e=new C({props:{$$slots:{default:[M]},$$scope:{ctx:l}}}),s=new C({props:{$$slots:{default:[N]},$$scope:{ctx:l}}}),$=new C({props:{$$slots:{default:[V]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment),o=D(),c(e.$$.fragment),f=D(),c(s.$$.fragment),r=D(),c($.$$.fragment)},l(n){u(t.$$.fragment,n),o=v(n),u(e.$$.fragment,n),f=v(n),u(s.$$.fragment,n),r=v(n),u($.$$.fragment,n)},m(n,p){i(t,n,p),x(n,o,p),i(e,n,p),x(n,f,p),i(s,n,p),x(n,r,p),i($,n,p),m=!0},p(n,p){const a={};p&1&&(a.$$scope={dirty:p,ctx:n}),t.$set(a);const b={};p&1&&(b.$$scope={dirty:p,ctx:n}),e.$set(b);const T={};p&1&&(T.$$scope={dirty:p,ctx:n}),s.$set(T);const B={};p&1&&(B.$$scope={dirty:p,ctx:n}),$.$set(B)},i(n){m||(g(t.$$.fragment,n),g(e.$$.fragment,n),g(s.$$.fragment,n),g($.$$.fragment,n),m=!0)},o(n){d(t.$$.fragment,n),d(e.$$.fragment,n),d(s.$$.fragment,n),d($.$$.fragment,n),m=!1},d(n){_(t,n),n&&w(o),_(e,n),n&&w(f),_(s,n),n&&w(r),_($,n)}}}function Z(l){let t,o,e,f;return{c(){t=k("Wrap your code in the "),o=H("code"),e=k("ThemeProvider"),f=k(` component as high as possible in your component
			tree:`)},l(s){t=h(s,"Wrap your code in the "),o=W(s,"CODE",{});var r=Y(o);e=h(r,"ThemeProvider"),r.forEach(w),f=h(s,` component as high as possible in your component
			tree:`)},m(s,r){x(s,t,r),x(s,o,r),A(o,e),x(s,f,r)},p:I,d(s){s&&w(t),s&&w(o),s&&w(f)}}}function ee(l){let t,o;return t=new G({props:{code:`<script>
	import { ThemeProvider, Button } from '@dapper-ui/core';
<\/script>

<ThemeProvider>
	<!-- Your app here -->
	<Button>Example</Button>
</ThemeProvider>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function te(l){let t,o,e,f;return t=new P({props:{$$slots:{default:[Z]},$$scope:{ctx:l}}}),e=new C({props:{$$slots:{default:[ee]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment),o=D(),c(e.$$.fragment)},l(s){u(t.$$.fragment,s),o=v(s),u(e.$$.fragment,s)},m(s,r){i(t,s,r),x(s,o,r),i(e,s,r),f=!0},p(s,r){const $={};r&1&&($.$$scope={dirty:r,ctx:s}),t.$set($);const m={};r&1&&(m.$$scope={dirty:r,ctx:s}),e.$set(m)},i(s){f||(g(t.$$.fragment,s),g(e.$$.fragment,s),f=!0)},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),f=!1},d(s){_(t,s),s&&w(o),_(e,s)}}}function oe(l){let t,o,e,f;return{c(){t=k("Install and import the default fonts (for example in the "),o=H("code"),e=k("+layout.svelte"),f=k(" file):")},l(s){t=h(s,"Install and import the default fonts (for example in the "),o=W(s,"CODE",{});var r=Y(o);e=h(r,"+layout.svelte"),r.forEach(w),f=h(s," file):")},m(s,r){x(s,t,r),x(s,o,r),A(o,e),x(s,f,r)},p:I,d(s){s&&w(t),s&&w(o),s&&w(f)}}}function ne(l){let t,o;return t=new S({props:{class:"d4r-p-4",language:"bash",code:"npm install @fontsource/open-sans @fontsource/fira-mono"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function se(l){let t,o;return t=new S({props:{class:"d4r-p-4",language:"bash",code:"yarn add @fontsource/open-sans @fontsource/fira-mono"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function $e(l){let t,o;return t=new S({props:{class:"d4r-p-4",language:"bash",code:"pnpm add @fontsource/open-sans @fontsource/fira-mono"}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function re(l){let t,o;return t=new G({props:{code:`<script>
    import "@fontsource/open-sans/400.css";
    import "@fontsource/open-sans/500.css";
    import "@fontsource/open-sans/600.css";
    import "@fontsource/open-sans/700.css";
    import "@fontsource/fira-mono/400.css";
<\/script>`}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p:I,i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function fe(l){let t,o,e,f,s,r,$,m,n,p;return t=new P({props:{$$slots:{default:[oe]},$$scope:{ctx:l}}}),e=new C({props:{$$slots:{default:[ne]},$$scope:{ctx:l}}}),s=new C({props:{$$slots:{default:[se]},$$scope:{ctx:l}}}),$=new C({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),n=new C({props:{$$slots:{default:[re]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment),o=D(),c(e.$$.fragment),f=D(),c(s.$$.fragment),r=D(),c($.$$.fragment),m=D(),c(n.$$.fragment)},l(a){u(t.$$.fragment,a),o=v(a),u(e.$$.fragment,a),f=v(a),u(s.$$.fragment,a),r=v(a),u($.$$.fragment,a),m=v(a),u(n.$$.fragment,a)},m(a,b){i(t,a,b),x(a,o,b),i(e,a,b),x(a,f,b),i(s,a,b),x(a,r,b),i($,a,b),x(a,m,b),i(n,a,b),p=!0},p(a,b){const T={};b&1&&(T.$$scope={dirty:b,ctx:a}),t.$set(T);const B={};b&1&&(B.$$scope={dirty:b,ctx:a}),e.$set(B);const E={};b&1&&(E.$$scope={dirty:b,ctx:a}),s.$set(E);const j={};b&1&&(j.$$scope={dirty:b,ctx:a}),$.$set(j);const q={};b&1&&(q.$$scope={dirty:b,ctx:a}),n.$set(q)},i(a){p||(g(t.$$.fragment,a),g(e.$$.fragment,a),g(s.$$.fragment,a),g($.$$.fragment,a),g(n.$$.fragment,a),p=!0)},o(a){d(t.$$.fragment,a),d(e.$$.fragment,a),d(s.$$.fragment,a),d($.$$.fragment,a),d(n.$$.fragment,a),p=!1},d(a){_(t,a),a&&w(o),_(e,a),a&&w(f),_(s,a),a&&w(r),_($,a),a&&w(m),_(n,a)}}}function ae(l){let t;return{c(){t=k("Bastian/dapper-ui")},l(o){t=h(o,"Bastian/dapper-ui")},m(o,e){x(o,t,e)},d(o){o&&w(t)}}}function le(l){let t;return{c(){t=k("Thank you for using Dapper UI!")},l(o){t=h(o,"Thank you for using Dapper UI!")},m(o,e){x(o,t,e)},d(o){o&&w(t)}}}function pe(l){let t,o,e,f,s;return o=new R({props:{href:"https://github.com/Bastian/dapper-ui",$$slots:{default:[ae]},$$scope:{ctx:l}}}),f=new F({props:{weight:"semibold",$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){t=k(`You're all set! Take some time to explore the components and experiment with them. Keep in
			mind that Dapper UI is still in its early stages of development, so some components may be
			missing or incomplete. If you have any questions or ideas for the project, don't hesitate to
			create an issue on GitHub (`),c(o.$$.fragment),e=k(`). Additionally, giving the repository a start will help others discover the project and
			contribute to its growth. `),c(f.$$.fragment)},l(r){t=h(r,`You're all set! Take some time to explore the components and experiment with them. Keep in
			mind that Dapper UI is still in its early stages of development, so some components may be
			missing or incomplete. If you have any questions or ideas for the project, don't hesitate to
			create an issue on GitHub (`),u(o.$$.fragment,r),e=h(r,`). Additionally, giving the repository a start will help others discover the project and
			contribute to its growth. `),u(f.$$.fragment,r)},m(r,$){x(r,t,$),i(o,r,$),x(r,e,$),i(f,r,$),s=!0},p(r,$){const m={};$&1&&(m.$$scope={dirty:$,ctx:r}),o.$set(m);const n={};$&1&&(n.$$scope={dirty:$,ctx:r}),f.$set(n)},i(r){s||(g(o.$$.fragment,r),g(f.$$.fragment,r),s=!0)},o(r){d(o.$$.fragment,r),d(f.$$.fragment,r),s=!1},d(r){r&&w(t),_(o,r),r&&w(e),_(f,r)}}}function me(l){let t,o;return t=new P({props:{$$slots:{default:[pe]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,f){i(t,e,f),o=!0},p(e,f){const s={};f&1&&(s.$$scope={dirty:f,ctx:e}),t.$set(s)},i(e){o||(g(t.$$.fragment,e),o=!0)},o(e){d(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function ce(l){let t,o,e,f,s,r,$,m;return t=new U({props:{title:"1. Install Dapper UI",$$slots:{default:[X]},$$scope:{ctx:l}}}),e=new U({props:{title:"2. Wrap Code",$$slots:{default:[te]},$$scope:{ctx:l}}}),s=new U({props:{title:"3. Install Default Fonts (optional)",$$slots:{default:[fe]},$$scope:{ctx:l}}}),$=new U({props:{title:"4. Done!",$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment),o=D(),c(e.$$.fragment),f=D(),c(s.$$.fragment),r=D(),c($.$$.fragment)},l(n){u(t.$$.fragment,n),o=v(n),u(e.$$.fragment,n),f=v(n),u(s.$$.fragment,n),r=v(n),u($.$$.fragment,n)},m(n,p){i(t,n,p),x(n,o,p),i(e,n,p),x(n,f,p),i(s,n,p),x(n,r,p),i($,n,p),m=!0},p(n,p){const a={};p&1&&(a.$$scope={dirty:p,ctx:n}),t.$set(a);const b={};p&1&&(b.$$scope={dirty:p,ctx:n}),e.$set(b);const T={};p&1&&(T.$$scope={dirty:p,ctx:n}),s.$set(T);const B={};p&1&&(B.$$scope={dirty:p,ctx:n}),$.$set(B)},i(n){m||(g(t.$$.fragment,n),g(e.$$.fragment,n),g(s.$$.fragment,n),g($.$$.fragment,n),m=!0)},o(n){d(t.$$.fragment,n),d(e.$$.fragment,n),d(s.$$.fragment,n),d($.$$.fragment,n),m=!1},d(n){_(t,n),n&&w(o),_(e,n),n&&w(f),_(s,n),n&&w(r),_($,n)}}}function ue(l){let t,o,e,f,s,r;return t=new y({props:{title:"Quick Start (tl;dr)"}}),e=new Q({props:{text:"The 3-step tl;dr version for experienced developers to get started in less than 2 minutes. Read the full documentation for more details."}}),s=new L({props:{$$slots:{default:[ce]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment),o=D(),c(e.$$.fragment),f=D(),c(s.$$.fragment)},l($){u(t.$$.fragment,$),o=v($),u(e.$$.fragment,$),f=v($),u(s.$$.fragment,$)},m($,m){i(t,$,m),x($,o,m),i(e,$,m),x($,f,m),i(s,$,m),r=!0},p($,[m]){const n={};m&1&&(n.$$scope={dirty:m,ctx:$}),s.$set(n)},i($){r||(g(t.$$.fragment,$),g(e.$$.fragment,$),g(s.$$.fragment,$),r=!0)},o($){d(t.$$.fragment,$),d(e.$$.fragment,$),d(s.$$.fragment,$),r=!1},d($){_(t,$),$&&w(o),_(e,$),$&&w(f),_(s,$)}}}class ke extends K{constructor(t){super(),O(this,t,null,ue,z,{})}}export{ke as default};
