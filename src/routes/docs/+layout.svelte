<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import DrawerLink from '$lib/components/drawer/DrawerLink.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import {
		AdjustmentsHorizontal,
		BrandCss3,
		Brush,
		Checkbox,
		Click,
		CursorText,
		Icons,
		Moon,
		Select,
		Typography
	} from 'tabler-icons-svelte';
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
		<div class="d4r-mb-2">
			<Text weight="medium" size="sm">Components</Text>
		</div>
		<DrawerLink {...getDrawerLinkProps('/docs/button', $page.route.id)}>
			<Click slot="icon-start" /> Button
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/text-field', $page.route.id)}>
			<CursorText slot="icon-start" /> TextField
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/slider', $page.route.id)}>
			<AdjustmentsHorizontal slot="icon-start" /> Slider
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/select', $page.route.id)}>
			<Select slot="icon-start" /> Select
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/checkbox', $page.route.id)}>
			<Checkbox slot="icon-start" /> Checkbox
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/text', $page.route.id)}>
			<Typography slot="icon-start" /> Text
		</DrawerLink>
		<div class="d4r-mb-2 d4r-mt-4">
			<Text weight="medium" size="sm">Concepts</Text>
		</div>
		<DrawerLink {...getDrawerLinkProps('/docs/theming', $page.route.id)}>
			<Brush slot="icon-start" /> Theming
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/icons', $page.route.id)}>
			<Icons slot="icon-start" /> Icons
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/styling', $page.route.id)}>
			<BrandCss3 slot="icon-start" /> Styling
		</DrawerLink>
		<DrawerLink {...getDrawerLinkProps('/docs/dark-mode', $page.route.id)}>
			<Moon slot="icon-start" /> Dark Mode
		</DrawerLink>
	</Drawer>

	<div class="d4r-flex d4r-grow">
		<div class="d4r-hidden d4r-w-[220px] d4r-shrink-0 lg:d4r-block" />
		<div
			class="d4r-mx-auto d4r-w-full d4r-max-w-5xl d4r-overflow-hidden d4r-py-8 d4r-px-4 sm:d4r-px-6 md:d4r-px-10 md:d4r-py-12"
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
