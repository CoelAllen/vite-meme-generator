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

  return (
    <div>
      <form className="form">
        <div className="meme--inputs">
          <input
            className="input--first"
            value={meme.topText}
            placeholder="Top text..."
            type="text"
          />
          <input
            className="input--last"
            value={meme.bottomText}
            placeholder="Bottom text..."
            type="text"
          />
        </div>
        <div className="meme--button">
          <div onClick={getMemeImage} className="button">
            Get a new meme image 🖼
          </div>
        </div>
      </form>
      <img src={meme.memeImage} alt="Meme Image" className="meme--image" />
    </div>
  );
}
