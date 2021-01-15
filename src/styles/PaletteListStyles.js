import sizes from "./sizes";
import bg from "./bg.svg";
const styles = {
  root: {
    backgroundColor: "#fffff",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowY: "scroll",
    backgroundImage: `url(${bg})`,
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDiraction: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "75%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    // color: "white",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "300",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  },
  footer: {
    justifySelf: "center",
    color: "rgba(0, 0, 0, 0.87)",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "39px",
    padding: "21px",
    border: "1px solid rgba(0, 0, 0, 0.87)",
    transition:
      "background 0.5s 0s ease, transform 0.3s ease-in-out, color 0.5s ease-in-out",
    [sizes.down("xl")]: {
      gridColumn: "span 3",
    },
    [sizes.down("lg")]: {
      gridColumn: "span 3",
    },
    [sizes.down("md")]: {
      gridColumn: "span 2",
    },
    [sizes.down("xs")]: {
      gridColumn: "span 1",
    },
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
      opacity: "0.9",
      scale: "1.2",
      backgroundColor: "#fcdd14",
      color: "white",
    },
  },
};
export default styles;
