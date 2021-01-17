import { DRAWER_WIDTH } from "../contants";
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "#fcdd14",
    borderBottom: "5px solid #fcdd14",
    borderTop: "5px solid #fcdd14",
    borderLeft: "5px solid #fcdd14",

    [sizes.down("xs")]: {
      width: "500px",
    },
  },
  drawerHeader: {
    // display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    display: "none",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    [sizes.down("sm")]: {
      width: "80%",
    },
  },
  singleButton: {
    width: "50%",
    [sizes.down("sm")]: {
      width: "40%",
    },
  },
});
export default styles;
