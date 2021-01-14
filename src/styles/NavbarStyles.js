const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
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
