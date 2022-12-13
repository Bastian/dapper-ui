<script>
	import Text from '$lib/components/text/Text.svelte';
</script>

<svelte:head>
	<title>Icons - Dapper UI</title>
	<meta
		name="description"
		content="Documentation for Icons in Dapper UI. A sleek and modern UI component library for Svelte."
	/>
</svelte:head>

<div class="d4r-space-y-4">
	<Text class="d4r-mb-6" tag="h1" size="3xl" weight="medium">Icons</Text>
	<Text tag="p" prose size="lg">
		Dapper UI doesn't come with a built-in icon library, but it is designed to work with any SVG
		icons. This means that you can use any icon library of your choice, as long as the icons are in
		SVG format. Non-SVG icons can be used as well, but you may need to do some additional work to
		ensure sizing and color are correct (e.g. for buttons) as they are applied automatically.
	</Text>
	<Text tag="p" prose size="lg">
		One great option for an SVG icon library is
		<a class="d4r-font-medium" href="https://tabler-icons.io/">Tabler Icons</a>, which is the one we
		use on this website and in our examples. You can use the
		<a class="d4r-font-medium" href="https://github.com/benflap/tabler-icons-svelte">
			tabler-icons-svelte
		</a>
		npm package to easily incorporate Tabler Icons into your Svelte project.
	</Text>
</div>
