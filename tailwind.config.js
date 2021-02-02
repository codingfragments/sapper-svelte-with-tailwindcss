
const colors = require('tailwindcss/colors')


module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        normal: '#0558af',
        light: '#5584e2',
        dark: '#00307f'
      },
      secondary: {
        normal: '#ff9900',
        light: '#ffca47',
        dark: '#c66a00'
      },
      textdefault: {
        primary: '#fff',
        primaryLight: '#000',
        primaryDark: '#fff',
        secondary: '#000',
        secondaryLight: '#000',
        secondaryDark: '#000',
      },
      black: colors.black,

      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif', 'ui-sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'ui-monospace', 'SFMono-Regular', 'Courier\ New', 'Monaco', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
