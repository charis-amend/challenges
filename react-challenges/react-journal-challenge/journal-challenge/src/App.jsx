// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import FigmaDesign from './components/FigmaDesign.jsx'
import Header from './components/Header.jsx'
import Header__title from './components/Header__title.jsx'
import Main from './components/Main.jsx'

import EntryFormSection from './components/Form-Section/EntryFormSection.jsx'
import FormInput from './components/Form-Section/Form__input.jsx'
import FormTextarea from './components/Form-Section/Form__textarea.jsx'
import FormSubmitButton from './components/Form-Section/Form__submit.jsx'

import EntriesSection from './components/Entries-Section/EntriesSection.jsx'
import TabBarEntries from './components/Entries__tabBar.jsx'
import OneTabInTabBar from './components/Entries__aTab.jsx'
import BadgeOfOneTab from './components/Entries-tab__badge.jsx'
import CountEntriesOfOneTab from './components/Entries-tab__countEntries.jsx'

function App() {

  return (
    <>
      {/* <FigmaDesign /> */}
      {/* --------- */}
      <Header>
        <Header__title>My Journal App</Header__title>
      </Header>
      {/* --------- */}
      <Main>
        <EntryFormSection>
          <form>
            <FormInput inputField="motto" labelForInput="Motto:" nameOfInputField="input-for-motto" />
            <FormTextarea textareaInput="notes" labelOfTextarea="Notes:" nameOfTextarea="input-for-notes" />
            <FormSubmitButton />
          </form>
        </EntryFormSection>
        {/* --------- */}
        <EntriesSection>
          <TabBarEntries>
            {/* All Entries: */}
            <OneTabInTabBar>
              <BadgeOfOneTab>
                <CountEntriesOfOneTab />
              </BadgeOfOneTab>
            </OneTabInTabBar>
            {/* Favorites: */}
            <OneTabInTabBar>
              <BadgeOfOneTab>
                <CountEntriesOfOneTab numberOfAllOrFavEntries="5" />
              </BadgeOfOneTab>

            </OneTabInTabBar>
          </TabBarEntries>
          {/* ---------- */}

        </EntriesSection>

      </Main>

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
    </>
  )
}

export default App
