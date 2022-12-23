/**
 * Focuses the element when it is mounted.
 */
export function focusOnMount(
	node: HTMLElement,
	active: boolean | undefined
): SvelteActionReturnType {
	if (active) {
		node.focus();
	}
}
