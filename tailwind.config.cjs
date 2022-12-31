const colors = ['primary', 'neutral', 'dark'];
const radiuses = [
	'none',
	'sm',
	'base',
	'md',
	'lg',
	'full',
	'button',
	'input',
	'checkbox',
	'slider-thumb',
	'slider-track',
	'dialog',
	'progressbar',
	'meter'
];

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		process.env.BUILD_TARGET === 'lib'
			? './src/lib/**/*.{html,js,svelte,ts}'
			: './src/**/*.{html,js,svelte,ts}'
	],
	safelist: [
		{
			// We mention these utilities in the docs and explicitly allow users
			// to use them.
			pattern: /^d4r-bg-(dark|neutral)-\d{2,3}$/,
			variants: ['dark']
		}
	],
	darkMode: 'class',
	prefix: 'd4r-',
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			...colors.reduce(
				(acc, color) => ({
					...acc,
					[color]: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
						(acc, shade) => ({
							...acc,
							[shade]: `rgb(var(--d4r-color-${color}-${shade}) / <alpha-value>)`
						}),
						{}
					)
				}),
				{}
			)
		},
		borderRadius: {
			DEFAULT: 'var(--d4r-border-radius-base)',
			...radiuses.reduce(
				(acc, name) => ({ ...acc, [name]: `var(--d4r-border-radius-${name})` }),
				{}
			)
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
