import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    formatTag: z.enum(['Fundamentals', 'Comparison', 'Benchmark', 'Case Study', 'Build Log', 'Opinion', 'Open Source']),
    topicTag: z.enum(['Context Engineering', 'Evaluation', 'Infrastructure', 'Security']).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
