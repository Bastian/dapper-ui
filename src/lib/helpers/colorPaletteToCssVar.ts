import type { ColorPalette } from '$lib/colors/color';
import { hexToRgb } from './hexToRgb';

export function colorPaletteToCssVar(palette: ColorPalette, prefix: string): string[] {
	const n = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
	const cssVar = palette.map((color, index) => {
		const rgb = hexToRgb(color);
		const rgbString = `${rgb.r} ${rgb.g} ${rgb.b}`;
		return `--d4r-color-${prefix}-${n[index]}: ${rgbString};`;
	});

	return cssVar;
}
