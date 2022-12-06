export function overwriteColor(
	to: string | undefined,
	shades: (50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],
	from = 'primary'
) {
	if (to === undefined || to === from) {
		return undefined;
	}
	return shades.map((shade) => `--color-${from}-${shade}: var(--color-${to}-${shade});`).join('');
}
