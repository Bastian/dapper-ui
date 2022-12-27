import{S as Y,i as q,s as G,R as te,T as ne,w as D,x as v,y as C,U as le,f as m,t as p,z as k,I as oe,k as x,l as L,m as T,h as c,n as A,a2 as Q,b as d,J as se,K as ae,L as ie,Q as _e,F as X,G as Z,H,B as j,a as I,c as y,g as be,d as he,ag as re,q as O,r as E}from"../../../../chunks/index-be153a96.js";import{B as N}from"../../../../chunks/Button-d6e1b2f4.js";import{T as P}from"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{g as fe,E as ce}from"../../../../chunks/Example-05595231.js";import{M as we}from"../../../../chunks/Modal-575b8a1b.js";import{I as De}from"../../../../chunks/IconButton-0396b416.js";import{D as ve}from"../../../../chunks/DocContent-d112f228.js";import{D as Ce}from"../../../../chunks/DocImport-426f0676.js";import{D as ke}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as J}from"../../../../chunks/DocSection-abb8d504.js";import{D as K}from"../../../../chunks/DocSectionText-14b597b7.js";import{D as Oe}from"../../../../chunks/DocTitle-7d81791e.js";import{P as ee}from"../../../../chunks/PropTable-7f69690e.js";function Ee(i){let e,t,n;const o=i[9].default,l=oe(o,i,i[12],null);return{c(){e=x("div"),l&&l.c(),this.h()},l(a){e=L(a,"DIV",{class:!0});var s=T(e);l&&l.l(s),s.forEach(c),this.h()},h(){A(e,"class",t="d4r-flex d4r-flex-col d4r-overflow-y-auto d4r-bg-white d4r-p-4 dark:d4r-bg-dark-700 "+i[1]+" svelte-unvxxn"),Q(e,"max-w-lg",!i[5]),Q(e,"fullscreen",i[5])},m(a,s){d(a,e,s),l&&l.m(e,null),n=!0},p(a,s){l&&l.p&&(!n||s&4096)&&se(l,o,a,a[12],n?ie(o,a[12],s,null):ae(a[12]),null),(!n||s&2&&t!==(t="d4r-flex d4r-flex-col d4r-overflow-y-auto d4r-bg-white d4r-p-4 dark:d4r-bg-dark-700 "+a[1]+" svelte-unvxxn"))&&A(e,"class",t),(!n||s&34)&&Q(e,"max-w-lg",!a[5]),(!n||s&34)&&Q(e,"fullscreen",a[5])},i(a){n||(m(l,a),n=!0)},o(a){p(l,a),n=!1},d(a){a&&c(e),l&&l.d(a)}}}function Ie(i){let e,t,n;function o(a){i[10](a)}let l={id:i[2],disableCloseOnOutsideClick:i[3],disableCloseOnEscape:i[4],autoFocusElement:i[6],ariaLabelledby:i[7],ariaDescribedby:i[8],$$slots:{default:[Ee]},$$scope:{ctx:i}};return i[0]!==void 0&&(l.open=i[0]),e=new we({props:l}),te.push(()=>ne(e,"open",o,i[0])),e.$on("close",i[11]),{c(){D(e.$$.fragment)},l(a){v(e.$$.fragment,a)},m(a,s){C(e,a,s),n=!0},p(a,[s]){const f={};s&4&&(f.id=a[2]),s&8&&(f.disableCloseOnOutsideClick=a[3]),s&16&&(f.disableCloseOnEscape=a[4]),s&64&&(f.autoFocusElement=a[6]),s&128&&(f.ariaLabelledby=a[7]),s&256&&(f.ariaDescribedby=a[8]),s&4130&&(f.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,f.open=a[0],le(()=>t=!1)),e.$set(f)},i(a){n||(m(e.$$.fragment,a),n=!0)},o(a){p(e.$$.fragment,a),n=!1},d(a){k(e,a)}}}function ye(i,e,t){let{$$slots:n={},$$scope:o}=e,{class:l=""}=e,{id:a=`d4r-dialog-${fe()}`}=e,{open:s=!1}=e,{disableCloseOnOutsideClick:f=!1}=e,{disableCloseOnEscape:r=!1}=e,{fullscreen:$=!1}=e,{autoFocusElement:u=void 0}=e,{ariaLabelledby:g=void 0}=e,{ariaDescribedby:R=void 0}=e;function _(b){s=b,t(0,s)}function B(b){_e.call(this,i,b)}return i.$$set=b=>{"class"in b&&t(1,l=b.class),"id"in b&&t(2,a=b.id),"open"in b&&t(0,s=b.open),"disableCloseOnOutsideClick"in b&&t(3,f=b.disableCloseOnOutsideClick),"disableCloseOnEscape"in b&&t(4,r=b.disableCloseOnEscape),"fullscreen"in b&&t(5,$=b.fullscreen),"autoFocusElement"in b&&t(6,u=b.autoFocusElement),"ariaLabelledby"in b&&t(7,g=b.ariaLabelledby),"ariaDescribedby"in b&&t(8,R=b.ariaDescribedby),"$$scope"in b&&t(12,o=b.$$scope)},[s,l,a,f,r,$,u,g,R,n,_,B,o]}class ue extends Y{constructor(e){super(),q(this,e,ye,Ie,G,{class:1,id:2,open:0,disableCloseOnOutsideClick:3,disableCloseOnEscape:4,fullscreen:5,autoFocusElement:6,ariaLabelledby:7,ariaDescribedby:8})}}function Be(i){let e,t,n,o;return{c(){e=X("svg"),t=X("g"),n=X("line"),o=X("line"),this.h()},l(l){e=Z(l,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,stroke:!0});var a=T(e);t=Z(a,"g",{});var s=T(t);n=Z(s,"line",{"stroke-width":!0,x1:!0,y1:!0,x2:!0,y2:!0}),T(n).forEach(c),o=Z(s,"line",{"stroke-width":!0,x1:!0,y1:!0,x2:!0,y2:!0}),T(o).forEach(c),s.forEach(c),a.forEach(c),this.h()},h(){A(n,"stroke-width","2"),A(n,"x1","5"),A(n,"y1","5"),A(n,"x2","19"),A(n,"y2","19"),A(o,"stroke-width","2"),A(o,"x1","19"),A(o,"y1","5"),A(o,"x2","5"),A(o,"y2","19"),A(e,"width","24"),A(e,"height","24"),A(e,"viewBox","0 0 24 24"),A(e,"xmlns","http://www.w3.org/2000/svg"),A(e,"stroke","currentColor")},m(l,a){d(l,e,a),H(e,t),H(t,n),H(t,o)},p:j,i:j,o:j,d(l){l&&c(e)}}}class Ae extends Y{constructor(e){super(),q(this,e,null,Be,G,{})}}function Te(i){let e;const t=i[3].default,n=oe(t,i,i[4],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,l){n&&n.m(o,l),e=!0},p(o,l){n&&n.p&&(!e||l&16)&&se(n,t,o,o[4],e?ie(t,o[4],l,null):ae(o[4]),null)},i(o){e||(m(n,o),e=!0)},o(o){p(n,o),e=!1},d(o){n&&n.d(o)}}}function ge(i){let e,t;return e=new De({props:{size:"xs",label:"Close Dialog",$$slots:{default:[Fe]},$$scope:{ctx:i}}}),e.$on("click",i[2]),{c(){D(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,o){C(e,n,o),t=!0},p(n,o){const l={};o&16&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function Fe(i){let e,t;return e=new Ae({}),{c(){D(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,o){C(e,n,o),t=!0},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function He(i){let e,t,n,o,l;n=new P({props:{id:i[0],contrast:"high",size:"lg",weight:"semibold",$$slots:{default:[Te]},$$scope:{ctx:i}}});let a=i[1]&&ge(i);return{c(){e=x("div"),t=x("div"),D(n.$$.fragment),o=I(),a&&a.c(),this.h()},l(s){e=L(s,"DIV",{class:!0});var f=T(e);t=L(f,"DIV",{class:!0});var r=T(t);v(n.$$.fragment,r),r.forEach(c),o=y(f),a&&a.l(f),f.forEach(c),this.h()},h(){A(t,"class","d4r-flex d4r-items-start d4r-justify-between d4r-p-2 d4r-px-3"),A(e,"class","d4r-flex d4r-justify-between")},m(s,f){d(s,e,f),H(e,t),C(n,t,null),H(e,o),a&&a.m(e,null),l=!0},p(s,[f]){const r={};f&1&&(r.id=s[0]),f&16&&(r.$$scope={dirty:f,ctx:s}),n.$set(r),s[1]?a?(a.p(s,f),f&2&&m(a,1)):(a=ge(s),a.c(),m(a,1),a.m(e,null)):a&&(be(),p(a,1,1,()=>{a=null}),he())},i(s){l||(m(n.$$.fragment,s),m(a),l=!0)},o(s){p(n.$$.fragment,s),p(a),l=!1},d(s){s&&c(e),k(n),a&&a.d()}}}function xe(i,e,t){let{$$slots:n={},$$scope:o}=e,{titleId:l=`d4r-dialog-title-${fe()}`}=e,{withCloseButton:a=!1}=e;const s=re("d4r-modal-close-function"),f=re("d4r-modal-set-aria-labelledby-function");return i.$$set=r=>{"titleId"in r&&t(0,l=r.titleId),"withCloseButton"in r&&t(1,a=r.withCloseButton),"$$scope"in r&&t(4,o=r.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&f&&f(l)},[l,a,s,n,o]}class $e extends Y{constructor(e){super(),q(this,e,xe,He,G,{titleId:0,withCloseButton:1})}}function Le(i){let e;const t=i[1].default,n=oe(t,i,i[2],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,l){n&&n.m(o,l),e=!0},p(o,l){n&&n.p&&(!e||l&4)&&se(n,t,o,o[2],e?ie(t,o[2],l,null):ae(o[2]),null)},i(o){e||(m(n,o),e=!0)},o(o){p(n,o),e=!1},d(o){n&&n.d(o)}}}function Re(i){let e,t;return e=new P({props:{id:i[0],tag:"div",class:"d4r-overflow-y-auto d4r-p-2 d4r-px-3",$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,o){C(e,n,o),t=!0},p(n,[o]){const l={};o&1&&(l.id=n[0]),o&4&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function Se(i,e,t){let{$$slots:n={},$$scope:o}=e,{id:l=`d4r-dialog-content-${fe()}`}=e;const a=re("d4r-modal-set-aria-describedby-function");return i.$$set=s=>{"id"in s&&t(0,l=s.id),"$$scope"in s&&t(2,o=s.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&a&&a(l)},[l,n,o]}class de extends Y{constructor(e){super(),q(this,e,Se,Re,G,{id:0})}}function We(i){let e,t;const n=i[1].default,o=oe(n,i,i[0],null);return{c(){e=x("div"),o&&o.c(),this.h()},l(l){e=L(l,"DIV",{class:!0});var a=T(e);o&&o.l(a),a.forEach(c),this.h()},h(){A(e,"class","d4r-mt-6 d4r-flex d4r-gap-2 d4r-self-end")},m(l,a){d(l,e,a),o&&o.m(e,null),t=!0},p(l,[a]){o&&o.p&&(!t||a&1)&&se(o,n,l,l[0],t?ie(n,l[0],a,null):ae(l[0]),null)},i(l){t||(m(o,l),t=!0)},o(l){p(o,l),t=!1},d(l){l&&c(e),o&&o.d(l)}}}function Ve(i,e,t){let{$$slots:n={},$$scope:o}=e;return i.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,n]}class me extends Y{constructor(e){super(),q(this,e,Ve,We,G,{})}}const ze=`<!--
@component
A dialog with a header, content and actions.

