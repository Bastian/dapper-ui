import{S as D,i as E,s as j,k as S,w as b,a as k,l as I,m as V,x as g,c as z,h as l,n as $,b as u,y as _,H as d,f as y,t as w,z as x,q as m,r as p,B as q}from"../../../../chunks/index-83d82b2f.js";import{T as v}from"../../../../chunks/Text-29f1ea43.js";function A(f){let a;return{c(){a=m("Icons")},l(e){a=p(e,"Icons")},m(e,i){u(e,a,i)},d(e){e&&l(a)}}}function N(f){let a;return{c(){a=m(`Dapper UI doesn't come with a built-in icon library, but it is designed to work with any SVG
		icons. This means that you can use any icon library of your choice, as long as the icons are in
		SVG format. Non-SVG icons can be used as well, but you may need to do some additional work to
		ensure sizing and color are correct (e.g. for buttons) as they are applied automatically.`)},l(e){a=p(e,`Dapper UI doesn't come with a built-in icon library, but it is designed to work with any SVG
		icons. This means that you can use any icon library of your choice, as long as the icons are in
		SVG format. Non-SVG icons can be used as well, but you may need to do some additional work to
		ensure sizing and color are correct (e.g. for buttons) as they are applied automatically.`)},m(e,i){u(e,a,i)},d(e){e&&l(a)}}}function O(f){let a,e,i,s,o,r,c;return{c(){a=m(`One great option for an SVG icon library is
		`),e=S("a"),i=m("Tabler Icons"),s=m(`, which is the one we
		use on this website and in our examples. You can use the
		`),o=S("a"),r=m("tabler-icons-svelte"),c=m(`
		npm package to easily incorporate Tabler Icons into your Svelte project.`),this.h()},l(t){a=p(t,`One great option for an SVG icon library is
		`),e=I(t,"A",{class:!0,href:!0});var n=V(e);i=p(n,"Tabler Icons"),n.forEach(l),s=p(t,`, which is the one we
		use on this website and in our examples. You can use the
		`),o=I(t,"A",{class:!0,href:!0});var h=V(o);r=p(h,"tabler-icons-svelte"),h.forEach(l),c=p(t,`
		npm package to easily incorporate Tabler Icons into your Svelte project.`),this.h()},h(){$(e,"class","d4r-font-medium"),$(e,"href","https://tabler-icons.io/"),$(o,"class","d4r-font-medium"),$(o,"href","https://github.com/benflap/tabler-icons-svelte")},m(t,n){u(t,a,n),u(t,e,n),d(e,i),u(t,s,n),u(t,o,n),d(o,r),u(t,c,n)},p:q,d(t){t&&l(a),t&&l(e),t&&l(s),t&&l(o),t&&l(c)}}}function U(f){let a,e,i,s,o,r,c;return e=new v({props:{class:"d4r-mb-6",tag:"h1",size:"3xl",weight:"medium",$$slots:{default:[A]},$$scope:{ctx:f}}}),s=new v({props:{tag:"p",prose:!0,size:"lg",$$slots:{default:[N]},$$scope:{ctx:f}}}),r=new v({props:{tag:"p",prose:!0,size:"lg",$$slots:{default:[O]},$$scope:{ctx:f}}}),{c(){a=S("div"),b(e.$$.fragment),i=k(),b(s.$$.fragment),o=k(),b(r.$$.fragment),this.h()},l(t){a=I(t,"DIV",{class:!0});var n=V(a);g(e.$$.fragment,n),i=z(n),g(s.$$.fragment,n),o=z(n),g(r.$$.fragment,n),n.forEach(l),this.h()},h(){$(a,"class","d4r-space-y-4")},m(t,n){u(t,a,n),_(e,a,null),d(a,i),_(s,a,null),d(a,o),_(r,a,null),c=!0},p(t,[n]){const h={};n&1&&(h.$$scope={dirty:n,ctx:t}),e.$set(h);const G={};n&1&&(G.$$scope={dirty:n,ctx:t}),s.$set(G);const T={};n&1&&(T.$$scope={dirty:n,ctx:t}),r.$set(T)},i(t){c||(y(e.$$.fragment,t),y(s.$$.fragment,t),y(r.$$.fragment,t),c=!0)},o(t){w(e.$$.fragment,t),w(s.$$.fragment,t),w(r.$$.fragment,t),c=!1},d(t){t&&l(a),x(e),x(s),x(r)}}}class C extends D{constructor(a){super(),E(this,a,null,U,j,{})}}export{C as default};
