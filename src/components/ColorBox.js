import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import "../styles/ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    marginBottom: "-4px",
    "&:hover button": { opacity: "1", transition: "0.5s" },
  },
  shadeBox: {
    width: "11.1%",
    height: "100%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.7) !important"
        : "rgb(233, 233, 233)",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.2
        ? "rgb(233, 233, 233)"
        : "rgba(0, 0, 0, 0.7) ",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.55
        ? "rgba(0, 0, 0, 0.7) !important"
        : "rgb(233, 233, 233)",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
    fontSize: "11px",
    "&:hover": { opacity: "0.7" },
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.55
        ? "rgba(0, 0, 0, 0.7) !important"
        : "rgb(233, 233, 233)",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    border: "none",
    opacity: "0",
    cursor: "pointer",
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
    const shadeBox = !showLink && classes.shadeBox;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          className={`${shadeBox} ${classes.colorBox}`}
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
          <div>
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
