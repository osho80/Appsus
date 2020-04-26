import emailService from "../EmailServices/emailService.js"

export default class EmailDetails extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        const id = this.props.match.params.theEmailId
        emailService.getById(id)
            .then(email => {
                this.state({ email })
            })

    }

    render() {
        const { email } = this.props
        return (

            <div>
                <h2>{email.subject}</h2>
                <p>{email.body}</p>
            </div>
        )
    }
}