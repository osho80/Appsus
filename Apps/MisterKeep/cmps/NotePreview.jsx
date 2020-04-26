import { NotesList } from "./NotesList";

export function NotePreview(props) {
    const { Link } = ReactRouterDOM
    const { note } = props
    console.log('notePreview props: ', note.type);
    
    state = {currCmp: null}

    componentDidMount() {
       
        this.setState({note}, ()=> 
        console.log('state is: ', state)
        )
        
    }




    // DynamicCmp = (note) => {
    //     switch (note.type) {
    //         case 'NoteText':
    //             return <NoteText {...note}/>
    //         case 'NoteImg':
    //             return <NoteImg {...note}/>
    //         case 'NoteList':
    //             return <NotesList {...note}/>
    //         case 'NoteVideo':
    //             return <NoteVideo {...note}/>
    //     }
    // }

    return (
        <div className="note-preview">
            <h2 className="note-type">
                {note.type}
            </h2>
            {/* <DynamicCmp currCmp={}/> */}
        </div>
    )
}