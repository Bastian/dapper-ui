<!--
@component
A dialog with a header, content and actions.

Should be used in combination with the `DialogHeader`, `DialogContent` and `DialogActions` components.

Example:
```svelte
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
```
-->
<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Modal from '../modal/Modal.svelte';
	import classNames from 'classnames';

	/**
	 * The id of the dialog.
	 *
	 * When not set, it is automatically generated.
	 *
	 * Can be accessed via the `d4r-modal-id` context.
	 */
	export let id = `d4r-dialog-${generateRandomId()}`;

	/**
	 * Whether the dialog is open.
	 *
	 * This value can be bound to and will be set to `false` when the user
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
	 * When set to `true`, the dialog will be fullscreen.
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

	let className = '';
	/**
	 * Additional CSS classes to add.
	 * Be careful when using this prop, as it can conflict with the default styles.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export { className as class };

	/**
	 * Custom CSS styles to apply.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export let style: string | undefined = undefined;
</script>

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
		class={classNames(
			'd4r-flex d4r-flex-col d4r-overflow-y-auto d4r-bg-white d4r-p-4 dark:d4r-bg-dark-700',
			className
		)}
		style={style || undefined}
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
