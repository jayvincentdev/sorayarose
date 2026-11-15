import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** All blog posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postUrl = (post: Post) => `/blog/${post.id}/`;

/** e.g. "October 2026" */
export const formatMonth = (date: Date) =>
  date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
