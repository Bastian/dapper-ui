import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import CheckboxSrc from '$lib/components/checkbox/Checkbox.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Checkbox',
				docs: parseSvelteComponent(CheckboxSrc)
			}
		]
	};
}) satisfies PageServerLoad;
