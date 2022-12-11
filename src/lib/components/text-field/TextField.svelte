<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import Text from '../text/Text.svelte';

	let className = '';
	export { className as class };
	export let classLabel = '';

	export let id: string = generateRandomId();
	export let name: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let type: 'text' | 'password' | 'number' = 'text';
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	export let disabled = false;
	export let required = false;
	export let readonly = false;

	export let value: string | number = '';

	export let label: string;
	export let hideLabel = false;

	export let color: string | undefined = undefined;
	export let size: 'sm' | 'base' | undefined = 'base';
	export let radius: Radius | undefined = undefined;

	export let fullWidth = false;

	// For number type
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let step: number | undefined = undefined;

	export let transform: (value: string | number) => string | number = (v) => v;

	const dispatch = createEventDispatcher();

	// See https://stackoverflow.com/a/57393751 why we don't just bind value
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleInput = (event: any) => {
		const start = event.target.selectionStart;
		const end = event.target.selectionEnd;
		value = transform(type === 'number' ? parseFloat(event.target.value) : event.target.value);
		dispatch('input', value);
		requestAnimationFrame(() => {
			if (type !== 'number') {
				event.target.selectionStart = start;
				event.target.selectionEnd = end;
			}
		});
	};
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
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
	<div class="d4r-relative d4r-w-full">
		{#if $$slots['icon-start']}
			<Text contrast="lower" class="d4r-input-icon-start">
				<slot name="icon-start" />
			</Text>
		{/if}
		<input
			style="{overwriteColor(color, [400, 500, 700])}{overwriteRadius(radius, 'input')}"
			class="d4r-input-base d4r-w-full"
			class:size-base={size === 'base' || size === undefined}
			class:size-sm={size === 'sm'}
			class:d4r-pl-9={$$slots['icon-start']}
			{id}
			{name}
			{placeholder}
			{type}
			{disabled}
			{required}
			{readonly}
			{value}
			{min}
			{max}
			{step}
			on:change
			on:input={handleInput}
		/>
	</div>
</InputBase>

<style lang="postcss" global>
	.d4r-input-icon-start {
		@apply d4r-absolute d4r-bottom-2.5 d4r-left-3;
	}

	.d4r-input-icon-start svg {
		@apply d4r-h-5 d4r-w-5;
	}

	:local(input) {
		@apply d4r-rounded-input;
	}

	:local(.size-base) {
		@apply d4r-h-10;
	}

	:local(.size-sm) {
		@apply d4r-h-9;
	}
</style>
