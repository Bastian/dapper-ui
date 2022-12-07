<script lang="ts">
	import ThemeProvider from '$lib/ThemeProvider.svelte';
</script>

<ThemeProvider
	class="h-full overflow-y-auto bg-neutral-100 p-4 dark:bg-dark-700 sm:p-6 md:p-8 lg:p-16"
>
	<div class="container mx-auto"><slot /></div>
</ThemeProvider>