Should be used in combination with the \`DialogHeader\`, \`DialogContent\` and \`DialogActions\` components.

Example:
\`\`\`svelte
<Dialog bind:open>
    <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <DialogContent>
        Dialog Content
    </DialogContent>
    <DialogActions>
        <Button autoFocus on:click={() => (open = false)}>
            Okay
		</Button>
    </DialogActions>
</Dialog>
\`\`\`
-->
<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Modal from '../modal/Modal.svelte';

	let className = '';
	export { className as class };

	/**
	 * The id of the dialog.
	 *
	 * When not set, it is automatically generated.
	 *
	 * Can be accessed via the \`d4r-modal-id\` context.
	 */
	export let id = \`d4r-dialog-\${generateRandomId()}\`;

	/**
	 * Whether the dialog is open.
	 *
	 * This value can be bound to and will be set to \`false\` when the user
	 * clicks outside of the dialog or presses the Esc key.
	 */
	export let open = false;

	/**
	 * Whether the dialog should be closed when the user clicks outside of it.
	 */
	export let disableCloseOnOutsideClick = false;

	/**
	 * Whether the dialog should be closed when the user presses the Esc key.
	 */
	export let disableCloseOnEscape = false;

	/**
	 * When set to \`true\`, the dialog will be fullscreen.
	 */
	export let fullscreen = false;

	/**
	 * The id of the element that should automatically be focused when the dialog is opened.
	 */
	export let autoFocusElement: string | undefined = undefined;

	/**
	 * The aria-labelledby attribute.
	 */
	export let ariaLabelledby: string | undefined = undefined;

	/**
	 * The aria-describedby attribute.
	 */
	export let ariaDescribedby: string | undefined = undefined;
<\/script>

<Modal
	{id}
	bind:open
	on:close
	{disableCloseOnOutsideClick}
	{disableCloseOnEscape}
	{autoFocusElement}
	{ariaLabelledby}
	{ariaDescribedby}
>
	<div
		class="d4r-flex d4r-flex-col d4r-overflow-y-auto d4r-bg-white d4r-p-4 dark:d4r-bg-dark-700 {className}"
		class:max-w-lg={!fullscreen}
		class:fullscreen
	>
		<slot />
	</div>
</Modal>

<style lang="postcss">
	:not(.fullscreen) {
		@apply d4r-rounded-dialog;
	}

	.max-w-lg {
		@apply d4r-max-h-[calc(100vh-4rem)] d4r-max-w-[min(42rem,calc(100vw-4rem))];
	}

	.fullscreen {
		@apply d4r-h-screen d4r-w-screen;
	}
</style>
`,Me=`<!--
@component
The actions of a dialog with the correct padding, alignment and spacing to match
the rest of the dialog.
-->
<div class="d4r-mt-6 d4r-flex d4r-gap-2 d4r-self-end">
	<slot />
</div>
`,Ue=`<!--
@component
The content of a dialog with the correct padding and scroll behavior to match the
rest of the dialog.


Automatically sets the \`aria-describedby\` attribute when used inside a \`Dialog\` component.
-->
<script lang="ts">
	import { Text } from '$lib';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import { getContext } from 'svelte';

	/**
	 * The id of the dialog content.
	 *
	 * When not set, it is automatically generated.
	 *
	 * Used for the \`aria-describedby\` attribute of the parent Dialog.
	 */
	export let id = \`d4r-dialog-content-\${generateRandomId()}\`;

	const setAriaDescribedBy = getContext<undefined | ((value: string) => void)>(
		'd4r-modal-set-aria-describedby-function'
	);

	$: if (setAriaDescribedBy) {
		setAriaDescribedBy(id);
	}
<\/script>

<Text {id} tag="div" class="d4r-overflow-y-auto d4r-p-2 d4r-px-3">
	<slot />
</Text>
`,je=`<!--
@component
The Header of a dialog. It display a title and optionally a close button.

Automatically sets the \`aria-labelledby\` attribute when used inside a \`Dialog\` component.
-->
<script lang="ts">
	import { Text } from '$lib';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import { getContext } from 'svelte';
	import IconButton from '../icon-button/IconButton.svelte';

	/**
	 * The id of the dialog title.
	 *
	 * When not set, it is automatically generated.
	 *
	 * Used for the \`aria-labelledby\` attribute of the parent Dialog.
	 */
	export let titleId = \`d4r-dialog-title-\${generateRandomId()}\`;

	/**
	 * When set to \`true\`, a close button will be displayed that closes the
	 * dialog when clicked.
	 */
	export let withCloseButton = false;

	const close = getContext<undefined | (() => void)>('d4r-modal-close-function');

	const setAriaLabelledBy = getContext<undefined | ((value: string) => void)>(
		'd4r-modal-set-aria-labelledby-function'
	);

	$: if (setAriaLabelledBy) {
		setAriaLabelledBy(titleId);
	}
<\/script>

<div class="d4r-flex d4r-justify-between">
	<div class="d4r-flex d4r-items-start d4r-justify-between d4r-p-2 d4r-px-3">
		<Text id={titleId} contrast="high" size="lg" weight="semibold">
			<slot />
		</Text>
	</div>
	{#if withCloseButton}
		<IconButton size="xs" label="Close Dialog" on:click={close}>
			<CloseIcon />
		</IconButton>
	{/if}
</div>
`;function Ne(i){let e;return{c(){e=O("A very simple dialog with a title, content and buttons.")},l(t){e=E(t,"A very simple dialog with a title, content and buttons.")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function Pe(i){let e;return{c(){e=O("Open Dialog")},l(t){e=E(t,"Open Dialog")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function Ye(i){let e;return{c(){e=O("Dialog Title")},l(t){e=E(t,"Dialog Title")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function qe(i){let e;return{c(){e=O("A very simple dialog with a title, content and buttons.")},l(t){e=E(t,"A very simple dialog with a title, content and buttons.")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function Ge(i){let e;return{c(){e=O("Cancel")},l(t){e=E(t,"Cancel")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function Je(i){let e;return{c(){e=O("Okay")},l(t){e=E(t,"Okay")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function Ke(i){let e,t,n,o;return e=new N({props:{variant:"outline",color:"gray",$$slots:{default:[Ge]},$$scope:{ctx:i}}}),e.$on("click",i[4]),n=new N({props:{autoFocus:!0,$$slots:{default:[Je]},$$scope:{ctx:i}}}),n.$on("click",i[5]),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=y(l),v(n.$$.fragment,l)},m(l,a){C(e,l,a),d(l,t,a),C(n,l,a),o=!0},p(l,a){const s={};a&8192&&(s.$$scope={dirty:a,ctx:l}),e.$set(s);const f={};a&8192&&(f.$$scope={dirty:a,ctx:l}),n.$set(f)},i(l){o||(m(e.$$.fragment,l),m(n.$$.fragment,l),o=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),o=!1},d(l){k(e,l),l&&c(t),k(n,l)}}}function Qe(i){let e,t,n,o,l,a;return e=new $e({props:{$$slots:{default:[Ye]},$$scope:{ctx:i}}}),n=new de({props:{$$slots:{default:[qe]},$$scope:{ctx:i}}}),l=new me({props:{$$slots:{default:[Ke]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment),o=I(),D(l.$$.fragment)},l(s){v(e.$$.fragment,s),t=y(s),v(n.$$.fragment,s),o=y(s),v(l.$$.fragment,s)},m(s,f){C(e,s,f),d(s,t,f),C(n,s,f),d(s,o,f),C(l,s,f),a=!0},p(s,f){const r={};f&8192&&(r.$$scope={dirty:f,ctx:s}),e.$set(r);const $={};f&8192&&($.$$scope={dirty:f,ctx:s}),n.$set($);const u={};f&8193&&(u.$$scope={dirty:f,ctx:s}),l.$set(u)},i(s){a||(m(e.$$.fragment,s),m(n.$$.fragment,s),m(l.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),p(n.$$.fragment,s),p(l.$$.fragment,s),a=!1},d(s){k(e,s),s&&c(t),k(n,s),s&&c(o),k(l,s)}}}function Xe(i){let e,t,n,o,l,a;t=new N({props:{$$slots:{default:[Pe]},$$scope:{ctx:i}}}),t.$on("click",i[3]);function s(r){i[6](r)}let f={$$slots:{default:[Qe]},$$scope:{ctx:i}};return i[0]!==void 0&&(f.open=i[0]),o=new ue({props:f}),te.push(()=>ne(o,"open",s,i[0])),{c(){e=x("div"),D(t.$$.fragment),n=I(),D(o.$$.fragment),this.h()},l(r){e=L(r,"DIV",{slot:!0});var $=T(e);v(t.$$.fragment,$),n=y($),v(o.$$.fragment,$),$.forEach(c),this.h()},h(){A(e,"slot","preview")},m(r,$){d(r,e,$),C(t,e,null),H(e,n),C(o,e,null),a=!0},p(r,$){const u={};$&8192&&(u.$$scope={dirty:$,ctx:r}),t.$set(u);const g={};$&8193&&(g.$$scope={dirty:$,ctx:r}),!l&&$&1&&(l=!0,g.open=r[0],le(()=>l=!1)),o.$set(g)},i(r){a||(m(t.$$.fragment,r),m(o.$$.fragment,r),a=!0)},o(r){p(t.$$.fragment,r),p(o.$$.fragment,r),a=!1},d(r){r&&c(e),k(t),k(o)}}}function Ze(i){let e,t,n,o;return e=new K({props:{$$slots:{default:[Ne]},$$scope:{ctx:i}}}),n=new ce({props:{code:`<Button on:click={() => (open = true)}>Open Dialog</Button>

<Dialog bind:open>
    <DialogHeader>Dialog Title</DialogHeader>
    <DialogContent>
        A very simple dialog with a title, content and buttons.
    </DialogContent>
    <DialogActions>
        <Button variant="outline" color="gray" on:click={() => (open = false)}>
            Cancel
        </Button>
        <Button autoFocus on:click={() => (open = false)}>Okay</Button>
    </DialogActions>
</Dialog>`,$$slots:{preview:[Xe]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=y(l),v(n.$$.fragment,l)},m(l,a){C(e,l,a),d(l,t,a),C(n,l,a),o=!0},p(l,a){const s={};a&8192&&(s.$$scope={dirty:a,ctx:l}),e.$set(s);const f={};a&8193&&(f.$$scope={dirty:a,ctx:l}),n.$set(f)},i(l){o||(m(e.$$.fragment,l),m(n.$$.fragment,l),o=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),o=!1},d(l){k(e,l),l&&c(t),k(n,l)}}}function et(i){let e,t,n,o,l,a,s,f,r,$,u,g,R,_,B,b;return{c(){e=O("You can use the "),t=x("code"),n=O("disableCloseOnEscape"),o=O(" and "),l=x("code"),a=O("disableCloseOnOutsideClick"),s=O(`
			props to prevent the `),f=x("code"),r=O("close"),$=O(" event from firing and a binded "),u=x("code"),g=O("open"),R=O(`
			prop from being set to `),_=x("code"),B=O("false"),b=O(".")},l(h){e=E(h,"You can use the "),t=L(h,"CODE",{});var S=T(t);n=E(S,"disableCloseOnEscape"),S.forEach(c),o=E(h," and "),l=L(h,"CODE",{});var W=T(l);a=E(W,"disableCloseOnOutsideClick"),W.forEach(c),s=E(h,`
			props to prevent the `),f=L(h,"CODE",{});var V=T(f);r=E(V,"close"),V.forEach(c),$=E(h," event from firing and a binded "),u=L(h,"CODE",{});var w=T(u);g=E(w,"open"),w.forEach(c),R=E(h,`
			prop from being set to `),_=L(h,"CODE",{});var F=T(_);B=E(F,"false"),F.forEach(c),b=E(h,".")},m(h,S){d(h,e,S),d(h,t,S),H(t,n),d(h,o,S),d(h,l,S),H(l,a),d(h,s,S),d(h,f,S),H(f,r),d(h,$,S),d(h,u,S),H(u,g),d(h,R,S),d(h,_,S),H(_,B),d(h,b,S)},p:j,d(h){h&&c(e),h&&c(t),h&&c(o),h&&c(l),h&&c(s),h&&c(f),h&&c($),h&&c(u),h&&c(R),h&&c(_),h&&c(b)}}}function tt(i){let e;return{c(){e=O("Open Dialog")},l(t){e=E(t,"Open Dialog")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function nt(i){let e;return{c(){e=O("Close With Button Only")},l(t){e=E(t,"Close With Button Only")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function lt(i){let e;return{c(){e=O(`A dialog that can only be closed with the button but not by clicking outside or by
						pressing the Esc key.`)},l(t){e=E(t,`A dialog that can only be closed with the button but not by clicking outside or by
						pressing the Esc key.`)},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function ot(i){let e;return{c(){e=O("Okay")},l(t){e=E(t,"Okay")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function st(i){let e,t;return e=new N({props:{autoFocus:!0,$$slots:{default:[ot]},$$scope:{ctx:i}}}),e.$on("click",i[8]),{c(){D(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,o){C(e,n,o),t=!0},p(n,o){const l={};o&8192&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function at(i){let e,t,n,o,l,a;return e=new $e({props:{$$slots:{default:[nt]},$$scope:{ctx:i}}}),n=new de({props:{$$slots:{default:[lt]},$$scope:{ctx:i}}}),l=new me({props:{$$slots:{default:[st]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment),o=I(),D(l.$$.fragment)},l(s){v(e.$$.fragment,s),t=y(s),v(n.$$.fragment,s),o=y(s),v(l.$$.fragment,s)},m(s,f){C(e,s,f),d(s,t,f),C(n,s,f),d(s,o,f),C(l,s,f),a=!0},p(s,f){const r={};f&8192&&(r.$$scope={dirty:f,ctx:s}),e.$set(r);const $={};f&8192&&($.$$scope={dirty:f,ctx:s}),n.$set($);const u={};f&8194&&(u.$$scope={dirty:f,ctx:s}),l.$set(u)},i(s){a||(m(e.$$.fragment,s),m(n.$$.fragment,s),m(l.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),p(n.$$.fragment,s),p(l.$$.fragment,s),a=!1},d(s){k(e,s),s&&c(t),k(n,s),s&&c(o),k(l,s)}}}function it(i){let e,t,n,o,l,a;t=new N({props:{$$slots:{default:[tt]},$$scope:{ctx:i}}}),t.$on("click",i[7]);function s(r){i[9](r)}let f={disableCloseOnEscape:!0,disableCloseOnOutsideClick:!0,$$slots:{default:[at]},$$scope:{ctx:i}};return i[1]!==void 0&&(f.open=i[1]),o=new ue({props:f}),te.push(()=>ne(o,"open",s,i[1])),{c(){e=x("div"),D(t.$$.fragment),n=I(),D(o.$$.fragment),this.h()},l(r){e=L(r,"DIV",{slot:!0});var $=T(e);v(t.$$.fragment,$),n=y($),v(o.$$.fragment,$),$.forEach(c),this.h()},h(){A(e,"slot","preview")},m(r,$){d(r,e,$),C(t,e,null),H(e,n),C(o,e,null),a=!0},p(r,$){const u={};$&8192&&(u.$$scope={dirty:$,ctx:r}),t.$set(u);const g={};$&8194&&(g.$$scope={dirty:$,ctx:r}),!l&&$&2&&(l=!0,g.open=r[1],le(()=>l=!1)),o.$set(g)},i(r){a||(m(t.$$.fragment,r),m(o.$$.fragment,r),a=!0)},o(r){p(t.$$.fragment,r),p(o.$$.fragment,r),a=!1},d(r){r&&c(e),k(t),k(o)}}}function rt(i){let e,t,n,o;return e=new K({props:{$$slots:{default:[et]},$$scope:{ctx:i}}}),n=new ce({props:{code:`<Button on:click={() => (open = true)}>Open Dialog</Button>

<Dialog 
    bind:open
    disableCloseOnEscape
    disableCloseOnOutsideClick
>
    <DialogHeader>Close With Button Only</DialogHeader>
    <DialogContent>
        A dialog that can only be closed with the button but not by clicking outside
        or by pressing the Esc key.
    </DialogContent>
    <DialogActions>
        <Button autoFocus on:click={() => (open = false)}>Okay</Button>
    </DialogActions>
</Dialog>`,$$slots:{preview:[it]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=y(l),v(n.$$.fragment,l)},m(l,a){C(e,l,a),d(l,t,a),C(n,l,a),o=!0},p(l,a){const s={};a&8192&&(s.$$scope={dirty:a,ctx:l}),e.$set(s);const f={};a&8194&&(f.$$scope={dirty:a,ctx:l}),n.$set(f)},i(l){o||(m(e.$$.fragment,l),m(n.$$.fragment,l),o=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),o=!1},d(l){k(e,l),l&&c(t),k(n,l)}}}function ft(i){let e,t,n,o;return{c(){e=O("You can use the "),t=x("code"),n=O("fullscreen"),o=O(" prop to display the dialog in fullscreen.")},l(l){e=E(l,"You can use the "),t=L(l,"CODE",{});var a=T(t);n=E(a,"fullscreen"),a.forEach(c),o=E(l," prop to display the dialog in fullscreen.")},m(l,a){d(l,e,a),d(l,t,a),H(t,n),d(l,o,a)},p:j,d(l){l&&c(e),l&&c(t),l&&c(o)}}}function ct(i){let e;return{c(){e=O("Open Fullscreen Dialog")},l(t){e=E(t,"Open Fullscreen Dialog")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function ut(i){let e;return{c(){e=O("Fullscreen Dialog")},l(t){e=E(t,"Fullscreen Dialog")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function $t(i){let e;return{c(){e=O("This dialog fills the whole screen.")},l(t){e=E(t,"This dialog fills the whole screen.")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function dt(i){let e;return{c(){e=O("Okay")},l(t){e=E(t,"Okay")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function mt(i){let e,t;return e=new N({props:{autoFocus:!0,$$slots:{default:[dt]},$$scope:{ctx:i}}}),e.$on("click",i[11]),{c(){D(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,o){C(e,n,o),t=!0},p(n,o){const l={};o&8192&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function pt(i){let e,t,n,o,l,a;return e=new $e({props:{$$slots:{default:[ut]},$$scope:{ctx:i}}}),n=new de({props:{$$slots:{default:[$t]},$$scope:{ctx:i}}}),l=new me({props:{$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment),o=I(),D(l.$$.fragment)},l(s){v(e.$$.fragment,s),t=y(s),v(n.$$.fragment,s),o=y(s),v(l.$$.fragment,s)},m(s,f){C(e,s,f),d(s,t,f),C(n,s,f),d(s,o,f),C(l,s,f),a=!0},p(s,f){const r={};f&8192&&(r.$$scope={dirty:f,ctx:s}),e.$set(r);const $={};f&8192&&($.$$scope={dirty:f,ctx:s}),n.$set($);const u={};f&8196&&(u.$$scope={dirty:f,ctx:s}),l.$set(u)},i(s){a||(m(e.$$.fragment,s),m(n.$$.fragment,s),m(l.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),p(n.$$.fragment,s),p(l.$$.fragment,s),a=!1},d(s){k(e,s),s&&c(t),k(n,s),s&&c(o),k(l,s)}}}function gt(i){let e,t,n,o,l,a;t=new N({props:{$$slots:{default:[ct]},$$scope:{ctx:i}}}),t.$on("click",i[10]);function s(r){i[12](r)}let f={fullscreen:!0,$$slots:{default:[pt]},$$scope:{ctx:i}};return i[2]!==void 0&&(f.open=i[2]),o=new ue({props:f}),te.push(()=>ne(o,"open",s,i[2])),{c(){e=x("div"),D(t.$$.fragment),n=I(),D(o.$$.fragment),this.h()},l(r){e=L(r,"DIV",{slot:!0});var $=T(e);v(t.$$.fragment,$),n=y($),v(o.$$.fragment,$),$.forEach(c),this.h()},h(){A(e,"slot","preview")},m(r,$){d(r,e,$),C(t,e,null),H(e,n),C(o,e,null),a=!0},p(r,$){const u={};$&8192&&(u.$$scope={dirty:$,ctx:r}),t.$set(u);const g={};$&8196&&(g.$$scope={dirty:$,ctx:r}),!l&&$&4&&(l=!0,g.open=r[2],le(()=>l=!1)),o.$set(g)},i(r){a||(m(t.$$.fragment,r),m(o.$$.fragment,r),a=!0)},o(r){p(t.$$.fragment,r),p(o.$$.fragment,r),a=!1},d(r){r&&c(e),k(t),k(o)}}}function _t(i){let e,t,n,o;return e=new K({props:{$$slots:{default:[ft]},$$scope:{ctx:i}}}),n=new ce({props:{code:`<Button on:click={() => (open = true)}>Open Fullscreen Dialog</Button>

<Dialog fullscreen bind:open>
    <DialogHeader>Fullscreen Dialog</DialogHeader>
    <DialogContent>
        This dialog fills the whole screen.
    </DialogContent>
    <DialogActions>
        <Button autoFocus on:click={() => (open = false)}>Okay</Button>
    </DialogActions>
</Dialog>`,$$slots:{preview:[gt]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=y(l),v(n.$$.fragment,l)},m(l,a){C(e,l,a),d(l,t,a),C(n,l,a),o=!0},p(l,a){const s={};a&8192&&(s.$$scope={dirty:a,ctx:l}),e.$set(s);const f={};a&8196&&(f.$$scope={dirty:a,ctx:l}),n.$set(f)},i(l){o||(m(e.$$.fragment,l),m(n.$$.fragment,l),o=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),o=!1},d(l){k(e,l),l&&c(t),k(n,l)}}}function bt(i){let e,t,n,o,l,a,s;return{c(){e=O(`It is recommended to focus on a non-destructive action within the modal when it opens. The
			`),t=x("code"),n=O("autoFocusElement"),o=O(` prop can be utilized to automatically focus the element with the
			specified id when the modal opens. As an alternative, most focusable Dapper UI components
			offer an `),l=x("code"),a=O("autoFocus"),s=O(" prop that will automatically focus the element when it is mounted.")},l(f){e=E(f,`It is recommended to focus on a non-destructive action within the modal when it opens. The
			`),t=L(f,"CODE",{});var r=T(t);n=E(r,"autoFocusElement"),r.forEach(c),o=E(f,` prop can be utilized to automatically focus the element with the
			specified id when the modal opens. As an alternative, most focusable Dapper UI components
			offer an `),l=L(f,"CODE",{});var $=T(l);a=E($,"autoFocus"),$.forEach(c),s=E(f," prop that will automatically focus the element when it is mounted.")},m(f,r){d(f,e,r),d(f,t,r),H(t,n),d(f,o,r),d(f,l,r),H(l,a),d(f,s,r)},p:j,d(f){f&&c(e),f&&c(t),f&&c(o),f&&c(l),f&&c(s)}}}function ht(i){let e,t,n,o,l,a,s,f,r,$,u,g,R;return{c(){e=O("When using the "),t=x("code"),n=O("DialogHeader"),o=O(" and "),l=x("code"),a=O("DialogContent"),s=O(` components, the
			relevant ARIA attributes, specifically `),f=x("code"),r=O("aria-labelledby"),$=O(` and
			`),u=x("code"),g=O("aria-describedby"),R=O(", will be set automatically.")},l(_){e=E(_,"When using the "),t=L(_,"CODE",{});var B=T(t);n=E(B,"DialogHeader"),B.forEach(c),o=E(_," and "),l=L(_,"CODE",{});var b=T(l);a=E(b,"DialogContent"),b.forEach(c),s=E(_,` components, the
			relevant ARIA attributes, specifically `),f=L(_,"CODE",{});var h=T(f);r=E(h,"aria-labelledby"),h.forEach(c),$=E(_,` and
			`),u=L(_,"CODE",{});var S=T(u);g=E(S,"aria-describedby"),S.forEach(c),R=E(_,", will be set automatically.")},m(_,B){d(_,e,B),d(_,t,B),H(t,n),d(_,o,B),d(_,l,B),H(l,a),d(_,s,B),d(_,f,B),H(f,r),d(_,$,B),d(_,u,B),H(u,g),d(_,R,B)},p:j,d(_){_&&c(e),_&&c(t),_&&c(o),_&&c(l),_&&c(s),_&&c(f),_&&c($),_&&c(u),_&&c(R)}}}function wt(i){let e,t,n,o;return e=new K({props:{$$slots:{default:[bt]},$$scope:{ctx:i}}}),n=new K({props:{$$slots:{default:[ht]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment)},l(l){v(e.$$.fragment,l),t=y(l),v(n.$$.fragment,l)},m(l,a){C(e,l,a),d(l,t,a),C(n,l,a),o=!0},p(l,a){const s={};a&8192&&(s.$$scope={dirty:a,ctx:l}),e.$set(s);const f={};a&8192&&(f.$$scope={dirty:a,ctx:l}),n.$set(f)},i(l){o||(m(e.$$.fragment,l),m(n.$$.fragment,l),o=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),o=!1},d(l){k(e,l),l&&c(t),k(n,l)}}}function Dt(i){let e;return{c(){e=O("Dialog")},l(t){e=E(t,"Dialog")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function vt(i){let e;return{c(){e=O("DialogHeader")},l(t){e=E(t,"DialogHeader")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function Ct(i){let e;return{c(){e=O("DialogContent")},l(t){e=E(t,"DialogContent")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function kt(i){let e;return{c(){e=O("DialogActions")},l(t){e=E(t,"DialogActions")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function Ot(i){let e,t,n,o,l,a,s,f,r,$,u,g,R,_,B,b,h,S,W,V;return t=new P({props:{tag:"h3",weight:"medium",$$slots:{default:[Dt]},$$scope:{ctx:i}}}),o=new ee({props:{componentSrc:ze}}),s=new P({props:{tag:"h3",weight:"medium",$$slots:{default:[vt]},$$scope:{ctx:i}}}),r=new ee({props:{componentSrc:je}}),g=new P({props:{tag:"h3",weight:"medium",$$slots:{default:[Ct]},$$scope:{ctx:i}}}),_=new ee({props:{componentSrc:Ue}}),h=new P({props:{tag:"h3",weight:"medium",$$slots:{default:[kt]},$$scope:{ctx:i}}}),W=new ee({props:{componentSrc:Me}}),{c(){e=x("div"),D(t.$$.fragment),n=I(),D(o.$$.fragment),l=I(),a=x("div"),D(s.$$.fragment),f=I(),D(r.$$.fragment),$=I(),u=x("div"),D(g.$$.fragment),R=I(),D(_.$$.fragment),B=I(),b=x("div"),D(h.$$.fragment),S=I(),D(W.$$.fragment),this.h()},l(w){e=L(w,"DIV",{class:!0});var F=T(e);v(t.$$.fragment,F),n=y(F),v(o.$$.fragment,F),F.forEach(c),l=y(w),a=L(w,"DIV",{class:!0});var z=T(a);v(s.$$.fragment,z),f=y(z),v(r.$$.fragment,z),z.forEach(c),$=y(w),u=L(w,"DIV",{class:!0});var M=T(u);v(g.$$.fragment,M),R=y(M),v(_.$$.fragment,M),M.forEach(c),B=y(w),b=L(w,"DIV",{class:!0});var U=T(b);v(h.$$.fragment,U),S=y(U),v(W.$$.fragment,U),U.forEach(c),this.h()},h(){A(e,"class","d4r-space-y-2"),A(a,"class","!d4r-mt-8 d4r-space-y-2"),A(u,"class","!d4r-mt-8 d4r-space-y-2"),A(b,"class","!d4r-mt-8 d4r-space-y-2")},m(w,F){d(w,e,F),C(t,e,null),H(e,n),C(o,e,null),d(w,l,F),d(w,a,F),C(s,a,null),H(a,f),C(r,a,null),d(w,$,F),d(w,u,F),C(g,u,null),H(u,R),C(_,u,null),d(w,B,F),d(w,b,F),C(h,b,null),H(b,S),C(W,b,null),V=!0},p(w,F){const z={};F&8192&&(z.$$scope={dirty:F,ctx:w}),t.$set(z);const M={};F&8192&&(M.$$scope={dirty:F,ctx:w}),s.$set(M);const U={};F&8192&&(U.$$scope={dirty:F,ctx:w}),g.$set(U);const pe={};F&8192&&(pe.$$scope={dirty:F,ctx:w}),h.$set(pe)},i(w){V||(m(t.$$.fragment,w),m(o.$$.fragment,w),m(s.$$.fragment,w),m(r.$$.fragment,w),m(g.$$.fragment,w),m(_.$$.fragment,w),m(h.$$.fragment,w),m(W.$$.fragment,w),V=!0)},o(w){p(t.$$.fragment,w),p(o.$$.fragment,w),p(s.$$.fragment,w),p(r.$$.fragment,w),p(g.$$.fragment,w),p(_.$$.fragment,w),p(h.$$.fragment,w),p(W.$$.fragment,w),V=!1},d(w){w&&c(e),k(t),k(o),w&&c(l),w&&c(a),k(s),k(r),w&&c($),w&&c(u),k(g),k(_),w&&c(B),w&&c(b),k(h),k(W)}}}function Et(i){let e,t,n,o,l,a,s,f,r,$;return e=new J({props:{title:"Example",$$slots:{default:[Ze]},$$scope:{ctx:i}}}),n=new J({props:{title:"Disable Automatic Closing",$$slots:{default:[rt]},$$scope:{ctx:i}}}),l=new J({props:{title:"Fullscreen",$$slots:{default:[_t]},$$scope:{ctx:i}}}),s=new J({props:{title:"Accessibility + Usability",$$slots:{default:[wt]},$$scope:{ctx:i}}}),r=new J({props:{title:"Props",$$slots:{default:[Ot]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment),o=I(),D(l.$$.fragment),a=I(),D(s.$$.fragment),f=I(),D(r.$$.fragment)},l(u){v(e.$$.fragment,u),t=y(u),v(n.$$.fragment,u),o=y(u),v(l.$$.fragment,u),a=y(u),v(s.$$.fragment,u),f=y(u),v(r.$$.fragment,u)},m(u,g){C(e,u,g),d(u,t,g),C(n,u,g),d(u,o,g),C(l,u,g),d(u,a,g),C(s,u,g),d(u,f,g),C(r,u,g),$=!0},p(u,g){const R={};g&8193&&(R.$$scope={dirty:g,ctx:u}),e.$set(R);const _={};g&8194&&(_.$$scope={dirty:g,ctx:u}),n.$set(_);const B={};g&8196&&(B.$$scope={dirty:g,ctx:u}),l.$set(B);const b={};g&8192&&(b.$$scope={dirty:g,ctx:u}),s.$set(b);const h={};g&8192&&(h.$$scope={dirty:g,ctx:u}),r.$set(h)},i(u){$||(m(e.$$.fragment,u),m(n.$$.fragment,u),m(l.$$.fragment,u),m(s.$$.fragment,u),m(r.$$.fragment,u),$=!0)},o(u){p(e.$$.fragment,u),p(n.$$.fragment,u),p(l.$$.fragment,u),p(s.$$.fragment,u),p(r.$$.fragment,u),$=!1},d(u){k(e,u),u&&c(t),k(n,u),u&&c(o),k(l,u),u&&c(a),k(s,u),u&&c(f),k(r,u)}}}function It(i){let e,t,n,o,l,a,s,f;return e=new Oe({props:{title:"Dialog"}}),n=new Ce({props:{what:["Dialog","DialogHeader","DialogContent","DialogActions"],from:"core"}}),l=new ke({props:{text:"A versatile and accessible modal dialog."}}),s=new ve({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment),t=I(),D(n.$$.fragment),o=I(),D(l.$$.fragment),a=I(),D(s.$$.fragment)},l(r){v(e.$$.fragment,r),t=y(r),v(n.$$.fragment,r),o=y(r),v(l.$$.fragment,r),a=y(r),v(s.$$.fragment,r)},m(r,$){C(e,r,$),d(r,t,$),C(n,r,$),d(r,o,$),C(l,r,$),d(r,a,$),C(s,r,$),f=!0},p(r,[$]){const u={};$&8199&&(u.$$scope={dirty:$,ctx:r}),s.$set(u)},i(r){f||(m(e.$$.fragment,r),m(n.$$.fragment,r),m(l.$$.fragment,r),m(s.$$.fragment,r),f=!0)},o(r){p(e.$$.fragment,r),p(n.$$.fragment,r),p(l.$$.fragment,r),p(s.$$.fragment,r),f=!1},d(r){k(e,r),r&&c(t),k(n,r),r&&c(o),k(l,r),r&&c(a),k(s,r)}}}function yt(i,e,t){let n=!1,o=!1,l=!1;const a=()=>t(0,n=!0),s=()=>t(0,n=!1),f=()=>t(0,n=!1);function r(b){n=b,t(0,n)}const $=()=>t(1,o=!0),u=()=>t(1,o=!1);function g(b){o=b,t(1,o)}const R=()=>t(2,l=!0),_=()=>t(2,l=!1);function B(b){l=b,t(2,l)}return[n,o,l,a,s,f,r,$,u,g,R,_,B]}class Ut extends Y{constructor(e){super(),q(this,e,yt,It,G,{})}}export{Ut as default};
