import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [emoji, setEmoji] = useState("");

  // let code = "?"
  const validEmoji = "🐡🐠🐋";
  function handleClick(newEmoji) {
    setEmoji(newEmoji)
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡")
            console.log("Updated Pufferfish Emoji!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋")
            console.log("Updated WhaleEmoji!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠")
            console.log("Updated Clownfish Emoji!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          handleClick("reset the emojis")
          console.log("Reset Emoji!");
        }}
      >
        Reset
      </button>
      <h2>{emoji}</h2>

      {emoji === validEmoji && <p>Valid Emoji!</p>}
    </div >
  );
}
