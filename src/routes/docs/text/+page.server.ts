import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import TextSrc from '$lib/components/text/Text.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Text',
				docs: parseSvelteComponent(TextSrc)
			}
		]
	};
}) satisfies PageServerLoad;
