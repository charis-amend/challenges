// eslint-disable-next-line react/prop-types
export default function CountEntriesOfOneTab({ numberOfAllOrFavEntries }) {
    // const numberOfEntries = either number of total entries or favorited entries

    return (
        <>
            <p className="number-showing-count-of-entries">{numberOfAllOrFavEntries}</p>
        </>
    )
}