import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    return (
      <div
        className="ColorBox"
        style={{ background: this.props.background.color }}
      >
        <span>MORE</span>
      </div>
    );
  }
}
