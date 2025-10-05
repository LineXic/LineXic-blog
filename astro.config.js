import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from 'rehype-external-links';
// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  // 请修改为你自己的线上地址，谢谢茄子
  site: 'https://www.linexic.top',
  // 如果你的网站在子路径下（例如 `https://example.com/koi/`），则填写 `/koi/`
  // 在根路径下（例如 `https://example.com/`）则填写 `/`
  base: process.env.NODE_ENV === "production" ? "/" : "",

  integrations: [mdx(), sitemap(), svelte()],

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: '🔗' }
        }
      ],
    ]
  },
 
  vite: {
    plugins: [tailwindcss()]
  }
});