<script lang="ts">
	import Button from '../button/Button.svelte';

	export let href: string | undefined = undefined;
</script>

<Button {href} contentJustify="start" color="neutral" fullWidth variant="subtle">
	<slot slot="icon-start" name="icon-start" />
	<slot />
	<slot slot="icon-end" name="icon-end" />
</Button>
