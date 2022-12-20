<script lang="ts">
	import CodeBlock from '../../doc-components/code-highlight/CodeBlock.svelte';

	export let from: string;
	export let what: string | string[];
</script>

<div class="d4r-my-4">
	<CodeBlock
		code={`import { ${Array.isArray(what) ? what.join(', ') : what} } from "@dapper-ui/${from}";`}
	/>
</div>
