<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import ProgressBarMeterBase from '../ProgressBarMeterBase.svelte';

	/**
	 * The id of the label element.
	 */
	export let labelId = `d4r-meter-label-${generateRandomId()}`;

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
	 * A label for the meter.
	 *
	 * It is highly recommended to label the meter for accessibility
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
	 * Screen readers usually read the value of a meter as a percentage.
	 * However, if this doesn't accurately reflect the meter's current
	 * status, you should use the `ariaValuetext` prop to provide a more accurate
	 * text description of the current value.
	 */
	export let ariaValuetext: string | undefined = undefined;

	/**
	 * The current value of the meter.
	 *
	 * Should be between the `min` and `max` values.
	 */
	export let value = 0;

	/**
	 * The minimum value of the meter.
	 */
	export let min = 0;

	/**
	 * The maximum value of the meter.
	 */
	export let max = 100;
</script>

<ProgressBarMeterBase
	role="meter"
	{label}
	{labelId}
	{hideLabel}
	{ariaValuetext}
	{value}
	{min}
	{max}
	{color}
	{radius}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
</ProgressBarMeterBase>
