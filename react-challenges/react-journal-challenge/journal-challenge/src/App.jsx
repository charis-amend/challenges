import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { journalEntries } from './components/data_JournalEntries.js'

import Header from './components/Header.jsx'
import Header__title from './components/Header__title.jsx'
import Main from './components/Main.jsx'
// --- Form-Section
import EntryFormSection from './components/Form-Section/EntryFormSection.jsx'

// ---  TabBar
import TabBarEntries from './components/TabBar/Entries__tabBar.jsx'
import OneTabInTabBar from './components/TabBar/Entries__aTab.jsx'
import BadgeOfOneTab from './components/TabBar/Entries-tab__badge.jsx'
import CountEntriesOfOneTab from './components/TabBar/Entries-tab__countEntries.jsx'
import TitleOfWhichTabAllOrFav from './components/TabBar/Entries-tab__title.jsx'
// --- Entries-Section
import EntriesSection from './components/Entries-Section/EntriesSection.jsx'
import ListOfEntries from './components/Entries-Section/ListOfEntries.jsx'
import AnEntryInEntriesList from './components/Entries-Section/AnEntryInEntriesList.jsx'

import Footer from './components/Footer.jsx'
import FooterText from './components/Footer__text.jsx'


function App() {
  console.log("testing the app() function")
  // changing state of journal entries:
  const [journalEntry, setJournalEntry] = useState(journalEntries);
  // function AddJournalEntry from FormSection, push down to EntriesSection
  function AddJournalEntry() {

  }


  return (
    <>
      {/* --------- */}
      <Header>
        <Header__title />
      </Header>

      <Main>
        {/* ----- Form to create new entries:---- */}
        <EntryFormSection>
        </EntryFormSection>

        {/* ---Entries Section// tab bar + entry list------ */}
        <EntriesSection>
          {/* -- the tab bar -- */}
          <TabBarEntries>
            {/* All Entries TAB: */}
            <OneTabInTabBar>
              <TitleOfWhichTabAllOrFav titleOfTab="All Entries" />
              <BadgeOfOneTab>
                <CountEntriesOfOneTab numberOfAllOrFavEntries="5" />
              </BadgeOfOneTab>
            </OneTabInTabBar>
            {/* Favorites TAB */}
            <OneTabInTabBar>
              <TitleOfWhichTabAllOrFav titleOfTab="Favorites" />
              <BadgeOfOneTab>
                <CountEntriesOfOneTab numberOfAllOrFavEntries="5" />
              </BadgeOfOneTab>
            </OneTabInTabBar>
          </TabBarEntries>

          {/* ----list of all entries------ */}
          <ListOfEntries>
            <AnEntryInEntriesList>

            </AnEntryInEntriesList>
          </ListOfEntries>
          {/* ----list of FAVORITE entries------ */}
          <ListOfEntries>
            <AnEntryInEntriesList>

            </AnEntryInEntriesList>
          </ListOfEntries>

        </EntriesSection>
      </Main>
      <Footer>
        <FooterText />
      </Footer>

    </>
  )
}


export default App
