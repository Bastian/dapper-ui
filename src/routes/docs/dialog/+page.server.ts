import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import DialogSrc from '$lib/components/dialog/Dialog.svelte?raw';
import DialogHeaderSrc from '$lib/components/dialog/DialogHeader.svelte?raw';
import DialogContentSrc from '$lib/components/dialog/DialogContent.svelte?raw';
import DialogActionsSrc from '$lib/components/dialog/DialogActions.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Dialog',
				docs: parseSvelteComponent(DialogSrc)
			},
			{
				name: 'DialogHeader',
				docs: parseSvelteComponent(DialogHeaderSrc)
			},
			{
				name: 'DialogContent',
				docs: parseSvelteComponent(DialogContentSrc)
			},
			{
				name: 'DialogActions',
				docs: parseSvelteComponent(DialogActionsSrc)
			}
		]
	};
}) satisfies PageServerLoad;
