import React from "react";
import "./styles.css";

export default function App() {
  return <div>
    <Article />
  </div >;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Name of Fancy Article</h2>
      <label id="label" htmlFor="id">Enter your text here:</label>
      <input id="input" htmlFor="input"></input>
      <a className="article__link" href="https://en.wikipedia.org/wiki/Taylor_Swift">
        Who is Taylor Swift?
      </a>
    </article>
  )
}