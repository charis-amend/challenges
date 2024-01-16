import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes box={<Box />} />
      {/* <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" /> */}

    </main>
  );
}

function Boxes({ children }) {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  )
}
