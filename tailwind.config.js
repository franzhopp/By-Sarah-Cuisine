/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {

            fontFamily: {
                'sans': ['Helvetica', 'sans-serif'],
                'sans-serif': ['Fira Sans'],
                'sans-recursive': ['Dancing Script'],
            },

            backgroundColor: {
                'f3dbc3': '#F3DBC3',
                'e9c2c2': '#d598a0',
                'd9d9d9': '#D9D9D9',
                'efefef': '#EFEFEF',
                '8f8f88': '#d5d5d5',

            },

            colors: {
                'yellow': '#DEAB68',
                'pink': '#d598a0',
                'gray': '#D9D9D9',
                'efefef': '#EFEFEF',
            }
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes"),
                    "secondary": "#EFEFEF",
                },
            },
        ],
    },
}
