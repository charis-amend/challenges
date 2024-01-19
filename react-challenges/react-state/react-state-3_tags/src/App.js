import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function AddTag(newTag) {
    setTags([...tags, newTag])
  }
  function DeleteTag(tagToDelete) {

    // var for remaining tags:
    const filteredTags = tags.filter(tag => tag !== tagToDelete)
    setTags(filteredTags);
  }

  return (
    <main className="app">
      <Form onAddTag={AddTag} />
      <List tags={tags} onDeleteTag={DeleteTag} />
    </main>
  );
}
