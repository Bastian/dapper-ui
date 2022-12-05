<script lang="ts">
	import CodeBlock from '$lib/code-highlight/CodeBlock.svelte';

	export let code = '';
</script>

<div class="flex flex-col border border-gray-200 bg-white dark:border-dark-600 dark:bg-dark-800">
	<div class="flex">
		<div class="flex w-96 items-center justify-center rounded p-8">
			<slot name="preview" />
		</div>
		<div class="space-y-1 border-l border-gray-200 p-8 dark:border-dark-600">
			<div class="space-y-4">
				<slot name="controls" />
			</div>
		</div>
	</div>
	<div class="border-t border-gray-200 bg-gray-50 p-4 dark:border-dark-600 dark:bg-dark-800">
		<CodeBlock language="xml" {code} />
	</div>
</div>
