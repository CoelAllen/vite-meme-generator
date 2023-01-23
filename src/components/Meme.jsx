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
  function handleTopChange(event) {
    setMeme((prev) => ({
      ...prev,
      topText: event?.target.value,
    }));
  }
  function handleBottomChange(event) {
    setMeme((prev) => ({
      ...prev,
      bottomText: event?.target.value,
    }));
  }

  return (
    <div>
      <form>
        <div className="meme--inputs">
          <input
            className="input--first"
            value={meme.topText}
            onChange={handleTopChange}
            placeholder="Top text..."
            type="text"
          />
          <input
            className="input--last"
            value={meme.bottomText}
            onChange={handleBottomChange}
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
      <div className="img-wrapper">
        <img src={meme.memeImage} alt="Meme Image" className="meme--image" />
        <p className="top-text">{meme.topText}</p>
        <p className="bottom-text">{meme.bottomText}</p>
      </div>
    </div>
  );
}
