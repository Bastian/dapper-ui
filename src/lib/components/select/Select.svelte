<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { focusOnMount } from '$lib/actions/focusOnMount';
	import classNames from 'classnames';

	export let id: string = generateRandomId();
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let disabled = false;
	export let required = false;

	export let value: string | never | undefined = undefined;

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
	export let size: 'sm' | 'base' | undefined = 'base';
	export let radius: Radius | undefined = undefined;

	export let fullWidth = false;

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
	{size}
	{classLabel}
	class={className}
	{style}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-start" />
	<slot slot="icon-label" name="icon-label" />
	<select
		style={classNames(
			overwriteColor(color, [400, 500, 700], 'primary'),
			overwriteRadius(radius, 'input')
		) || undefined}
		class="d4r-input-base"
		class:size-base={size === 'base' || size === undefined}
		class:size-sm={size === 'sm'}
		bind:value
		{id}
		{disabled}
		{required}
		use:focusOnMount={autoFocus}
		{...$$restProps}
	>
		<slot />
	</select>
</InputBase>

<style lang="postcss" global>
	:local(select) {
		@apply d4r-rounded-input d4r-pb-0 d4r-pt-0;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
	}

	:local(.size-base) {
		@apply d4r-h-10;
	}

	:local(.size-sm) {
		@apply d4r-h-9;
	}
</style>
