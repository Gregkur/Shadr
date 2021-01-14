import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

const styles = {
  root: {
    backgroundColor: "#F6E25D",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDiraction: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    color: "white",
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
  },
  footer: {
    justifySelf: "center",
    gridColumn: "span 3",
    color: "white",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "39px",
    padding: "21px",
    border: "3px solid #939597",
    // transition: "transform 0.3s ease-in-out",
    transition: "background 0.3s 0s ease, transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
      opacity: "0.9",
      scale: "1.2",
      backgroundColor: "#fcdd14",
    },
  },
};

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors!</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.slice(3).map((palette) => (
              <MiniPalette
                {...palette}
                key={palette.id}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
            <Link className={classes.footer} to="/palette/new">
              Create a new palette!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
