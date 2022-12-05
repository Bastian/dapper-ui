<script lang="ts">
	import { overwriteColor } from '$lib/createColorOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Text from '$lib/Text.svelte';

	export let id: string = generateRandomId();

	export let color: string | undefined = undefined;
	export let checked = false;
</script>

<div class="flex items-center gap-2">
	<input
		style={overwriteColor(color, [600, 700])}
		type="checkbox"
		class="rounded border-gray-600 text-primary-600 !ring-offset-1 focus:outline-none focus:ring-2 focus:ring-primary-700/70 dark:border-dark-400 dark:bg-dark-600 dark:ring-offset-0 dark:focus:border-gray-600"
		{id}
		bind:checked
		on:click
		on:change
	/>
	<Text tag="label" size="sm" for={id} class="font-medium">
		<slot />
	</Text>
</div>
