/* eslint-disable react/prop-types */
import { dataJournalEntries } from '../data_JournalEntries.js';
import starEmpty from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'

export default function ListOfEntries({ journalEntries, onFavori }) {
    console.log("logging dataEntries var", dataJournalEntries)
    return (
        <>
            <ul className="list-of-entries">
                {journalEntries.map((journalEntry) => (
                    <li key={journalEntry.id} className='journalEntry-list-item'>
                        <h4 className="journalEntry-date">{journalEntry.date}</h4>

                        <button
                            className='FavIcon-button'
                            type='button'
                            onClick={() => onSwitchFavStatus(!favorised)}>

                            {favorised ? (
                                < img src={starEmpty} alt="empty-star" />
                            ) : (
                                < img src={starFilled} alt="empty-star" />
                            )}
                        </button >

                        <h2 className="journalEntry-motto">{journalEntry.title}</h2>
                        <p className="journalEntry-notes">{journalEntry.notes}</p>
                    </li>
                ))
                }
            </ul >
        </>
    )
}
