<script lang="ts">
	import { Text } from '$lib';
	import classNames from 'classnames';

	let className = '';
	export { className as class };

	export let id: string | undefined = undefined;

	export let required = false;
	export let hidden = false;

	export let hasIcon = false;

	export let tag = 'label';
	export let size: 'base' | 'sm' | undefined = 'base';

	export let additionalProps = {};
</script>

<Text
	{tag}
	{id}
	contrast="low"
	size={size === 'sm' ? 'xs' : 'sm'}
	class={classNames(
		'd4r-flex d4r-items-center d4r-gap-1.5',
		{
			'd4r-hidden': hidden,
			'd4r-input-required': required
		},
		className
	)}
	{...additionalProps}
>
	{#if hasIcon}
		<Text
			class={size === 'sm' ? 'd4r-input-icon-label-sm' : 'd4r-input-icon-label-base'}
			contrast="lower"
		>
			<slot name="icon" />
		</Text>
	{/if}
	<slot />
</Text>

<style lang="postcss" global>
	.d4r-input-icon-label-base > svg {
		@apply d4r-h-4 d4r-w-4;
	}
	.d4r-input-icon-label-sm > svg {
		@apply d4r-h-3.5 d4r-w-3.5;
	}

	.d4r-input-required::after {
		color: #dc2626;
		content: '*';
	}
</style>
