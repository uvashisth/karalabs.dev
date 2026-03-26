import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Kara Labs',
    description: 'Production AI agent systems. Benchmarks, comparisons, and implementation details.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: [post.data.formatTag, ...(post.data.topicTag ? [post.data.topicTag] : []), ...post.data.tags],
      content: post.body ?? '',
    })),
  });
}
