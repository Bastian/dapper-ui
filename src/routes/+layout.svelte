<script lang="ts">
	import { base } from '$app/paths';
	import { IconButton, Text, ThemeProvider } from '$lib';
	import '@fontsource/fira-mono/400.css';
	import '@fontsource/open-sans/400.css';
	import '@fontsource/open-sans/500.css';
	import '@fontsource/open-sans/600.css';
	import '@fontsource/open-sans/700.css';
	import { BrandGithub, Menu2 } from 'tabler-icons-svelte';
	import PageDrawer, { drawerOpen } from './PageDrawer.svelte';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
	import WorkInProgressWarning from './WorkInProgressWarning.svelte';
</script>

<ThemeProvider>
	<div class="d4r-flex d4r-h-full d4r-flex-col">
		<header class="dd4r-flex d4r-w-full d4r-justify-between d4r-px-8">
			<div class="d4r-flex d4r-items-center d4r-gap-4 lg:d4r-hidden">
				<IconButton
					on:click={() => ($drawerOpen = !$drawerOpen)}
					label="Toggle drawer"
					variant="subtle"
				>
					<Menu2 />
				</IconButton>
			</div>
			<Text size="lg" weight="bold" contrast="higher"><a href="{base}/">Dapper UI</a></Text>
			<div>
				<IconButton
					href="https://github.com/Bastian/dapper-ui"
					label="View on GitHub"
					color="neutral"
				>
					<BrandGithub />
				</IconButton>
				<ToggleDarkModeButton icon />
			</div>
		</header>

		<div class="d4r-h-full d4r-flex-grow d4r-pt-14">
			<PageDrawer bind:open={$drawerOpen} class="lg:d4r-hidden" />
			<slot />
		</div>
	</div>

	<WorkInProgressWarning />
</ThemeProvider>

<style lang="postcss" global>
	:local(header) {
		@apply d4r-fixed d4r-top-0 d4r-left-0 d4r-right-0 d4r-z-40 d4r-flex d4r-h-14 d4r-items-center d4r-border-b d4r-border-neutral-200 d4r-bg-white d4r-backdrop-blur-2xl d4r-backdrop-filter dark:d4r-border-dark-600 dark:d4r-bg-dark-800;
	}
</style>
