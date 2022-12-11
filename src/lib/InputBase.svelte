<script lang="ts">
	import Text from './components/text/Text.svelte';

	export let fullWidth = false;
	export let label: string;
	export let hasIconLabel = false;
	export let disabled = false;
	export let size: 'base' | 'sm' | undefined = 'base';
	export let required = false;
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
	class="d4r-inline-flex d4r-flex-col d4r-gap-1 {className}"
	class:d4r-inline-block={!fullWidth}
	class:d4r-block={fullWidth}
	class:d4r-w-full={fullWidth}
	class:d4r-opacity-50={disabled}
>
	<Text
		tag="label"
		for={id}
		contrast="low"
		size={size === 'sm' ? 'xs' : 'sm'}
		class="d4r-flex d4r-items-center d4r-gap-1.5 {hideLabel ? 'd4r-hidden' : ''} {required
			? 'd4r-input-required'
			: ''} {classLabel}"
	>
		{#if hasIconLabel}
			<Text
				class={size === 'sm' ? 'd4r-input-icon-label-sm' : 'd4r-input-icon-label-base'}
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
	.d4r-input-icon-label-base > svg {
		@apply d4r-h-4 d4r-w-4;
	}
	.d4r-input-icon-label-sm > svg {
		@apply d4r-h-3.5 d4r-w-3.5;
	}

	.d4r-input-required::after {
		color: #dc2626;
		content: '*';
	}
</style>
