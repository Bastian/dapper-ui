<script lang="ts">
	import Button from '../button/Button.svelte';

	export let href: string | undefined = undefined;
	export let active = false;
</script>

<Button
	{href}
	size="xs"
	contentJustify="start"
	color={active ? 'primary' : 'neutral'}
	fullWidth
	variant={active ? 'light' : 'subtle'}
	on:click
>
	<slot slot="icon-start" name="icon-start" />
	<span class="d4r-font-normal"><slot /></span>
	<slot slot="icon-end" name="icon-end" />
</Button>
