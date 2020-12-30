import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
