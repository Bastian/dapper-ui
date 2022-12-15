<script lang="ts">
	import DocSectionText from './DocSectionText.svelte';
	import DocSectionTitle from './DocSectionTitle.svelte';

	let className = '';
	export { className as class };

	export let title: string | undefined;
</script>

<article class="d4r-space-y-2 {className}">
	{#if title}
		<DocSectionTitle>{title}</DocSectionTitle>
	{/if}
	<DocSectionText>
		<slot name="description" />
	</DocSectionText>
	<slot />
</article>
