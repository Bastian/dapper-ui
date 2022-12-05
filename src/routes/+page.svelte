<script lang="ts">
	import Button from '$lib/Button.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import ButtonExample from './ButtonExample.svelte';
	import LoginForm from './LoginForm.svelte';
	import SelectExample from './SelectExample.svelte';
	import SliderExample from './SliderExample.svelte';
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
	<SliderExample />
	<ButtonExample />
	<TextFieldExample />
	<SelectExample />
	<TextExample />

	<div class="mt-16 text-center">Login Form Example:</div>
	<LoginForm />

	<div class="mt-16 text-center">Button Example:</div>
	<div class="flex items-end">
		<TextField label="Hi" />
		<Button>Hi</Button>
	</div>
	<div class="flex items-end">
		<TextField size="sm" label="Hi" />
		<Button size="sm">Hi</Button>
	</div>
</div>
