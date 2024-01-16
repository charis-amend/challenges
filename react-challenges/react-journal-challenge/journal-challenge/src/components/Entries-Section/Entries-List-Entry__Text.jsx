// eslint-disable-next-line react/prop-types
export default function TextareaOfAnEntryInEntryList({ textareaFormInputFieldNotes }) {

    return (
        <>
            <textarea className="entries-list-entry__text">{textareaFormInputFieldNotes}</textarea>
        </>
    )
}