/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        dark: "#1F1D2B",
        light: "#F1F0F2",
        darkBlue: "#38ABBE",
        lightBlue: "#2C96F1",
        primary: "#152C5B",
        gray: "#999999",
        danger: "#FF2566",
      },
    },
  },
  plugins: [],
}
