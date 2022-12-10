<script lang="ts">
	import { base } from '$app/paths';
	import Container from '$lib/components/container/Container.svelte';

	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import DrawerLink from '$lib/components/drawer/DrawerLink.svelte';
	import {
		AdjustmentsHorizontal,
		Checkbox,
		Click,
		CursorText,
		Select,
		Typography
	} from 'tabler-icons-svelte';
	import { drawerOpen } from '../+layout.svelte';
</script>

<div class="d4r-flex d4r-bg-neutral-100 dark:d4r-bg-dark-700">
	<Drawer
		open
		class="d4r-fixed d4r-h-full {$drawerOpen
			? ''
			: '-d4r-translate-x-[220px] md:d4r-translate-x-0'}"
	>
		<DrawerLink href="{base}/examples/button" on:click={() => ($drawerOpen = false)}>
			<Click slot="icon-start" /> Button
		</DrawerLink>
		<DrawerLink href="{base}/examples/text-field" on:click={() => ($drawerOpen = false)}>
			<CursorText slot="icon-start" /> TextField
		</DrawerLink>
		<DrawerLink href="{base}/examples/slider" on:click={() => ($drawerOpen = false)}>
			<AdjustmentsHorizontal slot="icon-start" /> Slider
		</DrawerLink>
		<DrawerLink href="{base}/examples/select" on:click={() => ($drawerOpen = false)}>
			<Select slot="icon-start" /> Select
		</DrawerLink>
		<DrawerLink href="{base}/examples/checkbox" on:click={() => ($drawerOpen = false)}>
			<Checkbox slot="icon-start" /> Checkbox
		</DrawerLink>
		<DrawerLink href="{base}/examples/text" on:click={() => ($drawerOpen = false)}>
			<Typography slot="icon-start" /> Text
		</DrawerLink>
	</Drawer>

	<div class="d4r-hidden d4r-w-[220px] d4r-shrink-0 md:d4r-block" />
	<Container center class="d4r-py-8 md:d4r-py-12">
		<slot />
	</Container>
</div>
