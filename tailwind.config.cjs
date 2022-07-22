module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#5787E5",
          700: "#535FFC",
        },
        success: "#B0E640",
        alert: "#E6D54C",
        danger: "#E6816E",
      },
      backgroundImage: {
        "search-pattern": "url('./assets/icons/search.svg')",
        "down-pattern": "url('./assets/icons/down.svg')",
        "arrow-circle-blue": "url('./assets/icons/arrowCircleBlue.svg')",
        "arrow-circle": "url('./assets/icons/arrowCircle.svg')",
        "egressos-default": "url('./assets/icons/egressosDefault.svg')",
        "egressos-default-blue":
          "url('./assets/icons/egressosDefaultBlue.svg')",
      },
      backgroundPosition: {
        bottom: "bottom",
        "bottom-4": "center bottom 1rem",
        center: "center",
        left: "left",
        "left-1": "center left 1rem",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-1": "center right 1rem",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
        "top-4": "center top 1rem",
      },
    },
  },
  plugins: [],
};
