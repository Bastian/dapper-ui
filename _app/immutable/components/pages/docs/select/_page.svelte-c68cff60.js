import{S as Y,i as Z,s as ee,w as g,x as h,y as v,f as k,t as w,z,V as ie,R as E,T as q,a as I,k as T,c as S,l as x,m as R,h as c,n as ae,b as _,H as B,U as N,q as F,r as L,B as V}from"../../../../chunks/index-be153a96.js";import{D as ue}from"../../../../chunks/DocContent-d112f228.js";import{D as fe}from"../../../../chunks/DocImport-426f0676.js";import{D as pe}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as ce}from"../../../../chunks/DocTitle-7d81791e.js";import{c as A,C as me}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{C as X}from"../../../../chunks/InputBase-30312b3b.js";import{S as te}from"../../../../chunks/Select-d651ebed.js";import{g as de,R as $e}from"../../../../chunks/RadiusSlider-2a65a323.js";import{E as _e}from"../../../../chunks/Example-05595231.js";import{P as be}from"../../../../chunks/PropTable-7f69690e.js";import{D as ge}from"../../../../chunks/DocSection-abb8d504.js";function he(i){let e,l,t,r,s,u,a,p;return{c(){e=T("option"),l=F("Apple"),t=I(),r=T("option"),s=F("Bananna"),u=I(),a=T("option"),p=F("Orange"),this.h()},l(n){e=x(n,"OPTION",{});var f=R(e);l=L(f,"Apple"),f.forEach(c),t=S(n),r=x(n,"OPTION",{});var $=R(r);s=L($,"Bananna"),$.forEach(c),u=S(n),a=x(n,"OPTION",{});var b=R(a);p=L(b,"Orange"),b.forEach(c),this.h()},h(){e.__value="apple",e.value=e.__value,r.__value="banana",r.value=r.__value,a.__value="orange",a.value=a.__value},m(n,f){_(n,e,f),B(e,l),_(n,t,f),_(n,r,f),B(r,s),_(n,u,f),_(n,a,f),B(a,p)},p:V,d(n){n&&c(e),n&&c(t),n&&c(r),n&&c(u),n&&c(a)}}}function ve(i){let e,l;return e=new te({props:{label:"Favorite Fruit",slot:"preview",disabled:i[2],color:i[4],size:i[0],radius:i[1],required:i[3],$$slots:{default:[he]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),l=!0},p(t,r){const s={};r&4&&(s.disabled=t[2]),r&16&&(s.color=t[4]),r&1&&(s.size=t[0]),r&2&&(s.radius=t[1]),r&8&&(s.required=t[3]),r&8192&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function ke(i){let e,l,t,r,s;return{c(){e=T("option"),l=F("Base"),t=I(),r=T("option"),s=F("Small"),this.h()},l(u){e=x(u,"OPTION",{});var a=R(e);l=L(a,"Base"),a.forEach(c),t=S(u),r=x(u,"OPTION",{});var p=R(r);s=L(p,"Small"),p.forEach(c),this.h()},h(){e.__value="base",e.value=e.__value,r.__value="sm",r.value=r.__value},m(u,a){_(u,e,a),B(e,l),_(u,t,a),_(u,r,a),B(r,s)},p:V,d(u){u&&c(e),u&&c(t),u&&c(r)}}}function we(i){let e,l,t,r,s,u,a,p,n,f,$,b,P,C,O,m,M;function ne(o){i[8](o)}let W={label:"Size",$$slots:{default:[ke]},$$scope:{ctx:i}};i[0]!==void 0&&(W.value=i[0]),e=new te({props:W}),E.push(()=>q(e,"value",ne,i[0]));function se(o){i[9](o)}let y={};i[1]!==void 0&&(y.radius=i[1]),s=new $e({props:y}),E.push(()=>q(s,"radius",se,i[1]));function re(o){i[10](o)}let U={};i[4]!==void 0&&(U.color=i[4]),p=new me({props:U}),E.push(()=>q(p,"color",re,i[4]));function oe(o){i[11](o)}let j={label:"Disabled"};i[2]!==void 0&&(j.checked=i[2]),b=new X({props:j}),E.push(()=>q(b,"checked",oe,i[2]));function le(o){i[12](o)}let H={label:"Required"};return i[3]!==void 0&&(H.checked=i[3]),O=new X({props:H}),E.push(()=>q(O,"checked",le,i[3])),{c(){g(e.$$.fragment),t=I(),r=T("div"),g(s.$$.fragment),a=I(),g(p.$$.fragment),f=I(),$=T("div"),g(b.$$.fragment),C=I(),g(O.$$.fragment),this.h()},l(o){h(e.$$.fragment,o),t=S(o),r=x(o,"DIV",{});var d=R(r);h(s.$$.fragment,d),d.forEach(c),a=S(o),h(p.$$.fragment,o),f=S(o),$=x(o,"DIV",{class:!0});var D=R($);h(b.$$.fragment,D),C=S(D),h(O.$$.fragment,D),D.forEach(c),this.h()},h(){ae($,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(o,d){v(e,o,d),_(o,t,d),_(o,r,d),v(s,r,null),_(o,a,d),v(p,o,d),_(o,f,d),_(o,$,d),v(b,$,null),B($,C),v(O,$,null),M=!0},p(o,d){const D={};d&8192&&(D.$$scope={dirty:d,ctx:o}),!l&&d&1&&(l=!0,D.value=o[0],N(()=>l=!1)),e.$set(D);const G={};!u&&d&2&&(u=!0,G.radius=o[1],N(()=>u=!1)),s.$set(G);const J={};!n&&d&16&&(n=!0,J.color=o[4],N(()=>n=!1)),p.$set(J);const K={};!P&&d&4&&(P=!0,K.checked=o[2],N(()=>P=!1)),b.$set(K);const Q={};!m&&d&8&&(m=!0,Q.checked=o[3],N(()=>m=!1)),O.$set(Q)},i(o){M||(k(e.$$.fragment,o),k(s.$$.fragment,o),k(p.$$.fragment,o),k(b.$$.fragment,o),k(O.$$.fragment,o),M=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),w(p.$$.fragment,o),w(b.$$.fragment,o),w(O.$$.fragment,o),M=!1},d(o){z(e,o),o&&c(t),o&&c(r),z(s),o&&c(a),z(p,o),o&&c(f),o&&c($),z(b),z(O)}}}function ze(i){let e,l;return e=new _e({props:{title:"Demo",code:i[5],$$slots:{controls:[we],preview:[ve]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),l=!0},p(t,[r]){const s={};r&32&&(s.code=t[5]),r&8223&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Oe(i,e,l){let t,r;const s=de();ie(i,s,m=>l(7,r=m));let u=!1,a=!1,p,{size:n="base"}=e,{radius:f=r.radiuses.input}=e;function $(m){n=m,l(0,n)}function b(m){f=m,l(1,f)}function P(m){p=m,l(4,p)}function C(m){u=m,l(2,u)}function O(m){a=m,l(3,a)}return i.$$set=m=>{"size"in m&&l(0,n=m.size),"radius"in m&&l(1,f=m.radius)},i.$$.update=()=>{i.$$.dirty&159&&l(5,t=A({name:"Select",children:[A({name:"option",props:{value:"apple"},children:"Apple",compact:!0}),A({name:"option",props:{value:"banana"},children:"Bananna",compact:!0}),A({name:"option",props:{value:"orange"},children:"Orange",compact:!0})],props:{label:"Favorite Fruit",disabled:u,color:p,size:n==="base"?void 0:n,radius:f===r.radiuses.input?void 0:f,required:a}}))},[n,f,u,a,p,t,s,r,$,b,P,C,O]}class Ie extends Y{constructor(e){super(),Z(this,e,Oe,ze,ee,{size:0,radius:1})}}const Se=`<script lang="ts">
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
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let disabled = false;
	export let required = false;

	export let value: string | never | undefined = undefined;

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
	export let size: 'sm' | 'base' | undefined = 'base';
	export let radius: Radius | undefined = undefined;

	export let fullWidth = false;
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
	{size}
	{classLabel}
	class={className}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-start" />
	<slot slot="icon-label" name="icon-label" />
	<select
		style="{overwriteColor(color, [400, 500, 700], 'primary')}{overwriteRadius(radius, 'input')}"
		class="d4r-input-base"
		class:size-base={size === 'base' || size === undefined}
		class:size-sm={size === 'sm'}
		bind:value
		{id}
		{disabled}
		{required}
		use:focusOnMount={autoFocus}
		{...$$restProps}
	>
		<slot />
	</select>
</InputBase>

<style lang="postcss" global>
	:local(select) {
		@apply d4r-rounded-input d4r-pb-0 d4r-pt-0;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
	}

	:local(.size-base) {
		@apply d4r-h-10;
	}

	:local(.size-sm) {
		@apply d4r-h-9;
	}
</style>
`;function De(i){let e,l;return e=new be({props:{componentSrc:Se}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){v(e,t,r),l=!0},p:V,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Te(i){let e,l,t,r;return e=new Ie({}),t=new ge({props:{title:"Props",$$slots:{default:[De]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment),l=I(),g(t.$$.fragment)},l(s){h(e.$$.fragment,s),l=S(s),h(t.$$.fragment,s)},m(s,u){v(e,s,u),_(s,l,u),v(t,s,u),r=!0},p(s,u){const a={};u&1&&(a.$$scope={dirty:u,ctx:s}),t.$set(a)},i(s){r||(k(e.$$.fragment,s),k(t.$$.fragment,s),r=!0)},o(s){w(e.$$.fragment,s),w(t.$$.fragment,s),r=!1},d(s){z(e,s),s&&c(l),z(t,s)}}}function xe(i){let e,l,t,r,s,u,a,p;return e=new ce({props:{title:"Select"}}),t=new fe({props:{what:"Select",from:"core"}}),s=new pe({props:{text:"The Select component allows users to choose from a list of options."}}),a=new ue({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment),l=I(),g(t.$$.fragment),r=I(),g(s.$$.fragment),u=I(),g(a.$$.fragment)},l(n){h(e.$$.fragment,n),l=S(n),h(t.$$.fragment,n),r=S(n),h(s.$$.fragment,n),u=S(n),h(a.$$.fragment,n)},m(n,f){v(e,n,f),_(n,l,f),v(t,n,f),_(n,r,f),v(s,n,f),_(n,u,f),v(a,n,f),p=!0},p(n,[f]){const $={};f&1&&($.$$scope={dirty:f,ctx:n}),a.$set($)},i(n){p||(k(e.$$.fragment,n),k(t.$$.fragment,n),k(s.$$.fragment,n),k(a.$$.fragment,n),p=!0)},o(n){w(e.$$.fragment,n),w(t.$$.fragment,n),w(s.$$.fragment,n),w(a.$$.fragment,n),p=!1},d(n){z(e,n),n&&c(l),z(t,n),n&&c(r),z(s,n),n&&c(u),z(a,n)}}}class ye extends Y{constructor(e){super(),Z(this,e,null,xe,ee,{})}}export{ye as default};
