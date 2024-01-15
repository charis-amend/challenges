import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="red" text="i am a disabled button" disabled={true} />
      <Button color="blue" text="i am a button" disabled={false} />
    </div>
  )
}

function Button({ color, disabled, text }) {

  return (
    <div>
      <button style={{ height: "100px", backgroundColor: color }} disabled={disabled}>
        {text}</button>
    </div >
  )
}
