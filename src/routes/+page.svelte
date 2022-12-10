<script>
	import { base } from '$app/paths';
	import Text from '$lib/components/text/Text.svelte';
	import LoginFormDemo from './LoginFormDemo.svelte';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
</script>

<div
	class="d4r-flex d4r-flex-col d4r-gap-8 d4r-bg-white d4r-p-8 dark:d4r-bg-dark-800 lg:d4r-flex-row"
>
	<div class="d4r-space-y-8">
		<Text tag="h1" size="5xl" weight="bold" contrast="high">Dapper UI (WIP)</Text>
		<Text tag="div" size="xl" contrast="low" prose>
			Dapper UI is a sleek and modern UI component library for Svelte, offering full TypeScript
			support and extensive documentation. With its built-in dark mode and easy theming options, you
			can create a unique and personalized look for your application. Built with TailwindCSS, but
			compatible with any styling solution, Dapper UI offers sleek, accessible and user-friendly
			component for your next project.
		</Text>
		<ToggleDarkModeButton />
		<a href="{base}/examples"><Text>To Component List</Text></a>
	</div>

	<LoginFormDemo />
</div>
