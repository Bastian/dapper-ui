import { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			// Use the same "resolve" configuration as your app
			resolve: {
				...(await import('../vite.config.js')).default.resolve,
				alias: {
					...((await import('../vite.config.js')).default.resolve?.alias || {}),
					$lib: '/src/lib'
				}
			},
			// Add dependencies to pre-optimization
			optimizeDeps: {
				include: ['storybook-dark-mode']
			}
		});
	}
};

export default config;
