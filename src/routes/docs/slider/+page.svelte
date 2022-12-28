<script lang="ts">
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';
	import SliderExample from './SliderExample.svelte';

	export let data: PageData;
</script>

<DocTitle title="Slider" />
<DocImport what="Slider" from="core" />
<DocIntoText
	text="The Slider component allows users to set a number value by sliding a handle (thumb) along a horizontal or vertical track."
/>

<DocContent>
	<SliderExample />

	<PropsSection data={data.docs} />
</DocContent>
