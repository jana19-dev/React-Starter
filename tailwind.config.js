module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      keyframes: {
        logo: {
          from: {
            transform: 'scale(1)'
          },
          to: {
            transform: 'scale(1.16)'
          }
        }
      },
      animation: {
        logo: 'logo infinite 1.6s ease-in-out alternate'
      }
    }
  },
  variants: {},
  plugins: []
}
