<script lang="ts">
	import { createCode } from '$lib/helpers/createCode';
	import Slider from '$lib/slider/Slider.svelte';
	import type { Radius } from '$lib/ThemeProvider.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';
	import RadiusSlider from './RadiusSlider.svelte';

	let color: string | undefined = undefined;
	let radius: Radius = 'full';

	$: code = createCode({
		name: 'Slider',
		props: {
			label: 'Example',
			color,
			radius
		}
	});
</script>

<Example title="Slider" {code}>
	<Slider label="Example" slot="preview" {color} {radius} />
	<svelte:fragment slot="controls">
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
	</svelte:fragment>
</Example>
