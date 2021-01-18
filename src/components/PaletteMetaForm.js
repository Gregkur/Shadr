import React, { Component } from "react";

import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: "",
    };
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.saveNewPalette = this.saveNewPalette.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handlePaletteChange = (event) => {
    this.setState({ newPaletteName: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  showEmojiPicker() {
    this.setState({
      stage: "emoji",
    });
  }

  saveNewPalette(data) {
    const newPaletteData = {
      paletteName: this.state.newPaletteName,
      emoji: data.native,
    };

    this.props.savePalette(newPaletteData);
    this.setState({
      stage: "",
    });
  }
  render() {
    const { stage, newPaletteName } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">
            Pick emoji for {newPaletteName}
          </DialogTitle>
          <Picker
            title="Pick a Palette emoji"
            showSkinTones={false}
            onSelect={this.saveNewPalette}
          />
        </Dialog>
        <Dialog
          onClose={hideForm}
          open={stage === "form"}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new Palette! Make Sure it's unique!
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={newPaletteName}
                fullWidth
                margin="normal"
                name="newPaletteName"
                onChange={this.handlePaletteChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
