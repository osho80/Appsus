import storageService from '../../services/storageService.js'
import utilService from '../../services/utilService.js'

const KEEP_KEY = 'notes';

export default {
    query,
    getNoteIdxById,
    delNote,
    loadNotesFromStorage,
    addNoteToStorage
}
var gNotes = [
    {
        id: "OXeMG8",
        type: "NoteText",
        isPinned: true,
        info: {
            title: '',
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "1y0Oqt",
        type: "NoteImg",
        info: {
            url: "https://store-images.s-microsoft.com/image/apps.6632.13914979749842905.9c677d6d-da11-477f-bc18-b44258890dc0.890a1e33-f92c-4690-a684-3fa619396282",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "f4iuVm",
        type: "NoteList",
        info: {
            title: "How was it:",
            label: "How was it:",
            items: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

// saveNotesToStorage();

function saveNotesToStorage() {
    storageService.store(KEEP_KEY, gNotes)
}

function loadNotesFromStorage() {
    storageService.load(KEEP_KEY)
}

function _craeteNote() {
    console.log('Creating a note...');

}

// function _createEmails() {
//     gEmails = storageService.load(STORAGE_KEY, gDefaultEmails)
//     storageService.store(STORAGE_KEY, gEmails)
// }


function query() {
    //return gNotes;
    // debugger
    let notes = storageService.load(KEEP_KEY, gNotes)
    saveNotesToStorage();
    return notes
}

function getNoteIdxById(id) {
    var noteIdx;
    gNotes.find((note, Idx) => {
        if (id === note.id) noteIdx = Idx

    })
    return noteIdx
}

function delNote(id) {
    var noteIdxToDel = gNotes.findIndex(note => note.id === id)
    gNotes.splice(noteIdxToDel, 1);
    saveNotesToStorage()

}

function addNoteToStorage(note){
    console.log('saving note got: ', note);
    note.id = utilService.makeId();
    console.log('id note: ', note)
    gNotes.push(note);
    saveNotesToStorage()
    
    
}
