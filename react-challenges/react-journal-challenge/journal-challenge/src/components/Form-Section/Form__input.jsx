// eslint-disable-next-line react/prop-types
export default function FormInput({ inputField, labelForInput, nameOfInputField }) {

    return (
        <>
            <label htmlFor={inputField}>{labelForInput}</label>
            <input type="text" id={inputField} name={nameOfInputField} />
        </>
    )
}