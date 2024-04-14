import { base16 } from '../src/lib/theme/base16.svelte';
import ThemeProvider from '../src/utils/theme-provider.svelte';
import type { Preview } from '@storybook/svelte';
import { DecoratorHelpers } from '@storybook/addon-themes';

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

export const withSvelteTheme = ({ themes, defaultTheme }) => {
	initializeThemeState(Object.keys(themes), defaultTheme);

	return (_, context) => {
		const selectedTheme = pluckThemeFromContext(context);

		const selected = base16[selectedTheme] || base16[defaultTheme];

		return ({ Component: ThemeProvider, props: { context: context.globals, theme: selected } });
	};
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		withSvelteTheme({
			themes: base16,
			defaultTheme: "default"
		})
	]
};

export default preview;
