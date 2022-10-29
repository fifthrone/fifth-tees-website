// const plugin = require("tailwindcss/plugin");

// /** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		groups: ["heart"],
		extend: {
			fontFamily: {
				josefin: ["Josefin Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				blueGray: "#334155",
				lightBlueGray: "#475569",
			},
			screens: {
				tall: { raw: "(min-height: 700px)" },
				// => @media (min-height: 800px) { ... }
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar-hide"),
		plugin(({ addVariant, theme }) => {
			const groups = theme("groups") || [];

			groups.forEach((group) => {
				addVariant(`group-${group}-hover`, () => {
					return `:merge(.group-${group}):hover &`;
				});
			});
		}),
	],
};
