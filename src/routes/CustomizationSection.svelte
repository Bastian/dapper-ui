<script lang="ts">
	import { colorTailwindGreen, colorTailwindSlate } from '$lib/colors/tailwind';
	import Button from '$lib/components/button/Button.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import type { DapperUiTheme } from '$lib/theme/DapperUiTheme';
	import { defaultDapperUiTheme } from '$lib/theme/default-theme';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
	import BrowserWindow from './BrowserWindow.svelte';
	import LoginForm from './examples/LoginForm.svelte';

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

	let theme: DapperUiTheme = themes.default;
</script>

<div class="d4r-bg-white d4r-py-16 dark:d4r-bg-dark-900">
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
				<Button on:click={() => (theme = themes.default)}>Default</Button>
				<Button radius="full" color="green" on:click={() => (theme = themes.playful)}>
					Playful
				</Button>
				<Button radius="none" color="slate" on:click={() => (theme = themes.professional)}>
					Professional
				</Button>
			</div>
		</div>
		<BrowserWindow class="d4r-w-full d4r-max-w-xl 2xl:d4r-max-w-2xl">
			<ThemeProvider localStyle {theme}>
				<div class="d4r-flex d4r-items-center d4r-justify-center">
					<div class="d4r-w-full d4r-max-w-lg">
						<div
							class="-d4r-ml-[12.5%] d4r-w-[125%] d4r-scale-75 d4r-space-y-2 d4r-rounded lg:d4r-p-8"
						>
							<LoginForm />
						</div>
					</div>
				</div>
			</ThemeProvider>
		</BrowserWindow>
	</Container>
</div>
