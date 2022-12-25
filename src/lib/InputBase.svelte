<script lang="ts">
	import Text from './components/text/Text.svelte';
	import Label from './Label.svelte';

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
	<Label
		additionalProps={{ for: id }}
		hidden={hideLabel}
		{required}
		{size}
		class={classLabel}
		hasIcon={hasIconLabel}
	>
		<slot name="icon-label" slot="icon" />
		{label}
	</Label>
	<slot />
	{#if error}
		<Text size="xs" color="red" contrast="lower">{error}</Text>
	{:else if helpText}
		<Text size="xs" contrast="lower">{helpText}</Text>
	{/if}
</div>
