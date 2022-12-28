import { parseSvelteComponent } from '../../../util/parse-component-src';
import type { PageServerLoad } from './$types';
import SliderSrc from '$lib/components/slider/Slider.svelte?raw';

export const load = (() => {
	return {
		docs: [
			{
				name: 'Slider',
				docs: parseSvelteComponent(SliderSrc)
			}
		]
	};
}) satisfies PageServerLoad;
