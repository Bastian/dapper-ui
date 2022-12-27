<script lang="ts">
	import Footer from '../Footer.svelte';
	import PageDrawer from '../PageDrawer.svelte';
</script>

<div class="d4r-flex d4r-h-full d4r-flex-grow d4r-flex-col">
	<PageDrawer permanent class="d4r-hidden lg:d4r-block" />

	<div class="d4r-flex d4r-grow">
		<div class="d4r-hidden d4r-w-[220px] d4r-shrink-0 lg:d4r-block" />
		<div
			class="d4r-mx-auto d4r-w-full d4r-max-w-4xl d4r-overflow-hidden d4r-py-8 d4r-px-4 sm:d4r-px-6 md:d4r-px-10 md:d4r-py-12"
		>
			<slot />
		</div>
	</div>
	<div class="d4r-flex">
		<div class="d4r-hidden d4r-w-[220px] d4r-shrink-0 lg:d4r-block" />
		<div class="d4r-flex-grow">
			<Footer />
		</div>
	</div>
</div>
