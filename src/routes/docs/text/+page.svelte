<script>
	import DocContent from '../DocContent.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import TextExample from './TextExample.svelte';
</script>

<svelte:head>
	<title>Text - Dapper UI</title>
	<meta name="description" content="" />
</svelte:head>

<DocTitle title="Text" />
<DocIntoText
	text="The Text component allows you to customize the font size, weight, color, contrast, and line height to fit your design needs. You can change the HTML tag to optimize the text's semantics and accessibility. This component is particularly useful when using dark mode, as it automatically adjusts the text color to match the current mode."
/>

<DocContent>
	<TextExample />
</DocContent>
