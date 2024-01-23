import { uid } from 'uid'
import useLocalStorageState from 'use-local-storage-state'
import './App.css'
// import { dataJournalEntries } from './components/data_JournalEntries.js'
import Header from './components/Header.jsx'
import EntryFormSection from './components/Form-Section/EntryFormSection.jsx'
import TabBarEntries from './components/TabBar/Entries__tabBar.jsx'
import EntriesSection from './components/Entries-Section/EntriesSection.jsx'
import ListOfEntries from './components/Entries-Section/ListOfEntries.jsx'
import Footer from './components/Footer.jsx'
import FooterText from './components/Footer__text.jsx'


function App() {
  console.log("testing the app() function")
  // changing state of journal entries:
  const [journalEntries, setJournalEntries] = useLocalStorageState("journalEntries", { defaultValue: [] });

  function AddJournalEntry(newjournalentry) {
    setJournalEntries([...journalEntries, { ...newjournalentry, id: uid() }])
  }

  function SwitchFavStatus(entryToFavorise) {
    const updatedEntries = journalEntries.map(journalEntry => {
      if (journalEntry.id === entryToFavorise.id) {
        return {

          ...journalEntry, isFavorite: !journalEntry.isFavorite
        };
      } return journalEntry;
    });
    setJournalEntries(updatedEntries);
  }

  return (
    <>
      <Header />

      <EntryFormSection onAddJournalEntry={AddJournalEntry} />

      <EntriesSection>
        <TabBarEntries />
        <ListOfEntries
          journalEntries={journalEntries}
          onSwitchFavStatus={SwitchFavStatus}
        />
      </EntriesSection>

      <Footer>
        <FooterText />
      </Footer>
    </>
  )

}

export default App
