<script lang="ts">
	import { Text } from '$lib';
	import CodeBlock from '../../../doc-components/code-highlight/CodeBlock.svelte';
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocLink from '../DocLink.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
</script>

<DocTitle title="Quick Start (tl;dr)" />
<DocIntoText
	text="The 3-step tl;dr version for experienced developers to get started in less than 2 minutes. Read the full documentation for more details."
/>

<DocContent>
	<DocSection title="1. Install Dapper UI">
		<DocSectionText>Install Dapper UI with your favorite package manager:</DocSectionText>
		<DocBox>
			<CodeBlock class="d4r-p-4" language="bash" code="npm install @dapper-ui/core" />
		</DocBox>
		<DocBox>
			<CodeBlock class="d4r-p-4" language="bash" code="yarn add @dapper-ui/core" />
		</DocBox>
		<DocBox>
			<CodeBlock class="d4r-p-4" language="bash" code="pnpm add @dapper-ui/core" />
		</DocBox>
	</DocSection>

	<DocSection title="2. Wrap Code">
		<DocSectionText>
			Wrap your code in the <code>ThemeProvider</code> component as high as possible in your component
			tree:
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
	</DocSection>

	<DocSection title="3. Install Default Fonts (optional)">
		<DocSectionText>
			Install and import the default fonts (for example in the <code>+layout.svelte</code> file):
		</DocSectionText>
		<DocBox>
			<CodeBlock
				class="d4r-p-4"
				language="bash"
				code="npm install @fontsource/open-sans @fontsource/fira-mono"
			/>
		</DocBox>
		<DocBox>
			<CodeBlock
				class="d4r-p-4"
				language="bash"
				code="yarn add @fontsource/open-sans @fontsource/fira-mono"
			/>
		</DocBox>
		<DocBox>
			<CodeBlock
				class="d4r-p-4"
				language="bash"
				code="pnpm add @fontsource/open-sans @fontsource/fira-mono"
			/>
		</DocBox>
		<DocBox>
			<StyledCodeBlock
				code={`${'<'}script>
    import "@fontsource/open-sans/400.css";
    import "@fontsource/open-sans/500.css";
    import "@fontsource/open-sans/600.css";
    import "@fontsource/open-sans/700.css";
    import "@fontsource/fira-mono/400.css";
</script>`}
			/>
		</DocBox>
	</DocSection>

	<DocSection title="4. Done!">
		<DocSectionText>
			You're all set! Take some time to explore the components and experiment with them. Keep in
			mind that Dapper UI is still in its early stages of development, so some components may be
			missing or incomplete. If you have any questions or ideas for the project, don't hesitate to
			create an issue on GitHub (<DocLink href="https://github.com/Bastian/dapper-ui"
				>Bastian/dapper-ui</DocLink
			>). Additionally, giving the repository a start will help others discover the project and
			contribute to its growth. <Text weight="semibold">Thank you for using Dapper UI!</Text>
		</DocSectionText>
	</DocSection>
</DocContent>
