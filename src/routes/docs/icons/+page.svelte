<script lang="ts">
	import DocContent from '../DocContent.svelte';
	import DocLink from '../DocLink.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
</script>

<DocTitle title="Icons" />

<DocContent>
	<div class="d4r-space-y-4">
		<DocSectionText>
			Dapper UI doesn't come with a built-in icon library, but it is designed to work with any SVG
			icons. This means that you can use any icon library of your choice, as long as the icons are
			in SVG format. Non-SVG icons can be used as well, but you may need to do some additional work
			to ensure sizing and color are correct (e.g. for buttons) as they are applied automatically.
		</DocSectionText>
		<DocSectionText>
			One great option for an SVG icon library is
			<DocLink href="https://tabler-icons.io/">Tabler Icons</DocLink>, which is the one we use on
			this website and in our examples. You can use the
			<DocLink href="https://github.com/benflap/tabler-icons-svelte">tabler-icons-svelte</DocLink>
			npm package to easily incorporate Tabler Icons into your Svelte project.
		</DocSectionText>
	</div>
</DocContent>
