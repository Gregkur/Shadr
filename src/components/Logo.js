import "../styles/LogoStyles.css";
import logo from "../styles/logo.svg";
import React from "react";

export default function Logo() {
  return (
    <div className="body">
      {/* <div className="text one">S</div>
      <div className="text two">h</div>
      <div className="text three">a</div>
      <div className="text four">d</div>
      <div className="text five">r</div>
      <div className="text six">r</div> */}
      <img src={logo} alt="logo" height="160" width="350" />
    </div>
  );
}
