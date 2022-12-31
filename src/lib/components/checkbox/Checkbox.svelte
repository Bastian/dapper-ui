<script lang="ts">
	import { overwriteColor } from '$lib/util/createColorOverwrite';
	import { overwriteRadius } from '$lib/util/createRadiusOverwrite';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import Text from '$lib/components/text/Text.svelte';
	import type { Radius } from '$lib/theme/DapperUiTheme';
	import { focusOnMount } from '$lib/actions/focusOnMount';
	import classNames from 'classnames';

	export let id: string = generateRandomId();
	export let required = false;
	export let disabled = false;

	/**
	 * Whether or not the checkbox is checked.
	 */
	export let checked = false;

	/**
	 * The label of the checkbox.
	 */
	export let label: string;

	/**
	 * The name of a color in the theme. Does not support arbitrary colors.
	 *
	 * When set to `undefined`, the primary color of the theme will be used.
	 */
	export let color: string | undefined = undefined;
	/**
	 * The border radius of the checkbox. When set to `undefined`, the checkbox will have the
	 * default border radius defined in the theme.
	 */
	export let radius: Radius | undefined = undefined;

	/**
	 * When set to `true`, automatically focuses the element when the component is mounted.
	 *
	 * This is useful for usability and accessibility reasons, for example to focus an element
	 * when a modal is opened.
	 */
	export let autoFocus = false;

	let className = '';
	/**
	 * Additional CSS classes to add.
	 * Be careful when using this prop, as it can conflict with the default styles.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export { className as class };

	/**
	 * Custom CSS styles to apply.
	 *
	 * Especially useful for positioning styles like margings.
	 */
	export let style: string | undefined = undefined;
</script>

<div class="d4r-flex d4r-items-center d4r-gap-2" class:d4r-opacity-50={disabled}>
	<input
		style={classNames(
			overwriteColor(color, [300, 600, 700]),
			overwriteRadius(radius, 'checkbox'),
			style
		) || undefined}
		type="checkbox"
		class={classNames('d4r-input-base', className)}
		{id}
		bind:checked
		{required}
		{disabled}
		use:focusOnMount={autoFocus}
		on:click
		on:change
	/>
	<div class="-d4r-mt-0.5">
		<Text
			tag="label"
			size="sm"
			for={id}
			contrast="low"
			class="d4r-select-none {required ? 'd4r-input-checkbox-required' : ''}"
		>
			{label}
		</Text>
	</div>
</div>

<style lang="postcss" global>
	:local(input) {
		@apply d4r-rounded-checkbox !d4r-ring-offset-0;
		@apply d4r-text-primary-600 dark:d4r-text-primary-600;
	}

	.d4r-input-checkbox-required::after {
		@apply d4r-ml-1;
		color: #dc2626;
		content: '*';
	}
</style>
