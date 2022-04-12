const pooltogetherTheme = require('@pooltogether/react-components/config')
module.exports = pooltogetherTheme({
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/components/**/*.{js,ts,jsx,tsx}'],
  variants: {
    extend: {
      display: ['dark']
    }
  }
})
