import React, { PureComponent } from "react";

import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "../styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.removePalette = this.removePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  removePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ));
    return (
      <div className={classes.miniPalette} onClick={this.handleClick}>
        <DeleteIcon
          className={classes.miniDeleteIcon}
          onClick={this.removePalette}
        />
        <div className={classes.miniColors}>{miniColorBoxes}</div>
        <h5 className={classes.miniTitle}>
          {paletteName}
          <span className={classes.miniEmoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
