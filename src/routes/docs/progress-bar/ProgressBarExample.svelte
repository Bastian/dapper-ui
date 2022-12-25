<script lang="ts">
	import { Checkbox, getTheme, ProgressBar, Slider, TextField } from '$lib';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';

	const theme = getTheme();

	let label = 'Example';
	let hideLabel = false;

	let value = 25;
	let indeterminate = false;

	let color: string | undefined = undefined;
	export let radius: Radius = $theme.radiuses.progressBar;

	$: code = createCode({
		name: 'ProgressBar',
		props: {
			value: indeterminate ? undefined : value,
			label,
			hideLabel,
			indeterminate,
			color,
			radius: radius === $theme.radiuses.progressBar ? undefined : radius
		}
	});
</script>

<Example title="Demo" {code}>
	<ProgressBar {label} {hideLabel} slot="preview" {value} {indeterminate} {radius} {color} />

	<svelte:fragment slot="controls">
		<div>
			<TextField label="Label" bind:value={label} />
		</div>
		<Slider disabled={indeterminate} label="Value" bind:value />
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
		<div class="d4r-space-y-2.5 lg:d4r-space-y-1.5">
			<Checkbox label="Indeterminate" bind:checked={indeterminate} />
			<Checkbox label="Hide Label" bind:checked={hideLabel} />
		</div>
	</svelte:fragment>
</Example>
