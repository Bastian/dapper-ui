<script>
	import { base } from '$app/paths';
	import Button from '$lib/components/button/Button.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import CustomizationSection from './CustomizationSection.svelte';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
	import heroImgSrc from './hero-image.webp';
	import Footer from './Footer.svelte';
</script>

<div
	class="d4r-dark d4r-bg-cover d4r-bg-fixed d4r-bg-left-top"
	style={`background-image: url("${heroImgSrc}");`}
>
	<Container
		center
		noPadding
		class="d4r-flex sm:d4r-p-6 md:d4r-p-8 lg:d4r-flex-row lg:d4r-p-16 xl:d4r-p-20 2xl:d4r-p-24"
	>
		<div class="background-blur d4r-space-y-8 d4r-p-6 sm:d4r-rounded-lg lg:d4r-p-16">
			<Text tag="h1" size="6xl" weight="bold" contrast="high">Dapper UI</Text>
			<Text tag="div" size="xl" contrast="high" weight="medium" prose>
				Dapper UI is a sleek and modern UI component library for Svelte, offering full TypeScript
				support and extensive documentation. With its built-in dark mode and easy theming options,
				you can create a unique and personalized look for your application. Built with TailwindCSS,
				but compatible with any styling solution, Dapper UI offers sleek, accessible and
				user-friendly component for your next project.
			</Text>
			<div class="d4r-flex d4r-flex-col d4r-gap-4 md:d4r-flex-row">
				<Button href="{base}/examples/button">To Component List</Button>
				<ToggleDarkModeButton />
			</div>
		</div>
	</Container>
</div>

<CustomizationSection />

<Footer />

<style lang="postcss">
	.background-blur {
		@apply d4r-bg-dark-900/50 d4r-bg-opacity-95 d4r-shadow-2xl d4r-backdrop-blur-lg d4r-backdrop-filter;
	}
</style>
