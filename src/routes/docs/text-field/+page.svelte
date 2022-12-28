<script lang="ts">
	import TextField from '$lib/components/text-field/TextField.svelte';
	import { User } from 'tabler-icons-svelte';
	import DocBox from '../DocBox.svelte';
	import DocContent from '../DocContent.svelte';
	import DocImport from '../DocImport.svelte';
	import DocIntoText from '../DocIntoText.svelte';
	import DocSection from '../DocSection.svelte';
	import DocTitle from '../DocTitle.svelte';
	import PropsSection from '../PropsSection.svelte';
	import type { PageData } from './$types';
	import TextFieldExample from './TextFieldExample.svelte';

	export let data: PageData;
</script>

<DocTitle title="TextField" />
<DocImport what="TextField" from="core" />
<DocIntoText
	text="The TextField component is a versatile input field that allows users to enter text, numbers, and passwords. It can be customized in size and color."
/>

<DocContent>
	<TextFieldExample />

	<DocSection title="Variants">
		<DocBox
			class="d4r-grid d4r-grid-cols-1 d4r-gap-4 d4r-p-8 sm:d4r-grid-cols-2 lg:d4r-grid-cols-3"
		>
			<TextField label="Default" />
			<TextField label="Number" type="number" />
			<TextField label="Password" type="password" />
			<TextField label="Placeholder" placeholder="Placeholder" />
			<TextField placeholder="jane.doe@dapper-ui.dev" label="Start Icon">
				<User slot="icon-start" />
			</TextField>
			<TextField label="Required" required />
			<TextField label="Disabled" disabled />
			<TextField label="Readonly" readonly value="Readonly" />
			<TextField label="Error" error="Something is wrong!" />
			<TextField label="Help Text" helpText="Need Help?" />
			<TextField label="Round" radius="full" />
			<TextField label="Square" radius="none" />
			<TextField label="Colored" color="green" />
			<TextField class="d4r-self-end" label="Hidden Label" placeholder="Hidden Label" hideLabel />
			<TextField class="d4r-self-end" label="Small" size="sm" />
			<TextField class="d4r-col-span-1 sm:d4r-col-span-2 lg:d4r-col-span-3" label="Full Width" />
		</DocBox>
	</DocSection>

	<PropsSection data={data.docs} />
</DocContent>
