import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [...mdsvexConfig.extensions, ".svelte"],

	preprocess: [
		sveltePreprocess(),
		mdsvex(mdsvexConfig),
	],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		browser: {
			router: false,
			hydrate: false,
		},
		trailingSlash: "always",
	},
};

export default config;
