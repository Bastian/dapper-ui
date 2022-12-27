import{S as ut,i as pt,s as ct,w as z,x as D,y as O,f as E,t as I,z as P,R as Y,T as G,k as y,a as w,l as N,m as H,h as f,c as T,n as ot,b as u,U as J,q,r as M,u as dt,H as L,B as mt,a3 as ht}from"../../../../chunks/index-be153a96.js";import{D as $t}from"../../../../chunks/DocContent-d112f228.js";import{D as _t}from"../../../../chunks/DocImport-426f0676.js";import{D as gt}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as xt}from"../../../../chunks/DocTitle-7d81791e.js";import{c as vt,S as ft,C as bt}from"../../../../chunks/ColorPicker-2ed7f9e0.js";import{E as wt}from"../../../../chunks/Example-05595231.js";import{T as Tt}from"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{C as kt}from"../../../../chunks/InputBase-30312b3b.js";import{S as zt}from"../../../../chunks/Select-d651ebed.js";import{T as Dt}from"../../../../chunks/TextField-55d13445.js";import{P as Ot}from"../../../../chunks/PropTable-7f69690e.js";import{D as Et}from"../../../../chunks/DocSection-abb8d504.js";function It(a){let n;return{c(){n=q(a[0])},l(s){n=M(s,a[0])},m(s,t){u(s,n,t)},p(s,t){t&1&&dt(n,s[0])},d(s){s&&f(n)}}}function Pt(a){let n,s;return n=new Tt({props:{slot:"preview",tag:a[2],color:a[1],contrast:a[4],size:a[7],truncate:a[5],$$slots:{default:[It]},$$scope:{ctx:a}}}),{c(){z(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,i){O(n,t,i),s=!0},p(t,i){const l={};i&4&&(l.tag=t[2]),i&2&&(l.color=t[1]),i&16&&(l.contrast=t[4]),i&128&&(l.size=t[7]),i&32&&(l.truncate=t[5]),i&32769&&(l.$$scope={dirty:i,ctx:t}),n.$set(l)},i(t){s||(E(n.$$.fragment,t),s=!0)},o(t){I(n.$$.fragment,t),s=!1},d(t){P(n,t)}}}function St(a){let n,s,t,i,l,d,p,b,c,_,r,m,$,R,U,x,W,v,k,C,j,S,K,A,V,B;return{c(){n=y("option"),s=q("span"),t=w(),i=y("option"),l=q("div"),d=w(),p=y("option"),b=q("p"),c=w(),_=y("option"),r=q("h1"),m=w(),$=y("option"),R=q("h2"),U=w(),x=y("option"),W=q("h3"),v=w(),k=y("option"),C=q("h4"),j=w(),S=y("option"),K=q("h5"),A=w(),V=y("option"),B=q("h6"),this.h()},l(o){n=N(o,"OPTION",{});var g=H(n);s=M(g,"span"),g.forEach(f),t=T(o),i=N(o,"OPTION",{});var nt=H(i);l=M(nt,"div"),nt.forEach(f),d=T(o),p=N(o,"OPTION",{});var Q=H(p);b=M(Q,"p"),Q.forEach(f),c=T(o),_=N(o,"OPTION",{});var lt=H(_);r=M(lt,"h1"),lt.forEach(f),m=T(o),$=N(o,"OPTION",{});var X=H($);R=M(X,"h2"),X.forEach(f),U=T(o),x=N(o,"OPTION",{});var st=H(x);W=M(st,"h3"),st.forEach(f),v=T(o),k=N(o,"OPTION",{});var Z=H(k);C=M(Z,"h4"),Z.forEach(f),j=T(o),S=N(o,"OPTION",{});var e=H(S);K=M(e,"h5"),e.forEach(f),A=T(o),V=N(o,"OPTION",{});var h=H(V);B=M(h,"h6"),h.forEach(f),this.h()},h(){n.__value="span",n.value=n.__value,i.__value="div",i.value=i.__value,p.__value="p",p.value=p.__value,_.__value="h1",_.value=_.__value,$.__value="h2",$.value=$.__value,x.__value="h3",x.value=x.__value,k.__value="h4",k.value=k.__value,S.__value="h5",S.value=S.__value,V.__value="h6",V.value=V.__value},m(o,g){u(o,n,g),L(n,s),u(o,t,g),u(o,i,g),L(i,l),u(o,d,g),u(o,p,g),L(p,b),u(o,c,g),u(o,_,g),L(_,r),u(o,m,g),u(o,$,g),L($,R),u(o,U,g),u(o,x,g),L(x,W),u(o,v,g),u(o,k,g),L(k,C),u(o,j,g),u(o,S,g),L(S,K),u(o,A,g),u(o,V,g),L(V,B)},p:mt,d(o){o&&f(n),o&&f(t),o&&f(i),o&&f(d),o&&f(p),o&&f(c),o&&f(_),o&&f(m),o&&f($),o&&f(U),o&&f(x),o&&f(v),o&&f(k),o&&f(j),o&&f(S),o&&f(A),o&&f(V)}}}function yt(a){let n,s,t,i,l,d,p,b,c,_,r,m,$,R,U,x,W,v,k,C,j,S;function K(e){a[9](e)}let A={label:"Content"};a[0]!==void 0&&(A.value=a[0]),s=new Dt({props:A}),Y.push(()=>G(s,"value",K,a[0]));function V(e){a[10](e)}let B={label:"Tag",$$slots:{default:[St]},$$scope:{ctx:a}};a[2]!==void 0&&(B.value=a[2]),l=new zt({props:B}),Y.push(()=>G(l,"value",V,a[2]));function o(e){a[11](e)}let g={label:"Contrast",min:0,max:6};a[3]!==void 0&&(g.value=a[3]),c=new ft({props:g}),Y.push(()=>G(c,"value",o,a[3]));function nt(e){a[12](e)}let Q={label:"Size",min:0,max:12};a[6]!==void 0&&(Q.value=a[6]),$=new ft({props:Q}),Y.push(()=>G($,"value",nt,a[6]));function lt(e){a[13](e)}let X={};a[1]!==void 0&&(X.color=a[1]),x=new bt({props:X}),Y.push(()=>G(x,"color",lt,a[1]));function st(e){a[14](e)}let Z={label:"Truncate"};return a[5]!==void 0&&(Z.checked=a[5]),C=new kt({props:Z}),Y.push(()=>G(C,"checked",st,a[5])),{c(){n=y("div"),z(s.$$.fragment),i=w(),z(l.$$.fragment),p=w(),b=y("div"),z(c.$$.fragment),r=w(),m=y("div"),z($.$$.fragment),U=w(),z(x.$$.fragment),v=w(),k=y("div"),z(C.$$.fragment),this.h()},l(e){n=N(e,"DIV",{});var h=H(n);D(s.$$.fragment,h),h.forEach(f),i=T(e),D(l.$$.fragment,e),p=T(e),b=N(e,"DIV",{});var tt=H(b);D(c.$$.fragment,tt),tt.forEach(f),r=T(e),m=N(e,"DIV",{});var F=H(m);D($.$$.fragment,F),F.forEach(f),U=T(e),D(x.$$.fragment,e),v=T(e),k=N(e,"DIV",{class:!0});var et=H(k);D(C.$$.fragment,et),et.forEach(f),this.h()},h(){ot(k,"class","d4r-space-y-2.5 lg:d4r-space-y-1.5")},m(e,h){u(e,n,h),O(s,n,null),u(e,i,h),O(l,e,h),u(e,p,h),u(e,b,h),O(c,b,null),u(e,r,h),u(e,m,h),O($,m,null),u(e,U,h),O(x,e,h),u(e,v,h),u(e,k,h),O(C,k,null),S=!0},p(e,h){const tt={};!t&&h&1&&(t=!0,tt.value=e[0],J(()=>t=!1)),s.$set(tt);const F={};h&32768&&(F.$$scope={dirty:h,ctx:e}),!d&&h&4&&(d=!0,F.value=e[2],J(()=>d=!1)),l.$set(F);const et={};!_&&h&8&&(_=!0,et.value=e[3],J(()=>_=!1)),c.$set(et);const rt={};!R&&h&64&&(R=!0,rt.value=e[6],J(()=>R=!1)),$.$set(rt);const at={};!W&&h&2&&(W=!0,at.color=e[1],J(()=>W=!1)),x.$set(at);const it={};!j&&h&32&&(j=!0,it.checked=e[5],J(()=>j=!1)),C.$set(it)},i(e){S||(E(s.$$.fragment,e),E(l.$$.fragment,e),E(c.$$.fragment,e),E($.$$.fragment,e),E(x.$$.fragment,e),E(C.$$.fragment,e),S=!0)},o(e){I(s.$$.fragment,e),I(l.$$.fragment,e),I(c.$$.fragment,e),I($.$$.fragment,e),I(x.$$.fragment,e),I(C.$$.fragment,e),S=!1},d(e){e&&f(n),P(s),e&&f(i),P(l,e),e&&f(p),e&&f(b),P(c),e&&f(r),e&&f(m),P($),e&&f(U),P(x,e),e&&f(v),e&&f(k),P(C)}}}function Nt(a){let n,s;return n=new wt({props:{title:"Demo",code:a[8],$$slots:{controls:[yt],preview:[Pt]},$$scope:{ctx:a}}}),{c(){z(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,i){O(n,t,i),s=!0},p(t,[i]){const l={};i&256&&(l.code=t[8]),i&33023&&(l.$$scope={dirty:i,ctx:t}),n.$set(l)},i(t){s||(E(n.$$.fragment,t),s=!0)},o(t){I(n.$$.fragment,t),s=!1},d(t){P(n,t)}}}function Ct(a,n,s){let t,i="Dapper UI is amazing!",l,d="span",p=3,b="base",c=!1,_=2,r="base";function m(v){i=v,s(0,i)}function $(v){d=v,s(2,d)}function R(v){p=v,s(3,p)}function U(v){_=v,s(6,_)}function x(v){l=v,s(1,l)}function W(v){c=v,s(5,c)}return a.$$.update=()=>{a.$$.dirty&8&&s(4,b=["lowest","lower","low","base","high","higher","highest"][p]),a.$$.dirty&64&&s(7,r=["xs","sm","base","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"][_]),a.$$.dirty&183&&s(8,t=vt({name:"Text",children:i,props:{tag:d==="span"?void 0:d,color:l,contrast:b==="base"?void 0:b,size:r==="base"?void 0:r,truncate:c}}))},[i,l,d,p,b,c,_,r,t,m,$,R,U,x,W]}class Ht extends ut{constructor(n){super(),pt(this,n,Ct,Nt,ct,{})}}const Ut=`<script lang="ts">
	import type { Shades } from '$lib/colors/color';
	import { overwriteColor } from '../../util/createColorOverwrite';

	let className = '';
	export { className as class };

	/**
	 * The contrast of the text.
	 *
	 * Uses different shades of the color to achieve the desired contrast. The
	 * used shade depends on whether or not dark mode is enabled.
	 */
	export let contrast:
		| 'highest'
		| 'higher'
		| 'high'
		| 'base'
		| 'low'
		| 'lower'
		| 'lowest'
		| undefined = 'base';

	/**
	 * The color of the text.
	 *
	 * Default to the neutral color shade.
	 */
	export let color: string | undefined = 'neutral';

	/**
	 * The size of the text.
	 */
	export let size:
		| 'xs'
		| 'sm'
		| 'base'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl'
		| '8xl'
		| '9xl' = 'base';

	/**
	 * The font weight of the text.
	 *
	 * Please note that not all fonts support all weights, in which case the
	 * closest weight will be used by the browser.
	 */
	export let weight:
		| 'thin'
		| 'extralight'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semibold'
		| 'bold'
		| 'extrabold'
		| 'black' = 'normal';

	/**
	 * The line height of the text.
	 */
	export let lineHeight: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | undefined =
		undefined;

	/**
	 * The HTML tag to use for the text.
	 *
	 * This does not affect the styling of the text, but should be set for semantic reasons to
	 * improve accessibility and SEO.
	 *
	 * Defaults to \`span\`.
	 */
	export let tag: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string = 'span';

	/**
	 * Whether or not to use the width of the text should be limited to about 65 characters. This
	 * improves readability of longer texts that span multiple lines.
	 *
	 * Requires a non-inline style (e.g., by setting the tag to \`div\`).
	 *
	 * Defaults to \`false\`.
	 */
	export let prose = false;

	/**
	 * Whether or not to truncate the text to a single line (using the ellipsis overflow style).
	 */
	export let truncate = false;

	let usedShades: Shades[];
	$: usedShades =
		contrast === 'higher'
			? [50, 900]
			: contrast === 'high'
			? [100, 800]
			: contrast === 'base'
			? [200, 700]
			: contrast === 'low'
			? [300, 600]
			: contrast === 'lower'
			? [400, 500]
			: contrast === 'lowest'
			? [500, 400]
			: [200, 700];
