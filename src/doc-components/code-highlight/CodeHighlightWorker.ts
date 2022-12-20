import Prism from 'prismjs';
import 'prism-svelte';
import 'prismjs/components/prism-typescript';

addEventListener('message', (message: MessageEvent<{ code: string; language?: string }>) => {
	// TODO Support other languages
	postMessage(
		Prism.highlight(
			message.data.code,
			Prism.languages[message.data.language ?? 'svelte'],
			message.data.language ?? 'svelte'
		)
	);
});
