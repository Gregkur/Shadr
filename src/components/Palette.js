import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";
export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors[500].map((color) => (
      <ColorBox background={color.hex} name={color.name} key={color.hex} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
