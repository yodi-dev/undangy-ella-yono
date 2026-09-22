export default {
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#2A0D14',
          deep: '#2A0D14',
        },
        maroon: {
          DEFAULT: '#5A1724',
          muted: '#772638',
        },
        ivory: {
          DEFAULT: '#F6EFE5',
          warm: '#F6EFE5',
        },
        cream: {
          DEFAULT: '#EDE0D0',
          soft: '#EDE0D0',
        },
        champagne: {
          DEFAULT: '#C4A46C',
          gold: '#C4A46C',
        },
        rose: {
          dusty: '#B98287',
        },
        dark: {
          text: '#2C2021',
        },
      },
      fontFamily: {
        heading: ['Great Vibes', 'cursive', 'serif'],
        second: ['Koh Santepheap', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],
}
