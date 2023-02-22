/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "1440px",
		},
		fontFamily: {
			sans: "Nunito Sans",
		},
		extend: {
			colors: {
				blue: {
					dark: "hsl(209, 23%, 22%)",
					veryDark: "hsl(207, 26%, 17%)",
					veryVeryDark: "hsl(200, 15%, 8%)",
				},
				gray: {
					veryLight: "hsl(0, 0%, 98%)",
					dark: "hsl(0, 0%, 52%)",
				},
			},
		},
	},
	plugins: [],
}
