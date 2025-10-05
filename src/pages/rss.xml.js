import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import {filterPosts} from "@/utils/misc";

export async function GET(context) {
	const posts = filterPosts(await getCollection('blog'), {
		filterDraft: true,
		filterUnlisted: true,
	});
	return rss({
  stylesheet: "/rss.xsl",
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/post/${post.slug}/`,
		categories: post.data.tags ?? [],
		})),
	});
}
