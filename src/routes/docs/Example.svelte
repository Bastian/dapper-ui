<script lang="ts">
	import StyledCodeBlock from '../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocSection from './DocSection.svelte';

	export let title: string;
	export let code = '';
</script>

<DocSection {title}>
	<slot slot="description" name="description" />
	<div class="d4r-flex d4r-flex-col md:d4r-flex-row">
		<div
			class="d4r-flex d4r-w-full d4r-items-center d4r-justify-center d4r-overflow-hidden d4r-rounded d4r-border-neutral-200 d4r-p-8 dark:d4r-border-dark-600"
		>
			<slot name="preview" />
		</div>
		<div
			class="d4r-shrink-0 d4r-space-y-1 d4r-border-t d4r-border-neutral-200 d4r-p-8 dark:d4r-border-dark-600 md:d4r-w-[450px] md:d4r-border-t-0 md:d4r-border-l"
		>
			<div class="d4r-space-y-4">
				<slot name="controls" />
			</div>
		</div>
	</div>
	<div
		class="d4r-border-t d4r-border-neutral-200 d4r-bg-neutral-50 d4r-p-4 dark:d4r-border-dark-600 dark:d4r-bg-dark-800"
	>
		<StyledCodeBlock language="xml" {code} />
	</div>
</DocSection>
