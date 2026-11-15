import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts: one Markdown file per post in src/content/blog/.
// The file name becomes the URL, e.g. luxury-hotel-bathroom.md -> /blog/luxury-hotel-bathroom/
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Italic line under the title on the post page. */
    subtitle: z.string(),
    /** Opening line of the post; also the blog card summary and search-engine description. */
    description: z.string(),
    /** Publication date (only the month and year are shown). Posts are ordered by this. */
    date: z.coerce.date(),
    /** Photo path, e.g. /images/blog-hotel-bathroom.jpg */
    image: z.string(),
    /** Closing line, shown centred in large italics at the end of the post. */
    signoff: z.string(),
  }),
});

export const collections = { blog };
