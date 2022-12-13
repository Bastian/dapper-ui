<script lang="ts">
	import type { Shades } from '$lib/colors/color';
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import IconButton from '$lib/components/icon-button/IconButton.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import { getTheme } from '$lib/getTheme';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import type { ComponentProps } from 'svelte';
	import { ClipboardCheck } from 'tabler-icons-svelte';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import GradientPicker, { gradientToCodeProp } from '../GradientPicker.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';

	const theme = getTheme();

	let disabled = false;
	let color: string | undefined = undefined;
	let variant: ComponentProps<IconButton>['variant'] = 'subtle';
	export let size: ComponentProps<IconButton>['size'] = 'base';

	let gradient: { from: [string, Shades]; to: [string, Shades] } = {
		from: ['indigo', 600],
		to: ['sky', 600]
	};

	let radius: Radius = $theme.radiuses.button;

	$: code = createCode({
		name: 'IconButton',
		children: [createCode({ name: 'ClipboardCheck' })],
		props: {
			label: 'Example',
			disabled,
			color,
			variant: variant === 'subtle' ? undefined : variant,
			size: size === 'base' ? undefined : size,
			radius: radius === $theme.radiuses.button ? undefined : radius,
			gradient: variant === 'gradient' ? gradientToCodeProp(gradient) : undefined
		}
	});
</script>

<Example title="IconButton" {code}>
	<span slot="description">
		A button that renders a centered icon with no text. It's a wrapper around the Button component
		with an additional label property for accessibility.</span
	>
	<svelte:fragment slot="preview">
		<IconButton label="Example" {variant} {disabled} {color} {size} {radius} {gradient}>
			<ClipboardCheck />
		</IconButton>
	</svelte:fragment>

	<svelte:fragment slot="controls">
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
		</div>
	</svelte:fragment>
</Example>
