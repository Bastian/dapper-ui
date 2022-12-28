import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import SelectSrc from '$lib/components/select/Select.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Select',
				docs: parseSvelteComponent(SelectSrc)
			}
		]
	};
}) satisfies PageServerLoad;
