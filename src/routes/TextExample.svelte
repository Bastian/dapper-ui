<script lang="ts">
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import { createCode } from '$lib/helpers/createCode';
	import Select from '$lib/select/Select.svelte';
	import Slider from '$lib/slider/Slider.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import Text from '$lib/Text.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';

	let content = 'Dapper UI is amazing!';
	let color: string | undefined = undefined;

	let contrastNum = 3;
	let contrast: 'highest' | 'higher' | 'high' | 'base' | 'low' | 'lower' | 'lowest' | undefined =
		'base';
	$: contrast = (['lowest', 'lower', 'low', 'base', 'high', 'higher', 'highest'] as const)[
		contrastNum
	];
	let truncate = false;

	let sizeNum = 2;
	let size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
	$: size = (['xs', 'sm', 'base', 'lg', 'xl'] as const)[sizeNum];

	$: code = createCode({
		name: 'Text',
		children: content,
		props: {
			color,
			contrast: contrast === 'base' ? undefined : contrast,
			size: size === 'base' ? undefined : size,
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
		<div>
			<Slider label="Contrast" bind:value={contrastNum} min={0} max={6} />
		</div>
		<div>
			<Slider label="Size" bind:value={sizeNum} min={0} max={4} />
		</div>
		<ColorPicker bind:color />
		<Checkbox bind:checked={truncate}>Truncate</Checkbox>
	</svelte:fragment>
</Example>
