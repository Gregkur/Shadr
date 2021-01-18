import React, { Component } from "react";
import { Link } from "react-router-dom";

import "react-colorful/dist/index.css";

import clsx from "clsx";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import Button from "@material-ui/core/Button";

import PaletteMetaForm from "./PaletteMetaForm";
import styles from "../styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({
      formShowing: true,
    });
  }

  hideForm() {
    this.setState({
      formShowing: false,
    });
  }
  render() {
    const {
      classes,
      open,
      palettes,
      savePalette,
      handleDrawerOpen,
    } = this.props;
    const { formShowing } = this.state;
    return (
      <div className={classes.root}>
        {" "}
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              onMouseOut={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <PaletteIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create a new Palette!
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.button} color="primary">
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button}
              color="primary"
              onClick={this.showForm}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            savePalette={savePalette}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(PaletteFormNav);
