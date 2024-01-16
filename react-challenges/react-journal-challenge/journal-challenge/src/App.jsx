// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import FigmaDesign from './components/FigmaDesign.jsx'
import Header from './components/Header.jsx'
import Header__title from './components/Header__title.jsx'
import Main from './components/Main.jsx'
// --- Form-Section
import EntryFormSection from './components/Form-Section/EntryFormSection.jsx'
import FormInput from './components/Form-Section/Form__input.jsx'
import FormTextarea from './components/Form-Section/Form__textarea.jsx'
import FormSubmitButton from './components/Form-Section/Form__submit.jsx'

// ---  TabBar
import TabBarEntries from './components/TabBar/Entries__tabBar.jsx'
import OneTabInTabBar from './components/TabBar/Entries__aTab.jsx'
import BadgeOfOneTab from './components/TabBar/Entries-tab__badge.jsx'
import CountEntriesOfOneTab from './components/TabBar/Entries-tab__countEntries.jsx'
// --- Entries-Section
import EntriesSection from './components/Entries-Section/EntriesSection.jsx'
import ListOfEntries from './components/Entries-Section/Entries__listEntries.jsx'
import AnEntryInEntriesList from './components/Entries-Section/Entries-list__anEntry.jsx'
import DateOfAnEntry from './components/Entries-Section/Entries-List-Entry__Date.jsx'
import TitleOfAnEntryInEntries from './components/Entries-Section/Entries-List-Entry__Title.jsx'
import FavIconOfEntry from './components/Entries-Section/Entries-List-Entry__favIcon.jsx'
import TextareaOfAnEntryInEntryList from './components/Entries-Section/Entries-List-Entry__Text.jsx'

function App() {

  return (
    <>
      {/* <FigmaDesign /> */}
      {/* --------- */}
      <Header>
        <Header__title>My Journal App</Header__title>
      </Header>

      <Main>
        {/* ----- Form to create new entries:---- */}
        <EntryFormSection>
          <form>
            <FormInput inputField="motto" labelForInput="Motto:" nameOfInputField="input-for-motto" />
            <FormTextarea textareaInput="notes" labelOfTextarea="Notes:" nameOfTextarea="input-for-notes" />
            <FormSubmitButton />
          </form>
        </EntryFormSection>

        {/* ---Entries Section// tab bar + entry list------ */}
        <EntriesSection>
          {/* -- the tab bar -- */}
          <TabBarEntries>
            {/* All Entries TAB: */}
            <OneTabInTabBar>
              <BadgeOfOneTab>
                <CountEntriesOfOneTab numberOfAllOrFavEntries="5" />
              </BadgeOfOneTab>
            </OneTabInTabBar>
            {/* ----list of all entries------ */}
            <ListOfEntries>
              <AnEntryInEntriesList>
                <DateOfAnEntry />
                <TitleOfAnEntryInEntries />
                <FavIconOfEntry src="starEmpty" alt="starEmpty" />
                <TextareaOfAnEntryInEntryList />
              </AnEntryInEntriesList>
            </ListOfEntries>

            {/* Favorites TAB */}
            <OneTabInTabBar>
              <BadgeOfOneTab>
                <CountEntriesOfOneTab numberOfAllOrFavEntries="5" />
              </BadgeOfOneTab>
            </OneTabInTabBar>
          </TabBarEntries>
          {/* ----list of FAVORITE entries------ */}
          <ListOfEntries>
            <AnEntryInEntriesList>
              <DateOfAnEntry />
              <TitleOfAnEntryInEntries />
              <FavIconOfEntry src="starFilled" alt="starFilled" />
              <TextareaOfAnEntryInEntryList />
            </AnEntryInEntriesList>
          </ListOfEntries>

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
