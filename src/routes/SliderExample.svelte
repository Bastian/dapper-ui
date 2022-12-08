<script lang="ts">
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import { getTheme } from '$lib/getTheme';
	import { createCode } from '../doc-components/helpers/createCode';
	import Slider from '$lib/components/slider/Slider.svelte';
	import type { Radius } from '$lib/ThemeProvider.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';
	import RadiusSlider from './RadiusSlider.svelte';

	const theme = getTheme();

	let color: string | undefined = undefined;
	let radius: Radius = $theme.radiuses.slider.thumb;
	let disabled = false;

	$: code = createCode({
		name: 'Slider',
		props: {
			label: 'Example',
			color,
			radius: radius === $theme.radiuses.slider.thumb ? undefined : radius,
			disabled
		}
	});
</script>

<Example title="Slider" {code}>
	<Slider label="Example" slot="preview" {color} {radius} {disabled} />
	<svelte:fragment slot="controls">
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />

		<div class="d4r-space-y-1">
			<Checkbox bind:checked={disabled}>Disabled</Checkbox>
		</div>
	</svelte:fragment>
</Example>
