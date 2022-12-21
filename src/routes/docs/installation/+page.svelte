<script lang="ts">
	import { base } from '$app/paths';
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

<DocTitle title="Installation" />
<DocIntoText text="How to install Dapper UI and the default fonts." />

<DocContent>
	<DocSection title="Installation">
		<DocSectionText>
			Install the <code>@dapper-ui/core</code> package with your prefered package manager:
		</DocSectionText>
		<DocBox>
			<CodeBlock class="d4r-p-4" code="npm install @dapper-ui/core" />
		</DocBox>
		<DocBox>
			<CodeBlock class="d4r-p-4" code="yarn add @dapper-ui/core" />
		</DocBox>
		<DocBox>
			<CodeBlock class="d4r-p-4" code="pnpm add @dapper-ui/core" />
		</DocBox>
	</DocSection>

	<DocSection title="Fonts">
		<DocSectionText>
			Dapper UI's default font for regular text is
			<DocLink href="https://fonts.google.com/specimen/Open+Sans">Open Sans</DocLink> and
			<DocLink href="https://github.com/tonsky/FiraCode">Fira Mono</DocLink> is used for code. You can
			choose any font you like for Dapper UI, but if you want to use the default fonts, the recommended
			method is to install them via <DocLink href="https://fontsource.org/">Fontsource</DocLink>. To
			do this, first use your preferred package manager to install the fonts:
		</DocSectionText>
		<DocBox>
			<CodeBlock class="d4r-p-4" code="npm install @fontsource/open-sans @fontsource/fira-mono" />
		</DocBox>
		<DocBox>
			<CodeBlock class="d4r-p-4" code="yarn add @fontsource/open-sans @fontsource/fira-mono" />
		</DocBox>
		<DocBox>
			<CodeBlock class="d4r-p-4" code="pnpm add @fontsource/open-sans @fontsource/fira-mono" />
		</DocBox>

		<DocSectionText>
			Then import the fonts at a central place in your app. If you are using SvelteKit, you can
			import the fonts in your <code>+layout.svelte</code> file:
		</DocSectionText>

		<DocBox>
			<StyledCodeBlock
				code={`${'<'}script>
    // Import fonts. You can import only the weights you need.
    import "@fontsource/open-sans/400.css";
    import "@fontsource/open-sans/500.css";
    import "@fontsource/open-sans/600.css";
    import "@fontsource/open-sans/700.css";
    import "@fontsource/fira-mono/400.css";
</script>`}
			/>
		</DocBox>

		<DocSectionText>
			Dapper UI will automatically use these fonts unless you specify a different font in your
			theme. Learn more about theming in the <DocLink href="{base}/docs/theming">Theming</DocLink> section.
		</DocSectionText>
	</DocSection>
</DocContent>
