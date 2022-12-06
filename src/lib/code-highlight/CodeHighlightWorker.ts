import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import java from 'highlight.js/lib/languages/java';
import kotlin from 'highlight.js/lib/languages/kotlin';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('java', java);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

addEventListener('message', (message: MessageEvent<{ code: string; language?: string }>) => {
	postMessage(
		hljs.highlightAuto(
			message.data.code,
			message.data.language ? [message.data.language] : undefined
		).value
	);
});
