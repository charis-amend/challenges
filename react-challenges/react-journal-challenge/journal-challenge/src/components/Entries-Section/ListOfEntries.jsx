/* eslint-disable react/prop-types */
import starEmpty from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'
import { useEffect } from 'react'


export default function ListOfEntries({ journalEntries, onSwitchFavStatus, ulRef }) {
    // number all entries and referencing number of <li> list items in <ul></ul>
    const [numberAllEntries, setNumberAllEntries] = useLocalStorageState(0);
    const ulRef = useRef(null);

    function SwitchCountAllEntries() {
        useEffect(() => {
            if (ulRef.current) {
                const currentNumberOfListItems = ulRef.current.children.length
                setNumberAllEntries(currentNumberOfListItems)
                console.log(currentNumberOfListItems)
            }
        }, [])


    }

    return (
        <>
            <ul className="list-of-entries" ref={ulRef}>
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
