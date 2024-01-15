import React from "react";
import "./styles.css";

export default function App() {
  return <div> <HelloWorldArticle /></div>;
}

function HelloWorldArticle() {
  <article>
    <h1>Hello World! Article Header</h1>
    <p>
      Here is a text about the World.
      <strong>This text is bold.</strong>
      <br>Here is a gap of text in the article.</br>
    </p>
    {/* <p>
      Here is the text describing the button
      <button>here is a button</button>
    </p> */}
  </article>

}