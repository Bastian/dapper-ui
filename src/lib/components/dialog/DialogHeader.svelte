<script lang="ts">
	import { Text } from '$lib';
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import { getContext } from 'svelte';
	import IconButton from '../icon-button/IconButton.svelte';

	const close = getContext<undefined | (() => void)>('d4r-modal-close-function');
</script>

<div class="d4r-flex d4r-justify-between">
	<div class="d4r-flex d4r-items-start d4r-justify-between d4r-p-2 d4r-px-3">
		<Text contrast="high" size="lg" weight="semibold">
			<slot />
		</Text>
	</div>
	<IconButton size="xs" label="Close Dialog" on:click={close}>
		<CloseIcon />
	</IconButton>
</div>
