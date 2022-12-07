<script lang="ts">
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import { createCode } from '$lib/helpers/createCode';
	import Select from '$lib/select/Select.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import { Bulb } from 'tabler-icons-svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';

	let label = 'Example';
	let disabled = false;
	let color: string | undefined = undefined;
	export let size: 'sm' | 'base' = 'base';

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
			size: size === 'base' ? undefined : size
		}
	});
</script>

<Example title="TextField" {code}>
	<svelte:fragment slot="preview">
		<TextField {label} {color} {size} {disabled}>
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
		<ColorPicker bind:color />
		<div class="d4r-space-y-1">
			<Checkbox bind:checked={disabled}>Disabled</Checkbox>
		</div>
	</svelte:fragment>
</Example>
