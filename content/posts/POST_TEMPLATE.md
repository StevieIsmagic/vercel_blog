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
- If a required field is missing, Contentlayer will silently skip the file during build.
