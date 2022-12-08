<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import { getTheme } from '$lib/getTheme';
	import { createCode } from '$lib/helpers/createCode';
	import Select from '$lib/select/Select.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import type { Radius } from '$lib/ThemeProvider.svelte';
	import { ClipboardCheck } from 'tabler-icons-svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Example from './Example.svelte';
	import RadiusSlider from './RadiusSlider.svelte';

	const theme = getTheme();

	let content = 'Confirm';
	let disabled = false;
	let iconStart = false;
	let iconEnd = false;
	let color: string | undefined = undefined;
	let variant: 'solid' | 'outline' = 'solid';
	export let size: 'sm' | 'base' = 'base';

	let radius: Radius = $theme.radiuses.button;

	$: code = createCode({
		name: 'Button',
		children: [
			iconStart ? createCode({ name: 'ClipboardCheck', props: { slot: 'icon-start' } }) : undefined,
			content,
			iconEnd ? createCode({ name: 'ClipboardCheck', props: { slot: 'icon-end' } }) : undefined
		],
		props: {
			disabled,
			color,
			variant: variant === 'solid' ? undefined : variant,
			size: size === 'base' ? undefined : size,
			radius: radius === $theme.radiuses.button ? undefined : radius
		}
	});
</script>

<Example title="Button" {code}>
	<svelte:fragment slot="preview">
		<!-- Workaround until https://github.com/sveltejs/rfcs/pull/641 gets solved -->
		{#if !iconStart && !iconEnd}
			<Button {variant} {disabled} {color} {size} {radius}>{content}</Button>
		{/if}
		{#if iconStart && !iconEnd}
			<Button {variant} {disabled} {color} {size} {radius}>
				<ClipboardCheck slot="icon-start" />
				{content}
			</Button>
		{/if}
		{#if !iconStart && iconEnd}
			<Button {variant} {disabled} {color} {size} {radius}>
				{content}
				<ClipboardCheck slot="icon-end" />
			</Button>
		{/if}
		{#if iconStart && iconEnd}
			<Button {variant} {disabled} {color} {size} {radius}>
				<ClipboardCheck slot="icon-start" />
				{content}
				<ClipboardCheck slot="icon-end" />
			</Button>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="controls">
		<div><TextField id="wefewf" label="Content" bind:value={content} /></div>
		<Select label="Variant" bind:value={variant}>
			<option value="solid">Solid</option>
			<option value="outline">Outline</option>
		</Select>
		<Select label="Size" bind:value={size}>
			<option value="base">Base</option>
			<option value="sm">Small</option>
		</Select>
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
		<div class="space-y-1">
			<Checkbox bind:checked={disabled}>Disabled</Checkbox>
			<Checkbox bind:checked={iconStart}>Icon Start</Checkbox>
			<Checkbox bind:checked={iconEnd}>Icon End</Checkbox>
		</div>
	</svelte:fragment>
</Example>
