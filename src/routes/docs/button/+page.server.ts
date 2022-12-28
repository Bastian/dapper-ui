import ButtonSrc from '$lib/components/button/Button.svelte?raw';
import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Button',
				docs: parseSvelteComponent(ButtonSrc)
			}
		]
	};
}) satisfies PageServerLoad;
