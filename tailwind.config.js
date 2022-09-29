/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wall: "url('wall.jpg')",
        shopwall: "url('shopWall.jpg')",
      },
      colors: {
        primary: "hsl(0, 36%, 29%)",
        primarydark: "hsl(0, 38%, 21%)",
        secondarydark: "#502323",
      },
      fontFamily: {
        "sans-serif": ["Josefin Sans", "sans-serif"],
        domion: ["Damion", "cursive"],
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
