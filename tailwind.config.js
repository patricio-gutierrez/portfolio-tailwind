module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkerBlue: "hsl(212, 75%, 16%)",
        lighterBlue: "hsl(211, 70%, 26%)",
        seaBlue: "hsl(214, 65%, 35%)",
        coldBlue: "hsl(208, 61%, 44%)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// https://colorhunt.co/palette/0a26471442722052952c74b3
