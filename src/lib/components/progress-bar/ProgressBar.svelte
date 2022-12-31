<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import ProgressBarMeterBase from '../ProgressBarMeterBase.svelte';

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

	let className = '';
	/**
	 * Additional CSS classes to add.
	 * Be careful when using this prop, as it can conflict with the default styles.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export { className as class };

	/**
	 * Custom CSS styles to apply.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export let style: string | undefined = undefined;
</script>

<ProgressBarMeterBase
	role="progressbar"
	{label}
	{labelId}
	{hideLabel}
	{ariaValuetext}
	{value}
	{min}
	{max}
	{indeterminate}
	{color}
	{radius}
	class={className}
	{style}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
</ProgressBarMeterBase>
