export function overwriteColor(
	to: string | undefined,
	shades: (50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],
	from = 'primary'
) {
	if (to === undefined || to === from) {
		return '';
	}
	return shades
		.map((shade) => `--d4r-color-${from}-${shade}: var(--d4r-color-${to}-${shade});`)
		.join('');
}
