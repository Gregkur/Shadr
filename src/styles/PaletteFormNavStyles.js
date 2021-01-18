import { DRAWER_WIDTH } from "../contants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    backgroundColor: "#fcdd14",
    borderBottom: "5px solid white",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("md")]: {
      marginRight: "0",
    },
  },
  button: {
    margin: "0 0.5rem",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.87)",
    transition: "0.4s ease-in-out",
    [sizes.down("sm")]: {
      margin: "0 0.2rem",
      padding: "0",
    },
    "&:hover": {
      color: "white",
      transform: "scale(1.1)",
      opacity: "0.9",
      backgroundColor: "#FCE02B",
      borderRadius: "39px",
    },
  },
});
export default styles;
