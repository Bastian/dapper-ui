import{S as me,i as _e,s as ge,F as ue,q as I,G as de,m as V,r as D,h as d,n as U,b as p,H as A,B as x,R as K,T as Q,w as E,a as N,x as y,c as P,y as z,U as Z,f as h,t as b,z as B,V as Ye,e as ve,g as le,d as se,k as L,l as M,u as Oe,ac as Ke}from"../../../../chunks/index-be153a96.js";import{B as ee}from"../../../../chunks/Button-d6e1b2f4.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{I as Qe}from"../../../../chunks/IconButton-0396b416.js";import{D as Ee,b as je,a as Ze}from"../../../../chunks/DocSection-abb8d504.js";import{D as st}from"../../../../chunks/DocContent-d112f228.js";import{D as at}from"../../../../chunks/DocImport-426f0676.js";import{D as ft}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as We}from"../../../../chunks/DocSectionText-14b597b7.js";import{D as ut}from"../../../../chunks/DocTitle-7d81791e.js";import{E as ke}from"../../../../chunks/Example-05595231.js";import{C as be}from"../../../../chunks/InputBase-30312b3b.js";import{S as we}from"../../../../chunks/Select-d651ebed.js";import{T as dt}from"../../../../chunks/TextField-55d13445.js";import{g as xe,R as et}from"../../../../chunks/RadiusSlider-2a65a323.js";import{C as Se,S as Ve,c as $e}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import{P as ct}from"../../../../chunks/PropTable-7f69690e.js";function pt(o){let e,n,t,r,s,f,a;return{c(){e=ue("svg"),n=ue("desc"),t=I(`Download more icon variants from
        https://tabler-icons.io/i/clipboard-check
    `),r=ue("path"),s=ue("path"),f=ue("rect"),a=ue("path"),this.h()},l(l){e=de(l,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var i=V(e);n=de(i,"desc",{});var u=V(n);t=D(u,`Download more icon variants from
        https://tabler-icons.io/i/clipboard-check
    `),u.forEach(d),r=de(i,"path",{stroke:!0,d:!0,fill:!0}),V(r).forEach(d),s=de(i,"path",{d:!0}),V(s).forEach(d),f=de(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),V(f).forEach(d),a=de(i,"path",{d:!0}),V(a).forEach(d),i.forEach(d),this.h()},h(){U(r,"stroke","none"),U(r,"d","M0 0h24v24H0z"),U(r,"fill","none"),U(s,"d","M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"),U(f,"x","9"),U(f,"y","3"),U(f,"width","6"),U(f,"height","4"),U(f,"rx","2"),U(a,"d","M9 14l2 2l4 -4"),U(e,"xmlns","http://www.w3.org/2000/svg"),U(e,"class","icon icon-tabler icon-tabler-clipboard-check"),U(e,"width",o[0]),U(e,"height",o[0]),U(e,"viewBox","0 0 24 24"),U(e,"stroke",o[1]),U(e,"stroke-width",o[2]),U(e,"fill","none"),U(e,"stroke-linecap","round"),U(e,"stroke-linejoin","round")},m(l,i){p(l,e,i),A(e,n),A(n,t),A(e,r),A(e,s),A(e,f),A(e,a)},p(l,[i]){i&1&&U(e,"width",l[0]),i&1&&U(e,"height",l[0]),i&2&&U(e,"stroke",l[1]),i&4&&U(e,"stroke-width",l[2])},i:x,o:x,d(l){l&&d(e)}}}function $t(o,e,n){let{size:t=24}=e,{color:r="currentColor"}=e,{strokeWidth:s=2}=e;return o.$$set=f=>{"size"in f&&n(0,t=f.size),"color"in f&&n(1,r=f.color),"strokeWidth"in f&&n(2,s=f.strokeWidth)},[t,r,s]}class he extends me{constructor(e){super(),_e(this,e,$t,pt,ge,{size:0,color:1,strokeWidth:2})}}function mt(o){let e,n,t,r,s,f,a,l,i,u,m,S;function $(k){o[1](k)}let O={label:"Gradient From"};o[0].from[0]!==void 0&&(O.color=o[0].from[0]),e=new Se({props:O}),K.push(()=>Q(e,"color",$,o[0].from[0]));function j(k){o[2](k)}let G={label:"Gradient From Shade",min:100,max:900,step:100};o[0].from[1]!==void 0&&(G.value=o[0].from[1]),r=new Ve({props:G}),K.push(()=>Q(r,"value",j,o[0].from[1]));function w(k){o[3](k)}let c={label:"Gradient To"};o[0].to[0]!==void 0&&(c.color=o[0].to[0]),a=new Se({props:c}),K.push(()=>Q(a,"color",w,o[0].to[0]));function T(k){o[4](k)}let q={label:"Gradient To Shade",min:100,max:900,step:100};return o[0].to[1]!==void 0&&(q.value=o[0].to[1]),u=new Ve({props:q}),K.push(()=>Q(u,"value",T,o[0].to[1])),{c(){E(e.$$.fragment),t=N(),E(r.$$.fragment),f=N(),E(a.$$.fragment),i=N(),E(u.$$.fragment)},l(k){y(e.$$.fragment,k),t=P(k),y(r.$$.fragment,k),f=P(k),y(a.$$.fragment,k),i=P(k),y(u.$$.fragment,k)},m(k,R){z(e,k,R),p(k,t,R),z(r,k,R),p(k,f,R),z(a,k,R),p(k,i,R),z(u,k,R),S=!0},p(k,[R]){const H={};!n&&R&1&&(n=!0,H.color=k[0].from[0],Z(()=>n=!1)),e.$set(H);const W={};!s&&R&1&&(s=!0,W.value=k[0].from[1],Z(()=>s=!1)),r.$set(W);const g={};!l&&R&1&&(l=!0,g.color=k[0].to[0],Z(()=>l=!1)),a.$set(g);const C={};!m&&R&1&&(m=!0,C.value=k[0].to[1],Z(()=>m=!1)),u.$set(C)},i(k){S||(h(e.$$.fragment,k),h(r.$$.fragment,k),h(a.$$.fragment,k),h(u.$$.fragment,k),S=!0)},o(k){b(e.$$.fragment,k),b(r.$$.fragment,k),b(a.$$.fragment,k),b(u.$$.fragment,k),S=!1},d(k){B(e,k),k&&d(t),B(r,k),k&&d(f),B(a,k),k&&d(i),B(u,k)}}}function tt(o){const e=o.from[1]===600?`"${o.from[0]}"`:`["${o.from[0]}", ${o.from[1]}]`,n=o.to[1]===600?`"${o.to[0]}"`:`["${o.to[0]}", ${o.to[1]}]`;return`{{ from: ${e}, to: ${n} }}`}function _t(o,e,n){let{gradient:t={from:["indigo",600],to:["sky",600]}}=e;function r(l){o.$$.not_equal(t.from[0],l)&&(t.from[0]=l,n(0,t))}function s(l){o.$$.not_equal(t.from[1],l)&&(t.from[1]=l,n(0,t))}function f(l){o.$$.not_equal(t.to[0],l)&&(t.to[0]=l,n(0,t))}function a(l){o.$$.not_equal(t.to[1],l)&&(t.to[1]=l,n(0,t))}return o.$$set=l=>{"gradient"in l&&n(0,t=l.gradient)},[t,r,s,f,a]}class nt extends me{constructor(e){super(),_e(this,e,_t,mt,ge,{gradient:0})}}function Ae(o){let e,n;return e=new ee({props:{class:"d4r-transition-all",variant:o[6],disabled:o[2],color:o[5],size:o[0],radius:o[8],gradient:o[7],$$slots:{default:[gt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.variant=t[6]),r&4&&(s.disabled=t[2]),r&32&&(s.color=t[5]),r&1&&(s.size=t[0]),r&256&&(s.radius=t[8]),r&128&&(s.gradient=t[7]),r&2097154&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function gt(o){let e;return{c(){e=I(o[1])},l(n){e=D(n,o[1])},m(n,t){p(n,e,t)},p(n,t){t&2&&Oe(e,n[1])},d(n){n&&d(e)}}}function Le(o){let e,n;return e=new ee({props:{variant:o[6],disabled:o[2],color:o[5],size:o[0],radius:o[8],gradient:o[7],$$slots:{"icon-start":[bt],default:[ht]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.variant=t[6]),r&4&&(s.disabled=t[2]),r&32&&(s.color=t[5]),r&1&&(s.size=t[0]),r&256&&(s.radius=t[8]),r&128&&(s.gradient=t[7]),r&2097154&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function ht(o){let e;return{c(){e=I(o[1])},l(n){e=D(n,o[1])},m(n,t){p(n,e,t)},p(n,t){t&2&&Oe(e,n[1])},d(n){n&&d(e)}}}function bt(o){let e,n;return e=new he({props:{slot:"icon-start"}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p:x,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Me(o){let e,n;return e=new ee({props:{variant:o[6],disabled:o[2],color:o[5],size:o[0],radius:o[8],gradient:o[7],$$slots:{"icon-end":[kt],default:[vt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.variant=t[6]),r&4&&(s.disabled=t[2]),r&32&&(s.color=t[5]),r&1&&(s.size=t[0]),r&256&&(s.radius=t[8]),r&128&&(s.gradient=t[7]),r&2097154&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function vt(o){let e;return{c(){e=I(o[1])},l(n){e=D(n,o[1])},m(n,t){p(n,e,t)},p(n,t){t&2&&Oe(e,n[1])},d(n){n&&d(e)}}}function kt(o){let e,n;return e=new he({props:{slot:"icon-end"}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p:x,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Re(o){let e,n;return e=new ee({props:{variant:o[6],disabled:o[2],color:o[5],size:o[0],radius:o[8],gradient:o[7],$$slots:{"icon-end":[Ot],"icon-start":[St],default:[wt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.variant=t[6]),r&4&&(s.disabled=t[2]),r&32&&(s.color=t[5]),r&1&&(s.size=t[0]),r&256&&(s.radius=t[8]),r&128&&(s.gradient=t[7]),r&2097154&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function wt(o){let e;return{c(){e=I(o[1])},l(n){e=D(n,o[1])},m(n,t){p(n,e,t)},p(n,t){t&2&&Oe(e,n[1])},d(n){n&&d(e)}}}function St(o){let e,n;return e=new he({props:{slot:"icon-start"}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p:x,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ot(o){let e,n;return e=new he({props:{slot:"icon-end"}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p:x,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Tt(o){let e,n,t,r,s,f=!o[3]&&!o[4]&&Ae(o),a=o[3]&&!o[4]&&Le(o),l=!o[3]&&o[4]&&Me(o),i=o[3]&&o[4]&&Re(o);return{c(){f&&f.c(),e=N(),a&&a.c(),n=N(),l&&l.c(),t=N(),i&&i.c(),r=ve()},l(u){f&&f.l(u),e=P(u),a&&a.l(u),n=P(u),l&&l.l(u),t=P(u),i&&i.l(u),r=ve()},m(u,m){f&&f.m(u,m),p(u,e,m),a&&a.m(u,m),p(u,n,m),l&&l.m(u,m),p(u,t,m),i&&i.m(u,m),p(u,r,m),s=!0},p(u,m){!u[3]&&!u[4]?f?(f.p(u,m),m&24&&h(f,1)):(f=Ae(u),f.c(),h(f,1),f.m(e.parentNode,e)):f&&(le(),b(f,1,1,()=>{f=null}),se()),u[3]&&!u[4]?a?(a.p(u,m),m&24&&h(a,1)):(a=Le(u),a.c(),h(a,1),a.m(n.parentNode,n)):a&&(le(),b(a,1,1,()=>{a=null}),se()),!u[3]&&u[4]?l?(l.p(u,m),m&24&&h(l,1)):(l=Me(u),l.c(),h(l,1),l.m(t.parentNode,t)):l&&(le(),b(l,1,1,()=>{l=null}),se()),u[3]&&u[4]?i?(i.p(u,m),m&24&&h(i,1)):(i=Re(u),i.c(),h(i,1),i.m(r.parentNode,r)):i&&(le(),b(i,1,1,()=>{i=null}),se())},i(u){s||(h(f),h(a),h(l),h(i),s=!0)},o(u){b(f),b(a),b(l),b(i),s=!1},d(u){f&&f.d(u),u&&d(e),a&&a.d(u),u&&d(n),l&&l.d(u),u&&d(t),i&&i.d(u),u&&d(r)}}}function Et(o){let e,n,t,r,s,f,a,l,i,u,m,S,$,O,j,G,w;return{c(){e=L("option"),n=I("Solid"),t=N(),r=L("option"),s=I("Outline"),f=N(),a=L("option"),l=I("Dashed"),i=N(),u=L("option"),m=I("Light"),S=N(),$=L("option"),O=I("Subtle"),j=N(),G=L("option"),w=I("Gradient"),this.h()},l(c){e=M(c,"OPTION",{});var T=V(e);n=D(T,"Solid"),T.forEach(d),t=P(c),r=M(c,"OPTION",{});var q=V(r);s=D(q,"Outline"),q.forEach(d),f=P(c),a=M(c,"OPTION",{});var k=V(a);l=D(k,"Dashed"),k.forEach(d),i=P(c),u=M(c,"OPTION",{});var R=V(u);m=D(R,"Light"),R.forEach(d),S=P(c),$=M(c,"OPTION",{});var H=V($);O=D(H,"Subtle"),H.forEach(d),j=P(c),G=M(c,"OPTION",{});var W=V(G);w=D(W,"Gradient"),W.forEach(d),this.h()},h(){e.__value="solid",e.value=e.__value,r.__value="outline",r.value=r.__value,a.__value="outline-dashed",a.value=a.__value,u.__value="light",u.value=u.__value,$.__value="subtle",$.value=$.__value,G.__value="gradient",G.value=G.__value},m(c,T){p(c,e,T),A(e,n),p(c,t,T),p(c,r,T),A(r,s),p(c,f,T),p(c,a,T),A(a,l),p(c,i,T),p(c,u,T),A(u,m),p(c,S,T),p(c,$,T),A($,O),p(c,j,T),p(c,G,T),A(G,w)},p:x,d(c){c&&d(e),c&&d(t),c&&d(r),c&&d(f),c&&d(a),c&&d(i),c&&d(u),c&&d(S),c&&d($),c&&d(j),c&&d(G)}}}function yt(o){let e,n,t,r,s,f,a,l;return{c(){e=L("option"),n=I("Base"),t=N(),r=L("option"),s=I("Small"),f=N(),a=L("option"),l=I("Xs"),this.h()},l(i){e=M(i,"OPTION",{});var u=V(e);n=D(u,"Base"),u.forEach(d),t=P(i),r=M(i,"OPTION",{});var m=V(r);s=D(m,"Small"),m.forEach(d),f=P(i),a=M(i,"OPTION",{});var S=V(a);l=D(S,"Xs"),S.forEach(d),this.h()},h(){e.__value="base",e.value=e.__value,r.__value="sm",r.value=r.__value,a.__value="xs",a.value=a.__value},m(i,u){p(i,e,u),A(e,n),p(i,t,u),p(i,r,u),A(r,s),p(i,f,u),p(i,a,u),A(a,l)},p:x,d(i){i&&d(e),i&&d(t),i&&d(r),i&&d(f),i&&d(a)}}}function qe(o){let e,n,t;function r(f){o[17](f)}let s={};return o[7]!==void 0&&(s.gradient=o[7]),e=new nt({props:s}),K.push(()=>Q(e,"gradient",r,o[7])),{c(){E(e.$$.fragment)},l(f){y(e.$$.fragment,f)},m(f,a){z(e,f,a),t=!0},p(f,a){const l={};!n&&a&128&&(n=!0,l.gradient=f[7],Z(()=>n=!1)),e.$set(l)},i(f){t||(h(e.$$.fragment,f),t=!0)},o(f){b(e.$$.fragment,f),t=!1},d(f){B(e,f)}}}function zt(o){let e,n,t,r,s,f,a,l,i,u,m,S,$,O,j,G,w,c,T,q,k,R,H,W,g,C,F,re;function ae(_){o[12](_)}let v={id:"button-content",label:"Content"};o[1]!==void 0&&(v.value=o[1]),n=new dt({props:v}),K.push(()=>Q(n,"value",ae,o[1]));function J(_){o[13](_)}let te={label:"Variant",$$slots:{default:[Et]},$$scope:{ctx:o}};o[6]!==void 0&&(te.value=o[6]),s=new we({props:te}),K.push(()=>Q(s,"value",J,o[6]));function oe(_){o[14](_)}let ie={label:"Size",$$slots:{default:[yt]},$$scope:{ctx:o}};o[0]!==void 0&&(ie.value=o[0]),l=new we({props:ie}),K.push(()=>Q(l,"value",oe,o[0]));function fe(_){o[15](_)}let ce={};o[8]!==void 0&&(ce.radius=o[8]),S=new et({props:ce}),K.push(()=>Q(S,"radius",fe,o[8]));function rt(_){o[16](_)}let ye={};o[5]!==void 0&&(ye.color=o[5]),j=new Se({props:ye}),K.push(()=>Q(j,"color",rt,o[5]));let Y=o[6]==="gradient"&&qe(o);function ot(_){o[18](_)}let ze={label:"Disabled"};o[2]!==void 0&&(ze.checked=o[2]),q=new be({props:ze}),K.push(()=>Q(q,"checked",ot,o[2]));function it(_){o[19](_)}let Be={label:"Icon Start"};o[3]!==void 0&&(Be.checked=o[3]),H=new be({props:Be}),K.push(()=>Q(H,"checked",it,o[3]));function lt(_){o[20](_)}let Ce={label:"Icon End"};return o[4]!==void 0&&(Ce.checked=o[4]),C=new be({props:Ce}),K.push(()=>Q(C,"checked",lt,o[4])),{c(){e=L("div"),E(n.$$.fragment),r=N(),E(s.$$.fragment),a=N(),E(l.$$.fragment),u=N(),m=L("div"),E(S.$$.fragment),O=N(),E(j.$$.fragment),w=N(),Y&&Y.c(),c=N(),T=L("div"),E(q.$$.fragment),R=N(),E(H.$$.fragment),g=N(),E(C.$$.fragment),this.h()},l(_){e=M(_,"DIV",{});var X=V(e);y(n.$$.fragment,X),X.forEach(d),r=P(_),y(s.$$.fragment,_),a=P(_),y(l.$$.fragment,_),u=P(_),m=M(_,"DIV",{});var pe=V(m);y(S.$$.fragment,pe),pe.forEach(d),O=P(_),y(j.$$.fragment,_),w=P(_),Y&&Y.l(_),c=P(_),T=M(_,"DIV",{class:!0});var ne=V(T);y(q.$$.fragment,ne),R=P(ne),y(H.$$.fragment,ne),g=P(ne),y(C.$$.fragment,ne),ne.forEach(d),this.h()},h(){U(T,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(_,X){p(_,e,X),z(n,e,null),p(_,r,X),z(s,_,X),p(_,a,X),z(l,_,X),p(_,u,X),p(_,m,X),z(S,m,null),p(_,O,X),z(j,_,X),p(_,w,X),Y&&Y.m(_,X),p(_,c,X),p(_,T,X),z(q,T,null),A(T,R),z(H,T,null),A(T,g),z(C,T,null),re=!0},p(_,X){const pe={};!t&&X&2&&(t=!0,pe.value=_[1],Z(()=>t=!1)),n.$set(pe);const ne={};X&2097152&&(ne.$$scope={dirty:X,ctx:_}),!f&&X&64&&(f=!0,ne.value=_[6],Z(()=>f=!1)),s.$set(ne);const Te={};X&2097152&&(Te.$$scope={dirty:X,ctx:_}),!i&&X&1&&(i=!0,Te.value=_[0],Z(()=>i=!1)),l.$set(Te);const Ie={};!$&&X&256&&($=!0,Ie.radius=_[8],Z(()=>$=!1)),S.$set(Ie);const De={};!G&&X&32&&(G=!0,De.color=_[5],Z(()=>G=!1)),j.$set(De),_[6]==="gradient"?Y?(Y.p(_,X),X&64&&h(Y,1)):(Y=qe(_),Y.c(),h(Y,1),Y.m(c.parentNode,c)):Y&&(le(),b(Y,1,1,()=>{Y=null}),se());const Ne={};!k&&X&4&&(k=!0,Ne.checked=_[2],Z(()=>k=!1)),q.$set(Ne);const Pe={};!W&&X&8&&(W=!0,Pe.checked=_[3],Z(()=>W=!1)),H.$set(Pe);const Ge={};!F&&X&16&&(F=!0,Ge.checked=_[4],Z(()=>F=!1)),C.$set(Ge)},i(_){re||(h(n.$$.fragment,_),h(s.$$.fragment,_),h(l.$$.fragment,_),h(S.$$.fragment,_),h(j.$$.fragment,_),h(Y),h(q.$$.fragment,_),h(H.$$.fragment,_),h(C.$$.fragment,_),re=!0)},o(_){b(n.$$.fragment,_),b(s.$$.fragment,_),b(l.$$.fragment,_),b(S.$$.fragment,_),b(j.$$.fragment,_),b(Y),b(q.$$.fragment,_),b(H.$$.fragment,_),b(C.$$.fragment,_),re=!1},d(_){_&&d(e),B(n),_&&d(r),B(s,_),_&&d(a),B(l,_),_&&d(u),_&&d(m),B(S),_&&d(O),B(j,_),_&&d(w),Y&&Y.d(_),_&&d(c),_&&d(T),B(q),B(H),B(C)}}}function Bt(o){let e,n;return e=new ke({props:{title:"Demo",code:o[9],$$slots:{controls:[zt],preview:[Tt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,[r]){const s={};r&512&&(s.code=t[9]),r&2097663&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ct(o,e,n){let t,r;const s=xe();Ye(o,s,W=>n(11,r=W));let f="Confirm",a=!1,l=!1,i=!1,u,m="solid",{size:S="base"}=e,$={from:["indigo",600],to:["sky",600]},O=r.radiuses.button;function j(W){f=W,n(1,f)}function G(W){m=W,n(6,m)}function w(W){S=W,n(0,S)}function c(W){O=W,n(8,O)}function T(W){u=W,n(5,u)}function q(W){$=W,n(7,$)}function k(W){a=W,n(2,a)}function R(W){l=W,n(3,l)}function H(W){i=W,n(4,i)}return o.$$set=W=>{"size"in W&&n(0,S=W.size)},o.$$.update=()=>{o.$$.dirty&2559&&n(9,t=$e({name:"Button",children:[l?$e({name:"ClipboardCheck",props:{slot:"icon-start"}}):void 0,f,i?$e({name:"ClipboardCheck",props:{slot:"icon-end"}}):void 0],props:{disabled:a,color:u,variant:m==="solid"?void 0:m,size:S==="base"?void 0:S,radius:O===r.radiuses.button?void 0:O,gradient:m==="gradient"?tt($):void 0}}))},[S,f,a,l,i,u,m,$,O,t,s,r,j,G,w,c,T,q,k,R,H]}class It extends me{constructor(e){super(),_e(this,e,Ct,Bt,ge,{size:0})}}function Dt(o){let e,n;return{c(){e=L("span"),n=I(`The IconButton features a centered icon without any text. It's a modification of the Button
		component, adding a label property for improved accessibility.`),this.h()},l(t){e=M(t,"SPAN",{slot:!0});var r=V(e);n=D(r,`The IconButton features a centered icon without any text. It's a modification of the Button
		component, adding a label property for improved accessibility.`),r.forEach(d),this.h()},h(){U(e,"slot","description")},m(t,r){p(t,e,r),A(e,n)},p:x,d(t){t&&d(e)}}}function Nt(o){let e,n;return e=new he({}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Pt(o){let e,n;return e=new Qe({props:{label:"Example",variant:o[3],disabled:o[1],color:o[2],size:o[0],radius:o[5],gradient:o[4],$$slots:{default:[Nt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.variant=t[3]),r&2&&(s.disabled=t[1]),r&4&&(s.color=t[2]),r&1&&(s.size=t[0]),r&32&&(s.radius=t[5]),r&16&&(s.gradient=t[4]),r&32768&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Gt(o){let e,n,t,r,s,f,a,l,i,u,m,S,$,O,j,G,w;return{c(){e=L("option"),n=I("Solid"),t=N(),r=L("option"),s=I("Outline"),f=N(),a=L("option"),l=I("Dashed"),i=N(),u=L("option"),m=I("Light"),S=N(),$=L("option"),O=I("Subtle"),j=N(),G=L("option"),w=I("Gradient"),this.h()},l(c){e=M(c,"OPTION",{});var T=V(e);n=D(T,"Solid"),T.forEach(d),t=P(c),r=M(c,"OPTION",{});var q=V(r);s=D(q,"Outline"),q.forEach(d),f=P(c),a=M(c,"OPTION",{});var k=V(a);l=D(k,"Dashed"),k.forEach(d),i=P(c),u=M(c,"OPTION",{});var R=V(u);m=D(R,"Light"),R.forEach(d),S=P(c),$=M(c,"OPTION",{});var H=V($);O=D(H,"Subtle"),H.forEach(d),j=P(c),G=M(c,"OPTION",{});var W=V(G);w=D(W,"Gradient"),W.forEach(d),this.h()},h(){e.__value="solid",e.value=e.__value,r.__value="outline",r.value=r.__value,a.__value="outline-dashed",a.value=a.__value,u.__value="light",u.value=u.__value,$.__value="subtle",$.value=$.__value,G.__value="gradient",G.value=G.__value},m(c,T){p(c,e,T),A(e,n),p(c,t,T),p(c,r,T),A(r,s),p(c,f,T),p(c,a,T),A(a,l),p(c,i,T),p(c,u,T),A(u,m),p(c,S,T),p(c,$,T),A($,O),p(c,j,T),p(c,G,T),A(G,w)},p:x,d(c){c&&d(e),c&&d(t),c&&d(r),c&&d(f),c&&d(a),c&&d(i),c&&d(u),c&&d(S),c&&d($),c&&d(j),c&&d(G)}}}function jt(o){let e,n,t,r,s,f,a,l;return{c(){e=L("option"),n=I("Base"),t=N(),r=L("option"),s=I("Small"),f=N(),a=L("option"),l=I("Xs"),this.h()},l(i){e=M(i,"OPTION",{});var u=V(e);n=D(u,"Base"),u.forEach(d),t=P(i),r=M(i,"OPTION",{});var m=V(r);s=D(m,"Small"),m.forEach(d),f=P(i),a=M(i,"OPTION",{});var S=V(a);l=D(S,"Xs"),S.forEach(d),this.h()},h(){e.__value="base",e.value=e.__value,r.__value="sm",r.value=r.__value,a.__value="xs",a.value=a.__value},m(i,u){p(i,e,u),A(e,n),p(i,t,u),p(i,r,u),A(r,s),p(i,f,u),p(i,a,u),A(a,l)},p:x,d(i){i&&d(e),i&&d(t),i&&d(r),i&&d(f),i&&d(a)}}}function Fe(o){let e,n,t;function r(f){o[13](f)}let s={};return o[4]!==void 0&&(s.gradient=o[4]),e=new nt({props:s}),K.push(()=>Q(e,"gradient",r,o[4])),{c(){E(e.$$.fragment)},l(f){y(e.$$.fragment,f)},m(f,a){z(e,f,a),t=!0},p(f,a){const l={};!n&&a&16&&(n=!0,l.gradient=f[4],Z(()=>n=!1)),e.$set(l)},i(f){t||(h(e.$$.fragment,f),t=!0)},o(f){b(e.$$.fragment,f),t=!1},d(f){B(e,f)}}}function Wt(o){let e,n,t,r,s,f,a,l,i,u,m,S,$,O,j,G,w,c;function T(v){o[9](v)}let q={label:"Variant",$$slots:{default:[Gt]},$$scope:{ctx:o}};o[3]!==void 0&&(q.value=o[3]),e=new we({props:q}),K.push(()=>Q(e,"value",T,o[3]));function k(v){o[10](v)}let R={label:"Size",$$slots:{default:[jt]},$$scope:{ctx:o}};o[0]!==void 0&&(R.value=o[0]),r=new we({props:R}),K.push(()=>Q(r,"value",k,o[0]));function H(v){o[11](v)}let W={};o[5]!==void 0&&(W.radius=o[5]),l=new et({props:W}),K.push(()=>Q(l,"radius",H,o[5]));function g(v){o[12](v)}let C={};o[2]!==void 0&&(C.color=o[2]),m=new Se({props:C}),K.push(()=>Q(m,"color",g,o[2]));let F=o[3]==="gradient"&&Fe(o);function re(v){o[14](v)}let ae={label:"Disabled"};return o[1]!==void 0&&(ae.checked=o[1]),G=new be({props:ae}),K.push(()=>Q(G,"checked",re,o[1])),{c(){E(e.$$.fragment),t=N(),E(r.$$.fragment),f=N(),a=L("div"),E(l.$$.fragment),u=N(),E(m.$$.fragment),$=N(),F&&F.c(),O=N(),j=L("div"),E(G.$$.fragment),this.h()},l(v){y(e.$$.fragment,v),t=P(v),y(r.$$.fragment,v),f=P(v),a=M(v,"DIV",{});var J=V(a);y(l.$$.fragment,J),J.forEach(d),u=P(v),y(m.$$.fragment,v),$=P(v),F&&F.l(v),O=P(v),j=M(v,"DIV",{class:!0});var te=V(j);y(G.$$.fragment,te),te.forEach(d),this.h()},h(){U(j,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(v,J){z(e,v,J),p(v,t,J),z(r,v,J),p(v,f,J),p(v,a,J),z(l,a,null),p(v,u,J),z(m,v,J),p(v,$,J),F&&F.m(v,J),p(v,O,J),p(v,j,J),z(G,j,null),c=!0},p(v,J){const te={};J&32768&&(te.$$scope={dirty:J,ctx:v}),!n&&J&8&&(n=!0,te.value=v[3],Z(()=>n=!1)),e.$set(te);const oe={};J&32768&&(oe.$$scope={dirty:J,ctx:v}),!s&&J&1&&(s=!0,oe.value=v[0],Z(()=>s=!1)),r.$set(oe);const ie={};!i&&J&32&&(i=!0,ie.radius=v[5],Z(()=>i=!1)),l.$set(ie);const fe={};!S&&J&4&&(S=!0,fe.color=v[2],Z(()=>S=!1)),m.$set(fe),v[3]==="gradient"?F?(F.p(v,J),J&8&&h(F,1)):(F=Fe(v),F.c(),h(F,1),F.m(O.parentNode,O)):F&&(le(),b(F,1,1,()=>{F=null}),se());const ce={};!w&&J&2&&(w=!0,ce.checked=v[1],Z(()=>w=!1)),G.$set(ce)},i(v){c||(h(e.$$.fragment,v),h(r.$$.fragment,v),h(l.$$.fragment,v),h(m.$$.fragment,v),h(F),h(G.$$.fragment,v),c=!0)},o(v){b(e.$$.fragment,v),b(r.$$.fragment,v),b(l.$$.fragment,v),b(m.$$.fragment,v),b(F),b(G.$$.fragment,v),c=!1},d(v){B(e,v),v&&d(t),B(r,v),v&&d(f),v&&d(a),B(l),v&&d(u),B(m,v),v&&d($),F&&F.d(v),v&&d(O),v&&d(j),B(G)}}}function Vt(o){let e,n;return e=new ke({props:{title:"IconButton",code:o[6],$$slots:{controls:[Wt],preview:[Pt],description:[Dt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,[r]){const s={};r&64&&(s.code=t[6]),r&32831&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function At(o,e,n){let t,r;const s=xe();Ye(o,s,c=>n(8,r=c));let f=!1,a,l="subtle",{size:i="base"}=e,u={from:["indigo",600],to:["sky",600]},m=r.radiuses.button;function S(c){l=c,n(3,l)}function $(c){i=c,n(0,i)}function O(c){m=c,n(5,m)}function j(c){a=c,n(2,a)}function G(c){u=c,n(4,u)}function w(c){f=c,n(1,f)}return o.$$set=c=>{"size"in c&&n(0,i=c.size)},o.$$.update=()=>{o.$$.dirty&319&&n(6,t=$e({name:"IconButton",children:[$e({name:"ClipboardCheck"})],props:{label:"Example",disabled:f,color:a,variant:l==="subtle"?void 0:l,size:i==="base"?void 0:i,radius:m===r.radiuses.button?void 0:m,gradient:l==="gradient"?tt(u):void 0}}))},[i,f,a,l,u,m,t,s,r,S,$,O,j,G,w]}class Lt extends me{constructor(e){super(),_e(this,e,At,Vt,ge,{size:0})}}const Mt=`<!--
