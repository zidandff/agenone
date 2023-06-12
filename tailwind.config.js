/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '24px'
    },
    fontSize: {
      'display-lg' : ['72px', '76px'],
      'display-sm' : ['48px', {lineHeight: '52px', letterSpacing: '-0.02em'}],
      '6xl' : ['44px', {lineHeight: '52px', letterSpacing: '-0.02em'}],
      '5xl' : ['36px', {lineHeight: '44px', letterSpacing: '-0.02em'}],
      '4xl' : ['32px', '40px'],
      '3xl' : ['28px', '36px'],
      '2xl' : ['24px', '32px'],
      'xl' : ['20px', '28px'],
      'lg' : ['18px', '28px'],
      'md' : ['16px', '24px'],
      'sm' : ['14px', '20px'],
      'xs' : ['12px', '18px'],
      '2xs' : ['10px', '18px']
    },
    boxShadow: {
      xs: '0px 1px 2px rgba(25, 17, 39, 0.05)',
      sm: '0px 1px 2px rgba(25, 17, 39, 0.06), 0px 1px 3px rgba(25, 17, 39, 0.06)',
      md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
      lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -6px rgba(16, 24, 40, 0.08)',
      '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
      '3xl': '0px 32px 54px -12px rgba(16, 24, 40, 0.14)',
      'green-xs': '0px 1px 2px rgba(56, 198, 130, 0.05)',
      'green-sm': '0px 1px 2px rgba(56, 198, 130, 0.06), 0px 1px 3px rgba(56, 198, 130, 0.06)',
      'green-md': '0px 2px 4px -2px rgba(56, 198, 130, 0.06), 0px 4px 8px -2px rgba(56, 198, 130, 0.1)',
      'green-lg': '0px 4px 6px -2px rgba(56, 198, 130, 0.03), 0px 12px 16px -4px rgba(56, 198, 130, 0.08)',
      'green-xl': '0px 8px 8px -4px rgba(56, 198, 130, 0.03), 0px 20px 24px -6px rgba(56, 198, 130, 0.08)',
      'green-2xl': '0px 24px 48px -12px rgba(56, 198, 130, 0.18)',
      'green-3xl': '0px 32px 54px -12px rgba(56, 198, 130, 0.14)'
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        gray: {
          50: '#F3F3F3',
          100: '#CECFD2',
          200: '#B6B8BC',
          300: '#9EA0A5',
          400: '#86888F',
          500: '#6D7079',
          600: '#555962',
          700: '#3D414C',
          800: '#181D2A',
          900: '#0C111F',
        }
      },
      backgroundImage: {
        'green-gradient-50': 'linear-gradient(279.69deg, rgba(0, 121, 109, 0.1) 0%, rgba(56, 198, 130, 0.1) 100%)',
        'green-gradient-100': 'linear-gradient(279.69deg, rgba(0, 121, 109, 0.2) 0%, rgba(56, 198, 130, 0.2) 100%)',
        'green-gradient-200': 'linear-gradient(279.69deg, rgba(0, 121, 109, 0.4) 0%, rgba(56, 198, 130, 0.4) 100%);',
        'green-gradient-300': 'linear-gradient(279.69deg, rgba(0, 121, 109, 0.6) 0%, rgba(56, 198, 130, 0.6) 100%);',
        'green-gradient-400': 'linear-gradient(278.87deg, rgba(0, 121, 109, 0.8) 0.61%, rgba(56, 198, 130, 0.8) 100%)',
        'green-gradient-500': 'linear-gradient(279.69deg, #00796D 0%, #38C682 100%);',
      }
    },
  },
  plugins: [],
}

