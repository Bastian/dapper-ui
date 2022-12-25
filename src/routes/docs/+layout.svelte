<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import DrawerLink from '$lib/components/drawer/DrawerLink.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import { Bulb, Components, Notebook } from 'tabler-icons-svelte';
	import { drawerOpen } from '../+layout.svelte';
	import Footer from '../Footer.svelte';

	function getDrawerLinkProps(target: string, routeId: string | null) {
		return {
			active: routeId == target,
			href: `${base}${target}`,
			on: {
				click: () => ($drawerOpen = false)
			}
		};
	}
</script>

<div class="d4r-flex d4r-h-full d4r-flex-grow d4r-flex-col">
	<Drawer
		open
		class="d4r-fixed d4r-h-full d4r-border-r d4r-border-neutral-200 dark:d4r-border-dark-600
		{$drawerOpen ? '' : '-d4r-translate-x-[220px] lg:d4r-translate-x-0'}"
	>
		<div class="svg-container d4r-mb-2 d4r-mt-4 d4r-flex d4r-items-center d4r-gap-2">
			<Text contrast="lower"><Notebook /></Text>
			<Text weight="semibold" size="sm">Getting Started</Text>
		</div>
		<DrawerLink {...getDrawerLinkProps('/docs/quick-start', $page.route.id)}>
			Quick Start (tl;dr)
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/installation', $page.route.id)}>
			Installation
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/usage', $page.route.id)}>Usage</DrawerLink>
		<div class="svg-container d4r-mb-2 d4r-mt-6 d4r-flex d4r-items-center d4r-gap-2">
			<Text contrast="lower"><Components /></Text>
			<Text weight="semibold" size="sm">Components</Text>
		</div>
		<DrawerLink {...getDrawerLinkProps('/docs/button', $page.route.id)}>Button</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/text-field', $page.route.id)}>TextField</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/slider', $page.route.id)}>Slider</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/select', $page.route.id)}>Select</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/checkbox', $page.route.id)}>Checkbox</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/text', $page.route.id)}>Text</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/dialog', $page.route.id)}>Dialog</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/modal', $page.route.id)}>Modal</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/progress-bar', $page.route.id)}>
			ProgressBar
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/meter', $page.route.id)}>Meter</DrawerLink>

		<div class="svg-container d4r-mb-2 d4r-mt-6 d4r-flex d4r-items-center d4r-gap-2">
			<Text contrast="lower"><Bulb /></Text>
			<Text weight="semibold" size="sm">Concepts</Text>
		</div>
		<DrawerLink {...getDrawerLinkProps('/docs/theming', $page.route.id)}>Theming</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/icons', $page.route.id)}>Icons</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/styling', $page.route.id)}>Styling</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/dark-mode', $page.route.id)}>Dark Mode</DrawerLink>
	</Drawer>

	<div class="d4r-flex d4r-grow">
		<div class="d4r-hidden d4r-w-[220px] d4r-shrink-0 lg:d4r-block" />
		<div
			class="d4r-mx-auto d4r-w-full d4r-max-w-4xl d4r-overflow-hidden d4r-py-8 d4r-px-4 sm:d4r-px-6 md:d4r-px-10 md:d4r-py-12"
		>
			<slot />
		</div>
	</div>
	<div class="d4r-flex">
		<div class="d4r-hidden d4r-w-[220px] d4r-shrink-0 lg:d4r-block" />
		<div class="d4r-flex-grow">
			<Footer />
		</div>
	</div>
</div>

<style lang="postcss" global>
	:local(.svg-container) svg {
		@apply d4r-h-5 d4r-w-5;
	}
</style>
