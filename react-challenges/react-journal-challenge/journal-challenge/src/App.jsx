import { useState } from 'react'
import { uid } from 'uid'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { dataJournalEntries } from './components/data_JournalEntries.js'

import Header from './components/Header.jsx'
import Header__title from './components/Header__title.jsx'
// --- Form-Section
import EntryFormSection from './components/Form-Section/EntryFormSection.jsx'

// ---  TabBar
import TabBarEntries from './components/TabBar/Entries__tabBar.jsx'
// --- Entries-Section
import EntriesSection from './components/Entries-Section/EntriesSection.jsx'
import ListOfEntries from './components/Entries-Section/ListOfEntries.jsx'
// import AnEntryInEntriesList from './components/Entries-Section/AnEntryInEntriesList.jsx'

import Footer from './components/Footer.jsx'
import FooterText from './components/Footer__text.jsx'


function App() {
  console.log("testing the app() function")
  // changing state of journal entries:
  const [journalEntries, setJournalEntries] = useLocalStorageState(dataJournalEntries);
  const [favorised, setFavorised] = useState(true)
  // function AddJournalEntry from FormSection, push down to EntriesSection
  function AddJournalEntry(newjournalentry) {
    setJournalEntries([{ newjournalentry, id: uid() }, ...journalEntries])
  }

  return (
    <>
      <Header>
        <Header__title />
      </Header>

      <EntryFormSection onAddJournalEntry={AddJournalEntry} />

      <EntriesSection>
        <TabBarEntries />
        <ListOfEntries />
      </EntriesSection>

      <Footer>
        <FooterText />
      </Footer>
    </>
  )
}


export default App
