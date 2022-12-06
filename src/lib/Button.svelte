<script lang="ts">
	import { overwriteColor } from '$lib/createColorOverwrite';

	export let fullWidth = false;
	export let disabled = false;
	export let color: string | undefined = undefined;
	export let size: 'sm' | 'base' = 'base';
	export let truncate = true;

	export let variant: 'solid' | 'outline' = 'solid';

	let className = '';
	export { className as class };
</script>

<button
	class={className}
	class:w-full={fullWidth}
	style={overwriteColor(color, [50, 300, 500, 600, 700, 800])}
	class:size-base={size === 'base'}
	class:size-sm={size === 'sm'}
	class:outline={variant === 'outline'}
	class:solid={variant === 'solid'}
	class:icon-start={$$slots['icon-start']}
	class:icon-end={$$slots['icon-end']}
	{disabled}
	on:click
>
	{#if $$slots['icon-start']}
		<slot name="icon-start" />
	{/if}
	<span class:truncate><slot /></span>
	{#if $$slots['icon-end']}
		<slot name="icon-end" />
	{/if}
</button>

<style lang="postcss" global>
	:local(button) {
		@apply flex items-center justify-center gap-2 truncate rounded font-medium text-gray-100 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:ring-offset-1 disabled:opacity-50 dark:focus:ring-primary-300/50 dark:focus:ring-offset-dark-800;
	}

	:local(.size-base) {
		@apply h-10 px-6;
	}

	:local(.icon-start.size-base) {
		@apply pl-4;
	}

	:local(.icon-end.size-base) {
		@apply pr-4;
	}

	:local(.size-sm) {
		@apply h-9 px-4;
	}

	:local(.icon-start.size-sm) {
		@apply pl-2;
	}

	:local(.icon-end.size-sm) {
		@apply pr-2;
	}

	:local(.outline) {
		@apply border border-primary-300/70 text-primary-500 hover:bg-primary-50 dark:border-primary-300/70 dark:text-primary-300 dark:hover:bg-primary-500/20;
	}

	:local(.outline.small) {
		@apply !px-1;
	}

	:local(.solid) {
		@apply bg-primary-600 text-gray-100 hover:bg-primary-700 hover:disabled:bg-primary-600;
	}
</style>
