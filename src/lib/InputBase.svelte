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
	class:d4r-inline-block={!fullWidth}
	class:d4r-block={fullWidth}
	class:d4r-w-full={fullWidth}
	class:d4r-opacity-50={disabled}
>
	<Text
		tag="label"
		for={id}
		contrast="lower"
		size={size === 'sm' ? 'xs' : 'sm'}
		weight="semibold"
		class="d4r-mb-0.5 d4r-flex d4r-items-center d4r-gap-1 {hideLabel
			? 'd4r-hidden'
			: ''} {classLabel}"
	>
		{#if hasIconLabel}
			<Text
				class={size === 'sm' ? 'dapper-ui-input-icon-label-sm' : 'dapper-ui-input-icon-label-base'}
				contrast="lower"
			>
				<slot name="icon-label" />
			</Text>
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
		@apply d4r-h-4 d4r-w-4;
	}
	.dapper-ui-input-icon-label-sm > svg {
		@apply d4r-h-3.5 d4r-w-3.5;
	}
</style>
