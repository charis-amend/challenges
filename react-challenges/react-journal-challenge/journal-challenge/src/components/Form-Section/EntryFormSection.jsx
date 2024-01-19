

// eslint-disable-next-line react/prop-types
export default function EntryFormSection() {
    // function SubmittingForm(submission) {
    //     submission.preventDefault();
    //     const formData = new formData(submission.target)
    //     const dataFormEntry = Object.fromEntries(formData)
    //     console.log(dataFormEntry);

    //     // function addJournalEntry(newjournalentry);
    //     submission.target.reset();
    //     submission.target.elements.inputField.focus();
    // }
    return (
        <section className="entryFormSection">
            <form>
                {/* <form onSubmit={handleSubmit}> */}
                <h2 className="title-form-new-entry">New Entry</h2>

                <label
                    className="form-label-motto"
                    htmlFor="form-input-motto">
                    Motto:
                </label>
                <input
                    className="form-input-motto"
                    type="text"
                    id="motto"
                    name="motto"
                />
                <label
                    className="form-label-notes"
                    htmlFor="form-textarea-notes">
                    Notes:
                </label>
                <textarea
                    className="form-textarea-notes"
                    id="notes"
                    name="notes"
                    rows="10" cols="20">
                </textarea>
                <button
                    type="submit"
                    value="Submit"
                    name="submit-button"
                    className="form__submitButton">
                    Add Journal Entry
                </button>
            </form>
        </section >

    )

}