import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  // 请修改为你自己的线上地址，谢谢茄子
  site: 'https://www.linexic.top',

  // 如果你的网站在子路径下（例如 `https://example.com/koi/`），则填写 `/koi/`
  // 在根路径下（例如 `https://example.com/`）则填写 `/`
  base: process.env.NODE_ENV === "production" ? "/" : "",

  integrations: [mdx(), sitemap(), svelte()],

  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注",
      footnoteBackLabel: '文档内容的脚注',
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel()
});