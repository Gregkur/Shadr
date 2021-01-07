import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import "../styles/ColorBox.css";

const styles = {
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.8) !important"
        : "rgb(233, 233, 233)",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.2
        ? "rgb(233, 233, 233)"
        : "rgba(0, 0, 0, 0.8) ",
  },
};
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const {
      name,
      background,
      paletteId,
      colorId,
      showLink,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          className={!showLink ? "ShadeBox ColorBox" : `ColorBox`}
          style={{ background }}
        >
          <div
            style={{ background }}
            className={`copy-overlay ${copied && `show`}`}
          />
          <div className={`copy-msg ${copied && `show`}`}>
            <h1 className={classes.copyText}>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={`copy-button ${classes.colorName}`}>Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`see-more ${classes.colorName}`}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
