<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import { Dialog, DialogHeader, DialogContent, DialogActions, Button } from '$lib';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
</script>

<Meta title="Misc/Dialog" component={Dialog} />

<Story name="Basic" args={{ open: true }} let:args>
	<ThemeProvider>
		<Dialog {...args}>
			<DialogHeader>Dialog Title</DialogHeader>
			<DialogContent>A very simple dialog with a title, content and buttons.</DialogContent>
			<DialogActions>
				<Button variant="outline" color="gray">Cancel</Button>
				<Button autoFocus>Okay</Button>
			</DialogActions>
		</Dialog>
	</ThemeProvider>
</Story>
