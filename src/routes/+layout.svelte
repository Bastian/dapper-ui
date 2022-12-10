<script lang="ts">
	import { base } from '$app/paths';
	import Container from '$lib/components/container/Container.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<ThemeProvider>
	<div class="d4r-flex d4r-h-full d4r-flex-col d4r-bg-neutral-100 dark:d4r-bg-dark-700">
		<header
			class="d4r-flex d4r-h-16 d4r-items-center d4r-border-b d4r-border-neutral-200 d4r-bg-white dark:d4r-border-neutral-700 dark:d4r-bg-dark-800"
		>
			<Container center>
				<Text size="xl" weight="medium"><a href="{base}/">Dapper UI</a></Text>
			</Container>
		</header>

		<div class="d4r-h-full d4r-flex-grow d4r-overflow-y-auto">
			<slot />
		</div>
	</div>
</ThemeProvider>
