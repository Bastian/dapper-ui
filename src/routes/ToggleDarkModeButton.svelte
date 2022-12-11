<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import IconButton from '$lib/components/icon-button/IconButton.svelte';
	import { Moon, Sun } from 'tabler-icons-svelte';

	function toggleDarkMode() {
		document.documentElement.classList.toggle('d4r-dark');
	}

	export let icon = false;
</script>

{#if icon}
	<IconButton on:click={toggleDarkMode}>
		<span class="dark:d4r-hidden"><Moon /></span>
		<span class="d4r-hidden dark:d4r-inline"><Sun /></span>
	</IconButton>
{:else}
	<Button color="neutral" on:click={toggleDarkMode}>Toogle Dark Mode</Button>
{/if}
