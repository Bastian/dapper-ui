<script lang="ts">
	import { overwriteColor } from './createColorOverwrite';
	import type { Shades } from './ThemeProvider.svelte';

	let className = '';
	export { className as class };

	export let contrast: 'high' | 'base' | 'low' | 'lower' | 'lowest' | undefined = 'base';
	export let color: string | undefined = 'gray';

	export let size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';

	export let tag: 'span' | 'div' | string = 'span';

	export let truncate = false;

	let usedShades: Shades[];
	$: usedShades =
		contrast === 'high'
			? [50, 900]
			: contrast === 'base'
			? [100, 800]
			: contrast === 'low'
			? [200, 700]
			: contrast === 'lower'
			? [300, 600]
			: [400, 500];
</script>

<svelte:element
	this={tag}
	class={className}
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
	class:truncate
	style={overwriteColor(color, usedShades, 'gray')}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="postcss" global>
	:local(.contrast-high) {
		@apply text-gray-900 dark:text-gray-50;
	}

	:local(.contrast-base) {
		@apply text-gray-800 dark:text-gray-100;
	}

	:local(.contrast-low) {
		@apply text-gray-700 dark:text-gray-200;
	}

	:local(.contrast-lower) {
		@apply text-gray-600 dark:text-gray-300;
	}

	:local(.contrast-lowest) {
		@apply text-gray-500 dark:text-gray-400;
	}
</style>
