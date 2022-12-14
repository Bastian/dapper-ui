<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';
	import './highlight.css';

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
		class="d4r-mt-2 d4r-select-none d4r-border-r d4r-border-neutral-200 d4r-px-4 d4r-text-sm d4r-text-neutral-500 dark:d4r-border-dark-600"
	>
		<pre>{[...Array(code.split('\n').length)].map((_, i) => `${i + 1}`).join('\n')}</pre>
	</div>
	<div class="d4r-overflow-x-auto d4r-py-2">
		<CodeBlock {language} {code} {noDedent} />
	</div>
</div>
