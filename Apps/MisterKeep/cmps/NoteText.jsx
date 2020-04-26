export class NoteText extends React.Component {
    
    
    render(){
        const note = this.props
        console.log('note', note);
        
        return(
        <div className="txt-note">

            <h1>{note.info.txt}</h1>
        </div>
        )
    }
}