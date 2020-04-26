export class NoteList extends React.Component {

    // displayDoneAt = () => {

    // }


    render() {
        const note = this.props
        return (
            <div className="list-note">
                <h1>{note.info.label}</h1>
                <table className="list-items">
                    <tbody>
                        {note.info.items.map((item, Idx) => <tr key={Idx}>
                            <td>{item.txt}</td>
                            <td>{item.doneAt}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}


