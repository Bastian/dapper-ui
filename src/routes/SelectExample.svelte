<script lang="ts">
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import { createCode } from '$lib/helpers/createCode';
	import Select from '$lib/select/Select.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';

	let disabled = false;
	let color: string | undefined = undefined;
	export let size: 'sm' | 'base' = 'base';

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
			size
		}
	});
</script>

<Example {code}>
	<Select label="Favorite Fruit" slot="preview" {disabled} {color} {size}>
		<option value="apple">Apple</option>
		<option value="banana">Bananna</option>
		<option value="orange">Orange</option>
	</Select>

	<svelte:fragment slot="controls">
		<Select label="Size" bind:value={size}>
			<option value="base">Base</option>
			<option value="sm">Small</option>
		</Select>
		<ColorPicker bind:color />
		<Checkbox bind:checked={disabled}>Disabled</Checkbox>
	</svelte:fragment>
</Example>
