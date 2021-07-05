import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter({}),
    target: '#svelte',
    ssr: true,
  },
};
export default config;
