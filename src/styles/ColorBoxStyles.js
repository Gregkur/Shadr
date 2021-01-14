import chroma from "chroma-js";
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
  },
  shadeBox: {
    width: "11.1%",
    height: "100%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
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
};
export default styles;
