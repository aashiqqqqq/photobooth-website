/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: "#99A1AF",
                accent: "#6A7282",
                background: "#F6F6F6",
                textPrimary: "#6A7282",
            }
        },
    },
    plugins: [],
}
