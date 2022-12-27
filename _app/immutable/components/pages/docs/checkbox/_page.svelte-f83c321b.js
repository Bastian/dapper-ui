import{S as H,i as j,s as A,w as p,x as $,y as h,f as b,t as g,z as _,V as N,R,T as q,k as F,a as D,l as U,m as B,h as x,c as T,n as Q,b as v,H as X,U as I,B as Y}from"../../../../chunks/index-be153a96.js";import{D as Z}from"../../../../chunks/DocContent-d112f228.js";import{D as ee}from"../../../../chunks/DocImport-426f0676.js";import{D as te}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as ne}from"../../../../chunks/DocTitle-7d81791e.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{C as S}from"../../../../chunks/InputBase-30312b3b.js";import{g as re,R as oe}from"../../../../chunks/RadiusSlider-2a65a323.js";import{c as se,C as ie}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import{E as ae}from"../../../../chunks/Example-05595231.js";import{D as ce}from"../../../../chunks/DocSection-abb8d504.js";import{P as le}from"../../../../chunks/PropTable-7f69690e.js";function fe(i){let t,o;return t=new S({props:{slot:"preview",label:"Click Me",radius:i[0],color:i[3],disabled:i[1],required:i[2]}}),{c(){p(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){h(t,e,a),o=!0},p(e,a){const r={};a&1&&(r.radius=e[0]),a&8&&(r.color=e[3]),a&2&&(r.disabled=e[1]),a&4&&(r.required=e[2]),t.$set(r)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function ue(i){let t,o,e,a,r,l,c,f,n,d,w,k,y,u;function G(s){i[7](s)}let E={};i[0]!==void 0&&(E.radius=i[0]),o=new oe({props:E}),R.push(()=>q(o,"radius",G,i[0]));function J(s){i[8](s)}let M={};i[3]!==void 0&&(M.color=i[3]),r=new ie({props:M}),R.push(()=>q(r,"color",J,i[3]));function K(s){i[9](s)}let O={label:"Disabled"};i[1]!==void 0&&(O.checked=i[1]),n=new S({props:O}),R.push(()=>q(n,"checked",K,i[1]));function L(s){i[10](s)}let P={label:"Required"};return i[2]!==void 0&&(P.checked=i[2]),k=new S({props:P}),R.push(()=>q(k,"checked",L,i[2])),{c(){t=F("div"),p(o.$$.fragment),a=D(),p(r.$$.fragment),c=D(),f=F("div"),p(n.$$.fragment),w=D(),p(k.$$.fragment),this.h()},l(s){t=U(s,"DIV",{});var m=B(t);$(o.$$.fragment,m),m.forEach(x),a=T(s),$(r.$$.fragment,s),c=T(s),f=U(s,"DIV",{class:!0});var C=B(f);$(n.$$.fragment,C),w=T(C),$(k.$$.fragment,C),C.forEach(x),this.h()},h(){Q(f,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(s,m){v(s,t,m),h(o,t,null),v(s,a,m),h(r,s,m),v(s,c,m),v(s,f,m),h(n,f,null),X(f,w),h(k,f,null),u=!0},p(s,m){const C={};!e&&m&1&&(e=!0,C.radius=s[0],I(()=>e=!1)),o.$set(C);const W={};!l&&m&8&&(l=!0,W.color=s[3],I(()=>l=!1)),r.$set(W);const V={};!d&&m&2&&(d=!0,V.checked=s[1],I(()=>d=!1)),n.$set(V);const z={};!y&&m&4&&(y=!0,z.checked=s[2],I(()=>y=!1)),k.$set(z)},i(s){u||(b(o.$$.fragment,s),b(r.$$.fragment,s),b(n.$$.fragment,s),b(k.$$.fragment,s),u=!0)},o(s){g(o.$$.fragment,s),g(r.$$.fragment,s),g(n.$$.fragment,s),g(k.$$.fragment,s),u=!1},d(s){s&&x(t),_(o),s&&x(a),_(r,s),s&&x(c),s&&x(f),_(n),_(k)}}}function de(i){let t,o;return t=new ae({props:{title:"Demo",code:i[4],$$slots:{controls:[ue],preview:[fe]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){h(t,e,a),o=!0},p(e,[a]){const r={};a&16&&(r.code=e[4]),a&2063&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function me(i,t,o){let e,a;const r=re();N(i,r,u=>o(6,a=u));let l=!1,c=!1,f,{radius:n=a.radiuses.checkbox}=t;function d(u){n=u,o(0,n)}function w(u){f=u,o(3,f)}function k(u){l=u,o(1,l)}function y(u){c=u,o(2,c)}return i.$$set=u=>{"radius"in u&&o(0,n=u.radius)},i.$$.update=()=>{i.$$.dirty&79&&o(4,e=se({name:"Checkbox",props:{label:"Click Me",disabled:l,color:f,radius:n===a.radiuses.checkbox?void 0:n,required:c}}))},[n,l,c,f,e,r,a,d,w,k,y]}class pe extends H{constructor(t){super(),j(this,t,me,de,A,{radius:0})}}const $e=`<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Text from '$lib/components/text/Text.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { focusOnMount } from '$lib/actions/focusOnMount';

	export let id: string = generateRandomId();
	export let required = false;
	export let disabled = false;

	/**
	 * Whether or not the checkbox is checked.
	 */
	export let checked = false;

	/**
	 * The label of the checkbox.
	 */
	export let label: string;

	/**
	 * The name of a color in the theme. Does not support arbitrary colors.
	 *
	 * When set to \`undefined\`, the primary color of the theme will be used.
	 */
	export let color: string | undefined = undefined;
	/**
	 * The border radius of the checkbox. When set to \`undefined\`, the checkbox will have the
	 * default border radius defined in the theme.
	 */
	export let radius: Radius | undefined = undefined;

	/**
	 * When set to \`true\`, automatically focuses the element when the component is mounted.
	 *
	 * This is useful for usability and accessibility reasons, for example to focus an element
	 * when a modal is opened.
	 */
	export let autoFocus = false;
