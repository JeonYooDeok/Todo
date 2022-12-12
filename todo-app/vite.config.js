import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	//핫모듈리로드
	server: {
		watch: {
			usePolling: true
		}
	}
	
	//핫모듈리로드
};

export default config;
