import emailService from '../EmailServices/emailService.js'
import utilService from '../../services/utilService.js'


export default class ComposeEmail extends React.Component {

    state = {
        email: {
            subject: '',
            body: '',
            id: '',
        }
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => {
            return {
                email: {
                    ...prevState.email,
                    [field]: value,
                }
            }
        })
    }

    onSendEmail = () => {
        emailService.save(this.state.email)
            .then(sentEmail => {
                console.log('email sent', sentEmail);
                this.props.history.push('/memail')
            })
            .catch(ERR => {
                console.log('Error, couldnt send the email', ERR);
            })


    }

    render() {
        const email = this.state
        return (
            <div>
                <form onSubmit={this.onSaveEmail}></form>
                <label>Subject:</label>
                <input autoFocus type="text" value={email.subject} onChange={this.handleInput} name="subject" />
                <label>Message:</label>
                <input type="text" value={email.body} onChange={this.handleInput} name="body" />
                <button onClick={this.onSendEmail}>Send</button>
            </div>
        )
    }
}