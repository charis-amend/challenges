import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA="4" valueB="5" />
    </div>
  )
}

function Sum({ valueA, valueB }) {
  function calc(a, b) {
    return a + b
  }

  return (
    <div>
      <p>This is calculated: {valueA} + {valueB} = {calc(parseInt(valueA), parseInt(valueB))}</p>
    </div >

  )
}
