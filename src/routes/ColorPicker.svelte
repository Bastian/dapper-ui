<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Text from '$lib/Text.svelte';

	export let color: string | undefined = undefined;
</script>

<div class="space-y-1 text-sm font-medium text-neutral-700">
	<Text contrast="lower" size={'sm'} weight="semibold">Color</Text>
	<div class="flex max-w-sm flex-wrap gap-1">
		{#each ['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'] as c}
			<Button size="sm" truncate={false} color={c} class="w-9" on:click={() => (color = c)}>
				{#if color === c}<span class="-m-1.5">✓</span>{/if}
			</Button>
		{/each}
	</div>
</div>
