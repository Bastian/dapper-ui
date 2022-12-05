<script lang="ts">
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import { createCode } from '$lib/helpers/createCode';
	import Select from '$lib/select/Select.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import Text from '$lib/Text.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';

	let content = 'Dapper UI is amazing!';
	let color: string | undefined = undefined;
	let contrast: 'high' | 'base' | 'low' | 'lower' | 'lowest' | undefined = 'base';
	let size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
	let truncate = false;

	$: code = createCode({
		name: 'Text',
		children: content,
		props: {
			color,
			contrast,
			size,
			truncate
		}
	});
</script>

<Example {code}>
	<Text slot="preview" {color} {contrast} {size} {truncate}>{content}</Text>
	<svelte:fragment slot="controls">
		<div>
			<TextField label="Content" bind:value={content} />
		</div>
		<Select label="Contrast" bind:value={contrast}>
			<option value="high">High</option>
			<option value="base">Base</option>
			<option value="low">Low</option>
			<option value="lower">Lower</option>
			<option value="lowest">Lowest</option>
		</Select>
		<Select label="Size" bind:value={size}>
			<option value="xs">XS</option>
			<option value="sm">SM</option>
			<option value="base">Base</option>
			<option value="lg">LG</option>
			<option value="xl">XL</option>
		</Select>
		<ColorPicker bind:color />
		<Checkbox bind:checked={truncate}>Truncate</Checkbox>
	</svelte:fragment>
</Example>
