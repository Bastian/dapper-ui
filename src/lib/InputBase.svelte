<script lang="ts">
	import Text from './Text.svelte';

	export let fullWidth = false;
	export let label: string;
	export let hasIconLabel = false;
	export let disabled = false;
	/**
	 *Visually hides the label. You should still provide a label for accessibility concerns.
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
		contrast="low"
		size="sm"
		class="mb-0.5 flex items-center gap-0.5 {hideLabel ? 'hidden' : ''} {classLabel}"
	>
		{#if hasIconLabel}
			<Text class="scale-75" contrast="lower"><slot name="icon-label" /></Text>
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
