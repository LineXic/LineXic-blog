import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from 'rehype-external-links';
import { remarkModifiedTime } from './src/utils/remark-modified-time.js';

export default defineConfig({
  build: {
    format: "file",
  },
  site: 'https://www.linexic.top',

  base: process.env.NODE_ENV === "production" ? "/" : "",

  integrations: [
    mdx(),
    sitemap(),
    svelte()
  ],

  markdown: {
    remarkPlugins: [remarkModifiedTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: '🔗' }
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
