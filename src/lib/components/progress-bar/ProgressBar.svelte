<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Label from '$lib/Label.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';

	/**
	 * The id of the label element.
	 */
	export let labelId = `d4r-pb-label-${generateRandomId()}`;

	/**
	 * The name of a color in the theme. Does not support arbitrary colors.
	 *
	 * When set to `undefined`, the primary color of the theme will be used.
	 */
	export let color: string | undefined = undefined;

	/**
	 * The border radius of the button. When set to `undefined`, the button will
	 * have the default border radius defined in the theme.
	 */
	export let radius: Radius | undefined = undefined;

	/**
	 * A label for the progress bar.
	 *
	 * It is highly recommended to label the progress bar for accessibility
	 * purposes. Even if you do not want to display the label for aesthetic
	 * reasons, you should still set a label and hide it with the `hideLabel`
	 * prop. This ensures that the label is still accessible to users who rely
	 * on assistive technologies such as screen readers.
	 */
	export let label: string | undefined;

	/**
	 * Visually hides the label.
	 */
	export let hideLabel = false;

	/**
	 * The aria-valuetext attibute.
	 *
	 * Screen readers usually read the value of a progress bar as a percentage.
	 * However, if this doesn't accurately reflect the progress bar's current
	 * status, you should use the `ariaValuetext` prop to provide a more accurate
	 * text description of the current value.
	 */
	export let ariaValuetext: string | undefined = undefined;

	/**
	 * Whether the progress bar is indeterminate.
	 */
	export let indeterminate = false;

	/**
	 * The current value of the progress bar.
	 *
	 * Should be between the `min` and `max` values.
	 */
	export let value = 0;

	/**
	 * The minimum value of the progress bar.
	 */
	export let min = 0;

	/**
	 * The maximum value of the progress bar.
	 */
	export let max = 100;

	let percentage: number;
	$: percentage = ((value - min) / (max - min)) * 100;
</script>

<div class="d4r-flex d4r-w-full d4r-flex-col d4r-gap-2">
	{#if !hideLabel && label}
		<Label id={labelId} tag="span" hasIcon={$$slots['icon-label']}>
			<slot name="icon-label" slot="icon" />
			{label}
		</Label>
	{/if}
	<div
		class="d4r-flex d4r-h-1.5 d4r-w-full d4r-overflow-hidden d4r-rounded-progress-bar d4r-bg-neutral-200 dark:d4r-bg-dark-500"
		style="{overwriteColor(color, [500])}{overwriteRadius(radius, 'progress-bar')}"
		role="progressbar"
		aria-labelledby={!hideLabel && label ? labelId : undefined}
		aria-label={hideLabel ? label : undefined}
		aria-valuemin={min}
		aria-valuemax={max}
		aria-valuenow={indeterminate ? undefined : value}
		aria-valuetext={ariaValuetext}
	>
		<div
			id="test"
			class:indeterminate
			class="d4r-w-full d4r-rounded-progress-bar d4r-bg-primary-500 d4r-transition-all dark:d4r-bg-primary-500"
			style="transform:translateX(-{100 - Math.round(percentage)}%)"
		/>
	</div>
</div>

<style lang="postcss">
	.indeterminate {
		animation: indeterminate-keyframe 1.75s ease infinite;
	}

	@keyframes indeterminate-keyframe {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(100%);
		}
	}
</style>
