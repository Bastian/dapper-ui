import{S as D,i as v,s as V,w as m,a as k,x as p,c as x,y as d,b as $,f as h,t as _,z as g,h as l,k as G,l as I,m as T,n as z,H as j,q as f,r as u}from"../../../../chunks/index-f0bdd1f8.js";import{D as q}from"../../../../chunks/DocContent-6c778bc7.js";import{D as w}from"../../../../chunks/DocLink-ab2b9a10.js";import{D as S}from"../../../../chunks/DocSectionText-3877ab5b.js";import{D as C}from"../../../../chunks/DocTitle-916ac9c8.js";function N(c){let n;return{c(){n=f(`Dapper UI doesn't come with a built-in icon library, but it is designed to work with any SVG
			icons. This means that you can use any icon library of your choice, as long as the icons are
			in SVG format. Non-SVG icons can be used as well, but you may need to do some additional work
			to ensure sizing and color are correct (e.g. for buttons) as they are applied automatically.`)},l(e){n=u(e,`Dapper UI doesn't come with a built-in icon library, but it is designed to work with any SVG
			icons. This means that you can use any icon library of your choice, as long as the icons are
			in SVG format. Non-SVG icons can be used as well, but you may need to do some additional work
			to ensure sizing and color are correct (e.g. for buttons) as they are applied automatically.`)},m(e,a){$(e,n,a)},d(e){e&&l(n)}}}function O(c){let n;return{c(){n=f("Tabler Icons")},l(e){n=u(e,"Tabler Icons")},m(e,a){$(e,n,a)},d(e){e&&l(n)}}}function U(c){let n;return{c(){n=f("tabler-icons-svelte")},l(e){n=u(e,"tabler-icons-svelte")},m(e,a){$(e,n,a)},d(e){e&&l(n)}}}function Y(c){let n,e,a,r,o,s;return e=new w({props:{href:"https://tabler-icons.io/",$$slots:{default:[O]},$$scope:{ctx:c}}}),r=new w({props:{href:"https://github.com/benflap/tabler-icons-svelte",$$slots:{default:[U]},$$scope:{ctx:c}}}),{c(){n=f(`One great option for an SVG icon library is
			`),m(e.$$.fragment),a=f(`, which is the one we use on
			this website and in our examples. You can use the
			`),m(r.$$.fragment),o=f(`
			npm package to easily incorporate Tabler Icons into your Svelte project.`)},l(t){n=u(t,`One great option for an SVG icon library is
			`),p(e.$$.fragment,t),a=u(t,`, which is the one we use on
			this website and in our examples. You can use the
			`),p(r.$$.fragment,t),o=u(t,`
			npm package to easily incorporate Tabler Icons into your Svelte project.`)},m(t,i){$(t,n,i),d(e,t,i),$(t,a,i),d(r,t,i),$(t,o,i),s=!0},p(t,i){const b={};i&1&&(b.$$scope={dirty:i,ctx:t}),e.$set(b);const y={};i&1&&(y.$$scope={dirty:i,ctx:t}),r.$set(y)},i(t){s||(h(e.$$.fragment,t),h(r.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),_(r.$$.fragment,t),s=!1},d(t){t&&l(n),g(e,t),t&&l(a),g(r,t),t&&l(o)}}}function E(c){let n,e,a,r,o;return e=new S({props:{$$slots:{default:[N]},$$scope:{ctx:c}}}),r=new S({props:{$$slots:{default:[Y]},$$scope:{ctx:c}}}),{c(){n=G("div"),m(e.$$.fragment),a=k(),m(r.$$.fragment),this.h()},l(s){n=I(s,"DIV",{class:!0});var t=T(n);p(e.$$.fragment,t),a=x(t),p(r.$$.fragment,t),t.forEach(l),this.h()},h(){z(n,"class","d4r-space-y-4")},m(s,t){$(s,n,t),d(e,n,null),j(n,a),d(r,n,null),o=!0},p(s,t){const i={};t&1&&(i.$$scope={dirty:t,ctx:s}),e.$set(i);const b={};t&1&&(b.$$scope={dirty:t,ctx:s}),r.$set(b)},i(s){o||(h(e.$$.fragment,s),h(r.$$.fragment,s),o=!0)},o(s){_(e.$$.fragment,s),_(r.$$.fragment,s),o=!1},d(s){s&&l(n),g(e),g(r)}}}function H(c){let n,e,a,r;return n=new C({props:{title:"Icons"}}),a=new q({props:{$$slots:{default:[E]},$$scope:{ctx:c}}}),{c(){m(n.$$.fragment),e=k(),m(a.$$.fragment)},l(o){p(n.$$.fragment,o),e=x(o),p(a.$$.fragment,o)},m(o,s){d(n,o,s),$(o,e,s),d(a,o,s),r=!0},p(o,[s]){const t={};s&1&&(t.$$scope={dirty:s,ctx:o}),a.$set(t)},i(o){r||(h(n.$$.fragment,o),h(a.$$.fragment,o),r=!0)},o(o){_(n.$$.fragment,o),_(a.$$.fragment,o),r=!1},d(o){g(n,o),o&&l(e),g(a,o)}}}class J extends D{constructor(n){super(),v(this,n,null,H,V,{})}}export{J as default};
