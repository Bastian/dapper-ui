<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { focusOnMount } from '$lib/actions/focusOnMount';

	export let id: string = generateRandomId();
	export let disabled = false;
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let required = false;

	export let value = 0;

	export let label: string;
	export let hideLabel = false;

	/**
	 * When set to `true`, automatically focuses the element when the component is mounted.
	 *
	 * This is useful for usability and accessibility reasons, for example to focus an element
	 * when a modal is opened.
	 */
	export let autoFocus = false;

	export let color: string | undefined = undefined;
	export let radius: Radius | undefined = undefined;
	/** Overwrites the more general radius prop */
	export let radiusThumb: Radius | undefined = undefined;
	/** Overwrites the more general radius prop */
	export let radiusTrack: Radius | undefined = undefined;

	export let fullWidth = false;

	export let min = 0;
	export let max = 100;
	export let step = 1;

	let percentage: number;
	$: percentage = ((value - min) / (max - min)) * 100;

	let className = '';
	/**
	 * Additional CSS classes to add.
	 * Be careful when using this prop, as it can conflict with the default styles.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export { className as class };

	/**
	 * Additional CSS classes to add to the label.
	 */
	export let classLabel = '';

	/**
	 * Custom CSS styles to apply.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export let style: string | undefined = undefined;
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
	{style}
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
			{step}
			type="range"
			class="d4r-group"
			style="background: linear-gradient(90deg, rgb(var(--d4r-color-primary-600)) {percentage}%, rgb(var(--d4r-color-neutral-300)) {percentage}%, rgb(var(--d4r-color-neutral-300)) 100%);"
			use:focusOnMount={autoFocus}
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
