/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cBackground: "#fff3ef",
        cAccent: "#bb3e59",
        cDark: "#6b4062",
        cError: "#ff0059",
      },
      backgroundImage: {
        bgQuevDev: "url('./src/content/images/bg-quevdev.webp')",
        bgMusic: "url('./src/content/images/bg-music.webp')",
        bgGames: "url('./src/content/images/bg-games.webp')",
      },
    },
  },
  plugins: [],
};
