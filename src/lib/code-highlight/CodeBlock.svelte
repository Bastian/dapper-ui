<script lang="ts">
	import './highlight.css';
	import CodeHighlightWorker from '$lib/code-highlight/CodeHighlightWorker?worker&inline';
	import dedentFunction from 'dedent';
	import { onDestroy } from 'svelte';
	let className = '';
	export { className as class };
	export let code: string;
	export let language: string | undefined = undefined;
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

<div class={className}>
	<pre class="d4r-overflow-x d4r-text-sm"><code class="hljs d4r-rounded-lg"
			>{#if highlighted}{@html highlighted}{:else}{noDedent
					? code
					: dedentFunction(code)}{/if}</code
		></pre>
</div>
