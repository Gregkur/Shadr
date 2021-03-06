const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  PaletteColors: {
    height: "90%",
  },

  PaletteFooter: {
    borderTop: "5px solid white",
    backgroundColor: "#fcdd14",
    height: "5vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    "& span": {
      marginLeft: "0.5rem",
    },
    "& p": {
      marginLeft: "0.5rem",
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      transition: "0.4s",
      marginRight: "0.5rem",
      letterSpacing: "0.1rem",
    },
    "& a:hover": {
      color: "white",
      transform: "scale(1.2)",
      opacity: "0.8",
    },
  },

  PaletteEmoji: {
    fontSize: "1.5rem",
    margin: "0.5rem",
  },
};

export default styles;
