import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import { Link } from "react-router-dom";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
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
    return shades.slice(1).reverse();
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map((shade) => (
      <ColorBox
        background={shade[format]}
        name={shade.name}
        key={shade.name}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar sliderOpen={false} handleChange={this.changeFormat} />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {this.props.palette.paletteName}
          <Link to={`/palette/${this.props.palette.id}`}>Back</Link>
        </footer>
      </div>
    );
  }
}
