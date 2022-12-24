<script>
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import CheckboxExample from './CheckboxExample.svelte';
</script>

<DocTitle title="Checkbox" />
<DocImport what="Checkbox" from="core" />
<DocIntoText text="The Checkbox component allows users to select a boolean value." />

<DocContent>
	<CheckboxExample />
</DocContent>
