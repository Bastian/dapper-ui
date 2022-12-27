<script lang="ts">
	import { base } from '$app/paths';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocLink from '../DocLink.svelte';
	import DocSection from '../DocSection.svelte';
	import DocSectionText from '../DocSectionText.svelte';
	import DocTitle from '../DocTitle.svelte';
	import MeterExample from './MeterExample.svelte';
	import PropTable from '../../../doc-components/prop-table/PropTable.svelte';
	import MeterSrc from '$lib/components/meter/Meter.svelte?raw';
</script>

<DocTitle title="Meter" />
<DocImport what={['Meter']} from="core" />
<DocIntoText
	text="A visual representation of a numerical value within a specified range, such as displaying the battery percentage on a device."
/>

<DocContent>
	<MeterExample />

	<DocSection title="Accessibility + Usability">
		<DocSectionText>
			It is highly recommended to label the meter for accessibility purposes. Even if you do not
			want to display the label for aesthetic reasons, you should still set a label and hide it with
			the <code>hideLabel</code> prop. This ensures that the label is still accessible to users who rely
			on assistive technologies such as screen readers.
		</DocSectionText>
		<DocSectionText>
			Screen readers usually read the value of a meter as a percentage. However, if this doesn't
			accurately reflect the meter's current status, you should use the <code>ariaValuetext</code> prop
			to provide a more accurate text description of the current value.
		</DocSectionText>
		<DocSectionText>
			Avoid using the meter as a progress bar, for example to display file download progress.
			Instead, use the <DocLink href="{base}/docs/progress-bar">ProgressBar</DocLink> component for this
			purpose.
		</DocSectionText>
	</DocSection>

	<DocSection title="Props">
		<PropTable componentSrc={MeterSrc} />
	</DocSection>
</DocContent>
