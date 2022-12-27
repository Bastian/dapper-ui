import{S as oe,i as ae,s as ue,F as ne,q as ie,G as re,m as H,r as fe,h as m,n as D,b as v,H as j,B as ee,w as p,x as d,y as c,f as b,t as g,z as _,V as _e,R as X,T as Y,k as se,a as h,l as le,c as k,U as Z}from"../../../../chunks/index-be153a96.js";import{T as I}from"../../../../chunks/TextField-55d13445.js";import{D as ce,a as ve}from"../../../../chunks/DocSection-abb8d504.js";import{D as we}from"../../../../chunks/DocContent-d112f228.js";import{D as xe}from"../../../../chunks/DocImport-426f0676.js";import{D as he}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as ke}from"../../../../chunks/DocTitle-7d81791e.js";import{c as be,C as ze}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{C as ge}from"../../../../chunks/InputBase-30312b3b.js";import{S as Te}from"../../../../chunks/Select-d651ebed.js";import{g as De,R as Ee}from"../../../../chunks/RadiusSlider-2a65a323.js";import{B as Ie}from"../../../../chunks/Bulb-6a568d28.js";import{E as Se}from"../../../../chunks/Example-05595231.js";import{P as Re}from"../../../../chunks/PropTable-7f69690e.js";function Fe(a){let t,s,n,l,f,u;return{c(){t=ne("svg"),s=ne("desc"),n=ie("Download more icon variants from https://tabler-icons.io/i/user"),l=ne("path"),f=ne("circle"),u=ne("path"),this.h()},l(i){t=re(i,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var $=H(t);s=re($,"desc",{});var o=H(s);n=fe(o,"Download more icon variants from https://tabler-icons.io/i/user"),o.forEach(m),l=re($,"path",{stroke:!0,d:!0,fill:!0}),H(l).forEach(m),f=re($,"circle",{cx:!0,cy:!0,r:!0}),H(f).forEach(m),u=re($,"path",{d:!0}),H(u).forEach(m),$.forEach(m),this.h()},h(){D(l,"stroke","none"),D(l,"d","M0 0h24v24H0z"),D(l,"fill","none"),D(f,"cx","12"),D(f,"cy","7"),D(f,"r","4"),D(u,"d","M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"),D(t,"xmlns","http://www.w3.org/2000/svg"),D(t,"class","icon icon-tabler icon-tabler-user"),D(t,"width",a[0]),D(t,"height",a[0]),D(t,"viewBox","0 0 24 24"),D(t,"stroke",a[1]),D(t,"stroke-width",a[2]),D(t,"fill","none"),D(t,"stroke-linecap","round"),D(t,"stroke-linejoin","round")},m(i,$){v(i,t,$),j(t,s),j(s,n),j(t,l),j(t,f),j(t,u)},p(i,[$]){$&1&&D(t,"width",i[0]),$&1&&D(t,"height",i[0]),$&2&&D(t,"stroke",i[1]),$&4&&D(t,"stroke-width",i[2])},i:ee,o:ee,d(i){i&&m(t)}}}function qe(a,t,s){let{size:n=24}=t,{color:l="currentColor"}=t,{strokeWidth:f=2}=t;return a.$$set=u=>{"size"in u&&s(0,n=u.size),"color"in u&&s(1,l=u.color),"strokeWidth"in u&&s(2,f=u.strokeWidth)},[n,l,f]}class Be extends oe{constructor(t){super(),ae(this,t,qe,Fe,ue,{size:0,color:1,strokeWidth:2})}}function ye(a){let t,s;return t=new Ie({props:{slot:"icon-label"}}),{c(){p(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,l){c(t,n,l),s=!0},p:ee,i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),s=!1},d(n){_(t,n)}}}function Ce(a){let t,s;return t=new I({props:{label:a[2],color:a[5],size:a[0],disabled:a[3],radius:a[1],required:a[4],$$slots:{"icon-label":[ye]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,l){c(t,n,l),s=!0},p(n,l){const f={};l&4&&(f.label=n[2]),l&32&&(f.color=n[5]),l&1&&(f.size=n[0]),l&8&&(f.disabled=n[3]),l&2&&(f.radius=n[1]),l&16&&(f.required=n[4]),l&32768&&(f.$$scope={dirty:l,ctx:n}),t.$set(f)},i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),s=!1},d(n){_(t,n)}}}function Pe(a){let t,s,n,l,f;return{c(){t=se("option"),s=ie("Base"),n=h(),l=se("option"),f=ie("Small"),this.h()},l(u){t=le(u,"OPTION",{});var i=H(t);s=fe(i,"Base"),i.forEach(m),n=k(u),l=le(u,"OPTION",{});var $=H(l);f=fe($,"Small"),$.forEach(m),this.h()},h(){t.__value="base",t.value=t.__value,l.__value="sm",l.value=l.__value},m(u,i){v(u,t,i),j(t,s),v(u,n,i),v(u,l,i),j(l,f)},p:ee,d(u){u&&m(t),u&&m(n),u&&m(l)}}}function Le(a){let t,s,n,l,f,u,i,$,o,w,T,R,q,C,E,F,B,x,S,M,y;function U(r){a[9](r)}let P={label:"Label"};a[2]!==void 0&&(P.value=a[2]),s=new I({props:P}),X.push(()=>Y(s,"value",U,a[2]));function A(r){a[10](r)}let L={label:"Size",$$slots:{default:[Pe]},$$scope:{ctx:a}};a[0]!==void 0&&(L.value=a[0]),f=new Te({props:L}),X.push(()=>Y(f,"value",A,a[0]));function G(r){a[11](r)}let O={};a[1]!==void 0&&(O.radius=a[1]),o=new Ee({props:O}),X.push(()=>Y(o,"radius",G,a[1]));function J(r){a[12](r)}let W={};a[5]!==void 0&&(W.color=a[5]),R=new ze({props:W}),X.push(()=>Y(R,"color",J,a[5]));function K(r){a[13](r)}let N={label:"Disabled"};a[3]!==void 0&&(N.checked=a[3]),F=new ge({props:N}),X.push(()=>Y(F,"checked",K,a[3]));function Q(r){a[14](r)}let e={label:"Required"};return a[4]!==void 0&&(e.checked=a[4]),S=new ge({props:e}),X.push(()=>Y(S,"checked",Q,a[4])),{c(){t=se("div"),p(s.$$.fragment),l=h(),p(f.$$.fragment),i=h(),$=se("div"),p(o.$$.fragment),T=h(),p(R.$$.fragment),C=h(),E=se("div"),p(F.$$.fragment),x=h(),p(S.$$.fragment),this.h()},l(r){t=le(r,"DIV",{});var z=H(t);d(s.$$.fragment,z),z.forEach(m),l=k(r),d(f.$$.fragment,r),i=k(r),$=le(r,"DIV",{});var te=H($);d(o.$$.fragment,te),te.forEach(m),T=k(r),d(R.$$.fragment,r),C=k(r),E=le(r,"DIV",{class:!0});var V=H(E);d(F.$$.fragment,V),x=k(V),d(S.$$.fragment,V),V.forEach(m),this.h()},h(){D(E,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(r,z){v(r,t,z),c(s,t,null),v(r,l,z),c(f,r,z),v(r,i,z),v(r,$,z),c(o,$,null),v(r,T,z),c(R,r,z),v(r,C,z),v(r,E,z),c(F,E,null),j(E,x),c(S,E,null),y=!0},p(r,z){const te={};!n&&z&4&&(n=!0,te.value=r[2],Z(()=>n=!1)),s.$set(te);const V={};z&32768&&(V.$$scope={dirty:z,ctx:r}),!u&&z&1&&(u=!0,V.value=r[0],Z(()=>u=!1)),f.$set(V);const $e={};!w&&z&2&&(w=!0,$e.radius=r[1],Z(()=>w=!1)),o.$set($e);const me={};!q&&z&32&&(q=!0,me.color=r[5],Z(()=>q=!1)),R.$set(me);const pe={};!B&&z&8&&(B=!0,pe.checked=r[3],Z(()=>B=!1)),F.$set(pe);const de={};!M&&z&16&&(M=!0,de.checked=r[4],Z(()=>M=!1)),S.$set(de)},i(r){y||(b(s.$$.fragment,r),b(f.$$.fragment,r),b(o.$$.fragment,r),b(R.$$.fragment,r),b(F.$$.fragment,r),b(S.$$.fragment,r),y=!0)},o(r){g(s.$$.fragment,r),g(f.$$.fragment,r),g(o.$$.fragment,r),g(R.$$.fragment,r),g(F.$$.fragment,r),g(S.$$.fragment,r),y=!1},d(r){r&&m(t),_(s),r&&m(l),_(f,r),r&&m(i),r&&m($),_(o),r&&m(T),_(R,r),r&&m(C),r&&m(E),_(F),_(S)}}}function Oe(a){let t,s;return t=new Se({props:{title:"Demo",code:a[6],$$slots:{controls:[Le],preview:[Ce]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,l){c(t,n,l),s=!0},p(n,[l]){const f={};l&64&&(f.code=n[6]),l&32831&&(f.$$scope={dirty:l,ctx:n}),t.$set(f)},i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),s=!1},d(n){_(t,n)}}}function We(a,t,s){let n,l;const f=De();_e(a,f,x=>s(8,l=x));let u="Example",i=!1,$=!1,o,{size:w="base"}=t,{radius:T=l.radiuses.input}=t;function R(x){u=x,s(2,u)}function q(x){w=x,s(0,w)}function C(x){T=x,s(1,T)}function E(x){o=x,s(5,o)}function F(x){i=x,s(3,i)}function B(x){$=x,s(4,$)}return a.$$set=x=>{"size"in x&&s(0,w=x.size),"radius"in x&&s(1,T=x.radius)},a.$$.update=()=>{a.$$.dirty&319&&s(6,n=be({name:"TextField",children:be({name:"Bulb",props:{slot:"icon-label"}}),props:{label:u,disabled:i,color:o,size:w==="base"?void 0:w,radius:T===l.radiuses.input?void 0:T,required:$}}))},[w,T,u,i,$,o,n,f,l,R,q,C,E,F,B]}class Ne extends oe{constructor(t){super(),ae(this,t,We,Oe,ue,{size:0,radius:1})}}const He=`<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import Text from '../text/Text.svelte';
	import { focusOnMount } from '$lib/actions/focusOnMount';

	let className = '';
	export { className as class };
	export let classLabel = '';

	export let id: string = generateRandomId();
	export let name: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let type: 'text' | 'password' | 'number' = 'text';
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let disabled = false;
	export let required = false;
	export let readonly = false;

	export let value: string | number = '';

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

	// For number type
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let step: number | undefined = undefined;

	export let transform: (value: string | number) => string | number = (v) => v;

	const dispatch = createEventDispatcher();

	// See https://stackoverflow.com/a/57393751 why we don't just bind value
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleInput = (event: any) => {
		const start = event.target.selectionStart;
		const end = event.target.selectionEnd;
		value = transform(type === 'number' ? parseFloat(event.target.value) : event.target.value);
		dispatch('input', value);
		requestAnimationFrame(() => {
			if (type !== 'number') {
				event.target.selectionStart = start;
				event.target.selectionEnd = end;
			}
		});
	};
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
	<slot name="icon-label" slot="icon-label" />
	<div class="d4r-relative d4r-w-full">
		{#if $$slots['icon-start']}
			<Text contrast="lower" class="d4r-input-icon-start">
				<slot name="icon-start" />
			</Text>
		{/if}
		<input
			style="{overwriteColor(color, [400, 500, 700])}{overwriteRadius(radius, 'input')}"
			class="d4r-input-base d4r-w-full"
			class:size-base={size === 'base' || size === undefined}
			class:size-sm={size === 'sm'}
			class:d4r-pl-9={$$slots['icon-start']}
			{id}
			{name}
			{placeholder}
			{type}
			{disabled}
			{required}
			{readonly}
			{value}
			{min}
			{max}
			{step}
			use:focusOnMount={autoFocus}
			on:change
			on:input={handleInput}
		/>
	</div>
</InputBase>

<style lang="postcss" global>
	.d4r-input-icon-start {
		@apply d4r-absolute d4r-bottom-2.5 d4r-left-3;
	}

	.d4r-input-icon-start svg {
		@apply d4r-h-5 d4r-w-5;
	}

	:local(input) {
		@apply d4r-rounded-input;
	}

	:local(.size-base) {
		@apply d4r-h-10;
	}

	:local(.size-sm) {
		@apply d4r-h-9;
	}
</style>
`;function Me(a){let t,s;return t=new Be({props:{slot:"icon-start"}}),{c(){p(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,l){c(t,n,l),s=!0},p:ee,i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),s=!1},d(n){_(t,n)}}}function Ve(a){let t,s,n,l,f,u,i,$,o,w,T,R,q,C,E,F,B,x,S,M,y,U,P,A,L,G,O,J,W,K,N,Q;return t=new I({props:{label:"Default"}}),n=new I({props:{label:"Number",type:"number"}}),f=new I({props:{label:"Password",type:"password"}}),i=new I({props:{label:"Placeholder",placeholder:"Placeholder"}}),o=new I({props:{placeholder:"jane.doe@dapper-ui.dev",label:"Start Icon",$$slots:{"icon-start":[Me]},$$scope:{ctx:a}}}),T=new I({props:{label:"Required",required:!0}}),q=new I({props:{label:"Disabled",disabled:!0}}),E=new I({props:{label:"Readonly",readonly:!0,value:"Readonly"}}),B=new I({props:{label:"Error",error:"Something is wrong!"}}),S=new I({props:{label:"Help Text",helpText:"Need Help?"}}),y=new I({props:{label:"Round",radius:"full"}}),P=new I({props:{label:"Square",radius:"none"}}),L=new I({props:{label:"Colored",color:"green"}}),O=new I({props:{class:"d4r-self-end",label:"Hidden Label",placeholder:"Hidden Label",hideLabel:!0}}),W=new I({props:{class:"d4r-self-end",label:"Small",size:"sm"}}),N=new I({props:{class:"d4r-col-span-1 sm:d4r-col-span-2 lg:d4r-col-span-3",label:"Full Width"}}),{c(){p(t.$$.fragment),s=h(),p(n.$$.fragment),l=h(),p(f.$$.fragment),u=h(),p(i.$$.fragment),$=h(),p(o.$$.fragment),w=h(),p(T.$$.fragment),R=h(),p(q.$$.fragment),C=h(),p(E.$$.fragment),F=h(),p(B.$$.fragment),x=h(),p(S.$$.fragment),M=h(),p(y.$$.fragment),U=h(),p(P.$$.fragment),A=h(),p(L.$$.fragment),G=h(),p(O.$$.fragment),J=h(),p(W.$$.fragment),K=h(),p(N.$$.fragment)},l(e){d(t.$$.fragment,e),s=k(e),d(n.$$.fragment,e),l=k(e),d(f.$$.fragment,e),u=k(e),d(i.$$.fragment,e),$=k(e),d(o.$$.fragment,e),w=k(e),d(T.$$.fragment,e),R=k(e),d(q.$$.fragment,e),C=k(e),d(E.$$.fragment,e),F=k(e),d(B.$$.fragment,e),x=k(e),d(S.$$.fragment,e),M=k(e),d(y.$$.fragment,e),U=k(e),d(P.$$.fragment,e),A=k(e),d(L.$$.fragment,e),G=k(e),d(O.$$.fragment,e),J=k(e),d(W.$$.fragment,e),K=k(e),d(N.$$.fragment,e)},m(e,r){c(t,e,r),v(e,s,r),c(n,e,r),v(e,l,r),c(f,e,r),v(e,u,r),c(i,e,r),v(e,$,r),c(o,e,r),v(e,w,r),c(T,e,r),v(e,R,r),c(q,e,r),v(e,C,r),c(E,e,r),v(e,F,r),c(B,e,r),v(e,x,r),c(S,e,r),v(e,M,r),c(y,e,r),v(e,U,r),c(P,e,r),v(e,A,r),c(L,e,r),v(e,G,r),c(O,e,r),v(e,J,r),c(W,e,r),v(e,K,r),c(N,e,r),Q=!0},p(e,r){const z={};r&1&&(z.$$scope={dirty:r,ctx:e}),o.$set(z)},i(e){Q||(b(t.$$.fragment,e),b(n.$$.fragment,e),b(f.$$.fragment,e),b(i.$$.fragment,e),b(o.$$.fragment,e),b(T.$$.fragment,e),b(q.$$.fragment,e),b(E.$$.fragment,e),b(B.$$.fragment,e),b(S.$$.fragment,e),b(y.$$.fragment,e),b(P.$$.fragment,e),b(L.$$.fragment,e),b(O.$$.fragment,e),b(W.$$.fragment,e),b(N.$$.fragment,e),Q=!0)},o(e){g(t.$$.fragment,e),g(n.$$.fragment,e),g(f.$$.fragment,e),g(i.$$.fragment,e),g(o.$$.fragment,e),g(T.$$.fragment,e),g(q.$$.fragment,e),g(E.$$.fragment,e),g(B.$$.fragment,e),g(S.$$.fragment,e),g(y.$$.fragment,e),g(P.$$.fragment,e),g(L.$$.fragment,e),g(O.$$.fragment,e),g(W.$$.fragment,e),g(N.$$.fragment,e),Q=!1},d(e){_(t,e),e&&m(s),_(n,e),e&&m(l),_(f,e),e&&m(u),_(i,e),e&&m($),_(o,e),e&&m(w),_(T,e),e&&m(R),_(q,e),e&&m(C),_(E,e),e&&m(F),_(B,e),e&&m(x),_(S,e),e&&m(M),_(y,e),e&&m(U),_(P,e),e&&m(A),_(L,e),e&&m(G),_(O,e),e&&m(J),_(W,e),e&&m(K),_(N,e)}}}function je(a){let t,s;return t=new ve({props:{class:"d4r-grid d4r-grid-cols-1 d4r-gap-4 d4r-p-8 sm:d4r-grid-cols-2 lg:d4r-grid-cols-3",$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,l){c(t,n,l),s=!0},p(n,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:n}),t.$set(f)},i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),s=!1},d(n){_(t,n)}}}function Ue(a){let t,s;return t=new Re({props:{componentSrc:He}}),{c(){p(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,l){c(t,n,l),s=!0},p:ee,i(n){s||(b(t.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),s=!1},d(n){_(t,n)}}}function Ae(a){let t,s,n,l,f,u;return t=new Ne({}),n=new ce({props:{title:"Variants",$$slots:{default:[je]},$$scope:{ctx:a}}}),f=new ce({props:{title:"Props",$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment),s=h(),p(n.$$.fragment),l=h(),p(f.$$.fragment)},l(i){d(t.$$.fragment,i),s=k(i),d(n.$$.fragment,i),l=k(i),d(f.$$.fragment,i)},m(i,$){c(t,i,$),v(i,s,$),c(n,i,$),v(i,l,$),c(f,i,$),u=!0},p(i,$){const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),n.$set(o);const w={};$&1&&(w.$$scope={dirty:$,ctx:i}),f.$set(w)},i(i){u||(b(t.$$.fragment,i),b(n.$$.fragment,i),b(f.$$.fragment,i),u=!0)},o(i){g(t.$$.fragment,i),g(n.$$.fragment,i),g(f.$$.fragment,i),u=!1},d(i){_(t,i),i&&m(s),_(n,i),i&&m(l),_(f,i)}}}function Ge(a){let t,s,n,l,f,u,i,$;return t=new ke({props:{title:"TextField"}}),n=new xe({props:{what:"TextField",from:"core"}}),f=new he({props:{text:"The TextField component is a versatile input field that allows users to enter text, numbers, and passwords. It can be customized in size and color."}}),i=new we({props:{$$slots:{default:[Ae]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment),s=h(),p(n.$$.fragment),l=h(),p(f.$$.fragment),u=h(),p(i.$$.fragment)},l(o){d(t.$$.fragment,o),s=k(o),d(n.$$.fragment,o),l=k(o),d(f.$$.fragment,o),u=k(o),d(i.$$.fragment,o)},m(o,w){c(t,o,w),v(o,s,w),c(n,o,w),v(o,l,w),c(f,o,w),v(o,u,w),c(i,o,w),$=!0},p(o,[w]){const T={};w&1&&(T.$$scope={dirty:w,ctx:o}),i.$set(T)},i(o){$||(b(t.$$.fragment,o),b(n.$$.fragment,o),b(f.$$.fragment,o),b(i.$$.fragment,o),$=!0)},o(o){g(t.$$.fragment,o),g(n.$$.fragment,o),g(f.$$.fragment,o),g(i.$$.fragment,o),$=!1},d(o){_(t,o),o&&m(s),_(n,o),o&&m(l),_(f,o),o&&m(u),_(i,o)}}}class at extends oe{constructor(t){super(),ae(this,t,null,Ge,ue,{})}}export{at as default};
