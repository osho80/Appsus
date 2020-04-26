import {NoteText} from './NoteText.jsx'
import {NoteImg} from './NoteImg.jsx'
import {NoteList} from './NoteList.jsx'
import {NoteVideo} from './NoteVideo.jsx'

export function NotePreview(props) {
    // const { Link } = ReactRouterDOM
    const { note } = props

    const DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText {...note}/>
            case 'NoteImg':
                return <NoteImg {...note}/>
            case 'NoteList':
                return <NoteList {...note}/>
            case 'NoteVideo':
                return <NoteVideo {...note}/>
        }
    }

    return (
        <div className="note-preview">
            
            {DynamicCmp(note)}
        </div>
    )
}