<script>
	import { Button, Dialog, DialogActions, DialogContent, DialogHeader, Checkbox } from '$lib';
	import { onMount } from 'svelte';

	let open = false;
	onMount(() => {
		if (localStorage.getItem('dontShowWorkInProgressWarning') !== 'true') {
			open = true;
		}
	});

	let dontShowAgain = false;

	$: {
		if (open === false && dontShowAgain) {
			localStorage.setItem('dontShowWorkInProgressWarning', 'true');
		}
	}
</script>

<Dialog bind:open>
	<DialogHeader>Work In Progress</DialogHeader>
	<DialogContent>
		Please note that Dapper UI is still in the early stages of development and, as such, it is not
		yet recommended for use in production environments. While the majority of documented components
		are stable, there may be occasional breaking changes or minor UI updates.
		<br /><br />
		Despite this, you are welcome to try out Dapper UI on non-critical projects and provide feedback.
		Your input is greatly appreciated as the functionality and documentation are constantly being improved.
		<br /><br />
		<Checkbox bind:checked={dontShowAgain} label="Don't show this again" />
	</DialogContent>
	<DialogActions>
		<Button autoFocus on:click={() => (open = false)}>Okay</Button>
	</DialogActions>
</Dialog>
