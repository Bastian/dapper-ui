<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Text from '$lib/components/text/Text.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';

	export let id: string = generateRandomId();
	export let required = false;
	export let disabled = false;

	export let checked = false;

	export let label: string;

	export let color: string | undefined = undefined;
	export let radius: Radius | undefined = undefined;
</script>

<div class="d4r-flex d4r-items-center d4r-gap-2" class:d4r-opacity-50={disabled}>
	<input
		style="{overwriteColor(color, [300, 600, 700])}{overwriteRadius(radius, 'checkbox')}"
		type="checkbox"
		class="d4r-input-base"
		{id}
		bind:checked
		{required}
		{disabled}
		on:click
		on:change
	/>
	<div class="-d4r-mt-0.5">
		<Text
			tag="label"
			size="sm"
			for={id}
			contrast="low"
			class="d4r-select-none {required ? 'd4r-input-checkbox-required' : ''}"
		>
			{label}
		</Text>
	</div>
</div>

<style lang="postcss" global>
	:local(input) {
		@apply d4r-rounded-checkbox !d4r-ring-offset-0;
		@apply d4r-text-primary-600 dark:d4r-text-primary-600;
	}

	.d4r-input-checkbox-required::after {
		@apply d4r-ml-1;
		color: #dc2626;
		content: '*';
	}
</style>
