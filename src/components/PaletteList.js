import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes, deletePalette } = this.props;
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
                deletePalette={deletePalette}
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
