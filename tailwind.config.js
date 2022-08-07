module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainYellow: "#c8aa6e",
        main1: "#0022EE",
        main2: "#ec912b",
        main3: "#011359",
        sub1: "#deeefc",
        sub2: "#ffeedb",
      },
      animation: {
        fade: "fadeOut 2s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
};
