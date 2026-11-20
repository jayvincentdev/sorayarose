// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

/**
 * Blog posts number their sections in Markdown like this:
 *
 *   ## 01 Start With a Calming Colour Palette
 *
 * This plugin moves the leading number into <span class="num">, which
 * global.css shows as the small label beside the heading. Headings
 * without a number are left alone.
 *
 * @type {import('@astrojs/markdown-satteri').SatteriMarkdownProcessorOptions['hastPlugins']}
 */
const numberedHeadings = [
  {
    name: 'numbered-headings',
    element: {
      filter: ['h2'],
      visit(node, ctx) {
        const [first, ...rest] = node.children;
        const match = first?.type === 'text' ? first.value.match(/^(\d+)\s+/) : null;
        if (!match) return;
        ctx.replaceNode(node, {
          ...node,
          children: [
            { type: 'element', tagName: 'span', properties: { className: ['num'] }, children: [{ type: 'text', value: match[1] }] },
            { type: 'text', value: first.value.slice(match[0].length) },
            ...rest,
          ],
        });
      },
    },
  },
];

export default defineConfig({
  // The live address (GitHub Pages with a custom domain; see public/CNAME).
  site: 'https://www.sorayarosestudio.co.uk',
  server: {
    // Let the dev/preview server answer requests through Cloudflare quick
    // tunnels, whose hostnames change each time (the leading dot allows any
    // subdomain of trycloudflare.com).
    allowedHosts: ['.trycloudflare.com'],
  },
  markdown: {
    processor: satteri({ hastPlugins: numberedHeadings }),
  },
});
