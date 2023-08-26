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

            minHeight: {
                500: "500px",
                600: "650px"
            },

            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
            },

            // utiliser une couleur :
            // colors: {
            //     bigColors: 'blue',
            // }
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
