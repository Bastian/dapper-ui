<script lang="ts">
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import { getTheme } from '$lib/getTheme';
	import { createCode } from '../../doc-components/helpers/createCode';
	import Select from '$lib/components/select/Select.svelte';
	import TextField from '$lib/components/text-field/TextField.svelte';
	import { Bulb } from 'tabler-icons-svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';
	import RadiusSlider from './RadiusSlider.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';

	const theme = getTheme();

	let label = 'Example';
	let disabled = false;
	let color: string | undefined = undefined;
	export let size: 'sm' | 'base' = 'base';
	export let radius: Radius = $theme.radiuses.input;

	$: code = createCode({
		name: 'TextField',
		children: createCode({
			name: 'Bulb',
			props: {
				slot: 'icon-label'
			}
		}),
		props: {
			label,
			disabled,
			color,
			size: size === 'base' ? undefined : size,
			radius: radius === $theme.radiuses.input ? undefined : radius
		}
	});
</script>

<Example title="TextField" {code}>
	<svelte:fragment slot="preview">
		<TextField {label} {color} {size} {disabled} {radius}>
			<Bulb slot="icon-label" />
		</TextField>
	</svelte:fragment>

	<svelte:fragment slot="controls">
		<div>
			<TextField label="Label" bind:value={label} />
		</div>
		<Select label="Size" bind:value={size}>
			<option value="base">Base</option>
			<option value="sm">Small</option>
		</Select>
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
		<div class="d4r-space-y-1">
			<Checkbox bind:checked={disabled}>Disabled</Checkbox>
		</div>
	</svelte:fragment>
</Example>
