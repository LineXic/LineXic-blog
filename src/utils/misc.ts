import type { CollectionEntry } from "astro:content";

export type Post = CollectionEntry<'blog'>;

export interface FilterPostsOption {
    filterDraft?: boolean
    filterUnlisted?: boolean
}

export function filterPosts(posts: Post[], options: FilterPostsOption = {}) {
    return posts
        .map((e) => e)
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
        .filter(e => options.filterDraft ? (!e.data.draft) : true)
        .filter(e => options.filterUnlisted ? (!e.data.unlisted) : true)
}


export const sortByDate = (posts: CollectionEntry<'blog'>[]) => {
	return [...posts].sort((a, b) => 
        new Date(a.data.pubDate).getTime() - new Date(b.data.pubDate).getTime()
	);
};