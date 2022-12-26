<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { Select } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Forms/Select" component={Select} />

<Story name="Basic" args={{ label: 'Example' }} let:args>
	<ThemeProvider>
		<Select {...args}>
			<option>Option 1</option>
			<option>Option 2</option>
			<option>Option 3</option>
		</Select>
	</ThemeProvider>
</Story>
