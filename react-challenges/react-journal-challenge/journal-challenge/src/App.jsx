// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import FigmaDesign from './components/FigmaDesign.jsx'
import Header from './components/Header.jsx'
import Header__title from './components/Header__title.jsx'

function App() {


  return (
    <div>
      <FigmaDesign />

      <Header>
        <Header__title title="My Journal App" />

      </Header>

      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
