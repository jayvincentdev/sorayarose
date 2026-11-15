// Tailwind (Play CDN) theme for Soraya Rose Studio.
// Loaded straight after https://cdn.tailwindcss.com on every page.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#f6f1ea',    // page background
        sand: '#ede4d8',     // alternate section background
        taupe: '#8c7a68',    // labels and accents
        ink: '#2a211b',      // body text and footer
        espresso: '#4b3527', // buttons and dark bands
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
};
