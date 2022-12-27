import{S as J,i as K,s as j,w as h,x as g,y as _,f as $,t as b,z as v,a7 as $e,I as be,J as he,K as ge,L as _e,V as ve,R,T as M,k as U,a as B,l as W,m as q,h as d,c as T,n as we,b as p,H as G,U as x,B as N,q as E,r as S}from"../../../../chunks/index-be153a96.js";import{b as ke}from"../../../../chunks/paths-b4419565.js";import{D as Ie}from"../../../../chunks/DocContent-d112f228.js";import{D as De}from"../../../../chunks/DocImport-426f0676.js";import{D as Le}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as Be}from"../../../../chunks/DocLink-29b1db69.js";import{D as le}from"../../../../chunks/DocSection-abb8d504.js";import{D as F}from"../../../../chunks/DocSectionText-14b597b7.js";import{D as Te}from"../../../../chunks/DocTitle-7d81791e.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{C as oe}from"../../../../chunks/InputBase-30312b3b.js";import{c as Pe,S as Ve,C as Ee}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import{T as Se}from"../../../../chunks/TextField-55d13445.js";import{g as ye,E as Ce}from"../../../../chunks/Example-05595231.js";import{P as Re}from"../../../../chunks/ProgressBarMeterBase-da9cbaa1.js";import{g as Me,R as xe}from"../../../../chunks/RadiusSlider-2a65a323.js";import{P as Ae}from"../../../../chunks/PropTable-7f69690e.js";const He=l=>({}),ie=l=>({slot:"icon-label"});function Ue(l){let t;const n=l[11]["icon-label"],e=be(n,l,l[12],ie);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&4096)&&he(e,n,s,s[12],t?_e(n,s[12],r,He):ge(s[12]),ie)},i(s){t||($(e,s),t=!0)},o(s){b(e,s),t=!1},d(s){e&&e.d(s)}}}function We(l){let t,n;return t=new Re({props:{role:"progressbar",label:l[3],labelId:l[0],hideLabel:l[4],ariaValuetext:l[5],value:l[7],min:l[8],max:l[9],indeterminate:l[6],color:l[1],radius:l[2],hasIconLabel:l[10]["icon-label"],$$slots:{"icon-label":[Ue]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,[s]){const r={};s&8&&(r.label=e[3]),s&1&&(r.labelId=e[0]),s&16&&(r.hideLabel=e[4]),s&32&&(r.ariaValuetext=e[5]),s&128&&(r.value=e[7]),s&256&&(r.min=e[8]),s&512&&(r.max=e[9]),s&64&&(r.indeterminate=e[6]),s&2&&(r.color=e[1]),s&4&&(r.radius=e[2]),s&1024&&(r.hasIconLabel=e[10]["icon-label"]),s&4096&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function qe(l,t,n){let{$$slots:e={},$$scope:s}=t;const r=$e(e);let{labelId:f=`d4r-pb-label-${ye()}`}=t,{color:a=void 0}=t,{radius:u=void 0}=t,{label:i}=t,{hideLabel:c=!1}=t,{ariaValuetext:w=void 0}=t,{indeterminate:D=!1}=t,{value:y=0}=t,{min:P=0}=t,{max:L=100}=t;return l.$$set=m=>{"labelId"in m&&n(0,f=m.labelId),"color"in m&&n(1,a=m.color),"radius"in m&&n(2,u=m.radius),"label"in m&&n(3,i=m.label),"hideLabel"in m&&n(4,c=m.hideLabel),"ariaValuetext"in m&&n(5,w=m.ariaValuetext),"indeterminate"in m&&n(6,D=m.indeterminate),"value"in m&&n(7,y=m.value),"min"in m&&n(8,P=m.min),"max"in m&&n(9,L=m.max),"$$scope"in m&&n(12,s=m.$$scope)},[f,a,u,i,c,w,D,y,P,L,r,e,s]}class Oe extends J{constructor(t){super(),K(this,t,qe,We,j,{labelId:0,color:1,radius:2,label:3,hideLabel:4,ariaValuetext:5,indeterminate:6,value:7,min:8,max:9})}}function ze(l){let t,n;return t=new Oe({props:{label:l[1],hideLabel:l[2],slot:"preview",value:l[3],indeterminate:l[4],radius:l[0],color:l[5]}}),{c(){h(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,s){const r={};s&2&&(r.label=e[1]),s&4&&(r.hideLabel=e[2]),s&8&&(r.value=e[3]),s&16&&(r.indeterminate=e[4]),s&1&&(r.radius=e[0]),s&32&&(r.color=e[5]),t.$set(r)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function Fe(l){let t,n,e,s,r,f,a,u,i,c,w,D,y,P,L,m,A,k,V,z,O;function fe(o){l[9](o)}let Q={label:"Label"};l[1]!==void 0&&(Q.value=l[1]),n=new Se({props:Q}),R.push(()=>M(n,"value",fe,l[1]));function ue(o){l[10](o)}let X={disabled:l[4],label:"Value"};l[3]!==void 0&&(X.value=l[3]),r=new Ve({props:X}),R.push(()=>M(r,"value",ue,l[3]));function me(o){l[11](o)}let Y={};l[0]!==void 0&&(Y.radius=l[0]),i=new xe({props:Y}),R.push(()=>M(i,"radius",me,l[0]));function ce(o){l[12](o)}let Z={};l[5]!==void 0&&(Z.color=l[5]),D=new Ee({props:Z}),R.push(()=>M(D,"color",ce,l[5]));function de(o){l[13](o)}let ee={label:"Indeterminate"};l[4]!==void 0&&(ee.checked=l[4]),m=new oe({props:ee}),R.push(()=>M(m,"checked",de,l[4]));function pe(o){l[14](o)}let te={label:"Hide Label"};return l[2]!==void 0&&(te.checked=l[2]),V=new oe({props:te}),R.push(()=>M(V,"checked",pe,l[2])),{c(){t=U("div"),h(n.$$.fragment),s=B(),h(r.$$.fragment),a=B(),u=U("div"),h(i.$$.fragment),w=B(),h(D.$$.fragment),P=B(),L=U("div"),h(m.$$.fragment),k=B(),h(V.$$.fragment),this.h()},l(o){t=W(o,"DIV",{});var I=q(t);g(n.$$.fragment,I),I.forEach(d),s=T(o),g(r.$$.fragment,o),a=T(o),u=W(o,"DIV",{});var H=q(u);g(i.$$.fragment,H),H.forEach(d),w=T(o),g(D.$$.fragment,o),P=T(o),L=W(o,"DIV",{class:!0});var C=q(L);g(m.$$.fragment,C),k=T(C),g(V.$$.fragment,C),C.forEach(d),this.h()},h(){we(L,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(o,I){p(o,t,I),_(n,t,null),p(o,s,I),_(r,o,I),p(o,a,I),p(o,u,I),_(i,u,null),p(o,w,I),_(D,o,I),p(o,P,I),p(o,L,I),_(m,L,null),G(L,k),_(V,L,null),O=!0},p(o,I){const H={};!e&&I&2&&(e=!0,H.value=o[1],x(()=>e=!1)),n.$set(H);const C={};I&16&&(C.disabled=o[4]),!f&&I&8&&(f=!0,C.value=o[3],x(()=>f=!1)),r.$set(C);const re={};!c&&I&1&&(c=!0,re.radius=o[0],x(()=>c=!1)),i.$set(re);const ne={};!y&&I&32&&(y=!0,ne.color=o[5],x(()=>y=!1)),D.$set(ne);const se={};!A&&I&16&&(A=!0,se.checked=o[4],x(()=>A=!1)),m.$set(se);const ae={};!z&&I&4&&(z=!0,ae.checked=o[2],x(()=>z=!1)),V.$set(ae)},i(o){O||($(n.$$.fragment,o),$(r.$$.fragment,o),$(i.$$.fragment,o),$(D.$$.fragment,o),$(m.$$.fragment,o),$(V.$$.fragment,o),O=!0)},o(o){b(n.$$.fragment,o),b(r.$$.fragment,o),b(i.$$.fragment,o),b(D.$$.fragment,o),b(m.$$.fragment,o),b(V.$$.fragment,o),O=!1},d(o){o&&d(t),v(n),o&&d(s),v(r,o),o&&d(a),o&&d(u),v(i),o&&d(w),v(D,o),o&&d(P),o&&d(L),v(m),v(V)}}}function Je(l){let t,n;return t=new Ce({props:{title:"Demo",code:l[6],$$slots:{controls:[Fe],preview:[ze]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,[s]){const r={};s&64&&(r.code=e[6]),s&32831&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function Ke(l,t,n){let e,s;const r=Me();ve(l,r,k=>n(8,s=k));let f="Example",a=!1,u=25,i=!1,c,{radius:w=s.radiuses.progressBar}=t;function D(k){f=k,n(1,f)}function y(k){u=k,n(3,u)}function P(k){w=k,n(0,w)}function L(k){c=k,n(5,c)}function m(k){i=k,n(4,i)}function A(k){a=k,n(2,a)}return l.$$set=k=>{"radius"in k&&n(0,w=k.radius)},l.$$.update=()=>{l.$$.dirty&319&&n(6,e=Pe({name:"ProgressBar",props:{value:i?void 0:u,label:f,hideLabel:a,indeterminate:i,color:c,radius:w===s.radiuses.progressBar?void 0:w}}))},[w,f,a,u,i,c,e,r,s,D,y,P,L,m,A]}class je extends J{constructor(t){super(),K(this,t,Ke,Je,j,{radius:0})}}const Ge=`<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import ProgressBarMeterBase from '../ProgressBarMeterBase.svelte';

	/**
	 * The id of the label element.
	 */
	export let labelId = \`d4r-pb-label-\${generateRandomId()}\`;

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
	 * A label for the progress bar.
	 *
	 * It is highly recommended to label the progress bar for accessibility
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
	 * Screen readers usually read the value of a progress bar as a percentage.
	 * However, if this doesn't accurately reflect the progress bar's current
	 * status, you should use the \`ariaValuetext\` prop to provide a more accurate
	 * text description of the current value.
	 */
	export let ariaValuetext: string | undefined = undefined;

	/**
	 * Whether the progress bar is indeterminate.
	 */
	export let indeterminate = false;

	/**
	 * The current value of the progress bar.
	 *
	 * Should be between the \`min\` and \`max\` values.
	 */
	export let value = 0;

	/**
	 * The minimum value of the progress bar.
	 */
	export let min = 0;

	/**
	 * The maximum value of the progress bar.
	 */
	export let max = 100;
<\/script>

<ProgressBarMeterBase
	role="progressbar"
	{label}
	{labelId}
	{hideLabel}
	{ariaValuetext}
	{value}
	{min}
	{max}
	{indeterminate}
	{color}
	{radius}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
</ProgressBarMeterBase>
`;function Ne(l){let t,n,e,s;return{c(){t=E(`It is highly recommended to label the progress bar for accessibility purposes. Even if you do
			not want to display the label for aesthetic reasons, you should still set a label and hide it
			with the `),n=U("code"),e=E("hideLabel"),s=E(` prop. This ensures that the label is still accessible to users
			who rely on assistive technologies such as screen readers.`)},l(r){t=S(r,`It is highly recommended to label the progress bar for accessibility purposes. Even if you do
			not want to display the label for aesthetic reasons, you should still set a label and hide it
			with the `),n=W(r,"CODE",{});var f=q(n);e=S(f,"hideLabel"),f.forEach(d),s=S(r,` prop. This ensures that the label is still accessible to users
			who rely on assistive technologies such as screen readers.`)},m(r,f){p(r,t,f),p(r,n,f),G(n,e),p(r,s,f)},p:N,d(r){r&&d(t),r&&d(n),r&&d(s)}}}function Qe(l){let t,n,e,s;return{c(){t=E(`Screen readers usually read the value of a progress bar as a percentage. However, if this
			doesn't accurately reflect the progress bar's current status, you should use the
			`),n=U("code"),e=E("ariaValuetext"),s=E(" prop to provide a more accurate text description of the current value.")},l(r){t=S(r,`Screen readers usually read the value of a progress bar as a percentage. However, if this
			doesn't accurately reflect the progress bar's current status, you should use the
			`),n=W(r,"CODE",{});var f=q(n);e=S(f,"ariaValuetext"),f.forEach(d),s=S(r," prop to provide a more accurate text description of the current value.")},m(r,f){p(r,t,f),p(r,n,f),G(n,e),p(r,s,f)},p:N,d(r){r&&d(t),r&&d(n),r&&d(s)}}}function Xe(l){let t;return{c(){t=E("Meter")},l(n){t=S(n,"Meter")},m(n,e){p(n,t,e)},d(n){n&&d(t)}}}function Ye(l){let t,n,e,s;return n=new Be({props:{href:ke+"/docs/meter",$$slots:{default:[Xe]},$$scope:{ctx:l}}}),{c(){t=E(`Avoid using the progress bar as a meter, such as for displaying remaining battery percentage.
			Instead, use the `),h(n.$$.fragment),e=E(" component for this purpose.")},l(r){t=S(r,`Avoid using the progress bar as a meter, such as for displaying remaining battery percentage.
			Instead, use the `),g(n.$$.fragment,r),e=S(r," component for this purpose.")},m(r,f){p(r,t,f),_(n,r,f),p(r,e,f),s=!0},p(r,f){const a={};f&1&&(a.$$scope={dirty:f,ctx:r}),n.$set(a)},i(r){s||($(n.$$.fragment,r),s=!0)},o(r){b(n.$$.fragment,r),s=!1},d(r){r&&d(t),v(n,r),r&&d(e)}}}function Ze(l){let t,n,e,s,r,f;return t=new F({props:{$$slots:{default:[Ne]},$$scope:{ctx:l}}}),e=new F({props:{$$slots:{default:[Qe]},$$scope:{ctx:l}}}),r=new F({props:{$$slots:{default:[Ye]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment),n=B(),h(e.$$.fragment),s=B(),h(r.$$.fragment)},l(a){g(t.$$.fragment,a),n=T(a),g(e.$$.fragment,a),s=T(a),g(r.$$.fragment,a)},m(a,u){_(t,a,u),p(a,n,u),_(e,a,u),p(a,s,u),_(r,a,u),f=!0},p(a,u){const i={};u&1&&(i.$$scope={dirty:u,ctx:a}),t.$set(i);const c={};u&1&&(c.$$scope={dirty:u,ctx:a}),e.$set(c);const w={};u&1&&(w.$$scope={dirty:u,ctx:a}),r.$set(w)},i(a){f||($(t.$$.fragment,a),$(e.$$.fragment,a),$(r.$$.fragment,a),f=!0)},o(a){b(t.$$.fragment,a),b(e.$$.fragment,a),b(r.$$.fragment,a),f=!1},d(a){v(t,a),a&&d(n),v(e,a),a&&d(s),v(r,a)}}}function et(l){let t,n;return t=new Ae({props:{componentSrc:Ge}}),{c(){h(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p:N,i(e){n||($(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function tt(l){let t,n,e,s,r,f;return t=new je({}),e=new le({props:{title:"Accessibility + Usability",$$slots:{default:[Ze]},$$scope:{ctx:l}}}),r=new le({props:{title:"Props",$$slots:{default:[et]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment),n=B(),h(e.$$.fragment),s=B(),h(r.$$.fragment)},l(a){g(t.$$.fragment,a),n=T(a),g(e.$$.fragment,a),s=T(a),g(r.$$.fragment,a)},m(a,u){_(t,a,u),p(a,n,u),_(e,a,u),p(a,s,u),_(r,a,u),f=!0},p(a,u){const i={};u&1&&(i.$$scope={dirty:u,ctx:a}),e.$set(i);const c={};u&1&&(c.$$scope={dirty:u,ctx:a}),r.$set(c)},i(a){f||($(t.$$.fragment,a),$(e.$$.fragment,a),$(r.$$.fragment,a),f=!0)},o(a){b(t.$$.fragment,a),b(e.$$.fragment,a),b(r.$$.fragment,a),f=!1},d(a){v(t,a),a&&d(n),v(e,a),a&&d(s),v(r,a)}}}function rt(l){let t,n,e,s,r,f,a,u;return t=new Te({props:{title:"ProgressBar"}}),e=new De({props:{what:["ProgressBar"],from:"core"}}),r=new Le({props:{text:"A visual representation of the progress of a task, such as a download."}}),a=new Ie({props:{$$slots:{default:[tt]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment),n=B(),h(e.$$.fragment),s=B(),h(r.$$.fragment),f=B(),h(a.$$.fragment)},l(i){g(t.$$.fragment,i),n=T(i),g(e.$$.fragment,i),s=T(i),g(r.$$.fragment,i),f=T(i),g(a.$$.fragment,i)},m(i,c){_(t,i,c),p(i,n,c),_(e,i,c),p(i,s,c),_(r,i,c),p(i,f,c),_(a,i,c),u=!0},p(i,[c]){const w={};c&1&&(w.$$scope={dirty:c,ctx:i}),a.$set(w)},i(i){u||($(t.$$.fragment,i),$(e.$$.fragment,i),$(r.$$.fragment,i),$(a.$$.fragment,i),u=!0)},o(i){b(t.$$.fragment,i),b(e.$$.fragment,i),b(r.$$.fragment,i),b(a.$$.fragment,i),u=!1},d(i){v(t,i),i&&d(n),v(e,i),i&&d(s),v(r,i),i&&d(f),v(a,i)}}}class vt extends J{constructor(t){super(),K(this,t,null,rt,j,{})}}export{vt as default};
