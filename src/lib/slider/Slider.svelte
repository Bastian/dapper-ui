<script lang="ts">
	import { overwriteColor } from '$lib/createColorOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';

	export let label: string;
	export let id: string = generateRandomId();

	export let color: string | undefined = undefined;

	export let min = 0;
	export let max = 100;
	export let value = 0;

	let percentage: number;
	$: percentage = ((value - min) / (max - min)) * 100;
</script>

<InputBase {id} {label}>
	<div style={overwriteColor(color, [300, 500, 600], 'primary')}>
		<input
			{id}
			bind:value
			{min}
			{max}
			type="range"
			class="group"
			style="background: linear-gradient(90deg, rgb(var(--color-primary-600)) {percentage}%, rgb(var(--color-neutral-300)) {percentage}%, rgb(var(--color-neutral-300)) 100%);"
		/>
	</div>
</InputBase>

<style lang="postcss" global>
	:local(input) {
		@apply h-[3px] w-full appearance-none rounded-full bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:ring-offset-8 dark:bg-dark-400 dark:focus:ring-primary-600/50 dark:focus:ring-offset-dark-800;
	}

	:local(input::-webkit-slider-thumb) {
		@apply h-4 w-4 cursor-pointer appearance-none rounded-full border-none bg-primary-600 group-hover:bg-primary-50 dark:bg-primary-500;
	}

	:local(input::-moz-range-thumb) {
		@apply h-4 w-4 cursor-pointer appearance-none rounded-full border-none bg-primary-600 group-hover:bg-primary-50 dark:bg-primary-500;
	}
</style>