@component
The versatile Button component comes in a variety of styles, including solid, outline, light, and 
subtle, as well as a gradient style. It can also be customized in terms of size and color to fit the
needs of any design. Additionally, the Button can function as a link.
-->
<script lang="ts">
	import { focusOnMount } from '$lib/actions/focusOnMount';
	import type { Shades } from '$lib/colors/color';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';

	/**
	 * The id of the element.
	 */
	export let id: string | undefined = undefined;

	/**
	 * Whether the button should fill the width of its parent.
	 */
	export let fullWidth = false;
	/**
	 * Changes the style of the button to look disabled and prevent the user from clicking it.
	 */
	export let disabled = false;
	/**
	 * The name of a color in the theme. Does not support arbitrary colors.
	 *
	 * When set to \`undefined\`, the primary color of the theme will be used.
	 */
	export let color: string | undefined = undefined;
	/**
	 * The size of the button.
	 */
	export let size: 'xs' | 'sm' | 'base' = 'base';
	/**
	 * The border radius of the button. When set to \`undefined\`, the button will have the default
	 * border radius defined in the theme.
	 */
	export let radius: Radius | undefined = undefined;
	/**
	 * When set to \`true\`, the text of the button will not be truncated when the button is too small
	 * to fit its content. Therefore the button might overflow its parent.
	 */
	export let noTruncate = false;

	/**
	 * When set, the button will be rendered as a link with the given href.
	 */
	export let href: string | undefined = undefined;
	/**
	 * The target of the link. Only works when the \`href\` prop is set.
	 */
	export let target: string | undefined = undefined;

	/**
	 * When set to \`true\`, automatically focuses the element when the component is mounted.
	 *
	 * This is useful for usability and accessibility reasons, for example to focus an element
	 * when a modal is opened.
	 */
	export let autoFocus = false;

	/**
	 * The appearance of the button.
	 *
	 * - \`solid\` - A button with a background color.
	 * - \`outline\` - A button with a border and no background color.
	 * - \`outline-dashed\` - A button with a dashed border and no background color.
	 * - \`light\` - A button with a light background color.
	 * - \`subtle\` - A button without a background color.
	 * - \`gradient\` - A button with a gradient background color. The gradient can be customized with
	 *   the \`gradient\` prop.
	 *
	 * Defaults to \`solid\`.
	 */
	export let variant: 'solid' | 'outline' | 'outline-dashed' | 'light' | 'subtle' | 'gradient' =
		'solid';

	/**
	 * Defines the gradient background of the button when the variant is set to \`gradient\`.
	 *
	 * Can either be a raw CSS gradient string or an object with from and to fields. These fields
	 * can take a color name, in which case the 600 shade will be used, or an array tuple with a
	 * color name and shade. It's recommended setting the \`color\` prop as well, as it will be used for
	 * the outline color when the button is selected.
	 *
	 * Only works when the variant is set to \`gradient\`.
	 *
	 * Example:
	 * \`\`\`jsx
	 * <Button variant="gradient" gradient="radial-gradient(#f71600, #ffc135)" color="orange">
	 *     Gradient
	 * </Button>
	 *
	 * <Button variant="gradient" gradient={{ from: "cyan", to: "violet" }} color="blue">
	 *     Object Gradient
	 * </Button>
	 *
	 * <Button variant="gradient" gradient={{ from: ["cyan", 100], to: ["violet", 900] }} color="blue">
	 *     Object Gradient With Shades
	 * </Button>
	 * \`\`\`
	 */
	export let gradient:
		| { from: string | [string, Shades]; to: string | [string, Shades] }
		| string
		| undefined = { from: 'primary', to: 'primary' };

	/**
	 * Where the button content should be placed when the button is wider than its content.
	 */
	export let contentJustify: 'start' | 'center' | 'end' = 'center';

	let className = '';
	/**
	 * Additional CSS classes to add to the button.
	 * Be careful when using this prop, as it can conflict with the default styles of the button.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export { className as class };

	let usedColorShade: Shades[];
	$: {
		if (variant === 'solid') {
			usedColorShade = [300, 600, 700];
		} else if (variant === 'outline' || variant === 'outline-dashed') {
			usedColorShade = [50, 300, 500, 700, 800];
		} else if (variant === 'light') {
			usedColorShade = [200, 300, 500, 600, 700];
		} else if (variant === 'subtle') {
			usedColorShade = [300, 600];
		} else if (variant === 'gradient') {
			usedColorShade = [300, 600];
		} else {
			usedColorShade = [];
		}
	}

	let gradientStyle: string;
	$: {
		if (variant === 'gradient') {
			if (typeof gradient === 'string') {
				gradientStyle = \`background: \${gradient};\`;
			} else if (typeof gradient === 'object') {
				const fromColorName =
					typeof gradient.from === 'string'
						? \`\${gradient.from}-600\`
						: \`\${gradient.from[0]}-\${gradient.from[1]}\`;
				const toColorName =
					typeof gradient.to === 'string'
						? \`\${gradient.to}-600\`
						: \`\${gradient.to[0]}-\${gradient.to[1]}\`;
				gradientStyle = \`background: linear-gradient(90deg, rgb(var(--d4r-color-\${fromColorName})) 0%, rgb(var(--d4r-color-\${toColorName})) 100%);\`;
			} else {
				gradientStyle = '';
			}
		} else {
			gradientStyle = '';
		}
	}
<\/script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? 'button' : undefined}
	{id}
	{href}
	{target}
	class="button {className}"
	class:d4r-w-full={fullWidth}
	style="{overwriteColor(color, usedColorShade)}{overwriteRadius(radius, 'button')}{gradientStyle}"
	class:size-base={size === 'base'}
	class:size-sm={size === 'sm'}
	class:size-xs={size === 'xs'}
	class:outline={variant === 'outline' || variant === 'outline-dashed'}
	class:outline-dashed={variant === 'outline-dashed'}
	class:gradient={variant === 'gradient'}
	class:solid={variant === 'solid'}
	class:light={variant === 'light'}
	class:subtle={variant === 'subtle'}
	class:icon-start={$$slots['icon-start']}
	class:icon-end={$$slots['icon-end']}
	class:d4r-justify-start={contentJustify === 'start'}
	class:d4r-justify-center={contentJustify === 'center'}
	class:d4r-justify-end={contentJustify === 'end'}
	class:d4r-truncate={!noTruncate}
	class:d4r-button-icon-base={size === 'base' || size === undefined}
	class:d4r-button-icon-sm={size === 'sm'}
	class:d4r-button-icon-xs={size === 'xs'}
	{disabled}
	use:focusOnMount={autoFocus}
	on:click
	on:keydown
	on:keyup
>
	{#if $$slots['icon-start']}
		<div class="d4r-flex">
			<slot name="icon-start" />
		</div>
	{/if}
	<span class:d4r-truncate={!noTruncate}><slot /></span>
	{#if $$slots['icon-end']}
		<div class="d4r-flex">
			<slot name="icon-end" />
		</div>
	{/if}
</svelte:element>

<style lang="postcss" global>
	:local(.button) {
		@apply d4r-transition-all;
		@apply d4r-rounded-button;
		@apply d4r-appearance-none;
		@apply d4r-inline-flex d4r-items-center d4r-gap-2;
		@apply d4r-font-medium d4r-text-neutral-100;
		@apply d4r-outline-none focus:d4r-outline-none;
		@apply disabled:d4r-opacity-50;
		-webkit-tap-highlight-color: transparent;
	}

	.d4r-button-icon-base svg {
		@apply d4r-h-6 d4r-w-6;
	}

	.d4r-button-icon-sm svg {
		@apply d4r-h-6 d4r-w-6;
	}

	.d4r-button-icon-xs svg {
		@apply d4r-h-5 d4r-w-5;
	}

	:local(.size-base) {
		@apply d4r-h-10 d4r-px-6;
	}

	:local(.icon-start.size-base) {
		@apply d4r-pl-4;
	}

	:local(.icon-end.size-base) {
		@apply d4r-pr-4;
	}

	:local(.size-sm) {
		@apply d4r-h-9 d4r-px-4;
	}

	:local(.icon-start.size-sm) {
		@apply d4r-pl-2;
	}

	:local(.icon-end.size-sm) {
		@apply d4r-pr-2;
	}

	:local(.size-xs) {
		@apply d4r-h-8 d4r-px-3 d4r-text-sm;
	}

	:local(.icon-start.size-xs) {
		@apply d4r-pl-2;
	}

	:local(.icon-end.size-xs) {
		@apply d4r-pr-2;
	}

	:local(.gradient) {
		@apply d4r-text-neutral-100;
		@apply focus:d4r-ring-2 focus:d4r-ring-primary-600/50 focus:d4r-ring-offset-1 dark:focus:d4r-ring-primary-300/50 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.outline) {
		@apply d4r-border d4r-border-primary-300/70 d4r-text-primary-500 hover:d4r-bg-primary-50 dark:d4r-border-primary-300/70 dark:d4r-text-primary-300 dark:hover:d4r-bg-primary-500/20;
		@apply focus:d4r-ring-1 focus:d4r-ring-primary-300/50 focus:d4r-ring-offset-1 dark:focus:d4r-ring-primary-300/50 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.outline.small) {
		@apply !d4r-px-1;
	}

	:local(.outline-dashed) {
		@apply d4r-border-dashed;
	}

	:local(.solid) {
		@apply d4r-bg-primary-600 d4r-text-neutral-100 hover:d4r-bg-primary-700 hover:disabled:d4r-bg-primary-600;
		@apply focus:d4r-ring-2 focus:d4r-ring-primary-600/50 focus:d4r-ring-offset-1 dark:focus:d4r-ring-primary-300/50 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.light) {
		@apply d4r-bg-primary-200/50 d4r-text-primary-500 dark:d4r-bg-primary-700/50 dark:d4r-text-primary-300;
		@apply d4r-border d4r-border-primary-200/0 hover:d4r-border-primary-200 dark:d4r-border-dark-600 dark:hover:d4r-border-dark-400;
		@apply focus:d4r-ring-1 focus:d4r-ring-primary-600/20 focus:d4r-ring-offset-0 dark:focus:d4r-ring-primary-300/20 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.subtle) {
		@apply d4r-text-neutral-500 d4r-ring-opacity-10 hover:d4r-bg-neutral-100 focus:d4r-ring-1 focus:d4r-ring-primary-600/25 focus:d4r-ring-offset-1 dark:d4r-text-neutral-300 dark:hover:d4r-bg-dark-600 dark:focus:d4r-ring-primary-300/25 dark:focus:d4r-ring-offset-dark-800;
	}
</style>
`;function Ue(o,e,n){const t=o.slice();return t[1]=e[n],t}function He(o,e,n){const t=o.slice();return t[4]=e[n],t}function Rt(o){let e;return{c(){e=I("Solid")},l(n){e=D(n,"Solid")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function qt(o){let e;return{c(){e=I("Outline")},l(n){e=D(n,"Outline")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function Ft(o){let e;return{c(){e=I("Dashed")},l(n){e=D(n,"Dashed")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function Ut(o){let e;return{c(){e=I("Light")},l(n){e=D(n,"Light")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function Ht(o){let e;return{c(){e=I("Subtle")},l(n){e=D(n,"Subtle")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function Jt(o){let e;return{c(){e=I("Gradient")},l(n){e=D(n,"Gradient")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function Xt(o){let e,n,t,r,s,f,a,l,i,u,m,S;return e=new ee({props:{$$slots:{default:[Rt]},$$scope:{ctx:o}}}),t=new ee({props:{variant:"outline",$$slots:{default:[qt]},$$scope:{ctx:o}}}),s=new ee({props:{variant:"outline-dashed",$$slots:{default:[Ft]},$$scope:{ctx:o}}}),a=new ee({props:{variant:"light",$$slots:{default:[Ut]},$$scope:{ctx:o}}}),i=new ee({props:{variant:"subtle",$$slots:{default:[Ht]},$$scope:{ctx:o}}}),m=new ee({props:{variant:"gradient",gradient:{from:"indigo",to:"sky"},$$slots:{default:[Jt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment),n=N(),E(t.$$.fragment),r=N(),E(s.$$.fragment),f=N(),E(a.$$.fragment),l=N(),E(i.$$.fragment),u=N(),E(m.$$.fragment)},l($){y(e.$$.fragment,$),n=P($),y(t.$$.fragment,$),r=P($),y(s.$$.fragment,$),f=P($),y(a.$$.fragment,$),l=P($),y(i.$$.fragment,$),u=P($),y(m.$$.fragment,$)},m($,O){z(e,$,O),p($,n,O),z(t,$,O),p($,r,O),z(s,$,O),p($,f,O),z(a,$,O),p($,l,O),z(i,$,O),p($,u,O),z(m,$,O),S=!0},p($,O){const j={};O&128&&(j.$$scope={dirty:O,ctx:$}),e.$set(j);const G={};O&128&&(G.$$scope={dirty:O,ctx:$}),t.$set(G);const w={};O&128&&(w.$$scope={dirty:O,ctx:$}),s.$set(w);const c={};O&128&&(c.$$scope={dirty:O,ctx:$}),a.$set(c);const T={};O&128&&(T.$$scope={dirty:O,ctx:$}),i.$set(T);const q={};O&128&&(q.$$scope={dirty:O,ctx:$}),m.$set(q)},i($){S||(h(e.$$.fragment,$),h(t.$$.fragment,$),h(s.$$.fragment,$),h(a.$$.fragment,$),h(i.$$.fragment,$),h(m.$$.fragment,$),S=!0)},o($){b(e.$$.fragment,$),b(t.$$.fragment,$),b(s.$$.fragment,$),b(a.$$.fragment,$),b(i.$$.fragment,$),b(m.$$.fragment,$),S=!1},d($){B(e,$),$&&d(n),B(t,$),$&&d(r),B(s,$),$&&d(f),B(a,$),$&&d(l),B(i,$),$&&d(u),B(m,$)}}}function Yt(o){let e,n;return e=new Ze({props:{class:"d4r-flex d4r-flex-wrap d4r-items-center d4r-justify-center d4r-gap-4 d4r-p-8",$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&128&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Kt(o){let e;return{c(){e=I("Gradients")},l(n){e=D(n,"Gradients")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function Qt(o){let e,n,t,r,s,f,a,l,i,u,m,S,$,O,j,G;return{c(){e=I("Buttons with the "),n=L("code"),t=I("gradient"),r=I(` variant can be used to display gradients by passing a
			`),s=L("code"),f=I("gradient"),a=I(` prop. This prop can either be a raw CSS gradient string or an object
			with `),l=L("code"),i=I("from"),u=I(" and "),m=L("code"),S=I("to"),$=I(` fields. These fields can take a color name, in
			which case the 600 shade will be used, or an array tuple with a color name and shade. It's
			recommended setting the `),O=L("code"),j=I("color"),G=I(` prop as well, as it will be used for the outline color
			when the button is selected.`)},l(w){e=D(w,"Buttons with the "),n=M(w,"CODE",{});var c=V(n);t=D(c,"gradient"),c.forEach(d),r=D(w,` variant can be used to display gradients by passing a
			`),s=M(w,"CODE",{});var T=V(s);f=D(T,"gradient"),T.forEach(d),a=D(w,` prop. This prop can either be a raw CSS gradient string or an object
			with `),l=M(w,"CODE",{});var q=V(l);i=D(q,"from"),q.forEach(d),u=D(w," and "),m=M(w,"CODE",{});var k=V(m);S=D(k,"to"),k.forEach(d),$=D(w,` fields. These fields can take a color name, in
			which case the 600 shade will be used, or an array tuple with a color name and shade. It's
			recommended setting the `),O=M(w,"CODE",{});var R=V(O);j=D(R,"color"),R.forEach(d),G=D(w,` prop as well, as it will be used for the outline color
			when the button is selected.`)},m(w,c){p(w,e,c),p(w,n,c),A(n,t),p(w,r,c),p(w,s,c),A(s,f),p(w,a,c),p(w,l,c),A(l,i),p(w,u,c),p(w,m,c),A(m,S),p(w,$,c),p(w,O,c),A(O,j),p(w,G,c)},p:x,d(w){w&&d(e),w&&d(n),w&&d(r),w&&d(s),w&&d(a),w&&d(l),w&&d(u),w&&d(m),w&&d($),w&&d(O),w&&d(G)}}}function Zt(o){let e;return{c(){e=I("CSS Gradient")},l(n){e=D(n,"CSS Gradient")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function xt(o){let e;return{c(){e=I("Object Gradient")},l(n){e=D(n,"Object Gradient")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function en(o){let e;return{c(){e=I("Object Gradient With Shades")},l(n){e=D(n,"Object Gradient With Shades")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function tn(o){let e,n,t,r,s,f,a;return n=new ee({props:{variant:"gradient",gradient:"radial-gradient(#f71600, #ffc135)",color:"orange",$$slots:{default:[Zt]},$$scope:{ctx:o}}}),r=new ee({props:{variant:"gradient",gradient:{from:"cyan",to:"violet"},color:"blue",$$slots:{default:[xt]},$$scope:{ctx:o}}}),f=new ee({props:{variant:"gradient",gradient:{from:["cyan",100],to:["violet",900]},color:"blue",$$slots:{default:[en]},$$scope:{ctx:o}}}),{c(){e=L("div"),E(n.$$.fragment),t=N(),E(r.$$.fragment),s=N(),E(f.$$.fragment),this.h()},l(l){e=M(l,"DIV",{slot:!0,class:!0});var i=V(e);y(n.$$.fragment,i),t=P(i),y(r.$$.fragment,i),s=P(i),y(f.$$.fragment,i),i.forEach(d),this.h()},h(){U(e,"slot","preview"),U(e,"class","d4r-flex d4r-flex-wrap d4r-gap-2")},m(l,i){p(l,e,i),z(n,e,null),A(e,t),z(r,e,null),A(e,s),z(f,e,null),a=!0},p(l,i){const u={};i&128&&(u.$$scope={dirty:i,ctx:l}),n.$set(u);const m={};i&128&&(m.$$scope={dirty:i,ctx:l}),r.$set(m);const S={};i&128&&(S.$$scope={dirty:i,ctx:l}),f.$set(S)},i(l){a||(h(n.$$.fragment,l),h(r.$$.fragment,l),h(f.$$.fragment,l),a=!0)},o(l){b(n.$$.fragment,l),b(r.$$.fragment,l),b(f.$$.fragment,l),a=!1},d(l){l&&d(e),B(n),B(r),B(f)}}}function nn(o){let e;return{c(){e=I("Button as Link")},l(n){e=D(n,"Button as Link")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function rn(o){let e,n,t,r,s,f,a;return{c(){e=I("The Button component can be used as a link by passing a "),n=L("code"),t=I("href"),r=I(` prop. This allows
			you to retain the design of a button while using the `),s=L("code"),f=I("a"),a=I(` tag for the underlying HTML
			element. This ensures that your link is accessible and offers a better user experience with features
			like the ability to middle click to open in a new tab. Using the Button component in this way allows
			you to have the best of both worlds: a visually appealing button design and the functionality of
			a link.`)},l(l){e=D(l,"The Button component can be used as a link by passing a "),n=M(l,"CODE",{});var i=V(n);t=D(i,"href"),i.forEach(d),r=D(l,` prop. This allows
			you to retain the design of a button while using the `),s=M(l,"CODE",{});var u=V(s);f=D(u,"a"),u.forEach(d),a=D(l,` tag for the underlying HTML
			element. This ensures that your link is accessible and offers a better user experience with features
			like the ability to middle click to open in a new tab. Using the Button component in this way allows
			you to have the best of both worlds: a visually appealing button design and the functionality of
			a link.`)},m(l,i){p(l,e,i),p(l,n,i),A(n,t),p(l,r,i),p(l,s,i),A(s,f),p(l,a,i)},p:x,d(l){l&&d(e),l&&d(n),l&&d(r),l&&d(s),l&&d(a)}}}function on(o){let e;return{c(){e=I("I am a link in disguise!")},l(n){e=D(n,"I am a link in disguise!")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function ln(o){let e,n,t;return n=new ee({props:{href:"https://google.com",target:"_blank",$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){e=L("div"),E(n.$$.fragment),this.h()},l(r){e=M(r,"DIV",{slot:!0});var s=V(e);y(n.$$.fragment,s),s.forEach(d),this.h()},h(){U(e,"slot","preview")},m(r,s){p(r,e,s),z(n,e,null),t=!0},p(r,s){const f={};s&128&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){t||(h(n.$$.fragment,r),t=!0)},o(r){b(n.$$.fragment,r),t=!1},d(r){r&&d(e),B(n)}}}function sn(o){let e;return{c(){e=I("✓")},l(n){e=D(n,"✓")},m(n,t){p(n,e,t)},d(n){n&&d(e)}}}function Je(o){let e,n;return e=new Qe({props:{label:"Example",size:"xs",variant:o[1],color:o[4],$$slots:{default:[sn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&128&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Xe(o){let e,n,t,r=["gray","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],s=[];for(let a=0;a<18;a+=1)s[a]=Je(He(o,r,a));const f=a=>b(s[a],1,1,()=>{s[a]=null});return{c(){e=L("div");for(let a=0;a<18;a+=1)s[a].c();n=N(),this.h()},l(a){e=M(a,"DIV",{class:!0});var l=V(e);for(let i=0;i<18;i+=1)s[i].l(l);n=P(l),l.forEach(d),this.h()},h(){U(e,"class","d4r-flex d4r-flex-wrap d4r-items-center d4r-justify-center d4r-gap-1")},m(a,l){p(a,e,l);for(let i=0;i<18;i+=1)s[i].m(e,null);A(e,n),t=!0},p(a,l){if(l&1){r=["gray","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"];let i;for(i=0;i<18;i+=1){const u=He(a,r,i);s[i]?(s[i].p(u,l),h(s[i],1)):(s[i]=Je(u),s[i].c(),h(s[i],1),s[i].m(e,n))}for(le(),i=18;i<18;i+=1)f(i);se()}},i(a){if(!t){for(let l=0;l<18;l+=1)h(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<18;l+=1)b(s[l]);t=!1},d(a){a&&d(e),Ke(s,a)}}}function an(o){let e,n,t=o[0],r=[];for(let f=0;f<t.length;f+=1)r[f]=Xe(Ue(o,t,f));const s=f=>b(r[f],1,1,()=>{r[f]=null});return{c(){for(let f=0;f<r.length;f+=1)r[f].c();e=ve()},l(f){for(let a=0;a<r.length;a+=1)r[a].l(f);e=ve()},m(f,a){for(let l=0;l<r.length;l+=1)r[l].m(f,a);p(f,e,a),n=!0},p(f,a){if(a&1){t=f[0];let l;for(l=0;l<t.length;l+=1){const i=Ue(f,t,l);r[l]?(r[l].p(i,a),h(r[l],1)):(r[l]=Xe(i),r[l].c(),h(r[l],1),r[l].m(e.parentNode,e))}for(le(),l=t.length;l<r.length;l+=1)s(l);se()}},i(f){if(!n){for(let a=0;a<t.length;a+=1)h(r[a]);n=!0}},o(f){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);n=!1},d(f){Ke(r,f),f&&d(e)}}}function fn(o){let e,n;return e=new Ze({props:{class:"d4r-space-y-2 d4r-p-8",$$slots:{default:[an]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p(t,r){const s={};r&128&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function un(o){let e,n;return{c(){e=L("span"),n=I(`The default color palette of Dapper UI is a replica of TailwindCSS's color palette. You can
			see it in action below.`),this.h()},l(t){e=M(t,"SPAN",{slot:!0});var r=V(e);n=D(r,`The default color palette of Dapper UI is a replica of TailwindCSS's color palette. You can
			see it in action below.`),r.forEach(d),this.h()},h(){U(e,"slot","description")},m(t,r){p(t,e,r),A(e,n)},p:x,d(t){t&&d(e)}}}function dn(o){let e,n;return e=new ct({props:{componentSrc:Mt}}),{c(){E(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){z(e,t,r),n=!0},p:x,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function cn(o){let e,n,t,r,s,f,a,l,i,u,m,S,$,O,j,G,w,c,T,q,k,R,H,W;return e=new It({}),t=new Ee({props:{title:"Variants",$$slots:{default:[Yt]},$$scope:{ctx:o}}}),f=new je({props:{$$slots:{default:[Kt]},$$scope:{ctx:o}}}),l=new We({props:{$$slots:{default:[Qt]},$$scope:{ctx:o}}}),u=new ke({props:{code:`<Button variant="gradient" gradient="radial-gradient(#f71600, #ffc135)" color="orange">
    Gradient
</Button>
<Button variant="gradient" gradient={{ from: "cyan", to: "violet" }} color="blue">
    Object Gradient
</Button>
<Button variant="gradient" gradient={{ from: ["cyan", 100], to: ["violet", 900] }} color="blue">
    Object Gradient With Shades
</Button>`,$$slots:{preview:[tn]},$$scope:{ctx:o}}}),$=new je({props:{$$slots:{default:[nn]},$$scope:{ctx:o}}}),j=new We({props:{$$slots:{default:[rn]},$$scope:{ctx:o}}}),w=new ke({props:{code:`<Button href="https://google.com" target="_blank">
    I am a link in disguise!
</Button>`,$$slots:{preview:[ln]},$$scope:{ctx:o}}}),T=new Lt({}),k=new Ee({props:{title:"Colors",class:"d4r-space-y-2",$$slots:{description:[un],default:[fn]},$$scope:{ctx:o}}}),H=new Ee({props:{title:"Props",$$slots:{default:[dn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment),n=N(),E(t.$$.fragment),r=N(),s=L("div"),E(f.$$.fragment),a=N(),E(l.$$.fragment),i=N(),E(u.$$.fragment),m=N(),S=L("div"),E($.$$.fragment),O=N(),E(j.$$.fragment),G=N(),E(w.$$.fragment),c=N(),E(T.$$.fragment),q=N(),E(k.$$.fragment),R=N(),E(H.$$.fragment),this.h()},l(g){y(e.$$.fragment,g),n=P(g),y(t.$$.fragment,g),r=P(g),s=M(g,"DIV",{class:!0});var C=V(s);y(f.$$.fragment,C),a=P(C),y(l.$$.fragment,C),i=P(C),y(u.$$.fragment,C),C.forEach(d),m=P(g),S=M(g,"DIV",{class:!0});var F=V(S);y($.$$.fragment,F),O=P(F),y(j.$$.fragment,F),G=P(F),y(w.$$.fragment,F),F.forEach(d),c=P(g),y(T.$$.fragment,g),q=P(g),y(k.$$.fragment,g),R=P(g),y(H.$$.fragment,g),this.h()},h(){U(s,"class","d4r-space-y-2"),U(S,"class","d4r-space-y-2")},m(g,C){z(e,g,C),p(g,n,C),z(t,g,C),p(g,r,C),p(g,s,C),z(f,s,null),A(s,a),z(l,s,null),A(s,i),z(u,s,null),p(g,m,C),p(g,S,C),z($,S,null),A(S,O),z(j,S,null),A(S,G),z(w,S,null),p(g,c,C),z(T,g,C),p(g,q,C),z(k,g,C),p(g,R,C),z(H,g,C),W=!0},p(g,C){const F={};C&128&&(F.$$scope={dirty:C,ctx:g}),t.$set(F);const re={};C&128&&(re.$$scope={dirty:C,ctx:g}),f.$set(re);const ae={};C&128&&(ae.$$scope={dirty:C,ctx:g}),l.$set(ae);const v={};C&128&&(v.$$scope={dirty:C,ctx:g}),u.$set(v);const J={};C&128&&(J.$$scope={dirty:C,ctx:g}),$.$set(J);const te={};C&128&&(te.$$scope={dirty:C,ctx:g}),j.$set(te);const oe={};C&128&&(oe.$$scope={dirty:C,ctx:g}),w.$set(oe);const ie={};C&128&&(ie.$$scope={dirty:C,ctx:g}),k.$set(ie);const fe={};C&128&&(fe.$$scope={dirty:C,ctx:g}),H.$set(fe)},i(g){W||(h(e.$$.fragment,g),h(t.$$.fragment,g),h(f.$$.fragment,g),h(l.$$.fragment,g),h(u.$$.fragment,g),h($.$$.fragment,g),h(j.$$.fragment,g),h(w.$$.fragment,g),h(T.$$.fragment,g),h(k.$$.fragment,g),h(H.$$.fragment,g),W=!0)},o(g){b(e.$$.fragment,g),b(t.$$.fragment,g),b(f.$$.fragment,g),b(l.$$.fragment,g),b(u.$$.fragment,g),b($.$$.fragment,g),b(j.$$.fragment,g),b(w.$$.fragment,g),b(T.$$.fragment,g),b(k.$$.fragment,g),b(H.$$.fragment,g),W=!1},d(g){B(e,g),g&&d(n),B(t,g),g&&d(r),g&&d(s),B(f),B(l),B(u),g&&d(m),g&&d(S),B($),B(j),B(w),g&&d(c),B(T,g),g&&d(q),B(k,g),g&&d(R),B(H,g)}}}function pn(o){let e,n,t,r,s,f,a,l;return e=new ut({props:{title:"Button"}}),t=new at({props:{what:["Button","IconButton"],from:"core"}}),s=new ft({props:{text:"The versatile Button component comes in a variety of styles, including solid, outline, light, and subtle, as well as a gradient style. It can also be customized in terms of size and color to fit the needs of any design. Additionally, the Button can function as a link."}}),a=new st({props:{$$slots:{default:[cn]},$$scope:{ctx:o}}}),{c(){E(e.$$.fragment),n=N(),E(t.$$.fragment),r=N(),E(s.$$.fragment),f=N(),E(a.$$.fragment)},l(i){y(e.$$.fragment,i),n=P(i),y(t.$$.fragment,i),r=P(i),y(s.$$.fragment,i),f=P(i),y(a.$$.fragment,i)},m(i,u){z(e,i,u),p(i,n,u),z(t,i,u),p(i,r,u),z(s,i,u),p(i,f,u),z(a,i,u),l=!0},p(i,[u]){const m={};u&128&&(m.$$scope={dirty:u,ctx:i}),a.$set(m)},i(i){l||(h(e.$$.fragment,i),h(t.$$.fragment,i),h(s.$$.fragment,i),h(a.$$.fragment,i),l=!0)},o(i){b(e.$$.fragment,i),b(t.$$.fragment,i),b(s.$$.fragment,i),b(a.$$.fragment,i),l=!1},d(i){B(e,i),i&&d(n),B(t,i),i&&d(r),B(s,i),i&&d(f),B(a,i)}}}function $n(o){return[["solid","outline","outline-dashed","light","subtle"]]}class Dn extends me{constructor(e){super(),_e(this,e,$n,pn,ge,{})}}export{Dn as default};
