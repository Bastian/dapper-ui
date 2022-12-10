<script lang="ts">
	import { colorTailwindGreen, colorTailwindSlate } from '$lib/colors/tailwind';
	import Select from '$lib/components/select/Select.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import type { DapperUiTheme } from '$lib/theme/DapperUiTheme';
	import { defaultDapperUiTheme } from '$lib/theme/default-theme';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
	import LoginForm from './examples/LoginForm.svelte';

	let currentTheme = 'default';

	const themes: Record<string, DapperUiTheme> = {
		default: defaultDapperUiTheme,
		professional: {
			...defaultDapperUiTheme,
			colors: {
				...defaultDapperUiTheme.colors,
				primary: colorTailwindSlate
			},
			radiuses: {
				...defaultDapperUiTheme.radiuses,
				button: 'none',
				checkbox: 'none',
				input: 'none',
				slider: {
					thumb: 'none',
					track: 'none'
				}
			}
		},
		playful: {
			...defaultDapperUiTheme,
			colors: {
				...defaultDapperUiTheme.colors,
				primary: colorTailwindGreen
			},
			radiuses: {
				...defaultDapperUiTheme.radiuses,
				button: 'full',
				checkbox: 'md',
				input: 'full',
				slider: {
					thumb: 'full',
					track: 'full'
				}
			}
		}
	};
</script>

<ThemeProvider localStyle class="d4r-w-full d4r-max-w-lg" theme={themes[currentTheme]}>
	<div class="d4r-space-y-2 d4r-rounded d4r-bg-neutral-100 d4r-p-8 d4r-shadow dark:d4r-bg-dark-600">
		<Text tag="div">Example UI build with dapper</Text>
		<LoginForm />

		<Select label="Design" bind:value={currentTheme}>
			<option value="default">Default</option>
			<option value="professional">Professional</option>
			<option value="playful">Playful</option>
		</Select>
	</div>
</ThemeProvider>
