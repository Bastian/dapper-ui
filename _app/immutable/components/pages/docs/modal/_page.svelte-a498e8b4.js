import{S as Q,i as R,s as X,w as h,a as M,x as b,c as B,y as g,b as m,f as w,t as v,z as E,h as $,q as u,r as d,a5 as j,a6 as G,k,l as C,m as D,n as W,H as y,a7 as J,B as L,p as T}from"../../../../chunks/index-76b41332.js";import{B as z}from"../../../../chunks/Button-f277f4af.js";import"../../../../chunks/ProgressBarMeterBase.svelte_svelte_type_style_lang-872d1322.js";import{M as K}from"../../../../chunks/Modal-ae0120b3.js";import{D as Z}from"../../../../chunks/DocContent-ad09106b.js";import{D as ee}from"../../../../chunks/DocImport-e2d64a69.js";import{D as te}from"../../../../chunks/DocIntoText-e5459aa9.js";import{D as V}from"../../../../chunks/DocSection-c2e659e6.js";import{D as q}from"../../../../chunks/DocSectionText-0ce854d6.js";import{D as oe}from"../../../../chunks/DocTitle-b2966dac.js";import{E as N}from"../../../../chunks/Example-f31669a8.js";function ne(c){let t;return{c(){t=u(`The example below displays a red square when the modal is opened. The modal can be closed by
			clicking anywhere outside of the square or pressing the Esc key. While it is open, the
			background will not scroll and elements outside of the modal cannot be focused.`)},l(o){t=d(o,`The example below displays a red square when the modal is opened. The modal can be closed by
			clicking anywhere outside of the square or pressing the Esc key. While it is open, the
			background will not scroll and elements outside of the modal cannot be focused.`)},m(o,s){m(o,t,s)},d(o){o&&$(t)}}}function se(c){let t;return{c(){t=u("Open Modal")},l(o){t=d(o,"Open Modal")},m(o,s){m(o,t,s)},d(o){o&&$(t)}}}function le(c){let t;return{c(){t=k("div"),this.h()},l(o){t=C(o,"DIV",{style:!0}),D(t).forEach($),this.h()},h(){T(t,"background","red"),T(t,"height","100px"),T(t,"width","100px")},m(o,s){m(o,t,s)},p:L,d(o){o&&$(t)}}}function ae(c){let t,o,s,a,e,r;o=new z({props:{$$slots:{default:[se]},$$scope:{ctx:c}}}),o.$on("click",c[2]);function l(n){c[3](n)}let i={$$slots:{default:[le]},$$scope:{ctx:c}};return c[0]!==void 0&&(i.open=c[0]),a=new K({props:i}),j.push(()=>G(a,"open",l)),{c(){t=k("div"),h(o.$$.fragment),s=M(),h(a.$$.fragment),this.h()},l(n){t=C(n,"DIV",{slot:!0});var f=D(t);b(o.$$.fragment,f),s=B(f),b(a.$$.fragment,f),f.forEach($),this.h()},h(){W(t,"slot","preview")},m(n,f){m(n,t,f),g(o,t,null),y(t,s),g(a,t,null),r=!0},p(n,f){const _={};f&128&&(_.$$scope={dirty:f,ctx:n}),o.$set(_);const x={};f&128&&(x.$$scope={dirty:f,ctx:n}),!e&&f&1&&(e=!0,x.open=n[0],J(()=>e=!1)),a.$set(x)},i(n){r||(w(o.$$.fragment,n),w(a.$$.fragment,n),r=!0)},o(n){v(o.$$.fragment,n),v(a.$$.fragment,n),r=!1},d(n){n&&$(t),E(o),E(a)}}}function ie(c){let t,o,s,a;return t=new q({props:{$$slots:{default:[ne]},$$scope:{ctx:c}}}),s=new N({props:{code:`<Button on:click={() => (open = true)}>Open Modal</Button>

<Modal bind:open>
    <div />
</Modal>

<style>
    div {
        background: red;
        height: 100px;
        width: 100px;
    }
</style>`,$$slots:{preview:[ae]},$$scope:{ctx:c}}}),{c(){h(t.$$.fragment),o=M(),h(s.$$.fragment)},l(e){b(t.$$.fragment,e),o=B(e),b(s.$$.fragment,e)},m(e,r){g(t,e,r),m(e,o,r),g(s,e,r),a=!0},p(e,r){const l={};r&128&&(l.$$scope={dirty:r,ctx:e}),t.$set(l);const i={};r&129&&(i.$$scope={dirty:r,ctx:e}),s.$set(i)},i(e){a||(w(t.$$.fragment,e),w(s.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),a=!1},d(e){E(t,e),e&&$(o),E(s,e)}}}function re(c){let t,o,s,a,e,r,l,i,n,f,_,x,F,I,S,A;return{c(){t=u("You can use the "),o=k("code"),s=u("disableCloseOnEscape"),a=u(" and "),e=k("code"),r=u("disableCloseOnOutsideClick"),l=u(`
			props to prevent the `),i=k("code"),n=u("close"),f=u(" event from firing and a binded "),_=k("code"),x=u("open"),F=u(`
			prop from being set to `),I=k("code"),S=u("false"),A=u(".")},l(p){t=d(p,"You can use the "),o=C(p,"CODE",{});var O=D(o);s=d(O,"disableCloseOnEscape"),O.forEach($),a=d(p," and "),e=C(p,"CODE",{});var U=D(e);r=d(U,"disableCloseOnOutsideClick"),U.forEach($),l=d(p,`
			props to prevent the `),i=C(p,"CODE",{});var P=D(i);n=d(P,"close"),P.forEach($),f=d(p," event from firing and a binded "),_=C(p,"CODE",{});var Y=D(_);x=d(Y,"open"),Y.forEach($),F=d(p,`
			prop from being set to `),I=C(p,"CODE",{});var H=D(I);S=d(H,"false"),H.forEach($),A=d(p,".")},m(p,O){m(p,t,O),m(p,o,O),y(o,s),m(p,a,O),m(p,e,O),y(e,r),m(p,l,O),m(p,i,O),y(i,n),m(p,f,O),m(p,_,O),y(_,x),m(p,F,O),m(p,I,O),y(I,S),m(p,A,O)},p:L,d(p){p&&$(t),p&&$(o),p&&$(a),p&&$(e),p&&$(l),p&&$(i),p&&$(f),p&&$(_),p&&$(F),p&&$(I),p&&$(A)}}}function fe(c){let t;return{c(){t=u("Open Modal")},l(o){t=d(o,"Open Modal")},m(o,s){m(o,t,s)},d(o){o&&$(t)}}}function $e(c){let t;return{c(){t=u("Close")},l(o){t=d(o,"Close")},m(o,s){m(o,t,s)},d(o){o&&$(t)}}}function ce(c){let t,o,s,a,e,r;return e=new z({props:{id:"close-btn",$$slots:{default:[$e]},$$scope:{ctx:c}}}),e.$on("click",c[5]),{c(){t=k("div"),o=k("p"),s=u("Close With Button Only"),a=M(),h(e.$$.fragment),this.h()},l(l){t=C(l,"DIV",{style:!0});var i=D(t);o=C(i,"P",{id:!0,style:!0});var n=D(o);s=d(n,"Close With Button Only"),n.forEach($),a=B(i),b(e.$$.fragment,i),i.forEach($),this.h()},h(){W(o,"id","modal-title"),T(o,"margin-bottom","16px"),T(t,"background","white"),T(t,"padding","16px")},m(l,i){m(l,t,i),y(t,o),y(o,s),y(t,a),g(e,t,null),r=!0},p(l,i){const n={};i&128&&(n.$$scope={dirty:i,ctx:l}),e.$set(n)},i(l){r||(w(e.$$.fragment,l),r=!0)},o(l){v(e.$$.fragment,l),r=!1},d(l){l&&$(t),E(e)}}}function pe(c){let t,o,s,a,e,r;o=new z({props:{$$slots:{default:[fe]},$$scope:{ctx:c}}}),o.$on("click",c[4]);function l(n){c[6](n)}let i={disableCloseOnEscape:!0,disableCloseOnOutsideClick:!0,ariaLabelledby:"modal-title",autoFocusElement:"close-btn",$$slots:{default:[ce]},$$scope:{ctx:c}};return c[1]!==void 0&&(i.open=c[1]),a=new K({props:i}),j.push(()=>G(a,"open",l)),{c(){t=k("div"),h(o.$$.fragment),s=M(),h(a.$$.fragment),this.h()},l(n){t=C(n,"DIV",{slot:!0});var f=D(t);b(o.$$.fragment,f),s=B(f),b(a.$$.fragment,f),f.forEach($),this.h()},h(){W(t,"slot","preview")},m(n,f){m(n,t,f),g(o,t,null),y(t,s),g(a,t,null),r=!0},p(n,f){const _={};f&128&&(_.$$scope={dirty:f,ctx:n}),o.$set(_);const x={};f&130&&(x.$$scope={dirty:f,ctx:n}),!e&&f&2&&(e=!0,x.open=n[1],J(()=>e=!1)),a.$set(x)},i(n){r||(w(o.$$.fragment,n),w(a.$$.fragment,n),r=!0)},o(n){v(o.$$.fragment,n),v(a.$$.fragment,n),r=!1},d(n){n&&$(t),E(o),E(a)}}}function me(c){let t,o,s,a;return t=new q({props:{$$slots:{default:[re]},$$scope:{ctx:c}}}),s=new N({props:{code:`<Button on:click={() => (open = true)}>Open Modal</Button>

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
</style>`,$$slots:{preview:[pe]},$$scope:{ctx:c}}}),{c(){h(t.$$.fragment),o=M(),h(s.$$.fragment)},l(e){b(t.$$.fragment,e),o=B(e),b(s.$$.fragment,e)},m(e,r){g(t,e,r),m(e,o,r),g(s,e,r),a=!0},p(e,r){const l={};r&128&&(l.$$scope={dirty:r,ctx:e}),t.$set(l);const i={};r&130&&(i.$$scope={dirty:r,ctx:e}),s.$set(i)},i(e){a||(w(t.$$.fragment,e),w(s.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),a=!1},d(e){E(t,e),e&&$(o),E(s,e)}}}function ue(c){let t,o,s,a;return{c(){t=u("For improved accessibility, it is recommended to use the "),o=k("code"),s=u("ariaLabelledby"),a=u(` prop to provide
			a name for the modal, typically the title.`)},l(e){t=d(e,"For improved accessibility, it is recommended to use the "),o=C(e,"CODE",{});var r=D(o);s=d(r,"ariaLabelledby"),r.forEach($),a=d(e,` prop to provide
			a name for the modal, typically the title.`)},m(e,r){m(e,t,r),m(e,o,r),y(o,s),m(e,a,r)},p:L,d(e){e&&$(t),e&&$(o),e&&$(a)}}}function de(c){let t,o,s,a,e,r,l;return{c(){t=u(`Additionally, it is recommended to focus on a non-destructive action within the modal when it
			opens. The `),o=k("code"),s=u("autoFocusElement"),a=u(` prop can be utilized to automatically focus the
			element with the specified id when the modal opens. As an alternative, most focusable Dapper
			UI components offer an `),e=k("code"),r=u("autoFocus"),l=u(` prop that will automatically focus the element when
			it is mounted.`)},l(i){t=d(i,`Additionally, it is recommended to focus on a non-destructive action within the modal when it
			opens. The `),o=C(i,"CODE",{});var n=D(o);s=d(n,"autoFocusElement"),n.forEach($),a=d(i,` prop can be utilized to automatically focus the
			element with the specified id when the modal opens. As an alternative, most focusable Dapper
			UI components offer an `),e=C(i,"CODE",{});var f=D(e);r=d(f,"autoFocus"),f.forEach($),l=d(i,` prop that will automatically focus the element when
			it is mounted.`)},m(i,n){m(i,t,n),m(i,o,n),y(o,s),m(i,a,n),m(i,e,n),y(e,r),m(i,l,n)},p:L,d(i){i&&$(t),i&&$(o),i&&$(a),i&&$(e),i&&$(l)}}}function _e(c){let t,o,s,a;return t=new q({props:{$$slots:{default:[ue]},$$scope:{ctx:c}}}),s=new q({props:{$$slots:{default:[de]},$$scope:{ctx:c}}}),{c(){h(t.$$.fragment),o=M(),h(s.$$.fragment)},l(e){b(t.$$.fragment,e),o=B(e),b(s.$$.fragment,e)},m(e,r){g(t,e,r),m(e,o,r),g(s,e,r),a=!0},p(e,r){const l={};r&128&&(l.$$scope={dirty:r,ctx:e}),t.$set(l);const i={};r&128&&(i.$$scope={dirty:r,ctx:e}),s.$set(i)},i(e){a||(w(t.$$.fragment,e),w(s.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),a=!1},d(e){E(t,e),e&&$(o),E(s,e)}}}function he(c){let t,o,s,a,e,r;return t=new V({props:{title:"Example",$$slots:{default:[ie]},$$scope:{ctx:c}}}),s=new V({props:{title:"Disable Automatic Closing",$$slots:{default:[me]},$$scope:{ctx:c}}}),e=new V({props:{title:"Accessibility + Usability",$$slots:{default:[_e]},$$scope:{ctx:c}}}),{c(){h(t.$$.fragment),o=M(),h(s.$$.fragment),a=M(),h(e.$$.fragment)},l(l){b(t.$$.fragment,l),o=B(l),b(s.$$.fragment,l),a=B(l),b(e.$$.fragment,l)},m(l,i){g(t,l,i),m(l,o,i),g(s,l,i),m(l,a,i),g(e,l,i),r=!0},p(l,i){const n={};i&129&&(n.$$scope={dirty:i,ctx:l}),t.$set(n);const f={};i&130&&(f.$$scope={dirty:i,ctx:l}),s.$set(f);const _={};i&128&&(_.$$scope={dirty:i,ctx:l}),e.$set(_)},i(l){r||(w(t.$$.fragment,l),w(s.$$.fragment,l),w(e.$$.fragment,l),r=!0)},o(l){v(t.$$.fragment,l),v(s.$$.fragment,l),v(e.$$.fragment,l),r=!1},d(l){E(t,l),l&&$(o),E(s,l),l&&$(a),E(e,l)}}}function be(c){let t,o,s,a,e,r,l,i;return t=new oe({props:{title:"Modal"}}),s=new ee({props:{what:"Modal",from:"core"}}),e=new te({props:{text:"An unstyled modal that can display any content. It automatically handles the background overlay, focus trapping, and closing of the modal when the user clicks outside of it or presses the Esc key. If you want a modal with pre-designed styling, consider using the Dialog component instead."}}),l=new Z({props:{$$slots:{default:[he]},$$scope:{ctx:c}}}),{c(){h(t.$$.fragment),o=M(),h(s.$$.fragment),a=M(),h(e.$$.fragment),r=M(),h(l.$$.fragment)},l(n){b(t.$$.fragment,n),o=B(n),b(s.$$.fragment,n),a=B(n),b(e.$$.fragment,n),r=B(n),b(l.$$.fragment,n)},m(n,f){g(t,n,f),m(n,o,f),g(s,n,f),m(n,a,f),g(e,n,f),m(n,r,f),g(l,n,f),i=!0},p(n,[f]){const _={};f&131&&(_.$$scope={dirty:f,ctx:n}),l.$set(_)},i(n){i||(w(t.$$.fragment,n),w(s.$$.fragment,n),w(e.$$.fragment,n),w(l.$$.fragment,n),i=!0)},o(n){v(t.$$.fragment,n),v(s.$$.fragment,n),v(e.$$.fragment,n),v(l.$$.fragment,n),i=!1},d(n){E(t,n),n&&$(o),E(s,n),n&&$(a),E(e,n),n&&$(r),E(l,n)}}}function ge(c,t,o){let s=!1,a=!1;const e=()=>o(0,s=!0);function r(f){s=f,o(0,s)}const l=()=>o(1,a=!0),i=()=>o(1,a=!1);function n(f){a=f,o(1,a)}return[s,a,e,r,l,i,n]}class Ie extends Q{constructor(t){super(),R(this,t,ge,be,X,{})}}export{Ie as default};