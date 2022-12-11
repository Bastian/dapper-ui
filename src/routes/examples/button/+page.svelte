<script>
	import Button from '$lib/components/button/Button.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import ButtonExample from './ButtonExample.svelte';
	import IconButtonExample from './IconButtonExample.svelte';
</script>

<div class="d4r-space-y-16">
	<ButtonExample />
	<article class="d4r-space-y-2">
		<Text tag="h3" size="lg" weight="medium">Variants</Text>
		<div
			class="d4r-border d4r-border-neutral-200 d4r-bg-white d4r-p-8 dark:d4r-border-dark-600 dark:d4r-bg-dark-800"
		>
			<div class="d4r-flex d4r-flex-wrap d4r-items-center d4r-justify-center d4r-gap-4">
				<Button>Solid</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="outline-dashed">Dashed</Button>
				<Button variant="light">Light</Button>
				<Button variant="subtle">Subtle</Button>
			</div>
		</div>
	</article>
	<IconButtonExample />
</div>
