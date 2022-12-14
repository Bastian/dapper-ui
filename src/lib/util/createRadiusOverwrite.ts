import type { Radius } from '$lib/theme/ThemeProvider.svelte';

/**
 * @internal Creates a string of CSS variables that overwrite previous boder radius variables.
 */
export function overwriteRadius(to: Radius | undefined, from: string) {
	if (to === undefined || to === from) {
		return '';
	}
	return `--d4r-border-radius-${from}: var(--d4r-border-radius-${to});`;
}
