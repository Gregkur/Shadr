import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  colorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-6px",
    "&:hover button": { opacity: "1", transition: "0.5s" },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "5%",
    },
  },

  shadeBox: {
    width: "11.1%",
    height: "100%",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    [sizes.down("xs")]: {
      width: "100%",
      height: "11.2%",
    },
  },
  boxContent: {
    position: "absolute",
    padding: "10px 0px 10px 10px",
    width: "70%",
    left: "0px",
    bottom: "0px",
    color: "rgba(0, 0, 0, 0.8)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  boxContainer: {
    height: "100vh",
    width: "100%",
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.7) !important"
        : "rgb(233, 233, 233)",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.2
        ? "rgb(233, 233, 233)"
        : "rgba(0, 0, 0, 0.7) ",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.55
        ? "rgba(0, 0, 0, 0.7) !important"
        : "rgb(233, 233, 233)",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
    fontSize: "11px",
    "&:hover": { opacity: "0.7" },
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.55
        ? "rgba(0, 0, 0, 0.7) !important"
        : "rgb(233, 233, 233)",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    border: "none",
    opacity: "0",
    cursor: "pointer",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 1s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    overflow: "hidden",
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    right: "0",
    left: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    flexDirection: "column",
    [sizes.down("md")]: {
      fontSize: "2rem",
    },
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px rgb(43, 43, 43)",
      background: "rgba(255, 255, 255, 0.3)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
    },
    "& p": {
      fontWeight: "100",
      fontSize: "2rem",
    },
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.6s ease-in-out",
    transitionDelay: "0.5s",
  },
};
export default styles;
