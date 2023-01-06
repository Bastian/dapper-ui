<!--
    @component
    A simple accordion component that expands when it's clicked.
-->
<script lang="ts">
	import { expandAnimation } from '$lib/actions/expandAnimation';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';
	import classNames from 'classnames';
	import AccordionHeader from './AccordionHeader.svelte';
	import HeadlessAccordion from './HeadlessAccordion.svelte';

	let className = '';
	export { className as class };

	export let id = generateRandomId();

	export let fullWidth = true;
	export let expanded = false;

	export let variant: 'simple' | 'tbd' = 'simple';
</script>

<HeadlessAccordion
	{id}
	{expanded}
	class={classNames(className, {
		'd4r-w-full': fullWidth
	})}
	classHeader="d4r-w-full"
>
	<slot slot="header" name="header" />
	<svelte:fragment slot="pane">
		<slot />
	</svelte:fragment>
</HeadlessAccordion>

<style global lang="postcss">
	:local(.variant-filled) {
		@apply d4r-bg-neutral-50 dark:d4r-bg-dark-600;
	}

	:local(.variant-outline) {
		@apply d4r-border d4r-border-neutral-300;
	}
</style>
