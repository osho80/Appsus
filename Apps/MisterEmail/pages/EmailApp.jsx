const { Link, Route, Switch } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter


import EmailList from '../cmps/EmailList.jsx'
import emailService from '../EmailServices/emailService.js'
import EmailDetails from '../cmps/EmailDetails.jsx'
import EmailApp from '../pages/EmailApp.jsx'



export class Email extends React.Component {
    state = {
        emails: null,
        filterBy: null,
        selectedEmail: null,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        const emails = emailService.query()
        this.setState({ emails })
    }

    onSelectEmail = (selectedEmail) => {
        console.log('clicked');
        this.setState({ selectedEmail })

    }





    render() {
        // const { emails, selectedEmail } = this.state
        return (
            <Router>
            <main>
                <Switch>
                    <Route component={EmailDetails} path="/memail:theEmailId" />
                    <Route componenet={EmailApp} path="/memail" />
                </Switch>
                {/* {selectedEmail && <EmailDetails email={selectedEmail} />}
                {!selectedEmail && emails && < EmailList emails={emails} onSelectEmail={this.onSelectEmail} />} */}
            </main>
            </Router>

        )
    }

} 