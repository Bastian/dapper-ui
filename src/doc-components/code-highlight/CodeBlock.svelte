<script lang="ts">
	import './code-dark-theme.css';
	import './code-light-theme.css';
	import CodeHighlightWorker from './CodeHighlightWorker?worker&inline';
	import dedentFunction from 'dedent';
	import { onDestroy } from 'svelte';
	let className = '';
	export { className as class };
	export let code: string;
	export let language: string | undefined = undefined;

	export let allowWrap = false;

	/**
	 * Whether or not auto-dedent should be enabled
	 * (i.e., if trailing spaces should be removed).
	 */
	export let noDedent = true;
	let worker: Worker;
	if (typeof window !== 'undefined') {
		worker = new CodeHighlightWorker();
		worker?.postMessage({
			code: noDedent ? code : dedentFunction(code),
			language
		});
		worker?.addEventListener('message', (message) => {
			highlighted = message.data;
		});
		onDestroy(() => worker.terminate());
	}
	let highlighted: string;
	$: {
		worker?.postMessage({
			code: noDedent ? code : dedentFunction(code),
			language
		});
	}
</script>

<div class="d4r-overflow-x-auto d4r-overflow-y-hidden {className}">
	<svelte:element this={allowWrap ? 'span' : 'pre'}
		><code class="hljs d4r-rounded-lg language-{language} !d4r-p-0"
			>{#if highlighted}{@html highlighted}{:else}{noDedent
					? code
					: dedentFunction(code)}{/if}</code
		></svelte:element
	>
</div>
