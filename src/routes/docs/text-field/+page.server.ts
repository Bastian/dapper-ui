import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import TextFieldSrc from '$lib/components/text-field/TextField.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'TextField',
				docs: parseSvelteComponent(TextFieldSrc)
			}
		]
	};
}) satisfies PageServerLoad;
