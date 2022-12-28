<script lang="ts">
	import { Button } from '$lib';
	import Modal from '$lib/components/modal/Modal.svelte';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import Example from '../Example.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let modalOpen = false;
	let modalOpen2 = false;
</script>

<DocTitle title="Modal" />
<DocImport what="Modal" from="core" />
<DocIntoText
	text="An unstyled modal that can display any content. It automatically handles the background overlay, focus trapping, and closing of the modal when the user clicks outside of it or presses the Esc key. If you want a modal with pre-designed styling, consider using the Dialog component instead."
/>

<DocContent>
	<DocSection title="Example">
		<DocSectionText>
			The example below displays a red square when the modal is opened. The modal can be closed by
			clicking anywhere outside of the square or pressing the Esc key. While it is open, the
			background will not scroll and elements outside of the modal cannot be focused.
		</DocSectionText>
		<Example
			code={`<Button on:click={() => (open = true)}>Open Modal</Button>

<Modal bind:open>
    <div />
</Modal>

${'<'}style>
    div {
        background: red;
        height: 100px;
        width: 100px;
    }
</style>`}
		>
			<div slot="preview">
				<Button on:click={() => (modalOpen = true)}>Open Modal</Button>
				<Modal bind:open={modalOpen}>
					<div style="background: red; height: 100px; width: 100px;" />
				</Modal>
			</div>
		</Example>
	</DocSection>

	<DocSection title="Disable Automatic Closing">
		<DocSectionText>
			You can use the <code>disableCloseOnEscape</code> and <code>disableCloseOnOutsideClick</code>
			props to prevent the <code>close</code> event from firing and a binded <code>open</code>
			prop from being set to <code>false</code>.
		</DocSectionText>
		<Example
			code={`<Button on:click={() => (open = true)}>Open Modal</Button>

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

${'<'}style>
    div {
        background: white;
        padding: 16px
    }

    p {
        margin-bottom: 16px;
    }
</style>`}
		>
			<div slot="preview">
				<Button on:click={() => (modalOpen2 = true)}>Open Modal</Button>
				<Modal
					bind:open={modalOpen2}
					disableCloseOnEscape
					disableCloseOnOutsideClick
					ariaLabelledby="modal-title"
					autoFocusElement="close-btn"
				>
					<div style="background: white; padding: 16px;">
						<p id="modal-title" style="margin-bottom: 16px;">Close With Button Only</p>
						<Button id="close-btn" on:click={() => (modalOpen2 = false)}>Close</Button>
					</div>
				</Modal>
			</div>
		</Example>
	</DocSection>

	<DocSection title="Accessibility + Usability">
		<DocSectionText>
			For improved accessibility, it is recommended to use the <code>ariaLabelledby</code> prop to provide
			a name for the modal, typically the title.
		</DocSectionText>
		<DocSectionText>
			Additionally, it is recommended to focus on a non-destructive action within the modal when it
			opens. The <code>autoFocusElement</code> prop can be utilized to automatically focus the
			element with the specified id when the modal opens. As an alternative, most focusable Dapper
			UI components offer an <code>autoFocus</code> prop that will automatically focus the element when
			it is mounted.
		</DocSectionText>
	</DocSection>

	<PropsSection data={data.docs} />
</DocContent>
