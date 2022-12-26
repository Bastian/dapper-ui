<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { Slider } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Forms/Slider" component={Slider} />

<Story name="Basic" args={{ label: 'Basic' }} let:args>
	<ThemeProvider><Slider {...args} /></ThemeProvider>
</Story>

<Story name="Colored" args={{ label: 'Colored', color: 'red' }} let:args>
	<ThemeProvider><Slider {...args} /></ThemeProvider>
</Story>
