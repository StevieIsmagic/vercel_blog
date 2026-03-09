import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^(md|mdx)\//, ''),
  },
  tweetIds: {
    type: 'array',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(
        /<StaticTweet\sid="[0-9]+"\s\/>/g
      );
      return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
    },
  },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.date,
      dateModified: doc.date,
      description: doc.description,
      image: doc.image
        ? `https://steven.ocampo.io${doc.image}`
        : `https://steven.ocampo.io/api/og?title=${doc.title}`,
      url: `https://steven.ocampo.io/blog/${doc._raw.flattenedPath.replace(/^(md|mdx)\//, '')}`,
      author: {
        '@type': 'Person',
        name: 'Steven Ocampo',
      },
    }),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  // Accept both .md (from Obsidian) and .mdx (for rich components)
  filePathPattern: `**/*.{md,mdx}`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    // 'date' matches Obsidian vault frontmatter
    date: {
      type: 'string',
      required: true,
    },
    // 'description' matches Obsidian vault frontmatter
    description: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    published: {
      type: 'boolean',
      default: true,
    },
    image: {
      type: 'string',
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});