<script lang="ts">
	import ThemeProvider, { defaultDapperUiTheme } from '$lib/ThemeProvider.svelte';
</script>

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
	class="d4r-h-full d4r-overflow-y-auto d4r-bg-neutral-100 d4r-p-4 dark:d4r-bg-dark-700 sm:d4r-p-6 md:d4r-p-8 lg:d4r-p-16"
>
	<div class="d4r-container d4r-mx-auto"><slot /></div>
</ThemeProvider>
