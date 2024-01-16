import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>first Button</Button>
      <Button>aanother button</Button>
      <Button>simple thrid button</Button>
      <Button>funny button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
