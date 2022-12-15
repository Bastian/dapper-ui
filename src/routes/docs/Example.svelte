<script lang="ts">
	import StyledCodeBlock from '../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from './DocBox.svelte';
	import DocSection from './DocSection.svelte';

	export let title: string | undefined = undefined;
	export let code = '';
</script>

<DocSection {title}>
	<slot slot="description" name="description" />
	<div>
		<div class="d4r-flex d4r-flex-col md:d4r-flex-row">
			<DocBox
				class="d4r-flex d4r-w-full d4r-items-center d4r-justify-center d4r-rounded-b-none d4r-p-8 md:d4r-rounded-tr-none"
			>
				<slot name="preview" />
			</DocBox>
			{#if $$slots['controls']}
				<DocBox
					class="d4r-shrink-0 d4r-space-y-1 d4r-rounded-t-none d4r-rounded-b-none d4r-border-t-0 d4r-p-8 md:d4r-w-[450px] md:d4r-rounded-tl-none md:d4r-rounded-tr md:d4r-border-l-0 md:d4r-border-t"
				>
					<div class="d4r-space-y-4">
						<slot name="controls" />
					</div>
				</DocBox>
			{/if}
		</div>
		<DocBox
			class="d4r-rounded-t-none d4r-border-t-0 !d4r-bg-neutral-50 d4r-p-4 dark:!d4r-bg-dark-800"
		>
			<StyledCodeBlock language="xml" {code} />
		</DocBox>
	</div>
</DocSection>
