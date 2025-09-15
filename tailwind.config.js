/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Create Display', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#40000B',
          dark: '#2e0008',
        },
        secondary: '#030712',
        accent: {
          left: '#021341',
          mid: '#D32D3A',
          right: '#DA9A19',
        },
        background: '#FFFFFF',
        surface: '#FFFFFF',
        text: {
          primary: '#40000B',
          secondary: '#374151',
        },
        button: {
          text: '#F9FAFB',
        },
      },
      fontSize: {
        'h1-mobile': ['32px', { lineHeight: '34px', fontWeight: '700' }],
        'h1-desktop': ['40px', { lineHeight: '42.5px', fontWeight: '800' }],
        'h2-mobile': ['32px', { lineHeight: '32px', fontWeight: '900' }],
        'h2-desktop': ['64px', { lineHeight: '64px', fontWeight: '900' }],
        'body-mobile': ['14px', { lineHeight: '21px', fontWeight: '500' }],
        'body-desktop': ['20px', { lineHeight: '24px', fontWeight: '500' }],
        'button-mobile': ['14px', { lineHeight: '19px', fontWeight: '700' }],
        'button-desktop': ['16px', { lineHeight: '19px', fontWeight: '700' }],
      },
      maxWidth: {
        'container': '1440px',
      },
      borderRadius: {
        'button': '8.26px',
        'card': '10px',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #021341 0%, #D32D3A 50%, #DA9A19 100%)',
      },
      boxShadow: {
        'card': '0 6px 20px rgba(2,6,23,0.08)',
        'program': '0 6px 14px rgba(2,6,23,0.06)',
      },
    },
  },
  plugins: [],
}