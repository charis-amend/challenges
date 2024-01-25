/* eslint-disable react/prop-types */
import starEmpty from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'
// import { useEffect } from 'react'


export default function ListOfEntries({ journalEntries, onSwitchFavStatus }) {
    // number all entries and referencing number of <li> list items in <ul></ul>
    //const [numberAllEntries, setNumberAllEntries] = useLocalStorageState(0);
    if (onSelectAllEntriesTab(journalEntries)
    )
        onSelectAllEntriesTab(journalEntries)
    return (
        <>
            <ul className="list-of-entries">
                {journalEntries.map((journalEntry) => (
                    <li key={journalEntry.id} className='journalEntry-list-item'>
                        <h4 className="journalEntry-date">{journalEntry.dayOfSubmission}</h4>

                        <button
                            className='FavIcon-button'
                            type='button'
                            onClick={() => onSwitchFavStatus?.(journalEntry)}>

                            {journalEntry.isFavorite ? (
                                <img src={starFilled} alt="filled-star" />
                            ) : (
                                <img src={starEmpty} alt="empty-star" />
                            )}
                        </button >

                        <p className="journalEntry-motto">{journalEntry.motto}</p>
                        <p className="journalEntry-notes">{journalEntry.notes}</p>
                    </li>
                ))
                }
            </ul >
        </>
    )
}
