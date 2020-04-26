import keepService from '../keepServices/keepService.js'
import storageService from '../../services/storageService.js'
import { NotesList } from '../cmps/NotesList.jsx'
import {AddNote} from '../cmps/AddNote.jsx'

const { NavLink, Route } = ReactRouterDOM



export class Keep extends React.Component {
    state = {
        notes: null,
        selectedNote: null,
        filterBy: null,
        search: null,
        noteIdToEdit: null
    }

    componentDidMount() {
        console.log('CMP Mounted');
        this.loadNotes();

    }

    loadNotes = () => {
        const notes = keepService.query();
        this.setState({ notes }, () => {
            console.log('State: ', this.state);

        })
    }

    onSelectNote = (selectedNote) => {
        this.setState({ selectedNote })
        console.log('selectedNote: ', selectedNote);

    }

    render() {
        const { notes, selectedNote } = this.state
        return (
            <main className="keep-main">
                <header className="keep-header">
                    <h1>My Brother's Keeper </h1>
                    <input type="text" placeholder="Search Notes" />
                    <select name="note-type" id="">

                    </select>
                    <AddNote/>
                    
                    {/* <NavLink/> */}
                </header>
                <div className="juh">
                    {!selectedNote && notes &&
                        <NotesList onSelectNote={this.onSelectNote} notes={notes} />}

                </div>
            </main>


        )
    }

} 