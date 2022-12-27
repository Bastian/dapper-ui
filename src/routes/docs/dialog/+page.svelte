<script lang="ts">
	import { Button } from '$lib';
	import Dialog from '$lib/components/dialog/Dialog.svelte';
	import DialogActions from '$lib/components/dialog/DialogActions.svelte';
	import DialogContent from '$lib/components/dialog/DialogContent.svelte';
	import DialogHeader from '$lib/components/dialog/DialogHeader.svelte';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import Example from '../Example.svelte';
	import PropTable from '../../../doc-components/prop-table/PropTable.svelte';
	import DialogSrc from '$lib/components/dialog/Dialog.svelte?raw';
	import DialogActionsSrc from '$lib/components/dialog/DialogActions.svelte?raw';
	import DialogContentSrc from '$lib/components/dialog/DialogContent.svelte?raw';
	import DialogHeaderSrc from '$lib/components/dialog/DialogHeader.svelte?raw';
	import Text from '$lib/components/text/Text.svelte';

	let dialogOpen = false;
	let dialogOpen2 = false;
	let fullscreenDialogOpen = false;
</script>

<DocTitle title="Dialog" />
<DocImport what={['Dialog', 'DialogHeader', 'DialogContent', 'DialogActions']} from="core" />
<DocIntoText text="A versatile and accessible modal dialog." />

<DocContent>
	<DocSection title="Example">
		<DocSectionText>A very simple dialog with a title, content and buttons.</DocSectionText>
		<Example
			code={`<Button on:click={() => (open = true)}>Open Dialog</Button>

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
</Dialog>`}
		>
			<div slot="preview">
				<Button on:click={() => (dialogOpen = true)}>Open Dialog</Button>
				<Dialog bind:open={dialogOpen}>
					<DialogHeader>Dialog Title</DialogHeader>
					<DialogContent>A very simple dialog with a title, content and buttons.</DialogContent>
					<DialogActions>
						<Button variant="outline" color="gray" on:click={() => (dialogOpen = false)}>
							Cancel
						</Button>
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
</Dialog>`}
		>
			<div slot="preview">
				<Button on:click={() => (dialogOpen2 = true)}>Open Dialog</Button>
				<Dialog bind:open={dialogOpen2} disableCloseOnEscape disableCloseOnOutsideClick>
					<DialogHeader>Close With Button Only</DialogHeader>
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

<Dialog fullscreen bind:open>
    <DialogHeader>Fullscreen Dialog</DialogHeader>
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
				<Dialog fullscreen bind:open={fullscreenDialogOpen}>
					<DialogHeader>Fullscreen Dialog</DialogHeader>
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
		<DocSectionText>
			When using the <code>DialogHeader</code> and <code>DialogContent</code> components, the
			relevant ARIA attributes, specifically <code>aria-labelledby</code> and
			<code>aria-describedby</code>, will be set automatically.
		</DocSectionText>
	</DocSection>

	<DocSection title="Props">
		<div class="d4r-space-y-2">
			<Text tag="h3" weight="medium">Dialog</Text>
			<PropTable componentSrc={DialogSrc} />
		</div>
		<div class="!d4r-mt-8 d4r-space-y-2">
			<Text tag="h3" weight="medium">DialogHeader</Text>
			<PropTable componentSrc={DialogHeaderSrc} />
		</div>
		<div class="!d4r-mt-8 d4r-space-y-2">
			<Text tag="h3" weight="medium">DialogContent</Text>
			<PropTable componentSrc={DialogContentSrc} />
		</div>
		<div class="!d4r-mt-8 d4r-space-y-2">
			<Text tag="h3" weight="medium">DialogActions</Text>
			<PropTable componentSrc={DialogActionsSrc} />
		</div>
	</DocSection>
</DocContent>
