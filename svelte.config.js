import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/dapper-ui'
		}
	}
};

export default config;
