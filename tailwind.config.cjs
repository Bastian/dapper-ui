/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		process.env.BUILD_TARGET === 'lib'
			? './src/lib/**/*.{html,js,svelte,ts}'
			: './src/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	prefix: 'd4r-',
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			primary: {
				50: 'rgb(var(--d4r-color-primary-50) / <alpha-value>)',
				100: 'rgb(var(--d4r-color-primary-100) / <alpha-value>)',
				200: 'rgb(var(--d4r-color-primary-200) / <alpha-value>)',
				300: 'rgb(var(--d4r-color-primary-300) / <alpha-value>)',
				400: 'rgb(var(--d4r-color-primary-400) / <alpha-value>)',
				500: 'rgb(var(--d4r-color-primary-500) / <alpha-value>)',
				600: 'rgb(var(--d4r-color-primary-600) / <alpha-value>)',
				700: 'rgb(var(--d4r-color-primary-700) / <alpha-value>)',
				800: 'rgb(var(--d4r-color-primary-800) / <alpha-value>)',
				900: 'rgb(var(--d4r-color-primary-900) / <alpha-value>)'
			},
			neutral: {
				50: 'rgb(var(--d4r-color-neutral-50) / <alpha-value>)',
				100: 'rgb(var(--d4r-color-neutral-100) / <alpha-value>)',
				200: 'rgb(var(--d4r-color-neutral-200) / <alpha-value>)',
				300: 'rgb(var(--d4r-color-neutral-300) / <alpha-value>)',
				400: 'rgb(var(--d4r-color-neutral-400) / <alpha-value>)',
				500: 'rgb(var(--d4r-color-neutral-500) / <alpha-value>)',
				600: 'rgb(var(--d4r-color-neutral-600) / <alpha-value>)',
				700: 'rgb(var(--d4r-color-neutral-700) / <alpha-value>)',
				800: 'rgb(var(--d4r-color-neutral-800) / <alpha-value>)',
				900: 'rgb(var(--d4r-color-neutral-900) / <alpha-value>)'
			},
			dark: {
				50: 'rgb(var(--d4r-color-dark-50) / <alpha-value>)',
				100: 'rgb(var(--d4r-color-dark-100) / <alpha-value>)',
				200: 'rgb(var(--d4r-color-dark-200) / <alpha-value>)',
				300: 'rgb(var(--d4r-color-dark-300) / <alpha-value>)',
				400: 'rgb(var(--d4r-color-dark-400) / <alpha-value>)',
				500: 'rgb(var(--d4r-color-dark-500) / <alpha-value>)',
				600: 'rgb(var(--d4r-color-dark-600) / <alpha-value>)',
				700: 'rgb(var(--d4r-color-dark-700) / <alpha-value>)',
				800: 'rgb(var(--d4r-color-dark-800) / <alpha-value>)',
				900: 'rgb(var(--d4r-color-dark-900) / <alpha-value>)'
			}
		},
		borderRadius: {
			none: 'var(--d4r-border-radius-none)',
			sm: 'var(--d4r-border-radius-sm)',
			base: 'var(--d4r-border-radius-base)',
			DEFAULT: 'var(--d4r-border-radius-base)',
			md: 'var(--d4r-border-radius-md)',
			lg: 'var(--d4r-border-radius-lg)',
			full: 'var(--d4r-border-radius-full)',
			button: 'var(--d4r-border-radius-button)',
			input: 'var(--d4r-border-radius-input)',
			checkbox: 'var(--d4r-border-radius-checkbox)',
			'slider-thumb': 'var(--d4r-border-radius-slider-thumb)',
			'slider-track': 'var(--d4r-border-radius-slider-track)'
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
