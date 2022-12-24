<script lang="ts">
	import { BackgroundScrollBlocker } from '$lib';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { generateRandomId } from '$lib/helpers/generateRandomId';
	import { createEventDispatcher, setContext } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	/**
	 * The id of the modal.
	 *
	 * When not set, it is automatically generated.
	 *
	 * Can be accessed via the `d4r-modal-id` context.
	 */
	export let id = `d4r-modal-${generateRandomId()}`;

	/**
	 * Whether the modal is open.
	 *
	 * This value can be bound to and will be set to `false` when the user
	 * clicks outside of the modal or presses the Esc key.
	 */
	export let open = false;

	/**
	 * Whether the modal should be closed when the user clicks outside of it.
	 */
	export let disableCloseOnOutsideClick = false;

	/**
	 * Whether the modal should be closed when the user presses the Esc key.
	 */
	export let disableCloseOnEscape = false;

	/**
	 * The id of the element that should automatically be focused when the modal is opened.
	 */
	export let autoFocusElement: string | undefined = undefined;

	/**
	 * The aria-labelledby attribute.
	 */
	export let ariaLabelledby: string | undefined = undefined;

	/**
	 * The aria-describedby attribute.
	 */
	export let ariaDescribedby: string | undefined = undefined;

	let modalElement: HTMLElement;

	const dispatch = createEventDispatcher();

	function dialogTransition(node: Element, { delay = 0, duration = 400 }) {
		const o = +getComputedStyle(node).opacity;
		return {
			delay,
			duration,
			css: (t: number) => {
				const eased = cubicInOut(t);
				return `
                    opacity: ${t * o};
                    transform: scale(${eased * 0.05 + 0.95})
                `;
			}
		};
	}

	setContext('d4r-modal-close-function', close);

	setContext('d4r-modal-set-aria-labelledby-function', (labelledBy: string) => {
		if (!ariaLabelledby) {
			ariaLabelledby = labelledBy;
		}
	});

	setContext('d4r-modal-set-aria-describedby-function', (describedBy: string) => {
		if (!ariaDescribedby) {
			ariaDescribedby = describedBy;
		}
	});

	$: setContext('d4r-modal-id', id);

	function close() {
		open = false;
		dispatch('close');
	}

	// A boolean that is true if the modal has been opened recently
	let openedRecently: boolean;
	$: {
		if (open) {
			openedRecently = true;
			setTimeout(() => (openedRecently = false), 200);
		} else {
			openedRecently = false;
		}
	}

	function handleClickOutside() {
		// We only close the modal when it was not opened recently.
		// This is mainly to prevent the dialog from closing immediately
		// because the click-outside is also triggered by the action that
		// caused the modal to open.
		if (!openedRecently && !disableCloseOnOutsideClick) {
			close();
		}
	}

	function getTabbableNodes(parent: HTMLElement) {
		const nodes = parent.querySelectorAll('*');
		return Array.from(nodes)
			.filter((node): node is HTMLElement => node instanceof HTMLElement)
			.filter((node: HTMLElement) => node.tabIndex >= 0);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key == 'Escape' && !disableCloseOnEscape) {
			close();
		}
		// Trap focus to prevent the user from tabbing out of the modal
		// while it is open
		if (open && event.key === 'Tab') {
			const tabbable = getTabbableNodes(modalElement);
			let index =
				document.activeElement instanceof HTMLElement
					? tabbable.indexOf(document.activeElement)
					: -1;
			if (index === -1 && event.shiftKey) index = 0;
			index += tabbable.length + (event.shiftKey ? -1 : 1);
			index %= tabbable.length;
			if (tabbable[index]) {
				tabbable[index].focus();
			}
			event.preventDefault();
		}
	}

	function handleDialogOpen(element: HTMLElement) {
		// Remove focus from elements outside the modal
		const tabbable = getTabbableNodes(element);
		if (autoFocusElement) {
			const elementToFocus = tabbable.find((element) => element.id === autoFocusElement);
			if (elementToFocus) {
				elementToFocus.focus();
				return;
			}
		}
		if (
			document.activeElement instanceof HTMLElement &&
			tabbable.includes(document.activeElement)
		) {
			return;
		}
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<BackgroundScrollBlocker />
	<div
		{id}
		bind:this={modalElement}
		use:handleDialogOpen
		class="d4r-fixed d4r-inset-0 d4r-z-50 d4r-flex d4r-items-center d4r-justify-center d4r-overflow-y-auto"
		aria-labelledby={ariaLabelledby}
		aria-describedby={ariaDescribedby}
		role="dialog"
		aria-modal="true"
	>
		<div class="d4r-max-w-full d4r-overflow-hidden">
			<div
				transition:fade={{ duration: 200 }}
				class="d4r-fixed d4r-inset-0 d4r-bg-black/75 d4r-transition-opacity dark:d4r-bg-black/75"
				aria-hidden="true"
			/>

			<div
				transition:dialogTransition={{ duration: 200 }}
				use:clickOutside={handleClickOutside}
				class="d4r-transform d4r-overflow-hidden d4r-transition-all"
			>
				<slot />
			</div>
		</div>
	</div>
{/if}
