import { z, defineCollection } from 'astro:content';
export const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Juhász Balázs'),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    keywords: z.array(z.string()),
  })
});
