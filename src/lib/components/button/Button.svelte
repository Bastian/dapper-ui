<script lang="ts">
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';

	export let fullWidth = false;
	export let disabled = false;
	export let color: string | undefined = undefined;
	export let size: 'sm' | 'base' = 'base';
	export let radius: Radius | undefined = undefined;
	export let noTruncate = false;

	export let href: string | undefined = undefined;

	export let variant: 'solid' | 'outline' | 'outline-dashed' | 'light' | 'subtle' = 'solid';

	export let contentJustify: 'start' | 'center' | 'end' = 'center';

	let className = '';
	export { className as class };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class="button {className}"
	class:d4r-w-full={fullWidth}
	style="{overwriteColor(color, [50, 300, 500, 600, 700, 800])}{overwriteRadius(radius, 'button')}"
	class:size-base={size === 'base'}
	class:size-sm={size === 'sm'}
	class:outline={variant === 'outline' || variant === 'outline-dashed'}
	class:outline-dashed={variant === 'outline-dashed'}
	class:solid={variant === 'solid'}
	class:light={variant === 'light'}
	class:subtle={variant === 'subtle'}
	class:icon-start={$$slots['icon-start']}
	class:icon-end={$$slots['icon-end']}
	class:d4r-justify-start={contentJustify === 'start'}
	class:d4r-justify-center={contentJustify === 'center'}
	class:d4r-justify-end={contentJustify === 'end'}
	class:d4r-truncate={!noTruncate}
	{disabled}
	type="button"
	on:click
	on:keydown
	on:keyup
>
	{#if $$slots['icon-start']}
		<span>
			<slot name="icon-start" />
		</span>
	{/if}
	<span class:d4r-truncate={!noTruncate}><slot /></span>
	{#if $$slots['icon-end']}
		<span>
			<slot name="icon-end" />
		</span>
	{/if}
</svelte:element>

<style lang="postcss" global>
	:local(.button) {
		@apply d4r-transition-all;
		@apply d4r-rounded-button;
		@apply d4r-appearance-none;
		@apply d4r-inline-flex d4r-items-center d4r-gap-2;
		@apply d4r-font-medium d4r-text-neutral-100;
		@apply d4r-outline-none focus:d4r-outline-none;
		@apply disabled:d4r-opacity-50;
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
		@apply focus:d4r-ring-1 focus:d4r-ring-primary-300/50 focus:d4r-ring-offset-1 dark:focus:d4r-ring-primary-300/50 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.outline.small) {
		@apply !d4r-px-1;
	}

	:local(.outline-dashed) {
		@apply d4r-border-dashed;
	}

	:local(.solid) {
		@apply d4r-bg-primary-600 d4r-text-neutral-100 hover:d4r-bg-primary-700 hover:disabled:d4r-bg-primary-600;
		@apply focus:d4r-ring-2 focus:d4r-ring-primary-600/50 focus:d4r-ring-offset-1 dark:focus:d4r-ring-primary-300/50 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.light) {
		@apply d4r-bg-neutral-100 d4r-text-neutral-500 dark:d4r-bg-dark-600 dark:d4r-text-neutral-300;
		@apply d4r-border d4r-border-neutral-100 hover:d4r-border-neutral-200 dark:d4r-border-dark-600 dark:hover:d4r-border-dark-400;
		@apply focus:d4r-ring-1 focus:d4r-ring-neutral-600/20 focus:d4r-ring-offset-0 dark:focus:d4r-ring-neutral-300/20 dark:focus:d4r-ring-offset-dark-800;
	}

	:local(.subtle) {
		@apply d4r-text-neutral-500 d4r-ring-opacity-10 hover:d4r-bg-neutral-100 focus:d4r-ring-1 focus:d4r-ring-primary-600/25 focus:d4r-ring-offset-1 dark:d4r-text-neutral-300 dark:hover:d4r-bg-dark-600 dark:focus:d4r-ring-primary-300/25 dark:focus:d4r-ring-offset-dark-800;
	}
</style>
