<script>
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import SliderExample from './SliderExample.svelte';
	import PropTable from '../../../doc-components/prop-table/PropTable.svelte';
	import SliderSrc from '$lib/components/slider/Slider.svelte?raw';
	import DocSection from '../DocSection.svelte';
</script>

<DocTitle title="Slider" />
<DocImport what="Slider" from="core" />
<DocIntoText
	text="The Slider component allows users to set a number value by sliding a handle (thumb) along a horizontal or vertical track."
/>

<DocContent>
	<SliderExample />

	<DocSection title="Props">
		<PropTable componentSrc={SliderSrc} />
	</DocSection>
</DocContent>
