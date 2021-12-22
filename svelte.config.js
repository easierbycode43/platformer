import preprocess from 'svelte-preprocess';
const { scss } = preprocess;
import adapter from '@sveltejs/adapter-static';
import base from './src/lib/base.js';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		scss({})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			assets: 'docs',
			pages: 'docs'
		}),
		paths: {
			base
		}
	}
};

export default config;