<script lang="ts">
	import { Text } from '$lib';

	export let href: string;
</script>

<Text
	tag="a"
	color="primary"
	class="d4r-underline d4r-decoration-primary-500 d4r-underline-offset-2"
	{href}><slot /></Text
>
