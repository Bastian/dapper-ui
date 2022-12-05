<script lang="ts">
	import Button from '$lib/Button.svelte';
	import ButtonExample from './ButtonExample.svelte';
	import LoginForm from './LoginForm.svelte';
	import SelectExample from './SelectExample.svelte';
	import TextExample from './TextExample.svelte';
	import TextFieldExample from './TextFieldExample.svelte';

	function toggleDarkMode() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<div class="flex items-end justify-end">
	<Button color="gray" class="my-8" on:click={toggleDarkMode}>Toogle Dark Mode</Button>
</div>
<div class="space-y-8">
	<TextFieldExample />
	<SelectExample />
	<ButtonExample />
	<TextExample />
	<LoginForm />
</div>
