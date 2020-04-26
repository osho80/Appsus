const { Link } = ReactRouterDOM

export default function CarPreview(props) {
    const { email } = props
    return (
        <Link to={`/memail/${email.id}`}>
            <article className="email-preview flex">
                <p className="subject">Title: {email.subject}</p>
                <p className="txt-body">{email.body}</p>
            </article>
        </Link>
    )
}