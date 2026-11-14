import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import pagefind from "astro-pagefind";
import fs from 'node:fs';
import path from 'node:path';

const MIME_TYPES = {
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.map': 'application/json',
  '.wasm': 'application/wasm',
  '.html': 'text/html',
  '.txt': 'text/plain',
  '.webmanifest': 'application/manifest+json',
};

// astro-pagefind 在 dev 模式下从 build.client（vercel 适配器下为不存在的 dist/client）找
// pagefind 文件导致 404；此集成在 dev 时将 /pagefind/ 指向 dist/pagefind
function servePagefindDev() {
  return {
    name: 'pagefind-dev-serve',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use((req, res, next) => {
          if (!req.url?.startsWith('/pagefind/')) return next();
          const pathname = decodeURIComponent(req.url.split('?')[0]);
          const distDir = path.resolve(process.cwd(), 'dist');
          const filePath = path.resolve(distDir, '.' + pathname);
          if (!filePath.startsWith(distDir) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
            return next();
          }
          res.setHeader('Content-Type', MIME_TYPES[path.extname(filePath)] ?? 'application/octet-stream');
          fs.createReadStream(filePath).pipe(res);
        });
      },
    },
  };
};
// https://astro.build/config
export default defineConfig({
  // 请修改为你自己的线上地址，谢谢茄子
  site: 'https://www.linexic.top',

  // 如果你的网站在子路径下（例如 `https://example.com/koi/`），则填写 `/koi/`
  // 在根路径下（例如 `https://example.com/`）则填写 `/`
  base: process.env.NODE_ENV === "production" ? "/" : "",

  integrations: [mdx(), sitemap(), svelte(), pagefind(), servePagefindDev()],

  markdown: {
    processor: unified({
      remarkRehype: {
        footnoteLabel: "脚注",
        footnoteBackLabel: '文档内容的脚注',
      },
      /**
       * 标题锚点（Heading Anchor）
       *
       * 渲染结果形如：
       *   <h2 id="astro-配置">
       *     <a class="header-anchor" aria-hidden="true" tabindex="-1" href="#astro-配置"></a>
       *     Astro 配置
       *   </h2>
       *
       * 说明：
       * 1. Astro 自带的 rehypeHeadingIds 会在「用户 rehype 插件之后」才注入 id，
       *    而 rehype-autolink-headings 只处理「已有 id」的标题，
       *    所以这里必须先手动跑一次 rehypeSlug 生成 id（同样基于 github-slugger，
       *    与 Astro 默认规则一致；已存在的 id 会被 Astro 保留并写入 headings 元数据）。
       * 2. content: [] 让 <a> 不输出多余子元素，图标由 CSS 伪元素绘制。
       */
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            properties: {
              className: ['header-anchor'],
              ariaHidden: 'true',
              tabIndex: -1,
            },
            content: [],
          },
        ],
      ],
    }),
  },

  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel()
});