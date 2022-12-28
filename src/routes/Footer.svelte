<script>
	import { base } from '$app/paths';
	import Text from '$lib/components/text/Text.svelte';
</script>

<footer
	class="d4r-flex d4r-flex-col d4r-items-center d4r-justify-center d4r-gap-3 d4r-border-t d4r-border-t-neutral-200 d4r-bg-white d4r-px-8 d4r-py-4 dark:d4r-border-t-dark-600 dark:d4r-bg-dark-800"
>
	<div>
		<Text>© {new Date().getFullYear()} Dapper UI</Text>
	</div>
	<div class="d4r-flex d4r-gap-3">
		<Text contrast="lower" size="sm" tag="a" href="{base}/privacy-policy">Privacy Policy</Text>
		<Text contrast="lower" size="sm" tag="a" href="{base}/imprint">Imprint</Text>
	</div>
</footer>
