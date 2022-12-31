<script lang="ts">
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Label from '$lib/Label.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import classNames from 'classnames';

	export let role: 'progressbar' | 'meter';

	/**
	 * The id of the label element.
	 */
	export let labelId = `d4r-label-${generateRandomId()}`;

	export let color: string | undefined = undefined;
	export let radius: Radius | undefined = undefined;

	export let label: string | undefined;
	export let hideLabel = false;

	export let ariaValuetext: string | undefined = undefined;

	export let indeterminate = false;

	export let value = 0;
	export let min = 0;
	export let max = 100;

	export let hasIconLabel = false;

	let className = '';
	export { className as class };
	export let style: string | undefined = undefined;

	let percentage: number;
	$: percentage = ((value - min) / (max - min)) * 100;
</script>

<div class="d4r-flex d4r-w-full d4r-flex-col d4r-gap-2">
	{#if !hideLabel && label}
		<Label id={labelId} tag="span" hasIcon={hasIconLabel}>
			<slot name="icon-label" slot="icon" />
			{label}
		</Label>
	{/if}
	<div
		{role}
		class={classNames(
			'd4r-flex d4r-h-1.5 d4r-w-full d4r-overflow-hidden d4r-bg-neutral-200 dark:d4r-bg-dark-500',
			className
		)}
		class:d4r-rounded-progressbar={role === 'progressbar'}
		class:d4r-rounded-meter={role === 'meter'}
		style={classNames(overwriteColor(color, [500]), overwriteRadius(radius, role), style) ||
			undefined}
		aria-labelledby={!hideLabel && label ? labelId : undefined}
		aria-label={hideLabel ? label : undefined}
		aria-valuemin={min}
		aria-valuemax={max}
		aria-valuenow={indeterminate && role === 'progressbar' ? undefined : value}
		aria-valuetext={ariaValuetext}
	>
		<div
			class:indeterminate
			class="d4r-w-full d4r-bg-primary-500 d4r-transition-all dark:d4r-bg-primary-500"
			class:d4r-rounded-progressbar={role === 'progressbar'}
			class:d4r-rounded-meter={role === 'meter'}
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
