<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { ProgressBar } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Misc/ProgressBar" component={ProgressBar} />

<Story name="Basic" args={{ label: 'Basic', value: 25 }} let:args>
	<ThemeProvider><ProgressBar {...args} /></ThemeProvider>
</Story>

<Story name="Indeterminate" args={{ label: 'Indeterminate', indeterminate: true }} let:args>
	<ThemeProvider><ProgressBar {...args} /></ThemeProvider>
</Story>

<Story name="Colored" args={{ color: 'red' }} let:args>
	<ThemeProvider>
		<div class="d4r-space-y-4">
			<ProgressBar label="Basic" value={25} {...args} />
			<ProgressBar label="Indeterminate" indeterminate {...args} />
		</div>
	</ThemeProvider>
</Story>
