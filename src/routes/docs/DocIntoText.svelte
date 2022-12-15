<script lang="ts">
	import Text from '$lib/components/text/Text.svelte';

	export let text: string;
</script>

<Text tag="div" size="lg" lineHeight="relaxed">
	{text}
</Text>

<meta name="description" content={text} />
