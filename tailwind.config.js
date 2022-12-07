module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: { 128: "31.25rem" },
      minHeight: { 128: "31.25rem" },
      colors: { graybg: "#E5E7EB" }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
