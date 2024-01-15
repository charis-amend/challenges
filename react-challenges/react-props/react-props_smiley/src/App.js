import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </div>
  )
}

function Smiley({ isHappy }) {
  function checkHappiness() {
    if (isHappy === true) {
      return "I am happy 🥰"
    } else {
      return "I am sad 😭"
    }
  }

  return (
    <div>
      <h1>Hello, {checkHappiness()}</h1>
    </div>
  )
}
