<script lang="ts">
	let className = '';
	export { className as class };

	export let center = false;
	export let noPadding = false;
</script>

<div class="d4r-container {className}" class:d4r-mx-auto={center} class:padding={!noPadding}>
	<slot />
</div>

<style lang="postcss" global>
	:local(.padding) {
		@apply d4r-p-4 sm:d4r-p-6 md:d4r-p-8 lg:d4r-p-16 xl:d4r-p-20 2xl:d4r-p-24;
	}
</style>
