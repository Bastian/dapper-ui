<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { Button } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Buttons/Button" component={Button} />

<Story name="Solid" let:args>
	<ThemeProvider><Button {...args}>Solid</Button></ThemeProvider>
</Story>

<Story name="Outline" args={{ variant: 'outline' }} let:args>
	<ThemeProvider><Button {...args}>Outline</Button></ThemeProvider>
</Story>

<Story name="Outline Dashed" args={{ variant: 'outline-dashed' }} let:args>
	<ThemeProvider><Button {...args}>Outline Dashed</Button></ThemeProvider>
</Story>

<Story name="Light" args={{ variant: 'light' }} let:args>
	<ThemeProvider><Button {...args}>Light</Button></ThemeProvider>
</Story>

<Story name="Subtle" args={{ variant: 'subtle' }} let:args>
	<ThemeProvider><Button {...args}>Subtle</Button></ThemeProvider>
</Story>

<Story
	name="Gradient"
	args={{ variant: 'gradient', gradient: { from: 'red', to: 'blue' } }}
	let:args
>
	<ThemeProvider><Button {...args}>Gradient</Button></ThemeProvider>
</Story>

<Story name="Colored" args={{ color: 'red' }} let:args>
	<ThemeProvider>
		<Button variant="solid" {...args}>Solid</Button>
		<Button variant="outline" {...args}>Outline</Button>
		<Button variant="outline-dashed" {...args}>Outline Dashed</Button>
		<Button variant="light" {...args}>Light</Button>
		<Button variant="subtle" {...args}>Subtle</Button>
	</ThemeProvider>
</Story>

<Story name="Disabled" args={{ disabled: true }} let:args>
	<ThemeProvider>
		<Button variant="solid" {...args}>Solid</Button>
		<Button variant="outline" {...args}>Outline</Button>
		<Button variant="outline-dashed" {...args}>Outline Dashed</Button>
		<Button variant="light" {...args}>Light</Button>
		<Button variant="subtle" {...args}>Subtle</Button>
	</ThemeProvider>
</Story>

<Story name="Size Small" args={{ size: 'sm' }} let:args>
	<ThemeProvider>
		<Button variant="solid" {...args}>Solid</Button>
		<Button variant="outline" {...args}>Outline</Button>
		<Button variant="outline-dashed" {...args}>Outline Dashed</Button>
		<Button variant="light" {...args}>Light</Button>
		<Button variant="subtle" {...args}>Subtle</Button>
	</ThemeProvider>
</Story>

<Story name="Size XS" args={{ size: 'xs' }} let:args>
	<ThemeProvider>
		<Button variant="solid" {...args}>Solid</Button>
		<Button variant="outline" {...args}>Outline</Button>
		<Button variant="outline-dashed" {...args}>Outline Dashed</Button>
		<Button variant="light" {...args}>Light</Button>
		<Button variant="subtle" {...args}>Subtle</Button>
	</ThemeProvider>
</Story>
