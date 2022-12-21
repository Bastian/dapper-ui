<script lang="ts">
	import CodeBlock from '../../doc-components/code-highlight/CodeBlock.svelte';

	export let from: string;
	export let what: string | string[];
</script>

<div class="d4r-my-2">
	<CodeBlock
		class="d4r-py-2"
		language="typescript"
		code={`import { ${Array.isArray(what) ? what.join(', ') : what} } from "@dapper-ui/${from}";`}
	/>
</div>
