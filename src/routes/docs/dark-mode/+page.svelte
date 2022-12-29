<script lang="ts">
	import StyledCodeBlock from '../../../doc-components/code-highlight/StyledCodeBlock.svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
</script>

<DocTitle title="Dark Mode" />
<DocIntoText text="Dapper UI has built-in support for dark mode." />

<DocContent>
	<DocSection title="Control Dark Mode">
		<DocSectionText>
			The dark mode is controlled by toggling the <code>d4r-dark</code> class. To remember the
			user's preference, you can add the following script to the <code>&lt;head&gt;</code> of your page:
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
		<DocSectionText>Dapper UI uses the following color scheme for dark mode:</DocSectionText>
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
		<DocSectionText>
			We recommend to use the <code>700</code> shade for your main background color.
		</DocSectionText>
	</DocSection>
</DocContent>
