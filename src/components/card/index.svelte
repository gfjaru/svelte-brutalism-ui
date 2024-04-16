<script lang="ts">
	import './style.scss';

	/**
	 * Show border, and the content padded inside
	 */
	export let bordered: boolean = true;

	/**
	 * Add more class to root card element
	 */
	export let className: string = '';

	/**
	 * Only support text
	 * use Slot to add more components inside
	 * eg: `<Card><b>Bold</b></Card>`
	 */
	export let content: string = '';

	const classNames = ['card', bordered ? 'bordered' : null, className].filter(Boolean).join(' ');
</script>

<div class={classNames}>
	{#if content}
		{content}
	{:else}
		<slot />
	{/if}
</div>

<style src="./style.scss"></style>
