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
		mdsvex(mdsvexConfig),
		sveltePreprocess(),
	],

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: "index.html",
		}),
	},
};

export default config;
