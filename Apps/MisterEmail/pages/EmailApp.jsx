const { Link } = ReactRouterDOM


import emailService from '../EmailServices/emailService.js'
import EmailList from '../cmps/EmailList.jsx'
// import EmailDetails from '../cmps/EmailDetails.jsx'
// import EmailApp from '../pages/EmailApp.jsx'



export class Email extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }

    onSelectEmail = (selectedEmail) => {
        console.log('clicked');
        this.setState({ selectedEmail })

    }





    render() {
        const { emails } = this.state
        return (

            <section>
                <Link to="/memail/compose">Compose</Link>
                {emails && <EmailList emails={emails} />}
            </section>


        )
    }

} 