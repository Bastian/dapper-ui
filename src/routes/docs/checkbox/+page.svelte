<script lang="ts">
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';
	import CheckboxExample from './CheckboxExample.svelte';

	export let data: PageData;
</script>

<DocTitle title="Checkbox" />
<DocImport what="Checkbox" from="core" />
<DocIntoText text="The Checkbox component allows users to select a boolean value." />

<DocContent>
	<CheckboxExample />

	<PropsSection data={data.docs} />
</DocContent>
