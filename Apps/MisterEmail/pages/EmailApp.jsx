const { Link, Route } = ReactRouterDOM
import EmailList from '../cmps/EmailList.jsx'
import emailService from '../EmailServices/emailService.js'



export class Email extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        const emails = emailService.query()
        this.setState({ emails })
    }





    render() {
        const { emails } = this.state
        return (
            <section>

                {emails && < EmailList emails={emails} />}
            </section>

        )
    }

} 