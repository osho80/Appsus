const { Link } = ReactRouterDOM


import emailService from '../emailServices/emailService.js'
import EmailList from '../cmps/EmailList.jsx'
import { EmailTabs } from '../cmps/EmailTabs.jsx'
import EmailFilter from '../cmps/EmailFilter.jsx'



export class Email extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query(this.state.filterBy)
            .then(emails => {
                this.setState({ emails })
            })
    }

    onSelectEmail = (selectedEmail) => {
        console.log('clicked');
        this.setState({ selectedEmail })


    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadEmails())
    }



    render() {
        console.log(this.state.emails);

        const { emails } = this.state
        return (

            <section className="email-main flex space-around">
                {<EmailTabs />}
                {<EmailFilter onSetFilter={this.onSetFilter} />}
                {emails && <EmailList emails={emails} />}
            </section>


        )
    }

} 