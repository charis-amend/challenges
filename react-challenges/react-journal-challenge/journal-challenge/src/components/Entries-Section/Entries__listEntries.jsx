import React from 'react';


import AnEntryInEntriesList from '../Entries-Section/Entries-list__anEntry.jsx';
import { dataEntries } from '../DataEntries.js';

// eslint-disable-next-line react/prop-types
export default function ListOfEntries({ children }) {
    console.log("logging dataEntries var", dataEntries)
    return (
        <>
            <section className="entries-section__list-of-entries">  {children}</section>

        </>
    )
}
