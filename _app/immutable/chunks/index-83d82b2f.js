function v(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function H(){return Object.create(null)}function y(t){t.forEach(O)}function P(t){return typeof t=="function"}function ht(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function V(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(V(n,e))}function pt(t,n,e,i){if(t){const s=B(t,n,e,i);return t[0](s)}}function B(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const s=t[2](i(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(n.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=n.dirty[l]|s[l];return o}return n.dirty|s}return n.dirty}function gt(t,n,e,i,s,o){if(s){const r=B(n,e,i,o);t.p(r,s)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function $t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function bt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function vt(t){const n={};for(const e in t)n[e]=!0;return n}function wt(t,n,e){return t.set(e),n}let E=!1;function X(){E=!0}function Y(){E=!1}function Z(t,n,e,i){for(;t<n;){const s=t+(n-t>>1);e(s)<=i?t=s+1:n=s}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let s=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(s>0&&n[e[s]].claim_order<=u?s+1:Z(1,s,g=>n[e[g]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,s=Math.max(a,s)}const o=[],r=[];let l=n.length-1;for(let c=e[s]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);l>=c;l--)r.push(n[l]);l--}for(;l>=0;l--)r.push(n[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(r[c],f)}}function nt(t,n){if(E){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){E&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function q(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function Nt(){return S(" ")}function Tt(){return S("")}function At(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function R(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function kt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:R(t,i,n[i])}function St(t,n){Object.keys(n).forEach(e=>{st(t,e,n[e])})}function st(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:R(t,n,e)}function Ct(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function jt(t){return t===""?null:+t}function rt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,s=!1){z(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(n(l)){const c=e(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(n(l)){const c=e(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,n,e,i){return F(t,s=>s.nodeName===n,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];e[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(n))}function Ht(t,n,e){return I(t,n,e,q)}function Dt(t,n,e){return I(t,n,e,G)}function ct(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Mt(t){return ct(t," ")}function D(t,n,e){for(let i=e;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===n)return i}return t.length}function Lt(t,n){const e=D(t,"HTML_TAG_START",0),i=D(t,"HTML_TAG_END",e);if(e===i)return new M(void 0,n);z(t);const s=t.splice(e,i-e+1);w(s[0]),w(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new M(o,n)}function Ot(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Pt(t,n){t.value=n==null?"":n}function Bt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function qt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Gt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];i.selected=~n.indexOf(i.__value)}}function Rt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function zt(t,n,e){t.classList[e?"add":"remove"](n)}function ot(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,e,i,n),s}function Ft(t,n){const e=[];let i=0;for(const s of n.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(s)):o===`HEAD_${t}_START`&&(i+=1,e.push(s))}else i>0&&e.push(s);return e}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=G(e.nodeName):this.e=q(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class M extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}function It(t,n){return new t(n)}let p;function m(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Wt(t){d().$$.on_mount.push(t)}function Jt(t){d().$$.after_update.push(t)}function Kt(t){d().$$.on_destroy.push(t)}function Qt(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[n];if(s){const o=ot(n,e,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Ut(t,n){return d().$$.context.set(t,n),n}function Vt(t){return d().$$.context.get(t)}function Xt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],L=[],$=[],T=[],W=Promise.resolve();let A=!1;function J(){A||(A=!0,W.then(K))}function Yt(){return J(),W}function k(t){$.push(t)}function Zt(t){T.push(t)}const N=new Set;let x=0;function K(){const t=p;do{for(;x<h.length;){const n=h[x];x++,m(n),ut(n.$$)}for(m(null),h.length=0,x=0;L.length;)L.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];N.has(e)||(N.add(e),e())}$.length=0}while(h.length);for(;T.length;)T.pop()();A=!1,N.clear(),m(t)}function ut(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const b=new Set;let _;function tn(){_={r:0,c:[],p:_}}function nn(){_.r||y(_.c),_=_.p}function at(t,n){t&&t.i&&(b.delete(t),t.i(n))}function en(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function sn(t,n){const e={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=n[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(e[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in e||(e[r]=void 0);return e}function rn(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function cn(t){t&&t.c()}function on(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(n,e),i||k(()=>{const r=t.$$.on_mount.map(O).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...r):y(r),t.$$.on_mount=[]}),o.forEach(k)}function _t(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ln(t,n,e,i,s,o,r,l=[-1]){const c=p;m(t);const u=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:s,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,g,...C)=>{const j=C.length?C[0]:g;return u.ctx&&s(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&dt(t,a)),g}):[],u.update(),f=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){X();const a=rt(n.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();n.intro&&at(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),Y(),K()}m(c)}class un{$destroy(){_t(this,1),this.$destroy=v}$on(n,e){if(!P(e))return v;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{M as $,Yt as A,v as B,V as C,y as D,P as E,G as F,Dt as G,nt as H,mt as I,pt as J,gt as K,xt as L,yt as M,wt as N,vt as O,Q as P,zt as Q,St as R,un as S,kt as T,At as U,sn as V,Xt as W,bt as X,$t as Y,Ft as Z,Ut as _,Nt as a,Lt as a0,Ct as a1,Qt as a2,L as a3,rn as a4,Zt as a5,Et as a6,Kt as a7,Pt as a8,jt as a9,Vt as aa,k as ab,Gt as ac,qt as ad,Rt as ae,it as b,Mt as c,nn as d,Tt as e,at as f,tn as g,w as h,ln as i,Jt as j,q as k,Ht as l,rt as m,R as n,Wt as o,Bt as p,S as q,ct as r,ht as s,en as t,Ot as u,It as v,cn as w,on as x,ft as y,_t as z};