import { NotesList } from "./NotesList";
const { Link } = ReactRouterDOM
const { note } = props

function DynamicCmp (note) {
    switch (note.type) {
        case 'NoteText':
            return <NoteText {...note}/>
        case 'NoteImg':
            return <NoteImg {...note}/>
        case 'NoteList':
            return <NotesList {...note}/>
        case 'NoteVideo':
            return <NoteVideo {...note}/>
    }
}


export class NotePreview extends React.Component {
      
    state = {currCmp: null}

    componentDidMount() {
       
        this.setState({currCmp: note}, ()=> 
        console.log('state is: ', state)
        )
        
    }




    render(){ 
        return (
            <div className="note-preview">
                <h2 className="note-type">
                    {note.type}
                </h2>
                <DynamicCmp currCmp={}/>
            </div>
        )
    }
}