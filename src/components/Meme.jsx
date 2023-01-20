import React from "react";
import memesData from "../memesdata.jsx";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    setMemeImage(
      memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length)
      ].url
    );
  }

  return (
    <div>
      <div className="form">
        <div className="meme--inputs">
          <input
            className="input--first"
            placeholder="Top text..."
            type="text"
          />
          <input
            className="input--last"
            placeholder="Bottom text..."
            type="text"
          />
        </div>
        <div className="meme--button">
          <div onClick={getMemeImage} className="button">
            Get a new meme image 🖼
          </div>
        </div>
      </div>
      <img src={memeImage} alt="Meme Image" className="meme--image" />
    </div>
  );
}
