import{S as W,i as z,s as F,w as _,x as g,y as v,f as b,t as h,z as w,a7 as ie,I as fe,J as ue,K as me,L as ce,V as de,R as S,T as M,k as R,a as L,l as A,m as H,h as d,c as T,n as pe,b as $,U as C,B as J,q as B,r as y,H as re}from"../../../../chunks/index-be153a96.js";import{b as $e}from"../../../../chunks/paths-b4419565.js";import{D as be}from"../../../../chunks/DocContent-d112f228.js";import{D as he}from"../../../../chunks/DocImport-426f0676.js";import{D as _e}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as ge}from"../../../../chunks/DocLink-29b1db69.js";import{D as ee}from"../../../../chunks/DocSection-abb8d504.js";import{D as O}from"../../../../chunks/DocSectionText-14b597b7.js";import{D as ve}from"../../../../chunks/DocTitle-7d81791e.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{C as we}from"../../../../chunks/InputBase-30312b3b.js";import{c as Ie,S as ke,C as De}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import{T as Le}from"../../../../chunks/TextField-55d13445.js";import{g as Te,E as Ve}from"../../../../chunks/Example-05595231.js";import{P as Be}from"../../../../chunks/ProgressBarMeterBase-da9cbaa1.js";import{g as ye,R as Ee}from"../../../../chunks/RadiusSlider-2a65a323.js";import{P as xe}from"../../../../chunks/PropTable-7f69690e.js";const Pe=l=>({}),te=l=>({slot:"icon-label"});function Se(l){let t;const n=l[10]["icon-label"],e=fe(n,l,l[11],te);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&2048)&&ue(e,n,s,s[11],t?ce(n,s[11],r,Pe):me(s[11]),te)},i(s){t||(b(e,s),t=!0)},o(s){h(e,s),t=!1},d(s){e&&e.d(s)}}}function Me(l){let t,n;return t=new Be({props:{role:"meter",label:l[3],labelId:l[0],hideLabel:l[4],ariaValuetext:l[5],value:l[6],min:l[7],max:l[8],color:l[1],radius:l[2],hasIconLabel:l[9]["icon-label"],$$slots:{"icon-label":[Se]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p(e,[s]){const r={};s&8&&(r.label=e[3]),s&1&&(r.labelId=e[0]),s&16&&(r.hideLabel=e[4]),s&32&&(r.ariaValuetext=e[5]),s&64&&(r.value=e[6]),s&128&&(r.min=e[7]),s&256&&(r.max=e[8]),s&2&&(r.color=e[1]),s&4&&(r.radius=e[2]),s&512&&(r.hasIconLabel=e[9]["icon-label"]),s&2048&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function Ce(l,t,n){let{$$slots:e={},$$scope:s}=t;const r=ie(e);let{labelId:f=`d4r-meter-label-${Te()}`}=t,{color:a=void 0}=t,{radius:u=void 0}=t,{label:o}=t,{hideLabel:m=!1}=t,{ariaValuetext:k=void 0}=t,{value:D=0}=t,{min:E=0}=t,{max:V=100}=t;return l.$$set=c=>{"labelId"in c&&n(0,f=c.labelId),"color"in c&&n(1,a=c.color),"radius"in c&&n(2,u=c.radius),"label"in c&&n(3,o=c.label),"hideLabel"in c&&n(4,m=c.hideLabel),"ariaValuetext"in c&&n(5,k=c.ariaValuetext),"value"in c&&n(6,D=c.value),"min"in c&&n(7,E=c.min),"max"in c&&n(8,V=c.max),"$$scope"in c&&n(11,s=c.$$scope)},[f,a,u,o,m,k,D,E,V,r,e,s]}class Re extends W{constructor(t){super(),z(this,t,Ce,Me,F,{labelId:0,color:1,radius:2,label:3,hideLabel:4,ariaValuetext:5,value:6,min:7,max:8})}}function Ae(l){let t,n;return t=new Re({props:{label:l[1],hideLabel:l[2],slot:"preview",value:l[3],radius:l[0],color:l[4]}}),{c(){_(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p(e,s){const r={};s&2&&(r.label=e[1]),s&4&&(r.hideLabel=e[2]),s&8&&(r.value=e[3]),s&1&&(r.radius=e[0]),s&16&&(r.color=e[4]),t.$set(r)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function He(l){let t,n,e,s,r,f,a,u,o,m,k,D,E,V,c,p,q,U;function ne(i){l[8](i)}let K={label:"Label"};l[1]!==void 0&&(K.value=l[1]),n=new Le({props:K}),S.push(()=>M(n,"value",ne,l[1]));function se(i){l[9](i)}let j={label:"Value"};l[3]!==void 0&&(j.value=l[3]),r=new ke({props:j}),S.push(()=>M(r,"value",se,l[3]));function ae(i){l[10](i)}let G={};l[0]!==void 0&&(G.radius=l[0]),o=new Ee({props:G}),S.push(()=>M(o,"radius",ae,l[0]));function le(i){l[11](i)}let N={};l[4]!==void 0&&(N.color=l[4]),D=new De({props:N}),S.push(()=>M(D,"color",le,l[4]));function oe(i){l[12](i)}let Q={label:"Hide Label"};return l[2]!==void 0&&(Q.checked=l[2]),p=new we({props:Q}),S.push(()=>M(p,"checked",oe,l[2])),{c(){t=R("div"),_(n.$$.fragment),s=L(),_(r.$$.fragment),a=L(),u=R("div"),_(o.$$.fragment),k=L(),_(D.$$.fragment),V=L(),c=R("div"),_(p.$$.fragment),this.h()},l(i){t=A(i,"DIV",{});var I=H(t);g(n.$$.fragment,I),I.forEach(d),s=T(i),g(r.$$.fragment,i),a=T(i),u=A(i,"DIV",{});var x=H(u);g(o.$$.fragment,x),x.forEach(d),k=T(i),g(D.$$.fragment,i),V=T(i),c=A(i,"DIV",{class:!0});var P=H(c);g(p.$$.fragment,P),P.forEach(d),this.h()},h(){pe(c,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(i,I){$(i,t,I),v(n,t,null),$(i,s,I),v(r,i,I),$(i,a,I),$(i,u,I),v(o,u,null),$(i,k,I),v(D,i,I),$(i,V,I),$(i,c,I),v(p,c,null),U=!0},p(i,I){const x={};!e&&I&2&&(e=!0,x.value=i[1],C(()=>e=!1)),n.$set(x);const P={};!f&&I&8&&(f=!0,P.value=i[3],C(()=>f=!1)),r.$set(P);const X={};!m&&I&1&&(m=!0,X.radius=i[0],C(()=>m=!1)),o.$set(X);const Y={};!E&&I&16&&(E=!0,Y.color=i[4],C(()=>E=!1)),D.$set(Y);const Z={};!q&&I&4&&(q=!0,Z.checked=i[2],C(()=>q=!1)),p.$set(Z)},i(i){U||(b(n.$$.fragment,i),b(r.$$.fragment,i),b(o.$$.fragment,i),b(D.$$.fragment,i),b(p.$$.fragment,i),U=!0)},o(i){h(n.$$.fragment,i),h(r.$$.fragment,i),h(o.$$.fragment,i),h(D.$$.fragment,i),h(p.$$.fragment,i),U=!1},d(i){i&&d(t),w(n),i&&d(s),w(r,i),i&&d(a),i&&d(u),w(o),i&&d(k),w(D,i),i&&d(V),i&&d(c),w(p)}}}function Ue(l){let t,n;return t=new Ve({props:{title:"Demo",code:l[5],$$slots:{controls:[He],preview:[Ae]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p(e,[s]){const r={};s&32&&(r.code=e[5]),s&8223&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function qe(l,t,n){let e,s;const r=ye();de(l,r,p=>n(7,s=p));let f="Example",a=!1,u=25,o,{radius:m=s.radiuses.progressBar}=t;function k(p){f=p,n(1,f)}function D(p){u=p,n(3,u)}function E(p){m=p,n(0,m)}function V(p){o=p,n(4,o)}function c(p){a=p,n(2,a)}return l.$$set=p=>{"radius"in p&&n(0,m=p.radius)},l.$$.update=()=>{l.$$.dirty&159&&n(5,e=Ie({name:"Meter",props:{value:u,label:f,hideLabel:a,color:o,radius:m===s.radiuses.progressBar?void 0:m}}))},[m,f,a,u,o,e,r,s,k,D,E,V,c]}class Oe extends W{constructor(t){super(),z(this,t,qe,Ue,F,{radius:0})}}const We=`<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import ProgressBarMeterBase from '../ProgressBarMeterBase.svelte';

	/**
	 * The id of the label element.
	 */
	export let labelId = \`d4r-meter-label-\${generateRandomId()}\`;

	/**
	 * The name of a color in the theme. Does not support arbitrary colors.
	 *
	 * When set to \`undefined\`, the primary color of the theme will be used.
	 */
	export let color: string | undefined = undefined;

	/**
	 * The border radius of the button. When set to \`undefined\`, the button will
	 * have the default border radius defined in the theme.
	 */
	export let radius: Radius | undefined = undefined;

	/**
	 * A label for the meter.
	 *
	 * It is highly recommended to label the meter for accessibility
	 * purposes. Even if you do not want to display the label for aesthetic
	 * reasons, you should still set a label and hide it with the \`hideLabel\`
	 * prop. This ensures that the label is still accessible to users who rely
	 * on assistive technologies such as screen readers.
	 */
	export let label: string | undefined;

	/**
	 * Visually hides the label.
	 */
	export let hideLabel = false;

	/**
	 * The aria-valuetext attibute.
	 *
	 * Screen readers usually read the value of a meter as a percentage.
	 * However, if this doesn't accurately reflect the meter's current
	 * status, you should use the \`ariaValuetext\` prop to provide a more accurate
	 * text description of the current value.
	 */
	export let ariaValuetext: string | undefined = undefined;

	/**
	 * The current value of the meter.
	 *
	 * Should be between the \`min\` and \`max\` values.
	 */
	export let value = 0;

	/**
	 * The minimum value of the meter.
	 */
	export let min = 0;

	/**
	 * The maximum value of the meter.
	 */
	export let max = 100;
<\/script>

<ProgressBarMeterBase
	role="meter"
	{label}
	{labelId}
	{hideLabel}
	{ariaValuetext}
	{value}
	{min}
	{max}
	{color}
	{radius}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
</ProgressBarMeterBase>
`;function ze(l){let t,n,e,s;return{c(){t=B(`It is highly recommended to label the meter for accessibility purposes. Even if you do not
			want to display the label for aesthetic reasons, you should still set a label and hide it with
			the `),n=R("code"),e=B("hideLabel"),s=B(` prop. This ensures that the label is still accessible to users who rely
			on assistive technologies such as screen readers.`)},l(r){t=y(r,`It is highly recommended to label the meter for accessibility purposes. Even if you do not
			want to display the label for aesthetic reasons, you should still set a label and hide it with
			the `),n=A(r,"CODE",{});var f=H(n);e=y(f,"hideLabel"),f.forEach(d),s=y(r,` prop. This ensures that the label is still accessible to users who rely
			on assistive technologies such as screen readers.`)},m(r,f){$(r,t,f),$(r,n,f),re(n,e),$(r,s,f)},p:J,d(r){r&&d(t),r&&d(n),r&&d(s)}}}function Fe(l){let t,n,e,s;return{c(){t=B(`Screen readers usually read the value of a meter as a percentage. However, if this doesn't
			accurately reflect the meter's current status, you should use the `),n=R("code"),e=B("ariaValuetext"),s=B(` prop
			to provide a more accurate text description of the current value.`)},l(r){t=y(r,`Screen readers usually read the value of a meter as a percentage. However, if this doesn't
			accurately reflect the meter's current status, you should use the `),n=A(r,"CODE",{});var f=H(n);e=y(f,"ariaValuetext"),f.forEach(d),s=y(r,` prop
			to provide a more accurate text description of the current value.`)},m(r,f){$(r,t,f),$(r,n,f),re(n,e),$(r,s,f)},p:J,d(r){r&&d(t),r&&d(n),r&&d(s)}}}function Je(l){let t;return{c(){t=B("ProgressBar")},l(n){t=y(n,"ProgressBar")},m(n,e){$(n,t,e)},d(n){n&&d(t)}}}function Ke(l){let t,n,e,s;return n=new ge({props:{href:$e+"/docs/progress-bar",$$slots:{default:[Je]},$$scope:{ctx:l}}}),{c(){t=B(`Avoid using the meter as a progress bar, for example to display file download progress.
			Instead, use the `),_(n.$$.fragment),e=B(` component for this
			purpose.`)},l(r){t=y(r,`Avoid using the meter as a progress bar, for example to display file download progress.
			Instead, use the `),g(n.$$.fragment,r),e=y(r,` component for this
			purpose.`)},m(r,f){$(r,t,f),v(n,r,f),$(r,e,f),s=!0},p(r,f){const a={};f&1&&(a.$$scope={dirty:f,ctx:r}),n.$set(a)},i(r){s||(b(n.$$.fragment,r),s=!0)},o(r){h(n.$$.fragment,r),s=!1},d(r){r&&d(t),w(n,r),r&&d(e)}}}function je(l){let t,n,e,s,r,f;return t=new O({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),e=new O({props:{$$slots:{default:[Fe]},$$scope:{ctx:l}}}),r=new O({props:{$$slots:{default:[Ke]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment),n=L(),_(e.$$.fragment),s=L(),_(r.$$.fragment)},l(a){g(t.$$.fragment,a),n=T(a),g(e.$$.fragment,a),s=T(a),g(r.$$.fragment,a)},m(a,u){v(t,a,u),$(a,n,u),v(e,a,u),$(a,s,u),v(r,a,u),f=!0},p(a,u){const o={};u&1&&(o.$$scope={dirty:u,ctx:a}),t.$set(o);const m={};u&1&&(m.$$scope={dirty:u,ctx:a}),e.$set(m);const k={};u&1&&(k.$$scope={dirty:u,ctx:a}),r.$set(k)},i(a){f||(b(t.$$.fragment,a),b(e.$$.fragment,a),b(r.$$.fragment,a),f=!0)},o(a){h(t.$$.fragment,a),h(e.$$.fragment,a),h(r.$$.fragment,a),f=!1},d(a){w(t,a),a&&d(n),w(e,a),a&&d(s),w(r,a)}}}function Ge(l){let t,n;return t=new xe({props:{componentSrc:We}}),{c(){_(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){v(t,e,s),n=!0},p:J,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function Ne(l){let t,n,e,s,r,f;return t=new Oe({}),e=new ee({props:{title:"Accessibility + Usability",$$slots:{default:[je]},$$scope:{ctx:l}}}),r=new ee({props:{title:"Props",$$slots:{default:[Ge]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment),n=L(),_(e.$$.fragment),s=L(),_(r.$$.fragment)},l(a){g(t.$$.fragment,a),n=T(a),g(e.$$.fragment,a),s=T(a),g(r.$$.fragment,a)},m(a,u){v(t,a,u),$(a,n,u),v(e,a,u),$(a,s,u),v(r,a,u),f=!0},p(a,u){const o={};u&1&&(o.$$scope={dirty:u,ctx:a}),e.$set(o);const m={};u&1&&(m.$$scope={dirty:u,ctx:a}),r.$set(m)},i(a){f||(b(t.$$.fragment,a),b(e.$$.fragment,a),b(r.$$.fragment,a),f=!0)},o(a){h(t.$$.fragment,a),h(e.$$.fragment,a),h(r.$$.fragment,a),f=!1},d(a){w(t,a),a&&d(n),w(e,a),a&&d(s),w(r,a)}}}function Qe(l){let t,n,e,s,r,f,a,u;return t=new ve({props:{title:"Meter"}}),e=new he({props:{what:["Meter"],from:"core"}}),r=new _e({props:{text:"A visual representation of a numerical value within a specified range, such as displaying the battery percentage on a device."}}),a=new be({props:{$$slots:{default:[Ne]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment),n=L(),_(e.$$.fragment),s=L(),_(r.$$.fragment),f=L(),_(a.$$.fragment)},l(o){g(t.$$.fragment,o),n=T(o),g(e.$$.fragment,o),s=T(o),g(r.$$.fragment,o),f=T(o),g(a.$$.fragment,o)},m(o,m){v(t,o,m),$(o,n,m),v(e,o,m),$(o,s,m),v(r,o,m),$(o,f,m),v(a,o,m),u=!0},p(o,[m]){const k={};m&1&&(k.$$scope={dirty:m,ctx:o}),a.$set(k)},i(o){u||(b(t.$$.fragment,o),b(e.$$.fragment,o),b(r.$$.fragment,o),b(a.$$.fragment,o),u=!0)},o(o){h(t.$$.fragment,o),h(e.$$.fragment,o),h(r.$$.fragment,o),h(a.$$.fragment,o),u=!1},d(o){w(t,o),o&&d(n),w(e,o),o&&d(s),w(r,o),o&&d(f),w(a,o)}}}class pt extends W{constructor(t){super(),z(this,t,null,Qe,F,{})}}export{pt as default};
