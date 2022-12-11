<script lang="ts">
	import { colorTailwindPink, colorTailwindSlate } from '$lib/colors/tailwind';
	import Button from '$lib/components/button/Button.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import type { DapperUiTheme } from '$lib/theme/DapperUiTheme';
	import { defaultDapperUiTheme } from '$lib/theme/default-theme';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
	import LoginForm from './docs/LoginForm.svelte';

	const themes: Record<string, DapperUiTheme> = {
		default: defaultDapperUiTheme,
		playful: {
			...defaultDapperUiTheme,
			font: {
				default: 'sans-serif'
			},
			colors: {
				...defaultDapperUiTheme.colors,
				primary: colorTailwindPink
			},
			radiuses: {
				...defaultDapperUiTheme.radiuses,
				button: '2xl',
				checkbox: 'md',
				input: '2xl',
				slider: {
					thumb: 'full',
					track: 'full'
				}
			}
		},
		professional: {
			...defaultDapperUiTheme,
			font: {
				default: 'serif'
			},
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
		}
	};

	let themeName: 'default' | 'playful' | 'professional' = 'default';
</script>

<div class="d4r-bg-neutral-100 d4r-py-16 dark:d4r-bg-dark-900">
	<Container
		center
		class="d4r-flex d4r-flex-col d4r-items-center d4r-justify-center d4r-gap-16 xl:d4r-flex-row-reverse"
	>
		<div class="d4r-max-w-xl d4r-space-y-8">
			<Text tag="h2" size="4xl" weight="bold" contrast="higher" color="primary">Customization</Text>
			<Text tag="p" prose size="lg">
				Dapper UI offers a high level of customizability. You can easily modify the global theme to
				change fonts, colors, border radiuses and more. Additionally, you can adjust the style of
				individual components to suit your specific needs. Give it a try by selecting another theme
				with the buttons below.
			</Text>

			<div class="d4r-flex d4r-flex-col d4r-gap-2 sm:d4r-flex-row">
				<Button on:click={() => (themeName = 'default')}>Default</Button>
				<ThemeProvider localStyle theme={themes.playful}>
					<Button on:click={() => (themeName = 'playful')}>Playful</Button>
				</ThemeProvider>
				<ThemeProvider localStyle theme={themes.professional}>
					<Button on:click={() => (themeName = 'professional')}>Professional</Button>
				</ThemeProvider>
			</div>
		</div>
		<div class="d4r-w-full d4r-max-w-xl 2xl:d4r-max-w-2xl">
			<ThemeProvider localStyle theme={themes[themeName]} class="d4r-w-full">
				<div class="d4r-flex d4r-w-full d4r-items-center d4r-justify-center">
					<div class="d4r-w-full d4r-max-w-xl 2xl:d4r-max-w-2xl">
						<div class="d4r-w-full d4r-space-y-2 d4r-rounded lg:d4r-p-8">
							<LoginForm theme={themeName} />
						</div>
					</div>
				</div>
			</ThemeProvider>
		</div>
	</Container>
</div>
