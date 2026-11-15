# Soraya Rose Studio website

A simple static website for Soraya Rose Studio Ltd: plain HTML pages styled with
[Tailwind CSS](https://tailwindcss.com) loaded from its CDN. There is no build step.

## Pages

| File | Page |
| --- | --- |
| `index.html` | About (home page) |
| `our-story.html` | Our Story |
| `portfolio.html` | Portfolio |
| `services.html` | Our Services |
| `blog.html` | Blog listing |
| `blog-*.html` | Individual blog posts |
| `contact.html` | Contact |

## Previewing

Open `index.html` in a browser. It needs an internet connection, because Tailwind and the
fonts (Cormorant Garamond and Jost from Google Fonts) are loaded from the web.

## Adding photos

All photos live in `images/`. Each photo slot shows a warm placeholder until its file exists.
See [`images/README.md`](images/README.md) for the exact filenames and where each appears.

## Editing

- **Text:** edit the HTML file directly.
- **Menu and footer:** these are repeated on every page, so update each file
  (find-and-replace works well).
- **Colours and fonts:** `assets/tailwind.config.js`.
- **Custom styles** (buttons, blog article typography, monogram): `assets/styles.css`.
- **New blog post:** copy an existing `blog-*.html` file, change the content, then add a
  card for it in `blog.html` and update the previous/next links at the bottom of the
  neighbouring posts.

## Publishing

The site can be hosted anywhere that serves static files, for example GitHub Pages
(Settings → Pages → deploy from the `main` branch).

The Tailwind CDN is ideal for a simple site like this. If the site grows, Tailwind can later be
switched to a compiled stylesheet for slightly faster loading.
