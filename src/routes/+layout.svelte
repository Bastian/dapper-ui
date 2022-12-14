<script lang="ts" context="module">
	export let drawerOpen = writable(false);
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import IconButton from '$lib/components/icon-button/IconButton.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import { defaultDapperUiTheme } from '$lib/theme/default-theme';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
	import { writable } from 'svelte/store';
	import { Menu2 } from 'tabler-icons-svelte';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
</script>

<ThemeProvider
	theme={{
		...defaultDapperUiTheme,
		font: {
			...defaultDapperUiTheme.font,
			// default: "'Rubik', sans-serif",
			default: "'Open Sans', sans-serif"
		}
	}}
>
	<div class="d4r-flex d4r-h-full d4r-flex-col">
		<header class="d4r-flex d4r-justify-between d4r-px-8">
			<div class="d4r-flex d4r-items-center d4r-gap-4">
				<IconButton
					on:click={() => ($drawerOpen = !$drawerOpen)}
					label="Toggle drawer"
					variant="subtle"
					class="lg:!d4r-hidden"
				>
					<Menu2 />
				</IconButton>
				<Text size="xl" weight="medium" contrast="higher"><a href="{base}/">Dapper UI</a></Text>
			</div>
			<ToggleDarkModeButton icon />
		</header>

		<div class="d4r-h-full d4r-flex-grow d4r-pt-14">
			<slot />
		</div>
	</div>
</ThemeProvider>

<style lang="postcss" global>
	:local(header) {
		@apply d4r-fixed d4r-top-0 d4r-left-0 d4r-right-0 d4r-z-10 d4r-flex d4r-h-14 d4r-items-center d4r-border-b d4r-border-neutral-200 d4r-bg-white d4r-bg-opacity-75 d4r-backdrop-blur-2xl d4r-backdrop-filter dark:d4r-border-dark-600 dark:d4r-bg-dark-800;
	}
</style>
