module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '46': '11.25rem',
        '76': '18.75rem',
      },
      height: {
        '46': '11.25rem'
      },
      maxHeight: {
        '105': '25rem',
        '500' : '93.75rem'
      },
      zIndex: {
        '1' : '1',
        '100': '100',
        '999': '999',
      },
      keyframes: {
        slide: {
          '0%': {transform: 'visible, top-80'},
          '100%': {transform: 'visible, top-64'}
        }
      },
      animation: {
        'slide': 'slide-up 1s ease .5s',
      },
      screens: {
        'sm': '600',
      },
    },
  },
}