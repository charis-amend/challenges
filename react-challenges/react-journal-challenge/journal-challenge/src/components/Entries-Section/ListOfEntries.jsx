

import AnEntryInEntriesList from './AnEntryInEntriesList.jsx';
import { dataEntries } from '../data_JournalEntries.js';

// eslint-disable-next-line react/prop-types
export default function ListOfEntries() {
    console.log("logging dataEntries var", dataEntries)
    return (
        <>
            <section className="entries-section__list-of-entries">
                {dataEntries &&
                    dataEntries.map((entry) => {
                        return (
                            <AnEntryInEntriesList entry={entry} key={entry.id} />
                        )
                    })
                }
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