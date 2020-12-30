import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";
export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} key={color.color} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
