<script lang="ts">
	import { base } from '$app/paths';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocLink from '../DocLink.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';
	import ProgressBarExample from './ProgressBarExample.svelte';

	export let data: PageData;
</script>

<DocTitle title="ProgressBar" />
<DocImport what={['ProgressBar']} from="core" />
<DocIntoText text="A visual representation of the progress of a task, such as a download." />

<DocContent>
	<ProgressBarExample />

	<DocSection title="Accessibility + Usability">
		<DocSectionText>
			It is highly recommended to label the progress bar for accessibility purposes. Even if you do
			not want to display the label for aesthetic reasons, you should still set a label and hide it
			with the <code>hideLabel</code> prop. This ensures that the label is still accessible to users
			who rely on assistive technologies such as screen readers.
		</DocSectionText>
		<DocSectionText>
			Screen readers usually read the value of a progress bar as a percentage. However, if this
			doesn't accurately reflect the progress bar's current status, you should use the
			<code>ariaValuetext</code> prop to provide a more accurate text description of the current value.
		</DocSectionText>
		<DocSectionText>
			Avoid using the progress bar as a meter, such as for displaying remaining battery percentage.
			Instead, use the <DocLink href="{base}/docs/meter">Meter</DocLink> component for this purpose.
		</DocSectionText>
	</DocSection>

	<PropsSection data={data.docs} />
</DocContent>
