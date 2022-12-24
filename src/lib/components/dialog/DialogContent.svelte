<!--
@component
The content of a dialog with the correct padding and scroll behavior to match the
rest of the dialog.


Automatically sets the `aria-describedby` attribute when used inside a `Dialog` component.
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
	 * Used for the `aria-describedby` attribute of the parent Dialog.
	 */
	export let id = `d4r-dialog-content-${generateRandomId()}`;

	const setAriaDescribedBy = getContext<undefined | ((value: string) => void)>(
		'd4r-modal-set-aria-describedby-function'
	);

	$: if (setAriaDescribedBy) {
		setAriaDescribedBy(id);
	}
</script>

<Text {id} tag="div" class="d4r-overflow-y-auto d4r-p-2 d4r-px-3">
	<slot />
</Text>
