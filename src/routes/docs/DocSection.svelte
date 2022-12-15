<script lang="ts">
	import Text from '$lib/components/text/Text.svelte';
	import DocSectionText from './DocSectionText.svelte';
	import DocSectionTitle from './DocSectionTitle.svelte';
	import ElementBox from './ElementBox.svelte';

	let className = '';
	export { className as class };

	export let title: string;
</script>

<article class="d4r-space-y-2">
	<DocSectionTitle>{title}</DocSectionTitle>
	<DocSectionText>
		<slot name="description" />
	</DocSectionText>
	<ElementBox class={className}>
		<slot />
	</ElementBox>
</article>
