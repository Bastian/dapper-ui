<script lang="ts" context="module">
	export let drawerOpen = writable(false);
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import DrawerLink from '$lib/components/drawer/DrawerLink.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import { writable } from 'svelte/store';
	import { Bulb, Components, Notebook } from 'tabler-icons-svelte';

	let className = '';
	export { className as class };

	export let open = false;
	export let permanent = false;

	function getDrawerLinkProps(target: string, routeId: string | null) {
		return {
			active: routeId == target,
			href: `${base}${target}`
		};
	}

	function handleDrawerLinkClick() {
		$drawerOpen = false;
	}
</script>

<Drawer
	bind:open
	{permanent}
	class="d4r-fixed d4r-h-full d4r-border-r d4r-border-neutral-200 dark:d4r-border-dark-600 {className}"
>
	<div class="svg-container d4r-mb-2 d4r-mt-4 d4r-flex d4r-items-center d4r-gap-2">
		<Text contrast="lower"><Notebook /></Text>
		<Text weight="semibold" size="sm">Getting Started</Text>
	</div>
	<DrawerLink
		{...getDrawerLinkProps('/docs/quick-start', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Quick Start (tl;dr)
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/installation', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Installation
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/usage', $page.route.id)}
		on:click={handleDrawerLinkClick}>Usage</DrawerLink
	>
	<div class="svg-container d4r-mb-2 d4r-mt-6 d4r-flex d4r-items-center d4r-gap-2">
		<Text contrast="lower"><Components /></Text>
		<Text weight="semibold" size="sm">Components</Text>
	</div>
	<DrawerLink
		{...getDrawerLinkProps('/docs/button', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Button
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/text-field', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		TextField
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/slider', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Slider
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/select', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Select
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/checkbox', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Checkbox
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/text', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Text
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/dialog', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Dialog
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/modal', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Modal
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/progress-bar', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		ProgressBar
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/meter', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Meter
	</DrawerLink>

	<div class="svg-container d4r-mb-2 d4r-mt-6 d4r-flex d4r-items-center d4r-gap-2">
		<Text contrast="lower"><Bulb /></Text>
		<Text weight="semibold" size="sm">Concepts</Text>
	</div>
	<DrawerLink
		{...getDrawerLinkProps('/docs/theming', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Theming
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/colors', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Colors
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/icons', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Icons
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/styling', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Styling
	</DrawerLink>
	<DrawerLink
		{...getDrawerLinkProps('/docs/dark-mode', $page.route.id)}
		on:click={handleDrawerLinkClick}
	>
		Dark Mode
	</DrawerLink>
</Drawer>
