/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/preline/dist/*.js"],
	theme: {
		extend: {
			colors: {
				primary: "#EF4444",
				second: "#0891b2",
			},
		},
	},
	plugins: [require("preline/plugin")],
};
