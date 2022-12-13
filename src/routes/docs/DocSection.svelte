<script lang="ts">
	import Text from '$lib/components/text/Text.svelte';
	import ElementBox from './ElementBox.svelte';

	let className = '';
	export { className as class };

	export let title: string;
</script>

<article class="d4r-space-y-2">
	<Text tag="h3" size="lg" weight="medium">{title}</Text>
	{#if $$slots['description']}
		<Text tag="div" class="d4r-pb-1" contrast="lower" prose>
			<slot name="description" />
		</Text>
	{/if}
	<ElementBox class={className}>
		<slot />
	</ElementBox>
</article>
