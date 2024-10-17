import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			isr: {
				expiration: 60 * 60 * 24
			}
		})
	}
};
