/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "768px",
			// => @media (min-width: 1024px) { ... }

			xl: "768px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "768px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				primary: "#c69749",
				dark: "#1e293b",
				darkOpacity: "rgba(0,0,0,0.7)",
			},
			gridAutoColumns: {
				mini: "repeat(1, 100px )",
			},
			screens: {
				x: { min: "401px", max: "479px" },
				xs: { min: "480px", max: "639px" },
			},
		},
	},

	plugins: [],
};
