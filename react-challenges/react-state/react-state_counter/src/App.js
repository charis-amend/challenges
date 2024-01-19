import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>{counter}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCounter(counter - 1)
            console.log("minus button");
          }}
        > --
        </button>
        <button
          type="button"
          onClick={() => {
            setCounter(counter + 1)
            console.log("plus button");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
