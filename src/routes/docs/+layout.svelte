<script lang="ts">
	import { base } from '$app/paths';

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
</script>

<div class="d4r-flex d4r-h-full d4r-flex-grow d4r-flex-col">
	<Drawer
		open
		class="d4r-fixed d4r-h-full d4r-border-r d4r-border-neutral-200 dark:d4r-border-dark-600 
		{$drawerOpen ? '' : '-d4r-translate-x-[220px] lg:d4r-translate-x-0'}"
	>
		<div class="d4r-my-2">
			<Text>Components</Text>
		</div>
		<DrawerLink href="{base}/docs/button" on:click={() => ($drawerOpen = false)}>
			<Click slot="icon-start" /> Button
		</DrawerLink>
		<DrawerLink href="{base}/docs/text-field" on:click={() => ($drawerOpen = false)}>
			<CursorText slot="icon-start" /> TextField
		</DrawerLink>
		<DrawerLink href="{base}/docs/slider" on:click={() => ($drawerOpen = false)}>
			<AdjustmentsHorizontal slot="icon-start" /> Slider
		</DrawerLink>
		<DrawerLink href="{base}/docs/select" on:click={() => ($drawerOpen = false)}>
			<Select slot="icon-start" /> Select
		</DrawerLink>
		<DrawerLink href="{base}/docs/checkbox" on:click={() => ($drawerOpen = false)}>
			<Checkbox slot="icon-start" /> Checkbox
		</DrawerLink>
		<DrawerLink href="{base}/docs/text" on:click={() => ($drawerOpen = false)}>
			<Typography slot="icon-start" /> Text
		</DrawerLink>
		<div class="d4r-my-2">
			<Text>Concepts</Text>
		</div>
		<DrawerLink href="{base}/docs/theming" on:click={() => ($drawerOpen = false)}>
			<Brush slot="icon-start" /> Theming
		</DrawerLink>
		<DrawerLink href="{base}/docs/icons" on:click={() => ($drawerOpen = false)}>
			<Icons slot="icon-start" /> Icons
		</DrawerLink>
		<DrawerLink href="{base}/docs/styling" on:click={() => ($drawerOpen = false)}>
			<BrandCss3 slot="icon-start" /> Styling
		</DrawerLink>
		<DrawerLink href="{base}/docs/dark-mode" on:click={() => ($drawerOpen = false)}>
			<Moon slot="icon-start" /> Dark Mode
		</DrawerLink>
	</Drawer>

	<div class="d4r-flex d4r-grow">
		<div class="d4r-hidden d4r-w-[220px] d4r-shrink-0 lg:d4r-block" />
		<div
			class="d4r-mx-auto d4r-w-full d4r-max-w-5xl d4r-py-8 d4r-px-4 sm:d4r-px-6 md:d4r-px-10 md:d4r-py-12"
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
