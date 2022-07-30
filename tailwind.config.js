/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'sm_md': '550px',
      // => @media (min-width: 768px) { ... }
      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'section':'#252B42',
        'section-2':'#16697A',
        'text-color':'#232340',
        'badge':'#5468E7',
        'nav-bar':'#ffffff',
        'hover-color':'#5468E7',
        'bold_color':'#252B42',
        'yello_primary':'#FFA62B',

      },
      fontFamily:{
          'opensans':'Open Sans, sans-serif',
          'montserrat':'Montserrat, sans-serif',
      },
      fontSize:{
        'font-6':'6px',
        'font-8':'8px',
        'font-10':'10px',
        'font-40':'40px',
    },
    },
  },
  plugins: [],
}
