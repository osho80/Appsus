import emailService from '../EmailServices/emailService.js'
import utilService from '../../services/utilService.js'


export default class ComposeEmail extends React.Component {

    state = {
        email: {
            subject: '',
            body: '',
            id:'',
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
                    id: utilService.makeId()
                }
            }
        })
    }

    onSendEmail = (ev) => {
        ev.preventDefault()
        emailService.save(this.state.email)
            .then(savedEmail => {
                console.log('Email sent!', savedEmail);
                this.props.history.push('/memail')
            })
            .catch(err => {
                console.log('Error', err);

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
                <input type="text" value={email.body} onChange={this.handleInput} name="message" />
                <button>Send</button>

                <select name="" id="">
                    <option value="Img">Img</option>
                    <option value="Txt">Txt</option>
                    <option value="Video">Video</option>
                </select>
            </div>
        )
    }
}