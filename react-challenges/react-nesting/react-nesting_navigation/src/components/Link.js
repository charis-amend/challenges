// eslint-disable-next-line react/display-name
export default function Links({ href, children }) {
    return (
        <>
            <a className="navigation__link" href={href}>
                {children}
            </a>
        </>
    )
}