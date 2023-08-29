/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};

// tailwind-crollbar hide is 2  years old, might want to disable
