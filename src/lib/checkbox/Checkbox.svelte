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
		class="rounded text-primary-600 !ring-primary-700/50 ring-offset-1 focus:outline-none focus:ring-2"
		{id}
		bind:checked
		on:click
		on:change
	/>
	<Text tag="label" size="sm" for={id} contrast="low" class="font-medium">
		<slot />
	</Text>
</div>
