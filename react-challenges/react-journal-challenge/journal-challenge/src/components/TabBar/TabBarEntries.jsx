
// eslint-disable-next-line react/prop-types
export default function TabBarEntries({ numberAllEntries, numberFavEntries }) {
    return (
        <>
            <section className="tab-bar">
                <section className="all-entries-tab">
                    <h3 className="tab-title">All Entries</h3>
                    <div className="badge-for-count-of-entries">
                        <p id="count-font-color" className="number-showing-count-of-entries">{numberAllEntries}</p>
                    </div>
                </section>
                <section className="fav-entries-tab">
                    <h3 className="tab-title">Favorites</h3>
                    <div className="badge-for-count-of-entries">
                        <p className="number-showing-count-of-entries">{numberFavEntries}</p>
                    </div>
                </section>
            </section>
        </>
    )
}