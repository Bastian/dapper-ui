<script>
	import Text from '$lib/components/text/Text.svelte';
	import Footer from '../Footer.svelte';
</script>

<div class="d4r-flex d4r-h-full d4r-flex-col">
	<div class="d4r-container d4r-mx-auto d4r-flex-grow d4r-overflow-x-auto d4r-p-8 d4r-py-16">
		<Text tag="h1" weight="bold" size="lg">Privacy Policy</Text>
		<iframe
			title="Imprint"
			class="d4r-h-full d4r-w-full d4r-min-w-[500px] d4r-rounded d4r-bg-white"
			src={import.meta.env.VITE_PRIVACY_POLICY_URL}
		/>
	</div>

	<Footer />
</div>
