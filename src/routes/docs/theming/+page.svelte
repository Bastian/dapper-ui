<script lang="ts">
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocLink from '../DocLink.svelte';
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
    import { ThemeProvider, Button, defaultTheme } from '@dapper-ui/core';
    import type { DapperUiTheme } from '@dapper-ui/core';

    const myTheme: DapperUiTheme = { 
        ...defaultTheme,
        /* Override default theme */
    }
</script>
                
<ThemeProvider theme={myTheme}>
    <Button>Example</Button>
</ThemeProvider>`}
			/>
		</DocBox>
		<DocSectionText>The theme object has the following structure:</DocSectionText>
		<DocBox>
			<StyledCodeBlock
				language="typescript"
				code={`
/**
 * 10 shades of colors, from 50 to 900 (50 is the lightest, 900 is the darkest).
 * 
 * Colors are in the format of #RRGGBB.
 */
type ColorPalette = [
    string, // 50
    string, // 100
    string, // 200
    string, // 300
    string, // 400
    string, // 500
    string, // 600
    string, // 700
    string, // 800
    string // 900
];

type Shades = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Radius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

interface DapperUiTheme {
    font?: {
        /**
         * That default font family for text.
         */
        default?: string;
        /**
         * The default font family for code.
         */
        code?: string;
    };
    colors: {
        /**
         * The primary color palette used by default.
         */
        primary: ColorPalette;
        /**
         * A neutral color shade, usually some kind of gray.
         */
        neutral: ColorPalette;
        /**
         * The dark color palette used in the dark mode.
         */
        dark: ColorPalette;
        /**
         * Other colors that can be referenced by name in components.
         */
        [other: string]: ColorPalette;
    };
    radiuses: {
        /**
         * The default radius for buttons.
         */
        button: Radius;
        /**
         * The default radius for input fields (TextField, Select, etc.)
         */
        input: Radius;
        /**
         * The default radius for checkboxes.
         */
        checkbox: Radius;
        /**
         * The default radiuses for the slider.
         */
        slider: {
            /**
             * The default radius for the slider thumb.
             */
            thumb: Radius;
            /**
             * The default radius for the slider track.
             */
            track: Radius;
        };
        /**
         * The default radius for dialogs.
         */
        dialog: Radius;
        /**
         * The default radius for progress bars.
         */
        progressBar: Radius;
        /**
         * The default radius for meters.
         */
        meter: Radius;
    };
}        
`}
			/>
		</DocBox>
	</DocSection>

	<DocSection title="Colors">
		<!-- TODO: Explain colors (10 shades, primary, neutral, dark) -->
		<DocSectionText>
			Each color is composed of 10 shades, ranging from <code>50</code> (the lightest) to
			<code>900</code> (the darkest). The default color palette is based on
			<DocLink href="https://tailwindcss.com/docs/customizing-colors">TailwindCSS</DocLink>, with
			the exception of the dark mode colors.
		</DocSectionText>
	</DocSection>
</DocContent>
