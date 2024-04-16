<script lang="ts" context="module">
	export const ButtonTypes = ['button', 'submit', 'reset'] as const;
	export type ButtonTypesType = (typeof ButtonTypes)[number];

	export const ButtonVariants = ['primary', 'danger', 'warning', 'success'] as const;
	export type ButtonVariantsType = (typeof ButtonVariants)[number];
</script>

<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import './style.scss';

	export let block: boolean = false;
	export let className: string = '';
	export let disabled: boolean = false;

	/**
	 * The thing is, this can be used or use <slot> instead.
	 * eg: `<Button>Label</button>`
	 */
	export let label: string = '';

	// Link props
	export let href: string = '';
	export let target: string = '';

	export let onClick: MouseEventHandler<HTMLButtonElement> = () => undefined;
	export let type: ButtonTypesType = 'button';
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

<style lang="scss" global src="./style.scss">
</style>
