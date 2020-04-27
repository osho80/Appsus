export class NoteTools extends React.Component {
    
    render() {
        const {note} = this.props
        console.log('note tools props:', note);
        
        return (
            <div className="note-tools">
                <input type="color" name="bcgColor" /> BCG
                <input type="color" name="bcgColor" /> TXT
                <select name="font" >font
                    <option value="david">David</option>
                    <option value="arial">Arial</option>
                </select>

            </div>
        )
    }
} 