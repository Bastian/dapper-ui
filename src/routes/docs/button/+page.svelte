<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IconButton from '$lib/components/icon-button/IconButton.svelte';
	import type { ComponentProps } from 'svelte';
	import DocSection from '../DocSection.svelte';
	import ButtonExample from './ButtonExample.svelte';
	import IconButtonExample from './IconButtonExample.svelte';

	// For the icon button list, gradient is omitted
	const variants: ComponentProps<IconButton>['variant'][] = [
		'solid',
		'outline',
		'outline-dashed',
		'light',
		'subtle'
	];
</script>

<svelte:head>
	<title>Button - Dapper UI</title>
	<meta
		name="description"
		content="Documentation for the Button component of Dapper UI. A sleek and modern UI component library for Svelte."
	/>
</svelte:head>

<div class="d4r-space-y-16">
	<ButtonExample />

	<DocSection title="Variants">
		<div class="d4r-flex d4r-flex-wrap d4r-items-center d4r-justify-center d4r-gap-4 d4r-p-8">
			<Button>Solid</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="outline-dashed">Dashed</Button>
			<Button variant="light">Light</Button>
			<Button variant="subtle">Subtle</Button>
			<Button variant="gradient" gradient={{ from: 'indigo', to: 'sky' }}>Gradient</Button>
		</div>
	</DocSection>

	<IconButtonExample />

	<DocSection title="Colors" class="d4r-space-y-2 d4r-p-8">
		<span slot="description">
			The default color palette of Dapper UI is a replica of TailwindCSS's color palette. You can
			see it in action below.
		</span>
		{#each variants as variant}
			<div class="d4r-flex d4r-flex-wrap d4r-items-center d4r-justify-center d4r-gap-1">
				{#each ['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'] as c}
					<IconButton label="Example" size="xs" {variant} color={c}>✓</IconButton>
				{/each}
			</div>
		{/each}
	</DocSection>
</div>
