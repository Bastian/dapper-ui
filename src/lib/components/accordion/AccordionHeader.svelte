<script lang="ts">
	import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';
	import classNames from 'classnames';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let iconPosition: 'left' | 'right' = 'right';
	export let hideIcon = false;

	const expanded: Writable<boolean> = getContext('d4r-accordion-expanded');
</script>

<div
	class={classNames('d4r-flex d4r-items-center d4r-gap-4', {
		'd4r-justify-between': iconPosition === 'right',
		'd4r-flex-row-reverse': iconPosition === 'left'
	})}
>
	<div>
		<slot />
	</div>
	{#if !hideIcon}
		<ChevronDownIcon
			class="d4r-h-6 d4r-w-6 d4r-shrink-0 d4r-text-neutral-500 d4r-transition-transform dark:d4r-text-neutral-200 {$expanded
				? 'd4r-rotate-180'
				: ''}"
		/>
	{/if}
</div>