<\/script>

<svelte:element
	this={tag}
	class={className}
	class:contrast-highest={contrast === 'highest'}
	class:contrast-higher={contrast === 'higher'}
	class:contrast-high={contrast === 'high'}
	class:contrast-base={contrast === 'base' || contrast === undefined}
	class:contrast-low={contrast === 'low'}
	class:contrast-lower={contrast === 'lower'}
	class:contrast-lowest={contrast === 'lowest'}
	class:d4r-text-xs={size === 'xs'}
	class:d4r-text-sm={size === 'sm'}
	class:d4r-text-base={size === 'base'}
	class:d4r-text-lg={size === 'lg'}
	class:d4r-text-xl={size === 'xl'}
	class:d4r-text-2xl={size === '2xl'}
	class:d4r-text-3xl={size === '3xl'}
	class:d4r-text-4xl={size === '4xl'}
	class:d4r-text-5xl={size === '5xl'}
	class:d4r-text-6xl={size === '6xl'}
	class:d4r-text-7xl={size === '7xl'}
	class:d4r-text-8xl={size === '8xl'}
	class:d4r-text-9xl={size === '9xl'}
	class:d4r-leading-none={lineHeight === 'none'}
	class:d4r-leading-tight={lineHeight === 'tight'}
	class:d4r-leading-snug={lineHeight === 'snug'}
	class:d4r-leading-normal={lineHeight === 'normal'}
	class:d4r-leading-relaxed={lineHeight === 'relaxed'}
	class:d4r-leading-loose={lineHeight === 'loose'}
	class:d4r-max-w-prose={prose}
	class:d4r-font-thin={weight === 'thin'}
	class:d4r-font-extralight={weight === 'extralight'}
	class:d4r-font-light={weight === 'light'}
	class:d4r-font-normal={weight === 'normal'}
	class:d4r-font-medium={weight === 'medium'}
	class:d4r-font-semibold={weight === 'semibold'}
	class:d4r-font-bold={weight === 'bold'}
	class:d4r-font-extrabold={weight === 'extrabold'}
	class:d4r-font-black={weight === 'black'}
	class:d4r-truncate={truncate}
	style={overwriteColor(color, usedShades, 'neutral')}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="postcss" global>
	:local(.contrast-highest) {
		@apply d4r-text-black dark:d4r-text-white;
	}

	:local(.contrast-higher) {
		@apply d4r-text-neutral-900 dark:d4r-text-neutral-50;
	}

	:local(.contrast-high) {
		@apply d4r-text-neutral-800 dark:d4r-text-neutral-100;
	}

	:local(.contrast-base) {
		@apply d4r-text-neutral-700 dark:d4r-text-neutral-200;
	}

	:local(.contrast-low) {
		@apply d4r-text-neutral-600 dark:d4r-text-neutral-300;
	}

	:local(.contrast-lower) {
		@apply d4r-text-neutral-500 dark:d4r-text-neutral-400;
	}

	:local(.contrast-lowest) {
		@apply d4r-text-neutral-400 dark:d4r-text-neutral-600;
	}
