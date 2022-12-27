<script>
	export let stiped = true;
</script>

<div>
	<table>
		<slot />
	</table>
</div>

<style lang="postcss">
	div {
		@apply d4r-overflow-x-auto;
	}

	table {
		@apply d4r-w-full d4r-max-w-full d4r-rounded d4r-border d4r-border-neutral-200;
	}
</style>
