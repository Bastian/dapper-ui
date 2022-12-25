<script lang="ts">
	import { Checkbox, getTheme, Meter, Slider, TextField } from '$lib';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';

	const theme = getTheme();

	let label = 'Example';
	let hideLabel = false;

	let value = 25;

	let color: string | undefined = undefined;
	export let radius: Radius = $theme.radiuses.progressBar;

	$: code = createCode({
		name: 'Meter',
		props: {
			value,
			label,
			hideLabel,
			color,
			radius: radius === $theme.radiuses.progressBar ? undefined : radius
		}
	});
</script>

<Example title="Demo" {code}>
	<Meter {label} {hideLabel} slot="preview" {value} {radius} {color} />

	<svelte:fragment slot="controls">
		<div>
			<TextField label="Label" bind:value={label} />
		</div>
		<Slider label="Value" bind:value />
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
		<div class="d4r-space-y-2.5 lg:d4r-space-y-1.5">
			<Checkbox label="Hide Label" bind:checked={hideLabel} />
		</div>
	</svelte:fragment>
</Example>
