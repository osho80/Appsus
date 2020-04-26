const { Link, Route } = ReactRouterDOM
import EmailList from '../cmps/EmailList.jsx'

state = {
    emails: null,
    filterBy: null,
}


export class Email extends React.Component {
    render() {
        const { emails } = this.state
        return (
            <section>

                {emails && < EmailList emails={emails}/>}
            </section>

        )
    }

} 