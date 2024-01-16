

// eslint-disable-next-line react/prop-types
export default function EntryFormSection({ Children }) {

    return (
        <>
            <h3>New Entry</h3>
            <section className="entryFormSection">{Children}</section>
        </>
    )
}