<script lang="ts">
	import { base } from '$app/paths';
	import Text from '$lib/components/text/Text.svelte';
	import { defaultDapperUiTheme } from '$lib/theme/default-theme';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<div class="d4r-flex d4r-h-full d4r-flex-col">
	<ThemeProvider
		theme={{
			...defaultDapperUiTheme,
			radiuses: {
				...defaultDapperUiTheme.radiuses
				// button: 'full',
				// slider: {
				// 	thumb: 'none',
				// 	track: 'none'
				// },
				// checkbox: 'none',
				// input: 'none'
			}
		}}
	>
		<header
			class="d4r-flex d4r-h-16 d4r-items-center d4r-border-b d4r-border-neutral-200 dark:d4r-border-neutral-700 dark:d4r-bg-dark-800"
		>
			<div class="d4r-container d4r-mx-auto">
				<Text size="xl" weight="medium"><a href="{base}/">Dapper UI</a></Text>
			</div>
		</header>

		<div
			class="d4r-h-full d4r-flex-grow d4r-overflow-y-auto d4r-bg-neutral-100 d4r-p-4 dark:d4r-bg-dark-700 sm:d4r-p-6 md:d4r-p-8 lg:d4r-p-16"
		>
			<div class="d4r-container d4r-mx-auto"><slot /></div>
		</div>
	</ThemeProvider>
</div>
