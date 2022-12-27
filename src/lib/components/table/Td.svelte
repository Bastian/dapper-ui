<script>
	import Text from '../text/Text.svelte';
</script>

<Text tag="td" class="d4r-td">
	<slot />
</Text>

<style lang="postcss" global>
	.d4r-td {
		@apply d4r-px-4 d4r-py-3;
	}
</style>
