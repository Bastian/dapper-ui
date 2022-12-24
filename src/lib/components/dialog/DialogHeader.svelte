<!--
@component
The Header of a dialog. It display a title and optionally a close button.

Automatically sets the `aria-labelledby` attribute when used inside a `Dialog` component.
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
	 * Used for the `aria-labelledby` attribute of the parent Dialog.
	 */
	export let titleId = `d4r-dialog-title-${generateRandomId()}`;

	/**
	 * When set to `true`, a close button will be displayed that closes the
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
</script>

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
