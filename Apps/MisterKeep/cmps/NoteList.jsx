export class NoteList extends React.Component {

    // displayDoneAt = () => {

    // }

    

    render() {
        const note = this.props
        var idx = 100;
        return (
            <div className="list-note">
                <h1>{note.info.title}</h1>
                {/* <h2>{note.info.label}</h2> */}
                <table className="list-items">
                    <tbody>
                        {note.info.items.map((item, Idx) => <tr key={Idx}>
                            <td><input type="checkbox" id={idx++}/></td>
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



