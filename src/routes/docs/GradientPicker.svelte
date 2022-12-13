<script lang="ts" context="module">
	export function gradientToCodeProp(gradient: { from: [string, number]; to: [string, number] }) {
		const from =
			gradient.from[1] === 600
				? `"${gradient.from[0]}"`
				: `["${gradient.from[0]}", ${gradient.from[1]}]`;

		const to =
			gradient.to[1] === 600 ? `"${gradient.to[0]}"` : `["${gradient.to[0]}", ${gradient.to[1]}]`;

		return `{{ from: ${from}, to: ${to} }}`;
	}
</script>

<script lang="ts">
	import type { Shades } from '$lib/colors/color';
	import Slider from '$lib/components/slider/Slider.svelte';
	import ColorPicker from './ColorPicker.svelte';

	export let gradient: { from: [string, Shades]; to: [string, Shades] } = {
		from: ['indigo', 600],
		to: ['sky', 600]
	};
</script>

<ColorPicker label="Gradient From" bind:color={gradient.from[0]} />
<Slider label="Gradient From Shade" bind:value={gradient.from[1]} min={100} max={900} step={100} />
<ColorPicker label="Gradient To" bind:color={gradient.to[0]} />
<Slider label="Gradient To Shade" bind:value={gradient.to[1]} min={100} max={900} step={100} />
