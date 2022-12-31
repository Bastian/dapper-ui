<!--
@component
The actions of a dialog with the correct padding, alignment and spacing to match
the rest of the dialog.
-->
<script lang="ts">
	import classNames from 'classnames';

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

<div class={classNames('d4r-mt-6 d4r-flex d4r-gap-2 d4r-self-end', className)} {style}>
	<slot />
</div>
