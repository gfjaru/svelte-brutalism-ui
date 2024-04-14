<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import './style.scss';
	import type { ButtonVariantsType } from './button.ts';

	export let block: boolean = false;
	export let label: string = '';
	export let href: string = '';
	export let onClick: MouseEventHandler<HTMLButtonElement> = () => undefined;
	export let variant: ButtonVariantsType = 'primary';

	const classNames = ['btn', variant, block ? 'block' : null].filter(Boolean);
</script>

{#if href}
	<a {href} class={classNames.join(' ')}>
		{label}
	</a>
{:else}
	<button on:click={onClick} class={classNames.join(' ')}>
		{label}
	</button>
{/if}

<style lang="scss" global src="./style.scss">
</style>
