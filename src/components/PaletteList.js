import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";

import Logo from "./Logo";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }
  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false });
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <div className={classes.paletteList}>
        <div className={classes.paletteContainer}>
          <nav className={classes.logo}>
            <Logo />
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                key={palette.id}
                id={palette.id}
                goToPalette={this.goToPalette}
                openDialog={this.openDialog}
              />
            ))}
            <Link className={classes.footer} to="/palette/new">
              Create Palette
            </Link>
          </div>
        </div>
        {/* Pop Up */}
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete this palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
