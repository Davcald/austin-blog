// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://davcald.github.io',
	base: '/austin-blog',
	integrations: [mdx(), sitemap()],
});
