import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import AccordionSrc from '$lib/components/accordion/Accordion.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Accordion',
				docs: parseSvelteComponent(AccordionSrc)
			}
		]
	};
}) satisfies PageServerLoad;
