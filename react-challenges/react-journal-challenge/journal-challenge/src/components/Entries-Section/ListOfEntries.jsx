/* eslint-disable react/prop-types */
import starEmpty from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'

export default function ListOfEntries({ journalEntries, onSwitchFavStatus }) {
    return (
        <>
            <ul className="list-of-entries">
                {journalEntries.map((journalEntry) => (
                    <li key={journalEntry.id} className='journalEntry-list-item'>
                        <h4 className="journalEntry-date">{journalEntry.date}</h4>

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

                        <h2 className="journalEntry-motto">{journalEntry.motto}</h2>
                        <p className="journalEntry-notes">{journalEntry.notes}</p>
                    </li>
                ))
                }
            </ul >
        </>
    )
}
