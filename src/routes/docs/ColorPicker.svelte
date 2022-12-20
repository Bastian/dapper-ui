<script lang="ts">
	import { Text, IconButton } from '$lib';
	import { Check } from 'tabler-icons-svelte';

	export let color: string | undefined = undefined;

	export let label = 'Color';
</script>

<div class="d4r-space-y-1 d4r-text-sm d4r-font-medium d4r-text-neutral-700">
	<Text contrast="low" size="sm">{label}</Text>
	<div class="d4r-flex d4r-max-w-sm d4r-flex-wrap d4r-gap-1">
		{#each ['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'] as c}
			<IconButton
				label="Color {c}"
				size="sm"
				variant="solid"
				color={c}
				on:click={() => (color = c)}
			>
				{#if color === c}<Check />{/if}
			</IconButton>
		{/each}
	</div>
</div>
