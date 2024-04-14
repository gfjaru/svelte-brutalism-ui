<script context="module">
	import { writable } from 'svelte/store';
	import { base16 } from '$lib/theme/base16.svelte';

	const defaultColorScheme = base16['default'];

	export const themeContextKey = {};

	const themeStore = writable(defaultColorScheme);
</script>

<script>
	import { setContext } from 'svelte';

	export let theme = {};

	$: $themeStore = { ...$themeStore, ...theme };

	setContext(themeContextKey, { theme: themeStore });
</script>

<div style={Object.entries({ ...theme }).reduce((s, [n, v]) => `${s}${n}:${v};`, '')}>
	<slot theme={$themeStore} />
</div>
