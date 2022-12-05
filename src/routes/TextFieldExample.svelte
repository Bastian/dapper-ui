<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import { createCode } from '$lib/helpers/createCode';
	import Select from '$lib/select/Select.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import { Bulb, ClipboardCheck } from 'tabler-icons-svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';

	let label = 'Example';
	let disabled = false;
	let iconStart = false;
	let iconEnd = false;
	let color: string | undefined = undefined;
	let variant: 'solid' | 'outline' = 'solid';
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
			variant,
			size
		}
	});
</script>

<Example {code}>
	<svelte:fragment slot="preview">
		<TextField {label} {color} {disabled}>
			<Bulb slot="icon-label" />
		</TextField>
	</svelte:fragment>

	<svelte:fragment slot="controls">
		<div>
			<TextField label="Label" bind:value={label} />
		</div>
		<Select label="Variant" bind:value={variant}>
			<option value="solid">Solid</option>
			<option value="outline">Outline</option>
		</Select>
		<Select label="Size" bind:value={size}>
			<option value="base">Base</option>
			<option value="sm">Small</option>
		</Select>
		<ColorPicker bind:color />
		<div class="space-y-1">
			<Checkbox bind:checked={disabled}>Disabled</Checkbox>
			<Checkbox bind:checked={iconStart}>Icon Start</Checkbox>
			<Checkbox bind:checked={iconEnd}>Icon End</Checkbox>
		</div>
	</svelte:fragment>
</Example>
