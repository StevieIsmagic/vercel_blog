import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://steven.ocampo.io/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/about', '/blog', '/uses'].map(
    (route) => ({
      url: `https://steven.ocampo.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
