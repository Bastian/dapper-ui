<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import ToggleDarkModeButton from '../ToggleDarkModeButton.svelte';
	import ButtonExample from './ButtonExample.svelte';
	import LoginForm from './LoginForm.svelte';
	import SelectExample from './SelectExample.svelte';
	import SliderExample from './SliderExample.svelte';
	import TextExample from './TextExample.svelte';
	import TextFieldExample from './TextFieldExample.svelte';
</script>

<ToggleDarkModeButton />

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
