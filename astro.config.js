import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links';
import pagefind from "astro-pagefind";

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

  integrations: [mdx(), sitemap(), svelte(), pagefind()],

  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注",
      footnoteBackLabel: '返回内容',
    },
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