<script lang="ts">
	import { Checkbox, getTheme, Meter, Slider, TextField } from '$lib';
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import AccordionHeader from '$lib/components/accordion/AccordionHeader.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { createCode } from '../../../doc-components/helpers/createCode';
	import ColorPicker from '../ColorPicker.svelte';
	import Example from '../Example.svelte';
	import RadiusSlider from '../RadiusSlider.svelte';

	const theme = getTheme();

	let title = 'Example';
	let hideLabel = false;

	let value = 25;

	let color: string | undefined = undefined;
	export let radius: Radius = $theme.radiuses.progressBar;

	$: code = createCode({
		name: 'Accordion',
		props: {
			title,
			color,
			radius: radius === $theme.radiuses.progressBar ? undefined : radius
		}
	});
</script>

<Example title="Demo" {code}>
	<Accordion slot="preview">
		<AccordionHeader slot="header">
			<Text contrast="highest">{title}</Text>
		</AccordionHeader>

		<Text>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
			justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet.
		</Text>
	</Accordion>

	<svelte:fragment slot="controls">
		<div>
			<TextField label="Title" bind:value={title} />
		</div>
		<Slider label="Value" bind:value />
		<div>
			<RadiusSlider bind:radius />
		</div>
		<ColorPicker bind:color />
		<div class="d4r-space-y-2.5 lg:d4r-space-y-1.5">
			<Checkbox label="Hide Label" bind:checked={hideLabel} />
		</div>
	</svelte:fragment>
</Example>
