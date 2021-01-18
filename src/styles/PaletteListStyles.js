import sizes from "./sizes";
import bg from "./bg.svg";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.3s ease-out",
    },
  },

  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflowY: "scroll",
    /* background by SVGBackgrounds.com */
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
    marginBottom: "0.4rem",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      marginBottom: "16px",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  },
  footer: {
    justifySelf: "center",
    color: "#ffffff",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "39px",
    padding: "21px",
    marginBottom: "0.5rem",
    border: "2px solid rgb(255, 255, 255)",
    transition: "background 0.8s 0s ease, transform 0.3s ease-in-out",
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
    },
  },
};
export default styles;
