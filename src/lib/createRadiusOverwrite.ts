import type { Radius } from './ThemeProvider.svelte';

export function overwriteRadius(to: Radius | undefined, from: string) {
	if (to === undefined || to === from) {
		return '';
	}
	return `--d4r-border-radius-${from}: var(--d4r-border-radius-${to});`;
}
