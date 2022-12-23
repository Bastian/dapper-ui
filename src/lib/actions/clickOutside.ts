/**
 * Reacts to clicks outside of the node the action is applied to.
 */
export function clickOutside(
	node: HTMLElement,
	onEventFunction: () => void
): SvelteActionReturnType {
	const handleClick = (event: Event) => {
		const path = event.composedPath();

		if (!path.includes(node)) {
			onEventFunction();
		}
	};

	document.addEventListener('click', handleClick);

	return {
		destroy() {
			document.removeEventListener('click', handleClick);
		}
	};
}
