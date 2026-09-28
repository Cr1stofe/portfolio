import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto), system-ui, sans-serif',
        alt: 'var(--font-ibm), monospace',
      },
      colors: {
        ocean: {
          50: '#eef4f9',
          100: '#d5e5f1',
          200: '#9fc5de',
          400: '#2b6389',
          500: '#1a4f72',
          600: '#113657',
          700: '#0d2941',
          900: '#06131e',
        },
        brand: {
          50: '#f0f7ff',
          100: '#dbeeff',
          200: '#baddfd',
          500: '#0e7abe',
          600: '#0a6399',
          700: '#085280',
        },
        accent: {
          orange: '#ea580c',
        },
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0,0,0,0.05), 0 1px 2px -1px rgba(0,0,0,0.04)',
        card: '0 4px 20px -2px rgba(13,41,65,0.08)',
        'card-hover': '0 10px 32px -4px rgba(13,41,65,0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
