import{S as F,i as U,s as H,w as m,x as $,y as g,f as b,t as h,z as _,V as K,R as T,T as I,k as M,a as D,l as N,m as V,h as w,c as R,n as Q,b as x,H as X,U as C,B as Y}from"../../../../chunks/index-be153a96.js";import{D as Z}from"../../../../chunks/DocContent-d112f228.js";import{D as ee}from"../../../../chunks/DocImport-426f0676.js";import{D as te}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as re}from"../../../../chunks/DocTitle-7d81791e.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{C as W}from"../../../../chunks/InputBase-30312b3b.js";import{c as ne,S as oe,C as ae}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import{g as se,R as ie}from"../../../../chunks/RadiusSlider-2a65a323.js";import{E as le}from"../../../../chunks/Example-05595231.js";import{P as de}from"../../../../chunks/PropTable-7f69690e.js";import{D as ue}from"../../../../chunks/DocSection-abb8d504.js";function pe(s){let t,o;return t=new oe({props:{label:"Example",slot:"preview",color:s[0],radius:s[1],disabled:s[2],required:s[3]}}),{c(){m(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,i){g(t,e,i),o=!0},p(e,i){const r={};i&1&&(r.color=e[0]),i&2&&(r.radius=e[1]),i&4&&(r.disabled=e[2]),i&8&&(r.required=e[3]),t.$set(r)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){h(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function ce(s){let t,o,e,i,r,d,l,u,n,p,v,k,S,c;function j(a){s[7](a)}let q={};s[1]!==void 0&&(q.radius=s[1]),o=new ie({props:q}),T.push(()=>I(o,"radius",j,s[1]));function A(a){s[8](a)}let E={};s[0]!==void 0&&(E.color=s[0]),r=new ae({props:E}),T.push(()=>I(r,"color",A,s[0]));function G(a){s[9](a)}let O={label:"Disabled"};s[2]!==void 0&&(O.checked=s[2]),n=new W({props:O}),T.push(()=>I(n,"checked",G,s[2]));function J(a){s[10](a)}let B={label:"Required"};return s[3]!==void 0&&(B.checked=s[3]),k=new W({props:B}),T.push(()=>I(k,"checked",J,s[3])),{c(){t=M("div"),m(o.$$.fragment),i=D(),m(r.$$.fragment),l=D(),u=M("div"),m(n.$$.fragment),v=D(),m(k.$$.fragment),this.h()},l(a){t=N(a,"DIV",{});var f=V(t);$(o.$$.fragment,f),f.forEach(w),i=R(a),$(r.$$.fragment,a),l=R(a),u=N(a,"DIV",{class:!0});var y=V(u);$(n.$$.fragment,y),v=R(y),$(k.$$.fragment,y),y.forEach(w),this.h()},h(){Q(u,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(a,f){x(a,t,f),g(o,t,null),x(a,i,f),g(r,a,f),x(a,l,f),x(a,u,f),g(n,u,null),X(u,v),g(k,u,null),c=!0},p(a,f){const y={};!e&&f&2&&(e=!0,y.radius=a[1],C(()=>e=!1)),o.$set(y);const L={};!d&&f&1&&(d=!0,L.color=a[0],C(()=>d=!1)),r.$set(L);const P={};!p&&f&4&&(p=!0,P.checked=a[2],C(()=>p=!1)),n.$set(P);const z={};!S&&f&8&&(S=!0,z.checked=a[3],C(()=>S=!1)),k.$set(z)},i(a){c||(b(o.$$.fragment,a),b(r.$$.fragment,a),b(n.$$.fragment,a),b(k.$$.fragment,a),c=!0)},o(a){h(o.$$.fragment,a),h(r.$$.fragment,a),h(n.$$.fragment,a),h(k.$$.fragment,a),c=!1},d(a){a&&w(t),_(o),a&&w(i),_(r,a),a&&w(l),a&&w(u),_(n),_(k)}}}function fe(s){let t,o;return t=new le({props:{title:"Demo",code:s[4],$$slots:{controls:[ce],preview:[pe]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,i){g(t,e,i),o=!0},p(e,[i]){const r={};i&16&&(r.code=e[4]),i&2063&&(r.$$scope={dirty:i,ctx:e}),t.$set(r)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){h(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function me(s,t,o){let e,i;const r=se();K(s,r,c=>o(6,i=c));let d,l=i.radiuses.slider.thumb,u=!1,n=!1;function p(c){l=c,o(1,l)}function v(c){d=c,o(0,d)}function k(c){u=c,o(2,u)}function S(c){n=c,o(3,n)}return s.$$.update=()=>{s.$$.dirty&79&&o(4,e=ne({name:"Slider",props:{label:"Example",color:d,radius:l===i.radiuses.slider.thumb?void 0:l,disabled:u,required:n}}))},[d,l,u,n,e,r,i,p,v,k,S]}class $e extends F{constructor(t){super(),U(this,t,me,fe,H,{})}}const ge=`<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { focusOnMount } from '$lib/actions/focusOnMount';

	let className = '';
	export { className as class };
	export let classLabel = '';

	export let id: string = generateRandomId();
	export let disabled = false;
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let required = false;

	export let value = 0;

	export let label: string;
	export let hideLabel = false;

	/**
	 * When set to \`true\`, automatically focuses the element when the component is mounted.
	 *
	 * This is useful for usability and accessibility reasons, for example to focus an element
	 * when a modal is opened.
	 */
	export let autoFocus = false;

	export let color: string | undefined = undefined;
	export let radius: Radius | undefined = undefined;
	/** Overwrites the more general radius prop */
	export let radiusThumb: Radius | undefined = undefined;
	/** Overwrites the more general radius prop */
	export let radiusTrack: Radius | undefined = undefined;

	export let fullWidth = false;

	export let min = 0;
	export let max = 100;
	export let step = 1;

	let percentage: number;
	$: percentage = ((value - min) / (max - min)) * 100;
