<script lang="ts">
	import { overwriteColor } from '$lib/createColorOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import InputBase from '$lib/InputBase.svelte';

	export let id: string = generateRandomId();

	export let size: 'sm' | 'base' | undefined = 'base';

	export let value: string | never | undefined = undefined;

	export let disabled = false;
	export let color: string | undefined = undefined;

	export let label: string;
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	let className = '';
	export { className as class };
</script>

<InputBase
	{id}
	{label}
	{helpText}
	{error}
	{disabled}
	{size}
	class={className}
	hasIconLabel={$$slots['icon-label']}
>
	<slot name="icon-start" />
	<slot slot="icon-label" name="icon-label" />
	<select
		{id}
		style={overwriteColor(color, [200, 300, 600, 700], 'primary')}
		class:size-base={size === 'base' || size === undefined}
		class:size-sm={size === 'sm'}
		bind:value
		{disabled}
		{...$$restProps}
	>
		<slot />
	</select>
</InputBase>

<style lang="postcss" global>
	:local(select) {
		@apply rounded border-gray-300 pt-0 pb-0 text-gray-700 focus:border-primary-300 focus:ring-primary-700/70 dark:border-dark-400 dark:bg-dark-600 dark:text-gray-200 dark:focus:border-primary-600;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
	}

	:local(.size-base) {
		@apply h-10;
	}

	:local(.size-sm) {
		@apply h-9;
	}
</style>
