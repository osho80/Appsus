const { Link } = ReactRouterDOM


import emailService from '../emailServices/emailService.js'
import EmailList from '../cmps/EmailList.jsx'
import {EmailTabs} from '../cmps/EmailTabs.jsx'




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

            <section className="email-main flex space-around">
                {<EmailTabs/>}
                {emails && <EmailList emails={emails} />}
            </section>


        )
    }

} 