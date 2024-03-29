import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setActive] = useState(true);

  function handleClick() {
    setActive(!isActive)
    // isActive = !isActive;
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
