import "./styles.css";

export default function App() {

  return (
    <div>
      <Greeting name="" />
    </div>
  )
}

function Greeting({ name }) {
  return (
    <div>
      {name ? "Coach" : "Nobody"}
      <h2> Hello, {name}!</h2>
    </div >
  )
}
