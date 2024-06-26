import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    '@node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '@node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    '@node_modules/@material-tailwind/react/theme/utilities/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(45, 155, 240)',
      },
    },
  },
  plugins: [],
})
