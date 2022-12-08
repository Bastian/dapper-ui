import { getContext } from 'svelte';
import type { Readable } from 'svelte/store';
import type { DapperUiTheme } from './ThemeProvider.svelte';

/**
 * Gets the current theme from the context.
 *
 * Must be called inside of a component that is a child of a ThemeProvider.
 *
 * @returns The current theme.
 */
export function getTheme(): Readable<DapperUiTheme> {
	return getContext('d4r-theme');
}
