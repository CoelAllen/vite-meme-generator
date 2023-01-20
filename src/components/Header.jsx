import React from "react";
// @ts-ignore
import logo from "../assets/TrollFace.png";

export default function Header() {
  return (
    <div className="header">
      <div className="nav--titleCard">
        <img className="nav--logo" src={logo} alt="TrollFace" />
        <h1 className="nav--title">Meme Generator</h1>
      </div>
      <p className="nav--text">React Course - Project 3</p>
    </div>
  );
}
