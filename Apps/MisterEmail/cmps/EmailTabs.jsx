const { Link } = ReactRouterDOM


export class EmailTabs extends React.Component {


    render() {
        return (
            <section className="tabs flex direction-column ">
                <h1>email tabs</h1>
                <Link to="/memail/compose" className="email-decoration-none">Compose</Link>
                <Link to="/memail/starred" className="email-decoration-none">Starred</Link>
                <span>SENT MAIL</span>
            </section>
        )
    }
}