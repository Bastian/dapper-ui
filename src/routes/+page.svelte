<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Select from '$lib/select/Select.svelte';
	import Slider from '$lib/slider/Slider.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import Text from '$lib/Text.svelte';
	import { Bulb, ClipboardCheck } from 'tabler-icons-svelte';
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

	<div class="mt-16 text-center"><Text>Login Form Example:</Text></div>
	<LoginForm />
</div>
