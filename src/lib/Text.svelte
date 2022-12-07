<script lang="ts">
	import { overwriteColor } from './createColorOverwrite';
	import type { Shades } from './ThemeProvider.svelte';

	let className = '';
	export { className as class };

	export let contrast:
		| 'highest'
		| 'higher'
		| 'high'
		| 'base'
		| 'low'
		| 'lower'
		| 'lowest'
		| undefined = 'base';
	export let color: string | undefined = 'gray';

	export let size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
	export let weight:
		| 'thin'
		| 'extralight'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semibold'
		| 'bold'
		| 'extrabold'
		| 'black' = 'normal';

	export let tag: 'span' | 'div' | string = 'span';

	export let truncate = false;

	let usedShades: Shades[];
	$: usedShades =
		contrast === 'higher'
			? [50, 900]
			: contrast === 'high'
			? [100, 800]
			: contrast === 'base'
			? [200, 700]
			: contrast === 'low'
			? [300, 600]
			: contrast === 'lower'
			? [400, 500]
			: contrast === 'lowest'
			? [500, 400]
			: [200, 700];
</script>

<svelte:element
	this={tag}
	class={className}
	class:contrast-highest={contrast === 'highest'}
	class:contrast-higher={contrast === 'higher'}
	class:contrast-high={contrast === 'high'}
	class:contrast-base={contrast === 'base' || contrast === undefined}
	class:contrast-low={contrast === 'low'}
	class:contrast-lower={contrast === 'lower'}
	class:contrast-lowest={contrast === 'lowest'}
	class:d4r-text-xs={size === 'xs'}
	class:d4r-text-sm={size === 'sm'}
	class:d4r-text-base={size === 'base'}
	class:d4r-text-lg={size === 'lg'}
	class:d4r-text-xl={size === 'xl'}
	class:d4r-font-thin={weight === 'thin'}
	class:d4r-font-extralight={weight === 'extralight'}
	class:d4r-font-light={weight === 'light'}
	class:d4r-font-normal={weight === 'normal'}
	class:d4r-font-medium={weight === 'medium'}
	class:d4r-font-semibold={weight === 'semibold'}
	class:d4r-font-bold={weight === 'bold'}
	class:d4r-font-extrabold={weight === 'extrabold'}
	class:d4r-font-black={weight === 'black'}
	class:d4r-truncate={truncate}
	style={overwriteColor(color, usedShades, 'neutral')}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="postcss" global>
	:local(.contrast-highest) {
		@apply d4r-text-black dark:d4r-text-white;
	}

	:local(.contrast-higher) {
		@apply d4r-text-neutral-900 dark:d4r-text-neutral-50;
	}

	:local(.contrast-high) {
		@apply d4r-text-neutral-800 dark:d4r-text-neutral-100;
	}

	:local(.contrast-base) {
		@apply d4r-text-neutral-700 dark:d4r-text-neutral-200;
	}

	:local(.contrast-low) {
		@apply d4r-text-neutral-600 dark:d4r-text-neutral-300;
	}

	:local(.contrast-lower) {
		@apply d4r-text-neutral-500 dark:d4r-text-neutral-400;
	}

	:local(.contrast-lowest) {
		@apply d4r-text-neutral-400 dark:d4r-text-neutral-600;
	}
</style>
