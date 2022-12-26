<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { Meter } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Misc/Meter" component={Meter} />

<Story name="Basic" args={{ label: 'Basic', value: 25 }} let:args>
	<ThemeProvider><Meter {...args} /></ThemeProvider>
</Story>
