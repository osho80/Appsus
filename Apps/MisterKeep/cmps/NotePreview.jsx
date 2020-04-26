export function NotePreview(props) {
    const { Link } = ReactRouterDOM
    const { note } = props
    
    return (
        <div className="note-preview">
            <h2 className="note-type">
                {note.type}
            </h2>
        </div>
    )
}