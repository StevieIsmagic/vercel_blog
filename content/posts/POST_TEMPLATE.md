---
title: "Blog Post Frontmatter Reference"
date: "2026-03-08"
description: "A reference guide for the required and optional frontmatter properties in blog posts"
published: true
---

# Blog Post Frontmatter Reference

Every `.md` or `.mdx` file in `content/posts/` must include YAML frontmatter at the top of the file.

## Required Properties

| Property      | Type   | Description                          |
| ------------- | ------ | ------------------------------------ |
| `title`       | string | The post title                       |
| `date`        | string | Publish date, e.g. `"2026-03-08"`    |
| `description` | string | Short summary shown in metadata/SEO  |

## Optional Properties

| Property    | Type     | Default | Description                                  |
| ----------- | -------- | ------- | -------------------------------------------- |
| `tags`      | string[] | —       | List of tags, e.g. `[philosophy, longevity]`  |
| `published` | boolean  | `true`  | Set to `false` to hide a post from the build |
| `image`     | string   | —       | Path to an OG image, e.g. `/images/post.png` |

## Example

```yaml
---
title: "My New Post"
date: "2026-03-08"
description: "A short description of the post"
tags: [philosophy, writing]
published: true
---
```

## Notes

- Files can be `.md` (plain Markdown) or `.mdx` (Markdown + React components).
- The slug is derived from the filename (e.g. `my-new-post.md` → `/blog/my-new-post`).
- If a required field is missing, Contentlayer will **silently skip** the file during build — no error is thrown.

## Agent Instructions

### File placement
- All posts go in `content/posts/`.
- Use kebab-case filenames: `my-post-title.md` or `my-post-title.mdx`.
- The filename becomes the URL slug. Do **not** include dates or paths in the filename.

### Choosing .md vs .mdx
- Use `.md` for plain prose (Obsidian-compatible).
- Use `.mdx` only when embedding React components (e.g. `<StaticTweet />`, custom charts).
- Both formats are processed through MDX under the hood — standard Markdown features (bold, lists, code blocks, etc.) work in either.

### Frontmatter rules
- All three required fields (`title`, `date`, `description`) must be present or the post will not appear.
- `date` format must be a quoted ISO-style string: `"YYYY-MM-DD"`.
- `description` is used for SEO meta tags and Open Graph — keep it under ~160 characters.
- `tags` uses YAML inline list syntax: `[tag1, tag2]`.
- Set `published: false` to draft a post without removing it from the repo.

### Content guidelines
- Markdown headings in post body should start at `##` (the post `title` renders as `<h1>`).
- Code blocks support syntax highlighting via `rehype-pretty-code` with the `one-dark-pro` theme.
- GFM (GitHub Flavored Markdown) is enabled: tables, strikethrough, task lists, and autolinks all work.
- Headings automatically get anchor links (`rehype-slug` + `rehype-autolink-headings`).

### Build & deploy
- The project builds with `next build`. Contentlayer runs as part of the Next.js build pipeline.
- The site deploys to Vercel — pushing to `main` triggers a production deploy.
- After creating or editing a post, always verify it appears in the build output under `● /blog/[slug]`.

### Common pitfalls
- Missing or misspelled frontmatter fields → post silently excluded from build.
- Placing files outside `content/posts/` → not picked up by Contentlayer.
- Using `.mdx` extension with invalid JSX → build will fail with a compile error.
- Forgetting to quote the `date` value → YAML may parse it as a Date object instead of a string.
