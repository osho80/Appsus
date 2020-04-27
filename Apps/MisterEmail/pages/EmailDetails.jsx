const { Link } = ReactRouterDOM
import emailService from "../EmailServices/emailService.js"

export default class EmailDetails extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        const id = this.props.match.params.theEmailId
        // console.log(id);

        emailService.getById(id)
            .then(email => {
                this.setState({ email })
            })
    }

    removeEmail = () => {
        emailService.remove(this.state.email.id)
            .then(() => {
                this.props.history.push('/memail')
            })
            .catch(err => {
                alert('somthing went wrong')
                console.log('ERR', err);

            })
    }


    render() {
        const { email } = this.state
        return (
            <section className="email-details">
                {email && < div >
                    <h2>From: {email.from}</h2>
                    <h2>Subject: {email.subject}</h2>
                    <p>{email.body}</p>
                    <button onClick={this.removeEmail}>Delete</button>
                    <button ><Link to='/memail' className="email-decoration-none">Back</Link></button>
                </div >
                }

            </section>

        )
    }
}