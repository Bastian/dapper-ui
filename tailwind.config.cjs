/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			primary: {
				50: 'rgb(var(--color-primary-50) / <alpha-value>)',
				100: 'rgb(var(--color-primary-100) / <alpha-value>)',
				200: 'rgb(var(--color-primary-200) / <alpha-value>)',
				300: 'rgb(var(--color-primary-300) / <alpha-value>)',
				400: 'rgb(var(--color-primary-400) / <alpha-value>)',
				500: 'rgb(var(--color-primary-500) / <alpha-value>)',
				600: 'rgb(var(--color-primary-600) / <alpha-value>)',
				700: 'rgb(var(--color-primary-700) / <alpha-value>)',
				800: 'rgb(var(--color-primary-800) / <alpha-value>)',
				900: 'rgb(var(--color-primary-900) / <alpha-value>)'
			},
			gray: {
				50: 'rgb(var(--color-gray-50) / <alpha-value>)',
				100: 'rgb(var(--color-gray-100) / <alpha-value>)',
				200: 'rgb(var(--color-gray-200) / <alpha-value>)',
				300: 'rgb(var(--color-gray-300) / <alpha-value>)',
				400: 'rgb(var(--color-gray-400) / <alpha-value>)',
				500: 'rgb(var(--color-gray-500) / <alpha-value>)',
				600: 'rgb(var(--color-gray-600) / <alpha-value>)',
				700: 'rgb(var(--color-gray-700) / <alpha-value>)',
				800: 'rgb(var(--color-gray-800) / <alpha-value>)',
				900: 'rgb(var(--color-gray-900) / <alpha-value>)'
			},
			dark: {
				50: 'rgb(var(--color-dark-50) / <alpha-value>)',
				100: 'rgb(var(--color-dark-100) / <alpha-value>)',
				200: 'rgb(var(--color-dark-200) / <alpha-value>)',
				300: 'rgb(var(--color-dark-300) / <alpha-value>)',
				400: 'rgb(var(--color-dark-400) / <alpha-value>)',
				500: 'rgb(var(--color-dark-500) / <alpha-value>)',
				600: 'rgb(var(--color-dark-600) / <alpha-value>)',
				700: 'rgb(var(--color-dark-700) / <alpha-value>)',
				800: 'rgb(var(--color-dark-800) / <alpha-value>)',
				900: 'rgb(var(--color-dark-900) / <alpha-value>)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
