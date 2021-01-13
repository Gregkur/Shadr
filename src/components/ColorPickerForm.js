import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#db7093",
      newColorName: "",
    };
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleColorChange = (event) => {
    this.setState({ newColorName: event.target.value });
  };

  setColor = (newColor) => {
    this.setState({ currentColor: newColor });
  };

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({
      newColorName: "",
    });
  };
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <HexColorPicker color={currentColor} onChange={this.setColor} />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name="NewColorName"
            onChange={this.handleColorChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used!",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: currentColor,
              opacity: paletteIsFull ? "0.5" : "1",
              color: "white",
            }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette is full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
