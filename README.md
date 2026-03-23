# Kara Labs — Blog

Personal site and technical blog on production AI agent systems.

Built with [Astro](https://astro.build) + MDX. Deployed on [Vercel](https://vercel.com).

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Production build
npm run preview    # Preview build locally
```

## Writing a Post

Create a new `.mdx` file in `src/content/blog/`:

```yaml
---
title: "Your Post Title"
description: "One-line description for SEO and cards."
date: 2026-03-29
category: "Technical"           # Technical | Comparison | Production | Case Study | Open Source
tags: ["LangGraph", "Agents"]
draft: false                    # Set true to hide from listings
---

Your markdown content here.
```

## Structure

```
src/
├── content/blog/    MDX posts
├── components/      Header, Footer, BlogCard, ThemeToggle
├── layouts/         Base, BlogPost
├── pages/           Routes (/, /blog, /about, 404)
└── styles/          Global CSS (light/dark theme)
```

## TODO

- [ ] Add custom domain in Vercel + astro.config.mjs
- [ ] Create OG default image (1200x630 PNG → public/og-default.png)
- [ ] Uncomment Plausible analytics script in Base.astro
