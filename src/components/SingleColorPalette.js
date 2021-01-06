import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
  }
  gatherShades(palette, filteredColor) {
    let shades = [];
    let allColors = palette.colors;
    //loop
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === filteredColor)
      );
    }
    //return given shades
    return shades;
  }
  render() {
    return (
      <div className="Palette">
        <Navbar />
        <div className="Palette-colors">$$$</div>
        <footer className="Palette-footer">
          Color Name
          <span className="Palette-emoji">emoji</span>
        </footer>
      </div>
    );
  }
}
