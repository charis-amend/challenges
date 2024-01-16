import React from "react";
import "./styles.css";

export default function App() {

  function handleClick() {
    alert("you clicked the button!")
  }

  return (
    <div>
      <Button color="red" text="i am a disabled button" disabled={true} onhandleClick={handleClick} />
      <Button color="blue" text="i am a danger button" disabled={false} onhandleClick={handleClick} />
      <Button color="green" text="submit button" disabled={false} onhandleClick={handleClick} />
    </div>
  )
}

function Button({ color, disabled, text, onhandleClick }) {


  return (
    <div>
      <button style={{ height: "100px", backgroundColor: color }} disabled={disabled} onClick={
        () => onhandleClick()}>
        {text}</button>
    </div >
  )
}


