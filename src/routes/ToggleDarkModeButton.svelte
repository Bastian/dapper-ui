<script lang="ts">
	import { Button, IconButton } from '$lib';
	import { Moon, Sun } from 'tabler-icons-svelte';
	let className = '';
	export { className as class };

	function toggleDarkMode() {
		document.documentElement.classList.toggle('d4r-dark');
		document.documentElement.classList.toggle('d4r-light');
		if (document.documentElement.classList.contains('d4r-dark')) {
			localStorage.setItem('d4r-theme', 'dark');
		} else {
			localStorage.setItem('d4r-theme', 'light');
		}
	}

	export let icon = false;
</script>

{#if icon}
	<IconButton class={className} label="Toggle Dark Mode" on:click={toggleDarkMode}>
		<span class="dark:d4r-hidden"><Moon /></span>
		<span class="d4r-hidden dark:d4r-inline"><Sun /></span>
	</IconButton>
{:else}
	<Button class={className} color="neutral" on:click={toggleDarkMode}>Toggle Dark Mode</Button>
{/if}
