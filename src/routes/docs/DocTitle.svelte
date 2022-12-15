<script lang="ts">
	import Text from '$lib/components/text/Text.svelte';

	export let title: string;
</script>

<svelte:head>
	<title>{title} - Dapper UI</title>
</svelte:head>
<Text class="d4r-mb-4" tag="h1" weight="bold" contrast="high" size="3xl">{title}</Text>
