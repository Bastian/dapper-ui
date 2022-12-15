<script lang="ts">
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import { getTheme } from '$lib/getTheme';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import Slider from '$lib/components/slider/Slider.svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';

	const theme = getTheme();

	let color: string | undefined = undefined;
	let radius: Radius = $theme.radiuses.slider.thumb;
	let disabled = false;
	let required = false;

	$: code = createCode({
		name: 'Slider',
		props: {
			label: 'Example',
			color,
			radius: radius === $theme.radiuses.slider.thumb ? undefined : radius,
			disabled,
			required
		}
	});
</script>

<Example title="Demo" {code}>
	<Slider label="Example" slot="preview" {color} {radius} {disabled} {required} />
	<svelte:fragment slot="controls">
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />

		<div class="d4r-space-y-2.5 lg:d4r-space-y-1.5">
			<Checkbox label="Disabled" bind:checked={disabled} />
			<Checkbox label="Required" bind:checked={required} />
		</div>
	</svelte:fragment>
</Example>
