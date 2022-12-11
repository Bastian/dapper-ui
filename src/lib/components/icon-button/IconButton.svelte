<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import type { ComponentProps } from 'svelte';

	export let fullWidth: ComponentProps<Button>['fullWidth'] = false;
	export let disabled: ComponentProps<Button>['disabled'] = false;
	export let color: ComponentProps<Button>['color'] = undefined;
	export let size: ComponentProps<Button>['size'] = 'base';
	export let radius: ComponentProps<Button>['radius'] = undefined;

	export let href: ComponentProps<Button>['href'] = undefined;

	export let variant: ComponentProps<Button>['variant'] = 'subtle';

	let className = '';
	export { className as class };
</script>

<Button
	{fullWidth}
	{disabled}
	{color}
	{size}
	{radius}
	{href}
	{variant}
	class="d4r-h-10 d4r-w-10 !d4r-p-0 
    {size === 'base' || size === undefined ? '!d4r-h-10 !d4r-w-10 ' : ''}
    {size === 'sm' ? '!d4r-h-9 !d4r-w-9 ' : ''}
    {className}"
	on:click
	on:keydown
	on:keyup
>
	<slot />
</Button>
