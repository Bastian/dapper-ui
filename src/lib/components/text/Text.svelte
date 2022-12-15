<script lang="ts">
	import type { Shades } from '$lib/colors/color';
	import { overwriteColor } from '../../util/createColorOverwrite';

	let className = '';
	export { className as class };

	/**
	 * The contrast of the text.
	 *
	 * Uses different shades of the color to achieve the desired contrast. The
	 * used shade depends on whether or not dark mode is enabled.
	 */
	export let contrast:
		| 'highest'
		| 'higher'
		| 'high'
		| 'base'
		| 'low'
		| 'lower'
		| 'lowest'
		| undefined = 'base';

	/**
	 * The color of the text.
	 *
	 * Default to the neutral color shade.
	 */
	export let color: string | undefined = 'neutral';

	/**
	 * The size of the text.
	 */
	export let size:
		| 'xs'
		| 'sm'
		| 'base'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl'
		| '8xl'
		| '9xl' = 'base';

	/**
	 * The font weight of the text.
	 *
	 * Please note that not all fonts support all weights, in which case the
	 * closest weight will be used by the browser.
	 */
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

	/**
	 * The line height of the text.
	 */
	export let lineHeight: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | undefined =
		undefined;

	/**
	 * The HTML tag to use for the text.
	 *
	 * This does not affect the styling of the text, but should be set for semantic reasons to
	 * improve accessibility and SEO.
	 *
	 * Defaults to `span`.
	 */
	export let tag: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string = 'span';

	/**
	 * Whether or not to use the width of the text should be limited to about 65 characters. This
	 * improves readability of longer texts that span multiple lines.
	 *
	 * Requires a non-inline style (e.g., by setting the tag to `div`).
	 *
	 * Defaults to `false`.
	 */
	export let prose = false;

	/**
	 * Whether or not to truncate the text to a single line (using the ellipsis overflow style).
	 */
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
	class:d4r-text-2xl={size === '2xl'}
	class:d4r-text-3xl={size === '3xl'}
	class:d4r-text-4xl={size === '4xl'}
	class:d4r-text-5xl={size === '5xl'}
	class:d4r-text-6xl={size === '6xl'}
	class:d4r-text-7xl={size === '7xl'}
	class:d4r-text-8xl={size === '8xl'}
	class:d4r-text-9xl={size === '9xl'}
	class:d4r-leading-none={lineHeight === 'none'}
	class:d4r-leading-tight={lineHeight === 'tight'}
	class:d4r-leading-snug={lineHeight === 'snug'}
	class:d4r-leading-normal={lineHeight === 'normal'}
	class:d4r-leading-relaxed={lineHeight === 'relaxed'}
	class:d4r-leading-loose={lineHeight === 'loose'}
	class:d4r-max-w-prose={prose}
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
