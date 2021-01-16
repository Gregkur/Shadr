import sizes from "./sizes";
const styles = {
  Navbar: {
    borderBottom: "5px solid white",
    backgroundColor: "#fcdd14",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    [sizes.down("xs")]: {
      "& span": {
        marginLeft: "10px",
      },
    },
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    // backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "350px",
    margin: "0 22px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "#1db0b8",
      outline: "none",
      border: "2px solid #1db0b8",
      boxShadow: "none",
      width: "18px",
      height: "18px",
      marginLeft: "-7px",
      marginTop: "-3px",
    },
    [sizes.down("xs")]: {
      width: "150px",
    },
  },
  sliderContainer: {
    display: "flex",
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
export default styles;
