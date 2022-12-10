<script>
	let className = '';
	export { className as class };

	export let width = '220px';
	export let open = false;
</script>

<!-- transform: translateX(-{open ? '0' : width});-->
<div
	style="width: {width};"
	class="d4r-w-[220px] d4r-bg-white d4r-transition-transform dark:d4r-bg-dark-800 {className}"
>
	<div class="d4r-flex d4r-w-full d4r-flex-col d4r-items-start d4r-gap-2 d4r-p-4">
		<slot />
	</div>
</div>
