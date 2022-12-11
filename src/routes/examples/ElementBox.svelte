<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div
	class="d4r-border d4r-border-neutral-200 d4r-bg-white dark:d4r-border-dark-600 dark:d4r-bg-dark-800 {className}"
>
	<slot />
</div>
