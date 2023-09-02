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

            backgroundColor: {
                'dark-mode-pastel': '#121824',
                'bgcolor-gray-pastel': '#d2d4d5',
                'bgcolor-pink-pastel': '#d5a4a5',
                'bgcolor-beige-pastel': '#e2d3bf',
                'bgcolor-white-pastel': '#f2f1f2',
            },

            colors: {
                'color-gray-pastel': '#d2d4d5',
                'color-pink-pastel': '#d5a4a5',
                'color-beige-pastel': '#e2d3bf',
                'color-white-pastel': '#f2f1f2',
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
