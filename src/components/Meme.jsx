import React from "react";
import memesData from "../memesdata.jsx";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  // const [memeImage, setMemeImage] = useState(
  //   "https://i.imgflip.com/1g8my4.jpg"
  // );
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImage: url,
    }));
  }
  function handleChange(event) {
    setMeme((prev) => ({
      ...prev,
      [event.target.name]: event?.target.value,
    }));
  }

  return (
    <div>
      <form>
        <div className="meme--inputs">
          <input
            className="input--first"
            placeholder="Top text..."
            type="text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            className="input--last"
            placeholder="Bottom text..."
            type="text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <div className="meme--button">
          <div onClick={getMemeImage} className="button">
            Get a new meme image 🖼
          </div>
        </div>
      </form>
      <div className="img--wrapper">
        <img src={meme.memeImage} alt="Meme Image" className="meme--image" />
        <p className="meme--text top">{meme.topText}</p>
        <p className="meme--text bottom">{meme.bottomText}</p>
      </div>
    </div>
  );
}
