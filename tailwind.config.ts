import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F1E9',
        beige: '#E8D6C1',
        orangeSoft: '#F29F67',
        brownLight: '#A87B59'
      },
      backgroundImage: {
        'ayna-gradient': 'radial-gradient(circle at top left, #F8F1E9, #FFFFFF 45%, #FFE7D4)'
      }
    }
  },
  plugins: []
};

export default config;
