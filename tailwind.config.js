// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './doc/**/*.tsx',
    './doc/**/*.ts',
    './doc/**/*.js',
    './doc/**/*.jsx',
  ],
  theme: {
    screens: {
      xs: '375px',
      xl: '1200px',
      mac: '1400px',
      ...defaultTheme.screens,
    },
    extend: {
      /* 
      PALETTE
      Navy
      #15274B
      #404D6D
      
      Red
      #EF4444
      */
      colors: {
        primary: {
          navy: '#15274B',
          red: '#EF4444',
          blue: '#86a5ff',
        },
        typo: {
          main: '#3C434C',
          minor: '#7A7A7A',
        },
      },
      spacing: {
        content: '42rem',
        'component-block-height': '375px',
        'code-block-height': '320px',
      },
      fontFamily: {
        poppins: [
          'Poppins',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        nunito: [
          'Nunito',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        lato: [
          'Lato',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [
    require('tailwindcss-selection-variant'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
