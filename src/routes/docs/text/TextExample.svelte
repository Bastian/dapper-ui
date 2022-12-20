<script lang="ts">
	import { createCode } from '../../../doc-components/helpers/createCode';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import type { ComponentProps } from 'svelte';
	import { Select, TextField, Text, Slider, Checkbox } from '$lib';

	let content = 'Dapper UI is amazing!';
	let color: ComponentProps<Text>['color'] = undefined;

	let tag: ComponentProps<Text>['tag'] = 'span';

	let contrastNum = 3;
	let contrast: ComponentProps<Text>['contrast'] = 'base';
	$: contrast = (['lowest', 'lower', 'low', 'base', 'high', 'higher', 'highest'] as const)[
		contrastNum
	];
	let truncate = false;

	let sizeNum = 2;
	let size: ComponentProps<Text>['size'] = 'base';
	$: size = (
		[
			'xs',
			'sm',
			'base',
			'lg',
			'xl',
			'2xl',
			'3xl',
			'4xl',
			'5xl',
			'6xl',
			'7xl',
			'8xl',
			'9xl'
		] as const
	)[sizeNum];

	$: code = createCode({
		name: 'Text',
		children: content,
		props: {
			tag: tag === 'span' ? undefined : tag,
			color,
			contrast: contrast === 'base' ? undefined : contrast,
			size: size === 'base' ? undefined : size,
			truncate
		}
	});
</script>

<Example title="Demo" {code}>
	<Text slot="preview" {tag} {color} {contrast} {size} {truncate}>{content}</Text>
	<svelte:fragment slot="controls">
		<div>
			<TextField label="Content" bind:value={content} />
		</div>
		<Select label="Tag" bind:value={tag}>
			<option value="span">span</option>
			<option value="div">div</option>
			<option value="p">p</option>
			<option value="h1">h1</option>
			<option value="h2">h2</option>
			<option value="h3">h3</option>
			<option value="h4">h4</option>
			<option value="h5">h5</option>
			<option value="h6">h6</option>
		</Select>
		<div>
			<Slider label="Contrast" bind:value={contrastNum} min={0} max={6} />
		</div>
		<div>
			<Slider label="Size" bind:value={sizeNum} min={0} max={12} />
		</div>
		<ColorPicker bind:color />
		<div class="d4r-space-y-2.5 lg:d4r-space-y-1.5">
			<Checkbox label="Truncate" bind:checked={truncate} />
		</div>
	</svelte:fragment>
</Example>
