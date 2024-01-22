import AnEntryInEntriesList from './AnEntryInEntriesList.jsx';
import { dataJournalEntries } from '../data_JournalEntries.js';


// eslint-disable-next-line react/prop-types
export default function ListOfEntries({ journalEntries }) {
    console.log("logging dataEntries var", dataJournalEntries)
    return (
        <>
            <section className="entries-section__list-of-entries">
                <ul>
                    {journalEntries &&
                        // eslint-disable-next-line react/prop-types
                        journalEntries.map((entry) => (
                            <li key={entry.id} >
                                <AnEntryInEntriesList
                                    id={entry.id}
                                    date={entry.date}
                                    motto={entry.motto}
                                    notes={entry.notes}
                                />
                            </li>
                        ))}
                </ul>
            </section>
        </>
    )
}

{/* I want here to display my cards. */ }
{/* If I use the {} in my arrow function I need the return */ }
// {
//     movies &&
//         movies.map((element) => {
//             return <Card movie={element} key={element.id} />;
//         })
// }