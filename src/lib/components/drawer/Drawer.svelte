<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import BackgroundScrollBlocker from '../background-scroll-blocker/BackgroundScrollBlocker.svelte';

	let className = '';
	export { className as class };

	export let width = '220px';
	export let open = false;
	export let permanent = false;

	const dispatch = createEventDispatcher();

	function close() {
		open = false;
		dispatch('close');
	}
</script>

<div
	style="width: {width}; transform: translateX(-{open || permanent ? '0' : width});"
	class="d4r-z-50 d4r-w-[220px] d4r-overflow-y-auto d4r-bg-white d4r-pb-14 d4r-transition-transform dark:d4r-bg-dark-800 {className}"
>
	<div class="d4r-flex d4r-w-full d4r-flex-col d4r-items-start d4r-gap-2 d4r-p-4">
		<slot />
	</div>
</div>
{#if open && !permanent}
	<BackgroundScrollBlocker />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		transition:fade={{ duration: 200 }}
		class="d4r-fixed d4r-inset-0 d4r-z-30 d4r-bg-black/75 d4r-transition-opacity dark:d4r-bg-black/75"
		aria-hidden="true"
		on:click={close}
	/>
{/if}
