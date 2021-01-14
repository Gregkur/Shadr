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
    marginLeft: "15px",
    marginRight: "15px",
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    "& a": {
      textDecoration: "none",
      color: "inherit",
      transition: "0.4s",
    },
    "& :hover": {
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
