<tr>
	<slot />
</tr>

<style lang="postcss" global>
	:local(tr) {
		@apply odd:d4r-bg-white even:d4r-bg-neutral-50 dark:odd:d4r-bg-dark-800 dark:even:d4r-bg-dark-900;
	}
</style>
