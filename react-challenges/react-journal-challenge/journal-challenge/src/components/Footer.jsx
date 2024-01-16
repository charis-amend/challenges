// eslint-disable-next-line react/prop-types
export default function Footer({ children }) {
    console.log("testing footer() component inside App() ")

    return (
        <>
            <footer className="footer">{children}</footer>
        </>
    )
}