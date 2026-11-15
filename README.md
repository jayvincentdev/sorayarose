# Soraya Rose Studio website

The website for Soraya Rose Studio Ltd, built with [Astro](https://astro.build) and styled with
[Tailwind CSS](https://tailwindcss.com) (loaded from its CDN). Astro turns the templates in `src/`
into plain static HTML in `dist/`.

## Getting started

Requires [Node.js](https://nodejs.org) 22.23.4 or later (24 recommended).

```sh
npm install      # once
npm run dev      # preview at http://localhost:4321, reloads as you edit
npm run build    # build the finished site into dist/
npm run preview  # preview the built site
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/layouts/BaseLayout.astro` | The page shell used by every page: `<head>`, header, "Begin your project" band, footer |
| `src/components/SiteHeader.astro` | Header and mobile menu |
| `src/components/SiteFooter.astro` | Footer |
| `src/components/CallToAction.astro` | "Begin your project" band |
| `src/components/Logo.astro` | SR monogram and wordmark (header and footer) |
| `src/data/navigation.ts` | Menu links (header and footer) |
| `src/pages/` | One file per page; the file name is the URL |
| `src/content/blog/` | Blog posts, one Markdown file each |
| `src/pages/blog/` | Blog listing and blog post templates |
| `src/styles/global.css` | Custom styles (buttons, blog article typography, monogram) |
| `public/` | Files copied as-is: `images/`, favicon, Tailwind theme |

## Pages

| File | URL |
| --- | --- |
| `src/pages/index.astro` | `/` About (home page) |
| `src/pages/our-story.astro` | `/our-story/` |
| `src/pages/portfolio.astro` | `/portfolio/` |
| `src/pages/services.astro` | `/services/` |
| `src/pages/blog/index.astro` | `/blog/` |
| `src/content/blog/<name>.md` | `/blog/<name>/` |
| `src/pages/contact.astro` | `/contact/` |

Each page wraps its content in the layout and sets its title and description:

```astro
<BaseLayout title="Our Story" description="…">
  …page content…
</BaseLayout>
```

The layout also takes `header="overlay"` (transparent header over a full-screen photo, used on
the home page) and `showCta={false}` (hide the "Begin your project" band, used on Contact).
The menu highlights the current page automatically.

## Editing

- **Text:** edit the page in `src/pages/`.
- **Menu, header and footer:** edit once in `src/components/` or `src/data/navigation.ts`;
  every page updates.
- **Colours and fonts:** `public/assets/tailwind.config.js`.
- **Custom styles:** `src/styles/global.css`.
- **Photos:** see [`public/images/README.md`](public/images/README.md) for the filenames and where
  each appears. Each photo slot shows a warm placeholder until its file exists.

## Writing a blog post

Add a Markdown file to `src/content/blog/`. Its file name becomes the URL, so
`garden-rooms.md` is published at `/blog/garden-rooms/`. Start it with:

```markdown
---
title: "How to Plan the Perfect Garden Room"
subtitle: "Italic line shown under the title"
description: "Opening line of the post. Also used on the blog page card and in search results."
date: 2026-12-01
image: /images/blog-garden-rooms.jpg
signoff: "Closing line, shown centred in large italics."
---

First paragraph…

## 01 First numbered section

Text…

> **Our tip** A highlighted tip or prediction.

## A heading without a number

---

Final paragraph after a short divider line.
```

That is all: the blog page, its "Latest" feature and the Previous / Next links between posts are
generated from the dates, newest first. Only the month and year of `date` are shown.

## Publishing

Run `npm run build` and upload the contents of `dist/` to any static host. Netlify, Vercel and
Cloudflare Pages can build it automatically from the repository (build command
`npm run build`, output folder `dist`). For GitHub Pages, see
[Astro's deployment guide](https://docs.astro.build/en/guides/deploy/github/).