<\/script>

<div class="d4r-flex d4r-items-center d4r-gap-2" class:d4r-opacity-50={disabled}>
	<input
		style="{overwriteColor(color, [300, 600, 700])}{overwriteRadius(radius, 'checkbox')}"
		type="checkbox"
		class="d4r-input-base"
		{id}
		bind:checked
		{required}
		{disabled}
		use:focusOnMount={autoFocus}
		on:click
		on:change
	/>
	<div class="-d4r-mt-0.5">
		<Text
			tag="label"
			size="sm"
			for={id}
			contrast="low"
			class="d4r-select-none {required ? 'd4r-input-checkbox-required' : ''}"
		>
			{label}
		</Text>
	</div>
</div>

<style lang="postcss" global>
	:local(input) {
		@apply d4r-rounded-checkbox !d4r-ring-offset-0;
		@apply d4r-text-primary-600 dark:d4r-text-primary-600;
	}

	.d4r-input-checkbox-required::after {
		@apply d4r-ml-1;
		color: #dc2626;
		content: '*';
	}
</style>
`;function he(i){let t,o;return t=new le({props:{componentSrc:$e}}),{c(){p(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){h(t,e,a),o=!0},p:Y,i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){_(t,e)}}}function be(i){let t,o,e,a;return t=new pe({}),e=new ce({props:{title:"Props",$$slots:{default:[he]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment),o=D(),p(e.$$.fragment)},l(r){$(t.$$.fragment,r),o=T(r),$(e.$$.fragment,r)},m(r,l){h(t,r,l),v(r,o,l),h(e,r,l),a=!0},p(r,l){const c={};l&1&&(c.$$scope={dirty:l,ctx:r}),e.$set(c)},i(r){a||(b(t.$$.fragment,r),b(e.$$.fragment,r),a=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),a=!1},d(r){_(t,r),r&&x(o),_(e,r)}}}function ge(i){let t,o,e,a,r,l,c,f;return t=new ne({props:{title:"Checkbox"}}),e=new ee({props:{what:"Checkbox",from:"core"}}),r=new te({props:{text:"The Checkbox component allows users to select a boolean value."}}),c=new Z({props:{$$slots:{default:[be]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment),o=D(),p(e.$$.fragment),a=D(),p(r.$$.fragment),l=D(),p(c.$$.fragment)},l(n){$(t.$$.fragment,n),o=T(n),$(e.$$.fragment,n),a=T(n),$(r.$$.fragment,n),l=T(n),$(c.$$.fragment,n)},m(n,d){h(t,n,d),v(n,o,d),h(e,n,d),v(n,a,d),h(r,n,d),v(n,l,d),h(c,n,d),f=!0},p(n,[d]){const w={};d&1&&(w.$$scope={dirty:d,ctx:n}),c.$set(w)},i(n){f||(b(t.$$.fragment,n),b(e.$$.fragment,n),b(r.$$.fragment,n),b(c.$$.fragment,n),f=!0)},o(n){g(t.$$.fragment,n),g(e.$$.fragment,n),g(r.$$.fragment,n),g(c.$$.fragment,n),f=!1},d(n){_(t,n),n&&x(o),_(e,n),n&&x(a),_(r,n),n&&x(l),_(c,n)}}}class Se extends H{constructor(t){super(),j(this,t,null,ge,A,{})}}export{Se as default};
