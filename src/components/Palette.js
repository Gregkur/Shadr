import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import styles from "../styles/PaletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { classes } = this.props;
    const { colors, emoji, paletteName, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.hex}
        colorId={color.id}
        paletteId={id}
        showLink={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <footer className={classes.PaletteFooter}>
          <span>{paletteName}</span>
          <span className={classes.PaletteEmoji}>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
