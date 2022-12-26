<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { TextField } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Forms/TextField" component={TextField} />

<Story name="Basic" args={{ label: 'Basic' }} let:args>
	<ThemeProvider><TextField {...args} /></ThemeProvider>
</Story>
