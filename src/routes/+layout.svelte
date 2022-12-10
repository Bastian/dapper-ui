<script lang="ts" context="module">
	export let drawerOpen = writable(false);
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/components/button/Button.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
	import { writable } from 'svelte/store';
	import { Menu2 } from 'tabler-icons-svelte';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
</script>

<ThemeProvider>
	<div class="d4r-flex d4r-h-full d4r-flex-col">
		<header class="d4r-flex d4r-justify-between d4r-px-8">
			<div class="d4r-flex d4r-items-center d4r-gap-4">
				<Button
					on:click={() => ($drawerOpen = !$drawerOpen)}
					variant="subtle"
					class="d4r-w-10 !d4r-p-0 md:!d4r-hidden"
				>
					<span><Menu2 /></span>
				</Button>
				<Text size="xl" weight="medium" contrast="higher"><a href="{base}/">Dapper UI</a></Text>
			</div>
			<ToggleDarkModeButton icon />
		</header>

		<div class="d4r-h-full d4r-flex-grow">
			<div class="d4r-h-16 d4r-w-full" />
			<slot />
		</div>
	</div>
</ThemeProvider>

<style lang="postcss" global>
	:local(header) {
		@apply d4r-fixed d4r-top-0 d4r-left-0 d4r-right-0 d4r-z-10 d4r-flex d4r-h-16 d4r-items-center d4r-bg-white d4r-bg-opacity-75 d4r-shadow d4r-backdrop-blur-2xl d4r-backdrop-filter dark:d4r-border-b dark:d4r-border-dark-600 dark:d4r-bg-dark-800;
	}
</style>
