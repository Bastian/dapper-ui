<script lang="ts">
	import CodeBlock from '$lib/code-highlight/CodeBlock.svelte';

	export let code = '';
</script>

<div class="flex flex-col border border-gray-200 bg-white dark:border-gray-700 dark:bg-dark-900">
	<div class="flex">
		<div class="flex w-96 items-center justify-center rounded p-8">
			<slot name="preview" />
		</div>
		<div class="space-y-1 border-l border-gray-200 p-8 dark:border-gray-700">
			<div class="space-y-4">
				<slot name="controls" />
			</div>
		</div>
	</div>
	<div class="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-dark-900">
		<CodeBlock language="xml" {code} />
	</div>
</div>
