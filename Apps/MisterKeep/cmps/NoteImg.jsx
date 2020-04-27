export class NoteImg extends React.Component {
    render() {
        const note = this.props

        return (
            <div className="img-note">
                <h1>{note.info.title}</h1>
                <img src={note.info.url}/>
                {/* <h2>{note.info.title}</h2> */}
            </div>
        )
    }
}