/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a18',
        'brand-light': '#f5f0e8',
        'brand-accent': '#d4a853',
        'cream': '#faf7f2',
        'warm-gray': '#6b6560',
        'surface': '#f0ece4',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem,8vw,6rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'hero': ['clamp(2.5rem,6vw,4.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'section': ['clamp(2rem,4vw,3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section': 'clamp(4rem,8vw,8rem)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
