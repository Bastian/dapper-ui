<script lang="ts">
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import Button from '../button/Button.svelte';

	export let href: string | undefined = undefined;
	export let active = false;

	export let disabled = false;
	export let color: string | undefined = undefined;
	export let size: 'xs' | 'sm' | 'base' = 'xs';
	export let radius: Radius | undefined = undefined;
</script>

<Button
	{href}
	{disabled}
	{size}
	{radius}
	contentJustify="start"
	color={active ? color : 'neutral'}
	fullWidth
	variant={active ? 'light' : 'subtle'}
	on:click
>
	<slot slot="icon-start" name="icon-start" />
	<span class="d4r-font-normal"><slot /></span>
	<slot slot="icon-end" name="icon-end" />
</Button>
