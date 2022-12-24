<script>
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import SelectExample from './SelectExample.svelte';
</script>

<DocTitle title="Select" />
<DocImport what="Select" from="core" />
<DocIntoText text="The Select component allows users to choose from a list of options." />

<DocContent>
	<SelectExample />
</DocContent>
