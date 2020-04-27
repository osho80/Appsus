// import { AddText } from './AddText.jsx'
import { NoteTools } from './NoteTools.jsx'
import keepService from '../keepServices/keepService.js'
import services from '../../services/utilService.js'

export class AddNote extends React.Component {
    state = {
        isEditing: false,
        note: {
            type: 'NoteText',
            isPinned: false,
            info: {
                title: '',
                txt: '',
                url: ''
            },
            display: {
                bcgColor: '#ffffff',
                txtColor: '#000000'

            }
        }
    }



    handleInput = ({ target }) => {

        const field = target.name
        const value = target.value
        console.log('field: ', field);
        console.log('value: ', value);

        this.setState(prevState => {


            return {
                isEditing: true,
                note: { ...prevState.note, info: { ...prevState.note.info, [field]: value } }

            }
        }, () => console.log('note after setState: ', this.state)
        )
    }

    handleDispInput = ({ target }) => {

        const field = target.name
        const value = target.value
        console.log('field: ', field);
        console.log('value: ', value);

        this.setState(prevState => {


            return {
                isEditing: true,
                note: { ...prevState.note, display: { ...prevState.note.display, [field]: value } }

            }
        }, () => console.log('note after setState: ', this.state)
        )
    }

    onSave = () => {
        const { note } = this.state
        this.setState({isEditing: false}, ()=> {

            keepService.addNoteToStorage(note)
            
        })  
    }

    onDiscard = () => {
        //how do I clear input?
        console.log('Discarding...');
        this.setState({
            isEditing: false,
            note: {
                type: 'NoteText',
                isPinned: false,
                info: {
                    title: '',
                    txt: '',
                    url: ''
                },
                display: {
                    bcgColor: '#ffffff',
                    txtColor: '#000000'

                }
            }
        })
    }

    setNoteType = (noteType) => {
        //debugger
        const { note } = this.state

        this.setState(prevState => {
            return {

                note: { ...prevState.note, type: noteType }
            }
        })
    }

    render() {
        const { note } = this.state
        const { isEditing } = this.state
        console.log('mynote is: ', note);
        console.log('note info: ', note.info);


        return (
            <React.Fragment>
                <section className="add-note">
                    <div className="note-input">
                        {isEditing &&
                            <input type="text" className="note-title" placeholder="Title" name="title" onChange={this.handleInput} />}
                        <input type="text" placeholder="Add Note:" name="txt" onChange={this.handleInput} />
                        {(note.type === 'NoteImg') &&
                            <input type="text" className="note-img" placeholder="Enter image Url" name="url" onChange={this.handleInput} />}
                        {(note.type === 'NoteVideo') &&
                            <input type="text" className="note-video" placeholder="Enter video Url" name="url" onChange={this.handleInput} />}
                        {/* <input type="text" className="note-title" placeholder="Title" name="title" onChange={this.handleInput} hidden/> */}
                    </div>
                    <button onClick={() => this.setNoteType('NoteList')}>list</button>
                    <button onClick={() => this.setNoteType('NoteImg')}>img</button>
                    <button onClick={() => this.setNoteType('NoteVideo')}>Video</button>

                    {isEditing && <button onClick={() => this.onSave()}>Save</button>}
                    {isEditing && <button onClick={() => this.onDiscard()}>Discard</button>}
                </section>
                {isEditing && <NoteTools handleDispInput={this.handleDispInput} note={note} />}
            </React.Fragment>
        )
    }
}

