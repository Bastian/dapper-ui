<script lang="ts">
	import { Button } from '$lib';
	import Dialog from '$lib/components/dialog/Dialog.svelte';
	import DialogActions from '$lib/components/dialog/DialogActions.svelte';
	import DialogContent from '$lib/components/dialog/DialogContent.svelte';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import Example from '../Example.svelte';

	let dialogOpen = false;
	let dialogOpen2 = false;
	let fullscreenDialogOpen = false;
</script>

<DocTitle title="Dialog" />
<DocImport what="Dialog" from="core" />
<DocIntoText text="A versatile modal dialog." />

<DocContent>
	<DocSection title="Example">
		<DocSectionText>A very simple dialog with a title, content and a button.</DocSectionText>
		<Example
			code={`<Button on:click={() => (open = true)}>Open Dialog</Button>

<Dialog bind:open title="Dialog Title">
    <DialogContent>
        A very simple dialog with a title, content and a button.
    </DialogContent>
    <DialogActions>
        <Button autoFocus on:click={() => (open = false)}>Okay</Button>
    </DialogActions>
</Dialog>`}
		>
			<div slot="preview">
				<Button on:click={() => (dialogOpen = true)}>Open Dialog</Button>
				<Dialog title="Dialog Title" bind:open={dialogOpen}>
					<DialogContent>A very simple dialog with a title, content and a button.</DialogContent>
					<DialogActions>
						<Button autoFocus on:click={() => (dialogOpen = false)}>Okay</Button>
					</DialogActions>
				</Dialog>
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
			code={`<Button on:click={() => (open = true)}>Open Dialog</Button>

<Dialog 
    bind:open
    title="Close With Button Only"
    disableCloseOnEscape
    disableCloseOnOutsideClick
>
    <DialogContent>
        A dialog that can only be closed with the button but not by clicking outside
        or by pressing the Esc key.
    </DialogContent>
    <DialogActions>
        <Button autoFocus on:click={() => (open = false)}>Okay</Button>
    </DialogActions>
</Dialog>`}
		>
			<div slot="preview">
				<Button on:click={() => (dialogOpen2 = true)}>Open Dialog</Button>
				<Dialog
					bind:open={dialogOpen2}
					title="Close With Button Only"
					disableCloseOnEscape
					disableCloseOnOutsideClick
				>
					<DialogContent>
						A dialog that can only be closed with the button but not by clicking outside or by
						pressing the Esc key.
					</DialogContent>
					<DialogActions>
						<Button autoFocus on:click={() => (dialogOpen2 = false)}>Okay</Button>
					</DialogActions>
				</Dialog>
			</div>
		</Example>
	</DocSection>

	<DocSection title="Fullscreen">
		<DocSectionText>
			You can use the <code>fullscreen</code> prop to display the dialog in fullscreen.
		</DocSectionText>
		<Example
			code={`<Button on:click={() => (open = true)}>Open Fullscreen Dialog</Button>

<Dialog fullscreen bind:open title="Fullscreen Dialog">
    <DialogContent>
        This dialog fills the whole screen.
    </DialogContent>
    <DialogActions>
        <Button autoFocus on:click={() => (open = false)}>Okay</Button>
    </DialogActions>
</Dialog>`}
		>
			<div slot="preview">
				<Button on:click={() => (fullscreenDialogOpen = true)}>Open Fullscreen Dialog</Button>
				<Dialog fullscreen title="Fullscreen Dialog" bind:open={fullscreenDialogOpen}>
					<DialogContent>This dialog fills the whole screen.</DialogContent>
					<DialogActions>
						<Button autoFocus on:click={() => (fullscreenDialogOpen = false)}>Okay</Button>
					</DialogActions>
				</Dialog>
			</div>
		</Example>
	</DocSection>

	<DocSection title="Accessibility + Usability">
		<DocSectionText>
			It is recommended to focus on a non-destructive action within the modal when it opens. The
			<code>autoFocusElement</code> prop can be utilized to automatically focus the element with the
			specified id when the modal opens. As an alternative, most focusable Dapper UI components
			offer an <code>autoFocus</code> prop that will automatically focus the element when it is mounted.
		</DocSectionText>
	</DocSection>
</DocContent>
