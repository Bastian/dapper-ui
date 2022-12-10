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
		@apply d4r-px-4 sm:d4r-px-6 md:d4r-px-8 lg:d4r-px-16 xl:d4r-px-20 2xl:d4r-px-24;
	}
</style>
