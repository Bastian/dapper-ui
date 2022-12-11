<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import { getTheme } from '$lib/getTheme';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import Select from '$lib/components/select/Select.svelte';
	import TextField from '$lib/components/text-field/TextField.svelte';
	import { ClipboardCheck } from 'tabler-icons-svelte';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import type { ComponentProps } from 'svelte';

	const theme = getTheme();

	let content = 'Confirm';
	let disabled = false;
	let iconStart = false;
	let iconEnd = false;
	let color: string | undefined = undefined;
	let variant: ComponentProps<Button>['variant'] = 'solid';
	export let size: ComponentProps<Button>['size'] = 'base';

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
			<Button class="d4r-transition-all" {variant} {disabled} {color} {size} {radius}>
				{content}
			</Button>
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
		<div>
			<TextField id="button-content" label="Content" bind:value={content} />
		</div>
		<Select label="Variant" bind:value={variant}>
			<option value="solid">Solid</option>
			<option value="outline">Outline</option>
			<option value="outline-dashed">Dashed</option>
			<option value="light">Light</option>
			<option value="subtle">Subtle</option>
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
		<div class="d4r-space-y-1">
			<Checkbox label="Disabled" bind:checked={disabled} />
			<Checkbox label="Icon Start" bind:checked={iconStart} />
			<Checkbox label="Icon End" bind:checked={iconEnd} />
		</div>
	</svelte:fragment>
</Example>
