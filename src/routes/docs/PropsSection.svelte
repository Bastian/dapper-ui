<script lang="ts">
	import Text from '$lib/components/text/Text.svelte';
	import PropTable from '../../doc-components/prop-table/PropTable.svelte';
	import type { ParsedComponentProp } from '../../util/parse-component-src';
	import DocSection from './DocSection.svelte';

	export let data: Array<{
		name: string;
		docs: { props?: Array<ParsedComponentProp> };
	}>;
</script>

<DocSection title="Props">
	{#each data as doc}
		<div class="!d4r-mt-2 d4r-mb-10 d4r-space-y-2">
			<Text weight="bold" tag="h3">{doc.name}</Text>
			{#if doc.docs.props}
				<PropTable parsed={doc.docs.props} />
			{/if}
		</div>
	{/each}
</DocSection>
