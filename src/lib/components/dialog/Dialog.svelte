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
		class="d4r-flex d4r-max-w-[min(42rem,calc(100vw-4rem))] d4r-flex-col d4r-rounded-dialog d4r-bg-white d4r-p-4 dark:d4r-bg-dark-700 {className}"
	>
		{#if title}
			<!-- TODO Automatically set aria-laballedby attribute  -->
			<DialogHeader>{title}</DialogHeader>
		{/if}
		<slot />
	</div>
</Modal>
