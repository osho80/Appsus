const { Link } = ReactRouterDOM

export default function CarPreview(props) {
    const { email } = props
    return (
        <Link to={`/memail/${email.id}`} className="email-decoration-none">
            <article className="email-preview decoration-none">
                <h2 >From: {email.from}</h2>
                <p className="subject email-decoration-none">Title: {email.subject}</p>
                <p className="txt-body email-decoration-none">{email.body}</p>
            </article>
        </Link>
    )
}