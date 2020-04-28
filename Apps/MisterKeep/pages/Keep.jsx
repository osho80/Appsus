import keepService from '../keepServices/keepService.js'
import storageService from '../../services/storageService.js'
import { NotesList } from '../cmps/NotesList.jsx'
import { AddNote } from '../cmps/AddNote.jsx'
import { SearchNote } from '../cmps/SearchNote.jsx'
import { FilterBy } from '../cmps/FilterBy.jsx'

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


    onSearch = (str) => {
        let value = str.toLowerCase();
        this.setState({ search: value }, () => this.loadNotes());
    }

    onFilterBy = (value) => {
        console.log('onFilterBy got: ', value);
        this.setState({ filterBy: value }, () => this.loadNotes()); 
        //console.log('filter state: ', this.state.filterBy))
        //
    }

    loadNotes = () => {
        //const notes =
        //debugger 
        keepService.query(this.state.filterBy, this.state.search)
            .then(notes => {
                this.setState({ notes }, () => console.log('new State: ', this.state)
                )
            })
        // this.setState({ notes }, () => {
        //     console.log('new State: ', this.state);

        // })
    }

    onSelectNote = (selectedNote) => {
        this.setState({ selectedNote })
        console.log('selectedNote: ', selectedNote);

    }

    onDelNote = (id) => {
        keepService.delNote(id);
        this.loadNotes();

    }

    onSaveNote = (note) => {
        keepService.addNoteToStorage(note)
        this.loadNotes();
        console.log('onSaveNote is working...');

    }


    render() {
        const { notes, selectedNote } = this.state
        return (
            <main className="keep-main">
                <header className="keep-header">
                    <h1>My Brother's Keeper </h1>
                    <SearchNote onSearch={this.onSearch} />
                    <FilterBy onFilterBy={this.onFilterBy} />
                    <AddNote onSaveNote={this.onSaveNote} />

                    {/* <NavLink/> */}
                </header>
                <div className="juh">
                    {!selectedNote && notes &&
                        <NotesList onSelectNote={this.onSelectNote} onDelNote={this.onDelNote} notes={notes} />}

                </div>
            </main>


        )
    }

} 