<script lang="ts">
	import { DialogHeader } from '$lib';
	import Modal from '../modal/Modal.svelte';

	let className = '';
	export { className as class };

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
	 * When set to `true`, a close button will be displayed that closes the
	 * dialog when clicked.
	 *
	 * Only works if a title is set.
	 */
	export let withCloseButton = false;

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

	export let title: string | undefined = undefined;
</script>

<Modal
	bind:open
	on:close
	{disableCloseOnOutsideClick}
	{disableCloseOnEscape}
	{autoFocusElement}
	{ariaLabelledby}
	{ariaDescribedby}
>
	<div
		class="d4r-flex d4r-flex-col d4r-bg-white d4r-p-4 dark:d4r-bg-dark-700 {className}"
		class:max-w-lg={!fullscreen}
		class:fullscreen
	>
		{#if title}
			<!-- TODO Automatically set aria-laballedby attribute  -->
			<DialogHeader {withCloseButton}>{title}</DialogHeader>
		{/if}
		<slot />
	</div>
</Modal>

<style lang="postcss">
	:not(.fullscreen) {
		@apply d4r-rounded-dialog;
	}

	.max-w-lg {
		@apply d4r-max-w-[min(42rem,calc(100vw-4rem))];
	}

	.fullscreen {
		@apply d4r-h-screen d4r-w-screen;
	}
</style>
