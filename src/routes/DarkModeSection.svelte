<script lang="ts">
	import Container from '$lib/components/container/Container.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import Example from './docs/Example.svelte';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
</script>

<div class="d4r-bg-white d4r-py-16 dark:d4r-bg-dark-700  sm:d4r-py-24 md:d4r-py-32 lg:d4r-py-48">
	<Container
		center
		class="d4r-flex d4r-flex-col d4r-items-center d4r-justify-center d4r-gap-12 lg:d4r-flex-row xl:d4r-gap-16"
	>
		<div class="d4r-max-w-xl d4r-space-y-8">
			<Text tag="h2" size="4xl" weight="bold" contrast="higher" color="primary">
				Built-in Dark Mode
			</Text>
			<Text tag="p" size="lg" lineHeight="relaxed">
				Dapper UI has built-in support for dark mode, which is enabled by default and follows the
				user's system preference. The default dark color theme is beautiful and can be easily
				customized to your taste. Components like <code>Text</code> use the <code>contrast</code> prop
				to automatically adjust the text color based on the active mode (dark or light), reducing the
				overhead of specifying the text color explicitly.
			</Text>
			<ToggleDarkModeButton />
		</div>
		<div class="d4r-w-full d4r-max-w-xl lg:d4r-max-w-md xl:d4r-max-w-xl 2xl:d4r-max-w-2xl">
			<Example
				code={`<Text contrast="higher">Higher Contrast Text.</Text>
<Text contrast="high">High Contrast Text.</Text>
<Text>Normal Contrast Text.</Text>
<Text contrast="low">Low Contrast Text.</Text>
<Text contrast="lower">Lower Contrast Text.</Text>`}
				disablePreviewPadding
				class="d4r-rounded d4r-shadow"
			>
				<div class="d4r-grid d4r-h-full d4r-w-full d4r-grid-cols-2" slot="preview">
					<div class="d4r-bg-white d4r-p-4 xl:d4r-p-8">
						<div class="d4r-flex d4r-flex-col d4r-text-center">
							<Text class="!d4r-text-neutral-900">Higher Contrast Text.</Text>
							<Text class="!d4r-text-neutral-800">High Contrast Text.</Text>
							<Text class="!d4r-text-neutral-700">Normal Contrast Text.</Text>
							<Text class="!d4r-text-neutral-600">Low Contrast Text.</Text>
							<Text class="!d4r-text-neutral-500">Lower Contrast Text.</Text>
						</div>
					</div>
					<div
						class="d4r-dark d4r-h-full d4r-w-full d4r-rounded-tr d4r-bg-dark-800 d4r-p-4 xl:d4r-p-8"
					>
						<div class="d4r-flex d4r-flex-col d4r-text-center">
							<Text contrast="higher">Higher Contrast Text.</Text>
							<Text contrast="high">High Contrast Text.</Text>
							<Text>Normal Contrast Text.</Text>
							<Text contrast="low">Low Contrast Text.</Text>
							<Text contrast="lower">Lower Contrast Text.</Text>
						</div>
					</div>
				</div>
			</Example>
		</div>
	</Container>
</div>
