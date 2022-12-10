<script lang="ts">
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';

	export let fullWidth = false;
	export let disabled = false;
	export let color: string | undefined = undefined;
	export let size: 'sm' | 'base' = 'base';
	export let radius: Radius | undefined = undefined;
	export let truncate = true;

	export let variant: 'solid' | 'outline' = 'solid';

	let className = '';
	export { className as class };
</script>

<button
	class={className}
	class:d4r-w-full={fullWidth}
	style="{overwriteColor(color, [50, 300, 500, 600, 700, 800])}{overwriteRadius(radius, 'button')}"
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
		<span>
			<slot name="icon-start" />
		</span>
	{/if}
	<span class:d4r-truncate={truncate}><slot /></span>
	{#if $$slots['icon-end']}
		<span>
			<slot name="icon-end" />
		</span>
	{/if}
</button>

<style lang="postcss" global>
	:local(button) {
		@apply d4r-flex d4r-items-center d4r-justify-center d4r-gap-2 d4r-truncate d4r-rounded-button d4r-font-medium d4r-text-neutral-100 d4r-outline-none d4r-transition-all focus:d4r-outline-none focus:d4r-ring-2 focus:d4r-ring-primary-600/50 focus:d4r-ring-offset-1 disabled:d4r-opacity-50 dark:focus:d4r-ring-primary-300/50 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.size-base) {
		@apply d4r-h-10 d4r-px-6;
	}

	:local(.icon-start.size-base) {
		@apply d4r-pl-4;
	}

	:local(.icon-end.size-base) {
		@apply d4r-pr-4;
	}

	:local(.size-sm) {
		@apply d4r-h-9 d4r-px-4;
	}

	:local(.icon-start.size-sm) {
		@apply d4r-pl-2;
	}

	:local(.icon-end.size-sm) {
		@apply d4r-pr-2;
	}

	:local(.outline) {
		@apply d4r-border d4r-border-primary-300/70 d4r-text-primary-500 hover:d4r-bg-primary-50 dark:d4r-border-primary-300/70 dark:d4r-text-primary-300 dark:hover:d4r-bg-primary-500/20;
	}

	:local(.outline.small) {
		@apply !d4r-px-1;
	}

	:local(.solid) {
		@apply d4r-bg-primary-600 d4r-text-neutral-100 hover:d4r-bg-primary-700 hover:disabled:d4r-bg-primary-600;
	}
</style>
