<script lang="ts">
	import { base } from '$app/paths';
	import { Text } from '$lib';
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocLink from '../DocLink.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
</script>

<DocTitle title="Usage" />
<DocIntoText text="How to use Dapper UI after installation." />

<DocContent>
	<DocSection title="Theme Provider">
		<DocSectionText>
			After successfully installing Dapper UI and the default fonts, you must wrap your app with the
			<code>ThemeProvider</code> component. This component provides a default theme and adds the
			default style to the head of your document. It's best to do this as high up in the component
			tree as possible. If you are using SvelteKit, a good place to include the
			<code>ThemeProvider</code> is the main <code>+layout.svelte</code> file.
		</DocSectionText>
		<DocBox>
			<StyledCodeBlock
				code={`${'<'}script>
	import { ThemeProvider, Button } from '@dapper-ui/core';
</script>

<ThemeProvider>
	<!-- Your app here -->
	<Button>Example</Button>
</ThemeProvider>`}
			/>
		</DocBox>
		<DocSectionText>
			If you want to customize the default theme, you can pass a custom theme object to the
			<code>ThemeProvider</code> component. You can find more information about the theme object in
			the <DocLink href="{base}/docs/theming">Theming</DocLink> section.
		</DocSectionText>
	</DocSection>

	<DocSection title="Done!">
		<DocSectionText>
			You're all set! Take some time to explore the components and experiment with them. Keep in
			mind that Dapper UI is still in its early stages of development, so some components may be
			missing or incomplete. If you have any questions or ideas for the project, don't hesitate to
			create an issue on GitHub (<DocLink href="https://github.com/Bastian/dapper-ui"
				>Bastian/dapper-ui</DocLink
			>). And if you enjoy using Dapper UI, we would greatly appreciate it if you could give the
			repository a star. It helps others discover the project and supports its continued
			development.
		</DocSectionText>
		<DocSectionText>
			<Text weight="semibold">Thank you for using Dapper UI!</Text>
		</DocSectionText>
	</DocSection>
</DocContent>
