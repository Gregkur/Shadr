import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import classNames from "classnames";

import styles from "../styles/ColorBoxStyles";

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
    const shadeBox = !showLink && classes.shadeBox;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          className={`${shadeBox} ${classes.colorBox}`}
          style={{ background }}
        >
          <div
            style={{ background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })}
          />
          <div
            className={classNames(classes.copyMsg, {
              [classes.showMessage]: copied,
            })}
          >
            <h1 className={classes.copyText}>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>TINTS</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
