export class NoteText extends React.Component {
    
    
    componentDidMount() {
        console.log('Note txt is mounted');
    }

    
    render(){
        const note = this.props
        console.log('note', note);
        
        return(
            
        <div className="txt-note" >

            <h1>{note.info.title}</h1>
            <h2>{note.info.txt}</h2>
        </div>
        )
    }
}