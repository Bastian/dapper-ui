<script lang="ts">
	import { overwriteColor } from '$lib/createColorOverwrite';
	import { overwriteRadius } from '$lib/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import type { Radius } from '$lib/ThemeProvider.svelte';

	export let label: string;
	export let id: string = generateRandomId();

	export let color: string | undefined = undefined;
	export let radius: Radius | undefined = undefined;

	/** Overwrites the more general radius prop */
	export let radiusThumb: Radius | undefined = undefined;
	/** Overwrites the more general radius prop */
	export let radiusTrack: Radius | undefined = undefined;

	export let min = 0;
	export let max = 100;
	export let value = 0;

	let percentage: number;
	$: percentage = ((value - min) / (max - min)) * 100;
</script>

<InputBase {id} {label}>
	<div
		style="{overwriteColor(color, [300, 500, 600], 'primary')}{overwriteRadius(
			radiusThumb ?? radius,
			'slider-thumb'
		)}{overwriteRadius(radiusTrack ?? radius, 'slider-track')}"
	>
		<input
			{id}
			bind:value
			{min}
			{max}
			type="range"
			class="group"
			style="background: linear-gradient(90deg, rgb(var(--d4r-color-primary-600)) {percentage}%, rgb(var(--d4r-color-neutral-300)) {percentage}%, rgb(var(--d4r-color-neutral-300)) 100%);"
			on:change
			on:input
		/>
	</div>
</InputBase>

<style lang="postcss" global>
	:local(input) {
		@apply d4r-h-[3px] d4r-w-full d4r-appearance-none d4r-rounded-slider-track d4r-bg-neutral-300 focus:d4r-outline-none focus:d4r-ring-2 focus:d4r-ring-primary-600/50 focus:d4r-ring-offset-8 dark:d4r-bg-dark-400 dark:focus:d4r-ring-primary-600/50 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(input::-webkit-slider-thumb) {
		@apply d4r-h-4 d4r-w-4 d4r-cursor-pointer d4r-appearance-none d4r-rounded-slider-thumb d4r-border-none d4r-bg-primary-600 group-hover:d4r-bg-primary-50 dark:d4r-bg-primary-500;
	}

	:local(input::-moz-range-thumb) {
		@apply d4r-h-4 d4r-w-4 d4r-cursor-pointer d4r-appearance-none d4r-rounded-slider-thumb d4r-border-none d4r-bg-primary-600 group-hover:d4r-bg-primary-50 dark:d4r-bg-primary-500;
	}
</style>
