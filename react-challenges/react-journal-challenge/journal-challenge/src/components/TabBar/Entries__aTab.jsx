// eslint-disable-next-line react/prop-types
export default function OneTabInTabBar({ children }) {
    return (
        <>
            <section className="entries-tab__badge">
                {children}
            </section>
        </>
    )
}