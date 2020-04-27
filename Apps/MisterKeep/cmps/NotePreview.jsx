import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteList } from './NoteList.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import keepService from '../keepServices/keepService.js'




// function onDelNote(note) {
//     var noteToDel = keepService.getNoteIdxById(note.id);
//     console.log('del: ', noteToDel);
//     keepService.delNote(noteToDel);
//     // keepService.loadNotesFromStorage();

// }

export function NotePreview(props) {
    // const { Link } = ReactRouterDOM
    const { note } = props

    const DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText {...note} />
            case 'NoteImg':
                return <NoteImg {...note} />
            case 'NoteList':
                return <NoteList {...note} />
            case 'NoteVideo':
                return <NoteVideo {...note} />
        }
    }

    
    return (
        <div className="note-preview">
            <button className="note-dlt-btn" onClick={()=>props.onDelNote(note.id)}>X</button>
            {DynamicCmp(note)}
        </div>
    )
}

// onClick={()=>onDelNote(note)}