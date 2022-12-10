import type { ColorPalette } from '$lib/colors/color';

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
	radiuses: {
		/**
		 * The default radius for buttons.
		 */
		button: Radius;
		/**
		 * The default radius for input fields (TextField, Select, etc.)
		 */
		input: Radius;
		/**
		 * The default radius for checkboxes.
		 */
		checkbox: Radius;
		/**
		 * The default radiuses for the slider.
		 */
		slider: {
			/**
			 * The default radius for the slider thumb.
			 */
			thumb: Radius;
			/**
			 * The default radius for the slider track.
			 */
			track: Radius;
		};
	};
	// TODO: Instead of overwriting, also allow extending the default theme similar to Tailwind's "extend"
}

export type Radius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
