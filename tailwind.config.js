/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                "dark-gray": "#1F1F1F",
                "light-gray": "#999999",
                "light-green": "#28E98C",
                "dark-green": "#28e98c",
            },
            animation: {
                "spin-slow": "spin 7s linear infinite",
            },
            fontFamily: {
                jersy: ["Jersey 15", "sans-serif"],
            },
        },
    },
    plugins: [],
};
