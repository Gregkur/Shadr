/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">React Palette</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
          <div className="select-container">
            <Select>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="hex">RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value="hex">RGBA - rgba(255, 255, 255, 1.0</MenuItem>
            </Select>
          </div>
        </div>
      </header>
    );
  }
}
