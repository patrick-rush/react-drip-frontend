module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   'nunito': ['Nunito']
      // },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(-2%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(2%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle .2s ease-in-out infinite'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        light: '#98d745',
        DEFAULT: '#74a448',
        dark: '#477238',
      },
      yellow: {
        light: '#f7dd88',
        DEFAULT: '#f7ce46',
        dark: 'daa700'
      },
      white: {
        DEFAULT: '#f5fcf9',
      },
      gray: {
        light: '#dfe5e3',
        DEFAULT: '#c2c7c5',
        dark: 'adb2b0'
      },
      black: {
        DEFAULT: '#282928'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
