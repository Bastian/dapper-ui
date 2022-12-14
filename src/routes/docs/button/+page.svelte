<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IconButton from '$lib/components/icon-button/IconButton.svelte';
	import CodeBlock from '../../../doc-components/code-highlight/CodeBlock.svelte';
	import type { ComponentProps } from 'svelte';
	import DocSection from '../DocSection.svelte';
	import ButtonExample from './ButtonExample.svelte';
	import IconButtonExample from './IconButtonExample.svelte';
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import Text from '$lib/components/text/Text.svelte';

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

	<div class="d4r-space-y-2">
		<Text tag="h3" size="lg" weight="medium">Gradients</Text>
		<Text tag="div" class="d4r-pb-1" contrast="lower" prose>
			Buttons with the <code>gradient</code> variant can be used to display gradients by passing a
			<code>gradient</code> prop. This prop can either be a raw CSS gradient string or an object
			with <code>from</code> and <code>to</code> fields. These fields can take a color name, in
			which case the 600 shade will be used, or an array tuple with a color name and shade. It's
			recommended setting the <code>color</code> prop as well, as it will be used for the outline color
			when the button is selected.
		</Text>
		<div class="d4r-flex d4r-gap-2">
			<Button variant="gradient" gradient="radial-gradient(#f71600, #ffc135)">CSS Gradient</Button>
			<Button variant="gradient" gradient={{ from: 'cyan', to: 'violet' }}>Object Gradient</Button>
			<Button variant="gradient" gradient={{ from: ['cyan', 100], to: ['violet', 900] }}>
				Object Gradient With Shades
			</Button>
		</div>
		<StyledCodeBlock
			class="d4r-bg-neutral-50 dark:d4r-bg-dark-800"
			code={`<Button variant="gradient" gradient="radial-gradient(#f71600, #ffc135)">Gradient</Button>
<Button variant="gradient" gradient={{ from: "cyan", to: "violet" }}>Object Gradient</Button>
<Button variant="gradient" gradient={{ from: ["cyan", 100], to: ["violet", 900] }}>Object Gradient With Shades</Button>`}
		/>
	</div>

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
