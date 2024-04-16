<script lang="ts" context="module">
	import { ButtonTypes, ButtonVariants } from './constants.js';

	export type ButtonTypesType = (typeof ButtonTypes)[number];
	export type ButtonVariantsType = (typeof ButtonVariants)[number];
</script>

<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import './style.scss';

	// Set as block component
	export let block: boolean = false;

	// Add more class to button / a element.
	export let className: string = '';

	// Set disabled props
	export let disabled: boolean = false;

	/**
	 * The thing is, this can be used or use <slot> instead.
	 * eg: `<Button>Label</button>`
	 */
	export let label: string = '';

	// Convert button to link
	export let href: string = '';

	// Property for target on anchor tag, will not work if href not exist
	export let target: string = '';

	// On click event
	export let onClick: MouseEventHandler<HTMLButtonElement> = () => undefined;

	// Button HTML type
	export let type: ButtonTypesType = 'button';

	// Button color variant
	export let variant: ButtonVariantsType = 'primary';

	const classNames = ['btn', variant, block ? 'block' : null, className].filter(Boolean);
</script>

{#if href}
	<a {href} class={classNames.join(' ')} {target}>
		{label}
	</a>
{:else}
	<button {disabled} on:click={onClick} class={classNames.join(' ')} {type}>
		{#if label}
			{label}
		{:else}
			<slot />
		{/if}
	</button>
{/if}
