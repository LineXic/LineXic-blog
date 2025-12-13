import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /
Disallow: /img/
Disallow: /_astro/
Disallow: /code/
Disallow: /dist/

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-0.xml', site);
  return new Response(getRobotsTxt(sitemapURL));
};