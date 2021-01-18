import sizes from "../styles/sizes";
const styles = {
  miniPalette: {
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "& svg": { transition: "all 0.3s ease-in-out" },
    "@media (hover: hover)": {
      "&:hover": {
        transform: "scale(1.1)",
        opacity: "0.9",
        scale: "1.2",
        "& svg": {
          opacity: 1,
        },
      },
    },
  },
  miniColors: {
    backgroundColor: "#fffff",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  miniTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  miniEmoji: { marginLeft: "0.5rem", fontSize: "1.5rem" },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px",
  },
  miniDeleteIcon: {
    boxSizing: "content-box !important",
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0px",
    top: "0px",
    padding: "10px",
    zIndex: "10",
    opacity: "0",
    transition: " all 0.4s ease-in-out",
    borderBottomLeftRadius: "6px",
    [sizes.down("sm")]: {
      opacity: "0.5",
    },
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.6)",
      color: "#eb3d30",
    },
  },
};
export default styles;