<\/script>

<InputBase
	{id}
	{disabled}
	{required}
	{label}
	{hideLabel}
	{helpText}
	{error}
	{fullWidth}
	{classLabel}
	class={className}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
	<div
		style="{overwriteColor(color, [300, 500, 600, 700], 'primary')}{overwriteRadius(
			radiusThumb ?? radius,
			'slider-thumb'
		)}{overwriteRadius(radiusTrack ?? radius, 'slider-track')}"
	>
		<input
			{id}
			{disabled}
			{required}
			bind:value
			{min}
			{max}
			{step}
			type="range"
			class="d4r-group"
			style="background: linear-gradient(90deg, rgb(var(--d4r-color-primary-600)) {percentage}%, rgb(var(--d4r-color-neutral-300)) {percentage}%, rgb(var(--d4r-color-neutral-300)) 100%);"
			use:focusOnMount={autoFocus}
			on:change
			on:input
		/>
	</div>
</InputBase>

<style lang="postcss" global>
	:local(input) {
		@apply d4r-h-[3px] d4r-w-full d4r-appearance-none d4r-rounded-slider-track d4r-bg-neutral-300 focus:d4r-outline-none dark:d4r-bg-dark-400;
		@apply focus:d4r-ring-2 focus:d4r-ring-primary-700/20 focus:d4r-ring-offset-8 dark:focus:d4r-ring-primary-400/20 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(input::-webkit-slider-thumb) {
		@apply d4r-h-4 d4r-w-4 d4r-cursor-pointer d4r-appearance-none d4r-rounded-slider-thumb d4r-border-none d4r-bg-primary-600 group-hover:d4r-bg-primary-50 dark:d4r-bg-primary-500;
	}

	:local(input::-moz-range-thumb) {
		@apply d4r-h-4 d4r-w-4 d4r-cursor-pointer d4r-appearance-none d4r-rounded-slider-thumb d4r-border-none d4r-bg-primary-600 group-hover:d4r-bg-primary-50 dark:d4r-bg-primary-500;
	}
</style>
`;function be(s){let t,o;return t=new de({props:{componentSrc:ge}}),{c(){m(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,i){g(t,e,i),o=!0},p:Y,i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){h(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function he(s){let t,o,e,i;return t=new $e({}),e=new ue({props:{title:"Props",$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment),o=D(),m(e.$$.fragment)},l(r){$(t.$$.fragment,r),o=R(r),$(e.$$.fragment,r)},m(r,d){g(t,r,d),x(r,o,d),g(e,r,d),i=!0},p(r,d){const l={};d&1&&(l.$$scope={dirty:d,ctx:r}),e.$set(l)},i(r){i||(b(t.$$.fragment,r),b(e.$$.fragment,r),i=!0)},o(r){h(t.$$.fragment,r),h(e.$$.fragment,r),i=!1},d(r){_(t,r),r&&w(o),_(e,r)}}}function _e(s){let t,o,e,i,r,d,l,u;return t=new re({props:{title:"Slider"}}),e=new ee({props:{what:"Slider",from:"core"}}),r=new te({props:{text:"The Slider component allows users to set a number value by sliding a handle (thumb) along a horizontal or vertical track."}}),l=new Z({props:{$$slots:{default:[he]},$$scope:{ctx:s}}}),{c(){m(t.$$.fragment),o=D(),m(e.$$.fragment),i=D(),m(r.$$.fragment),d=D(),m(l.$$.fragment)},l(n){$(t.$$.fragment,n),o=R(n),$(e.$$.fragment,n),i=R(n),$(r.$$.fragment,n),d=R(n),$(l.$$.fragment,n)},m(n,p){g(t,n,p),x(n,o,p),g(e,n,p),x(n,i,p),g(r,n,p),x(n,d,p),g(l,n,p),u=!0},p(n,[p]){const v={};p&1&&(v.$$scope={dirty:p,ctx:n}),l.$set(v)},i(n){u||(b(t.$$.fragment,n),b(e.$$.fragment,n),b(r.$$.fragment,n),b(l.$$.fragment,n),u=!0)},o(n){h(t.$$.fragment,n),h(e.$$.fragment,n),h(r.$$.fragment,n),h(l.$$.fragment,n),u=!1},d(n){_(t,n),n&&w(o),_(e,n),n&&w(i),_(r,n),n&&w(d),_(l,n)}}}class Ee extends F{constructor(t){super(),U(this,t,null,_e,H,{})}}export{Ee as default};
