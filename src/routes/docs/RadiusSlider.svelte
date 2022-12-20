<script lang="ts">
	import { Slider } from '$lib';
	import type { Radius } from '$lib/theme/DapperUiTheme';

	export let radius: Radius;

	const radiuses = ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'full'] as const;

	function handleInput(event: Event) {
		const value = (event.target as unknown as { value: number }).value;
		radius = radiuses[value];
	}
</script>

<Slider label="Radius" value={radiuses.indexOf(radius)} on:input={handleInput} min={0} max={8} />
