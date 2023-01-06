<script lang="ts">
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocTitle from '../DocTitle.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';
	import AccordionExample from './AccordionExample.svelte';

	export let data: PageData;
</script>

<DocTitle title="Accordion" />
<DocImport what={['Accordion']} from="core" />
<DocIntoText text="tbd." />

<DocContent>
	<AccordionExample />

	<DocSection title="Accessibility + Usability">
		tbd
	</DocSection>

	<PropsSection data={data.docs} />
</DocContent>
