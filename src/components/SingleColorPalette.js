import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    console.log(this._shades);
  }

  gatherShades(palette, filteredColor) {
    let shades = [];
    let allColors = palette.colors;
    //loop and match color
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === filteredColor)
      );
    }
    //return given shades
    return shades;
  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map((shade) => (
      <ColorBox background={shade[format]} name={shade.name} key={shade.hex} />
    ));
    return (
      <div className="Palette">
        <Navbar />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          Color Name
          <span className="Palette-emoji">emoji</span>
        </footer>
      </div>
    );
  }
}
