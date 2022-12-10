<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	function toggleDarkMode() {
		document.documentElement.classList.toggle('d4r-dark');
	}
</script>

<div class="d4r-flex d4r-items-end d4r-justify-end">
	<Button color="neutral" class="d4r-my-8" on:click={toggleDarkMode}>Toogle Dark Mode</Button>
</div>
