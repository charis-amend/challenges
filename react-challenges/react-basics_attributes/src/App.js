import React from "react";
import "./styles.css";

export default function App() {
  return (
    // this is an empty fragment <>
    <>
      <div>
        <Article /> <ArticleTwo />
      </div >
    </>
  )
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Name of Fancy Article</h2>
      <label htmlFor="input">Enter your text here:</label>
      <input id="input" type="text" />
      <a className="article__link" href="https://en.wikipedia.org/wiki/Taylor_Swift">
        Who is Taylor Swift?
      </a>
    </article>
  )
}
function ArticleTwo() {
  return (
    <article className="article">
      <h2 className="article__title">Article 2</h2>
      <p>text of article two.</p>
    </article>
  )
}