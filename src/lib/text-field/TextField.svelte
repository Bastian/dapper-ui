<script lang="ts">
	import { overwriteColor } from '$lib/createColorOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';
	import { createEventDispatcher } from 'svelte';

	export let color: string | undefined = undefined;

	export let fullWidth = false;

	export let size: 'sm' | 'base' | undefined = 'base';

	export let label: string;
	export let hideLabel = false;
	export let id: string = generateRandomId();
	export let name: string | undefined = undefined;
	export let type: 'text' | 'password' | 'number' = 'text';
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let step: number | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let disabled = false;
	export let value: string | number = '';
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	let className = '';
	export { className as class };
	export let classLabel = '';

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
	{label}
	{hideLabel}
	{helpText}
	{error}
	{classLabel}
	{disabled}
	{fullWidth}
	{size}
	class={className}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-label" slot="icon-label" />
	<input
		style={overwriteColor(color, [200, 300, 600, 700])}
		class:w-full={fullWidth}
		class:size-base={size === 'base' || size === undefined}
		class:size-sm={size === 'sm'}
		{id}
		{type}
		{name}
		{value}
		{placeholder}
		{disabled}
		{min}
		{max}
		{step}
		on:change
		on:input={handleInput}
	/>
</InputBase>

<style lang="postcss" global>
	:local(input) {
		@apply rounded border-gray-300 text-gray-700 transition-all focus:border-primary-300 focus:outline-none focus:ring-primary-700/70 dark:border-dark-400 dark:bg-dark-600 dark:text-gray-200 dark:focus:border-primary-600;
	}

	:local(.size-base) {
		@apply h-10;
	}

	:local(.size-sm) {
		@apply h-9;
	}
</style>
