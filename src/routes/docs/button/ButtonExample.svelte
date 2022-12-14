<script lang="ts">
	import type { Shades } from '$lib/colors/color';
	import { Button, Checkbox, Select, TextField, getTheme } from '$lib';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import type { ComponentProps } from 'svelte';
	import { ClipboardCheck } from 'tabler-icons-svelte';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import GradientPicker, { gradientToCodeProp } from '../GradientPicker.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';

	const theme = getTheme();

	let content = 'Confirm';
	let disabled = false;
	let iconStart = false;
	let iconEnd = false;
	let color: string | undefined = undefined;
	let variant: ComponentProps<Button>['variant'] = 'solid';
	export let size: ComponentProps<Button>['size'] = 'base';

	let gradient: { from: [string, Shades]; to: [string, Shades] } = {
		from: ['indigo', 600],
		to: ['sky', 600]
	};

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
			radius: radius === $theme.radiuses.button ? undefined : radius,
			gradient: variant === 'gradient' ? gradientToCodeProp(gradient) : undefined
		}
	});
</script>

<Example title="Demo" {code}>
	<svelte:fragment slot="preview">
		<!-- Workaround until https://github.com/sveltejs/rfcs/pull/641 gets solved -->
		{#if !iconStart && !iconEnd}
			<Button class="d4r-transition-all" {variant} {disabled} {color} {size} {radius} {gradient}>
				{content}
			</Button>
		{/if}
		{#if iconStart && !iconEnd}
			<Button {variant} {disabled} {color} {size} {radius} {gradient}>
				<ClipboardCheck slot="icon-start" />
				{content}
			</Button>
		{/if}
		{#if !iconStart && iconEnd}
			<Button {variant} {disabled} {color} {size} {radius} {gradient}>
				{content}
				<ClipboardCheck slot="icon-end" />
			</Button>
		{/if}
		{#if iconStart && iconEnd}
			<Button {variant} {disabled} {color} {size} {radius} {gradient}>
				<ClipboardCheck slot="icon-start" />
				{content}
				<ClipboardCheck slot="icon-end" />
			</Button>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="controls">
		<div>
			<TextField id="button-content" label="Content" bind:value={content} />
		</div>
		<Select label="Variant" bind:value={variant}>
			<option value="solid">Solid</option>
			<option value="outline">Outline</option>
			<option value="outline-dashed">Dashed</option>
			<option value="light">Light</option>
			<option value="subtle">Subtle</option>
			<option value="gradient">Gradient</option>
		</Select>
		<Select label="Size" bind:value={size}>
			<option value="base">Base</option>
			<option value="sm">Small</option>
			<option value="xs">Xs</option>
		</Select>
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
		{#if variant === 'gradient'}
			<GradientPicker bind:gradient />
		{/if}
		<div class="d4r-space-y-2.5 lg:d4r-space-y-1.5">
			<Checkbox label="Disabled" bind:checked={disabled} />
			<Checkbox label="Icon Start" bind:checked={iconStart} />
			<Checkbox label="Icon End" bind:checked={iconEnd} />
		</div>
	</svelte:fragment>
</Example>
