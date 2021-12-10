module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["48px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["56px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "4xl": ["64px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1248px",
      },
      colors: {
        primary_light: "#2D89DE",
        primary_dark: "#3AB7B7",
        dark: "#404040",
        light_gray: "#646464",
        text_dark: "#a3a3a3",
      },
      boxShadow: {
        "inverse-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
