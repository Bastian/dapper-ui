<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	function toggleDarkMode() {
		document.documentElement.classList.toggle('d4r-dark');
	}
</script>

<Button color="neutral" on:click={toggleDarkMode}>Toogle Dark Mode</Button>
