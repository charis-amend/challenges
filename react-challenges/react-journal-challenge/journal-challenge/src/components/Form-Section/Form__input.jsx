// eslint-disable-next-line react/prop-types
export default function FormInput({ inputField, labelForInput, nameOfInputField }) {
    return (
        <>
            <label htmlFor={nameOfInputField}>{labelForInput}</label>
            <input type="text" id={nameOfInputField} name={inputField} className="input-field" />
        </>
    );
}
