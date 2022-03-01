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
    /* 
    PALETTE
    Navy
    #15274B
    #404D6D

    Red
    #EF4444
    */
    extend: {
      colors: {
        primary: {
          navy: '#15274B',
          red: '#EF4444',
          blue: '#86a5ff'
        },
        typo: {
          main: '#363636',
          minor: '#7A7A7A',
        }
      },
      spacing: {
        content: '42rem'
      }
    },
  },
  plugins: [
    require("tailwindcss-selection-variant"),
    require("@tailwindcss/typography"),
  ],
}
