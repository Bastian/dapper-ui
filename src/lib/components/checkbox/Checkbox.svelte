<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Text from '$lib/components/text/Text.svelte';
	import type { Radius } from '$lib/ThemeProvider.svelte';

	export let id: string = generateRandomId();

	export let color: string | undefined = undefined;
	export let radius: Radius | undefined = undefined;

	export let checked = false;
</script>

<div class="flex items-center gap-2">
	<input
		style="{overwriteColor(color, [300, 600, 700])}{overwriteRadius(radius, 'checkbox')}"
		type="checkbox"
		class="d4r-rounded-checkbox d4r-border-neutral-600 d4r-text-primary-600 !d4r-ring-offset-1 focus:d4r-outline-none focus:d4r-ring-2 focus:d4r-ring-primary-600/50 dark:d4r-border-dark-400 dark:d4r-bg-dark-600 dark:focus:d4r-border-neutral-600 dark:focus:d4r-ring-primary-500/50 dark:focus:d4r-ring-offset-dark-800"
		{id}
		bind:checked
		on:click
		on:change
	/>
	<Text tag="label" size="sm" for={id} weight="medium">
		<slot />
	</Text>
</div>
