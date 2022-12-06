<script lang="ts" context="module">
	export type Shades = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

	export type ColorPalette = [
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string
	];

	export const dark: ColorPalette = [
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

	/* console.log(dark.map((c) => `"${c}"`).join(',')); */

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

	export const tailwindGray: ColorPalette = [
		'#f9fafb',
		'#f3f4f6',
		'#e5e7eb',
		'#d1d5db',
		'#9ca3af',
		'#6b7280',
		'#4b5563',
		'#374151',
		'#1f2937',
		'#111827'
	];

	export let tailwindRed: ColorPalette = [
		'#fef2f2',
		'#fee2e2',
		'#fecaca',
		'#fca5a5',
		'#f87171',
		'#ef4444',
		'#dc2626',
		'#b91c1c',
		'#991b1b',
		'#7f1d1d'
	];

	export let tailwindOrange: ColorPalette = [
		'#fff7ed',
		'#ffedd5',
		'#fed7aa',
		'#fdba74',
		'#fb923c',
		'#f97316',
		'#ea580c',
		'#c2410c',
		'#9a3412',
		'#7c2d12'
	];

	export let tailwindAmber: ColorPalette = [
		'#fffbeb',
		'#fef3c7',
		'#fde68a',
		'#fcd34d',
		'#fbbf24',
		'#f59e0b',
		'#d97706',
		'#b45309',
		'#92400e',
		'#78350f'
	];

	export let tailwindYellow: ColorPalette = [
		'#fefce8',
		'#fef9c3',
		'#fef08a',
		'#fde047',
		'#facc15',
		'#eab308',
		'#ca8a04',
		'#a16207',
		'#854d0e',
		'#713f12'
	];

	export let tailwindLime: ColorPalette = [
		'#f7fee7',
		'#ecfccb',
		'#d9f99d',
		'#bef264',
		'#a3e635',
		'#84cc16',
		'#65a30d',
		'#4d7c0f',
		'#3f6212',
		'#365314'
	];

	export let tailwindGreen: ColorPalette = [
		'#f0fdf4',
		'#dcfce7',
		'#bbf7d0',
		'#86efac',
		'#4ade80',
		'#22c55e',
		'#16a34a',
		'#15803d',
		'#166534',
		'#14532d'
	];

	export let tailwindEmerald: ColorPalette = [
		'#ecfdf5',
		'#d1fae5',
		'#a7f3d0',
		'#6ee7b7',
		'#34d399',
		'#10b981',
		'#059669',
		'#047857',
		'#065f46',
		'#064e3b'
	];

	export let tailwindTeal: ColorPalette = [
		'#f0fdfa',
		'#ccfbf1',
		'#99f6e4',
		'#5eead4',
		'#2dd4bf',
		'#14b8a6',
		'#0d9488',
		'#0f766e',
		'#115e59',
		'#134e4a'
	];

	export let tailwindCyan: ColorPalette = [
		'#ecfeff',
		'#cffafe',
		'#a5f3fc',
		'#67e8f9',
		'#22d3ee',
		'#06b6d4',
		'#0891b2',
		'#0e7490',
		'#155e75',
		'#164e63'
	];

	export let tailwindSky: ColorPalette = [
		'#f0f9ff',
		'#e0f2fe',
		'#bae6fd',
		'#7dd3fc',
		'#38bdf8',
		'#0ea5e9',
		'#0284c7',
		'#0369a1',
		'#075985',
		'#0c4a6e'
	];

	export const tailwindBlue: ColorPalette = [
		'#eff6ff',
		'#dbeafe',
		'#bfdbfe',
		'#93c5fd',
		'#60a5fa',
		'#3b82f6',
		'#2563eb',
		'#1d4ed8',
		'#1e40af',
		'#1e3a8a'
	];

	export let tailwindIndigo: ColorPalette = [
		'#eef2ff',
		'#e0e7ff',
		'#c7d2fe',
		'#a5b4fc',
		'#818cf8',
		'#6366f1',
		'#4f46e5',
		'#4338ca',
		'#3730a3',
		'#312e81'
	];

	export let tailwindViolet: ColorPalette = [
		'#f5f3ff',
		'#ede9fe',
		'#ddd6fe',
		'#c4b5fd',
		'#a78bfa',
		'#8b5cf6',
		'#7c3aed',
		'#6d28d9',
		'#5b21b6',
		'#4c1d95'
	];

	export let tailwindPurple: ColorPalette = [
		'#faf5ff',
		'#f3e8ff',
		'#e9d5ff',
		'#d8b4fe',
		'#c084fc',
		'#a855f7',
		'#9333ea',
		'#7e22ce',
		'#6b21a8',
		'#581c87'
	];

	export let tailwindFuchsia: ColorPalette = [
		'#fdf4ff',
		'#fae8ff',
		'#f5d0fe',
		'#f0abfc',
		'#e879f9',
		'#d946ef',
		'#c026d3',
		'#a21caf',
		'#86198f',
		'#701a75'
	];

	export let tailwindPink: ColorPalette = [
		'#fdf2f8',
		'#fce7f3',
		'#fbcfe8',
		'#f9a8d4',
		'#f472b6',
		'#ec4899',
		'#db2777',
		'#be185d',
		'#9d174d',
		'#831843'
	];

	export let tailwindRose: ColorPalette = [
		'#fff1f2',
		'#ffe4e6',
		'#fecdd3',
		'#fda4af',
		'#fb7185',
		'#f43f5e',
		'#e11d48',
		'#be123c',
		'#9f1239',
		'#881337'
	];

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
</script>

<script lang="ts">
	import '$lib/base.css';

	let className = '';
	export { className as class };

	export let colors: {
		primary: ColorPalette;
		gray: ColorPalette;
		dark: ColorPalette;
		[other: string]: ColorPalette;
	};
</script>

<div class={className} style={`${colorsToCssVar(colors)}`}>
	<slot />
</div>
