import type { ColorPalette } from '$lib/colors/color';

/**
 * The dark color palette.
 */
export const colorDark: ColorPalette = [
	hslToHex(230, 1, 75),
	hslToHex(230, 2, 59),
	hslToHex(230, 4, 45),
	hslToHex(230, 6, 35),
	hslToHex(230, 8, 25),
	hslToHex(230, 10, 20),
	hslToHex(230, 15, 17),
	hslToHex(230, 20, 11),
	hslToHex(230, 25, 8),
	hslToHex(230, 30, 6)
];

// From https://stackoverflow.com/a/44134328
function hslToHex(h: number, s: number, l: number) {
	l /= 100;
	const a = (s * Math.min(l, 1 - l)) / 100;
	const f = (n) => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0');
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}
