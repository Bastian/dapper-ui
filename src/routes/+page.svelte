<script>
	import { base } from '$app/paths';
	import Button from '$lib/components/button/Button.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import CustomizationSection from './CustomizationSection.svelte';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
</script>

<div>
	<Container center class="d4r-flex d4r-flex-col d4r-gap-8 lg:d4r-flex-row">
		<div class="d4r-space-y-8">
			<Text tag="h1" size="6xl" weight="bold" contrast="high">Dapper UI</Text>
			<Text tag="div" size="xl" contrast="low" prose>
				Dapper UI is a sleek and modern UI component library for Svelte, offering full TypeScript
				support and extensive documentation. With its built-in dark mode and easy theming options,
				you can create a unique and personalized look for your application. Built with TailwindCSS,
				but compatible with any styling solution, Dapper UI offers sleek, accessible and
				user-friendly component for your next project.
			</Text>
			<div class="d4r-flex d4r-gap-4">
				<Button href="{base}/examples">To Component List</Button>
				<ToggleDarkModeButton />
			</div>
		</div>
	</Container>
</div>

<CustomizationSection />
