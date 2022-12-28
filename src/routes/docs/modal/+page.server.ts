import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import ModalSrc from '$lib/components/modal/Modal.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Modal',
				docs: parseSvelteComponent(ModalSrc)
			}
		]
	};
}) satisfies PageServerLoad;
