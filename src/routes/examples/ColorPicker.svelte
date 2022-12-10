<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Text from '$lib/components/text/Text.svelte';

	export let color: string | undefined = undefined;
</script>

<div class="d4r-space-y-1 d4r-text-sm d4r-font-medium d4r-text-neutral-700">
	<Text contrast="lower" size={'sm'} weight="semibold">Color</Text>
	<div class="d4r-flex d4r-max-w-sm d4r-flex-wrap d4r-gap-1">
		{#each ['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'] as c}
			<Button size="sm" truncate={false} color={c} class="d4r-w-9" on:click={() => (color = c)}>
				{#if color === c}<span class="-d4r-m-1.5">✓</span>{/if}
			</Button>
		{/each}
	</div>
</div>
