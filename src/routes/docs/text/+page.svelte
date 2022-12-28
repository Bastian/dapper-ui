<script lang="ts">
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';
	import TextExample from './TextExample.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Text - Dapper UI</title>
	<meta name="description" content="" />
</svelte:head>

<DocTitle title="Text" />
<DocImport what="Text" from="core" />
<DocIntoText
	text="The Text component allows you to customize the font size, weight, color, contrast, and line height to fit your design needs. You can change the HTML tag to optimize the text's semantics and accessibility. This component is particularly useful when using dark mode, as it automatically adjusts the text color to match the current mode."
/>

<DocContent>
	<TextExample />

	<PropsSection data={data.docs} />
</DocContent>
