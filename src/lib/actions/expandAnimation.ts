/**
 * This actions can be used to animate heigh expansions of an object.
 *
 * Height animations are usually tricky, because you cannot use transitions
 * with "height: auto" but only pixel heights (e.g., "height: 100px"). This
 * requires more complex JavaScript code to manually set the height to the
 * element's pixel height and then to "auto" once the expand-transition has
 * been finished (otherwise the height won't update if for example the window
 * gets resized).
 */
export function expandAnimation(node: HTMLElement, expanded: boolean): SvelteActionReturnType {
	node.classList.add('d4r-min-h-0', 'd4r-overflow-hidden', 'd4r-transition-all');

	// We must remember the client height because we can no longer retrieve it
	// once we set the height to "0"
	let clientHeight = node.clientHeight;

	node.style.height = expanded ? `auto` : '0';

	let expandAnimationTimeout: number | undefined;
	return {
		update(expanded: boolean) {
			if (expandAnimationTimeout) {
				clearTimeout(expandAnimationTimeout);
			}
			if (expanded) {
				node.style.height = `${clientHeight}px`;
				expandAnimationTimeout = window.setTimeout(() => {
					node.style.height = 'auto';
				}, 150);
			} else {
				// We cannot set it directly to 0 because then we animate from
				// "auto" to "0" which does not work. Instead, we first set it
				// to the pixel height, then wait one event-loop cycle and then
				// set ot to "0".
				node.style.height = `${node.clientHeight}px`;
				clientHeight = node.clientHeight;
				setTimeout(() => {
					node.style.height = '0';
				});
			}
		},

		destroy() {
			if (expandAnimationTimeout) {
				clearTimeout(expandAnimationTimeout);
			}
		}
	};
}
