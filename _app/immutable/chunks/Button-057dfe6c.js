import{S as se,i as ie,s as te,e as K,b as F,f as b,t as g,h as y,$ as ae,J as O,Q as oe,k as S,a as L,l as T,m as W,c as P,V as o,T as Q,U as R,H as q,a0 as ue,a1 as D,g as G,d as X,K as V,L as B,M as I,W as re,E as fe,D as de,O as C,n as ne}from"./index-9ef34302.js";import{o as Y}from"./TextField.svelte_svelte_type_style_lang-87bd2ec7.js";function _e(t,e){e&&t.focus()}function Z(t,e){return t===void 0||t===e?"":`--d4r-border-radius-${e}: var(--d4r-border-radius-${t});`}const ce=t=>({}),p=t=>({}),me=t=>({}),x=t=>({});function $(t){let e,s;const f=t[18]["icon-start"],i=O(f,t,t[17],x);return{c(){e=S("div"),i&&i.c(),this.h()},l(l){e=T(l,"DIV",{class:!0});var u=W(e);i&&i.l(u),u.forEach(y),this.h()},h(){ne(e,"class","d4r-flex")},m(l,u){F(l,e,u),i&&i.m(e,null),s=!0},p(l,u){i&&i.p&&(!s||u&131072)&&V(i,f,l,l[17],s?I(f,l[17],u,me):B(l[17]),x)},i(l){s||(b(i,l),s=!0)},o(l){g(i,l),s=!1},d(l){l&&y(e),i&&i.d(l)}}}function ee(t){let e,s;const f=t[18]["icon-end"],i=O(f,t,t[17],p);return{c(){e=S("div"),i&&i.c(),this.h()},l(l){e=T(l,"DIV",{class:!0});var u=W(e);i&&i.l(u),u.forEach(y),this.h()},h(){ne(e,"class","d4r-flex")},m(l,u){F(l,e,u),i&&i.m(e,null),s=!0},p(l,u){i&&i.p&&(!s||u&131072)&&V(i,f,l,l[17],s?I(f,l[17],u,ce):B(l[17]),p)},i(l){s||(b(i,l),s=!0)},o(l){g(i,l),s=!1},d(l){l&&y(e),i&&i.d(l)}}}function M(t){let e,s,f,i,l,u,k,m,z,N,d=t[15]["icon-start"]&&$(t);const j=t[18].default,h=O(j,t,t[17],null);let _=t[15]["icon-end"]&&ee(t),w=[{id:t[0]},{href:t[7]},{target:t[8]},{class:l="button "+t[12]+" svelte-1uqjh66"},{style:u=""+(Y(t[3],t[13])+Z(t[5],"button")+t[14])},{disabled:t[2]},{type:"button"}],c={};for(let n=0;n<w.length;n+=1)c=oe(c,w[n]);return{c(){e=S(t[7]?"a":"button"),d&&d.c(),s=L(),f=S("span"),h&&h.c(),i=L(),_&&_.c(),this.h()},l(n){e=T(n,((t[7]?"a":"button")||"null").toUpperCase(),{id:!0,href:!0,target:!0,class:!0,style:!0,disabled:!0,type:!0});var r=W(e);d&&d.l(r),s=P(r),f=T(r,"SPAN",{});var E=W(f);h&&h.l(E),E.forEach(y),i=P(r),_&&_.l(r),r.forEach(y),this.h()},h(){o(f,"d4r-truncate",!t[6]),/-/.test(t[7]?"a":"button")?Q(e,c):R(e,c),o(e,"d4r-w-full",t[1]),o(e,"size-base",t[4]==="base"),o(e,"size-sm",t[4]==="sm"),o(e,"size-xs",t[4]==="xs"),o(e,"outline",t[10]==="outline"||t[10]==="outline-dashed"),o(e,"outline-dashed",t[10]==="outline-dashed"),o(e,"gradient",t[10]==="gradient"),o(e,"solid",t[10]==="solid"),o(e,"light",t[10]==="light"),o(e,"subtle",t[10]==="subtle"),o(e,"icon-start",t[15]["icon-start"]),o(e,"icon-end",t[15]["icon-end"]),o(e,"d4r-justify-start",t[11]==="start"),o(e,"d4r-justify-center",t[11]==="center"),o(e,"d4r-justify-end",t[11]==="end"),o(e,"d4r-truncate",!t[6]),o(e,"d4r-button-icon-base",t[4]==="base"||t[4]===void 0),o(e,"d4r-button-icon-sm",t[4]==="sm"),o(e,"d4r-button-icon-xs",t[4]==="xs")},m(n,r){F(n,e,r),d&&d.m(e,null),q(e,s),q(e,f),h&&h.m(f,null),q(e,i),_&&_.m(e,null),m=!0,z||(N=[ue(k=_e.call(null,e,t[9])),D(e,"click",t[19]),D(e,"keydown",t[20]),D(e,"keyup",t[21])],z=!0)},p(n,r){n[15]["icon-start"]?d?(d.p(n,r),r&32768&&b(d,1)):(d=$(n),d.c(),b(d,1),d.m(e,s)):d&&(G(),g(d,1,1,()=>{d=null}),X()),h&&h.p&&(!m||r&131072)&&V(h,j,n,n[17],m?I(j,n[17],r,null):B(n[17]),null),(!m||r&64)&&o(f,"d4r-truncate",!n[6]),n[15]["icon-end"]?_?(_.p(n,r),r&32768&&b(_,1)):(_=ee(n),_.c(),b(_,1),_.m(e,null)):_&&(G(),g(_,1,1,()=>{_=null}),X()),c=re(w,[(!m||r&1)&&{id:n[0]},(!m||r&128)&&{href:n[7]},(!m||r&256)&&{target:n[8]},(!m||r&4096&&l!==(l="button "+n[12]+" svelte-1uqjh66"))&&{class:l},(!m||r&24616&&u!==(u=""+(Y(n[3],n[13])+Z(n[5],"button")+n[14])))&&{style:u},(!m||r&4)&&{disabled:n[2]},{type:"button"}]),/-/.test(n[7]?"a":"button")?Q(e,c):R(e,c),k&&fe(k.update)&&r&512&&k.update.call(null,n[9]),o(e,"d4r-w-full",n[1]),o(e,"size-base",n[4]==="base"),o(e,"size-sm",n[4]==="sm"),o(e,"size-xs",n[4]==="xs"),o(e,"outline",n[10]==="outline"||n[10]==="outline-dashed"),o(e,"outline-dashed",n[10]==="outline-dashed"),o(e,"gradient",n[10]==="gradient"),o(e,"solid",n[10]==="solid"),o(e,"light",n[10]==="light"),o(e,"subtle",n[10]==="subtle"),o(e,"icon-start",n[15]["icon-start"]),o(e,"icon-end",n[15]["icon-end"]),o(e,"d4r-justify-start",n[11]==="start"),o(e,"d4r-justify-center",n[11]==="center"),o(e,"d4r-justify-end",n[11]==="end"),o(e,"d4r-truncate",!n[6]),o(e,"d4r-button-icon-base",n[4]==="base"||n[4]===void 0),o(e,"d4r-button-icon-sm",n[4]==="sm"),o(e,"d4r-button-icon-xs",n[4]==="xs")},i(n){m||(b(d),b(h,n),b(_),m=!0)},o(n){g(d),g(h,n),g(_),m=!1},d(n){n&&y(e),d&&d.d(),h&&h.d(n),_&&_.d(),z=!1,de(N)}}}function he(t){let e=t[7]?"a":"button",s,f,i=(t[7]?"a":"button")&&M(t);return{c(){i&&i.c(),s=K()},l(l){i&&i.l(l),s=K()},m(l,u){i&&i.m(l,u),F(l,s,u),f=!0},p(l,[u]){l[7],e?te(e,l[7]?"a":"button")?(i.d(1),i=M(l),i.c(),i.m(s.parentNode,s)):i.p(l,u):(i=M(l),i.c(),i.m(s.parentNode,s)),e=l[7]?"a":"button"},i(l){f||(b(i),f=!0)},o(l){g(i),f=!1},d(l){l&&y(s),i&&i.d(l)}}}function be(t,e,s){let{$$slots:f={},$$scope:i}=e;const l=ae(f);let{id:u=void 0}=e,{fullWidth:k=!1}=e,{disabled:m=!1}=e,{color:z=void 0}=e,{size:N="base"}=e,{radius:d=void 0}=e,{noTruncate:j=!1}=e,{href:h=void 0}=e,{target:_=void 0}=e,{autoFocus:w=!1}=e,{variant:c="solid"}=e,{gradient:n={from:"primary",to:"primary"}}=e,{contentJustify:r="center"}=e,{class:E=""}=e,v,J;function U(a){C.call(this,t,a)}function A(a){C.call(this,t,a)}function H(a){C.call(this,t,a)}return t.$$set=a=>{"id"in a&&s(0,u=a.id),"fullWidth"in a&&s(1,k=a.fullWidth),"disabled"in a&&s(2,m=a.disabled),"color"in a&&s(3,z=a.color),"size"in a&&s(4,N=a.size),"radius"in a&&s(5,d=a.radius),"noTruncate"in a&&s(6,j=a.noTruncate),"href"in a&&s(7,h=a.href),"target"in a&&s(8,_=a.target),"autoFocus"in a&&s(9,w=a.autoFocus),"variant"in a&&s(10,c=a.variant),"gradient"in a&&s(16,n=a.gradient),"contentJustify"in a&&s(11,r=a.contentJustify),"class"in a&&s(12,E=a.class),"$$scope"in a&&s(17,i=a.$$scope)},t.$$.update=()=>{if(t.$$.dirty&1024&&(c==="solid"?s(13,v=[300,600,700]):c==="outline"||c==="outline-dashed"?s(13,v=[50,300,500,700,800]):c==="light"?s(13,v=[200,300,500,600,700]):c==="subtle"?s(13,v=[300,600]):c==="gradient"?s(13,v=[300,600]):s(13,v=[])),t.$$.dirty&66560)if(c==="gradient")if(typeof n=="string")s(14,J=`background: ${n};`);else if(typeof n=="object"){const a=typeof n.from=="string"?`${n.from}-600`:`${n.from[0]}-${n.from[1]}`,le=typeof n.to=="string"?`${n.to}-600`:`${n.to[0]}-${n.to[1]}`;s(14,J=`background: linear-gradient(90deg, rgb(var(--d4r-color-${a})) 0%, rgb(var(--d4r-color-${le})) 100%);`)}else s(14,J="");else s(14,J="")},[u,k,m,z,N,d,j,h,_,w,c,r,E,v,J,l,n,i,f,U,A,H]}class ke extends se{constructor(e){super(),ie(this,e,be,he,te,{id:0,fullWidth:1,disabled:2,color:3,size:4,radius:5,noTruncate:6,href:7,target:8,autoFocus:9,variant:10,gradient:16,contentJustify:11,class:12})}}export{ke as B,_e as f,Z as o};
