<!--
@component
An unstyled accordion component.
-->
<script lang="ts">
	import { expandAnimation } from '$lib/actions/expandAnimation';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let className = '';
	export { className as class };

	export let classHeader = '';

	export let id = generateRandomId();

	export let expanded = false;
	const expandedStore = writable(expanded);
	$: $expandedStore = expanded;
	$: setContext('d4r-accordion-expanded', expandedStore);
</script>

<div class={className}>
	<button
		class={classHeader}
		id="{id}-header"
		tabindex="0"
		aria-expanded={expanded}
		aria-controls="{id}-content"
		on:click={() => (expanded = !expanded)}
		on:keypress={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				expanded = !expanded;
				event.preventDefault();
			}
		}}
	>
		<slot name="header" />
	</button>
	<div use:expandAnimation={expanded} id="{id}-content" aria-labelledby="{id}-header" role="region">
		<slot name="pane" />
	</div>
</div>
