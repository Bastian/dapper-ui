<script lang="ts">
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
</script>

<DocTitle title="Theming" />
<DocImport what="ThemeProvider" from="core" />
<DocIntoText
	text="Dapper UI offers a high level of customizability. You can easily modify the global theme to change fonts, colors, border radiuses and more. "
/>

<DocContent>
	<DocSection title="ThemeProvider">
		<DocSectionText>
			Before using any Dapper UI components, you need to wrap your app in the
			<code>ThemeProvider</code> component. This component is responsible for providing the theme to
			all child components and loading the default CSS styles.
		</DocSectionText>
		<DocBox>
			<StyledCodeBlock
				code={`<ThemeProvider>
    <Button>Example</Button>
</ThemeProvider>`}
			/>
		</DocBox>
		<DocSectionText>
			Dapper UI comes with a default theme but can be customized by passing a custom theme object to
			the <code>theme</code> prop.
		</DocSectionText>
		<DocBox>
			<StyledCodeBlock
				code={`${'<'}script lang="ts">
    import { ThemeProvider, Button } from '@dapper-ui/core';
    import type { DapperUiTheme } from '@dapper-ui/core';

    const myTheme: DapperUiTheme = { /* ... */ }
</script>
				
<ThemeProvider theme={myTheme}>
    <Button>Example</Button>
</ThemeProvider>`}
			/>
		</DocBox>
	</DocSection>

	<DocSection title="Colors">
		<!-- TODO: Explain colors (10 shades, primary, neutral, dark) -->
		<DocSectionText>tbd</DocSectionText>
	</DocSection>
</DocContent>
