<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { IconButton } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Buttons/IconButton" component={IconButton} />

<Story name="Solid" args={{ label: 'Solid' }} let:args>
	<ThemeProvider><IconButton {...args}>X</IconButton></ThemeProvider>
</Story>

<Story name="Outline" args={{ variant: 'outline', label: 'Outline' }} let:args>
	<ThemeProvider><IconButton {...args}>X</IconButton></ThemeProvider>
</Story>

<Story name="Outline Dashed" args={{ variant: 'outline-dashed', label: 'Outline Dashed' }} let:args>
	<ThemeProvider><IconButton {...args}>X</IconButton></ThemeProvider>
</Story>

<Story name="Light" args={{ variant: 'light', label: 'Light' }} let:args>
	<ThemeProvider><IconButton {...args}>X</IconButton></ThemeProvider>
</Story>

<Story name="Subtle" args={{ variant: 'subtle', label: 'Subtle' }} let:args>
	<ThemeProvider><IconButton {...args}>X</IconButton></ThemeProvider>
</Story>

<Story
	name="Gradient"
	args={{ variant: 'gradient', gradient: { from: 'red', to: 'blue' }, label: 'Gradient' }}
	let:args
>
	<ThemeProvider><IconButton {...args}>X</IconButton></ThemeProvider>
</Story>

<Story name="Colored" args={{ color: 'red', label: 'Colored' }} let:args>
	<ThemeProvider>
		<IconButton variant="solid" {...args}>X</IconButton>
		<IconButton variant="outline" {...args}>X</IconButton>
		<IconButton variant="outline-dashed" {...args}>X</IconButton>
		<IconButton variant="light" {...args}>X</IconButton>
		<IconButton variant="subtle" {...args}>X</IconButton>
	</ThemeProvider>
</Story>

<Story name="Disabled" args={{ label: 'Disabled', disabled: true }} let:args>
	<ThemeProvider>
		<IconButton variant="solid" {...args}>X</IconButton>
		<IconButton variant="outline" {...args}>X</IconButton>
		<IconButton variant="outline-dashed" {...args}>X</IconButton>
		<IconButton variant="light" {...args}>X</IconButton>
		<IconButton variant="subtle" {...args}>X</IconButton>
	</ThemeProvider>
</Story>

<Story name="Size 'sm'" args={{ label: "Size 'sm'", size: 'sm' }} let:args>
	<ThemeProvider>
		<IconButton variant="solid" {...args}>X</IconButton>
		<IconButton variant="outline" {...args}>X</IconButton>
		<IconButton variant="outline-dashed" {...args}>X</IconButton>
		<IconButton variant="light" {...args}>X</IconButton>
		<IconButton variant="subtle" {...args}>X</IconButton>
	</ThemeProvider>
</Story>

<Story name="Size 'xs'" args={{ label: "Size 'xs'", size: 'xs' }} let:args>
	<ThemeProvider>
		<IconButton variant="solid" {...args}>X</IconButton>
		<IconButton variant="outline" {...args}>X</IconButton>
		<IconButton variant="outline-dashed" {...args}>X</IconButton>
		<IconButton variant="light" {...args}>X</IconButton>
		<IconButton variant="subtle" {...args}>X</IconButton>
	</ThemeProvider>
</Story>
