<script lang="ts">
	import CodeBlock from '$lib/code-highlight/CodeBlock.svelte';
	import Text from '$lib/Text.svelte';

	export let title: string;
	export let code = '';
</script>

<div class="d4r-space-y-2">
	<Text size="lg" weight="medium">{title}</Text>
	<div
		class="d4r-flex d4r-flex-col d4r-border d4r-border-neutral-200 d4r-bg-white dark:d4r-border-dark-600 dark:d4r-bg-dark-800"
	>
		<div class="d4r-flex d4r-flex-col md:d4r-flex-row">
			<div
				class="d4r-flex d4r-w-full d4r-items-center d4r-justify-center d4r-rounded d4r-border-neutral-200 d4r-p-8 dark:d4r-border-dark-600 md:d4r-w-96"
			>
				<slot name="preview" />
			</div>
			<div
				class="d4r-space-y-1 d4r-border-t d4r-border-neutral-200 d4r-p-8 dark:d4r-border-dark-600 md:d4r-border-t-0 md:d4r-border-l"
			>
				<div class="d4r-space-y-4">
					<slot name="controls" />
				</div>
			</div>
		</div>
		<div
			class="d4r-border-t d4r-border-neutral-200 d4r-bg-neutral-50 d4r-p-4 dark:d4r-border-dark-600 dark:d4r-bg-dark-800"
		>
			<CodeBlock language="xml" {code} />
		</div>
	</div>
</div>
