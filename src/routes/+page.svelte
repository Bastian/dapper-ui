<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Text from '$lib/Text.svelte';
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
	<Button color="neutral" class="my-8" on:click={toggleDarkMode}>Toogle Dark Mode</Button>
</div>
<div class="space-y-8">
	<SliderExample />
	<ButtonExample />
	<TextFieldExample />
	<SelectExample />
	<TextExample />

	<div class="space-y-2">
		<Text size="lg" weight="medium">Dark Color Palette</Text>
		<div class="flex gap-1 bg-white p-8 dark:bg-dark-800">
			<div class="h-16 w-16 rounded bg-dark-900 shadow" />
			<div class="h-16 w-16 rounded bg-dark-800 shadow" />
			<div class="h-16 w-16 rounded bg-dark-700 shadow" />
			<div class="h-16 w-16 rounded bg-dark-600 shadow" />
			<div class="h-16 w-16 rounded bg-dark-500 shadow" />
			<div class="h-16 w-16 rounded bg-dark-400 shadow" />
			<div class="h-16 w-16 rounded bg-dark-300 shadow" />
			<div class="h-16 w-16 rounded bg-dark-200 shadow" />
			<div class="h-16 w-16 rounded bg-dark-100 shadow" />
			<div class="h-16 w-16 rounded bg-dark-50 shadow" />
		</div>
	</div>

	<div class="mt-16 text-center"><Text>Login Form Example:</Text></div>
	<LoginForm />
</div>
