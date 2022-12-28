import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import MeterSrc from '$lib/components/meter/Meter.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Meter',
				docs: parseSvelteComponent(MeterSrc)
			}
		]
	};
}) satisfies PageServerLoad;
