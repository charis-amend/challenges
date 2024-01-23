// eslint-disable-next-line react/prop-types
export default function EntryFormSection({ onAddJournalEntry }) {
    function SubmittingForm(submission) {
        submission.preventDefault();
        const formData = new FormData(submission.target)
        const dataFormEntry = Object.fromEntries(formData)
        const dayOfSubmission = new Date();
        const formattedDayOfSubmission = dayOfSubmission.toLocaleDateString();
        dataFormEntry.dayOfSubmission = formattedDayOfSubmission;
        dataFormEntry.isFavorite = false;
        console.log("dataFormEntry is:", dataFormEntry);

        onAddJournalEntry(dataFormEntry);
        submission.target.reset();
    }
    return (
        <form className="entryFormSection" onSubmit={SubmittingForm}>
            <h2 className="title-form-new-entry">New Entry</h2>

            <label
                className="form-label-motto"
                htmlFor="motto">
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
                htmlFor="notes">
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
                className="form__submitButton">
                Add Journal Entry
            </button>
        </form>


    )

}