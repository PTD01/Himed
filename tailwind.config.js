/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F3D73",
          50: "#EAF2FB",
          100: "#D2E4F6",
          200: "#A5C9ED",
          300: "#78ADE3",
          400: "#4B92DA",
          500: "#2E86C1",
          600: "#1E5AA8",
          700: "#164581",
          800: "#0F3D73",
          900: "#0A2A50",
          950: "#071B34",
        },
        accent: {
          DEFAULT: "#D62828",
          50: "#FCEAEA",
          100: "#F8CFCF",
          500: "#D62828",
          600: "#B31E1E",
        },
        engineering: {
          DEFAULT: "#C8862B",
          50: "#FBF3E7",
          100: "#F3DFBE",
          500: "#C8862B",
          600: "#A66B1D",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(115deg, rgba(10,42,80,0.94) 0%, rgba(15,61,115,0.88) 55%, rgba(30,90,168,0.82) 100%)",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(10, 42, 80, 0.25)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        corporate: {
          primary: "#0F3D73",
          secondary: "#2E86C1",
          accent: "#D62828",
          neutral: "#0A2A50",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
