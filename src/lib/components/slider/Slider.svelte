<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';

	let className = '';
	export { className as class };
	export let classLabel = '';

	export let id: string = generateRandomId();
	export let disabled = false;
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let required = false;

	export let value = 0;

	export let label: string;
	export let hideLabel = false;

	export let color: string | undefined = undefined;
	export let radius: Radius | undefined = undefined;
	/** Overwrites the more general radius prop */
	export let radiusThumb: Radius | undefined = undefined;
	/** Overwrites the more general radius prop */
	export let radiusTrack: Radius | undefined = undefined;

	export let fullWidth = false;

	export let min = 0;
	export let max = 100;

	let percentage: number;
	$: percentage = ((value - min) / (max - min)) * 100;
</script>

<InputBase
	{id}
	{disabled}
	{required}
	{label}
	{hideLabel}
	{helpText}
	{error}
	{fullWidth}
	{classLabel}
	class={className}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
	<div
		style="{overwriteColor(color, [300, 500, 600, 700], 'primary')}{overwriteRadius(
			radiusThumb ?? radius,
			'slider-thumb'
		)}{overwriteRadius(radiusTrack ?? radius, 'slider-track')}"
	>
		<input
			{id}
			{disabled}
			{required}
			bind:value
			{min}
			{max}
			type="range"
			class="d4r-group"
			style="background: linear-gradient(90deg, rgb(var(--d4r-color-primary-600)) {percentage}%, rgb(var(--d4r-color-neutral-300)) {percentage}%, rgb(var(--d4r-color-neutral-300)) 100%);"
			on:change
			on:input
		/>
	</div>
</InputBase>

<style lang="postcss" global>
	:local(input) {
		@apply d4r-h-[3px] d4r-w-full d4r-appearance-none d4r-rounded-slider-track d4r-bg-neutral-300 focus:d4r-outline-none dark:d4r-bg-dark-400;
		@apply focus:d4r-ring-2 focus:d4r-ring-primary-700/20 focus:d4r-ring-offset-8 dark:focus:d4r-ring-primary-400/20 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(input::-webkit-slider-thumb) {
		@apply d4r-h-4 d4r-w-4 d4r-cursor-pointer d4r-appearance-none d4r-rounded-slider-thumb d4r-border-none d4r-bg-primary-600 group-hover:d4r-bg-primary-50 dark:d4r-bg-primary-500;
	}

	:local(input::-moz-range-thumb) {
		@apply d4r-h-4 d4r-w-4 d4r-cursor-pointer d4r-appearance-none d4r-rounded-slider-thumb d4r-border-none d4r-bg-primary-600 group-hover:d4r-bg-primary-50 dark:d4r-bg-primary-500;
	}
</style>
