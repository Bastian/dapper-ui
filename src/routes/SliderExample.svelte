<script lang="ts">
	import { createCode } from '$lib/helpers/createCode';
	import Slider from '$lib/slider/Slider.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';

	let color: string | undefined = undefined;

	$: code = createCode({
		name: 'Slider',
		props: {
			label: 'Example',
			color
		}
	});
</script>

<Example title="Slider" {code}>
	<Slider label="Example" slot="preview" {color} />
	<svelte:fragment slot="controls">
		<ColorPicker bind:color />
	</svelte:fragment>
</Example>
