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
</script>

<div class="d4r-flex d4r-h-full d4r-bg-neutral-100 dark:d4r-bg-dark-700">
	<Drawer class="d4r-fixed d4r-h-full ">
		<DrawerLink href="{base}/examples/button">
			<Click slot="icon-start" /> Button
		</DrawerLink>
		<DrawerLink href="{base}/examples/text-field">
			<CursorText slot="icon-start" /> TextField
		</DrawerLink>
		<DrawerLink href="{base}/examples/slider">
			<AdjustmentsHorizontal slot="icon-start" /> Slider
		</DrawerLink>
		<DrawerLink href="{base}/examples/select">
			<Select slot="icon-start" /> Select
		</DrawerLink>
		<DrawerLink href="{base}/examples/checkbox">
			<Checkbox slot="icon-start" /> Checkbox
		</DrawerLink>
		<DrawerLink href="{base}/examples/text">
			<Typography slot="icon-start" /> Text
		</DrawerLink>
	</Drawer>
	<div class="d4r-w-[220px] d4r-shrink-0" />
	<Container center class="d4r-py-16">
		<slot />
	</Container>
</div>
