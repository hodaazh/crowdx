/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1440px' },
      // => (max-width: 1440px) Desktop
      xl: { max: '1280px' },
      // => (max-width: 1280px) Small Desktop
      lg: { max: '1024px' },
      // => (max-width: 1024px) Large Tablet
      md: { max: '768px' },
      // => (max-width: 768px) Tablet
      sm: { max: '640px' },
      // => (max-width: 640px) Phablet
      xs: { max: '480px' },
      // => (max-width: 480px) Phone
      '2xs': { max: '320px' },
      // => (max-width: 320px) Mini Phone
    },
    fontFamily: {
      sans: ['Product Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      heading: ['Gilroy', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        22: '5.5rem',
      },
      margin: {
        37: '150px',
      },
      borderRadius: {
        default: '20px',
        '4xl': '2rem',
      },
      fontSize: {
        '3xl': ['1.75rem', { lineHeight: '1' }],
        '4xl': ['2rem', { lineHeight: '1' }],
        '5xl': ['2.5rem', { lineHeight: '1' }],
      },
      colors: {
        primary: '#3161EB',
        secondary: '#F0D163',
        base: {
          1: '#0D0D0D',
        },
        success: '#65944F',
        error: '#E83B3B',
      },
      boxShadow: {
        card: '0px 8px 60px rgba(0, 0, 0, 0.05)',
        notif: '0px 6px 16px rgba(231, 60, 60, 0.5)',
        primaryButton: '0px 16px 28px rgba(49, 97, 235, 0.4)',
        footer: ' 0px -28px 100px rgba(0, 0, 0, 0.05)',
        sliderShadow: '-62px 0 60px 58px white',
        badge: '0px 5px 44px rgba(0, 0, 0, 0.05)',
      },
      dropShadow: {
        circular: '0px 8px 20px rgba(240, 209, 99, 0.46)',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          typo: (value) => {
            const [size, weight, family] = value.split('-') || [];
            return {
              fontSize: Number(size) ? `${size / 16}rem` : size,
              fontWeight: theme(`fontWeight.${weight}`),
              fontFamily: theme(`fontFamily.${family}`),
            };
          },
        },
        {
          values: {
            h1: '28-bold-heading',
          },
        }
      );
    }),
  ],
};
