// eslint-disable-next-line react/prop-types
export default function FormInput({ inputField, labelForInput, nameOfInputField }) {
    return (
        <>
            <label className="form-input-label" htmlFor={nameOfInputField}>{labelForInput}</label>
            <input className="form-input-field" type="text" id={nameOfInputField} name={inputField} className="input-field" />
        </>
    );
}
