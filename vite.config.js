import { sveltekit } from '@sveltejs/kit/vite';
import { ghPagesPostprocessor } from "./gh-pages-postprocessor";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), ghPagesPostprocessor()]
};

export default config;
