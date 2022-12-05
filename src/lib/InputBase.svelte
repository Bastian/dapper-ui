<script lang="ts">
	import Text from './Text.svelte';

	export let fullWidth = false;
	export let label: string;
	export let hasIconLabel = false;
	export let disabled = false;
	export let size: 'base' | 'sm' | undefined = 'base';
	/**
	 * Visually hides the label. You should still provide a label for accessibility concerns.
	 */
	export let hideLabel = false;
	export let id: string;
	export let helpText: string | undefined = undefined;
	export let error: string | undefined = undefined;
	let className = '';
	export { className as class };
	export let classLabel = '';
</script>

<div
	class={className}
	class:inline-block={!fullWidth}
	class:block={fullWidth}
	class:w-full={fullWidth}
	class:opacity-50={disabled}
>
	<Text
		tag="label"
		for={id}
		contrast="lower"
		size={size === 'sm' ? 'xs' : 'sm'}
		weight="semibold"
		class="mb-0.5 flex items-center gap-1 {hideLabel ? 'hidden' : ''} {classLabel}"
	>
		{#if hasIconLabel}
			<Text
				class={size === 'sm' ? 'dapper-ui-input-icon-label-sm' : 'dapper-ui-input-icon-label-base'}
				contrast="lower"><slot name="icon-label" /></Text
			>
		{/if}
		{label}
	</Text>
	<slot />
	{#if error}
		<Text size="xs" color="red" contrast="lower">{error}</Text>
	{:else if helpText}
		<Text size="xs" contrast="lower">{helpText}</Text>
	{/if}
</div>

<style lang="postcss" global>
	.dapper-ui-input-icon-label-base > svg {
		@apply h-4 w-4;
	}
	.dapper-ui-input-icon-label-sm > svg {
		@apply h-3.5 w-3.5;
	}
</style>
