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
	class:text-xs={size === 'xs'}
	class:text-sm={size === 'sm'}
	class:text-base={size === 'base'}
	class:text-lg={size === 'lg'}
	class:text-xl={size === 'xl'}
	class:font-thin={weight === 'thin'}
	class:font-extralight={weight === 'extralight'}
	class:font-light={weight === 'light'}
	class:font-normal={weight === 'normal'}
	class:font-medium={weight === 'medium'}
	class:font-semibold={weight === 'semibold'}
	class:font-bold={weight === 'bold'}
	class:font-extrabold={weight === 'extrabold'}
	class:font-black={weight === 'black'}
	class:truncate
	style={overwriteColor(color, usedShades, 'gray')}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="postcss" global>
	:local(.contrast-highest) {
		@apply text-black dark:text-white;
	}

	:local(.contrast-higher) {
		@apply text-gray-900 dark:text-gray-50;
	}

	:local(.contrast-high) {
		@apply text-gray-800 dark:text-gray-100;
	}

	:local(.contrast-base) {
		@apply text-gray-700 dark:text-gray-200;
	}

	:local(.contrast-low) {
		@apply text-gray-600 dark:text-gray-300;
	}

	:local(.contrast-lower) {
		@apply text-gray-500 dark:text-gray-400;
	}

	:local(.contrast-lowest) {
		@apply text-gray-400 dark:text-gray-600;
	}
</style>
