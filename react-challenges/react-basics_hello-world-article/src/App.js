import React from "react";
import "./styles.css";

export default function App() {
  return <div> <HelloWorldArticle /></div>;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World! Article Header</h1>
      <p>
        Here is a text about the World.
        <strong>This text is bold.</strong>
        <br></br>
        Here is a gap
        <br></br>
        <br></br>
        of text in the article.
      </p>
      {/* <p>
      Here is the text describing the button
      <button>here is a button</button>
    </p> */}
    </article>
  )
}