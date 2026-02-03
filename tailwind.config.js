/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Greens (emphasis on landscaping)
        'forest-green': '#217650',
        'sage-green': '#7ba05b',
        'moss-green': '#4a6741',
        // Accents
        'cream': '#f9fafd',
        'earth-brown': '#8c756a',
        'light-aqua': '#99dfec',
        'turquoise': '#1ac8db',
        'ocean-blue': '#0292b7',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7ba05b 0%, #217650 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1ac8db 0%, #0292b7 100%)',
        'gradient-earth': 'linear-gradient(135deg, #8c756a 0%, #4a6741 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
