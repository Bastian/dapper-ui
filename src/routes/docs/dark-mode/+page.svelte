<script lang="ts">
	import { base } from '$app/paths';
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

<DocTitle title="Dark Mode" />
<DocIntoText text="Dapper UI has built-in support for dark mode." />

<DocContent>
	<DocSection title="Control Dark Mode">
		<DocSectionText>
			The dark mode is controlled by toggling the <code>d4r-dark</code> class. To apply and remember
			the user's preference, you can add the following script to the <code>&lt;head&gt;</code> of your
			page:
		</DocSectionText>
		<DocBox>
			<StyledCodeBlock
				language="html"
				code={`${'<'}script>
    if (typeof window !== 'undefined') {
        if (
            localStorage['d4r-theme'] === 'dark' ||
            (!('d4r-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('d4r-dark');
        } else {
            document.documentElement.classList.remove('d4r-dark');
        }
    }
</script>`}
			/>
		</DocBox>
		<DocSectionText>
			You can then toggle the dark mode by adding or removing the <code>d4r-dark</code> class and
			storing the user's preference in <code>localStorage</code>:
		</DocSectionText>

		<DocBox>
			<StyledCodeBlock
				language="typescript"
				code={`// Enable light mode
localStorage['d4r-theme'] = 'light'
document.documentElement.classList.remove('d4r-dark');

// Enable dark mode
localStorage['d4r-theme'] = 'dark'
document.documentElement.classList.add('d4r-dark');`}
			/>
		</DocBox>
	</DocSection>

	<DocSection title="Dark Color Sheme">
		<DocSectionText>
			By default, Dapper UI uses the following color scheme for dark mode:
		</DocSectionText>
		<div class="d4r-flex d4r-flex-wrap d4r-gap-2">
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-50 d4r-text-neutral-900 d4r-shadow"
			>
				50
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-100 d4r-text-neutral-900 d4r-shadow"
			>
				100
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-200 d4r-text-neutral-100 d4r-shadow"
			>
				200
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-300 d4r-text-neutral-200 d4r-shadow"
			>
				300
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-400 d4r-text-neutral-200 d4r-shadow"
			>
				400
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-500 d4r-text-neutral-200 d4r-shadow"
			>
				500
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-600 d4r-text-neutral-200 d4r-shadow"
			>
				600
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-700 d4r-text-neutral-200 d4r-shadow"
			>
				700
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-800 d4r-text-neutral-200 d4r-shadow"
			>
				800
			</div>
			<div
				class="d4r-flex d4r-h-16 d4r-w-16 d4r-items-center d4r-justify-center d4r-rounded d4r-bg-dark-900 d4r-text-neutral-300 d4r-shadow"
			>
				900
			</div>
		</div>
	</DocSection>
	<DocSection title="Apply colors">
		<DocSectionText>
			For your main background color in dark mode, we recommend using the 700 shade. You can apply a
			background to your elements using the following utility CSS classes:
			<code class="d4r-whitespace-nowrap">d4r-bg-dark-[shade]</code> and
			<code class="d4r-whitespace-nowrap">d4r-bg-neutral-[shade]</code>, where <code>[shade]</code>
			is a value from 50 to 900 (e.g. <code class="d4r-whitespace-nowrap">d4r-bg-dark-50</code>). To
			apply the background color only in dark mode, prefix the class with "<code>dark:</code>" (e.g.
			<code class="d4r-whitespace-nowrap">dark:d4r-bg-dark-50</code>).
		</DocSectionText>
		<Example
			code={`<div
    class="d4r-bg-neutral-200 dark:d4r-bg-dark-700"
/>

${'<'}style>
    div {
        width: 64px;
        height: 64px;
    }
</style>`}
		>
			<div
				slot="preview"
				class="d4r-bg-dark-700 dark:d4r-bg-neutral-200"
				style="width: 64px; height: 64px;"
			/>
		</Example>
		<DocSectionText>
			If you prefer not to use utility classes, you can access the dark mode colors (and any other
			colors) using the <code class="d4r-whitespace-nowrap">--d4r-color-dark-[shade]</code> CSS
			variable. The color is in the format "<code>R G B</code>" and can be used as follows:
		</DocSectionText>
		<Example
			code={`<div />

${'<'}style>
    div {
        width: 64px;
        height: 64px;
        background-color: rgb(var(--d4r-color-dark-700));
    }
    :global(.d4r-dark) div {
        background-color: rgb(var(--d4r-color-neutral-200));
    }
</style>`}
		>
			<div
				slot="preview"
				class="d4r-bg-dark-700 dark:d4r-bg-neutral-200"
				style="width: 64px; height: 64px;"
			/>
		</Example>
	</DocSection>
	<DocSection title="Text">
		<DocSectionText>
			For text, we recommend using the <DocLink href="{base}/docs/text">Text</DocLink> component, which
			automatically adjusts the text color based on whether dark mode is enabled or not.
		</DocSectionText>
	</DocSection>
</DocContent>
