import { uid } from 'uid'
import useLocalStorageState from 'use-local-storage-state'
import './App.css'
// import { dataJournalEntries } from './components/data_JournalEntries.js'
import FormSection from './components/Form-Section/FormSection.jsx'
import TabBarEntries from './components/TabBar/TabBarEntries.jsx'
import ListOfEntries from './components/Entries-Section/ListOfEntries.jsx'


function App() {
  // changing state of journal entries:
  const [journalEntries, setJournalEntries] = useLocalStorageState("journalEntries", { defaultValue: [] });

  function AddJournalEntry(newjournalentry) {
    setJournalEntries([...journalEntries, { ...newjournalentry, id: uid() }])
  }
  console.log("array with  all the journalEntries-Objects:", journalEntries)

  function SwitchFavStatus(entryToFavorise) {
    const updatedEntries = journalEntries.map(journalEntry => {
      if (journalEntry.id === entryToFavorise.id) {
        return {

          ...journalEntry, isFavorite: !journalEntry.isFavorite
        };
      } return journalEntry;
    });
    setJournalEntries(updatedEntries);
    console.log("the updated Entries after SwitchFavStatus was run:", updatedEntries)
  }

  const numberAllEntries = journalEntries.length
  console.log("running CountAllEntries function:", numberAllEntries)
  const existingFavEntries = journalEntries.some((entry) => entry.isFavorite === true)
  console.log("Do Favorite Entries exist??? --->", existingFavEntries)


  const favJournalEntries = journalEntries.filter((entry) => entry.isFavorite === true)
  console.log("favJournalEntries:", favJournalEntries)

  const numberFavEntries = favJournalEntries.length;
  console.log("number of Favorite Entries:", numberFavEntries)

  function SelectAllEntriesTab() {
    journalEntries.
  }

  return (
    <>
      <p className="header__title"> 📓 </p>

      <FormSection onAddJournalEntry={AddJournalEntry} />

      <section className='entriesSection'>
        <TabBarEntries numberAllEntries={numberAllEntries} numberFavEntries={numberFavEntries} />
        <ListOfEntries
          journalEntries={journalEntries}
          onSwitchFavStatus={SwitchFavStatus}
        />
      </section>

      <footer>
        <p>journaling makes you happy. © Charis Amend</p>
      </footer>
    </>
  )

}

export default App
