import{S as J,i as Q,s as X,w as b,a as T,x as h,c as M,y as _,b as m,f as g,t as v,z as y,h as c,B as F,q as p,r as $,R as V,T as N,k as O,l as C,m as x,n as W,H as D,U as Y,p as I}from"../../../../chunks/index-be153a96.js";import{B as q}from"../../../../chunks/Button-d6e1b2f4.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-4604d585.js";import{M as j}from"../../../../chunks/Modal-575b8a1b.js";import{D as Z}from"../../../../chunks/DocContent-d112f228.js";import{D as tt}from"../../../../chunks/DocImport-426f0676.js";import{D as et}from"../../../../chunks/DocIntoText-d6b0c0e6.js";import{D as H}from"../../../../chunks/DocSection-abb8d504.js";import{D as R}from"../../../../chunks/DocSectionText-14b597b7.js";import{D as nt}from"../../../../chunks/DocTitle-7d81791e.js";import{E as G}from"../../../../chunks/Example-05595231.js";import{P as ot}from"../../../../chunks/PropTable-7f69690e.js";const lt=`<script lang="ts">
	import { BackgroundScrollBlocker } from '$lib';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import { createEventDispatcher, setContext } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	/**
	 * The id of the modal.
	 *
	 * When not set, it is automatically generated.
	 *
	 * Can be accessed via the \`d4r-modal-id\` context.
	 */
	export let id = \`d4r-modal-\${generateRandomId()}\`;

	/**
	 * Whether the modal is open.
	 *
	 * This value can be bound to and will be set to \`false\` when the user
	 * clicks outside of the modal or presses the Esc key.
	 */
	export let open = false;

	/**
	 * Whether the modal should be closed when the user clicks outside of it.
	 */
	export let disableCloseOnOutsideClick = false;

	/**
	 * Whether the modal should be closed when the user presses the Esc key.
	 */
	export let disableCloseOnEscape = false;

	/**
	 * The id of the element that should automatically be focused when the modal is opened.
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

	let modalElement: HTMLElement;

	const dispatch = createEventDispatcher();

	function dialogTransition(node: Element, { delay = 0, duration = 400 }) {
		const o = +getComputedStyle(node).opacity;
		return {
			delay,
			duration,
			css: (t: number) => {
				const eased = cubicInOut(t);
				return \`
                    opacity: \${t * o};
                    transform: scale(\${eased * 0.05 + 0.95})
                \`;
			}
		};
	}

	setContext('d4r-modal-close-function', close);

	setContext('d4r-modal-set-aria-labelledby-function', (labelledBy: string) => {
		if (!ariaLabelledby) {
			ariaLabelledby = labelledBy;
		}
	});

	setContext('d4r-modal-set-aria-describedby-function', (describedBy: string) => {
		if (!ariaDescribedby) {
			ariaDescribedby = describedBy;
		}
	});

	$: setContext('d4r-modal-id', id);

	function close() {
		open = false;
		dispatch('close');
	}

	// A boolean that is true if the modal has been opened recently
	let openedRecently: boolean;
	$: {
		if (open) {
			openedRecently = true;
			setTimeout(() => (openedRecently = false), 200);
		} else {
			openedRecently = false;
		}
	}

	function handleClickOutside() {
		// We only close the modal when it was not opened recently.
		// This is mainly to prevent the dialog from closing immediately
		// because the click-outside is also triggered by the action that
		// caused the modal to open.
		if (!openedRecently && !disableCloseOnOutsideClick) {
			close();
		}
	}

	function getTabbableNodes(parent: HTMLElement) {
		const nodes = parent.querySelectorAll('*');
		return Array.from(nodes)
			.filter((node): node is HTMLElement => node instanceof HTMLElement)
			.filter((node: HTMLElement) => node.tabIndex >= 0);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key == 'Escape' && !disableCloseOnEscape) {
			close();
		}
		// Trap focus to prevent the user from tabbing out of the modal
		// while it is open
		if (open && event.key === 'Tab') {
			const tabbable = getTabbableNodes(modalElement);
			let index =
				document.activeElement instanceof HTMLElement
					? tabbable.indexOf(document.activeElement)
					: -1;
			if (index === -1 && event.shiftKey) index = 0;
			index += tabbable.length + (event.shiftKey ? -1 : 1);
			index %= tabbable.length;
			if (tabbable[index]) {
				tabbable[index].focus();
			}
			event.preventDefault();
		}
	}

	function handleDialogOpen(element: HTMLElement) {
		// Remove focus from elements outside the modal
		const tabbable = getTabbableNodes(element);
		if (autoFocusElement) {
			const elementToFocus = tabbable.find((element) => element.id === autoFocusElement);
			if (elementToFocus) {
				elementToFocus.focus();
				return;
			}
		}
		if (
			document.activeElement instanceof HTMLElement &&
			tabbable.includes(document.activeElement)
		) {
			return;
		}
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur();
		}
	}
<\/script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<BackgroundScrollBlocker />
	<div
		{id}
		bind:this={modalElement}
		use:handleDialogOpen
		class="d4r-fixed d4r-inset-0 d4r-z-50 d4r-flex d4r-items-center d4r-justify-center d4r-overflow-y-auto"
		aria-labelledby={ariaLabelledby}
		aria-describedby={ariaDescribedby}
		role="dialog"
		aria-modal="true"
	>
		<div class="d4r-max-w-full d4r-overflow-hidden">
			<div
				transition:fade={{ duration: 200 }}
				class="d4r-fixed d4r-inset-0 d4r-bg-black/75 d4r-transition-opacity dark:d4r-bg-black/75"
				aria-hidden="true"
			/>

			<div
				transition:dialogTransition={{ duration: 200 }}
				use:clickOutside={handleClickOutside}
				class="d4r-transform d4r-overflow-hidden d4r-transition-all"
			>
				<slot />
			</div>
		</div>
	</div>
{/if}
`;function st(f){let e;return{c(){e=p(`The example below displays a red square when the modal is opened. The modal can be closed by
			clicking anywhere outside of the square or pressing the Esc key. While it is open, the
			background will not scroll and elements outside of the modal cannot be focused.`)},l(o){e=$(o,`The example below displays a red square when the modal is opened. The modal can be closed by
			clicking anywhere outside of the square or pressing the Esc key. While it is open, the
			background will not scroll and elements outside of the modal cannot be focused.`)},m(o,l){m(o,e,l)},d(o){o&&c(e)}}}function at(f){let e;return{c(){e=p("Open Modal")},l(o){e=$(o,"Open Modal")},m(o,l){m(o,e,l)},d(o){o&&c(e)}}}function it(f){let e;return{c(){e=O("div"),this.h()},l(o){e=C(o,"DIV",{style:!0}),x(e).forEach(c),this.h()},h(){I(e,"background","red"),I(e,"height","100px"),I(e,"width","100px")},m(o,l){m(o,e,l)},p:F,d(o){o&&c(e)}}}function rt(f){let e,o,l,s,n,a;o=new q({props:{$$slots:{default:[at]},$$scope:{ctx:f}}}),o.$on("click",f[2]);function d(t){f[3](t)}let r={$$slots:{default:[it]},$$scope:{ctx:f}};return f[0]!==void 0&&(r.open=f[0]),s=new j({props:r}),V.push(()=>N(s,"open",d,f[0])),{c(){e=O("div"),b(o.$$.fragment),l=T(),b(s.$$.fragment),this.h()},l(t){e=C(t,"DIV",{slot:!0});var i=x(e);h(o.$$.fragment,i),l=M(i),h(s.$$.fragment,i),i.forEach(c),this.h()},h(){W(e,"slot","preview")},m(t,i){m(t,e,i),_(o,e,null),D(e,l),_(s,e,null),a=!0},p(t,i){const w={};i&128&&(w.$$scope={dirty:i,ctx:t}),o.$set(w);const E={};i&128&&(E.$$scope={dirty:i,ctx:t}),!n&&i&1&&(n=!0,E.open=t[0],Y(()=>n=!1)),s.$set(E)},i(t){a||(g(o.$$.fragment,t),g(s.$$.fragment,t),a=!0)},o(t){v(o.$$.fragment,t),v(s.$$.fragment,t),a=!1},d(t){t&&c(e),y(o),y(s)}}}function dt(f){let e,o,l,s;return e=new R({props:{$$slots:{default:[st]},$$scope:{ctx:f}}}),l=new G({props:{code:`<Button on:click={() => (open = true)}>Open Modal</Button>

<Modal bind:open>
    <div />
</Modal>

<style>
    div {
        background: red;
        height: 100px;
        width: 100px;
    }
</style>`,$$slots:{preview:[rt]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment),o=T(),b(l.$$.fragment)},l(n){h(e.$$.fragment,n),o=M(n),h(l.$$.fragment,n)},m(n,a){_(e,n,a),m(n,o,a),_(l,n,a),s=!0},p(n,a){const d={};a&128&&(d.$$scope={dirty:a,ctx:n}),e.$set(d);const r={};a&129&&(r.$$scope={dirty:a,ctx:n}),l.$set(r)},i(n){s||(g(e.$$.fragment,n),g(l.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),v(l.$$.fragment,n),s=!1},d(n){y(e,n),n&&c(o),y(l,n)}}}function ct(f){let e,o,l,s,n,a,d,r,t,i,w,E,L,B,S,A;return{c(){e=p("You can use the "),o=O("code"),l=p("disableCloseOnEscape"),s=p(" and "),n=O("code"),a=p("disableCloseOnOutsideClick"),d=p(`
			props to prevent the `),r=O("code"),t=p("close"),i=p(" event from firing and a binded "),w=O("code"),E=p("open"),L=p(`
			prop from being set to `),B=O("code"),S=p("false"),A=p(".")},l(u){e=$(u,"You can use the "),o=C(u,"CODE",{});var k=x(o);l=$(k,"disableCloseOnEscape"),k.forEach(c),s=$(u," and "),n=C(u,"CODE",{});var K=x(n);a=$(K,"disableCloseOnOutsideClick"),K.forEach(c),d=$(u,`
			props to prevent the `),r=C(u,"CODE",{});var P=x(r);t=$(P,"close"),P.forEach(c),i=$(u," event from firing and a binded "),w=C(u,"CODE",{});var z=x(w);E=$(z,"open"),z.forEach(c),L=$(u,`
			prop from being set to `),B=C(u,"CODE",{});var U=x(B);S=$(U,"false"),U.forEach(c),A=$(u,".")},m(u,k){m(u,e,k),m(u,o,k),D(o,l),m(u,s,k),m(u,n,k),D(n,a),m(u,d,k),m(u,r,k),D(r,t),m(u,i,k),m(u,w,k),D(w,E),m(u,L,k),m(u,B,k),D(B,S),m(u,A,k)},p:F,d(u){u&&c(e),u&&c(o),u&&c(s),u&&c(n),u&&c(d),u&&c(r),u&&c(i),u&&c(w),u&&c(L),u&&c(B),u&&c(A)}}}function ft(f){let e;return{c(){e=p("Open Modal")},l(o){e=$(o,"Open Modal")},m(o,l){m(o,e,l)},d(o){o&&c(e)}}}function mt(f){let e;return{c(){e=p("Close")},l(o){e=$(o,"Close")},m(o,l){m(o,e,l)},d(o){o&&c(e)}}}function ut(f){let e,o,l,s,n,a;return n=new q({props:{id:"close-btn",$$slots:{default:[mt]},$$scope:{ctx:f}}}),n.$on("click",f[5]),{c(){e=O("div"),o=O("p"),l=p("Close With Button Only"),s=T(),b(n.$$.fragment),this.h()},l(d){e=C(d,"DIV",{style:!0});var r=x(e);o=C(r,"P",{id:!0,style:!0});var t=x(o);l=$(t,"Close With Button Only"),t.forEach(c),s=M(r),h(n.$$.fragment,r),r.forEach(c),this.h()},h(){W(o,"id","modal-title"),I(o,"margin-bottom","16px"),I(e,"background","white"),I(e,"padding","16px")},m(d,r){m(d,e,r),D(e,o),D(o,l),D(e,s),_(n,e,null),a=!0},p(d,r){const t={};r&128&&(t.$$scope={dirty:r,ctx:d}),n.$set(t)},i(d){a||(g(n.$$.fragment,d),a=!0)},o(d){v(n.$$.fragment,d),a=!1},d(d){d&&c(e),y(n)}}}function pt(f){let e,o,l,s,n,a;o=new q({props:{$$slots:{default:[ft]},$$scope:{ctx:f}}}),o.$on("click",f[4]);function d(t){f[6](t)}let r={disableCloseOnEscape:!0,disableCloseOnOutsideClick:!0,ariaLabelledby:"modal-title",autoFocusElement:"close-btn",$$slots:{default:[ut]},$$scope:{ctx:f}};return f[1]!==void 0&&(r.open=f[1]),s=new j({props:r}),V.push(()=>N(s,"open",d,f[1])),{c(){e=O("div"),b(o.$$.fragment),l=T(),b(s.$$.fragment),this.h()},l(t){e=C(t,"DIV",{slot:!0});var i=x(e);h(o.$$.fragment,i),l=M(i),h(s.$$.fragment,i),i.forEach(c),this.h()},h(){W(e,"slot","preview")},m(t,i){m(t,e,i),_(o,e,null),D(e,l),_(s,e,null),a=!0},p(t,i){const w={};i&128&&(w.$$scope={dirty:i,ctx:t}),o.$set(w);const E={};i&130&&(E.$$scope={dirty:i,ctx:t}),!n&&i&2&&(n=!0,E.open=t[1],Y(()=>n=!1)),s.$set(E)},i(t){a||(g(o.$$.fragment,t),g(s.$$.fragment,t),a=!0)},o(t){v(o.$$.fragment,t),v(s.$$.fragment,t),a=!1},d(t){t&&c(e),y(o),y(s)}}}function $t(f){let e,o,l,s;return e=new R({props:{$$slots:{default:[ct]},$$scope:{ctx:f}}}),l=new G({props:{code:`<Button on:click={() => (open = true)}>Open Modal</Button>

<Modal 
    bind:open
    disableCloseOnEscape
    disableCloseOnOutsideClick
    ariaLabelledby="modal-title"
    autoFocusElement="close-btn"
>
    <div>
        <p id="modal-title">Close with button only</p>
        <Button id="close-btn" on:click={() => (open = false)}>Close</Button>
    </div>
</Modal>

<style>
    div {
        background: white;
        padding: 16px
    }

    p {
        margin-bottom: 16px;
    }
</style>`,$$slots:{preview:[pt]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment),o=T(),b(l.$$.fragment)},l(n){h(e.$$.fragment,n),o=M(n),h(l.$$.fragment,n)},m(n,a){_(e,n,a),m(n,o,a),_(l,n,a),s=!0},p(n,a){const d={};a&128&&(d.$$scope={dirty:a,ctx:n}),e.$set(d);const r={};a&130&&(r.$$scope={dirty:a,ctx:n}),l.$set(r)},i(n){s||(g(e.$$.fragment,n),g(l.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),v(l.$$.fragment,n),s=!1},d(n){y(e,n),n&&c(o),y(l,n)}}}function bt(f){let e,o,l,s;return{c(){e=p("For improved accessibility, it is recommended to use the "),o=O("code"),l=p("ariaLabelledby"),s=p(` prop to provide
			a name for the modal, typically the title.`)},l(n){e=$(n,"For improved accessibility, it is recommended to use the "),o=C(n,"CODE",{});var a=x(o);l=$(a,"ariaLabelledby"),a.forEach(c),s=$(n,` prop to provide
			a name for the modal, typically the title.`)},m(n,a){m(n,e,a),m(n,o,a),D(o,l),m(n,s,a)},p:F,d(n){n&&c(e),n&&c(o),n&&c(s)}}}function ht(f){let e,o,l,s,n,a,d;return{c(){e=p(`Additionally, it is recommended to focus on a non-destructive action within the modal when it
			opens. The `),o=O("code"),l=p("autoFocusElement"),s=p(` prop can be utilized to automatically focus the
			element with the specified id when the modal opens. As an alternative, most focusable Dapper
			UI components offer an `),n=O("code"),a=p("autoFocus"),d=p(` prop that will automatically focus the element when
			it is mounted.`)},l(r){e=$(r,`Additionally, it is recommended to focus on a non-destructive action within the modal when it
			opens. The `),o=C(r,"CODE",{});var t=x(o);l=$(t,"autoFocusElement"),t.forEach(c),s=$(r,` prop can be utilized to automatically focus the
			element with the specified id when the modal opens. As an alternative, most focusable Dapper
			UI components offer an `),n=C(r,"CODE",{});var i=x(n);a=$(i,"autoFocus"),i.forEach(c),d=$(r,` prop that will automatically focus the element when
			it is mounted.`)},m(r,t){m(r,e,t),m(r,o,t),D(o,l),m(r,s,t),m(r,n,t),D(n,a),m(r,d,t)},p:F,d(r){r&&c(e),r&&c(o),r&&c(s),r&&c(n),r&&c(d)}}}function _t(f){let e,o,l,s;return e=new R({props:{$$slots:{default:[bt]},$$scope:{ctx:f}}}),l=new R({props:{$$slots:{default:[ht]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment),o=T(),b(l.$$.fragment)},l(n){h(e.$$.fragment,n),o=M(n),h(l.$$.fragment,n)},m(n,a){_(e,n,a),m(n,o,a),_(l,n,a),s=!0},p(n,a){const d={};a&128&&(d.$$scope={dirty:a,ctx:n}),e.$set(d);const r={};a&128&&(r.$$scope={dirty:a,ctx:n}),l.$set(r)},i(n){s||(g(e.$$.fragment,n),g(l.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),v(l.$$.fragment,n),s=!1},d(n){y(e,n),n&&c(o),y(l,n)}}}function gt(f){let e,o;return e=new ot({props:{componentSrc:lt}}),{c(){b(e.$$.fragment)},l(l){h(e.$$.fragment,l)},m(l,s){_(e,l,s),o=!0},p:F,i(l){o||(g(e.$$.fragment,l),o=!0)},o(l){v(e.$$.fragment,l),o=!1},d(l){y(e,l)}}}function vt(f){let e,o,l,s,n,a,d,r;return e=new H({props:{title:"Example",$$slots:{default:[dt]},$$scope:{ctx:f}}}),l=new H({props:{title:"Disable Automatic Closing",$$slots:{default:[$t]},$$scope:{ctx:f}}}),n=new H({props:{title:"Accessibility + Usability",$$slots:{default:[_t]},$$scope:{ctx:f}}}),d=new H({props:{title:"Props",$$slots:{default:[gt]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment),o=T(),b(l.$$.fragment),s=T(),b(n.$$.fragment),a=T(),b(d.$$.fragment)},l(t){h(e.$$.fragment,t),o=M(t),h(l.$$.fragment,t),s=M(t),h(n.$$.fragment,t),a=M(t),h(d.$$.fragment,t)},m(t,i){_(e,t,i),m(t,o,i),_(l,t,i),m(t,s,i),_(n,t,i),m(t,a,i),_(d,t,i),r=!0},p(t,i){const w={};i&129&&(w.$$scope={dirty:i,ctx:t}),e.$set(w);const E={};i&130&&(E.$$scope={dirty:i,ctx:t}),l.$set(E);const L={};i&128&&(L.$$scope={dirty:i,ctx:t}),n.$set(L);const B={};i&128&&(B.$$scope={dirty:i,ctx:t}),d.$set(B)},i(t){r||(g(e.$$.fragment,t),g(l.$$.fragment,t),g(n.$$.fragment,t),g(d.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),v(l.$$.fragment,t),v(n.$$.fragment,t),v(d.$$.fragment,t),r=!1},d(t){y(e,t),t&&c(o),y(l,t),t&&c(s),y(n,t),t&&c(a),y(d,t)}}}function yt(f){let e,o,l,s,n,a,d,r;return e=new nt({props:{title:"Modal"}}),l=new tt({props:{what:"Modal",from:"core"}}),n=new et({props:{text:"An unstyled modal that can display any content. It automatically handles the background overlay, focus trapping, and closing of the modal when the user clicks outside of it or presses the Esc key. If you want a modal with pre-designed styling, consider using the Dialog component instead."}}),d=new Z({props:{$$slots:{default:[vt]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment),o=T(),b(l.$$.fragment),s=T(),b(n.$$.fragment),a=T(),b(d.$$.fragment)},l(t){h(e.$$.fragment,t),o=M(t),h(l.$$.fragment,t),s=M(t),h(n.$$.fragment,t),a=M(t),h(d.$$.fragment,t)},m(t,i){_(e,t,i),m(t,o,i),_(l,t,i),m(t,s,i),_(n,t,i),m(t,a,i),_(d,t,i),r=!0},p(t,[i]){const w={};i&131&&(w.$$scope={dirty:i,ctx:t}),d.$set(w)},i(t){r||(g(e.$$.fragment,t),g(l.$$.fragment,t),g(n.$$.fragment,t),g(d.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),v(l.$$.fragment,t),v(n.$$.fragment,t),v(d.$$.fragment,t),r=!1},d(t){y(e,t),t&&c(o),y(l,t),t&&c(s),y(n,t),t&&c(a),y(d,t)}}}function wt(f,e,o){let l=!1,s=!1;const n=()=>o(0,l=!0);function a(i){l=i,o(0,l)}const d=()=>o(1,s=!0),r=()=>o(1,s=!1);function t(i){s=i,o(1,s)}return[l,s,n,a,d,r,t]}class At extends J{constructor(e){super(),Q(this,e,wt,yt,X,{})}}export{At as default};
