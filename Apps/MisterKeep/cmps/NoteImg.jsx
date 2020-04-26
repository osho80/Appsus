export class NoteImg extends React.Component {
    render() {
        const note = this.props

        return (
            <div className="img-note">
                <img src={note.info.url}/>
                <h1>{note.info.title}</h1>
            </div>
        )
    }
}