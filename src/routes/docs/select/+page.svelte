<script lang="ts">
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';
	import SelectExample from './SelectExample.svelte';

	export let data: PageData;
</script>

<DocTitle title="Select" />
<DocImport what="Select" from="core" />
<DocIntoText text="The Select component allows users to choose from a list of options." />

<DocContent>
	<SelectExample />

	<PropsSection data={data.docs} />
</DocContent>
