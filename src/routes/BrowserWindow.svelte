<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="d4r-rounded d4r-bg-neutral-100 dark:d4r-bg-dark-700 {className}">
	<div
		class="d4r-flex d4r-h-6 d4r-items-center d4r-rounded-t-lg d4r-bg-neutral-200 dark:d4r-bg-dark-500"
	>
		<div class="d4r-ml-2 d4r-h-2 d4r-w-2 d4r-rounded-full d4r-bg-[#ef4444]" />
		<div class="d4r-ml-1 d4r-h-2 d4r-w-2 d4r-rounded-full d4r-bg-[#eab308]" />
		<div class="d4r-ml-1 d4r-h-2 d4r-w-2 d4r-rounded-full d4r-bg-[#22c55e]" />
		<div
			class="d4r-ml-4 d4r-mr-12 d4r-h-3 d4r-flex-grow d4r-rounded-sm d4r-bg-white dark:d4r-bg-dark-700"
		/>
	</div>
	<div class="w-full h-full d4r-rounded-b-lg d4r-shadow-xl">
		<slot />
	</div>
</div>
