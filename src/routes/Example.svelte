<script lang="ts">
	import CodeBlock from '$lib/code-highlight/CodeBlock.svelte';
	import Text from '$lib/Text.svelte';

	export let title: string;
	export let code = '';
</script>

<div class="space-y-2">
	<Text size="lg" weight="medium">{title}</Text>
	<div class="flex flex-col border border-gray-200 bg-white dark:border-dark-600 dark:bg-dark-800">
		<div class="flex flex-col md:flex-row">
			<div
				class="flex w-full items-center justify-center rounded border-gray-200 p-8  dark:border-dark-600 md:w-96"
			>
				<slot name="preview" />
			</div>
			<div
				class="space-y-1 border-t border-gray-200 p-8 dark:border-dark-600 md:border-t-0 md:border-l"
			>
				<div class="space-y-4">
					<slot name="controls" />
				</div>
			</div>
		</div>
		<div class="border-t border-gray-200 bg-gray-50 p-4 dark:border-dark-600 dark:bg-dark-800">
			<CodeBlock language="xml" {code} />
		</div>
	</div>
</div>
