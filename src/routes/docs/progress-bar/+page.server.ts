import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import ProgressBarSrc from '$lib/components/progress-bar/ProgressBar.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'ProgressBar',
				docs: parseSvelteComponent(ProgressBarSrc)
			}
		]
	};
}) satisfies PageServerLoad;
