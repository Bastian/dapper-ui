<script>
	import Text from '../text/Text.svelte';

	let className = '';
	export { className as class };
</script>

<Text tag="th" contrast="higher" weight="semibold" class="d4r-th {className}">
	<slot />
</Text>

<style lang="postcss" global>
	.d4r-th {
		@apply d4r-border-b d4r-border-b-neutral-200 d4r-bg-neutral-100 d4r-px-4 d4r-py-3 dark:d4r-border-b-dark-600 dark:d4r-bg-dark-600;
	}
</style>
