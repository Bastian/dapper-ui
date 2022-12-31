<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocLink from '../DocLink.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import Example from '../Example.svelte';
</script>

<DocTitle title="Styling" />
<DocIntoText
	text="Dapper UI is styled with TailwindCSS and works seamlessly with it. However, you are not required to use TailwindCSS with Dapper UI and can choose any styling solution you prefer."
/>

<DocContent>
	<DocSection title="Styling Components">
		<DocSectionText>
			For styling purposes, most components offer two props: <code>class</code> and
			<code>style</code>. You can use these props for basic styling tasks such as adding margins to
			a component. However, we advise against using them for more complex styling, as this may
			interfere with the component's built-in styles. Instead, try using props that are specific to
			the component, such as <code>color</code>, <code>size</code>, or <code>radius</code>, if they
			are available.
		</DocSectionText>
	</DocSection>
	<DocSection title="Using Svelte classes">
		<DocSectionText>
			You can use the <code>class</code> prop to pass Svelte classes to the component. However, due
			to the way Svelte works, these class names must be marked as global or they will be removed by
			the compiler (refer to
			<DocLink href="https://github.com/sveltejs/svelte/issues/4281">sveltejs/svelte #4281</DocLink>
			for more information).
			<Example
				code={`<Button>A</Button>
<Button class="keep-some-distance">B</Button>

${'<'}style>
    :global(.keep-some-distance) {
        margin-left: 32px;
    }
</style>
`}
			>
				<div slot="preview">
					<Button>A</Button>
					<Button class="d4r-ml-[32px]">B</Button>
				</div>
			</Example>
		</DocSectionText>
		<DocSectionText>
			To avoid using the global modifier, you can wrap the component in a <code>&lt;span&gt;</code>
			or <code>&lt;div&gt;</code> element:
		</DocSectionText>
		<Example
			code={`<Button>A</Button>
<span class="keep-some-distance"><Button>B</Button></span>

${'<'}style>
    .keep-some-distance {
        margin-left: 32px;
    }
</style>
`}
		>
			<div slot="preview">
				<Button>A</Button>
				<span class="d4r-ml-[32px]"><Button>B</Button></span>
			</div>
		</Example>
	</DocSection>
	<DocSection title="Using TailwindCSS">
		<DocSectionText>
			Dapper UI uses the default TailwindCSS configuration with the exception of colors and border
			radiuses. For the best integration with Dapper UI, we recommend using the following
			TailwindCSS configuration:
		</DocSectionText>
		<DocBox>
			<StyledCodeBlock
				language="js"
				code={`// The colors from the theme. These are the colors of the default theme. Adjust as needed.
const colors = ['primary', 'neutral', 'dark', 'primary', 'neutral', 'dark', 'slate', 'gray', 'zinc', 'neutral-gray', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
const radiuses = ['none', 'sm', 'base', 'md', 'lg', 'full', 'button', 'input', 'checkbox', 'slider-thumb', 'slider-track', 'dialog', 'progressbar', 'meter'];

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: ['class', 'd4r-dark'], // Dapper UI uses the 'd4r-dark'for dark mode
    theme: {
        colors: {
            white: '#ffffff',
            black: '#000000',
            ...colors.reduce(
                (acc, color) => ({
                    ...acc,
                    [color]: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
                        (acc, shade) => ({
                            ...acc,
                            [shade]: \`rgb(var(--d4r-color-\${color}-\${shade}) / <alpha-value>)\`
                        }),
                        {}
                    )
                }),
                {}
            )
        },
        borderRadius: {
            DEFAULT: 'var(--d4r-border-radius-base)',
            ...radiuses.reduce(
                (acc, name) => ({ ...acc, [name]: \`var(--d4r-border-radius-\${name})\` }),
                {}
            )
        }
    },
};
`}
			/>
		</DocBox>
		<DocSectionText>You can then use the TailwindCSS classes to style components:</DocSectionText>
		<Example
			code={`<Button>A</Button>
<Button class="ml-8">B</Button>`}
		>
			<div slot="preview">
				<Button>A</Button>
				<Button class="d4r-ml-8">B</Button>
			</div>
		</Example>
	</DocSection>
</DocContent>
