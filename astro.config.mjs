import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkObsidianImage } from './src/plugins/remark-obsidian-image.mjs';

export default defineConfig({
  site: 'https://karalabs.dev',
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkObsidianImage],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
