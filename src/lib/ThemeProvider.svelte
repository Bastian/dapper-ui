<script lang="ts" context="module">
	function hexToRgb(hex: string) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (!result) {
			throw new Error(`Invalid hex color ${hex}`);
		}
		return {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		};
	}

	function colorPaletteToCssVar(palette: ColorPalette, prefix: string) {
		const n = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
		const cssVar = palette.reduce((acc, color, index) => {
			const rgb = hexToRgb(color);
			const rgbString = `${rgb.r} ${rgb.g} ${rgb.b}`;
			return `${acc}--color-${prefix}-${n[index]}: ${rgbString};`;
		}, '');

		return cssVar;
	}

	function colorsToCssVar(colors: Record<string, ColorPalette>) {
		return Object.entries(colors).reduce((acc, [key, value]) => {
			return `${acc}${colorPaletteToCssVar(value, key)}`;
		}, '');
	}

	export interface DapperUiTheme {
		colors: {
			// TODO Also allow to use stirng that reference other colors in the palette
			/**
			 * The primary color palette used by default.
			 */
			primary: ColorPalette;
			/**
			 * A neutral color shade, usually some kind of gray.
			 */
			neutral: ColorPalette;
			/**
			 * The dark color palette used by in the dark mode.
			 */
			dark: ColorPalette;
			/**
			 * Other colors that can be referenced by name in components.
			 */
			[other: string]: ColorPalette;
		};
		// TODO: Instead of overwriting, also allow extending the default theme similar to Tailwind's "extend"
	}

	export const defaultDapperUiTheme: DapperUiTheme = {
		colors: {
			primary: colorTailwindIndigo,
			neutral: colorTailwindGray,
			dark: colorDark,
			// Custom colors
			slate: colorTailwindSlate,
			gray: colorTailwindGray,
			zinc: colorTailwindZinc,
			'neutral-gray': colorTailwindNeutral,
			stone: colorTailwindStone,
			red: colorTailwindRed,
			orange: colorTailwindOrange,
			amber: colorTailwindAmber,
			yellow: colorTailwindYellow,
			lime: colorTailwindLime,
			green: colorTailwindGreen,
			emerald: colorTailwindEmerald,
			teal: colorTailwindTeal,
			cyan: colorTailwindCyan,
			sky: colorTailwindSky,
			blue: colorTailwindBlue,
			indigo: colorTailwindIndigo,
			violet: colorTailwindViolet,
			purple: colorTailwindPurple,
			fuchsia: colorTailwindFuchsia,
			pink: colorTailwindPink,
			rose: colorTailwindRose
		}
	};
</script>

<script lang="ts">
	import '$lib/base.css';
	import type { ColorPalette } from '$lib/colors/color';
	import { colorDark } from './colors/dapper-ui';
	import {
		colorTailwindAmber,
		colorTailwindBlue,
		colorTailwindCyan,
		colorTailwindEmerald,
		colorTailwindFuchsia,
		colorTailwindGray,
		colorTailwindGreen,
		colorTailwindIndigo,
		colorTailwindLime,
		colorTailwindNeutral,
		colorTailwindOrange,
		colorTailwindPink,
		colorTailwindPurple,
		colorTailwindRed,
		colorTailwindRose,
		colorTailwindSky,
		colorTailwindSlate,
		colorTailwindStone,
		colorTailwindTeal,
		colorTailwindViolet,
		colorTailwindYellow,
		colorTailwindZinc
	} from './colors/tailwind';

	let className = '';
	export { className as class };

	export let theme: DapperUiTheme = defaultDapperUiTheme;
</script>

<div class={className} style={`${colorsToCssVar(theme.colors)}`}>
	<slot />
</div>
