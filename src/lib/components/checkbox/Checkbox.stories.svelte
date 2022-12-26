<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { Checkbox } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Forms/Checkbox" component={Checkbox} />

<Story name="Basic" args={{ label: 'Basic' }} let:args>
	<ThemeProvider><Checkbox {...args} /></ThemeProvider>
</Story>
