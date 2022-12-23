<script lang="ts" context="module">
	function colorsToCssVar(colors: Record<string, ColorPalette>): string[] {
		return Object.entries(colors).flatMap(([key, value]) => colorPaletteToCssVar(value, key));
	}

	function getRadiusCssVars(theme: DapperUiTheme): string[] {
		function mapBorderRadius(from: string, to: string) {
			return `--d4r-border-radius-${from}: var(--d4r-border-radius-${to});`;
		}
		return [
			'--d4r-border-radius-none: 0px;',
			'--d4r-border-radius-sm: 0.125rem;',
			'--d4r-border-radius-base: 0.25rem;',
			'--d4r-border-radius-md: 0.375rem;',
			'--d4r-border-radius-lg: 0.5rem;',
			'--d4r-border-radius-xl: 0.75rem;',
			'--d4r-border-radius-2xl: 1rem;',
			'--d4r-border-radius-3xl: 1.5rem;',
			'--d4r-border-radius-full: 9999px;',
			mapBorderRadius('button', theme.radiuses.button),
			mapBorderRadius('input', theme.radiuses.input),
			mapBorderRadius('checkbox', theme.radiuses.checkbox),
			mapBorderRadius('slider-thumb', theme.radiuses.slider.thumb),
			mapBorderRadius('slider-track', theme.radiuses.slider.track),
			mapBorderRadius('dialog', theme.radiuses.dialog)
		];
	}

	function getFontStyle(theme: DapperUiTheme, type: 'default' | 'code'): string[] {
		if (!theme.font?.[type]) {
			return [];
		}
		return [`font-family: ${theme.font[type]};`];
	}
</script>

<script lang="ts">
	import '../base.css';
	import type { ColorPalette } from '$lib/colors/color';
	import { setContext } from 'svelte';
	import { derived, writable } from 'svelte/store';

	import { colorPaletteToCssVar } from '../helpers/colorPaletteToCssVar';
	import type { DapperUiTheme } from './DapperUiTheme';
	import { defaultDapperUiTheme } from './default-theme';

	let className = '';
	export { className as class };

	/**
	 * When set to true, the theme will not be applied locally but only
	 * for child components.
	 */
	export let localStyle = false;

	export let theme: DapperUiTheme = defaultDapperUiTheme;

	const themeStore = writable(theme);
	$: $themeStore = theme;

	setContext(
		'd4r-theme',
		derived(themeStore, ($themeStore) => $themeStore)
	);
</script>

<svelte:head>
	{#if !localStyle}
		<!-- MAKE GOD DAMN SURE THAT EVERYTHING IN THERE IS PROPERLY ESCAPED. 
		IT CURRENTLY ISN'T, SO USER SHOULD NOT BE ALLOWED TO PROVIDE CUSTOM THEMES -->
		{@html `<` +
			`style type="text/css">:root {\n${colorsToCssVar(theme.colors).join(
				'\n'
			)}\n${getRadiusCssVars(theme).join('\n')}\n${getFontStyle(theme, 'default').join(
				'\n'
			)}\n}code {${getFontStyle(theme, 'code').join('\n')}}
	</style>`}
	{/if}
</svelte:head>

{#if localStyle}
	<div
		class={className}
		style="{colorsToCssVar(theme.colors).join('')}{getRadiusCssVars(theme).join('')}{getFontStyle(
			theme,
			'default'
		).join('')}"
	>
		<slot />
	</div>
{:else}
	<slot />
{/if}
