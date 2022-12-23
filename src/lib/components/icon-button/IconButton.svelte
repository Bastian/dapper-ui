<!--
@component
The IconButton features a centered icon without any text. It's a modification of the Button
component, adding a label property for improved accessibility.
-->
<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import type { ComponentProps } from 'svelte';

	/**
	 * @see Button#fullWidth
	 */
	export let fullWidth: ComponentProps<Button>['fullWidth'] = false;
	/**
	 * @see Button#disabled
	 */
	export let disabled: ComponentProps<Button>['disabled'] = false;
	/**
	 * @see Button#color
	 */
	export let color: ComponentProps<Button>['color'] = undefined;
	/**
	 * @see Button#size
	 */
	export let size: ComponentProps<Button>['size'] = 'base';
	/**
	 * @see Button#radius
	 */
	export let radius: ComponentProps<Button>['radius'] = undefined;

	/**
	 * @see Button#href
	 */
	export let href: ComponentProps<Button>['href'] = undefined;
	/**
	 * @see Button#target
	 */
	export let target: ComponentProps<Button>['target'] = undefined;

	/**
	 * @see Button#variant
	 */
	export let variant: ComponentProps<Button>['variant'] = 'subtle';

	/**
	 * @see Button#gradient
	 */
	export let gradient: ComponentProps<Button>['gradient'] = undefined;

	/**
	 * @see Button#autoFocus
	 */
	export let autoFocus: ComponentProps<Button>['autoFocus'] = false;

	/**
	 * A label for the button. This is used for accessibility purposes and can be read by
	 * screen readers. It's not visible to the user.
	 *
	 * It is highly recommended to provide a label for every icon button. If you don't want to do
	 * this for some reason, you have to explicitly set the label to `undefined`.
	 */
	export let label: string | undefined;

	let className = '';
	/**
	 * @see Button#class
	 */
	export { className as class };
</script>

<Button
	{fullWidth}
	{disabled}
	{color}
	{size}
	{radius}
	{href}
	{target}
	{variant}
	{gradient}
	{autoFocus}
	class="d4r-h-10 d4r-w-10 !d4r-p-0 
    {size === 'base' || size === undefined ? '!d4r-h-10 !d4r-w-10 ' : ''}
    {size === 'sm' ? '!d4r-h-9 !d4r-w-9 ' : ''}
    {size === 'xs' ? '!d4r-h-8 !d4r-w-8 ' : ''}
    {className}"
	on:click
	on:keydown
	on:keyup
>
	<slot />
	{#if label}
		<span class="d4r-sr-only">{label}</span>
	{/if}
</Button>
