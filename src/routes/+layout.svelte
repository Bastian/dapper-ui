<script lang="ts">
	import ThemeProvider, {
		dark,
		tailwindAmber,
		tailwindBlue,
		tailwindCyan,
		tailwindEmerald,
		tailwindFuchsia,
		tailwindGray,
		tailwindGreen,
		tailwindIndigo,
		tailwindLime,
		tailwindOrange,
		tailwindPink,
		tailwindPurple,
		tailwindRed,
		tailwindRose,
		tailwindSky,
		tailwindTeal,
		tailwindViolet,
		tailwindYellow
	} from '$lib/ThemeProvider.svelte';
</script>

<ThemeProvider
	class="h-full overflow-y-auto bg-gray-100 p-4 dark:bg-dark-700 sm:p-6 md:p-8 lg:p-16"
	colors={{
		primary: tailwindIndigo,
		gray: tailwindGray,
		dark: dark,
		red: tailwindRed,
		orange: tailwindOrange,
		amber: tailwindAmber,
		yellow: tailwindYellow,
		lime: tailwindLime,
		green: tailwindGreen,
		emerald: tailwindEmerald,
		teal: tailwindTeal,
		cyan: tailwindCyan,
		sky: tailwindSky,
		blue: tailwindBlue,
		indigo: tailwindIndigo,
		violet: tailwindViolet,
		purple: tailwindPurple,
		fuchsia: tailwindFuchsia,
		pink: tailwindPink,
		rose: tailwindRose
	}}
>
	<div class="container mx-auto"><slot /></div>
</ThemeProvider>
