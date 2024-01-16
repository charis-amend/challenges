
// eslint-disable-next-line react/prop-types
export default function EntriesSection({ Children }) {
    return (

        <>
            <section className="entriesSection">
                {Children}
            </section>
        </>
    )
}