<script lang="ts">
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import { getTheme } from '$lib/getTheme';
	import { createCode } from '../../doc-components/helpers/createCode';
	import Select from '$lib/components/select/Select.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';
	import RadiusSlider from './RadiusSlider.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';

	const theme = getTheme();

	let disabled = false;
	let color: string | undefined = undefined;
	export let size: 'sm' | 'base' = 'base';
	export let radius: Radius = $theme.radiuses.input;

	$: code = createCode({
		name: 'Select',
		children: [
			createCode({ name: 'option', props: { value: 'apple' }, children: 'Apple', compact: true }),
			createCode({
				name: 'option',
				props: { value: 'banana' },
				children: 'Bananna',
				compact: true
			}),
			createCode({ name: 'option', props: { value: 'orange' }, children: 'Orange', compact: true })
		],
		props: {
			label: 'Favorite Fruit',
			disabled,
			color,
			size: size === 'base' ? undefined : size,
			radius: radius === $theme.radiuses.input ? undefined : radius
		}
	});
</script>

<Example title="Select" {code}>
	<Select label="Favorite Fruit" slot="preview" {disabled} {color} {size} {radius}>
		<option value="apple">Apple</option>
		<option value="banana">Bananna</option>
		<option value="orange">Orange</option>
	</Select>

	<svelte:fragment slot="controls">
		<Select label="Size" bind:value={size}>
			<option value="base">Base</option>
			<option value="sm">Small</option>
		</Select>

		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
		<Checkbox bind:checked={disabled}>Disabled</Checkbox>
	</svelte:fragment>
</Example>
