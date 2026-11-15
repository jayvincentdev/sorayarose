// The site menu, used by the header (desktop and mobile) and the footer.
export const navLinks = [
  { href: '/', label: 'About' },
  { href: '/our-story/', label: 'Our Story' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/services/', label: 'Our Services' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

/** True when `href` is the current section (blog posts count as "Blog"). */
export function isCurrent(href: string, pathname: string) {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return href === '/' ? path === '/' : path.startsWith(href);
}
