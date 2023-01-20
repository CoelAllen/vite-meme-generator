import React from "react";

export default function Meme() {
  return (
    <div>
      <form action="">
        <div className="meme--inputs">
          <input
            className="input--first"
            placeholder="Top line..."
            type="text"
          />
          <input
            className="input--last"
            placeholder="Bottom line..."
            type="text"
          />
        </div>
        <div className="meme--button">
          <div className="button">Get a new meme image 🖼</div>
        </div>
      </form>
    </div>
  );
}
