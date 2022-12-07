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
		document.documentElement.classList.toggle('d4r-dark');
	}
</script>

<div class="d4r-flex d4r-items-end d4r-justify-end">
	<Button color="neutral" class="d4r-my-8" on:click={toggleDarkMode}>Toogle Dark Mode</Button>
</div>
<div class="d4r-space-y-8">
	<SliderExample />
	<ButtonExample />
	<TextFieldExample />
	<SelectExample />
	<TextExample />

	<div class="d4r-space-y-2">
		<Text size="lg" weight="medium">Dark Color Palette</Text>
		<div class="d4r-flex d4r-gap-1 d4r-bg-white d4r-p-8 dark:d4r-bg-dark-800">
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-900 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-800 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-700 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-600 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-500 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-400 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-300 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-200 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-100 d4r-shadow" />
			<div class="d4r-h-16 d4r-w-16 d4r-rounded d4r-bg-dark-50 d4r-shadow" />
		</div>
	</div>

	<div class="d4r-mt-16 d4r-text-center"><Text>Login Form Example:</Text></div>
	<LoginForm />
</div>
