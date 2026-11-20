// Tailwind (Play CDN) theme for Soraya Rose Studio.
// Loaded straight after https://cdn.tailwindcss.com on every page.
tailwind.config = {
  theme: {
    extend: {
      // Soraya Rose brand palette
      colors: {
        stone: '#E3D8CD', // Light stone: page background, light text on dark bands
        taupe: '#BCAA93', // Taupe: alternate sections (used at 30%: bg-taupe/30)
        brown: '#82684B', // Mid brown: labels, accents, hovers
        ink: '#3A3229',   // Dark brown-black: text, buttons, "Begin your project" band, footer
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
};
