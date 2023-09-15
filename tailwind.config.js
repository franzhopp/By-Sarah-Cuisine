/** @type {import('tailwindcss').Config} */
export default {
    // la purge :
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // utiliser le dark mode :
    darkMode: 'media',
    theme: {
        extend: {

            height: {
                '400' : '496px',
            },

            minHeight: {
                500: "500px",
                600: "650px"
            },

            fontFamily: {
                'sans': ['Helvetica', 'sans-serif'],
                'sans-serif' : ['Fira Sans'],
                'sans-recursive' : ['Dancing Script'],
            },

            backgroundColor: {
                'f3dbc3': '#F3DBC3',
                'e9c2c2': '#E9C2C2',
                'd9d9d9': '#D9D9D9',
                'efefef': '#EFEFEF',

            },

            colors: {
                'pink': '#E9C2C2',
                'gray': '#FFFFFF',
            }
        },
        // breakpoints :
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
}
