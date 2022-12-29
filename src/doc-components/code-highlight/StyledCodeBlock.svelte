<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';

	let className = '';
	export { className as class };
	export let code: string;
	export let language: string | undefined = undefined;
	/**
	 * Whether or not auto-dedent should be enabled
	 * (i.e., if trailing spaces should be removed).
	 */
	export let noDedent = true;
</script>

<div class="d4r-flex d4r-items-start d4r-gap-2 {className}">
	<div
		class="d4r-mt-2 d4r-select-none d4r-border-r d4r-border-neutral-200 d4r-px-4 d4r-text-right d4r-text-neutral-500 dark:d4r-border-dark-600"
	>
		<pre><code class="language-{language}"
				>{[...Array(code.split('\n').length)].map((_, i) => `${i + 1}`).join('\n')}</code
			></pre>
	</div>
	<div class="d4r-overflow-x-auto">
		<CodeBlock class="d4r-py-2" {language} {code} {noDedent} />
	</div>
</div>
