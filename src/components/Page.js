import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PageStyles";

function Page(props) {
  const { classes } = props;
  return <section className={classes.page}>{props.children}</section>;
}

export default withStyles(styles)(Page);
