// eslint-disable-next-line react/prop-types
export default function FormTextarea({ textareaInput, labelOfTextarea, nameOfTextarea }) {
    return (
        <>
            <label htmlFor={textareaInput}>{labelOfTextarea}</label>
            <textarea id={textareaInput} name={nameOfTextarea} rows="10" cols="20">
            </textarea>
        </>
    )
}