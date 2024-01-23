// eslint-disable-next-line react/prop-types
export default function FormTextarea({ textareaInput, labelOfTextarea, nameOfTextarea }) {
    return (
        <>
            <label className="form-textarea-input-label" htmlFor={textareaInput}>{labelOfTextarea}</label>
            <textarea className="form-textarea-inputfield"
                id={textareaInput} name={nameOfTextarea} rows="10" cols="20">
            </textarea>
        </>
    )
}