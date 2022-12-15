<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IconButton from '$lib/components/icon-button/IconButton.svelte';
	import type { ComponentProps } from 'svelte';
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocSectionTitle from '../DocSectionTitle.svelte';
	import DocTitle from '../DocTitle.svelte';
	import Example from '../Example.svelte';
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

<DocTitle title="Button" />
<DocIntoText
	text="The versatile Button component comes in a variety of styles, including solid, outline, light, and subtle, as well as a gradient style. It can also be customized in terms of size and color to fit the needs of any design. Additionally, the Button can function as a link."
/>

<DocContent>
	<ButtonExample />

	<DocSection title="Variants">
		<DocBox class="d4r-flex d4r-flex-wrap d4r-items-center d4r-justify-center d4r-gap-4 d4r-p-8">
			<Button>Solid</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="outline-dashed">Dashed</Button>
			<Button variant="light">Light</Button>
			<Button variant="subtle">Subtle</Button>
			<Button variant="gradient" gradient={{ from: 'indigo', to: 'sky' }}>Gradient</Button>
		</DocBox>
	</DocSection>

	<div class="d4r-space-y-2">
		<DocSectionTitle>Gradients</DocSectionTitle>
		<DocSectionText>
			Buttons with the <code>gradient</code> variant can be used to display gradients by passing a
			<code>gradient</code> prop. This prop can either be a raw CSS gradient string or an object
			with <code>from</code> and <code>to</code> fields. These fields can take a color name, in
			which case the 600 shade will be used, or an array tuple with a color name and shade. It's
			recommended setting the <code>color</code> prop as well, as it will be used for the outline color
			when the button is selected.
		</DocSectionText>
		<Example
			code={`<Button variant="gradient" gradient="radial-gradient(#f71600, #ffc135)">
    Gradient
</Button>
<Button variant="gradient" gradient={{ from: "cyan", to: "violet" }}>
    Object Gradient
</Button>
<Button variant="gradient" gradient={{ from: ["cyan", 100], to: ["violet", 900] }}>
    Object Gradient With Shades
</Button>`}
		>
			<div slot="preview" class="d4r-flex d4r-flex-wrap d4r-gap-2">
				<Button variant="gradient" gradient="radial-gradient(#f71600, #ffc135)">CSS Gradient</Button
				>
				<Button variant="gradient" gradient={{ from: 'cyan', to: 'violet' }}>Object Gradient</Button
				>
				<Button variant="gradient" gradient={{ from: ['cyan', 100], to: ['violet', 900] }}>
					Object Gradient With Shades
				</Button>
			</div>
		</Example>
	</div>

	<div class="d4r-space-y-2">
		<DocSectionTitle>Button as Link</DocSectionTitle>
		<DocSectionText>
			The Button component can be used as a link by passing a <code>href</code> prop. This allows
			you to retain the design of a button while using the <code>a</code> tag for the underlying HTML
			element. This ensures that your link is accessible and offers a better user experience with features
			like the ability to middle click to open in a new tab. Using the Button component in this way allows
			you to have the best of both worlds: a visually appealing button design and the functionality of
			a link.
		</DocSectionText>
		<Example
			code={`<Button href="https://google.com" target="_blank">
    I am a link in disguise!
</Button>`}
		>
			<div slot="preview">
				<Button href="https://google.com" target="_blank">I am a link in disguise!</Button>
			</div>
		</Example>
	</div>

	<IconButtonExample />

	<DocSection title="Colors" class="d4r-space-y-2">
		<span slot="description">
			The default color palette of Dapper UI is a replica of TailwindCSS's color palette. You can
			see it in action below.
		</span>
		<DocBox class="d4r-space-y-2 d4r-p-8">
			{#each variants as variant}
				<div class="d4r-flex d4r-flex-wrap d4r-items-center d4r-justify-center d4r-gap-1">
					{#each ['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'] as c}
						<IconButton label="Example" size="xs" {variant} color={c}>✓</IconButton>
					{/each}
				</div>
			{/each}
		</DocBox>
	</DocSection>
</DocContent>
