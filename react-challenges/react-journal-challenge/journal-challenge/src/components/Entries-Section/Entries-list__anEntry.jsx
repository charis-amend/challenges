
import FavIconOfEntry from "./Entries-List-Entry__favIcon.jsx"
// eslint-disable-next-line react/prop-types
export default function AnEntryInEntriesList({ entry }) {
    return (

        <section className="entries-list__an-entry">
            <h4 className="entry-list-entry__date">{entry.date}</h4>

            <FavIconOfEntry />

            <h2 className="entries-list-entry__title">{entry.motto}</h2>


            <p className="entries-list-entry__text">{entry.notes}</p>
        </section>

    )
}