<!--
@component
When mounted, this component will disable scrolling on the body element and re-enable it when it is unmounted.

This is useful for example when you want to disable scrolling on the body when a modal is open.
-->
<script lang="ts">
	import { onDestroy } from 'svelte';
	export let active = true;

	function disableScrolling() {
		if (typeof document === 'undefined') {
			return;
		}
		const widthBefore = document.body.clientWidth;
		document.body.style.overflow = 'hidden';
		const widthAfter = document.body.clientWidth;
		const scrollbarWidth = widthAfter - widthBefore;
		document.body.style.paddingRight = `${scrollbarWidth}px`;
	}

	function reEnableScrolling() {
		if (typeof document === 'undefined') {
			return;
		}
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
	}

	$: if (active) {
		disableScrolling();
	} else {
		reEnableScrolling();
	}

	onDestroy(() => reEnableScrolling());
</script>
