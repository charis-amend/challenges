import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [code, setCode] = useState("");

  // let code = "?"
  const validCode = "🐡🐠🐋";
  function handleClick(emoji) {
    setCode((code) => {
      return code + emoji
    }

    )
  }
  // reseting code back to the original state --> useState("")
  function handleReset() {
    setCode("")
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
          handleReset("reset the emojis")
          console.log("Reseted Code!");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid Cod!</p>}
    </div >
  );
}
