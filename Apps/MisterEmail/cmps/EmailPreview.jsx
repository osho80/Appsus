export default function CarPreview(props) {
    const { email } = props
    return (
        <article className="email-preview flex">
            <p className="subject">Title: {email.subject}</p>
            <p className="txt-body">{email.body}</p>
        </article>
    )
}