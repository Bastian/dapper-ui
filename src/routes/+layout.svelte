<script lang="ts">
	import { base } from '$app/paths';
	import Container from '$lib/components/container/Container.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<ThemeProvider>
	<div class="d4r-flex d4r-h-full d4r-flex-col">
		<header>
			<Container center>
				<Text size="xl" weight="medium" contrast="higher"><a href="{base}/">Dapper UI</a></Text>
			</Container>
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
