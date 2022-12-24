<script lang="ts">
	import { Checkbox, getTheme } from '$lib';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';

	const theme = getTheme();

	let disabled = false;
	let required = false;
	let color: string | undefined = undefined;
	export let radius: Radius = $theme.radiuses.checkbox;

	$: code = createCode({
		name: 'Checkbox',
		props: {
			label: 'Click Me',
			disabled,
			color,
			radius: radius === $theme.radiuses.checkbox ? undefined : radius,
			required
		}
	});
</script>

<Example title="Demo" {code}>
	<Checkbox slot="preview" label="Click Me" {radius} {color} {disabled} {required} />

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