</style>
`;function Vt(a){let n,s;return n=new Ot({props:{componentSrc:Ut}}),{c(){z(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,i){O(n,t,i),s=!0},p:mt,i(t){s||(E(n.$$.fragment,t),s=!0)},o(t){I(n.$$.fragment,t),s=!1},d(t){P(n,t)}}}function qt(a){let n,s,t,i;return n=new Ht({}),t=new Et({props:{title:"Props",$$slots:{default:[Vt]},$$scope:{ctx:a}}}),{c(){z(n.$$.fragment),s=w(),z(t.$$.fragment)},l(l){D(n.$$.fragment,l),s=T(l),D(t.$$.fragment,l)},m(l,d){O(n,l,d),u(l,s,d),O(t,l,d),i=!0},p(l,d){const p={};d&1&&(p.$$scope={dirty:d,ctx:l}),t.$set(p)},i(l){i||(E(n.$$.fragment,l),E(t.$$.fragment,l),i=!0)},o(l){I(n.$$.fragment,l),I(t.$$.fragment,l),i=!1},d(l){P(n,l),l&&f(s),P(t,l)}}}function Mt(a){let n,s,t,i,l,d,p,b,c,_;return t=new xt({props:{title:"Text"}}),l=new _t({props:{what:"Text",from:"core"}}),p=new gt({props:{text:"The Text component allows you to customize the font size, weight, color, contrast, and line height to fit your design needs. You can change the HTML tag to optimize the text's semantics and accessibility. This component is particularly useful when using dark mode, as it automatically adjusts the text color to match the current mode."}}),c=new $t({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),{c(){n=y("meta"),s=w(),z(t.$$.fragment),i=w(),z(l.$$.fragment),d=w(),z(p.$$.fragment),b=w(),z(c.$$.fragment),this.h()},l(r){const m=ht("svelte-12un4k5",document.head);n=N(m,"META",{name:!0,content:!0}),m.forEach(f),s=T(r),D(t.$$.fragment,r),i=T(r),D(l.$$.fragment,r),d=T(r),D(p.$$.fragment,r),b=T(r),D(c.$$.fragment,r),this.h()},h(){document.title="Text - Dapper UI",ot(n,"name","description"),ot(n,"content","")},m(r,m){L(document.head,n),u(r,s,m),O(t,r,m),u(r,i,m),O(l,r,m),u(r,d,m),O(p,r,m),u(r,b,m),O(c,r,m),_=!0},p(r,[m]){const $={};m&1&&($.$$scope={dirty:m,ctx:r}),c.$set($)},i(r){_||(E(t.$$.fragment,r),E(l.$$.fragment,r),E(p.$$.fragment,r),E(c.$$.fragment,r),_=!0)},o(r){I(t.$$.fragment,r),I(l.$$.fragment,r),I(p.$$.fragment,r),I(c.$$.fragment,r),_=!1},d(r){f(n),r&&f(s),P(t,r),r&&f(i),P(l,r),r&&f(d),P(p,r),r&&f(b),P(c,r)}}}class Zt extends ut{constructor(n){super(),pt(this,n,null,Mt,ct,{})}}export{Zt as default};
